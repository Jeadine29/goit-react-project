import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { Chart } from '../PieChart/PieChart';
import { calculateCategories } from '../../helpers/calculateCategories'; // Ensure this function is correctly implemented
import { selectTransactions, selectTransactionsError } from '../../redux/Transaction/TransactionSlice';
import { selectUser } from '../../redux/User/userSlice';
import s from './TransactionsChart.module.css';

export const TransactionsChart = ({ transactionsType }) => {
  const [categoriesData, setCategoriesData] = useState(null);
  const dispatch = useDispatch();

  const { totalIncomes, totalExpenses } = useSelector(selectUser);
  const error = useSelector(selectTransactionsError);
  const data = useSelector(selectTransactions);

  const totalRef = useRef(
    transactionsType === 'Incomes' ? totalIncomes : totalExpenses
  );

  useEffect(() => {
    totalRef.current =
      transactionsType === 'Incomes' ? totalIncomes : totalExpenses;
  }, [totalIncomes, totalExpenses, transactionsType]);

  useEffect(() => {
    if (data === null) return;

    // Calculate categories based on the data and total value
    setCategoriesData(calculateCategories(data, totalRef.current));
  }, [data]);

  if (error) {
    return (
      <div className={s.warningWrapper}>
        <h2 className={s.warningTitle}>
          Sorry, something went wrong. Please try again...
        </h2>
        <p className={s.errorMessage}>An error occurred while fetching the data.</p>
      </div>
    );
  }

  if (data === null || categoriesData === null) return null;

  return !categoriesData.length ? (
    <div className={s.warningWrapper}>
      <h2 className={s.warningTitle}>
        You don't have any {transactionsType.toLowerCase()} this month.
      </h2>
      <p className={s.noDataMessage}>No data available for this period.</p>
    </div>
  ) : (
    <div className={s.chartContainer}>
      <h3 className={s.title}>{transactionsType} Categories</h3>
      <div className={s.statsWrapper}>
        <div className={s.pieChartWrapper}>
          <Chart data={categoriesData} />
          <p className={s.chartDescr}>100%</p>
        </div>
        <ul className={`${s.list} scroll scrollA`}>
          {categoriesData.map((item, index) => (
            <li className={s.listItem} key={index}>
              <div
                className={s.wrapperMarker}
                style={{ backgroundColor: item.color }}
              ></div>
              <p className={s.itemDescr}>{item.name}</p>
              <p className={s.itemSpan}>{item.value}%</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
