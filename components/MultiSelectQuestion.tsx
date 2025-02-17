import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

interface MultiSelectQuestionProps {
  id: string
  question: string
  options: string[]
  value: string[]
  onChange: (value: string[]) => void
  error?: string
}

export function MultiSelectQuestion({ id, question, options, value, onChange, error }: MultiSelectQuestionProps) {
  const handleChange = (option: string, checked: boolean) => {
    if (checked) {
      onChange([...value, option])
    } else {
      onChange(value.filter((item) => item !== option))
    }
  }

  return (
    <div className="space-y-2">
      <Label>{question}</Label>
      <div className="space-y-2">
        {options.map((option) => (
          <div key={option} className="flex items-center space-x-2">
            <Checkbox
              id={`${id}-${option}`}
              checked={value.includes(option)}
              onCheckedChange={(checked) => handleChange(option, checked as boolean)}
            />
            <Label htmlFor={`${id}-${option}`}>{option}</Label>
          </div>
        ))}
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  )
}

