import React from "react";
import PageHeader from "../../../Components/Shared/PageHeader";
import Link from "next/link";
import { ArrowRight, CheckCircleFill, Clock, Calendar, Users, Award, Heart, Shield } from "react-bootstrap-icons";
import { notFound } from "next/navigation";

const servicesData = {
  "personal-training": {
    title: "Personal Training",
    subtitle: "Training, das sich nach dir richtet",
    metaDescription: "Individuelles Personal Training in Luxemburg. Maßgeschneiderte Trainingspläne für Muskelaufbau, Gewichtsreduktion und mehr Fitness. Jetzt kostenloses Erstgespräch buchen!",
    heroImage: "https://images.unsplash.com/photo-1623874228601-f4193c7b1818?w=1200&h=600&fit=crop",
    contentImage: "https://images.unsplash.com/photo-1578762560042-46ad127c95ea?w=800&h=500&fit=crop",
    intro: "Im Personal Training bei PTA steht nur eines im Fokus: Du. Keine Ablenkungen, keine Kompromisse – nur volle Konzentration auf deine individuellen Ziele. Ob du Muskeln aufbauen, Gewicht verlieren oder einfach fitter werden möchtest, wir entwickeln gemeinsam einen Plan, der zu deinem Leben passt.",
    description: `Personal Training ist die effektivste Form des Trainings, weil jede Übung, jede Wiederholung und jede Trainingseinheit speziell auf dich zugeschnitten ist. Bei PTA in Luxemburg arbeiten wir nach einem bewährten System, das bereits hunderten von Kunden geholfen hat, ihre Fitnessziele zu erreichen.

Unser Ansatz beginnt mit einer umfassenden Analyse deiner aktuellen Fitness, deiner Bewegungsmuster und deiner persönlichen Ziele. Darauf aufbauend erstellen wir einen maßgeschneiderten Trainingsplan, der kontinuierlich an deine Fortschritte angepasst wird.

Das Besondere am Personal Training ist die ständige Betreuung durch deinen persönlichen Trainer. Er korrigiert deine Technik in Echtzeit, motiviert dich über deine Grenzen hinaus und sorgt dafür, dass du das Maximum aus jeder Trainingseinheit herausholst – ohne Verletzungsrisiko.

Ob Krafttraining, Functional Fitness oder gezielte Mobility-Arbeit – wir passen das Training an deine Bedürfnisse an. Dabei berücksichtigen wir auch deinen Alltag: beruflicher Stress, Reisen oder familiäre Verpflichtungen werden in die Planung einbezogen.`,
    benefits: [
      { icon: "target", title: "100% individuell", text: "Jede Übung wird auf deine Ziele und Fähigkeiten abgestimmt" },
      { icon: "chart", title: "Messbare Fortschritte", text: "Regelmäßige Assessments dokumentieren deinen Erfolg" },
      { icon: "clock", title: "Flexible Termine", text: "Training, wenn es in deinen Zeitplan passt" },
      { icon: "shield", title: "Sichere Technik", text: "Professionelle Anleitung minimiert das Verletzungsrisiko" },
      { icon: "motivation", title: "Maximale Motivation", text: "Dein Trainer hält dich auch an schwierigen Tagen auf Kurs" },
      { icon: "nutrition", title: "Ganzheitlicher Ansatz", text: "Optional mit Ernährungsberatung kombinierbar" }
    ],
    packages: [
      { name: "Starter", sessions: "4 Sessions/Monat", price: "149", features: ["1x Training pro Woche", "Individueller Trainingsplan", "Technikschulung", "WhatsApp-Support"] },
      { name: "Professional", sessions: "8 Sessions/Monat", price: "279", features: ["2x Training pro Woche", "Individueller Trainingsplan", "Ernährungsempfehlungen", "Fortschrittstracking", "Priority-Termine"], popular: true },
      { name: "Elite", sessions: "12 Sessions/Monat", price: "399", features: ["3x Training pro Woche", "Individueller Trainingsplan", "Vollständige Ernährungsberatung", "24/7 WhatsApp-Support", "Monatliche Assessments"] }
    ],
    faq: [
      { q: "Wie läuft das erste Training ab?", a: "Wir starten mit einem kostenlosen Erstgespräch, in dem wir deine Ziele, deine Fitness-Geschichte und eventuelle Einschränkungen besprechen. Dann folgt ein Bewegungsscreening, bevor wir mit dem eigentlichen Training beginnen." },
      { q: "Muss ich schon fit sein, um anzufangen?", a: "Absolut nicht! Wir holen dich genau dort ab, wo du stehst. Viele unserer erfolgreichsten Transformationen haben bei null angefangen." },
      { q: "Wie schnell sehe ich Ergebnisse?", a: "Die meisten Kunden spüren bereits nach 2-3 Wochen mehr Energie und Kraft. Sichtbare körperliche Veränderungen zeigen sich typischerweise nach 6-8 Wochen konsequentem Training." },
      { q: "Kann ich Termine verschieben?", a: "Ja, mit 24 Stunden Vorlauf kannst du Termine kostenfrei verschieben. Wir verstehen, dass das Leben manchmal dazwischenkommt." }
    ]
  },
  "ernaehrungsberatung": {
    title: "Ernährungsberatung",
    subtitle: "Essen, das zu dir passt",
    metaDescription: "Professionelle Ernährungsberatung in Luxemburg. Nachhaltige Ernährungspläne ohne Verzicht. Abnehmen, Muskelaufbau oder gesünder leben. Jetzt beraten lassen!",
    heroImage: "https://images.unsplash.com/photo-1547592180-85f173990554?w=1200&h=600&fit=crop",
    contentImage: "https://images.unsplash.com/photo-1603287681836-b174ce5074c2?w=800&h=500&fit=crop",
    intro: "Vergiss Crash-Diäten und starre Ernährungspläne. Bei PTA entwickeln wir gemeinsam eine Ernährungsstrategie, die zu deinem Leben passt – realistisch, genussvoll und nachhaltig wirksam.",
    description: `Die richtige Ernährung ist der Schlüssel zu deinen Fitnesszielen. Egal ob Gewichtsreduktion, Muskelaufbau oder einfach mehr Energie im Alltag – ohne die passende Ernährung bleiben selbst die besten Trainingsergebnisse aus.

Unsere Ernährungsberatung bei PTA in Luxemburg basiert auf wissenschaftlichen Erkenntnissen und jahrelanger Praxiserfahrung. Wir analysieren deine aktuellen Essgewohnheiten, identifizieren Optimierungspotenziale und entwickeln einen Plan, der sich nahtlos in deinen Alltag integriert.

Das Besondere an unserem Ansatz: Wir verzichten auf strikte Verbote. Stattdessen lernst du, Lebensmittel bewusst zu wählen und zu genießen. Du erhältst praktische Rezepte, Einkaufslisten und konkrete Strategien für Situationen wie Restaurantbesuche, Geschäftsessen oder Reisen.

Unsere Ernährungsexperten begleiten dich kontinuierlich mit wöchentlichen Check-ins. So können wir den Plan anpassen, Fragen klären und sicherstellen, dass du auf Kurs bleibst. Ob du 5 oder 50 Kilo verlieren möchtest, mehr Muskelmasse aufbauen oder einfach gesünder leben willst – wir zeigen dir den Weg.`,
    benefits: [
      { icon: "target", title: "Personalisiert", text: "Ernährungspläne basierend auf deinen Vorlieben und Zielen" },
      { icon: "chart", title: "Wissenschaftlich", text: "Evidenzbasierte Empfehlungen, keine Trends" },
      { icon: "clock", title: "Alltagstauglich", text: "Praktische Rezepte, die in jeden Zeitplan passen" },
      { icon: "shield", title: "Keine Verbote", text: "Flexible Ernährung ohne schlechtes Gewissen" },
      { icon: "motivation", title: "Kontinuierliche Betreuung", text: "Wöchentliche Check-ins halten dich auf Kurs" },
      { icon: "nutrition", title: "Nachhaltig", text: "Langfristige Gewohnheiten statt kurzfristiger Diäten" }
    ],
    packages: [
      { name: "Basis", sessions: "Einmalig", price: "99", features: ["Ausführliche Erstanalyse", "Individueller Ernährungsplan", "Makroberechnung", "20 Rezepte"] },
      { name: "Coaching", sessions: "3 Monate", price: "199", features: ["Alles aus Basis", "Wöchentliche Check-ins", "Planänderungen inklusive", "Einkaufslisten", "WhatsApp-Support"], popular: true },
      { name: "Premium", sessions: "6 Monate", price: "349", features: ["Alles aus Coaching", "Bi-wöchentliche Video-Calls", "Unlimitierte Rezepte", "Restaurantguide", "Supplement-Beratung"] }
    ],
    faq: [
      { q: "Muss ich auf alles verzichten, was mir schmeckt?", a: "Nein! Unser Ansatz basiert auf Flexibilität. Wir zeigen dir, wie du deine Lieblingsgerichte in einen gesunden Ernährungsplan integrieren kannst." },
      { q: "Funktioniert das auch für Vegetarier/Veganer?", a: "Absolut. Wir erstellen Pläne für jede Ernährungsform und berücksichtigen Allergien, Unverträglichkeiten und persönliche Überzeugungen." },
      { q: "Wie schnell kann ich abnehmen?", a: "Gesundes, nachhaltiges Abnehmen liegt bei 0,5-1kg pro Woche. Schnellere Ergebnisse sind möglich, aber oft nicht dauerhaft." },
      { q: "Brauche ich spezielle Lebensmittel oder Supplements?", a: "Nein. Unsere Pläne basieren auf normalen Lebensmitteln aus dem Supermarkt. Supplements empfehlen wir nur, wenn sie individuell sinnvoll sind." }
    ]
  },
  "gruppentraining": {
    title: "Gruppentraining",
    subtitle: "Gemeinsam stärker",
    metaDescription: "Motivierendes Gruppentraining in Luxemburg. Kleine Gruppen, qualifizierte Trainer, maximaler Spaß. Krafttraining, HIIT und mehr. Jetzt Probetraining buchen!",
    heroImage: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=1200&h=600&fit=crop",
    contentImage: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=800&h=500&fit=crop",
    intro: "Training macht in der Gruppe einfach mehr Spaß. Bei PTA trainierst du in kleinen, motivierten Gruppen unter professioneller Anleitung – mit dem Teamgeist als Extra-Antrieb.",
    description: `Gruppentraining bei PTA verbindet das Beste aus zwei Welten: die Motivation und den Spaß einer Trainingsgemeinschaft mit der Qualität und Aufmerksamkeit eines professionellen Trainers.

Unsere Kurse finden in kleinen Gruppen von maximal 8 Personen statt. So kann dein Trainer jeden Teilnehmer individuell korrigieren und sicherstellen, dass die Übungen sauber ausgeführt werden. Du bekommst die Vorteile eines Personal Trainings zum Bruchteil des Preises.

Das Kursangebot bei PTA ist vielfältig: Von Krafttraining über Functional Fitness bis hin zu Mobility-Sessions ist für jeden etwas dabei. Alle Kurse sind so konzipiert, dass Anfänger und Fortgeschrittene gemeinsam trainieren können – jeder arbeitet auf seinem eigenen Level.

Das Besondere am Gruppentraining ist die Community. Du lernst Gleichgesinnte kennen, motivierst dich gegenseitig und baust Verbindungen auf, die über das Training hinausgehen. Viele unserer Mitglieder sagen, dass die Gruppe ihr größter Motivationsfaktor ist.`,
    benefits: [
      { icon: "target", title: "Kleine Gruppen", text: "Maximal 8 Personen für individuelle Betreuung" },
      { icon: "chart", title: "Qualifizierte Trainer", text: "Alle Kurse von zertifizierten Coaches geleitet" },
      { icon: "clock", title: "Flexible Kurszeiten", text: "Morgens, mittags und abends verfügbar" },
      { icon: "shield", title: "Für alle Level", text: "Anfänger und Fortgeschrittene trainieren gemeinsam" },
      { icon: "motivation", title: "Team-Motivation", text: "Die Gruppe pusht dich zu Höchstleistungen" },
      { icon: "nutrition", title: "Vielfältiges Angebot", text: "Kraft, Ausdauer, Mobility und mehr" }
    ],
    packages: [
      { name: "Flex", sessions: "4 Kurse/Monat", price: "59", features: ["4 Gruppenkurse", "Freie Kurswahl", "Zugang zum Kursplan", "Probetraining gratis"] },
      { name: "Unlimited", sessions: "Unbegrenzt", price: "89", features: ["Unlimitierte Kurse", "Alle Kursformate", "Priority-Buchung", "Gastberechtigung 1x/Monat"], popular: true },
      { name: "Team", sessions: "2 Personen", price: "149", features: ["Unlimitiert für 2", "Partner-Rabatt", "Alle Kursformate", "Flexible Buchung"] }
    ],
    faq: [
      { q: "Welche Kurse bietet ihr an?", a: "Wir bieten Krafttraining, Functional Fitness, HIIT, Mobility, Core-Training und spezielle Kurse wie Boxing Fitness. Der Kursplan wechselt regelmäßig." },
      { q: "Kann ich als kompletter Anfänger mitmachen?", a: "Ja! Alle Kurse sind so aufgebaut, dass jeder Teilnehmer auf seinem eigenen Level trainiert. Die Trainer zeigen alternative Übungen für Anfänger." },
      { q: "Wie groß sind die Gruppen?", a: "Maximal 8 Personen pro Kurs. So garantieren wir, dass jeder die Aufmerksamkeit bekommt, die er braucht." },
      { q: "Muss ich vorher buchen?", a: "Ja, du buchst deinen Platz über unsere App oder Website. So kannst du sicher sein, dass ein Platz für dich reserviert ist." }
    ]
  },
  "fitness-bootcamp": {
    title: "Fitness Bootcamp",
    subtitle: "Intensiv, dynamisch, motivierend",
    metaDescription: "Intensives Fitness Bootcamp in Luxemburg. 4-Wochen Transformation mit HIIT, Functional Training und Ernährungsplan. Jetzt anmelden und durchstarten!",
    heroImage: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=1200&h=600&fit=crop",
    contentImage: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=800&h=500&fit=crop",
    intro: "Bereit für die Challenge deines Lebens? Unser 4-Wochen Bootcamp bringt dich an deine Grenzen – und darüber hinaus. Intensive Workouts, starke Community und sichtbare Ergebnisse.",
    description: `Das PTA Fitness Bootcamp ist unser intensivstes Programm. In vier Wochen bringen wir dich durch eine Kombination aus hochintensivem Training, strukturierter Ernährung und mentaler Stärke auf ein neues Fitnesslevel.

Das Bootcamp basiert auf dem Prinzip der progressiven Überlastung: Woche für Woche steigerst du dich, während dein Körper sich anpasst und stärker wird. Die Workouts kombinieren Functional Training, HIIT, Kraftübungen und Cardio zu einem ganzheitlichen Programm.

Was das Bootcamp besonders macht, ist die Gruppendynamik. Du trainierst mit anderen Teilnehmern, die dasselbe Ziel haben: In kurzer Zeit das Maximum herausholen. Diese Community-Energie ist ansteckend und trägt dich auch durch die härtesten Workouts.

Im Preis inbegriffen ist ein kompletter Ernährungsplan, der auf die intensiven Trainingswochen abgestimmt ist. Du bekommst alles, was du brauchst: Rezepte, Einkaufslisten und klare Anweisungen, was wann zu essen ist.`,
    benefits: [
      { icon: "target", title: "4 Wochen Fokus", text: "Strukturiertes Programm mit klarem Zeitrahmen" },
      { icon: "chart", title: "Sichtbare Ergebnisse", text: "Messbare Transformation in kurzer Zeit" },
      { icon: "clock", title: "Alles inklusive", text: "Training, Ernährung und Support in einem Paket" },
      { icon: "shield", title: "Professionelle Leitung", text: "Erfahrene Trainer führen durch jede Session" },
      { icon: "motivation", title: "Starke Community", text: "Trainiere mit Gleichgesinnten" },
      { icon: "nutrition", title: "Ernährungsplan", text: "Abgestimmte Ernährung für maximale Ergebnisse" }
    ],
    packages: [
      { name: "Bootcamp", sessions: "4 Wochen", price: "349", features: ["12 Gruppensessions", "Ernährungsplan", "Vorher/Nachher Assessment", "WhatsApp-Gruppe", "Bonus-Workouts für zuhause"], popular: true },
      { name: "Bootcamp Plus", sessions: "4 Wochen + 1:1", price: "499", features: ["Alles aus Bootcamp", "2x Personal Training", "Individuelle Ernährungsberatung", "1 Monat Follow-up Betreuung"] }
    ],
    faq: [
      { q: "Muss ich schon fit sein für das Bootcamp?", a: "Ein gewisses Fitnesslevel ist von Vorteil, aber nicht zwingend. Die Übungen werden auf verschiedene Level angepasst. Sprich uns an, wenn du unsicher bist." },
      { q: "Wie oft wird trainiert?", a: "3x pro Woche à 60 Minuten. Zusätzlich bekommst du Workouts für zuhause, die optional sind." },
      { q: "Was passiert nach dem Bootcamp?", a: "Du kannst in unsere regulären Kurse wechseln, ein weiteres Bootcamp machen oder mit Personal Training weitermachen. Wir beraten dich am Ende des Programms." },
      { q: "Wann startet das nächste Bootcamp?", a: "Wir starten alle 6-8 Wochen ein neues Bootcamp. Kontaktiere uns für die nächsten Termine." }
    ]
  },
  "rehabilitation": {
    title: "Rehabilitation & Aufbautraining",
    subtitle: "Zurück zu voller Beweglichkeit",
    metaDescription: "Professionelles Rehabilitationstraining in Luxemburg. Behutsamer Aufbau nach Verletzung oder OP. In Abstimmung mit Ärzten und Physiotherapeuten. Jetzt Termin vereinbaren!",
    heroImage: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=1200&h=600&fit=crop",
    contentImage: "https://images.unsplash.com/photo-1593164842264-854604db2260?w=800&h=500&fit=crop",
    intro: "Nach einer Verletzung, Operation oder bei chronischen Beschwerden ist der Weg zurück zur vollen Fitness eine Herausforderung. Bei PTA begleiten wir dich Schritt für Schritt – sicher, geduldig und professionell.",
    description: `Rehabilitation bei PTA bedeutet mehr als nur Übungen. Wir verstehen, dass eine Verletzung oder Operation nicht nur körperlich, sondern auch mental belastend sein kann. Deshalb begleiten wir dich ganzheitlich auf deinem Weg zurück zur vollen Leistungsfähigkeit.

Unser Rehabilitationsprogramm beginnt immer mit einer ausführlichen Analyse deiner Situation. Wir lesen die Berichte deines Arztes oder Physiotherapeuten, verstehen die Art deiner Verletzung und entwickeln einen individuellen Aufbauplan.

Der Fokus liegt auf behutsamer Progression. Wir starten mit sanften Bewegungen und Stabilisationsübungen, bevor wir schrittweise die Intensität steigern. Jede Phase baut auf der vorherigen auf, sodass dein Körper Zeit hat, sich anzupassen und stärker zu werden.

Besonders wichtig ist uns die Kommunikation mit deinem medizinischen Team. Wir arbeiten eng mit Ärzten und Physiotherapeuten zusammen, um sicherzustellen, dass das Training optimal auf deine Behandlung abgestimmt ist.`,
    benefits: [
      { icon: "target", title: "Individueller Plan", text: "Speziell auf deine Verletzung/OP abgestimmt" },
      { icon: "chart", title: "Behutsame Progression", text: "Schritt für Schritt zurück zur Fitness" },
      { icon: "clock", title: "Ärztliche Abstimmung", text: "Enge Zusammenarbeit mit deinem medizinischen Team" },
      { icon: "shield", title: "Schmerzfreies Training", text: "Wir arbeiten immer im schmerzfreien Bereich" },
      { icon: "motivation", title: "Mentale Unterstützung", text: "Wir verstehen die emotionale Seite der Reha" },
      { icon: "nutrition", title: "Langfristige Betreuung", text: "Von der Reha bis zur vollen Leistungsfähigkeit" }
    ],
    packages: [
      { name: "Reha Start", sessions: "8 Sessions", price: "Ab 129", features: ["Ausführliche Erstanalyse", "Individueller Reha-Plan", "8x Personal Training", "Übungen für zuhause", "Ärztliche Abstimmung"] },
      { name: "Reha Intensiv", sessions: "16 Sessions", price: "Ab 239", features: ["Alles aus Reha Start", "16x Personal Training", "Wöchentliche Anpassung", "Fortlaufende Dokumentation"], popular: true },
      { name: "Zurück zur Leistung", sessions: "24 Sessions", price: "Ab 349", features: ["Alles aus Reha Intensiv", "24x Personal Training", "Return-to-Sport Testing", "Präventionstraining"] }
    ],
    faq: [
      { q: "Wann kann ich nach einer OP mit dem Training beginnen?", a: "Das hängt von der Art der Operation ab. Wir starten erst, wenn dein Arzt grünes Licht gibt. Oft können wir aber schon sehr früh mit sanften Übungen beginnen." },
      { q: "Arbeitet ihr mit meinem Physiotherapeuten zusammen?", a: "Ja, unbedingt! Wir sehen uns als Ergänzung zur Physiotherapie und stimmen uns eng mit deinem Behandlungsteam ab." },
      { q: "Was ist, wenn ich während des Trainings Schmerzen habe?", a: "Schmerz ist immer ein Warnsignal. Wir arbeiten ausschließlich im schmerzfreien Bereich und passen die Übungen sofort an, wenn Beschwerden auftreten." },
      { q: "Wie lange dauert die Rehabilitation?", a: "Das ist sehr individuell und hängt von der Art und Schwere der Verletzung ab. Wir geben dir nach der Erstanalyse eine realistische Einschätzung." }
    ]
  },
  "sportmannschaften": {
    title: "Sportmannschaften",
    subtitle: "Leistung für dein Team",
    metaDescription: "Professionelles Athletiktraining für Sportmannschaften in Luxemburg. Teamspezifische Programme für Fußball, Handball, Basketball und mehr. Jetzt Team-Training anfragen!",
    heroImage: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&h=600&fit=crop",
    contentImage: "https://images.unsplash.com/photo-1580086319619-3ed498161c77?w=800&h=500&fit=crop",
    intro: "Ob Fußball, Handball, Basketball oder jede andere Sportart – professionelles Athletiktraining macht den Unterschied zwischen gut und großartig. Wir machen dein Team fit für die nächste Saison.",
    description: `Athletiktraining für Sportmannschaften bei PTA geht weit über klassisches Konditionstraining hinaus. Wir entwickeln sportartspezifische Programme, die genau auf die Anforderungen deiner Mannschaft zugeschnitten sind.

Unser Ansatz beginnt mit einer Analyse der sportartspezifischen Anforderungen. Welche Bewegungsmuster sind dominant? Welche Muskelgruppen werden besonders beansprucht? Welche typischen Verletzungen gilt es zu vermeiden? Auf dieser Basis entwickeln wir ein maßgeschneidertes Trainingsprogramm.

Das Training umfasst alle Aspekte der athletischen Leistungsfähigkeit: Kraft, Schnelligkeit, Ausdauer, Beweglichkeit und Koordination. Wir arbeiten mit modernen Trainingsmethoden und Equipment, um das Maximum aus jedem Spieler herauszuholen.

Ein wichtiger Fokus liegt auf der Verletzungsprävention. Durch gezieltes Training der stabilisierenden Muskulatur und Verbesserung der Bewegungsqualität reduzieren wir das Verletzungsrisiko deutlich. Das bedeutet weniger Ausfälle und eine leistungsfähigere Mannschaft.`,
    benefits: [
      { icon: "target", title: "Sportartspezifisch", text: "Programme für jede Sportart maßgeschneidert" },
      { icon: "chart", title: "Leistungssteigerung", text: "Messbare Verbesserung athletischer Parameter" },
      { icon: "clock", title: "Flexible Planung", text: "Training passend zu eurem Spielplan" },
      { icon: "shield", title: "Verletzungsprävention", text: "Weniger Ausfälle durch gezieltes Training" },
      { icon: "motivation", title: "Teambuilding", text: "Gemeinsames Training stärkt den Zusammenhalt" },
      { icon: "nutrition", title: "Saisonplanung", text: "Periodisierung über die gesamte Saison" }
    ],
    packages: [
      { name: "Team Basics", sessions: "1x/Woche", price: "Ab 499/Monat", features: ["1x wöchentliches Training", "Bis zu 20 Spieler", "Grundlegendes Athletiktraining", "Warm-up Routinen"] },
      { name: "Team Pro", sessions: "2x/Woche", price: "Ab 899/Monat", features: ["2x wöchentliches Training", "Bis zu 25 Spieler", "Sportartspezifisches Programm", "Individuelle Übungspläne", "Leistungsdiagnostik"], popular: true },
      { name: "Elite", sessions: "Individuell", price: "Auf Anfrage", features: ["Maßgeschneidertes Programm", "Unbegrenzte Spielerzahl", "Saisonplanung", "Einzelspieler-Betreuung", "Regenerationsstrategien"] }
    ],
    faq: [
      { q: "Für welche Sportarten bietet ihr Training an?", a: "Wir arbeiten mit allen Mannschaftssportarten: Fußball, Handball, Basketball, Volleyball, Rugby, Hockey und mehr. Auch Individualsportler können in Gruppen trainieren." },
      { q: "Wo findet das Training statt?", a: "Wir kommen zu euch! Training bei eurem Verein, auf eurem Platz oder in eurer Halle. Alternativ können Teams auch zu uns kommen." },
      { q: "Ab welchem Alter können Teams trainieren?", a: "Wir arbeiten mit Teams ab der U14. Für jüngere Mannschaften bieten wir angepasste Bewegungsprogramme an." },
      { q: "Wie läuft die Zusammenarbeit mit dem Vereinstrainer?", a: "Sehr eng! Wir stimmen uns mit dem Trainer ab, integrieren das Athletiktraining in den Trainingsplan und berichten regelmäßig über Fortschritte." }
    ]
  }
};

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const service = servicesData[resolvedParams.slug];
  if (!service) return {};

  return {
    title: `${service.title} | PTA Training Luxemburg`,
    description: service.metaDescription,
  };
}

