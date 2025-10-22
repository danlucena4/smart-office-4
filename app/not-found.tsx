"use client";
import Link from 'next/link';
import { Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        {/* Ícone grande */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-purple-400 dark:bg-purple-600 opacity-20 blur-3xl rounded-full"></div>
            <div className="relative bg-white dark:bg-neutral-800 p-8 rounded-full shadow-2xl">
              <Search className="w-24 h-24 text-purple-500 dark:text-purple-400" strokeWidth={1.5} />
            </div>
          </div>
        </div>

        {/* Código 404 */}
        <div className="mb-6">
          <h1 className="text-8xl sm:text-9xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
            404
          </h1>
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
            Página Não Encontrada
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg">
            Ops! Parece que esta página não está no nosso sistema... 🐾
          </p>
        </div>

        {/* Descrição */}
        <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-md mx-auto">
          A página que você está procurando não existe ou foi movida para outro lugar. 
          Que tal voltar para o início?
        </p>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <Home className="w-5 h-5" />
            Voltar ao Dashboard
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-700 text-neutral-900 dark:text-neutral-100 font-medium rounded-lg transition-all duration-200 border border-neutral-300 dark:border-neutral-700 shadow hover:shadow-lg"
          >
            Voltar à Página Anterior
          </button>
        </div>

        {/* Links úteis */}
        <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
            Links úteis:
          </p>
          <div className="flex flex-wrap gap-3 justify-center text-sm">
            <Link href="/acquisition" className="text-purple-500 hover:text-purple-600 dark:text-purple-400 dark:hover:text-purple-300 transition-colors">
              Aquisição
            </Link>
            <span className="text-neutral-300 dark:text-neutral-700">•</span>
            <Link href="/adoptions" className="text-purple-500 hover:text-purple-600 dark:text-purple-400 dark:hover:text-purple-300 transition-colors">
              Adoções
            </Link>
            <span className="text-neutral-300 dark:text-neutral-700">•</span>
            <Link href="/engagement" className="text-purple-500 hover:text-purple-600 dark:text-purple-400 dark:hover:text-purple-300 transition-colors">
              Engajamento
            </Link>
            <span className="text-neutral-300 dark:text-neutral-700">•</span>
            <Link href="/operations" className="text-purple-500 hover:text-purple-600 dark:text-purple-400 dark:hover:text-purple-300 transition-colors">
              Operações
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

