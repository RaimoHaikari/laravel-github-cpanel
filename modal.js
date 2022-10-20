// Get the modal and caption
var imageModal = document.getElementById("laravel-github-cpanel-page-modal");
var modalImg = document.getElementById("laravel-github-cpanel-page-modal-img");
var captionText = document.getElementById("caption");

// Get the image and insert it inside the modal - use its "alt" text as a caption
//var img = document.getElementById("myImg");
var images = document.querySelectorAll(".display-in-modal");

images.forEach(img => {
    img.onclick = function(){
        imageModal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
})



// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  imageModal.style.display = "none";
}