import './Home.css'

export default function Home() {
  return (
    <div className="home">
      <div className="rectangle-1">
      </div>
      <div className="container-1">
        <div className="logo">
          <div className="icon">
            <img className="group" src="assets/vectors/Unknown" />
          </div>
          <span className="expense-tracker">
            ExpenseTracker
          </span>
        </div>
        <div className="container-2">
          <div className="block-2">
            <div className="container">
              <img className="arrow-15" src="assets/vectors/Unknown" />
            </div>
            <div className="text-2">
              <div className="your-balance">
                Your balance
              </div>
              <span className="container">
                $632.000
              </span>
            </div>
            <div className="container-3">
              <span className="container-1">
                +1.29%
              </span>
            </div>
          </div>
          <div className="block">
            <div className="expense-log">
              Expense log
            </div>
            <div className="block-1">
              <div className="text">
                <p className="manage-your-finances-masterfully">
                  <span className="manage-your-finances-masterfully-sub-0"></span><span className="manage-your-finances-masterfully-sub-1"></span><span className="manage-your-finances-masterfully-sub-2"></span><span></span>
                </p>
                <span className="expense-tracker-effortlessly-empowers-you-to-take-control-of-your-finances-with-intuitive-features-it-simplifies-the-process-of-tracking-and-managing-expenses-allowing-for-astress-free-mastery-over-your-financial-world">
                  ExpenseTracker effortlessly empowers you to take control of your finances! With intuitive features, it simplifies the process of tracking and managing expenses, allowing for a stress-free mastery over your financial world.
                </span>
              </div>
              <div className="btns">
                <div className="sign-up">
                  <span className="sign-up-1">
                    Sign Up
                  </span>
                </div>
                <div className="sign-in">
                  <span className="sign-in-1">
                    Sign In
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="users">
          <div className="images">
            <div className="image">
            </div>
            <div className="image-1">
            </div>
            <div className="image-2">
            </div>
          </div>
          <div className="text-1">
            <div className="users-1">
              1000 users + 
            </div>
            <span className="trusted-by-users-for-reliable-expense-tracking">
              Trusted by users for reliable expense tracking!
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}