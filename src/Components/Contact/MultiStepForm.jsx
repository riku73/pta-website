'use client'
import React, { useState } from "react";
import { ArrowRight, ArrowLeft, Check } from "react-bootstrap-icons";

const goalOptions = [
  { id: "muskelaufbau", label: "Muskelaufbau" },
  { id: "abnehmen", label: "Abnehmen" },
  { id: "fitter", label: "Fitter werden" },
  { id: "energie", label: "Mehr Energie" },
  { id: "rehabilitation", label: "Rehabilitation" },
  { id: "teamtraining", label: "Teamtraining" },
];

const serviceOptions = [
  { id: "personal-training", label: "Personal Training" },
  { id: "gruppentraining", label: "Gruppentraining" },
  { id: "fitness-bootcamp", label: "Fitness Bootcamp" },
  { id: "ernaehrungsberatung", label: "Ernährungsberatung" },
  { id: "rehabilitation", label: "Rehabilitation" },
  { id: "sportmannschaften", label: "Sportmannschaften" },
];

const fitnessLevels = [
  { id: "anfaenger", label: "Anfänger" },
  { id: "fortgeschritten", label: "Fortgeschritten" },
  { id: "profi", label: "Profi" },
];

const availabilityOptions = [
  { id: "morgens", label: "Morgens (6–12 Uhr)" },
  { id: "mittags", label: "Mittags (12–14 Uhr)" },
  { id: "nachmittags", label: "Nachmittags (14–18 Uhr)" },
  { id: "abends", label: "Abends (18–22 Uhr)" },
  { id: "wochenende", label: "Wochenende" },
];

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("Es ist ein Fehler aufgetreten. Bitte versuche es erneut.");
      }
    } catch (error) {
      alert("Es ist ein Fehler aufgetreten. Bitte versuche es erneut.");
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
        <h3 className="text-white text-2xl font-semibold mb-4">
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
          <span className="text-clr_pra text-sm">Schritt {currentStep} von 3</span>
          <span className="text-clr_base font-semibold">{progressPercentage}%</span>
        </div>
        <div className="h-2 bg-[rgb(38,37,37)] rounded-full overflow-hidden">
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
              <h3 className="text-white text-2xl font-semibold mb-2">Dein Ziel</h3>
              <p className="text-clr_pra mb-6">Was möchtest du erreichen?</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {goalOptions.map((goal) => (
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
                    <div className="flex items-center justify-between">
                      <span className="text-white text-sm sm:text-base">{goal.label}</span>
                      {formData.goals.includes(goal.id) && (
                        <Check className="text-clr_base text-lg" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-clr_pra mb-4">Welches Angebot interessiert dich?</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {serviceOptions.map((service) => (
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
                    <div className="flex items-center justify-between">
                      <span className="text-white text-sm sm:text-base">{service.label}</span>
                      {formData.service === service.id && (
                        <Check className="text-clr_base text-lg" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Ueber dich */}
        {currentStep === 2 && (
          <div className="space-y-8">
            <div>
              <h3 className="text-white text-2xl font-semibold mb-2">Über dich</h3>
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
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-white text-sm sm:text-base">{level.label}</span>
                      {formData.fitnessLevel === level.id && (
                        <Check className="text-clr_base text-lg" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-clr_pra mb-4">Wann hast du Zeit zum Trainieren?</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {availabilityOptions.map((avail) => (
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
                    <div className="flex items-center justify-between">
                      <span className="text-white text-sm">{avail.label}</span>
                      {formData.availability.includes(avail.id) && (
                        <Check className="text-clr_base text-lg" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-clr_pra mb-4">Gibt es gesundheitliche Einschränkungen?</p>
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
                <textarea
                  value={formData.healthDetails}
                  onChange={(e) => setFormData((prev) => ({ ...prev, healthDetails: e.target.value }))}
                  placeholder="Bitte beschreibe kurz deine Einschränkungen..."
                  rows="3"
                  className="w-full py-[18px] px-5 rounded-[10px] bg-[rgb(29_29_29)] border border-clr_cusborder text-white outline-none placeholder:text-clr_pra"
                />
              )}
            </div>
          </div>
        )}

        {/* Step 3: Kontakt */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <div>
              <h3 className="text-white text-2xl font-semibold mb-2">Kontakt</h3>
              <p className="text-clr_pra mb-6">Fast geschafft! Wie können wir dich erreichen?</p>
            </div>

            <div>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                placeholder="Dein Name *"
                className="w-full py-[18px] px-5 rounded-[10px] bg-[rgb(29_29_29)] border border-clr_cusborder text-white outline-none placeholder:text-clr_pra"
                required
              />
            </div>

            <div>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                placeholder="Deine E-Mail-Adresse *"
                className="w-full py-[18px] px-5 rounded-[10px] bg-[rgb(29_29_29)] border border-clr_cusborder text-white outline-none placeholder:text-clr_pra"
                required
              />
            </div>

            <div>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                placeholder="Deine Telefonnummer (optional)"
                className="w-full py-[18px] px-5 rounded-[10px] bg-[rgb(29_29_29)] border border-clr_cusborder text-white outline-none placeholder:text-clr_pra"
              />
            </div>

            <div>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                placeholder="Deine Nachricht (optional)"
                rows="4"
                className="w-full py-[18px] px-5 rounded-[10px] bg-[rgb(29_29_29)] border border-clr_cusborder text-white outline-none placeholder:text-clr_pra"
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
              className="flex items-center gap-2 px-6 py-3 text-clr_pra hover:text-white transition-colors"
            >
              <ArrowLeft />
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
              className={`flex items-center gap-2 px-8 py-4 rounded-[5px] font-medium transition-all duration-300 ${
                (currentStep === 1 ? canProceedStep1 : canProceedStep2)
                  ? "bg-clr_base text-clr_subtitle hover:bg-[#aad302]"
                  : "bg-[rgb(38,37,37)] text-clr_pra cursor-not-allowed"
              }`}
            >
              <span>Weiter</span>
              <ArrowRight />
            </button>
          ) : (
            <button
              type="submit"
              disabled={!canSubmit || isSubmitting}
              className={`flex items-center gap-2 px-8 py-4 rounded-[5px] font-medium transition-all duration-300 ${
                canSubmit && !isSubmitting
                  ? "bg-clr_base text-clr_subtitle hover:bg-[#aad302]"
                  : "bg-[rgb(38,37,37)] text-clr_pra cursor-not-allowed"
              }`}
            >
              <span>{isSubmitting ? "Wird gesendet..." : "Anfrage senden"}</span>
              {!isSubmitting && <ArrowRight />}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
