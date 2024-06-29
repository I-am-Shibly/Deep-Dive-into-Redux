import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTransaction } from '../features/addTransaction/addTransactionSlice';
import { modifyTransaction } from '../features/editTransaction/editTransactionSlice';

const Form = ({ selectedTransaction, setSelectedTransaction }) => {
  const [inputData, setInputData] = useState({});
  const [editMode, setEditMode] = useState(false);
  const dispatch = useDispatch();

  const handleInputData = (field, value) => {
    setInputData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  useEffect(() => {
    if (selectedTransaction) {
      setInputData(selectedTransaction);
      setEditMode(true);
    } else {
      setInputData({});
      setEditMode(false);
    }
  }, [selectedTransaction]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (editMode && selectedTransaction) {
      dispatch(
        modifyTransaction({
          id: inputData.id,
          data: inputData,
        })
      );
      setEditMode(false);
      setInputData({});
      setSelectedTransaction(null);
      return;
    }

    dispatch(addTransaction(inputData));
    setInputData({});
    setSelectedTransaction(null);
  };

  const cancelEdit = () => {
    setSelectedTransaction(null);
    setEditMode(false);
    setInputData({});
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
          value={inputData.name || ''}
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
        <label htmlFor="transaction_amount">পরিমাণ (টাকায়)</label>
        <input
          type="number"
          placeholder="৫০০"
          name="transaction_amount"
          value={inputData.amount || ''}
          onChange={(e) => handleInputData('amount', e.target.value)}
          required
        />
      </div>

      <button className="btn">{editMode ? 'হালনাগাদ করুন' : 'যোগ করুন'}</button>

      {editMode && (
        <button type="button" className="btn cancel_edit" onClick={cancelEdit}>
          বাতিল করুন
        </button>
      )}
    </form>
  );
};

export default Form;
