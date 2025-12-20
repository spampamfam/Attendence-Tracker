import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

const AttendancePieChart = ({ data }) => (
  <PieChart width={300} height={300}>
    <Pie
      data={data}
      dataKey="value"
      nameKey="name"
      cx="50%"
      cy="50%"
      outerRadius={80}
      innerRadius={50}
      label
    >
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={entry.fill} />
      ))}
    </Pie>
    <Tooltip />
    <Legend />
  </PieChart>
);

export default AttendancePieChart;
