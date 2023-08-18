const track = document.getElementById("image-track");

window.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX;

}

window.onmouseup = e => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
}

window.onmousemove = () => {
    if(track.dataset.mouseDownAt === "0") return;
    
    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
          maxdelta = window.innerwidth / 2;
    
    const percentage = (mouseDelta/ maxdelta) * -100;
          nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;   
    track.dataset.percentage = nextPercentage;
    
    track.style.transform = 'translate(${nextPercentage}%, -50%)' ;
}