import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom"
import axios from "axios";
import "./Add.css";
export default function Update() {
  let navigate = useNavigate();
  const [ID, setID] = useState();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [contact, setcontact] = useState("");
  useEffect(() => {
    setname(localStorage.getItem("name"));
    setemail(localStorage.getItem("email"));
    setcontact(localStorage.getItem("contact"));
    setID(localStorage.getItem("ID"));
  }, []);
  const HandleUpdate = () => {
    axios
      .put(`https://api.thomso.in/apiV1/assignment/${ID}`, {
        name,
        email,
        contact,
      })
      .then(() => {
        navigate("/");
      });
  };
  return (
    <div>
      <div className="Add">
        <button>
          <Link to="/">Back</Link>
        </button>
        <div className="container">
          <h1>Enter The Details</h1>
          <form method="post">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={(event) => {
                setname(event.target.value);
              }}
            />
            <input
              type="email"
              name="email"
              id=""
              placeholder="Eamil"
              value={email}
              onChange={(event) => {
                setemail(event.target.value);
              }}
            />
            <input
              type="text"
              name="contact"
              id=""
              placeholder="Contact"
              value={contact}
              onChange={(event) => {
                setcontact(event.target.value);
              }}
            />
            <button type="submit" onClick={HandleUpdate}>
              <Link to="/">Submit</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
