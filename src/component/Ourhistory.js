import { Ourhistory_data } from "./Websitedata";
function Ourhistory() {
    return (
        <div className="Ourhistory container-fluid">
            <section>
                <h2 >Our History</h2>
                <div className="row  row-cols-md-3  g-3">



                    {Ourhistory_data.map((Ourhistory_data_Imported, index) => {
                        return (

                            <div className="col .glass-effect " key={index}  >
                                <div className="card h-100">
                                    <img src={Ourhistory_data_Imported.img} className="card-img-top" alt={Ourhistory_data_Imported.alttext} />
                                    <div className="card-body">
                                        <h5 className="card-title">{Ourhistory_data_Imported.Title} </h5>
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

export default Ourhistory;
