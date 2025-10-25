import Link from 'next/link';

export default function TestePage() {
  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="card rounded-xl p-6 sm:p-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-2 border-purple-200 dark:border-purple-800">
        <h2 className="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-4">
          🧪 Página de Teste - 404
        </h2>
        
        <p className="text-neutral-700 dark:text-neutral-300 mb-6">
          Clique nos botões abaixo para testar a página 404 customizada:
        </p>

        <div className="space-y-4">
          {/* Links que não existem - vão para 404 */}
          <Link 
            href="/pagina-que-nao-existe"
            className="block w-full px-6 py-4 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition-all text-center"
          >
            ❌ Testar 404 - Link Inexistente #1
          </Link>

          <Link 
            href="/rota-invalida-123"
            className="block w-full px-6 py-4 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-all text-center"
          >
            ❌ Testar 404 - Link Inexistente #2
          </Link>

          <Link 
            href="/nao-existe/sub-rota/teste"
            className="block w-full px-6 py-4 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-lg transition-all text-center"
          >
            ❌ Testar 404 - Link Inexistente #3
          </Link>

          <hr className="my-6 border-neutral-300 dark:border-neutral-700" />

          {/* Link válido para comparar */}
          <Link 
            href="/"
            className="block w-full px-6 py-4 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-all text-center"
          >
            ✅ Voltar ao Dashboard (Link Válido)
          </Link>
        </div>

        <div className="mt-8 p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            <strong>💡 Dica:</strong> Esta página é apenas para testes! Você pode deletá-la depois navegando para:
            <br />
            <code className="bg-neutral-200 dark:bg-neutral-700 px-2 py-1 rounded mt-2 inline-block">
              app/(dashboard)/teste-404/page.tsx
            </code>
          </p>
        </div>
      </div>
    </div>
  );
}

