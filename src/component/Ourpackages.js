import { Ourpackages_data } from "./Websitedata";
function Ourpackages() {
    return (
        <div className="Ourpakages container-fluid">

            <section>
                <h2 >Our Package</h2>


                <div className="row  row-cols-md-3  g-3">



                    {Ourpackages_data.map((Ourpackages_data_Imported, index) => {
                        return (

                            <div className="col  " key={index}  >
                                <div className="card h-100">
                                    <img src={Ourpackages_data_Imported.img}/>
                                    <h5>{Ourpackages_data_Imported.name}</h5>
                                    <ul class="list-group list-group-flush">

                                        {Ourpackages_data_Imported.Features.map((Ourpackages_data_Imported, index) => {
                                            return (

                                                <li class="list-group-item" key={index}> {Ourpackages_data_Imported} </li>



                                            )
                                        })}

                                    </ul>
                                </div>
                            </div>
                        )
                    })}






                </div>



            </section>




        </div>
    );
}

export default Ourpackages;
