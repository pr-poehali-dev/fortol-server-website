import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Features = () => {
  const features = [
    {
      icon: "Shield",
      title: "Стабильность",
      description: "Собственное серверное оборудование с защитой от DDoS",
      shape: "triangle",
    },
    {
      icon: "Map",
      title: "Кастомная генерация",
      description: "Уникальные миры, созданные специально для нашего сервера",
      shape: "trapezoid",
    },
    {
      icon: "Globe",
      title: "Система миров",
      description: "Множество различных локаций для разных видов активности",
      shape: "diamond",
    },
    {
      icon: "Users",
      title: "Сплочённое комьюнити",
      description: "Дружелюбное сообщество игроков и общие проекты",
      shape: "hexagon",
    },
  ];

  const getShapeClass = (shape: string) => {
    switch (shape) {
      case "triangle":
        return "clip-polygon-triangle bg-gradient-to-b from-blood-600 to-blood-800";
      case "trapezoid":
        return "clip-polygon-trapezoid bg-gradient-to-br from-crimson-600 to-blood-800";
      case "diamond":
        return "clip-polygon-diamond bg-gradient-to-tr from-blood-700 to-crimson-700";
      case "hexagon":
        return "clip-polygon-hexagon bg-gradient-to-bl from-blood-600 to-blood-900";
      default:
        return "bg-blood-700";
    }
  };

  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            БОЛЬШЕ, чем сервер
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Потенциальные друзья уже ждут! Мы сделали и делаем максимум, чтобы
            Ваш игровой опыт был качественным.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center text-blood-400 mb-8">
            Почему мы?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative group cursor-pointer transform hover:scale-105 transition-all duration-300"
              >
                <div
                  className={`
                    relative w-full h-64 p-8 flex flex-col items-center justify-center text-center
                    ${getShapeClass(feature.shape)}
                    shadow-lg hover:shadow-2xl transition-all duration-300
                    border border-blood-500/30 hover:border-blood-400
                  `}
                >
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4">
                    <Icon
                      name={feature.icon as any}
                      size={32}
                      className="text-white"
                    />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .clip-polygon-triangle {
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }
        .clip-polygon-trapezoid {
          clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
        }
        .clip-polygon-diamond {
          clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
        }
        .clip-polygon-hexagon {
          clip-path: polygon(
            25% 0%,
            75% 0%,
            100% 50%,
            75% 100%,
            25% 100%,
            0% 50%
          );
        }
      `}</style>
    </section>
  );
};

export default Features;
