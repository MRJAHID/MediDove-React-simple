import React from 'react';
import './Teams.css';

const Teams = () => {
    return (
        <div>
            <section className="team-area pt-180 pb-65" id="team">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
                            <div className="section-title text-center pos-rel mb-75">
                                <div className="section-text pos-rel">
                                    <h5>Our Team</h5>
                                    <h1>A Professional &amp; Care Provider</h1>
                                </div>
                                <div className="section-line pos-rel">
                                    <img
                                        src="http://themepure.net/template/medidove-prv/medidove/img/shape/section-title-line.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="team-box text-center mb-60">
                                <div className="team-thumb h4team-thumb mb-25 pos-rel">
                                    <img
                                        src="http://themepure.net/template/medidove-prv/medidove/img/home4/team/team__thumb1.png"
                                        alt=""
                                    />
                                </div>
                                <div className="team-content h4team-content mb-15">
                                    <h3>Rosalina William</h3>
                                    <h6>Founder</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="team-box text-center mb-60">
                                <div className="team-thumb h4team-thumb mb-25 pos-rel">
                                    <img
                                        src="http://themepure.net/template/medidove-prv/medidove/img/home4/team/team__thumb2.png"
                                        alt=""
                                    />
                                </div>
                                <div className="team-content h4team-content mb-15">
                                    <h3>Hekim D. Rswana</h3>
                                    <h6>dentist</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="team-box text-center mb-60">
                                <div className="team-thumb h4team-thumb mb-25 pos-rel">
                                    <img
                                        src="http://themepure.net/template/medidove-prv/medidove/img/home4/team/team__thumb3.png"
                                        alt=""
                                    />
                                </div>
                                <div className="team-content h4team-content mb-15">
                                    <h3>Tarana Halim</h3>
                                    <h6>neurologist</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="team-box text-center mb-60">
                                <div className="team-thumb h4team-thumb mb-25 pos-rel">
                                    <img
                                        src="http://themepure.net/template/medidove-prv/medidove/img/home4/team/team__thumb4.png"
                                        alt=""
                                    />
                                </div>
                                <div className="team-content h4team-content mb-15">
                                    <h3>Kelian M. Habblu</h3>
                                    <h6>operator</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Teams;
