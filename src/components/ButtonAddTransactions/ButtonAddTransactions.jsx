import { useDispatch } from 'react-redux';
import { toggleModalAddTrans } from 'redux/global/globalSlice';
import s from './ButtonAddTransactions.module.scss';
import IconSV from '../../assets/icons/symbol-defs.svg';

const ButtonAddTransactions = () => {
  const dispatch = useDispatch();
  const onClickToggle = () => {
    dispatch(toggleModalAddTrans());
  };
  return (
    <button onClick={onClickToggle} className={s.btn} type="button">
      <svg className={s.icon} fill="#fff" stroke="#fff">
        <use href={`${IconSV}#icon-plus`} />
      </svg>
    </button>
  );
};

export default ButtonAddTransactions;
