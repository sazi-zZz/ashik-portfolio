// show overlay 
function overlay(imgElement) {
    const img_overlay = document.getElementById("img_overlay");
    const overlay_image = document.querySelector("#overlay-image img");

    img_overlay.style.display = "flex";
    overlay_image.src = imgElement.src;
}

// close overlay
function overlay_close(close_btn) {
    const img_overlay = document.getElementById("img_overlay");

    img_overlay.style.display = "none";
}