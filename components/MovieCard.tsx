import React from "react";
import Image from "next/image";
import bg from "public/images/banner.jpg"

interface MovieCard{
    data:Record<string, any>;
}

const MovieCard:React.FC<MovieCardProps> = ({
   
}) => {
    return (
 <div className="group bg-zinc-900 col-span relative h[12vw]">
  <Image src={bg} alt="Background Image" />

 </div>
    )
}

export default MovieCard;