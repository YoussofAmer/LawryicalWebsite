
const APIKEY = '2HWCMsz0TOZgvdAqZc7fiq2Sx7d0ss8bU67U7I4a';
const APIURL = 'https://developer.nrel.gov/api/alt-fuel-stations/v1.json?limit=1&api_key=2HWCMsz0TOZgvdAqZc7fiq2Sx7d0ss8bU67U7I4a';

const githubUsername = 'YoussofAmer';
const githubRepo = 'uslmYAmer'
const filePath = 'path/to/file.txt'; // Replace with the actual file path in your repository
const accessToken = 'your-personal-access-token'; // Replace with your generated access token

const apiUrl = `https://api.github.com/repos/${githubUsername}/${githubRepo}/contents/${filePath}`;

let selectedText;
let annotationModal = document.getElementById('annotationModal');

function showAnnotationModal() {
  annotationModal.style.display = 'block';
}

function hideAnnotationModal() {
  annotationModal.style.display = 'none';
}

function saveAnnotation() {
  const annotationInput = document.getElementById('annotationInput');
  const annotation = annotationInput.value;

  // Here, you would implement code to save the annotation
  // to your backend or any storage system.

  hideAnnotationModal();
}

document.addEventListener('mouseup', function() {
  selectedText = window.getSelection().toString().trim();
  if (selectedText !== '') {
    showAnnotationModal();
  }
});


fetch(apiUrl, {
  headers: {
    Authorization: `token ${accessToken}`,
  },
})
  .then((response) => response.json())
  .then((data) => {
    // Decode the content from base64 to a readable string
    const fileContent = atob(data.content);

    // Now you have the file content, you can display it on your webpage
    const fileDisplayElement = document.getElementById('fileDisplay');
    fileDisplayElement.textContent = fileContent;
  })
  .catch((error) => {
    console.error('Error:', error);
  });

fetch(APIURL, {
    method: 'GET',
    headers: {
      'Authorization': APIKEY,
      'Content-Type': 'application/json' // Set the appropriate content type if needed
    }
  })
  .then(response => response.json())
  .then(data => {
    // Process the data returned from the API
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Sidebar Toggler
    $('.sidebar-toggler').click(function () {
        $('.sidebar, .content').toggleClass("open");
        return false;
    });


    // Progress Bar
    $('.pg-bar').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});
  

    
})(jQuery);

