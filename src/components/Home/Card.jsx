import React from "react";
import { useNavigate } from "react-router";
import { delMedication } from "../../services/medication-service";

const Card = ({ medication }) => {
  const navigate = useNavigate();

  let handleEdit = async () => {
    console.log("Editing medication with ID:", medication.id);
    navigate(`/update-medication/${medication.id}`);
  };

  let handleDelete = async () => {
    await delMedication(medication.id);
  };
  return (
    <>
      <div class="col-md-4">
        <div class="widget lazur-bg p-xl">
          <h2>{medication.company}</h2>
          <ul class="list-unstyled m-t-md" />
          <li>
            <span className="fa fa-envelope m-r-xs"></span>
            <label>ID:</label>
            <span class="product-id">{medication.id}</span>
          </li>
          <li>
            <span className="fa fa-home m-r-xs"></span>
            <label>Company:</label>
            {medication.company}
          </li>
          <li>
            <span className="fa fa-phone m-r-xs"></span>
            <label>Brand name:</label>
            {medication.brand_name}
          </li>
          <li>
            <span className="fa fa-phone m-r-xs"></span>
            <label>Generic name:</label>
            {medication.generic_name}
          </li>
          <li>
            <span className="fa fa-phone m-r-xs"></span>
            <label>Diagnosis code:</label>
            {medication.diagnosis_code}
          </li>
          <li>
            <span className="fa fa-phone m-r-xs"></span>
            <label>NHS Number:</label>
            {medication.nhs_number}
          </li>

          <div className="btns">
            <button className="editBtn" onClick={handleEdit}>
              Edit
            </button>
            <button className="deleteBtn" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
