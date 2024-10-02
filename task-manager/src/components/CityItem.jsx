

const CityItem = ({name, population}) => {
  return(
    <div>
      <ul>
      {name}
      <li> {population}</li>
      </ul>
    </div>
  )
}


export default CityItem