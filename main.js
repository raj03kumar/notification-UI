// Get needed elements from teh DOM
const btns = document.querySelectorAll(".btn");
const output = document.querySelector(".notifications");
const closeBtn = document.querySelector(".close-btn");

// Create the notification elements
const message = document.createElement("div");
const success = document.createElement("div");
const danger = document.createElement("div");

// Add them to an array
notifications = [
    message, success, danger
];

// Loop thorugh all notifications and add a class of "notification"
notifications.forEach(n=>{
    n.classList.add("notification");
});
//Add each notification its own distinctive class
message.classList.add("info");
success.classList.add("success");
danger.classList.add("danger");

//Add the inner HTML for each notification
message.innerHTML = `
    <div>
        <span class="material-symbols-outlined icon">
            chat_bubble
        </span>
        <div>
            <h3>John Doe</h3>
            <p>Great, thanks a lot for the quick reply!</p>
        </div>
        <span class="material-symbols-outlined close-btn">
            close
        </span>
    </div>
`;

success.innerHTML = `
    <div>
        <span class="material-symbols-outlined icon">
            done
        </span>
        <div>
            <h3>Changes saved</h3>
            <p>Contract date changed successfully</p>
        </div>
        <span class="material-symbols-outlined close-btn">
            close
        </span>
    </div>
`;

danger.innerHTML = `
    <div>
        <span class="material-symbols-outlined icon">
            delete
        </span>
        <div>
            <h3>Document Deleted</h3>
            <p>Document deleted successfully</p>
        </div>
        <span class="material-symbols-outlined close-btn">
            close
        </span>
    </div>
`;

// Loop through all buttons
btns.forEach(btn=>{
    //Add a click event to each button
    btn.addEventListener("click", ()=>{
        // Get the custom data attribute from the button
        const id = btn.dataset.alert;
        //Use the id from the custom data attribute to select the correspoinding notification element and create a copy of it using cloneNode. This makes sure that we can display multiple notifications of the same type on the page.
        const n = notifications[id].cloneNode(true);
        // Append the new notification to the output container
        output.appendChild(n);
    });
});

// Add an animated event
window.addEventListener("animationend", e=>{
    // Set it tio the notification element
    // We use this method instead of querySelector because the element was created dynamically with JavaScript
    if(e.target.classList.contains("notification")){
        //Remove the notification
        e.target.remove();
    }
});

//Add a click event
window.addEventListener("click", e=>{
    //Set it to the close button
    //We use the same method as before
    if(e.target.classList.contains("close-btn")){
        //Remove the notification
        e.target.parentElement.parentElement.remove();
    }
});

// disabling inspect element
document.addEventListener("contextmenu", function(e){
    e.preventDefault(); //this prevents right click
});
document.onkeydown=function(e){
    if(event.keycode==123){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="I".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="C".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="J".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.keyCode=="U".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.keyCode=="S".charCodeAt(0)){
        return false;
    }
};