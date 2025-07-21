"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import React from "react";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => (
  <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
    {children}
  </NextThemesProvider>
);

export default ThemeProvider;
