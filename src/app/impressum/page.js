import PageHeader from "@/components/Shared/PageHeader";
import Link from "next/link";

export const metadata = {
  title: "Impressum",
  description: "Impressum und rechtliche Angaben der PTA Personal Training Academy in Heiderscheid, Luxembourg.",
};

export default function ImpressumPage() {
  return (
    <>
      <PageHeader heading="Impressum" page="Impressum" />
      <section className="pt-16 pb_120">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#1a1a1a] rounded-lg p-8 lg:p-12">
              <h2 className="text-3xl font-medium text-white mb-8">Impressum</h2>

              <div className="space-y-8 text-clr_pra">
                <div>
                  <h3 className="text-xl font-medium text-white mb-4">Angaben gemäß Artikel 4 des Gesetzes vom 14. August 2000</h3>
                  <p className="leading-relaxed">
                    PTA - Personal Training Academy<br />
                    1 Fuussekaul<br />
                    9156 Heiderscheid<br />
                    Luxembourg
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-white mb-4">Kontakt</h3>
                  <p className="leading-relaxed">
                    Telefon: <Link href="tel:+352691789483" className="text-clr_base hover:underline">+352 691 789 483</Link><br />
                    E-Mail: <Link href="mailto:info@pta-training.lu" className="text-clr_base hover:underline">info@pta-training.lu</Link>
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-white mb-4">Verantwortlich für den Inhalt</h3>
                  <p className="leading-relaxed">
                    PTA - Personal Training Academy<br />
                    1 Fuussekaul<br />
                    9156 Heiderscheid<br />
                    Luxembourg
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-white mb-4">Haftungsausschluss</h3>

                  <h4 className="text-lg font-medium text-white mb-2 mt-6">Haftung für Inhalte</h4>
                  <p className="leading-relaxed">
                    Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
                    Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
                  </p>

                  <h4 className="text-lg font-medium text-white mb-2 mt-6">Haftung für Links</h4>
                  <p className="leading-relaxed">
                    Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen
                    Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                    Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
                    Seiten verantwortlich.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-white mb-4">Urheberrecht</h3>
                  <p className="leading-relaxed">
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
                    dem luxemburgischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede
                    Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
                    Zustimmung des jeweiligen Autors bzw. Erstellers.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-white mb-4">Online-Streitbeilegung</h3>
                  <p className="leading-relaxed">
                    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                    <Link
                      href="https://ec.europa.eu/consumers/odr/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-clr_base hover:underline"
                    >
                      https://ec.europa.eu/consumers/odr/
                    </Link>
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
