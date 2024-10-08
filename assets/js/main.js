/**
* Template Name: ComingSoon
* Template URL: https://bootstrapmade.com/comingsoon-free-html-bootstrap-template/
* Updated: Mar 17 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Countdown timer
   */
  document.addEventListener('DOMContentLoaded', function() {
    let countdown = document.querySelector('.countdown');
    const output = countdown.innerHTML;

    const countDownDate = function() {
        let timeleft = new Date("Oct 12, 2024 11:45:00").getTime() - new Date().getTime();
        
        if (timeleft < 0) {
            countdown.innerHTML = "Countdown Finished";
            clearInterval(timer);
            return; // Exit if the countdown is finished
        }

        let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

        // Log the values to debug
        console.log(`Days: ${days}, Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`);

        // Update the countdown display
        countdown.innerHTML = output.replace('%d', days)
                                    .replace('%h', hours)
                                    .replace('%m', minutes)
                                    .replace('%s', seconds);
    };

    countDownDate(); 
    const timer = setInterval(countDownDate, 1000); // Update every second
});



  document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('contactForm');
    var loadingElement = form.querySelector('.loading');
    var errorElement = form.querySelector('.error-message');
    var sentElement = form.querySelector('.sent-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Show loading
        loadingElement.style.display = 'block';
        errorElement.style.display = 'none';
        sentElement.style.display = 'none';

        fetch(form.action, {
            method: form.method,
            body: new FormData(form),
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            loadingElement.style.display = 'none';
            if (data.ok) {
                sentElement.style.display = 'block';
                form.reset();
            } else {
                throw new Error('Form submission failed');
            }
        })
        .catch(error => {
            loadingElement.style.display = 'none';
            errorElement.textContent = 'Oops! There was a problem submitting your form';
            errorElement.style.display = 'block';
        });
    });
});

})()
