import { useState, useMemo } from 'react';
import { Search, Filter } from 'lucide-react';
import Header from '@/components/Header';
import ServiceCard from '@/components/ServiceCard';
import LoadingSpinner from '@/components/LoadingSpinner';
import AlertMessage from '@/components/AlertMessage';
import { useServices } from '@/hooks/useServices';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

/**
 * Services Page
 * 
 * Página de listagem de serviços com:
 * - Busca por nome
 * - Filtro por categoria
 * - Feedback visual de carregamento
 * - Mensagem quando nenhum resultado é encontrado
 */
export default function Services() {
  const { services, loading, error } = useServices();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  // Extrair categorias únicas
  const categories = useMemo(() => {
    const cats = services.map(s => s.category);
    return Array.from(new Set(cats)).sort();
  }, [services]);

  // Filtrar serviços
  const filteredServices = useMemo(() => {
    return services.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = !selectedCategory || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [services, searchTerm, selectedCategory]);

  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-12">
        {/* Page Title */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-2">Nossos Serviços</h1>
          <p className="text-muted-foreground">
            Explore nossa ampla gama de serviços profissionais
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-card border border-border rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar serviços..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="flex-1 px-3 py-2 border border-border rounded-md bg-background text-foreground"
              >
                <option value="">Todas as categorias</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Active Filters */}
          {(searchTerm || selectedCategory) && (
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                {filteredServices.length} resultado{filteredServices.length !== 1 ? 's' : ''} encontrado{filteredServices.length !== 1 ? 's' : ''}
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={handleClearFilters}
              >
                Limpar filtros
              </Button>
            </div>
          )}
        </div>

        {/* Error State */}
        {error && (
          <div className="mb-8">
            <AlertMessage
              type="error"
              message={`Erro ao carregar serviços: ${error}`}
            />
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <LoadingSpinner message="Carregando serviços..." />
        )}

        {/* Empty State */}
        {!loading && !error && filteredServices.length === 0 && (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-muted rounded-full mb-4">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Nenhum serviço encontrado
            </h3>
            <p className="text-muted-foreground mb-6">
              Tente ajustar seus filtros de busca
            </p>
            <Button
              variant="outline"
              onClick={handleClearFilters}
            >
              Limpar filtros
            </Button>
          </div>
        )}

        {/* Services Grid */}
        {!loading && !error && filteredServices.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map(service => (
              <ServiceCard
                key={service.id}
                id={service.id}
                name={service.name}
                description={service.description}
                price={service.price}
                duration={service.duration}
                image={service.image}
                rating={service.rating}
                reviews={service.reviews}
              />
            ))}
          </div>
        )}
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
