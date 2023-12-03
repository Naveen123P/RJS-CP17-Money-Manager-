import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]
console.log(transactionTypeOptions)

// Write your code here

const initialHistoryList = []

class MoneyManager extends Component {
  state = {
    HistoryList: initialHistoryList,
    title: '',
    amount: '',
    type: '',
    Income: 0,
    Expenses: 0,
  }

  toAddTransaction = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    const newTransaction = {
      id: uuidv4(),
      title,
      amount,
      type,
    }
    this.setState(prevState => ({
      HistoryList: [...prevState.HistoryList, newTransaction],
      title: '',
      amount: '',
      type: '',
    }))
  }

  getAmountDetails = () => {
    let income = 0
    let expenses = 0
    const {HistoryList} = this.state
    const getBalance = HistoryList.map(each => {
      if (each.type === 'Income') {
        income += each.amount
      } else {
        expenses += each.amount
      }
      return income - expenses
    })
    console.log(getBalance)
    this.setState({Income: income, Expenses: expenses})
  }

  toDeleteTransaction = id => {
    const {HistoryList} = this.state
    const filteredTransactions = HistoryList.filter(each => each.id !== id)
    this.setState({HistoryList: filteredTransactions})
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeType = event => {
    this.setState({type: event.target.value})
  }

  render() {
    const {HistoryList, title, amount, type, Income, Expenses} = this.state
    const Balance = Income - Expenses
    return (
      <div className="bg-container1">
        <div className="bg-container2-richard">
          <h1 className="username">Hi, Richard</h1>
          <p className="moneyManager">
            Welcome back to your <span>Money Manager</span>
          </p>
        </div>
        <ul className="balance-income-expenses-container">
          <MoneyDetails balance={Balance} income={Income} expenses={Expenses} />
        </ul>
        <div className="addTransaction-history-container">
          <div className="addTransaction-container">
            <h1>Add Transaction</h1>
            <form className="form-control" onSubmit={this.toAddTransaction}>
              <label htmlFor="TITLE" className="">
                TITLE
              </label>
              <input
                value={title}
                id="TITLE"
                placeholder="TITLE"
                type="text"
                onChange={this.onChangeTitle}
              />
              <label htmlFor="AMOUNT" className="">
                AMOUNT
              </label>
              <input
                value={amount}
                id="AMOUNT"
                placeholder="AMOUNT"
                type="text"
                onChange={this.onChangeAmount}
              />
              <label htmlFor="TYPE" className="">
                TYPE
              </label>
              <select
                value={type}
                id="TYPE"
                name="balance-type"
                onChange={this.onChangeType}
              >
                {transactionTypeOptions.map(each => (
                  <option value={each.optionId}>{each.displayText}</option>
                ))}
              </select>
              <button className="add-button" type="submit">
                Add
              </button>
            </form>
          </div>
          <div className="history-container">
            <h1>HISTORY</h1>
            <ul>
              <li className="headings">
                <p>Title</p>
                <p>Amount</p>
                <p>Type</p>
                <p> </p>
              </li>
              {HistoryList.map(each => (
                <TransactionItem
                  key={each.id}
                  transactionDetails={each}
                  toDeleteTransaction={this.toDeleteTransaction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
