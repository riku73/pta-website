import PageHeader from "@/components/Shared/PageHeader";

export const metadata = {
  title: "Allgemeine Geschäftsbedingungen",
  description: "Allgemeine Geschäftsbedingungen der PTA Personal Training Academy in Heiderscheid, Luxembourg.",
};

export default function AGBPage() {
  return (
    <>
      <PageHeader heading="AGB" page="Allgemeine Geschäftsbedingungen" />
      <section className="pt-16 pb_120">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#1a1a1a] rounded-lg p-8 lg:p-12">
              <h2 className="text-3xl font-medium text-white mb-8">Allgemeine Geschäftsbedingungen</h2>

              <div className="space-y-8 text-clr_pra">
                <div>
                  <h3 className="text-xl font-medium text-white mb-4">1. Geltungsbereich</h3>
                  <p className="leading-relaxed">
                    Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen der PTA Personal Training Academy
                    (nachfolgend &quot;PTA&quot; genannt) und ihren Kunden über Personal Training, Gruppentraining, Ernährungsberatung
                    und verwandte Dienstleistungen.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-white mb-4">2. Vertragsschluss</h3>
                  <p className="leading-relaxed">
                    Der Vertrag kommt durch die Annahme des Angebots des Kunden durch PTA zustande. Die Annahme kann
                    schriftlich, per E-Mail oder durch Beginn der Leistungserbringung erfolgen.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-white mb-4">3. Preise und Zahlung</h3>
                  <p className="leading-relaxed">
                    Die Preise für unsere Dienstleistungen werden individuell vereinbart und sind vor Beginn der
                    Trainingseinheit oder des Kurses zu zahlen. Alle Preise verstehen sich inklusive der gesetzlichen
                    Mehrwertsteuer.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-white mb-4">4. Terminabsagen</h3>
                  <p className="leading-relaxed">
                    Terminabsagen müssen mindestens 24 Stunden vor dem vereinbarten Termin erfolgen. Bei kurzfristigeren
                    Absagen oder Nichterscheinen wird die volle Trainingsgebühr berechnet.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-white mb-4">5. Haftung</h3>
                  <p className="leading-relaxed">
                    Die Teilnahme am Training erfolgt auf eigene Verantwortung. PTA haftet nicht für Verletzungen oder
                    Schäden, die durch unsachgemäße Nutzung der Geräte oder Nichtbeachtung der Anweisungen entstehen,
                    es sei denn, es liegt Vorsatz oder grobe Fahrlässigkeit vor.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-white mb-4">6. Gesundheitliche Voraussetzungen</h3>
                  <p className="leading-relaxed">
                    Der Kunde versichert, dass keine gesundheitlichen Einschränkungen vorliegen, die einer Teilnahme
                    am Training entgegenstehen. Bei Vorliegen von gesundheitlichen Einschränkungen ist vor Trainingsbeginn
                    ein ärztliches Attest vorzulegen.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-white mb-4">7. Schlussbestimmungen</h3>
                  <p className="leading-relaxed">
                    Es gilt luxemburgisches Recht. Gerichtsstand ist Luxembourg. Sollten einzelne Bestimmungen dieser
                    AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
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
