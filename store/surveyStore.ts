import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { type Survey, surveyData } from "../types/survey";

interface SurveyState {
  currentStep: number;
  answers: Record<string, string | string[] | number>;
  survey: Survey;
  setCurrentStep: (step: number) => void;
  setAnswer: (questionId: string, answer: string | string[] | number) => void;
  nextStep: () => void;
  previousStep: () => void;
  isFirstStep: () => boolean;
  isLastStep: () => boolean;
  resetSurvey: () => void;
}

export const useSurveyStore = create<SurveyState>()(
  devtools(
    (set, get) => ({
      currentStep: 0,
      answers: {},
      survey: surveyData,
      setCurrentStep: (step) => set({ currentStep: step }),
      setAnswer: (questionId, answer) =>
        set((state) => ({
          answers: { ...state.answers, [questionId]: answer },
        })),
      nextStep: () =>
        set((state) => ({
          currentStep: Math.min(
            state.currentStep + 1,
            state.survey.steps.length
          ),
        })),
      previousStep: () =>
        set((state) => ({
          currentStep: Math.max(state.currentStep - 1, 0),
        })),
      isFirstStep: () => get().currentStep === 0,
      isLastStep: () => get().currentStep === get().survey.steps.length,
      resetSurvey: () => set({ currentStep: 0, answers: {} }),
    }),
    {
      name: "survey-store",
    }
  )
);
