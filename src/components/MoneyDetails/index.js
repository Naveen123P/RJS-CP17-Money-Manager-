// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props

  return (
    <>
      <li className="balance-container">
        <div className="balance2-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
            className="balance-img"
          />
          <div className="balance-details">
            <p>Your Balance</p>
            <p className="rs-balance">Rs {balance}</p>
          </div>
        </div>
      </li>
      <li className="balance-container income-container">
        <div className="balance2-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
            className="balance-img"
          />
          <div className="balance-details">
            <p>Your Income</p>
            <p className="rs-balance">Rs {income}</p>
          </div>
        </div>
      </li>
      <li className="balance-container expenses-container">
        <div className="balance2-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
            className="balance-img"
          />
          <div className="balance-details">
            <p>Your Expenses</p>
            <p className="rs-balance">Rs {expenses}</p>
          </div>
        </div>
      </li>
    </>
  )
}

export default MoneyDetails
