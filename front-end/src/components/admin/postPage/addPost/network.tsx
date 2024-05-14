export const addPost = async (data: any) => {
  const res = await fetch("http://localhost:8080/api/blog", {
    mode: "cors",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: data.title,
      image: data.image,
      description: data.description,
    }),
  });
  var zov = await res.json();
  zov.status = res.status;
  return zov;
};
