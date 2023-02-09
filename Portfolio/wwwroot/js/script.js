$(function () {
  let date = new Date();
  let birthday = new Date(2004, 02, 03)

  let age = 0;

  if(date.getMonth() >= birthday.getMonth() && date.getDate() >= birthday.getDate()) {
    age ++;
    age = date.getFullYear() - birthday.getFullYear() ;
  }else {
    age = date.getFullYear() - birthday.getFullYear() - 1;
  }

  $('#age').text(age)
  $('#age2').text(age)

  // Create typing functionality
  let arr = ['Developer', 'Photographer', 'Designer'];

  // Flashing Line function
  const flashLine = () => {
    $('#flash').addClass("flash")
  }

  const stopFlash = () => {
    $('#flash').removeClass("flash")
  }

  let currentIndex = 0;

  $("#type").text(arr[currentIndex])

  let interval = setInterval(() => {
    if(currentIndex == 2) {
      currentIndex = -1;
    }
    setTimeout(() => {
      currentIndex++;
      $("#type").text("")
      setTimeout(() => {
        let splitarr = arr[currentIndex].split("");

        let displayText = ""
        // Create typing function
        // for(let i = 0; i <= splitarr.length - 1; i++) {
        //   setTimeout(() => {
        //     displayText += splitarr[i];
        //     $("#type").text(displayText);
        //   }, 4000 / splitarr.length);
        // }

        let textIndex = 0;

        let interval2 = setInterval(() => {
          displayText += splitarr[textIndex];
          $("#type").text(displayText);
          textIndex++;
          stopFlash();
        }, 2000 / splitarr.length);

        setTimeout(() => {
          clearInterval(interval2)
        }, 2001);

        // $("#type").text(arr[currentIndex])
        flashLine();
      }, 300);
    }, 500);
  }, 5000);

  const focued = () => {
    interval = setInterval(() => {
      if(currentIndex == 2) {
        currentIndex = -1;
      }
      stopFlash();
      setTimeout(() => {
        currentIndex++;
        $("#type").text("")
        setTimeout(() => {
          let splitarr = arr[currentIndex].split("");
  
          let displayText = ""
          // Create typing function
          // for(let i = 0; i <= splitarr.length - 1; i++) {
          //   setTimeout(() => {
          //     displayText += splitarr[i];
          //     $("#type").text(displayText);
          //   }, 4000 / splitarr.length);
          // }
  
          let textIndex = 0;
  
          let interval2 = setInterval(() => {
            displayText += splitarr[textIndex];
            $("#type").text(displayText);
            textIndex++;
          }, 2000 / splitarr.length);
  
          setTimeout(() => {
            clearInterval(interval2)
          }, 2001);
  
          // $("#type").text(arr[currentIndex])
          flashLine();
        }, 300);
      }, 500);
    }, 5000);
    console.log('focus')
  }
  
  const unfocused = () => {
    clearInterval(interval)
    $(".body").addClass("blur")
    console.log('blur')
  }

  window.addEventListener('blur', unfocused);
  window.addEventListener('focus', focued)
})

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 200
      }, 800);
    }
  });
});