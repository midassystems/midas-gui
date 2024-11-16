import './ReturnChart.css';
import React, { useEffect, useRef } from 'react';
import { createChart, CrosshairMode } from 'lightweight-charts';

/**
 * Renders a signal chart that displays trading signals overlaid on price data for different tickers.
 * This component utilizes the lightweight-charts library to render the chart. It groups price data
 * by ticker symbol, displays it as line series on the chart, and marks trading signals on these series
 * according to the signals data provided.
 * 
 * @param {Object} props - The component props.
 * @param {Array<{timestamp: number, return: number}>} props.strategy_data 
 * @param {Array<{timestamp: number, return: number}>} props.benchmark_data
 * 
 * @returns {React.ReactElement} A React component that displays the chart and a legend indicating the tickers present in the chart.
 */
function ReturnChart({ strategy_data, benchmark_data }) {
    const chartContainerRef = useRef(null);

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
        
        // Helper function to format your data for the chart
        const formatDataForChart = (data) => data.map(item => ({
            time: item.time,
            value: item.value,
        }));

        // Strategy Line
        const strategySeries = chart.addLineSeries({
            color: 'rgba(0, 150, 136, 1)', 
            lineWidth: 2,
        });
        strategySeries.setData(formatDataForChart(strategy_data));

        // Benchmark Line
        const benchmarkSeries = chart.addLineSeries({
            color: '#dddddd', // Example color for benchmark
            lineWidth: 2,
        });
        benchmarkSeries.setData(formatDataForChart(benchmark_data));

        // Update legend with strategy and benchmark labels
        legend.innerHTML = `
            <div style="margin-right: 10px;">
                <span style="color: rgba(0, 150, 136, 1);">●</span>
                <span style="color: white;">Strategy</span>
            </div>
            <div style="display: inline-block;">
                <span style="color: #dddddd;">●</span>
                <span style="color: white;">Benchmark</span>
            </div>
        `;
        chartContainerRef.current.appendChild(legend);

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
    }, [strategy_data, benchmark_data]);

    return (
        <div className="return-chart-container">
            <div className="return-chart-border-top"></div> 
            <div className="return-chart" ref={chartContainerRef}></div>
            <div className="chart-bottom-extension"></div>
        </div>   
    )
}

export default ReturnChart;
