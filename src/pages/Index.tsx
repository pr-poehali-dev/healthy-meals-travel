import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const recipes = [
  {
    id: 1,
    title: 'Ленивая «буженина» из индейки',
    description: `Лучшая замена копченой колбасы из магазина!

Ингредиенты:
• Филе индейки - 1-1.2 кг
• Чеснок - 3 крупных зубца
• Соль
• Сухие приправы (перец, паприка)
• Горчица - 1 ч.л.
• Растительное масло - 2 ст.л.

Приготовление:
1. Приготовить рассол: 4 ст.л. соли на литр воды. Замочить мясо на 3 часа.
2. Слить рассол, промыть, обсушить мясо.
3. Чеснок порезать брусочками, нашпиговать мясо.
4. Смешать приправы, масло и горчицу до пасты. Обмазать мясо и убрать в холодильник на ночь.
5. Закрутить в пергамент и фольгу, выложить на противень.
6. Разогреть духовку до 250°С, запекать 35 минут. Оставить в духовке до полного остывания.
7. Охладить в холодильнике - так вкуснее!`,
    time: '40 мин + маринование',
    difficulty: 'Легко',
    image: 'https://cdn.poehali.dev/files/изображение_2025-12-18_234434634.png'
  },
  {
    id: 2,
    title: 'Салат из фунчозы',
    description: `Бомбический рецепт салатика с фунчозой за 5 минут. Можно сделать даже на столике трясущегося поезда!

Ингредиенты:
• Фунчоза - 100 г
• Огурец - 1 шт
• Болгарский перец - 1 шт
• Морковь - 1 шт
• Чеснок - 3 зубчика
• Соевый соус - 1 пачка

Приготовление:
1. Фунчозу залить кипятком на 5-7 минут (закрыть крышкой).
2. Морковь почистить. Все овощи нарезать соломкой. Дома можно натереть на терке, в дороге просто нарезать.
3. Фунчозу промыть. В миске соединить овощи и лапшу.
4. Добавить чеснок и соевый соус из пакета в салатник.
5. Перемешиваем салат и наслаждаемся!`,
    time: '5 мин',
    difficulty: 'Легко',
    image: 'https://cdn.poehali.dev/files/IMG_3301.JPG'
  },
  {
    id: 3,
    title: 'Творожные треугольники',
    description: `Знаменитые творожные треугольники — отличный вариант полезного перекуса! Готовятся очень быстро.

Ингредиенты:
• Лаваш - 1 шт
• Творог 5% - 180-200 г
• Зубчик чеснока - 1 шт
• Зелень - пучок
• Соль - 2 щепотки (по вкусу)
• Тертый сыр - 40-50 г
• Масло сливочное для жарки

Приготовление:
1. Смешать все ингредиенты с творогом, дать постоять пару минут.
2. Вырезать из лаваша длинную полоску, на кончик положить начинку.
3. Прикрыть уголок и по линиям сгиба завернуть конвертиком (треугольником).
4. Чуть масла на сковороду и обжарить с двух сторон до румяной корочки.
5. Дать постоять под крышкой, чтобы творог и сыр полностью расплавились.
6. В дорогу лучше завернуть в фольгу.`,
    time: '15 мин',
    difficulty: 'Легко',
    image: 'https://cdn.poehali.dev/files/photo_5220126616636747334_y.jpg'
  },
  {
    id: 4,
    title: 'Овсянка с орехами',
    description: `Очень сытный и вкусный завтрак!

Ингредиенты:
• Овсянка быстрого приготовления
• Орехи - 20 г (или гранола)
• Сыр камамбер - 20 г
• Банан - 1 шт

Приготовление:
1. Кашу залить кипятком и оставить настаиваться 7-10 минут.
2. Добавить орехи (или гранолу) и перемешать.
3. Нарезать сыр и банан, добавить в кашу.
4. При желании можно добавить чуть-чуть сахара перед остальными ингредиентами.

Получается очень вкусный и сытный завтрак с необычным сочетанием сладко-соленого вкуса, которого хватит надолго!`,
    time: '10 мин',
    difficulty: 'Легко',
    image: 'https://cdn.poehali.dev/files/изображение_2025-12-23_234840448.png'
  },
  {
    id: 5,
    title: 'Фруктовый смузи-боул',
    description: `Освежающий и полезный завтрак или перекус - остается холодным в термосе!

Ингредиенты:
• Замороженные ягоды (микс) - 200 г
• Банан спелый - 1 шт
• Греческий йогурт - 150 г
• Молоко - 50 мл
• Мёд - 1 ч.л.
• Топпинги: гранола, орехи, семена чиа

Приготовление:
1. В блендере смешать ягоды, банан, йогурт, молоко и мёд.
2. Взбить до однородной густой консистенции.
3. Перелить в предварительно охлажденный термос.
4. Топпинги упаковать отдельно в пакетик.
5. При подаче добавить гранолу, орехи и семена.
6. В термосе остается холодным до 6 часов.`,
    time: '5 мин',
    difficulty: 'Легко',
    image: 'https://cdn.poehali.dev/projects/04890277-9c5d-4698-969e-73ac02856f9b/files/d4242d80-b884-4dfd-a945-c021cba95e8f.jpg'
  }
];

