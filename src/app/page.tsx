import { HeroParallax } from "@/components/HeroParallax";
import { WeatherWidget } from "@/components/WeatherWidget";
import { Declaracion } from "@/components/Declaracion";
import { Territorios } from "@/components/Territorios";
import { CitaPrensa } from "@/components/CitaPrensa";
import { Platos } from "@/components/Platos";
import { Equipo } from "@/components/Equipo";
import { ListaEspera } from "@/components/ListaEspera";

export default function Home() {
  return (
    <div>
      <WeatherWidget />
      <HeroParallax />
      <Declaracion />
      <Territorios />
      <CitaPrensa />
      <Platos />
      <Equipo />
      <ListaEspera />
    </div>
  );
}
