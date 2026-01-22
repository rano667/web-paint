import type { MutableRefObject } from "react";
import type { BrushConfig } from "../types/brush";

type Props = {
  brushRef: MutableRefObject<BrushConfig>;
};

export default function Toolbar({ brushRef }: Props) {
  return (
    <div className="toolbar">
      <button onClick={() => (brushRef.current.tool = "brush")}>Brush</button>

      <button onClick={() => (brushRef.current.tool = "eraser")}>Eraser</button>

      <label>
        Color
        <input
          type="color"
          defaultValue={brushRef.current.color}
          onChange={(e) => {
            brushRef.current.color = e.target.value;
          }}
          disabled={brushRef.current.tool === "eraser"}
        />
      </label>

      <label>
        Size
        <input
          type="range"
          min={1}
          max={40}
          defaultValue={brushRef.current.size}
          onChange={(e) => {
            brushRef.current.size = Number(e.target.value);
          }}
        />
      </label>
    </div>
  );
}
