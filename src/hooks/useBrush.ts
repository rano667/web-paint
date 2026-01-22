import { useRef } from "react";
import type { BrushConfig } from "../types/brush";

export function useBrush() {
  const brushRef = useRef<BrushConfig>({
    color: "#000000",
    size: 4,
    tool: "brush",
  });

  return brushRef;
}
