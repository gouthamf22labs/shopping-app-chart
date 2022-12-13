async function fetchapi(api: string) {
  try {
    const response = await fetch(api);
    const data = await response.json();
    console.log(data.result);
    return data.result;
  } catch (err) {
    console.log(err);
  }
}
export default fetchapi;
