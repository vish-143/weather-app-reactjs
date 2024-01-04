import React from 'react'
import './error.scss';

const ErrorPage = () => {
    return (
        <>
            <div className="error-main">
                <section className="page_404">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 ">
                                <div className="col-sm-10 col-sm-offset-1  text-center">
                                    <div className="four_zero_four_bg">
                                    </div>
                                    <div className="contant_box_404">
                                        <h3 className="h2">
                                            Look like you're location is not available...!
                                        </h3>
                                        <h4 style={{backgroundColor:'gray'}}>Enter Correct Location</h4>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default ErrorPage