import { HeroParallax } from "@/components/HeroParallax";
import { Declaracion } from "@/components/Declaracion";
import { Territorios } from "@/components/Territorios";
import { CitaPrensa } from "@/components/CitaPrensa";
import { Platos } from "@/components/Platos";
import { Vino } from "@/components/Vino";
import { Equipo } from "@/components/Equipo";
import { JournalCTA } from "@/components/JournalCTA";
import { ListaEspera } from "@/components/ListaEspera";

export default function Home() {
  return (
    <>
      <HeroParallax />
      <Declaracion />
      <Territorios />
      <CitaPrensa />
      <Platos />
      <Vino />
      <Equipo />
      <JournalCTA />
      <ListaEspera />
    </>
  );
}
