export const addProduct = async (data: any) => {
  const res = await fetch("http://localhost:8080/api/product", {
    mode: "no-cors",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3000",
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
  const zov = await res.json();
  return zov;
};
