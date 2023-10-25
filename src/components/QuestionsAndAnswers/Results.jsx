export const Results = ({ data, resetApp }) => {
  let q5Exitement;
  if (data.q5 < 3) {
    q5Exitement = `Even though you don't care much about Halloween, we hope you have a
        good one!`;
  } else {
    q5Exitement = `We're happy to hear you're as exited about Halloween as we are. Have a great sppoky season!`;
  }

  return (
    <>
      <h1>Your results:</h1>
      <p>
        Helloween is a great holiday indulging in {data.q4}. Don't you think{" "}
        {data.q1}?
      </p>
      <p>
        Your favourite season is {data.q2}, maybe because of {data.q3}?
      </p>
      <p>{q5Exitement}</p>
      <button onClick={resetApp}>Start again</button>
    </>
  );
};
