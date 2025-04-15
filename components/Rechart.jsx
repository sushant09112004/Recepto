"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Dot
} from "recharts";

const data = [
  { month: "Jan", value: 220 },
  { month: "Feb", value: 260 },
  { month: "Mar", value: 300 },
  { month: "Apr", value: 340 },
  { month: "May", value: 394 },
];

export default function SmoothAreaChart() {
  return (
    <div className="w-full h-64 rounded-lg bg-white p-4 shadow">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.5} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="month" />
          <YAxis domain={[200, 420]} />
          <Tooltip
            contentStyle={{ backgroundColor: "white", borderRadius: "10px", border: "none" }}
            labelFormatter={() => ""}
            formatter={(value) => [`${value}`, ""]}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#3b82f6"
            fillOpacity={1}
            fill="url(#colorValue)"
            dot={{ stroke: "#3b82f6", strokeWidth: 2, fill: "#fff", r: 4 }}
            activeDot={{ r: 6 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
