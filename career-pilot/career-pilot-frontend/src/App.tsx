import BottomBackgroundHue from "./components/background/BottomBackgroundHue";

function App() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-[-1]">
        <BottomBackgroundHue />
      </div>
      <div className="min-h-screen grid grid-cols-2">
        <div className=""></div>
        <div className=""></div>
      </div>
    </div>
  );
}

export default App;
