import './SignalChart.css';
import React, { useEffect, useRef} from 'react';
import { createChart, CrosshairMode } from 'lightweight-charts';


const colors = ['white', 'gray', 'red', 'orange', 'purple', 'cyan', 'magenta'];

/**
 * Gets a color from a predefined set based on the index.
 * @param {string} ticker - The ticker symbol (unused in the function but kept for clarity).
 * @param {number} index - The index used to select the color.
 * @returns {string} The selected color.
 */
const getColorForTicker = (ticker, index) => {
    return colors[index % colors.length];
}

/**
 * Groups price data by the ticker symbol.
 * 
 * @param {Array<{timestamp: string, symbol: string, close: number}>} priceData - An array of price data objects.
 * @returns {Object} An object with ticker symbols as keys and arrays of price data as values.
 */
const groupPriceDataByTicker = (priceData) => {
    return priceData.reduce((acc, item) => {
        acc[item.symbol] = acc[item.symbol] || [];
        acc[item.symbol].push(item);
        return acc;
    }, {});
  };
  
/**
 * Flattens the signals data structure, mapping trade instructions to their respective timestamps.
 * 
 * @param {Array<{timestamp: string, trade_instructions: Array<{ticker: string, direction: string}>}>} signalsData - An array of signal data objects.
 * @returns {Array<Object>} A flat array where each instruction is associated with its timestamp.
 */
const flattenSignals = (signalsData) => {
    return signalsData.flatMap(signal =>
        signal.trade_instructions.map(instruction => ({
            ...instruction,
            time: signal.time
        }))
    );
};

/**
 * Creates a marker object for a trading signal, specifying its appearance on the chart.
 * 
 * @param {{time: number, action: string, direction: string}} signal - A signal object containing the time, action, and direction of the trade.
 * @returns {Object} A marker object with properties defining its appearance on the chart.
 */
const createMarkerForSignal = (signal) => ({
    time: signal.time,
    position: 'aboveBar',
    color:  (signal.action === 'LONG' || signal.action === "COVER") ? 'green' : 
            (signal.action === 'SHORT' || signal.action === "SELL") ? 'red' : 
            'yellow',
    shape:  (signal.action === 'LONG' || signal.action === "COVER") ? 'arrowUp' : 
            (signal.action === 'SHORT' || signal.action === "SELL") ? 'arrowDown' : 
            'circle',
    text: signal.action,
});

/**
 * Renders a signal chart that displays trading signals overlaid on price data for different tickers.
 * This component utilizes the lightweight-charts library to render the chart. It groups price data
 * by ticker symbol, displays it as line series on the chart, and marks trading signals on these series
 * according to the signals data provided.
 * 
 * @param {Object} props - The component props.
 * @param {Array<{timestamp: number, symbol: string, close: number}>} props.price_data - An array of price data objects, each containing a timestamp (Unix format), symbol (ticker), and close (closing price) properties.
 * @param {Array<{timestamp: number, trade_instructions: Array<{ticker: string, action: string}>}>} props.signals_data - An array of signals data objects, each containing a timestamp and an array of trade instructions. Each instruction includes a ticker and an action ('LONG', 'SHORT', 'COVER', 'SELL', etc.).
 * 
 * @returns {React.ReactElement} A React component that displays the chart and a legend indicating the tickers present in the chart.
 */
function SignalChart({ price_data, signals_data }) {
    const chartContainerRef = useRef(null);
    console.log(price_data)
    console.log(signals_data)

    useEffect(() => {
        if (!chartContainerRef.current) return;
        
        // Chart Formatting
        const chartOptions = {
            handleScale: {
                axisPressedMouseMove: true
            },
            layout: {
                background: {
                    color: '#000000'
                  },
                  textColor: 'rgba(197, 203, 206, 1)',
            },
            grid: {
                vertLines: {
                    color: '#5f5f5f',
                },
                horzLines: {
                    color: '#5f5f5f',
                },
            },
            crosshair: {
                mode: CrosshairMode.Normal,
    
            },
            leftPriceScale: {
                visible: true,
                ticksVisible: true,
                textColor: 'rgba(197, 203, 206, 1)',
                borderColor: 'rgba(197, 203, 206, 1)',
            },
            rightPriceScale: {
                visible: true,
                ticksVisible: true,
                textColor: 'rgba(197, 203, 206, 1)',
                borderColor: 'rgba(197, 203, 206, 1)',
            },
            width: chartContainerRef.current.clientWidth,
            height: chartContainerRef.current.clientHeight,
            timeScale: {
                borderColor: 'rgba(197, 203, 206, 1)',
                textColor: 'rgba(197, 203, 206, 1)',
                timeVisible: true,
                secondVisible: false,
            }
          };
    
    
        // Create chart with options
        const chart = createChart(chartContainerRef.current, chartOptions);
        chart.timeScale().fitContent();

        // Create the legend element
        const legend = document.createElement('div');
        legend.style = `position: absolute;left: 60px; top: 12px; z-index: 1; 
                        font-size: 14px; font-family: sans-serif; line-height: 18px; 
                        font-weight: 300; color: white;`;
        chartContainerRef.current.appendChild(legend);

        const groupedByTicker = groupPriceDataByTicker(price_data);

        let legendHTML = '';

        Object.keys(groupedByTicker).forEach((ticker, index) => {
            const color = getColorForTicker(ticker, index);
            const series = chart.addLineSeries({
                color,
                lineWidth: 2,
            });

            const tickerData = groupedByTicker[ticker].map(item => ({
                time: item.time,
                value: item.close,
            }));

            series.setData(tickerData);

            const flattenedSignals = flattenSignals(signals_data);
            
            // Set Signals
            const tickerMarkers = flattenedSignals
                    .filter(signal => signal.ticker === ticker)
                    .map(createMarkerForSignal);

            series.setMarkers(tickerMarkers);
            
            legendHTML += `<div style=" margin-right: 10px;">
                            <span style="color: ${color};">● </span>
                            <span style="color: white;">${ticker}</span>
                        </div>`;
            });

        legend.innerHTML = legendHTML;

        // Resize observer to make the chart responsive
        const resizeObserver = new ResizeObserver(entries => {
            if (entries.length > 0) {
                const { width, height } = entries[0].contentRect;
                chart.applyOptions({ width, height });
            }
        });
        resizeObserver.observe(chartContainerRef.current);

        return () => {
            resizeObserver.disconnect();
            legend.remove();
            chart.remove();
        };
    }, [price_data, signals_data]);

    return (
        <div className="signal-chart-container">
            <div className="signal-chart-border-top"></div> 
            <div className="signal-chart" ref={chartContainerRef}></div>
            <div className="chart-bottom-extension"></div>
        </div>   
    )
}

export default SignalChart;
