import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full py-12 md:py-16 lg:py-20 border-t">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Empresa</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Sobre nós</a></li>
              <li><a href="#" className="hover:underline">Carreiras</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Imprensa</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Produtos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Recursos</a></li>
              <li><a href="#" className="hover:underline">Preços</a></li>
              <li><a href="#" className="hover:underline">Casos de uso</a></li>
              <li><a href="#" className="hover:underline">Integrações</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Suporte</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Documentação</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Comunidade</a></li>
              <li><a href="#" className="hover:underline">Contato</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Newsletter</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Inscreva-se para receber as últimas novidades</p>
            <div className="flex space-x-2">
              <Input placeholder="Seu email" type="email" className="max-w-[240px]" />
              <Button>Inscrever</Button>
            </div>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-gray-500 dark:text-gray-400">© 2023 Empresa. Todos os direitos reservados.</p>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
