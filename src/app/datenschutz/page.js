import PageHeader from "@/components/Shared/PageHeader";

export const metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung der PTA Personal Training Academy - Informationen zum Umgang mit Ihren personenbezogenen Daten.",
};

export default function DatenschutzPage() {
  return (
    <>
      <PageHeader heading="Datenschutz" page="Datenschutzerklärung" />
      <section className="pt-16 pb_120">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#1a1a1a] rounded-lg p-8 lg:p-12">
              <h2 className="text-3xl font-medium text-white mb-8">Datenschutzerklärung</h2>

              <div className="space-y-8 text-clr_pra">
                <div>
                  <h3 className="text-xl font-medium text-white mb-4">1. Verantwortlicher</h3>
                  <p className="leading-relaxed">
                    Verantwortlicher für die Datenverarbeitung auf dieser Website ist:<br /><br />
                    PTA - Personal Training Academy<br />
                    1 Fuussekaul<br />
                    9156 Heiderscheid<br />
                    Luxembourg<br /><br />
                    E-Mail: info@pta-training.lu<br />
                    Telefon: +352 691 789 483
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-white mb-4">2. Erhebung und Speicherung personenbezogener Daten</h3>
                  <p className="leading-relaxed">
                    Beim Besuch unserer Website werden automatisch Informationen allgemeiner Natur erfasst. Diese
                    Informationen (Server-Logfiles) beinhalten die Art des Webbrowsers, das verwendete Betriebssystem,
                    den Domainnamen Ihres Internet-Service-Providers und ähnliches. Dies sind ausschließlich Informationen,
                    die keine Rückschlüsse auf Ihre Person zulassen.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-white mb-4">3. Kontaktformular</h3>
                  <p className="leading-relaxed">
                    Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Formular
                    inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den
                    Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-white mb-4">4. Ihre Rechte</h3>
                  <p className="leading-relaxed">
                    Sie haben folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:
                  </p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>Recht auf Auskunft</li>
                    <li>Recht auf Berichtigung oder Löschung</li>
                    <li>Recht auf Einschränkung der Verarbeitung</li>
                    <li>Recht auf Widerspruch gegen die Verarbeitung</li>
                    <li>Recht auf Datenübertragbarkeit</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-white mb-4">5. Cookies</h3>
                  <p className="leading-relaxed">
                    Diese Website verwendet nur technisch notwendige Cookies. Diese sind erforderlich, um die
                    grundlegenden Funktionen der Website zu gewährleisten. Tracking-Cookies oder Cookies zu
                    Werbezwecken werden nicht verwendet.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-white mb-4">6. Datensicherheit</h3>
                  <p className="leading-relaxed">
                    Wir verwenden das SSL/TLS-Verfahren in Verbindung mit der jeweils höchsten Verschlüsselungsstufe,
                    die von Ihrem Browser unterstützt wird. Unsere Website ist durch technische und organisatorische
                    Maßnahmen gegen Verlust, Zerstörung, Zugriff, Veränderung oder Verbreitung Ihrer Daten durch
                    unbefugte Personen gesichert.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-white mb-4">7. Änderungen der Datenschutzerklärung</h3>
                  <p className="leading-relaxed">
                    Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen
                    rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen umzusetzen.
                  </p>
                </div>

                <p className="text-sm text-clr_pra/70 pt-8 border-t border-clr_cusborder">
                  Stand: Januar 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
