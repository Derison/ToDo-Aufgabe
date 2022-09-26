# AUFGABE To-Do List

## Getting Started

This application needs to be run on a web server due to CORS policities.

1. Clone the repository
2. Run `npm install` to install local dependencies
3. Run `npm run dev` in `client` direcotry to open the interval dev server.
4. Run `npm run start` in `server` directory
5. Execute `docker run --name mongodb -d mongo:latest -p 27017:27017` in the terminal to start a mongodb instance

## More Tasks

- edit entries
- local storages
- server
- datenbank
- mongoose

## Task

Ziel: Schreibe eine funktionstüchtige (CLIENT ONLY) To-Do List mit HTML, CSS und Javascript. Das Layout soll grob von diesem Sketch vorgegeben sein: http://sketchtoy.com/70773255

Als Orientierung oder Starthilfe kannst du die folgenden Schritte einfach in Reihenfolge abarbeiten.

1. Gestalte das Layout statisch nur mit HTML und CSS (kein JS). Die Anordnung und Orientierung der Elemente sollte sehr nah am Sketch sein, alles andere ist optional.
2. Per JavaScript sollte nun die Button/Input Kombination angesprochen werden, welche dann die einzelnen ToDo-Objekte erzeugt. Ein einzelnes Objekt würde exemplarisch so aussehen: { text: "Geschirrspüler ausräumen", done: false }. Die Objekte speicherst du in einem zentralen Array. Den Datenfluss und die Richtigkeit der Daten überprüfst du in diesem Schritt am Besten mit console.log.
3. Nun schreibe mit Hilfe des Arrays alle Elemente in die linke Spalte (vorerst egal ob done: false oder true)
4. Füge einen Click-Handler auf jedes einzelne Element hinzu, der Click-Handler schaltet die "done"-Eigenschaft der einzelnen Objekte um (true -> false, false -> true), überprüfe das Ergebnis am Besten wieder mit console.log
5. Wenn die Daten richtig manipuliert werden, schaue erneut was du an der Funktion zum Rendering der Liste anpassen musst, sodass alle Elemente mit done: true in der rechten Spalte landen und alle Elemente mit done: false in der Linken

Du solltest nun To-Do Elemente hinzufügen können und den "erledigt"-Status der Elemente per Klick umschalten können.

- OPTIONAL DESIGN: Optimiere das Design, um das Tool wirklich auslieferbar zu machen. (nicht responsive, einfach nur schön) Ob oder welche Libraries du benutzt ist dir überlassen.
- OPTIONAL ARCHITEKTUR: Setze die Liste objektorientiert um. Beispiel-Klassen: ToDoList, ToDoItem
- OPTIONAL ARCHITEKTUR: Benutze TypeScript.
- OPTIONAL FUNKTION: Speichere die Listenelemente im localStorage des Browsers, sodass bei erneutem Besuch der Seite die alten Elemente geladen werden.

Die optionalen Tasks sind ein wenig um rauszufinden wie dein Stand und Erfahrung ist und was dir an Arbeit gefällt. Du musst Sie nicht machen, aber es wäre im Gespräch schön zu erfahren, wieso/weshalb du dich dazu entschieden hast diese/n Task/s auszulassen oder eben genau diese/n Task zu erledigen. Hat ein wenig mit Präferenzen zu tun.

Wichtige Keywords für den Tasks: HTML, CSS, HTML Elemente per JS ansprechen, JS Eventlistener, HTML Elemente per JS erzeugen, functions, arrays, objects, arrays of objects, array filte