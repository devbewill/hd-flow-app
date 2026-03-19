"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertTriangle,
  XCircle,
  MessageSquare,
  Code2,
  ArrowRight,
  TrendingUp,
  CheckCircle,
  Shield,
  Cpu,
  FileText,
  Database,
  Layers,
  Activity,
  Filter,
  Inbox,
  Lightbulb,
  Target,
  Rocket,
  GitCommit,
  LayoutDashboard,
  TerminalSquare,
  ShieldCheck,
  Workflow,
  FileCode2,
  Server,
  LayoutTemplate,
  Zap,
  Users,
  EyeOff,
  Network,
} from "lucide-react";

// ─── VISUAL COMPONENTS ───────────────────────────────────────────────────────

const Visual1 = () => (
  <div className="flex flex-col items-center w-full space-y-6">
    <div className="flex justify-around w-full">
      <div className="flex flex-col items-center p-4 bg-red-50 border border-red-200 rounded-xl">
        <EyeOff size={24} className="text-red-500 mb-2" />
        <span className="text-xs font-bold text-red-800 text-center">
          Zero Visibilità
          <br />
          Pre-Task
        </span>
      </div>
      <div className="flex flex-col items-center p-4 bg-orange-50 border border-orange-200 rounded-xl">
        <Network size={24} className="text-orange-500 mb-2" />
        <span className="text-xs font-bold text-orange-800 text-center">
          Lavoro a<br />
          Silos
        </span>
      </div>
    </div>
    <div className="flex justify-center">
      <ArrowRight className="rotate-90 text-gray-300" />
    </div>
    <div className="w-full p-5 bg-gray-900 border border-gray-700 rounded-xl shadow-lg flex flex-col items-center">
      <div className="flex items-center space-x-3 mb-3">
        <AlertTriangle className="text-yellow-400" />
        <span className="text-sm font-bold text-white">"Pure Vibe Coding"</span>
      </div>
      <p className="text-xs text-gray-400 text-center leading-relaxed">
        L'AI genera codice senza contesto architetturale.
        <br />
        Risultato: inconsistenza, debito tecnico e capacity planning
        impossibile.
      </p>
    </div>
    <div className="flex gap-2 w-full justify-center flex-wrap">
      {["Sprint rinegoziati", "Stime inaffidabili", "0 tracciabilità"].map(
        (t) => (
          <div
            key={t}
            className="flex items-center gap-1 bg-red-50 border border-red-200 rounded-full px-3 py-1"
          >
            <XCircle className="w-3 h-3 text-red-400 flex-shrink-0" />
            <span className="text-xs text-red-700">{t}</span>
          </div>
        ),
      )}
    </div>
  </div>
);

const Visual2 = () => (
  <div className="flex flex-col items-center w-full space-y-5">
    <div className="flex gap-3 justify-center flex-wrap">
      {["Copilot", "ChatGPT", "Claude", "Gemini"].map((tool) => (
        <div
          key={tool}
          className="bg-gray-100 border border-gray-200 rounded-lg p-2 text-center w-16"
        >
          <Cpu className="w-5 h-5 text-gray-400 mx-auto mb-1" />
          <div className="text-xs text-gray-600 font-medium">{tool}</div>
        </div>
      ))}
    </div>
    <div className="text-xs text-gray-400 flex items-center gap-1">
      <AlertTriangle className="w-3 h-3 text-amber-400" />
      Nessun contesto condiviso · Prompt improvvisati
    </div>
    <div className="bg-gray-900 rounded-xl p-4 w-full font-mono text-xs">
      <div className="text-green-400 mb-1">$ generate component</div>
      <div className="text-gray-400">{"// Output generico..."}</div>
      <div className="text-red-400">{"// Viola naming conventions"}</div>
      <div className="text-red-400">{"// Pattern non approvato"}</div>
      <div className="text-yellow-400">{"// Nessun test incluso"}</div>
    </div>
    <div className="flex flex-col gap-2 w-full">
      {[
        {
          label: "Code Review → Audit completo",
          c: "text-red-600 bg-red-50 border-red-200",
        },
        {
          label: "Debito tecnico accumulato",
          c: "text-amber-600 bg-amber-50 border-amber-200",
        },
        {
          label: "1 sprint di refactoring ogni 6 mesi",
          c: "text-orange-600 bg-orange-50 border-orange-200",
        },
      ].map((item) => (
        <div
          key={item.label}
          className={`flex items-center gap-2 border rounded-lg px-3 py-2 ${item.c}`}
        >
          <XCircle className="w-4 h-4 flex-shrink-0" />
          <span className="text-xs font-medium">{item.label}</span>
        </div>
      ))}
    </div>
  </div>
);

