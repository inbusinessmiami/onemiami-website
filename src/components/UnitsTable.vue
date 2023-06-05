<script setup>
  import { onMounted } from 'vue';
  import { ref } from 'vue';
  const units = ref(null);

  const loadData = async () => {
    let filter = `$filter=BuildingName eq 'one-miami'&`;
    filter = '';
    const url = `https://api.bridgedataoutput.com/api/v2/OData/${import.meta.env.VITE_MLS_BRIDGE_DATASET_ID}/Properties?access_token=${import.meta.env.VITE_MLS_BRIDGE_BROWSER_TOKEN}&${filter}$top=100&$skip=200&$orderby=ListPrice desc`;
    const response = await fetch(url);
    const data = await response.json()
    console.log(data)
    units.value = data.value
  }

  onMounted (() => {
    console.log('units mounted!')
    loadData()
  })
</script>

<template>
  <div id="units" class="mb-4">
    <h2 class="mb-2">Units</h2>
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Unit #</th>
          <th scope="col">Closed Date</th>
          <th scope="col">Sold Price</th>
          <th scope="col">List Price</th>
          <th scope="col">Bed</th>
          <th scope="col">Bath</th>
          <th scope="col">Living Area</th>
          <th scope="col">List Price</th>
          <th scope="col">Days on Market</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="unit in units" :key="unit.ListingKey">
          <th scope="row">{{ unit.CoListAgentMlsId }}</th>
          <td>{{ unit.UnitNumber }}</td>
          <td>{{ unit.CloseDate }}</td>
          <td>{{ unit.ClosePrice }}</td>
          <td>{{ unit.ListPrice }}</td>
          <td>{{ unit.BedroomsTotal }}</td>
          <td>{{ unit.BathroomsTotalDecimal }}</td>
          <td>{{ unit.LivingArea }}</td>
          <td>{{ unit.ListPrice }}</td>
          <td>{{ unit.DaysOnMarket }}</td>
        </tr>
      </tbody>
    </table>

    <div class="notes mb-4 small">
      Aenean lacinia bibendum nulla sed consectetur. Nullam quis risus eget urna mollis ornare vel eu leo.
    </div>
  </div>
</template>

<style scoped>

</style>
