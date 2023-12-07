import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FarmToRestaurant.scss';
import { API_URL } from '../../../../config/contansts';

const Material = () => {
  const [materials, setMaterials] = useState([]);
  const [selectedMaterial, setSelectedMaterial] = useState(null);

  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        const response = await axios.get(`${API_URL}/material`);
        setMaterials(response.data);
        // console.log(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchMaterials();
  }, []);

  const handleMaterialClick = (material) => {
    setSelectedMaterial(material);
  };

  return (
    <div className="material-container" style={{ backgroundImage: `url(${ API_URL + selectedMaterial?.background})` }}>
      <h1>
        원재료 공급사에서는 좋은 재료를 준비하기 위해 엄격한 기준으로
        원재료 수급 및 가공 과정을 관리하고 있습니다.
      </h1>
      <div className="materials-list">
        {materials.map((material) => (
          <div
            key={material.id}
            className={`material-item ${
              selectedMaterial && selectedMaterial.id === material.id ? 'selected' : ''
            }`}
            onClick={() => handleMaterialClick(material)}
          >
            <img src={API_URL + material.image} alt={`Material ${material.id}`} />
          </div>
        ))}
      </div>
      <div className="material-details">
        {selectedMaterial && (
          <>
            <div className="material-image">
              <img src={API_URL + selectedMaterial.image} alt={`Material ${selectedMaterial.id}`} />
            </div>
            <div className="material-info">
              <h2>{selectedMaterial.title}</h2>
              <p>{selectedMaterial.description}</p>
              <p>{selectedMaterial.additionalInfo}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Material;

//나는 맨날 코드 길어 귀찮아. 안해. 포기. 배째.