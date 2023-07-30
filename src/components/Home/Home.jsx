import React, { useEffect, useState } from "react";
import Card from "./Card";
import Spinner from "react-bootstrap/Spinner";
import { getMedication } from "../../services/medication-service";
import { useNavigate } from "react-router";

const Home = () => {
  let [medications, setMedications] = useState([]);
  const navigate = useNavigate();
  let handleMedications = async () => {
    let data = await getMedication();

    setMedications(data);
  };

  let handleAdd = async () => {
    navigate("/add-medication");
  };

  useEffect(() => {
    handleMedications();
  }, []);

  return (
    <>
      <h1>Medication Management</h1>
      <button className="addBtn" onClick={handleAdd}>
        Add a new Medication
      </button>

      <select name="sort" className="sort">
        <option value="">--Sort By--</option>
        <option value="company">Sort by company</option>
        <option value="brand_name">Sort by Brand</option>
        <option value="generic">Sort by Generic</option>
      </select>

      <div className="container-cards">
        {medications.length > 0 ? (
          medications.map((item) => {
            return <Card medication={item} />;
          })
        ) : (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
      </div>
    </>
  );
};

export default Home;
