
let formTriggered = false;

function setup(){
  const modalForm = new bootstrap.Modal(document.getElementById('modalForm'), {
    keyboard: false
  })
  
  Array.from(document.getElementsByClassName('triggersModal')).forEach((el) => {
    el.addEventListener("click", () => {
      console.log("triggersModal")
      formTriggered = true;
    })
  })

  const setVideo = () => {
    const video = document.getElementById('video1');
    const videoContainer = document.getElementById('video-container');
    video.style.width = '100%';
    video.style.height = videoContainer.offsetWidth / (1.77) + 'px';
    console.log(`videoContainer.offsetWidth: ${videoContainer.offsetWidth} > video.style.height: ${video.style.height}`)
  }
  setVideo();

  window.addEventListener('resize', setVideo)

  setTimeout(() => {
    if(!formTriggered) modalForm.show();
  }, 80*1000);
}

document.addEventListener('DOMContentLoaded', setup);