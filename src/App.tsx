import PaintBoard from "./components/PaintBoard.tsx";
import Toolbar from "./components/Toolbar.tsx";

export default function App() {
  return (
    <div className="app">
      <Toolbar />
      <PaintBoard />
    </div>
  );
}
