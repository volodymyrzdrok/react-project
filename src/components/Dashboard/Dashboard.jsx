import s from './Dashboard.module.scss';
import Media from 'react-media';
import IconSV from '../../assets/icons/symbol-defs.svg';
import ModalAddTransaction from 'components/ModalAddTransaction/ModalAddTransaction';
import ButtonAddTransactions from 'components/ButtonAddTransactions/ButtonAddTransactions';
import { selectIsModalAddTransactionOpen } from '../../redux/global/globalSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import {
  resetErrorTransaction,
  selectCategoriesForId,
  selectFinanceIsLoading,
  selectTransactions,
} from 'redux/finance/financeSlice';
import Loader from 'components/Loader/Loader';
import { removeTransaction } from 'redux/finance/financeOperations';
import { useEffect, useState } from 'react';
import { toggleModalAddTrans } from 'redux/global/globalSlice';
import { ToastContainer, toast } from 'react-toastify';
import { settingAlert } from 'utils/settingAlert';
import { selectFinanceErrorStatus } from '../../redux/finance/financeSlice.js';

const Dashboard = () => {
  const dispatch = useDispatch();
  const transactions = useSelector(selectTransactions);
  const categoriesTransForId = useSelector(selectCategoriesForId);
  const isLoading = useSelector(selectFinanceIsLoading);
  const isOpenModalGlobal = useSelector(selectIsModalAddTransactionOpen);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [transactionObj, setTransactionObj] = useState(null);

  const categoryFunc = categoryId =>
    categoriesTransForId[categoryId.toLowerCase()].name;

  const handleOpenEdit = obj => {
    setTransactionObj(obj);
    setOpenEditModal(true);
    dispatch(toggleModalAddTrans());
  };

  const errorFinance = useSelector(selectFinanceErrorStatus);

  useEffect(() => {
    if (errorFinance === 'Request failed with status code 400') {
      toast.warning('Please, try again )', settingAlert());
      dispatch(resetErrorTransaction());
    }
  }, [errorFinance, dispatch]);

  return (
    <>
      {isOpenModalGlobal && (
        <ModalAddTransaction
          editModal={openEditModal}
          closeEditModal={setOpenEditModal}
          newObjTransaction={transactionObj}
        />
      )}
      <ButtonAddTransactions />
      <Media
        queries={{
          small: '(max-width: 767px)',
          medium: '(min-width: 768px)',
        }}
      >
        {matches => (
          <>
            {matches.small && (
              <ul className={s.mobailTrList}>
                {isLoading ? (
                  <Loader />
                ) : (
                  transactions.map(
                    ({
                      id,
                      categoryId,
                      amount,
                      comment,
                      type,
                      transactionDate,
                    }) => {
                      return (
                        <li
                          key={id}
                          className={
                            type === 'INCOME'
                              ? s.mobailTrItem_INCOME
                              : s.mobailTrItem_EXPENSE
                          }
                        >
                          <ul
                            className={s.mobailTrItem__list}
                            style={{
                              borderLeft: `5px solid ${
                                type === 'INCOME' ? '#24cca7' : '#ff6596'
                              }`,
                            }}
                          >
                            <li className={s.mobailTrItem__row}>
                              <span className={s.mobailTrItem__cell}>Data</span>
                              <span className={s.mobailTrItem__cell_value}>
                                {transactionDate}
                              </span>
                            </li>
                            <li className={s.mobailTrItem__row}>
                              <span className={s.mobailTrItem__cell}>Type</span>
                              <span className={s.mobailTrItem__cell_value}>
                                {type === 'INCOME' ? '+' : '-'}
                              </span>
                            </li>
                            <li className={s.mobailTrItem__row}>
                              <span className={s.mobailTrItem__cell}>
                                Category
                              </span>
                              <span className={s.mobailTrItem__cell_value}>
                                {categoryFunc(categoryId)}
                              </span>
                            </li>
                            <li className={s.mobailTrItem__row}>
                              <span className={s.mobailTrItem__cell}>
                                Comment
                              </span>
                              <span className={s.mobailTrItem__cell_value}>
                                {comment}
                              </span>
                            </li>
                            <li className={s.mobailTrItem__row}>
                              <span className={s.mobailTrItem__cell}>Sum</span>
                              <span
                                className={
                                  type === 'INCOME'
                                    ? s.mobailTrItem__cell_value_INCOME
                                    : s.mobailTrItem__cell_value_EXPENSE
                                }
                              >
                                {amount}
                              </span>
                            </li>
                            <li className={s.mobailTrItem__row}>
                              <button
                                onClick={() => dispatch(removeTransaction(id))}
                                type="button"
                                className={s.button__delete}
                              >
                                Delete
                              </button>
                              <span
                                className={s.mobileTrItem__edit}
                                onClick={() => {
                                  handleOpenEdit({
                                    amount,
                                    comment,
                                    categoryId,
                                    type,
                                    transactionDate,
                                    id,
                                  });
                                }}
                              >
                                <svg
                                  width="12"
                                  height="12"
                                  fill="transparent"
                                  stroke="currentColor"
                                >
                                  <use href={`${IconSV}#icon-pencil`} />
                                </svg>
                                <p>Edit</p>
                              </span>
                            </li>
                          </ul>
                        </li>
                      );
                    }
                  )
                )}
              </ul>
            )}
            {matches.medium && (
              <div className={s.tableTrList}>
                <table className={s.table}>
                  <thead className={s.tableHead}>
                    <tr>
                      <th className={s.tableHeader} scope="col">
                        Date
                      </th>
                      <th className={s.tableHeader} scope="col">
                        Type
                      </th>
                      <th className={s.tableHeader} scope="col">
                        Category
                      </th>
                      <th className={s.tableHeader} scope="col">
                        Comment
                      </th>
                      <th className={s.tableHeader} scope="col">
                        Sum
                      </th>
                      <th className={s.tableHeader} scope="col"></th>
                    </tr>
                  </thead>
                </table>
                <div className={s.tableScrollBox}>
                  <table className={s.dataTable}>
                    <tbody className={s.tableBody}>
                      {isLoading ? (
                        <tr className={s.tableRow}>
                          <td className={s.tableData}>
                            <Loader />
                          </td>
                        </tr>
                      ) : (
                        transactions?.map(
                          ({
                            id,
                            categoryId,
                            amount,
                            comment,
                            type,
                            transactionDate,
                          }) => {
                            return (
                              <tr className={s.tableRow} key={id}>
                                <td className={s.tableData}>
                                  {transactionDate.replace('.20', '.')}
                                </td>
                                <td className={s.tableData}>
                                  {type === 'INCOME' ? '+' : '-'}
                                </td>
                                <td className={s.tableData}>
                                  {categoryFunc(categoryId)}
                                </td>
                                <td className={s.tableData}>{comment}</td>
                                <td
                                  className={
                                    type === 'INCOME'
                                      ? s.tableData_INCOME
                                      : s.tableData_EXPENSE
                                  }
                                >
                                  {amount}
                                </td>
                                <td className={s.tableData}>
                                  <svg
                                    // svg
                                    onClick={() => {
                                      handleOpenEdit({
                                        amount,
                                        comment,
                                        categoryId,
                                        type,
                                        transactionDate,
                                        id,
                                      });
                                    }}
                                    className={s.mysvg}
                                    width="13"
                                    height="21"
                                  >
                                    <use href={`${IconSV}#icon-pencil`} />
                                  </svg>
                                </td>
                                <td className={s.tableData}>
                                  <button
                                    onClick={() =>
                                      dispatch(removeTransaction(id))
                                    }
                                    type="button"
                                    className={s.button__delete}
                                  >
                                    Delete
                                  </button>
                                </td>
                              </tr>
                            );
                          }
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </>
        )}
      </Media>
      <ToastContainer />
    </>
  );
};
export default Dashboard;
