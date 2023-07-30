import React, { useState } from "react";
import Home from "../Home/Home";
import { addMedication } from "../../services/medication-service";
import { useNavigate } from "react-router";

const App = () => {
  const [companyValue, setCompanyValue] = useState("");
  const [brandValue, setBrandValue] = useState("");
  const [genericValue, setGenericValue] = useState("");
  const [diagnosisValue, setDiagnosisValue] = useState("");
  const [nhsValue, setNhsValue] = useState("");
  const navigate = useNavigate();

  let handleChange = async (event) => {
    event.preventDefault();
    console.log(companyValue);
    await addMedication({
      company: companyValue,
      brand_name: brandValue,
      generic_name: genericValue,
      diagnosis_code: diagnosisValue,
      nhs_number: nhsValue,
    });
  };

  let handleCancel = async () => {
    navigate("/");
  };

  return (
    <>
      <h1>Add a new Medication</h1>
      <div className="container-new bootstrap snippets bootdey">
        <hr />
        <div className="row">
          <div className="col-md-9 personal-info">
            <div className="form-group">
              <label className="col-lg-3 control-label">Company:</label>
              <div className="col-lg-8">
                <input
                  className="form-control company"
                  type="text"
                  value={companyValue}
                  onChange={(event) => {
                    setCompanyValue(event.target.value);
                  }}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-lg-3 control-label">Brand name:</label>
              <div className="col-lg-8">
                <input
                  className="form-control brand_name"
                  type="text"
                  value={brandValue}
                  onChange={(event) => {
                    setBrandValue(event.target.value);
                  }}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-lg-3 control-label">Generic name:</label>
              <div className="col-lg-8">
                <input
                  className="form-control generic_name"
                  type="text"
                  value={genericValue}
                  onChange={(event) => {
                    setGenericValue(event.target.value);
                  }}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-lg-3 control-label">Diagnosis code:</label>
              <div className="col-lg-8">
                <input
                  className="form-control diagnosis_code"
                  type="text"
                  value={diagnosisValue}
                  onChange={(event) => {
                    setDiagnosisValue(event.target.value);
                  }}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-lg-3 control-label">NHS number:</label>
              <div className="col-lg-8">
                <input
                  className="form-control nhs_number"
                  type="text"
                  value={nhsValue}
                  onChange={(event) => {
                    setNhsValue(event.target.value);
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <button className="submitBtn" onClick={handleChange}>
          Submit
        </button>
        <button className="cancel" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </>
  );
};

export default App;
