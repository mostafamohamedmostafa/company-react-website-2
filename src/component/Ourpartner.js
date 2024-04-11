
import { Ourpartner_data } from "./Websitedata";
function Ourpartner() {
    return (
        <div className="Ourpartner container-fluid">
            <section>
                <h3>Our Partners</h3>

                <div className="row  row-cols-md-6  g-3">


                    {Ourpartner_data.map((Ourpartner_data_Imported, index) => {
                        return (

                            <div className="col " key={index}>
                                <div className="card h-100">
                                    <img src={Ourpartner_data_Imported.img} className="card-img-top" alt={Ourpartner_data_Imported.title} />
                                    <div className="card-body">
                                        <p className="card-title">{Ourpartner_data_Imported.title} </p>
                                    </div>

                                </div>
                            </div>
                        )
                    })}






                </div>


            </section>




        </div>
    );
}

export default Ourpartner;
