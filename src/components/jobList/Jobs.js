import { useDispatch, useSelector } from 'react-redux';
import Job from './Job';
import { useEffect } from 'react';
import { getJobs } from '../../features/Jobs/JobsSlice';
import Loader from '../../utils/Loader';

const Jobs = () => {
  const { jobs, isLoading, isError, error } = useSelector(
    (state) => state.jobs
  );
  const { salary } = useSelector((state) => state.filterSalary);
  const { type } = useSelector((state) => state.filterType);
  const { searchKey } = useSelector((state) => state.search);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJobs());
  }, [dispatch]);

  let filteredJobs =
    !type || type === 'all-jobs'
      ? jobs
      : jobs.filter((job) => job.type === type);

  if (parseFloat(salary) === 1) {
    filteredJobs = [...filteredJobs].sort((a, b) => a.salary - b.salary);
  } else if (parseFloat(salary) === -1) {
    filteredJobs = [...filteredJobs].sort((a, b) => b.salary - a.salary);
  }

  if (searchKey !== '') {
    filteredJobs = filteredJobs.filter((job) =>
      job.title.toLowerCase().includes(searchKey)
    );
  }

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <h3>{error}</h3>;
  }

  if (jobs.length <= 0) {
    return <h3>No job found!</h3>;
  }

  return (
    <div className="jobs-list">
      {filteredJobs.length > 0 ? (
        filteredJobs.map((job) => <Job key={job.id} job={job} />)
      ) : (
        <h2>No matching result!</h2>
      )}
    </div>
  );
};

export default Jobs;
