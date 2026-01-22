import PaintBoard from "./components/PaintBoard";
import Toolbar from "./components/Toolbar";
import { useBrush } from "./hooks/useBrush";

export default function App() {
  const brushRef = useBrush();

  return (
    <div className="app">
      <Toolbar brushRef={brushRef} />
      <PaintBoard brushRef={brushRef} />
    </div>
  );
}
