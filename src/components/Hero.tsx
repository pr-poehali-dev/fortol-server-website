import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 py-20 px-4 overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-16 h-16 bg-green-500 rounded-lg"></div>
        <div className="absolute top-32 right-20 w-8 h-8 bg-amber-500 rounded-lg"></div>
        <div className="absolute bottom-20 left-32 w-12 h-12 bg-blue-500 rounded-lg"></div>
        <div className="absolute bottom-40 right-10 w-6 h-6 bg-red-500 rounded-lg"></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-wider">
          FORTOL
        </h1>
        <div className="bg-green-600 text-black font-bold text-xl md:text-2xl px-6 py-2 rounded-lg inline-block mb-6">
          2 SEASON
        </div>

        <div className="space-y-4 mb-8">
          <p className="text-2xl md:text-3xl text-white font-semibold">
            Приватный сервер майнкрафт
          </p>
          <p className="text-xl text-green-400">Версия 1.21.1 и выше</p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Сервер общих проектов и друзей
            <br />
            для раскрытия творческого потенциала
          </p>
        </div>

        <Button
          size="lg"
          className="bg-green-600 hover:bg-green-700 text-black font-bold text-xl px-8 py-4 rounded-lg transform hover:scale-105 transition-all duration-200 shadow-lg"
        >
          ⭐ Начать играть
        </Button>
      </div>
    </section>
  );
};

export default Hero;
