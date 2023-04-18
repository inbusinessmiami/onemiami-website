
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

  setTimeout(() => {
    if(!formTriggered) modalForm.show();
  }, 80*1000);
}

document.addEventListener('DOMContentLoaded', setup);