import Happycustomerpic1 from '../images/happycustomer1.jpg'
import Happycustomerpic2 from '../images/happycustomer2.jpg'
import Happycustomerpic3 from '../images/happycustomer3.jpg'
import Happycustomerpic4 from '../images/happycustomer4.jpg'
 
function Saidaboutus() {
    return (
        <div className="Saidaboutus">
            <h3>Said About Us</h3>


            <section>
                <div id="Saidaboutusslider" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className='row'>

                                <div className="col">
                                    <div className="card">
                                        <div className="card-header">
                                            <img src={Happycustomerpic3} className="card-img-top" alt="..." />

                                        </div>
                                        <div className="card-body">
                                            <blockquote className="blockquote mb-0">
                                                <p>A well-known quote, contained in a blockquote element.</p>
                                                <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>


                                <div className="col">
                                    <div className="card">
                                        <div className="card-header">
                                            <img src={Happycustomerpic2} className="card-img-top" alt="..." />

                                        </div>
                                        <div className="card-body">
                                            <blockquote className="blockquote mb-0">
                                                <p>A well-known quote, contained in a blockquote element.</p>
                                                <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="card">
                                        <div className="card-header">
                                            <img src={Happycustomerpic1} className="card-img-top" alt="..." />

                                        </div>
                                        <div className="card-body">
                                            <blockquote className="blockquote mb-0">
                                                <p>A well-known quote, contained in a blockquote element.</p>
                                                <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="carousel-item">

                            <div className='row'>
                                <div className="col">
                                    <div className="card">
                                        <div className="card-header">
                                            <img src={Happycustomerpic4} className="card-img-top" alt="..." />

                                        </div>
                                        <div className="card-body">
                                            <blockquote className="blockquote mb-0">
                                                <p>A well-known quote, contained in a blockquote element.</p>
                                                <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card">
                                        <div className="card-header">
                                            <img src={Happycustomerpic3} className="card-img-top" alt="..." />

                                        </div>
                                        <div className="card-body">
                                            <blockquote className="blockquote mb-0">
                                                <p>A well-known quote, contained in a blockquote element.</p>
                                                <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="card">
                                        <div className="card-header">
                                            <img src={Happycustomerpic2} className="card-img-top" alt="..." />

                                        </div>
                                        <div className="card-body">
                                            <blockquote className="blockquote mb-0">
                                                <p>A well-known quote, contained in a blockquote element.</p>
                                                <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>

                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#Saidaboutusslider" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#Saidaboutusslider" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div></section>



        </div>
    );
}

export default Saidaboutus;
