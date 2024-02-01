document.addEventListener('DOMContentLoaded', function() {
  var currentIndex = 0;
  var videos = document.querySelectorAll('.carousel video');
  var prevButton = document.querySelector('.carousel-controls button.previous');
  var nextButton = document.querySelector('.carousel-controls button.next');

  function updateCarousel(newIndex) {
    videos[currentIndex].classList.remove('active');
    videos[newIndex].classList.add('active');
    currentIndex = newIndex;
  }

  prevButton.addEventListener('click', function() {
    var newIndex = currentIndex - 1;
    if(newIndex < 0) newIndex = videos.length - 1;
    updateCarousel(newIndex);
  });

  nextButton.addEventListener('click', function() {
    var newIndex = currentIndex + 1;
    if(newIndex >= videos.length) newIndex = 0;
    updateCarousel(newIndex);
  });
});


const chatInput = document.querySelector('.chat input[type="text"]');
const chatWindow = document.querySelector('.chat-window');

chatInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    const msg = chatInput.value.trim();
    if (msg) {
      const msgElement = document.createElement('p');
      msgElement.textContent = msg;
      chatWindow.appendChild(msgElement);
      chatInput.value = '';
      chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll to the bottom
    }
  }
});





// This is a simple front-end example. Real polls would need server-side code.
const pollOptions = document.querySelectorAll('.poll input[type="radio"]');
const pollResults = document.querySelector('.poll-results');

pollOptions.forEach(option => {
  option.addEventListener('change', function() {
    alert(`You voted for: ${this.value}`);
    // Here you would send the vote to the server and get back the updated results
    // For now, we'll just show a mockup result
    pollResults.textContent = `Thank you for voting! Current leading option: ${this.value}`;
  });
});


