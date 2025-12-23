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
    time: '8-10 мин',
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
    title: 'Салат с копченой курицей',
    description: `Добираем белок и клетчатку. Полезный перекус в дороге с минимальными усилиями!

Ингредиенты:
• Копченая курица (без кожи) - 50-70 г
• Листья салата
• Зелень (петрушка, укроп)
• Зеленый лук (по желанию)
• Болгарский перец - 1 шт
• Огурец - 1 шт
• Чеснок - 1-2 зубчика
• Соль

Приготовление:
1. В миску рвем листья салата.
2. Нарезаем грудку (можно взять целое бедро или голень).
3. Кубиками нарезаем огурец и болгарский перец.
4. Добавляем мелко нарезанный чеснок.
5. Солим и перемешиваем.

Легкий и полезный салат с хорошим содержанием КБЖУ!`,
    time: '5 мин',
    difficulty: 'Легко',
    image: 'https://cdn.poehali.dev/files/photo_5357444572293829502_x.jpg'
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
            Хватит есть <span className="text-muted-foreground line-through">дошираки</span>,<br />
            <span className="text-primary">питайся вкусно и полезно</span><br />
            даже в поезде
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Даже во время длительных поездках на поезде не обязательно сбивать свое питание и питаться лапшой быстрого приготовления и сухим пюре с сосисками. Я подготовила для вас <span className="font-semibold text-foreground">5 простых рецептов</span> полезной еды. Готовятся быстро и насыщают на долго!
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
                <CardTitle className="text-xl">Фрукты и овощи</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Яблоки, груши, бананы, морковь. Моются легко, не пачкаются, дают энергию надолго.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-3">🍫</div>
                <CardTitle className="text-xl">Сладости</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Натуральная пастила, песочное печенье, горький или молочный шоколад.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="max-w-3xl mx-auto mb-16">
          <div className="bg-[#3d4d42] text-white rounded-3xl p-12 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              Запишитесь на диагностику
            </h2>
            <p className="text-lg md:text-xl mb-12 leading-relaxed opacity-90">
              Получите персональную консультацию и индивидуальные рекомендации по питанию, разработанную специально для вас
            </p>
            
            <div className="space-y-6 mb-12">
              <a 
                href="tel:+79888923260" 
                className="flex items-center justify-center gap-4 text-xl hover:opacity-80 transition-opacity"
              >
                <Icon name="Phone" size={24} />
                <span>+7 (988) 892-32-60</span>
              </a>
              
              <a 
                href="https://wa.me/79888923260" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-4 text-xl hover:opacity-80 transition-opacity"
              >
                <Icon name="MessageCircle" size={24} />
                <span>WhatsApp</span>
              </a>
              
              <a 
                href="mailto:pak1508@inbox.ru" 
                className="flex items-center justify-center gap-4 text-xl hover:opacity-80 transition-opacity"
              >
                <Icon name="Mail" size={24} />
                <span>pak1508@inbox.ru</span>
              </a>
              
              <a 
                href="https://t.me/+RjOAaGusPos1NDQ6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-4 text-xl hover:opacity-80 transition-opacity"
              >
                <Icon name="Send" size={24} />
                <span>Telegram</span>
              </a>
            </div>
            
            <a 
              href="https://wa.me/79888923260?text=Здравствуйте!%20хочу%20записаться%20на%20диагностику%20и%20получить%20рекомендации%20по%20питанию" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#f5f1e8] text-[#3d4d42] hover:bg-[#ebe5d5] transition-colors py-4 px-10 rounded-full text-lg font-medium"
            >
              <span>Записаться на консультацию</span>
              <Icon name="ArrowRight" size={20} />
            </a>
          </div>
        </section>

        <footer className="mt-16 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© 2024 Здоровая еда в дорогу. Путешествуйте со вкусом!</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;