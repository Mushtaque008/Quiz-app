import { useState } from "react";

import questions from "../data/questions.json";
import "./classQuiz.css";
function ClassQuiz() {
  const [allQuestions, setAllQuestions] = useState(questions);
  const [totalScore, setTotalScore] = useState(0);
  const [rightAnswers, setRightAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [qIndex, setQIndex] = useState(0);

  function onSelectOption(qid, op) {
    if (op) {
      if (op == allQuestions[qid - 1].answer) {
        setRightAnswers(rightAnswers + 1);
        setTotalScore(totalScore + 1);
      } else {
        setWrongAnswers(wrongAnswers + 1);
      }
    }
  }

  const q = allQuestions[qIndex];

  return (
    <>
      <div className="container">
        <div className="center">
          <div className="quizWrapper">
            <div className="row">
              <div class="col-12">
                <div className="quizBody">
                  <h4>
                    {" "}
                    Q: {q.id} {q.statement}{" "}
                  </h4>
                  <img src={q.img} alt="" className="img-fluid" />
                  {q.option.map((op) => (
                    <div key={op} className="optionButtons">
                      <button
                        type="button"
                        class="btn btn-info my-2"
                        onClick={() => onSelectOption(q.id, op)}
                      >
                        {op}
                      </button>{" "}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                if (qIndex < allQuestions.length - 1) {
                  setQIndex(qIndex + 1);
                }
              }}
            >
              Next
            </button>
            <div className="footer">
              Your TOTAL SCORE : {totalScore} <br />
              RIGHT ANSWERS : {rightAnswers} <br />
              WRONG ANSWERS : {wrongAnswers}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ClassQuiz;
