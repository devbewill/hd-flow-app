# AI Product Flow
> Struttura del processo end-to-end per l'adozione strutturata dell'AI nello sviluppo prodotto

---

## Premessa
**Non stiamo descrivendo il futuro. Stiamo cercando di costruirlo prima degli altri.**

> *Chi sperimenta oggi governa domani.*

Ogni mattina il mondo dell'AI è diverso da quello della sera prima. Nuovi modelli, nuovi paradigmi, nuovi tool che ribaltano quello che era valido 48 ore fa. Non è un'esagerazione: è la velocità reale a cui si muove questa tecnologia. Negli Stati Uniti i team più avanzati stanno già sperimentando modi strutturati di governare l'AI nel lavoro quotidiano. Noi possiamo seguire quell'onda adesso, o aspettare che arrivi e inseguirla.

Quello che vedrete nelle prossime slide non è un processo da seguire alla lettera. È una prima bozza, un tentativo concreto di ipotizzare come potremmo sfruttare la forza dell'AI per lavorare in modo più strutturato e meno frustrante. Può essere semplificata, stravolta, migliorata. Anzi, deve esserlo.

### Business Impact
Abbiamo bisogno di tutti per costruire qualcosa che vada bene a tutti. Questa è una conversazione, non una presentazione. Cavalchiamo insieme questa rivoluzione: nessuno sa esattamente dove porta, ma è molto meglio arrivarci come team che arrivarci da soli.

---

## 00. Il punto di partenza
**Un processo, non tools a caso.**

> *L'AI amplifica quello che trova. Se trova un processo solido, lo accelera. Se trova caos, lo scala.*

Quello che vogliamo costruire è un flusso unico end-to-end in cui una richiesta di business attraversa fasi definite prima di diventare codice. Non per amor di burocrazia, ma perché la tracciabilità e la prevedibilità sono prerequisiti, non bonus.

L'obiettivo non è fare di più: è fare le cose giuste nel modo giusto. Un team che opera con fasi chiare, owner ben definiti e AI contestualizzata non reagisce alle richieste ma le governa.

### Piano di Implementazione
1. Disegnare il flusso completo: dalle richieste al deploy, con un owner e un output tangibile per ogni fase.
2. Definire i constraints di processo: stabilire cosa deve esistere prima di passare alla fase successiva.
3. Scegliere i tool che servono il processo e non il contrario.

### Business Impact
Un team che lavora su specifiche validate, AI governata e fasi presidiate produce con una prevedibilità che oggi non è possibile misurare perché non esiste.

### Toolchain
- Processo prima dei tools
- Owner per ogni fase

---

## 01. L'idea di processo
**Sette fasi. Un output per ognuna.**

> *Il processo è un accordo operativo tra business e IT.*

Ogni fase produce qualcosa di concreto e usabile nella successiva: un ticket qualificato, un prototipo approvato, una specifica tecnica, del codice testato. Nessun passaggio di consegne a voce, nessun "come ci eravamo detti".

La forza del sistema è nei checkpoint: nessuna feature avanza senza che la fase precedente abbia prodotto il suo output.

### Piano di Implementazione
1. Walkthrough del flow con business e IT su un caso reale che è stato oggetto di discussioni.
2. Nominare l'owner di ogni fase prima di partire: Product, PM, DEV, Analyst.
3. Documentare i checkpoint: cosa deve esistere perché una feature possa avanzare alla fase successiva.

### Business Impact
Chi inizia a sviluppare ha già tutto: specifica validata, prototipo approvato, architettura decisa. Il primo giorno si scrive codice anche senza meeting di allineamento.

