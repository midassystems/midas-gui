import React, { useEffect, useRef } from 'react';
import { createChart, CrosshairMode } from 'lightweight-charts';
import './ChartTab.css'; // Assuming this contains necessary CSS for the chart container

export const ChartTab = ({ data }) => {
  const chartContainerRef = useRef(null);

  useEffect(() => {
    if (chartContainerRef.current) {
      const chartOptions = {
        handleScale: {
          axisPressedMouseMove: true,
        },
        layout: {
          backgroundColor: '#253248',
          textColor: 'rgba(255, 255, 255, 0.9)',
        },
        grid: {
          vertLines: {
            color: '#334158',
          },
          horzLines: {
            color: '#334158',
          },
        },
        crosshair: {
          mode: CrosshairMode.Normal,
        },
        priceScale: {
          borderColor: '#485c7b',
        },
        timeScale: {
          borderColor: '#485c7b',
          timeVisible: true,
          secondVisible: false,
        },
      };

      // Create chart at chartContainerRef with those options
      const chart = createChart(chartContainerRef.current, chartOptions);
      chart.timeScale().fitContent();

      // Create a candlestick series
      const candlestickSeries = chart.addCandlestickSeries();
      
      // Assuming `data` is an array of candlestick data in the format lightweight-charts expects
      if (data && data.length > 0) {
        candlestickSeries.setData(data);
      }

      // Resize observer to adjust chart size on container resize
      const resizeObserver = new ResizeObserver(entries => {
        chart.applyOptions({
          width: chartContainerRef.current.clientWidth,
          height: chartContainerRef.current.clientHeight,
        });
      });

      resizeObserver.observe(chartContainerRef.current);

      return () => {
        resizeObserver.disconnect();
        chart.remove();
      };
    }
  }, [data]); // Re-run effect if `data` changes

  return (
    <div className="chartTab_outer">
      <div className="chartTab_container">
        <div ref={chartContainerRef} style={{ width: '100%', height: '100%' }}>
        </div>
      </div>
    </div>
  );
};

export default ChartTab;
