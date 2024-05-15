export const getPosts = async () => {
  const res = await fetch("http://localhost:8080/api/blog?limit=3", {
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
export const getSinglePost = async () => {
  const res = await fetch("http://localhost:8080/api/blog?limit=1", {
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