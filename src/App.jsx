// App.jsx
// import React from "react";
// import RouteHandler from "./components/RouteHandler.jsx";
// import { BrowserRouter as Router} from "react-router-dom";

// function App() {
//   return (
//     <Router>
//       <RouteHandler />
//     </Router>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import NewsPage from "./components/News/NewsPage.jsx";
import Sidebar from "./components/SideBar/Sidebar.jsx";
import LiveDashboard from "./components/Live/Dashboard.jsx";
import BacktestDashboard from "./components/Backtest/Dashboard.jsx";
import { LiveProvider } from "./contexts/LiveContext.jsx";
import TradingViewTickerTape from "./components/TradingView/TickerTape/TickerTape.jsx";
import MarketsDashboard from "./components/Market/Market.jsx";
import "./App.css"; // Assuming you're using CSS

function App() {
  return (
    <Router>
      <div className="grid-container">
        <Sidebar />  {/* Sidebar that stays on every page */}
        <div className="ticker-tape">
          <TradingViewTickerTape />  {/* The ticker tape that stays on every page */}
        </div>
        {/* <MarketDashboardProvider> */}
        <LiveProvider>
          <Routes>
            <Route path="/" element={<Navigate to="/news" />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/backtest" element={<BacktestDashboard />} />
            <Route path="/live" element={<LiveDashboard />} />
            <Route path="/market" element={<MarketsDashboard />} />
          </Routes>
        </LiveProvider>
        {/* </MarketDashboardProvider> */}
      </div>
    </Router>
  );
}

export default App;

