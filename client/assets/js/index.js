const quotes_URL = '/api/quotes';
/* const exercises_URL = '/api/exercises'; */

const getFetch = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => {
                if(!response.ok)
                {
                    reject('Error: ' + response.status);
                }
                return response.json();
            })
            .then((data) => {
                resolve(data);
            })
            .catch((error) => reject(`Error: ${error}`));
    })
};

document.addEventListener('DOMContentLoaded', () => {
    const homeBtn = document.querySelector('.reloadDashboard');
    homeBtn.addEventListener('click', () => {
        location.reload();
    });

    getFetch(quotes_URL)
        .then((response) => {
            const quoteH2 = document.querySelector('#quotePlace');
            let randomNum = Math.floor(Math.random() * response.length);    
            quoteH2.innerHTML = response[randomNum].quote;
        })
        .catch((error) => {
            console.log(error);
        })

    /* getFetch(exercises_URL)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        }) */
});