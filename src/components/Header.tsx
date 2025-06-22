import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-slate-900 border-b-4 border-green-600 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Логотип */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">F</span>
            </div>
            <div>
              <h1 className="text-white font-bold text-xl">Fortol</h1>
              <p className="text-green-400 text-sm">2 SEASON</p>
            </div>
          </div>

          {/* Навигация */}
          <nav className="hidden md:flex items-center space-x-6">
            <Button
              variant="ghost"
              className="text-white hover:text-green-400 hover:bg-slate-800"
            >
              Главная
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:text-green-400 hover:bg-slate-800"
            >
              Как играть?
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:text-green-400 hover:bg-slate-800"
            >
              Правила
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:text-green-400 hover:bg-slate-800"
            >
              Вики
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:text-green-400 hover:bg-slate-800"
            >
              Карта
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:text-green-400 hover:bg-slate-800"
            >
              Команда
            </Button>
          </nav>

          {/* Социальные сети */}
          <div className="flex items-center space-x-3">
            <Button
              size="icon"
              variant="ghost"
              className="text-white hover:text-blue-400 hover:bg-slate-800"
            >
              <Icon name="Send" size={20} />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="text-white hover:text-purple-400 hover:bg-slate-800"
            >
              <Icon name="MessageCircle" size={20} />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="text-white hover:text-red-400 hover:bg-slate-800"
            >
              <Icon name="Youtube" size={20} />
            </Button>

            {/* Мобильное меню */}
            <Button
              size="icon"
              variant="ghost"
              className="md:hidden text-white hover:bg-slate-800"
            >
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
