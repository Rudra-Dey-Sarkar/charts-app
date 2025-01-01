"use client";
import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Percentage = ({ percentile }: { percentile: number }) => {
  const [chartData, setChartData] = useState([
    { percentile: 25, numberOfStudent: 10 },
    { percentile: 50, numberOfStudent: 50 },
    { percentile: 75, numberOfStudent: 20 },
    { percentile: 100, numberOfStudent: 10 },
  ]);


  function Positioning(percentile: number) {
    const newData = [...chartData];

    let index;
    if (percentile <= 25) index = 0;
    else if (percentile <= 50) index = 1;
    else if (percentile <= 75) index = 2;
    else index = 3;

    // Update the data if the percentile doesn't match
    if (newData[index].percentile !== percentile) {
      for (let i = newData.length - 1; i >= index; i--) {
        newData[i + 1] = newData[i];
      }

      // Set the new data at the calculated index
      newData[index] = { percentile: percentile, numberOfStudent: 5 };
    }

    setChartData(newData); // Update the chart data
  }

  // Effect to update data whenever percentile changes
  useEffect(() => {
    Positioning(percentile);
  }, [percentile]);

  return (
    <div className="w-full h-full">
      <p className="text-[20px] font-bold mb-2">Comparison Graph</p>
      <div className="flex justify-between">
        <div>
          <p>
            <strong>You scored percentile {percentile}%</strong> which is lower
            than the
          </p>
          <p>average percentile 72% of all the engineers who took this assessment</p>
        </div>
        <div className="bg-gray-100 w-fit h-fit p-[15px] rounded-full">
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 501.333 501.333"
            xmlSpace="preserve"
            className="w-[20px] h-[20px]"
          >
            <rect x="381.867" y="171.733" style={{ fill: "#F16D6E" }} width="119.467" height="329.6" />
            <rect x="190.933" y="275.2" style={{ fill: "#60C3AB" }} width="119.467" height="226.133" />
            <rect y="355.2" style={{ fill: "#637888" }} width="119.467" height="146.133" />
            <g>
              <polygon
                style={{ fill: "#FEC656" }}
                points="392.533,100.267 51.2,256 21.333,188.8 362.667,33.067"
              />
              <polygon
                style={{ fill: "#FEC656" }}
                points="333.867,0 397.867,142.933 480,19.2"
              />
            </g>
          </svg>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="percentile" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="numberOfStudent"
            stroke="#8884d8"
            dot={(dotProps) => {
              const { cx, cy, payload, index } = dotProps;
              const isActive = payload.percentile === percentile;

              return (
                <React.Fragment key={`dot-container-${index}`}>
                  <circle
                    cx={cx}
                    cy={cy}
                    r={isActive ? 10 : 4}
                    fill={isActive ? "#ff7300" : "#8884d8"}
                    stroke={isActive ? "#ff7300" : "none"}
                    strokeWidth={isActive ? 2 : 0}
                  />
                  {isActive && (
                    <text
                      x={cx}
                      y={cy - 15} // Position slightly above the dot
                      className="bg-black font-semibold"
                    >
                      Your percentile
                    </text>
                  )}
                </React.Fragment>
              );
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Percentage;
