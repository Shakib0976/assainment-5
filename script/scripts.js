const date = new Date().toDateString().slice(4 , 15);
document.getElementById('wed-date').innerHTML = date;
const date2 = new Date().toDateString().slice(0 , 4);
document.getElementById('wed-date-2').innerHTML = date2;

// card btn 
document.getElementById('card-btn-1').addEventListener('click', function (){
    alert ('Board Update successfully ')

 const taskCount =parseInt(document.getElementById('task-count').innerText)
 del = taskCount - 1;
 document.getElementById('task-count').innerText = del;

 const navCount = parseInt(document.getElementById('nav-count').innerText)
 add = navCount + 1;
 document.getElementById('nav-count').innerText = add;
 const button = document.getElementById('card-btn-1')
 button.disabled=true;
const title = document.getElementById('title-1').innerText;
 const clearBox =  document.getElementById('clear-Box');
 const p= document.createElement("p");
 const time =new Date().toLocaleTimeString();
 p.classList.add('bg-gray-200', 'text-center', 'items-center','pb-4','px-2','my-2', 'rounded-2xl')
 p.innerText =`
  You have completed the task  ${title} at ${time}
 `
   clearBox.appendChild(p);
})

document.getElementById('card-btn-2').addEventListener('click', function (){
    alert ('Board Update successfully ')

 const taskCount =parseInt(document.getElementById('task-count').innerText)
 del = taskCount - 1;
 document.getElementById('task-count').innerText = del;

 const navCount = parseInt(document.getElementById('nav-count').innerText)
 add = navCount + 1;
 document.getElementById('nav-count').innerText = add;
 const button = document.getElementById('card-btn-2')
 button.disabled=true;
const title = document.getElementById('title-2').innerText;
 const clearBox =  document.getElementById('clear-Box');
 const p= document.createElement("p");
 const time =new Date().toLocaleTimeString();
 p.classList.add('bg-gray-200', 'text-center', 'items-center','pb-4','px-2','my-2', 'rounded-2xl')
 p.innerText =`
  You have completed the task  ${title} at ${time}
 `
   clearBox.appendChild(p);
})

document.getElementById('card-btn-3').addEventListener('click', function (){
    alert ('Board Update successfully ')

 const taskCount =parseInt(document.getElementById('task-count').innerText)
 del = taskCount - 1;
 document.getElementById('task-count').innerText = del;

 const navCount = parseInt(document.getElementById('nav-count').innerText)
 add = navCount + 1;
 document.getElementById('nav-count').innerText = add;
 const button = document.getElementById('card-btn-3')
 button.disabled=true;
const title = document.getElementById('title-3').innerText;
 const clearBox =  document.getElementById('clear-Box');
 const p= document.createElement("p");
 const time =new Date().toLocaleTimeString();
 p.classList.add('bg-gray-200', 'text-center', 'items-center','pb-4','px-2','my-2', 'rounded-2xl')
 p.innerText =`
  You have completed the task  ${title} at ${time}
 `
   clearBox.appendChild(p);
})

document.getElementById('card-btn-4').addEventListener('click', function (){
    alert ('Board Update successfully ')

 const taskCount =parseInt(document.getElementById('task-count').innerText)
 del = taskCount - 1;
 document.getElementById('task-count').innerText = del;

 const navCount = parseInt(document.getElementById('nav-count').innerText)
 add = navCount + 1;
 document.getElementById('nav-count').innerText = add;
 const button = document.getElementById('card-btn-4')
 button.disabled=true;
const title = document.getElementById('title-4').innerText;
 const clearBox =  document.getElementById('clear-Box');
 const p= document.createElement("p");
 const time =new Date().toLocaleTimeString();
 p.classList.add('bg-gray-200', 'text-center', 'items-center','pb-4','px-2','my-2', 'rounded-2xl')
 p.innerText =`
  You have completed the task  ${title} at ${time}
 `
   clearBox.appendChild(p);
})

document.getElementById('card-btn-5').addEventListener('click', function (){
    alert ('Board Update successfully ')

 const taskCount =parseInt(document.getElementById('task-count').innerText)
 del = taskCount - 1;
 document.getElementById('task-count').innerText = del;

 const navCount = parseInt(document.getElementById('nav-count').innerText)
 add = navCount + 1;
 document.getElementById('nav-count').innerText = add;
 const button = document.getElementById('card-btn-5')
 button.disabled=true;
const title = document.getElementById('title-5').innerText;
 const clearBox =  document.getElementById('clear-Box');
 const p= document.createElement("p");
 const time =new Date().toLocaleTimeString();
 p.classList.add('bg-gray-200', 'text-center', 'items-center','pb-4','px-2','my-2', 'rounded-2xl')
 p.innerText =`
  You have completed the task  ${title} at ${time}
 `
   clearBox.appendChild(p);
})

document.getElementById('card-btn-6').addEventListener('click', function (){
    alert ('Board Update successfully ')

 const taskCount =parseInt(document.getElementById('task-count').innerText)
 del = taskCount - 1;
 document.getElementById('task-count').innerText = del;

 const navCount = parseInt(document.getElementById('nav-count').innerText)
 add = navCount + 1;
 document.getElementById('nav-count').innerText = add;
 const button = document.getElementById('card-btn-6')
 button.disabled=true;
const title = document.getElementById('title-6').innerText;
 const clearBox =  document.getElementById('clear-Box');
 const p= document.createElement("p");
 const time =new Date().toLocaleTimeString();
 p.classList.add('bg-gray-200', 'text-center', 'items-center','pb-4','px-2','my-2', 'rounded-2xl')
 p.innerText =`
  You have completed the task  ${title} at ${time}
 `
   clearBox.appendChild(p);


 
 if(button.disabled==true){
    alert('congrates!!!! you have completed allt the task')
 } 
})



// button backgroun change 

function ChangeBackgroundColor(){
   const colors =['blue', 'green', 'yellow', 'purple', 'orange', 'pink']
   const randomColor = colors[Math.floor(Math.random() * colors.length)];
   document.body.style.backgroundColor = randomColor;
}

// clear history  button 

document.getElementById('clear-history-btn').addEventListener('click', function(event){
   event.preventDefault();

   const clearBox =document.getElementById('clear-Box');
   clearBox.disabled = true;
   clearBox.innerHTML = '';

})

document.getElementById('discover-button').addEventListener('click',function(event){
   event.preventDefault();
   window.location.href='./main.html';

})

