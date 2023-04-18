
function setup(){
  const modalForm = new bootstrap.Modal(document.getElementById('modalForm'), {
    keyboard: false
  })
  setInterval(() => {
    modalForm.show();
  }, 80*1000);
}

document.addEventListener('DOMContentLoaded', setup);