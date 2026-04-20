import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { useLoading } from "../context/LoadingProvider";
import "./styles/OrientationLock.css";

const ORIENTATION_LOCK_MAX_WIDTH = 900;

const OrientationLock = ({ children }: PropsWithChildren) => {
  const [isLocked, setIsLocked] = useState(false);
  const { setIsLoading, setLoading } = useLoading();

  const prevPortrait = useRef<boolean | null>(null);

  const updateOrientation = () => {
    const isSmallScreen = window.innerWidth <= ORIENTATION_LOCK_MAX_WIDTH;
    const isPortrait = window.matchMedia("(orientation: portrait)").matches;

    if (!isSmallScreen) {
      prevPortrait.current = null;
      setIsLocked(false);
      return;
    }

    if (isPortrait) {
      prevPortrait.current = true;
      setIsLocked(true);
      setIsLoading(false);
      return;
    }

    if (prevPortrait.current === true) {
      prevPortrait.current = false;
      setLoading(0);
      setIsLoading(true);
      window.scrollTo(0, 0);
      return;
    }

    setIsLocked(false);
  };

  const handleOrientationChange = () => {
    setTimeout(updateOrientation, 120);
  };

  useEffect(() => {
    updateOrientation();
    window.addEventListener("orientationchange", handleOrientationChange);
    window.addEventListener("resize", handleOrientationChange);

    const mq = window.matchMedia("(orientation: portrait)");
    const mediaListener = () => updateOrientation();
    if (mq.addEventListener) {
      mq.addEventListener("change", mediaListener);
    } else {
      mq.addListener(mediaListener);
    }

    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange);
      window.removeEventListener("resize", handleOrientationChange);
      if (mq.removeEventListener) {
        mq.removeEventListener("change", mediaListener);
      } else {
        mq.removeListener(mediaListener);
      }
    };
  }, []);

  return (
    <>
      <div className={`orientation-lock-overlay ${isLocked ? "active" : ""}`}>
        <div className="orientation-lock-message">
          <div className="orientation-lock-icon">📱</div>
          <h1>Rotate your phone</h1>
          <p>Please turn your device to landscape mode to view this site.</p>
          <p className="orientation-lock-tip">
            If you rotate back to portrait, the site will pause until you return to landscape.
          </p>
        </div>
      </div>
      <div className={isLocked ? "orientation-lock-hidden" : undefined}>
        {children}
      </div>
    </>
  );
};

export default OrientationLock;
