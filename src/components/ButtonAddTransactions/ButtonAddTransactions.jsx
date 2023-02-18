import { AiFillPlusCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { toggleModalAddTrans } from 'redux/global/globalSlice';
import s from './ButtonAddTransactions.module.scss';

const ButtonAddTransactions = () => {
  const dispatch = useDispatch();
  const onClickToggle = () => {
    dispatch(toggleModalAddTrans());
  };
  return (
    <button onClick={onClickToggle} className={s.btn} type="button">
      <AiFillPlusCircle
        style={{
          // position: 'fixed',
          // bottom: '40px',
          // right: '40px',

          color: '#24cca7',
          width: '44px',
          height: '44px',
        }}
      />
    </button>
  );
};

export default ButtonAddTransactions;
