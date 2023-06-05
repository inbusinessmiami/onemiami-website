<script setup>
  import { onMounted } from 'vue';

  onMounted(() => {
    let cookieDeclarationScript = document.createElement('script')
    cookieDeclarationScript.setAttribute('id', 'CookieDeclaration')
    cookieDeclarationScript.setAttribute('async', 'true')
    cookieDeclarationScript.setAttribute('src', 'https://consent.cookiebot.com/860b304f-ae3a-4a8e-9cd1-e940cae42dea/cd.js')
    document.querySelector('.modal-cookie-declarationmodal-body').append(cookieDeclarationScript)
  })
</script>

<template>
  <!-- Modal cookie declaration -->
  <div class="modal modal-lg fade" id="modal-cookie-declaration" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="modal-cookie-declarationLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modal-cookie-declarationLabel">Cookie declaration</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-cookie-declarationmodal-body">
        </div>
      </div>
    </div>
  </div>

  <footer class="container-md text-center small mb-2">
    <!-- <hr> -->
    <div class="mb-0">
      <img src="/logo_inbusiness.jpg" alt="" class="logo"> <b>InbusinessMiami</b>, 325 S Biscayne Blvd, Miami FL 33131
      <br>Phone <a href="tel:+ 1 305 490 9976">+ 1 305 490 9976</a>, Email: <a href="mailto:contact@onemiami.info">contact@onemiami.info</a> 
    </div>
    <div class="mb-1 text-muted">
      InbusinessMiami is an independent licensed real estate brokerage servicing South Florida since 1993
    </div>
    <div class="mb-1 text-muted">
      <a href="#" data-bs-toggle="modal" data-bs-target="#modal-cookie-declaration">Coookie declaration</a>
    </div>
  </footer>
</template>

<style scoped>
  footer {
    .logo{
      width: 30px;
    }
  }
</style>
