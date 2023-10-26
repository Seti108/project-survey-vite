import { Button } from "../buttons/Button";
export const Question3 = ({
  data,
  updateData,
  currentStep,
  setCurrentStep,
}) => {
  const q3Input = (e) => updateData("q3", e.target.value);
  const errorMessage = "Please input your favourite activity";
  return (
    <>
      <h1>Question 3</h1>
      <label>What is your favorite activity in {data.q2}?</label>
      <br></br>
      <input
        type="text"
        title="activity"
        placeholder="Your favorite activity"
        value={data.q3}
        onChange={q3Input}
        autoFocus
      />
      <Button
        data={data.q3}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        errorMessage={errorMessage}
      />
    </>
  );
};
