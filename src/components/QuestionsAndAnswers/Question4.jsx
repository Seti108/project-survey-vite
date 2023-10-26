import { Button } from "../buttons/Button";
export const Question4 = ({
  data,
  updateData,
  currentStep,
  setCurrentStep,
}) => {
  const q4Input = (e) => updateData("q4", e.target.value);
  const errorMessage = "Please choose your favourite thing about Halloween";
  return (
    <>
      <h1>Question 4</h1>
      <label>What is your favorite thing about Halloween?</label>
      <br></br>
      <select type="text" onChange={q4Input} value={data}>
        <option value="">Choose option:</option>
        <option value="pumpkin pies" onChange={q4Input}>
          Pumpkin pies
        </option>
        <option value="trick or treat" onChange={q4Input}>
          Trick or Treat
        </option>
        <option value="horror movies" onChange={q4Input}>
          Horror movies
        </option>
      </select>
      <Button
        data={data}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        errorMessage={errorMessage}
      />
    </>
  );
};
