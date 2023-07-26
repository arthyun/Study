export const getData = async (num) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${num}`
  );
  const result = await response.json();

  return result;
};
