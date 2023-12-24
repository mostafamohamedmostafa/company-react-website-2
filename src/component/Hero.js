import { Hero_data } from "./Websitedata";
import heroimg1 from '../images/heroimg1.jpg'
function Hero() {
    return (
        <div className="Hero">

            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={heroimg1} className="d-block w-100" alt="heroimg1" />



                    </div>

                    {Hero_data.map((Hero_Data_Imported, index) => {
                        return (
                            <div className="carousel-item" key={index}>
                                <img src={Hero_Data_Imported.img} className="d-block w-100" alt={Hero_Data_Imported.alttext} />
                            </div>
                        )
                    })}


                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>





        </div>
    );
}

export default Hero;
