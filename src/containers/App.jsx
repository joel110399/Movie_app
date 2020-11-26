import React, {useState,useEffect} from "react";
import "../containers/App.css";
import Header from "../components/Header/Header";
import Search from "../components/Search/Search";
import Categories from "../components/Categories/Categories";
import Carousel from "../components/Carousel/Carousel";
import CarouselItem from "../components/CarouselItem/CarouselItem"
import Footer from "../components/Footer/Footer";


const App = () => {
    const [videos, setVideos] = useState({trends: []});

    useEffect(() => {
        fetch("http://localhost:3000/initalState")
        .then(Response => Response.json())
        .then(data => setVideos(data))
    }, []);

    return(
        <div className="App">
            <Header/>
            <Search/>           
                <Categories title="Tendencias">           
                    <Carousel>
                        {videos.trends.map(item =>                        
                            <CarouselItem key={item.id} {...item}/>                        
                        )}                    
                    </Carousel>  
                </Categories>            
                <Categories title="Top 100">           
                    <Carousel>
                        {videos.trends.map(item =>                        
                            <CarouselItem key={item.id} {...item}/>                        
                        )}                    
                    </Carousel>   
                </Categories>
            <Footer/>
        </div>
    );
};

export default App;