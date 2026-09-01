import {
  Gauge,
  Globe2,
  Megaphone,
  Wrench,
  type LucideIcon,
} from "lucide-react";

/**
 * Contenuti ripetuti del sito.
 * Per aggiungere un servizio, progetto o passaggio del metodo basta duplicare
 * un oggetto nell'elenco corrispondente mantenendo la stessa struttura.
 */

export interface Service {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
}

export interface Project {
  name: string;
  type: string;
  description: string;
  services: string;
  link?: string;
  theme: "blue" | "coral" | "lime";
  initials: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  text: string;
}

export const services: Service[] = [
  {
    number: "01",
    title: "Siti web & WordPress",
    description:
      "Siti vetrina chiari, veloci e facili da gestire, progettati attorno agli obiettivi reali della tua attività.",
    icon: Globe2,
    tags: ["UX/UI", "Responsive", "WordPress"],
  },
  {
    number: "02",
    title: "Restyling & performance",
    description:
      "Rinnoviamo siti esistenti migliorando gerarchia, usabilità mobile, tempi di caricamento e qualità percepita.",
    icon: Gauge,
    tags: ["Audit", "Restyling", "Velocità"],
  },
  {
    number: "03",
    title: "SEO locale & Google Ads",
    description:
      "Ti aiutiamo a farti trovare dalle persone giuste con basi SEO solide e campagne costruite su obiettivi misurabili.",
    icon: Megaphone,
    tags: ["SEO locale", "Google Ads", "Report"],
  },
  {
    number: "04",
    title: "Manutenzione & supporto",
    description:
      "Aggiornamenti, sicurezza e assistenza continuativa: il sito resta affidabile anche dopo la messa online.",
    icon: Wrench,
    tags: ["Sicurezza", "Backup", "Assistenza"],
  },
];

export const projects: Project[] = [
  {
    name: "Dimensione Salute",
    type: "Strutture socio-sanitarie",
    description:
      "Un’identità digitale chiara e accessibile, pensata per trasmettere accoglienza, fiducia e solidità.",
    services: "Sito web · SEO · Manutenzione",
    link: "https://dimensione-salute.it",
    theme: "blue",
    initials: "DS",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Ascolto",
    text: "Partiamo da obiettivi, pubblico, contenuti e vincoli reali.",
  },
  {
    number: "02",
    title: "Direzione",
    text: "Definiamo struttura, stile e priorità in una proposta comprensibile.",
  },
  {
    number: "03",
    title: "Realizzazione",
    text: "Costruiamo, testiamo e rifiniamo il progetto su desktop e mobile.",
  },
  {
    number: "04",
    title: "Continuità",
    text: "Dopo il lancio restiamo presenti con manutenzione e miglioramenti.",
  },
];