const ServicePage = async ({ params }) => {
  const resolvedParams = await params;
  const service = servicesData[resolvedParams.slug];

  if (!service) {
    notFound();
  }

  // Generate FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faq.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  // Generate Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.metaDescription,
    "provider": {
      "@type": "LocalBusiness",
      "name": "PTA - Personal Training Academy",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Heiderscheid",
        "addressCountry": "LU"
      }
    },
    "areaServed": {
      "@type": "Country",
      "name": "Luxembourg"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${service.title} Pakete`,
      "itemListElement": service.packages.map(pkg => ({
        "@type": "Offer",
        "name": pkg.name,
        "description": pkg.features.join(", "),
        "price": pkg.price.replace("Ab ", "").replace("/Monat", ""),
        "priceCurrency": "EUR"
      }))
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <PageHeader
        heading={service.title}
        page={service.title}
        backgroundImage={service.heroImage}
      />

      {/* Hero Section */}
      <section className="pt_120 pb-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-clr_base font-caveat text-2xl mb-4 block">{service.subtitle}</span>
              <h2 className="text-white text-3xl lg:text-4xl font-bold mb-6">
                {service.title}
              </h2>
              <p className="text-clr_pra text-lg leading-relaxed mb-8">
                {service.intro}
              </p>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 font-medium px-8 py-4 text-lg capitalize relative bg-clr_base overflow-hidden rounded-[5px] duration-500 text-clr_subtitle before:absolute before:content-[''] before:bottom-full before:bg-[#aad302] before:left-0 before:w-full before:h-full before:duration-500 before:bg-opacity-80 hover:before:bottom-0"
              >
                <span className="z-10 relative duration-500">Jetzt anfragen</span>
                <ArrowRight className="z-10 relative duration-500 text-xl" />
              </Link>
            </div>
            <div>
              <img
                src={service.contentImage}
                alt={service.title}
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="pb-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-invert">
              {service.description.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-clr_pra text-lg leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="pb_120">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-clr_base font-caveat text-2xl mb-4 block">Vorteile</span>
            <h2 className="text-white text-3xl lg:text-4xl font-bold">
              Das bekommst du bei uns
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-common_bg p-6 rounded-lg"
               
               
               
              >
                <div className="w-12 h-12 bg-clr_base rounded-full flex items-center justify-center mb-4">
                  <CheckCircleFill className="text-clr_title text-xl" />
                </div>
                <h3 className="text-white text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-clr_pra">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pb_120 bg-common_bg">
        <div className="container py-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-clr_base font-caveat text-2xl mb-4 block">Pakete & Preise</span>
            <h2 className="text-white text-3xl lg:text-4xl font-bold">
              Wähle dein passendes Paket
            </h2>
          </div>
          <div className={`grid gap-8 ${service.packages.length === 2 ? 'md:grid-cols-2 max-w-4xl mx-auto' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
            {service.packages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-[#1a1a1a] p-8 rounded-lg relative ${pkg.popular ? 'ring-2 ring-clr_base' : ''}`}
               
               
               
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-clr_base text-clr_title text-sm font-semibold px-4 py-1 rounded-full">
                    Beliebt
                  </span>
                )}
                <h3 className="text-white text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-clr_pra mb-4">{pkg.sessions}</p>
                <div className="mb-6">
                  <span className="text-clr_base text-4xl font-bold">€{pkg.price}</span>
                  {!pkg.price.includes("Anfrage") && !pkg.price.includes("Ab") && (
                    <span className="text-clr_pra">/Monat</span>
                  )}
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-clr_pra">
                      <CheckCircleFill className="text-clr_base text-sm flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/kontakt"
                  className={`w-full inline-flex items-center justify-center gap-2 font-medium px-6 py-3 rounded-[5px] duration-300 ${
                    pkg.popular
                      ? 'bg-clr_base text-clr_title hover:bg-[#aad302]'
                      : 'bg-transparent border border-clr_base text-clr_base hover:bg-clr_base hover:text-clr_title'
                  }`}
                >
                  <span>Jetzt anfragen</span>
                  <ArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pb_120">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-clr_base font-caveat text-2xl mb-4 block">FAQ</span>
            <h2 className="text-white text-3xl lg:text-4xl font-bold">
              Häufig gestellte Fragen
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {service.faq.map((item, index) => (
              <div
                key={index}
                className="bg-common_bg p-6 rounded-lg"
               
               
               
              >
                <h3 className="text-white text-lg font-semibold mb-3">{item.q}</h3>
                <p className="text-clr_pra">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb_120">
        <div className="container">
          <div className="bg-common_bg rounded-lg p-10 lg:p-16 text-center">
            <h3 className="text-white text-3xl lg:text-4xl font-bold mb-6">
              Bereit loszulegen?
            </h3>
            <p className="text-clr_pra text-lg mb-8 max-w-2xl mx-auto">
              Buche jetzt dein kostenloses Erstgespräch und lass uns gemeinsam
              herausfinden, wie wir dich am besten unterstützen können.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 font-medium px-[30px] py-4 text-lg capitalize relative bg-clr_base overflow-hidden rounded-[5px] duration-500 text-clr_subtitle before:absolute before:content-[''] before:bottom-full before:bg-[#aad302] before:left-0 before:w-full before:h-full before:duration-500 before:bg-opacity-80 hover:before:bottom-0"
            >
              <span className="z-10 relative duration-500">Kostenloses Erstgespräch</span>
              <ArrowRight className="z-10 relative duration-500 text-xl" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicePage;
