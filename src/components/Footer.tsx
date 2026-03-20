import { WeatherWidget } from "./WeatherWidget";

export function Footer() {
  return (
    <footer className="border-t border-surface mt-32">
      <div className="max-w-page mx-auto px-page py-16">
        <div className="max-w-column mx-auto">
          {/* Bloque 1 — Info diegética */}
          <p className="font-sans text-sm font-medium tracking-widest uppercase text-text mb-6">
            Rescoldo
          </p>

          <div className="space-y-1 text-sm text-secondary font-sans mb-4">
            <p>Lanín 234, Barracas, Buenos Aires</p>
            <p>Servicio: jueves a lunes · 20h</p>
            <p>Cerrado martes y miércoles</p>
            <p>Primera temporada: marzo–mayo 2030</p>
          </div>

          <p className="text-sm text-secondary font-sans mb-4">
            rescoldo@lanin234.com.ar
          </p>

          <div className="mb-8">
            <WeatherWidget />
          </div>

          {/* Separador entre bloques */}
          <div className="border-t border-surface pt-8">
            {/* Bloque 2 — Créditos */}
            <div className="space-y-1 text-sm font-sans mb-8">
              <p><span className="text-secondary">Texto: </span><span className="text-text">Julián Arce</span></p>
              <p><span className="text-secondary">Fermentación: </span><span className="text-text">Santiago Orbe</span></p>
              <p><span className="text-secondary">Cerámica y diseño: </span><span className="text-text">Victoria Nabel</span></p>
              <p><span className="text-secondary">Servicio: </span><span className="text-text">Lara Espina</span></p>
              <p><span className="text-secondary">Espacio: </span><span className="text-text">Nicolás Sardi, Inés Villanueva, Tomás Ferreyra</span></p>
              <p><span className="text-secondary">Fotografía: </span><span className="text-text">Sebastián Ríos</span></p>
            </div>

            {/* Legal diegético */}
            <div className="space-y-1 text-xs text-muted font-mono mb-12">
              <p>CUIT: 20-42187634-9</p>
              <p>&copy; 2030 Julián Arce. Todos los derechos reservados.</p>
            </div>

            {/* Disclaimer */}
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
      </div>
    </footer>
  );
}
