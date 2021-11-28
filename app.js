const inputOption = document.querySelector('#option');
const inputKeyword = document.querySelector('#keyword');

const form = document.querySelector('form');

const tbody = document.querySelector('tbody');
const trArr = document.querySelectorAll('tbody tr');

form.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();
  const option = inputOption.value;
  const keyword = inputKeyword.value;

  const newTrArr = Array.from(trArr).filter(tr => {
    const text = tr.querySelector(`td:nth-child(${option})`).textContent;
    if (text.toLowerCase().includes(keyword.toLowerCase())) {
      return tr;
    }
  }).sort((a, b) => {
    const strA = a.querySelector(`td:nth-child(${option})`).textContent;
    const strB = b.querySelector(`td:nth-child(${option})`).textContent;
    return strA.localeCompare(strB);
  });


  console.log(newTrArr);

  tbody.innerHTML = '';
  newTrArr.forEach(tr => {
    tbody.append(tr);
  });

  keyword.value = '';
}