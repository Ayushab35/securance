import React from "react";
import "../css/Dashboard.css"
import policy from '../images/Policy.png'
function Dashboard(){
    return (
        <div className="dash">
            <div className="dash-left">
                <h3>Welcome, <br />Ayush Bhandarkar</h3>

            </div>
            <div className="dash-right">
                <div className="policy-head">
                <div className="ph-hlf1">
                    <div className="pol-name">
                        <div className="pol-name-img new">
                            <img src={policy} style={{width: '130px', height: '150px', marginTop: '30px', marginLeft: '15px'}} />
                        </div>
                        <div className="pol-name-pol">
                            <h1><b>Policy Name :</b> Phishing Attack</h1>
                            <br />
                            <p><a href="/abtpol">learn more →</a></p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Dashboard;