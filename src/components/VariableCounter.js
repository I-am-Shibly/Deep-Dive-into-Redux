import { connect } from 'react-redux';
import { decrease, increase } from '../redux/staticCounter/actions';
import {
  increase as dynamicIncrease,
  decrease as dynamicDecrease,
} from '../redux/dynamicCounter/actions';

const VariableCounter = ({ count, increment, decrement }) => {
  return (
    <div className="max-w-md mx-auto mt-10 space-y-5">
      <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
        <div className="text-2xl font-semibold">{count}</div>
        <div className="flex space-x-3">
          <button
            className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
            onClick={increment}
          >
            Increment
          </button>
          <button
            className="bg-red-400 text-white px-3 py-2 rounded shadow"
            onClick={decrement}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    count: ownProps.dynamic
      ? state.DynamicCounter.count
      : state.StaticCounter.count,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    increment: ownProps.dynamic
      ? () => dispatch(dynamicIncrease(5))
      : () => dispatch(increase()),
    decrement: ownProps.dynamic
      ? () => dispatch(dynamicDecrease(5))
      : () => dispatch(decrease()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VariableCounter);
