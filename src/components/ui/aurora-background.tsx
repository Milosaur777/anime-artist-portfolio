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
        "relative flex flex-col min-h-[100vh] items-center justify-center bg-[#0D0612] text-slate-950 transition-bg overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Base layer — static rainbow */}
        <div
          className={cn(
            "absolute -inset-[10px] opacity-70 will-change-transform blur-[10px]",
            showRadialGradient && "[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]"
          )}
          style={{
            backgroundImage: `
              repeating-linear-gradient(100deg, #000 0%, #000 7%, transparent 10%, transparent 12%, #000 16%),
              repeating-linear-gradient(100deg, #FF0080 10%, #FF8C00 15%, #FFD700 20%, #00FF88 25%, #00CCFF 30%, #9D4EDD 35%, #FF0080 40%)
            `,
            backgroundSize: "300%, 200%",
            backgroundPosition: "50% 50%, 50% 50%",
          }}
        />
        
        {/* Animated overlay layer — moving rainbow */}
        <div
          className={cn(
            "absolute -inset-[10px] opacity-60 will-change-transform blur-[10px] animate-aurora",
            showRadialGradient && "[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]"
          )}
          style={{
            backgroundImage: `
              repeating-linear-gradient(100deg, #000 0%, #000 7%, transparent 10%, transparent 12%, #000 16%),
              repeating-linear-gradient(100deg, #FF006E 10%, #FB5607 20%, #FFBE0B 30%, #8338EC 40%, #3A86FF 50%, #06FFB4 60%, #FF006E 70%)
            `,
            backgroundSize: "200%, 100%",
            backgroundPosition: "50% 50%, 50% 50%",
            backgroundAttachment: "fixed",
            mixBlendMode: "difference",
          }}
        />
      </div>
      
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
};
