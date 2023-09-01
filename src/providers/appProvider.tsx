import React from "react";
import { CircularProgress } from "@mui/material";
import { ErrorBoundary } from "react-error-boundary";
import { HelmetProvider } from "react-helmet-async";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../lib/react-query";
import { BrowserRouter as Router } from "react-router-dom";
import Custom500 from "../components/Custom500";
import { AuthProvider } from "./authProvider";

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense fallback={<CircularProgress />}>
      <ErrorBoundary FallbackComponent={Custom500}>
        <HelmetProvider>
          <QueryClientProvider client={queryClient}>
            <AuthProvider>
              <Router>{children}</Router>
            </AuthProvider>
          </QueryClientProvider>
        </HelmetProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
};
