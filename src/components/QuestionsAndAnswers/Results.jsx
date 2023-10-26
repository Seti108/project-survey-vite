export const Results = ({ data, resetApp }) => {
  return (
    <>
      <h1>Your results:</h1>
      <p>
        Halloween is a great holiday for indulging in {data.q4}. Don't you think{" "}
        {data.q1}?
      </p>
      <p>
        Your favourite season is {data.q2}, maybe because of{" "}
        {data.q3.toLowerCase()}?
      </p>
      {data.q5 > 3 && (
        <p>
          We're happy to hear you're as exited about Halloween as we are. Have a
          great spooky season!
        </p>
      )}
      {data.q5 < 3 && (
        <p>
          Even though you don't care much for Halloween, we hope you have a good
          one!
        </p>
      )}
      <button onClick={resetApp}>Start again</button>
    </>
  );
};
