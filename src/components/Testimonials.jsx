import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

export function Testimonials() {
  const testimonials = [
    {
      quote: "Esta plataforma transformou completamente a maneira como gerenciamos nossos projetos digitais. Recomendo fortemente!",
      author: "Ana Silva",
      role: "CEO, TechSolutions",
      avatar: "AS"
    },
    {
      quote: "Nunca foi tão fácil criar experiências digitais de alta qualidade. A interface é intuitiva e os resultados são impressionantes.",
      author: "Carlos Mendes",
      role: "Diretor de Marketing, InnovateX",
      avatar: "CM"
    },
    {
      quote: "A melhor decisão que tomamos foi adotar esta plataforma. O suporte é excelente e as funcionalidades superam todas as expectativas.",
      author: "Mariana Costa",
      role: "Gerente de Produto, NextLevel",
      avatar: "MC"
    }
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">O que nossos clientes dizem</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Descubra como nossa plataforma tem ajudado empresas a alcançarem seus objetivos.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 mt-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glass hover:shadow-lg transition-all duration-200">
              <CardHeader className="pb-2">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 italic">"{testimonial.quote}"</p>
              </CardContent>
              <CardFooter>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
