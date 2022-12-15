import React, { useState } from "react";

const SpeakersToolbar = ({theme,setTheme}) => {
  const [showSessions, setSessions] = useState(true);
  

  return (
    <section className="toolbar dark-theme-header">
      <div className="container">
        <div className="justify-content-between">
          <ul className="toolrow d-flex flex-column flex-lg-row">
            <li className="d-flex felx-column flex-md-row">
              <b>Show sessions &nbsp;&nbsp;</b>
              <label className="fav">
                <input type="checkbox" checked={showSessions} />
                <span className="switch"></span>
              </label>
            </li>
            <li className="d-flex flex-column flex-md-row ml-sm-5 ml-0">
              <strong>Theme</strong>
              <label className="dropdown">
                <select className="form-control theme" onChange={(e) => {
                  const change = e.target.value;
                  setTheme(change)
                }}>
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </select>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SpeakersToolbar;