### Toolchain
- Sharepoint :(
- Jira (checkpoint tracking)

---

## 02. Processo E2E
**Il processo End-to-End**

> *Sette fasi. Un output concreto e un tag Git per ognuna.*

| # | Fase | Git Tag | Artefatti |
|---|------|---------|-----------|
| 1 | Richiesta | #Richiesta | Markdown con la richiesta strutturata |
| 2 | Triage | #Triage | Markdown aggiornato con data di approvazione; PM di riferimento associato |
| 3 | Discovery | #Discovery | Prototipo navigabile validato dal business |
| 4 | Planning | #Planning | Markdown arricchito con stima e pianificazione; Developer di riferimento assegnati |
| 5 | In Development | #In Development | Specifica tecnica per AI (SDD); Markdown aggiornato con data di inizio sviluppi |
| 6 | Demo | #Demo | Demo accessibile in staging; Esito della demo registrato nel markdown |
| 7 | Live | #Live | Markdown completo con log di tutti gli step; Cartella archiviata in SharePoint |

### Dettaglio fasi

**#Richiesta**
Il business compila un form strutturato sul portal con campi obbligatori: problema da risolvere, utenti impattati, obiettivo atteso, urgenza. Non è possibile inviare una richiesta incompleta.

**#Triage**
Il Product Director valuta la richiesta, assegna categoria e dimensione e nomina il PM di riferimento. Solo ciò che supera il triage entra in backlog.

**#Discovery**
Il PM lavora con il business per produrre una specifica funzionale e un prototipo navigabile generato con Claude. Il prototipo viene validato dal business prima che venga scritta una riga di codice.

**#Planning**
Il Tech Lead riceve il markdown iniziale, il prototipo approvato e le eventuali user story. Stima l'effort, pianifica gli sprint e assegna i developer.

**#In Development**
Alla data pianificata i developer assegnati avviano lo sviluppo. Il developer costruisce la propria specifica tecnica per l'AI partendo da tutto il materiale già prodotto nelle fasi precedenti.

**#Demo**
Demo con gli stakeholder in ambiente staging. L'esito — approvazione, feedback o richieste di modifica — viene tracciato nel markdown di riferimento.

**#Live**
Deploy in produzione. Il markdown viene completato con tutte le informazioni relative agli step precedenti, i test eseguiti e i riferimenti tecnici, poi archiviato in SharePoint.

---

## 03. Richiesta e Triage
**Nessuna richiesta entra senza essere qualificata.**

> *Il portale di richiesta non è un'alternativa è l'unico entry point, l'unico canale valido per avanzare una richiesta.*

Il business compila un form strutturato con campi obbligatori: problema da risolvere, utenti impattati, obiettivo atteso, urgenza. Non è possibile inviare una richiesta incompleta. Questo non è un ostacolo ma rispetto per il tempo di tutti: se non riesci a spiegare il problema in modo chiaro, è improbabile che il team riesca a risolverlo.

Il Product Director riceve le richieste, le valuta e assegna categoria e dimensione. Solo ciò che supera il triage entra in backlog.

### Piano di Implementazione
1. Costruire il form con validazione obbligatoria lato client.
2. Collegare il form alla creazione automatica di ticket Jira via API, zero effort manuale di trascrizione.

### Business Impact
Il team riceve solo richieste che qualcuno ha già valutato e approvato. Le conversazioni informali non diventano ticket.

### Toolchain
- Custom Web Portal (Next.js)
- Jira API / MCP

---

## 04. Discovery & Prototipazione
**Il Business approva qualcosa che può cliccare.**

> *Non un documento da immaginare ma un prototipo navigabile da validare prima che venga scritta riga di codice da un developer.*

Il PM usa Claude istruito con il Design System per generare un prototipo navigabile. Non un mockup statico: qualcosa di cliccabile che il business usa come se fosse il prodotto finito, identificando gap e correzioni prima che abbiano un costo reale di implementazione.

Il prototipo approvato diventa il Contratto Visivo: allegato alla specifica tecnica, è il riferimento unico e immutabile per dev, QA e business per tutta la durata dello sviluppo. La validazione viene versionata con un TAG su un branch specifico, mergiato al rilascio in produzione.

### Piano di Implementazione
1. Un giorno di workshop pratico per formare i PM sull'uso di Claude come tool di prototipazione rapida.
2. Un template prompt standard che include il Design System come contesto fisso per non dover fare nessuna customizzazione ad hoc ogni volta.
3. La review del prototipo entra nel processo come step obbligatorio: nessun ticket avanza in sprint senza prototipo approvato.

### Business Impact
Quello che il business vede prima dello sviluppo è esattamente quello che riceve alla fine. I rework da requisiti fraintesi diventano strutturalmente molto improbabili.

### Toolchain
- Claude
- Branch git taggato come [nome_feature_approved]

---

## 05. Spec-Driven Development
**Il Dev Progetta. L'AI lo costruisce.**

> *Il dev team smette di leggere requisiti e supporre. Osserva, capisce e prende decisioni architetturali su cose concrete.*

Con una specifica funzionale, acceptance criteria, e prototipo lo sviluppatore sa con certezza cosa gli viene chiesto di fare. Quello che farà sarà costruirsi la sua spec per Claude, partendo da tutto quello che gli è già stato fornito e traducendolo in spec più mirati allo sviluppo.

Lo SDD non è una best practice, è il meccanismo che rende verificabile il codice AI-generated.

### Piano di Implementazione
1. Training pratico sullo Spec-Driven Development sulla nostra codebase, con backlog.md o Kiro.
2. Claude Code adottato come standard unico, preconfigurato con `global-context.md` — zero setup individuale.
3. La pipeline CI che non rispettano i requisiti: la coverage diventa un vincolo di sistema, non una responsabilità delegata all'individuo.

### Business Impact
Il team tech si concentra sulle decisioni che contano senza perdere tempo a fare meeting, prendere appunti e indovinare cose. Il team scala la capacità produttiva senza aggiungere persone.

### Toolchain
- Claude Code
- Kiro (AWS) / Backlog.md / BMAD

---

## 06. Il Progetto pilota
**Dimostrarlo prima di scalarlo.**

> *Sei settimane, un team, una feature reale. I dati del pilota guidano la scalabilità.*

Il pilota non è un esperimento: è una prova di concetto controllata. Selezioniamo un team di quattro o cinque persone, una feature target e applicano il processo completo per sei settimane. Tracciando ogni fase.

L'obiettivo del pilota non è la perfezione è il delta misurabile rispetto a come lavoriamo oggi. Stime sbagliate, rework, velocità di consegna. Al termine, i dati parlano da soli e la decisione di scalare diventa ovvia o informata.

### Piano di Implementazione
1. Settimane 1–3: Setup → Context Registry configurato, portale richieste attivo, tool AI pronti e integrati.
2. Settimane 4–5: Esecuzione → La feature avanza seguendo ogni fase del processo, checkpoint tracciati in tempo reale su Jira.
3. Settimana 6: Chiusura → Confronto con la baseline, retrospettiva con il team, presentazione dati e next step.

### Business Impact
Se il processo funziona, abbiamo dati reali per giustificare lo scaling. Se emergono frizioni, le identifichiamo su scala piccola prima di investire ulteriormente.

### Toolchain
- Jira (tracking)
- Teams → canale #chimelohafattofare

---

## 07. Il ROI Atteso
**Dall'esperimento all'AHA moment.**

> *Il risultato non è fare di più con meno è fare le cose giuste con maggior energia, in modo prevedibile, strutturato e lungimirante.*

Con un processo strutturato e AI contestualizzata i team smettono di lavorare su requisiti ambigui e andare per deduzioni iniziando a lavorare su specifiche validate con il minor margine di errore possibile. La differenza non è nella velocità di digitazione: è nell'effort sprecato che diminuisce perché il sistema ne genera meno.

Il valore più sottovalutato è la prevedibilità. Quando gli sprint vengono rispettati e le stime sono affidabili, il rapporto tra IT e business cambia strutturalmente. L'IT smette di essere la variabile imprevedibile del piano e diventa un partner con cui pianificare. I checkpoint di validazione basati su dati concreti aiutano tutti a prevedere problemi e fare un passo indietro prima ancora di chiedere qualcosa di nuovo.

### Piano di Implementazione
1. Misurare la baseline oggi: rilasci in ritardo, rework eseguiti, cambi di rotta e tutto ciò che ne consegue.
2. Definire i target KPI con il board prima del pilota — non come risultato atteso, ma come soglia di valutazione condivisa.
3. Review a tre mesi: dati alla mano, si decide insieme se e come estendere il processo a tutta l'organizzazione.

### Business Impact
Un team che opera con fasi chiare, AI governata e specifiche validate delivera meglio. L'IT diventa un asset pianificabile, non una variabile da gestire.

### Extra
Può diventare, se funziona, un caso di successo da raccontare a livello di comunicazione aziendale, un gancio potente per raccontare un'azienda che guarda avanti, che sfrutta questa rivoluzione chiamata AI per essere tra le prime del settore in Italia ad entrarci a 360 gradi nei processi di delivery interni.

### Toolchain
- Custom Dashboard (Next.js)
- OKR / KPI Framework aziendale

---

## 08. AI Governance
**AI governata: il vero differenziale**

> *Non quanti tool AI usiamo ma se producono tutti lo stesso standard.*

Vogliamo che ogni developer, pm, analyst del team usi l'AI con lo stesso contesto: le nostre convenzioni, la nostra architettura, le nostre regole di sicurezza.

Questo non lo otteniamo con la disciplina individuale, si ottiene con un metodo condiviso: un contesto aziendale (versionato in Git?!) e iniettato come system prompt fisso in ogni tool utilizzato dal team. L'AI smette di essere un jolly e diventa un collaboratore onnisciente che conosce tutto.

### Piano di Implementazione
1. Il team tech documenta le convenzioni implicite della codebase.
2. Quelle convenzioni diventano `global-context.md`: un file versionato che la CI mantiene aggiornato ad ogni merge.
3. Claude Code viene adottato come standard unico, pre-configurato con quel contesto come system prompt.

### Business Impact
Il codice generato dall'AI rispetta i nostri standard senza dipendere dalla capacità del singolo. La qualità diventa strutturale, non personale.

### Toolchain
- `global-context.md` (versionato in Git)
- Claude Code CLI (standard unico)

---

## 09. Context as Code
**Delegare la memoria storica all'AI**

> *L'AI non può rispettare le nostre regole se non le conosce. La soluzione è: glielo diciamo noi, una volta sola.*

Il **Codebase Context Registry** è un file Markdown versionato in Git che contiene architettura, pattern approvati, naming conventions e policy di sicurezza. Viene rigenerato automaticamente dalla CI a ogni merge su main e rimane sempre aggiornato e sempre disponibile.

Questo file diventa il system prompt fisso di ogni interazione AI del team. Non dipende dal dev che ricorda di specificarlo, non cambia da persona a persona. L'AI lavora sempre con il contesto completo del progetto.

### Piano di Implementazione
1. Il team passa il tempo necessario (1–2 settimane) a documentare le regole implicite della codebase nel primo `global-context.md`: error logging, best practices, design system, pattern comuni, naming conventions, security.
2. Uno script nella CI mantiene il file sincronizzato con l'evoluzione del codice senza effort manuale, rigenerando automaticamente il file ad ogni merge su main.
3. Il file viene configurato come system prompt obbligatorio su tutti i tool AI del team: skills su Claude, rules su Cursor, system prompt fisso ovunque.

### Business Impact
I dev interni o esterni leggono un documento invece di fare shadowing. I senior fanno code review che è più una validazione che un'ispezione alla ricerca di capire cosa stanno guardando.

### Toolchain
- Repomix (non lo so, l'ho cercato online, non è il mio campo)
- WebHook di Bitbucket (come sopra, potrebbe essere l'equivalente delle github actions)
- `global-context.md` (versionato in git)

---

---

# VERSIONE PITCH

> Testi sintetici per la presentazione live. Ogni slide ha una domanda aperta per guidare la discussione, e due o tre punti chiave come filo del discorso.

---

## Premessa — PITCH

**Domanda:** Siamo pronti a essere pionieri, o aspettiamo che qualcun altro ci dica come si fa?

- L'AI cambia ogni giorno. Chi sperimenta oggi governa domani.
- Quello che segue non è un processo da seguire — è una bozza da costruire insieme.
- Abbiamo bisogno di tutti: costruiamo qualcosa che ci faccia lavorare bene domani.

---

## 00. Il punto di partenza — PITCH

**Domanda:** L'AI che usiamo oggi accelera il nostro processo o accelera il caos?

- L'AI amplifica quello che trova: processo solido → più veloce; caos → più caos.
- Il problema non è mai il tool. È l'assenza di un processo.
- L'obiettivo non è fare di più: è fare le cose giuste, in modo prevedibile.

---

## 01. L'idea di processo — PITCH

**Domanda:** Quando un developer inizia a sviluppare, ha già tutto quello che gli serve o deve ancora cercarlo?

- 7 fasi, 1 output concreto per ognuna. Nessun passaggio di consegne a voce.
- La feature non avanza se la fase precedente non ha prodotto il suo output.
- Business e IT parlano la stessa lingua perché il processo è l'accordo operativo tra loro.

---

## 02. Processo E2E — PITCH

**Domanda:** Quanti di questi 7 step esistono già nel nostro processo, e quanti vivono solo nelle email?

- Richiesta → Triage → Discovery → Planning → Development → Demo → Live.
- Ogni fase ha un owner, un artefatto e un tag Git. Tracciabilità totale.
- Nessuno sviluppa senza un prototipo approvato. Nessun deploy senza demo andata a buon fine.

---

## 03. Richiesta e Triage — PITCH

**Domanda:** Quante richieste arrivano oggi via Slack, email, o a voce nei corridoi?

- Un solo entry point: il portale. Se non passa da lì, non esiste.
- Il form ha campi obbligatori: problema, utenti impattati, obiettivo, urgenza. Non si invia se incompleto.
- Solo le richieste che superano il triage del Product Director entrano in backlog.

---

## 04. Discovery & Prototipazione — PITCH

**Domanda:** Il business oggi approva un documento da immaginare o qualcosa che può cliccare?

- Il PM usa Claude per generare un prototipo navigabile prima che un developer scriva una riga di codice.
- Il prototipo approvato diventa il Contratto Visivo: il riferimento unico e immutabile per tutto il team.
- I rework da requisiti fraintesi diventano strutturalmente molto improbabili.

---

## 05. Spec-Driven Development — PITCH

**Domanda:** Quanto tempo perde oggi un developer a capire cosa deve fare invece di farlo?

- Il developer osserva, capisce e prende decisioni architetturali. L'AI costruisce.
- Lo SDD è il meccanismo che rende il codice AI-generated verificabile, non ambiguo.
- Il team scala la capacità produttiva senza aggiungere persone.

---

## 06. Il Progetto pilota — PITCH

**Domanda:** Come dimostriamo che funziona prima di chiedere a tutta l'organizzazione di cambiare?

- 6 settimane, 4-5 persone, una feature reale. Processo completo tracciato in ogni fase.
- L'obiettivo non è la perfezione: è il delta misurabile rispetto a come lavoriamo oggi.
- Al termine i dati parlano da soli: la decisione di scalare diventa ovvia o informata.

---

## 07. Il ROI Atteso — PITCH

**Domanda:** Quanto vale per il business avere un IT che diventa un partner pianificabile invece di una variabile da gestire?

- Meno rework. Sprint rispettati. Stime affidabili.
- L'IT smette di essere la variabile imprevedibile del piano.
- Extra: potenziale caso di successo da raccontare. Un'azienda che ha scelto di guidare questa transizione, non di subirla.

---

## 08. AI Governance — PITCH

**Domanda:** L'AI che usiamo conosce le nostre regole, o le inventa ogni volta da capo?

- Vogliamo che tutti usino l'AI con lo stesso contesto: architettura, convenzioni, regole di sicurezza.
- Non si ottiene con la disciplina individuale. Si ottiene con un metodo condiviso.
- La qualità diventa strutturale, non personale.

---

## 09. Context as Code — PITCH

**Domanda:** Come facciamo in modo che tutta l'AI del team parli sempre la stessa lingua?

- `global-context.md`: un file Markdown versionato in Git con tutto il contesto della codebase.
- La CI lo rigenera automaticamente ad ogni merge. Sempre aggiornato, zero effort manuale.
- Diventa il system prompt fisso su tutti i tool AI del team. Un documento, nessun setup individuale.
