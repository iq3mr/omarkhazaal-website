"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";

export default function DraggableEye() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const initialPosRef = useRef({ x: 0, y: 0 });

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // Capture pointer so mouse/finger drag continues seamlessly even at high speeds
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // Fallback if pointer capture is restricted
    }
    setIsDragging(true);
    dragStartRef.current = { x: e.clientX, y: e.clientY };
    initialPosRef.current = { ...position };
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;
    setPosition({
      x: initialPosRef.current.x + dx,
      y: initialPosRef.current.y + dy,
    });
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging) {
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {
        // Fallback
      }
      setIsDragging(false);
    }
  };

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0px) rotate(-6deg)`,
        touchAction: "none",
        userSelect: "none",
        WebkitUserSelect: "none",
        cursor: isDragging ? "grabbing" : "grab",
      }}
      className={`
        relative
        inline-block
        will-change-transform
        transition-shadow
        duration-150
        my-6
        ${isDragging ? "scale-105 shadow-2xl z-50" : "hover:scale-102 shadow-xl z-30"}
      `}
    >
      <div className="p-4 sm:p-5 rounded-3xl bg-white border-2 border-neutral-900 shadow-xl hover:border-red-600 transition-colors">
        <Image
          src="/eye.webp"
          alt="شعار عين عمر خزعل"
          width={220}
          height={220}
          priority
          sizes="(max-width: 640px) 140px, (max-width: 768px) 180px, 220px"
          className="
            w-32
            sm:w-44
            md:w-52
            h-auto
            drop-shadow-md
            pointer-events-none
            select-none
          "
          draggable={false}
        />
      </div>
    </div>
  );
}
