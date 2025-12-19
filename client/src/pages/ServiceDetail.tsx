import { useEffect, useState } from 'react';
import { useParams, useRouter, useLocation } from 'wouter';
import { ArrowLeft, Clock, DollarSign, Star, Check } from 'lucide-react';
import Header from '@/components/Header';
import LoadingSpinner from '@/components/LoadingSpinner';
import AlertMessage from '@/components/AlertMessage';
import { Button } from '@/components/ui/button';
import { useServices, Service } from '@/hooks/useServices';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

/**
 * ServiceDetail Page
 * 
 * Página de detalhes de um serviço específico.
 * Utiliza:
 * - useParams: para capturar o ID da URL
 * - useNavigate: para navegação programática
 * - useLocation: para acessar informações da rota atual
 */
export default function ServiceDetail() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const [location] = useLocation();
  const { services, loading, error, getServiceById } = useServices();
  const [service, setService] = useState<Service | null>(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Simular delay de carregamento
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!loading && services.length > 0) {
      const serviceId = parseInt(params.id || '0');
      const foundService = getServiceById(serviceId);
      
      // Simular delay de carregamento
      const timer = setTimeout(() => {
        setService(foundService || null);
        setIsLoading(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [params.id, services, loading, getServiceById]);

  const handleHireService = () => {
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 4000);
  };

  const handleGoBack = () => {
    window.location.href = '/servicos';
  };

  // Loading state
  if (loading || isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <LoadingSpinner message="Carregando detalhes do serviço..." />
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-12">
          <AlertMessage
            type="error"
            message={`Erro ao carregar serviço: ${error}`}
          />
          <Button onClick={handleGoBack} className="mt-6">
            Voltar para Serviços
          </Button>
        </main>
      </div>
    );
  }

  // Service not found state
  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Serviço não encontrado
            </h1>
            <p className="text-muted-foreground mb-6">
              Desculpe, o serviço que você está procurando não existe.
            </p>
            <Button onClick={handleGoBack}>
              Voltar para Serviços
            </Button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <button
          onClick={handleGoBack}
          className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para Serviços
        </button>

        {/* Success Message */}
        {showSuccessMessage && (
          <div className="mb-8">
            <AlertMessage
              type="success"
              message="Serviço adicionado ao carrinho com sucesso!"
              onClose={() => setShowSuccessMessage(false)}
            />
          </div>
        )}

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image */}
          <div className="flex items-center justify-center">
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-auto rounded-lg shadow-lg object-cover max-h-96"
            />
          </div>

          {/* Details */}
          <div>
            {/* Title and Category */}
            <div className="mb-6">
              <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-3">
                {service.category.charAt(0).toUpperCase() + service.category.slice(1)}
              </span>
              <h1 className="text-4xl font-bold text-foreground mb-2">
                {service.name}
              </h1>
              <p className="text-lg text-muted-foreground">
                {service.description}
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.round(service.rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-muted-foreground'
                    }`}
                  />
                ))}
              </div>
              <span className="font-semibold text-foreground">
                {service.rating.toFixed(1)}
              </span>
              <span className="text-muted-foreground">
                ({service.reviews} avaliações)
              </span>
            </div>

            {/* Price and Duration */}
            <div className="bg-card border border-border rounded-lg p-6 mb-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <DollarSign className="w-4 h-4" />
                    <span className="text-sm font-medium">Preço</span>
                  </div>
                  <p className="text-2xl font-bold text-foreground">
                    R$ {service.price.toFixed(2)}
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-medium">Duração</span>
                  </div>
                  <p className="text-2xl font-bold text-foreground">
                    {service.duration}
                  </p>
                </div>
              </div>
            </div>

            {/* Full Description */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-foreground mb-3">
                Sobre este serviço
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {service.fullDescription}
              </p>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-foreground mb-4">
                O que está incluído
              </h2>
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <Tooltip key={index}>
                    <TooltipTrigger asChild>
                      <li className="flex items-start gap-3 cursor-help">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    </TooltipTrigger>
                    <TooltipContent>
                      Recurso incluído neste serviço
                    </TooltipContent>
                  </Tooltip>
                ))}
              </ul>
            </div>

            {/* Action Button */}
            <Button
              size="lg"
              className="w-full"
              onClick={handleHireService}
            >
              Contratar Serviço
            </Button>
          </div>
        </div>

        {/* Related Services Section */}
        <div className="mt-16 pt-12 border-t border-border">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Você também pode gostar de
          </h2>
          <p className="text-muted-foreground">
            Explore outros serviços relacionados em nossa página de{' '}
            <button
              onClick={handleGoBack}
              className="text-primary hover:underline font-medium"
            >
              serviços
            </button>
            .
          </p>
        </div>
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
