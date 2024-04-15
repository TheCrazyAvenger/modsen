const loadDataFromServers = async (url1, url2) => {
  try {
    const response1 = await fetch(url1);
    if (!response1.ok) {
      throw new Error(`Ошибка HTTP: ${response1.status}`);
    }
    const data1 = await response1.json();

    const response2 = await fetch(`${url2}?param=${data1.someProperty}`);
    if (!response2.ok) {
      throw new Error(`Ошибка HTTP: ${response2.status}`);
    }
    const data2 = await response2.json();

    return data2;
  } catch (error) {
    console.error(`Ошибка при загрузке данных: ${error.message}`);
  }
};

loadDataFromServers(
  'https://example.com/api/data/get/1',
  'https://example.com/api/data/get'
)
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
