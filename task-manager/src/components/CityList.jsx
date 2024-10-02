import CitytItem from "./CityItem"


const CityList = (props) => {
  const {citys} = props

  return(
    <div>
      {citys.map((city, index) => {
        return(
          <CitytItem
          key={index}
          name={city.name}
          population={city.population}
          />
        )
      })}
    </div>
  )

}

export default CityList