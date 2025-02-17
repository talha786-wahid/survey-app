import { useSurveyStore } from "../store/surveyStore";
import { TextQuestion } from "./TextQuestion";
import { SelectQuestion } from "./SelectQuestion";
import { MultiSelectQuestion } from "./MultiSelectQuestion";
import { RadioQuestion } from "./RadioQuestion";
import { DateQuestion } from "./DateQuestion";
import { RatingQuestion } from "./RatingQuestion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "../utils/validationSchema";
import { SurveyProgress } from "./SurveyProgress";
import { Results } from "./Results";

type FormFields = {
  [key: string]: string | string[] | number;
};

export function Survey() {
  const {
    currentStep,
    survey,
    answers,
    setAnswer,
    nextStep,
    previousStep,
    isFirstStep,
    isLastStep,
  } = useSurveyStore();

  const {
    formState: { errors },
    trigger,
    setValue,
  } = useForm<FormFields>({
    resolver: yupResolver(validationSchema),
    defaultValues: answers,
  });

  const onSubmit = (data: any) => {
    console.log("Form submitted:", data);
    nextStep();
  };

  const handleNext = async () => {
    const currentStepQuestions = survey.steps[currentStep].questions.map(
      (q) => q.id
    );
    const isValid = await trigger(currentStepQuestions);
    if (isValid) {
      if (isLastStep()) {
        onSubmit(answers);
      } else {
        nextStep();
      }
    }
  };

  if (currentStep === survey.steps.length) {
    return <Results />;
  }

  const currentStepData = survey.steps[currentStep];

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          {currentStepData.title}
        </CardTitle>
        <CardDescription className="text-lg">
          {currentStepData.description}
        </CardDescription>
        <SurveyProgress
          currentStep={currentStep}
          totalSteps={survey.steps.length}
        />
      </CardHeader>
      <CardContent className="space-y-6">
        {currentStepData.questions.map((question) => {
          const answer = answers[question.id] || "";
          const error = errors[question.id]?.message as string;
          switch (question.type) {
            case "text":
              return (
                <TextQuestion
                  key={question.id}
                  id={question.id}
                  question={question.question}
                  value={answer as string}
                  onChange={(value) => {
                    setAnswer(question.id, value);
                    setValue(question.id, value);
                  }}
                  error={error}
                />
              );
            case "select":
              return (
                <SelectQuestion
                  key={question.id}
                  id={question.id}
                  question={question.question}
                  options={question.options || []}
                  value={answer as string}
                  onChange={(value) => {
                    setAnswer(question.id, value);
                    setValue(question.id, value);
                  }}
                  error={error}
                />
              );
            case "multiSelect":
              return (
                <MultiSelectQuestion
                  key={question.id}
                  id={question.id}
                  question={question.question}
                  options={question.options || []}
                  value={answer as string[]}
                  onChange={(value) => {
                    setAnswer(question.id, value);
                    setValue(question.id, value);
                  }}
                  error={error}
                />
              );
            case "radio":
              return (
                <RadioQuestion
                  key={question.id}
                  id={question.id}
                  question={question.question}
                  options={question.options || []}
                  value={answer as string}
                  onChange={(value) => {
                    setAnswer(question.id, value);
                    setValue(question.id, value);
                  }}
                  error={error}
                />
              );
            case "date":
              return (
                <DateQuestion
                  key={question.id}
                  id={question.id}
                  question={question.question}
                  value={answer ? new Date(answer as string) : undefined}
                  onChange={(value) => {
                    setAnswer(question.id, value ? value.toISOString() : "");
                    setValue(question.id, value ? value.toISOString() : "");
                  }}
                  error={error}
                />
              );
            case "rating":
              return (
                <RatingQuestion
                  key={question.id}
                  id={question.id}
                  question={question.question}
                  value={answer as number}
                  onChange={(value) => {
                    setAnswer(question.id, value);
                    setValue(question.id, value);
                  }}
                  error={error}
                />
              );
            default:
              return null;
          }
        })}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={previousStep} disabled={isFirstStep()}>
          Previous
        </Button>
        <Button onClick={handleNext}>{isLastStep() ? "Submit" : "Next"}</Button>
      </CardFooter>
    </Card>
  );
}
