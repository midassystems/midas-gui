import React, { useEffect, useRef } from 'react';

const TradingViewTickerTape = () => {
  const tickerTapeContainerRef = useRef(null);

  useEffect(() => {
    const scriptId = 'tradingview-ticker-tape-script';  // Unique ID for the script tag

    // Function to load the TradingView script
    const loadScript = () => {
      if (!document.getElementById(scriptId) && tickerTapeContainerRef.current) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
        script.async = true;
        script.type = 'text/javascript';
        script.innerHTML = JSON.stringify({
          "height": "100%",
          "symbols": [
            { "proName": "FOREXCOM:SPXUSD", "title": "S&P 500 Index" },
            { "proName": "NASDAQ:NDX", "title": "NASDAQ 100 Index" },
            { "proName": "BITSTAMP:BTCUSD", "title": "Bitcoin" },
            { "proName": "BITSTAMP:ETHUSD", "title": "Ethereum" },
            { "proName": "COINBASE:SOLUSD", "title": "Solana" },
            { "proName": "BITSTAMP:XRPUSD", "title": "XRP" },
            { "proName": "COMEX:GC1!", "title": "Gold" },
            { "proName": "CBOT:ZS1!", "title": "Soybean" },
            { "proName": "CBOT:ZM1!", "title": "Soybean Meal" },
            { "proName": "CBOT:ZC1!", "title": "Corn" },
            { "proName": "CBOT:ZW1!", "title": "Wheat" },
            { "proName": "CME:HE1!", "title": "Lean Hogs" },
            { "proName": "NYMEX:CL1!", "title": "Crude Oil" },
            { "proName": "NYMEX:NG1!", "title": "Natural Gas" }
          ],
          "showSymbolLogo": false,
          "colorTheme": "dark",
          "isTransparent": true,
          "displayMode": "compact",
          "locale": "en",
          "largeChartUrl": "#"
        });

        tickerTapeContainerRef.current.appendChild(script);
      }
    };

    loadScript();

    return () => {
      // Cleanup script to avoid memory leaks
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div ref={tickerTapeContainerRef} className="tradingview-ticker-tape-container">
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
};

export default TradingViewTickerTape;
