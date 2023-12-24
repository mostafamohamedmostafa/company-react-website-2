import Ourpartner from "./Ourpartner";
import { Clients_data } from "./Websitedata";

function Clients() {
    return (
        <div className="Clients container-fluid">
            <section>
                <h3>Our Clinets</h3>

                <div className="row  row-cols-md-6  g-3">


                    {Clients_data.map((Clients_data_Imported, index) => {
                        return (

                            <div className="col " key={index}>
                                <div className="card h-100">
                                    <img src={Clients_data_Imported.img} className="card-img-top" alt={Clients_data_Imported.title} />
                                    <div className="card-body">
                                        <h5 className="card-title">{Clients_data_Imported.title} </h5>
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

export default Clients;
