export const verticals = [
  {
    name: "Dental Clinics",
    action: "Books appointments while you\u2019re chairside",
    caller:
      "Hi, I\u2019ve been having a bad toothache since yesterday. Can I see the dentist today?",
    ai: "I\u2019m sorry to hear that. The doctor has an emergency slot at 3:30 today. Can I book that for you?",
  },
  {
    name: "Restaurants",
    action: "Takes orders during the Friday night rush",
    caller:
      "Hey, can I place a takeout order? Two pad thai and a mango sticky rice.",
    ai: "Got it \u2014 two pad thai and one mango sticky rice. That\u2019ll be ready in 25 minutes. Name for the order?",
  },
  {
    name: "Veterinary Clinics",
    action: "Triages pet emergencies at 2am",
    caller:
      "My dog just ate a whole bar of chocolate. He\u2019s shaking \u2014 what do I do?",
    ai: "That\u2019s potentially serious. I\u2019m connecting you to our on-call vet right now. Stay on the line.",
  },
  {
    name: "Childcare Centers",
    action: "Handles parent inquiries during nap time",
    caller: "Hi, do you have openings for a 3-year-old starting in March?",
    ai: "We do! Our Sunshine Room has 2 spots for March. Would you like to schedule a tour this week?",
  },
  {
    name: "Chiropractic",
    action: "Reschedules recurring patients instantly",
    caller:
      "I need to move my Thursday adjustment to next week. Same time if possible.",
    ai: "Done \u2014 I\u2019ve moved you to next Thursday at 10am with Dr. Rivera. You\u2019ll get a confirmation text shortly.",
  },
] as const;

export const statuses = [
  "LISTENING",
  "PROCESSING",
  "SCHEDULING",
  "ORDERING",
  "NOTIFYING",
] as const;

export const tags = [
  "Scheduling",
  "Triage",
  "Smart Routing",
  "Context-Aware",
  "Human Handoff",
  "Multilingual",
] as const;
