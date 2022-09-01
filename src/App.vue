<script setup lang="ts">
  import ActivityData from "./components/ActivityData.vue";
  import ActivityHistory from "./components/ActivityHistory.vue";
  import { useDataStore } from "./store";
  const { data } = useDataStore();
</script>

<template>
  <div class="container p-3 p-xl-5">
    <div class="row justify-content-center">
      <div class="col-12 col-xl-6 mb-5 mb-xl-0">
        <ActivityData />
      </div>
      <template v-if="data.length">
        <div class="col-12 col-xl-6 mb-3 mb-xl-0">
          <ActivityHistory title="Historial de las Actividades" />
        </div>
      </template>
    </div>
  </div>
</template>
