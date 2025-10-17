import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    university: '',
    message: '',
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', email: '', phone: '', university: '', message: '' });
  };

  const scrollToForm = () => {
    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-secondary to-primary overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center text-white animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Целевое обучение в <span className="text-white drop-shadow-lg">НПО Автоматики</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Получи высшее образование за счет компании и гарантированное трудоустройство в лидере ракетно-космической отрасли
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={scrollToForm}
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 shadow-2xl hover:scale-105 transition-transform"
              >
                Подать заявку
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/10 text-white border-white hover:bg-white/20 text-lg px-8 py-6 backdrop-blur-sm"
              >
                Узнать больше
                <Icon name="ChevronDown" className="ml-2" size={20} />
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" className="text-white" size={32} />
        </div>
      </section>

      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Что такое целевое обучение?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Это твой шанс получить образование мечты без финансовых затрат
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 hover:border-primary transition-all hover:shadow-xl hover:scale-105 duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="GraduationCap" className="text-primary" size={32} />
                </div>
                <CardTitle className="text-2xl">Бесплатное обучение</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Компания оплачивает 100% стоимости обучения в ведущих технических вузах России. Никаких скрытых платежей.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-all hover:shadow-xl hover:scale-105 duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Briefcase" className="text-secondary" size={32} />
                </div>
                <CardTitle className="text-2xl">Гарантия работы</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  После выпуска тебя ждет должность в НПО Автоматики — предприятии с мировым именем и стабильным будущим.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-xl hover:scale-105 duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="TrendingUp" className="text-primary" size={32} />
                </div>
                <CardTitle className="text-2xl">Карьерный рост</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Работа над уникальными космическими проектами, наставничество опытных специалистов и быстрое профессиональное развитие.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-muted to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Как поступить?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Простой путь к твоему будущему в космической отрасли
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex gap-6 items-start group">
              <div className="flex-shrink-0 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold group-hover:scale-110 transition-transform">
                1
              </div>
              <div className="flex-1 pt-3">
                <h3 className="text-2xl font-bold mb-2">Заполни заявку</h3>
                <p className="text-lg text-muted-foreground">
                  Оставь заявку на сайте — это займет всего 2 минуты. Укажи контактные данные и вуз, куда планируешь поступать.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start group">
              <div className="flex-shrink-0 w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center text-2xl font-bold group-hover:scale-110 transition-transform">
                2
              </div>
              <div className="flex-1 pt-3">
                <h3 className="text-2xl font-bold mb-2">Пройди собеседование</h3>
                <p className="text-lg text-muted-foreground">
                  Встреться с нашими HR-специалистами и специалистами отдела. Мы расскажем о компании, условиях и ответим на все вопросы.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start group">
              <div className="flex-shrink-0 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold group-hover:scale-110 transition-transform">
                3
              </div>
              <div className="flex-1 pt-3">
                <h3 className="text-2xl font-bold mb-2">Сдай ЕГЭ и поступи</h3>
                <p className="text-lg text-muted-foreground">
                  Подготовься к экзаменам (мы можем помочь с рекомендациями), сдай ЕГЭ и подай документы в выбранный вуз по направлению компании.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start group">
              <div className="flex-shrink-0 w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center text-2xl font-bold group-hover:scale-110 transition-transform">
                4
              </div>
              <div className="flex-1 pt-3">
                <h3 className="text-2xl font-bold mb-2">Учись и развивайся</h3>
                <p className="text-lg text-muted-foreground">
                  Получай знания в университете, проходи практику в НПО Автоматики и работай над реальными космическими проектами.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Почему выбирают нас?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              НПО Автоматики — это больше, чем работа
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <Icon name="Rocket" className="text-primary" size={40} />
                  <CardTitle className="text-2xl">Уникальные проекты</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Работа над системами управления для ракет-носителей, космических аппаратов и орбитальных станций. Твои разработки выходят в космос!
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <Icon name="Users" className="text-secondary" size={40} />
                  <CardTitle className="text-2xl">Команда профессионалов</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Обучение от лучших инженеров отрасли, менторство, корпоративное обучение и возможность расти вместе с компанией.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <Icon name="DollarSign" className="text-primary" size={40} />
                  <CardTitle className="text-2xl">Конкурентная зарплата</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Достойная оплата труда с первого дня, регулярные премии, соцпакет и корпоративные льготы для сотрудников.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <Icon name="MapPin" className="text-secondary" size={40} />
                  <CardTitle className="text-2xl">Стабильность и перспективы</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Надежный работодатель с государственной поддержкой, постоянные заказы и уверенность в завтрашнем дне.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="application-form" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="border-2 shadow-2xl animate-scale-in">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl md:text-4xl font-bold mb-2">
                  Подать заявку
                </CardTitle>
                <CardDescription className="text-lg">
                  Заполни форму, и мы свяжемся с тобой в течение 48 часов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-base font-semibold">
                      Твое имя *
                    </Label>
                    <Input
                      id="name"
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="text-base py-6"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base font-semibold">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="ivan@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="text-base py-6"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-base font-semibold">
                      Телефон *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="text-base py-6"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="university" className="text-base font-semibold">
                      Желаемый вуз и специальность *
                    </Label>
                    <Input
                      id="university"
                      placeholder="МАИ, Ракетостроение"
                      value={formData.university}
                      onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                      required
                      className="text-base py-6"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-base font-semibold">
                      Расскажи о себе
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Твои достижения, интересы, почему хочешь учиться по целевому направлению..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="text-base resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full text-lg py-6 hover:scale-105 transition-transform"
                  >
                    Отправить заявку
                    <Icon name="Send" className="ml-2" size={20} />
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    Нажимая кнопку, ты соглашаешься на обработку персональных данных
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">НПО Автоматики</h3>
              <p className="text-background/80 leading-relaxed">
                Ведущее предприятие ракетно-космической отрасли России с более чем 70-летней историей.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Контакты</h3>
              <div className="space-y-2 text-background/80">
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  hr@npoa.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  +7 (495) 123-45-67
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" size={18} />
                  г. Москва, ул. Примерная, д. 1
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Мы в соцсетях</h3>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="bg-background/10 hover:bg-background/20 border-background/30">
                  <Icon name="Youtube" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="bg-background/10 hover:bg-background/20 border-background/30">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="bg-background/10 hover:bg-background/20 border-background/30">
                  <Icon name="Twitter" size={20} />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8 text-center text-background/60">
            <p>© 2024 НПО Автоматики. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
