"use client";
import React, { useState } from "react";
import * as echarts from "echarts";
import { CallbackDataParams } from 'echarts/types/dist/shared';
import Header from "./components/Header";
import Footer from "./components/Footer";
import IncidentHistory from "./components/IncidentHistory";
import CurrentStatus from "./components/CurrentStatus";

const App: React.FC = () => {
  const [selectedTimeline, setSelectedTimeline] = useState("24h");
  const timeFilters: string[] = ["24h", "7d", "30d", "90d"];
  React.useEffect(() => {
    const chartDom = document.getElementById("performance-chart");
    if (chartDom) {
      const myChart = echarts.init(chartDom);

      const option = {
        animation: false,
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          top: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "00:00",
            "03:00",
            "06:00",
            "09:00",
            "12:00",
            "15:00",
            "18:00",
            "21:00",
            "24:00",
          ],
          axisLine: {
            lineStyle: {
              color: "#ddd",
            },
          },
          axisLabel: {
            color: "#666",
          },
        },
        yAxis: {
          type: "value",
          name: "Response Time (ms)",
          nameTextStyle: {
            color: "#666",
          },
          axisLine: {
            lineStyle: {
              color: "#ddd",
            },
          },
          axisLabel: {
            color: "#666",
          },
          splitLine: {
            lineStyle: {
              color: "#eee",
            },
          },
        },
        series: [
          {
            name: "API Response Time",
            type: "line",
            smooth: true,
            data: [120, 132, 101, 134, 90, 230, 210, 120, 132],
            lineStyle: {
              color: "#10b981",
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgba(16, 185, 129, 0.3)",
                },
                {
                  offset: 1,
                  color: "rgba(16, 185, 129, 0.05)",
                },
              ]),
            },
            symbol: "circle",
            symbolSize: 6,
            itemStyle: {
              color: "#10b981",
            },
          },
        ],
        tooltip: {
          trigger: "axis",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderColor: "#eee",
          borderWidth: 1,
          textStyle: {
            color: "#333",
          },
          formatter: function (params: CallbackDataParams | CallbackDataParams[]) {
            if (Array.isArray(params)) {
              const data = params[0];
              return `${data.name}<br/>${data.seriesName}: ${data.value} ms`;
            }
            return `${params.name}<br/>${params.seriesName}: ${params.value} ms`;
          },
        },
      };

      myChart.setOption(option);

      const handleResize = () => {
        myChart.resize();
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        myChart.dispose();
      };
    }
  }, [selectedTimeline]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <CurrentStatus />
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Performance Metrics</h2>
              <div className="flex space-x-2">
                {timeFilters.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTimeline(time)}
                    className={`px-3 py-1.5 text-sm font-medium rounded-button whitespace-nowrap cursor-pointer ${
                      selectedTimeline === time
                        ? "bg-gray-800 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                <span className="text-sm font-medium">API Response Time</span>
                <span className="ml-auto text-sm font-medium">132 ms</span>
              </div>
              <div id="performance-chart" className="w-full h-64"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="text-sm text-gray-500 mb-1">
                  Average Response Time
                </div>
                <div className="text-2xl font-semibold">143 ms</div>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="text-sm text-gray-500 mb-1">
                  99th Percentile
                </div>
                <div className="text-2xl font-semibold">230 ms</div>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="text-sm text-gray-500 mb-1">Error Rate</div>
                <div className="text-2xl font-semibold">0.01%</div>
              </div>
            </div>
          </div>
        </section>
        <IncidentHistory />
      </main>
      <Footer />
    </div>
  );
};

export default App;
