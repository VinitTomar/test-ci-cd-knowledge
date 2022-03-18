const url = 'https://json-server-7n31wy--3000.local.webcontainer.io/profile';

fetch(url)
  .then((r) => r.json())
  .then(
    (json) =>
      (document.getElementById('output').innerHTML = JSON.stringify(
        json,
        null,
        2
      ))
  );
