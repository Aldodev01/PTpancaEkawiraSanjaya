import './style.css'
import Slider from 'react-slick';



const Index = () =>{
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
      };

    return(
        <div className="container">
            <Slider {...settings}>
                <img src="./Assets/project1.JPG" alt=""/>
                <img src="./Assets/project2.JPG" alt=""/>






            </Slider>
        </div>
    )
}

export default Index