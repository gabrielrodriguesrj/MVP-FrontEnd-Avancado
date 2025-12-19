import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { AlertCircle, Home } from 'lucide-react';
import Header from '@/components/Header';

/**
 * NotFound Page (404)
 * 
 * Página exibida quando uma rota inválida é acessada.
 * Oferece opções para o usuário retornar à navegação principal.
 */
export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-12 flex items-center justify-center">
        <div className="text-center max-w-md">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-destructive/10 rounded-full mb-6">
            <AlertCircle className="w-10 h-10 text-destructive" />
          </div>

          {/* Error Code */}
          <h1 className="text-6xl font-bold text-foreground mb-2">404</h1>

          {/* Title */}
          <h2 className="text-2xl font-bold text-foreground mb-3">
            Página não encontrada
          </h2>

          {/* Description */}
          <p className="text-muted-foreground mb-8">
            Desculpe, a página que você está procurando não existe ou foi removida.
            Verifique a URL e tente novamente.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" asChild>
              <Button className="gap-2">
                <Home className="w-4 h-4" />
                Ir para Home
              </Button>
            </Link>
            <Link href="/servicos" asChild>
              <Button variant="outline">
                Ver Serviços
              </Button>
            </Link>
          </div>

          {/* Additional Help */}
          <div className="mt-12 p-6 bg-card border border-border rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong>Precisa de ajuda?</strong> Se você acredita que isso é um erro,
              entre em contato com nosso suporte.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          <p>&copy; 2024 Catálogo de Serviços. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
