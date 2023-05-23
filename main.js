// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

function handleLike() {
  const likeElements = document.querySelectorAll(".like");

  likeElements.forEach((element) => element.addEventListener("click", () => {
    console.log("Click!");
    const likeGlyphElement = element.querySelector(".like-glyph");
    if (likeGlyphElement) {
      const currentValue = likeGlyphElement.textContent;
      const newValue = currentValue === FULL_HEART ? EMPTY_HEART : FULL_HEART;
      mimicServerCall()
        .then((response) => {
          console.log(response);
          likeGlyphElement.textContent = newValue;
          likeGlyphElement.classList.toggle("activated-heart");
        })
        .catch((error) => {
          console.log(error);
          showNotification("Error: " + error);
        });
    }
  }));
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

function showNotification (message, isError = true){
const removeHidden = document.getElementById("modal")
if (isError){
  removeHidden.classList.remove("hidden");
  setTimeout(() => {
    removeHidden.classList.add("hidden");
  }, 3000)
  
}
}

document.addEventListener("DOMContentLoaded", handleLike())