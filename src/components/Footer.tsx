export function Footer() {
  return (
    <footer className="border-t border-surface mt-32">
      <div className="max-w-page mx-auto px-page py-16">
        <div className="max-w-column mx-auto">
          {/* Datos del proyecto */}
          <p className="font-sans text-sm font-medium tracking-widest uppercase text-text mb-6">
            Rescoldo
          </p>

          <div className="space-y-1 text-sm text-secondary font-sans mb-8">
            <p>Lanín 234, Barracas, Buenos Aires</p>
            <p>Primera temporada: marzo–mayo 2030</p>
          </div>

          {/* Créditos */}
          <div className="space-y-1 text-sm text-secondary font-sans mb-8">
            <p>Texto: Julián Arce</p>
            <p>Cerámica y diseño: Victoria Nabel</p>
            <p>Espacio: Nicolás Sardi, Mara Villanueva, Tomás Ferreyra</p>
            <p>Fotografía: Sebastián Ríos</p>
          </div>

          {/* Legal diegético */}
          <div className="space-y-1 text-xs text-muted font-mono mb-12">
            <p>CUIT: 20-42187634-9</p>
            <p>&copy; 2030 Julián Arce. Todos los derechos reservados.</p>
          </div>

          {/* Separador */}
          <div className="border-t border-surface pt-8">
            <p className="text-xs text-muted leading-relaxed max-w-measure">
              Este es un proyecto de ficción que explora el futuro posible de la
              gastronomía de Buenos Aires. Un proyecto de{" "}
              <a
                href="https://www.nicolasbronzina.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-secondary transition-colors"
              >
                Nicolás Bronzina
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
