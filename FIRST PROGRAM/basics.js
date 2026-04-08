// for(let i=0; i<=8; i++){
//     console.log(i);
// }

// // Function

// function greet(){
//     console.log("Hello");
// }
// greet();

// // DOM (sabse important)
// // DOM = HTML ko JS se control karna


// document.getElementById("demo").innerText= "Hello Surya";


function changeText(){
    document.getElementById("title").innerText = "Button Clicked!";
    let el = document.querySelector("#title");
    el.innetText = "Hello Surya";
    document.getElementById("title").style.color = "aqua";
}

document.getElementById("btn").addEventListener("click", function() {
    console.log("Clicked");
});
