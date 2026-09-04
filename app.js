(function(){

  var I18N = {
    de: {
      navProgramm: 'Programm', navLunch: 'Mittagessen', navExk: 'Exkursionen', navVenue: 'Info', navPlan: 'Mein Plan',
      titleProgramm: 'Programm', titleLunch: 'Mittagessen in der Nähe', titleExk: 'Exkursionen', titleVenue: 'Info', titlePlan: 'Mein Plan',
      mod: 'Mod.:', noAbstract: 'Kein Abstract verfügbar.',
      planEmpty: 'Noch nichts geplant.<br>Tippe im Programm auf das + Symbol, um Sessions oder Beiträge hinzuzufügen.',
      planNote: 'Dein Plan wird lokal in diesem Browser gespeichert. Auf einem anderen Gerät oder in einem anderen Browser ist er nicht sichtbar. Tipp: Nutze "Exportieren", um deinen Plan als Kalender oder PDF zu speichern, oder um ihn per Link/QR-Code auf einem anderen Gerät zu öffnen.',
      exportBtn: 'Als Kalender exportieren (.ics)',
      exportEmptyAlert: 'Dein Plan ist noch leer.',
      exportPlanPdfBtnText: 'Als PDF exportieren',
      pdfPlanTitle: 'Mein Plan — DGL 2026',
      pdfGeneratedOn: 'Erstellt am',
      pdfNotesTitle: 'Notizen',
      pdfLibError: 'PDF-Funktion konnte nicht geladen werden. Bitte Internetverbindung prüfen und erneut versuchen.',
      qrLibError: 'QR-Code-Funktion konnte nicht geladen werden. Bitte Internetverbindung prüfen und erneut versuchen.',
      qrTooLarge: 'Dein Plan hat zu viele Einträge für einen QR-Code. Bitte nutze stattdessen "Als Link teilen".',
      clearPlanBtnText: 'Plan komplett löschen',
      clearPlanEmptyAlert: 'Dein Plan ist bereits leer.',
      clearPlanConfirm: 'Möchtest du wirklich deinen gesamten Plan löschen? Alle gemerkten Vorträge, Poster und Termine werden entfernt. Das kann nicht rückgängig gemacht werden.',
      route: 'Route', website: 'Website',
      openMaps: 'In Google Maps öffnen',
      oepnvLabel: 'ÖPNV:',
      sbahnMapLink: 'Interaktiver S-Bahn-Liniennetzplan',
      min: 'Min',
      headerTitle: '41. DGL-Jahrestagung & 16. WRHC',
      headerDates: '14.–18. September 2026',
      searchPlaceholder: 'Suche nach Titel, Autor:in, Stichwort...',
      noResults: 'Keine Treffer.',
      liveNow: 'Läuft gerade',
      planConflict: 'Zeitliche Überschneidung mit:',
      aboutSpeaker: 'Zur Person',
      nextUp: 'Nächster Termin',
      shareBtnLabel: 'Als Link teilen',
      exportMenuLabel: 'Exportieren',
      qrBtnLabel: 'QR-Code anzeigen',
      posterViewLabel: 'Plakat ansehen',
      menuViewLabel: 'Menü ansehen',
      routeDetailsLabel: 'Wegbeschreibung',
      practicalInfoLabel: 'Praktische Infos',
      remoteTalkLabel: 'Wird per Videokonferenz zugeschaltet',
      presenterLabel: 'Vortragende:r:',
      updateBannerText: 'Es gibt eine neue Version der App.',
      updateBannerReload: 'Aktualisieren',
      showOnMapLabel: 'Auf Karte anzeigen',
      addToPlanLabel: 'Zum Plan hinzufügen',
      removeFromPlanLabel: 'Vom Plan entfernen',
      showTalksLabel: 'Vorträge anzeigen',
      hideTalksLabel: 'Vorträge ausblenden',
      showPostersLabel: 'Poster anzeigen',
      hidePostersLabel: 'Poster ausblenden',
      liveNowHeading: 'Was läuft gerade?',
      greetedByPrefix: 'Begrüßung durch',
      showGreetingsLabel: 'Grußworte anzeigen',
      hideGreetingsLabel: 'Grußworte ausblenden',
      showSpeakersLabel: 'Speaker anzeigen',
      hideSpeakersLabel: 'Speaker ausblenden',
      showDetailsLabel: 'Details anzeigen',
      hideDetailsLabel: 'Details ausblenden',
      showMoreInfoLabel: 'Mehr Informationen',
      qrHint: 'Scanne den QR-Code, um deinen Plan auf einem anderen Gerät zu laden.',
      qrCloseBtn: 'Schließen',
      linkCopied: 'Link kopiert!',
      copyManually: 'Diesen Link kopieren:',
      sharedPlanConfirmPrefix: 'Geteilten Plan mit ',
      sharedPlanConfirmSuffix: ' Einträgen laden? Das ersetzt deinen aktuellen Plan.',
      lunchViewList: 'Liste',
      lunchViewMap: 'Auf Karte anzeigen',
      catAll: 'Alle', catSessions: 'Sessions', catPlenary: 'Plenar & Preise', catWorkshop: 'Workshops', catSocial: 'Social', catWrhc: 'WRHC',
      noItemsInCategory: 'Keine Programmpunkte in dieser Kategorie.',
      followUs: 'DGL auf Social Media',
      hashtagLabel: 'Teile deine Eindrücke unter',
      posterListLabel: 'Poster',
      posterBoard: 'Stellwand',
      organizersLabel: 'Veranstalter',
      floorplanTitle: 'Gebäudeplan',
      posterPlanTitle: 'Posterstellplan',
      showOnPosterPlanLabel: 'Auf Posterstellplan anzeigen',
      posterPlanTriggerLabel: 'Posterstellplan vergrößern',
      venueCardTitle: 'Tagungsort',
      officeCardTitle: 'Tagungsbüro',
      officeContact: 'Ansprechpartnerin:',
      officeHours: 'Öffnungszeiten:',
      officeHoursMo: 'Montag: 9:00–18:00 Uhr',
      officeHoursDi: 'Dienstag: 8:00–18:00 Uhr',
      officeHoursMi: 'Mittwoch: 8:00–18:00 Uhr',
      officeHoursDo: 'Donnerstag: 8:00–13:30 Uhr',
      officeHoursFr: 'Freitag: geschlossen',
      wlanCardTitle: 'WLAN',
      wlanMainName: 'BerlinFreeWiFi',
      wlanMainNote: 'kein Passwort notwendig',
      wlanEduroamNote: 'Mit bestehendem Uni-Account lässt sich auch das leistungsstärkere eduroam nutzen.',
      impressumTitle: 'Impressum',
      impressumText: 'Anbieter:\nForschungsverbund Berlin e. V.\nRudower Chaussee 17\n12489 Berlin\nDeutschland\nE-Mail: info(at)fv-berlin.de\nTelefon: +49 30 6392-3330\n\nInstitut:\nLeibniz-Institut für Gewässerökologie und Binnenfischerei (IGB)\nim Forschungsverbund Berlin e. V.\nMüggelseedamm 310\n12587 Berlin\nDeutschland\nTelefon: +49 (0)30 64181-500\nE-Mail: info(at)igb-berlin.de\n\nVereinsregister:\nDas IGB ist ein nicht rechtsfähiges Institut im Forschungsverbund Berlin e. V. Der Forschungsverbund Berlin ist im Vereinsregister des Amtsgerichts Berlin-Charlottenburg unter der Registernummer VR 12174 B eingetragen.\n\nVertretung und Organisationsform:\nDer Forschungsverbund Berlin e. V. wird gemeinschaftlich durch den Sprecher des Vorstands und den Geschäftsführer Martin Böhnke vertreten. Bei institutsspezifischen Geschäften wird der Forschungsverbund Berlin e. V. durch den Geschäftsführer Martin Böhnke gemeinsam mit dem jeweiligen geschäftsführenden Direktor des betreffenden Instituts vertreten.\nFür diese Seiten ist die Direktorin a. i. des Leibniz-Instituts für Gewässerökologie und Binnenfischerei (IGB), Prof. Dr. Sonja Jähnig, verantwortlich.\nDer Forschungsverbund Berlin e. V. vereint sieben wissenschaftlich selbstständige Institute unter einer juristischen Person.\n\nUmsatzsteueridentnummer:\nDE 136785011\n\nRedaktionelle Verantwortlichkeit:\nRedaktionsverantwortlich für die Onlinedienste des Forschungsverbunds Berlin e. V. sind der Geschäftsführer Martin Böhnke für die nichtwissenschaftlichen und die Direktorin a. i. des IGB, Prof. Dr. Sonja Jähnig, für die wissenschaftlichen Inhalte.\n\nAnsprechpartnerin für den Tagungsführer:\nAnna Oprei, anna.oprei@igb-berlin.de',
      datenschutzTitle: 'Datenschutz',
      datenschutzText: 'Verantwortlicher:\nForschungsverbund Berlin e. V.\nRudower Chaussee 17, 12489 Berlin\nTelefon: +49 30 6392-3330, E-Mail: info(at)fv-berlin.de\nVertreten durch: Prof. Dr. Stefan Eisebitt (Sprecher des Vorstands), Martin Böhnke (Mitglied des Vorstands und Geschäftsführer)\n\nDatenschutzbeauftragter:\nDID Dresdner Institut für Datenschutz, Kontakt: Felix Lückert\nHospitalstraße 4, 01097 Dresden\nTelefon: +49 351 655772-0, E-Mail: datenschutz(at)fv-berlin.de\n\nBereitstellung der App und Logfiles:\nBeim Aufruf dieser App erfasst der Server automatisiert Daten in Protokolldateien (Logfiles): Datum und Uhrzeit des Zugriffs, die IP-Adresse, aufgerufene Seiten, Informationen zu Browsertyp und -version sowie zum Betriebssystem. Diese Daten dienen ausschließlich der technischen Bereitstellung und Absicherung der App und werden im Regelfall nach spätestens sieben Tagen gelöscht. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.\n\nInteraktive Karte (OpenStreetMap):\nDiese App bindet eine interaktive Karte ein, die auf Kartenmaterial von OpenStreetMap basiert, bereitgestellt über die OpenStreetMap Foundation, St John\u2019s Innovation Centre, Cowley Road, Cambridge CB4 0WS, Vereinigtes Königreich. Beim Aufruf der Karte wird eine Verbindung zu den Servern von OpenStreetMap hergestellt, wodurch deine IP-Adresse an OpenStreetMap übermittelt wird. Rechtsgrundlage ist unser berechtigtes Interesse an einer übersichtlichen und funktionsfähigen Standortdarstellung (Art. 6 Abs. 1 lit. f DSGVO). Weitere Informationen: osmfoundation.org/wiki/Privacy_Policy\n\nFeedback-Formular:\nÜber das Feedback-Formular im Info-Bereich kannst du uns eine Nachricht zur App schicken. Die dabei eingegebenen Daten (deine Nachricht sowie ggf. freiwillig angegebene Kontaktdaten) werden über den Formular-Dienstleister Web3Forms verarbeitet und per E-Mail an uns (dgl-2026@igb-berlin.de) weitergeleitet. Rechtsgrundlage ist deine Einwilligung durch das Absenden des Formulars (Art. 6 Abs. 1 lit. a DSGVO). Die Daten werden gelöscht, sobald dein Anliegen abschließend bearbeitet ist.\n\nLokale Speicherung auf deinem Gerät:\nDiese App speichert bestimmte Einstellungen (z. B. Dunkelmodus, Schriftgröße, dein persönlicher Programmplan, geschlossene Hinweise) lokal in deinem Browser (localStorage). Diese Daten verlassen dein Gerät nicht und werden nicht an uns oder Dritte übertragen. Du kannst sie jederzeit über die Browser-Einstellungen löschen.\n\nRechte der betroffenen Person:\nIhnen stehen gegenüber dem Verantwortlichen folgende Rechte zu: Widerruf einer Einwilligung (Art. 7 Abs. 3 DSGVO), Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16 DSGVO), Löschung (Art. 17 Abs. 1 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO), Datenübertragbarkeit (Art. 20 DSGVO), Widerspruch gegen die Verarbeitung (Art. 21 DSGVO) sowie Beschwerde bei der Aufsichtsbehörde (Art. 77 DSGVO). Zuständige Aufsichtsbehörde: Die Berliner Beauftragte für Datenschutz und Informationsfreiheit, Friedrichstraße 219, 10969 Berlin.',
      tourNext: 'Weiter',
      tourDone: 'Fertig',
      tourSkip: 'Überspringen',
      tourBack: 'Zurück',
      tourIntroText: '👋 Neu hier? Dann lass mich dir kurz zeigen, wie du diese App nutzt.',
      tourStart: 'Tour starten',
      tourHelpBtn: '👋 Neu hier?',
      presentersCardTitle: 'Upload deiner Präsentation',
      posterPreisTitle: 'Posterpreis',
      feedbackTitle: 'Feedback',
      feedbackText: 'Ist dir ein Fehler aufgefallen, oder hast du einen Verbesserungsvorschlag für diese App? Schreib uns gerne kurz.',
      feedbackPlaceholder: 'Deine Nachricht...',
      feedbackSend: 'Absenden',
      feedbackSending: 'Wird gesendet...',
      feedbackSuccess: 'Danke, deine Nachricht wurde gesendet!',
      feedbackError: 'Senden fehlgeschlagen. Bitte versuch es später nochmal.',
      posterPreisText: 'Der DGL-Posterpreis prämiert herausragende Poster. Anmeldung meist automatisch bei der Beitragsanmeldung – sonst direkt im Tagungsbüro nachholbar. Alle Teilnehmenden sind stimmberechtigt; Stimmzettel inkl. Ablauf liegen dort aus.\n\nPreisverleihung: Donnerstagmittag, Abschlussplenum (Hörsaal 0/115)\n\nOrganisator: Prof. Dr. René Sahm, Universität Kassel',
      presentersMissing: 'Ihr Beitrag fehlt in der Liste?',
      presentersHowTo: 'So geht\'s:',
      presentersDuration: 'Bitte lade deine Präsentation als PowerPoint oder PDF über den unten stehenden Link in den Nimbus-Ordner hoch (nur Hochladen möglich, keine Einsicht in bereits hochgeladene Dateien).',
      presentersNamingInfo: 'Benenne deine Datei bitte eindeutig nach folgendem Muster:',
      presentersTalkHeading: 'Vortrag (12 Min. + bis zu 3 Min. Fragen, PowerPoint oder PDF)',
      presentersTalkPattern: 'Uhrzeit_Nachname_Session_Wochentag.pptx',
      presentersExample: 'Beispiel: „1100_Oprei_S12_Dienstag.pptx"',
      presentersPosterHeading: 'Poster Speed Talk (optionale Folie zu Ihrem Poster, ausschließlich PowerPoint)',
      presentersPosterNamingInfo: 'Nummer_Nachname_Wochentag.pptx',
      presentersPosterExample: 'Beispiel: „03_Heinrich_Dienstag.pptx" (Nummer = Reihenfolge beim Poster Speed Talk)',
      presentersWarning: '⚠️ Wichtig: Verwende den Nachnamen des/der gemeldeten Erstautor:in, auch wenn eine andere Person vorträgt.',
      presentersMissingContact: 'Falls du unsicher bist, wende dich bitte an das Tagungsbüro.',
      presentersFormatWarning: '⚠️ Wichtig: Vorträge als PowerPoint oder PDF. Poster Speed Talks ausschließlich als PowerPoint im Format 16:9 (werden zu einer gemeinsamen Präsentation zusammengefügt).',
      presentersUploadLink: 'Zum Upload-Ordner',
      presentersPassword: 'Passwort:',
      presentersLastName: 'Nachname',
      presentersLastNamePlaceholder: 'z. B. Oprei',
      presentersStep1Title: 'Nachname eingeben',
      presentersStep1Text: 'und passenden Beitrag aus dem Dropdown-Menü auswählen. Wichtig: Die Suche funktioniert nur nach dem Nachnamen des/der gemeldeten Erstautor:in, auch wenn eine andere Person vorträgt.',
      presentersStep2Title: 'Datei umbenennen',
      presentersStep2Text: '– Du erhältst den fertigen Dateinamen zum Kopieren. Alternativ: Klicke auf "Datei auswählen & umbenennen", dann wird eine bereits umbenannte Kopie lokal heruntergeladen.',
      presentersStep3Title: 'Hochladen',
      presentersStep3Text: 'über den automatisch freigeschalteten Link unten. Datenschutzhinweis: nur Hochladen möglich, keine Einsicht in bereits hochgeladene Dateien.',
      presentersPickTalk: 'Mehrere Beiträge gefunden – welcher ist deiner?',
      presentersPickPlaceholder: 'Beitrag auswählen…',
      presentersNotFound: 'Kein Beitrag mit diesem Namen gefunden. Bitte wende dich an das Tagungsbüro.',
      presentersSession: 'Session',
      presentersSessionPlaceholder: 'Session auswählen…',
      presentersTime: 'Tag deines Vortrags',
      presentersTimePlaceholder: 'Tag auswählen…',
      presentersFilename: 'Ihr Dateiname:',
      presentersExtNote: 'Endung .pptx oder .pdf – je nachdem, welches Dateiformat du tatsächlich hochlädst.',
      presentersCopy: 'Kopieren',
      presentersCopied: 'Dateiname kopiert!',
      presentersRenameBtn: 'Datei auswählen & umbenennen',
      presentersRenamed: 'Heruntergeladen als "{name}" – diese Datei jetzt bei Nimbus hochladen.',
      planViewList: 'Liste',
      planViewTimeline: 'Zeitplan'
    },
    en: {
      navProgramm: 'Programme', navLunch: 'Lunch', navExk: 'Excursions', navVenue: 'Info', navPlan: 'My Plan',
      titleProgramm: 'Programme', titleLunch: 'Lunch nearby', titleExk: 'Excursions', titleVenue: 'Info', titlePlan: 'My Plan',
      mod: 'Chairs:', noAbstract: 'No abstract available.',
      planEmpty: 'Nothing planned yet.<br>Tap the + icon in the programme to add sessions or talks.',
      planNote: 'Your plan is stored locally in this browser. It is not visible on another device or in another browser. Tip: use "Export" to save your plan as a calendar or PDF, or to open it on another device via link/QR code.',
      exportBtn: 'Export to calendar (.ics)',
      exportEmptyAlert: 'Your plan is still empty.',
      exportPlanPdfBtnText: 'Export as PDF',
      pdfPlanTitle: 'My Plan — DGL 2026',
      pdfGeneratedOn: 'Generated on',
      pdfNotesTitle: 'Notes',
      pdfLibError: 'The PDF feature could not be loaded. Please check your internet connection and try again.',
      qrLibError: 'The QR code feature could not be loaded. Please check your internet connection and try again.',
      qrTooLarge: 'Your plan has too many items for a QR code. Please use "Share as link" instead.',
      clearPlanBtnText: 'Clear entire plan',
      clearPlanEmptyAlert: 'Your plan is already empty.',
      clearPlanConfirm: 'Are you sure you want to clear your entire plan? All saved talks, posters and events will be removed. This cannot be undone.',
      route: 'Directions', website: 'Website',
      openMaps: 'Open in Google Maps',
      oepnvLabel: 'Public transport:',
      sbahnMapLink: 'Interactive S-Bahn network map',
      min: 'min',
      headerTitle: '41st DGL Annual Conference & 16th WRHC',
      headerDates: '14–18 September 2026',
      searchPlaceholder: 'Search by title, author, keyword...',
      noResults: 'No results.',
      liveNow: 'Happening now',
      planConflict: 'Overlaps with:',
      aboutSpeaker: 'About the speaker',
      nextUp: 'Next up',
      shareBtnLabel: 'Share as link',
      exportMenuLabel: 'Export',
      qrBtnLabel: 'Show QR code',
      posterViewLabel: 'View poster',
      menuViewLabel: 'View menu',
      routeDetailsLabel: 'Directions',
      practicalInfoLabel: 'Practical info',
      remoteTalkLabel: 'Joining via video conference',
      presenterLabel: 'Presenter:',
      updateBannerText: 'A new version of the app is available.',
      updateBannerReload: 'Reload',
      showOnMapLabel: 'Show on map',
      addToPlanLabel: 'Add to plan',
      removeFromPlanLabel: 'Remove from plan',
      showTalksLabel: 'Show talks',
      hideTalksLabel: 'Hide talks',
      showPostersLabel: 'Show posters',
      hidePostersLabel: 'Hide posters',
      liveNowHeading: "What's happening now?",
      greetedByPrefix: 'Welcome remarks by',
      showGreetingsLabel: 'Show welcome remarks',
      hideGreetingsLabel: 'Hide welcome remarks',
      showSpeakersLabel: 'Show speakers',
      hideSpeakersLabel: 'Hide speakers',
      showDetailsLabel: 'Show details',
      hideDetailsLabel: 'Hide details',
      showMoreInfoLabel: 'More information',
      qrHint: 'Scan the QR code to load your plan on another device.',
      qrCloseBtn: 'Close',
      linkCopied: 'Link copied!',
      copyManually: 'Copy this link:',
      sharedPlanConfirmPrefix: 'Load shared plan with ',
      sharedPlanConfirmSuffix: ' items? This will replace your current plan.',
      lunchViewList: 'List',
      lunchViewMap: 'Show on map',
      catAll: 'All', catSessions: 'Sessions', catPlenary: 'Plenary & Awards', catWorkshop: 'Workshops', catSocial: 'Social', catWrhc: 'WRHC',
      noItemsInCategory: 'No programme items in this category.',
      followUs: 'DGL on Social Media',
      hashtagLabel: 'Share your moments with',
      posterListLabel: 'Posters',
      posterBoard: 'Board',
      organizersLabel: 'Organizers',
      floorplanTitle: 'Building plan',
      posterPlanTitle: 'Poster layout',
      showOnPosterPlanLabel: 'Show on poster layout',
      posterPlanTriggerLabel: 'Enlarge poster layout',
      venueCardTitle: 'Venue',
      officeCardTitle: 'Conference Office',
      officeContact: 'Contact:',
      officeHours: 'Opening hours:',
      officeHoursMo: 'Monday: 9:00 am–6:00 pm',
      officeHoursDi: 'Tuesday: 8:00 am–6:00 pm',
      officeHoursMi: 'Wednesday: 8:00 am–6:00 pm',
      officeHoursDo: 'Thursday: 8:00 am–1:30 pm',
      officeHoursFr: 'Friday: closed',
      wlanCardTitle: 'Wi-Fi',
      wlanMainName: 'BerlinFreeWiFi',
      wlanMainNote: 'no password required',
      wlanEduroamNote: 'If you already have a university account, you can also use the more powerful eduroam.',
      impressumTitle: 'Legal notice (Impressum)',
      impressumText: 'This legal notice is provided in German, as required for German websites.\n\nAnbieter:\nForschungsverbund Berlin e. V.\nRudower Chaussee 17\n12489 Berlin\nDeutschland\nE-Mail: info(at)fv-berlin.de\nTelefon: +49 30 6392-3330\n\nInstitut:\nLeibniz-Institut für Gewässerökologie und Binnenfischerei (IGB)\nim Forschungsverbund Berlin e. V.\nMüggelseedamm 310\n12587 Berlin\nDeutschland\nTelefon: +49 (0)30 64181-500\nE-Mail: info(at)igb-berlin.de\n\nVereinsregister:\nDas IGB ist ein nicht rechtsfähiges Institut im Forschungsverbund Berlin e. V. Der Forschungsverbund Berlin ist im Vereinsregister des Amtsgerichts Berlin-Charlottenburg unter der Registernummer VR 12174 B eingetragen.\n\nVertretung und Organisationsform:\nDer Forschungsverbund Berlin e. V. wird gemeinschaftlich durch den Sprecher des Vorstands und den Geschäftsführer Martin Böhnke vertreten. Bei institutsspezifischen Geschäften wird der Forschungsverbund Berlin e. V. durch den Geschäftsführer Martin Böhnke gemeinsam mit dem jeweiligen geschäftsführenden Direktor des betreffenden Instituts vertreten.\nFür diese Seiten ist die Direktorin a. i. des Leibniz-Instituts für Gewässerökologie und Binnenfischerei (IGB), Prof. Dr. Sonja Jähnig, verantwortlich.\nDer Forschungsverbund Berlin e. V. vereint sieben wissenschaftlich selbstständige Institute unter einer juristischen Person.\n\nUmsatzsteueridentnummer:\nDE 136785011\n\nRedaktionelle Verantwortlichkeit:\nRedaktionsverantwortlich für die Onlinedienste des Forschungsverbunds Berlin e. V. sind der Geschäftsführer Martin Böhnke für die nichtwissenschaftlichen und die Direktorin a. i. des IGB, Prof. Dr. Sonja Jähnig, für die wissenschaftlichen Inhalte.\n\nAnsprechpartnerin für den Tagungsführer:\nAnna Oprei, anna.oprei@igb-berlin.de',
      datenschutzTitle: 'Privacy Policy',
      datenschutzText: 'Data controller:\nForschungsverbund Berlin e. V.\nRudower Chaussee 17, 12489 Berlin, Germany\nPhone: +49 30 6392-3330, Email: info(at)fv-berlin.de\nRepresented by: Prof. Dr. Stefan Eisebitt (Chair of the Executive Board), Martin Böhnke (Executive Board Member and Managing Director)\n\nData Protection Officer:\nDID Dresdner Institut für Datenschutz, Contact: Felix Lückert\nHospitalstraße 4, 01097 Dresden, Germany\nPhone: +49 351 655772-0, Email: datenschutz(at)fv-berlin.de\n\nProvision of the app and log files:\nWhen you use this app, the server automatically collects data in log files: date and time of access, IP address, pages accessed, and information about your browser type/version and operating system. This data is used solely to provide and secure the app technically and is generally deleted after seven days at the latest. Legal basis: Art. 6(1)(f) GDPR.\n\nInteractive map (OpenStreetMap):\nThis app embeds an interactive map based on map data from OpenStreetMap, provided by the OpenStreetMap Foundation, St John\u2019s Innovation Centre, Cowley Road, Cambridge CB4 0WS, United Kingdom. Loading the map establishes a connection to OpenStreetMap\u2019s servers, which transmits your IP address to OpenStreetMap. Legal basis: our legitimate interest in a clear and functional display of locations (Art. 6(1)(f) GDPR). More information: osmfoundation.org/wiki/Privacy_Policy\n\nFeedback form:\nThe feedback form in the Info section lets you send us a message about the app. The data you enter (your message and any contact details you choose to provide) is processed via the form provider Web3Forms and forwarded to us by email (dgl-2026@igb-berlin.de). Legal basis: your consent given by submitting the form (Art. 6(1)(a) GDPR). The data is deleted once your request has been fully resolved.\n\nLocal storage on your device:\nThis app stores certain settings locally in your browser (localStorage), e.g. dark mode, font size, your personal schedule, and dismissed announcements. This data never leaves your device and is not transmitted to us or any third party. You can delete it at any time via your browser settings.\n\nYour rights:\nYou have the following rights against the data controller: to withdraw consent (Art. 7(3) GDPR), access (Art. 15 GDPR), rectification (Art. 16 GDPR), erasure (Art. 17(1) GDPR), restriction of processing (Art. 18 GDPR), data portability (Art. 20 GDPR), objection to processing (Art. 21 GDPR), and to lodge a complaint with a supervisory authority (Art. 77 GDPR). Competent supervisory authority: Die Berliner Beauftragte für Datenschutz und Informationsfreiheit, Friedrichstraße 219, 10969 Berlin, Germany.',
      tourNext: 'Next',
      tourDone: 'Done',
      tourSkip: 'Skip',
      tourBack: 'Back',
      tourIntroText: '👋 New here? Let us quickly show you how to use this app.',
      tourStart: 'Start tour',
      tourHelpBtn: '👋 New here?',
      presentersCardTitle: 'Upload your presentation',
      posterPreisTitle: 'Poster Award',
      feedbackTitle: 'Feedback',
      feedbackText: 'Spotted an error, or have a suggestion for improving this app? Feel free to let us know.',
      feedbackPlaceholder: 'Your message...',
      feedbackSend: 'Send',
      feedbackSending: 'Sending...',
      feedbackSuccess: 'Thanks, your message has been sent!',
      feedbackError: 'Sending failed. Please try again later.',
      posterPreisText: 'The DGL Poster Prize honours outstanding posters. Registration usually happens automatically with your submission – otherwise it can be done at the conference office at the start of the conference. All participants are eligible to vote; ballot papers with voting instructions are available there.\n\nAward ceremony: Thursday midday, closing plenary (Lecture Theatre 0/115)\n\nOrganiser: Prof. Dr. René Sahm, Universität Kassel',
      presentersMissing: 'Your contribution is missing from the list?',
      presentersHowTo: 'How it works:',
      presentersDuration: 'Please upload your presentation as PowerPoint or PDF to the Nimbus folder using the link below (upload only, no access to already uploaded files).',
      presentersNamingInfo: 'Please give your file a unique name following this pattern:',
      presentersTalkHeading: 'Talk (12 min. + up to 3 min. of questions, PowerPoint or PDF)',
      presentersTalkPattern: 'Time_Surname_Session_Day.pptx',
      presentersExample: 'Example: "1100_Oprei_S12_Tuesday.pptx"',
      presentersPosterHeading: 'Poster speed talk (optional slide for your poster, PowerPoint only)',
      presentersPosterNamingInfo: 'Number_Surname_Day.pptx',
      presentersPosterExample: 'Example: "03_Heinrich_Tuesday.pptx" (number = order in the poster speed talk)',
      presentersWarning: '⚠️ Important: Use the surname of the registered first author, even if someone else is presenting.',
      presentersMissingContact: 'If you\'re unsure, please contact the conference office.',
      presentersFormatWarning: '⚠️ Important: Talks as PowerPoint or PDF. Poster speed talks exclusively as PowerPoint in 16:9 format (will be merged into one combined presentation).',
      presentersUploadLink: 'Go to upload folder',
      presentersPassword: 'Password:',
      presentersLastName: 'Last name',
      presentersLastNamePlaceholder: 'e.g. Oprei',
      presentersStep1Title: 'Enter your surname',
      presentersStep1Text: 'and select the matching contribution from the dropdown. Important: the search only works by the surname of the registered first author, even if someone else is presenting.',
      presentersStep2Title: 'Rename your file',
      presentersStep2Text: '– you\'ll get the finished file name to copy. Alternatively: click "Choose file & rename" to have an already renamed copy downloaded locally.',
      presentersStep3Title: 'Upload',
      presentersStep3Text: 'via the link below, which unlocks automatically. Privacy note: upload only, you cannot see files already uploaded.',
      presentersPickTalk: 'Several contributions found – which one is yours?',
      presentersPickPlaceholder: 'Select contribution…',
      presentersNotFound: 'No contribution found under this name. Please contact the conference office.',
      presentersSession: 'Session',
      presentersSessionPlaceholder: 'Select session…',
      presentersTime: 'Day of your talk',
      presentersTimePlaceholder: 'Select day…',
      presentersFilename: 'Your file name:',
      presentersExtNote: 'Ending .pptx or .pdf – whichever file format you actually upload.',
      presentersCopy: 'Copy',
      presentersCopied: 'File name copied!',
      presentersRenameBtn: 'Choose file & rename',
      presentersRenamed: 'Downloaded as "{name}" — now upload this file to Nimbus.',
      planViewList: 'List',
      planViewTimeline: 'Timeline'
    }
  };
  var LANG_KEY = 'dgl2026_lang_v1';
  var lang = 'de';
  try{
    var savedLang = localStorage.getItem(LANG_KEY);
    if(savedLang === 'de' || savedLang === 'en') lang = savedLang;
  }catch(e){}
  function t(key){ return I18N[lang][key]; }

  function applyStaticI18n(){
    document.getElementById('headerTitle').textContent = t('headerTitle');
    document.getElementById('headerDates').textContent = t('headerDates');
    document.getElementById('tourHelpBtn').textContent = t('tourHelpBtn');
    document.getElementById('clearPlanBtnText').textContent = t('clearPlanBtnText');
    document.getElementById('exportPlanPdfBtnText').textContent = t('exportPlanPdfBtnText');
    document.getElementById('navProgramm').textContent = t('navProgramm');
    document.getElementById('navLunch').textContent = t('navLunch');
    document.getElementById('navExk').textContent = t('navExk');
    document.getElementById('navVenue').textContent = t('navVenue');
    document.getElementById('navPlan').textContent = t('navPlan');
    document.getElementById('titleProgramm').textContent = t('titleProgramm');
    document.getElementById('titleLunch').textContent = t('titleLunch');
    document.getElementById('titleExk').textContent = t('titleExk');
    document.getElementById('titleVenue').textContent = t('titleVenue');
    document.getElementById('titleFloorplan').textContent = t('floorplanTitle');
    document.getElementById('titlePosterPlan').textContent = t('posterPlanTitle');
    document.getElementById('titlePlan').textContent = t('titlePlan');
    document.getElementById('exportPlanBtnText').textContent = t('exportBtn');
    document.getElementById('planNote').textContent = t('planNote');
    document.getElementById('exportMenuToggleText').textContent = t('exportMenuLabel');
    document.getElementById('sharePlanBtnText').textContent = t('shareBtnLabel');
    document.getElementById('qrPlanBtnText').textContent = t('qrBtnLabel');
    document.getElementById('qrPlanHint').textContent = t('qrHint');
    document.getElementById('qrPlanCloseBtn').textContent = t('qrCloseBtn');
    document.getElementById('planViewListText').textContent = t('planViewList');
    document.getElementById('planViewTimelineText').textContent = t('planViewTimeline');
    document.getElementById('lunchViewListText').textContent = t('lunchViewList');
    document.getElementById('lunchViewMapText').textContent = t('lunchViewMap');
    document.getElementById('programmSearch').placeholder = t('searchPlaceholder');
    var fpDe = document.getElementById('floorplanSvg');
    var fpEn = document.getElementById('floorplanSvgEn');
    if(fpDe) fpDe.style.display = lang === 'en' ? 'none' : '';
    if(fpEn) fpEn.style.display = lang === 'en' ? '' : 'none';
    var fpSlotDe = document.getElementById('floorplanSlotDe');
    var fpSlotEn = document.getElementById('floorplanSlotEn');
    if(fpSlotDe) fpSlotDe.style.display = lang === 'en' ? 'none' : '';
    if(fpSlotEn) fpSlotEn.style.display = lang === 'en' ? '' : 'none';
    var ppDe = document.getElementById('posterPlanSvg');
    var ppEn = document.getElementById('posterPlanSvgEn');
    if(ppDe) ppDe.style.display = lang === 'en' ? 'none' : '';
    if(ppEn) ppEn.style.display = lang === 'en' ? '' : 'none';
    var ppSlotDe = document.getElementById('posterPlanSlotDe');
    var ppSlotEn = document.getElementById('posterPlanSlotEn');
    if(ppSlotDe) ppSlotDe.style.display = lang === 'en' ? 'none' : '';
    if(ppSlotEn) ppSlotEn.style.display = lang === 'en' ? '' : 'none';
    document.querySelectorAll('.lang-btn').forEach(function(b){
      b.classList.toggle('active', b.getAttribute('data-lang') === lang);
    });
    document.documentElement.lang = lang;
  }

  document.querySelectorAll('.lang-btn').forEach(function(btn){
    btn.addEventListener('click', function(){
      lang = btn.getAttribute('data-lang');
      try{ localStorage.setItem(LANG_KEY, lang); }catch(e){}
      applyStaticI18n();
      renderAll();
      if(typeof searchInputEl !== 'undefined' && searchInputEl.value){
        renderSearchResults(searchInputEl.value, currentPersonSearchKey);
      }
    });
  });

  // ---------- Dark mode ----------
  var THEME_KEY = 'dgl2026_theme_v1';
  var theme = (function(){
    try{ return localStorage.getItem(THEME_KEY) || 'light'; }catch(e){ return 'light'; }
  })();
  function applyTheme(){
    document.body.classList.toggle('dark', theme === 'dark');
    document.getElementById('themeToggleIcon').innerHTML = theme === 'dark' ? '&#9728;' : '&#127769;';
  }
  document.getElementById('themeToggleBtn').addEventListener('click', function(){
    theme = theme === 'dark' ? 'light' : 'dark';
    try{ localStorage.setItem(THEME_KEY, theme); }catch(e){}
    applyTheme();
  });
  applyTheme();

  // ---------- Font size ----------
  var FONT_KEY = 'dgl2026_fontscale_v1';
  var fontScale = (function(){
    try{ return parseInt(localStorage.getItem(FONT_KEY), 10) || 115; }catch(e){ return 115; }
  })();
  function applyFontScale(){
    document.body.style.zoom = fontScale + '%';
    // document.body.style.zoom is a legacy, non-standard property that
    // interacts inconsistently with position:fixed descendants across
    // browsers (fixed-position overlays end up visually over-scaled and
    // mispositioned). Counter-scale every full-screen fixed overlay so
    // it always renders at true 100%, independent of the text-size setting.
    var counterZoom = (10000 / fontScale) + '%';
    ['qrPlanOverlay','posterLightboxOverlay','routeOverlay','practicalInfoOverlay','floorplanOverlay','posterPlanOverlay'].forEach(function(id){
      var el = document.getElementById(id);
      if(el) el.style.zoom = counterZoom;
    });
  }
  function setFontScale(delta){
    fontScale = Math.max(85, Math.min(145, fontScale + delta));
    try{ localStorage.setItem(FONT_KEY, fontScale); }catch(e){}
    applyFontScale();
  }
  document.getElementById('fontDecBtn').addEventListener('click', function(){ setFontScale(-15); });
  document.getElementById('fontIncBtn').addEventListener('click', function(){ setFontScale(15); });
  applyFontScale();

  // ---------- Back to top ----------
  var backToTopBtn = document.getElementById('backToTopBtn');
  window.addEventListener('scroll', function(){
    backToTopBtn.style.display = window.scrollY > 400 ? 'block' : 'none';
  });
  backToTopBtn.addEventListener('click', function(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });


  var PLAN_KEY = 'dgl2026_plan_v1';

  function loadPlan(){
    try{
      var raw = localStorage.getItem(PLAN_KEY);
      return raw ? JSON.parse(raw) : [];
    }catch(e){ return []; }
  }
  function savePlan(plan){
    try{ localStorage.setItem(PLAN_KEY, JSON.stringify(plan)); }catch(e){}
  }
  var plan = loadPlan();

  // ---------- Import shared plan from URL hash ----------
  (function importSharedPlanFromHash(){
    if(location.hash.indexOf('#plan=') !== 0) return;
    try{
      var raw = location.hash.slice(6);
      var resolved;
      if(/^[\d,]+$/.test(raw)){
        // Newest, plain format: "12,45,109" — just the pids, comma-separated.
        resolved = raw.split(',').map(function(pid){
          var ref = refForPid(pid);
          return ref ? resolvePlanItemById(ref.dayId, ref.id) : null;
        }).filter(Boolean);
      } else {
        // Older links were base64+JSON wrapped, carrying (over time) pids,
        // {id, dayId} pairs, or full item objects. Support all of those too
        // so links already sent out keep working.
        var decoded = JSON.parse(decodeURIComponent(escape(atob(decodeURIComponent(raw)))));
        resolved = (Array.isArray(decoded) ? decoded : []).map(function(entry){
          if(typeof entry === 'string' && /^\d+$/.test(entry)){
            var pidRef = refForPid(entry);
            return pidRef ? resolvePlanItemById(pidRef.dayId, pidRef.id) : null;
          }
          if(entry && entry.title !== undefined) return entry;
          if(entry && entry.id && entry.dayId) return resolvePlanItemById(entry.dayId, entry.id);
          return null;
        }).filter(Boolean);
      }
      if(resolved.length){
        var msg = t('sharedPlanConfirmPrefix') + resolved.length + t('sharedPlanConfirmSuffix');
        if(confirm(msg)){
          plan = resolved;
          savePlan(plan);
        }
      }
    }catch(e){
      console.warn('Could not parse shared plan from link:', e);
    }
    history.replaceState(null, '', location.pathname + location.search);
  })();

  function isInPlan(id){
    return plan.some(function(p){ return p.id === id; });
  }
  function togglePlan(item){
    var idx = plan.findIndex(function(p){ return p.id === item.id; });
    if(idx >= 0){ plan.splice(idx,1); }
    else{ plan.push(item); }
    savePlan(plan);
    render();
  }

  function esc(s){
    if(s === null || s === undefined) return '';
    return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }
  function posterIconBtn(item){
    var src = lang === 'en' ? (item.poster_en || item.poster_de) : (item.poster_de || item.poster_en);
    if(!src) return '';
    return '<button class="poster-icon-btn" data-poster="' + esc(src) + '" aria-label="' + esc(t('posterViewLabel')) + '" title="' + esc(t('posterViewLabel')) + '">' +
      '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="2"></rect><line x1="8" y1="8" x2="16" y2="8"></line><line x1="8" y1="12" x2="16" y2="12"></line><line x1="8" y1="16" x2="12" y2="16"></line></svg>' +
    '</button>';
  }
  function menuIconBtn(item){
    var src = lang === 'en' ? (item.menu_en || item.menu_de) : (item.menu_de || item.menu_en);
    if(!src) return '';
    return '<button class="poster-icon-btn" data-poster="' + esc(src) + '" aria-label="' + esc(t('menuViewLabel')) + '" title="' + esc(t('menuViewLabel')) + '">' +
      '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path></svg>' +
    '</button>';
  }
  function routeIconBtn(item){
    if(!item.routeDetails && !item.routeDetails_en) return '';
    return '<button class="poster-icon-btn" data-route-title="' + esc(item.title) + '" aria-label="' + esc(t('routeDetailsLabel')) + '" title="' + esc(t('routeDetailsLabel')) + '">' +
      '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="21" x2="7" y2="3"></line><path d="M7 2.3h10l3 2.7-3 2.7h-10z"></path></svg>' +
    '</button>';
  }
  function practicalInfoIconBtn(item){
    if(!item.practicalInfo_de && !item.practicalInfo_en) return '';
    return '<button class="poster-icon-btn" data-practical-title="' + esc(item.title) + '" aria-label="' + esc(t('practicalInfoLabel')) + '" title="' + esc(t('practicalInfoLabel')) + '">' +
      '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>' +
    '</button>';
  }
  var SOCIAL_VENUE_BLOCK_TITLES = { 'Vorabendtreff': 'preEvening', 'Gesellschaftsabend': 'social', 'Early Career Meetup': 'earlyCareer' };
  function mapIconBtn(block){
    var venueKey = SOCIAL_VENUE_BLOCK_TITLES[block.title];
    if(!venueKey) return '';
    return '<button class="poster-icon-btn" data-venue="' + venueKey + '" aria-label="' + esc(t('showOnMapLabel')) + '" title="' + esc(t('showOnMapLabel')) + '">' +
      '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>' +
    '</button>';
  }
  function floorplanPinIconBtn(block){
    if(!block.linkFloorplan) return '';
    return '<button class="poster-icon-btn" data-role="floorplan-pin" aria-label="' + esc(t('showOnMapLabel')) + '" title="' + esc(t('showOnMapLabel')) + '">' +
      '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>' +
    '</button>';
  }

  // ---------- Shared time helpers ----------
  var debugNowOverride = null;
  function nowDate(){
    return debugNowOverride ? new Date(debugNowOverride) : new Date();
  }
  function dateForDay(dayId){
    var map = { so:'20260913', mo:'20260914', di:'20260915', mi:'20260916', do:'20260917', fr:'20260918' };
    return map[dayId] || '20260914';
  }
  function parseStartTime(timeStr){
    var m = timeStr.match(/(\d{1,2}):(\d{2})/);
    return m ? (m[1].padStart(2,'0') + m[2]) : '0900';
  }
  function parseTimeRangeMinutes(str){
    if(!str) return null;
    var parts = str.split('–');
    var m1 = parts[0].match(/(\d{1,2}):(\d{2})/);
    if(!m1) return null;
    var start = parseInt(m1[1],10)*60 + parseInt(m1[2],10);
    var end;
    if(parts.length > 1){
      var m2 = parts[1].match(/(\d{1,2}):(\d{2})/);
      end = m2 ? parseInt(m2[1],10)*60 + parseInt(m2[2],10) : start + 45;
    } else {
      end = start + 45;
    }
    return { start: start, end: end };
  }
  function minutesToHHMM(min){
    var h = Math.floor(min/60), m = min%60;
    return (h<10?'0':'')+h+':'+(m<10?'0':'')+m;
  }
  function computeTalkTimeRange(sTalks, idx, blockTimeStr){
    var startRange = parseTimeRangeMinutes(sTalks[idx].time);
    if(!startRange) return sTalks[idx].time;
    var start = startRange.start;
    var end;
    if(sTalks[idx].endTime){
      // Explicit per-talk override — only set on talks where the normal
      // "next talk's start" / "+15min" heuristics get the wrong answer.
      var overrideRange = parseTimeRangeMinutes(sTalks[idx].endTime);
      end = overrideRange ? overrideRange.start : start + 15;
    } else if(idx+1 < sTalks.length){
      var nextRange = parseTimeRangeMinutes(sTalks[idx+1].time);
      end = nextRange ? nextRange.start : start+15;
    } else {
      end = start + 15;
    }
    return sTalks[idx].time + ' – ' + minutesToHHMM(end);
  }
  function blockDateRange(dayId, timeStr){
    var range = parseTimeRangeMinutes(timeStr);
    if(!range) return null;
    var ds = dateForDay(dayId);
    var y = parseInt(ds.substr(0,4),10), mo = parseInt(ds.substr(4,2),10)-1, da = parseInt(ds.substr(6,2),10);
    var start = new Date(y, mo, da, Math.floor(range.start/60), range.start%60);
    var end = new Date(y, mo, da, Math.floor(range.end/60), range.end%60);
    return { start: start, end: end };
  }
  function isBlockNow(dayId, timeStr){
    var r = blockDateRange(dayId, timeStr);
    if(!r) return false;
    var now = nowDate();
    return now >= r.start && now < r.end;
  }
  function ordinalSuffix(n){
    var j = n % 10, k = n % 100;
    if(j === 1 && k !== 11) return 'st';
    if(j === 2 && k !== 12) return 'nd';
    if(j === 3 && k !== 13) return 'rd';
    return 'th';
  }

  function isToday(dayId){
    var ds = dateForDay(dayId);
    var now = nowDate();
    var pad = function(n){ return String(n).padStart(2,'0'); };
    var todayStr = '' + now.getFullYear() + pad(now.getMonth()+1) + pad(now.getDate());
    return ds === todayStr;
  }

  // ---------- Navigation ----------
  var views = ['programm','lunch','exkursionen','venue','plan'];
  function switchToView(target){
    views.forEach(function(v){
      document.getElementById('view-'+v).classList.toggle('active', v === target);
    });
    document.querySelectorAll('nav.bottom-nav button').forEach(function(b){
      b.classList.toggle('active', b.getAttribute('data-view') === target);
    });
    if(target === 'plan') renderPlan();
    window.scrollTo(0,0);
  }
  function getDefaultProgrammDay(){
    var todayMatch = DATA.programm.find(function(d){ return isToday(d.id); });
    return todayMatch ? todayMatch.id : DATA.programm[0].id;
  }
  document.querySelectorAll('nav.bottom-nav button').forEach(function(btn){
    btn.addEventListener('click', function(){
      var backBtn = document.getElementById('searchBackBtn');
      if(backBtn) backBtn.style.display = 'none';
      searchBackState = null;
      var target = btn.getAttribute('data-view');
      if(target === 'programm'){
        currentDay = getDefaultProgrammDay();
        currentCategoryFilter = 'alle';
        expandedSessions = {};
        expandedSessionAbstract = {};
        expandedInfoAbstract = {};
        expandedTalks = {};
        if(searchInputEl){
          searchInputEl.value = '';
          currentPersonSearchKey = null;
          renderSearchResults('');
        }
        renderAll();
      } else if(target === 'lunch'){
        currentLunchFilter = 'Alle';
        setLunchView('list');
        renderLunchList();
      } else if(target === 'exkursionen'){
        expandedExk = {};
        renderExkursionen();
      } else if(target === 'venue'){
        renderVenue();
      } else if(target === 'plan'){
        currentPlanDay = getDefaultProgrammDay();
        setPlanView('list');
      }
      switchToView(target);
    });
  });

  // ---------- Floor plan room highlighting + zoomable lightbox ----------
  var FLOORPLAN_ROOM_MAP = {
    'HS 0/110': ['0-110'],
    'HS 0/115': ['0-115'],
    'HS 0/307': ['0-307'],
    'HS 0/310': ['0-310'],
    'HS 0/311': ['0-311'],
    'HS 0/313': ['0-313'],
    'SR 1/304': ['1-304'],
    'SR 1/305': ['1-305'],
    'SR 1/305+306': ['1-305', '1-306'],
    'HS 0/110, SR 1/305, SR 1/306': ['0-110', '1-305', '1-306'],
    'SR 1/304 + 1/305': ['1-304', '1-305'],
    'HS 0/110, SR 1/305, SR 1/304': ['0-110', '1-305', '1-304']
  };

  var fpZoomState = { scale: 1, tx: 0, ty: 0, pointers: {} };
  var fpGesture = null;
  function fpApplyTransform(){
    var content = document.getElementById('floorplanZoomContent');
    content.style.transform = 'translate3d(' + fpZoomState.tx + 'px,' + fpZoomState.ty + 'px,0) scale(' + fpZoomState.scale + ')';
  }
  function fpResetZoom(){
    fpZoomState.scale = 1; fpZoomState.tx = 0; fpZoomState.ty = 0;
    fpGesture = null;
    fpApplyTransform();
  }
  function fpStartGesture(midX, midY, dist){
    var content = document.getElementById('floorplanZoomContent');
    var rect = content.getBoundingClientRect();
    fpGesture = {
      flexLeft: rect.left - fpZoomState.tx,
      flexTop: rect.top - fpZoomState.ty,
      anchorLx: (midX - rect.left) / fpZoomState.scale,
      anchorLy: (midY - rect.top) / fpZoomState.scale,
      startScale: fpZoomState.scale,
      startDist: dist
    };
  }
  function fpUpdateGesture(midX, midY, dist){
    if(!fpGesture) return;
    var newScale = Math.min(6, Math.max(1, fpGesture.startScale * (dist / fpGesture.startDist)));
    fpZoomState.scale = newScale;
    fpZoomState.tx = midX - fpGesture.flexLeft - newScale * fpGesture.anchorLx;
    fpZoomState.ty = midY - fpGesture.flexTop - newScale * fpGesture.anchorLy;
    fpApplyTransform();
  }
  function fpZoomAt(clientX, clientY, newScale){
    newScale = Math.min(6, Math.max(1, newScale));
    var content = document.getElementById('floorplanZoomContent');
    var rect = content.getBoundingClientRect();
    var flexLeft = rect.left - fpZoomState.tx;
    var flexTop = rect.top - fpZoomState.ty;
    var anchorLx = (clientX - rect.left) / fpZoomState.scale;
    var anchorLy = (clientY - rect.top) / fpZoomState.scale;
    fpZoomState.scale = newScale;
    fpZoomState.tx = clientX - flexLeft - newScale * anchorLx;
    fpZoomState.ty = clientY - flexTop - newScale * anchorLy;
    fpApplyTransform();
  }
  (function initFloorplanZoom(){
    var container = document.getElementById('floorplanZoomContainer');
    container.style.touchAction = 'none';
    container.addEventListener('pointerdown', function(e){
      e.preventDefault();
      container.setPointerCapture(e.pointerId);
      fpZoomState.pointers[e.pointerId] = { x: e.clientX, y: e.clientY };
      if(Object.keys(fpZoomState.pointers).length === 2){
        fpGesture = null;
      }
    });
    container.addEventListener('pointermove', function(e){
      if(!fpZoomState.pointers[e.pointerId]) return;
      e.preventDefault();
      var prev = fpZoomState.pointers[e.pointerId];
      fpZoomState.pointers[e.pointerId] = { x: e.clientX, y: e.clientY };
      var ids = Object.keys(fpZoomState.pointers);
      if(ids.length === 1){
        fpZoomState.tx += e.clientX - prev.x;
        fpZoomState.ty += e.clientY - prev.y;
        fpApplyTransform();
      } else if(ids.length === 2){
        var p1 = fpZoomState.pointers[ids[0]], p2 = fpZoomState.pointers[ids[1]];
        var dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
        var mid = { x: (p1.x + p2.x) / 2, y: (p1.y + p2.y) / 2 };
        if(!fpGesture){
          fpStartGesture(mid.x, mid.y, dist);
        } else {
          fpUpdateGesture(mid.x, mid.y, dist);
        }
      }
    });
    function releasePointer(e){
      delete fpZoomState.pointers[e.pointerId];
      fpGesture = null;
    }
    container.addEventListener('pointerup', releasePointer);
    container.addEventListener('pointercancel', releasePointer);
    container.addEventListener('wheel', function(e){
      e.preventDefault();
      fpZoomAt(e.clientX, e.clientY, fpZoomState.scale - e.deltaY * 0.0015 * fpZoomState.scale);
    }, { passive: false });
  })();

  function openFloorplanLightbox(highlightIds){
    var master = document.getElementById(lang === 'en' ? 'floorplanSvgEn' : 'floorplanSvg');
    if(!master){ console.warn('Floor plan not loaded yet'); return; }
    var clone = master.cloneNode(true);
    clone.removeAttribute('id');
    clone.style.display = '';
    clone.querySelectorAll('.fp-room').forEach(function(el){
      el.classList.remove('fp-highlight');
      var oldRing = el.querySelector('.fp-pulse-ring');
      if(oldRing) oldRing.remove();
    });
    (highlightIds || []).forEach(function(id){
      var el = clone.querySelector('#fp-' + id);
      if(el){
        el.classList.add('fp-highlight');
        var baseRect = el.querySelector('rect');
        if(baseRect){
          var ring = baseRect.cloneNode(false);
          ring.setAttribute('class', 'fp-pulse-ring');
          var rx = parseFloat(baseRect.getAttribute('x')) || 0;
          var ry = parseFloat(baseRect.getAttribute('y')) || 0;
          var rw = parseFloat(baseRect.getAttribute('width')) || 0;
          var rh = parseFloat(baseRect.getAttribute('height')) || 0;
          ring.style.transformOrigin = (rx + rw/2) + 'px ' + (ry + rh/2) + 'px';
          el.appendChild(ring);
        }
      }
    });
    var content = document.getElementById('floorplanZoomContent');
    content.innerHTML = '';
    content.appendChild(clone);
    fpResetZoom();
    document.getElementById('floorplanOverlay').style.display = 'block';
  }
  document.getElementById('floorplanTrigger').addEventListener('click', function(){
    openFloorplanLightbox([]);
  });
  document.getElementById('floorplanTrigger').addEventListener('keydown', function(e){
    if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); this.click(); }
  });
  document.getElementById('floorplanOverlayCloseBtn').addEventListener('click', function(){
    document.getElementById('floorplanOverlay').style.display = 'none';
  });

  function showFloorplanRoom(roomStr){
    var ids = FLOORPLAN_ROOM_MAP[roomStr];
    if(!ids) return;
    openFloorplanLightbox(ids);
  }

  // ---------- Posterstellplan (separate zoom overlay, mirrors floorplan above) ----------
  var ppZoomState = { scale: 1, tx: 0, ty: 0, pointers: {} };
  var ppGesture = null;
  function ppApplyTransform(){
    var content = document.getElementById('posterPlanZoomContent');
    content.style.transform = 'translate3d(' + ppZoomState.tx + 'px,' + ppZoomState.ty + 'px,0) scale(' + ppZoomState.scale + ')';
  }
  function ppResetZoom(){
    ppZoomState.scale = 1; ppZoomState.tx = 0; ppZoomState.ty = 0;
    ppGesture = null;
    ppApplyTransform();
  }
  function ppStartGesture(midX, midY, dist){
    var content = document.getElementById('posterPlanZoomContent');
    var rect = content.getBoundingClientRect();
    ppGesture = {
      flexLeft: rect.left - ppZoomState.tx,
      flexTop: rect.top - ppZoomState.ty,
      anchorLx: (midX - rect.left) / ppZoomState.scale,
      anchorLy: (midY - rect.top) / ppZoomState.scale,
      startScale: ppZoomState.scale,
      startDist: dist
    };
  }
  function ppUpdateGesture(midX, midY, dist){
    if(!ppGesture) return;
    var newScale = Math.min(6, Math.max(1, ppGesture.startScale * (dist / ppGesture.startDist)));
    ppZoomState.scale = newScale;
    ppZoomState.tx = midX - ppGesture.flexLeft - newScale * ppGesture.anchorLx;
    ppZoomState.ty = midY - ppGesture.flexTop - newScale * ppGesture.anchorLy;
    ppApplyTransform();
  }
  function ppZoomAt(clientX, clientY, newScale){
    newScale = Math.min(6, Math.max(1, newScale));
    var content = document.getElementById('posterPlanZoomContent');
    var rect = content.getBoundingClientRect();
    var flexLeft = rect.left - ppZoomState.tx;
    var flexTop = rect.top - ppZoomState.ty;
    var anchorLx = (clientX - rect.left) / ppZoomState.scale;
    var anchorLy = (clientY - rect.top) / ppZoomState.scale;
    ppZoomState.scale = newScale;
    ppZoomState.tx = clientX - flexLeft - newScale * anchorLx;
    ppZoomState.ty = clientY - flexTop - newScale * anchorLy;
    ppApplyTransform();
  }
  (function initPosterPlanZoom(){
    var container = document.getElementById('posterPlanZoomContainer');
    container.style.touchAction = 'none';
    container.addEventListener('pointerdown', function(e){
      e.preventDefault();
      container.setPointerCapture(e.pointerId);
      ppZoomState.pointers[e.pointerId] = { x: e.clientX, y: e.clientY };
      if(Object.keys(ppZoomState.pointers).length === 2){
        ppGesture = null;
      }
    });
    container.addEventListener('pointermove', function(e){
      if(!ppZoomState.pointers[e.pointerId]) return;
      e.preventDefault();
      var prev = ppZoomState.pointers[e.pointerId];
      ppZoomState.pointers[e.pointerId] = { x: e.clientX, y: e.clientY };
      var ids = Object.keys(ppZoomState.pointers);
      if(ids.length === 1){
        ppZoomState.tx += e.clientX - prev.x;
        ppZoomState.ty += e.clientY - prev.y;
        ppApplyTransform();
      } else if(ids.length === 2){
        var p1 = ppZoomState.pointers[ids[0]], p2 = ppZoomState.pointers[ids[1]];
        var dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
        var mid = { x: (p1.x + p2.x) / 2, y: (p1.y + p2.y) / 2 };
        if(!ppGesture){
          ppStartGesture(mid.x, mid.y, dist);
        } else {
          ppUpdateGesture(mid.x, mid.y, dist);
        }
      }
    });
    function releasePointer(e){
      delete ppZoomState.pointers[e.pointerId];
      ppGesture = null;
    }
    container.addEventListener('pointerup', releasePointer);
    container.addEventListener('pointercancel', releasePointer);
    container.addEventListener('wheel', function(e){
      e.preventDefault();
      ppZoomAt(e.clientX, e.clientY, ppZoomState.scale - e.deltaY * 0.0015 * ppZoomState.scale);
    }, { passive: false });
  })();

  function openPosterPlanLightbox(highlightIds){
    var master = document.getElementById(lang === 'en' ? 'posterPlanSvgEn' : 'posterPlanSvg');
    if(!master){ console.warn('Poster plan not loaded yet'); return; }
    var clone = master.cloneNode(true);
    clone.removeAttribute('id');
    clone.style.display = '';
    clone.querySelectorAll('.fp-room').forEach(function(el){
      el.classList.remove('fp-highlight');
      var oldRing = el.querySelector('.fp-pulse-ring');
      if(oldRing) oldRing.remove();
    });
    (highlightIds || []).forEach(function(id){
      var el = clone.querySelector('#fp-' + id);
      if(el){
        el.classList.add('fp-highlight');
        var baseRect = el.querySelector('rect');
        if(baseRect){
          var ring = baseRect.cloneNode(false);
          ring.setAttribute('class', 'fp-pulse-ring');
          var rx = parseFloat(baseRect.getAttribute('x')) || 0;
          var ry = parseFloat(baseRect.getAttribute('y')) || 0;
          var rw = parseFloat(baseRect.getAttribute('width')) || 0;
          var rh = parseFloat(baseRect.getAttribute('height')) || 0;
          ring.style.transformOrigin = (rx + rw/2) + 'px ' + (ry + rh/2) + 'px';
          el.appendChild(ring);
        }
      }
    });
    var content = document.getElementById('posterPlanZoomContent');
    content.innerHTML = '';
    content.appendChild(clone);
    ppResetZoom();
    document.getElementById('posterPlanOverlay').style.display = 'block';
    if(highlightIds && highlightIds.length){
      setTimeout(function(){
        var target = content.querySelector('#fp-' + highlightIds[0]);
        if(target && target.scrollIntoView){
          target.scrollIntoView({ block: 'center', inline: 'center' });
        }
      }, 50);
    }
  }
  document.getElementById('posterPlanTrigger').addEventListener('click', function(){
    openPosterPlanLightbox([]);
  });
  document.getElementById('posterPlanTrigger').addEventListener('keydown', function(e){
    if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); this.click(); }
  });
  document.getElementById('posterPlanOverlayCloseBtn').addEventListener('click', function(){
    document.getElementById('posterPlanOverlay').style.display = 'none';
  });

  function posterBoardHighlightId(boardStr){
    if(!boardStr) return null;
    var m = /^(\d+)/.exec(String(boardStr).trim());
    if(!m) return null;
    var num = ('0' + m[1]).slice(-2);
    return 'poster-' + num;
  }
  function showPosterOnPlan(boardStr){
    var id = posterBoardHighlightId(boardStr);
    if(!id) return;
    openPosterPlanLightbox([id]);
  }

  // ---------- Programm ----------
  var currentDay = DATA.programm[0].id;
  var currentCategoryFilter = 'alle';

  var SOCIAL_TITLES = ['Gesellschaftsabend', 'Get Together', 'Early Career Meetup', 'Vorabendtreff'];
  var PLENARY_TITLES = ['Plenarvortrag', 'Plenarvortrag (WSA)', 'Eröffnung', 'Abschlussplenum', 'DGL-Mitgliederversammlung', 'Postersession 1 – Speed Talks', 'Postersession 2 – Speed Talks', 'Postersession 1', 'Postersession 2', 'DGL Praxispreis', "Schwoerbel-Benndorf-Nachwuchspreis der DGL", 'Preisverleihung / WSA Mitgliederversammlung'];
  var WORKSHOP_TITLES = ['Arbeitskreise'];
  var SESSION_CATEGORY_OVERRIDE = { 'S19': 'plenary', 'S20': 'workshop', 'S21': 'workshop', 'S13': 'workshop', 'S18': 'workshop', 'Preisvortrag': 'plenary', 'WRHC-W1': 'workshop', 'WRHC-W2': 'workshop', 'WRHC-W3': 'workshop' };

  // Programme blocks with no individual presenter to search by (ceremonies,
  // assemblies, opening/closing) — keyed by exact block title. "keywords"
  // is a space-separated list; the search matches on any single word in it,
  // so multiple words let one event be found under several search terms
  // (e.g. the joint DGL/WSA opening is findable via either "Eröffnung" or "WSA").
  var SPECIAL_NO_PRESENTER_BLOCKS = {
    'Eröffnung': { keywords: 'Eröffnung Opening WSA DGL', displayName: 'WSA/DGL Eröffnung / Opening', keySuffix: 'Eroeffnung', filenameLabel: 'Eroeffnung', titleDe: 'Eröffnung', titleEn: 'Opening Ceremony' },
    'WSA-Praxispreis / WSA Mitgliederversammlung': { keywords: 'WSA Praxispreis Mitgliederversammlung', displayName: 'WSA-Praxispreis / WSA Mitgliederversammlung', keySuffix: 'WSA', filenameLabel: 'WSA-Mitgliederversammlung' },
    'DGL-Praxispreis': { keywords: 'DGL Praxispreis', displayName: 'DGL-Praxispreis', keySuffix: 'Praxispreis', filenameLabel: 'DGL-Praxispreis' },
    'DGL-Mitgliederversammlung': { keywords: 'DGL Mitgliederversammlung', displayName: 'DGL-Mitgliederversammlung', keySuffix: 'Mitgliederversammlung', filenameLabel: 'DGL-Mitgliederversammlung' },
    'Abschlussplenum': { keywords: 'DGL Abschluss Posterpreis', displayName: 'Abschlussplenum', keySuffix: 'Abschluss', filenameLabel: 'Abschlussplenum' }
  };

  function blockCategory(block){
    if(block.type === 'parallel') return 'sessions';
    if(block.isPlenary) return 'plenary';
    if(SOCIAL_TITLES.indexOf(block.title) !== -1) return 'social';
    if(WORKSHOP_TITLES.indexOf(block.title) !== -1) return 'workshop';
    if(PLENARY_TITLES.indexOf(block.title) !== -1) return 'plenary';
    return 'other';
  }

  function sessionCategory(session){
    if(session.category) return session.category;
    if(SESSION_CATEGORY_OVERRIDE[session.code]) return SESSION_CATEGORY_OVERRIDE[session.code];
    if(/Workshop/i.test(session.title || '')) return 'workshop';
    return 'sessions';
  }

  function renderCategoryFilter(){
    var wrap = document.getElementById('categoryFilter');
    var cats = [
      { key: 'alle', label: t('catAll') },
      { key: 'sessions', label: t('catSessions') },
      { key: 'plenary', label: t('catPlenary') },
      { key: 'workshop', label: t('catWorkshop') },
      { key: 'social', label: t('catSocial') },
      { key: 'wrhc', label: t('catWrhc') }
    ];
    wrap.innerHTML = '';
    cats.forEach(function(c){
      var chip = document.createElement('div');
      chip.className = 'category-chip' + (currentCategoryFilter === c.key ? ' active' : '');
      chip.textContent = c.label;
      chip.addEventListener('click', function(){
        currentCategoryFilter = c.key;
        expandedSessions = {};
        expandedTalks = {};
        renderDayTabs();
        renderCategoryFilter();
        renderProgrammList();
      });
      wrap.appendChild(chip);
    });
  }

  function renderDayTabs(){
    var wrap = document.getElementById('dayTabs');
    wrap.innerHTML = '';
    DATA.programm.forEach(function(day){
      var b = document.createElement('div');
      b.className = 'day-tab' + (currentCategoryFilter === 'alle' && day.id === currentDay ? ' active' : '');
      var dayLabel = lang === 'en' ? day.label_en : day.label;
      var dayNum = day.date.split('.')[0];
      var dateLabel = lang === 'en' ? (dayNum + ordinalSuffix(parseInt(dayNum,10))) : (dayNum + '.');
      b.innerHTML = esc(dayLabel + ' ' + dateLabel) + (isToday(day.id) ? '<span class="day-tab-dot"></span>' : '');
      b.addEventListener('click', function(){
        currentDay = day.id;
        currentCategoryFilter = 'alle';
        expandedSessions = {};
        expandedTalks = {};
        renderDayTabs();
        renderCategoryFilter();
        renderProgrammList();
      });
      wrap.appendChild(b);
    });
  }

  function planIdForBlock(dayId, block){
    return 'b_' + dayId + '_' + block.time + '_' + slug(block.title);
  }
  function planIdForPoster(dayId, poster){
    return 'poster_' + dayId + '_' + slug(poster.code) + '_' + slug(poster.board);
  }
  function slug(str){
    return (str || '').replace(/[^a-zA-Z0-9]+/g, '').slice(0, 24);
  }
  function planIdForSession(dayId, block, s){
    return 's_' + dayId + '_' + block.time + '_' + s.room + '_' + s.code + '_' + slug(s.title);
  }
  function planIdForTalk(dayId, block, s, talk, idx){
    return 't_' + dayId + '_' + block.time + '_' + s.room + '_' + s.code + '_' + slug(s.title) + '_' + idx;
  }

  // Every plannable item carries a permanent, explicit "pid" directly in the
  // programme data (assigned once, reused on future data edits) — far
  // simpler and safer than deriving a reference from position or a hash:
  // it can't collide, and it can't shift when the programme changes
  // elsewhere, because it isn't computed from any of that.
  var allItemRefsCache = null;
  function allItemRefs(){
    if(allItemRefsCache) return allItemRefsCache;
    var refs = [];
    DATA.programm.forEach(function(day){
      day.blocks.forEach(function(block){
        if(block.type === 'info'){
          if(block.pid) refs.push({ pid: block.pid, id: planIdForBlock(day.id, block), dayId: day.id });
          (block.posters || []).forEach(function(p){
            if(p.pid) refs.push({ pid: p.pid, id: planIdForPoster(day.id, p), dayId: day.id });
          });
        } else {
          block.sessions.forEach(function(s){
            if(s.pid) refs.push({ pid: s.pid, id: planIdForSession(day.id, block, s), dayId: day.id });
            (s.talks || []).forEach(function(talk, idx){
              if(talk.pid) refs.push({ pid: talk.pid, id: planIdForTalk(day.id, block, s, talk, idx), dayId: day.id });
            });
          });
        }
      });
    });
    allItemRefsCache = refs;
    return refs;
  }
  var pidLookupCache = null;
  function refForPid(pid){
    if(!pidLookupCache){
      pidLookupCache = {};
      allItemRefs().forEach(function(ref){ pidLookupCache[ref.pid] = ref; });
    }
    return pidLookupCache[pid] || null;
  }
  var idToPidCache = null;
  function pidForItem(item){
    if(!idToPidCache){
      idToPidCache = {};
      allItemRefs().forEach(function(ref){ idToPidCache[ref.dayId + '|' + ref.id] = ref.pid; });
    }
    return idToPidCache[item.dayId + '|' + item.id] || null;
  }

  // Rebuilds a full plan item (title, subtitle, room, abstract, everything)
  // from just its id/dayId — used to keep shared links/QR codes small: they
  // only need to carry "which items", not the full text of each one, since
  // the receiving device has the same programme data locally.
  function resolvePlanItemById(dayId, id){
    var day = DATA.programm.find(function(d){ return d.id === dayId; });
    if(!day) return null;

    for(var bi = 0; bi < day.blocks.length; bi++){
      var block = day.blocks[bi];
      if(block.type === 'info'){
        if(planIdForBlock(dayId, block) === id){
          var blockTitle = (lang === 'en' && block.title_en) ? block.title_en : block.title;
          var blockSubtitle = (lang === 'en' && block.subtitle_en) ? block.subtitle_en : block.subtitle;
          var bioText = lang === 'en' ? block.bio_en : block.bio_de;
          var planAbstractText = (lang === 'en' && block.abstract_en) ? block.abstract_en : block.abstract;
          var modSuffix = block.mod ? (t('mod') + ' ' + block.mod) : '';
          var planSubtitle = [blockSubtitle, modSuffix].filter(Boolean).join(' · ');
          return {
            id: id, dayId: day.id, dayLabel: day.label, date: day.date,
            time: block.time, title: blockTitle, subtitle: planSubtitle, room: block.room || '',
            abstract: planAbstractText || '', bio: bioText || ''
          };
        }
        if(block.posters){
          for(var pi = 0; pi < block.posters.length; pi++){
            var p = block.posters[pi];
            if(planIdForPoster(dayId, p) === id){
              var boardText = p.board ? (' · ' + t('posterBoard') + ' ' + p.board) : '';
              return {
                id: id, dayId: day.id, dayLabel: day.label, date: day.date,
                time: block.time, title: p.title, subtitle: p.authorsDisplay + ' · ' + p.code + boardText,
                room: '', authors: p.authorsDisplay, isPoster: true
              };
            }
          }
        }
      } else {
        for(var si = 0; si < block.sessions.length; si++){
          var s = block.sessions[si];
          var sid = planIdForSession(dayId, block, s);
          if(sid === id){
            var contSuffix = s.partTotal ? (lang === 'en' ? ' (Part ' + s.partIndex + '/' + s.partTotal + ')' : ' (Teil ' + s.partIndex + '/' + s.partTotal + ')') : '';
            var sessionAbstractText = (lang === 'en' && s.abstract_en) ? s.abstract_en : s.abstract_de;
            return {
              id: sid, dayId: day.id, dayLabel: day.label, date: day.date,
              time: block.time, title: s.code + ' · ' + (lang === 'en' && s.title_en ? s.title_en : s.title) + contSuffix, subtitle: s.mod ? t('mod') + ' ' + s.mod : '', room: s.room,
              abstract: sessionAbstractText || '', code: s.code
            };
          }
          if(s.talks){
            for(var ti = 0; ti < s.talks.length; ti++){
              var talk = s.talks[ti];
              var tid = planIdForTalk(dayId, block, s, talk, ti);
              if(tid === id){
                return {
                  id: tid, dayId: day.id, dayLabel: day.label, date: day.date,
                  time: computeTalkTimeRange(s.talks, ti, block.time), title: talk.title, subtitle: talk.authors + ' · ' + s.code, room: s.room,
                  abstract: talk.abstract || '', code: s.code, authors: talk.authors
                };
              }
            }
          }
          if(s.posters){
            for(var pi2 = 0; pi2 < s.posters.length; pi2++){
              var p2 = s.posters[pi2];
              if(planIdForPoster(dayId, p2) === id){
                var boardText2 = p2.board ? (' · ' + t('posterBoard') + ' ' + p2.board) : '';
                return {
                  id: id, dayId: day.id, dayLabel: day.label, date: day.date,
                  time: block.time, title: p2.title, subtitle: p2.authorsDisplay + ' · ' + p2.code + boardText2,
                  room: '', authors: p2.authorsDisplay, isPoster: true
                };
              }
            }
          }
        }
      }
    }
    return null;
  }

  var expandedSessions = {};
  var expandedSessionAbstract = {};
  var expandedInfoAbstract = {};
  var expandedTalks = {};
  var expandedPlanItems = {};

  function renderAuthorsHtml(authorsStr){
    if(!authorsStr) return '';
    var parts = authorsStr.split(' — ');
    var namesPart = parts[0];
    var affPart = parts.length > 1 ? parts.slice(1).join(' — ') : '';
    var names = namesPart.split(/,\s*/).filter(Boolean);
    var namesHtml = names.map(function(n){
      var clean = n.trim();
      return '<span class="author-link" data-author="' + esc(clean) + '">' + esc(clean) + '</span>';
    }).join(', ');
    return namesHtml + (affPart ? ' — ' + esc(affPart) : '');
  }

  var searchBackState = null;
  var currentPersonSearchKey = null;
  function saveNavBackState(originView, extra){
    searchBackState = {
      originView: originView || 'programm',
      day: currentDay,
      categoryFilter: currentCategoryFilter,
      expandedSessions: expandedSessions,
      expandedTalks: expandedTalks,
      planViewMode: currentPlanViewMode,
      scrollY: window.scrollY
    };
    if(extra){ for(var k in extra){ searchBackState[k] = extra[k]; } }
    document.getElementById('searchBackBtn').style.display = 'block';
  }
  function stripAccents(str){
    if(!str) return str;
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/ß/g, 'ss').replace(/Ø/g, 'O').replace(/ø/g, 'o')
      .replace(/Æ/g, 'AE').replace(/æ/g, 'ae').replace(/Œ/g, 'OE').replace(/œ/g, 'oe')
      .replace(/Đ/g, 'D').replace(/đ/g, 'd').replace(/Ł/g, 'L').replace(/ł/g, 'l');
  }
  // German umlauts specifically expand to their two-letter form (ö→oe, not ö→o) —
  // that's the conventional ASCII-safe spelling, e.g. for filenames, rather than
  // just dropping the diaeresis like other accents.
  function expandUmlauts(str){
    if(!str) return str;
    return str.replace(/ä/g,'ae').replace(/ö/g,'oe').replace(/ü/g,'ue')
      .replace(/Ä/g,'Ae').replace(/Ö/g,'Oe').replace(/Ü/g,'Ue').replace(/ß/g,'ss');
  }
  // For search matching: normalize umlauts AND their already-expanded form to the
  // same canonical spelling, so typing "böhrer" or "boehrer" both match either
  // stored spelling. Falls through to stripAccents for any other accented letters.
  function normalizeForSearch(str){
    return stripAccents(expandUmlauts(str || ''));
  }
  // Strips leading initials (e.g. "M.", "I.") from a name's word list, however
  // many there are, returning just the surname portion. "M. I. Arce Sánchez"
  // -> "Arce Sánchez", not just everything-after-the-first-word.
  function stripLeadingInitials(words){
    var idx = 0;
    // Matches "M.", hyphenated doubles like "W.-H.", and short 2-letter
    // initials like "Zs." (common in Hungarian names).
    while(idx < words.length - 1 && /^[A-ZÀ-ÿ][a-zà-ÿ]?\.(-[A-ZÀ-ÿ][a-zà-ÿ]?\.)*$/.test(words[idx])){
      idx++;
    }
    return words.slice(idx);
  }
  function personKeyFromName(name){
    var words = (name || '').trim().split(/\s+/).filter(Boolean);
    if(!words.length) return null;
    var surname = words[words.length - 1].toLowerCase();
    var initial = words[0].replace(/[^A-Za-zÀ-ÖØ-öø-ÿ]/g, '').charAt(0).toLowerCase();
    return { surname: surname, initial: initial };
  }
  function authorsMatchPerson(authorsStr, personKey){
    if(!authorsStr || !personKey) return false;
    var namesPart = authorsStr.split(' — ')[0];
    var names = namesPart.split(',');
    return names.some(function(n){
      var k = personKeyFromName(n);
      return k && k.surname === personKey.surname && k.initial === personKey.initial;
    });
  }
  function modMatchesPerson(modStr, personKey){
    // Moderator names in the data are surnames only (no first initial), e.g. "Wollrab, Feld",
    // so this can only match on surname — a looser check than authorsMatchPerson.
    if(!modStr || !personKey) return false;
    var names = modStr.split(',');
    return names.some(function(n){ return n.trim().toLowerCase() === personKey.surname; });
  }

  function searchForAuthor(name, originView){
    // Only set the "back" anchor on the very first click of a chain. If we're
    // already inside search results (originView === 'search') and an anchor
    // exists, keep it as-is — clicking through several nested names should
    // always return to where the chain started, not one step back at a time.
    if(!(originView === 'search' && searchBackState)){
      saveNavBackState(originView);
    }
    // Different data sources format the same person differently (e.g. "Michael Hupfer"
    // on a poster vs "M. Hupfer" as a talk author) — matching on surname + first initial
    // bridges that gap, while still telling apart two different people who happen to
    // share a surname (e.g. "Alexandra Heinrich" vs "Lena Heinrich").
    var personKey = personKeyFromName(name);
    currentPersonSearchKey = personKey;
    var words = (name || '').trim().split(/\s+/).filter(Boolean);
    var lastName = words.length ? words[words.length - 1] : name;
    var input = document.getElementById('programmSearch');
    input.value = lastName;
    document.getElementById('searchClearBtn').style.display = 'block';
    // Start every result collapsed — otherwise the talk whose abstract was
    // open when the author name was clicked shows up pre-expanded while
    // every other match in the list is collapsed, which reads as inconsistent.
    expandedTalks = {};
    renderSearchResults(lastName, personKey);
    switchToView('programm');
  }
  document.getElementById('searchBackBtn').addEventListener('click', function(){
    if(!searchBackState) return;
    if(searchBackState.originView === 'plan'){
      document.getElementById('programmSearch').value = '';
      document.getElementById('searchClearBtn').style.display = 'none';
      renderSearchResults('');
      switchToView('plan');
      setPlanView(searchBackState.planViewMode || 'list');
    } else if(searchBackState.originView === 'search'){
      switchToView('programm');
      var restoredQuery = searchBackState.query || '';
      document.getElementById('programmSearch').value = restoredQuery;
      document.getElementById('searchClearBtn').style.display = restoredQuery ? 'block' : 'none';
      renderSearchResults(restoredQuery);
    } else if(searchBackState.originView === 'lunch'){
      switchToView('lunch');
      setLunchView('list');
    } else {
      document.getElementById('programmSearch').value = '';
      document.getElementById('searchClearBtn').style.display = 'none';
      renderSearchResults('');
      switchToView('programm');
      currentDay = searchBackState.day;
      currentCategoryFilter = searchBackState.categoryFilter;
      expandedSessions = searchBackState.expandedSessions;
      expandedTalks = searchBackState.expandedTalks;
      renderDayTabs();
      renderCategoryFilter();
      renderProgrammList();
    }
    window.scrollTo(0, searchBackState.scrollY);
    searchBackState = null;
    this.style.display = 'none';
  });

  function rerenderPreservingScroll(anchorId){
    var el = document.getElementById(anchorId);
    var beforeTop = el ? el.getBoundingClientRect().top : null;
    renderProgrammList();
    if(beforeTop !== null){
      var newEl = document.getElementById(anchorId);
      if(newEl){
        var afterTop = newEl.getBoundingClientRect().top;
        window.scrollBy(0, afterTop - beforeTop);
      }
    }
  }

  function computeInfoBlockDisplayTime(day, block){
    if(block.time.indexOf('–') !== -1) return block.time;
    if(block.noDurationCompute) return block.time;
    var idx = day.blocks.indexOf(block);
    var ownStart = parseTimeRangeMinutes(block.time);
    if(idx !== -1 && ownStart){
      for(var j = idx+1; j < day.blocks.length; j++){
        var nextRange = parseTimeRangeMinutes(day.blocks[j].time);
        if(nextRange && nextRange.start > ownStart.start){
          return block.time + ' – ' + minutesToHHMM(nextRange.start);
        }
      }
    }
    return block.time;
  }

  var FLAG_DE_SVG = '<svg class="mini-flag" viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="20" y="0" fill="#000"/><rect width="30" height="13.33" y="6.67" fill="#DD0000"/><rect width="30" height="6.67" y="13.33" fill="#FFCE00"/></svg>';
  var FLAG_EN_SVG = '<svg class="mini-flag" viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="20" fill="#00247d"/><path d="M0,0 L30,20 M30,0 L0,20" stroke="#fff" stroke-width="4"/><path d="M0,0 L30,20 M30,0 L0,20" stroke="#cf142b" stroke-width="1.5"/><path d="M15,0 V20 M0,10 H30" stroke="#fff" stroke-width="6"/><path d="M15,0 V20 M0,10 H30" stroke="#cf142b" stroke-width="3"/></svg>';
  function sessionLangFlags(sessLang){
    if(sessLang === 'bilingual') return '<span class="session-lang-flags" title="DE/EN">' + FLAG_DE_SVG + FLAG_EN_SVG + '</span>';
    if(sessLang === 'de') return '<span class="session-lang-flags" title="DE">' + FLAG_DE_SVG + '</span>';
    if(sessLang === 'en') return '<span class="session-lang-flags" title="EN">' + FLAG_EN_SVG + '</span>';
    return '';
  }

  function appendSpeakerGroups(container, s){
    if(!s.speakerGroups || !s.speakerGroups.length) return;
    s.speakerGroups.forEach(function(group){
      var heading = document.createElement('div');
      heading.className = 'speaker-group-heading';
      heading.textContent = lang === 'en' && group.heading_en ? group.heading_en : group.heading_de;
      container.appendChild(heading);
      group.speakers.forEach(function(sp){
        var entry = document.createElement('div');
        entry.className = 'speaker-entry';
        var nameEl = document.createElement('div');
        nameEl.className = 'speaker-name';
        nameEl.textContent = sp.name;
        entry.appendChild(nameEl);
        var bioText = lang === 'en' && sp.bio_en ? sp.bio_en : sp.bio_de;
        if(bioText){
          var bioEl = document.createElement('div');
          bioEl.className = 'speaker-bio';
          bioEl.textContent = bioText;
          entry.appendChild(bioEl);
        }
        container.appendChild(entry);
      });
    });
  }

  function appendAbstractWithKeynote(container, text){
    var m = /^(Keynote:[^\n]*)\n\n([\s\S]*)$/.exec(text);
    if(m){
      var kBox = document.createElement('div');
      kBox.className = 'keynote-box';
      kBox.textContent = m[1];
      container.appendChild(kBox);
      if(m[2]){
        var abBox = document.createElement('div');
        abBox.className = 'abstract-box';
        abBox.textContent = m[2];
        container.appendChild(abBox);
      }
    } else {
      var abBox2 = document.createElement('div');
      abBox2.className = 'abstract-box';
      abBox2.textContent = text;
      container.appendChild(abBox2);
    }
  }

  function renderProgrammList(){
    var list = document.getElementById('programmList');
    list.innerHTML = '';

    var pairs = [];
    if(currentCategoryFilter === 'alle'){
      var singleDay = DATA.programm.find(function(d){ return d.id === currentDay; });
      singleDay.blocks.forEach(function(b){ pairs.push({ day: singleDay, block: b }); });
    } else {
      DATA.programm.forEach(function(d){
        d.blocks.forEach(function(b){
          if(currentCategoryFilter === 'wrhc'){
            if(b.type === 'parallel'){
              var wsaSessions = b.sessions.filter(function(s){ return !!(s.isWSA || s.wrhcFilter); });
              if(wsaSessions.length){
                var clonedWsaBlock = {};
                for(var wk in b){ clonedWsaBlock[wk] = b[wk]; }
                clonedWsaBlock.sessions = wsaSessions;
                pairs.push({ day: d, block: clonedWsaBlock });
              }
            } else if(b.isWSA || b.wrhcFilter){
              pairs.push({ day: d, block: b });
            }
            return;
          }
          if(b.type === 'parallel'){
            var matchingSessions = b.sessions.filter(function(s){ return sessionCategory(s) === currentCategoryFilter; });
            if(matchingSessions.length){
              var clonedBlock = {};
              for(var k in b){ clonedBlock[k] = b[k]; }
              clonedBlock.sessions = matchingSessions;
              pairs.push({ day: d, block: clonedBlock });
            }
          } else if(blockCategory(b) === currentCategoryFilter){
            pairs.push({ day: d, block: b });
          }
        });
      });
    }

    if(pairs.length === 0){
      list.innerHTML = '<div class="empty-state">' + t('noItemsInCategory') + '</div>';
      return;
    }

    var lastHeadingDayId = null;
    pairs.forEach(function(pair){
      var day = pair.day, block = pair.block;
      if(currentCategoryFilter !== 'alle' && day.id !== lastHeadingDayId){
        lastHeadingDayId = day.id;
        var heading = document.createElement('div');
        heading.className = 'plan-day-heading';
        var headingDayLabel = lang === 'en' ? day.label_en : day.label;
        heading.textContent = headingDayLabel + ', ' + day.date;
        list.appendChild(heading);
      }
      var card = document.createElement('div');
      var blockIsNow = isToday(day.id) && isBlockNow(day.id, block.time);
      card.className = 'card' + (blockIsNow ? ' now-live' : '');
      var liveBadgeHtml = blockIsNow ? '<div class="live-badge"><span class="dot"></span>' + t('liveNow') + '</div>' : '';

      if(block.type === 'info'){
        var id = planIdForBlock(day.id, block);
        card.id = 'row-' + id;
        var added = isInPlan(id);
        var blockTitle = (lang === 'en' && block.title_en) ? block.title_en : block.title;
        var blockSubtitle = (lang === 'en' && block.subtitle_en) ? block.subtitle_en : block.subtitle;
        var showAddBtn = !block.noPlan;
        var infoAbstractText = (lang === 'en' && block.abstract_en) ? block.abstract_en : block.abstract;
        var infoBioText = lang === 'en' ? block.bio_en : block.bio_de;
        var hasAbstractOrBio = !!(infoAbstractText || infoBioText);
        var hasPosters = !!(block.posters && block.posters.length);
        var greetingsLine = (block.greetings && block.greetings.length) ? t('greetedByPrefix') + ' ' + block.greetings.map(function(g){
          var gName = (lang === 'en' && g.name_en) ? g.name_en : g.name;
          var gOrg = (lang === 'en' && g.org_en) ? g.org_en : g.org;
          return gName + ' (' + gOrg + ')';
        }).join(', ') : '';
        var hasGreetings = !!greetingsLine;
        var isClickable = hasAbstractOrBio || hasPosters || hasGreetings || !!block.linkView || !!block.linkExk;
        var infoAbstractOpen = !!expandedInfoAbstract[id];
        var infoPostersOpen = !!expandedSessions[id];
        var infoGreetingsOpen = !!expandedSessions[id + '_greet'];
        if(blockIsNow){
          var liveBadgeInfoEl = document.createElement('div');
          liveBadgeInfoEl.className = 'live-badge';
          liveBadgeInfoEl.innerHTML = '<span class="dot"></span>' + t('liveNow');
          card.appendChild(liveBadgeInfoEl);
        }
        var headerDiv = document.createElement('div');
        headerDiv.style.display = 'flex';
        headerDiv.style.justifyContent = 'space-between';
        headerDiv.style.alignItems = 'flex-start';
        headerDiv.style.gap = '10px';
        if(isClickable) headerDiv.style.cursor = 'pointer';
        headerDiv.innerHTML =
            '<div style="flex:1;min-width:0;">' +
              '<div class="block-time">' + esc(computeInfoBlockDisplayTime(day, block)) + '</div>' +
              ((block.tag || block.room) ? '<div style="margin-bottom:2px;">' + (block.tag ? '<span class="session-tag' + (block.isWSA ? ' session-tag-wsa' : '') + '">' + esc(lang === 'en' ? (block.tag_en || block.tag) : block.tag) + '</span> ' : '') + (block.room ? '<span class="session-room' + (FLOORPLAN_ROOM_MAP[block.room] ? ' room-link' : '') + '" data-room="' + esc(block.room) + '">' + esc(block.room) + '</span>' : '') + '</div>' : '') +
              '<div class="block-title">' + esc(blockTitle) + '</div>' +
              (blockSubtitle ? '<div class="block-subtitle">' + esc(blockSubtitle) + '</div>' : '') +
              (hasGreetings && infoGreetingsOpen ? '<div class="block-subtitle">' + esc(greetingsLine) + '</div>' : '') +
              (block.mod ? '<div class="session-mod">' + t('mod') + ' ' + esc(block.mod) + '</div>' : '') +
            '</div>' +
            '<div class="session-btns">' +
              posterIconBtn(block) +
              menuIconBtn(block) +
              mapIconBtn(block) +
              floorplanPinIconBtn(block) +
              (showAddBtn ? '<button class="add-btn' + (added ? ' added' : '') + '" data-role="info-add" title="' + esc(added ? t('removeFromPlanLabel') : t('addToPlanLabel')) + '" aria-label="' + esc(added ? t('removeFromPlanLabel') : t('addToPlanLabel')) + '">' + (added ? '&#10003;' : '+') + '</button>' :  '') +
              (hasPosters ? '<div class="chevron' + (infoPostersOpen ? ' open' : '') + '" title="' + esc(infoPostersOpen ? t('hidePostersLabel') : t('showPostersLabel')) + '">&#9656;</div>' : '') +
              (hasGreetings ? '<div class="chevron greet-chevron' + (infoGreetingsOpen ? ' open' : '') + '" title="' + esc(infoGreetingsOpen ? t('hideGreetingsLabel') : t('showGreetingsLabel')) + '">&#9656;</div>' : '') +
              (block.linkView || block.linkExk ? '<div class="chevron link-arrow" title="' + esc(t('showMoreInfoLabel')) + '">&#8594;</div>' : '') +
            '</div>';
        card.appendChild(headerDiv);
        if(block.linkUrl || block.linkMapsUrl || block.routeDetails || block.routeDetails_en || block.practicalInfo_de || block.practicalInfo_en){
          var linksDiv = document.createElement('div');
          linksDiv.className = 'lunch-links';
          linksDiv.style.marginTop = '8px';
          linksDiv.innerHTML =
            (block.linkMapsUrl ? '<a class="pill-link" href="' + esc(block.linkMapsUrl) + '" target="_blank" rel="noopener">' + t('openMaps') + '</a>' : '') +
            (block.linkUrl ? '<a class="pill-link" href="' + esc(block.linkUrl) + '" target="_blank" rel="noopener">' + t('website') + '</a>' : '') +
            ((block.routeDetails || block.routeDetails_en) ? '<button type="button" class="pill-link" data-route-title="' + esc(block.title) + '">' + esc(t('routeDetailsLabel')) + '</button>' : '') +
            ((block.practicalInfo_de || block.practicalInfo_en) ? '<button type="button" class="pill-link" data-practical-title="' + esc(block.title) + '">' + esc(t('practicalInfoLabel')) + '</button>' : '');
          card.appendChild(linksDiv);
        }
        if(block.route){
          var routeDiv = document.createElement('div');
          routeDiv.className = 'lunch-meta';
          routeDiv.style.marginTop = '6px';
          routeDiv.textContent = (lang === 'en' && block.route_en) ? block.route_en : block.route;
          card.appendChild(routeDiv);
        }
        if(headerDiv.querySelector('.room-link')){
          headerDiv.querySelector('.room-link').addEventListener('click', function(ev){
            ev.stopPropagation();
            showFloorplanRoom(this.getAttribute('data-room'));
          });
        }
        if(headerDiv.querySelector('[data-role="floorplan-pin"]')){
          headerDiv.querySelector('[data-role="floorplan-pin"]').addEventListener('click', function(ev){
            ev.stopPropagation();
            openFloorplanLightbox([block.linkFloorplan]);
          });
        }
        if(showAddBtn){
          headerDiv.querySelector('[data-role="info-add"]').addEventListener('click', function(ev){
            ev.stopPropagation();
            var bioText = lang === 'en' ? block.bio_en : block.bio_de;
            var planAbstractText = (lang === 'en' && block.abstract_en) ? block.abstract_en : block.abstract;
            var modSuffix = block.mod ? (t('mod') + ' ' + block.mod) : '';
            var planSubtitle = [blockSubtitle, modSuffix].filter(Boolean).join(' · ');
            togglePlan({
              id: id, dayId: day.id, dayLabel: day.label, date: day.date,
              time: block.time, title: blockTitle, subtitle: planSubtitle, room: block.room || '',
              abstract: planAbstractText || '', bio: bioText || ''
            });
          });
        }
        if(hasAbstractOrBio){
          headerDiv.addEventListener('click', function(ev){
            if(ev.target.closest('[data-role="info-add"]') || ev.target.closest('.room-link') || ev.target.closest('.chevron') || ev.target.closest('.poster-icon-btn')) return;
            var wasOpen = !!expandedInfoAbstract[id];
            expandedInfoAbstract = {};
            if(!wasOpen){ expandedInfoAbstract[id] = true; }
            rerenderPreservingScroll('row-' + id);
          });
        } else if(block.linkView){
          headerDiv.addEventListener('click', function(ev){
            if(ev.target.closest('[data-role="info-add"]') || ev.target.closest('.room-link')) return;
            saveNavBackState('programm');
            switchToView(block.linkView);
          });
        } else if(block.linkExk){
          headerDiv.addEventListener('click', function(ev){
            if(ev.target.closest('[data-role="info-add"]') || ev.target.closest('.room-link')) return;
            saveNavBackState('programm');
            switchToView('exkursionen');
            expandedExk = {};
            expandedExk[block.linkExk] = true;
            renderExkursionen();
            setTimeout(function(){
              var el = document.getElementById('exk-' + block.linkExk);
              if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
            }, 50);
          });
        }
        if(hasPosters){
          headerDiv.querySelector('.chevron:not(.link-arrow):not(.greet-chevron)').addEventListener('click', function(ev){
            ev.stopPropagation();
            var wasOpen = !!expandedSessions[id];
            expandedSessions = {};
            if(!wasOpen){
              expandedSessions[id] = true;
              delete expandedInfoAbstract[id];
            }
            rerenderPreservingScroll('row-' + id);
          });
        }
        if(hasGreetings){
          headerDiv.querySelector('.greet-chevron').addEventListener('click', function(ev){
            ev.stopPropagation();
            var key = id + '_greet';
            var wasOpen = !!expandedSessions[key];
            expandedSessions = {};
            if(!wasOpen){
              expandedSessions[key] = true;
              delete expandedInfoAbstract[id];
            }
            rerenderPreservingScroll('row-' + id);
          });
        }
        if(hasAbstractOrBio && infoAbstractOpen){
          var infoBox = document.createElement('div');
          if(infoAbstractText){
            var abP = document.createElement('div');
            abP.className = 'abstract-box';
            abP.textContent = infoAbstractText;
            infoBox.appendChild(abP);
          }
          if(infoBioText){
            var bioHeading = document.createElement('div');
            bioHeading.className = 'bio-heading';
            bioHeading.textContent = t('aboutSpeaker');
            infoBox.appendChild(bioHeading);
            var bioP = document.createElement('div');
            bioP.className = 'abstract-box';
            bioP.textContent = infoBioText;
            infoBox.appendChild(bioP);
          }
          card.appendChild(infoBox);
        }
        if(hasPosters && infoPostersOpen){
          var posterList = document.createElement('div');
          posterList.className = 'talk-list';
          var posterHeading = document.createElement('div');
          posterHeading.className = 'bio-heading';
          posterHeading.textContent = t('posterListLabel') + ' (' + block.posters.length + ')';
          posterList.appendChild(posterHeading);
          block.posters.forEach(function(p, pidx){
            var posterId = planIdForPoster(day.id, p);
            var padded = isInPlan(posterId);
            var hasBoardLink = !!posterBoardHighlightId(p.board);
            var prow = document.createElement('div');
            prow.className = 'talk-row';
            prow.innerHTML =
              '<div class="talk-main" style="cursor:default;">' +
                '<div class="talk-time">' + esc(p.code) + (p.board ? ' · ' + t('posterBoard') + ' ' + esc(p.board) : '') + '</div>' +
                '<div class="talk-title">' + esc(p.title) + '</div>' +
                '<div class="talk-authors">' + renderAuthorsHtml(p.authorsDisplay) + '</div>' +
              '</div>' +
              (hasBoardLink ? '<button class="poster-icon-btn" data-role="poster-locate" title="' + esc(t('showOnPosterPlanLabel')) + '" aria-label="' + esc(t('showOnPosterPlanLabel')) + '"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg></button>' : '') +
              '<button class="add-btn small' + (padded ? ' added' : '') + '" data-role="poster-add" title="' + esc(padded ? t('removeFromPlanLabel') : t('addToPlanLabel')) + '" aria-label="' + esc(padded ? t('removeFromPlanLabel') : t('addToPlanLabel')) + '">' + (padded ? '&#10003;' : '+') + '</button>';
            posterList.appendChild(prow);
            prow.querySelectorAll('.author-link').forEach(function(el){
              el.addEventListener('click', function(ev){
                ev.stopPropagation();
                searchForAuthor(el.getAttribute('data-author'));
              });
            });
            if(hasBoardLink){
              prow.querySelector('[data-role="poster-locate"]').addEventListener('click', function(ev){
                ev.stopPropagation();
                showPosterOnPlan(p.board);
              });
            }
            prow.querySelector('[data-role="poster-add"]').addEventListener('click', function(ev){
              ev.stopPropagation();
              var boardText = p.board ? (' · ' + t('posterBoard') + ' ' + p.board) : '';
              togglePlan({
                id: posterId, dayId: day.id, dayLabel: day.label, date: day.date,
                time: block.time, title: p.title, subtitle: p.authorsDisplay + ' · ' + p.code + boardText,
                room: '', authors: p.authorsDisplay, isPoster: true
              });
              renderProgrammList();
            });
          });
          card.appendChild(posterList);
        }
      } else {
        if(blockIsNow){
          var liveBadgeEl = document.createElement('div');
          liveBadgeEl.className = 'live-badge';
          liveBadgeEl.innerHTML = '<span class="dot"></span>' + t('liveNow');
          card.appendChild(liveBadgeEl);
        }
        var head = document.createElement('div');
        head.className = 'block-time';
        head.textContent = block.time;
        card.appendChild(head);
        block.sessions.forEach(function(s){
          var sid = planIdForSession(day.id, block, s);
          var hasTalks = s.talks && s.talks.length > 0;
          var hasPosters = s.posters && s.posters.length > 0;
          var hasSpeakers = !!(s.speakerGroups && s.speakerGroups.length);
          var sessionAbstractText = lang === 'en' ? s.abstract_en : s.abstract_de;
          var hasAbstract = !!sessionAbstractText;
          var sadded = hasTalks
            ? s.talks.every(function(talk, idx){ return isInPlan(planIdForTalk(day.id, block, s, talk, idx)); })
            : isInPlan(sid);
          var talksOpen = !!expandedSessions[sid];
          var abstractOpen = !!expandedSessionAbstract[sid];

          var row = document.createElement('div');
          row.className = 'session-row';
          row.id = 'row-' + sid;

          var header = document.createElement('div');
          header.className = 'session-header';
          header.setAttribute('data-sid', sid);
          if(hasAbstract) header.setAttribute('data-has-abstract', '1');
          var contSuffix = s.partTotal ? (lang === 'en' ? ' (Part ' + s.partIndex + '/' + s.partTotal + ')' : ' (Teil ' + s.partIndex + '/' + s.partTotal + ')') : '';
          header.innerHTML =
            '<div class="session-main">' +
              '<span class="session-tag' + (s.isWSA ? ' session-tag-wsa' : '') + '">' + esc(s.displayCode || s.code) + '</span>' + sessionLangFlags(s.lang) + '<span class="session-room' + (FLOORPLAN_ROOM_MAP[s.room] ? ' room-link' : '') + '" data-room="' + esc(s.room) + '">' + esc(s.room) + '</span>' +
              '<div class="session-title"' + (s.category === 'plenary' ? ' style="font-weight:600;"' : '') + '>' + esc(lang === 'en' && s.title_en ? s.title_en : s.title) + contSuffix + '</div>' +
              (s.topicTitle ? '<div class="session-mod">' + esc(lang === 'en' && s.topicTitle_en ? s.topicTitle_en : s.topicTitle) + '</div>' : '') +
              (s.mod ? '<div class="session-mod">' + t('mod') + ' ' + esc(s.mod) + '</div>' : '') +
            '</div>' +
            '<div class="session-btns">' +
              posterIconBtn(s) +
              '<button class="add-btn' + (sadded ? ' added' : '') + '" data-role="session-add" title="' + esc(sadded ? t('removeFromPlanLabel') : t('addToPlanLabel')) + '" aria-label="' + esc(sadded ? t('removeFromPlanLabel') : t('addToPlanLabel')) + '">' + (sadded ? '&#10003;' : '+') + '</button>' +
              (hasTalks ? '<div class="chevron' + (talksOpen ? ' open' : '') + '" title="' + esc(talksOpen ? t('hideTalksLabel') : t('showTalksLabel')) + '">&#9656;</div>' : '') +
              (hasPosters ? '<div class="chevron' + (talksOpen ? ' open' : '') + '" title="' + esc(talksOpen ? t('hidePostersLabel') : t('showPostersLabel')) + '">&#9656;</div>' : '') +
              (hasSpeakers ? '<div class="chevron' + (talksOpen ? ' open' : '') + '" title="' + esc(talksOpen ? t('hideSpeakersLabel') : t('showSpeakersLabel')) + '">&#9656;</div>' : '') +
            '</div>';
          row.appendChild(header);

          header.querySelector('[data-role="session-add"]').addEventListener('click', function(ev){
            ev.stopPropagation();
            if(hasTalks){
              var allAdded = s.talks.every(function(talk, idx){ return isInPlan(planIdForTalk(day.id, block, s, talk, idx)); });
              s.talks.forEach(function(talk, idx){
                var tid = planIdForTalk(day.id, block, s, talk, idx);
                var currentlyIn = isInPlan(tid);
                if(allAdded && currentlyIn){
                  var pidx = plan.findIndex(function(p){ return p.id === tid; });
                  if(pidx >= 0) plan.splice(pidx, 1);
                } else if(!allAdded && !currentlyIn){
                  plan.push({
                    id: tid, dayId: day.id, dayLabel: day.label, date: day.date,
                    time: computeTalkTimeRange(s.talks, idx, block.time), title: talk.title, subtitle: talk.authors + ' · ' + s.code, room: s.room,
                    abstract: talk.abstract || '', code: s.code, authors: talk.authors
                  });
                }
              });
              savePlan(plan);
              render();
            } else {
              togglePlan({
                id: sid, dayId: day.id, dayLabel: day.label, date: day.date,
                time: block.time, title: s.code + ' · ' + (lang === 'en' && s.title_en ? s.title_en : s.title) + contSuffix, subtitle: s.mod ? t('mod') + ' ' + s.mod : '', room: s.room,
                abstract: sessionAbstractText || '', code: s.code
              });
            }
          });

          if(header.querySelector('.room-link')){
            header.querySelector('.room-link').addEventListener('click', function(ev){
              ev.stopPropagation();
              showFloorplanRoom(this.getAttribute('data-room'));
            });
          }

          if(hasAbstract){
            header.style.cursor = 'pointer';
            header.addEventListener('click', function(ev){
              if(ev.target.closest('[data-role="session-add"]') || ev.target.closest('.room-link') || ev.target.closest('.poster-icon-btn')) return;
              var wasOpen = !!expandedSessionAbstract[sid];
              expandedSessionAbstract = {};
              if(!wasOpen){ expandedSessionAbstract[sid] = true; }
              rerenderPreservingScroll('row-' + sid);
            });
          }

          if(hasTalks || hasPosters || hasSpeakers){
            header.querySelector('.chevron').addEventListener('click', function(ev){
              ev.stopPropagation();
              var wasOpen = !!expandedSessions[sid];
              expandedSessions = {};
              if(!wasOpen){
                expandedSessions[sid] = true;
                delete expandedSessionAbstract[sid];
              }
              rerenderPreservingScroll('row-' + sid);
            });
          }

          if(hasAbstract && abstractOpen){
            var abstractWrap = document.createElement('div');
            abstractWrap.className = 'talk-list';
            appendAbstractWithKeynote(abstractWrap, sessionAbstractText);
            row.appendChild(abstractWrap);
          }

          if(hasSpeakers && talksOpen){
            var speakerWrap = document.createElement('div');
            speakerWrap.className = 'talk-list';
            appendSpeakerGroups(speakerWrap, s);
            row.appendChild(speakerWrap);
          }

          if(hasTalks && talksOpen){
            var talkList = document.createElement('div');
            talkList.className = 'talk-list';
            s.talks.forEach(function(talk, idx){
              var tid = planIdForTalk(day.id, block, s, talk, idx);
              var tadded = isInPlan(tid);
              var talkOpen = !!expandedTalks[tid];
              var talkRange = computeTalkTimeRange(s.talks, idx, block.time);
              var talkIsNow = isToday(day.id) && isBlockNow(day.id, talkRange);
              var trow = document.createElement('div');
              var talkFirstAuthor = (talk.authors || '').split(' \u2014 ')[0].split(',')[0].trim();
              var showsPresenter = talk.presenter && talk.presenter.trim() !== talkFirstAuthor;
              trow.className = 'talk-row';
              trow.id = 'row-' + tid;
              trow.innerHTML =
                '<div class="talk-main">' +
                  (s.code === 'WRHC' ? '' : '<div class="talk-time" style="display:flex;align-items:center;gap:6px;">' + esc(talk.time) + (talkIsNow ? '<span class="live-dot-blink" aria-label="' + esc(t('liveNow')) + '" title="' + esc(t('liveNow')) + '"></span>' : '') + '</div>') +
                  '<div class="talk-title">' + (talk.remote ? '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px;margin-right:4px;flex-shrink:0;" aria-label="' + esc(t('remoteTalkLabel')) + '"><title>' + esc(t('remoteTalkLabel')) + '</title><rect x="2" y="6" width="14" height="12" rx="2"></rect><polygon points="23 7 16 12 23 17 23 7"></polygon></svg>' : '') + esc(talk.title) + '</div>' +
                  '<div class="talk-authors">' + renderAuthorsHtml(talk.authors) + '</div>' +
                  (showsPresenter ? '<div class="talk-authors presenter-note">' + esc(t('presenterLabel')) + ' ' + esc(talk.presenter) + '</div>' : '') +
                '</div>' +
                '<button class="add-btn small' + (tadded ? ' added' : '') + '" data-id="' + tid + '" title="' + esc(tadded ? t('removeFromPlanLabel') : t('addToPlanLabel')) + '" aria-label="' + esc(tadded ? t('removeFromPlanLabel') : t('addToPlanLabel')) + '">' + (tadded ? '&#10003;' : '+') + '</button>';
              trow.querySelector('.talk-main').addEventListener('click', function(ev){
                if(ev.target.closest('.author-link')) return;
                var wasOpen = !!expandedTalks[tid];
                expandedTalks = {};
                if(!wasOpen){ expandedTalks[tid] = true; }
                rerenderPreservingScroll('row-' + tid);
              });
              trow.querySelectorAll('.author-link').forEach(function(el){
                el.addEventListener('click', function(ev){
                  ev.stopPropagation();
                  searchForAuthor(el.getAttribute('data-author'));
                });
              });
              trow.querySelector('.add-btn').addEventListener('click', function(ev){
                ev.stopPropagation();
                togglePlan({
                  id: tid, dayId: day.id, dayLabel: day.label, date: day.date,
                  time: computeTalkTimeRange(s.talks, idx, block.time), title: talk.title, subtitle: talk.authors + ' · ' + s.code, room: s.room,
                  abstract: talk.abstract || '', code: s.code, authors: talk.authors
                });
              });
              talkList.appendChild(trow);
              if(talkOpen){
                var abBox = document.createElement('div');
                if(talk.abstract){
                  abBox.className = 'abstract-box';
                  abBox.textContent = talk.abstract;
                } else {
                  abBox.className = 'abstract-empty';
                  abBox.textContent = t('noAbstract');
                }
                talkList.appendChild(abBox);
              }
            });
            row.appendChild(talkList);
          }

          if(hasPosters && talksOpen){
            var posterListInSession = document.createElement('div');
            posterListInSession.className = 'talk-list';
            s.posters.forEach(function(p){
              var posterId = planIdForPoster(day.id, p);
              var padded = isInPlan(posterId);
              var hasBoardLink = !!posterBoardHighlightId(p.board);
              var prow = document.createElement('div');
              prow.className = 'talk-row';
              prow.innerHTML =
                '<div class="talk-main" style="cursor:default;">' +
                  '<div class="talk-time">' + esc(p.code) + (p.board ? ' · ' + t('posterBoard') + ' ' + esc(p.board) : '') + '</div>' +
                  '<div class="talk-title">' + esc(p.title) + '</div>' +
                  '<div class="talk-authors">' + renderAuthorsHtml(p.authorsDisplay) + '</div>' +
                '</div>' +
                (hasBoardLink ? '<button class="poster-icon-btn" data-role="poster-locate" title="' + esc(t('showOnPosterPlanLabel')) + '" aria-label="' + esc(t('showOnPosterPlanLabel')) + '"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg></button>' : '') +
                '<button class="add-btn small' + (padded ? ' added' : '') + '" data-role="poster-add" title="' + esc(padded ? t('removeFromPlanLabel') : t('addToPlanLabel')) + '" aria-label="' + esc(padded ? t('removeFromPlanLabel') : t('addToPlanLabel')) + '">' + (padded ? '&#10003;' : '+') + '</button>';
              posterListInSession.appendChild(prow);
              prow.querySelectorAll('.author-link').forEach(function(el){
                el.addEventListener('click', function(ev){
                  ev.stopPropagation();
                  searchForAuthor(el.getAttribute('data-author'));
                });
              });
              if(hasBoardLink){
                prow.querySelector('[data-role="poster-locate"]').addEventListener('click', function(ev){
                  ev.stopPropagation();
                  showPosterOnPlan(p.board);
                });
              }
              prow.querySelector('[data-role="poster-add"]').addEventListener('click', function(ev){
                ev.stopPropagation();
                togglePlan({
                  id: posterId, dayId: day.id, dayLabel: day.label, date: day.date,
                  time: block.time, title: p.title, subtitle: p.authorsDisplay + ' · ' + p.code + (p.board ? ' · ' + t('posterBoard') + ' ' + p.board : ''), room: s.room,
                  abstract: '', code: p.code, authors: p.authorsDisplay
                });
              });
            });
            row.appendChild(posterListInSession);
          }

          card.appendChild(row);
        });
      }
      list.appendChild(card);
    });
    safeRun(renderLiveNowBanner, 'renderLiveNowBanner');
  }

  // ---------- "Jetzt live" jump banner ----------
  function isSomethingLiveNow(){
    var today = DATA.programm.find(function(d){ return isToday(d.id); });
    if(!today) return false;
    return today.blocks.some(function(block){
      if(block.type === 'parallel'){
        return (block.sessions || []).some(function(s){
          return s.room && isBlockNow(today.id, block.time);
        });
      } else if(block.type === 'info'){
        return block.room && block.room !== 'Foyer' && block.title !== 'Anmeldung' && isBlockNow(today.id, block.time);
      }
      return false;
    });
  }
  function renderLiveNowBanner(){
    var container = document.getElementById('liveNowBanner');
    if(!container) return;
    if(!isSomethingLiveNow()){ container.innerHTML = ''; return; }
    container.innerHTML =
      '<div class="live-now-banner" id="liveNowJump">' +
        '<span class="live-dot-blink"></span>' +
        '<span class="live-now-header-text">' + esc(t('liveNowHeading')) + '</span>' +
        '<span class="live-now-arrow">&#8594;</span>' +
      '</div>';
    document.getElementById('liveNowJump').addEventListener('click', function(){
      var today = DATA.programm.find(function(d){ return isToday(d.id); });
      if(!today) return;
      currentDay = today.id;
      currentCategoryFilter = 'alle';
      expandedSessions = {};
      expandedTalks = {};
      renderDayTabs();
      renderCategoryFilter();
      renderProgrammList();
      setTimeout(function(){
        var el = document.querySelector('#programmList .now-live');
        if(el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 60);
    });
  }

  // ---------- Search ----------
  var searchIndex = [];
  (function buildSearchIndex(){
    DATA.programm.forEach(function(day){
      day.blocks.forEach(function(block){
        if(block.type === 'info'){
          var id = planIdForBlock(day.id, block);
          searchIndex.push({
            kind: 'info', dayId: day.id, jumpId: id, timeLabel: block.time,
            text: [block.title, block.title_en, block.subtitle, block.subtitle_en, block.abstract, block.bio_de, block.bio_en].filter(Boolean).join(' '),
            title: block.title, title_en: block.title_en,
            isPlenary: !!block.isPlenary, tag: block.tag, tag_en: block.tag_en
          });
          if(block.title !== 'Postersession 1 – Speed Talks' && block.title !== 'Postersession 2 – Speed Talks'){
            (block.posters || []).forEach(function(p, pidx){
              searchIndex.push({
                kind: 'poster', dayId: day.id, jumpId: planIdForPoster(day.id, p), blockId: id, timeLabel: block.time,
                text: [p.title, p.authorsDisplay, p.authors, p.code].filter(Boolean).join(' '),
                title: p.title, authors: p.authorsDisplay, board: p.board, code: p.code,
                dayLabel: day.label, date: day.date
              });
            });
          }
        } else {
          block.sessions.forEach(function(s){
            var sid = planIdForSession(day.id, block, s);
            searchIndex.push({
              kind: 'session', dayId: day.id, jumpId: sid, sid: sid, timeLabel: block.time,
              text: [s.code, s.title, s.title_en, s.mod].filter(Boolean).join(' '),
              title: s.code + ' · ' + s.title, title_en: s.title_en ? (s.code + ' · ' + s.title_en) : null, sub: s.mod ? ('Mod.: ' + s.mod) : '',
              rawTitle: s.title, rawTitle_en: s.title_en,
              hasTalks: !!(s.talks && s.talks.length),
              code: s.code, displayCode: s.displayCode, partIndex: s.partIndex || 1, mod: s.mod || '', isWSA: !!s.isWSA
            });
            (s.talks || []).forEach(function(talk, idx){
              var tid = planIdForTalk(day.id, block, s, talk, idx);
              searchIndex.push({
                kind: 'talk', dayId: day.id, jumpId: tid, sid: sid, timeLabel: talk.time,
                text: [talk.title, talk.authors, s.code].filter(Boolean).join(' '),
                title: talk.title, sub: talk.authors,
                authors: talk.authors, abstract: talk.abstract || '', room: s.room, code: s.code, displayCode: s.displayCode,
                dayLabel: day.label, date: day.date,
                planTime: computeTalkTimeRange(s.talks, idx, block.time), isWSA: !!s.isWSA, presenter: talk.presenter || ''
              });
            });
          });
        }
      });
    });
  })();

  var dayLabelMap = {};
  DATA.programm.forEach(function(d){ dayLabelMap[d.id] = { de: d.label, en: d.label_en }; });
  // Plan items store dayLabel in whichever language was active when they were
  // added — fine until someone switches languages afterwards (e.g. adds
  // items in German, then views "Mein Plan"/exports in English). This looks
  // the correct-for-right-now label back up instead of trusting the stored,
  // possibly stale-language string.
  function displayDayLabel(item){
    var dl = dayLabelMap[item.dayId];
    if(!dl) return item.dayLabel;
    return (lang === 'en' && dl.en) ? dl.en : dl.de;
  }

  function jumpToEntry(m){
    currentDay = m.dayId;
    currentCategoryFilter = 'alle';
    expandedSessions = {};
    expandedSessionAbstract = {};
    expandedInfoAbstract = {};
    expandedTalks = {};
    if(m.kind === 'session'){ expandedSessions[m.sid] = true; expandedSessionAbstract[m.sid] = true; }
    if(m.kind === 'talk'){ expandedSessions[m.sid] = true; expandedTalks[m.jumpId] = true; }
    if(m.kind === 'info'){ expandedSessions[m.jumpId] = true; expandedInfoAbstract[m.jumpId] = true; }
    document.getElementById('programmSearch').value = '';
    document.getElementById('searchClearBtn').style.display = 'none';
    document.getElementById('searchResults').style.display = 'none';
    document.getElementById('categoryFilter').style.display = '';
    document.getElementById('programmList').style.display = '';
    document.getElementById('topicJump').value = '';
    renderDayTabs();
    renderCategoryFilter();
    renderProgrammList();
    setTimeout(function(){
      var el = document.getElementById('row-' + m.jumpId);
      if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
    }, 50);
  }

  function renderSearchResults(query, personKey){
    var wrap = document.getElementById('searchResults');
    var q = normalizeForSearch(query.trim().toLowerCase());
    if(!q){
      wrap.style.display = 'none';
      document.getElementById('dayTabs').style.display = '';
      document.getElementById('categoryFilter').style.display = '';
      document.getElementById('programmList').style.display = '';
      document.getElementById('topicJump').style.display = '';
      return;
    }
    document.getElementById('dayTabs').style.display = 'none';
    document.getElementById('categoryFilter').style.display = 'none';
    document.getElementById('programmList').style.display = 'none';
    document.getElementById('topicJump').style.display = 'none';
    wrap.style.display = 'block';
    wrap.innerHTML = '';

    var matches;
    if(personKey){
      // Precise mode (triggered by clicking a name): only entries whose author list
      // contains this exact person (surname + first initial), not just anyone sharing
      // the surname, and not entries that merely mention the name in an abstract.
      matches = searchIndex.filter(function(entry){
        return authorsMatchPerson(entry.authors, personKey) || modMatchesPerson(entry.mod, personKey);
      }).slice(0, 25);
    } else {
      matches = searchIndex.filter(function(entry){
        return normalizeForSearch(entry.text.toLowerCase()).indexOf(q) !== -1;
      }).slice(0, 25);
    }

    if(matches.length === 0){
      wrap.innerHTML = '<div class="search-no-results">' + t('noResults') + '</div>';
      return;
    }

    matches.forEach(function(m){
      var item = document.createElement('div');
      item.className = 'search-result-item';
      var dl = dayLabelMap[m.dayId];
      var dayLabel = dl ? (lang === 'en' ? dl.en : dl.de) : '';
      var title = (lang === 'en' && m.title_en) ? m.title_en : m.title;
      var roomClickable = m.room && FLOORPLAN_ROOM_MAP[m.room];
      var isOpen = m.kind === 'talk' && !!expandedTalks[m.jumpId];

      if(m.kind === 'talk'){
        var padded = isInPlan(m.jumpId);
        var mFirstAuthor = (m.authors || '').split(' \u2014 ')[0].split(',')[0].trim();
        var mShowsPresenter = m.presenter && m.presenter.trim() !== mFirstAuthor;
        item.innerHTML =
          '<div class="search-result-day">' + (m.code ? '<span class="session-tag' + (m.isWSA ? ' session-tag-wsa' : '') + '">' + esc(m.displayCode || m.code) + '</span> ' : '') + esc(dayLabel) + (m.isWSA ? '' : ' · ' + esc(m.timeLabel)) + (m.room ? ' · <span class="' + (roomClickable ? 'room-link' : '') + '" data-room="' + esc(m.room) + '">' + esc(m.room) + '</span>' : '') + '</div>' +
          '<div class="search-result-title">' + esc(title) + '</div>' +
          '<div class="search-result-sub">' + renderAuthorsHtml(m.authors) + '</div>' +
          (mShowsPresenter ? '<div class="search-result-sub presenter-note">' + esc(t('presenterLabel')) + ' ' + esc(m.presenter) + '</div>' : '') +
          '<button class="add-btn small' + (padded ? ' added' : '') + '" data-role="search-add" title="' + esc(padded ? t('removeFromPlanLabel') : t('addToPlanLabel')) + '" aria-label="' + esc(padded ? t('removeFromPlanLabel') : t('addToPlanLabel')) + '" style="position:absolute;top:12px;right:12px;">' + (padded ? '&#10003;' : '+') + '</button>';
        item.style.cursor = 'pointer';
        item.style.position = 'relative';
        if(roomClickable){
          item.querySelector('.room-link').addEventListener('click', function(ev){
            ev.stopPropagation();
            showFloorplanRoom(m.room);
          });
        }
        item.querySelectorAll('.author-link').forEach(function(el){
          el.addEventListener('click', function(ev){
            ev.stopPropagation();
            searchForAuthor(el.getAttribute('data-author'), 'search');
          });
        });
        item.querySelector('[data-role="search-add"]').addEventListener('click', function(ev){
          ev.stopPropagation();
          togglePlan({
            id: m.jumpId, dayId: m.dayId, dayLabel: m.dayLabel, date: m.date,
            time: m.planTime, title: m.title, subtitle: m.authors + ' · ' + m.code, room: m.room,
            abstract: m.abstract || '', code: m.code, authors: m.authors
          });
          renderSearchResults(query, currentPersonSearchKey);
        });
        if(isOpen){
          var abBox = document.createElement('div');
          if(m.abstract){
            abBox.className = 'abstract-box';
            abBox.textContent = m.abstract;
          } else {
            abBox.className = 'abstract-empty';
            abBox.textContent = t('noAbstract');
          }
          item.appendChild(abBox);
        }
        item.addEventListener('click', function(ev){
          if(ev.target.closest('.room-link') || ev.target.closest('.author-link') || ev.target.closest('[data-role="search-add"]')) return;
          var wasOpen = !!expandedTalks[m.jumpId];
          expandedTalks[m.jumpId] = !wasOpen;
          renderSearchResults(query, currentPersonSearchKey);
        });
      } else if(m.kind === 'poster'){
        var posterPadded = isInPlan(m.jumpId);
        item.innerHTML =
          '<div class="search-result-day">' + (m.code ? '<span class="session-tag">' + esc(m.code) + '</span> ' : '') + esc(dayLabel) + ' · ' + esc(m.timeLabel) + (m.board ? ' · ' + t('posterBoard') + ' ' + esc(m.board) : '') + '</div>' +
          '<div class="search-result-title"><span class="session-tag">' + t('posterListLabel') + '</span> ' + esc(title) + '</div>' +
          '<div class="search-result-sub">' + renderAuthorsHtml(m.authors) + '</div>' +
          '<button class="add-btn small' + (posterPadded ? ' added' : '') + '" data-role="search-add" title="' + esc(posterPadded ? t('removeFromPlanLabel') : t('addToPlanLabel')) + '" aria-label="' + esc(posterPadded ? t('removeFromPlanLabel') : t('addToPlanLabel')) + '" style="position:absolute;top:12px;right:12px;">' + (posterPadded ? '&#10003;' : '+') + '</button>';
        item.style.position = 'relative';
        item.querySelectorAll('.author-link').forEach(function(el){
          el.addEventListener('click', function(ev){
            ev.stopPropagation();
            searchForAuthor(el.getAttribute('data-author'), 'search');
          });
        });
        item.querySelector('[data-role="search-add"]').addEventListener('click', function(ev){
          ev.stopPropagation();
          var boardText = m.board ? (' · ' + t('posterBoard') + ' ' + m.board) : '';
          togglePlan({
            id: m.jumpId, dayId: m.dayId, dayLabel: m.dayLabel, date: m.date,
            time: m.timeLabel, title: m.title, subtitle: m.authors + ' · ' + m.code + boardText,
            room: '', authors: m.authors, isPoster: true
          });
          renderSearchResults(query, currentPersonSearchKey);
        });
      } else if(m.kind === 'session'){
        var rawTitle = (lang === 'en' && m.rawTitle_en) ? m.rawTitle_en : m.rawTitle;
        item.innerHTML =
          '<div class="search-result-day">' + esc(dayLabel) + ' · ' + esc(m.timeLabel) + '</div>' +
          '<div class="search-result-title">' + (m.code ? '<span class="session-tag' + (m.isWSA ? ' session-tag-wsa' : '') + '">' + esc(m.displayCode || m.code) + '</span> ' : '') + esc(rawTitle) + '</div>' +
          (m.sub ? '<div class="search-result-sub">' + esc(m.sub) + '</div>' : '');
        item.addEventListener('click', function(){
          saveNavBackState('search', { query: query });
          jumpToEntry(m);
        });
      } else {
        item.innerHTML =
          '<div class="search-result-day">' + esc(dayLabel) + ' · ' + esc(m.timeLabel) + '</div>' +
          '<div class="search-result-title">' + esc(title) + '</div>' +
          (m.sub ? '<div class="search-result-sub">' + esc(m.sub) + '</div>' : '');
        item.addEventListener('click', function(){
          saveNavBackState('search', { query: query });
          jumpToEntry(m);
        });
      }
      wrap.appendChild(item);
    });
  }

  var searchInputEl = document.getElementById('programmSearch');
  var searchClearEl = document.getElementById('searchClearBtn');
  searchInputEl.addEventListener('input', function(){
    currentPersonSearchKey = null;
    searchClearEl.style.display = searchInputEl.value ? 'block' : 'none';
    renderSearchResults(searchInputEl.value);
  });
  searchClearEl.addEventListener('click', function(){
    currentPersonSearchKey = null;
    searchInputEl.value = '';
    searchClearEl.style.display = 'none';
    renderSearchResults('');
  });

  // ---------- Topic jump dropdown ----------
  var topicList = [];
  (function buildTopicList(){
    var seen = {};
    searchIndex.forEach(function(entry){
      var dedupKey = entry.code + '|' + entry.title;
      if(entry.kind === 'session' && entry.partIndex === 1 && entry.code && entry.title.indexOf('Closing Remarks') === -1 && !seen[dedupKey]){
        seen[dedupKey] = true;
        var group;
        if(entry.code === 'WRHC') group = 2;
        else if(entry.code === 'Preisvortrag') group = 4;
        else if(/^A/.test(entry.code)) group = 0;
        else group = 1;
        entry._group = group;
        topicList.push(entry);
      }
      if(entry.kind === 'info' && entry.isPlenary){
        var plenaryDedupKey = 'plenary|' + entry.jumpId;
        if(!seen[plenaryDedupKey]){
          seen[plenaryDedupKey] = true;
          var isAward = entry.tag === 'Preisvortrag';
          topicList.push({
            kind: 'info', dayId: entry.dayId, jumpId: entry.jumpId, code: '',
            title: (entry.tag || '') + ' ' + entry.title,
            title_en: (entry.tag_en || entry.tag || '') + ' ' + (entry.title_en || entry.title),
            _isPlenaryTopic: true,
            _group: isAward ? 4 : 3
          });
        }
      }
    });
    function codeSortKey(code){
      var m = code.match(/^([A-Za-z]+)0*(\d+)/);
      if(m) return [m[1], parseInt(m[2], 10)];
      return [code, 0];
    }
    function wrhcSortKey(title){
      var m = title.match(/Session (\d+)/);
      return m ? parseInt(m[1], 10) : 99;
    }
    topicList.sort(function(a, b){
      if(a._group !== b._group) return a._group - b._group;
      if(a._group === 2){
        return wrhcSortKey(a.title) - wrhcSortKey(b.title);
      }
      if(a._group === 3 || a._group === 4){
        return a.title < b.title ? -1 : (a.title > b.title ? 1 : 0);
      }
      var ka = codeSortKey(a.code), kb = codeSortKey(b.code);
      if(ka[0] !== kb[0]) return ka[0] < kb[0] ? -1 : 1;
      return ka[1] - kb[1];
    });
  })();

  function renderTopicJump(){
    var sel = document.getElementById('topicJump');
    var placeholder = lang === 'en' ? 'Jump to topic/session…' : 'Zu Thema/Session springen…';
    sel.innerHTML = '<option value="">' + esc(placeholder) + '</option>';
    topicList.forEach(function(entry, idx){
      var opt = document.createElement('option');
      opt.value = idx;
      var entryTitle = (lang === 'en' && entry.title_en) ? entry.title_en : entry.title;
      var label = entryTitle.length > 70 ? entryTitle.slice(0, 67) + '…' : entryTitle;
      opt.textContent = label;
      sel.appendChild(opt);
    });
  }
  document.getElementById('topicJump').addEventListener('change', function(){
    var idx = this.value;
    if(idx === '') return;
    jumpToEntry(topicList[idx]);
  });

  // ---------- Mittagessen ----------
  var lunchTypes = ['Alle'].concat(Array.from(new Set(DATA.lunch.map(function(l){ return l.typ; }))));
  var currentLunchFilter = 'Alle';
  var typeEnMap = {};
  DATA.lunch.forEach(function(l){ typeEnMap[l.typ] = l.typ_en; });

  function renderLunchFilters(){
    var wrap = document.getElementById('lunchFilters');
    wrap.innerHTML = '';
    var allLabel = lang === 'en' ? 'All' : 'Alle';
    lunchTypes.forEach(function(typ){
      var displayLabel = typ === 'Alle' ? allLabel : (lang === 'en' ? (typeEnMap[typ] || typ) : typ);
      var chip = document.createElement('div');
      chip.className = 'filter-chip' + (typ === currentLunchFilter ? ' active' : '');
      chip.textContent = displayLabel;
      chip.addEventListener('click', function(){
        currentLunchFilter = typ;
        renderLunchFilters();
        renderLunchList();
      });
      wrap.appendChild(chip);
    });
  }

  function renderLunchList(){
    var list = document.getElementById('lunchList');
    list.innerHTML = '';
    var items = DATA.lunch.filter(function(l){
      return currentLunchFilter === 'Alle' || l.typ === currentLunchFilter;
    }).slice().sort(function(a,b){ return a.distM - b.distM; });

    items.forEach(function(l){
      var card = document.createElement('div');
      card.className = 'card';
      var typDisplay = lang === 'en' ? l.typ_en : l.typ;
      var noteDisplay = lang === 'en' ? l.note_en : l.note;
      var mapsUrl = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(l.name + ', ' + (l.address||''));
      var isCafe = l.name === "Gerdan's Café";
      card.innerHTML =
        '<div class="lunch-card">' +
          '<div style="flex:1;min-width:0;">' +
            '<div class="lunch-name' + (isCafe ? ' room-link' : '') + '"' + (isCafe ? ' data-fp-room="cafe"' : '') + '>' + esc(l.name) + '</div>' +
            '<div class="lunch-meta">' + esc(typDisplay) + (l.hours ? ' · ' + esc(l.hours) : '') + '</div>' +
            '<div class="lunch-meta">' + esc(l.address || '') + '</div>' +
            (noteDisplay ? '<div class="lunch-note">' + esc(noteDisplay) + '</div>' : '') +
          '</div>' +
          '<div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px;">' +
            (l.lat != null && l.lng != null ? '<button class="poster-icon-btn" data-lunch-lat="' + l.lat + '" data-lunch-lng="' + l.lng + '" aria-label="' + esc(t('showOnMapLabel')) + '" title="' + esc(t('showOnMapLabel')) + '"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg></button>' : '') +
            '<div class="lunch-dist">' + l.distMin + ' ' + t('min') + '<br>' + l.distM + ' m</div>' +
          '</div>' +
        '</div>' +
        '<div class="lunch-links">' +
          '<a class="pill-link" href="' + mapsUrl + '" target="_blank" rel="noopener">' + t('openMaps') + '</a>' +
          (l.link ? '<a class="pill-link" href="' + esc(l.link) + '" target="_blank" rel="noopener">' + t('website') + '</a>' : '') +
          (l.phone ? '<a class="pill-link" href="tel:' + esc(l.phone.replace(/\s+/g,'')) + '">' + esc(l.phone) + '</a>' : '') +
        '</div>';
      list.appendChild(card);
      if(isCafe){
        card.querySelector('.lunch-name').addEventListener('click', function(){
          openFloorplanLightbox(['cafe']);
        });
      }
    });
  }

  // ---------- Lunch map view ----------
  var lunchMapInstance = null;
  var lunchMapLoaded = false;

  function initLunchMap(){
    if(lunchMapLoaded || typeof L === 'undefined') return;
    lunchMapLoaded = true;
    var venue = DATA.venue;
    lunchMapInstance = L.map('lunchMap').setView([venue.lat, venue.lng], 16);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
      maxZoom: 19
    }).addTo(lunchMapInstance);

    var venueIcon = L.divIcon({
      className: '', html:
        '<div style="position:relative;width:36px;height:36px;">' +
          '<div class="venue-pulse"></div>' +
          '<div style="position:relative;background:#003d73;color:#fff;border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:18px;border:3px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,.45);">&#127963;</div>' +
        '</div>',
      iconSize: [36,36], iconAnchor: [18,18]
    });
    L.marker([venue.lat, venue.lng], { icon: venueIcon, zIndexOffset: 1000 }).addTo(lunchMapInstance)
      .bindPopup('<strong>' + esc(venue.name) + '</strong>')
      .bindTooltip(venue.name, { permanent: true, direction: 'top', offset: [0, -18], className: 'venue-tooltip' });

    var lunchIcon = L.divIcon({
      className: '', html: '<div style="background:#1d6f5c;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-size:12px;border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,.4);">&#127869;</div>',
      iconSize: [24,24], iconAnchor: [12,12]
    });

    DATA.lunch.forEach(function(l){
      if(l.lat == null || l.lng == null) return;
      var typDisplay = lang === 'en' ? l.typ_en : l.typ;
      var popupHtml = '<strong>' + esc(l.name) + '</strong><br>' + esc(typDisplay) + (l.hours ? ' · ' + esc(l.hours) : '') + '<br>' + l.distMin + ' ' + t('min') + ' · ' + l.distM + ' m';
      L.marker([l.lat, l.lng], { icon: lunchIcon }).addTo(lunchMapInstance).bindPopup(popupHtml);
    });

    if(venue.socialVenue){
      var sv = venue.socialVenue;
      var socialIcon = L.divIcon({
        className: '', html:
          '<div style="position:relative;width:34px;height:34px;">' +
            '<div class="venue-pulse" style="background:rgba(155,89,20,.35);"></div>' +
            '<div style="position:relative;background:#9b5914;color:#fff;border-radius:50%;width:34px;height:34px;display:flex;align-items:center;justify-content:center;font-size:16px;border:3px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,.45);">&#127925;</div>' +
          '</div>',
        iconSize: [34,34], iconAnchor: [17,17]
      });
      L.marker([sv.lat, sv.lng], { icon: socialIcon, zIndexOffset: 900 }).addTo(lunchMapInstance)
        .bindPopup('<strong>' + esc(sv.name) + '</strong><br>' + esc(sv.address) + '<br>' + (lang === 'en' ? 'Conference Dinner' : 'Gesellschaftsabend'))
        .bindTooltip(sv.name + (lang === 'en' ? ' (Conference Dinner)' : ' (Gesellschaftsabend)'), { direction: 'top', offset: [0, -17], className: 'venue-tooltip social-tooltip' });
    }

    if(venue.preEveningVenue){
      var pv = venue.preEveningVenue;
      var preEveningIcon = L.divIcon({
        className: '', html:
          '<div style="position:relative;width:34px;height:34px;">' +
            '<div class="venue-pulse" style="background:rgba(29,111,92,.35);"></div>' +
            '<div style="position:relative;background:#1d6f5c;color:#fff;border-radius:50%;width:34px;height:34px;display:flex;align-items:center;justify-content:center;font-size:16px;border:3px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,.45);">&#127860;</div>' +
          '</div>',
        iconSize: [34,34], iconAnchor: [17,17]
      });
      L.marker([pv.lat, pv.lng], { icon: preEveningIcon, zIndexOffset: 900 }).addTo(lunchMapInstance)
        .bindPopup('<strong>' + esc(pv.name) + '</strong><br>' + esc(pv.address) + '<br>' + (lang === 'en' ? 'Pre-conference get-together' : 'Vorabendtreff'))
        .bindTooltip(pv.name + (lang === 'en' ? ' (Pre-conference get-together)' : ' (Vorabendtreff)'), { direction: 'top', offset: [0, -17], className: 'venue-tooltip social-tooltip' });
    }

    if(venue.earlyCareerVenue){
      var ecv = venue.earlyCareerVenue;
      var earlyCareerIcon = L.divIcon({
        className: '', html:
          '<div style="position:relative;width:34px;height:34px;">' +
            '<div class="venue-pulse" style="background:rgba(122,166,44,.35);"></div>' +
            '<div style="position:relative;background:#7aa62c;color:#fff;border-radius:50%;width:34px;height:34px;display:flex;align-items:center;justify-content:center;font-size:16px;border:3px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,.45);">&#127881;</div>' +
          '</div>',
        iconSize: [34,34], iconAnchor: [17,17]
      });
      L.marker([ecv.lat, ecv.lng], { icon: earlyCareerIcon, zIndexOffset: 900 }).addTo(lunchMapInstance)
        .bindPopup('<strong>' + esc(ecv.name) + '</strong><br>' + esc(ecv.address) + '<br>' + (lang === 'en' ? 'Early Career Meetup' : 'Early Career Meetup'))
        .bindTooltip(ecv.name + ' (Early Career Meetup)', { direction: 'top', offset: [0, -17], className: 'venue-tooltip social-tooltip' });
    }
  }

  function setLunchView(mode){
    var listBtn = document.getElementById('lunchViewListBtn');
    var mapBtn = document.getElementById('lunchViewMapBtn');
    var listEl = document.getElementById('lunchList');
    var mapEl = document.getElementById('lunchMap');
    var filtersEl = document.getElementById('lunchFilters');
    listBtn.classList.toggle('active', mode === 'list');
    mapBtn.classList.toggle('active', mode === 'map');
    listEl.style.display = mode === 'list' ? '' : 'none';
    filtersEl.style.display = mode === 'list' ? '' : 'none';
    mapEl.style.display = mode === 'map' ? 'block' : 'none';
    if(mode === 'map'){
      initLunchMap();
      setTimeout(function(){ if(lunchMapInstance) lunchMapInstance.invalidateSize(); }, 100);
    }
  }
  document.getElementById('lunchViewListBtn').addEventListener('click', function(){ setLunchView('list'); });
  document.getElementById('lunchViewMapBtn').addEventListener('click', function(){ setLunchView('map'); });

  // ---------- Exkursionen ----------
  var expandedExk = {};

  function renderExkursionen(){
    var list = document.getElementById('exkList');
    list.innerHTML = '';
    var leitungLabel = lang === 'en' ? 'Lead:' : 'Leitung:';
    var meetingLabel = lang === 'en' ? 'Meeting point:' : 'Treffpunkt:';
    DATA.exkursionen.forEach(function(e){
      var card = document.createElement('div');
      card.className = 'card';
      card.id = 'exk-' + e.id;
      var title = lang === 'en' ? e.title_en : e.title;
      var day = lang === 'en' ? e.day_en : e.day;
      var time = lang === 'en' ? e.time_en : e.time;
      var cost = lang === 'en' ? e.cost_en : e.cost;
      var meetingPoint = lang === 'en' ? (e.meetingPoint_en || e.meetingPoint) : e.meetingPoint;
      var hasDetails = !!e.details;
      var isOpen = !!expandedExk[e.id];

      var header = document.createElement('div');
      header.className = 'exk-header';
      header.innerHTML =
        '<div style="flex:1;min-width:0;">' +
          '<div class="exk-title">' + esc(e.id) + ': ' + esc(title) + '</div>' +
          '<div class="exk-meta">' + esc(day) + ' · ' + esc(time) + '</div>' +
          '<div class="exk-meta">' + leitungLabel + ' ' + esc(e.leader) + '</div>' +
          (meetingPoint ? '<span class="badge-meeting">' + esc(meetingLabel) + ' ' + esc(meetingPoint) + '</span>' : '') +
          '<span class="badge-cost">' + esc(cost) + '</span>' +
        '</div>' +
        '<div style="display:flex;align-items:flex-start;gap:4px;">' +
          posterIconBtn(e) +
          (hasDetails ? '<div class="chevron' + (isOpen ? ' open' : '') + '" title="' + esc(isOpen ? t('hideDetailsLabel') : t('showDetailsLabel')) + '">&#9656;</div>' : '') +
        '</div>';
      card.appendChild(header);

      if(hasDetails){
        header.style.cursor = 'pointer';
        header.addEventListener('click', function(ev){
          if(ev.target.closest('.poster-icon-btn')) return;
          var wasOpen = !!expandedExk[e.id];
          expandedExk = {};
          if(!wasOpen){ expandedExk[e.id] = true; }
          renderExkursionen();
        });
      }

      if(hasDetails && isOpen){
        var box = document.createElement('div');
        box.className = 'abstract-box';
        var detailsText = (lang === 'en' ? e.details_en : e.details) || '';
        var html = '';
        if(detailsText){
          html += detailsText.split('\n\n').map(function(p){ return '<p class="exk-detail-p">' + esc(p) + '</p>'; }).join('');
        }
        box.innerHTML = html;
        card.appendChild(box);
      }

      list.appendChild(card);
    });
  }

  // ---------- Tagungsort ----------
  function renderVenue(){
    var v = DATA.venue;
    var box = document.getElementById('venueBox');
    var oepnv = lang === 'en' ? v.oepnv_en : v.oepnv;
    box.innerHTML =
      '<div class="card">' +
        '<div class="card-section-heading">' + t('venueCardTitle') + '</div>' +
        '<div class="lunch-name">' + esc(v.name) + '</div>' +
        '<div class="lunch-meta" style="margin-top:6px;">' + esc(v.address) + '</div>' +
        '<a class="venue-map-link" href="' + esc(v.maps) + '" target="_blank" rel="noopener">' + t('openMaps') + '</a>' +
        '<div class="lunch-meta"><strong style="color:var(--text)">' + t('oepnvLabel') + '</strong> ' + esc(oepnv) + '</div>' +
        '<a class="venue-map-link" href="https://sbahn.berlin/liniennetz/" target="_blank" rel="noopener" style="display:flex;align-items:center;justify-content:center;gap:8px;margin-top:10px;">' +
          '<img src="logo_sbahn.svg" alt="" style="width:20px;height:20px;flex-shrink:0;">' +
          '<span>' + t('sbahnMapLink') + '</span>' +
        '</a>' +
      '</div>' +
      '<div class="card" id="officeCardLink">' +
        '<div style="display:flex;justify-content:space-between;align-items:center;gap:10px;margin-bottom:10px;">' +
          '<div class="card-section-heading" style="margin:0;">' + t('officeCardTitle') + '</div>' +
          '<button class="poster-icon-btn" id="officeCardPin" aria-label="' + esc(t('showOnMapLabel')) + '" title="' + esc(t('showOnMapLabel')) + '">' +
            '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>' +
          '</button>' +
        '</div>' +
        '<div class="lunch-meta"><strong style="color:var(--text)">' + t('officeContact') + '</strong> Dr. Hildegard Feldmann (F&U confirm)</div>' +
        '<div class="lunch-meta" style="margin-top:6px;"><strong style="color:var(--text)">' + t('officeHours') + '</strong></div>' +
        '<div class="lunch-meta">' + t('officeHoursMo') + '</div>' +
        '<div class="lunch-meta">' + t('officeHoursDi') + '</div>' +
        '<div class="lunch-meta">' + t('officeHoursMi') + '</div>' +
        '<div class="lunch-meta">' + t('officeHoursDo') + '</div>' +
        '<div class="lunch-meta">' + t('officeHoursFr') + '</div>' +
      '</div>' +
      '<div class="card">' +
        '<div class="card-section-heading">' + t('wlanCardTitle') + '</div>' +
        '<div style="font-size:15px;margin-bottom:6px;">' +
          '<strong style="color:var(--text);">' + esc(t('wlanMainName')) + '</strong>' +
          '<span class="lunch-meta"> – ' + esc(t('wlanMainNote')) + '</span>' +
        '</div>' +
        '<div class="lunch-meta" style="font-size:12.5px;">' + esc(t('wlanEduroamNote')) + '</div>' +
      '</div>' +
      '<div class="card">' +
        '<div class="card-section-heading">' + t('presentersCardTitle') + '</div>' +
        '<div style="margin-top:4px;">' +
          '<div class="lunch-meta" style="font-weight:600;color:var(--text);margin-bottom:12px;">' + t('presentersHowTo') + '</div>' +
          '<div style="display:flex;gap:10px;margin-bottom:12px;">' +
            '<div style="flex-shrink:0;width:22px;height:22px;border-radius:50%;background:var(--bg-accent, #e6f1fb);color:var(--text-accent, #185fa5);font-size:12px;font-weight:500;display:flex;align-items:center;justify-content:center;">1</div>' +
            '<div class="lunch-meta" style="margin:0;"><strong style="color:var(--text);font-weight:500;">' + t('presentersStep1Title') + '</strong> ' + t('presentersStep1Text') + '</div>' +
          '</div>' +
          '<div style="display:flex;gap:10px;margin-bottom:12px;">' +
            '<div style="flex-shrink:0;width:22px;height:22px;border-radius:50%;background:var(--bg-accent, #e6f1fb);color:var(--text-accent, #185fa5);font-size:12px;font-weight:500;display:flex;align-items:center;justify-content:center;">2</div>' +
            '<div class="lunch-meta" style="margin:0;"><strong style="color:var(--text);font-weight:500;">' + t('presentersStep2Title') + '</strong> ' + t('presentersStep2Text') + '</div>' +
          '</div>' +
          '<div style="display:flex;gap:10px;margin-bottom:12px;">' +
            '<div style="flex-shrink:0;width:22px;height:22px;border-radius:50%;background:var(--bg-accent, #e6f1fb);color:var(--text-accent, #185fa5);font-size:12px;font-weight:500;display:flex;align-items:center;justify-content:center;">3</div>' +
            '<div class="lunch-meta" style="margin:0;"><strong style="color:var(--text);font-weight:500;">' + t('presentersStep3Title') + '</strong> ' + t('presentersStep3Text') + '</div>' +
          '</div>' +
          '<div class="lunch-meta" style="margin-bottom:10px;color:#a4283f;font-weight:600;">' + t('presentersFormatWarning') + '</div>' +
          '<label class="filter-label" for="presenterLastName">' + t('presentersLastName') + '</label>' +
          '<input type="text" id="presenterLastName" class="search-input" autocomplete="off" style="margin-top:4px;margin-bottom:6px;" placeholder="' + t('presentersLastNamePlaceholder') + '">' +
          '<div id="presenterResultsList"></div>' +
          '<div id="presenterNotFound" class="lunch-meta" style="display:none;color:var(--text-muted);">' + t('presentersNotFound') + '</div>' +
          '<div id="presenterFilenameBox" style="display:none;margin-top:10px;">' +
            '<div class="lunch-meta"><strong style="color:var(--text)">' + t('presentersFilename') + '</strong></div>' +
            '<div style="display:flex;gap:8px;align-items:center;margin-top:4px;">' +
              '<code id="presenterFilenameOutput" style="flex:1;padding:8px 10px;background:var(--card);border:1px solid var(--border);border-radius:8px;word-break:break-all;"></code>' +
              '<button class="btn-secondary" id="presenterCopyBtn" style="white-space:nowrap;">' + t('presentersCopy') + '</button>' +
            '</div>' +
            '<input type="file" id="presenterFileInput" accept=".pptx,.pdf,.ppt" style="display:none;">' +
            '<button class="btn-secondary" id="presenterRenameBtn" style="width:100%;margin-top:6px;">' + t('presentersRenameBtn') + '</button>' +
          '</div>' +
        '</div>' +
        (presenterUploadUrl ? '<a class="venue-map-link" id="presenterUploadLinkMain" href="' + esc(presenterUploadUrl) + '" target="_blank" rel="noopener" style="margin-top:12px;opacity:0.4;pointer-events:none;" aria-disabled="true">' + t('presentersUploadLink') + '</a>' : '') +
      '</div>' +
      '<div class="card">' +
        '<div class="card-section-heading">' + t('posterPreisTitle') + '</div>' +
        '<div class="lunch-meta" style="margin-top:8px;white-space:pre-line;">' + esc(t('posterPreisText')) + '</div>' +
      '</div>' +
      '<div class="card">' +
        '<div class="card-section-heading">' + t('feedbackTitle') + '</div>' +
        '<div class="lunch-meta" style="margin-top:8px;margin-bottom:12px;">' + esc(t('feedbackText')) + '</div>' +
        '<form id="feedbackForm">' +
          '<input type="hidden" name="access_key" value="d34663c6-e472-4cea-b82f-700382995963">' +
          '<input type="hidden" name="subject" value="Feedback DGL 2026 Tagungsführer">' +
          '<input type="checkbox" name="botcheck" style="display:none;" tabindex="-1" autocomplete="off">' +
          '<textarea name="message" id="feedbackMessage" required rows="4" placeholder="' + esc(t('feedbackPlaceholder')) + '" style="width:100%;box-sizing:border-box;border:1px solid var(--border);border-radius:10px;padding:10px 12px;font:inherit;font-size:14px;resize:vertical;"></textarea>' +
          '<button type="submit" id="feedbackSubmitBtn" style="margin-top:10px;background:var(--accent);color:#fff;border:none;border-radius:10px;padding:10px 18px;font-size:14px;font-weight:600;cursor:pointer;">' + esc(t('feedbackSend')) + '</button>' +
          '<div id="feedbackStatus" style="margin-top:8px;font-size:13px;"></div>' +
        '</form>' +
      '</div>' +
      '<div class="card social-card">' +
        '<div class="card-section-heading">' + t('followUs') + '</div>' +
        '<div class="social-links">' +
          '<a class="social-link" href="https://www.instagram.com/dgl_ev/" target="_blank" rel="noopener">' +
            '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>' +
            '<span>Instagram</span>' +
          '</a>' +
          '<a class="social-link" href="https://www.linkedin.com/company/deutsche-gesellschaft-f-r-limnologie/" target="_blank" rel="noopener">' +
            '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/></svg>' +
            '<span>LinkedIn</span>' +
          '</a>' +
          '<a class="social-link" href="https://bsky.app/profile/dgl-ev.bsky.social" target="_blank" rel="noopener">' +
            '<svg viewBox="0 0 16 16" width="20" height="20" fill="currentColor"><path d="M3.468 1.948C5.303 3.325 7.276 6.118 8 7.616c.725-1.498 2.698-4.29 4.532-5.668C13.855.955 16 .186 16 2.632c0 .489-.28 4.105-.444 4.692-.572 2.04-2.653 2.561-4.504 2.246 3.236.551 4.06 2.375 2.281 4.2-3.376 3.464-4.852-.87-5.23-1.98-.07-.204-.103-.3-.103-.218 0-.081-.033.014-.102.218-.379 1.11-1.855 5.444-5.231 1.98-1.778-1.825-.955-3.65 2.28-4.2-1.85.315-3.932-.205-4.503-2.246C.28 6.737 0 3.12 0 2.632 0 .186 2.145.955 3.468 1.948"/></svg>' +
            '<span>BlueSky</span>' +
          '</a>' +
        '</div>' +
        '<div style="margin-top:10px;font-size:13px;color:var(--text-muted);">' + t('hashtagLabel') + ' <strong style="color:var(--text);">#dgl2026</strong></div>' +
      '</div>' +
      '<div class="card">' +
        '<div class="card-section-heading">' + t('organizersLabel') + '</div>' +
        '<div class="org-links">' +
          '<a class="org-link" href="https://dgl-jahrestagungen.de/" target="_blank" rel="noopener">' +
            '<img src="logo_dgl.png" alt="DGL">' +
          '</a>' +
          '<a class="org-link" href="https://watersciencealliance.org/wrch" target="_blank" rel="noopener">' +
            '<img src="logo_wsa.jpg" alt="Water Science Alliance">' +
          '</a>' +
          '<a class="org-link" href="https://www.igb-berlin.de/" target="_blank" rel="noopener">' +
            '<img src="logo_igb.png" alt="IGB">' +
          '</a>' +
          '<a class="org-link" href="https://www.hu-berlin.de/" target="_blank" rel="noopener">' +
            '<img src="logo_hu_berlin.png" alt="HU Berlin">' +
          '</a>' +
        '</div>' +
      '</div>' +
      '<div class="card">' +
        '<div class="session-header" id="impressumHeader" style="cursor:pointer;display:flex;justify-content:space-between;align-items:center;">' +
          '<div class="card-section-heading" style="margin:0;">' + t('impressumTitle') + '</div>' +
          '<div class="chevron" id="impressumChevron" title="' + esc(t('showDetailsLabel')) + '">&#9656;</div>' +
        '</div>' +
        '<div id="impressumBody" style="display:none;margin-top:10px;">' +
          '<div class="lunch-meta" style="white-space:pre-line;line-height:1.6;">' + t('impressumText') + '</div>' +
        '</div>' +
      '</div>' +
      '<div class="card">' +
        '<div class="session-header" id="datenschutzHeader" style="cursor:pointer;display:flex;justify-content:space-between;align-items:center;">' +
          '<div class="card-section-heading" style="margin:0;">' + t('datenschutzTitle') + '</div>' +
          '<div class="chevron" id="datenschutzChevron" title="' + esc(t('showDetailsLabel')) + '">&#9656;</div>' +
        '</div>' +
        '<div id="datenschutzBody" style="display:none;margin-top:10px;">' +
          '<div class="lunch-meta" style="white-space:pre-line;line-height:1.6;">' + t('datenschutzText') + '</div>' +
        '</div>' +
      '</div>';
    document.getElementById('officeCardPin').addEventListener('click', function(ev){
      ev.stopPropagation();
      openFloorplanLightbox(['tagungsbuero']);
    });
    document.getElementById('impressumHeader').addEventListener('click', function(){
      var body = document.getElementById('impressumBody');
      var chevron = document.getElementById('impressumChevron');
      var isOpen = body.style.display !== 'none';
      body.style.display = isOpen ? 'none' : 'block';
      chevron.classList.toggle('open', !isOpen);
    });
    document.getElementById('datenschutzHeader').addEventListener('click', function(){
      var body = document.getElementById('datenschutzBody');
      var chevron = document.getElementById('datenschutzChevron');
      var isOpen = body.style.display !== 'none';
      body.style.display = isOpen ? 'none' : 'block';
      chevron.classList.toggle('open', !isOpen);
    });
    document.getElementById('feedbackForm').addEventListener('submit', function(ev){
      ev.preventDefault();
      var form = ev.target;
      var statusEl = document.getElementById('feedbackStatus');
      var submitBtn = document.getElementById('feedbackSubmitBtn');
      var messageField = document.getElementById('feedbackMessage');
      if(!messageField.value.trim()) return;
      submitBtn.disabled = true;
      statusEl.style.color = '';
      statusEl.textContent = t('feedbackSending');
      var formData = new FormData(form);
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData
      }).then(function(res){ return res.json(); }).then(function(data){
        submitBtn.disabled = false;
        if(data.success){
          statusEl.style.color = 'var(--accent)';
          statusEl.textContent = t('feedbackSuccess');
          form.reset();
        } else {
          statusEl.style.color = '#c0392b';
          statusEl.textContent = t('feedbackError');
        }
      }).catch(function(){
        submitBtn.disabled = false;
        statusEl.style.color = '#c0392b';
        statusEl.textContent = t('feedbackError');
      });
    });
    setupPresenterForm();
  }

  function setupPresenterForm(){
    var nameInput = document.getElementById('presenterLastName');
    if(!nameInput) return;
    var resultsList = document.getElementById('presenterResultsList');
    var notFoundBox = document.getElementById('presenterNotFound');
    var filenameBox = document.getElementById('presenterFilenameBox');

    var postersessionDayByNumber = {};
    DATA.programm.forEach(function(day){
      day.blocks.forEach(function(block){
        if(block.type === 'info' && block.title === 'Postersession 1') postersessionDayByNumber['1'] = day.label;
        if(block.type === 'info' && block.title === 'Postersession 2') postersessionDayByNumber['2'] = day.label;
      });
    });
    var allEntries = [];
    DATA.programm.forEach(function(day){
      day.blocks.forEach(function(block){
        if(block.type === 'parallel'){
          block.sessions.forEach(function(s){
            if(s.posters && s.posters.length){
              var psNumber = s.title === 'Postersession 1 – Speed Talks' ? '1' : (s.title === 'Postersession 2 – Speed Talks' ? '2' : null);
              var psActualDay = (psNumber && postersessionDayByNumber[psNumber]) || day.label;
              s.posters.forEach(function(p, pIdx){
                var firstAuthor = (p.authorsDisplay || '').split(' — ')[0].split(',')[0].trim();
                if(!firstAuthor) return;
                var words = firstAuthor.split(/\s+/).filter(Boolean);
                var lastName = stripLeadingInitials(words).join(' ') || words[words.length-1];
                var orderNum = String(pIdx + 1).padStart(2, '0');
                allEntries.push({ type: 'poster', lastName: lastName, code: p.code, orderNum: orderNum, psNumber: psNumber || '?', title: p.title, dayLabel: psActualDay });
              });
              return;
            }
            if(!s.code || s.code === 'WRHC') return;
            (s.talks || []).forEach(function(talk){
              var firstAuthor = (talk.authors || '').split(' — ')[0].split(',')[0].trim();
              if(!firstAuthor) return;
              var words = firstAuthor.split(/\s+/).filter(Boolean);
              // Award-nominee entries are authored with a full "First Last" name
              // (not the "F. Last" initial format used for regular co-authors).
              // stripLeadingInitials only strips genuine initials, so it leaves
              // a full first name untouched — take the last word instead for
              // the filename surname; show the full name in the program/search.
              // Multi-word surnames can't be told apart from a middle name by
              // that "last word" rule, so known cases are listed explicitly.
              var isFullNameFormat = (s.code === 'Preisvortrag' || s.code === 'Plenarvortrag');
              var multiWordSurnames = { 'Iris Madge Pimentel': 'Madge Pimentel' };
              var surnameOnly = isFullNameFormat ? (multiWordSurnames[firstAuthor] || words[words.length-1]) : (stripLeadingInitials(words).join(' ') || words[words.length-1]);
              allEntries.push({ type: 'talk', lastName: isFullNameFormat ? firstAuthor : surnameOnly, filenameName: surnameOnly, code: s.code, title: talk.title, dayLabel: day.label, time: talk.time });
            });
          });
        } else if(block.type === 'info' && block.isPlenary && block.tag === 'Plenarvortrag'){
          var words = (block.title || '').trim().split(/\s+/).filter(Boolean);
          if(!words.length) return;
          var surname = words[words.length - 1];
          var timeMatch = /(\d{1,2}:\d{2})/.exec(block.time || '');
          // Same idea as above: plenary blocks are titled with the speaker's
          // full name — show that in full, file under the surname only.
          allEntries.push({ type: 'plenary', lastName: block.title, filenameName: surname, title: block.title, dayLabel: day.label, time: timeMatch ? timeMatch[1] : (block.time || '') });
        } else if(block.type === 'info' && SPECIAL_NO_PRESENTER_BLOCKS[block.title]){
          // Events with no individual presenter to search by (ceremonies,
          // assemblies, opening/closing) — each gets its own search
          // keyword(s) and upload key instead of a surname.
          var special = SPECIAL_NO_PRESENTER_BLOCKS[block.title];
          var specialTimeMatch = /(\d{1,2}:\d{2})/.exec(block.time || '');
          allEntries.push({
            type: 'special', lastName: special.keywords, displayName: special.displayName, uploadKey: day.label + '_' + special.keySuffix,
            filenameLabel: special.filenameLabel, title: (lang === 'en') ? (special.titleEn || block.title_en || block.title) : (special.titleDe || block.title), dayLabel: day.label,
            time: specialTimeMatch ? specialTimeMatch[1] : (block.time || '')
          });
        }
      });
    });

    function buildFilename(entry){
      var cleanName = stripAccents(expandUmlauts(entry.filenameName || entry.lastName)).replace(/\s+/g, ' ').trim();
      if(entry.type === 'poster'){
        return entry.orderNum + '_' + cleanName + '_' + entry.dayLabel;
      }
      if(entry.type === 'plenary'){
        var plenaryTimeSlug = entry.time.replace(':', '');
        return plenaryTimeSlug + '_' + cleanName + '_Plenar_' + entry.dayLabel;
      }
      if(entry.type === 'special'){
        var specialTimeSlug = entry.time.replace(':', '');
        return specialTimeSlug + '_' + entry.filenameLabel + '_' + entry.dayLabel;
      }
      var timeSlug = entry.time.replace(':', '');
      var codeSlug = entry.code.replace(/\//g, '_');
      return timeSlug + '_' + cleanName + '_' + codeSlug + '_' + entry.dayLabel;
    }

    // A few sessions use an upload-folder key that doesn't match their
    // session code one-to-one (the code is an internal programme label,
    // the folder is named for what presenters actually recognize).
    var UPLOAD_KEY_CODE_OVERRIDE = { 'Preisvortrag': 'Nachwuchspreis' };

    function uploadKeyForEntry(entry){
      if(entry.type === 'poster') return 'Postersession_' + entry.psNumber;
      if(entry.type === 'plenary') return entry.dayLabel + '_Plenar';
      if(entry.type === 'special') return entry.uploadKey;
      var codeForKey = UPLOAD_KEY_CODE_OVERRIDE[entry.code] || entry.code;
      return entry.dayLabel + '_' + (codeForKey || '').replace(/\//g, '_');
    }

    function setUploadLinkEnabled(enabled){
      var linkEl = document.getElementById('presenterUploadLinkMain');
      if(!linkEl) return;
      if(enabled){
        linkEl.style.opacity = '';
        linkEl.style.pointerEvents = '';
        linkEl.removeAttribute('aria-disabled');
      } else {
        linkEl.style.opacity = '0.4';
        linkEl.style.pointerEvents = 'none';
        linkEl.setAttribute('aria-disabled', 'true');
      }
    }

    function selectEntry(entry){
      nameInput.value = entry.displayName || entry.lastName;
      resultsList.innerHTML = '';
      document.getElementById('presenterFilenameOutput').textContent = buildFilename(entry);
      filenameBox.style.display = '';
      notFoundBox.style.display = 'none';
      var key = uploadKeyForEntry(entry);
      var matchedUrl = presenterUploadLinks[key] || presenterUploadLinks['_unsortiert'] || '';
      var linkEl = document.getElementById('presenterUploadLinkMain');
      if(linkEl && matchedUrl) linkEl.setAttribute('href', matchedUrl);
      setUploadLinkEnabled(true);
    }

    nameInput.addEventListener('input', function(){
      resultsList.innerHTML = '';
      notFoundBox.style.display = 'none';
      filenameBox.style.display = 'none';
      setUploadLinkEnabled(false);
      var typed = normalizeForSearch(nameInput.value.trim().toLowerCase());
      if(!typed) return;
      var matches = allEntries.filter(function(e){
        var normName = normalizeForSearch(e.lastName.toLowerCase());
        if(normName.indexOf(typed) === 0) return true;
        return normName.split(/\s+/).some(function(w){ return w.indexOf(typed) === 0; });
      });
      if(!matches.length){
        notFoundBox.style.display = '';
        return;
      }
      matches.slice(0, 15).forEach(function(entry){
        var row = document.createElement('div');
        row.className = 'presenter-result-row';
        var label = entry.type === 'poster'
          ? (entry.lastName + ', Postersession ' + entry.psNumber + ', Speed Talk Nr. ' + entry.orderNum + ', Poster ' + entry.code + ', ' + entry.dayLabel + ', ' + entry.title.slice(0, 40) + '…')
          : entry.type === 'plenary'
          ? (entry.lastName + ', Plenarvortrag, ' + entry.dayLabel + ' ' + entry.time + ' Uhr, ' + entry.title.slice(0, 40))
          : entry.type === 'special'
          ? (entry.title.slice(0, 50) + ', ' + entry.dayLabel + ' ' + entry.time + ' Uhr')
          : (entry.lastName + ', ' + entry.code + ', ' + entry.dayLabel + ' ' + entry.time + ' Uhr, ' + entry.title.slice(0, 40) + '…');
        row.textContent = label;
        row.addEventListener('click', function(){
          selectEntry(entry);
        });
        resultsList.appendChild(row);
      });
    });

    var copyBtn = document.getElementById('presenterCopyBtn');
    if(copyBtn){
      copyBtn.addEventListener('click', function(){
        var text = document.getElementById('presenterFilenameOutput').textContent;
        if(navigator.clipboard && navigator.clipboard.writeText){
          navigator.clipboard.writeText(text).then(function(){
            showToast(t('presentersCopied'));
          }).catch(function(){});
        }
      });
    }

    var renameBtn = document.getElementById('presenterRenameBtn');
    var fileInput = document.getElementById('presenterFileInput');
    if(renameBtn && fileInput){
      renameBtn.addEventListener('click', function(){
        fileInput.click();
      });
      fileInput.addEventListener('change', function(){
        var file = fileInput.files && fileInput.files[0];
        if(!file) return;
        var baseName = document.getElementById('presenterFilenameOutput').textContent.replace(/\.pptx$/i, '');
        var origExt = (file.name.match(/\.[^.]+$/) || ['.pptx'])[0];
        var finalName = baseName + origExt;
        var url = URL.createObjectURL(file);
        var a = document.createElement('a');
        a.href = url;
        a.download = finalName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(function(){ URL.revokeObjectURL(url); }, 2000);
        showToast(t('presentersRenamed').replace('{name}', finalName));
        fileInput.value = '';
      });
    }
  }

  // ---------- Mein Plan ----------
  function computeNextUp(){
    var now = nowDate();
    var candidates = [];
    plan.forEach(function(item){
      var r = blockDateRange(item.dayId, item.time);
      if(r && r.start > now){ candidates.push({ item: item, start: r.start }); }
    });
    candidates.sort(function(a,b){ return a.start - b.start; });
    return candidates[0];
  }

  function findJumpTargetForPlanItem(item){
    return searchIndex.find(function(entry){
      return entry.dayId === item.dayId && (entry.jumpId === item.id || entry.sid === item.id);
    }) || null;
  }
  function renderNextUp(){
    var box = document.getElementById('nextUpBox');
    var next = computeNextUp();
    if(!next){ box.innerHTML = ''; return; }
    var now = nowDate();
    var diffMin = Math.round((next.start - now) / 60000);
    if(diffMin > 15){ box.innerHTML = ''; return; }
    var whenText = lang === 'en' ? ('in ' + diffMin + ' min') : ('in ' + diffMin + ' Min');
    var roomClickable = next.item.room && !!FLOORPLAN_ROOM_MAP[next.item.room];
    box.innerHTML =
      '<div class="next-up-card" id="nextUpCard">' +
        '<div class="next-up-label">' + t('nextUp') + '</div>' +
        '<div class="next-up-title">' + esc(next.item.title) + '</div>' +
        '<div class="next-up-meta">' + esc(whenText) + (next.item.room ? ' · <span class="' + (roomClickable ? 'room-link' : '') + '" id="nextUpCardRoom">' + esc(next.item.room) + '</span>' : '') + '</div>' +
      '</div>';
    var cardEl = document.getElementById('nextUpCard');
    cardEl.style.cursor = 'pointer';
    cardEl.addEventListener('click', function(){
      var target = findJumpTargetForPlanItem(next.item);
      if(target){
        switchToView('programm');
        jumpToEntry(target);
      }
    });
    if(roomClickable){
      document.getElementById('nextUpCardRoom').addEventListener('click', function(ev){
        ev.stopPropagation();
        showFloorplanRoom(next.item.room);
      });
    }
  }

  function conflictLabel(item){
    var baseTitle = item.title;
    if(item.code && baseTitle.indexOf(item.code + ' · ') === 0){
      baseTitle = baseTitle.slice((item.code + ' · ').length);
    }
    return item.code ? (baseTitle + ' (' + item.code + ')') : baseTitle;
  }

  var currentPlanDay = (function(){
    var todayDay = DATA.programm.find(function(d){ return isToday(d.id); });
    return (todayDay || DATA.programm[0]).id;
  })();
  function renderPlanListDayTabs(){
    var wrap = document.getElementById('planListDayTabs');
    wrap.innerHTML = '';
    DATA.programm.forEach(function(dayObj){
      var b = document.createElement('div');
      b.className = 'day-tab' + (currentPlanDay === dayObj.id ? ' active' : '');
      var dayLabel = lang === 'en' ? dayObj.label_en : dayObj.label;
      var dayNum = dayObj.date.split('.')[0];
      var dateLabel = lang === 'en' ? (dayNum + ordinalSuffix(parseInt(dayNum,10))) : (dayNum + '.');
      b.textContent = dayLabel + ' ' + dateLabel;
      b.addEventListener('click', function(){
        currentPlanDay = dayObj.id;
        renderPlanListDayTabs();
        renderPlanTimelineDayTabs();
        renderPlan();
      });
      wrap.appendChild(b);
    });
  }

  function renderPlan(){
    var clearBtn = document.getElementById('clearPlanBtn');
    if(clearBtn) clearBtn.disabled = plan.length === 0;
    renderNextUp();
    renderPlanListDayTabs();
    var box = document.getElementById('planList');
    box.innerHTML = '';
    var visiblePlan = plan.filter(function(p){ return p.dayId === currentPlanDay; });
    if(plan.length === 0){
      box.innerHTML = '<div class="empty-state">' + t('planEmpty') + '</div>';
      renderPlanTimelineDayTabs();
      renderPlanTimeline();
      return;
    }
    if(visiblePlan.length === 0){
      box.innerHTML = '<div class="empty-state">' + t('planEmpty') + '</div>';
    }
    var byDay = {};
    visiblePlan.forEach(function(p){
      byDay[p.dayId] = byDay[p.dayId] || { label: p.dayLabel, date: p.date, items: [] };
      byDay[p.dayId].items.push(p);
    });
    var order = DATA.programm.map(function(d){ return d.id; });
    order.forEach(function(dayId){
      if(!byDay[dayId]) return;
      var group = byDay[dayId];
      var dayObj = DATA.programm.find(function(d){ return d.id === dayId; });
      var dayLabel = (lang === 'en' && dayObj) ? dayObj.label_en : (dayObj ? dayObj.label : group.label);
      group.items.sort(function(a,b){ return a.time.localeCompare(b.time); });

      // Detect time conflicts within this day
      var ranges = group.items.map(function(it){ return parseTimeRangeMinutes(it.time); });
      var conflicts = group.items.map(function(){ return []; });
      for(var i = 0; i < group.items.length; i++){
        if(group.items[i].isPoster) continue;
        for(var j = 0; j < group.items.length; j++){
          if(i === j || group.items[j].isPoster) continue;
          var ra = ranges[i], rb = ranges[j];
          if(ra && rb && ra.start < rb.end && rb.start < ra.end){
            conflicts[i].push(conflictLabel(group.items[j]));
          }
        }
      }

      group.items.forEach(function(item, idx){
       try {
        var card = document.createElement('div');
        card.className = 'card' + (item.authors ? '' : ' plan-card-block');
        var hasDetails = !!(item.abstract || item.bio);
        var isOpen = !!expandedPlanItems[item.id];
        var roomClickable = item.room && FLOORPLAN_ROOM_MAP[item.room];
        var mainDiv = document.createElement('div');
        mainDiv.style.display = 'flex';
        mainDiv.style.justifyContent = 'space-between';
        mainDiv.style.alignItems = 'flex-start';
        mainDiv.style.gap = '10px';
        if(hasDetails) mainDiv.style.cursor = 'pointer';
        mainDiv.innerHTML =
            '<div style="flex:1;min-width:0;">' +
              '<div class="block-time">' + esc(item.time) + (item.room ? ' · <span class="' + (roomClickable ? 'room-link' : '') + '" data-room="' + esc(item.room) + '">' + esc(item.room) + '</span>' : '') + '</div>' +
              '<div class="block-title">' + (item.isPoster ? '<span class="session-tag">' + t('posterListLabel') + '</span> ' : '') + esc(item.title) + '</div>' +
              (item.subtitle ? '<div class="block-subtitle">' + (item.authors ? renderAuthorsHtml(item.authors) + esc(item.subtitle.slice(item.authors.length)) : esc(item.subtitle)) + '</div>' : '') +
            '</div>' +
            '<div class="session-btns">' +
              '<button class="remove-btn" data-id="' + item.id + '" title="' + esc(t('removeFromPlanLabel')) + '" aria-label="' + esc(t('removeFromPlanLabel')) + '">&times;</button>' +
              (hasDetails ? '<div class="chevron' + (isOpen ? ' open' : '') + '" title="' + esc(isOpen ? t('hideDetailsLabel') : t('showDetailsLabel')) + '">&#9656;</div>' : '') +
            '</div>';
        card.appendChild(mainDiv);
        if(conflicts[idx].length){
          var confDiv = document.createElement('div');
          confDiv.className = 'plan-conflict';
          confDiv.textContent = '⚠ ' + t('planConflict') + ' ' + conflicts[idx].join(', ');
          card.appendChild(confDiv);
        }
        if(roomClickable){
          mainDiv.querySelector('.room-link').addEventListener('click', function(ev){
            ev.stopPropagation();
            showFloorplanRoom(item.room);
          });
        }
        mainDiv.querySelectorAll('.author-link').forEach(function(el){
          el.addEventListener('click', function(ev){
            ev.stopPropagation();
            searchForAuthor(el.getAttribute('data-author'), 'plan');
          });
        });
        mainDiv.querySelector('.remove-btn').addEventListener('click', function(ev){
          ev.stopPropagation();
          togglePlan(item);
          renderPlan();
        });
        if(hasDetails){
          mainDiv.addEventListener('click', function(ev){
            if(ev.target.closest('.remove-btn') || ev.target.closest('.room-link') || ev.target.closest('.author-link')) return;
            var wasOpen = !!expandedPlanItems[item.id];
            expandedPlanItems = {};
            if(!wasOpen){ expandedPlanItems[item.id] = true; }
            renderPlan();
          });
          if(isOpen){
            if(item.abstract){
              appendAbstractWithKeynote(card, item.abstract);
            }
            if(item.bio){
              var bioHeading = document.createElement('div');
              bioHeading.className = 'bio-heading';
              bioHeading.textContent = t('aboutSpeaker');
              card.appendChild(bioHeading);
              var bioP = document.createElement('div');
              bioP.className = 'abstract-box';
              bioP.textContent = item.bio;
              card.appendChild(bioP);
            }
          }
        }
        box.appendChild(card);
       } catch(e){
        console.warn('Skipped rendering a broken plan item:', item, e);
       }
      });
    });
    renderPlanTimelineDayTabs();
    renderPlanTimeline();
  }

  // ---------- Plan timeline view ----------
  var PT_START_HOUR = 9;
  var PT_END_HOUR = 20;
  var PT_PX_PER_MIN = 2.6;

  var currentPlanViewMode = 'list';
  function setPlanView(mode){
    currentPlanViewMode = mode;
    document.getElementById('planViewListBtn').classList.toggle('active', mode === 'list');
    document.getElementById('planViewTimelineBtn').classList.toggle('active', mode === 'timeline');
    document.getElementById('planList').style.display = mode === 'list' ? '' : 'none';
    document.getElementById('planListDayTabs').style.display = mode === 'list' ? '' : 'none';
    document.getElementById('planTimelineWrap').style.display = mode === 'timeline' ? '' : 'none';
    if(mode === 'timeline'){ renderPlanTimelineDayTabs(); renderPlanTimeline(); }
    else { renderPlan(); }
  }
  document.getElementById('planViewListBtn').addEventListener('click', function(){ setPlanView('list'); });
  document.getElementById('planViewTimelineBtn').addEventListener('click', function(){ setPlanView('timeline'); });

  function planDaysWithItems(){
    var order = DATA.programm.map(function(d){ return d.id; });
    var present = {};
    plan.forEach(function(p){ present[p.dayId] = true; });
    return order.filter(function(id){ return present[id]; });
  }

  function renderPlanTimelineDayTabs(){
    var wrap = document.getElementById('planTimelineDayTabs');
    wrap.innerHTML = '';
    var days = DATA.programm.map(function(d){ return d.id; });
    days.forEach(function(dayId){
      var dayObj = DATA.programm.find(function(d){ return d.id === dayId; });
      var b = document.createElement('div');
      b.className = 'day-tab' + (dayId === currentPlanDay ? ' active' : '');
      var dayLabel = lang === 'en' ? dayObj.label_en : dayObj.label;
      var dayNum = dayObj.date.split('.')[0];
      var dateLabel = lang === 'en' ? (dayNum + ordinalSuffix(parseInt(dayNum,10))) : (dayNum + '.');
      b.textContent = dayLabel + ' ' + dateLabel;
      b.addEventListener('click', function(){
        currentPlanDay = dayId;
        renderPlanListDayTabs();
        renderPlanTimelineDayTabs();
        renderPlanTimeline();
      });
      wrap.appendChild(b);
    });
  }

  function computeOverlapLayout(items){
    var sorted = items.slice().sort(function(a,b){ return a._start - b._start; });
    var result = [];
    var clusterItems = [];
    var clusterEnd = -1;

    function flushCluster(){
      if(!clusterItems.length) return;
      var columns = [];
      clusterItems.forEach(function(it){
        var placed = false;
        for(var c=0;c<columns.length;c++){
          if(columns[c] <= it._start){
            columns[c] = it._end;
            it._col = c;
            placed = true;
            break;
          }
        }
        if(!placed){
          columns.push(it._end);
          it._col = columns.length-1;
        }
      });
      clusterItems.forEach(function(it){ it._totalCols = columns.length; });
      clusterItems = [];
    }

    sorted.forEach(function(it){
      if(clusterItems.length && it._start >= clusterEnd){
        flushCluster();
        clusterEnd = -1;
      }
      clusterItems.push(it);
      clusterEnd = Math.max(clusterEnd, it._end);
    });
    flushCluster();
    return sorted;
  }

  function formatAuthorsCompact(authorsStr){
    if(!authorsStr) return '';
    var namesPart = authorsStr.split(' — ')[0];
    var names = namesPart.split(/,\s*/).filter(Boolean);
    if(!names.length) return '';
    return names[0];
  }

  function abbreviateAuthorName(authorsStr){
    if(!authorsStr) return '';
    var namesPart = authorsStr.split(' — ')[0];
    var firstAuthor = (namesPart.split(/,\s*/)[0] || '').trim();
    var words = firstAuthor.split(/\s+/).filter(Boolean);
    if(words.length < 2) return firstAuthor;
    var last = words[words.length - 1];
    var first = words[0];
    return first.charAt(0) + '. ' + last;
  }

  function renderPlanTimeline(){
    var container = document.getElementById('planTimeline');
    container.innerHTML = '';
    var PT_TOP_OFFSET = 12;
    var totalMin = (PT_END_HOUR - PT_START_HOUR) * 60;
    container.style.height = (totalMin * PT_PX_PER_MIN + PT_TOP_OFFSET + 10) + 'px';

    var totalQuarters = (PT_END_HOUR - PT_START_HOUR) * 4;
    for(var q = 0; q <= totalQuarters; q++){
      var minFromStart = q * 15;
      var y = minFromStart * PT_PX_PER_MIN + PT_TOP_OFFSET;
      var isHour = (minFromStart % 60) === 0;
      var line = document.createElement('div');
      line.className = 'pt-hour-line' + (isHour ? ' pt-hour-line-full' : ' pt-hour-line-quarter');
      line.style.top = y + 'px';
      container.appendChild(line);
      if(isHour){
        var h = PT_START_HOUR + minFromStart/60;
        var label = document.createElement('div');
        label.className = 'pt-hour-label';
        label.style.top = y + 'px';
        label.textContent = (h < 10 ? '0'+h : h) + ':00';
        container.appendChild(label);
      }
    }

    if(!currentPlanDay) return;
    var dayItemsRaw = plan.filter(function(p){ return p.dayId === currentPlanDay; });
    var posterGroups = {};
    var dayItems = [];
    dayItemsRaw.forEach(function(p){
      if(p.isPoster){
        (posterGroups[p.time] = posterGroups[p.time] || []).push(p);
      } else {
        dayItems.push(p);
      }
    });
    Object.keys(posterGroups).forEach(function(time){
      dayItems.push({
        id: 'postergroup_' + time,
        time: time,
        title: (lang === 'en' ? 'Poster session' : 'Postersession'),
        _isPosterGroup: true,
        _posters: posterGroups[time]
      });
    });

    var dayObj = DATA.programm.find(function(d){ return d.id === currentPlanDay; });
    if(dayObj){
      dayObj.blocks.forEach(function(block, blockIdx){
        if(block.type === 'info' && block.noPlan){
          var fixedTitle = (lang === 'en' && block.title_en) ? block.title_en : block.title;
          var displayTime = block.time;
          if(block.time.indexOf('–') === -1){
            var ownStart = parseTimeRangeMinutes(block.time);
            if(ownStart){
              for(var nj = blockIdx+1; nj < dayObj.blocks.length; nj++){
                var nextRange = parseTimeRangeMinutes(dayObj.blocks[nj].time);
                if(nextRange && nextRange.start > ownStart.start){
                  displayTime = block.time + ' – ' + minutesToHHMM(nextRange.start);
                  break;
                }
              }
            }
          }
          var breakIcon = '';
          if(block.title === 'Kaffeepause') breakIcon = '☕ ';
          else if(block.title === 'Mittagspause') breakIcon = '🍽 ';
          else if(block.title === 'Anmeldung') breakIcon = '📋 ';
          dayItems.push({
            id: 'fixed_' + block.time + '_' + block.title,
            time: displayTime, title: breakIcon + fixedTitle, subtitle: '', room: '',
            _fixed: true,
            _linkView: block.linkView || null,
            _linkExk: block.linkExk || null,
            _linkFloorplan: block.linkFloorplan || null
          });
        }
      });
    }

    var laidOut = dayItems.map(function(p){
      var range = parseTimeRangeMinutes(p.time);
      var start = range ? range.start : PT_START_HOUR*60;
      var end = range ? range.end : start+45;
      return { item: p, _start: start, _end: end };
    });
    laidOut = computeOverlapLayout(laidOut);

    // conflict flags (reuse simple pairwise overlap check, ignore fixed break blocks)
    var conflictIds = {};
    for(var i=0;i<laidOut.length;i++){
      if(laidOut[i].item._fixed || laidOut[i].item._isPosterGroup) continue;
      for(var j=0;j<laidOut.length;j++){
        if(i===j || laidOut[j].item._fixed || laidOut[j].item._isPosterGroup) continue;
        if(laidOut[i]._start < laidOut[j]._end && laidOut[j]._start < laidOut[i]._end){
          conflictIds[laidOut[i].item.id] = true;
        }
      }
    }

    laidOut.forEach(function(entry){
      var p = entry.item;
      var top = Math.max(0, (entry._start - PT_START_HOUR*60)) * PT_PX_PER_MIN + PT_TOP_OFFSET;
      var colFrac = entry._col / entry._totalCols;
      var widthFrac = 1 / entry._totalCols;
      var el = document.createElement('div');

      if(p._isPosterGroup){
        var lineHeight = 15;
        var groupHeight = Math.max(38, 20 + p._posters.length * lineHeight);
        el.className = 'pt-item pt-item-block';
        el.style.top = top + 'px';
        el.style.height = groupHeight + 'px';
        el.style.left = 'calc(44px + (100% - 44px) * ' + colFrac + ')';
        el.style.width = 'calc((100% - 44px) * ' + widthFrac + ' - 4px)';
        var posterLines = p._posters.map(function(poster, pidx){
          var boardText = poster.subtitle ? poster.subtitle.split(' · ').slice(2).join(' · ') : '';
          return '<div class="pt-poster-line" data-poster-idx="' + pidx + '">' + esc(abbreviateAuthorName(poster.authors)) + (boardText ? ' <span class="pt-item-room">' + esc(boardText) + '</span>' : '') + '</div>';
        }).join('');
        el.innerHTML =
          '<div class="pt-item-time">' + esc(p.time) + ' · ' + esc(p.title) + '</div>' +
          posterLines;
        el.querySelectorAll('.pt-poster-line').forEach(function(lineEl, pidx){
          lineEl.style.cursor = 'pointer';
          lineEl.addEventListener('click', function(ev){
            ev.stopPropagation();
            openPlanItemDetail(p._posters[pidx]);
          });
        });
        container.appendChild(el);
        return;
      }

      var height = Math.max(38, (entry._end - entry._start) * PT_PX_PER_MIN - 2);
      el.className = 'pt-item' + (conflictIds[p.id] ? ' pt-conflict' : '') + (p._fixed ? ' pt-fixed' : (!p.authors ? ' pt-item-block' : ''));
      el.style.top = top + 'px';
      el.style.height = height + 'px';
      el.style.left = 'calc(44px + (100% - 44px) * ' + colFrac + ')';
      el.style.width = 'calc((100% - 44px) * ' + widthFrac + ' - 4px)';
      var displayPtTime = (p.authors && !p._fixed) ? p.time.split(' – ')[0] : p.time;
      var secondLine;
      if(p._fixed){
        secondLine = esc(p.title);
      } else if(p.authors){
        secondLine = esc(formatAuthorsCompact(p.authors));
      } else {
        secondLine = esc(p.title);
      }
      el.innerHTML =
        '<div class="pt-item-time">' + esc(displayPtTime) + (p.room ? ' <span class="pt-item-room">· ' + esc(p.room) + '</span>' : '') + '</div>' +
        '<div class="pt-item-title">' + secondLine + '</div>';
      if(!p._fixed){
        el.addEventListener('click', function(){
          openPlanItemDetail(p);
        });
      } else if(p._linkView || p._linkExk || p._linkFloorplan){
        el.style.cursor = 'pointer';
        el.addEventListener('click', function(){
          if(p._linkFloorplan){
            openFloorplanLightbox([p._linkFloorplan]);
          } else if(p._linkView){
            saveNavBackState('plan');
            switchToView(p._linkView);
          } else if(p._linkExk){
            saveNavBackState('plan');
            switchToView('exkursionen');
            expandedExk = {};
            expandedExk[p._linkExk] = true;
            renderExkursionen();
            setTimeout(function(){
              var exkEl = document.getElementById('exk-' + p._linkExk);
              if(exkEl) exkEl.scrollIntoView({behavior:'smooth', block:'start'});
            }, 50);
          }
        });
      }
      container.appendChild(el);
    });
  }

  function abstractHtmlWithKeynote(text){
    if(!text) return '';
    var m = /^(Keynote:[^\n]*)\n\n([\s\S]*)$/.exec(text);
    if(m){
      return '<div class="keynote-box">' + esc(m[1]) + '</div>' + (m[2] ? '<div class="abstract-box" style="margin-top:10px;">' + esc(m[2]) + '</div>' : '');
    }
    return '<div class="abstract-box" style="margin-top:10px;">' + esc(text) + '</div>';
  }

  function openPlanItemDetail(item){
    var roomClickable = item.room && FLOORPLAN_ROOM_MAP[item.room];
    var content = document.getElementById('planItemOverlayContent');
    content.innerHTML =
      '<div class="block-time">' + esc(item.time) + (item.room ? ' · <span' + (roomClickable ? ' class="room-link" id="ptDetailRoom"' : '') + '>' + esc(item.room) + '</span>' : '') + '</div>' +
      '<div class="block-title" style="margin-top:4px;">' + esc(item.title) + '</div>' +
      (item.subtitle ? '<div class="block-subtitle">' + (item.authors ? renderAuthorsHtml(item.authors) + esc(item.subtitle.slice(item.authors.length)) : esc(item.subtitle)) + '</div>' : '') +
      abstractHtmlWithKeynote(item.abstract) +
      (item.bio ? '<div class="bio-heading">' + t('aboutSpeaker') + '</div><div class="abstract-box">' + esc(item.bio) + '</div>' : '');
    if(roomClickable){
      document.getElementById('ptDetailRoom').addEventListener('click', function(){
        showFloorplanRoom(item.room);
      });
    }
    content.querySelectorAll('.author-link').forEach(function(el){
      el.addEventListener('click', function(){
        document.getElementById('planItemOverlay').style.display = 'none';
        searchForAuthor(el.getAttribute('data-author'), 'plan');
      });
    });
    document.getElementById('planItemOverlay').style.display = 'flex';
  }
  document.getElementById('planItemOverlayCloseBtn').addEventListener('click', function(){
    document.getElementById('planItemOverlay').style.display = 'none';
  });

  function showToast(msg){
    var el = document.createElement('div');
    el.className = 'toast';
    el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(function(){ el.remove(); }, 2500);
  }

  function buildPlanShareUrl(){
    // Plain comma-separated pids directly in the URL — no JSON wrapper, no
    // base64. Both add real overhead (base64 alone is +33%, plus its +/=
    // characters then need percent-encoding on top) for something that's
    // fundamentally just a short list of small numbers and doesn't need
    // obfuscating. This is the biggest lever left for keeping the QR code
    // scannable once a plan has many items.
    var compact = plan.map(function(item){ return pidForItem(item); }).filter(Boolean);
    return location.origin + location.pathname + '#plan=' + compact.join(',');
  }

  document.getElementById('exportMenuToggle').addEventListener('click', function(){
    var menu = document.getElementById('exportMenu');
    var chevron = document.getElementById('exportMenuChevron');
    var open = menu.style.display === 'block';
    menu.style.display = open ? 'none' : 'block';
    chevron.style.transform = open ? 'rotate(0deg)' : 'rotate(180deg)';
    this.setAttribute('aria-expanded', String(!open));
  });
  document.addEventListener('click', function(ev){
    var menu = document.getElementById('exportMenu');
    var toggle = document.getElementById('exportMenuToggle');
    if(menu.style.display === 'block' && !menu.contains(ev.target) && ev.target !== toggle && !toggle.contains(ev.target)){
      menu.style.display = 'none';
      document.getElementById('exportMenuChevron').style.transform = 'rotate(0deg)';
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
  function closeExportMenu(){
    document.getElementById('exportMenu').style.display = 'none';
    document.getElementById('exportMenuChevron').style.transform = 'rotate(0deg)';
    document.getElementById('exportMenuToggle').setAttribute('aria-expanded', 'false');
  }

  document.getElementById('sharePlanBtn').addEventListener('click', function(){
    if(plan.length === 0){ alert(t('exportEmptyAlert')); return; }
    closeExportMenu();
    var shareUrl = buildPlanShareUrl();
    var shareTitle = lang === 'en' ? 'My DGL 2026 Plan' : 'Mein DGL-2026-Plan';
    if(navigator.share){
      navigator.share({ title: shareTitle, url: shareUrl }).catch(function(){});
    } else if(navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(shareUrl).then(function(){
        showToast(t('linkCopied'));
      }).catch(function(){
        prompt(t('copyManually'), shareUrl);
      });
    } else {
      prompt(t('copyManually'), shareUrl);
    }
  });

  document.getElementById('qrPlanBtn').addEventListener('click', function(){
    if(plan.length === 0){ alert(t('exportEmptyAlert')); return; }
    closeExportMenu();
    function generate(){
      var shareUrl = buildPlanShareUrl();
      var wrap = document.getElementById('qrPlanCanvasWrap');
      wrap.innerHTML = '';
      try{
        new QRCode(wrap, { text: shareUrl, width: 240, height: 240, correctLevel: QRCode.CorrectLevel.L });
      }catch(e){
        // Very large plans (many saved items) can exceed a QR code's data
        // capacity entirely. Retry once with the lowest error-correction
        // level (squeezes in more data), and if that still overflows, tell
        // the person plainly instead of leaving a blank box.
        wrap.innerHTML = '';
        try{
          new QRCode(wrap, { text: shareUrl, width: 240, height: 240, correctLevel: QRCode.CorrectLevel.L });
        }catch(e2){
          wrap.innerHTML = '<div class="lunch-meta" style="max-width:240px;">' + t('qrTooLarge') + '</div>';
        }
      }
      document.getElementById('qrPlanOverlay').style.display = 'flex';
    }
    if(typeof QRCode === 'undefined'){
      // The CDN script can still be mid-flight on a slow connection even
      // though the page itself has loaded — give it one short retry before
      // reporting a real failure, and use a QR-specific message (not the
      // PDF one) so the alert actually names the right thing.
      setTimeout(function(){
        if(typeof QRCode === 'undefined'){
          alert(t('qrLibError'));
        } else {
          generate();
        }
      }, 800);
      return;
    }
    generate();
  });

  document.getElementById('qrPlanCloseBtn').addEventListener('click', function(){
    document.getElementById('qrPlanOverlay').style.display = 'none';
  });
  document.getElementById('qrPlanOverlay').addEventListener('click', function(ev){
    if(ev.target.id === 'qrPlanOverlay') document.getElementById('qrPlanOverlay').style.display = 'none';
  });

  document.getElementById('posterLightboxCloseBtn').addEventListener('click', function(){
    document.getElementById('posterLightboxOverlay').style.display = 'none';
  });
  document.getElementById('posterLightboxOverlay').addEventListener('click', function(ev){
    if(ev.target.id === 'posterLightboxOverlay') document.getElementById('posterLightboxOverlay').style.display = 'none';
  });

  // "Show on map" for Vorabendtreff/Gesellschaftsabend — jumps to the
  // Mittagessen tab's map view and centres/opens the popup for that venue.
  function jumpToVenueOnMap(venueKey){
    saveNavBackState('programm');
    switchToView('lunch');
    setLunchView('map');
    setTimeout(function(){
      if(!lunchMapInstance) return;
      var venue = DATA.venue;
      var v = venueKey === 'social' ? venue.socialVenue : (venueKey === 'earlyCareer' ? venue.earlyCareerVenue : venue.preEveningVenue);
      if(!v) return;
      lunchMapInstance.closePopup();
      lunchMapInstance.invalidateSize();
      lunchMapInstance.setView([v.lat, v.lng], 17, { animate: false });
      lunchMapInstance.eachLayer(function(layer){
        if(layer.getLatLng && layer.getPopup && Math.abs(layer.getLatLng().lat - v.lat) < 1e-6 && Math.abs(layer.getLatLng().lng - v.lng) < 1e-6){
          layer.openPopup();
        }
      });
    }, 200);
  }
  function jumpToLunchOnMap(lat, lng){
    saveNavBackState('lunch');
    setLunchView('map');
    setTimeout(function(){
      if(!lunchMapInstance) return;
      lunchMapInstance.closePopup();
      lunchMapInstance.invalidateSize();
      lunchMapInstance.setView([lat, lng], 17, { animate: false });
      lunchMapInstance.eachLayer(function(layer){
        if(layer.getLatLng && layer.getPopup && Math.abs(layer.getLatLng().lat - lat) < 1e-6 && Math.abs(layer.getLatLng().lng - lng) < 1e-6){
          layer.openPopup();
        }
      });
    }, 200);
  }
  document.addEventListener('click', function(ev){
    var mapBtn = ev.target.closest && ev.target.closest('[data-venue]');
    if(mapBtn){
      ev.stopPropagation();
      jumpToVenueOnMap(mapBtn.getAttribute('data-venue'));
      return;
    }
    var lunchBtn = ev.target.closest && ev.target.closest('[data-lunch-lat]');
    if(lunchBtn){
      ev.stopPropagation();
      jumpToLunchOnMap(parseFloat(lunchBtn.getAttribute('data-lunch-lat')), parseFloat(lunchBtn.getAttribute('data-lunch-lng')));
    }
  });

  // ---------- Poster lightbox pinch-zoom (mirrors the floor plan zoom
  // above, but with its own state so that working code stays untouched) ----------
  var pzState = { scale: 1, tx: 0, ty: 0, pointers: {} };
  var pzGesture = null;
  function pzApplyTransform(){
    var content = document.getElementById('posterZoomContent');
    content.style.transform = 'translate3d(' + pzState.tx + 'px,' + pzState.ty + 'px,0) scale(' + pzState.scale + ')';
  }
  function pzResetZoom(){
    pzState.scale = 1; pzState.tx = 0; pzState.ty = 0;
    pzGesture = null;
    pzApplyTransform();
  }
  function pzStartGesture(midX, midY, dist){
    var content = document.getElementById('posterZoomContent');
    var rect = content.getBoundingClientRect();
    pzGesture = {
      flexLeft: rect.left - pzState.tx,
      flexTop: rect.top - pzState.ty,
      anchorLx: (midX - rect.left) / pzState.scale,
      anchorLy: (midY - rect.top) / pzState.scale,
      startScale: pzState.scale,
      startDist: dist
    };
  }
  function pzUpdateGesture(midX, midY, dist){
    if(!pzGesture) return;
    var newScale = Math.min(6, Math.max(1, pzGesture.startScale * (dist / pzGesture.startDist)));
    pzState.scale = newScale;
    pzState.tx = midX - pzGesture.flexLeft - newScale * pzGesture.anchorLx;
    pzState.ty = midY - pzGesture.flexTop - newScale * pzGesture.anchorLy;
    pzApplyTransform();
  }
  function pzZoomAt(clientX, clientY, newScale){
    newScale = Math.min(6, Math.max(1, newScale));
    var content = document.getElementById('posterZoomContent');
    var rect = content.getBoundingClientRect();
    var flexLeft = rect.left - pzState.tx;
    var flexTop = rect.top - pzState.ty;
    var anchorLx = (clientX - rect.left) / pzState.scale;
    var anchorLy = (clientY - rect.top) / pzState.scale;
    pzState.scale = newScale;
    pzState.tx = clientX - flexLeft - newScale * anchorLx;
    pzState.ty = clientY - flexTop - newScale * anchorLy;
    pzApplyTransform();
  }
  (function initPosterZoom(){
    var container = document.getElementById('posterZoomContainer');
    container.style.touchAction = 'none';
    container.addEventListener('pointerdown', function(e){
      e.preventDefault();
      container.setPointerCapture(e.pointerId);
      pzState.pointers[e.pointerId] = { x: e.clientX, y: e.clientY };
      if(Object.keys(pzState.pointers).length === 2){
        pzGesture = null;
      }
    });
    container.addEventListener('pointermove', function(e){
      if(!pzState.pointers[e.pointerId]) return;
      e.preventDefault();
      var prev = pzState.pointers[e.pointerId];
      pzState.pointers[e.pointerId] = { x: e.clientX, y: e.clientY };
      var ids = Object.keys(pzState.pointers);
      if(ids.length === 1){
        pzState.tx += e.clientX - prev.x;
        pzState.ty += e.clientY - prev.y;
        pzApplyTransform();
      } else if(ids.length === 2){
        var p1 = pzState.pointers[ids[0]], p2 = pzState.pointers[ids[1]];
        var dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
        var mid = { x: (p1.x + p2.x) / 2, y: (p1.y + p2.y) / 2 };
        if(!pzGesture){
          pzStartGesture(mid.x, mid.y, dist);
        } else {
          pzUpdateGesture(mid.x, mid.y, dist);
        }
      }
    });
    function releasePointer(e){
      delete pzState.pointers[e.pointerId];
      pzGesture = null;
    }
    container.addEventListener('pointerup', releasePointer);
    container.addEventListener('pointercancel', releasePointer);
    container.addEventListener('wheel', function(e){
      e.preventDefault();
      pzZoomAt(e.clientX, e.clientY, pzState.scale - e.deltaY * 0.0015 * pzState.scale);
    }, { passive: false });
  })();

  // Poster lightbox — delegated on document since poster-icon-btn elements
  // get created fresh on every renderProgrammList() call, so a listener
  // attached once here keeps working after re-renders without re-binding.
  function fitPosterLightboxImg(){
    var img = document.getElementById('posterLightboxImg');
    var maxW = window.innerWidth * 0.92;
    var maxH = window.innerHeight * 0.88;
    img.style.maxWidth = maxW + 'px';
    img.style.maxHeight = maxH + 'px';
  }
  window.addEventListener('resize', function(){
    if(document.getElementById('posterLightboxOverlay').style.display !== 'none'){
      fitPosterLightboxImg();
    }
  });

  document.addEventListener('click', function(ev){
    var btn = ev.target.closest && ev.target.closest('[data-poster]');
    if(btn){
      ev.stopPropagation();
      var src = btn.getAttribute('data-poster');
      var img = document.getElementById('posterLightboxImg');
      img.src = src;
      fitPosterLightboxImg();
      pzResetZoom();
      document.getElementById('posterLightboxOverlay').style.display = 'flex';
    }
  });

  // Route details popup — same delegated-click pattern as the poster
  // lightbox, since route-icon buttons also get recreated on every render.
  document.addEventListener('click', function(ev){
    var routeBtn = ev.target.closest && ev.target.closest('[data-route-title]');
    if(routeBtn){
      ev.stopPropagation();
      var routeTitle = routeBtn.getAttribute('data-route-title');
      var found = null;
      DATA.programm.forEach(function(day){
        day.blocks.forEach(function(b){
          if(b.title === routeTitle) found = b;
        });
      });
      if(found){
        var html = lang === 'en' ? (found.routeDetails_en || found.routeDetails) : (found.routeDetails || found.routeDetails_en);
        document.getElementById('routeOverlayContent').innerHTML = html;
        document.getElementById('routeOverlay').style.display = 'flex';
      }
    }
  });
  document.getElementById('routeOverlayCloseBtn').addEventListener('click', function(){
    document.getElementById('routeOverlay').style.display = 'none';
  });
  document.getElementById('routeOverlay').addEventListener('click', function(ev){
    if(ev.target.id === 'routeOverlay') document.getElementById('routeOverlay').style.display = 'none';
  });

  // Practical info popup — same delegated-click pattern
  document.addEventListener('click', function(ev){
    var piBtn = ev.target.closest && ev.target.closest('[data-practical-title]');
    if(piBtn){
      ev.stopPropagation();
      var piTitle = piBtn.getAttribute('data-practical-title');
      var found = null;
      DATA.programm.forEach(function(day){
        day.blocks.forEach(function(b){
          if(b.title === piTitle) found = b;
        });
      });
      if(found){
        var text = lang === 'en' ? (found.practicalInfo_en || found.practicalInfo_de) : (found.practicalInfo_de || found.practicalInfo_en);
        var textHtml = esc(text);
        if(found.langschlendererUrl){
          textHtml = textHtml.replace('Langschlenderer', '<a href="' + esc(found.langschlendererUrl) + '" target="_blank" rel="noopener" style="color:var(--accent);">Langschlenderer ↗</a>');
        }
        document.getElementById('practicalInfoOverlayContent').innerHTML =
          '<div style="font-size:16px;font-weight:500;margin-bottom:14px;">' + esc(t('practicalInfoLabel')) + '</div>' +
          '<div style="font-size:14px;line-height:2;white-space:pre-line;">' + textHtml + '</div>';
        document.getElementById('practicalInfoOverlay').style.display = 'flex';
      }
    }
  });
  document.getElementById('practicalInfoOverlayCloseBtn').addEventListener('click', function(){
    document.getElementById('practicalInfoOverlay').style.display = 'none';
  });
  document.getElementById('practicalInfoOverlay').addEventListener('click', function(ev){
    if(ev.target.id === 'practicalInfoOverlay') document.getElementById('practicalInfoOverlay').style.display = 'none';
  });

  document.getElementById('exportPlanBtn').addEventListener('click', function(){
    if(plan.length === 0){ alert(t('exportEmptyAlert')); return; }
    closeExportMenu();
    var lines = ['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//DGL 2026//Tagungsfuehrer//DE'];
    plan.forEach(function(item){
      var d = dateForDay(item.dayId);
      var timeStr = parseStartTime(item.time);
      lines.push('BEGIN:VEVENT');
      lines.push('DTSTART:' + d + 'T' + timeStr + '00');
      lines.push('SUMMARY:' + item.title.replace(/,/g,'\\,'));
      lines.push('LOCATION:' + (item.room || '').replace(/,/g,'\\,'));
      lines.push('DESCRIPTION:' + (item.subtitle || '').replace(/,/g,'\\,'));
      lines.push('END:VEVENT');
    });
    lines.push('END:VCALENDAR');
    var blob = new Blob([lines.join('\r\n')], {type:'text/calendar'});
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'mein-dgl-2026-plan.ics';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });

  document.getElementById('clearPlanBtn').addEventListener('click', function(){
    if(plan.length === 0){ alert(t('clearPlanEmptyAlert')); return; }
    if(confirm(t('clearPlanConfirm'))){
      plan = [];
      savePlan(plan);
      render();
      renderPlan();
    }
  });

  function loadImageAsDataURL(url){
    return fetch(url).then(function(r){
      if(!r.ok) throw new Error('logo fetch failed');
      return r.blob();
    }).then(function(blob){
      return new Promise(function(resolve, reject){
        var reader = new FileReader();
        reader.onload = function(){ resolve(reader.result); };
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
    });
  }

  document.getElementById('exportPlanPdfBtn').addEventListener('click', function(){
    if(plan.length === 0){ alert(t('exportEmptyAlert')); return; }
    closeExportMenu();
    if(typeof window.jspdf === 'undefined'){ alert(t('pdfLibError')); return; }

    loadImageAsDataURL('logo_pdf.png').then(function(dataUrl){
      generatePlanPdf(dataUrl);
    }).catch(function(){
      generatePlanPdf(null);
    });
  });

  function generatePlanPdf(logoDataUrl){
    var jsPDF = window.jspdf.jsPDF;
    var doc = new jsPDF({ unit: 'mm', format: 'a4' });
    var pageWidth = doc.internal.pageSize.getWidth();
    var pageHeight = doc.internal.pageSize.getHeight();
    var margin = 16;
    var y = margin;
    var maxWidth = pageWidth - margin * 2;

    function ensureSpace(neededMm){
      if(y + neededMm > pageHeight - margin){
        doc.addPage();
        y = margin;
      }
    }

    if(logoDataUrl){
      // Logo spans the full content width as its own header band; the
      // aspect ratio of the source PNG (2000x658) determines its height.
      var logoW = maxWidth;
      var logoH = logoW * (658 / 2000);
      doc.addImage(logoDataUrl, 'PNG', margin, y, logoW, logoH);
      y += logoH + 6;
    }

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.text(t('pdfPlanTitle'), margin, y);
    y += 8;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(120);
    doc.text(t('pdfGeneratedOn') + ' ' + new Date().toLocaleDateString(lang === 'en' ? 'en-GB' : 'de-DE'), margin, y);
    doc.setTextColor(0);
    y += 10;

    var dayOrder = {};
    DATA.programm.forEach(function(d, idx){ dayOrder[d.id] = idx; });
    var sorted = plan.slice().sort(function(a, b){
      var da = dayOrder[a.dayId] !== undefined ? dayOrder[a.dayId] : 999;
      var db = dayOrder[b.dayId] !== undefined ? dayOrder[b.dayId] : 999;
      if(da !== db) return da - db;
      return (a.time || '').localeCompare(b.time || '');
    });

    var lastDayId = null;
    sorted.forEach(function(item){
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10.5);
      var titleLines = doc.splitTextToSize(item.title || '', maxWidth);
      var subLines = item.subtitle ? doc.splitTextToSize(item.subtitle, maxWidth) : [];

      if(item.dayId !== lastDayId){
        lastDayId = item.dayId;
        ensureSpace(14);
        y += 4;
        doc.setDrawColor(210);
        doc.line(margin, y, pageWidth - margin, y);
        y += 6;
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(12);
        doc.setTextColor(0, 61, 115);
        var dayHeading = (displayDayLabel(item) || item.dayId) + (item.date ? ', ' + item.date : '');
        doc.text(dayHeading, margin, y);
        doc.setTextColor(0);
        y += 7;
      }

      // Reserve space for the WHOLE item (time/room + every title/subtitle line) up
      // front, so a page break never lands in the middle of a wrapped line — that
      // was what caused author names to visually tear across the page boundary.
      var itemHeight = 5 + titleLines.length * 5.5 + subLines.length * 5 + 4;
      ensureSpace(itemHeight);

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      var timeRoom = (item.time || '') + (item.room ? '  ·  ' + item.room : '');
      doc.text(timeRoom, margin, y);
      y += 5;
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10.5);
      titleLines.forEach(function(line){
        doc.text(line, margin, y);
        y += 5.5;
      });
      if(subLines.length){
        doc.setFontSize(9);
        doc.setTextColor(90);
        subLines.forEach(function(line){
          doc.text(line, margin, y);
          y += 5;
        });
        doc.setTextColor(0);
      }
      y += 4;
    });

    // Notes page: one fresh page with faint ruled lines, like a notepad.
    doc.addPage();
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.setTextColor(0);
    doc.text(t('pdfNotesTitle'), margin, margin);
    doc.setDrawColor(225);
    var lineSpacing = 8;
    var firstRuleY = margin + 12;
    for(var ruleY = firstRuleY; ruleY <= pageHeight - margin; ruleY += lineSpacing){
      doc.line(margin, ruleY, pageWidth - margin, ruleY);
    }

    var totalPages = doc.internal.getNumberOfPages();
    for(var pageNum = 1; pageNum <= totalPages; pageNum++){
      doc.setPage(pageNum);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(150);
      doc.text(String(pageNum) + ' / ' + totalPages, pageWidth - margin, pageHeight - 8, { align: 'right' });
      doc.setTextColor(0);
    }

    doc.save('mein-dgl-2026-plan.pdf');
  }

  function render(){
    renderProgrammList();
    renderLunchList();
  }

  function safeRun(fn, label){
    try { fn(); } catch(e){ console.error('Render error in ' + label + ':', e); }
  }

  function renderAll(){
    safeRun(renderDayTabs, 'renderDayTabs');
    safeRun(renderCategoryFilter, 'renderCategoryFilter');
    safeRun(renderProgrammList, 'renderProgrammList');
    safeRun(renderTopicJump, 'renderTopicJump');
    safeRun(renderLunchFilters, 'renderLunchFilters');
    safeRun(renderLunchList, 'renderLunchList');
    safeRun(renderExkursionen, 'renderExkursionen');
    safeRun(renderVenue, 'renderVenue');
    safeRun(renderPlan, 'renderPlan');
  }

  var presenterUploadUrl = '';
  var presenterUploadLinks = {};
  function loadPresenterUploadLink(){
    fetch('presenter_upload_link.txt').then(function(r){
      return r.ok ? r.text() : '';
    }).then(function(text){
      var lines = (text || '').split('\n');
      for(var i = 0; i < lines.length; i++){
        var line = lines[i].trim();
        if(!line || line.indexOf('#') === 0) continue;
        var eqIdx = line.indexOf('=');
        if(eqIdx === -1) continue;
        var key = line.slice(0, eqIdx).trim();
        var url = line.slice(eqIdx + 1).trim();
        if(key && url) presenterUploadLinks[key] = url;
      }
      presenterUploadUrl = presenterUploadLinks['_unsortiert'] || '';
      safeRun(renderVenue, 'renderVenue');
    }).catch(function(e){
      console.error('Failed to load presenter upload link:', e);
    });
  }

  function loadFloorplanSVGs(){
    Promise.all([
      fetch('floorplan_de.svg').then(function(r){ return r.text(); }),
      fetch('floorplan_en.svg').then(function(r){ return r.text(); })
    ]).then(function(results){
      document.getElementById('floorplanSlotDe').innerHTML = results[0];
      document.getElementById('floorplanSlotEn').innerHTML = results[1];
      document.getElementById('floorplanSlotDe').style.display = lang === 'en' ? 'none' : '';
      document.getElementById('floorplanSlotEn').style.display = lang === 'en' ? '' : 'none';
      var fpDe = document.getElementById('floorplanSvg');
      var fpEn = document.getElementById('floorplanSvgEn');
      if(fpDe) fpDe.style.display = lang === 'en' ? 'none' : '';
      if(fpEn) fpEn.style.display = lang === 'en' ? '' : 'none';
    }).catch(function(e){
      console.error('Failed to load floor plan:', e);
    });
  }
  function loadPosterPlanSVGs(){
    Promise.all([
      fetch('poster_stellplan_de.svg').then(function(r){ return r.text(); }),
      fetch('poster_stellplan_en.svg').then(function(r){ return r.text(); })
    ]).then(function(results){
      document.getElementById('posterPlanSlotDe').innerHTML = results[0];
      document.getElementById('posterPlanSlotEn').innerHTML = results[1];
      document.getElementById('posterPlanSlotDe').style.display = lang === 'en' ? 'none' : '';
      document.getElementById('posterPlanSlotEn').style.display = lang === 'en' ? '' : 'none';
      var ppDe = document.getElementById('posterPlanSvg');
      var ppEn = document.getElementById('posterPlanSvgEn');
      if(ppDe) ppDe.style.display = lang === 'en' ? 'none' : '';
      if(ppEn) ppEn.style.display = lang === 'en' ? '' : 'none';
    }).catch(function(e){
      console.error('Failed to load poster plan:', e);
    });
  }
  loadFloorplanSVGs();
  loadPosterPlanSVGs();
  loadPresenterUploadLink();

  safeRun(applyStaticI18n, 'applyStaticI18n');
  renderAll();
  setInterval(function(){
    var tourActive = document.getElementById('tourBackdrop').style.display === 'block';
    if(tourActive) return;
    safeRun(renderDayTabs, 'renderDayTabs');
    safeRun(renderProgrammList, 'renderProgrammList');
    safeRun(renderPlan, 'renderPlan');
  }, 60000);

  // ---------- Announcement popup ----------
  // Supports MULTIPLE time-scheduled announcements in announcement.json (an
  // array). Each is shown automatically once its begins/expires window is
  // active, and only once per person (tracked by id). Re-checked periodically
  // so a newly-active announcement appears even in an already-open tab.
  var ANNOUNCEMENT_DISMISS_KEY = 'dgl2026_announcement_dismissed_ids_v2';
  function getDismissedAnnouncementIds(){
    try{
      var raw = localStorage.getItem(ANNOUNCEMENT_DISMISS_KEY);
      return raw ? JSON.parse(raw) : [];
    }catch(e){ return []; }
  }
  function markAnnouncementDismissed(id){
    try{
      var ids = getDismissedAnnouncementIds();
      if(ids.indexOf(id) === -1) ids.push(id);
      localStorage.setItem(ANNOUNCEMENT_DISMISS_KEY, JSON.stringify(ids));
    }catch(e){}
  }
  var currentlyShownAnnouncement = null; // {id, expires} of whatever's on screen right now
  function loadAnnouncement(onDone){
    var overlay = document.getElementById('announcementOverlay');
    if(overlay.style.display === 'flex'){
      // Still showing something — but if IT has since expired, auto-hide it
      // rather than leaving it up forever just because nobody clicked the
      // close button, then fall through to check whether a new one should
      // take its place.
      var stillValid = !(currentlyShownAnnouncement && currentlyShownAnnouncement.expires && new Date(currentlyShownAnnouncement.expires) < new Date());
      if(stillValid){
        if(onDone) onDone(true);
        return;
      }
      overlay.style.display = 'none';
      currentlyShownAnnouncement = null;
    }
    fetch('announcement.json', { cache: 'no-store' }).then(function(res){
      if(!res.ok) throw new Error('no announcement file');
      return res.json();
    }).then(function(list){
      if(!Array.isArray(list)) list = [list]; // tolerate the old single-object format too
      var now = new Date();
      var dismissed = getDismissedAnnouncementIds();
      var a = list.find(function(item){
        if(!item || !item.enabled) return false;
        if(item.begins && new Date(item.begins) > now) return false;
        if(item.expires && new Date(item.expires) < now) return false;
        if(dismissed.indexOf(item.id) !== -1) return false;
        return true;
      });
      if(!a){ if(onDone) onDone(false); return; }
      var title = lang === 'en' ? (a.title_en || a.title_de) : (a.title_de || a.title_en);
      var message = lang === 'en' ? (a.message_en || a.message_de) : (a.message_de || a.message_en);
      document.getElementById('announcementTitle').textContent = title || '';
      document.getElementById('announcementMessage').textContent = message || '';
      document.getElementById('announcementOverlay').style.display = 'flex';
      currentlyShownAnnouncement = { id: a.id, expires: a.expires };
      document.getElementById('announcementCloseBtn').onclick = function(){
        document.getElementById('announcementOverlay').style.display = 'none';
        currentlyShownAnnouncement = null;
        markAnnouncementDismissed(a.id);
        document.dispatchEvent(new Event('dgl:announcementDismissed'));
      };
      if(onDone) onDone(true);
    }).catch(function(){ if(onDone) onDone(false); /* no announcement file or not reachable — silently ignore */ });
  }
  setInterval(loadAnnouncement, 2 * 60 * 1000);
  var initialAnnouncementCheckResult = null; // null = not resolved yet, else true/false
  loadAnnouncement(function(wasShown){
    initialAnnouncementCheckResult = wasShown;
    document.dispatchEvent(new CustomEvent('dgl:announcementCheckDone', { detail: { wasShown: wasShown } }));
  });

  // ---------- Update-available banner ----------
  // Detects when index.html, app.js, or app-data.js has changed on the
  // server since this page was loaded, using each file's Last-Modified
  // header as an automatic "version" — no manual version bumping needed
  // on every deploy. Relevant mainly for people who leave a tab open for
  // a long time (e.g. across the whole conference).
  var UPDATE_CHECK_INTERVAL_MS = 5 * 60 * 1000; // 5 minutes
  var loadedAppDataVersion = null;
  function checkForUpdate(){
    Promise.all([
      fetch('index.html', { method: 'HEAD', cache: 'no-store' }),
      fetch('app.js', { method: 'HEAD', cache: 'no-store' }),
      fetch('app-data.js', { method: 'HEAD', cache: 'no-store' })
    ]).then(function(results){
      var v0 = results[0].headers.get('Last-Modified') || results[0].headers.get('ETag');
      var v1 = results[1].headers.get('Last-Modified') || results[1].headers.get('ETag');
      var v2 = results[2].headers.get('Last-Modified') || results[2].headers.get('ETag');
      if(!v0 && !v1 && !v2) return;
      var combined = (v0 || '') + '|' + (v1 || '') + '|' + (v2 || '');
      if(loadedAppDataVersion === null){
        loadedAppDataVersion = combined;
        return;
      }
      if(combined !== loadedAppDataVersion){
        showUpdateBanner();
      }
    }).catch(function(){ /* offline or unreachable — just skip this check */ });
  }
  function showUpdateBanner(){
    var banner = document.getElementById('updateBanner');
    if(banner.style.display === 'flex') return; // already shown
    document.getElementById('updateBannerText').textContent = t('updateBannerText');
    document.getElementById('updateBannerReloadBtn').textContent = t('updateBannerReload');
    banner.style.display = 'flex';
  }
  document.getElementById('updateBannerReloadBtn').addEventListener('click', function(){
    window.location.reload();
  });
  document.getElementById('updateBannerDismissBtn').addEventListener('click', function(){
    document.getElementById('updateBanner').style.display = 'none';
  });
  checkForUpdate();
  setInterval(checkForUpdate, UPDATE_CHECK_INTERVAL_MS);
  document.addEventListener('visibilitychange', function(){
    if(document.visibilityState === 'visible'){
      checkForUpdate();
      loadAnnouncement();
    }
  });

  // ---------- Guided tour ----------
  var TOUR_DISMISS_KEY = 'dgl2026_tour_done';
  function tourSetupProgrammeExample(){
    currentDay = 'mo';
    currentCategoryFilter = 'alle';
    expandedSessions = {};
    expandedTalks = {};
    renderProgrammList();
  }

  function tourSetupExpandedSession(){
    currentDay = 'mo';
    currentCategoryFilter = 'alle';
    expandedTalks = {};
    renderProgrammList();
    var chevronEl = document.querySelector('.session-header .chevron');
    var headerEl = chevronEl ? chevronEl.closest('.session-header') : null;
    if(headerEl){
      var sid = headerEl.getAttribute('data-sid');
      if(sid){
        expandedSessions = {};
        expandedSessions[sid] = true;
        renderProgrammList();
      }
    }
  }

  var TOUR_STEPS = [
    {
      text: '👋 Herzlich willkommen bei der 41. DGL-Jahrestagung & 16. WRHC! Lass mich dir kurz zeigen, wie du diese App nutzt.',
      text_en: '👋 Welcome to the 41st DGL Annual Conference & 16th WRHC! Let us quickly show you how to use this app.'
    },
    {
      selector: '#langSwitch',
      text: 'Hier wechselst du die Sprache (DE/EN), schaltest auf den Dunkelmodus um und kannst die Schriftgröße ändern.',
      text_en: 'Switch the language (DE/EN), switch to dark mode and change the text size here.'
    },
    {
      selector: 'nav.bottom-nav button[data-view="programm"]',
      text: 'Hier findest du das gesamte Vortragsprogramm.',
      text_en: 'Here you\'ll find the full talk programme.'
    },
    {
      selector: 'nav.bottom-nav button[data-view="lunch"]',
      text: 'Hier gibt es Vorschläge für Mittagsoptionen in der Nähe (inklusive Karte).',
      text_en: 'Here you\'ll find nearby lunch suggestions (including a map).'
    },
    {
      selector: 'nav.bottom-nav button[data-view="exkursionen"]',
      text: 'Hier stehen alle Exkursionen mit Details.',
      text_en: 'Here you\'ll find all excursions with details.'
    },
    {
      selector: 'nav.bottom-nav button[data-view="venue"]',
      text: 'Hier findest du Infos zum Tagungsort, Gebäudeplan, Tagungsbüro, WLAN und den Datei-Upload für Vortragende.',
      text_en: 'Here you\'ll find info on the venue, floor plan, conference office, Wi-Fi and the file upload for presenters.'
    },
    {
      selector: 'nav.bottom-nav button[data-view="plan"]',
      text: 'Hier siehst du deinen persönlichen Plan mit allen Vorträgen und Sessions, die du dir gemerkt hast.',
      text_en: 'Here you\'ll see your personal plan with all the talks and sessions you\'ve saved.'
    },
    {
      selector: '#programmSearch',
      text: 'Hier kannst du nach Namen, Themen oder Vortragstiteln suchen.',
      text_en: 'Search here by name, topic or talk title.'
    },
    {
      selector: '#topicJump',
      text: 'Über "Zu Thema/Session springen..." kommst du direkt zu einer bestimmten Session oder einem Plenarvortrag.',
      text_en: 'Use "Jump to topic/session..." to go straight to a specific session or plenary talk.'
    },
    {
      selector: '#dayTabs',
      beforeStep: tourSetupProgrammeExample,
      text: 'Hier wählst du den Tagungstag aus.',
      text_en: 'Choose the conference day here.'
    },
    {
      selector: '#categoryFilter',
      text: 'Und hier kannst du nach Art des Programmpunkts filtern, z. B. nur Sessions oder nur Plenarvorträge.',
      text_en: 'And here you can filter by type, e.g. only sessions or only plenary talks.'
    },
    {
      selector: '.session-room.room-link',
      text: 'Klicke auf einen Raum, um ihn im Gebäudeplan hervorgehoben zu sehen.',
      text_en: 'Click a room to see it highlighted on the floor plan.'
    },
    {
      selector: '.session-header[data-has-abstract="1"]',
      text: 'Klicke auf den Titel einer Session, um das Abstract zu sehen.',
      text_en: 'Click the title of a session to see its abstract.'
    },
    {
      selector: '.session-header .chevron',
      text: 'Klicke hier, um die einzelnen Vorträge dieser Session zu sehen.',
      text_en: 'Click here to see the individual talks in this session.'
    },
    {
      selector: '.talk-main',
      beforeStep: tourSetupExpandedSession,
      text: 'Klicke auf den Titel eines Vortrags, um das Abstract angezeigt zu bekommen.',
      text_en: 'Click the title of a talk to see its abstract.'
    },
    {
      selector: '.author-link',
      beforeStep: tourSetupExpandedSession,
      text: 'Klicke auf einen Namen, um alle Beiträge dieser Person auf der Tagung zu sehen.',
      text_en: 'Click a name to see all of that person\'s contributions to the conference.'
    },
    {
      selector: '.add-btn.small[data-id]',
      text: 'Mit "+" fügst du einen Vortrag zu deinem persönlichen Plan hinzu.',
      text_en: 'Tap "+" to add a talk to your personal plan.'
    },
    {
      selector: '[data-role="session-add"]',
      text: 'Du kannst auch alle Vorträge einer Session auf einmal hinzufügen, indem du hier auf das "+" klickst.',
      text_en: 'You can also add all talks of a session at once by clicking the "+" here.'
    },
    {
      selector: '[data-role="session-add"]',
      text: 'Ist etwas schon gemerkt, steht hier statt "+" ein Häkchen (✓). Tippe erneut darauf, um es wieder aus deinem Plan zu entfernen.',
      text_en: 'Once something is saved, a checkmark (✓) appears here instead of "+". Tap it again to remove it from your plan.'
    },
    {
      text: 'Das war\'s schon! Viel Spaß bei der DGL-Tagung und der WRHC! 🎉',
      text_en: 'That\'s it! Have a great time at the DGL conference and the WRHC! 🎉'
    }
  ];
  var tourStepIndex = 0;

  function tourText(step){
    return (lang === 'en' && step.text_en) ? step.text_en : step.text;
  }

  var tourCurrentTarget = null;

  function positionTourStep(){
    var step = TOUR_STEPS[tourStepIndex];
    if(step.beforeStep) step.beforeStep();

    if(tourCurrentTarget) tourCurrentTarget.classList.remove('tour-target-active', 'tour-needs-relative');
    var prevNav = document.querySelector('nav.bottom-nav.tour-parent-active');
    if(prevNav) prevNav.classList.remove('tour-parent-active');
    tourCurrentTarget = null;

    if(step.selector){
      var target = document.querySelector(step.selector);
      if(!target){ tourNext(); return; }
      tourCurrentTarget = target;
      target.classList.add('tour-target-active');
      // Only force position:relative on elements that are normally static —
      // doing this to elements that rely on position:fixed/sticky/absolute
      // (like the bottom nav) would rip them out of their pinned position.
      var currentPosition = '';
      try{ currentPosition = window.getComputedStyle(target).position; }catch(e){}
      if(currentPosition === 'static' || currentPosition === ''){
        target.classList.add('tour-needs-relative');
      }
      // The bottom nav itself has a low z-index (10) and establishes its own
      // stacking context (position:fixed). A high z-index on a button *inside*
      // it only competes with its siblings there — the whole bar (and thus the
      // button) would still render below the backdrop (z-index 299) unless the
      // bar itself is also lifted.
      var navAncestor = target.closest('nav.bottom-nav');
      if(navAncestor) navAncestor.classList.add('tour-parent-active');
      if(target.scrollIntoView){
        target.scrollIntoView({ block: 'center', behavior: 'instant' });
      }
    }

    document.getElementById('tourTooltipText').textContent = tourText(step);
    document.getElementById('tourSkipBtn').textContent = t('tourSkip');
    document.getElementById('tourBackBtn').textContent = t('tourBack');
    document.getElementById('tourBackBtn').disabled = (tourStepIndex === 0);
    document.getElementById('tourNextBtn').textContent = (tourStepIndex === TOUR_STEPS.length - 1) ? t('tourDone') : t('tourNext');
    document.getElementById('tourProgress').textContent = (tourStepIndex + 1) + ' / ' + TOUR_STEPS.length;
    document.getElementById('tourTooltip').classList.toggle('tour-tooltip-centered', !step.selector);

    document.getElementById('tourBackdrop').style.display = 'block';
    document.getElementById('tourTooltip').style.display = 'block';
  }

  function tourNext(){
    tourStepIndex++;
    if(tourStepIndex >= TOUR_STEPS.length){
      tourEnd();
      return;
    }
    positionTourStep();
  }

  function tourPrev(){
    if(tourStepIndex === 0) return;
    tourStepIndex--;
    positionTourStep();
  }

  function tourEnd(){
    markTourIntroSeen();
    if(tourCurrentTarget){
      tourCurrentTarget.classList.remove('tour-target-active', 'tour-needs-relative');
      tourCurrentTarget = null;
    }
    var activeNav = document.querySelector('nav.bottom-nav.tour-parent-active');
    if(activeNav) activeNav.classList.remove('tour-parent-active');
    document.getElementById('tourBackdrop').style.display = 'none';
    document.getElementById('tourTooltip').style.display = 'none';

    // Leave the app in a clean starting state, not wherever the tour's demo happened to land.
    currentDay = DATA.programm[0].id;
    currentCategoryFilter = 'alle';
    expandedSessions = {};
    expandedSessionAbstract = {};
    expandedInfoAbstract = {};
    expandedTalks = {};
    switchToView('programm');
    renderAll();
    window.scrollTo(0, 0);
  }

  function startTour(){
    tourStepIndex = 0;
    switchToView('programm');
    positionTourStep();
  }

  document.getElementById('tourNextBtn').addEventListener('click', tourNext);
  document.getElementById('tourBackBtn').addEventListener('click', tourPrev);
  document.getElementById('tourSkipBtn').addEventListener('click', tourEnd);

  function markTourIntroSeen(){
    try{ localStorage.setItem(TOUR_DISMISS_KEY, '1'); }catch(e){}
  }

  document.getElementById('tourHelpBtn').addEventListener('click', function(){
    switchToView('programm');
    startTour();
  });

  (function maybeStartTourAutomatically(){
    var done = null;
    try{ done = localStorage.getItem(TOUR_DISMISS_KEY); }catch(e){}
    if(done) return;
    function beginAfterDelay(){
      setTimeout(function(){
        switchToView('programm');
        startTour();
      }, 600);
    }
    function proceedOnceKnown(wasShown){
      if(wasShown){
        // Wait for the announcement to be dismissed first, so the two
        // overlays never fight for the same screen space.
        document.addEventListener('dgl:announcementDismissed', function onDismiss(){
          document.removeEventListener('dgl:announcementDismissed', onDismiss);
          beginAfterDelay();
        });
      } else {
        beginAfterDelay();
      }
    }
    if(initialAnnouncementCheckResult !== null){
      proceedOnceKnown(initialAnnouncementCheckResult);
    } else {
      document.addEventListener('dgl:announcementCheckDone', function onCheckDone(ev){
        document.removeEventListener('dgl:announcementCheckDone', onCheckDone);
        proceedOnceKnown(ev.detail.wasShown);
      });
    }
  })();

  // ---------- Debug/testing interface (safe to ignore, not shown to end users) ----------
  window.dglDebug = {
    setNow: function(dateTimeString){
      debugNowOverride = dateTimeString;
      renderDayTabs();
      renderProgrammList();
      console.log('[dglDebug] Simulierte Zeit gesetzt auf:', new Date(dateTimeString).toString());
    },
    clearNow: function(){
      debugNowOverride = null;
      renderDayTabs();
      renderProgrammList();
      console.log('[dglDebug] Simulierte Zeit zurückgesetzt, echte Uhrzeit wird wieder verwendet.');
    }
  };

})();
// Test-Kommentar für Update-Banner-Check, kann ignoriert/gelöscht werden
