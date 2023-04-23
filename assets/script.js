//Fetch cbt

function fetchData(selector, api) {
    var value=0;
    fetch(api)
        .then(response => response.json())
        .then((data) => {
            value = data[0].toLocaleString('en-US', { minimumFractionDigits: 0 });
            $(selector).html(value);
        });
}

fetchData("#cbt-value", "http://www.randomnumberapi.com/api/v1.0/random?min=10000&max=100000&count=1")
fetchData("#total-balance", "http://www.randomnumberapi.com/api/v1.0/random?min=10000&max=100000&count=1")
fetchData("#hour-value", "http://www.randomnumberapi.com/api/v1.0/random?min=10&max=999&count=1")
fetchData("#day-value", "http://www.randomnumberapi.com/api/v1.0/random?min=1000&max=10000&count=1")
fetchData("#month-value", "http://www.randomnumberapi.com/api/v1.0/random?min=10000&max=100000&count=1")