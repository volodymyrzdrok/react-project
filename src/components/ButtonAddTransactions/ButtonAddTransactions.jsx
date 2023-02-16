import { AiFillPlusCircle } from 'react-icons/ai';
import s from './ButtonAddTransactions.module.scss';

const ButtonAddTransactions = () => {
  return (
    <button className={s.btn} type="button">
      <AiFillPlusCircle
        style={{
          position: 'fixed',
          bottom: '40px',
          right: '40px',
          color: '#24cca7',
          width: '44px',
          height: '44px',
        }}
      />
    </button>
  );
};

export default ButtonAddTransactions;
