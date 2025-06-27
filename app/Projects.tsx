interface Project {
  title: string;
  description: string;
  link?: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: 'Sistema de Check‑in para Academias',
      description: 'Aplicativo mobile com React Native e API REST em Node.js para controle de presença e gestão de alunos.',
    },
    {
      title: 'wdp.vendas.com.br',
      description: 'Site institucional com design responsivo e backend em Node.js.',
      link: 'https://wdpvendas.com.br',
    },
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-8">Projetos</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((p) => {
            const isClickable = !!p.link;
            const Wrapper = isClickable ? 'a' : 'div';

            return (
              <Wrapper
                key={p.title}
                {...(isClickable && {
                  href: p.link,
                  target: '_blank',
                  rel: 'noopener noreferrer',
                })}
                className={`block border border-gray-200 rounded-xl p-6 bg-white transition-shadow ${
                  isClickable
                    ? 'hover:shadow-xl cursor-pointer'
                    : 'cursor-default pointer-events-none'
                }`}
              >
                <h3 className="text-xl font-semibold text-gray-800">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{p.description}</p>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
