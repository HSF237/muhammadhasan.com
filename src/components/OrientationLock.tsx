import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { useLoading } from "../context/LoadingProvider";
import "./styles/OrientationLock.css";

const ORIENTATION_LOCK_MAX_WIDTH = 900;

const OrientationLock = ({ children }: PropsWithChildren) => {
  const [isLocked, setIsLocked] = useState(false);
  const [needsRefresh, setNeedsRefresh] = useState(false);
  const { setIsLoading } = useLoading();

  const updateOrientation = () => {
    const isSmallScreen = window.innerWidth <= ORIENTATION_LOCK_MAX_WIDTH;
    const isPortrait = window.matchMedia("(orientation: portrait)").matches;

    if (!isSmallScreen) {
      setIsLocked(false);
      setNeedsRefresh(false);
      return;
    }

    if (isPortrait) {
      setIsLocked(true);
      setNeedsRefresh(false);
      setIsLoading(false);
      return;
    }

    // If landscape on small screen
    setIsLocked(false);
    setNeedsRefresh(true);
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  const handleOrientationChange = () => {
    setTimeout(updateOrientation, 200);
  };

  useEffect(() => {
    updateOrientation();
    window.addEventListener("orientationchange", handleOrientationChange);
    window.addEventListener("resize", handleOrientationChange);

    const mq = window.matchMedia("(orientation: portrait)");
    const mediaListener = () => updateOrientation();
    mq.addEventListener ? mq.addEventListener("change", mediaListener) : mq.addListener(mediaListener);

    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange);
      window.removeEventListener("resize", handleOrientationChange);
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
      <div className={isLocked || needsRefresh ? "orientation-lock-hidden" : undefined}>
        {children}
      </div>
    </>
  );
};

export default OrientationLock;
