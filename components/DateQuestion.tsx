import { useState } from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Label } from "@/components/ui/label"

interface DateQuestionProps {
  id: string
  question: string
  value: Date | undefined
  onChange: (value: Date | undefined) => void
  error?: string
}

export function DateQuestion({ id, question, value, onChange, error }: DateQuestionProps) {
  const [date, setDate] = useState<Date | undefined>(value)

  const handleSelect = (newDate: Date | undefined) => {
    setDate(newDate)
    onChange(newDate)
  }

  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{question}</Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "w-full justify-start text-left font-normal",
              !date && "text-muted-foreground",
              error && "border-red-500",
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar mode="single" selected={date} onSelect={handleSelect} initialFocus />
        </PopoverContent>
      </Popover>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  )
}

