"use client";

import { useEffect, useState } from "react";

const GrainOverlay = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <div className="grain-overlay" aria-hidden="true" />;
};

export default GrainOverlay;