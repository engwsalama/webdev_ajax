// This example to get some data from a text file and show them in the console by using XHR object

document.getElementById('button').addEventListener('click',loadData);

// Create an HXR Object

function loadData(){
  const xhr = new XMLHttpRequest();

// Open - It is basically where we're going to specify the type of request we want to make.
  xhr.open('GET','data.txt',true);
 
  xhr.onprogress = function(){
    console.log('READYSTATE',xhr.readyState)
  }
    xhr.onload = function(){  // You can use it instead of onreadychange method, it will include tghe 
      console.log('READYSTATE',xhr.readyState);  
      if (this.status === 200){
        console.log(this.responseText);
        // this will done without refresh the page
        document.querySelector('#output').innerHTML=`<h1>${this.responseText}</h1>`
      }
    };

        // xhr.onreadystatechange = function(){
        //   console.log('READYSTATE',xhr.readyState);  
        //   if (this.status === 200 && this.readystate===4){
        //     console.log(this.responseText);
        //   }  
        // };  
    xhr.onerror = function(){
      console.error("Request Error....");
    }
  xhr.send();

};

/*
HTTP Statuses
  200: "Ok"
  403: "Forbidden"
  404: "Not Found"
*/

/*
  What is the Ready State => the status of the request 
  0] Request not Initialized
  [1] Server connection esablished
  [2] Request Received
  [3] Processing Request
  [4] Request is finished and Response is Ready
*/
