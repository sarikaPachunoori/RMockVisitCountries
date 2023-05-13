import './index.css'

const Countries = props => {
  const {countriesList, isCountry, updateCountry} = props
  const {name, id} = countriesList

  const updateVisited = () => {
    updateCountry(id)
  }

  const visited = isCountry ? (
    <p className="visited-button">Visited</p>
  ) : (
    <button type="button" className="visit-button" onClick={updateVisited}>
      Visit
    </button>
  )

  return (
    <li className="item-cont">
      <div className="items">
        <p className="name">{name}</p>
        {visited}
      </div>
      <hr className="line" />
    </li>
  )
}

export default Countries
