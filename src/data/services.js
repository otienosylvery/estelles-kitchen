import {
  ChefHat,
  CalendarDays,
  ConciergeBell,
  House,
  Users,
  BriefcaseBusiness,
} from "lucide-react";

const services = [
  {
    title: "Private Dining",
    description:
      "Restaurant-worthy meals in the comfort and privacy of your own space.",
    icon: ConciergeBell,
  },
  {
    title: "Event Catering",
    description:
      "Considered menus for celebrations, milestones and meaningful gatherings.",
    icon: Users,
  },
  {
    title: "In-home Meal Preparation",
    description:
      "Freshly prepared meals shaped around your household, tastes and routine.",
    icon: House,
  },
  {
    title: "Weekly Meal Plans",
    description:
      "A little more ease in your week, with meal preparation planned around you.",
    icon: CalendarDays,
  },
  {
    title: "Cooking Classes",
    description:
      "Build confidence in the kitchen through a relaxed, hands-on experience.",
    icon: ChefHat,
  },
  {
    title: "Corporate Dining",
    description:
      "Thoughtful food and hosting for team gatherings, meetings and client occasions.",
    icon: BriefcaseBusiness,
  },
];

export default services;