const Visual3 = () => {
  const steps = [
    {
      icon: Inbox,
      label: "01. Richiesta",
      c: "bg-gray-100 border-gray-300 text-gray-600",
    },
    {
      icon: Filter,
      label: "02. Triage",
      c: "bg-blue-50 border-blue-300 text-blue-600",
    },
    {
      icon: Lightbulb,
      label: "03. Discovery",
      c: "bg-purple-50 border-purple-300 text-purple-600",
    },
    {
      icon: Target,
      label: "04. Planning",
      c: "bg-indigo-50 border-indigo-300 text-indigo-600",
    },
    {
      icon: Code2,
      label: "05. Dev",
      c: "bg-green-50 border-green-300 text-green-600",
    },
    {
      icon: CheckCircle,
      label: "06. Demo",
      c: "bg-teal-50 border-teal-300 text-teal-600",
    },
    {
      icon: Rocket,
      label: "07. Produzione",
      c: "bg-emerald-50 border-emerald-300 text-emerald-600",
    },
  ];
  return (
    <div className="flex flex-col items-center w-full space-y-2">
      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
        Flusso End-to-End
      </p>
      {steps.map((step, i) => (
        <div key={step.label} className="w-full">
          <div
            className={`flex items-center gap-3 border-2 rounded-xl px-4 py-3 ${step.c}`}
          >
            <step.icon className="w-4 h-4 flex-shrink-0" />
            <span className="text-sm font-semibold">{step.label}</span>
          </div>
          {i < steps.length - 1 && (
            <div className="ml-6 w-0.5 h-2 bg-gray-200" />
          )}
        </div>
      ))}
    </div>
  );
};

const Visual4 = () => (
  <div className="flex flex-col w-full space-y-4">
    <div className="flex justify-between items-center p-4 bg-gray-50 border border-gray-200 rounded-xl">
      <div className="flex flex-col items-center">
        <Database size={22} className="text-gray-600 mb-1" />
        <span className="text-xs font-bold">Codebase</span>
      </div>
      <div className="flex flex-col items-center">
        <LayoutTemplate size={22} className="text-gray-600 mb-1" />
        <span className="text-xs font-bold">Design System</span>
      </div>
      <div className="flex flex-col items-center">
        <Server size={22} className="text-gray-600 mb-1" />
        <span className="text-xs font-bold">Infrastruttura</span>
      </div>
    </div>
    <div className="flex justify-center">
      <ArrowRight className="rotate-90 text-blue-400" />
    </div>
    <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl flex items-center justify-center space-x-3">
      <Workflow className="text-blue-600" />
      <span className="text-sm font-bold text-blue-800">
        CI/CD Context Extractor (Repomix)
      </span>
    </div>
    <div className="flex justify-center">
      <ArrowRight className="rotate-90 text-blue-400" />
    </div>
    <div className="p-4 bg-gray-900 text-white rounded-xl shadow-lg flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <FileCode2 className="text-green-400" />
        <div className="flex flex-col">
          <span className="text-sm font-bold">global-context.md</span>
          <span className="text-[10px] text-gray-400">
            Iniettato nei System Prompts
          </span>
        </div>
      </div>
      <ShieldCheck className="text-green-400" />
    </div>
  </div>
);

