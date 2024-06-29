import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTransaction } from '../features/addTransaction/addTransactionSlice';
import { getAllTransactions } from '../features/allTransactions/allTransactionsSlice';

const Form = () => {
  const [inputData, setInputData] = useState({});
  const dispatch = useDispatch();

  const handleInputData = (field, value) => {
    setInputData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(addTransaction(inputData)).then(() =>
      dispatch(getAllTransactions())
    );
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <h3>নতুন লেনদেন যোগ করুন</h3>

      <div className="form-group">
        <label htmlFor="transaction_name">নাম</label>
        <input
          type="text"
          name="transaction_name"
          placeholder="মাসিক বেতন"
          onChange={(e) => handleInputData('name', e.target.value)}
          required
        />
      </div>

      <div className="form-group radio">
        <label htmlFor="transaction_type">ধরণ</label>
        <div className="radio_group">
          <input
            type="radio"
            value="income"
            name="transaction_type"
            checked={inputData.type === 'income'}
            onChange={(e) => handleInputData('type', 'income')}
            required
          />
          <label htmlFor="transaction_type">আয়</label>
        </div>
        <div className="radio_group">
          <input
            type="radio"
            value="expense"
            name="transaction_type"
            checked={inputData.type === 'expense'}
            onChange={(e) => handleInputData('type', 'expense')}
            required
          />
          <label htmlFor="transaction_type">ব্যয়</label>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="transaction_amount">পরিমাণ</label>
        <input
          type="number"
          placeholder="৫০০"
          name="transaction_amount"
          onChange={(e) => handleInputData('amount', Number(e.target.value))}
          required
        />
      </div>

      <button className="btn">যোগ করুন</button>

      <button className="btn cancel_edit">Cancel Edit</button>
    </form>
  );
};

export default Form;
