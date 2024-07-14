import React, { useState } from 'react';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Modal } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteJob } from '../../features/deleteJob/deleteJobSlice';

const Job = ({ job = {} }) => {
  const { confirm } = Modal;
  const dispatch = useDispatch();

  const showDeleteConfirm = () => {
    confirm({
      title: 'Are you sure delete this task?',
      icon: <ExclamationCircleFilled />,
      content: `Title: ${title}, id: ${id}`,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        dispatch(deleteJob(id));
      },
      onCancel() {
        console.log('Cancel');
      },
      centered: true,
      maskClosable: true,
      closable: true,
    });
  };

  const { title, type, salary, deadline, id } = job;
  return (
    <div className="single-job">
      <div className="flex-1 min-w-0">
        <h2 className="title">{title}</h2>
        <div className="job-footers">
          <div className="type">
            <i
              className={`fa-solid fa-stop ${
                type === 'Internship' && '!text-[#FF5757]'
              } ${type === 'Full Time' && '!text-[#FF8A00]'} ${
                type === 'Remote' && '!text-[#56E5C4]'
              } text-lg mr-1.5`}
            ></i>
            {type}
          </div>
          <div className="salary">
            <i className="fa-solid fa-bangladeshi-taka-sign text-slate-400 text-lg mr-1.5"></i>
            BDT {salary}
          </div>
          <div className="deadline">
            <i className="fa-regular fa-calendar text-slate-400 text-lg mr-1.5"></i>
            {deadline}
          </div>
        </div>
      </div>
      <div className="mt-5 flex lg:mt-0 lg:ml-4">
        <Link to={`/edit/${id}`}>
          <span className="hidden sm:block">
            <button type="button" className="edit btn btn-primary">
              <i className="fa-solid fa-pen text-gray-300 -ml-1 mr-2"></i>
              Edit
            </button>
          </span>
        </Link>
        <span className="sm:ml-3">
          <button
            type="button"
            className="delete btn btn-danger "
            onClick={showDeleteConfirm}
          >
            <i className="fa-solid fa-trash text-gray-300 -ml-1 mr-2"></i>
            Delete
          </button>
        </span>
      </div>
    </div>
  );
};

export default Job;
