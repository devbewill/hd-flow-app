"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── TYPES ────────────────────────────────────────────────────────────────────

type Phase = {
  step: number;
  name: string;
  description: string;
  artifacts: string[];
  gitTag: string;
};

type BaseSlide = {
  id: string;
  sidebarTitle: string;
  title: string;
  subtitle?: string;
  content?: string[];
  implementationSteps?: string[];
  impact?: string;
  extra?: string;
  tools?: string[];
  pitchQuestion: string;
  pitchPoints: string[];
};

type PipelineSlide = BaseSlide & { type: "pipeline"; phases: Phase[] };
type StandardSlide = BaseSlide & { type?: never };
type Slide = StandardSlide | PipelineSlide;

// ─── SLIDE DATA ───────────────────────────────────────────────────────────────

const slides: Slide[] = [
  // PREMESSA
  {
    id: "premessa",
    sidebarTitle: "Premessa",
    title: "Premessa.",
    subtitle:
      "Non stiamo descrivendo il futuro. Stiamo cercando di costruirlo prima degli altri.",
    content: [
      "Ogni giorno il mondo dell'AI è diverso da quello del giorno prima. Nuovi modelli, nuovi paradigmi, nuovi tool che ribaltano quello che era valido una settimana fa. Non è un'esagerazione: è la velocità reale a cui si muove questa tecnologia. Negli Stati Uniti i team più avanzati stanno già sperimentando modi strutturati di governare l'AI nel lavoro quotidiano. Noi dobbiamo seguire quell'onda adesso.",
      "Quello che vediamo nelle slide non è un processo da seguire alla lettera. È una prima bozza, un tentativo concreto di ipotizzare come potremmo sfruttare la forza dell'AI per lavorare in modo più strutturato e meno frustrante. Può essere semplificata, stravolta, migliorata. Anzi, deve esserlo.",
    ],
    impact:
      "Abbiamo bisogno di tutti per costruire qualcosa che vada bene a tutti. Questa è una conversazione, non una presentazione. Cavalchiamo insieme questa rivoluzione: nessuno sa esattamente dove porta, ma è molto meglio arrivarci come team che arrivarci da soli.",
    pitchQuestion:
      "Siamo pronti a essere pionieri o aspettiamo che qualcun altro ci dica come si fa?",
    pitchPoints: [
      "L'AI cambia ogni giorno. Chi sperimenta oggi ispira gli altri domani.",
      "Quello che segue non è un processo da seguire, è un draft da costruire insieme.",
      "Abbiamo bisogno di tutti: costruiamo qualcosa che ci faccia lavorare meglio domani.",
    ],
  },
  // 00
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
    pitchQuestion:
      "L'AI come la usiamo oggi accelera il nostro lavoro come team?",
    pitchPoints: [
      "L'AI amplifica quello che trova: processo solido → più veloce;",
      "Il problema non è mai il tool. È l'assenza di un processo o requisiti chiari.",
      "L'obiettivo non è fare di più: è fare le cose giuste, in modo prevedibile e strutturato.",
    ],
  },
  // 01
  {
    id: "IdeaProcesso",
    sidebarTitle: "01. L'idea di processo",
    title: "Sette fasi. Un output per ognuna.",
    subtitle: "Il processo è un accordo operativo tra business e IT.",
    content: [
      'Ogni fase produce qualcosa di concreto e usabile nella successiva: un ticket qualificato, un prototipo approvato, una specifica tecnica, del codice testato. Nessun passaggio di consegne a voce, nessun "come ci eravamo detti".',
      "La forza del sistema è nei checkpoint: nessuna feature avanza senza che la fase precedente abbia prodotto il suo output.",
    ],
    implementationSteps: [
      "1. Walkthrough del flow con business e IT su un caso reale che è stato oggetto di discussioni.",
      "2. Nominare l'owner di ogni fase prima di partire: Product, PM, DEV, Analyst.",
      "3. Documentare i checkpoint: cosa deve esistere perché una feature possa avanzare alla fase successiva.",
    ],
    impact:
      "Chi inizia a sviluppare ha già tutto: specifica validata, prototipo approvato, architettura decisa. Il primo giorno si scrive codice anche senza meeting di allineamento.",
    tools: ["Sharepoint :(", "Jira (checkpoint tracking)"],
    pitchQuestion:
      "Quando inizia uno sviluppo, si ha tutto quello che serve per capirne il contesto e le vere motivazioni del perchè lo si sta facendo?",
    pitchPoints: [
      "7 fasi, 1 output concreto per ognuna. Nessun passaggio di consegne a voce.",
      "La feature non avanza se la fase precedente non ha prodotto il suo output.",
      "Business e IT parlano la stessa lingua perché il processo è l'accordo operativo tra loro.",
    ],
  },
  // 02
  {
    id: "processo",
    sidebarTitle: "02. Processo E2E",
    type: "pipeline",
    title: "Il processo End-to-End",
    subtitle: "Sette fasi. Un output concreto e un tag Git per ognuna.",
    phases: [
      {
        step: 1,
        name: "Richiesta",
        description:
          "Il business compila un form strutturato sul portal con campi obbligatori: problema da risolvere, utenti impattati, obiettivo atteso, urgenza. Non è possibile inviare una richiesta incompleta.",
        artifacts: ["Markdown con la richiesta strutturata"],
        gitTag: "Richiesta",
      },
      {
        step: 2,
        name: "Triage",
        description:
          "Il Product Director valuta la richiesta, assegna categoria e dimensione e nomina il PM di riferimento. Solo ciò che supera il triage entra in backlog.",
        artifacts: [
          "Markdown aggiornato con data di approvazione",
          "PM di riferimento associato",
        ],
        gitTag: "Triage",
      },
      {
        step: 3,
        name: "Discovery",
        description:
          "Il PM lavora con il business per produrre una specifica funzionale e un prototipo navigabile generato con Claude. Il prototipo viene validato dal business prima che venga scritta una riga di codice.",
        artifacts: ["Prototipo navigabile validato dal business"],
        gitTag: "Discovery",
      },
      {
        step: 4,
        name: "Planning",
        description:
          "Il Tech Lead riceve il markdown iniziale, il prototipo approvato e le eventuali user story. Stima l'effort, pianifica gli sprint e assegna i developer.",
        artifacts: [
          "Markdown arricchito con stima e pianificazione",
          "Developer di riferimento assegnati",
        ],
        gitTag: "Planning",
      },
      {
        step: 5,
        name: "In Development",
        description:
          "Alla data pianificata i developer assegnati avviano lo sviluppo. Il developer costruisce la propria specifica tecnica per l'AI partendo da tutto il materiale già prodotto nelle fasi precedenti.",
        artifacts: [
          "Specifica tecnica per AI (SDD)",
          "Markdown aggiornato con data di inizio sviluppi",
        ],
        gitTag: "In Development",
      },
      {
        step: 6,
        name: "Demo",
        description:
          "Demo con gli stakeholder in ambiente staging. L'esito, approvazione, feedback o richieste di modifica, viene tracciato nel markdown di riferimento.",
        artifacts: [
          "Demo accessibile in staging",
          "Esito della demo registrato nel markdown",
        ],
        gitTag: "Demo",
      },
      {
        step: 7,
        name: "Live",
        description:
          "Deploy in produzione. Il markdown viene completato con tutte le informazioni relative agli step precedenti, i test eseguiti e i riferimenti tecnici, poi archiviato in SharePoint.",
        artifacts: [
          "Markdown completo con log di tutti gli step",
          "Cartella archiviata in SharePoint",
        ],
        gitTag: "Live",
      },
    ],
    pitchQuestion: "Quanti di questi 7 step esistono già nel nostro processo?",
    pitchPoints: [
      "Richiesta → Triage → Discovery → Planning → Development → Demo → Live.",
      "Ogni fase ha un owner, un artefatto e un tag git. Tracciabilità totale.",
      "Nessuno sviluppa senza un prototipo approvato. Nessun deploy senza demo andata a buon fine.",
    ],
  } as PipelineSlide,
  // 03
  {
    id: "portal",
    sidebarTitle: "03. Richiesta e Triage",
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
    pitchQuestion: "Quante richieste arrivano oggi via Teams, mail, o voce?",
    pitchPoints: [
      "Un solo entry point: il portale. Se non passa da lì, non esiste.",
      "Form con campi obbligatori: problema, utenti impattati, obiettivo, urgenza. Non si invia se incompleto.",
      "Solo le richieste che superano il triage del Product Director entrano in backlog.",
    ],
  },
  // 04
  {
    id: "discovery",
    sidebarTitle: "04. Discovery & Prototipazione",
    title: "Il Business approva qualcosa che può cliccare.",
    subtitle:
      "Non un documento da immaginare ma un prototipo navigabile da validare prima che venga scritta riga di codice da un developer.",
    content: [
      "Il team Product usa Claude istruito con il Design System HD per generare un prototipo navigabile. Non un mockup statico: qualcosa di cliccabile che il business usa come se fosse il prodotto finito, identificando gap e correzioni prima che abbiano un costo reale di implementazione.",
      "Il prototipo approvato diventa il Contratto Visivo: allegato alla specifica tecnica, è il riferimento unico e immutabile per dev, product e business per tutta la durata dello sviluppo. La validazione viene versionata con un TAG su un branch specifico, mergiato al rilascio in produzione.",
    ],
    implementationSteps: [
      "1. Un giorno di workshop pratico per formare il team product sull'uso di Claude come tool di prototipazione rapida.",
      "2. Un template prompt standard che include il Design System come contesto fisso per non dover fare nessuna customizzazione ad hoc ogni volta.",
      "3. La review del prototipo entra nel processo come step obbligatorio: nessun ticket avanza in sprint senza prototipo approvato.",
    ],
    impact:
      "Quello che il business vede prima dello sviluppo è esattamente quello che riceve alla fine. I rework da requisiti fraintesi diventano strutturalmente molto improbabili.",
    tools: ["Claude", "Branch git taggato come [nome_feature_approved]"],
    pitchQuestion:
      "Il business oggi approva un documento da immaginare o qualcosa che può cliccare?",
    pitchPoints: [
      "Il product manager usa l'AI per trasformare le sue analisi in un prototipo, Vibe Coding ma con chiaro il need da soddisfare",
      "Il prototipo approvato diventa il Contratto Visivo: il riferimento unico e immutabile per tutto il team.",
      "I rework da requisiti fraintesi diventano strutturalmente molto improbabili.",
    ],
  },
  // 05
  {
    id: "spec-driven",
    sidebarTitle: "05. Spec-Driven Development",
    title: "Il Dev Progetta. L'AI lo costruisce.",
    subtitle:
      "Il dev team smette di leggere requisiti e supporre. Osserva, capisce e prende decisioni architetturali su cose concrete.",
    content: [
      "Con una specifica funzionale, acceptance criteria, e prototipo lo sviluppatore sa con certezza cosa gli viene chiesto di fare. Quello che farà sarà costuirsi la sua specifica per Claude, partendo da tutto quello che gli è già stato fornito e traducendolo in spec più mirati allo sviluppo. ",
      "Lo SDD non è una best practice, è il meccanismo che rende verificabile il codice AI-generated.",
    ],
    implementationSteps: [
      "1. Training pratico sullo Spec-Driven Development sulla nostra codebase, con backlog.md o Kiro.",
      "2. Claude Code adottato come standard unico, preconfigurato con un global-context.md. Zero setup individuale.",
      "3. La pipeline CI istruita con il necessario per portarsi a spasso il global-context.",
    ],
    impact:
      "Il team tech si concentra sulle decisioni che contano senza perdere tempo a fare meeting, prendere appunti e indovinare cose. Il team scala la capacità produttiva senza aggiungere persone.",
    tools: ["Claude Code", "Kiro (AWS) / Backlog.md / BMAD"],
    pitchQuestion:
      "Quante ore perde oggi un developer a capire cosa deve fare invece di farlo a causa dell'asssenza di contesto?",
    pitchPoints: [
      "Il developer osserva, capisce e prende decisioni architetturali. L'AI semplicemente scrive e avverte di possibili implicazioni pericolose.",
      "Lo SDD è il meccanismo che rende il codice AI-generated verificabile, non ambiguo.",
      "Il team scala la capacità produttiva senza aggiungere persone.",
    ],
  },
  // 06
  {
    id: "pilota",
    sidebarTitle: "06. Il Progetto pilota",
    title: "Dimostrarlo prima di scalarlo.",
    subtitle:
      "Sei settimane, un team, una feature reale. I dati del pilota guidano la scalabilità.",
    content: [
      "Il pilota non è un esperimento: è una prova di concetto controllata. Selezioniamo un team di quattro o cinque persone, una feature target e si applica il processo completo per sei settimane. Tracciando ogni fase.",
      "L'obiettivo del pilota non è la perfezione è il delta misurabile rispetto a come lavoriamo oggi. Stime sbagliate, rework, velocità di consegna. Al termine, i dati parlano da soli e la decisione di scalare diventa ovvia o informata.",
    ],
    implementationSteps: [
      "1. Settimane 1–3: Setup -> Context registry configurato, portale richieste attivo, tool AI pronti e integrati.",
      "2. Settimane 4–5: Esecuzione -> La feature avanza seguendo ogni fase del processo, Checkpoint tracciati in tempo reale su Jira.",
      "3. Settimana 6: Chiusura -> Retrospettiva con il team, presentazione dati e next step.",
    ],
    impact:
      "Se il processo funziona, abbiamo dati reali per giustificare lo scaling. Se emergono frizioni, le identifichiamo su scala piccola prima di investire ulteriormente.",
    tools: ["Jira (tracking)", "Teams → canale #chimelohafattofare"],
    pitchQuestion:
      "Come dimostriamo che funziona prima di chiedere a tutta l'organizzazione di cambiare?",
    pitchPoints: [
      "6 settimane, 4-5 persone, una feature reale. Processo completo tracciato in ogni fase.",
      "L'obiettivo non è la perfezione: è il delta rispetto a come lavoriamo oggi.",
      "Al termine i dati parlano da soli: la decisione di scalare diventa ovvia o informata.",
    ],
  },
  // 07
  {
    id: "roi",
    sidebarTitle: "07. Il ROI Atteso",
    title: "Dall'esperimento all' AHA moment.",
    subtitle:
      "Il risultato non è fare di più con meno ma è fare le cose giuste con maggior energia, in modo prevedibile, strutturato e lungimirante.",
    content: [
      "Con un processo strutturato e AI contestualizzata i team smettono di lavorare su requisiti ambigui e iniziano a lavorare su specifiche validate con il minor margine di errore possibile. La differenza non è nella velocità di digitazione, è nell'effort sprecato che diminuisce perché il sistema ne genera meno.",
      "Il valore più sottovalutato è la prevedibilità. Quando gli sprint vengono rispettati e le stime sono affidabili, il rapporto tra IT e business cambia strutturalmente. L'IT smette di essere la variabile imprevedibile del piano e diventa un partner con cui pianificare. I checkpoint di validazione basati su dati concreti aiutano tutti a prevedere problemi e fare un passo indietro prima ancora di chiedere qualcosa di nuovo.",
    ],
    implementationSteps: [
      "1. Misurare la baseline oggi: rilasci in ritardo, rework eseguiti, cambi di rotta e tutto ciò che ne consegue.",
      "2. Definire OKR e KPI con il board prima del pilota, non come risultato atteso, ma come soglia di valutazione condivisa.",
      "3. Review a tre mesi: dati alla mano, si decide insieme se e come estendere il processo a tutta l'organizzazione.",
    ],
    impact:
      "Un team che opera con fasi chiare, AI governata e specifiche validate delivera meglio. L'IT diventa un asset pianificabile, non una variabile da gestire.",
    extra:
      "Può diventare, se funziona, un caso di successo da raccontare a livello di comunicazione aziendale, un gancio potente per raccontare un'azienda che guarda avanti, che sfrutta questa rivoluzione chiamata AI per essere tra le prime del settore in Italia ad entrarci a 360 gradi nei processi di delivery interni.",
    tools: ["Custom Dashboard (Next.js)", "OKR / KPI Framework aziendale"],
    pitchQuestion:
      "Quanto vale per il business avere un IT che diventa un partner pianificabile invece di una variabile da gestire?",
    pitchPoints: [
      "Meno rework. Sprint rispettati. Stime affidabili.",
      "L'IT smette di essere la variabile imprevedibile.",
      "Bonus: potenziale caso di successo da raccontare. Un'azienda che ha scelto di guidare questa transizione, non di subirla.",
    ],
  },
  // 08
  {
    id: "ai-caos",
    sidebarTitle: "08. AI Governance",
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
    pitchQuestion:
      "L'AI che usiamo conosce le nostre regole, o le inventa ogni volta da capo?",
    pitchPoints: [
      "Vogliamo che tutti usino l'AI con lo stesso contesto: architettura, convenzioni, regole di sicurezza.",
      "Non si ottiene con scelte individuali. Si ottiene con un metodo condiviso.",
      "La qualità diventa strutturale, non personale.",
    ],
  },
  // 09
  {
    id: "context",
    sidebarTitle: "09. Context as Code",
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
    pitchQuestion:
      "Come facciamo in modo che tutta l'AI del team parli sempre la stessa lingua?",
    pitchPoints: [
      "global-context.md: un file markdown versionato in git con tutto il contesto della codebase.",
      "La CI lo rigenera automaticamente ad ogni merge. Sempre aggiornato, zero effort manuale.",
      "Diventa il system prompt fisso su tutti i tool AI del team. Un documento, nessun setup individuale.",
    ],
  },
];

