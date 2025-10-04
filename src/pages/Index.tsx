import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const privileges = [
  { name: "Барон", price: 10, color: "from-gray-600 to-gray-800" },
  { name: "Страж", price: 16, color: "from-green-600 to-green-800" },
  { name: "Герой", price: 24, color: "from-blue-600 to-blue-800" },
  { name: "Аспид", price: 56, color: "from-purple-600 to-purple-800" },
  { name: "Сквид", price: 69, color: "from-cyan-600 to-cyan-800" },
  { name: "Глава", price: 87, color: "from-indigo-600 to-indigo-800" },
  { name: "Элита", price: 149, color: "from-pink-600 to-pink-800" },
  { name: "Титан", price: 239, color: "from-orange-600 to-orange-800" },
  { name: "Принц", price: 329, color: "from-yellow-600 to-yellow-800" },
  { name: "Князь", price: 549, color: "from-red-600 to-red-800" },
  { name: "Герцог", price: 999, color: "from-amber-600 to-amber-900" },
  { name: "Спонсор", price: 1850, color: "from-emerald-500 to-emerald-800" },
  { name: "Мажор", price: 2650, color: "from-rose-500 to-rose-800" },
];

const creators = ["IIoneR", "umQKoKiq", "TukeInside"];

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
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1f2c] via-[#2C2C2C] to-[#1a1f2c]">
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/img/f5d977dc-8e72-4783-8a5a-a65df6634254.jpg')" }}
      />
      
      <div className="relative z-10">
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
              <Card 
                key={privilege.name}
                className={`bg-gradient-to-br ${privilege.color} border-2 border-white/20 hover:border-white/40 transition-all hover:scale-105 overflow-hidden`}
                style={{ animationDelay: `${index * 0.1}s` }}
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
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="creators" className="container mx-auto px-4 py-16">
          <Card className="bg-black/60 backdrop-blur-md border-primary/30 max-w-4xl mx-auto p-8">
            <h2 className="text-4xl font-black text-center text-white mb-8 minecraft-text">
              СОЗДАТЕЛИ СЕРВЕРА
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
      </div>
    </div>
  );
}
