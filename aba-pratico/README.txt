ABA PRATICO PWA v2.3 FLAT

CONTENUTO
- index.html
- manifest.webmanifest
- service-worker.js

FUNZIONI PWA
- Installabile su Android/Chrome e browser compatibili.
- Apertura in modalità standalone, senza normale barra del browser.
- Funzionamento offline dopo il primo caricamento.
- Comunicatore CAA e Agenda Visiva disponibili offline.
- Memoria locale di configurazioni e attività.
- Scorciatoie PWA per Comunicatore e Agenda.
- Pulsante INSTALLA nella header quando il browser rende disponibile il prompt.

IMPORTANTE
Una vera PWA deve essere servita da:
- HTTPS, oppure
- localhost durante lo sviluppo.

Non aprire index.html tramite content:// o file:// per testare installazione,
manifest e Service Worker: in quel caso il browser non può attivare tutte le
funzioni PWA.

TEST LOCALE SU COMPUTER
Dalla cartella ABA_PRATICO_PWA_v2_2:
    python -m http.server 8080

Poi aprire:
    http://localhost:8080

PUBBLICAZIONE
Caricare l'intero contenuto della cartella sullo stesso percorso di un sito HTTPS,
mantenendo invariata la struttura dei file.

TEST OFFLINE
1. Aprire la PWA online almeno una volta.
2. Attendere il caricamento completo.
3. Installarla oppure ricaricare la pagina una volta.
4. Disattivare la rete.
5. Riaprire ABA PRATICO.
6. Verificare Comunicatore CAA, Agenda Visiva e pittogrammi.

VERSIONE FLAT
Tutti i file devono stare nella stessa cartella su GitHub:
aba-pratico/
  index.html
  manifest.webmanifest
  service-worker.js
  icon-192.png
  icon-512.png
  icon-maskable-512.png
  apple-touch-icon-180.png
  README.txt
