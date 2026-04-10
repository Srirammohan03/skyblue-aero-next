"use client";

import "./globals.css";
import { useState } from "react";

import Providers from "./providers";

import Navigation from "@/components/global/Navigation";
import Footer from "@/components/global/Footer";
import FloatingActions from "@/components/global/FloatingActions";
import QuickQuoteModal from "@/components/global/QuickQuoteModal";
import GrainOverlay from "@/components/global/GrainOverlay";
import FlightLoader from "@/components/global/FlightLoader";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import BookCharterSheet from "@/components/global/BookCharterSheet";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [isCharterOpen, setIsCharterOpen] = useState(false);
  const [showNavLogo, setShowNavLogo] = useState(false);

  // ✅ Loader once per session
  const [isLoadingDone, setIsLoadingDone] = useState(() => {
    if (typeof window !== "undefined") {
      return sessionStorage.getItem("loaderShown") === "true";
    }
    return false;
  });

  const handleLoaderComplete = () => {
    setIsLoadingDone(true);
    sessionStorage.setItem("loaderShown", "true");
  };

  return (
    <html lang="en">
      <body>
        <Providers>

          {/* Loader */}
          {!isLoadingDone && (
            <FlightLoader
              onComplete={handleLoaderComplete}
              onLogoArrived={() => setShowNavLogo(true)}
            />
          )}

          {/* App */}
          <SmoothScrollProvider>
            <GrainOverlay />

            <Navigation
              onOpenQuote={() => setQuoteOpen(true)}
              showLogo={showNavLogo || isLoadingDone}
            />

            <FloatingActions
              onOpenCharter={() => setIsCharterOpen(true)}
            />

            <BookCharterSheet
              isOpen={isCharterOpen}
              onClose={() => setIsCharterOpen(false)}
            />

            <QuickQuoteModal
              open={quoteOpen}
              onClose={() => setQuoteOpen(false)}
            />

            {/* PAGE CONTENT */}
            {children}
          </SmoothScrollProvider>

          <Footer />

        </Providers>
      </body>
    </html>
  );
}