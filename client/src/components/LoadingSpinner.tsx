import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
  message?: string;
  fullScreen?: boolean;
}

/**
 * LoadingSpinner Component
 * 
 * Componente reutilizável para exibir estado de carregamento.
 * Utilizado em: Serviços, Detalhes do Serviço
 * 
 * Features:
 * - Animação de spinner
 * - Mensagem customizável
 * - Opção de tela cheia
 */
export default function LoadingSpinner({
  message = 'Carregando...',
  fullScreen = false,
}: LoadingSpinnerProps) {
  const content = (
    <div className="flex flex-col items-center justify-center gap-3">
      <Loader2 className="w-8 h-8 animate-spin text-primary" />
      <p className="text-muted-foreground text-sm">{message}</p>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        {content}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center py-12">
      {content}
    </div>
  );
}
