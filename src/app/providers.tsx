"use client";

import * as React from "react";
import {
  ThemeProvider,
  type ThemeProviderProps as ProviderProps,
} from "next-themes";

export function Providers({ children, ...props }: ProviderProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      {children}
    </ThemeProvider>
  );
}
