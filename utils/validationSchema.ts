import * as yup from "yup"
import { surveyData } from "../types/survey"

const createValidationSchema = () => {
  const schema: { [key: string]: yup.AnySchema } = {}

  surveyData.steps.forEach((step) => {
    step.questions.forEach((question) => {
      switch (question.type) {
        case "text":
          schema[question.id] = yup.string().required("This field is required")
          break
        case "select":
        case "radio":
          schema[question.id] = yup.string().required("Please select an option")
          break
        case "multiSelect":
          schema[question.id] = yup.array().min(1, "Please select at least one option")
          break
        case "date":
          schema[question.id] = yup.date().nullable().required("Please select a date")
          break
        case "rating":
          schema[question.id] = yup.number().min(1).max(5).required("Please provide a rating")
          break
      }
    })
  })

  return yup.object().shape(schema)
}

export const validationSchema = createValidationSchema()

