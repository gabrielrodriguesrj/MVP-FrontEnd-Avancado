import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Header Component
 * 
 * Componente reutilizável de navegação principal.
 * Utilizado em: Todas as páginas
 * 
 * Features:
 * - Logo e título da aplicação
 * - Links de navegação
 * - Menu responsivo para mobile
 * - Indicador de página ativa
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { label: 'Início', href: '/' },
    { label: 'Serviços', href: '/servicos' },
  ];

  const isActive = (href: string) => location === href;

  return (
    <header className="bg-primary text-primary-foreground shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
            <span className="font-bold text-primary text-lg">CS</span>
          </div>
          <span className="font-bold text-lg hidden sm:inline">Catálogo</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-opacity hover:opacity-80 font-medium ${
                isActive(item.href) ? 'opacity-100 border-b-2 border-primary-foreground pb-1' : 'opacity-75'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-primary-foreground hover:bg-opacity-20 rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary-foreground bg-opacity-10 border-t border-primary-foreground border-opacity-20">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block py-2 px-3 rounded-lg transition-colors ${
                  isActive(item.href)
                    ? 'bg-primary-foreground bg-opacity-20 font-semibold'
                    : 'hover:bg-primary-foreground hover:bg-opacity-10'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
