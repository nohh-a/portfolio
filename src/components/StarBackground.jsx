import React, { useState, useEffect } from "react";

/**
 *
 * @returns - stars and moving meteors in background
 */

export const StarBackground = () => {
  // stars - list of objects: id, size, x, y, opacity, animationDuration
  const [stars, setStars] = useState([]);
  // meteors - list of objects: id, size, x, y, delay, animationDuration
  const [meteors, setMeteors] = useState([]);

  /**
   *
   */
  useEffect(() => {
    // generate stars and meteors on mount, run once
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
    };

    // Runs handleResize() every time browser is resized
    window.addEventListener("resize", handleResize);

    // Cleanup function - when component unmounts, react runs this to remove resize listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateStars = () => {
    // Dynamically scales star count to screen aream, multiplying the screen height by width gives the screen are in pixels
    // dividing screen pixels by 10,000 means "1 star per 10,000 pixels of screen space"
    const numberOfStars = Math.floor(
      (window.innerHeight * window.innerWidth) / 10000
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        // size between 1-4 pixels (* 3 = 0,3 then +1 = 1,4)
        size: Math.random() * 3 + 1,
        // star will apear though entire width of page
        x: Math.random() * 100,
        // star will apear though entire height of page
        y: Math.random() * 100,
        // star brightness from 0.5-1.0
        opacity: Math.random() * 0.5 + 0.5,
        // star duration from 2-6s
        animationDuration: Math.random() * 4 + 2,
      });
    }
    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 4;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 50,
        y: Math.random() * 50,
        opacity: Math.random() * 15,
        animationDuration: Math.random() * 10,
      });
    }
    setMeteors(newMeteors);
  };
  return (
    /**
     * z-0 : position behind everything
     * fixed inset-0: cover entire screen
     * overflow-hidden: if content spills outside, hide it
     * pointer-events-none: ignore mouse interactions
     */
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 50 + "px",
            height: meteor.size - 5 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay,
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};
