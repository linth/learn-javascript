/**
 * 使用promise和async function來展示非同步操作
 * 
 * 
 * Reference:
 *  - 
 */

function fetchData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
    .then(response => {
      if (!response.ok) {
        throw Error(`HTTP error. status: ${response.status}`)
      }
      return response.json();
    })
    .then(data => {
      resolve(data);
    })
    .catch(error => {
      reject(error);
    });
  });
}

async function fetchAndProcessData() {
  try {
    console.log("Start fetching data...");

    const data1 = await fetchData('https://jsonplaceholder.typicode.com/todos/1');
    console.log('Data 1:', data1);

    const data2 = await fetchData('https://jsonplaceholder.typicode.com/todos/2');
    console.log('Data 2:', data2);

    const data3 = await fetchData('https://jsonplaceholder.typicode.com/todos/3');
    console.log('Data 3:', data3);

    console.log("End fetching data...");
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchAndProcessData();

/**
 * 
 * Start fetching data...
 * Data 1: { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
 * Data 2: {
 *   userId: 1,
 *   id: 2,
 *   title: 'quis ut nam facilis et officia qui',
 *   completed: false
 * }
 * Data 3: { userId: 1, id: 3, title: 'fugiat veniam minus', completed: false }
 * End fetching data...
 * 
 */