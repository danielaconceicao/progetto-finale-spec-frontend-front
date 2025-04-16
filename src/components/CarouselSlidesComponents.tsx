import { useContext } from "react";
import AppContext from "../context/AppContext";

export default function CarouselSlides() {
    const context = useContext(AppContext);

    if(!context){
        throw new Error("AppContext deve essere utilizzato all'interno di un AppProvider");
    }

    const {data} = context;

    return (
        <>
            <div id="carouselExampleSlidesOnly" className="carousel slide pb-3" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {data?.map((recordImg, index) => (
                        <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={recordImg.id}>
                            <img src={recordImg.img} className="d-block w-100 h-50" alt={recordImg.title} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}