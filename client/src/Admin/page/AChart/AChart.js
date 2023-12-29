import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Chart from "chart.js/auto";
import {
  AttachMoney as AttachMoneyIcon,
  People as PeopleIcon,
} from "@mui/icons-material";
import {
  Star as StarIcon,
  StarBorder as StarBorderIcon,
  StarHalf as StarHalfIcon,
} from "@mui/icons-material";
import { API_URL } from "../../../config/contansts";
import "./AChart.scss";

const AChart = () => {
  // useRef를 사용해 차트 컨텍스트, 차트 인스턴스를 저장
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [salesData, setSalesData] = useState([]);
  const [todayIndex, setTodayIndex] = useState(0);
  const [showDailySales, setShowDailySales] = useState(true);
  const [admins, setAdmins] = useState(null);
  const [rank, setRank] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/admin/allname`)
      .then((res) => {
        console.log(res.data);
        setAdmins(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/order/rank`)
      .then((res) => {
        console.log(res.data);
        setRank(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/api/order/all`);
        console.log("response: ", response);
        const data = await response.json();
        setSalesData(data);

        // 현재 요일을 계산하여 설정
        const todayDate = new Date();
        const todayIndex = todayDate.getDay();
        setTodayIndex(todayIndex);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    // 컴포넌트가 마운트될 때 데이터를 가져오고, 5분마다 업데이트
    fetchData();
    const intervalId = setInterval(fetchData, 5 * 60 * 1000);

    // 컴포넌트가 언마운트될 때 인터벌을 정리
    return () => clearInterval(intervalId);
  }, []);

  // 차트 데이터를 업데이트, 차트를 생성, 업데이트하는 효과 생성
  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      // 일간 or 월간 차트 데이터를 가져오는 함수 호출
      const chartData = showDailySales
        ? getDailyChartData(salesData)
        : getMonthlyChartData(salesData);

      // 차트 옵션 설정
      const options = {
        scales: {
          x: {
            title: {
              display: true,
              text: showDailySales ? "요일" : "월",
            },
          },
          y: {
            title: {
              display: true,
              text: "실적",
            },
          },
        },
      };

      // 이전에 생성된 차트가 있다면 파괴.
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      // 새로운 차트를 생성
      chartInstance.current = new Chart(ctx, {
        type: "bar",
        data: {
          labels: chartData.labels,
          datasets: chartData.datasets,
        },
        options: options,
      });
    }
  }, [salesData, chartRef, todayIndex, showDailySales]);

  // 일간 차트 데이터 계산 함수
  const getDailyChartData = (data) => {
    // 요일별 총 판매 실적을 계산
    const dailyTotal = data.reduce((acc, item) => {
      const date = new Date(item.created_at);
      const day = date.getDay();
      acc[day] = (acc[day] || 0) + item.total_price;
      return acc;
    }, []);

    // 요일 정렬
    const reorderedDays = ["일", "월", "화", "수", "목", "금", "토"];

    // 차트 데이터를 반환
    return {
      labels: reorderedDays,
      datasets: [
        {
          label: "일주일 실적",
          data: dailyTotal,
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
      ],
    };
  };

  // 월간 차트 데이터 계산하는 함수
  const getMonthlyChartData = (data) => {
    // 월별 총 판매 실적을 계산
    const monthlyTotal = data.reduce((acc, item) => {
      const date = new Date(item.created_at);
      const month = date.getMonth();
      acc[month] = (acc[month] || 0) + item.total_price;
      return acc;
    }, []);

    // 차트 데이터를 반환
    return {
      labels: [
        "1월",
        "2월",
        "3월",
        "4월",
        "5월",
        "6월",
        "7월",
        "8월",
        "9월",
        "10월",
        "11월",
        "12월",
      ],
      datasets: [
        {
          label: "월간 실적",
          data: monthlyTotal,
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
      ],
    };
  };

  // 오늘의 총 판매금액을 계산하는 함수
  const getTodaySales = () => {
    const today = new Date().toLocaleDateString();
    const todaySales = salesData
      .filter(
        (item) => new Date(item.created_at).toLocaleDateString() === today
      )
      .reduce((acc, item) => acc + item.total_price, 0);

    return todaySales;
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "16px",
          margin: "0 -8px",
          height: "35vh",
          marginTop: "3vw",
          width: "60vw",
        }}
      >
        <div
          style={{
            flex: "1 0 48%",
            margin: "0 8px",
            textAlign: "center",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
            {showDailySales ? "일주일간 실적" : "월간 실적"}
          </h2>
          <canvas
            ref={chartRef}
            style={{
              width: "400px",
              height: "180px",
              margin: "auto",
              display: "block",
            }}
          ></canvas>
        </div>
        <div
          style={{
            flex: "1 0 48%",
            margin: "0 8px",
            textAlign: "center",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
            {showDailySales ? "하루 총 판매금액" : "전체 판매금액"}
          </h2>
          <AttachMoneyIcon
            style={{
              fontSize: "3rem",
              color: "#4CAF50",
              marginBottom: "10px",
              marginTop: "1vw",
            }}
          />
          <p
            style={{
              fontSize: "2rem",
              color: "#4CAF50",
              fontWeight: "bold",
              marginTop: "1vw",
            }}
          >
            {showDailySales
              ? `금일 총 판매금액: ${getTodaySales().toLocaleString()}원`
              : `총 판매금액: ${
                  salesData.length > 0
                    ? salesData
                        .reduce((acc, item) => acc + item.total_price, 0)
                        .toLocaleString()
                    : 0
                }원`}
          </p>
          <button
            onClick={() => setShowDailySales(!showDailySales)}
            style={{
              padding: "10px 15px",
              fontSize: "16px",
              backgroundColor: "#4CAF50",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "background-color 0.3s",
              marginTop: "3vw",
            }}
          >
            {showDailySales ? "전체 보기" : "일간 보기"}
          </button>
        </div>  
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "16px",
          margin: "0 -8px",
          height: "35vh",
          marginTop: "3vw",
          width: "60vw",
        }}
      >
        <div
          style={{
            flex: "1 0 48%",
            margin: "0 8px",
            textAlign: "center",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
            상품 인기 순위
          </h2>
          {rank &&
            rank.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  marginBottom: "16px",
                  borderBottom: "1px solid #ddd",
                  paddingBottom: "16px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "8px",
                  }}
                >
                  {index === 0 && (
                    <StarIcon style={{ fontSize: "2rem", color: "gold" }} />
                  )}
                  {index === 1 && (
                    <StarIcon style={{ fontSize: "2rem", color: "silver" }} />
                  )}
                  {index === 2 && (
                    <StarIcon style={{ fontSize: "2rem", color: "#cd7f32" }} />
                  )}
                </div>
                <img
                  src={API_URL + item.thumbnail_img_url}
                  alt={item.k_name}
                  style={{
                    width: "50px",
                    height: "50px",
                    objectFit: "cover",
                    borderRadius: "50%",
                    marginLeft: "10px",
                  }}
                />
                <p style={{ marginLeft: "30px", fontSize: "1rem" }}>{item.k_name}</p>
              </div>
            ))}
        </div>
        <div
          style={{
            flex: "1 0 48%",
            textAlign: "center",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
            관리자 목록
          </h2>
          <PeopleIcon
            style={{ fontSize: "3rem", color: "#2196F3", marginBottom: "10px" }}
          />
          {admins &&
            admins.map((admin, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "8px",
                  padding: "8px",
                  border: "1px solid #eee",
                  borderRadius: "4px",
                }}
              >
                <p style={{ margin: "0", fontSize: "1.2rem" }}>{admin.email}</p>
                <p style={{ margin: "0", fontSize: "1.1rem", color: "#666" }}>
                  {admin.admin_name}
                </p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default AChart;