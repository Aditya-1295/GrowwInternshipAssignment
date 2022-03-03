// Groww calendar assignment 
// Android intern ship 
// vanilla Javascript
// Aditya Kumar Gupta
// +91 9140887327
// adityakrgupta938@gmail.com



let nav = 0; // nav variable to keep the navigation of months in check
const calendar = document.getElementById('calendar');
const weekdays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']; // List of days in a week

function load(dt){
    // const dt = new Date();
    if (nav !==0){
        dt.setMonth(new Date().getMonth()+nav);
        // dt.setYear(new Date().getFullYear());
    } // Checking for default monnt if not then incremeting it by the value of nav;

    // console.log(dt);

    // Fetchinf dates
    const day = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();



    const firtDayOfMonth = new Date(year,month,1);
    const daysInMonth = new Date(year,month+1,0).getDate(); // Total day in a given month



    // fetching the day string of the frst day in the month

    const dateString = firtDayOfMonth.toLocaleDateString('en-us',{
        weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    });

    
    // Checking for how many empty days the calendar to begin with.
    const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);
    // console.log(paddingDays);

    document.getElementById('monthDisplay').innerText = 
    `${dt.toLocaleDateString('en-us', { month: 'long' })} ${year}`;

    // resetting the calendar to display the updated day

    calendar.innerHTML = '';

    for(let i =1;i<=paddingDays+daysInMonth;i++){
        const daySquare = document.createElement('div');
        daySquare.classList.add('day');

        // console.log(daySquare);
        
        if(i>paddingDays){
            daySquare.innerText = i-paddingDays;
            daySquare.addEventListener('click', () => console.log('click'));
            // console.log(daySquare);

        }else{
            daySquare.classList.add('padding');
            daySquare.innerText = '';
            // console.log(daySquare);
        }
        calendar.appendChild(daySquare);
    }
    

    
}

const date = new Date();

function changeDates(){
    

    document.getElementById('nextButton').addEventListener('click', ()=>{
        nav++;
        load(date);
    });
    document.getElementById('backButton').addEventListener('click', ()=>{
        nav--;
        load(date);
    });
    document.getElementById('goToDate').addEventListener('click',()=>{
        console.log("clicked");
        var dtt = new Date(document.getElementById('newDate').value);
        console.log(dtt);
        nav = 0;
        load(dtt);
    });
    
}



changeDates();
load(date);
