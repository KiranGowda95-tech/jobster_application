import React from "react";
import Logo from "../components/Logo";
import main from "../assets/images/logo1.svg";
import Wrapper from "../assets/wrappers/Testing";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Keeping a record of the jobs you have applied for or plan to apply
            for Making notes about your applications, contacts, resumes, and
            timelines Using a program like Google Sheets to make/access your job
            application spreadsheet1 Adding important dates to your calendar
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
