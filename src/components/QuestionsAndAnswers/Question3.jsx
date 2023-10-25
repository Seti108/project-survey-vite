export const Question3 = ({ updateData, value, data }) => {
  const q3Input = (e) => updateData("q3", e.target.value);
  return (
    <>
      <h1>What is your favorite activity in {data.q2}?</h1>
      <input
        type="text"
        title="activity"
        placeholder="Your favorite activity"
        value={data.q3}
        onChange={q3Input}
      />
    </>
  );
};
