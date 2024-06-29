import { useSelector } from 'react-redux';
import { transformToBengaliDigits } from '../utils/toBengaliDigits';

const Balance = () => {
  const { balance, loading, isError, error } = useSelector(
    (state) => state.balance
  );

  const isDebt = balance <= 0;

  let content;

  if (loading) {
    content = <h4>loading...</h4>;
  } else if (!isError && balance) {
    content = (
      <div className={`top_card ${isDebt ? 'debt' : 'balance'}`}>
        <p>আপনার বর্তমান {`${balance > 0 ? 'ব্যালেন্স' : 'ঋণ'}`}</p>
        <h3>
          <span>৳ </span>
          <span>{transformToBengaliDigits(Math.abs(balance))}</span>
        </h3>
      </div>
    );
  } else if (isError) {
    content = <h3>{error}</h3>;
  }

  return <>{content}</>;
};

export default Balance;
