import Icon from "@/components/ui/icon";

const WhyChooseUs = () => {
  const advantages = [
    {
      icon: "Shield",
      title: "Стабильность",
      description: "Собственное серверное оборудование с защитой от DDoS",
      shape: "hexagon",
    },
    {
      icon: "Map",
      title: "Кастомная генерация",
      description: "Уникальные миры, созданные специально для нашего сервера",
      shape: "diamond",
    },
    {
      icon: "Globe",
      title: "Система миров",
      description: "Множество различных локаций для разных видов активности",
      shape: "circle",
    },
    {
      icon: "Users",
      title: "Сплочённое комьюнити",
      description: "Дружелюбное сообщество игроков и общие проекты",
      shape: "octagon",
    },
  ];

  const getShapeClass = (shape: string) => {
    switch (shape) {
      case "hexagon":
        return "clip-path-hexagon";
      case "diamond":
        return "clip-path-diamond transform rotate-45";
      case "circle":
        return "rounded-full";
      case "octagon":
        return "clip-path-octagon";
      default:
        return "rounded-2xl";
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {advantages.map((advantage, index) => (
            <div key={index} className="relative group">
              <div
                className={`
                ${getShapeClass(advantage.shape)}
                ${advantage.shape === "diamond" ? "w-64 h-64 mx-auto" : "w-full"}
                bg-gray-800 border-4 border-red-600 hover:border-red-500
                p-8 flex flex-col justify-center items-center text-center
                shadow-xl hover:shadow-2xl transform hover:scale-105 
                transition-all duration-300 cursor-pointer
                ${advantage.shape === "diamond" ? "" : "min-h-[200px]"}
              `}
              >
                <div
                  className={`${advantage.shape === "diamond" ? "transform -rotate-45" : ""} flex flex-col items-center`}
                >
                  <div className="w-16 h-16 bg-red-600/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                    <Icon
                      name={advantage.icon as any}
                      size={32}
                      className="text-red-400"
                    />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3 group-hover:text-gray-100">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
                    {advantage.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .clip-path-hexagon {
          clip-path: polygon(
            50% 0%,
            100% 25%,
            100% 75%,
            50% 100%,
            0% 75%,
            0% 25%
          );
        }
        .clip-path-diamond {
          clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
        }
        .clip-path-octagon {
          clip-path: polygon(
            30% 0%,
            70% 0%,
            100% 30%,
            100% 70%,
            70% 100%,
            30% 100%,
            0% 70%,
            0% 30%
          );
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
