import { Button } from "../buttons/Button";
export const Question5 = ({
  data,
  updateData,
  currentStep,
  setCurrentStep,
}) => {
  const q5Input = (e) => updateData("q5", e.target.value);
  const errorMessage = "Let us know how exited you are about Halloween!";
  return (
    <>
      <h1>Question 5</h1>
      <label>How exited are you about Halloween on a scale of 1 - 5?</label>
      <br></br>
      <span>1</span>
      <input
        type="range"
        min="1"
        max="5"
        onChange={q5Input}
        value={data}
      ></input>
      <span>5</span>
      <p></p>
      <Button
        data={data}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        errorMessage={errorMessage}
      />
    </>
  );
};
