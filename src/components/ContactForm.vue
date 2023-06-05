<script setup>
  import { onMounted } from "vue";
  import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js'

  onMounted(() => {
    const modalForm = new bootstrap.Modal(document.getElementById('modalForm'), {
      keyboard: false
    })

    setTimeout(() => {
      if(!window.formTriggered) modalForm.show();
    }, 80*1000);
  })

</script>

<template>
  <div class="container text-center mb-4">
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary triggersModal" data-bs-toggle="modal" data-bs-target="#modalForm">
      What's new?
    </button>
  </div>

  <!-- Modal -->
  <div class="modal fade modal-lg" id="modalForm" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="modalFormLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title pl-4 ms-3 fw-bold" id="modalFormLabel">What's new?</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <!-- https://docs.netlify.com/forms/setup/ -->
          <form name="contact" class="needs-validation" method="POST" data-netlify="true" data-netlify-recaptcha="true" onsubmit="return validate_form();">
            <div class="accordion accordion-flush">
              <div class="accordion-item">
                <!-- <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    Accordion Item #1
                  </button>
                </h2> -->
                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                  <div class="accordion-body">
                    <p>
                      Get notification about new offers and sales as they become available.
                    </p>
                    <div class="mb-3">
                      <input required type="email" name="email" class="form-control" id="input-email" placeholder="name@example.com">
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                    Add more details
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                  <div class="accordion-body">

                    <div class="mb-3">
                      <label for="input-name" class="form-label">Name</label>
                      <input name="name" type="text" class="form-control" id="input-name" placeholder="Your name">
                    </div>

                    <div class="mb-3">
                      <label for="input-beds" class="form-label"># of bedrooms</label>
                      <select name="bedrooms" class="form-select" aria-label="Bedrooms">
                        <option selected value="-1">Any</option>
                        <option value="0">Studio</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                    </div>

                    <div class="mb-3">
                      <label for="input-beds" class="form-label">Frequency</label>
                      <select name="frequency" class="form-select"  aria-label="Frequency">
                        <option value="Immediately">Immediately</option>
                        <option value="Daily">Daily</option>
                        <option value="Weekly">Weekly</option>
                      </select>
                    </div>

                    <div class="mb-3">
                      <label for="input-message" class="form-label">Message</label>
                      <textarea name="message" class="form-control" id="input-message" rows="3"></textarea>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            
            <div class="d-flex justify-content-center">
              <div class="mb-2" data-netlify-recaptcha="true"></div>
            </div>

            <p class="text-center mt-4">
              <button type="submit" class="btn btn-primary w-50 triggersModal">Send</button>
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