const Visual5 = () => (
  <div className="flex flex-col items-center w-full space-y-4">
    <div className="w-full p-4 bg-white border border-gray-200 rounded-xl shadow-sm">
      <div className="text-xs font-bold text-gray-400 uppercase mb-3">
        Portale Intake
      </div>
      {[
        "Descrizione del problema",
        "Utenti impattati",
        "KPI atteso",
        "Urgenza (1–5)",
      ].map((f) => (
        <div key={f} className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0" />
          <div className="h-6 bg-gray-100 rounded flex-1 flex items-center px-2">
            <span className="text-xs text-gray-400">{f}</span>
          </div>
        </div>
      ))}
      <div className="h-8 w-full bg-blue-600 rounded mt-3 flex items-center justify-center text-white text-xs font-bold">
        Invia Richiesta
      </div>
    </div>
    <div className="flex justify-center">
      <ArrowRight className="rotate-90 text-gray-300" />
    </div>
    <div className="p-3 bg-purple-50 border border-purple-200 rounded-xl text-sm font-bold text-purple-800 text-center w-full">
      Product Director — Triage (Impatto × Urgenza)
    </div>
    <div className="flex w-full justify-around mt-1 gap-2">
      {[
        { label: "Bug → Jira", c: "bg-red-50 border-red-200 text-red-700" },
        {
          label: "Feature → PM",
          c: "bg-green-50 border-green-200 text-green-700",
        },
        {
          label: "CR → Backlog",
          c: "bg-amber-50 border-amber-200 text-amber-700",
        },
      ].map((lane) => (
        <div
          key={lane.label}
          className={`border rounded-lg px-2 py-2 text-xs font-bold text-center flex-1 ${lane.c}`}
        >
          {lane.label}
        </div>
      ))}
    </div>
  </div>
);

