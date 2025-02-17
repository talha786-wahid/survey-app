import { Progress } from "@/components/ui/progress"

interface SurveyProgressProps {
  currentStep: number
  totalSteps: number
}

export function SurveyProgress({ currentStep, totalSteps }: SurveyProgressProps) {
  const progress = ((currentStep + 1) / totalSteps) * 100

  return (
    <div className="w-full space-y-2">
      <Progress value={progress} className="w-full" />
      <p className="text-sm text-center text-muted-foreground">
        Step {currentStep + 1} of {totalSteps}
      </p>
    </div>
  )
}

