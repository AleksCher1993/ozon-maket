const postDate = (data) => {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) =>
  {
    if (response.ok) {
      
      response.json()
    }else throw new Error("Произошла ошибка =(")
  }
   ).catch(error=> alert(error))
};
export default postDate;
