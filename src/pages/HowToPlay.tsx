import Header from "@/components/Header";

const HowToPlay = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            Как играть?
          </h1>
          <div className="bg-slate-800 border border-blood-600 rounded-lg p-8">
            <div className="space-y-6 text-gray-300">
              <div>
                <h2 className="text-2xl font-bold text-blood-400 mb-4">
                  Подключение к серверу
                </h2>
                <p className="mb-4">
                  Для подключения к серверу вам необходимо:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Скачать Minecraft Java Edition версии 1.21.1 или выше</li>
                  <li>
                    Добавить сервер в список:{" "}
                    <code className="bg-blood-900 px-2 py-1 rounded">
                      fortol.ru
                    </code>
                  </li>
                  <li>Подать заявку на whitelist в нашем Discord</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-blood-400 mb-4">
                  Правила поведения
                </h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Уважайте других игроков</li>
                  <li>Не гриферьте и не воруйте</li>
                  <li>Стройте красиво и продуманно</li>
                  <li>Участвуйте в общих проектах</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToPlay;
