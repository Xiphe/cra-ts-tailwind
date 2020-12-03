import logo from "./logo.svg";
// import "./App.css";

export default function App() {
  return (
    <div className="text-center">
      <header className="bg-gray-900 min-h-screen flex flex-col items-center justify-center text-2xl text-white">
        <img
          src={logo}
          className="w-2/5 motion-safe:animate-spin-really-slow"
          alt="logo"
        />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="text-blue-400"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
