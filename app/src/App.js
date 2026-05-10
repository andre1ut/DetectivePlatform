import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import RightRail from "./components/RightRail";
import RepliesPage from "./components/RepliesPage";

function App() {
  const [page, setPage] = useState("feed");

  return (
    <div className="app">
      <Header activePage={page} onNavigate={setPage} />
      {page === "feed" ? (
        <main className="layout">
          <Sidebar />
          <Feed />
          <RightRail />
        </main>
      ) : (
        <main className="layout layout-single">
          <RepliesPage />
        </main>
      )}
    </div>
  );
}

export default App;
