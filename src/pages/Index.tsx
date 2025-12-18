import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const recipes = [
  {
    id: 1,
    title: 'Роллы с овощами и креветками',
    description: 'Лёгкие и сытные рисовые роллы с хрустящими овощами. Не требуют холодильника до 8 часов.',
    time: '20 мин',
    difficulty: 'Легко',
    image: 'https://cdn.poehali.dev/projects/04890277-9c5d-4698-969e-73ac02856f9b/files/d4242d80-b884-4dfd-a945-c021cba95e8f.jpg'
  },
  {
    id: 2,
    title: 'Салат-паста средиземноморский',
    description: 'Паста с черри, моцареллой и базиликом в баночке. Хранится весь день без холодильника.',
    time: '15 мин',
    difficulty: 'Легко',
    image: 'https://cdn.poehali.dev/projects/04890277-9c5d-4698-969e-73ac02856f9b/files/7e8bbcda-1451-4139-aba4-1b3ad29ec830.jpg'
  },
  {
    id: 3,
    title: 'Боул с киноа и курицей',
    description: 'Протеиновый обед в контейнере: киноа, овощи гриль, куриная грудка и хумус.',
    time: '25 мин',
    difficulty: 'Средне',
    image: 'https://cdn.poehali.dev/projects/04890277-9c5d-4698-969e-73ac02856f9b/files/898fea62-64b4-457f-81f1-ce39fd72adae.jpg'
  },
  {
    id: 4,
    title: 'Сэндвич с авокадо и яйцом',
    description: 'Цельнозерновой хлеб, авокадо, варёное яйцо и руккола. Свежесть до 12 часов.',
    time: '10 мин',
    difficulty: 'Легко',
    image: 'https://cdn.poehali.dev/projects/04890277-9c5d-4698-969e-73ac02856f9b/files/898fea62-64b4-457f-81f1-ce39fd72adae.jpg'
  },
  {
    id: 5,
    title: 'Фруктовый смузи-боул',
    description: 'Замороженные ягоды, банан и йогурт. Берите в термосе — останется холодным 6 часов.',
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

        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            5 рецептов из чек-листа
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Каждый рецепт с подробными инструкциями и списком продуктов
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes.map((recipe, index) => (
              <Card 
                key={recipe.id} 
                className="overflow-hidden hover:shadow-lg transition-all duration-300 hover-scale"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={recipe.image} 
                    alt={recipe.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{recipe.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {recipe.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
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
                </CardContent>
              </Card>
            ))}
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
