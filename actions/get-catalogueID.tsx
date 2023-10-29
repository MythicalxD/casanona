import { API_URL, STRAPI_API_TOKEN } from "../utils/urls";

export const getCatalogueID = async (keyword: String) => {
  const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + "e236b5d4445a067824937d38030cc075f862b14c025522e8ab827f1bf0965d38a2a8a6f17396c9b01cb3dd67e297868a4b5ca4718461892919c0ba489c5df6dfd5437468b11bc60849ddf1af1e80397b9e38a57cbb2e242a54f3f55f32c7024f0cbe01c7a0b99952b3f5184c1bd94a1231b2c8391c39ec8a86284f982111a340",
    },
  };

  const res = await fetch(
    `${API_URL}/api/catalogues?populate[0]=images&filters[id][$eq]=${keyword}`,
    options
  );
  const data = await res.json();

  return data.data;
};
