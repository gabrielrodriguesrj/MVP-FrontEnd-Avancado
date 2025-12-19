import { AlertCircle, CheckCircle, Info, XCircle } from 'lucide-react';

type AlertType = 'success' | 'error' | 'warning' | 'info';

interface AlertMessageProps {
  type: AlertType;
  message: string;
  onClose?: () => void;
}

/**
 * AlertMessage Component
 * 
 * Componente reutilizável para exibir mensagens de feedback.
 * Utilizado em: Todas as páginas
 * 
 * Features:
 * - Diferentes tipos de alerta (sucesso, erro, aviso, informação)
 * - Ícones específicos por tipo
 * - Cores semânticas
 */
export default function AlertMessage({
  type,
  message,
  onClose,
}: AlertMessageProps) {
  const config = {
    success: {
      bgColor: 'bg-green-50 dark:bg-green-950',
      borderColor: 'border-green-200 dark:border-green-800',
      textColor: 'text-green-800 dark:text-green-200',
      icon: CheckCircle,
    },
    error: {
      bgColor: 'bg-red-50 dark:bg-red-950',
      borderColor: 'border-red-200 dark:border-red-800',
      textColor: 'text-red-800 dark:text-red-200',
      icon: XCircle,
    },
    warning: {
      bgColor: 'bg-yellow-50 dark:bg-yellow-950',
      borderColor: 'border-yellow-200 dark:border-yellow-800',
      textColor: 'text-yellow-800 dark:text-yellow-200',
      icon: AlertCircle,
    },
    info: {
      bgColor: 'bg-blue-50 dark:bg-blue-950',
      borderColor: 'border-blue-200 dark:border-blue-800',
      textColor: 'text-blue-800 dark:text-blue-200',
      icon: Info,
    },
  };

  const { bgColor, borderColor, textColor, icon: Icon } = config[type];

  return (
    <div
      className={`${bgColor} ${borderColor} ${textColor} border rounded-lg p-4 flex items-start gap-3`}
      role="alert"
    >
      <Icon className="w-5 h-5 flex-shrink-0 mt-0.5" />
      <div className="flex-1">
        <p className="text-sm font-medium">{message}</p>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="text-lg leading-none opacity-70 hover:opacity-100 transition-opacity"
          aria-label="Fechar alerta"
        >
          ×
        </button>
      )}
    </div>
  );
}
