// функция обращения на наш "сервер"
export async function getDataFromApi(url) {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    return data;
  }
}
