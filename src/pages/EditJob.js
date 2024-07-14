import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Form from '../components/Form';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { modifyJob } from '../features/EditJob/editJobSlice';
import { getAjob } from '../features/Job/jobSlice';
import Loader from '../utils/Loader';
import { toastAlert } from '../utils/alertMsg';

const EditJob = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [passEditData, setPassEditData] = useState({});
  const [jobInfo, setJobInfo] = useState({});
  const [edit, setEdit] = useState(false);
  const { isLoading, isError } = useSelector((state) => state.editJob);
  const { job } = useSelector((state) => state.job);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAjob(id)).then((data) => setJobInfo(data.payload));
  }, [dispatch, id]);

  useEffect(() => {
    if (edit) {
      const { id: editId, ...data } = passEditData;
      dispatch(modifyJob({ id: editId, data })).then((response) => {
        if (response.meta.requestStatus === 'fulfilled') {
          toastAlert('success', 'Edit successful!');
          navigate('/');
        } else if (response.meta.requestStatus === 'rejected') {
          toastAlert('error', 'Something went wrong!');
        }
      });
    }
  }, [dispatch, passEditData, navigate, isError, edit, id]);

  return (
    <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="lg:pl-[14rem] mt-[5.8125rem]">
        <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
          <h1 className="mb-10 text-center section-title">Edit Job</h1>
          <div className="max-w-3xl mx-auto">
            {isLoading ? (
              <Loader />
            ) : (
              <Form
                data={job}
                setPassEditData={setPassEditData}
                jobInfo={jobInfo}
                setEdit={setEdit}
              />
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default EditJob;
