import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './FarmToRestaurant.scss';
import { API_URL } from '../../../../config/contansts';

// gorupBy 함수 선언하고 매개변수 array, key를 받음.
const groupBy = (array, key) => {
  // reduce 메서드를 사용해서 배열 순회하면ㅅ 그룹화 작업 수행.
  // result는 결과. currentValue는 현재 배열 요소 나태냄.
  return array.reduce((result, currentValue) => {
    // 현재 요소 key에 해당하느 값이 result 객체에 조재하며 배열, 그렇지 않으면 빈 배열. / 현재 요소 currentValue를 그룹 배열에 추가
    (result[currentValue[key]] = result[currentValue[key]] || []).push(currentValue);
    // reduce가 끝나면 결과 반환
    return result;
  }, {});
};
// ex) { name: '임헌성', age: '40' }이면 groupBy(array, 'age')를 하면 그룹화 가능
// filter랑 비슷해서 써봤는데 더 복잡함. 숙련도 이슈.

const Effort = () => {
  const [categoriesData, setCategoriesData] = useState([]);
  const [groupedCategories, setGroupedCategories] = useState({});

  useEffect(() => {
    axios.get(`${API_URL}/api/effort`)
      .then(response => {
        setCategoriesData(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  useEffect(() => {
    setGroupedCategories(groupBy(categoriesData, 'title'));
  }, [categoriesData]);
  // caategoriesData에 name을 그룹화, 그 후 categoriesData(의존성 배열)이 바뀌면 실행

  return (
    <div className="effort-container">
      <h1>레스토랑에 도착한 식재료는 어떻게 관리될까요?</h1>
      <h3>
        레스토랑으로 배송된 식재료가 음식으로 조리되어 고객에게 전달되는 순간까지<br></br> 맥도날드의 노력은 멈추지 않습니다.
      </h3>
      {/* Object.keys 함수는 주어진 객체의 모든 열거 가능한 속성 이름을 담은 배열을 반환함. */}
      {Object.keys(groupedCategories).map((title) => (
        <div key={title} className="effort-category">
          <h2>{title}</h2>
          <div className='yellowbox'>{groupedCategories[title][0].title_description}</div>
          {groupedCategories[title].map((category) => (
            <div key={category.id} className="effort-item">
              <img src={API_URL + category.img_url} alt={`Item Image ${category.id}`} />
              <strong>{category.sub_title}</strong>
              <p>{category.sub_title_description}</p>
            </div>
          ))}
        </div>
      ))}
      <div className='btnARa'><button>맥도날드의 음식과 재료에 대해 더 궁금한 점이 있다면?</button></div>
    </div>
  );
};

export default Effort;
