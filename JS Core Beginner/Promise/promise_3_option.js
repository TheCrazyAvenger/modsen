const fetchMultipleApis = async (urls) => {
  try {
    const promises = urls.map((url) => fetch(url));

    const responses = await Promise.all(promises);

    const data = await Promise.all(
      responses.map(async (response) => {
        if (!response.ok) {
          throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        return await response.json();
      })
    );

    const combinedData = Object.assign({}, ...data);

    return combinedData;
  } catch (error) {
    console.error(`Ошибка при загрузке данных: ${error.message}`);
  }
};

const urls = [
  'https://example.com/data1/getAll',
  'https://example.com/data2/getAll',
  'https://example.com/data3/getAll',
];
fetchMultipleApis(urls)
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
