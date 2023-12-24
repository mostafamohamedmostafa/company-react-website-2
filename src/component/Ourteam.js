import { Ourteam_data } from "./Websitedata";
import team from '../images/team.png';
function Ourteam() {
    return (
        <div className="Ourteam container-fluid">

            <section>

                     <div className='row'>

                        <img src={team} />

                     {Ourteam_data.map((Ourteam_data_Imported, index) => {
                            return (

                                <div className="col" key={index}>
                                    <div className="card">
                                        <div className="card-header">
                                            <img src={Ourteam_data_Imported.img} className="card-img-top" alt="..." />

                                        </div>
                                        <div className="card-body">
                                            <blockquote className="blockquote mb-0">
                                                <p>{Ourteam_data_Imported.name}</p>
                                                <p>{Ourteam_data_Imported.description}</p>
                                                <footer className="blockquote-footer"> <cite title="Source Title">{Ourteam_data_Imported.funfact}</cite></footer>
                                            </blockquote>
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

export default Ourteam;
