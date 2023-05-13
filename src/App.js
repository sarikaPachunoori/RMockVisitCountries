import {Component} from 'react'
import Countries from './components/Countries'
import VisitedCountries from './components/VisitedCountries'
import './App.css'

const initialCountriesList = [
  {
    id: 0,
    name: 'Australia',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-australia-img.png',
    isVisited: false,
  },
  {
    id: 1,
    name: 'Canada',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-canada-img.png',
    isVisited: false,
  },
  {
    id: 2,
    name: 'Greenland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-greenland-img.png',
    isVisited: false,
  },
  {
    id: 3,
    name: 'India',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-india-img.png',
    isVisited: true,
  },
  {
    id: 4,
    name: 'Netherlands',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-netherland-img.png',
    isVisited: false,
  },
  {
    id: 5,
    name: 'Portugal',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-portugal-img.png',
    isVisited: false,
  },
  {
    id: 6,
    name: 'Switzerland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-switzerland-img.png',
    isVisited: false,
  },
  {
    id: 7,
    name: 'Thailand',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-thailand-img.png',
    isVisited: false,
  },
  {
    id: 8,
    name: 'United Kingdom',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-united-kingdom-img.png',
    isVisited: true,
  },
  {
    id: 9,
    name: 'Venezuela',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-venezuela-img.png',
    isVisited: false,
  },
]

// Replace your code here
class App extends Component {
  state = {
    visited: true,
    list: initialCountriesList,
  }

  getRemovedCountry = id => {
    const {list} = this.state
    const updated = list.filter(each => each.id !== id)
    this.setState({list: updated})
  }

  updateCountry = id => {
    this.setState(prevState => ({
      list: prevState.list.map(each => {
        if (id === each.id) {
          return {...each, isVisited: !prevState.isVisited}
        }
        return each
      }),
    }))
  }

  getVisitedList = () => {
    const {visited, list} = this.state

    if (visited) {
      return list.filter(each => each.isVisited === true)
    }
    return null
  }

  render() {
    const {visited, list} = this.state
    const getVisitedList = this.getVisitedList()

    return (
      <div className="container">
        <h1 className="heading">Countries</h1>
        <ul className="list-cont">
          {list.map(each => (
            <Countries
              key={each.id}
              countriesList={each}
              isCountry={each.isVisited === visited}
              updateCountry={this.updateCountry}
            />
          ))}
        </ul>
        <h1 className="heading">Visited Countries</h1>

        {getVisitedList.length > 0 ? (
          <ul className="visited-countries-cont">
            {getVisitedList.map(each => (
              <VisitedCountries
                key={each.id}
                isVisited={visited === each.isVisited}
                details={each}
                getRemovedCountry={this.getRemovedCountry}
              />
            ))}
          </ul>
        ) : (
          <div className="no-countries">
            <p>No Countries Visited Yet!</p>
          </div>
        )}
      </div>
    )
  }
}

export default App
