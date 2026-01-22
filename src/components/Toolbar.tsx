import type { MutableRefObject } from "react";
import type { BrushConfig } from "../types/brush";

type Props = {
  brushRef: MutableRefObject<BrushConfig>;
};

export default function Toolbar({ brushRef }: Props) {
  return (
    <div className="toolbar">
      <label>
        Color
        <input
          type="color"
          defaultValue={brushRef.current.color}
          onChange={(e) => {
            brushRef.current.color = e.target.value;
          }}
        />
      </label>

      <label>
        Size
        <input
          type="range"
          min={1}
          max={30}
          defaultValue={brushRef.current.size}
          onChange={(e) => {
            brushRef.current.size = Number(e.target.value);
          }}
        />
      </label>
    </div>
  );
}
