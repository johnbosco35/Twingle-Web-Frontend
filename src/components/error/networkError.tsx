import React, { useEffect, useRef } from "react";
import { toast } from "react-toastify";

interface NetworkErrorProps {
  children?: React.ReactNode;
  onRetry?: () => void;
}

const REMINDER_INTERVAL_MS = 30 * 60 * 1000;

const NetworkError: React.FC<NetworkErrorProps> = ({ children, onRetry }) => {
  const toastIdRef = useRef<string | number | null>(null);

  useEffect(() => {
    const dismissToast = () => {
      if (toastIdRef.current && toast.isActive(toastIdRef.current)) {
        toast.dismiss(toastIdRef.current);
      }
      toastIdRef.current = null;
    };

    const showOfflineToast = () => {
      dismissToast();
      toastIdRef.current = toast.error(
        <div className="space-y-1">
          <p className="font-semibold">No internet connection</p>
          <p className="text-sm text-black">
            Please check your connection. We’ll remind you again shortly.
          </p>
        </div>,
        {
          autoClose: false,
          closeOnClick: true,
          pauseOnHover: true,
          toastId: `network-offline-${Date.now()}`,
          onClick: () => {
            onRetry?.();
            window.location.reload();
          },
        },
      );
    };

    const handleOnline = () => {
      dismissToast();
    };

    const handleOffline = () => {
      if (!navigator.onLine) {
        showOfflineToast();
      }
    };

    const reminderInterval = window.setInterval(() => {
      if (!navigator.onLine) {
        showOfflineToast();
      }
    }, REMINDER_INTERVAL_MS);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    if (!navigator.onLine) {
      showOfflineToast();
    }

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      window.clearInterval(reminderInterval);
      dismissToast();
    };
  }, [onRetry]);

  return <>{children}</>;
};

export default NetworkError;
