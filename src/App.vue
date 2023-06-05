<script setup>
  import { onMounted } from 'vue'
  import { RouterLink, RouterView } from 'vue-router'

  import Headline from "./components/Headline.vue";
  import VideoMessage from "./components/VideoMessage.vue";
  import Citation from "./components/Citation.vue";
  import ContactForm from "./components/ContactForm.vue";
  import UnitsTable from "./components/UnitsTable.vue";
  import PageFooter from "./components/PageFooter.vue";

  window.formTriggered = false;

  onMounted(() => {
    console.log('app mounted!')
    Array.from(document.getElementsByClassName('triggersModal')).forEach((el) => {
      el.addEventListener("click", () => {
        console.log("triggersModal")
        window.formTriggered = true;
      })
    })
  })

</script>

<template>
    <main class="mt-4">
      <Headline />
      <VideoMessage />
      <Citation />
      <ContactForm />
      <UnitsTable />
    </main>
    <PageFooter />
  <RouterView />
</template>

<style lang="scss" scoped>
$color1: #333;

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
}

</style>
