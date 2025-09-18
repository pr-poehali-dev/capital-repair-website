import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-4 px-6 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold font-heading">СтройМастер</h1>
          <nav className="hidden md:flex space-x-6">
            <button 
              onClick={() => scrollToSection('hero')}
              className="hover:text-accent transition-colors"
            >
              Главная
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="hover:text-accent transition-colors"
            >
              О компании
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="hover:text-accent transition-colors"
            >
              Контакты
            </button>
          </nav>
          <Button variant="secondary" size="sm" className="md:hidden">
            <Icon name="Menu" size={20} />
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `linear-gradient(rgba(44, 62, 80, 0.7), rgba(44, 62, 80, 0.7)), url('/img/a0d81754-6311-4da5-befc-e0ab10033855.jpg')` 
          }}
        />
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <h2 className="text-5xl md:text-6xl font-bold font-heading mb-6 animate-fade-in">
            Капитальный ремонт
            <span className="block text-accent">профессионального уровня</span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
            Более 15 лет опыта в строительстве и ремонте. 
            Гарантия качества и соблюдение сроков.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg"
              onClick={() => scrollToSection('contact')}
            >
              Получить консультацию
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg"
              onClick={() => scrollToSection('about')}
            >
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold font-heading text-center text-primary mb-12">
            Наши услуги
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-scale transition-all duration-300 shadow-lg">
              <CardHeader className="text-center">
                <div className="mx-auto bg-accent text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Icon name="Hammer" size={32} />
                </div>
                <CardTitle className="text-xl font-heading text-primary">Ремонт квартир</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Комплексный капитальный ремонт квартир любой сложности. 
                  От планировки до финишной отделки.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-scale transition-all duration-300 shadow-lg">
              <CardHeader className="text-center">
                <div className="mx-auto bg-accent text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Icon name="Building" size={32} />
                </div>
                <CardTitle className="text-xl font-heading text-primary">Ремонт офисов</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Профессиональный ремонт коммерческих помещений. 
                  Современные материалы и технологии.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover-scale transition-all duration-300 shadow-lg">
              <CardHeader className="text-center">
                <div className="mx-auto bg-accent text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Icon name="Wrench" size={32} />
                </div>
                <CardTitle className="text-xl font-heading text-primary">Инженерные системы</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Монтаж и модернизация водопровода, электрики, 
                  вентиляции и отопления.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold font-heading text-primary mb-6">
                О компании СтройМастер
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Мы специализируемся на капитальном ремонте жилых и коммерческих помещений 
                с 2008 года. За это время выполнили более 500 проектов различной сложности.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">500+</div>
                  <div className="text-gray-600">Завершённых проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">15+</div>
                  <div className="text-gray-600">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">50+</div>
                  <div className="text-gray-600">Специалистов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">100%</div>
                  <div className="text-gray-600">Гарантия качества</div>
                </div>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <Icon name="CheckCircle" size={20} className="text-accent mr-3" />
                  Собственная команда сертифицированных мастеров
                </li>
                <li className="flex items-center">
                  <Icon name="CheckCircle" size={20} className="text-accent mr-3" />
                  Использование качественных материалов от проверенных поставщиков
                </li>
                <li className="flex items-center">
                  <Icon name="CheckCircle" size={20} className="text-accent mr-3" />
                  Соблюдение сроков и бюджета проекта
                </li>
                <li className="flex items-center">
                  <Icon name="CheckCircle" size={20} className="text-accent mr-3" />
                  Гарантийное и постгарантийное обслуживание
                </li>
              </ul>
            </div>
            <div className="relative">
              <img 
                src="/img/c48658e9-fe59-49fc-bb36-05552aab4a08.jpg" 
                alt="Команда СтройМастер"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent text-white p-6 rounded-lg">
                <div className="text-2xl font-bold">2008</div>
                <div className="text-sm">Год основания</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-4xl font-bold font-heading mb-6">Свяжитесь с нами</h3>
              <p className="text-lg mb-8 opacity-90">
                Готовы обсудить ваш проект? Оставьте заявку, и мы свяжемся 
                с вами в течение часа для бесплатной консультации.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon name="Phone" size={24} className="text-accent mr-4" />
                  <span className="text-lg">+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={24} className="text-accent mr-4" />
                  <span className="text-lg">info@stroymaster.ru</span>
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" size={24} className="text-accent mr-4" />
                  <span className="text-lg">г. Москва, ул. Строительная, д. 15</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Clock" size={24} className="text-accent mr-4" />
                  <span className="text-lg">Пн-Пт: 9:00-19:00, Сб-Вс: 10:00-17:00</span>
                </div>
              </div>
            </div>

            <Card className="bg-white text-gray-900">
              <CardHeader>
                <CardTitle className="text-2xl font-heading text-primary">
                  Оставить заявку
                </CardTitle>
                <CardDescription>
                  Заполните форму, и мы перезвоним вам в ближайшее время
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Ваше имя" className="w-full" />
                <Input placeholder="Номер телефона" className="w-full" />
                <Input placeholder="Email" type="email" className="w-full" />
                <Textarea 
                  placeholder="Опишите ваш проект..."
                  className="w-full min-h-[120px] resize-none"
                />
                <Button className="w-full bg-accent hover:bg-accent/90 text-white">
                  Отправить заявку
                  <Icon name="Send" size={20} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-2xl font-bold font-heading mb-4">СтройМастер</h4>
              <p className="text-gray-400">
                Профессиональная строительная компания. 
                Капитальный ремонт любой сложности.
              </p>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Услуги</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Ремонт квартир</li>
                <li>Ремонт офисов</li>
                <li>Инженерные системы</li>
                <li>Дизайн интерьера</li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Контакты</h5>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (495) 123-45-67</li>
                <li>info@stroymaster.ru</li>
                <li>г. Москва, ул. Строительная, д. 15</li>
              </ul>
            </div>
          </div>
          <hr className="border-gray-700 my-8" />
          <div className="text-center text-gray-400">
            <p>&copy; 2024 СтройМастер. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;