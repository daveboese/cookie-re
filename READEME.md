# Definition eines Cookies:

 Ein Cookie ist eine kleine Textdatei, die entweder vom Webserver an den Browser gesendet oder im Browser von einem Skript (z. B. JavaScript) erzeugt wird. Es wird verwendet, um zustandsbehaftete Informationen für das zustandslose HTTP-Protokoll zu speichern.

Verwendungszwecke von Cookies: Cookies werden hauptsächlich für drei Zwecke verwendet: Sitzungsverwaltung, Personalisierung und Tracking. Sie ermöglichen das Speichern von Informationen wie Login-Status, Warenkörben, Benutzereinstellungen und das Verfolgen des Nutzerverhaltens.

Unterschiede zwischen Frontend und Backend: Cookies können sowohl im Frontend (Browser) als auch im Backend (Server) erstellt werden. Im gezeigten Beispiel wird der Code im Backend verwendet, um das Cookie in der Serverantwort zu setzen. Das Frontend kann Cookies jedoch auch direkt über document.cookie erstellen.

Sicherheitsaspekte: Es gibt wichtige Sicherheitsaspekte bei der Verwendung von Cookies. Der Code im Backend verwendet das httpOnly-Attribut, um das Cookie vor JavaScript-Zugriff zu schützen, und das Secure-Attribut, um das Cookie nur über eine sichere HTTPS-Verbindung zu übertragen.

Performance-Bedenken: Es wird erwähnt, dass das Senden von Cookies bei jedem Request die Performance beeinträchtigen kann. Für nicht sensible Daten wird empfohlen, den Local Storage oder Session Storage zu verwenden, wenn möglich.

Zugriffsbeschränkungen: Cookies können mit dem Secure-Attribut und dem HttpOnly-Attribut beschränkt werden, um den Zugriff zu steuern und die Sicherheit zu erhöhen.

Hinweis auf Local Storage und Session Storage: Für das Speichern von nicht sensiblen Daten wird der Local Storage oder Session Storage empfohlen, da sie eine alternative Möglichkeit bieten, Daten clientseitig zu speichern.

Begrenzung der Anzahl von Cookies: Es wird erwähnt, dass Browser eine Begrenzung für die Anzahl der Cookies pro Domain festlegen, um den Speicherplatzverbrauch zu begrenzen.
