import React , {useContext, useState} from "react";
import "../css/Dashboard.css";
import policy from "../images/Policy.png";
import FormDataContext from "./ContextData";
import { Link } from "react-router-dom";
import { useEffect } from "react";
function Dashboard() {
    const {formData} = useContext(FormDataContext);
    const [data, setData] = useState({});
    useEffect(() => {
        const formDataString = localStorage.getItem('formData');
        if (formDataString) {
            const data = JSON.parse(formDataString);
            console.log(data);
            setData(data);
        }
    }, []);

  return (
    <div className="dash">
      <div className="dash-left">
        <h3>
          Welcome, <br />
          {data.fname} {data.lname}
        </h3>
      </div>
      <div className="dash-right">
        <div className="policy-head">
          <div className="ph-hlf1">
            <div className="pol-name">
              <div className="pol-name-img new">
                <img
                  src={policy}
                  style={{
                    width: "130px",
                    height: "150px",
                    marginTop: "30px",
                    marginLeft: "15px",
                  }}
                />
              </div>
              <div className="pol-name-pol">
                <h1>
                  <b>Policy Name :</b> Phishing Attack
                </h1>
                <br />
                <p>
                  <Link to="/abtpol">learn more →</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
