import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const privileges = [
  { 
    name: "Барон", 
    price: 10, 
    color: "from-gray-600 to-gray-800",
    description: "⚕ Префикс в чате и табе: [Барон] ВашНик\n› /kit Барон ⇨ Получить набор Барона\n› /salary ⇨ Получить зарплату\n› /crawl ⇨ Сменить позу: красться"
  },
  { 
    name: "Страж", 
    price: 16, 
    color: "from-green-600 to-green-800",
    description: "⚕ Префикс в чате и табе: [Страж] ВашНик\n› /kit Страж ⇨ Получить набор Стража\n› /suicide ⇨ Покончить жизнь самоубийством\n› /dchat ⇨ Воспользоваться Донат-Чатом"
  },
  { 
    name: "Герой", 
    price: 24, 
    color: "from-blue-600 to-blue-800",
    description: "⚕ Префикс в чате и табе: [Герой] ВашНик\n› /kit Герой ⇨ Получить набор Героя\n› /top ⇨ Телепортация вверх\n› /hat ⇨ Надеть блок на голову"
  },
  { 
    name: "Аспид", 
    price: 56, 
    color: "from-purple-600 to-purple-800",
    description: "⚕ Префикс в чате и табе: [Аспид] ВашНик\n› /kit Аспид ⇨ Получить набор Аспида\n› /clear ⇨ Очистить инвентарь\n› /feed ⇨ Восстановить голод\n› /heal ⇨ Восстановить здоровье\n› /me ⇨ Написать в чат Реакции"
  },
  { 
    name: "Сквид", 
    price: 69, 
    color: "from-cyan-600 to-cyan-800",
    description: "⚕ Префикс в чате и табе: [Сквид] ВашНик\n› /kit Сквид ⇨ Получить набор Сквида\n› /back ⇨ Вернуться на место смерти\n› /ec ⇨ Открыть Эндер Сундук\n› /wbench ⇨ Открыть портативный Верстак\n› /ad ⇨ Написать в чат Рекламы\n› /buy ⇨ Написать в чат Покупки\n› /sell ⇨ Написать в чат Продажи\n› /name ⇨ Изменить название предмета"
  },
  { 
    name: "Глава", 
    price: 87, 
    color: "from-indigo-600 to-indigo-800",
    description: "⚕ Префикс в чате и табе: [Глава] ВашНик\n› /kit Глава ⇨ Получить набор Главы\n› /salary ⇨ Получить зарплату\n› /bc ⇨ Написать в чат Объявления\n› /ext ⇨ Потушить себя командой\n› /am toggle ⇨ Отключить Авто-сообщения\n› /msgtoggle ⇨ Отключить Личные сообщения\n› /paytoggle ⇨ Отключить получение платежей\n› /tptoggle ⇨ Отключить телепортации\n› /feed Ник ⇨ Покормить игрока\n› /heal Ник ⇨ Вылечить игрока\n› /exp ⇨ Получить бесплатный опыт"
  },
  { 
    name: "Элита", 
    price: 149, 
    color: "from-pink-600 to-pink-800",
    description: "⚕ Префикс в чате и табе: [Элита] ВашНик\n› /kit Элита ⇨ Получить набор Элиты\n› /time ⇨ Установить время\n› /weather ⇨ Установить погоду\n› /loom ⇨ Открыть Ткацкий станок\n› /carttable ⇨ Открыть Стол картографа\n› /msgtoggle ⇨ Отключить Личные сообщения\n› /beezooka ⇨ Выстрельнуть пчелой\n› /kittycannon ⇨ Выстрелить котом\n› /firework ⇨ Настроить феерверк\n› /name ⇨ Изменить назв. предмета цветным"
  },
  { 
    name: "Титан", 
    price: 239, 
    color: "from-orange-600 to-orange-800",
    description: "⚕ Префикс в чате и табе: [Титан] ВашНик\n› /kit Титан ⇨ Получить набор Титана\n› /jump ⇨ Телепортация на блок взгляда\n› /afk ⇨ Установить режим ''Афк''\n› /setwarp ⇨ Установить точку варпа\n› /delwarp ⇨ Удалить точку варпа\n› /repair ⇨ Починить вещь в руке"
  },
  { 
    name: "Принц", 
    price: 329, 
    color: "from-yellow-600 to-yellow-800",
    description: "⚕ Префикс в чате и табе: [Принц] ВашНик\n› /kit Принц ⇨ Получить набор Принца\n› /smithtable ⇨ Открыть стол Кузнеца\n› /stonecutter ⇨ Открыть Камнерез\n› /grindstone ⇨ Открыть Точило\n\nПрочее:\nТочек домов: 5\nРегионов (Гриф): 7 по 250,000 блоков\nРегионов (Анка): 9 блоков\nСлотов на Аукционе: 14\nЗадержка телепорта: 3 сек\n✔ Возможности привилегии ниже"
  },
  { 
    name: "Князь", 
    price: 549, 
    color: "from-red-600 to-red-800",
    description: "⚕ Префикс в чате и табе: [Князь] ВашНик\n› /kit Князь ⇨ Получить набор Князя\n› /fly ⇨ Включить режим полёта\n› /amute ⇨ Выдать МУТ игроку\n› /enchant ⇨ Зачаровать предмет в руке\n› /anvil ⇨ Открыть портативную Наковальню\n› /speed ⇨ Установить скорость передвижения\n› /salary ⇨ Получить зарплату\n› /exp ⇨ Получить бесплатный опыт\n\nПрочее:\nТочек домов: 7\nРегионов (Гриф): 10 по 350,000 блоков\nРегионов (Анка): 10 блоков\nСлотов на Аукционе: 15\nЗадержка телепорта: 2 сек\n✔ Возможности привилегии ниже"
  },
  { 
    name: "Герцог", 
    price: 999, 
    color: "from-amber-600 to-amber-900",
    description: "⚕ Префикс в чате и табе: [Герцог] ВашНик\n› /kit Крушитель ⇨ Получить набор Герцога\n› /enchant ⇨ Зачаровать предмет в руке\n› /anvil ⇨ Открыть портативную Наковальню\n› /speed ⇨ Установить скорость передвижения\n› /salary ⇨ Получить зарплату\n› /exp ⇨ Получить бесплатный опыт\n\nПрочее:\nВход на заполненный сервер\nНет задержки телепортации\nТочек домов: 10\nРегионов (Гриф): 15 по 500,000 блоков\nРегионов (Анка): 15 блоков\nСлотов на Аукционе: 15\n✔ Возможности привилегии ниже"
  },
  { 
    name: "Спонсор", 
    price: 1850, 
    color: "from-emerald-500 to-emerald-800",
    description: "⚕ Префикс в чате и табе: [Спонсор] ВашНик\n› /kit Спонсор ⇨ Получить набор Спонсора\n› /зарплата ⇨ Получить зарплату\n› /exp ⇨ Получить бесплатный опыт\n\nПрочее:\nВход на заполненный сервер\nНет задержки телепортации\nТочек домов: 15\nРегионов (Анка): 20 блоков\nСлотов на Аукционе: 20\n✔ Возможности привилегии ниже"
  },
  { 
    name: "Мажор", 
    price: 2650, 
    color: "from-rose-500 to-rose-800",
    description: "Все права стажера +\n› revise start - revise stop\n› tempban (строго по правилам)\n› tempmute (строго по правилам)\n› Прямая связь с создателем"
  },
];

