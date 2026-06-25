// src/utils/withSuspense.ts
import React, { Suspense } from "react";
import Spinner from "@/components/common/Spinner";

export const withSuspense = (Component: React.ComponentType) => (
  <Suspense fallback={<Spinner />}>
    <Component />
  </Suspense>
);