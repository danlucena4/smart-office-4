export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-auto border-t border-neutral-200 dark:border-neutral-700 bg-white dark:bg-[#1e1e1e]">
      <div className="px-4 py-6 sm:px-6 md:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-600 dark:text-neutral-400">
          {/* Copyright */}
          <div className="text-center sm:text-left">
            <p className="font-medium">
              © {currentYear} Smart Office - Adotaí
            </p>
            <p className="text-xs mt-1">
              Desenvolvido com ❤️ para adoção de animais
            </p>
          </div>
          
          
          
          {/* Autor */}
          <div className="text-center sm:text-right text-xs">
            <p className="font-medium">Projeto Acadêmico</p>
            <p className="mt-1">
              Outubro 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