const Index = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Отлично! 🎉",
        description: "Чек-лист с рецептами отправлен на вашу почту.",
      });
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted/30">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        
        <section className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full mb-6 font-semibold">
            <Icon name="Train" size={20} />
            <span>Здоровое питание в путешествиях</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Хватит есть<br />
            <span className="text-muted-foreground line-through">дошираки</span>
            <span className="text-primary"> вкусную еду</span>
            <br />в поездах!
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Вы устали от сухих бутербродов и лапши быстрого приготовления? 
            Мы собрали <span className="font-semibold text-foreground">5 простых рецептов</span> полезной еды, 
            которая останется свежей весь путь. Готовится за 5-25 минут!
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-lg">
              <Icon name="Clock" size={18} />
              <span className="font-medium">Быстро готовить</span>
            </div>
            <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-lg">
              <Icon name="Leaf" size={18} />
              <span className="font-medium">Полезно и вкусно</span>
            </div>
            <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-lg">
              <Icon name="ThermometerSun" size={18} />
              <span className="font-medium">Без холодильника</span>
            </div>
          </div>
        </section>

        <section className="mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            5 рецептов из чек-листа
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Каждый рецепт с подробными инструкциями и списком продуктов
          </p>
          
          <div className="space-y-6">
            {recipes.map((recipe, index) => (
              <Card 
                key={recipe.id} 
                className="overflow-hidden hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row md:min-h-[200px]">
                  <div className="md:w-72 w-full h-64 md:h-auto overflow-hidden flex-shrink-0">
                    <img 
                      src={recipe.image} 
                      alt={recipe.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="flex-1 flex flex-col min-h-full">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-2xl mb-3">{recipe.title}</CardTitle>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Icon name="Clock" size={16} />
                          <span>{recipe.time}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon name="ChefHat" size={16} />
                          <span>{recipe.difficulty}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <CardDescription className="text-base leading-relaxed whitespace-pre-line">
                        {recipe.description}
                      </CardDescription>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-600 px-4 py-2 rounded-full mb-4 font-semibold">
              <Icon name="Cookie" size={20} />
              <span>Бонус</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">Чем похрустеть в дороге</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Полезные перекусы, которые не требуют холодильника и легко берутся с собой
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-3">🥜</div>
                <CardTitle className="text-xl">Орехи и сухофрукты</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Миндаль, кешью, курага, финики. Порционно в маленькие пакетики — удобно и сытно.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-3">🍎</div>
                <CardTitle className="text-xl">Фрукты</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Яблоки, груши, бананы. Моются легко, не пачкаются, дают энергию надолго.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-3">🍫</div>
                <CardTitle className="text-xl">Батончики и хлебцы</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Цельнозерновые хлебцы, протеиновые батончики без сахара, натуральные снеки из фруктов.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="max-w-2xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20 shadow-xl">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Icon name="Download" size={32} className="text-primary" />
              </div>
              <CardTitle className="text-3xl mb-3">
                Получите полный чек-лист бесплатно!
              </CardTitle>
              <CardDescription className="text-base">
                Все 5 рецептов с фото, списками продуктов и пошаговыми инструкциями. 
                Готовьте вкусную еду в дорогу за 5-25 минут!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Ваш email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 h-12 text-base"
                />
                <Button 
                  type="submit" 
                  size="lg"
                  className="h-12 px-8 font-semibold bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Скачать чек-лист
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
              </form>
              <p className="text-xs text-muted-foreground text-center mt-4">
                Никакого спама. Только полезные рецепты!
              </p>
            </CardContent>
          </Card>
        </section>

        <footer className="mt-16 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© 2024 Здоровая еда в дорогу. Путешествуйте со вкусом!</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;