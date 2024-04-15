const loadMultipleData = async (urls) => {
  try {
    const promises = urls.map((url) => fetch(url));

    const responses = await Promise.all(promises);

    responses.forEach((response) => {
      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }
    });

    const data = await Promise.all(
      responses.map((response) => response.json())
    );

    return data;
  } catch (error) {
    console.error(`Ошибка при загрузке данных: ${error.message}`);
  }
};

const urls = [
  'https://example.com/api/data/getAll',
  'https://example.com/api/users/getAll',
];
loadMultipleData(urls)
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
