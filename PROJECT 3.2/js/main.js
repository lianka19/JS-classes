const $ul = document.querySelector('#people_list') 

const AddPes = (person)=>{

    const SecFlm = person?.['films']?.[1];

    const $li = document.createElement('li');
    $li.className = 'list-group-item';
    $li.innerText = "Name: " + person.name + " Birth:  " + person.birth_year + " Sec Film:  " + SecFlm;
    $ul.appendChild($li);
}

fetch('https://swapi.dev/api/people/?page=3')
    .then((response) => response.json())
    .then((json) => {
        json.results.forEach(person => AddPes(person))
     });