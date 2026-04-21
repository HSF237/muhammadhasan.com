import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { useLoading } from "../context/LoadingProvider";
import "./styles/OrientationLock.css";

const ORIENTATION_LOCK_MAX_WIDTH = 900;

const OrientationLock = ({ children }: PropsWithChildren) => {
  const [isLocked, setIsLocked] = useState(false);
  const [needsRefresh, setNeedsRefresh] = useState(false);
  const { setIsLoading } = useLoading();
  const lastOrientation = useRef<string>(window.matchMedia("(orientation: portrait)").matches ? "portrait" : "landscape");

  const updateOrientation = () => {
    const isSmallScreen = window.innerWidth <= ORIENTATION_LOCK_MAX_WIDTH;
    const isPortrait = window.matchMedia("(orientation: portrait)").matches;
    
    // Check if we just refreshed in landscape
    const hasRefreshed = sessionStorage.getItem("orientation_refreshed") === "true";

    if (!isSmallScreen) {
      setIsLocked(false);
      setNeedsRefresh(false);
      sessionStorage.removeItem("orientation_refreshed");
      return;
    }

    if (isPortrait) {
      setIsLocked(true);
      setNeedsRefresh(false);
      setIsLoading(false);
      sessionStorage.removeItem("orientation_refreshed");
      lastOrientation.current = "portrait";
      return;
    }

    // If we are in landscape...
    if (lastOrientation.current === "portrait" && !hasRefreshed) {
      // User just tilted to landscape, but hasn't refreshed yet
      setIsLocked(false);
      setNeedsRefresh(true);
    } else if (hasRefreshed) {
      // User has refreshed and is in landscape, let them in
      setIsLocked(false);
      setNeedsRefresh(false);
    } else {
      // Started in landscape or other case
      setIsLocked(false);
      setNeedsRefresh(false);
    }
  };

  const handleRefresh = () => {
    sessionStorage.setItem("orientation_refreshed", "true");
    window.location.reload();
  };

  useEffect(() => {
    updateOrientation();
    
    const handleResize = () => {
      setTimeout(updateOrientation, 200);
    };

    window.addEventListener("resize", handleResize);
    const mq = window.matchMedia("(orientation: portrait)");
    const mediaListener = () => updateOrientation();
    mq.addEventListener ? mq.addEventListener("change", mediaListener) : mq.addListener(mediaListener);

    return () => {
      window.removeEventListener("resize", handleResize);
      mq.removeEventListener ? mq.removeEventListener("change", mediaListener) : mq.removeListener(mediaListener);
    };
  }, []);

  return (
    <>
      <div className={`orientation-lock-overlay ${isLocked || needsRefresh ? "active" : ""}`}>
        {isLocked ? (
          <div className="orientation-lock-message">
            <div className="orientation-lock-icon">📱</div>
            <h1>Landscape Only</h1>
            <p>Please rotate your device to landscape mode to enter the experience.</p>
          </div>
        ) : (
          <div className="orientation-lock-message">
            <div className="orientation-lock-icon">✨</div>
            <h1>Ready to Explore</h1>
            <p>Rotation detected. Please refresh to initialize the cinematic experience.</p>
            <button className="refresh-button" onClick={handleRefresh}>
              REFRESH AND VIEW
            </button>
          </div>
        )}
      </div>
      {(isLocked || needsRefresh) ? null : children}
    </>
  );
};

export default OrientationLock;
