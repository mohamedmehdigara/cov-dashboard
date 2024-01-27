import React, { useState } from "react";

const SymptomsChecker = () => {
  const [symptoms, setSymptoms] = useState({
    cough: false,
    fever: false,
    shortnessOfBreath: false,
    soreThroat: false,
    lossOfTasteOrSmell: false,
  });

  const handleSymptomChange = (symptom) => {
    setSymptoms((prevSymptoms) => ({
      ...prevSymptoms,
      [symptom]: !prevSymptoms[symptom],
    }));
  };

  const determineAction = () => {
    const hasSevereSymptoms =
      symptoms.shortnessOfBreath || symptoms.lossOfTasteOrSmell;

    if (hasSevereSymptoms) {
      return "Seek medical attention immediately.";
    }

    const hasMildSymptoms =
      symptoms.cough || symptoms.fever || symptoms.soreThroat;

    if (hasMildSymptoms) {
      return "Consider consulting a healthcare professional.";
    }

    return "Your symptoms suggest you may not need immediate medical attention. Practice self-care and monitor your symptoms.";
  };

  return (
    <div className="symptoms-checker-container">
      <h2>Symptoms Checker</h2>
      <form>
        <label>
          <input
            type="checkbox"
            checked={symptoms.cough}
            onChange={() => handleSymptomChange("cough")}
          />
          Cough
        </label>
        <label>
          <input
            type="checkbox"
            checked={symptoms.fever}
            onChange={() => handleSymptomChange("fever")}
          />
          Fever
        </label>
        <label>
          <input
            type="checkbox"
            checked={symptoms.shortnessOfBreath}
            onChange={() => handleSymptomChange("shortnessOfBreath")}
          />
          Shortness of Breath
        </label>
        <label>
          <input
            type="checkbox"
            checked={symptoms.soreThroat}
            onChange={() => handleSymptomChange("soreThroat")}
          />
          Sore Throat
        </label>
        <label>
          <input
            type="checkbox"
            checked={symptoms.lossOfTasteOrSmell}
            onChange={() => handleSymptomChange("lossOfTasteOrSmell")}
          />
          Loss of Taste or Smell
        </label>
      </form>
      <div className="symptoms-result">
        <h3>Result:</h3>
        <p>{determineAction()}</p>
      </div>
    </div>
  );
};

export default SymptomsChecker;
