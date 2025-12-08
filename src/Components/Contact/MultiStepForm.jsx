'use client'
import React, { useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Trophy,
  GraphDownArrow,
  Activity,
  Lightning,
  Heart,
  People,
  PersonArmsUp,
  PeopleFill,
  Fire,
  Egg,
  Bandaid,
  Dribbble,
  BarChart,
  Clock,
  HeartPulse,
  Person,
  Envelope,
  Telephone,
  ChatText,
  Sunrise,
  Sun,
  SunFill,
  Moon,
  Calendar
} from "react-bootstrap-icons";

const goalOptions = [
  { id: "muskelaufbau", label: "Muskelaufbau", icon: Trophy },
  { id: "abnehmen", label: "Abnehmen", icon: GraphDownArrow },
  { id: "fitter", label: "Fitter werden", icon: Activity },
  { id: "energie", label: "Mehr Energie", icon: Lightning },
  { id: "rehabilitation", label: "Rehabilitation", icon: Heart },
  { id: "teamtraining", label: "Teamtraining", icon: People },
];

const serviceOptions = [
  { id: "personal-training", label: "Personal Training", icon: PersonArmsUp },
  { id: "gruppentraining", label: "Gruppentraining", icon: PeopleFill },
  { id: "fitness-bootcamp", label: "Fitness Bootcamp", icon: Fire },
  { id: "ernaehrungsberatung", label: "Ernährungsberatung", icon: Egg },
  { id: "rehabilitation", label: "Rehabilitation", icon: Bandaid },
  { id: "sportmannschaften", label: "Sportmannschaften", icon: Dribbble },
];

const fitnessLevels = [
  { id: "anfaenger", label: "Anfänger", icon: "1" },
  { id: "fortgeschritten", label: "Fortgeschritten", icon: "2" },
  { id: "profi", label: "Profi", icon: "3" },
];

