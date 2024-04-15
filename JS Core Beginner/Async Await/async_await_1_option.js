const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Ошибка при загрузке данных: ${error.message}`);
  }
};

fetchData('https://example.com/api/data/getAll')
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
