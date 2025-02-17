import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface RatingQuestionProps {
  id: string
  question: string
  value: number
  onChange: (value: number) => void
  error?: string
}

export function RatingQuestion({ id, question, value, onChange, error }: RatingQuestionProps) {
  return (
    <div className="space-y-2">
      <Label>{question}</Label>
      <RadioGroup value={value.toString()} onValueChange={(val) => onChange(Number.parseInt(val))}>
        <div className="flex space-x-2">
          {[1, 2, 3, 4, 5].map((rating) => (
            <div key={rating} className="flex items-center">
              <RadioGroupItem value={rating.toString()} id={`${id}-${rating}`} className="sr-only" />
              <Label
                htmlFor={`${id}-${rating}`}
                className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer ${
                  value === rating ? "bg-primary text-primary-foreground" : "bg-secondary"
                }`}
              >
                {rating}
              </Label>
            </div>
          ))}
        </div>
      </RadioGroup>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  )
}

