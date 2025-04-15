import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from 'recharts';

const data = [
  { name: 'Jan', uv: 210 },
  { name: 'Feb', uv: 260 },
  { name: 'Mar', uv: 250 },
  { name: 'Apr', uv: 345 },
  { name: 'May', uv: 394 },
];

export default function ExampleChartOrange() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#FFA500" stopOpacity={0.6} /> {/* Orange color */}
            <stop offset="95%" stopColor="#FFA500" stopOpacity={0} /> {/* Orange color */}
          </linearGradient>
        </defs>
        <XAxis
          dataKey="name"
          ticks={['Jan', 'Mar', 'May']}
          tick={{ fontSize: 10, fill: '#6B7280' }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          tick={{ fontSize: 10, fill: '#6B7280' }}
          axisLine={false}
          tickLine={false}
          domain={[200, 400]}
        />
        <Tooltip
          contentStyle={{ fontSize: '12px', borderRadius: '6px' }}
          formatter={(value) => [`${value}`, 'Users']}
        />
        <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#E5E7EB" />
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#FFA500"  // Orange stroke
          fillOpacity={1}
          fill="url(#colorUv)" // Orange gradient fill under the curve
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
