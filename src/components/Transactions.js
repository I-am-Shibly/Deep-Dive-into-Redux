import { useDispatch, useSelector } from 'react-redux';
import Transaction from './Transaction';
import { useEffect } from 'react';
import { getAllTransactions } from '../features/allTransactions/allTransactionsSlice';

import { fetchedData } from '../features/currentBalance/balanceSlice';

const Transactions = () => {
  const { allTransactions } = useSelector((state) => state.allTransactions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTransactions());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchedData(allTransactions));
  }, [dispatch, allTransactions]);

  return (
    <>
      <p className="second_heading">আপনার লেনদেন সমূহঃ</p>
      <div className="conatiner_of_list_of_transactions">
        {allTransactions.map((t) => (
          <Transaction data={t} key={t.id} />
        ))}
      </div>
    </>
  );
};

export default Transactions;
