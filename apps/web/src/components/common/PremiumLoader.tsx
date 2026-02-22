"use client";

import React, { useState, useEffect } from 'react';

const PremiumLoader = () => {
  const [loadingText, setLoadingText] = useState('INITIALIZING SECURE CONNECTION');

  useEffect(() => {
    const texts = [
      'ESTABLISHING GEOFENCE...',
    //   'SYNCING WARD DATA...',
      'CONNECTING TO LIVE FEED...',
    //   'DECRYPTING OFFICER SIGNALS...',
      'INITIALIZING CIVICLOOP HUB...'
    ];
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % texts.length;
      setLoadingText(texts[i]);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0A0A0A]">
      
      {/* The Animated "Loop" Concept */}
      <div className="relative flex items-center justify-center w-32 h-32 mb-8">
        {/* Outer glowing ring */}
        <div className="absolute inset-0 w-full h-full border-t-2 border-b-2 border-blue-500 rounded-full animate-spin shadow-[0_0_15px_rgba(59,130,246,0.5)]" style={{ animationDuration: '3s' }}></div>
        {/* Inner dashed ring */}
        <div className="absolute w-24 h-24 border-r-2 border-l-2 border-dashed border-teal-400 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
        {/* Center pulsing core */}
        <div className="absolute w-12 h-12 bg-blue-600 rounded-full blur-[8px] animate-pulse"></div>
        <div className="absolute w-8 h-8 bg-blue-400 rounded-full shadow-[0_0_20px_#60A5FA]"></div>
      </div>

      {/* High-Tech Branding */}
      <h1 className="text-3xl font-bold tracking-[0.2em] text-white mb-2 uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
        Civic<span className="text-blue-500">Loop</span>
      </h1>

      {/* Dynamic Terminal Text */}
      <div className="flex items-center space-x-2 text-sm font-mono text-gray-400 tracking-widest">
        <span className="w-2 h-4 bg-teal-400 animate-pulse"></span>
        <p>{loadingText}</p>
      </div>

    </div>
  );
};

export default PremiumLoader;