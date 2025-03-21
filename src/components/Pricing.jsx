import { Check } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

export function Pricing() {
  const plans = [
    {
      name: "Básico",
      price: "R$49",
      description: "Perfeito para pequenos projetos e iniciantes.",
      features: [
        "Até 5 projetos",
        "Suporte básico",
        "Atualizações gratuitas",
        "1GB de armazenamento"
      ],
      buttonText: "Começar Grátis",
      popular: false
    },
    {
      name: "Profissional",
      price: "R$99",
      description: "Ideal para profissionais e pequenas equipes.",
      features: [
        "Projetos ilimitados",
        "Suporte prioritário",
        "Atualizações gratuitas",
        "10GB de armazenamento",
        "Recursos avançados"
      ],
      buttonText: "Assinar Agora",
      popular: true
    },
    {
      name: "Empresarial",
      price: "R$199",
      description: "Para empresas com necessidades avançadas.",
      features: [
        "Projetos ilimitados",
        "Suporte 24/7",
        "Atualizações gratuitas",
        "50GB de armazenamento",
        "Recursos avançados",
        "API personalizada",
        "Gerenciamento de equipe"
      ],
      buttonText: "Contate Vendas",
      popular: false
    }
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Planos e Preços</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Escolha o plano perfeito para suas necessidades. Cancele a qualquer momento.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 mt-8">
          {plans.map((plan, index) => (
            <Card key={index} className={`flex flex-col ${plan.popular ? 'border-primary shadow-lg' : 'glass'}`}>
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                    Popular
                  </div>
                </div>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <div className="mt-2">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-gray-500 dark:text-gray-400">/mês</span>
                </div>
                <CardDescription className="mt-2">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}>
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
