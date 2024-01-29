import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../config/contansts';
import "./Banner.scss"

const Banner = () => {
  const { pathname } = useLocation();
  const [currentUrl, setCurrentUrl] = useState(null);
  const [axiosResult, setAxiosResult] = useState({});
  const [axiosResultPath, setAxiosResultPath] = useState([]);

  //props = {title: 맥도날드 프로모션, path: [{url: "/", name: "HOME"}, {url: "/promotion", name: "What's New"}, {url: "/promotion", name: "맥도날드 프로모션"}]}
  // console.log("Banner/props: ", props);

  useEffect(() => {
    const splitUrl = pathname?.split('/') ?? null;
    console.log("splitUrl: ", splitUrl);
    const location = splitUrl?.length > 1 ? splitUrl[2] : null;
    setCurrentUrl(location);
    console.log("Banner/location: ",location);
    axios.get(`${API_URL}/api/banner/${location}`)
    .then(res => {
      console.log("VBG/res: ", res.data);
      setAxiosResult(res.data);
      setAxiosResultPath(JSON.parse(res.data.link))
    }).catch(err => {
      console.log(err);
    })
  }, [ pathname ])
  
  
  let bannerStyle = {}
  if (axiosResult) {
    bannerStyle = {
      background: `url(${API_URL + axiosResult.background_img_url}) 50% 50% no-repeat`,
    }
  }
  
  return(
    <>
      {axiosResult && <div className="banner" style={bannerStyle}>
        <div className="banner_TextArea">
          <h1>{axiosResult.title}</h1>
          {axiosResult.content && <p>{axiosResult.content}</p>}
          <ul>
            {axiosResultPath.map((path, index) => 
              <li key={index}>
                <NavLink to={path.url}>{path.name}</NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
      }
    </>
  )
}

export default Banner; 