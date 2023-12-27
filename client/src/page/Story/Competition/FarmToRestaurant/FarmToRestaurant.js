import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import Material from './Material';
import Safekeeping from './Safekeeping';
import './FarmToRestaurant.scss';
import Effort from './Effort';
import BottomMenu from '../Component/BottomMenu';
import { API_URL } from '../../../../config/contansts';
import Buttonmain from "../../../../components/Main/Button";

class FarmToRestaurant extends React.Component {
  // 클래스 선언 FarmToRestaurant 클래스를 선언하고 React.Component를 확장.
  constructor(props) {
    super(props);
  // 생성자 메서드 컴포넌트의 초기 상태를 설정. selectedButton은 현재 선택된 버튼을 나타냄.
    this.state = {
      selectedButton: 1,
      selectedMaterial: null,
    };
  }

  handleMaterialSelect = (material) => {
    this.setState({
      selectedMaterial: material,
    });
  };

  // componentDidMount(생명주기) 메서드 컴포넌트가 마운트될 때 호출되는 메서드.
  componentDidMount() {
    // URL의 쿼리?? 매개변수에서 selectedButton 값을 읽어옴.
    // ? 뒤에 주소를 가져옴
    const urlParams = new URLSearchParams(window.location.search);
    // 정수로 변환, 값이 없으면 기본값 1을 사용.
    // 가져와서 정수로 변환 없으며 1.
    const selectedButton = parseInt(urlParams.get('selectedButton')) || 1;
    // console.log('seleb:', selectedButton);
    // selectedButton 값을 상태로 설정하여 컴포넌트를 업데이트.
    this.setState({
      selectedButton,
    });
  }

  // handleButtonClick 메서드 버튼이 클릭될 때 호출되는 메서드.
  handleButtonClick = (buttonNumber) => {
    // 브라우저의 URL을 업데이트하여 선택된 버튼을 쿼리 매개변수로 추가.
    // pushstate로 히스토리 스택에 새로운 엔트리 추가하고 객체상태. 다음은 빈 문자열(대부분 무시되는 값이라) 그다음은 현재 페이지 문자열
    window.history.pushState({}, '', `?selectedButton=${buttonNumber}`);
    // 선택된 버튼 값을 상태로 설정하여 컴포넌트를 업데이트.
    this.setState({
      selectedButton: buttonNumber,
      //console.log('Btn:', buttonNumber)
    });
  };

  render() {
    const videoId = 'A6Iinx5nWWs';

    const opts = {
      height: '720',  
      width: '1280',
      playerVars: {
        autoplay: 1,
        // listType: 'playlist',
        // list: playlistId,
      },
    };

    // const SelectedComponent = () => {
    //   switch (this.state.selectedButton) {
    //     case 1:
    //       return <Material />;
    //     case 2:
    //       return <Safekeeping />;
    //     case 3:
    //       return <Effort />;
    //     default:
    //       return null;
    //   }
    // console.log('SeletC:', SelectedComponent);
    // };
    let selectedComponent;
    switch (this.state.selectedButton) {
      case 1:
        selectedComponent = <Material selectedMaterial={this.state.selectedMaterial} onMaterialClick={this.handleMaterialSelect} />;
        break;
      case 2:
        selectedComponent = <Safekeeping />;
        break;
      case 3:
        selectedComponent = <Effort />;
        break;
      default:
        selectedComponent = null;
    }

    return (
      <>
      <BottomMenu/>
        {/* <MenuBar /> */}
        <div
          className="farm-container"
          style={{
            backgroundImage: this.state.selectedButton === 1 ? `url(${API_URL + this.state.selectedMaterial?.background_img_url})` : 'none',
          }}
        >
          <div className="youtube-video">
            <YouTube videoId={videoId} opts={opts} />
          </div>
          <div className="button-group">
            {/* {[1, 2, 3].map((buttonNumber) => (
              <button
                key={buttonNumber}
                className={this.state.selectedButton === buttonNumber ? 'selected' : ''}
                onClick={() => this.handleButtonClick(buttonNumber)}
              >
                {buttonNumber}
              </button>
            ))}
          </div>
          {SelectedComponent()} */}
            <button
              className={this.state.selectedButton === 1 ? 'selected' : ''}
              onClick={() => this.handleButtonClick(1)}
            >
              <span>STEP 01</span> | 원재료 준비와 가공
            </button>
            <button
              className={this.state.selectedButton === 2 ? 'selected' : ''}
              onClick={() => this.handleButtonClick(2)}
            >
              <span>STEP 02</span> | 재료 보관부터 배송까지
            </button>
            <button
              className={this.state.selectedButton === 3 ? 'selected' : ''}
              onClick={() => this.handleButtonClick(3)}
            >
              <span>STEP 03</span> | 레스토랑에서의 노력
            </button>
          </div>
          {selectedComponent}
        </div>
        <>
          <Buttonmain/>
        </>
      </>
    );
  }
}

export default FarmToRestaurant;
