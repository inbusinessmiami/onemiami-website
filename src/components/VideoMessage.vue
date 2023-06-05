<script setup>
  import { onMounted } from 'vue';

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
  
  onMounted (() => {
    setVideo();
    window.addEventListener('resize', setVideo)
  })
</script>

<template>
  <div id="video-container" class="container mb-4">
    <video controls autoplay playsinline id="video1"  >
      <source src="/OneMiami.mp4" type="video/mp4">
    </video>
  </div>
</template>

<style scoped lang="scss">

  $debug: false;

  // mixin that show border if $debug is true
  @mixin debug($color: red, $size: 1px) {
    @if $debug {
      border: $size solid $color;
    }
  }

  #video-container{
    width: 100%;
    @include debug();
  }
  
  #video{
    iframe{
      height: 300px;
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
