function api(path, method, body) {
  // const e declarata o data, pe cat let se redeclara la folosirea functiei
  const url = "http://localhost:7070" + path;

  const options = {
    method,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "X-Requested-With": "XMLHttpRequest",
    },
  };

  if (body !== null) {
    options.body = JSON.stringify(body);

    //stringify transforma din javascript in json
    //parse transforma din json in javascript
  }
  return fetch(url, options);
}

async function getMedication() {
  let data = await api("/api/v1/medications/all", "GET", null);
  return data.json();
}

async function addMedication(medication) {
  let data = await api("/api/v1/medications/add", "POST", medication);

  return data.json();
}

async function getSortMedication(field) {
  let medications = await getMedication();
  for (let i = 0; i < medications.length - 1; i++) {
    for (let j = i + 1; j < medications.length; j++) {
      if (medications[i][field] > medications[j][field]) {
        let aux = medications[i];
        medications[i] = medications[j];
        medications[j] = aux;
      }
    }
  }

  return medications;
}

async function getByCompany(company) {
  let medications = await getMedication();
  for (let i = 0; i < medications.length; i++) {
    if (medications[i].company === company) {
      return medications[i];
    }
  }
  return null;
}

async function getById(id) {
  let medications = await getMedication();
  for (let i = 0; i < medications.length; i++) {
    if (medications[i].id === +id) {
      return medications[i];
    }
  }
  return null;
}

async function verifyId(medications, id) {
  for (let i = 0; i < medications.length; i++) {
    if (medications[i].id == id) {
      return true;
    }
  }

  return false;
}

async function generateId() {
  let medications = await getMedication();

  let id = Math.random() * 1000000 + 10000 + "";

  while (verifyId(medications, id) == true) {
    id = Math.random() * 1000000 + 10000 + "";
  }

  return id.replace(".", "");
}

async function updateMedication(id, Medication) {
  let medResponse = await api(
    `/api/v1/medications/update/${id}`,
    "PUT",
    Medication
  );
  console.log(Medication);
  return medResponse.json();
}

async function delMedication(id) {
  let medResponse = await api(`/api/v1/medications/delete/${id}`, "DELETE");
  return medResponse.json();
}

async function findMedById(id) {
  let medResponse = await api(`/api/v1/medications/find/${id}`);

  return medResponse.json();
}

export {
  getMedication,
  getSortMedication,
  updateMedication,
  getByCompany,
  getById,
  addMedication,
  delMedication,
  findMedById,
};
