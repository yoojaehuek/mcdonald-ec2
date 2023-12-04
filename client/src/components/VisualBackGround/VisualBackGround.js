import { NavLink } from 'react-router-dom';
import "./VisualBackGround.scss"

const VisualBackGround = ({props}) => {
  //props = {title: 맥도날드 프로모션, path: [{url: "/", name: "HOME"}, {url: "/promotion", name: "What's New"}, {url: "/promotion", name: "맥도날드 프로모션"}]}

  console.log("VisualBackGround/props: ", props);

  const visualBackGroundStyle = {
    background: `url(${props.bgImg}) 50% 50% no-repeat`,
  }
  
  return(
      <div className="visualBackGround" style={visualBackGroundStyle}>
        <div className="inner">
          <h1>{props.title}</h1>
          <ul>
            {props.path.map((path, index)=> 
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