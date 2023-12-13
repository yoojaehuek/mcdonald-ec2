import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { API_URL } from '../../config/contansts';

const Slider = () => {
  // const imagesAndVideos = [
  //   { type: 'image', src: '/images/Main/1.jpg', path: '/login', duration: 5000 },
  //   { type: 'image', src: '/images/Main/2.jpg', path: '/', duration: 5000 },
  //   { type: 'video', src: '/images/Main/1.mp4', path: '/video', duration: 30000 },
  //   { type: 'image', src: '/images/Main/3.jpg', path: '/slide-3', duration: 5000 },
  //   { type: 'image', src: '/images/Main/4.jpg', path: '/slide-4', duration: 5000 },
  //   { type: 'image', src: '/images/Main/5.jpg', path: '/slide-5', duration: 5000 },
  //   { type: 'image', src: '/images/Main/6.jpg', path: '/slide-6', duration: 5000 },
  //   { type: 'image', src: '/images/Main/7.jpg', path: '/slide-7', duration: 5000 },
  //   { type: 'image', src: '/images/Main/8.jpg', path: '/slide-8', duration: 5000 },
  //   { type: 'image', src: '/images/Main/9.jpg', path: '/slide-9', duration: 5000 },
  // ];

  const [imagesAndVideos, setImagesAndVideos] = useState([]);
  const [timers, setTimers] = useState([]);
  
  useEffect(() => {
    axios.get(`${API_URL}/slider`)
    .then(res => {
      console.log(res);
      setImagesAndVideos(res.data)
      setTimers(res.data.map(() => ({ duration: 0, progress: 0 })))
    }).catch(err => {
      console.log(err);
    })
  },[])

  console.log(imagesAndVideos)

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  
  console.log("timers: ", timers)
  const sliderRef = useRef(null);


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
  }, [currentIndex, isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

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