const creators = ["IIoneR", "umQKoKiq", "TukeInside"];

const testimonials = [
  {
    name: "Steve_Pro",
    role: "Герцог",
    text: "Играю уже полгода, лучший анархический сервер! Администрация всегда на связи, донат не дает преимущества в PvP.",
    rating: 5
  },
  {
    name: "DiamondKing",
    role: "Титан",
    text: "Отличное комьюнити, много активных игроков. Сервер работает стабильно 24/7, лагов почти нет!",
    rating: 5
  },
  {
    name: "CreeperHunter",
    role: "Элита",
    text: "Крутые ивенты и конкурсы каждую неделю. Привилегии стоят своих денег, много полезных команд.",
    rating: 5
  },
  {
    name: "RedstoneWizard",
    role: "Князь",
    text: "Сервер для настоящих фанатов Minecraft! Анархия в чистом виде, но с адекватными правилами.",
    rating: 4
  }
];

const screenshots = [
  { url: "/img/003e44b6-6b07-46b2-a3a4-4a3ea9d77397.jpg", title: "Эпичные постройки" },
  { url: "/img/ae746d93-bffb-47c0-b5c3-ae76d10bb629.jpg", title: "PvP сражения" },
  { url: "/img/6e7b201d-a3e9-4382-8d07-b1f8965a17c8.jpg", title: "Огромный мир" }
];

