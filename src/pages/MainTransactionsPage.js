import TransactionsHistoryNav from "./TransactionsHistoryNav";
import TotalIncome from "./TotalIncome";
import RadioButton from "./RadioButton";
import FrameComponent from "./FrameComponent";
import PropTypes from "prop-types";
import styles from "./MainTransactionsPage.module.css";

const MainTransactionsPage = ({ className = "" }) => {
  return (
    <div className={[styles.home, className].join(" ")}>
      <header className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameWrapper}>
          <div className={styles.iconParent}>
            <img
              className={styles.icon}
              loading="lazy"
              alt=""
              src="/icon.svg"
            />
            <a className={styles.expensetracker}>ExpenseTracker</a>
          </div>
        </div>
        <TransactionsHistoryNav />
        <div className={styles.user}>
          <img
            className={styles.imageIcon}
            loading="lazy"
            alt=""
            src="/image@2x.png"
          />
          <div className={styles.alexRybachokWrapper}>
            <a className={styles.alexRybachok}>Alex Rybachok</a>
          </div>
          <div className={styles.chevronDownWrapper}>
            <img
              className={styles.chevronDownIcon}
              loading="lazy"
              alt=""
              src="/chevrondown.svg"
            />
          </div>
        </div>
      </header>
      <section className={styles.homeInner}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.expenseLogParent}>
              <h1 className={styles.expenseLog}>Expense Log</h1>
              <div className={styles.captureAndOrganize}>
                Capture and organize every penny spent with ease! A clear view
                of your financial habits at your fingertips.
              </div>
            </div>
            <div className={styles.totalIncomeParent}>
              <TotalIncome arrow15="/arrow-15.svg" totalIncome="Total Income" />
              <TotalIncome
                arrow15="/arrow-14.svg"
                totalIncome="Total Expense"
                propTop="unset"
                propBottom="13.4px"
                propMinWidth="unset"
                propWidth="104px"
              />
            </div>
            <div className={styles.block}>
              <div className={styles.blockChild} />
              <div className={styles.categoryDots} />
              <div className={styles.categoryDots1} />
              <div className={styles.categoryDots2} />
              <div className={styles.frameContainer}>
                <div className={styles.vectorParent}>
                  <img
                    className={styles.frameItem}
                    loading="lazy"
                    alt=""
                    src="/ellipse-29.svg"
                  />
                  <div className={styles.expensesCategories}>
                    Expenses categories
                  </div>
                </div>
                <div className={styles.wrapper}>
                  <b className={styles.b}>100%</b>
                </div>
              </div>
              <div className={styles.blockInner}>
                <div className={styles.frameDiv}>
                  <div className={styles.frameWrapper1}>
                    <div className={styles.frameParent1}>
                      <div className={styles.frameParent2}>
                        <div className={styles.frameParent3}>
                          <div className={styles.hobbyIconWrapper}>
                            <div className={styles.hobbyIcon} />
                          </div>
                          <div className={styles.hobby}>Hobby</div>
                        </div>
                        <div className={styles.frameParent4}>
                          <div className={styles.productsIconWrapper}>
                            <div className={styles.productsIcon} />
                          </div>
                          <div className={styles.products}>Products</div>
                        </div>
                      </div>
                      <div className={styles.frameParent5}>
                        <div className={styles.frameParent6}>
                          <div className={styles.ellipseWrapper}>
                            <div className={styles.frameInner} />
                          </div>
                          <div className={styles.cinema}>Cinema</div>
                        </div>
                        <div className={styles.frameParent7}>
                          <div className={styles.ellipseContainer}>
                            <div className={styles.ellipseDiv} />
                          </div>
                          <div className={styles.health}>Health</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent8}>
                    <div className={styles.parent}>
                      <b className={styles.b1}>45%</b>
                      <div className={styles.container}>
                        <b className={styles.b2}>25%</b>
                      </div>
                      <b className={styles.b3}>20%</b>
                      <div className={styles.frame}>
                        <b className={styles.b4}>10%</b>
                      </div>
                    </div>
                    <div className={styles.rectangleGroup}>
                      <div className={styles.rectangleDiv} />
                      <div className={styles.frameChild1} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rectangleContainer}>
            <div className={styles.frameChild2} />
            <div className={styles.frameParent9}>
              <div className={styles.radiobuttonParent}>
                <RadioButton propPadding="2px" propBorder="2px solid #4dc274" />
                <div className={styles.expenseWrapper}>
                  <div className={styles.expense}>Expense</div>
                </div>
              </div>
              <div className={styles.radiobuttonGroup}>
                <RadioButton />
                <div className={styles.incomeWrapper}>
                  <a className={styles.income}>Income</a>
                </div>
              </div>
            </div>
            <div className={styles.block1}>
              <div className={styles.date}>
                <div className={styles.date1}>Date</div>
                <div className={styles.input}>
                  <input
                    className={styles.mmddyyyy}
                    placeholder="mm/dd/yyyy"
                    type="text"
                  />
                </div>
                <img
                  className={styles.calendarIcon}
                  alt=""
                  src="/calendar.svg"
                />
              </div>
              <div className={styles.time}>
                <div className={styles.time1}>Time</div>
                <div className={styles.input1}>
                  <div className={styles.emptyInput}>00:00:00</div>
                  <img className={styles.clockIcon} alt="" src="/clock.svg" />
                </div>
              </div>
            </div>
            <FrameComponent
              category="Category"
              differentPlaceholder="Different"
            />
            <div className={styles.sumParent}>
              <div className={styles.sum}>Sum</div>
              <div className={styles.input2}>
                <div className={styles.enterTheSum}>Enter the sum</div>
                <div className={styles.uah}>UAH</div>
              </div>
            </div>
            <FrameComponent
              category="Comment"
              differentPlaceholder="Enter the text"
              propMinWidth="72px"
              propWidth="99px"
            />
            <button className={styles.btn}>
              <div className={styles.add}>Add</div>
            </button>
            <textarea
              className={styles.frameTextarea}
              placeholder="Profile settings"
              rows={4}
              cols={11}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

MainTransactionsPage.propTypes = {
  className: PropTypes.string,
};

export default MainTransactionsPage;
