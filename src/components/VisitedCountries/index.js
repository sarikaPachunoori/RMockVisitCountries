import './index.css'

const VisitedCountries = props => {
  const {details, isVisited, getRemovedCountry} = props
  const {name, imageUrl, id} = details

  const removeCountry = () => {
    getRemovedCountry(id)
  }

  const imgDisplay = isVisited ? (
    <div className="country-item-cont">
      <img src={imageUrl} alt="thumbnail" className="image" />
      <div className="name-remove-cont">
        <p className="name-rem">{name}</p>
        <button type="button" className="remove" onClick={removeCountry}>
          Remove
        </button>
      </div>
    </div>
  ) : (
    ''
  )
  return <li className="item">{imgDisplay}</li>
}

export default VisitedCountries
