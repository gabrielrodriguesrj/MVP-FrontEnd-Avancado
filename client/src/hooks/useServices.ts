import { useEffect, useState } from 'react';

export interface Service {
  id: number;
  name: string;
  category: string;
  price: number;
  duration: string;
  description: string;
  fullDescription: string;
  image: string;
  features: string[];
  rating: number;
  reviews: number;
}

interface UseServicesReturn {
  services: Service[];
  loading: boolean;
  error: string | null;
  getServiceById: (id: number) => Service | undefined;
}

export const useServices = (): UseServicesReturn => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Simular delay de requisição
        await new Promise(resolve => setTimeout(resolve, 800));
        
        const response = await fetch('/data/services.json');
        if (!response.ok) {
          throw new Error('Falha ao carregar serviços');
        }
        
        const data = await response.json();
        setServices(data.services);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro desconhecido');
        console.error('Erro ao carregar serviços:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const getServiceById = (id: number): Service | undefined => {
    return services.find(service => service.id === id);
  };

  return {
    services,
    loading,
    error,
    getServiceById,
  };
};
