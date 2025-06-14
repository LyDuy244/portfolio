"use client"
import React, {useEffect} from 'react';

type TStars = {
  id: number;
  size: number;
  x: number;
  y: number;
  opacity: number;
  animationDuration: number;
}[]
type TMeteors = {
  id: number;
  size: number;
  x: number;
  y: number;
  delay: number;
  animationDuration: number;
}[]
const StarBackground = () => {
  const [stars, setStars] = React.useState<TStars>([]);
  const [meteors, setMeteors] = React.useState<TMeteors>([]);
  useEffect(() => {
    generateStars()
    generateMeteors()
    const handleResize = () => {
      generateStars()
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  const generateStars = () => {
    const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 10000);
    const newStars: TStars = []

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      })
    }

    setStars(newStars);
  }
  const generateMeteors = () => {
    const numberOfMeteors = 4
    const newMeteors: TMeteors = []

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random()  + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      })
    }
    setMeteors(newMeteors);
  }
  return (
    <div className={"fixed inset-0 overflow-hidden pointer-events-none z-0"}>
      {
        stars.map((star, i) => (
          <div key={i} className={"star animate-pulse-subtle"} style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: `${star.opacity}`,
            animationDuration: `${star.animationDuration}s`,
          }}></div>
        ))
      }
      {
        meteors.map((meteor, i) => (
          <div key={i} className={"meteor animate-meteor"} style={{
            width: `${meteor.size * 25}px`,
            height: `${meteor.size}px`,
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
            animationDelay: `${meteor.delay}`,
            animationDuration: `${meteor.animationDuration}s`,
          }}></div>
        ))
      }
    </div>
  );
};

export default StarBackground;