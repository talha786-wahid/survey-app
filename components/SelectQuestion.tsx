import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"

interface SelectQuestionProps {
  id: string
  question: string
  options: string[]
  value: string
  onChange: (value: string) => void
  error?: string
}

export function SelectQuestion({ id, question, options, value, onChange, error }: SelectQuestionProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{question}</Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger id={id} className={error ? "border-red-500" : ""}>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  )
}

