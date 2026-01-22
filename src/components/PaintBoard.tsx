import { useEffect, useRef } from "react";
import type { MutableRefObject } from "react";
import type { BrushConfig } from "../types/brush";

type Props = {
  brushRef: MutableRefObject<BrushConfig>;
};

type Point = { x: number; y: number };

export default function PaintBoard({ brushRef }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isDrawingRef = useRef(false);
  const lastPointRef = useRef<Point | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Initial setup
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    // ctx.strokeStyle = "#000000";
    // ctx.lineWidth = 4;

    const getPoint = (e: PointerEvent): Point => {
      const rect = canvas.getBoundingClientRect();
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const onPointerDown = (e: PointerEvent) => {
      isDrawingRef.current = true;
      lastPointRef.current = getPoint(e);

      // Ensure first stroke uses latest brush
      ctx.strokeStyle = brushRef.current.color;
      ctx.lineWidth = brushRef.current.size;
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDrawingRef.current || !lastPointRef.current) return;

      const currentPoint = getPoint(e);

      ctx.beginPath();
      ctx.moveTo(lastPointRef.current.x, lastPointRef.current.y);
      ctx.lineTo(currentPoint.x, currentPoint.y);
      ctx.stroke();

      lastPointRef.current = currentPoint;
    };

    const onPointerUp = () => {
      isDrawingRef.current = false;
      lastPointRef.current = null;
    };

    canvas.addEventListener("pointerdown", onPointerDown);
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerup", onPointerUp);
    canvas.addEventListener("pointerleave", onPointerUp);

    return () => {
      canvas.removeEventListener("pointerdown", onPointerDown);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerup", onPointerUp);
      canvas.removeEventListener("pointerleave", onPointerUp);
    };
  }, []);

  return (
    <div className="canvas-container">
      <canvas
        ref={canvasRef}
        width={1200}
        height={700}
        className="paint-canvas"
      />
    </div>
  );
}
