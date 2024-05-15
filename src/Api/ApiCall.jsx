export const randomUser = async () => {
  const data = await fetch("https://randomuser.me/api/", { method: "GET" });
  return data.json();
};
