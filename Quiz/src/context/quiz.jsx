import { createContext, useReducer } from "react";
import questions from "../data/questions";

const STAGES = ["Start", "Playing", "End"];

const initialStage = {
  stage: STAGES[0],
  questions,
  currentQuestion: 0,
  score: 0,
};

const quizReducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "CHANGE_STATE":
      return {
        ...state,
        stage: STAGES[1],
      };

    case "REORDER_QUESTIONS":
      const reorderedQuestions = questions.sort(() => {
        return Math.random() - 0.5;
      });
      return {
        ...state,
        questions: reorderedQuestions,
      };

    case "CHANGE_QUESTION":
      const nextQuestion = state.currentQuestion + 1;
      let endGame = false;

      if (!questions[nextQuestion]) {
        endGame = true;
      }
      return {
        ...state,
        currentQuestion: nextQuestion,
        stage: endGame ? STAGES[2] : state.stage,
      };

    case "NEW_GAME":
      return initialStage;

    default:
      return state;
  }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(quizReducer, initialStage);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
