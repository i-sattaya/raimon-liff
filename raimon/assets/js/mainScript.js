async function Fecth({ method = 'GET', path, data = null, isBasic = null, token = null }) {
  try {
    const url = `${path}`;
    const token = localStorage.getItem("token");
    const res = await fetch(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : null,
      },
      method: method,
      body:
        method === "PATCH" || method === "POST"
          ? JSON.stringify(data)
          : null,
    });
    const dataResponse = await res.json();
    if (dataResponse.code === 401) {
      localStorage.clear();
    }
    return dataResponse;
  } catch (error) {
    console.log("error", error);
    return { res: null, message: error };
  }
};
