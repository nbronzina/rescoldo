"use client";

import { useEffect, useState } from "react";

const WMO_CODES: Record<number, string> = {
  0: "Despejado",
  1: "Mayormente despejado",
  2: "Parcialmente nublado",
  3: "Nublado",
  45: "Niebla",
  48: "Niebla helada",
  51: "Llovizna ligera",
  53: "Llovizna",
  55: "Llovizna intensa",
  61: "Lluvia ligera",
  63: "Lluvia",
  65: "Lluvia intensa",
  71: "Nevada ligera",
  73: "Nevada",
  75: "Nevada intensa",
  80: "Chubascos ligeros",
  81: "Chubascos",
  82: "Chubascos intensos",
  95: "Tormenta",
  96: "Tormenta con granizo",
  99: "Tormenta con granizo intenso",
};

const MESES = [
  "enero", "febrero", "marzo", "abril", "mayo", "junio",
  "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
];

const DIAS = [
  "domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado",
];

export function WeatherWidget() {
  const [weather, setWeather] = useState<string | null>(null);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const res = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=-34.6677&longitude=-58.3716&current=temperature_2m,weathercode"
        );
        const data = await res.json();
        const temp = Math.round(data.current.temperature_2m);
        const code = data.current.weathercode as number;
        const condition = WMO_CODES[code] || "Variable";

        const now = new Date();
        const dia = DIAS[now.getDay()];
        const fecha = now.getDate();
        const mes = MESES[now.getMonth()];

        setWeather(
          `Barracas, Buenos Aires — ${temp}°C · ${condition} · ${dia} ${fecha} de ${mes} de 2030`
        );
      } catch {
        const now = new Date();
        const dia = DIAS[now.getDay()];
        const fecha = now.getDate();
        const mes = MESES[now.getMonth()];
        setWeather(
          `Barracas, Buenos Aires — ${dia} ${fecha} de ${mes} de 2030`
        );
      }
    }
    fetchWeather();
  }, []);

  if (!weather) return null;

  return (
    <div className="fixed top-20 right-0 z-40 px-page">
      <p className="font-mono text-xs text-muted">{weather}</p>
    </div>
  );
}
