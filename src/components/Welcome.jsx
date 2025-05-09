import React, { useEffect, useState } from 'react';

const Welcome = () => {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const hasSeenWelcome = localStorage.getItem('welcomeSeen');
    if (!hasSeenWelcome) {
      setShowWelcome(true); // Show welcome only if not seen
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem('welcomeSeen', 'true');
    setShowWelcome(false);
  };

  return (
    <>
      {showWelcome && (
        <div>
          <div className="overlay"></div>
          <div className="welcome">
            <div className="title">Welcome</div>
            <div className="desc">The purpose of this application is to help you choose the appropriate camera lens for your needs. If you have other lenses to suggest, send me an <a href="mailto:alexanastagr@gmail.com">Email</a> and I will add them 😉</div>

            <div className="close" onClick={handleClose}>
              Understood
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Welcome;
