import httpClient from "./http-client";

export const getParams = async () => {
  try {
    return await httpClient.get("/params");
  } catch (err) {
    console.log(err.message);
  }
};

export const getMakes = async () => {
  try {
    return await httpClient.get("/makes");
  } catch (err) {
    console.log(err.message);
  }
};

export const getMakeModels = async id => {
  try {
    return await httpClient.get(`/makes/${id}/models`);
  } catch (err) {
    console.log(err.message);
  }
};

export const getModels = async () => {
  try {
    return await httpClient.get("/models?_expand=make&_page=1");
  } catch (err) {
    console.log(err.message);
  }
};

export const getParts = async () => {
  try {
    return await httpClient.get("/parts");
  } catch (err) {
    console.log(err.message);
  }
};

export const calculate = async data => {
  try {
    return await httpClient.post("/calculate", data);
  } catch (err) {
    console.log(err.message);
  }
};
