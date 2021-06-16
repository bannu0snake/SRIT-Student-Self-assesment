import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Student Self-Assessment System</h1>
                <Typed
                    className="typed-text"
                    strings={["Report Generation", "Overall Progress", "Subject-wise Progress", "Score Prediction"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />

                <a href="#" className="btn-main-offer">Sign up</a>
            </div>
        </div>
    )
}

export default Header
