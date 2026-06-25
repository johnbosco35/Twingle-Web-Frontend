import React, { useState, useEffect } from "react";

interface NetworkErrorProps {
  children?: React.ReactNode;
  onRetry?: () => void;
}

const NetworkError: React.FC<NetworkErrorProps> = ({ children, onRetry }) => {
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);
  const [showError, setShowError] = useState<boolean>(!navigator.onLine);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setShowError(false);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowError(true);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (!showError) {
    return <>{children}</>;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full animate-in fade-in zoom-in-95 border-t-4 border-yellow-500">
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-yellow-100">
            <svg
              className="w-10 h-10 text-yellow-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
              />
            </svg>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
          No Internet Connection
        </h2>

        <p className="text-gray-600 text-center mb-2">
          You appear to be offline. Please check your internet connection and
          try again.
        </p>

        <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-sm text-yellow-800">
            <span className="font-semibold">Status:</span>{" "}
            {isOnline ? "✓ Connected" : "✗ Disconnected"}
          </p>
        </div>

        <div className="mt-6 space-y-3">
          <button
            onClick={() => {
              onRetry?.();
              window.location.reload();
            }}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 rounded transition duration-200 active:scale-95"
          >
            Retry
          </button>

          <button
            onClick={() => setShowError(false)}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-2 px-4 rounded transition duration-200 active:scale-95"
          >
            Dismiss
          </button>
        </div>

        <p className="text-xs text-gray-500 text-center mt-4">
          The app will automatically reconnect when your internet is restored.
        </p>
      </div>
    </div>
  );
};

export default NetworkError;
