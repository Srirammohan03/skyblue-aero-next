"use client";

import { useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";

const ScrollToTop = () => {
  const router = useRouter();

  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [router]);

  return null;
};

export default ScrollToTop;