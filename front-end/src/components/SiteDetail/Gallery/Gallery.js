import {useState,useEffect} from 'react';

const images=[
    'lake.jpg',
    'lake2.jpg',
    'river.jpg',
    'lake.jpg',
    'lake2.jpg',
    'river.jpg'
];

const Gallery = () =>{
    const [currentIndex,setCurrentIndex]= useState(0);

    const showSlide =(index) =>{
        setCurrentIndex(index);
    };

    const nextSlide =() => {
        setCurrentIndex((prevIndex) => (prevIndex+1) %images.length);
    };

    useEffect(() =>{
        const interval = setInterval(nextSlide,5000);
        return ()=>clearInterval(interval);
    },[]);

    

    return (
        <div className='relative w-full  mx-auto overflow-hidden'>
            <div className="flex transition-transform duration-500">
                {images.map((image,index)=>
                    (
                    <img  src={image} alt={`Image ${index +1}`}
                    className={` min-w-full h-96 object-cover rounded-lg ${index==currentIndex? 'block':'hidden'}`}
                    key={index}
                    />
                ))};
            </div>

            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
            {images.map((_,index)=>(
                <span className={`w-4 h-4 bg-gray-400 rounded-full cursor-pointer ${index ===currentIndex ? 'bg-yellow-200' : 'opacity-50'}`}
                key={index} onClick={() => showSlide(index)}
                ></span>
                
            ))}
            </div>

        </div>
    )
}

export default Gallery