import React from "react";
import { NavLink } from "react-router-dom";
import './Main.scss';

const Storymain = () => {
  const data = [
    {
      id: 1,
      title: "세계 1위의 푸드서비스 기업, 맥도날드",
      description: "전 세계 119개국 3만 4천여 개의 매장에서, 약 170만 명의 직원들이 근무하며 매일 6,900만 명의 고객들에게 제품과 서비스를 제공하고 있는 맥도날드는 전세계인들이 사랑하는 퀵 서비스 레스토랑(QSR, Quick Service Restaurant)이자 세계 1위의 푸드서비스 기업으로, 고객에게 더 나은 경험을 제공함으로써 ‘고객이 가장 좋아하는 장소이자 음식을 즐기는 최고의 방법(Our Customer’s Favorite Place and Way to Eat)’이 되기 위해 노력하고 있습니다.",
    },
    {
      id: 2,
      imageTitle: "01. 브랜드소개",
      imageDescription: "1955년 작은 레스토랑에서부터 지금에 이르기까지 고객이 가장 좋아하는 장소이자, 음식을 즐기는 최고의 방법이 되기 위해 맥도날드는 오늘도 노력합니다.",
      title: "1955년부터 지금까지 이어져온 맥도날드의 발자취",
      buttonText: "자세히 보기",
      buttonPath: "/story/brandintro",
      image: "./images/Story/Main01.jpg",
    },
    {
      id: 3,
      imageTitle: "02. 맥도날드의 사회적 책임",
      imageDescription: "맥도날드는 건전한 기업시민으로서의 책임을 다하고자 노력합니다. 지역 사회의 발전과 사람들의 행복에 기여하고 지금보다 더 나은 세상을 만들기 위해 오늘도 나아갑니다.",
      title: "더 나은 세상을 위한 맥도날드의 노력",
      buttonText: "자세히 보기",
      buttonPath: "/story/society",
      image: "./images/Story/Main02.jpg",
    },
    {
      id: 4,
      imageTitle: "03. 맥도날드 경쟁력",
      imageDescription: "맥도날드는 어떤 곳 보다 햄버거 비즈니스를 진지하게 생각합니다. 엄격한 품질 관리 시스템을 통해 고품질의 음식을 제공하며, 조리 과정에서 고객이 궁금한 모든 것을 알려드립니다.",
      title: "식재료부터 레스토랑까지 엄격한 기준을 고집합니다.",
      buttonText: "자세히 보기",
      buttonPath: "/story/farmtorestaurant",
      image: "./images/Story/Main03.jpg",
    },
    {
      id: 5,
      imageTitle: "04. 맥도날드 사람들",
      imageDescription: "끊임없는 변화와 도전을 통해 성장해온 맥도날드. 이 변화의 중심에는 맥도날드와 함께 변화하며 성장하는 '맥도날드 사람들'이 있습니다.",
      title: "최초의 서비스에 담긴 자부심으로 맥도날드의 새로운 변화를 이끌어갑니다.",
      buttonText: "자세히 보기",
      buttonPath: "/story/crew",
      image: "./images/Story/Main04.jpg",
    },
  ];

  return (
    <div className="story-container">
      {data.map((item) => (
        <div key={item.id} className="story-item">
          {item.id === 1 && (
            <div className="text-content">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          )}
          {item.id > 1 && (
            <>
              <img src={item.image} alt={item.imageTitle} />
              <div className="text-content">
                <h1>{item.imageTitle}</h1>
                <h3>{item.title}</h3>
                <p>{item.imageDescription}</p>
                <button className="custom-button">
                  <NavLink to={item.buttonPath}>{item.buttonText}</NavLink>
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};


export default Storymain;
