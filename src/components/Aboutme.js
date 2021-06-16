import React from "react";
import srit from "../SRIT_Logo.png";

const Aboutme = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={srit} alt="SRIT..."/>
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">About</h1>
                    <p>
                    Student Self-Assesment System is a website curated as a final year project by A15 group of 2017-21 batch students of SRIT college, Anantapur. The main motto of this system is to provide students a cognitive insight into themselves so that they can climb up their academic ladder. Cutting edge technologies like Machine learning and data visualization are incorporated into this website to make it easy for the user to visualize their progress in academics without any ambiguity, so that they can take better decisions to reach their semester and final targets. The best part here is that, unlike the conventional approach, your progress does not depend solely on academic scores. The system takes into consideration all your activities you involve in.</p>
                </div>
            </div>       
        </div>
    )
}

export default Aboutme
