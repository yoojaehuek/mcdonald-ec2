import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const BtnArea = () => {
  const locationHook = useLocation();
  const [previousUrl, setPreviousUrl] = useState("");
  const [listUrl, setListUrl] = useState("");
  const [nextUrlL, setNextUrlL] = useState("");
  const [promotionDetailPath, setPromotionDetailPath] = useState("");

  useEffect(() => {
    const splitUrl = locationHook?.pathname?.split('/') ?? null;
    // console.log("splitUrl: ", locationHook);
    const previous = splitUrl?.length > 1 ? parseInt(splitUrl[3])-1 : null;
    const location = splitUrl?.length > 1 ? splitUrl[1] : null;
    const next = splitUrl?.length > 1 ? parseInt(splitUrl[3])+1 : null;
    const pathWithoutNumber = locationHook.pathname.substring(0, locationHook.pathname.lastIndexOf('/') + 1);
    setPromotionDetailPath(pathWithoutNumber);
    setPreviousUrl(previous);
    setListUrl(location);
    setNextUrlL(next);
  }, [ locationHook ])

  // console.log("BtnArea/locationHook: ", locationHook);
  return(
    <div className='detail_Promotion_BtnArea'>
      {/* <NavLink to={props.previousUrl} className='Arrow_Btn'>{`<`}</NavLink>
      <NavLink to={props.listUrl} className='List_Btn'>목록으로</NavLink>
      <NavLink to={props.nextUrl} className='Arrow_Btn'>{`>`}</NavLink> */}
      {previousUrl==0?<></>:<NavLink to={promotionDetailPath+previousUrl} className='Arrow_Btn'>{`<`}</NavLink>}
      <NavLink to={'/'+listUrl} className='List_Btn'>목록으로</NavLink>
      <NavLink to={promotionDetailPath+nextUrlL}  className='Arrow_Btn'>{`>`}</NavLink>
    </div>
  )
}

export default BtnArea;