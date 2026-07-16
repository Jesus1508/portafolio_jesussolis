import { useState } from "react";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { FaArrowDown } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";
import { beltDistribution, genderDistribution, sucursales } from "../../data/taekwondoDashboard";

const beltRamp = {
  light: ["#86b6ef", "#6da7ec", "#3987e5", "#2a78d6", "#256abf", "#184f95", "#0d366b"],
  dark: ["#9ec5f4", "#86b6ef", "#6da7ec", "#5598e7", "#3987e5", "#2a78d6", "#1c5cab"],
};

const genderColors = {
  light: ["#2a78d6", "#1baf7a"],
  dark: ["#3987e5", "#199e70"],
};

const currency = (n) =>
  new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 }).format(n);

const TaekwondoDashboardDemo = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [sortKey, setSortKey] = useState("ingresos");

  const belts = isDark ? beltRamp.dark : beltRamp.light;
  const genders = isDark ? genderColors.dark : genderColors.light;
  const gridColor = isDark ? "#2c2c2a" : "#e1e0d9";
  const inkColor = isDark ? "#c3c2b7" : "#52514e";

  const sortedSucursales = [...sucursales].sort((a, b) => b[sortKey] - a[sortKey]);
  const totalAlumnos = sucursales.reduce((sum, s) => sum + s.alumnos, 0);
  const totalIngresos = sucursales.reduce((sum, s) => sum + s.ingresos, 0);

  return (
    <div>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-5">
        Dashboard con datos de ejemplo, inspirado en el sistema real de gestión para escuelas de taekwondo que desarrollé (alumnos, sucursales, graduaciones y pagos).
      </p>

      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-3 text-center">
          <p className="text-xs text-slate-500 dark:text-slate-400">Alumnos</p>
          <p className="text-xl font-bold text-slate-800 dark:text-slate-100">{totalAlumnos}</p>
        </div>
        <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-3 text-center">
          <p className="text-xs text-slate-500 dark:text-slate-400">Sucursales</p>
          <p className="text-xl font-bold text-slate-800 dark:text-slate-100">{sucursales.length}</p>
        </div>
        <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-3 text-center">
          <p className="text-xs text-slate-500 dark:text-slate-400">Ingresos del mes</p>
          <p className="text-xl font-bold text-slate-800 dark:text-slate-100">{currency(totalIngresos)}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">
            Alumnos por cinturón
          </h4>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={beltDistribution} margin={{ top: 10, right: 10, left: -20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={gridColor} vertical={false} />
              <XAxis
                dataKey="name"
                interval={0}
                angle={-40}
                textAnchor="end"
                height={50}
                tick={{ fontSize: 10, fill: inkColor }}
              />
              <YAxis tick={{ fontSize: 11, fill: inkColor }} allowDecimals={false} />
              <Tooltip
                formatter={(value) => [`${value} alumnos`, ""]}
                contentStyle={{ fontSize: 12, borderRadius: 8 }}
              />
              <Bar dataKey="alumnos" radius={[4, 4, 0, 0]}>
                {beltDistribution.map((_, i) => (
                  <Cell key={i} fill={belts[i % belts.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">
            Distribución por género
          </h4>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie data={genderDistribution} dataKey="value" nameKey="name" outerRadius={80} label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                {genderDistribution.map((_, i) => (
                  <Cell key={i} fill={genders[i % genders.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`${value} alumnos`, ""]} contentStyle={{ fontSize: 12, borderRadius: 8 }} />
              <Legend wrapperStyle={{ fontSize: 12 }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">
          Comparativa de sucursales
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="text-xs text-slate-500 dark:text-slate-400 uppercase">
                <th className="py-2 pr-2">Sucursal</th>
                {[
                  { key: "alumnos", label: "Alumnos" },
                  { key: "instructores", label: "Instructores" },
                  { key: "ingresos", label: "Ingresos" },
                ].map((col) => (
                  <th
                    key={col.key}
                    onClick={() => setSortKey(col.key)}
                    className="py-2 pr-2 text-right cursor-pointer select-none hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <span className="inline-flex items-center gap-1">
                      {col.label}
                      {sortKey === col.key && <FaArrowDown className="text-[10px]" />}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sortedSucursales.map((s) => (
                <tr key={s.nombre} className="border-t border-slate-100 dark:border-slate-700">
                  <td className="py-2 pr-2 text-slate-700 dark:text-slate-200">
                    {s.nombre}
                    <span className="block text-xs text-slate-400 dark:text-slate-500">{s.ciudad}</span>
                  </td>
                  <td className="py-2 pr-2 text-right text-slate-600 dark:text-slate-300">{s.alumnos}</td>
                  <td className="py-2 pr-2 text-right text-slate-600 dark:text-slate-300">{s.instructores}</td>
                  <td className="py-2 pr-2 text-right font-medium text-slate-800 dark:text-slate-100">
                    {currency(s.ingresos)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TaekwondoDashboardDemo;
