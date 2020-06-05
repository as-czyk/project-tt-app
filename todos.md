Backend:
MVP:
* [X] ~~*Mongoengine classes*~~ [2020-05-22] 
* [X] ~~*PATCH für User*~~ [2020-06-01]
* [X] ~~*Update "last logged in" with utcnow()*~~ [2020-06-01]
* [ ] PATCH für Sitze bei Reservierung, wenn Fahrt angenommen
* [ ] Wenn Anfrage "declined" dann nach 24 Stunden löschen
* [ ] Wie kann ich Bilder in MongoDB speichern?
* [ ] Hin-/Rück-/Hin- und Rückfahrt
* [ ] Update Journey (Event_id darstellen, Hin/Rück/Hin & Rückfahrt)
* [ ] Die Felder in den DB Datenbanken sind noch nicht richtig! !WICHTIG! Aber kriege ich noch nicht hin
* [ ] Tabelle für Bundesligisten anlegen
* [ ] Tabelle für Bundesliga Spielplan anlegen
* [ ] Zugang für Eventveranstalter
* [ ] Mapper für Orten zu PLZs
* [ ] Bei der Reservierung automatisch den Ort zu der PLZ finden!
* [ ] Max Anzahl an Anfragen für eine Fahrt begrenzen
* [ ] Max Anzahl an Anfragen pro Nutzer pro Stunde begrenzen
* [ ] Zwischenhalte


Sp#tere Release:
* [ ] Email wenn Fahrt erstellt
* [ ] Verifikation User Mail
* [ ] Email wenn Anfrage
* [ ] GET für angenommene Reservierungen - Fahrer
* [ ] GET für angenommene Reservierungen - Beifahrer
* [ ] Push-Notifications (Wie sende ich etwas vom Backend ans Frontend?)



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
