export const Question1 = ({ data, updateData }) => {
  const q1Input = (e) => updateData("q1", e.target.value);
  return (
    <>
      <h1>Question 1</h1>
      <label>What's your name?</label>
      <input
        type="text"
        title="Your name"
        placeholder="Your name"
        value={data}
        onChange={q1Input}
      />
    </>
  );
};

// // State to track the current step in the form
// const [currentStep, setCurrentStep] = useState(1);

// const nextStep = () => {
//   if (currentStep < 6) setCurrentStep(currentStep + 1);
// };

// // Function to move to the previous step in the form
// const prevStep = () => {
//   if (currentStep > 1) setCurrentStep(currentStep - 1);
// };

// ----------------------------------------------------------
// export function FormStepOne(props: FormStepOneProps) {
//   const { setSteps, name, setName } = props;
//   const [error, setError] = useState("");

//   function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
//     const inputValue = event.target.value;
//     setName(inputValue.charAt(0).toUpperCase() + inputValue.slice(1));
//   }

//   function handleSubmit(event: FormEvent<HTMLFormElement>) {
//     event.preventDefault();

//     if (name.trim() === "") {
//       setError("Name cannot be empty.");
//     } else {
//       setError("");
//       setSteps(Steps.FAIRY_TALE_NAME);
//     }
//   }

// return (
//   <div>
//     <p>What is your name?</p>
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         title="Your name"
//         placeholder="Your name"
//         value={name}
//         onChange={handleNameChange}
//       />
//       {error && <div style={{ color: "red" }}>{error}</div>}
//       <button type="submit">Submit</button>
//     </form>
//   </div>
// );
// }
