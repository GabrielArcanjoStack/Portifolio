'use client';

import { useEffect, useState } from 'react';
import { motion, Variants, Transition } from 'framer-motion'; // Importei Variants e Transition
import { Code, Database, Briefcase, Zap } from 'lucide-react';

const whatsappNumber = '+5511987503790';
const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}`;
const linkedinLink = 'https://www.linkedin.com/in/gabriel-arcanjo-74783b225/';

export default function Home() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    if (theme === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  const experiences = [
    {
      id: 1,
      company: 'Totvs Juritis - LegalDesk Desenvolvimento de Softwares LTDA',
      role: 'Estagiário',
      period: 'Jun 2024 – Jun 2025 • Home Office',
      description: [
        'Desenvolvimento jurídico com Oracle PL/SQL, React, .NET e MVC',
        'Testes unitários, integração com ERP Protheus, manutenção de RPO/DLL',
        'Atuação em sprints, issues, versionamento, documentação e comunicação técnica'
      ],
      stack: ['React', 'PL/SQL', 'Protheus', '.NET', 'MVC']
    },
    {
      id: 2,
      company: 'Freelancer • Workana',
      role: 'Desenvolvedor Full Stack Júnior',
      period: '2020 - 2023',
      description: [
        'Criação de APIs REST com Node.js e MongoDB',
        'Deploys em Linux, docker, servidores VPS e configuração full stack',
        'Contato direto com clientes, entrega ágil e soluções personalizadas'
      ],
      stack: ['Node.js', 'MongoDB', 'Docker', 'Linux']
    }
  ];

const springTransition = {
  type: 'spring' as const,
  stiffness: 300,
  damping: 20
};

const iconVariants: Variants = {
  initial: { scale: 1, color: 'white', filter: 'drop-shadow(0 0 0 transparent)' },
  hover: {
    scale: 1.25,
    color: '#fde047',
    filter: 'drop-shadow(0 0 6px #fde047)',
    transition: springTransition
  }
};


  const certificates = [
    { title: 'SmartData - Inglês', description: 'Certificado de proficiência em inglês com foco em tecnologia e comunicação.' },
    { title: 'Hardware e Software', description: 'Curso completo sobre manutenção, instalação e configuração de hardware e software.' },
    { title: 'Pacote Office', description: 'Domínio avançado das ferramentas Microsoft Office (Word, Excel, PowerPoint).' },
    { title: 'Curso de Oracle PL/SQL', description: 'Formação em programação e otimização de banco de dados Oracle.' },
    { title: 'Desenvolvimento Web com React', description: 'Especialização em criação de interfaces ricas e responsivas usando React.' },
    { title: 'Docker e DevOps Básico', description: 'Fundamentos para containerização e integração contínua.' }
  ];

  const courses = [
    {
      title: 'Informática Avançada',
      description: 'Conhecimentos aprofundados em sistemas operacionais, redes e segurança da informação.'
    },
    {
      title: 'Lógica de Programação',
      description: 'Fundamentos sólidos para construção de algoritmos eficientes e resolução de problemas.'
    },
    {
      title: 'Desenvolvimento Web',
      description: 'Criação de sites e aplicações responsivas utilizando HTML, CSS, JavaScript e frameworks modernos.'
    },
    {
      title: 'Backend',
      description: 'Desenvolvimento de APIs, microserviços e integrações com bancos de dados e servidores.'
    },
    {
      title: 'App Mobile',
      description: 'Desenvolvimento de aplicativos para Android e iOS com foco em performance e usabilidade.'
    }
  ];

  // Mini quiz interativo
  const quizQuestions = [
    {
      question: 'Qual linguagem uso para desenvolver APIs REST?',
      options: ['React', 'Node.js', 'Oracle PL/SQL', 'Docker'],
      answerIndex: 1
    },
    {
      question: 'Qual banco de dados estou mais familiarizado?',
      options: ['MongoDB', 'MySQL', 'Oracle', 'PostgreSQL'],
      answerIndex: 2
    },
    {
      question: 'Qual framework front-end eu uso com mais frequência?',
      options: ['Vue.js', 'Angular', 'React', 'Svelte'],
      answerIndex: 2
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  function handleOptionClick(index: number) {
    if (selectedOption !== null) return; 
    setSelectedOption(index);
    setShowFeedback(true);
    setTimeout(() => {
      setShowFeedback(false);
      setSelectedOption(null);
      setCurrentQuestion((prev) => (prev + 1) % quizQuestions.length);
    }, 2500);
  }

  return (
    <main className={`min-h-screen transition-colors duration-700 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <header className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-4 bg-opacity-30 backdrop-blur-md z-50 bg-black">
        <h1 className="font-bold text-2xl">Gabriel Arcanjo</h1>
        <button onClick={toggleTheme} className="p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-40 transition" aria-label="Alternar tema claro/escuro">
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </header>

      <section className="pt-24 px-6 text-center max-w-4xl mx-auto">
        <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-5xl font-bold mb-4">
          Olá, sou <span className="text-yellow-400">Gabriel Arcanjo</span>
        </motion.h2>
        <p className="text-xl mb-4">Desenvolvedor full stack com atuação real em projetos profissionais e alta entrega.</p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-yellow-400 text-black py-2 px-6 rounded-full font-bold"
          onClick={() => window.open(whatsappLink, '_blank')}
          aria-label="Entrar em contato via WhatsApp"
        >
          Vamos conversar!
        </motion.button>
      </section>

      {/* Me Contrate */}
      <section className="py-20 bg-gradient-to-tr from-purple-700 to-indigo-800 text-white text-center px-6">
        <h2 className="text-4xl font-bold mb-4">📢 Em busca de oportunidade</h2>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Mais de 10 sistemas entregues, foco em performance, responsabilidade e evolução constante.
        </p>
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(255,255,255,0.6)' }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-purple-700 font-bold px-8 py-3 rounded-full mb-10 shadow-lg transition-shadow"
          onClick={() => window.open(linkedinLink, '_blank')}
          aria-label="Abrir meu LinkedIn"
        >
          Me Contrate Agora
        </motion.button>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-3xl mx-auto">
          <motion.div
            variants={iconVariants}
            initial="initial"
            whileHover="hover"
            whileTap="hover"
            className="flex flex-col items-center cursor-pointer select-none"
            tabIndex={0}
            aria-label="Estágio Corporativo"
          >
            <Briefcase className="mb-2" size={40} />
            <span className="font-semibold">Estágio Corporativo</span>
          </motion.div>

          <motion.div
            variants={iconVariants}
            initial="initial"
            whileHover="hover"
            whileTap="hover"
            className="flex flex-col items-center cursor-pointer select-none"
            tabIndex={0}
            aria-label="+10 Projetos Web"
          >
            <Code className="mb-2" size={40} />
            <span className="font-semibold">+10 Projetos Web</span>
          </motion.div>

          <motion.div
            variants={iconVariants}
            initial="initial"
            whileHover="hover"
            whileTap="hover"
            className="flex flex-col items-center cursor-pointer select-none"
            tabIndex={0}
            aria-label="Banco de Dados Oracle"
          >
            <Database className="mb-2" size={40} />
            <span className="font-semibold">Banco de Dados Oracle</span>
          </motion.div>

          <motion.div
            variants={iconVariants}
            initial="initial"
            whileHover="hover"
            whileTap="hover"
            className="flex flex-col items-center cursor-pointer select-none"
            tabIndex={0}
            aria-label="Alta Disponibilidade"
          >
            <Zap className="mb-2" size={40} />
            <span className="font-semibold">Alta Disponibilidade</span>
          </motion.div>
        </div>
      </section>

      {/* Preview wdpvendas.com.br */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">🚀 Veja meu projeto: wdpvendas.com.br</h2>

        <div
          className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-purple-600 hover:scale-105 transition-transform duration-500 max-w-full mx-auto"
          style={{ aspectRatio: '16 / 9' }}
        >
          <iframe
            src="https://wdpvendas.com.br"
            title="Preview do wdpvendas.com.br"
            className="w-full h-full"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          />
        </div>

        <p className="mt-4 text-center text-gray-600 dark:text-gray-400">
          Navegue e explore diretamente aqui! Ou acesse o site{' '}
          <a
            href="https://wdpvendas.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 underline"
          >
            clicando aqui
          </a>.
        </p>
      </section>

      {/* Certificados e Habilidades */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">🎓 Certificados & Habilidades</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map(({ title, description }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-gradient-to-r from-purple-700 to-indigo-800 rounded-lg p-6 text-white shadow-lg hover:scale-105 transition-transform cursor-default"
              tabIndex={0}
              aria-label={`${title}: ${description}`}
            >
              <h3 className="text-2xl font-semibold mb-2">{title}</h3>
              <p className="text-sm">{description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Cursos Complementares */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">📚 Cursos Complementares</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map(({ title, description }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-gradient-to-r from-indigo-700 to-purple-800 rounded-lg p-6 text-white shadow-lg hover:scale-105 transition-transform cursor-default"
              tabIndex={0}
              aria-label={`${title}: ${description}`}
            >
              <h3 className="text-2xl font-semibold mb-2">{title}</h3>
              <p className="text-sm">{description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mini quiz interativo */}
      <section className="py-16 px-6 max-w-3xl mx-auto bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-black">Quiz Rápido - Teste seus conhecimentos!</h2>

        <div>
          <p className="text-lg font-semibold mb-4 text-black">{quizQuestions[currentQuestion].question}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quizQuestions[currentQuestion].options.map((option, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrect = quizQuestions[currentQuestion].answerIndex === idx;
              let bgColor = 'bg-white text-black hover:bg-yellow-200';
              if (showFeedback) {
                if (isSelected && isCorrect) bgColor = 'bg-green-400 text-white';
                else if (isSelected && !isCorrect) bgColor = 'bg-red-500 text-white';
                else if (isCorrect) bgColor = 'bg-green-300 text-black';
              }

              return (
                <motion.button
                  key={idx}
                  onClick={() => handleOptionClick(idx)}
                  disabled={selectedOption !== null}
                  className={`${bgColor} rounded-md py-3 px-4 font-semibold shadow-md transition-colors duration-300`}
                  whileHover={{ scale: selectedOption === null ? 1.05 : 1 }}
                  whileTap={{ scale: selectedOption === null ? 0.95 : 1 }}
                >
                  {option}
                </motion.button>
              );
            })}
          </div>
          {showFeedback && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 font-semibold text-center text-black">
              {selectedOption === quizQuestions[currentQuestion].answerIndex
                ? '✔️ Resposta correta! 👏'
                : `❌ Resposta errada! A correta é "${quizQuestions[currentQuestion].options[quizQuestions[currentQuestion].answerIndex]}"`}
            </motion.p>
          )}
        </div>
      </section>

      {/* Timeline animada */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">Linha do Tempo</h2>
        <ol className="relative border-l-4 border-purple-500 ml-4">
          {experiences.map(({ id, company, role, period, description }) => (
            <li key={id} className="mb-10 ml-6">
              <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-2 top-2"></div>
              <h3 className="text-2xl font-semibold">{company}</h3>
              <p className="italic text-sm mb-2">{role} • {period}</p>
              <ul className="list-disc ml-6 text-sm">
                {description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
