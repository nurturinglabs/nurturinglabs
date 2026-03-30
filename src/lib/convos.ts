export const verticals = [
  "Restaurants",
  "Dental Clinics",
  "Home Services",
  "Auto Dealerships",
  "Apartments",
  "Schools",
  "Medical Clinics",
] as const;

export const sublines: Record<string, string> = {
  Restaurants: "Takes orders during the Friday night rush",
  "Dental Clinics": "Books appointments while you're chairside",
  "Home Services": "Handles maintenance calls around the clock",
  "Auto Dealerships": "Schedules test drives and follows up on leads",
  Apartments: "Handles resident calls and maintenance requests",
  Schools: "Answers parent inquiries after hours",
  "Medical Clinics": "Books appointments and handles patient calls",
};

export const conversations: Record<string, { caller: string; ai: string }> = {
  Restaurants: {
    caller: "Hey, can I place a takeout order? Two kabob plates and a falafel wrap.",
    ai: "Got it — two kabob plates, one falafel wrap. Ready in 20 mins. Name for the order?",
  },
  "Dental Clinics": {
    caller: "I've had a bad toothache since yesterday. Can I see the dentist today?",
    ai: "We have an emergency slot at 3:30 PM. Shall I book that for you?",
  },
  "Home Services": {
    caller: "My furnace stopped working. It's freezing in here.",
    ai: "Let's get someone out fast. Can I get your address and best contact number?",
  },
  "Auto Dealerships": {
    caller: "I'm interested in the 2024 Honda Civic. Is it still available?",
    ai: "Yes it is! I can book you a test drive — what day works best for you?",
  },
  Apartments: {
    caller: "The heating in unit 4B isn't working properly.",
    ai: "Got it — I've logged a maintenance request for unit 4B. A technician will contact you within 2 hours.",
  },
  Schools: {
    caller: "Hi, is there still space in the after-school program for my 7-year-old?",
    ai: "Yes, we have 3 spots left. Would you like me to reserve one and send you the enrollment form?",
  },
  "Medical Clinics": {
    caller: "I need to see a doctor today — I've had a fever since last night.",
    ai: "We have a same-day opening at 2:15 PM with Dr. Patel. Shall I book that for you?",
  },
};
