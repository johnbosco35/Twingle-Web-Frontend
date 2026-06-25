import { SWRConfiguration } from "swr";

// Custom fetcher for SWR
export const fetcher = async (url: string) => {
  const response = await fetch(url);

  if (!response.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.cause = response.status;
    throw error;
  }

  return response.json();
};

// SWR configuration with background refresh and optimizations
export const swrConfig: SWRConfiguration = {
  // Revalidate after 5 minutes of inactivity
  revalidateOnFocus: true,
  focusThrottleInterval: 300000, // 5 minutes

  // Revalidate when window regains focus
  revalidateOnReconnect: true,

  // Revalidate on mount
  revalidateOnMount: true,

  // Background refresh: revalidate in the background even when stale
  refreshInterval: 1000 * 60, // 1 minute

  // Stale time before considering data as stale
  dedupingInterval: 60000, // 1 minute - prevents duplicate requests

  // Error retry settings
  errorRetryCount: 3,
  errorRetryInterval: 5000, // 5 seconds

  // Max size of cache
  compare: (a, b) => JSON.stringify(a) === JSON.stringify(b),

  // Custom fetcher function
  fetcher: fetcher,

  // Keep previous data while revalidating in background
  keepPreviousData: true,
};

// Configuration for aggressive background refresh (real-time data)
export const swrConfigRealTime: SWRConfiguration = {
  ...swrConfig,
  refreshInterval: 5000, // 5 seconds for real-time updates
  dedupingInterval: 2000, // 2 seconds
};

// Configuration for less frequent updates (static data)
export const swrConfigStatic: SWRConfiguration = {
  ...swrConfig,
  refreshInterval: 0, // Disabled automatic refresh
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
  dedupingInterval: 600000, // 10 minutes
};
