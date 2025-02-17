import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface RadioQuestionProps {
  id: string
  question: string
  options: string[]
  value: string
  onChange: (value: string) => void
  error?: string
}

export function RadioQuestion({ id, question, options, value, onChange, error }: RadioQuestionProps) {
  return (
    <div className="space-y-2">
      <Label>{question}</Label>
      <RadioGroup value={value} onValueChange={onChange}>
        {options.map((option) => (
          <div key={option} className="flex items-center space-x-2">
            <RadioGroupItem value={option} id={`${id}-${option}`} />
            <Label htmlFor={`${id}-${option}`}>{option}</Label>
          </div>
        ))}
      </RadioGroup>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  )
}

