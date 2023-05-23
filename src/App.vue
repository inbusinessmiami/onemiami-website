<script setup>
  import { onMounted } from 'vue'
  import { RouterLink, RouterView } from 'vue-router'
  import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js'


  let formTriggered = false;

  const setVideo = () => {
    const video = document.getElementById('video1');
    const videoContainer = document.getElementById('video-container');
    video.style.width = '100%';
    const videoContainerWidthMax = 860;
    let videoContainerWidth = videoContainer.offsetWidth;
    if (videoContainerWidth > videoContainerWidthMax) videoContainerWidth = videoContainerWidthMax;
    video.style.height = videoContainerWidth / (1.77) + 'px';
    console.log(`videoContainer.offsetWidth: ${videoContainer.offsetWidth} > video.style.height: ${video.style.height}`)
  }

  const setup = () => {
    console.log('mounted!')
    let cookieDeclarationScript = document.createElement('script')
    cookieDeclarationScript.setAttribute('id', 'CookieDeclaration')
    cookieDeclarationScript.setAttribute('async', 'true')
    cookieDeclarationScript.setAttribute('src', 'https://consent.cookiebot.com/860b304f-ae3a-4a8e-9cd1-e940cae42dea/cd.js')
    document.querySelector('.modal-cookie-declarationmodal-body').append(cookieDeclarationScript)
    
    const modalForm = new bootstrap.Modal(document.getElementById('modalForm'), {
      keyboard: false
    })
    
    Array.from(document.getElementsByClassName('triggersModal')).forEach((el) => {
      el.addEventListener("click", () => {
        console.log("triggersModal")
        formTriggered = true;
      })
    })

    setVideo();
    window.addEventListener('resize', setVideo)

    setTimeout(() => {
      if(!formTriggered) modalForm.show();
    }, 80*1000);
  }

  onMounted(() => {
    setup();
  })

</script>

<template>
    <main class="mt-4">
      <div id="headline" class="container-md text-center mb-4">
        <div class="content">
          <a href="https://onemiami.info" id="logo-link" title="logo">
            <!-- <img src="/logo_inbusiness.jpg" alt="one miami logo" class="img-fluid"> -->
            <img src="/logo_onemiami.png" alt="one miami logo" class="img-fluid">
          </a>
        </div>
      </div>

      <div id="video-container" class="container mb-4">
        <video controls autoplay playsinline id="video1"  >
          <source src="/OneMiami.mp4" type="video/mp4">
        </video>
      </div>


      <div id="citation" class="container text-center mb-4">
        <figure>
          <blockquote class="blockquote">
            <p>"Risk comes from not knowing what you're doing."</p>
          </blockquote>
          <figcaption class="blockquote-footer">
            Warren Buffett
          </figcaption>
        </figure>
      </div>

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
    </main>



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
      <hr>
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


  <RouterView />
</template>

<style lang="scss" scoped>
$color1: #333;
$container-size1: 700px;

$debug: false;

// mixin that show border if $debug is true
@mixin debug($color: red, $size: 1px) {
  @if $debug {
    border: $size solid $color;
  }
}

html {
  padding: 0;
  margin: 0;
  color: $color1;
}

a {
  color: $color1;
  text-decoration: none;
  &:hover{
    text-decoration: underline;
  }
}

main {
  padding: 0;
  margin: 0;
  font-family: 'Kumbh Sans', sans-serif;
  transition: all 0.5s;

  #headline {
    display: flex;
    justify-content: center;
    #logo-link {
      min-width: 200px;
      max-width: 20vw;
      display: block;
    }
  }

  #video-container{
    width: 100%;
    @include debug();
  }

  blockquote {
    font-style: italic;
  }

}

footer {
  .logo{
    width: 30px;
  }
}

@media screen and (min-width: 480px) {
  main {
    #video{
      iframe{
        height: 300px;
      }
    }
  }
}

@media screen and (min-width: 576px) {
  main {
    #video{
      iframe{
        height: 400px;
      }
    }
  }
}


</style>
