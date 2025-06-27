export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Sobre mim</h2>
        <p className="leading-8">
          Desenvolvedor full stack, atualmente cursando o 3º semestre de CST em
          Desenvolvimento Full Stack na Estácio (curso com 5 semestres, término previsto
          para 2026). Tenho sólida base em bancos de dados
          <strong className="font-semibold"> Oracle &amp; PL/SQL</strong>,
          desenvolvimento front-end moderno com <strong className="font-semibold">React e Next.js</strong>, além de conhecimento em back-end com
          <strong className="font-semibold"> .NET, C#, MVC</strong> e integrações via <strong className="font-semibold">APIs REST</strong>.
          <br />
          Possuo experiência com manipulação de <strong className="font-semibold">DLLs</strong>, análise de <strong className="font-semibold">logs</strong>, versionamento com Git e boas práticas de desenvolvimento.
          <br />
          Atuei como estagiário na
          <strong> Totvs Juritis - LegalDesk Desenvolvimento de Softwares LTDA</strong>,
          contribuindo diretamente para a manutenção e integração dos sistemas LegalDesk e Protheus.
          Também fui responsável pelo desenvolvimento do site{' '}
          <a
            href="https://wdpvendas.com.br"
            target="_blank"
            rel="noopener"
            className="text-blue-600 underline"
          >
            wdpvendas.com.br
          </a>.
        </p>
      </div>
    </section>
  );
}
