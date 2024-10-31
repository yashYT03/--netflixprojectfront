import React from "react";
import {AiOutlineInfoCircle} from 'react-icons/ai'

const Billboard = () => {
    return (
        
            <div className="relative">
                <iframe
                    width="100%"
                    height="500px"
                    style={{ position: "relative", filter: "brightness(150%)" }}
                    src="https://www.youtube.com/embed/hm0s7r3kRKw?controls=0&modestbranding=1&rel=0&autoplay=1&mute=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
<div className="absolute top-[30%] md:top[40%] ml-4 md:ml-16">
    <p className="text-white text-1xl md:text 5xl h-full w-[50%] lg:text-xl font-bold drop-shadow-xl">
       Valvi
    </p>
    <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, error.  
    </p>
    
    <div className="flex  flex-row items-center mt-3 md:mt-4 gap-3">
    <button className="
    bg-white
    text-white
    bg-opacity-30 
    rounded-md
    py-1 md:py-2
    px-2 md:px-4
    w-auto
    text-xs lg:text-lg
    font-semibold
    flex
    flex-row
    items-center
    hover:bg-opacity-20
    transition
    " >
        <AiOutlineInfoCircle className="mr-1 "/>
        More info
    </button>
    </div>    

 </div>
 </div>
 );
};

export default Billboard;
