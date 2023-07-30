import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { updateMedication } from "../../services/medication-service";
import { findMedById } from "../../services/medication-service";
import { useEffect } from "react";

const Update = () => {
  const [medication, setMedication] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    handleMedById();
  }, [id]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data, "this is data");
    console.log(register, "this is register");
    let obj = {
      Medication: {
        company: data.company,
        brand_name: data.brand_name,
        generic_name: data.generic_name,
        diagnosis_code: data.diagnosis_code,
        nhs_number: data.nhs_number,
      },
    };
    console.log(obj, "this is obj");
    // await updateMedication(id, obj);
    // navigate("/");
  };

  let handleMedById = async () => {
    let data = await findMedById(id);
    setMedication(data[0]);
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
              <form
                className="form-horizontal"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="form-group">
                  <label className="col-lg-3 control-label">Company:</label>
                  <div className="col-lg-8">
                    <input
                      className="form-control company"
                      type="text"
                      name="company"
                      defaultValue={medication.company}
                      {...register("company")}
                    />
                    {errors.company && <span>{errors.company.message}</span>}
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-lg-3 control-label">Brand Name:</label>
                  <div className="col-lg-8">
                    <input
                      className="form-control brand_name"
                      type="text"
                      name="brand_name"
                      defaultValue={medication.brand_name}
                      {...register("brand_name")}
                    />
                    {errors.brand_name && (
                      <span>{errors.brand_name.message}</span>
                    )}
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
                      defaultValue={medication.generic_name}
                      {...register("generic_name")}
                    />
                    {errors.generic_name && (
                      <span>{errors.generic_name.message}</span>
                    )}
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
                      defaultValue={medication.diagnosis_code}
                      {...register("diagnosis_code")}
                    />
                    {errors.diagnosis_code && (
                      <span>{errors.diagnosis_code.message}</span>
                    )}
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-lg-3 control-label">NHS Number:</label>
                  <div className="col-lg-8">
                    <input
                      className="form-control nhs_number"
                      type="text"
                      name="nhs_number"
                      defaultValue={medication.nhs_number}
                      {...register("nhs_number")}
                    />
                    {errors.nhs_number && (
                      <span>{errors.nhs_number.message}</span>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>

          <button type="submit" className="editMed" onClick={onSubmit}>
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
