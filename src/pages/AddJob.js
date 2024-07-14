import Sidebar from '../components/Sidebar';
import Form from '../components/Form';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Loader from '../utils/Loader';
import { addNew } from '../features/addJob/addJobSlice';
import { toastAlert } from '../utils/alertMsg';
import { useNavigate } from 'react-router-dom';

const AddJob = () => {
  const { isLoading, isError } = useSelector((state) => state.addJob);
  const [add, setAdd] = useState(false);
  const [passAddData, setPassAddData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (passAddData && add) {
      console.log(passAddData);
      console.log(add);
      dispatch(addNew(passAddData)).then((response) => {
        if (response.meta.requestStatus === 'fulfilled') {
          toastAlert('success', 'Add successful!');
          navigate('/');
        } else if (response.meta.requestStatus === 'rejected') {
          toastAlert('error', 'Something went wrong!');
        }
      });
    }
  }, [passAddData, add, dispatch, navigate]);

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
              <Form setPassAddData={setPassAddData} setAdd={setAdd} />
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AddJob;
