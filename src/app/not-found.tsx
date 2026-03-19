import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-page">
      <div className="max-w-measure text-center">
        <p className="font-serif text-xl text-text leading-body mb-6">
          Esta sección de la temporada está cerrada.
        </p>
        <p className="font-serif text-lg text-secondary leading-body mb-2">
          Rescoldo opera entre marzo y mayo.
        </p>
        <p className="font-serif text-lg text-secondary leading-body mb-12">
          Próxima apertura: otoño 2031.
        </p>
        <Link
          href="/"
          className="font-sans text-sm text-accent hover:text-text transition-colors"
        >
          &larr; Volver al journal
        </Link>
      </div>
    </div>
  );
}