const Visual6 = () => (
  <div className="relative w-full bg-gray-900 rounded-xl border border-gray-700 overflow-hidden flex flex-col shadow-2xl">
    <div className="h-8 bg-gray-800 border-b border-gray-700 flex items-center px-4 space-x-2">
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
      </div>
      <span className="text-[10px] font-mono text-gray-300 ml-2">
        PM + Claude — Prototipazione
      </span>
    </div>
    <div className="p-4 flex flex-col space-y-4 font-mono text-xs">
      <div className="text-gray-400">
        {">"} Analisi caricata. Genero prototipo con @DesignSystem...
      </div>
      <div className="p-4 bg-white rounded-lg flex flex-col gap-3">
        <div className="h-3 w-1/3 bg-gray-200 rounded" />
        <div className="flex space-x-2">
          <div className="h-8 w-8 bg-blue-100 rounded-full flex-shrink-0" />
          <div className="h-8 flex-1 bg-gray-100 rounded" />
        </div>
        <div className="h-8 bg-gray-100 rounded" />
        <div className="flex justify-end">
          <div className="px-4 py-1.5 bg-blue-600 text-white rounded text-[10px] font-sans font-bold cursor-pointer">
            Approva Prototipo ✓
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Visual7 = () => (
  <div className="w-full bg-[#1e1e1e] rounded-xl overflow-hidden shadow-xl border border-gray-700">
    <div className="flex items-center px-4 py-2 bg-[#2d2d2d] border-b border-gray-700 space-x-2">
      <TerminalSquare size={14} className="text-gray-400" />
      <span className="text-xs text-gray-300 font-mono">
        Terminal — Claude Code + backlog.md
      </span>
    </div>
    <div className="p-4 font-mono text-xs leading-relaxed space-y-1">
      <div className="text-gray-400">$ claude --task-file backlog.md \</div>
      <div className="text-gray-400 ml-4">--context global-context.md \</div>
      <div className="text-gray-400 ml-4">--mode tdd</div>
      <div className="mt-2 text-blue-400">
        Caricamento guardrails da global-context.md... OK
      </div>
      <div className="text-gray-300">
        Esecuzione Task 1/3: "Setup API Route"
      </div>
      <div className="text-yellow-300">
        Generazione Unit Tests (12/12)... Fatto.
      </div>
      <div className="text-green-400">
        Implementazione codice... Fatto. Coverage: 94%
      </div>
      <div className="text-green-300 font-bold">✓ PR pronta per review →</div>
    </div>
  </div>
);

const Visual8 = () => {
  const weeks = [
    {
      week: "Settimane 1–3",
      label: "Setup",
      tasks: [
        "Context Registry configurato",
        "Portale intake attivo",
        "Tool AI integrati",
      ],
      c: "border-blue-400 bg-blue-50",
      dot: "bg-blue-500",
    },
    {
      week: "Settimane 4–5",
      label: "Esecuzione",
      tasks: [
        "Feature reale sul processo",
        "KPI tracciati su Jira",
        "Frizioni identificate",
      ],
      c: "border-indigo-400 bg-indigo-50",
      dot: "bg-indigo-500",
    },
    {
      week: "Settimana 6",
      label: "Chiusura",
      tasks: [
        "Delta vs baseline",
        "Retrospettiva team",
        "Presentazione dati e next step",
      ],
      c: "border-green-400 bg-green-50",
      dot: "bg-green-500",
    },
  ];
  return (
    <div className="flex flex-col w-full space-y-3">
      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
        Piano Pilota — 4 Settimane
      </p>
      {weeks.map((w) => (
        <div key={w.week} className={`border-2 rounded-xl p-4 ${w.c}`}>
          <div className="flex items-center gap-2 mb-2">
            <div className={`w-2.5 h-2.5 rounded-full ${w.dot}`} />
            <span className="text-xs text-gray-500 font-bold uppercase tracking-wide">
              {w.week}
            </span>
            <span className="text-sm font-bold text-gray-800 ml-1">
              {w.label}
            </span>
          </div>
          {w.tasks.map((t) => (
            <div key={t} className="flex items-center gap-2 mb-1">
              <CheckCircle className="w-3 h-3 text-gray-400 flex-shrink-0" />
              <span className="text-xs text-gray-600">{t}</span>
            </div>
          ))}
        </div>
      ))}
      <div className="text-xs text-gray-400 text-center border border-gray-200 rounded-lg px-4 py-2 bg-white">
        Rischio zero · Pilota senza impatto sugli altri team
      </div>
    </div>
  );
};

const Visual9 = () => {
  const metrics = [
    {
      label: "Capacity recuperata",
      after: "+X%",
      icon: TrendingUp,
      c: "text-green-700 bg-green-50 border-green-300",
    },
    {
      label: "Delivery velocity",
      after: "+X%",
      icon: Zap,
      c: "text-blue-700 bg-blue-50 border-blue-300",
    },
    {
      label: "Sprint Predictability",
      after: "?",
      icon: Target,
      c: "text-indigo-700 bg-indigo-50 border-indigo-300",
    },
    {
      label: "Rework post-rilascio",
      after: "−X",
      icon: CheckCircle,
      c: "text-teal-700 bg-teal-50 border-teal-300",
    },
    {
      label: "Onboarding nuovi dev",
      after: "-X%",
      icon: Users,
      c: "text-purple-700 bg-purple-50 border-purple-300",
    },
  ];
  return (
    <div className="flex flex-col w-full space-y-2">
      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
        KPI Target — Progetto pilota
      </p>
      {metrics.map((m) => (
        <div
          key={m.label}
          className={`flex items-center gap-3 border-2 rounded-xl px-4 py-3 ${m.c}`}
        >
          <m.icon className="w-5 h-5 flex-shrink-0" />
          <span className="text-xs font-semibold text-gray-700 flex-1">
            {m.label}
          </span>
          <span className="text-base font-black">{m.after}</span>
        </div>
      ))}
    </div>
  );
};

// ─── SLIDE DATA ───────────────────────────────────────────────────────────────

const slides = [
  {
    id: "problema",
    sidebarTitle: "00. Il punto di partenza",
    title: "Un processo, non tools a caso.",
    subtitle:
      "L'AI amplifica quello che trova. Se trova un processo solido, lo accelera. Se trova caos, lo scala.",
    content: [
      "Quello che vogliamo costruire è un flusso unico end-to-end in cui una richiesta di business attraversa fasi definite prima di diventare codice. Non per amor di burocrazia, ma perché la tracciabilità e la prevedibilità sono prerequisiti, non bonus.",
      "L'obiettivo non è fare di più: è fare le cose giuste nel modo giusto. Un team che opera con fasi chiare, owner ben definiti e AI contestualizzata non reagisce alle richieste ma le governa.",
    ],
    implementationSteps: [
      "1. Disegnare il flusso completo: dalle richieste al deploy, con un owner e un output tangibile per ogni fase.",
      "2. Definire i constraints di processo: stabilire cosa deve esistere prima di passare alla fase successiva.",
      "3. Scegliere i tool che servono il processo e non il contrario.",
    ],
    impact:
      "Un team che lavora su specifiche validate, AI governata e fasi presidiate produce con una prevedibilità che oggi non è possibile misurare perché non esiste.",
    tools: ["Processo prima dei tools", "Owner per ogni fase"],
    Visual: Visual1,
  },
  {
    id: "ai-caos",
    sidebarTitle: "01. AI Governance",
    title: "AI governata: il vero differenziale",
    subtitle:
      "Non quanti tool AI usiamo ma se producono tutti lo stesso standard.",
    content: [
      "Vogliamo che ogni developer, pm, analyst del team usi l'AI con lo stesso contesto: le nostre convenzioni, la nostra architettura, le nostre regole di sicurezza.",
      "Questo non lo otteniamo con la disciplina individuale, si ottiene con un metodo condiviso: un contesto aziendale (versionato in Git?!) e iniettato come system prompt fisso in ogni tool utilizzato dal team. L'AI smette di essere un jolly e diventa un collaboratore onnisciente che conosce tutto.",
    ],
    implementationSteps: [
      "1. Il team tech documenta le convenzioni implicite della codebase.",
      "2. Quelle convenzioni diventano global-context.md: un file versionato che la CI mantiene aggiornato ad ogni merge.",
      "3. Claude Code viene adottato come standard unico, pre-configurato con quel contesto come system prompt.",
    ],
    impact:
      "Il codice generato dall'AI rispetta i nostri standard senza dipendere dalla capacità del singolo. La qualità diventa strutturale, non personale.",
    tools: [
      "global-context.md (versionato in Git)",
      "Claude Code CLI (standard unico)",
    ],
    Visual: Visual2,
  },
  {
    id: "processo",
    sidebarTitle: "02. Il processo proposto",
    title: "Sette fasi. Un output per ognuna.",
    subtitle: "Il processo è un accordo operativo tra business e IT.",
    content: [
      'Ogni fase produce qualcosa di concreto e usabile nella successiva: un ticket qualificato, un prototipo approvato, una specifica tecnica, del codice testato. Nessun passaggio di consegne a voce, nessun "come ci eravamo detti".',
      "La forza del sistema è nei checkpoint: nessuna feature avanza senza che la fase precedente abbia prodotto il suo output. Questo sposta il controllo qualità all'inizio del processo, dove costa meno intervenire.",
    ],
    implementationSteps: [
      "1. Walkthrough del flow con business e IT su un caso reale che è stato oggetto di discussioni.",
      "2. Nominare l'owner di ogni fase prima di partire: Product, PM, DEV, Analyst.",
      "3. Documentare i checkpoint: cosa deve esistere perché una feature possa avanzare alla fase successiva.",
    ],
    impact:
      "Chi inizia a sviluppare ha già tutto: specifica validata, prototipo approvato, architettura decisa. Il primo giorno si scrive codice anche senza meeting di allineamento.",
    tools: ["Sharepoint :(", "Jira (checkpoint tracking)"],
    Visual: Visual3,
  },
  {
    id: "context",
    sidebarTitle: "03. Context as Code",
    title: "Delegare la memoria storica all'AI",
    subtitle:
      "L'AI non può rispettare le nostre regole se non le conosce. La soluzione è: glielo diciamo noi, una volta sola.",
    content: [
      "Il Codebase Context Registry è un file Markdown versionato in Git che contiene architettura, pattern approvati, naming conventions e policy di sicurezza. Viene rigenerato automaticamente dalla CI a ogni merge su main e rimane sempre aggiornato e sempre disponibile.",
      "Questo file diventa il system prompt fisso di ogni interazione AI del team. Non dipende dal dev che ricorda di specificarlo, non cambia da persona a persona. L'AI lavora sempre con il contesto completo del progetto.",
    ],
    implementationSteps: [
      "1. Il team passa il tempo necessario (1–2 settimane) a documentare le regole implicite della codebase nel primo global-context.md: error logging, best practices, design system, pattern comuni, naming conventions, security.",
      "2. Uno script nella CI mantiene il file sincronizzato con l'evoluzione del codice senza effort manuale, rigenerando automaticamente il file ad ogni merge su main.",
      "3. Il file viene configurato come system prompt obbligatorio su tutti i tool AI del team: skills su Claude, rules su Cursor, system prompt fisso ovunque.",
    ],
    impact:
      "I dev interni o esterni leggono un documento invece di fare shadowing. I senior fanno code review che è più una validazione che un'ispezione alla ricerca di capire cosa stanno guardando.",
    tools: [
      "Repomix (non lo so, l'ho cercato online, non è il mio campo)",
      "WebHook di Bitbucket (come sopra, potrebbe essere l'equivalente delle github actions)",
      "global-context.md (versionato in git)",
    ],
    Visual: Visual4,
  },
  {
    id: "portal",
    sidebarTitle: "04. Richiesta e Triage",
    title: "Nessuna richiesta entra senza essere qualificata.",
    subtitle:
      "Il portale di richiesta non è un'alternativa è l'unico entry point, l'unico canale valido per avanzare una richiesta.",
    content: [
      "Il business compila un form strutturato con campi obbligatori: problema da risolvere, utenti impattati, obiettivo atteso, urgenza. Non è possibile inviare una richiesta incompleta. Questo non è un ostacolo ma rispetto per il tempo di tutti: se non riesci a spiegare il problema in modo chiaro, è improbabile che il team riesca a risolverlo.",
      "Il Product Director riceve le richieste, le valuta e assegna categoria e dimensione. Solo ciò che supera il triage entra in backlog.",
    ],
    implementationSteps: [
      "1. Costruire il form con validazione obbligatoria lato client",
      "2. Collegare il form alla creazione automatica di ticket Jira via API, zero effort manuale di trascrizione.",
    ],
    impact:
      "Il team riceve solo richieste che qualcuno ha già valutato e approvato. Le conversazioni informali non diventano ticket.",
    tools: ["Custom Web Portal (Next.js)", "Jira API / MCP"],
    Visual: Visual5,
  },
  {
    id: "discovery",
    sidebarTitle: "05. Discovery & Prototipazione",
    title: "Il Business approva qualcosa che può cliccare.",
    subtitle:
      "Non un documento da immaginare ma un prototipo navigabile da validare prima che venga scritta riga di codice da un developer.",
    content: [
      "Il PM usa Claude istruito con il Design System per generare un prototipo navigabile. Non un mockup statico: qualcosa di cliccabile che il business usa come se fosse il prodotto finito, identificando gap e correzioni prima che abbiano un costo reale di implementazione.",
      "Il prototipo approvato diventa il Contratto Visivo: allegato alla specifica tecnica, è il riferimento unico e immutabile per dev, QA e business per tutta la durata dello sviluppo. La validazione viene versionata con un TAG su un branch specifico, mergiato al rilascio in produzione.",
    ],
    implementationSteps: [
      "1. Un giorno di workshop pratico per formare i PM sull'uso di Claude come tool di prototipazione rapida.",
      "2. Un template prompt standard che include il Design System come contesto fisso per non dover fare nessuna customizzazione ad hoc ogni volta.",
      "3. La review del prototipo entra nel processo come step obbligatorio: nessun ticket avanza in sprint senza prototipo approvato.",
    ],
    impact:
      "Quello che il business vede prima dello sviluppo è esattamente quello che riceve alla fine. I rework da requisiti fraintesi diventano strutturalmente molto improbabili.",
    tools: ["Claude", "Branch git taggato come [nome_feature_approved]"],
    Visual: Visual6,
  },
  {
    id: "spec-driven",
    sidebarTitle: "06. Spec-Driven Development",
    title: "Il Dev Progetta. L'AI lo costruisce.",
    subtitle:
      "Il dev team smette di leggere requisiti e supporre. Osserva, capisce e prende decisioni architetturali su cose concrete.",
    content: [
      "Con una specifica funzionale, acceptance criteria, e prototipo lo sviluppatore sa con certezza cosa gli viene chiesto di fare. Quello che farà sarà costuirsi la sua spec per claude, partendo da tutto quello che gli è già stato fornito e traducendolo in spec più mirati allo sviluppo. ",
      "Lo SDD non è una best practice, è il meccanismo che rende verificabile il codice AI-generated.",
    ],
    implementationSteps: [
      "1. Training pratico sullo Spec-Driven Development sulla nostra codebase, con backlog.md o Kiro.",
      "2. Claude Code adottato come standard unico, preconfigurato con global-context.md — zero setup individuale.",
      "3. La pipeline CI che non rispettano i requisiti: la coverage diventa un vincolo di sistema, non una responsabilità delegata all'individuo.",
    ],
    impact:
      "Il team tech si concentra sulle decisioni che contano senza perdere tempo a fare meeting, prendere appunti e indovinare cose. Il team scala la capacità produttiva senza aggiungere persone.",
    tools: ["Claude Code", "Kiro (AWS) / Backlog.md / BMAD"],
    Visual: Visual7,
  },
  {
    id: "pilota",
    sidebarTitle: "07. Il Progetto pilota",
    title: "Dimostrarlo prima di scalarlo.",
    subtitle:
      "Sei settimane, un team, una feature reale. I dati del pilota guidano la scalabilità.",
    content: [
      "Il pilota non è un esperimento: è una prova di concetto controllata. Selezioniamo un team di quattro o cinque persone, una feature target e applicano il processo completo per sei settimane. Tracciando ogni fase",
      "L'obiettivo del pilota non è la perfezione è il delta misurabile rispetto a come lavoriamo oggi. Stime sbagliate, rework, velocità di consegna. Al termine, i dati parlano da soli e la decisione di scalare diventa ovvia o informata.",
    ],
    implementationSteps: [
      "1. Settimane 1–3: Setup -> Context Registry configurato, portale richieste attivo, tool AI pronti e integrati.",
      "2. Settimane 4–5: Esecuzione -> La feature avanza seguendo ogni fase del processo, checkpoint tracciati in tempo reale su Jira.",
      "3. Settimana 6: Chiusura -> Confronto con la baseline, retrospettiva con il team, presentazione dati e next step.",
    ],
    impact:
      "Se il processo funziona, abbiamo dati reali per giustificare lo scaling. Se emergono frizioni, le identifichiamo su scala piccola prima di investire ulteriormente.",
    tools: ["Jira (tracking)", "Teams → canale #chimelohafattofare"],
    Visual: Visual8,
  },
  {
    id: "roi",
    sidebarTitle: "08. Il ROI Atteso",
    title: "Dall'esperimento all'AHA moment.",
    subtitle:
      "Il risultato non è fare di più con meno è fare le cose giuste con maggior energia, in modo prevedibile, strutturato e lungimirante.",
    content: [
      "Con un processo strutturato e AI contestualizzata i team smettono di lavorare su requisiti ambigui e andare per deduzioni iniziando a lavorare su specifiche validate con il minor margine di errore possibile. La differenza non è nella velocità di digitazione: è nell'effort sprecato che diminuisce perché il sistema ne genera meno.",
      "Il valore più sottovalutato è la prevedibilità. Quando gli sprint vengono rispettati e le stime sono affidabili, il rapporto tra IT e business cambia strutturalmente. L'IT smette di essere la variabile imprevedibile del piano e diventa un partner con cui pianificare. I checkpoint di validazione basati su dati concreti aiutano tutti a prevedere problemi e fare un passo indietro prima ancora di chiedere qualcosa di nuovo.",
    ],
    implementationSteps: [
      "1. Misurare la baseline oggi: rilasci in ritardo, rework eseguiti, cambi di rotta e tutto ciò che ne consegue.",
      "2. Definire i target KPI con il board prima del pilota — non come risultato atteso, ma come soglia di valutazione condivisa.",
      "3. Review a tre mesi: dati alla mano, si decide insieme se e come estendere il processo a tutta l'organizzazione.",
    ],
    impact:
      "Un team che opera con fasi chiare, AI governata e specifiche validate delivera meglio. L'IT diventa un asset pianificabile, non una variabile da gestire. EXTRA: Può diventare, se funziona, un caso di successo da raccontare a livello di comunicazione aziendale, un gancio potente per raccontare un'azienda che guarda avanti, che sfrutta questa rivoluzione chiamata AI per essere tra le prime del settore in Italia ad entrarci a 360 gradi nei processi di delivery interni.</div>",
    tools: ["Custom Dashboard (Next.js)", "OKR / KPI Framework aziendale"],
    Visual: Visual9,
  },
];

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export default function Presentation() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex];

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        setActiveIndex((p) => Math.min(p + 1, slides.length - 1));
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        setActiveIndex((p) => Math.max(p - 1, 0));
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-white text-[#111]">
      {/* ── SIDEBAR ── */}
      <aside className="w-72 border-r border-[#e5e5e5] flex flex-col justify-between p-8 shrink-0 bg-white z-10">
        <div>
          <h1 className="text-xl font-bold tracking-tighter mb-12 uppercase">
            AI Product Flow
          </h1>
          <nav className="space-y-4">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => setActiveIndex(index)}
                className={`block w-full text-left text-sm tracking-tight transition-colors duration-200 ${
                  activeIndex === index
                    ? "font-bold text-black"
                    : "font-medium text-gray-400 hover:text-gray-800"
                }`}
              >
                {slide.sidebarTitle}
              </button>
            ))}
          </nav>
        </div>
        <div className="text-xs text-gray-400 font-medium tracking-tight">
          {activeIndex + 1} / {slides.length}
          <div className="mt-2 text-[10px] uppercase tracking-widest opacity-50">
            Usa le frecce per navigare
          </div>
        </div>
      </aside>

      {/* ── MAIN CONTENT ── */}
      <main className="flex-1 overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start pt-20 pb-20"
          >
            {/* Left column */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-3xl font-black tracking-tighter leading-none mb-4">
                {activeSlide.title}
              </h2>

              {activeSlide.subtitle && (
                <h3 className="text-lg md:text-xl font-medium text-gray-500 tracking-tight leading-snug mb-8">
                  {activeSlide.subtitle}
                </h3>
              )}

              <div className="space-y-4 mb-8">
                {activeSlide.content.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="text-base font-medium text-gray-600 tracking-tight leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {activeSlide.impact && (
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 mb-6 flex items-start space-x-3">
                  <TrendingUp
                    className="text-blue-600 mt-0.5 shrink-0"
                    size={18}
                  />
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-blue-800 mb-1">
                      Business Impact
                    </h4>
                    <p className="text-sm text-blue-900 font-medium leading-relaxed">
                      {activeSlide.impact}
                    </p>
                  </div>
                </div>
              )}

              {activeSlide.tools?.length > 0 && (
                <div className="pt-5 border-t border-gray-200">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">
                    Toolchain Suggerita
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {activeSlide.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-gray-100 text-gray-800 text-xs font-bold tracking-tight rounded-md"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right column */}
            <div className="flex flex-col gap-6">
              {activeSlide.implementationSteps?.length > 0 && (
                <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-black mb-4 flex items-center gap-2">
                    <CheckCircle size={14} className="text-green-500" /> Piano
                    di Implementazione
                  </h4>
                  <ul className="space-y-2">
                    {activeSlide.implementationSteps.map((step, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-gray-600 font-medium leading-relaxed"
                      >
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="flex items-center justify-center">
                <activeSlide.Visual />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
