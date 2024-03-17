import { useState } from "react";
import questions from "../data/questions.json";
function Quiz() {
  const [tickedOptions, setTickedOptions] = useState([]);

  const optionsClicked = (val) => {
    console.log(val);
  };

  // const result = ()=>{
  //   tickedOptions
  // }

  return (
    <>
      {questions.map((q) => (
        <div key={q.id}>
          Q: {q.id}
          {q.statement}
          <img src={q.img} alt="" />
          {q.option.map((op) => (
            <div>
              <input
                type="radio"
                id="pictureQuiz"
                name="fav_language"
                value={op}
                onChange={optionsClicked}
              />
              <label>{op}</label>
            </div>
          ))}
        </div>
      ))}
      {/* <button onClick={result}>SUBMIT</button> */}
    </>
  );
}

export default Quiz;
