import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import './AChart.scss';
import axios from 'axios';
import { API_URL } from '../../../config/contansts';

const AChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [admins, setAdmins] = useState(null);

  useEffect(()=> {
    axios.get(`${API_URL}/admin/allname`)
    .then(res => {
      console.log(res.data);
      setAdmins(res.data);
    }).catch(err => {
      console.error(err);
    });
  }, []);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    const data = {
      labels: ['월', '화', '수', '목', '금', '토', '일'],
      datasets: [
        {
          label: '일주일간 실적',
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };

    const options = {
      scales: {
        x: {
          title: {
            display: true,
            text: '요일',
          },
        },
        y: {
          title: {
            display: true,
            text: '실적',
          },
        },
      },
    };

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options,
    });
    
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <>
      <div style={{ marginLeft: '240px', padding: '16px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <div style={{ flex: '1 0 50%', marginBottom: '16px', textAlign: 'center' }}>
          <h2>일주일간 실적</h2>
          <canvas ref={chartRef} width="400" height="200" style={{ margin: 'auto' }}></canvas>
        </div>
        <div style={{ flex: '1 0 50%', marginBottom: '16px', textAlign: 'center' }}>
          <h2>하루 총 판매금액</h2>
          <p>오늘의 총 판매금액: XXX원</p>
        </div>
        <div style={{ flex: '1 0 50%', marginBottom: '16px', textAlign: 'center' }}>
          <h2>인기 버거 순위</h2>
        </div>
        <div style={{ flex: '1 0 50%', marginBottom: '16px', textAlign: 'center' }}>
          <h2>관리자 목록</h2>
          {admins && admins.map((admin, index) => (
            <p key={index}>{admin.email} / {admin.admin_name}</p>
          ))}
        </div>
      </div>
    </>
  );
};

export default AChart;
