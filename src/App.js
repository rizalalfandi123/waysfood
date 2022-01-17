import { Outlet } from "react-router";

function App() {
  const elements = (
    <div className="flex-container">
      <Outlet />
    </div>
  );
  return elements;
}

export default App;
