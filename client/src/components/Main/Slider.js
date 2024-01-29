import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { API_URL } from '../../config/contansts';

const Slider = () => {

  const [imagesAndVideos, setImagesAndVideos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [timers, setTimers] = useState([]);
  const sliderRef = useRef(null);
  
  useEffect(() => {
    axios.get(`${API_URL}/api/slider`)
    .then(res => {
      console.log(res);
      setImagesAndVideos(res.data)
      setTimers(res.data.map(() => ({ duration: 0, progress: 0 })))
    }).catch(err => {
      console.log(err);
    })
  },[])

  console.log(imagesAndVideos)

  
  console.log("timers: ", timers)


  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesAndVideos.length);
      }
    }, imagesAndVideos[currentIndex]?.duration || 5000);
  
    setTimers((prevTimers) => {
      const newTimers = prevTimers.map((timer, index) => ({
        duration: imagesAndVideos[index].duration,
        progress: index === currentIndex ? timer.progress + 1000 : timer.progress,
      }));
      return newTimers;
    });
  
    return () => clearInterval(interval);
  }, [currentIndex, isPlaying, imagesAndVideos]);


  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesAndVideos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + imagesAndVideos.length) % imagesAndVideos.length);
  };

  const handleVideoLoaded = (index) => {
    const videoElement = sliderRef.current.children[index].querySelector('video');
  
    if (index === currentIndex && imagesAndVideos[index].type === 'video') {
      videoElement.currentTime = 0;
      videoElement.load();
      videoElement.play(); // 동영상 로드 후 재생
    }
  };

  const handleVideoEnded = () => {
    // 동영상이 끝나면 다음 슬라이드로 넘어가기
    handleNext();
  };

  return (
    <div className="slider-container" ref={sliderRef}>
      <div className="button-container">
        <button className="prev-button" onClick={handlePrev}>
          &#8249;
        </button>
        <button className="next-button" onClick={handleNext}>
          &#8250;
        </button>
      </div>
      {imagesAndVideos.map((item, index) => (
        <NavLink to={item.path} key={index}>
          <div className={`slide ${index === currentIndex ? 'active' : ''}`}>
            {item.type === 'image' && <img src={API_URL+item.content_url} alt={`Slide ${index}`} />}
            {item.type === 'video' && (
              <>
                <video
                  autoPlay
                  muted
                  loop
                  onLoadedMetadata={() => handleVideoLoaded(index)}
                  onTimeUpdate={(e) => {
                    setTimers((prevTimers) => {
                      const newTimers = [...prevTimers];
                      newTimers[index].progress = e.target.currentTime * 1000;
                      return newTimers;
                    });
                  }}
                  onEnded={handleVideoEnded}
                >
                  <source src={API_URL+item.content_url} type="video/mp4" />
                </video>
                <div
                  className="timer"
                  style={{
                    width: `${(timers[index].progress / timers[index].duration) * 110}%`,
                    transition: `width ${timers[index].duration / 8000}s linear`,
                  }}
                />
              </>
            )}
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default Slider;
