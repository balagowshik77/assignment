import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="h-screen w-screen flex flex-row">
      <div className="sm:hidden md:block">
      <Sidebar />

      </div>
      <Main />
    </div>
  );
}

export default App;
