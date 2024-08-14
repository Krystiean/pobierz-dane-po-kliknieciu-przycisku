let btnGetData = document.getElementById('btnGetData');
let placeForData = document.getElementById('placeForData');

const getData = () => {
    fetch('https://akademia108.pl/api/ajax/get-post.php', {
        method: 'GET',
    })
    .then(res => res.json())
    .then((resJSON) => {
        console.log(resJSON);
        let element = document.createElement('p');
        element.innerHTML = `ID: ${resJSON.id}`;
        placeForData.appendChild(element);
        let element2 = document.createElement('p');
        element2.innerHTML = `UserID: ${resJSON.userId}`;
        placeForData.appendChild(element2);
        let element3 = document.createElement('p');
        element3.innerHTML = `Title: ${resJSON.title}`;
        placeForData.appendChild(element3);
        let element4 = document.createElement('p');
        element4.innerHTML = `Body: ${resJSON.body}`;
        placeForData.appendChild(element4);
    })
    .catch((error) => {
        console.error('Error:', error);
    })
};

btnGetData.addEventListener('click', getData);