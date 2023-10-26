import { Button } from "../buttons/Button";
export const Question2 = ({
  data,
  updateData,
  currentStep,
  setCurrentStep,
}) => {
  const q2Input = (e) => updateData("q2", e.target.value);
  const errorMessage = "Choose a favourite season please";
  return (
    <>
      <h1>Question 2</h1>
      <p>What's your favourite season?</p>
      <div className="radio-buttons">
        <label>
          <input
            type="radio"
            name="options"
            value="fall"
            onChange={q2Input}
            checked={data === "fall"}
          />
          Fall
        </label>
        <br></br>
        <label>
          <input
            type="radio"
            name="options"
            value="winter"
            onChange={q2Input}
            checked={data === "winter"}
          />
          Winter
        </label>
        <br></br>
        <label>
          <input
            type="radio"
            name="options"
            value="summer"
            onChange={q2Input}
            checked={data === "summer"}
          />
          Summer
        </label>
        <br></br>
        <label>
          <input
            type="radio"
            name="options"
            value="spring"
            onChange={q2Input}
            checked={data === "spring"}
          />
          Spring
        </label>
        <br></br>
      </div>

      <Button
        data={data}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        errorMessage={errorMessage}
      />
    </>
  );
};

// checked={ageGroup === "0 - 18"}