// ─── PITCH SLIDE ──────────────────────────────────────────────────────────────

function PitchSlide({ slide }: { slide: Slide }) {
  return (
    <div className="max-w-4xl w-full mx-auto flex flex-col justify-center min-h-screen px-20 py-24">
      <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-12">
        {slide.sidebarTitle}
      </div>

      <div className="p-10 mb-12" style={{ backgroundColor: "#65ff00" }}>
        <p className="text-3xl font-black leading-snug text-black tracking-tight">
          {slide.pitchQuestion}
        </p>
      </div>

      <ul className="space-y-8">
        {slide.pitchPoints.map((point, idx) => (
          <li key={idx} className="flex gap-6 items-start">
            <span
              className="w-8 h-8 flex items-center justify-center font-black text-sm shrink-0 mt-0.5"
              style={{ backgroundColor: "#f4f4f4" }}
            >
              {idx + 1}
            </span>
            <p className="text-2xl font-bold text-black leading-snug tracking-tight">
              {point}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export default function Presentation() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [pitchMode, setPitchMode] = useState(false);
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
    <div className="flex h-screen w-full overflow-hidden bg-white text-black">
      {/* ── SIDEBAR ── */}
      <aside className="w-64 border-r-2 border-black flex flex-col justify-between p-8 shrink-0 bg-white z-10">
        <div>
          <h1 className="text-2xl font-black tracking-tighter mb-10 uppercase">
            AI Product Flow
          </h1>

          {/* ── MODE TOGGLE ── */}
          <div className="mb-10 flex items-center gap-3">
            <span
              className={`text-xs font-black uppercase tracking-wide transition-colors ${
                !pitchMode ? "text-black" : "text-gray-400"
              }`}
            >
              Full
            </span>
            <button
              onClick={() => setPitchMode((p) => !p)}
              className="relative w-11 h-6 border-2 border-black transition-colors shrink-0"
              style={{ backgroundColor: pitchMode ? "#65ff00" : "#f4f4f4" }}
              aria-label="Toggle pitch mode"
            >
              <span
                className="absolute top-0.5 w-4 h-4 bg-black transition-all duration-200"
                style={{ left: pitchMode ? "calc(100% - 18px)" : "2px" }}
              />
            </button>
            <span
              className={`text-xs font-black uppercase tracking-wide transition-colors ${
                pitchMode ? "text-black" : "text-gray-400"
              }`}
            >
              Short
            </span>
          </div>

          <nav className="space-y-8">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => setActiveIndex(index)}
                className={`block w-full text-left text-sm tracking-tight transition-all duration-300 ${
                  activeIndex === index
                    ? "font-black text-black border-l-4 border-black pl-4"
                    : "font-bold text-gray-500 hover:text-black pl-5"
                }`}
              >
                {slide.sidebarTitle}
              </button>
            ))}
          </nav>
        </div>
        <div className="text-xs font-black uppercase tracking-widest text-gray-900">
          {activeIndex + 1} / {slides.length}
          <div className="mt-4 text-[10px] uppercase tracking-widest opacity-80 font-bold">
            Usa le frecce per navigare
          </div>
        </div>
      </aside>

      {/* ── MAIN CONTENT ── */}
      <main className="flex-1 overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeSlide.id}-${pitchMode ? "pitch" : "full"}`}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full"
          >
            {pitchMode ? (
              <PitchSlide slide={activeSlide} />
            ) : activeSlide.type === "pipeline" ? (
              /* ── PIPELINE LAYOUT (vertical) ── */
              <div className="max-w-7xl w-full mx-auto pt-12 pb-12 px-20 flex flex-col h-full">
                {/* Header */}
                <div className="mb-10">
                  <h2 className="text-4xl font-black uppercase tracking-tight leading-none mb-3 text-black">
                    {activeSlide.title}
                  </h2>
                  {activeSlide.subtitle && (
                    <p className="text-base font-bold text-gray-500">
                      {activeSlide.subtitle}
                    </p>
                  )}
                </div>

                {/* Vertical stepper */}
                <div className="relative flex flex-col gap-4">
                  {/* Connecting line */}
                  <div
                    className="absolute bg-black"
                    style={{
                      left: "19px",
                      top: "20px",
                      bottom: "20px",
                      width: "2px",
                    }}
                  />

                  {(activeSlide as PipelineSlide).phases.map((phase) => (
                    <div key={phase.step} className="flex gap-6 items-stretch">
                      {/* Step circle */}
                      <div className="w-10 h-10 bg-black text-white flex items-center justify-center font-black text-sm shrink-0 z-10">
                        {phase.step}
                      </div>

                      {/* Card */}
                      <div
                        className="flex-1 border-2 border-black grid"
                        style={{ gridTemplateColumns: "3fr 1fr" }}
                      >
                        {/* Left column: git tag (top) + description (bottom) */}
                        <div className="flex flex-col border-r-2 border-black">
                          {/* Git tag row */}
                          <div className="px-5 py-2 border-b-2 border-black flex items-center gap-3">
                            <span className="text-xs font-black uppercase tracking-widest text-gray-400">
                              Git tag:
                            </span>
                            <span
                              className="px-2 py-0.5 text-base font-black uppercase tracking-wide text-black"
                              style={{ backgroundColor: "#65ff00" }}
                            >
                              #{phase.gitTag}
                            </span>
                          </div>
                          {/* Description */}
                          <div className="px-5 py-4 flex-1">
                            <p className="text-xl font-bold text-black leading-relaxed">
                              {phase.description}
                            </p>
                          </div>
                        </div>

                        {/* Right column: artifact list (spans full height) */}
                        <div
                          className="px-5 py-4 flex flex-col justify-center"
                          style={{ backgroundColor: "#f4f4f4" }}
                        >
                          <div className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-3">
                            Artefatti
                          </div>
                          <ul className="flex flex-col gap-2">
                            {phase.artifacts.map((artifact, i) => (
                              <li key={i} className="flex gap-2 items-start">
                                <span className="text-black font-black mt-0.5 shrink-0">
                                  —
                                </span>
                                <span className="text-sm font-bold text-gray-900 leading-snug">
                                  {artifact}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              /* ── STANDARD LAYOUT ── */
              <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24 items-start pt-24 pb-24 px-20">
                {/* Left column - Main content */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                  <h2 className="text-3xl font-black tracking-normal leading-[1.1] mb-12 uppercase text-black">
                    {activeSlide.title}
                  </h2>

                  {activeSlide.subtitle && (
                    <h3 className="text-xl font-bold text-black tracking-normal leading-snug mb-16">
                      {activeSlide.subtitle}
                    </h3>
                  )}

                  <div className="space-y-10">
                    {activeSlide.content?.map((paragraph, idx) => (
                      <p
                        key={idx}
                        className="text-xl font-bold text-black tracking-normal leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {activeSlide.tools && activeSlide.tools.length > 0 && (
                    <div className="pt-12 mt-16 border-t-2 border-black">
                      <p className="text-[10px] font-black uppercase tracking-widest text-black mb-6">
                        Toolchain Suggerita
                      </p>
                      <div className="flex flex-wrap gap-4">
                        {activeSlide.tools.map((tool, idx) => (
                          <span
                            key={idx}
                            className="inline-block bg-black text-white px-4 py-2 text-sm font-black uppercase tracking-wider"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right column - Fluorescent boxes */}
                <div className="lg:col-span-5 flex flex-col gap-8">
                  {activeSlide.impact && (
                    <div className="p-8" style={{ backgroundColor: "#65ff00" }}>
                      <div className="text-xs font-black uppercase tracking-widest mb-6 text-gray-900">
                        Business Impact
                      </div>
                      <p className="text-base font-black leading-relaxed text-gray-900">
                        {activeSlide.impact}
                      </p>
                    </div>
                  )}

                  {activeSlide.extra && (
                    <div className="p-8" style={{ backgroundColor: "#f0ff04" }}>
                      <div className="text-xs font-black uppercase tracking-widest mb-6 text-gray-900">
                        Extra
                      </div>
                      <p className="text-base font-black leading-relaxed text-gray-900">
                        {activeSlide.extra}
                      </p>
                    </div>
                  )}

                  {activeSlide.implementationSteps &&
                    activeSlide.implementationSteps.length > 0 && (
                      <div
                        className="p-8"
                        style={{ backgroundColor: "#f4f4f4" }}
                      >
                        <div className="text-[10px] font-black uppercase tracking-widest mb-6 text-gray-900">
                          Piano di Implementazione
                        </div>
                        <ul className="space-y-6">
                          {activeSlide.implementationSteps.map((step, idx) => (
                            <li
                              key={idx}
                              className="text-base font-black leading-relaxed text-gray-900"
                            >
                              {step}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
