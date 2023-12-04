import { useParams, NavLink } from 'react-router-dom';

const DetailPromotion = () => {
  const {prodNum} = useParams;
  console.log(prodNum);
  return(
    <>
      <h2>DetailPromotion</h2>
      <p>params: {prodNum}</p>
    </>
  )
}

export default DetailPromotion; 