const rules = [
  {
    title: "ОСНОВНЫЕ ПРАВИЛА",
    items: [
      "Незнание правил не освобождает вас от ответственности",
      "Начав играть на наших серверах, Вы автоматически подтверждаете своё согласие с данным сводом правил",
      "Администратор вправе наказать игрока по причине, не указанной в настоящих правилах",
      "Администрация не несет ответственности за временную или постоянную невозможность игры на сервере",
      "Администрация не несет ответственности за потерю игровых ценностей в следствии нарушения работоспособности сервера",
      "Администрация не гарантирует работоспособность сервера, а также сохранность информации на нем",
      "Оскорбление, провоцирование администрации запрещено"
    ]
  },
  {
    title: "ПРАВИЛА ЧАТА",
    items: [
      "Запрещен Капс/Спам/Флуд в любом из чатов",
      "Запрещены унижения, оскорбления игроков",
      "Запрещена нецензурная лексика (маты, скрытые маты)",
      "Запрещено рекламировать/упоминать посторонние ресурсы",
      "Запрещено упоминать/оскорблять родных и близких игроков",
      "Запрещается розжиг межнациональной розни, расизм",
      "Запрещено вызывать игроков на проверку читов",
      "Самопризнание в нарушении правил проекта является поводом для бана"
    ]
  },
  {
    title: "АККАУНТ",
    items: [
      "Ник не должен содержать мата, оскорблений, схожесть с названием других проектов/чит клиентов",
      "Ник не должен быть схож с Администраторами или Ютуберами проекта",
      "Запрещается предоставлять свой аккаунт другим людям",
      "Ответственность несет владелец аккаунта независимо от того, кто совершал действия",
      "Запрещена продажа/передача аккаунтов, продажа привилегий",
      "Донат невозможно перенести на другой аккаунт"
    ]
  },
  {
    title: "ИГРОВЫЕ ПРАВИЛА",
    items: [
      "Запрещено мошенничество, обман администрации",
      "Запрещено продавать/покупать игровые ценности за реальную валюту",
      "Запрещено пользоваться читами, кликерами, автоматизациями",
      "Запрещено помогать, укрывать нарушителя или способствовать в его неправомерных действиях",
      "Запрещено вызывание неполадок в работе сервера или попытки обрушить сервер",
      "Запрещено использование/скрытие багов/недоработок сервера",
      "Запрещено строительство половых органов, нацистских символик, лавакастов",
      "Запрещено подстрекать третьих лиц на нарушение правил"
    ]
  },
  {
    title: "ПЛАТНЫЕ УСЛУГИ",
    items: [
      "Попытки махинаций оплатами наказываются баном без возврата средств",
      "Предоставьте чек оплаты, если хотите написать о пропаже доната",
      "Администрация не обязана предоставлять доказательства нарушений донатера"
    ]
  }
];

