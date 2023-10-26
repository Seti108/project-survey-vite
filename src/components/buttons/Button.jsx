import "./Button.css";

export const Button = ({ currentStep, setCurrentStep, data }) => {
  const nextStep = (e) => {
    e.preventDefault();
    setCurrentStep(currentStep + 1);
  };

  const prevStep = (e) => {
    e.preventDefault();
    setCurrentStep(currentStep - 1);
  };

  return (
    <>
      <div className="buttons-container">
        {currentStep > 1 && (
          <button className="button-back" onClick={prevStep} type="submit">
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
