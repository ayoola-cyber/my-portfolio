document.addEventListener("DOMContentLoaded", () => {
    // todo-list
    const todoInput = document.getElementById("to-do");
    const todoBtn = document.getElementById("button");
    const todoUl = document.getElementById("ulList");

    // calculator
    const display = document.getElementById("display");
    const button = document.querySelectorAll(".main button");

    // Login
    const loginForm = document.getElementById("loginForm");

    //Register 
    const regForm = document.getElementById("regForm");

    // Color-picker

    // stopwatch 


    // calculator code
    button.forEach((btn) => {
        btn.addEventListener("click", () => {
            const data_value = btn.getAttribute("data-value");
            const data_action = btn.getAttribute("data-action");
            console.log(data_value);
            console.log(data_action);

            if(data_action === "clear"){
                display.value = "";
            }
            else if(data_action === "backspace"){
                display.value = display.value.slice(0, -1);
            } 
            else if(data_value){
                display.value += data_value;
            }
            else if(data_action === "sqrt"){
                display.value = Math.sqrt(parseFloat(display.value));
            }
            else if(data_action === "equal"){
                const input = display.value.split("x").join("*").split("÷").join("/")
                display.value = eval(input);
            }
            else if(data_action === "sine"){
                display.value = Math.sin(parseFloat(display.value)) || "error";
            }
            else if(data_action === "cosine"){
                display.value = Math.cos(parseFloat(display.value)) || "error";
            }
            else if(data_action === "tangent"){
                display.value = Math.tan(parseFloat(display.value)) || "error";
            }
            else if(data_action === "power"){
                display.value = Math.pow(parseFloat(display.value),2) || "error";
            }


        })
    })

    //Login code
    if(loginForm){
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = document.getElementById("email").value.trim(); //trim() makes sure there are no extra spaces 
            const password = document.getElementById("password").value.trim();
            if(email === "" || password === ""){
                alert("This field is required.");
                return
            }
        
            if(password.length < 9 && !password.includes("@?%&")){
                alert("Password should be atleast 9 characters and should contain at least one special character.");
            }
        
            alert("Login successful!")

            window.location.href = "index.html"

        })
    }

    // Register code
    if(regForm){
        regForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const forename = document.getElementById("regForename").value;
            const surname = document.getElementById("regSurname").value;
            const regEmail = document.getElementById("regEmail").value;
            const password = document.getElementById("regPassword").value;
            const confirm = document.getElementById("regConfirm").value;
            const dob = document.getElementById("regDob").value;
            const gender = document.querySelector('input[name="gender"]:checked');
            const country = document.getElementById("regCountry").value;
            const bio = document.getElementById("regBio").value;
            console.log(forename);
        
            if(forename === ""){
                alert("This field is required.")
                return
            }
            if(surname === ""){
                alert("This field is required.")
                return
            }
            if(regEmail === ""){
                alert("This field is required.")
                return
            }
            if(password === ""){
                alert("This field is required.")
                return
            }
            if(confirm !== password){
                alert("The passwords are not the same.") 
                return
            }
            if(!dob){ // same as (dob !== password)
                alert("This field is required.")
                return
            }
            if(!gender){
                alert("This field is required.")
                return
            }
            if(!country){
                alert("This field is required.")
                return
            }
            if(!bio){
                alert("This field is required.")
                return
            }
        
            alert("Registration successful!")

            window.location.href = "index.html"
        })
    }

    // function to add todo
    const addTodo = () => {
        const todoText = todoInput.value;

        if (todoText === ""){
            alert("You need to enter a task.")
            return 
        }

        // create a list element
        const todoLi = document.createElement("li");
        todoLi.className = "list";

        const todoSpan = document.createElement("span");
        todoSpan.textContent = todoText;

        // delete button
        const deleteBtn = document.createElement("button")
        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click", () => {
            todoLi.style.animation = "fadeOut 0.5s ease-out"
            setTimeout(() => {
                todoUl.removeChild(todoLi)
            }, 500)

            
            // todoUl.removeChild(todoLi); 
        })

        // append todo list into todoUl
        todoLi.appendChild(todoSpan);
        todoLi.appendChild(deleteBtn);

        todoUl.appendChild(todoLi);

        todoInput.value = "";

    }

    // todoBtn.addEventListener("click", addTodo);
    // todoUl.addEventListener("keypress", (e) => {
    //     if(e.key === "Enter"){
    //         addTodo()
    //     }
    // })

    // Stopwatch code

const startButton = document.querySelector(".start");
const stopButton = document.querySelector(".stop");
const resetButton = document.querySelector(".reset");
console.log(startButton);
let hours = "0" + 0;
let minutes = "0" + 0;
let seconds = "0" + 0;
let milliseconds = "0" + 0;
let startTimer;

function putValues(){
    document.querySelector(".milliseconds").innerHTML = milliseconds;
    document.querySelector(".seconds").innerHTML = seconds;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".hours").innerHTML = hours;

}

startButton.addEventListener("click", start)

function start(){
    startButton.classList.add("active");
    stopButton.classList.remove("stopActive");
    startTimer = setInterval(() => {
        milliseconds++
        milliseconds = milliseconds < 10 ? "0" + milliseconds : milliseconds;
        if(milliseconds === 100){
            seconds++ 
            seconds = seconds < 10 ? "0" + seconds : seconds;
            milliseconds = "0" + 0;
        } 

        if(seconds === 60){
            minutes++ 
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = "0" + 0;
        }

        if(minutes === 60){
            hours++ 
            hours = hours < 10 ? "0" + hours : hours;
            minutes = "0" + 0;
        }

        putValues();


    }, 10)
}

stopButton.addEventListener("click", stop)

function stop(){
    startButton.classList.add("active");
    stopButton.classList.remove("stopActive");
    clearInterval(startTimer);
}

resetButton.addEventListener("click", reset)


function reset(){
    startButton.classList.remove("stopActive");
    stopButton.classList.remove("stopActive");
    clearInterval(startTimer);
    hours = "0" + 0;
    minutes = "0" + 0;
    seconds = "0" + 0;
    milliseconds = "0" + 0;
    putValues();
}


//Color-picker 

// Get elements
const colorPicker = document.getElementById('colorPicker');
const colorBox = document.getElementById('colorBox');

// Add event listener to the color input
colorPicker.addEventListener('input', function () {
  // Change the background color of the box to the selected color
  colorBox.style.backgroundColor = colorPicker.value;
});


//photo-editor
const fileInput = document.querySelector(".file-input");    
const chooseImg= document.querySelector(".choose-img");    
const saveImg = document.querySelector(".save-img");    
const previewImg = document.querySelector(".photoPlaceholder img");

console.log(fileInput);
console.log(previewImg);

const loadImg = () => {
    let file = fileInput.files[0]
    if (!file) return;
    previewImg.src = URL.createObjectURL(file);
    previewImg.addEventListener("load", () => {

    })

    
}

chooseImg.addEventListener("click", () => {
    fileInput.click()
})

fileInput.addEventListener("change", loadImg);



}) 