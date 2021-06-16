import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar, faChartLine, faDesktop, faFileAlt } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
    return (
        <div className="services">
            <h1 className="py-5">Our Services</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x"/></div>
                                <h3>Score Prediction</h3>
                                <p>Based on internal marks and performance in academic activities, we predict your external and final scores which lets you know how far you are from your target.</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faChartLine} size="2x"/></div>
                                <h3>Subject-wise Progress</h3>
                                <p>We track your performance in each subject and visualize the progress for you. This helps you to understand your learning curve in that particular subject.</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faChartBar} size="2x"/></div>

                                <h3>Overall Progress</h3>
                                <p>We visualize your progress in all subjects which shows the subjects you are good at and those that need more of your efforts. We also display your skill set based on your progress.</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faFileAlt} size="2x"/></div>
                                <h3>Report Generation</h3>
                                <p>Based on your progress, a report is generated periodically. It contains the summary of all the analysis. A list of suggestions is also provided to help you with your academics.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Services
