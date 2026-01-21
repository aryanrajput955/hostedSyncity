import React from 'react';

const CustomLoader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      <div className="flex flex-col items-center">
        {/* Flower Container */}
        <div className="flower relative w-72 h-72 flex justify-center items-center">
          {/* Petals */}
          <div className="petal petal1 absolute w-9 h-16 rounded-full" />
          <div className="petal petal2 absolute w-9 h-16 rounded-full" />
          <div className="petal petal3 absolute w-9 h-16 rounded-full" />
          <div className="petal petal4 absolute w-9 h-16 rounded-full" />
          <div className="petal petal5 absolute w-9 h-16 rounded-full" />
          <div className="petal petal6 absolute w-9 h-16 rounded-full" />
          <div className="petal petal7 absolute w-9 h-16 rounded-full" />
          <div className="petal petal8 absolute w-9 h-16 rounded-full" />
          
          {/* Center */}
          <div className="center absolute w-8 h-8 bg-pink-200 rounded-full shadow-lg" />
        </div>
        
        {/* Loading Text */}
        <div className="mt-8 text-center">
          <div className="text-2xl font-semibold text-gray-700 mb-2">
            Loading
          </div>
          <div className="flex space-x-1 justify-center">
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '0s'}} />
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}} />
            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}} />
          </div>
        </div>
      </div>

      <style jsx>{`
        .flower {
          animation: rotateFlower 8s infinite ease-in-out;
        }
        
        .petal {
          background: linear-gradient(180deg, #fcdbdf, #fd688d);
          animation: changeColor 8s infinite;
        }
        
        .petal1 {
          transform: rotate(0deg) translateY(-50%);
          animation-delay: 0.1s;
        }
        
        .petal2 {
          transform: rotate(45deg) translateY(-50%);
          animation-delay: 0.2s;
        }
        
        .petal3 {
          transform: rotate(90deg) translateY(-50%);
          animation-delay: 0.3s;
        }
        
        .petal4 {
          transform: rotate(135deg) translateY(-50%);
          animation-delay: 0.4s;
        }
        
        .petal5 {
          transform: rotate(180deg) translateY(-50%);
          animation-delay: 0.5s;
        }
        
        .petal6 {
          transform: rotate(225deg) translateY(-50%);
          animation-delay: 0.6s;
        }
        
        .petal7 {
          transform: rotate(270deg) translateY(-50%);
          animation-delay: 0.7s;
        }
        
        .petal8 {
          transform: rotate(315deg) translateY(-50%);
          animation-delay: 0.8s;
        }
        
        .center {
          background: radial-gradient(circle, #f1d2d2 0%, #e8b4b8 100%);
          box-shadow: 0 0 15px rgba(241, 210, 210, 0.6);
          animation: centerPulse 2s ease-in-out infinite;
        }
        
        @keyframes changeColor {
          0% {
            background: linear-gradient(180deg, #fcdbdf, #fd688d);
            transform: rotate(var(--rotation)) translateY(-50%) scale(1);
          }
          25% {
            background: linear-gradient(180deg, #fcd2e3, #fa6094);
            transform: rotate(var(--rotation)) translateY(-50%) scale(1.1);
          }
          50% {
            background: linear-gradient(180deg, #fabefc, #c34ec7);
            transform: rotate(var(--rotation)) translateY(-50%) scale(1.2);
          }
          75% {
            background: linear-gradient(180deg, #f7d6d6, #fd6a6a);
            transform: rotate(var(--rotation)) translateY(-50%) scale(1.1);
          }
          100% {
            background: linear-gradient(180deg, #fcd3fc, #e844f7);
            transform: rotate(var(--rotation)) translateY(-50%) scale(1);
          }
        }
        
        @keyframes rotateFlower {
          0% {
            transform: scale(1) rotate(0deg);
          }
          25% {
            transform: scale(1.1) rotate(90deg);
          }
          50% {
            transform: scale(1.3) rotate(180deg);
          }
          75% {
            transform: scale(1.1) rotate(270deg);
          }
          100% {
            transform: scale(1) rotate(360deg);
          }
        }
        
        @keyframes centerPulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 15px rgba(241, 210, 210, 0.6);
          }
          50% {
            transform: scale(1.2);
            box-shadow: 0 0 25px rgba(241, 210, 210, 0.8), 0 0 35px rgba(253, 104, 141, 0.4);
          }
        }
        
        /* Set CSS custom properties for each petal rotation */
        .petal1 { --rotation: 0deg; }
        .petal2 { --rotation: 45deg; }
        .petal3 { --rotation: 90deg; }
        .petal4 { --rotation: 135deg; }
        .petal5 { --rotation: 180deg; }
        .petal6 { --rotation: 225deg; }
        .petal7 { --rotation: 270deg; }
        .petal8 { --rotation: 315deg; }
      `}</style>
    </div>
  );
};

export default CustomLoader;