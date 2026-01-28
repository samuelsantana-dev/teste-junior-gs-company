import { Analytics } from "@/types";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface Props {
  data: Analytics;
}

export function ChartsSection({ data }: Props) {
  const chatDistribution = [
    { name: "Ativos", value: data.activeChats, color: "#10b981" },
    { name: "Em Espera", value: data.waitingChats, color: "#f59e0b" },
  ];

  const messageComparison = [
    {
      name: "Recebidas",
      quantidade: data.messagesReceivedToday,
      color: "#3b82f6",
    },
    { name: "Enviadas", quantidade: data.messagesSentToday, color: "#8b5cf6" },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white p-5 rounded-xl border shadow-sm">
        <h3 className="font-semibold text-gray-800 mb-4">
          Distribuição de Chats
        </h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chatDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {chatDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-5 rounded-xl border shadow-sm">
        <h3 className="font-semibold text-gray-800 mb-4">Mensagens do Dia</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={messageComparison}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="quantidade" name="Quantidade" radius={[4, 4, 0, 0]}>
                {messageComparison.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
