// Use the fetch function
// to grab some data
// from the LA Open Data API

// We're going to display that data on our index.html file
// Bootstrap as the primary styling library
// Materialize

function getLADataFromAPI(){
    var endpoint = 'https://data.lacity.org/resource/a6pt-xt54.json'
  
    fetch(endpoint) // returns a promise
    .then(function(data){
        return data.json()
    })
    .then(function(json){
        console.log(json)
        var resultDiv = document.getElementById('result')
        var finalHTML = ''
        json.forEach(function(item){
            var cardItem =
            `
                <div class="col s6 m4">
                  <div class="card">
                    <div class="card-image">
                      <img src="https://postalmuseum.si.edu/systemsatwork/images/global/mr_zip-01.jpg">
                      <span style="color: black" class="card-title">${item.zip_code}</span>
                    </div>
                    <div class="card-content">
                      <p>
                        Population based on zip code ${item.zip_code} and population is ${item.total_population}.
                        The average age is ${item.median_age} and the average household size is ${item.average_household_size}.
                      </p>
                    </div>
                    <div class="card-action">
                      <a href="#">This is a link</a>
                    </div>
                  </div>
                </div>
            `
            finalHTML += cardItem
        })
        resultDiv.innerHTML = finalHTML
        
        
        // resultDiv.innerHTML = JSON.stringify(json, undefined, 2)
        // var wantedData = json.map(function(item){
        //     var title = item.department_title
        //     var fSalary = item.female_average_salary
        //     var mSalary = item.male_average_salary
        //     return 'For the ' + title + ' department, men earn an average salary of ' + mSalary + ', and females earn an average salary of ' + fSalary + '.'
        // })
        // var htmlForWantedData = wantedData.map(function(string){
        //     return '<li>' + string + '</li>'
        // })
        // var finalHTML = ''
        // htmlForWantedData.forEach(function(listItem){
        //     finalHTML += listItem
        // })
        // resultDiv.innerHTML = finalHTML
    })
    .catch(function(error){
        console.log(error)
    })

}