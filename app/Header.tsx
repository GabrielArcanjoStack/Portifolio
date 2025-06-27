export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50 backdrop-blur-sm bg-opacity-90">
      <div className="max-w-5xl mx-auto flex items-center justify-between py-4 px-4">
        <span className="text-xl font-bold tracking-tight text-gray-900">
          Gabriel Arcanjo
        </span>
        <nav className="space-x-6 text-sm sm:text-base font-medium">
          <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
            Sobre
          </a>
          <a href="#experience" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
            Experiência
          </a>
          <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
            Projetos
          </a>
        </nav>
      </div>
    </header>
  );
}
