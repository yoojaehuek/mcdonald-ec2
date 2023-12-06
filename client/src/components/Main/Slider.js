import React, { useState, useEffect, useRef } from 'react';

// 타이머 초기화 함수
const initializeTimers = (length) => Array(length).fill(null).map(() => useRef(null));

const Slider = () => {
  const imagesAndVideos = [
    { type: 'image', src: '/images/Main/1.jpg', duration: 5000 },
    { type: 'image', src: '/images/Main/2.jpg', duration: 5000 },
    { type: 'video', src: '/images/Main/1.mp4', duration: 30000 },
    { type: 'image', src: '/images/Main/3.jpg', duration: 5000 },
    { type: 'image', src: '/images/Main/4.jpg', duration: 5000 },
    { type: 'image', src: '/images/Main/5.jpg', duration: 5000 },
    { type: 'image', src: '/images/Main/6.jpg', duration: 5000 },
    { type: 'image', src: '/images/Main/7.jpg', duration: 5000 },
    { type: 'image', src: '/images/Main/8.jpg', duration: 5000 },
    { type: 'image', src: '/images/Main/9.jpg', duration: 5000 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [timers, setTimers] = useState(initializeTimers(imagesAndVideos.length));
  const progressBarRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    // 이미지 또는 비디오 변경 시 타이머 초기화
    const interval = setInterval(() => {
      if (isPlaying) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesAndVideos.length);
      }
    }, imagesAndVideos[currentIndex]?.duration || 5000);

    setTimers((prevTimers) => {
      const newTimers = [...prevTimers];
      newTimers[currentIndex].current = interval;
      return newTimers;
    });

    return () => clearInterval(interval);
  }, [currentIndex, isPlaying]);

  useEffect(() => {
    if (imagesAndVideos[currentIndex]?.type === 'video' && progressBarRef.current) {
      progressBarRef.current.style.transition = 'width 0s'; // 비디오 변경 시 전환 비활성화
      progressBarRef.current.style.width = '100%'; // 프로그레스 바를 전체 너비로 설정
      setTimeout(() => {
        progressBarRef.current.style.transition = `width ${imagesAndVideos[currentIndex].duration / 1000}s linear`; // 전환 다시 활성화
        progressBarRef.current.style.width = '0%'; // 프로그레스 바 애니메이션 시작
      }, 50); // 전환이 적용되기 위한 지연
      if (sliderRef.current) {
        sliderRef.current.scrollLeft = 0; // 비디오의 스크롤 위치 초기화
      }
    }
  }, [currentIndex]);

  const handlePlayPause = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesAndVideos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + imagesAndVideos.length) % imagesAndVideos.length);
  };

  return (
    <div className="slider-container" ref={sliderRef}>
      <div className="button-container">
        <button className="prev-button" onClick={handlePrev}>
          Prev
        </button>
        <button className="next-button" onClick={handleNext}>
          Next
        </button>
      </div>
      {imagesAndVideos.map((item, index) => (
        <div key={index} className={`slide ${index === currentIndex ? 'active' : ''}`}>
          {item.type === 'image' && <img src={item.src} alt={`Slide ${index}`} />}
          {item.type === 'video' && (
            <>
              <video autoPlay muted loop>
                <source src={item.src} type="video/mp4" />
              </video>
              <div className="timer" ref={timers[index]} style={{ width: `${(imagesAndVideos[index]?.duration / 1000) * 100}%` }} />
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Slider;
