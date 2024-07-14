import React, { useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Search from '../components/topSection/Search';
import SortBySalary from '../components/topSection/Sort';
import Jobs from '../components/jobList/Jobs';

const HomePage = () => {
  return (
    <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 ">
      <Sidebar />

      <div className="lg:pl-[14rem]  mt-[5.8125rem]">
        <div className="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
          <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
            <h1 className="section-title">All Available Jobs</h1>
            <div className="flex gap-4">
              <Search />
              <SortBySalary />
            </div>
          </div>

          <Jobs />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
