import "./Button.css";
import { useState } from "react";

export const Button = ({ currentStep, setCurrentStep, data, errorMessage }) => {
  const [error, setError] = useState(false);
  const nextStep = (e) => {
    e.preventDefault();
    if (data === "") {
      return setError(errorMessage);
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = (e) => {
    e.preventDefault();
    setCurrentStep(currentStep - 1);
  };

  return (
    <>
      <div className="buttons-container">
        {currentStep > 1 && (
          <button className="button-back" onClick={prevStep}>
            Back
          </button>
        )}

        {currentStep < 5 ? (
          <button onClick={nextStep} type="submit">
            Next question
          </button>
        ) : (
          <button onClick={nextStep} type="submit">
            Submit
          </button>
        )}
      </div>
      <div className="error-message">{error}</div>
    </>
  );
};

/* {currentStep > 1 && (
        <button onClick={prevStep} type="submit">
          Back
        </button>
      )}
      {
        currentStep < 6 ? 
      }
      <button onClick={nextStep} type="submit">
        Next question
      </button>
      <button onClick={previousStep}>Previous step</button> */
