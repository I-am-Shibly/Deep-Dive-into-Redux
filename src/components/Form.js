import React, { useEffect, useState } from 'react';

const Form = ({
  data,
  setPassEditData,
  setPassAddData,
  jobInfo,
  setEdit,
  setAdd,
}) => {
  const [inputData, setInputData] = useState({
    title: '',
    type: '',
    salary: '',
    deadline: ''
  });

  const handleInputData = (field, value) => {
    setInputData((prevState) => ({ ...prevState, [field]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (jobInfo) {
      setPassEditData(inputData);
      setEdit(true);
    } else {
      console.log(inputData);
      setPassAddData(inputData);
      setAdd(true);
    }
  };

  useEffect(() => {
    if (data) {
      setInputData(data);
    } else {
      setInputData({ title: '', type: '', salary: '', deadline: '' });
    }
  }, [data]);

  return (
    <form className="space-y-6" onSubmit={submitHandler}>
      <div className="fieldContainer">
        <label htmlFor="JobTitle" className="text-sm font-medium text-slate-300">
          Job Title
        </label>
        <select
          id="JobTitle"
          name="lwsJobTitle"
          required
          value={inputData.title}
          onChange={(e) => handleInputData('title', e.target.value)}
        >
          <option value="" hidden>
            Select Job
          </option>
          <option>Software Engineer</option>
          <option>Software Developer</option>
          <option>Full Stack Developer</option>
          <option>MERN Stack Developer</option>
          <option>DevOps Engineer</option>
          <option>QA Engineer</option>
          <option>Product Manager</option>
          <option>Social Media Manager</option>
          <option>Senior Executive</option>
          <option>Junior Executive</option>
          <option>Android App Developer</option>
          <option>IOS App Developer</option>
          <option>Frontend Developer</option>
          <option>Frontend Engineer</option>
        </select>
      </div>

      <div className="fieldContainer">
        <label htmlFor="JobType">Job Type</label>
        <select
          id="JobType"
          name="lwsJobType"
          required
          value={inputData.type}
          onChange={(e) => handleInputData('type', e.target.value)}
        >
          <option value="" hidden>
            Select Job Type
          </option>
          <option>Full Time</option>
          <option>Internship</option>
          <option>Remote</option>
        </select>
      </div>

      <div className="fieldContainer">
        <label htmlFor="JobSalary">Salary</label>
        <div className="flex border rounded-md shadow-sm border-slate-600">
          <span className="input-tag">BDT</span>
          <input
            type="number"
            name="lwsJobSalary"
            id="JobSalary"
            required
            className="!rounded-l-none !border-0"
            placeholder="20,00,000"
            value={inputData.salary}
            onChange={(e) => handleInputData('salary', e.target.value)}
          />
        </div>
      </div>

      <div className="fieldContainer">
        <label htmlFor="JobDeadline">Deadline</label>
        <input
          type="date"
          name="lwsJobDeadline"
          id="JobDeadline"
          required
          value={inputData.deadline}
          onChange={(e) => handleInputData('deadline', e.target.value)}
        />
      </div>

      <div className="text-right">
        <button
          type="submit"
          id="submit"
          className="cursor-pointer btn btn-primary w-fit"
        >
          {jobInfo ? 'Edit' : 'Add'}
        </button>
      </div>
    </form>
  );
};

export default Form;
