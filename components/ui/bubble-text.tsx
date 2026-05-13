"use client"

import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface BubbleTextProps {
  text: string;
  className?: string;
}

export const BubbleText = ({ text, className }: BubbleTextProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <span
      // Reiniciamos el índice cuando el ratón sale de la palabra
      onMouseLeave={() => setHoveredIndex(null)}
      className={cn("inline-flex", className)}
    >
      {text.split("").map((char, idx) => {
        // Calculamos la distancia desde la letra que estamos tocando
        const distance = hoveredIndex !== null ? Math.abs(hoveredIndex - idx) : null;
        
        // Clases base para todas las letras
        let classes = "transition-all duration-300 ease-in-out cursor-default inline-block ";
        
        // Aplicamos distintos grosores y colores según la distancia
          switch (distance) {
          case 0: // La letra que tocas
            classes += " font-black text-white -translate-y-1 scale-110"; // <-- Cambiado a text-white
            break;
          case 1: // Las vecinas inmediatas
            classes += " font-bold text-white/90 -translate-y-0.5 scale-105"; // <-- Cambiado a text-white/90
            break;
          case 2: // Las segundas vecinas
            classes += " font-semibold text-white/70"; // <-- Cambiado a text-white/70
            break;
          default: // El resto de letras
            classes += " font-light text-white/40"; // <-- Cambiado a text-white/40
            break;
        }

        return (
          <span
            key={idx}
            onMouseEnter={() => setHoveredIndex(idx)}
            className={classes}
          >
            {/* Usamos un espacio de no separación para que los espacios no colapsen */}
            {char === " " ? "\u00A0" : char}
          </span>
        );
      })}
    </span>
  );
};