import s from './Dashboard.module.scss';
import Media from 'react-media';
import IconSV from '../../assets/icons/symbol-defs.svg';
import ModalAddTransaction from 'components/ModalAddTransaction/ModalAddTransaction';
import ButtonAddTransactions from 'components/ButtonAddTransactions/ButtonAddTransactions';

const Dashboard = () => {
  const data = Array.from({ length: 15 }, () => ({
    id: Math.random().toString(36).substring(7),
    balanceAfter: Math.floor(Math.random() * 10000),
    category: 'random',
    sum: Math.floor(Math.random() * 100),
    comment: 'lorem ipsum',
    type: Math.random() > 0.5 ? 'INCOME' : 'EXPENSE',
    transactionDate: new Date().toLocaleDateString(),
  }));

  return (
    <>
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
                {data.map(
                  ({ id, category, sum, comment, type, transactionDate }) => {
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
                              {category}
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
                              {sum}
                            </span>
                          </li>
                          <li className={s.mobailTrItem__row}>
                            <button type="buttom" className={s.button__delete}>
                              Delete
                            </button>
                            <a className={s.mobileTrItem__edit} href>
                              <svg
                                width="12"
                                height="12"
                                fill="transparent"
                                stroke="currentColor"
                              >
                                <use href={`${IconSV}#icon-pencil`} />
                              </svg>
                              <p>Edit</p>
                            </a>
                          </li>
                        </ul>
                      </li>
                    );
                  }
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
                      {data?.map(
                        ({
                          id,
                          category,
                          sum,
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
                              <td className={s.tableData}>{category}</td>
                              <td className={s.tableData}>{comment}</td>
                              <td
                                className={
                                  type === 'INCOME'
                                    ? s.tableData_INCOME
                                    : s.tableData_EXPENSE
                                }
                              >
                                {sum}
                              </td>
                              <td className={s.tableData}>
                                <svg
                                  // svg
                                  className={s.mysvg}
                                  width="13"
                                  height="21"
                                >
                                  <use href={`${IconSV}#icon-pencil`} />
                                </svg>
                              </td>
                              <td className={s.tableData}>
                                <button
                                  type="buttom"
                                  className={s.button__delete}
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          );
                        }
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </>
        )}
      </Media>
      <ModalAddTransaction />
      <ButtonAddTransactions />
    </>
  );
};
export default Dashboard;
