import React from "react";
import { useState } from "react";

import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { updateMedication } from "../../services/medication-service";
import { findMedById } from "../../services/medication-service";
import { useEffect } from "react";

const Update = () => {
  const [companyValue, setCompanyValue] = useState("");
  const [brandValue, setBrandValue] = useState("");
  const [genericValue, setGenericValue] = useState("");
  const [diagnosisValue, setDiagnosisValue] = useState("");
  const [nhsValue, setNhsValue] = useState("");
  const [medication, setMedication] = useState();

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    handleMedById();
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();

    let obj = {
      Medication: {
        company: companyValue,
        brand_name: brandValue,
        generic_name: genericValue,
        diagnosis_code: diagnosisValue,
        nhs_number: nhsValue,
      },
    };

    console.log(obj);
    console.log(obj, "this is obj");
    await updateMedication(id, obj);
    navigate("/");
  };

  let handleMedById = async () => {
    let data = await findMedById(id);
    setMedication(data[0]);
    setCompanyValue(data[0].company);
    setBrandValue(data[0].brand_name);
    setGenericValue(data[0].generic_name);
    setDiagnosisValue(data[0].diagnosis_code);
    setNhsValue(data[0].nhs_number);
  };

  let handleCancel = async () => {
    navigate("/");
  };

  return (
    <>
      <h1>Update medication</h1>
      {medication && (
        <div className="container-new update-container bootstrap snippets bootdey">
          <hr />
          <div className="row">
            <div className="col-md-9 personal-info">
              <form className="form-horizontal">
                <div className="form-group">
                  <label className="col-lg-3 control-label">Company:</label>
                  <div className="col-lg-8">
                    <input
                      className="form-control company"
                      type="text"
                      name="company"
                      value={companyValue}
                      onChange={(event) => {
                        setCompanyValue(event.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-lg-3 control-label">Brand Name:</label>
                  <div className="col-lg-8">
                    <input
                      className="form-control brand_name"
                      type="text"
                      name="brand_name"
                      value={brandValue}
                      onChange={(event) => {
                        setBrandValue(event.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-lg-3 control-label">
                    Generic Name:
                  </label>
                  <div className="col-lg-8">
                    <input
                      className="form-control generic_name"
                      type="text"
                      name="generic_name"
                      value={genericValue}
                      onChange={(event) => {
                        setGenericValue(event.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-lg-3 control-label">
                    Diagnosis Code:
                  </label>
                  <div className="col-lg-8">
                    <input
                      className="form-control diagnosis_code"
                      type="text"
                      name="diagnosis_code"
                      value={diagnosisValue}
                      onChange={(event) => {
                        setDiagnosisValue(event.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-lg-3 control-label">NHS Number:</label>
                  <div className="col-lg-8">
                    <input
                      className="form-control nhs_number"
                      type="text"
                      name="nhs_number"
                      value={nhsValue}
                      onChange={(event) => {
                        setNhsValue(event.target.value);
                      }}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>

          <button className="editMed" onClick={onSubmit}>
            Update
          </button>
          <button className="cancelEdit" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      )}
    </>
  );
};

export default Update;
