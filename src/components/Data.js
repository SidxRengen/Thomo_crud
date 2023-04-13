import "./Data.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
function Data() {
  let navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://api.thomso.in/apiV1/assignment").then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  }, []);
  const getData = () => {
    axios.get("https://api.thomso.in/apiV1/assignment").then((response) => {
      setData(response.data);
    });
  };
  const HandleDelete = (id) => {
    axios
      .delete(`https://api.thomso.in/apiV1/assignment/${id}`)
      .then(() => {
        getData();
      })
      .then(() => {
        navigate("/");
      });
  };
  const ExportData = (id, name, email, contact) => {
    localStorage.setItem("ID", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("contact", contact);
  };
  return (
    <div className="Data">
      <div className="buttons">
        <Link to="/Add">
          <button className="add">Add Employee</button>
        </Link>
      </div>
      <div className="row row1">
        <div className="name">Name</div>
        <div className="email">Email</div>
        <div className="contact">Contact</div>
        <div className="contact">Actions</div>
      </div>
      {data.map((item) => {
        const { name, id, email, contact } = item;
        return (
          <div className="wrDataer" id={id}>
            <div className="row row2">
              <div className="name">{name}</div>
              <div className="email">{email}</div>
              <div className="contact">{contact}</div>
              <div className="actions">
                <button onClick={() => ExportData(id,name, email, contact)}>
                  <Link to="./Update">Edit</Link>
                </button>
                <button onClick={() => HandleDelete(id)}>Delete</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Data;
