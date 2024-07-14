import { configureStore } from '@reduxjs/toolkit';
import JobsReducer from '../features/Jobs/JobsSlice';
import editJobReducer from '../features/EditJob/editJobSlice';
import jobReducer from '../features/Job/jobSlice';
import addJobReducer from '../features/addJob/addJobSlice';
import filterByType from '../features/filter/filterByType';
import deleteJobReducer from '../features/deleteJob/deleteJobSlice';
import filterBySalaryReducer from '../features/filter/filterBySalary';
import searchReducer from '../features/filter/filterBySearch';

export const store = configureStore({
  reducer: {
    jobs: JobsReducer,
    job: jobReducer,
    editJob: editJobReducer,
    addJob: addJobReducer,
    deleteJob: deleteJobReducer,
    filterType: filterByType,
    filterSalary: filterBySalaryReducer,
    search: searchReducer,
  },
});
