// 1. Create a function fetch Data that returns a Promise. The Promise should resolve with the string 
// "Data fetched successfully" after a delay of 2 seconds. Use setTimeout to simulate the delay. 
// Test your function by calling it and using .then() to log the resolved value to the console.  

const printing = new Promise((resolve, reject) => {
   setTimeout(() => {
    resolve('Data fetched successfully')
  }, 2000)
}).then((result) => {
  console.log(result);
})


// 2.  Modify the fetch Data function from Question 1 to sometimes reject the Promise with an error message
// "Failed to fetch data". Modify your test to handle this rejection using .catch(). 

const printer = new Promise((resolve, reject) => {
  let error = false;
  setTimeout(() => {
    reject('Failed to fetch data')
  }, 2000)
}).catch((error) => {
  console.log(error);
})


// 3. Convert the fetch Data function from Question  1 to use async and await instead of .then().
//Ensure to handle errors using try and catch.

function fetchData(){
  return new Promise((resolve, reject) => {
      setTimeout(()=>{resolve("Data Fetched Successfully Again")},3000)
  })}
     async function cab(){
      const result=await fetchData()
      console.log(result)
      // console.log('waited')
  }
  cab();


// 4. Write a function "getCountryData" that fetches data from the public API "https://restcountries.com/v3.1/all&quot;.
//  Parse the JSON response and log the data to the console. Additionally, use DOM manipulation to display the data on the web page.
//  Make sure to handle any errors that might occur during the fetch operation and display an appropriate error message in the div
// if the fetch fails. (deploy the webpage on github) .


function getCountryData() {
  fetch('https://restcountries.com/v3.1/all')
    .then((result) => {
      return result.json();
    })
    .then((result) => {
      console.log({ result });

      for (let i = 0; i < result.length; i++) {
        const imagecontainer = document.createElement("div");

        const heading = document.createElement("h3");
        heading.innerText = (i + 1) + " . " + result[i].name.common;
        heading.innerText = result[country.population];


        const paragraph = document.createElement('p');
        paragraph.innerText = 'population: ' + country.population; 
    
       


        imagecontainer.appendChild(heading);
        imagecontainer.appendChild(paragraph);


        const image = document.createElement("img");
        image.src = result[i].flags.png;
        image.className = "flags";

  

        imagecontainer.appendChild(image);

        document.getElementById("container").appendChild(imagecontainer);

      }
    })
}


// 5. Create a detailed note on Promises. Take a picture of your notes and upload it to your GitHub repository


