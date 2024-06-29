import { useDispatch, useSelector } from 'react-redux';
import Transaction from './Transaction';
import { useEffect } from 'react';
import { getAllTransactions } from '../features/allTransactions/allTransactionsSlice';

import { fetchedData } from '../features/currentBalance/balanceSlice';
import { removeTransaction } from '../features/deleteTransaction/deleteTransactionSlice';

const Transactions = ({ onEdit }) => {
  const { allTransactions } = useSelector((state) => state.allTransactions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTransactions());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchedData(allTransactions));
  }, [dispatch, allTransactions]);

  const handleDelete = (id) => {
    dispatch(removeTransaction(id));
  };

  return (
    <>
      <p className="second_heading">
        {allTransactions.length > 0
          ? 'আপনার লেনদেন সমূহঃ'
          : 'কোনো পূর্ববর্তী লেনদেন নেই!'}
      </p>
      <div className="conatiner_of_list_of_transactions">
        {allTransactions.map((t) => (
          <Transaction
            data={t}
            key={t.id}
            onEdit={onEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </>
  );
};

export default Transactions;
