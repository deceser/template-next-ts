export const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) throw new Error("Unable to fetch posts!");

  return res.json();
};

export const getPostBySearch = async (search) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${search}`);

  if (!res.ok) throw new Error("Unable to fetch posts");

  return res.json();
};
