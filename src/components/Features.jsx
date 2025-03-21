import { CheckCircle, Zap, Shield, BarChart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export function Features() {
  const features = [
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Rápido e Eficiente",
      description: "Nossa plataforma é otimizada para oferecer o melhor desempenho possível."
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Segurança Garantida",
      description: "Seus dados estão protegidos com as mais avançadas tecnologias de segurança."
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-primary" />,
      title: "Fácil de Usar",
      description: "Interface intuitiva que permite que qualquer pessoa utilize sem dificuldades."
    },
    {
      icon: <BarChart className="h-10 w-10 text-primary" />,
      title: "Análises Detalhadas",
      description: "Acompanhe o desempenho com relatórios e métricas avançadas."
    }
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Recursos Poderosos</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Nossa plataforma oferece tudo o que você precisa para transformar sua visão em realidade.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-8">
          {features.map((feature, index) => (
            <Card key={index} className="glass hover:shadow-lg transition-all duration-200">
              <CardHeader className="pb-2">
                <div className="mb-2">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
