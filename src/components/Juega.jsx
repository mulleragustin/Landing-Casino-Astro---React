import React from "react";
import {
  Gamepad2,
  Sparkles,
  MessageCircle,
  Phone,
  ChevronDown,
} from "lucide-react";
import { FaWhatsapp  } from "react-icons/fa";
import {RiMoneyDollarCircleLine} from "react-icons/ri";

const Juega = () => {
  return (
    <>
      <section className="flex items-start justify-center px-4 pt-34 mb-6">
        <div className="text-center w-full max-w-xs sm:max-w-lg md:max-w-4xl lg:max-w-6xl mx-auto">
          <div className="relative mx-auto w-full max-w-sm sm:max-w-lg md:max-w-3xl lg:max-w-4xl">
            {/* Wrapper para el efecto neon */}
            <div className="neon-card-wrapper rounded-2xl sm:rounded-3xl p-1">
              <div className="bg-gradient-to-b from-gray-800 via-gray-900 to-black rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl relative overflow-hidden backdrop-blur-sm">
                
                <div className="relative z-10">
                  <div className="flex justify-center mb-4 sm:mb-6">
                    <div className="relative">
                      <RiMoneyDollarCircleLine className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 text-yellow-400 drop-shadow-lg animate-bounce" />
                      <Sparkles className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 h-6 w-6 sm:h-8 sm:w-8 text-pink-400 animate-pulse" />
                    </div>
                  </div>

                  <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl italic opensans font-bold text-white bg-clip-text mb-3 sm:mb-4 md:mb-6 leading-tight">
                    JUGÁ, <wbr></wbr>GANÁ Y
                  </h2>

                  <h2 className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-7xl italic opensans font-bold text-yellow-400 mb-4 sm:mb-6 leading-tight disfruta">
                    DUPLICA TU <span className="tracking-wider">DIVERSIÓN</span>
                  </h2>
                </div>

                <div className="flex flex-col gap-4 sm:gap-6 justify-center items-center mt-6 sm:mt-8">
                  <a
                    href="https://wa.me/5493625262432?text=Hola!%20Vengo%20de%20la%20publi%20y%20quiero%20activar%20BONO25"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:cursor-pointer pulse-button group relative px-4 sm:px-4 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 sm:space-x-3 border-2 sm:border-4 border-green-400/50 w-60 max-w-xs sm:min-w-[200px] justify-center no-underline"
                  >
                    <div className="pulse-glow absolute inset-0 bg-green-400/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                    <FaWhatsapp className="h-5 w-5 sm:h-6 sm:w-6 relative z-10" />
                    <span className="relative z-10 text-base sm:text-lg">Crea tu Usuario</span>
                  </a>
                </div>

                {/* Elementos decorativos */}
                <div className="absolute top-2 left-2 sm:top-4 sm:left-4 w-3 h-3 sm:w-4 sm:h-4 bg-fuchsia-800 rounded-full shadow-lg animate-pulse"></div>
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-3 h-3 sm:w-4 sm:h-4 bg-purple-800 rounded-full shadow-lg animate-pulse delay-500"></div>
                <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 w-3 h-3 sm:w-4 sm:h-4 bg-blue-900 rounded-full shadow-lg animate-pulse delay-1000"></div>
                <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 w-3 h-3 sm:w-4 sm:h-4 bg-violet-800 rounded-full shadow-lg animate-pulse delay-1500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>
        {`
          @property --angle {
            syntax: "<angle>";
            initial-value: 0deg;
            inherits: false;
          }

          .opensans {
            font-family: 'Open Sans', sans-serif;
          }
          
          .disfruta {
            color: #ffd700;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
            animation: pulse-shadow 1s infinite;
            line-height: 1.1;
          }

          /* Efecto Neon RGB Arcoíris en el wrapper */
          .neon-card-wrapper {
            position: relative;
            background: linear-gradient(var(--angle), 
              #ff0000, #ff7f00, #ffff00, #00ff00, 
              #0000ff, #4b0082, #9400d3, #ff0000);
            animation: rainbow-rotate 3s linear infinite;
            box-shadow: 
              0 0 20px rgba(255, 0, 255, 0.3),
              0 0 40px rgba(0, 255, 255, 0.2),
              0 0 60px rgba(255, 255, 0, 0.1);
          }

          .neon-card-wrapper::before {
            content: '';
            position: absolute;
            inset: -4px;
            border-radius: inherit;
            background: linear-gradient(var(--angle), 
              #ff0000, #ff7f00, #ffff00, #00ff00, 
              #0000ff, #4b0082, #9400d3, #ff0000);
            z-index: -1;
            animation: rainbow-rotate 3s linear infinite;
            filter: blur(12px);
            opacity: 0.6;
          }

          @keyframes rainbow-rotate {
            0% {
              --angle: 0deg;
            }
            100% {
              --angle: 360deg;
            }
          }

          /* Responsive adjustments */
          @media (min-width: 640px) {
            .disfruta {
              text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
            }
            
            .neon-card-wrapper {
              padding: 2px;
              box-shadow: 
                0 0 30px rgba(255, 0, 255, 0.4),
                0 0 60px rgba(0, 255, 255, 0.3),
                0 0 90px rgba(255, 255, 0, 0.2);
            }

            .neon-card-wrapper::before {
              inset: -6px;
              filter: blur(16px);
            }
          }

          @keyframes pulse-scale {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }

          @keyframes pulse-glow {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.1); }
          }

          @keyframes pulse-shadow {
            0%, 100% { text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5); }
            50% { text-shadow: 2px 2px 3px rgba(255, 215, 0, 0.7); }
          }

          @media (min-width: 640px) {
            @keyframes pulse-shadow {
              0%, 100% { text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5); }
              50% { text-shadow: 2px 2px 4px rgba(255, 215, 0, 0.7); }
            }
          }

          .pulse-button {
            animation: pulse-scale 2s ease-in-out infinite;
          }

          .pulse-glow {
            animation: pulse-glow 2s ease-in-out infinite;
          }

          .pulse-button:hover {
            animation-play-state: paused;
          }

          /* Remover decoración de enlace */
          a.no-underline {
            text-decoration: none;
          }

          a.no-underline:hover {
            text-decoration: none;
          }
        `}
      </style>
    </>
  );
};

export default Juega;
