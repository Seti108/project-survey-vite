export const Question2 = ({ updateData, data, value, nextStep }) => {
  const q2Input = (e) => updateData("q2", e.target.value);
  return (
    <>
      <h1>Question 2</h1>
      <p>What's your favorit season?</p>
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
    </>
  );
};

// checked={ageGroup === "0 - 18"}
