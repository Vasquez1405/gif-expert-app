import { useState, useEffect } from "react";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({category}) => {

    const{images, isLoading} = useFetchGifs(category);

    return (
       <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Loading...</h2>)
            }

            <div className='card-grid'>
                {
                    images.map((image) => (
                        <GifItem 
                            key={image.id} 
                            {...image} //sirve para que el GiftItem reciba cada propiedad como props
                        />
                    ))
                }
            </div>
       </>
    )
}