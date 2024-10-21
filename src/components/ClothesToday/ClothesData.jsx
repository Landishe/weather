import FemaleClothes from './FemaleClothes'
import MaleClothes from './MaleClothes'

function ClothesData({ weatherCodes, selectedSex }) {
  if (selectedSex === 'female') {
    return <FemaleClothes weatherCodes={weatherCodes}/>
  }
  if (selectedSex === 'male') {
    return <MaleClothes weatherCodes={weatherCodes}/>
  }
}
export default ClothesData;
