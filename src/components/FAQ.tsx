import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FAQ = () => {
  const faqItems = [
    {
      question: "Какой у вас хостинг?",
      answer:
        "Специально под проект было куплено собственное серверное оборудование и проведены выделенные каналы. 1 Гб/Сек канала с фильтрацией от DDos, 12 Ядер Xeon, 24 ГБ ОЗУ, 100 ГБ диска. От чиха не закроемся 😀",
    },
    {
      question: "Когда новый сезон?",
      answer:
        "Когда будет новый сезон решает аудитория сервера средствами массового голосования. У нас нет никаких временных рамок, это может быть и год и два.",
    },
    {
      question: "Можно ли снимать/стримить на сервере?",
      answer:
        "Конечно! Мы заинтересованы в медиа развитии и более того — готовы к сотрудничеству, обратитесь к Администрации, и мы обсудим детали.",
    },
    {
      question: "Воровство, гриферство, как жить дальше?",
      answer:
        "Если тебя загриферили или украли что-либо — не паникуй. Запиши координаты, сделай скриншоты. Напиши нашему инспектору, и мы решим ситуацию в кратчайшие сроки.",
    },
    {
      question: "Как попасть в команду проекта?",
      answer:
        "Мы крайне редко отбираем людей и в наш фокус попадают активные игроки, которые внесли большой вклад в развитие проекта. Фидбек от игроков крайне важен.",
    },
    {
      question: "Почему тут есть донат?",
      answer:
        "На разработку и поддержание проекта ушло около 70 т.р. Донат никак не вмешивается в игровой процесс — ведь он только даёт префикс в табе.",
    },
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            FAQ
          </h2>
          <p className="text-green-400 text-xl">Часто задаваемые вопросы</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {faqItems.map((item, index) => (
            <Card
              key={index}
              className="bg-slate-800 border-slate-700 hover:border-green-600 transition-all duration-300 hover:shadow-lg"
            >
              <CardHeader>
                <CardTitle className="text-green-400 text-lg">
                  {item.question}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">{item.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
