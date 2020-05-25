Backend: 
* [X] ~~*Mongoengine classes*~~ [2020-05-22] 
* [ ] Die Felder in den DB Datenbanken sind noch nicht richtig!
* [ ] Verifikation User Mail
* [ ] Email wenn Fahrt erstellt
* [ ] Email wenn Anfrage
* [ ] PATCH für User
* [ ] Zugang für Eventveranstalter
* [ ] GET für angenommene Reservierungen - Fahrer
* [ ] GET für angenommene Reservierungen - Beifahrer
* [ ] PATCH für Sitze bei Reservierung, wenn Fahrt angenommen
* [ ] Wenn Anfrage "declined" dann nach 24 Stunden löschen
* [ ] Max Anzahl an Anfragen für eine Fahrt begrenzen
* [ ] Max Anzahl an Anfragen pro Nutzer pro Stunde begrenzen
* [ ] Alle Tabellen aktualisieren (da fehlen noch einige Felder)
* [ ] Auch das Format der Tabellenfelder aktualisieren
* [ ] Wie kann ich Bilder in MongoDB speichern?
* [ ] Push-Notifications (Wie sende ich etwas vom Backend ans Frontend?)
* [ ] Mapper für Orten zu PLZs
* [ ] Bei der Reservierung automatisch den Ort zu der PLZ finden!

Frontend:
1. Reservation
    1.1 PATCH -> Bestätigen 
    1.2 DELETE -> Ablehnen
2. Design
    2.1 Komponenten Design
3. Trips PATCH anbinden (WIP)
4. User Profil
    3.1 PATCH anbinden (WIP)

Deployment:
- Script was nach jedem npm run build alle files in die server ordner kopiert
- Config Parameters MongoDB

Known - Bugs: 
#1 Page Reload -> Logout -> Redirect to /login bei jedem Page Reload
#2 Logout -> Redirect not working
#3 Boxen für gefunde Fahrten -> einheitliche Größe
