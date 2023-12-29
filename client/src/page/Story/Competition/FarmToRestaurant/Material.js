import React, { useState, useEffect } from "react";
import axios from "axios";
import "./FarmToRestaurant.scss";
import { API_URL } from "../../../../config/contansts";

const Material = ({ onMaterialClick }) => {
  const [materials, setMaterials] = useState([]);
  const [selectedMaterial, setSelectedMaterial] = useState(null);

  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/material`);
        const fetchedMaterials = response.data;
        setMaterials(fetchedMaterials);
        // console.log(fetchedMaterials);
        if (fetchedMaterials.length > 0) {
          setSelectedMaterial(fetchedMaterials[0]);
          onMaterialClick(fetchedMaterials[0]);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchMaterials();
  }, [onMaterialClick]);

  const handleMaterialClick = (material) => {
    setSelectedMaterial(material);
    onMaterialClick(material);
  };

  return (
    <div className="material-container">
      <p>
        원재료 공급사에서는 좋은 재료를 준비하기 위해 엄격한 기준으로
        <br />
        원재료 수급 및 가공 과정을 관리하고 있습니다.
      </p>
      <div className="materials-list">
        {materials.map((material) => (
          <div
            key={material.id}
            className={`material-item ${
              selectedMaterial && selectedMaterial.id === material.id
                ? "selected"
                : ""
            }`}
            onClick={() => handleMaterialClick(material)}
          >
            <img
              src={API_URL + material.img_url}
              alt={`Material ${material.id}`}
            />
          </div>
        ))}
      </div>
      <div className="material-details">
        {selectedMaterial && (
          <>
            <div className="material-img_url">
              <img
                src={API_URL + selectedMaterial.img_url}
                alt={`Material ${selectedMaterial.id}`}
              />
            </div>
            <div className="material-info">
              <h2>{selectedMaterial.title}</h2>
              <p style={{ color:'gray', lineHeight:'1.7rem', fontWeight:'bold' }}>{selectedMaterial.description}</p>
              <p style={{ fontSize:'0.8rem'}}> {selectedMaterial.additional_info}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Material;

//나는 맨날 코드 길어 귀찮아. 안해. 포기. 배째.
