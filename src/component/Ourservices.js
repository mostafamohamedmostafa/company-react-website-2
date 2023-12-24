
import { Ourservices_data } from "./Websitedata";
function Ourservices() {
    return (
        <div className="Ourservices container-fluid">



            <section>

                <h3>Our Services </h3>
                <div className="card-group">


                    {Ourservices_data.map((Our_Service_Data_Imported, index) => {
                        return (
                            <div className="card" key={index}>
                                <img src={Our_Service_Data_Imported.img} className="card-img-top" alt={Our_Service_Data_Imported.alttext} />
                                <div className="card-body">
                                    <h5 className="card-title">{Our_Service_Data_Imported.Title} </h5>
                                    <p className="card-text"> {Our_Service_Data_Imported.Descreption}</p>
                                </div>
                            </div>
                        )
                    })}




                </div>
            </section>




        </div>
    );
}

export default Ourservices;
