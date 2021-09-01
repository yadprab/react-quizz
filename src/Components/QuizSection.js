import React, { useReducer } from "react";
import { Logo } from "./Logo";
import { data } from "./data";
import { Icons } from "./Icons";
const initialState = {
  value: 0,
  isSelected: false,
  isSubmit: false,
  isCancel: false,
  selectedAnswer: "",
  correctAnswer: "",
  result: "",
  isWrong: false,
  isCorrect: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "selected":
      return {
        ...state,
        isSelected: true,
        correctAnswer: action.ans,
        selectedAnswer: action.payLoad,
      };
    case "cancel":
      return {
        ...state,
        isSelected: false,
        isCancel: true,
        correctAnswer: "",
        selectedAnswer: "",
      };
    case "submit":
      return {
        ...state,
        isSelected: false,
        isCancel: false,
        isSubmit: true,
        isCorrect: state.correctAnswer === state.selectedAnswer && true,
        isWrong: state.correctAnswer !== state.selectedAnswer && true,
        result:
          state.correctAnswer === state.selectedAnswer
            ? "correct Answer"
            : "wrong Answer",
      };

    case "next":
      return {
        ...state,
        isSelected: false,
        isCancel: false,
        isSubmit: false,
        isCorrect: false,
        isWrong: false,
        result: "",
        value:
          state.value < data.length - 1 ? state.value + 1 : (state.value = 0),
      };
    default:
      return state;
  }
};

function QuizSection() {
  const [val, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <main className="quizz-area">
        <div className="top--section">
          <nav>
            <Logo />
            <p>Grandmaster</p>
          </nav>
          <div className="quiz--position">
            {data[val.value].map((d) => {
              return (
                <div className="question--Area" key={d.question}>
                  <h1>{d.question}</h1>
                  <div className="options">
                    <ul>
                      {d.options.map((o) => {
                        return (
                          <li key={o}>
                            <button
                              className="btn"
                              id="notSelected"
                              onClick={(e) => {
                                e.target.id = "selected";
                                dispatch({
                                  type: "selected",
                                  payLoad: e.target.textContent,
                                  ans: d.correctAnswer,
                                });

                                const buttons =
                                  document.querySelectorAll(".btn");

                                buttons.forEach((b) => {
                                  if (b.id === "notSelected") {
                                    b.disabled = "true";
                                  }
                                });
                              }}
                            >
                              {o}

                              {val.isSubmit && <Icons />}
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {val.isSelected && (
          <div className="submit--area">
            <button
              id="cancel"
              onClick={() => {
                dispatch({ type: "cancel" });
                const buttons = document.querySelectorAll(".btn");

                buttons.forEach((b) => {
                  b.id = "notSelected";
                  b.removeAttribute("disabled");
                });
              }}
            >
              Cancel
            </button>
            <button
              id="submit"
              onClick={(e) => {
                dispatch({ type: "submit" });
                const buttons = document.querySelectorAll(".btn");

                buttons.forEach((b) => {
                  b.disabled = "true";

                  if (b.id === "selected") {
                    if (val.correctAnswer === val.selectedAnswer) {
                      b.id = "success";
                    } else {
                      b.id = "fail";
                    }
                  } else {
                    [...buttons]
                      .filter((f) => {
                        return f.textContent === val.correctAnswer;
                      })
                      .forEach((g) => {
                        g.id = "success";
                      });
                  }
                });
              }}
            >
              Submit
            </button>
          </div>
        )}

        {val.isSubmit && (
          <div className="submit--area">
            <p
              id={
                val.isWrong === true && !val.isCorrect
                  ? "wrongAnswer"
                  : "correctAnswer"
              }
            >
              {val.result}
            </p>
            <button
              id="next"
              onClick={() => {
                dispatch({ type: "next" });
              }}
            >
              Next
            </button>
          </div>
        )}
      </main>
    </>
  );
}

export { QuizSection };
