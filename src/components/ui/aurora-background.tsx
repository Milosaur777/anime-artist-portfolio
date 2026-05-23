"use client";

import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col min-h-[100vh] items-center justify-center transition-bg overflow-hidden",
        className
      )}
      {...props}
    >
      {/* Base aurora layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={cn(
            "absolute -inset-[10px] opacity-50 will-change-transform",
            "blur-[10px]",
            showRadialGradient && "[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]"
          )}
          style={{
            backgroundImage: `
              repeating-linear-gradient(100deg, #0D0612 0%, #0D0612 7%, transparent 10%, transparent 12%, #0D0612 16%),
              repeating-linear-gradient(100deg, #3b82f6 10%, #a5b4fc 15%, #93c5fd 20%, #ddd6fe 25%, #60a5fa 30%)
            `,
            backgroundSize: "300%, 200%",
            backgroundPosition: "50% 50%, 50% 50%",
          }}
        />
        
        {/* Animated aurora overlay */}
        <div
          className={cn(
            "absolute -inset-[10px] opacity-50 will-change-transform animate-aurora",
            "blur-[10px] mix-blend-difference",
            showRadialGradient && "[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]"
          )}
          style={{
            backgroundImage: `
              repeating-linear-gradient(100deg, #0D0612 0%, #0D0612 7%, transparent 10%, transparent 12%, #0D0612 16%),
              repeating-linear-gradient(100deg, #3b82f6 10%, #a5b4fc 15%, #93c5fd 20%, #ddd6fe 25%, #60a5fa 30%)
            `,
            backgroundSize: "200%, 100%",
            backgroundPosition: "50% 50%, 50% 50%",
            backgroundAttachment: "fixed",
          }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
};
