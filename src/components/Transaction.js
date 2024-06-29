import editImg from '../assets/images/edit.svg';
import deleteImg from '../assets/images/delete.svg';
import { transformToBengaliDigits } from '../utils/toBengaliDigits';

const Transaction = ({ data, onEdit, onDelete }) => {
  const handleEdit = () => {
    onEdit(data);
  };

  const handleDelete = (id) => {
    onDelete(id);
  };

  return (
    <ul>
      <li
        className={`transaction ${
          data.type === 'income' ? 'income' : 'expense'
        }`}
      >
        <p>{data.name}</p>
        <div className="right">
          <p>৳ {transformToBengaliDigits(data.amount)}</p>
          <button className="link">
            <img
              className="icon"
              src={editImg}
              alt="editImg"
              onClick={handleEdit}
            />
          </button>
          <button className="link">
            <img
              className="icon"
              src={deleteImg}
              alt="deleteImg"
              onClick={() => handleDelete(data.id)}
            />
          </button>
        </div>
      </li>
    </ul>
  );
};

export default Transaction;
