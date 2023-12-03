// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, toDeleteTransaction} = props
  const {id, title, amount, type} = transactionDetails

  const deleteTransaction = () => {
    toDeleteTransaction(id)
  }

  return (
    <li className="transaction-items">
      <p>{title}</p>
      <p>{amount}</p>
      <p>{type}</p>
      <button
        data-testid="delete"
        type="button"
        className="delete-button"
        onClick={deleteTransaction}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}

export default TransactionItem
