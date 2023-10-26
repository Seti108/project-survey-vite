import { Question1 } from "./Question1";
import { Question2 } from "./Question2";
import { Question3 } from "./Question3";
import { Question4 } from "./Question4";
import { Question5 } from "./Question5";
import { Results } from "./Results";
import { Button } from "../buttons/Button";
import { useState } from "react";
import "./QuestionsAndAnswers.css";
// import { Button } from "../buttons/Button";

export const QuestionsAndAnswers = () => {
  const [data, setData] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
  });

  // Function to rest app and data
  const resetApp = (e) => {
    e.preventDefault();
    setData({
      q1: "",
      q2: "",
      q3: "",
      q4: "",
      q5: "",
    });
    setCurrentStep(1);
  };

  const updateData = (key, value) => {
    setData((answers) => ({ ...answers, [key]: value }));
  };

  const [currentStep, setCurrentStep] = useState(1);
  // A function to

  return (
    <>
      <form>
        {currentStep === 1 && (
          <Question1 updateData={updateData} data={data.q1} />
        )}
        {currentStep === 2 && (
          <Question2 updateData={updateData} data={data.q2} />
        )}
        {currentStep === 3 && (
          <Question3 updateData={updateData} data={data.q3} />
        )}
        {currentStep === 4 && (
          <Question4 updateData={updateData} data={data.q4} />
        )}
        {currentStep === 5 && (
          <Question5 updateData={updateData} data={data.q5} />
        )}
        {currentStep === 6 && <Results data={data} resetApp={resetApp} />}
        {currentStep < 6 && (
          <Button
            data={data}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
        )}
      </form>
    </>
  );
};

// {/* Navigation buttons */}
// <div className="multi-step-form">
// {/* Show the "Back" button if not on the first step */}
// {currentStep > 1 && <button onClick={prevStep}>Back</button>}
// {/* Show the "Next" button if not on the last step, otherwise show the "Submit" button */}
// {currentStep < 6 ? (
//   <button onClick={nextStep}>Next</button>
// ) : (
//   <button onClick={submitForm}>Submit</button>
// )}
