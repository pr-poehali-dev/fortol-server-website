import Icon from "@/components/ui/icon";

const WhyChooseUs = () => {
  const advantages = [
    {
      icon: "Users",
      title: "Активное комьюнити",
      description:
        "У нас всегда живые и активные игроки! Здесь всегда кого-то видно и с кем-то говорить, играть, весело проводить время.",
      size: "large",
      color: "emerald",
    },
    {
      icon: "Mic",
      title: "Голосовой чат",
      description: "От классической музыки до современных хитов",
      size: "small",
      color: "blue",
    },
    {
      icon: "Shield",
      title: "Стабильность",
      description:
        "Наши серверы очень стабильные, благодаря новейшему серверному оборудованию от мощных процессоров Intel Xeon до высокоскоростной оперативной памяти и SSD дисков.",
      size: "medium",
      color: "purple",
    },
    {
      icon: "Wrench",
      title: "Самоуправление",
      description:
        "Минимальное вмешательство администрации позволяет игрокам самостоятельно решать свои проблемы и конфликты, развивая навыки дипломатии.",
      size: "large",
      color: "green",
    },
    {
      icon: "Zap",
      title: "Долгий не решает",
      description:
        "Делаем так чтобы игрок не ждал решения своих вопросов месяцами, а получал ответ максимально быстро",
      size: "medium",
      color: "orange",
    },
    {
      icon: "Code",
      title: "Собственные разработки",
      description:
        "Уникальные плагины и модификации, созданные специально для нашего сервера",
      size: "small",
      color: "indigo",
    },
  ];

  const getSizeClass = (size: string) => {
    switch (size) {
      case "large":
        return "md:col-span-2 md:row-span-2 h-64 md:h-auto";
      case "medium":
        return "md:col-span-2 h-48";
      case "small":
        return "h-40";
      default:
        return "h-48";
    }
  };

  const getColorClass = (color: string) => {
    switch (color) {
      case "emerald":
        return "bg-gradient-to-br from-emerald-500 to-emerald-700 border-emerald-400/30";
      case "blue":
        return "bg-gradient-to-br from-blue-500 to-blue-700 border-blue-400/30";
      case "purple":
        return "bg-gradient-to-br from-purple-500 to-purple-700 border-purple-400/30";
      case "green":
        return "bg-gradient-to-br from-green-500 to-green-700 border-green-400/30";
      case "orange":
        return "bg-gradient-to-br from-orange-500 to-orange-700 border-orange-400/30";
      case "indigo":
        return "bg-gradient-to-br from-indigo-500 to-indigo-700 border-indigo-400/30";
      default:
        return "bg-gradient-to-br from-gray-500 to-gray-700 border-gray-400/30";
    }
  };

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Почему стоит выбрать нас?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Мы создали уникальную игровую среду, где каждый найдет что-то для
            себя
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-min">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className={`
                ${getSizeClass(advantage.size)}
                ${getColorClass(advantage.color)}
                rounded-2xl p-6 flex flex-col justify-center
                border-2 shadow-xl hover:shadow-2xl
                transform hover:scale-105 transition-all duration-300
                cursor-pointer group
              `}
            >
              <div className="flex items-start gap-4 h-full">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon
                    name={advantage.icon as any}
                    size={24}
                    className="text-white"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-bold text-lg mb-3 group-hover:text-gray-100">
                    {advantage.title}
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
