const quotes_URL = '/api/quotes';

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
    //REFRESH THE TING
    const dashReloaders = document.querySelectorAll('.reloadDashboard');
    dashReloaders.forEach(e => {
        e.addEventListener('click', () => {
            location.reload();
        });
    });

    //FETCHING A RANDOM QUOTE FROM THE QUOTE API
    getFetch(quotes_URL)
        .then((response) => {
            const quoteH2 = document.querySelector('#quotePlace');
            let randomNum = Math.floor(Math.random() * response.length);    
            quoteH2.innerHTML = response[randomNum].quote;
        })
        .catch((error) => {
            console.log(error);
        })

    //CALENDAR
    const daysContainer = document.querySelector("#days");
    const monthYear = document.querySelector("#month-year");
    const prevBtn = document.querySelector("#prev");
    const nextBtn = document.querySelector("#next");
    
    //STORES THE CURRENT DATE
    let currentDate = new Date();
        
    function renderCalendar() 
    {
        daysContainer.innerHTML = "";
        
        let year = currentDate.getFullYear();
        let month = currentDate.getMonth();
        
        // Get first day index and last date of the month
        let firstDayIndex = new Date(year, month, 1).getDay(); // 0 (Sunday) - 6 (Saturday)
        let lastDate = new Date(year, month + 1, 0).getDate();
        
        monthYear.innerText = currentDate.toLocaleString("default", { month: "long", year: "numeric" });
        
        // 🔹 Adjust first day index so Monday becomes the first day (Sunday at the end)
        let adjustedFirstDayIndex = firstDayIndex === 0 ? 6 : firstDayIndex - 1;
        
        // Add empty cells for days before the first day of the month -> SOME DAYS FROM THE PREVIOUS MONTH WILL BE SHOWN AS AN EMPTY CELL
        for (let i = 0; i < adjustedFirstDayIndex; i++) {
            let emptyCell = document.createElement("div");
            emptyCell.classList.add("empty");
            daysContainer.appendChild(emptyCell);
        }
        
        // Generate days correctly
        for (let day = 1; day <= lastDate; day++) {
            let dayCell = document.createElement("div");
            dayCell.innerText = day;
        
            // Highlight today's date
            let today = new Date();
            if (
                day === today.getDate() &&
                month === today.getMonth() &&
                year === today.getFullYear()
            ) 
            {
                dayCell.classList.add("today");
            }
        
            /* dayCell.addEventListener("click", () => alert(`Selected Date: ${day} ${monthYear.innerText}`)); */
            daysContainer.appendChild(dayCell);
        }
    }
    
    //SHOWS PREVIOUS MONTH
    prevBtn.addEventListener("click", () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
    });
    
    //SHOWS NEXT MONTH
    nextBtn.addEventListener("click", () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
    });
        
    renderCalendar();    
});