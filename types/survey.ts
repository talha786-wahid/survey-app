export type QuestionType = "text" | "select" | "multiSelect" | "radio" | "date" | "rating"

export interface Question {
  id: string
  type: QuestionType
  question: string
  options?: string[]
}

export interface Step {
  id: string
  title: string
  description: string
  questions: Question[]
}

export interface Survey {
  steps: Step[]
}

export const surveyData: Survey = {
  steps: [
    {
      id: "personal-info",
      title: "Personal Information",
      description: "Let's start with some basic information about you.",
      questions: [
        {
          id: "name",
          type: "text",
          question: "What is your full name?",
        },
        {
          id: "birthdate",
          type: "date",
          question: "What is your date of birth?",
        },
        {
          id: "gender",
          type: "radio",
          question: "What is your gender?",
          options: ["Male", "Female", "Non-binary", "Prefer not to say"],
        },
        {
          id: "email",
          type: "text",
          question: "What is your email address?",
        },
      ],
    },
    {
      id: "lifestyle",
      title: "Lifestyle & Habits",
      description: "Tell us about your daily routines and preferences.",
      questions: [
        {
          id: "wake-up-time",
          type: "select",
          question: "What time do you usually wake up?",
          options: ["Before 6 AM", "6-7 AM", "7-8 AM", "8-9 AM", "After 9 AM"],
        },
        {
          id: "exercise-frequency",
          type: "select",
          question: "How often do you exercise?",
          options: ["Daily", "2-3 times a week", "Once a week", "Rarely", "Never"],
        },
        {
          id: "diet",
          type: "select",
          question: "How would you describe your diet?",
          options: ["Omnivore", "Vegetarian", "Vegan", "Pescatarian", "Keto", "Other"],
        },
        {
          id: "stress-level",
          type: "rating",
          question: "On a scale of 1-5, how would you rate your average stress level?",
        },
      ],
    },
    {
      id: "work-education",
      title: "Work and Education",
      description: "Let's discuss your professional life and educational background.",
      questions: [
        {
          id: "education",
          type: "select",
          question: "What is your highest level of education?",
          options: ["High School", "Bachelor's Degree", "Master's Degree", "Ph.D.", "Other"],
        },
        {
          id: "employment",
          type: "radio",
          question: "What is your current employment status?",
          options: ["Employed full-time", "Employed part-time", "Self-employed", "Student", "Unemployed", "Retired"],
        },
        {
          id: "industry",
          type: "text",
          question: "In which industry do you work or study?",
        },
        {
          id: "work-satisfaction",
          type: "rating",
          question: "On a scale of 1-5, how satisfied are you with your current work or studies?",
        },
      ],
    },
    {
      id: "health",
      title: "Health and Wellness",
      description: "Your health is important. Tell us about your health habits.",
      questions: [
        {
          id: "sleep-hours",
          type: "select",
          question: "On average, how many hours of sleep do you get per night?",
          options: ["Less than 6", "6-7", "7-8", "8-9", "More than 9"],
        },
        {
          id: "chronic-conditions",
          type: "multiSelect",
          question: "Do you have any chronic health conditions? (Select all that apply)",
          options: ["None", "Diabetes", "Hypertension", "Asthma", "Arthritis", "Heart disease", "Other"],
        },
        {
          id: "mental-health",
          type: "rating",
          question: "On a scale of 1-5, how would you rate your overall mental health?",
        },
        {
          id: "last-checkup",
          type: "date",
          question: "When was your last general health check-up?",
        },
      ],
    },
    {
      id: "technology",
      title: "Technology Usage",
      description: "Let's explore your relationship with technology.",
      questions: [
        {
          id: "devices",
          type: "multiSelect",
          question: "Which devices do you use regularly? (Select all that apply)",
          options: ["Smartphone", "Laptop", "Desktop Computer", "Tablet", "Smart Watch", "Smart Home Devices"],
        },
        {
          id: "social-media",
          type: "select",
          question: "How often do you use social media?",
          options: ["Multiple times a day", "Once a day", "A few times a week", "Rarely", "Never"],
        },
        {
          id: "screen-time",
          type: "select",
          question: "On average, how many hours per day do you spend looking at screens?",
          options: ["0-2 hours", "2-4 hours", "4-6 hours", "6-8 hours", "More than 8 hours"],
        },
        {
          id: "tech-comfort",
          type: "rating",
          question: "On a scale of 1-5, how comfortable are you with learning new technologies?",
        },
      ],
    },
    {
      id: "finance",
      title: "Financial Habits",
      description: "Understanding your financial habits helps us serve you better.",
      questions: [
        {
          id: "income-range",
          type: "select",
          question: "What is your annual income range?",
          options: ["Under $25,000", "$25,000 - $50,000", "$50,000 - $75,000", "$75,000 - $100,000", "Over $100,000"],
        },
        {
          id: "savings-habit",
          type: "select",
          question: "How much of your income do you typically save or invest?",
          options: ["0-5%", "5-10%", "10-20%", "20-30%", "More than 30%"],
        },
        {
          id: "financial-goals",
          type: "multiSelect",
          question: "What are your primary financial goals? (Select all that apply)",
          options: [
            "Buying a home",
            "Saving for retirement",
            "Paying off debt",
            "Starting a business",
            "Travel",
            "Education",
          ],
        },
        {
          id: "financial-stress",
          type: "rating",
          question: "On a scale of 1-5, how would you rate your financial stress level?",
        },
      ],
    },
    {
      id: "interests",
      title: "Hobbies and Interests",
      description: "Tell us about what you enjoy doing in your free time.",
      questions: [
        {
          id: "hobbies",
          type: "multiSelect",
          question: "What are your hobbies? (Select all that apply)",
          options: [
            "Reading",
            "Sports",
            "Cooking",
            "Travel",
            "Music",
            "Art",
            "Gaming",
            "Gardening",
            "Photography",
            "Other",
          ],
        },
        {
          id: "favorite-genre",
          type: "select",
          question: "What's your favorite genre of movies or books?",
          options: [
            "Action/Adventure",
            "Comedy",
            "Drama",
            "Sci-Fi/Fantasy",
            "Romance",
            "Mystery/Thriller",
            "Documentary",
            "Other",
          ],
        },
        {
          id: "vacation-preference",
          type: "radio",
          question: "What type of vacation do you prefer?",
          options: [
            "Beach resort",
            "City exploration",
            "Mountain retreat",
            "Adventure sports",
            "Cultural immersion",
            "Staycation",
          ],
        },
        {
          id: "free-time",
          type: "text",
          question: "Describe your ideal way to spend a free day:",
        },
      ],
    },
  ],
}