const availabilityOptions = [
  { id: "morgens", label: "Morgens (6–12 Uhr)", icon: Sunrise },
  { id: "mittags", label: "Mittags (12–14 Uhr)", icon: Sun },
  { id: "nachmittags", label: "Nachmittags (14–18 Uhr)", icon: SunFill },
  { id: "abends", label: "Abends (18–22 Uhr)", icon: Moon },
  { id: "wochenende", label: "Wochenende", icon: Calendar },
];

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [formData, setFormData] = useState({
    goals: [],
    service: "",
    fitnessLevel: "",
    availability: [],
    healthIssues: "no",
    healthDetails: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const progressPercentage = Math.round((currentStep / 3) * 100);

  const toggleGoal = (goalId) => {
    setFormData((prev) => ({
      ...prev,
      goals: prev.goals.includes(goalId)
        ? prev.goals.filter((g) => g !== goalId)
        : [...prev.goals, goalId],
    }));
  };

  const toggleAvailability = (availId) => {
    setFormData((prev) => ({
      ...prev,
      availability: prev.availability.includes(availId)
        ? prev.availability.filter((a) => a !== availId)
        : [...prev.availability, availId],
    }));
  };

  const canProceedStep1 = formData.goals.length > 0 && formData.service !== "";
  const canProceedStep2 = formData.fitnessLevel !== "";
  const canSubmit = formData.name.trim() !== "" && formData.email.trim() !== "";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!canSubmit) return;

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setSubmitError("Es ist ein Fehler aufgetreten. Bitte versuche es erneut.");
      }
    } catch (error) {
      setSubmitError("Es ist ein Fehler aufgetreten. Bitte versuche es erneut.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-common_bg p-[30px] rounded-lg text-center py-20">
        <div className="w-20 h-20 rounded-full bg-clr_base flex items-center justify-center mx-auto mb-6">
          <Check className="text-4xl text-clr_subtitle" />
        </div>
        <h3 className="text-white text-2xl font-medium mb-4">
          Vielen Dank für deine Anfrage!
        </h3>
        <p className="text-clr_pra text-lg">
          Wir melden uns innerhalb von 24 Stunden bei dir.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-common_bg p-[30px] rounded-lg">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-3">
          <span className="text-clr_pra text-sm" id="step-label">Schritt {currentStep} von 3</span>
          <span className="text-clr_base font-semibold">{progressPercentage}%</span>
        </div>
        <div
          className="h-2 bg-[rgb(38,37,37)] rounded-full overflow-hidden"
          role="progressbar"
          aria-valuenow={progressPercentage}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-labelledby="step-label"
        >
          <div
            className="h-full bg-clr_base rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Step 1: Dein Ziel */}
        {currentStep === 1 && (
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Trophy className="text-clr_base text-2xl" aria-hidden="true" />
                <h3 className="text-white text-2xl font-medium">Dein Ziel</h3>
              </div>
              <p className="text-clr_pra mb-6">Was möchtest du erreichen?</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {goalOptions.map((goal) => {
                  const IconComponent = goal.icon;
                  return (
                    <button
                      key={goal.id}
                      type="button"
                      onClick={() => toggleGoal(goal.id)}
                      className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                        formData.goals.includes(goal.id)
                          ? "border-clr_base bg-[rgb(29,29,29)]"
                          : "border-clr_cusborder bg-[rgb(29,29,29)] hover:border-clr_pra"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <IconComponent className={`text-xl ${formData.goals.includes(goal.id) ? "text-clr_base" : "text-clr_pra"}`} />
                        <span className="text-white text-sm sm:text-base flex-1">{goal.label}</span>
                        {formData.goals.includes(goal.id) && (
                          <Check className="text-clr_base text-lg" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <p className="text-clr_pra mb-4">Welches Angebot interessiert dich?</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {serviceOptions.map((service) => {
                  const IconComponent = service.icon;
                  return (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => setFormData((prev) => ({ ...prev, service: service.id }))}
                      className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                        formData.service === service.id
                          ? "border-clr_base bg-[rgb(29,29,29)]"
                          : "border-clr_cusborder bg-[rgb(29,29,29)] hover:border-clr_pra"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <IconComponent className={`text-xl ${formData.service === service.id ? "text-clr_base" : "text-clr_pra"}`} />
                        <span className="text-white text-sm sm:text-base flex-1">{service.label}</span>
                        {formData.service === service.id && (
                          <Check className="text-clr_base text-lg" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Ueber dich */}
        {currentStep === 2 && (
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <BarChart className="text-clr_base text-2xl" aria-hidden="true" />
                <h3 className="text-white text-2xl font-medium">Über dich</h3>
              </div>
              <p className="text-clr_pra mb-6">Wie schätzt du dein aktuelles Fitnesslevel ein?</p>
              <div className="grid grid-cols-3 gap-3">
                {fitnessLevels.map((level) => (
                  <button
                    key={level.id}
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, fitnessLevel: level.id }))}
                    className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                      formData.fitnessLevel === level.id
                        ? "border-clr_base bg-[rgb(29,29,29)]"
                        : "border-clr_cusborder bg-[rgb(29,29,29)] hover:border-clr_pra"
                    }`}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        formData.fitnessLevel === level.id
                          ? "bg-clr_base text-clr_subtitle"
                          : "bg-[rgb(38,37,37)] text-clr_pra"
                      }`}>
                        {level.icon}
                      </span>
                      <span className="text-white text-sm sm:text-base">{level.label}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <Clock className="text-clr_base text-xl" aria-hidden="true" />
                <p className="text-clr_pra">Wann hast du Zeit zum Trainieren?</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {availabilityOptions.map((avail) => {
                  const IconComponent = avail.icon;
                  return (
                    <button
                      key={avail.id}
                      type="button"
                      onClick={() => toggleAvailability(avail.id)}
                      className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                        formData.availability.includes(avail.id)
                          ? "border-clr_base bg-[rgb(29,29,29)]"
                          : "border-clr_cusborder bg-[rgb(29,29,29)] hover:border-clr_pra"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <IconComponent className={`text-lg ${formData.availability.includes(avail.id) ? "text-clr_base" : "text-clr_pra"}`} />
                        <span className="text-white text-sm flex-1">{avail.label}</span>
                        {formData.availability.includes(avail.id) && (
                          <Check className="text-clr_base text-lg" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <HeartPulse className="text-clr_base text-xl" aria-hidden="true" />
                <p className="text-clr_pra">Gibt es gesundheitliche Einschränkungen?</p>
              </div>
              <div className="flex gap-4 mb-4">
                <button
                  type="button"
                  onClick={() => setFormData((prev) => ({ ...prev, healthIssues: "no", healthDetails: "" }))}
                  className={`px-6 py-3 rounded-lg border-2 transition-all duration-200 ${
                    formData.healthIssues === "no"
                      ? "border-clr_base bg-[rgb(29,29,29)]"
                      : "border-clr_cusborder bg-[rgb(29,29,29)] hover:border-clr_pra"
                  }`}
                >
                  <span className="text-white">Nein, keine</span>
                </button>
                <button
                  type="button"
                  onClick={() => setFormData((prev) => ({ ...prev, healthIssues: "yes" }))}
                  className={`px-6 py-3 rounded-lg border-2 transition-all duration-200 ${
                    formData.healthIssues === "yes"
                      ? "border-clr_base bg-[rgb(29,29,29)]"
                      : "border-clr_cusborder bg-[rgb(29,29,29)] hover:border-clr_pra"
                  }`}
                >
                  <span className="text-white">Ja</span>
                </button>
              </div>
              {formData.healthIssues === "yes" && (
                <div>
                  <label htmlFor="health-details" className="sr-only">Beschreibe deine gesundheitlichen Einschränkungen</label>
                  <textarea
                    id="health-details"
                    value={formData.healthDetails}
                    onChange={(e) => setFormData((prev) => ({ ...prev, healthDetails: e.target.value }))}
                    placeholder="Bitte beschreibe kurz deine Einschränkungen..."
                    rows="3"
                    className="w-full py-[18px] px-5 rounded-[10px] bg-[rgb(29_29_29)] border border-clr_cusborder text-white outline-none placeholder:text-clr_pra focus:border-clr_base focus:ring-2 focus:ring-clr_base/20 transition-colors"
                  />
                </div>
              )}
            </div>
          </div>
        )}

        {/* Step 3: Kontakt */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Envelope className="text-clr_base text-2xl" aria-hidden="true" />
                <h3 className="text-white text-2xl font-medium">Kontakt</h3>
              </div>
              <p className="text-clr_pra mb-6">Fast geschafft! Wie können wir dich erreichen?</p>
            </div>

            {/* Error Message */}
            {submitError && (
              <div
                className="p-4 rounded-lg bg-red-900/30 border border-red-500 text-red-300"
                role="alert"
                aria-live="polite"
              >
                {submitError}
              </div>
            )}

            <div className="relative">
              <label htmlFor="contact-name" className="sr-only">Dein Name (erforderlich)</label>
              <Person className="absolute left-4 top-1/2 -translate-y-1/2 text-clr_pra text-xl" aria-hidden="true" />
              <input
                id="contact-name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                placeholder="Dein Name *"
                aria-required="true"
                className="w-full py-[18px] pl-12 pr-5 rounded-[10px] bg-[rgb(29_29_29)] border border-clr_cusborder text-white outline-none placeholder:text-clr_pra focus:border-clr_base focus:ring-2 focus:ring-clr_base/20 transition-colors"
                required
              />
            </div>

            <div className="relative">
              <label htmlFor="contact-email" className="sr-only">Deine E-Mail-Adresse (erforderlich)</label>
              <Envelope className="absolute left-4 top-1/2 -translate-y-1/2 text-clr_pra text-xl" aria-hidden="true" />
              <input
                id="contact-email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                placeholder="Deine E-Mail-Adresse *"
                aria-required="true"
                className="w-full py-[18px] pl-12 pr-5 rounded-[10px] bg-[rgb(29_29_29)] border border-clr_cusborder text-white outline-none placeholder:text-clr_pra focus:border-clr_base focus:ring-2 focus:ring-clr_base/20 transition-colors"
                required
              />
            </div>

            <div className="relative">
              <label htmlFor="contact-phone" className="sr-only">Deine Telefonnummer (optional)</label>
              <Telephone className="absolute left-4 top-1/2 -translate-y-1/2 text-clr_pra text-xl" aria-hidden="true" />
              <input
                id="contact-phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                placeholder="Deine Telefonnummer (optional)"
                className="w-full py-[18px] pl-12 pr-5 rounded-[10px] bg-[rgb(29_29_29)] border border-clr_cusborder text-white outline-none placeholder:text-clr_pra focus:border-clr_base focus:ring-2 focus:ring-clr_base/20 transition-colors"
              />
            </div>

            <div className="relative">
              <label htmlFor="contact-message" className="sr-only">Deine Nachricht (optional)</label>
              <ChatText className="absolute left-4 top-5 text-clr_pra text-xl" aria-hidden="true" />
              <textarea
                id="contact-message"
                value={formData.message}
                onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                placeholder="Deine Nachricht (optional)"
                rows="4"
                className="w-full py-[18px] pl-12 pr-5 rounded-[10px] bg-[rgb(29_29_29)] border border-clr_cusborder text-white outline-none placeholder:text-clr_pra focus:border-clr_base focus:ring-2 focus:ring-clr_base/20 transition-colors"
              />
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8 pt-6 border-t border-clr_cusborder">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={() => setCurrentStep((prev) => prev - 1)}
              aria-label={`Zurück zu Schritt ${currentStep - 1}`}
              className="flex items-center gap-2 px-6 py-3 text-clr_pra hover:text-white transition-colors"
            >
              <ArrowLeft aria-hidden="true" />
              <span>Zurück</span>
            </button>
          ) : (
            <div />
          )}

          {currentStep < 3 ? (
            <button
              type="button"
              onClick={() => setCurrentStep((prev) => prev + 1)}
              disabled={currentStep === 1 ? !canProceedStep1 : !canProceedStep2}
              aria-label={`Weiter zu Schritt ${currentStep + 1}`}
              className={`flex items-center gap-2 px-8 py-4 rounded-[5px] font-medium transition-all duration-300 ${
                (currentStep === 1 ? canProceedStep1 : canProceedStep2)
                  ? "bg-clr_base text-clr_subtitle hover:bg-[#aad302]"
                  : "bg-[rgb(38,37,37)] text-clr_pra cursor-not-allowed"
              }`}
            >
              <span>Weiter</span>
              <ArrowRight aria-hidden="true" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={!canSubmit || isSubmitting}
              aria-label={isSubmitting ? "Anfrage wird gesendet" : "Anfrage absenden"}
              className={`flex items-center gap-2 px-8 py-4 rounded-[5px] font-medium transition-all duration-300 ${
                canSubmit && !isSubmitting
                  ? "bg-clr_base text-clr_subtitle hover:bg-[#aad302]"
                  : "bg-[rgb(38,37,37)] text-clr_pra cursor-not-allowed"
              }`}
            >
              <span>{isSubmitting ? "Wird gesendet..." : "Anfrage senden"}</span>
              {!isSubmitting && <ArrowRight aria-hidden="true" />}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
