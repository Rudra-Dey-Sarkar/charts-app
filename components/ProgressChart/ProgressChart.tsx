"use client";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  LabelList,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "HTML Tools, Forms, History", percentage: 80, color: "#4285f4", per: "80%" },
  { name: "Tags & References in HTML", percentage: 60, color: "#f4a442", per: "60%" },
  { name: "Tables & References in HTML", percentage: 24, color: "#e63946", per: "24%" },
  { name: "Tables & CSS Basics", percentage: 96, color: "#43a047", per: "96%" },
];

interface CustomTooltipProps {
  active?: boolean; 
  payload?: { payload: { name: string; value: number } }[];
}

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: "#fff",
          border: "1px solid #ccc",
          padding: "5px 10px",
        }}
      >
        <p>{`${payload[0].payload.name}: ${payload[0].payload.value}%`}</p>
      </div>
    );
  }
  return null;
};

const ProgressChart = () => {
  return (
    <div className="w-full h-full">
      <p className="font-bold">Syllabus Wise Analysis</p>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          barSize={15}
        >
          <XAxis type="number" hide />
          <YAxis dataKey="name" type="category" width={150} />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="percentage" radius={[10, 10, 10, 10]}>
            <LabelList dataKey="per" position="top" width="200" />
            {data.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProgressChart;
