import { WebGLShader } from "@/components/ui/web-gl-shader";
import { LiquidButton } from '@/components/ui/liquid-glass-button';
import { BubbleText } from "@/components/ui/bubble-text"; // <-- Nuevo componente importado
import { Mail, Code2, Database } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa"; 

export default function PortfolioPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-x-hidden bg-black font-sans">
      {/* Fondo WebGL de Three.js */}
      <WebGLShader /> 

      {/* Contenedor principal */}
      <div className="relative z-10 w-full max-w-4xl px-4 py-12 md:py-20 group">
        <main className="relative border border-[#27272a] bg-black/40 backdrop-blur-md p-8 md:p-12 rounded-2xl shadow-2xl overflow-hidden transition-all duration-700 hover:border-[#3f3f46] hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.2)]">
          
          {/* Luz de fondo sutil */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-blue-500/10 blur-[80px] -z-10 pointer-events-none"></div>

          {/* Header Section */}
          <div className="text-center mb-10">
            <h1 className="mb-4 text-5xl tracking-tighter md:text-7xl flex flex-col items-center justify-center">
              {/* Aquí usamos el efecto Bubble Text */}
              <BubbleText text="Ángel Luis" />
              <BubbleText text="Sánchez Pérez" className="mt-2 text-4xl md:text-6xl" />
            </h1>
            
            <p className="text-white/70 px-6 text-sm md:text-xl font-light mt-6">
              Estudiante de DAM | <span className="text-blue-400 font-medium">Full Stack Developer</span> en formación
            </p>
            
            <div className="my-6 flex items-center justify-center gap-2 hover:scale-105 transition-transform cursor-default">
              <span className="relative flex h-3 w-3 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]"></span>
              </span>
              <p className="text-sm font-medium text-green-400 drop-shadow-[0_0_8px_rgba(34,197,94,0.4)]">En busca de prácticas/empleo</p>
            </div>
          </div>

          {/* About Section */}
          <section className="mb-12 border-t border-[#27272a] pt-8">
            <h2 className="text-2xl text-white font-bold mb-4 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-blue-500 rounded-full"></span>
              Sobre Mí
            </h2>
            <p className="text-white/60 leading-relaxed text-sm md:text-base hover:text-white/90 transition-colors duration-300">
              ¡Hola! Soy desarrollador de aplicaciones multiplataforma en formación en Sevilla. Me engancha la programación porque convierte lógica en algo que funciona de verdad. Actualmente cursando mi primer año de DAM, donde cada proyecto es una excusa para escribir mejor código y entender cómo encajan las piezas. Soy constante, aprendo rápido y no le tengo miedo a los errores — son parte del proceso.
            </p>
          </section>

          {/* Experience & Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            
            {/* Experience Card */}
            <div className="group border border-[#27272a] rounded-xl p-6 bg-white/5 hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-[0_10px_30px_-15px_rgba(59,130,246,0.4)] hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl text-white font-semibold mb-4 flex items-center gap-2">
                <Code2 className="text-blue-400 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" size={20} />
                Experiencia
              </h3>
              <div className="mb-4">
                <h4 className="text-white font-medium group-hover:text-blue-200 transition-colors">Desarrollador Junior (FP Dual)</h4>
                <p className="text-blue-400 text-xs mb-2">Versus e-Learning Group • Ene. 2026 - Mar. 2026</p>
                <p className="text-white/60 text-sm group-hover:text-white/80 transition-colors">Inmersión en el ecosistema tecnológico, observando la gestión de plataformas e-learning de alto impacto social.</p>
              </div>
            </div>

            {/* Skills Card */}
            <div className="group border border-[#27272a] rounded-xl p-6 bg-white/5 hover:-translate-y-2 hover:border-emerald-500/30 hover:shadow-[0_10px_30px_-15px_rgba(16,185,129,0.4)] hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl text-white font-semibold mb-4 flex items-center gap-2">
                <Database className="text-emerald-400 group-hover:-translate-y-1 group-hover:scale-110 transition-transform duration-300" size={20} />
                Tecnologías
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Java', 'SQL', 'HTML5', 'CSS3', 'XML', 'React', 'Tailwind'].map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 bg-[#27272a] text-white/80 text-xs rounded-full border border-[#3f3f46] hover:bg-emerald-500/20 hover:text-emerald-300 hover:border-emerald-500/50 hover:scale-110 transition-all duration-300 cursor-default shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10 border-t border-[#27272a] pt-10">
            <a href="https://www.linkedin.com/in/angelluissanchezperez/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform duration-300">
              <LiquidButton className="text-white border-white/20 rounded-full bg-blue-600/20 shadow-[0_0_15px_rgba(37,99,235,0.3)]" size="xl">
                <FaLinkedin size={18} /> 
                Conectar en LinkedIn
              </LiquidButton>
            </a>
            
            <div className="flex gap-4">
              <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <button className="p-3 rounded-full border border-[#27272a] bg-black/50 text-white/70 hover:text-black hover:bg-white hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                  <FaGithub size={20} />
                </button>
              </a>
              <a href="mailto:tu-correo@email.com" aria-label="Enviar email">
                <button className="p-3 rounded-full border border-[#27272a] bg-black/50 text-white/70 hover:text-white hover:bg-blue-600 hover:border-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.6)] hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                  <Mail size={20} />
                </button>
              </a>
            </div>
          </div>

        </main>
      </div>
    </div>
  )
}