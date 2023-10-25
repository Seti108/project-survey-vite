export const Question4 = ({ updateData, value, data }) => {
  const q4Input = (e) => updateData("q4", e.target.value);
  return (
    <>
      <h1>Question 4</h1>
      <label>What is your favorite thing about Halloween?</label>
      <br></br>
      <select type="text" onChange={q4Input} value={value}>
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
    </>
  );
};
