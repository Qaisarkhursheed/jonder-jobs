export default {
  selectionManagement: {
    'Saved candidates': [],
    'Candidates': [],
    'Qualified': [],
    'Interview': [],
    'Final round': [],
    'Hired': []
  },
  searchResults: [],
  searchStatus: {
    current: 'default',
    options: ['default', 'results', 'limited'],
  },
  searchResultsMeta: {
    per_page: 6,
    current_page: 1,
    total: 0
  },
  searchInProgress: false,
  searchFilters: [],


  userInteractions: null,
  peopleReach: null,
  profileViews: null,
  jobseekerNotes: [],
  companyInteractions: {
    yearlyActivity: null,
    interactions: null
  }
};