export default function Experience() {
  return (
    <section id="experience" className="py-16 bg-gray-100">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Experiência</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">
              Totvs Juritis - LegalDesk Desenvolvimento de Softwares LTDA
            </h3>
            <p className="italic text-sm">
              Estagiário • Jun 2024 – Jun 2025 • Home Office
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-800">
              <li>
                Apoio no desenvolvimento e manutenção de sistemas jurídicos
                integrados (LegalDesk e Protheus), com uso de Oracle PL/SQL, C#,
                análise de logs, integração via APIs REST, manipulação de DLLs e
                suporte técnico.
              </li>
              <li>
                Participação na análise de requisitos, realização de testes e
                implementação de melhorias contínuas.
              </li>
              <li>
                Manutenção e suporte de integrações com o ERP Protheus.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Freelancer – Workana</h3>
            <p className="italic text-sm">
              Desenvolvedor Full Stack Júnior • 2020 – 2023
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-800">
              <li>Desenvolvimento de APIs REST com Node.js e PL/SQL.</li>
              <li>Criação de CRUDs completos e implantação em servidores.</li>
              <li>Atuação em projetos pontuais de sistemas web personalizados.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
