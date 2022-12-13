async function fetchapi(api: string) {
  try {
    const response = await fetch(api);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
export default fetchapi;
