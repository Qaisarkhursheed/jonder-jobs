import { forEach } from "lodash";

import PERSONALITY_QUESTIONS from "./personality_test_questions";
import PERSONALITY_QUESTION_CHOICES from "./personality_test_choices";

const SELECTION_MANAGEMENT_STATUS = [
  "Saved candidates",
  "Candidates",
  "Qualified",
  "Interview",
  "Final round",
  "Hired"
];

const JOB_SEARCH_STATUS = [
  {
    text: "jobSearchStatusActive",
    value: "active"
  },
  {
    text: "jobSearchStatusPassive",
    value: "passive"
  }
  // {
  //   text: "jobSearchStatusCurious",
  //   value: "curious"
  // }
];

let initData = data => {
  const mapping = {
    employee_number: "EMPLOYEE_NUMBER",
    employement_type: "EMPLOYEMENT_TYPE",
    job_branches: "JOB_BRANCHE",
    job_positions: "JOB_POSITION",
    salary_range: "SALARY_RANGE",
    work_experience: "WORK_EXPERIENCE"
  };

  forEach(data, (item, i) => {
    obj[mapping[i]] = item;
  });
};

let obj = {
  EMPLOYEE_NUMBER: [],
  EMPLOYEMENT_TYPE: [],
  JOB_BRANCHE: [],
  JOB_POSITION: [],
  SALARY_RANGE: [],
  WORK_EXPERIENCE: [],
  PERSONALITY_QUESTIONS,
  PERSONALITY_QUESTION_CHOICES,
  SELECTION_MANAGEMENT_STATUS,
  JOB_SEARCH_STATUS,
  initData: initData
};

export default obj;
