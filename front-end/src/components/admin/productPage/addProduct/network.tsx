export const addProduct = async (data: any) => {
  const res = await fetch("http://localhost:8080/api/product", {
    mode: "cors",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: data.name,
      image: data.image,
      color: data.color,
      brand: data.brand,
      gender: data.gender,
      price: data.price,
      discount: data.discount,
      rest: data.rest,
      size: data.size,
    }),
  });
  var zov = await res.json();
  zov.status = res.status;
  return zov;
};
