import { Star, Clock, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Link } from 'wouter';

interface ServiceCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  duration: string;
  image: string;
  rating: number;
  reviews: number;
  onViewDetails?: (id: number) => void;
}

/**
 * ServiceCard Component
 * 
 * Componente reutilizável para exibir informações de um serviço.
 * Utilizado em: Página de Serviços
 * 
 * Features:
 * - Exibição de imagem, nome, descrição
 * - Informações de preço, duração e avaliação
 * - Tooltip com informações adicionais
 * - Link para página de detalhes
 */
export default function ServiceCard({
  id,
  name,
  description,
  price,
  duration,
  image,
  rating,
  reviews,
  onViewDetails,
}: ServiceCardProps) {
  const handleViewDetails = () => {
    if (onViewDetails) {
      onViewDetails(id);
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
          R$ {price.toFixed(2)}
        </div>
      </div>

      {/* Content Container */}
      <div className="p-4 flex flex-col h-full">
        {/* Title */}
        <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">
          {name}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>

        {/* Info Row */}
        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center gap-1 cursor-help">
                <Clock className="w-4 h-4" />
                <span>{duration}</span>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              Duração estimada do serviço
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center gap-1 cursor-help">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span>{rating.toFixed(1)}</span>
                <span className="text-xs">({reviews})</span>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              {reviews} avaliações de clientes
            </TooltipContent>
          </Tooltip>
        </div>

        {/* Button */}
        <Link href={`/servico/${id}`}>
          <Button 
            className="w-full mt-auto"
            onClick={handleViewDetails}
          >
            Ver Detalhes
          </Button>
        </Link>
      </div>
    </div>
  );
}
