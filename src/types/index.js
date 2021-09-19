import PERSONALITY_QUESTIONS from './personality_test_questions';
import PERSONALITY_QUESTION_CHOICES from './personality_test_choices';

const SELECTION_MANAGEMENT_STATUS = [
  "Saved candidates",
  "Candidates",
  "Qualified",
  "Interview",
  "Final round",
  "Hired"
];

const EMPLOYEMENT_TYPE = [
  {
    text: "Vollzeit",
    value: "full-time"
  },
  {
    text: "Teilzeit",
    value: "part-time"
  },
  {
    text: "Minijob",
    value: "mini-job"
  },
  {
    text: "Midijob",
    value: "midi-job"
  },
  {
    text: "Werkstudent",
    value: "working-student"
  },
  {
    text: "Kurzfristige Beschäftigung",
    value: "short-term"
  }
];

const JOB_BRANCHE = [
  "job_branche_constructionArchitecture",
  "job_branche_service",
  "job_branche_electro",
  "job_branche_blessYou",
  "job_branche_it",
  "job_branche_art",
  "job_branche_agriculture",
  "job_branche_media",
  "job_branche_metalMechanicalEngineering",
  "job_branche_naturalSciences",
  "job_branche_production",
  "job_branche_socialPedagogy",
  "job_branche_technology",
  "job_branche_transportLogistics",
  "job_branche_economicAdministration"
];
// const JOB_BRANCHE = [
//   "Bau, Architektur, Vermessung",
//   "Dienstleistung",
//   "Elektro",
//   "Gesundheit",
//   "IT, Computer",
//   "Kunst, Kultur, Gestaltung",
//   "Landwirtschaft, Natur, Umwelt",
//   "Medien",
//   "Metall, Maschinenbau",
//   "Naturwissenschaften",
//   "Produktion, Fertigung",
//   "Soziales, Pädagogik",
//   "Technik, Technologiefelder",
//   "Verkehr, Logistik",
//   "Wirtschaft, Verwaltung"
// ];

// const JOB_POSITION = [
//   "Developer",
//   "Project Manager",
//   "Construction manager",
//   "Intern",
//   "Apprentice",
//   "Manager",
//   "Architecht",
//   "Social Media Manager",
//   "Marketing Manager",
//   "Frontend Developer",
//   "Backend Developer",
//   "Mobile Developer",
//   "DevOps Engineer"
// ];

const SALARY_RANGE = [
  "20000 - 30000",
  "30000 - 50000",
  "50000 - 70000",
  "70000 - 90000",
  "90000 - 110000",
  "110000 - 130000",
  "130000+"
];

const WORK_EXPERIENCE = ["0-3", "3-6", "6-10", "10-15", "15-20", "20+"];

const EMPLOYEE_NUMBER = [
  "employee_number_0-1",
  "employee_number_2-10",
  "employee_number_11-50",
  "employee_number_51-200",
  "employee_number_201-500",
  "employee_number_501-1.000",
  "employee_number_1.001-5.000",
  "employee_number_5.001-10.000",
  "employee_number_10.001+"
];

const SCHOOL = [
  "Abitur",
  "Fachhochschulreife",
  "Mittlerer Schulabschluss",
  "Hauptschulabschluss"
];

const EDUCATION = [
  "education_1",
  "education_2",
  "education_3"
];

export default {
  SELECTION_MANAGEMENT_STATUS,
  EMPLOYEMENT_TYPE,
  SALARY_RANGE,
  WORK_EXPERIENCE,
  SCHOOL,
  EDUCATION,
  JOB_BRANCHE,
  EMPLOYEE_NUMBER,
  PERSONALITY_QUESTIONS,
  PERSONALITY_QUESTION_CHOICES
};
