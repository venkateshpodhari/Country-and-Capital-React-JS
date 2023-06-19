import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {activeId: countryAndCapitalsList[0].id}

  onChange = event => {
    this.setState({activeId: event.target.value})
  }

  getCountry = () => {
    const {activeId} = this.state
    const activeCapitalAndCountry = countryAndCapitalsList.find(
      each => each.id === activeId,
    )

    return activeCapitalAndCountry.country
  }

  render() {
    const {activeId} = this.state
    const country = this.getCountry(activeId)
    console.log(country)
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1>Countries And Capitals</h1>
          <div className="question-container">
            <select
              className="select"
              onChange={this.onChange}
              value={activeId}
            >
              {countryAndCapitalsList.map(eachCapital => (
                <option
                  className="option"
                  value={eachCapital.id}
                  key={eachCapital.id}
                >
                  {eachCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="para">is Capital of which country</p>
          </div>
          <h1 className="country">{country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
