const fetchDataWithTimeout = async (url, timeout) => {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(id);
    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new Error(
        'Ошибка: запрос был отменен из-за превышения времени ожидания.'
      );
    } else {
      throw error;
    }
  }
};

fetchDataWithTimeout('https://example.com/api/data/getAll', 5000)
  .then((data) => console.log(data))
  .catch((error) => console.error(error.message));
