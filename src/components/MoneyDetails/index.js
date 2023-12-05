// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props

  return (
    <>
      <div className="balance-container">
        <div className="balance2-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
            className="balance-img"
          />
          <div className="balance-details">
            <p>Your Balance</p>
            <p data-testid="balanceAmount" className="rs-balance">
              Rs {balance}
            </p>
          </div>
        </div>
      </div>
      <div className="balance-container income-container">
        <div className="balance2-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
            className="balance-img"
          />
          <div className="balance-details">
            <p>Your Income</p>
            <p data-testid="incomeAmount" className="rs-balance">
              Rs {income}
            </p>
          </div>
        </div>
      </div>
      <div className="balance-container expenses-container">
        <div className="balance2-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
            className="balance-img"
          />
          <div className="balance-details">
            <p>Your Expenses</p>
            <p data-testid="expensesAmount" className="rs-balance">
              Rs {expenses}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default MoneyDetails
