document.addEventListener("DOMContentLoaded", function(){
    const firstBunner = document.getElementById("firstBunner")
    const secondBunner = document.getElementById("secondBunner")
    const header = document.getElementById("header")
    let currentContent = firstBunner;
    currentContent.style.opacity = "1";

    function toggleContent() {
        if (currentContent === firstBunner) {
            firstBunner.style.opacity = "0";
            secondBunner.style.zIndex = "1";
            secondBunner.style.opacity = "1";
            currentContent = secondBunner;
        } else {
            firstBunner.style.opacity = "1";
            secondBunner.style.zIndex = "-1";
            secondBunner.style.opacity = "0";
            currentContent = firstBunner;
        }
        setTimeout(toggleContent, 4000);
      }
      setTimeout(toggleContent, 4000);
});