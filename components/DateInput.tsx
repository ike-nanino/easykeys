"use client"

import * as React from "react"
import { addDays, format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function DatePicker( {placeholder, onChange}: {placeholder : string; onChange: (date: Date | undefined) => void; }) {
  const [date, setDate] = React.useState<Date>();
  const [isOpen, setIsOpen] = React.useState(false);

  const handleSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    onChange(selectedDate); // Pass date to parent component
    setIsOpen(false)
  };

  

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal hover:bg-gray-300 bg-slate-200",
            !date && "text-muted-foreground"
          )}
        >
          
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span> {placeholder === "Departure" ? 'Departure' : "Arrival"} </span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleSelect}
          initialFocus
          fromDate={addDays(new Date(), 0)}
        />
      </PopoverContent>
    </Popover>
  )
}