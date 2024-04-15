const fetchUrls = async (urls) => {
  try {
    const promises = urls.map((url) => fetch(url));

    const responses = await Promise.all(promises);

    const data = await Promise.all(
      responses.map(async (response) => {
        if (!response.ok) {
          throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        return await response.text();
      })
    );

    return data;
  } catch (error) {
    console.error(`Ошибка при загрузке данных: ${error.message}`);
  }
};

const urls = ['https://google.com', 'https://google.ru', 'https://google.by'];
fetchUrls(urls)
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
