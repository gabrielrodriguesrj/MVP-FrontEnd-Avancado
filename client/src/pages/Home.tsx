import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Users, Award } from 'lucide-react';
import Header from '@/components/Header';

/**
 * Home Page
 * 
 * Página inicial da aplicação.
 * Apresenta o propósito do catálogo de serviços e incentiva
 * o usuário a explorar os serviços disponíveis.
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background">
      <Header />

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center py-12 md:py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Bem-vindo ao Catálogo de Serviços
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Descubra uma ampla gama de serviços profissionais para impulsionar seu negócio.
            Consultoria, desenvolvimento, design e muito mais.
          </p>
          <Link href="/servicos" asChild>
            <Button size="lg" className="gap-2">
              Explorar Serviços
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </section>

        {/* Features Section */}
        <section className="py-12 md:py-20">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Por que nos escolher?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Rápido e Eficiente</h3>
              <p className="text-muted-foreground">
                Serviços de alta qualidade entregues com rapidez e eficiência.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Equipe Experiente</h3>
              <p className="text-muted-foreground">
                Profissionais qualificados com anos de experiência no mercado.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Qualidade Garantida</h3>
              <p className="text-muted-foreground">
                Compromisso com a excelência em todos os nossos serviços.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground rounded-lg p-12 text-center my-12">
          <h2 className="text-3xl font-bold mb-4">Pronto para começar?</h2>
          <p className="text-lg mb-6 opacity-90">
            Confira nosso catálogo completo de serviços e encontre a solução ideal para seu projeto.
          </p>
          <Link href="/servicos" asChild>
            <Button 
              size="lg" 
              variant="secondary"
              className="gap-2"
            >
              Ver Todos os Serviços
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          <p>&copy; 2024 Catálogo de Serviços. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
