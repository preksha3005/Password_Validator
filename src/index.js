import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
function Pass() {
  const [pass, setp] = React.useState("");
  const [msg, setm] = React.useState("");
  const [colour,setc]=React.useState("")
  function getscore(pass) {
    let score=0;
    if (pass.length > 8) score += 1;
    if (/[a-z]/.test(pass)) score += 1;
    if (/[A-Z]/.test(pass)) score += 1;
    if (/\d/.test(pass)) score += 1;
    if (/[^A-Za-z0-9]/.test(pass)) score += 1;

    switch (score) {
      case 0:
      case 1:
      case 2:
        setc("red")
        return "Weak";
        // break;
      case 3:
        setc("orange")
        return "Medium";
        // break;
      case 4:
      case 5:
        setc("green")
        return "Strong";
        // break;
      default:
        return "Default case";
        // break
    }
  }
  return (
    <div className="container">
      <div className="box">
        <h2>Password Validator</h2>

        <div className="pass">
          <input
            type="text"
            placeholder="Enter password"
            className="pass-input"
            value={pass}
            onChange={(event)=>{
              setp(event.target.value);
              setm(getscore(event.target.value));
            }}
          ></input>
        </div>
        <br></br>
        <br></br>

        {msg && (
          <div className="strength">
            <small className={colour}>{msg} password</small>
          </div>
        )}
      </div>
    </div>
  );
}
root.render(<Pass />);
