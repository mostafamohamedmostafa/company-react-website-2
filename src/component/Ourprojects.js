import { Ourprojects_data } from "./Websitedata";
function Ourprojects() {
    return (
        <div className="Ourprojects container-fluid">
            <section>            <h2 >Our Projects</h2>

                <div className="row  row-cols-md-3 g-4 ">



                    {Ourprojects_data.map((Ourprojects_data_Imported, index) => {
                        return (

                            <div className="col" key={index}>
                                <div className="card h-100">
                                    <img src={Ourprojects_data_Imported.img} className="card-img-top" alt={Ourprojects_data_Imported.alttext} />
                                    <div className="card-body">
                                        <h5 className="card-title">{Ourprojects_data_Imported.Title} </h5>
                                        <h5 className="card-title"> {Ourprojects_data_Imported.Descreption} </h5>
                                        <h6 className="card-title">Project Since : {Ourprojects_data_Imported.Since} </h6>
                                        <p className="card-title">No Of Empolyess : {Ourprojects_data_Imported.Nuofemployess} </p>

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

export default Ourprojects;
