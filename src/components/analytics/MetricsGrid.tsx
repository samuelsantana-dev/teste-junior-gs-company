import { Analytics } from "@/types";

interface Props {
  data: Analytics;
}

export function MetricsGrid({ data }: Props) {
  const metrics = [
    {
      title: "Chats Ativos",
      value: data.activeChats,
      icon: "💬",
      desc: "Em atendimento agora",
    },
    {
      title: "Chats em Espera",
      value: data.waitingChats,
      icon: "⏳",
      desc: "Aguardando resposta",
    },
    {
      title: "Mensagens Recebidas",
      value: data.messagesReceivedToday,
      icon: "📥",
      desc: "Hoje",
    },
    {
      title: "Mensagens Enviadas",
      value: data.messagesSentToday,
      icon: "📤",
      desc: "Hoje",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
      {metrics.map((metric, i) => (
        <div key={i} className="bg-white p-4 rounded-xl border shadow-sm">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-500">{metric.title}</span>
            <span className="text-2xl">{metric.icon}</span>
          </div>
          <div className="text-3xl font-bold">
            {metric.value.toLocaleString()}
          </div>
          <p className="text-xs text-gray-500 mt-1">{metric.desc}</p>
        </div>
      ))}
    </div>
  );
}
