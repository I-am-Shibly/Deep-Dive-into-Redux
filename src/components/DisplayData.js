import { useSelector } from 'react-redux';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

const DisplayData = () => {
  const bookingData = useSelector((state) => state);

  return (
    <div class="table-container">
      <table class="booking-table">
        {bookingData?.length > 0 && (
          <>
            <TableHeader />
            {bookingData.map((data) => (
              <TableRow bookingData={bookingData} key={data.id} />
            ))}
          </>
        )}
      </table>
    </div>
  );
};

export default DisplayData;
