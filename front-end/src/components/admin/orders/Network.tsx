export const getOrders = async () => {
  const res = await fetch("http://localhost:8080/api/order", {
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
