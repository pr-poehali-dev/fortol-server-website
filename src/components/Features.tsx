import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Features = () => {
  const features = [
    {
      icon: "Shield",
      title: "Стабильность",
      description: "Собственное серверное оборудование с защитой от DDoS",
    },
    {
      icon: "Map",
      title: "Кастомная генерация",
      description: "Уникальные миры, созданные специально для нашего сервера",
    },
    {
      icon: "Globe",
      title: "Система миров",
      description: "Множество различных локаций для разных видов активности",
    },
    {
      icon: "Users",
      title: "Сплочённое комьюнити",
      description: "Дружелюбное сообщество игроков и общие проекты",
    },
  ];

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
          <h3 className="text-3xl font-bold text-center text-green-400 mb-8">
            Почему мы?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-slate-700 border-green-600 hover:bg-slate-600 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon
                      name={feature.icon as any}
                      size={32}
                      className="text-white"
                    />
                  </div>
                  <CardTitle className="text-white text-xl">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-center">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
