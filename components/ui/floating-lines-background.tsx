"use client";

import { useEffect, useRef } from "react";

export interface FloatingGlobeLinesProps {
  color?: string;
  className?: string;
}

// Realistic continental polygons & bounds [minLat, maxLat, minLon, maxLon] in degrees
const CONTINENT_FEATURES = [
  // Europe
  { minLat: 36, maxLat: 71, minLon: -10, maxLon: 35 },
  // Scandinavia & UK
  { minLat: 50, maxLat: 70, minLon: -10, maxLon: 30 },
  // Russia / North Asia
  { minLat: 48, maxLat: 76, minLon: 35, maxLon: 180 },
  // East Asia (China, Korea, Japan)
  { minLat: 18, maxLat: 48, minLon: 75, maxLon: 145 },
  // South Asia / India
  { minLat: 8, maxLat: 35, minLon: 68, maxLon: 92 },
  // Southeast Asia & Indonesia
  { minLat: -10, maxLat: 20, minLon: 95, maxLon: 140 },
  // Middle East & Arabian Peninsula
  { minLat: 12, maxLat: 38, minLon: 34, maxLon: 62 },
  // North Africa
  { minLat: 15, maxLat: 37, minLon: -17, maxLon: 35 },
  // Central & South Africa
  { minLat: -35, maxLat: 15, minLon: 10, maxLon: 51 },
  // West Africa
  { minLat: 4, maxLat: 15, minLon: -17, maxLon: 15 },
  // North America
  { minLat: 25, maxLat: 72, minLon: -168, maxLon: -55 },
  // Central America
  { minLat: 7, maxLat: 25, minLon: -105, maxLon: -75 },
  // South America
  { minLat: -55, maxLat: 12, minLon: -81, maxLon: -35 },
  // Australia
  { minLat: -44, maxLat: -10, minLon: 112, maxLon: 154 },
  // New Zealand
  { minLat: -47, maxLat: -34, minLon: 166, maxLon: 178 },
];

function isLand(latDeg: number, lonDeg: number): boolean {
  for (const b of CONTINENT_FEATURES) {
    if (
      latDeg >= b.minLat &&
      latDeg <= b.maxLat &&
      lonDeg >= b.minLon &&
      lonDeg <= b.maxLon
    ) {
      return true;
    }
  }
  return false;
}

interface Particle {
  lat: number; // radians
  lon: number; // radians
  isLandMass: boolean;
  baseSize: number;
  alpha: number;
}

export function FloatingGlobeLines({
  color = "#12394a",
  className = "",
}: FloatingGlobeLinesProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    // Mouse coordinates with easing
    const mouse = {
      targetX: -1000,
      targetY: -1000,
    };

    const handleResize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Denser, realistic sand particle distribution using Fibonacci sphere
    const particleCount = 2800;
    const particles: Particle[] = [];
    const goldenRatio = (1 + Math.sqrt(5)) / 2;

    for (let i = 0; i < particleCount; i++) {
      const theta = (2 * Math.PI * i) / goldenRatio;
      const phi = Math.acos(1 - (2 * (i + 0.5)) / particleCount);

      // Convert phi & theta to degrees
      const latDeg = 90 - (phi * 180) / Math.PI;
      const lonDeg = ((theta * 180) / Math.PI) % 360 - 180;

      const land = isLand(latDeg, lonDeg);

      // Organic variation for sand grain sizes
      const randomJitter = (Math.random() - 0.5) * 0.4;

      particles.push({
        lat: phi - Math.PI / 2, // -PI/2 to PI/2
        lon: theta,
        isLandMass: land,
        baseSize: land ? 1.4 + randomJitter : 0.75 + randomJitter * 0.5,
        alpha: land ? 0.75 : 0.14,
      });
    }

    // Globe rotation parameters
    let rotationY = -0.9;
    let rotationX = 0.28; // tilted natural orbital perspective

    const render = () => {
      // Natural slow planetary rotation
      rotationY += 0.002;

      // Smooth interactive cursor tilt
      if (mouse.targetX > -500) {
        const targetRotY = ((mouse.targetX - width / 2) / (width / 2)) * 0.45;
        const targetRotX = ((mouse.targetY - height / 2) / (height / 2)) * 0.25 + 0.28;
        rotationY += (targetRotY - (rotationY % (Math.PI * 2))) * 0.02;
        rotationX += (targetRotX - rotationX) * 0.02;
      }

      ctx.clearRect(0, 0, width, height);

      // Globe centered on the left side
      const centerX = width > 1024 ? width * 0.22 : width * 0.5;
      const centerY = height * 0.52;
      const radius = Math.min(width, height) * 0.35;

      const cosX = Math.cos(rotationX);
      const sinX = Math.sin(rotationX);

      // Soft back-to-front depth sorting & spherical shading (no hard border)
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        const cosLat = Math.cos(p.lat);
        const sinLat = Math.sin(p.lat);
        const cosLon = Math.cos(p.lon + rotationY);
        const sinLon = Math.sin(p.lon + rotationY);

        // 3D coordinates on sphere
        const x0 = radius * cosLat * sinLon;
        const y0 = radius * sinLat;
        const z0 = radius * cosLat * cosLon;

        // Apply perspective tilt
        const y1 = y0 * cosX - z0 * sinX;
        const z1 = y0 * sinX + z0 * cosX;

        // Smooth horizon fade: particles gently dissolve near and behind the horizon
        // No hard cutoff and NO outer border line
        if (z1 < -radius * 0.2) continue;

        // Normalized depth (0 at back horizon, 1 at closest front apex)
        const depth = (z1 + radius * 0.2) / (radius * 1.2);
        const horizonFalloff = Math.max(0, Math.min(1, depth));

        const screenX = centerX + x0;
        const screenY = centerY + y1;

        // 3D perspective particle sizing
        const grainSize = p.baseSize * (0.6 + horizonFalloff * 0.5);

        ctx.beginPath();
        ctx.arc(screenX, screenY, Math.max(0.4, grainSize), 0, Math.PI * 2);

        // Spherical lighting gradient: lighter towards the front, fading naturally towards curvature
        const opacity = p.isLandMass
          ? p.alpha * horizonFalloff * 0.85 // prominent organic land sand
          : p.alpha * horizonFalloff * 0.45; // subtle oceanic curvature reference

        ctx.fillStyle = `rgba(18, 57, 74, ${opacity.toFixed(3)})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [color]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
}

// Backward-compatibility alias
export const FloatingLinesBackground = FloatingGlobeLines;
