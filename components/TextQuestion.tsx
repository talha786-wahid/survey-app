import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface TextQuestionProps {
  id: string
  question: string
  value: string
  onChange: (value: string) => void
  error?: string
}

export function TextQuestion({ id, question, value, onChange, error }: TextQuestionProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{question}</Label>
      <Input
        type="text"
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={error ? "border-red-500" : ""}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  )
}

