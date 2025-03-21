import { useState } from "react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold">Logo</span>
          </a>
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="#" className="text-sm font-medium hover:underline underline-offset-4">
            Início
          </a>
          <a href="#" className="text-sm font-medium hover:underline underline-offset-4">
            Recursos
          </a>
          <a href="#" className="text-sm font-medium hover:underline underline-offset-4">
            Preços
          </a>
          <a href="#" className="text-sm font-medium hover:underline underline-offset-4">
            Depoimentos
          </a>
          <a href="#" className="text-sm font-medium hover:underline underline-offset-4">
            Contato
          </a>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline">Entrar</Button>
          <Button>Registrar</Button>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 mt-8">
              <a href="#" className="text-lg font-medium hover:underline underline-offset-4" onClick={() => setIsOpen(false)}>
                Início
              </a>
              <a href="#" className="text-lg font-medium hover:underline underline-offset-4" onClick={() => setIsOpen(false)}>
                Recursos
              </a>
              <a href="#" className="text-lg font-medium hover:underline underline-offset-4" onClick={() => setIsOpen(false)}>
                Preços
              </a>
              <a href="#" className="text-lg font-medium hover:underline underline-offset-4" onClick={() => setIsOpen(false)}>
                Depoimentos
              </a>
              <a href="#" className="text-lg font-medium hover:underline underline-offset-4" onClick={() => setIsOpen(false)}>
                Contato
              </a>
              <div className="flex flex-col gap-2 mt-4">
                <Button variant="outline" onClick={() => setIsOpen(false)}>Entrar</Button>
                <Button onClick={() => setIsOpen(false)}>Registrar</Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
