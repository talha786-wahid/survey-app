import { useSurveyStore } from "../store/surveyStore"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Results() {
  const { survey, answers, resetSurvey } = useSurveyStore()

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Survey Results</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {survey.steps.map((step) => (
          <div key={step.id} className="space-y-4">
            <h3 className="text-xl font-semibold">{step.title}</h3>
            {step.questions.map((question) => (
              <div key={question.id} className="space-y-1">
                <p className="font-medium">{question.question}</p>
                <p className="text-muted-foreground">
                  {Array.isArray(answers[question.id])
                    ? (answers[question.id] as string[]).join(", ")
                    : answers[question.id]?.toString()}
                </p>
              </div>
            ))}
          </div>
        ))}
        <Button onClick={resetSurvey} className="mt-6">
          Start Over
        </Button>
      </CardContent>
    </Card>
  )
}

