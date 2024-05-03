export const getProducts = async () => {
  const res = await fetch("http://localhost:8080/api/product", {
    mode: "cors",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  var zov = await res.json();
  zov.status = res.status;
  return zov;
};

export const getProductsBestSellers = async () => {
  const res = await fetch("http://localhost:8080/api/product?limit=4", {
    mode: "cors",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  var zov = await res.json();
  zov.status = res.status;
  return zov;
};
