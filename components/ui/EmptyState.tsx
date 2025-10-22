import { FileQuestion, Inbox } from 'lucide-react';

interface EmptyStateProps {
  title?: string;
  message?: string;
  icon?: 'inbox' | 'question';
}

export default function EmptyState({ 
  title = "Nenhum dado disponível",
  message = "Não há informações para exibir neste momento.",
  icon = 'inbox'
}: EmptyStateProps) {
  const Icon = icon === 'inbox' ? Inbox : FileQuestion;
  
  return (
    <div className="card rounded-xl p-8 sm:p-12 bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-800 dark:to-neutral-900 border-0 shadow-lg">
      <div className="flex flex-col items-center justify-center text-center">
        {/* Ícone */}
        <div className="mb-6 relative">
          <div className="absolute inset-0 bg-purple-400 dark:bg-purple-600 opacity-10 blur-2xl rounded-full"></div>
          <div className="relative bg-neutral-100 dark:bg-neutral-750 p-6 rounded-full">
            <Icon className="w-16 h-16 text-neutral-400 dark:text-neutral-500" strokeWidth={1.5} />
          </div>
        </div>
        
        {/* Título */}
        <h3 className="text-lg sm:text-xl font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
          {title}
        </h3>
        
        {/* Mensagem */}
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-md">
          {message}
        </p>
        
        {/* Decoração */}
        <div className="mt-8 flex gap-2">
          <div className="w-2 h-2 bg-purple-400 dark:bg-purple-600 rounded-full opacity-20"></div>
          <div className="w-2 h-2 bg-purple-400 dark:bg-purple-600 rounded-full opacity-40"></div>
          <div className="w-2 h-2 bg-purple-400 dark:bg-purple-600 rounded-full opacity-60"></div>
        </div>
      </div>
    </div>
  );
}

