import { useEffect, useRef } from "react";

export default function PaintBoard() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Initial canvas setup
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
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
