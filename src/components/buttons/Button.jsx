export const Button = ({ currentStep, setCurrentStep }) => {
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
      {/* {currentStep > 1 && currentStep < 6 ? (
        <button onClick={nextStep} type="submit">
          Next question
        </button>
      ) : (
        <button onClick={prevStep} type="submit">
          Back
        </button>
      )} */}
      {currentStep > 1 && (
        <button onClick={prevStep} type="submit">
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
