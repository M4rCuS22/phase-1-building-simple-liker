// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// Provided mimicServerCall (should already be in the file)
function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Randomly fail
      const isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

// Select the modal and message area
const modal = document.getElementById("modal");
const modalMessage = document.getElementById("modal-message");

// Ensure modal is hidden at start
modal.classList.add("hidden");

// Select all hearts (in case there are many)
const hearts = document.querySelectorAll(".like-glyph");

hearts.forEach(heart => {
  heart.addEventListener("click", () => {
    mimicServerCall()
      .then(() => {
        // Success: toggle heart state
        if (heart.textContent === "♡") {
          heart.textContent = "♥";
          heart.classList.add("activated-heart");
        } else {
          heart.textContent = "♡";
          heart.classList.remove("activated-heart");
        }
      })
      .catch((error) => {
        // Failure: show modal with error
        modalMessage.textContent = error;
        modal.classList.remove("hidden");

        setTimeout(() => {
          modal.classList.add("hidden");
        }, 3000);
      });
  });
});




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
