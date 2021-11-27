const inputOption = document.querySelector('#option');
const inputKeyword = document.querySelector('#keyword');

const btnSearch = document.querySelector('#btnSearch')

const tbody = document.querySelector('tbody');
const trArr = document.querySelectorAll('tbody tr');

btnSearch.addEventListener('click', () => {
  const option = inputOption.value;
  const keyword = inputKeyword.value;

  const newTrArr = Array.from(trArr).filter(tr => {
    const text = tr.querySelector(`td:nth-child(${option})`).textContent;
    if (text.toLowerCase().includes(keyword.toLowerCase())) {
      return tr;
    }
  });

  console.log(newTrArr);

  tbody.innerHTML = '';
  newTrArr.forEach(tr => {
    tbody.append(tr);
  });

  keyword.value = '';
});