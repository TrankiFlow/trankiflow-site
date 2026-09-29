import './App.css'; // Mágia de estilos externa

export default function App() {
  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/trankiflow.app/',
      svg: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/TrankiFlow',
      svg: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: 'X (Twitter)',
      url: 'https://x.com/trankiflowApp',
      svg: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@trankiflow.app',
      svg: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.525 2.015a.056.056 0 0 0-.01 0l-.025.002a7.287 7.287 0 0 1-5.217-2.017H3.27v16.126a4.838 4.838 0 1 1-4.838-4.838c.28 0 .55.025.815.072V7.27a8.868 8.868 0 0 0-.815-.038 8.838 8.838 0 1 0 8.838 8.838V8.163a11.246 11.246 0 0 0 5.255 1.298V5.42a7.286 7.286 0 0 1-4.525-1.921l-.032-.027a7.195 7.195 0 0 1-.533-1.457z"/>
        </svg>
      )
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@trankiflowapp',
      svg: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    {
      name: 'Blog',
      url: 'https://trankiflow.hashnode.dev',
      svg: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
          <line x1="8" y1="7" x2="16" y2="7"/>
          <line x1="8" y1="11" x2="14" y2="11"/>
        </svg>
      )
    },
    {
      name: 'Email',
      url: 'mailto:trankiflow.app@gmail.com',
      svg: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 6.788l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.042l4.616-3.736v9.432l-4.616-5.696z"/>
        </svg>
      )
    }
  ];

  return (
    <div className="app-container">
      {/* Contenido Principal */}
      <main className="main-content">
        <h1 className="main-title">
          TrankiFlow<span className="title-highlight">.com.ar</span>
        </h1>
        
        <p className="subtitle">
          ¡El <em>Hakuna Matata</em> del desarrollo web y la tecnología! 🦁💻✨
        </p>

        <div className="status-banner">
          <p className="status-text">
            Sin estrés, sin bugs raros y con mucho flujo de código.
          </p>
          <p className="status-highlight">
            🚀 Muy pronto online...
          </p>
        </div>

        <p className="description">
          Plataforma de cursos, aplicaciones y servicios online.
          Conectando redes con N8N
        </p>

        {/* SECCIÓN: AUTOMATION LAB / CASO DE ESTUDIO */}
        <section className="automation-section">
          <div className="section-container">
            
            {/* Subtítulo y Título de la sección */}
            <span className="section-subtitle">
              Tranki Flow / Automation Lab
            </span>
            <h2 className="section-title">
              Soluciones Tecnológicas & Automatización de Contenidos
            </h2>
            <p className="section-description">
              Diseñamos e implementamos flujos de trabajo inteligentes para organizaciones, proyectos y empresas. Eliminamos tareas repetitivas y multiplicamos la presencia digital optimizando los recursos al máximo.
            </p>

            {/* Tarjeta destacada del caso real */}
            <div className="case-study-card">
              <div className="card-header">
                <h3 className="card-title">
                  ⚡ Motor de Distribución Multiplataforma (n8n Engine)
                </h3>
                <span className="card-badge">
                  Caso de Estudio / En Producción
                </span>
              </div>

              <p className="card-description">
                Un sistema orquestado en <strong>n8n</strong> que toma un único video (como un YouTube Short) y automáticamente procesa, transforma y distribuye el mensaje adaptado para Instagram, TikTok, X (Twitter) y blogs técnicos.
              </p>

              {/* Tarjetas pequeñas de impacto */}
              <div className="impact-grid">
                <div className="impact-item">
                  <strong className="impact-title green">0% Trabajo Manual</strong>
                  <span className="impact-desc">Publicación automatizada sin intervención humana tras la subida inicial.</span>
                </div>
                <div className="impact-item">
                  <strong className="impact-title cyan">Omnicanalidad Real</strong>
                  <span className="impact-desc">Presencia constante en 5 plataformas simultáneas en cuestión de segundos.</span>
                </div>
                <div className="impact-item">
                  <strong className="impact-title green">Escalabilidad & Ahorro</strong>
                  <span className="impact-desc">Ideal para PyMEs y marcas en crecimiento: maximiza el alcance reduciendo horas de trabajo.</span>
                </div>
              </div>
            </div>

            {/* Llamado a la acción rápido */}
            <div className="cta-wrapper">
              <p className="cta-text">
                ¿Querés optimizar la comunicación de tu organización o proyecto?
              </p>
              <a href="#contacto" className="cta-button">
                Hablemos de tu Proyecto
              </a>
            </div>

          </div>
        </section>
      </main>

      {/* Footer con Redes Sociales */}
      <footer className="footer">
        <p className="footer-text">
          Conectate con nosotros en nuestras redes:
        </p>
        
        <div className="social-links">
          {socialLinks.map((item, index) => (
            <a 
              key={index} 
              href={item.url} 
              target="_blank" 
              rel="noopener noreferrer"
              title={item.name}
              className="social-link"
            >
              {item.svg}
            </a>
          ))}
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} TrankiFlow. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}