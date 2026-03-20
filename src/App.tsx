/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Network, 
  Zap, 
  Server, 
  Wifi, 
  CheckCircle2, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X,
  ChevronRight,
  Globe
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const SERVICES = [
  {
    icon: Network,
    title: "Cableado Estructurado",
    description: "Instalación certificada de categorías 6, 6a y 7 siguiendo estándares internacionales TIA/EIA."
  },
  {
    icon: Zap,
    title: "Fibra Óptica",
    description: "Fusiones, enlaces troncales y redes GPON para alta velocidad y baja latencia."
  },
  {
    icon: Server,
    title: "Data Center & Racks",
    description: "Organización de armarios, peinado de cables y mantenimiento preventivo de nodos centrales."
  },
  {
    icon: Wifi,
    title: "Equipamiento WiFi",
    description: "Configuración de Access Points corporativos y switches gestionables de última milla."
  }
];

const PORTFOLIO = [
  "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1558346489-19413928158b?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800"
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState<'ESP' | 'ENG'>('ESP');

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Network className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-slate-900">
                Net<span className="text-blue-600">Connect</span>
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <div className="flex gap-6 text-sm font-medium text-slate-600">
                <a href="#servicios" className="hover:text-blue-600 transition-colors">Servicios</a>
                <a href="#nosotros" className="hover:text-blue-600 transition-colors">Nosotros</a>
                <a href="#proyectos" className="hover:text-blue-600 transition-colors">Proyectos</a>
              </div>
              <div className="h-6 w-px bg-slate-200" />
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-xs font-bold">
                  <button 
                    onClick={() => setLang('ESP')}
                    className={`${lang === 'ESP' ? 'text-blue-600' : 'text-slate-400'} hover:text-blue-500 transition-colors`}
                  >
                    ESP
                  </button>
                  <span className="text-slate-300">|</span>
                  <button 
                    onClick={() => setLang('ENG')}
                    className={`${lang === 'ENG' ? 'text-blue-600' : 'text-slate-400'} hover:text-blue-500 transition-colors`}
                  >
                    ENG
                  </button>
                </div>
                <a 
                  href="#contacto"
                  className="bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-blue-800 transition-all shadow-sm"
                >
                  Solicitar Cotización
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-slate-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                <a href="#servicios" className="block text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Servicios</a>
                <a href="#nosotros" className="block text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Nosotros</a>
                <a href="#proyectos" className="block text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Proyectos</a>
                <button className="w-full bg-blue-700 text-white py-3 rounded-lg font-bold">
                  Solicitar Cotización
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <header className="relative h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=2000" 
            alt="Server Room"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6 font-display">
              Conectividad de Alto Rendimiento para tu Empresa
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              Expertos en cableado estructurado, fibra óptica y equipamiento de red de última generación para entornos corporativos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/20">
                Solicitar Cotización
              </button>
              <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all">
                Ver Servicios
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Services Section */}
      <section id="servicios" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4 font-display">Servicios Especializados</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6" />
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Ofrecemos soluciones integrales de infraestructura IT diseñadas para la máxima escalabilidad y confiabilidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all group"
              >
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="nosotros" className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-extrabold mb-10 font-display">¿Por qué confiar en NetConnect?</h2>
              <div className="space-y-8">
                {[
                  { title: "Experiencia Comprobada", desc: "Más de 10 años diseñando e instalando infraestructuras críticas para sector financiero y corporativo." },
                  { title: "Materiales Certificados", desc: "Trabajamos exclusivamente con marcas líderes (Panduit, Leviton, CommScope) para garantizar garantías extendidas." },
                  { title: "Soporte Post-Instalación", desc: "Entrega de planos As-Built, escaneo de puntos y soporte técnico dedicado ante cualquier incidencia." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="mt-1">
                      <CheckCircle2 className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=1000" 
                  alt="Technician"
                  className="w-full h-[500px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-blue-600/10" />
              </div>
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-10 -left-10 bg-blue-600 p-8 rounded-2xl shadow-xl hidden md:block"
              >
                <div className="text-5xl font-black mb-1">500+</div>
                <div className="text-sm font-bold uppercase tracking-wider opacity-80">Proyectos Exitosos</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="proyectos" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4 font-display">Portafolio de Proyectos</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Orden, estética y funcionalidad en cada cable tendido.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PORTFOLIO.map((img, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg"
              >
                <img 
                  src={img} 
                  alt={`Project ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <p className="text-xs font-bold uppercase tracking-widest mb-1">Corporativo</p>
                    <h4 className="text-lg font-bold">Infraestructura Nivel 3</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/50 overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-2/5 bg-blue-700 p-12 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-4xl font-extrabold mb-6 font-display">Contáctanos</h2>
                <p className="text-blue-100 text-lg mb-12 leading-relaxed">
                  ¿Listo para mejorar la infraestructura de tu empresa? Déjanos tus datos y un especialista te contactará en menos de 24 horas.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6" />
                    </div>
                    <span className="text-lg font-medium">+52 (55) 1234 5678</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6" />
                    </div>
                    <span className="text-lg font-medium">ventas@netconnect.pro</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-12 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <Network className="w-5 h-5" />
                  <span className="font-bold tracking-tight">NetConnect S.A. de C.V.</span>
                </div>
              </div>
            </div>

            <div className="lg:w-3/5 p-12">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Nombre Completo</label>
                    <input 
                      type="text" 
                      placeholder="Ej. Juan Pérez"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Correo Corporativo</label>
                    <input 
                      type="email" 
                      placeholder="juan@empresa.com"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Servicio de Interés</label>
                  <select className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none appearance-none">
                    <option>Cableado Estructurado</option>
                    <option>Fibra Óptica</option>
                    <option>Equipamiento WiFi</option>
                    <option>Data Center Solutions</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Mensaje</label>
                  <textarea 
                    rows={4}
                    placeholder="Cuéntanos sobre tu proyecto..."
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none resize-none"
                  />
                </div>
                <button className="w-full bg-blue-700 text-white font-bold py-5 rounded-xl hover:bg-blue-800 transition-all shadow-xl shadow-blue-900/20 text-lg">
                  Enviar Solicitud
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <Network className="w-8 h-8 text-blue-500" />
                <span className="text-2xl font-extrabold tracking-tight">NetConnect</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Soluciones de infraestructura de red robustas y certificadas para el mercado corporativo moderno.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Servicios</h4>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Cableado Estructurado</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Fibra Óptica</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Data Centers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Redes Inalámbricas</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Certificaciones</h4>
              <div className="flex flex-wrap gap-3">
                {['RCDD', 'TIA/EIA', 'PANDUIT', 'LEVITON'].map((cert) => (
                  <span key={cert} className="px-3 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-bold tracking-widest text-slate-300">
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Ubicación</h4>
              <div className="flex gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                <p>Av. Insurgentes Sur 1234, Piso 10<br />Ciudad de México, México 03100</p>
              </div>
            </div>
          </div>

          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
            <p>© 2026 NetConnect S.A. de C.V. Todos los derechos reservados.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacidad</a>
              <a href="#" className="hover:text-white transition-colors">Términos</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
