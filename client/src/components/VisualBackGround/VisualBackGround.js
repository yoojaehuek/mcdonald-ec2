import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../config/contansts';
import "./VisualBackGround.scss"

const VisualBackGround = ({props}) => {
  const locationHook = useLocation();
  const [currentUrl, setCurrentUrl] = useState(null);
  const [axiosResult, setAxiosResult] = useState({});
  const [axiosResultPath, setAxiosResultPath] = useState([]);

  //props = {title: 맥도날드 프로모션, path: [{url: "/", name: "HOME"}, {url: "/promotion", name: "What's New"}, {url: "/promotion", name: "맥도날드 프로모션"}]}
  // console.log("VisualBackGround/props: ", props);

  useEffect(() => {
    const splitUrl = locationHook?.pathname?.split('/') ?? null;
    // console.log("splitUrl: ", splitUrl);
    const location = splitUrl?.length > 1 ? splitUrl[1] : null;
    setCurrentUrl(location);
    console.log("VisualBackGround/location: ",location);

    axios.get(`${API_URL}/visualbackground/${location}`)
    .then(res => {
      console.log("VBG/res: ", res.data);
      setAxiosResult(res.data);
      setAxiosResultPath(JSON.parse(res.data.path))
    }).catch(err => {
      console.log(err);
    })
  }, [ locationHook ])
  
  
  const visualBackGroundStyle = {
    background: `url(${axiosResult.backgroundImage}) 50% 50% no-repeat`,
  }
  
  return(
      <div className="visualBackGround" style={visualBackGroundStyle}>
        <div className="visualBackGround_TextArea">
          <h1>{axiosResult.title}</h1>
          {axiosResult.subCopy?<p>{axiosResult.subCopy}</p>:<></>}
          <ul>
            {axiosResultPath.map((path, index) => 
              <li key={index}>
                <NavLink to={path.url}>{path.name}</NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
  )
}

export default VisualBackGround; 