export default function Index() {
  const [onlinePlayers, setOnlinePlayers] = useState(42);
  const [maxPlayers] = useState(100);
  const [selectedPrivilege, setSelectedPrivilege] = useState<typeof privileges[0] | null>(null);
  const [nickname, setNickname] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [visitorsCount] = useState(15847);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setOnlinePlayers(prev => Math.min(maxPlayers, Math.max(10, prev + Math.floor(Math.random() * 7) - 3)));
    }, 5000);
    
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [maxPlayers]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1f2c] via-[#2C2C2C] to-[#1a1f2c]">
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/img/f5d977dc-8e72-4783-8a5a-a65df6634254.jpg')" }}
      />
      
      <div className="relative z-10">
        <nav className="sticky top-0 z-40 bg-black/80 backdrop-blur-md border-b border-primary/30">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <h2 className="minecraft-text text-2xl font-black text-primary">ROOMTIME</h2>
              
              <div className="hidden md:flex gap-6">
                <button onClick={() => scrollToSection('privileges')} className="text-white hover:text-primary transition-colors font-semibold">
                  Привилегии
                </button>
                <button onClick={() => scrollToSection('gallery')} className="text-white hover:text-primary transition-colors font-semibold">
                  Галерея
                </button>
                <button onClick={() => scrollToSection('testimonials')} className="text-white hover:text-primary transition-colors font-semibold">
                  Отзывы
                </button>
                <button onClick={() => scrollToSection('rules')} className="text-white hover:text-primary transition-colors font-semibold">
                  Правила
                </button>
              </div>
              
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild className="md:hidden">
                  <Button variant="ghost" size="icon" className="text-white">
                    <Icon name="Menu" size={24} />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-gradient-to-b from-[#1a1f2c] to-[#2C2C2C] border-primary/30">
                  <div className="flex flex-col gap-6 mt-8">
                    <h3 className="minecraft-text text-3xl font-black text-primary mb-4">МЕНЮ</h3>
                    <button 
                      onClick={() => scrollToSection('privileges')} 
                      className="text-left text-xl text-white hover:text-primary transition-colors font-semibold flex items-center gap-3"
                    >
                      <Icon name="Crown" size={24} className="text-primary" />
                      Привилегии
                    </button>
                    <button 
                      onClick={() => scrollToSection('gallery')} 
                      className="text-left text-xl text-white hover:text-primary transition-colors font-semibold flex items-center gap-3"
                    >
                      <Icon name="Image" size={24} className="text-primary" />
                      Галерея
                    </button>
                    <button 
                      onClick={() => scrollToSection('testimonials')} 
                      className="text-left text-xl text-white hover:text-primary transition-colors font-semibold flex items-center gap-3"
                    >
                      <Icon name="MessageSquare" size={24} className="text-primary" />
                      Отзывы
                    </button>
                    <button 
                      onClick={() => scrollToSection('rules')} 
                      className="text-left text-xl text-white hover:text-primary transition-colors font-semibold flex items-center gap-3"
                    >
                      <Icon name="ScrollText" size={24} className="text-primary" />
                      Правила
                    </button>
                    
                    <div className="border-t border-primary/30 pt-6 mt-4">
                      <Button asChild className="w-full bg-primary hover:bg-primary/90 mb-3">
                        <a href="https://t.me/HollyFunServer" target="_blank" rel="noopener noreferrer">
                          <Icon name="Send" size={20} className="mr-2" />
                          Telegram
                        </a>
                      </Button>
                      <Button asChild className="w-full bg-[#5865F2] hover:bg-[#4752C4]">
                        <a href="https://discord.gg/WBrBCpUbkc" target="_blank" rel="noopener noreferrer">
                          <Icon name="MessageCircle" size={20} className="mr-2" />
                          Discord
                        </a>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </nav>
        
        <section className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-5xl mx-auto">
            <h1 className="minecraft-text text-7xl md:text-9xl font-black text-[#FF0000] mb-8 animate-fade-in text-outline">
              ROOMTIME
            </h1>
            <p className="text-2xl md:text-3xl text-white mb-6 font-semibold">
              Лучший анархический сервер
            </p>
            
            <Card className="bg-black/40 backdrop-blur-md border-primary/30 p-8 mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Icon name="Server" size={32} className="text-primary" />
                <p className="text-3xl font-bold text-white">IP Сервера</p>
              </div>
              <p className="text-4xl font-black text-primary minecraft-text">
                RoomTime.gomc.me
              </p>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <Card className="bg-black/60 backdrop-blur-md border-green-500/40 p-6 text-center animate-bounce-in">
                <Icon name="Users" size={32} className="text-green-500 mx-auto mb-2" />
                <p className="text-4xl font-black text-green-500 minecraft-text">{onlinePlayers}/{maxPlayers}</p>
                <p className="text-white text-sm mt-2">Игроков онлайн</p>
              </Card>
              
              <Card className="bg-black/60 backdrop-blur-md border-yellow-500/40 p-6 text-center animate-bounce-in" style={{ animationDelay: '0.1s' }}>
                <Icon name="Zap" size={32} className="text-yellow-500 mx-auto mb-2" />
                <p className="text-4xl font-black text-yellow-500 minecraft-text">24/7</p>
                <p className="text-white text-sm mt-2">Сервер работает</p>
              </Card>
              
              <Card className="bg-black/60 backdrop-blur-md border-blue-500/40 p-6 text-center animate-bounce-in" style={{ animationDelay: '0.2s' }}>
                <Icon name="Trophy" size={32} className="text-blue-500 mx-auto mb-2" />
                <p className="text-4xl font-black text-blue-500 minecraft-text">TOP</p>
                <p className="text-white text-sm mt-2">Рейтинг сервера</p>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-8 py-6"
              >
                <a href="https://t.me/HollyFunServer" target="_blank" rel="noopener noreferrer">
                  <Icon name="Send" size={24} className="mr-2" />
                  Telegram Канал
                </a>
              </Button>
              
              <Button 
                asChild
                size="lg"
                className="bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold text-lg px-8 py-6"
              >
                <a href="https://discord.gg/WBrBCpUbkc" target="_blank" rel="noopener noreferrer">
                  <Icon name="MessageCircle" size={24} className="mr-2" />
                  Discord Сервер
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section id="privileges" className="container mx-auto px-4 py-16">
          <h2 className="text-5xl font-black text-center text-white mb-12 minecraft-text">
            ПРИВИЛЕГИИ
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {privileges.map((privilege, index) => (
              <Dialog key={privilege.name}>
                <DialogTrigger asChild>
                  <Card 
                    className={`bg-gradient-to-br ${privilege.color} border-2 border-white/20 hover:border-white/40 transition-all hover:scale-105 overflow-hidden cursor-pointer animate-slide-up`}
                    style={{ animationDelay: `${index * 0.05}s`, opacity: isVisible ? 1 : 0 }}
                    onClick={() => setSelectedPrivilege(privilege)}
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-white">
                          {privilege.name}
                        </h3>
                        <Icon name="Crown" size={28} className="text-yellow-300" />
                      </div>
                      
                      <div className="text-right">
                        <p className="text-4xl font-black text-white minecraft-text">
                          {privilege.price}₽
                        </p>
                      </div>
                      
                      <Button className="w-full mt-4 bg-white/20 hover:bg-white/30 text-white border-white/40">
                        <Icon name="ShoppingCart" size={20} className="mr-2" />
                        Купить
                      </Button>
                    </div>
                  </Card>
                </DialogTrigger>
                <DialogContent className="bg-gradient-to-br from-[#1a1f2c] to-[#2C2C2C] border-primary/30">
                  <DialogHeader>
                    <DialogTitle className="text-3xl font-black text-primary minecraft-text">
                      {privilege.name}
                    </DialogTitle>
                    <DialogDescription className="text-gray-300">
                      Приобретение привилегии на сервере RoomTime
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-6 py-4">
                    <div className="text-center">
                      <Icon name="Crown" size={64} className="text-yellow-300 mx-auto mb-4" />
                      <p className="text-5xl font-black text-white minecraft-text">
                        {privilege.price}₽
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <Label htmlFor="nickname" className="text-white font-semibold">Ваш никнейм в игре</Label>
                      <Input 
                        id="nickname"
                        placeholder="Введите ваш ник"
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                        className="bg-black/40 border-primary/30 text-white placeholder:text-gray-500"
                      />
                    </div>
                    
                    <div className="bg-black/40 border border-primary/30 rounded-lg p-4">
                      <h4 className="text-white font-bold mb-2">Что входит:</h4>
                      {privilege.description ? (
                        <div className="text-gray-300 text-sm whitespace-pre-line leading-relaxed">
                          {privilege.description}
                        </div>
                      ) : (
                        <ul className="space-y-2 text-gray-300 text-sm">
                          <li className="flex items-center gap-2">
                            <Icon name="Check" size={16} className="text-green-500" />
                            Уникальный префикс в чате
                          </li>
                          <li className="flex items-center gap-2">
                            <Icon name="Check" size={16} className="text-green-500" />
                            Доступ к эксклюзивным командам
                          </li>
                          <li className="flex items-center gap-2">
                            <Icon name="Check" size={16} className="text-green-500" />
                            Особые возможности на сервере
                          </li>
                        </ul>
                      )}
                    </div>
                    
                    <Button 
                      asChild
                      className="w-full bg-primary hover:bg-primary/90 text-white font-bold text-lg py-6"
                      disabled={!nickname}
                    >
                      <a 
                        href="https://funpay.com/users/16724676/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={!nickname ? 'pointer-events-none opacity-50' : ''}
                      >
                        <Icon name="CreditCard" size={24} className="mr-2" />
                        Перейти к оплате
                      </a>
                    </Button>
                    
                    <p className="text-xs text-center text-gray-400">
                      После оплаты привилегия будет активирована в течение 5 минут
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <Card className="bg-gradient-to-br from-yellow-600/20 to-amber-600/20 border-2 border-yellow-500/40 max-w-4xl mx-auto p-8 text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Icon name="Coins" size={48} className="text-yellow-400" />
              <h2 className="text-4xl font-black text-white minecraft-text">
                ТОКЕНЫ
              </h2>
            </div>
            <p className="text-6xl font-black text-yellow-400 minecraft-text mb-4">
              1 ТОКЕН = 1₽
            </p>
            <p className="text-gray-300 text-lg">
              Купи токены и используй их для покупки привилегий и других возможностей на сервере!
            </p>
            <Button 
              asChild
              size="lg"
              className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-xl px-8 py-6"
            >
              <a href="https://funpay.com/users/16724676/" target="_blank" rel="noopener noreferrer">
                <Icon name="ShoppingCart" size={24} className="mr-2" />
                Купить Токены
              </a>
            </Button>
          </Card>
        </section>

        <section id="gallery" className="container mx-auto px-4 py-16">
          <h2 className="text-5xl font-black text-center text-white mb-12 minecraft-text">
            ГАЛЕРЕЯ
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto mb-8">
            {screenshots.map((screenshot, index) => (
              <Card 
                key={index}
                className="bg-black/60 backdrop-blur-md border-primary/30 overflow-hidden hover:scale-105 transition-transform animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={screenshot.url} 
                    alt={screenshot.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <p className="text-white font-bold text-center">{screenshot.title}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="testimonials" className="container mx-auto px-4 py-16">
          <h2 className="text-5xl font-black text-center text-white mb-12 minecraft-text">
            ОТЗЫВЫ ИГРОКОВ
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="bg-black/60 backdrop-blur-md border-primary/30 p-6 hover:border-primary/60 transition-all animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-gradient-to-br from-primary/30 to-primary/10 p-3 rounded-full">
                    <Icon name="User" size={32} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
                    <p className="text-sm text-primary font-semibold">{testimonial.role}</p>
                    <div className="flex gap-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.text}"</p>
              </Card>
            ))}
          </div>
        </section>

        <section id="creators" className="container mx-auto px-4 py-16">
          <Card className="bg-black/60 backdrop-blur-md border-primary/30 max-w-4xl mx-auto p-8">
            <h2 className="text-4xl font-black text-center text-white mb-8 minecraft-text">
              СОЗДАТЕЛИ СЕРВЕРА
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {creators.map((creator) => (
                <div 
                  key={creator}
                  className="bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/40 rounded-lg p-6 text-center hover:scale-105 transition-transform"
                >
                  <Icon name="User" size={48} className="text-primary mx-auto mb-4" />
                  <p className="text-2xl font-bold text-white">{creator}</p>
                </div>
              ))}
            </div>
            
            <h3 className="text-3xl font-black text-center text-white mb-6 minecraft-text">
              БЕТА ТЕСТЕРЫ
            </h3>
            
            <div className="flex justify-center">
              <div className="bg-gradient-to-br from-cyan-600/20 to-cyan-600/5 border-2 border-cyan-500/40 rounded-lg p-6 text-center hover:scale-105 transition-transform">
                <Icon name="TestTube" size={48} className="text-cyan-400 mx-auto mb-4" />
                <p className="text-2xl font-bold text-white">Kristallik_mal</p>
              </div>
            </div>
          </Card>
        </section>

        <section id="rules" className="container mx-auto px-4 py-16">
          <h2 className="text-5xl font-black text-center text-white mb-12 minecraft-text">
            ПРАВИЛА СЕРВЕРА
          </h2>
          
          <Card className="bg-black/60 backdrop-blur-md border-primary/30 max-w-5xl mx-auto p-8">
            <Accordion type="single" collapsible className="w-full">
              {rules.map((section, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-xl font-bold text-white hover:text-primary">
                    {section.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-3 text-gray-300">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex gap-3">
                          <span className="text-primary font-bold min-w-[24px]">
                            {itemIndex + 1}.
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </section>

        <footer className="container mx-auto px-4 py-12 text-center">
          <Card className="bg-black/60 backdrop-blur-md border-primary/30 max-w-4xl mx-auto p-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Icon name="Eye" size={20} className="text-primary" />
              <p className="text-lg text-gray-300">
                Посетителей сайта: <span className="font-black text-primary minecraft-text">{visitorsCount.toLocaleString()}</span>
              </p>
            </div>
            
            <p className="text-2xl font-bold text-white mb-6">
              HollyFun - Лучший анархический сервер
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center mb-6">
              <Button 
                asChild
                variant="outline"
                className="border-primary text-white hover:bg-primary/20"
              >
                <a href="https://t.me/HollyFunServer" target="_blank" rel="noopener noreferrer">
                  <Icon name="Send" size={20} className="mr-2" />
                  Telegram
                </a>
              </Button>
              
              <Button 
                asChild
                variant="outline"
                className="border-[#5865F2] text-white hover:bg-[#5865F2]/20"
              >
                <a href="https://discord.gg/WBrBCpUbkc" target="_blank" rel="noopener noreferrer">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Discord
                </a>
              </Button>
            </div>
            
            <p className="text-gray-400">
              © 2025 RoomTime Server. Все права защищены.
            </p>
          </Card>
        </footer>
        
        {showScrollTop && (
          <Button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 bg-primary hover:bg-primary/90 text-white p-4 rounded-full shadow-2xl animate-bounce-in"
            size="icon"
          >
            <Icon name="ArrowUp" size={24} />
          </Button>
        )}
      </div>
    </div>
  );
}