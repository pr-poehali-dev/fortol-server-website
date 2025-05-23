import Header from "@/components/Header";

const Rules = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            Правила сервера
          </h1>
          <div className="bg-slate-800 border border-blood-600 rounded-lg p-8">
            <div className="space-y-8 text-gray-300">
              <div>
                <h2 className="text-2xl font-bold text-blood-400 mb-4">
                  📋 Основные правила
                </h2>
                <ul className="list-decimal list-inside space-y-3 ml-4">
                  <li>Запрещено гриферство и воровство</li>
                  <li>Уважительное отношение к игрокам</li>
                  <li>Запрещены читы и дюпы</li>
                  <li>Стройте качественно и красиво</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-blood-400 mb-4">
                  ⚖️ Наказания
                </h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>Предупреждение</strong> - за мелкие нарушения
                  </li>
                  <li>
                    <strong>Мут</strong> - за спам или оскорбления
                  </li>
                  <li>
                    <strong>Бан</strong> - за серьезные нарушения
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;
