"use client";
export async function PostProductData(data: any) {
  try {
    const response: any = await fetch("http://localhost:8080/api/order", {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const json = await response.json();
    console.log("Fetch data response: ", json);
    return json;
  } catch (error) {
    console.log(error);
  }
}
