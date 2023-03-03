let button = document.querySelector('button');
let output = document.querySelector('span');

button.addEventListener('click', apiRequest);

async function apiRequest() {
  const rapperName = document.querySelector('input').value;
  try {
    const res = await fetch(
      `https://lazy-pear-rooster-tux.cyclic.app/api/${rapperName}`
    );
    const data = await res.json();
    console.log(data);
    output.innerText = data.birthName;
  } catch (error) {
    console.error(error);
  }
}
