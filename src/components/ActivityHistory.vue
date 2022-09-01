<script setup lang="ts">
  import { useDataStore } from "../store/index";
  const { data } = useDataStore();
  defineProps({
    title: String
  });
</script>
<template>
  <div class="card">
    <div class="row justify-content-center">
      <div class="card-title mt-4">
        <div class="col-12">
          <h3 class="text-center">{{ title }}</h3>
        </div>
      </div>
      <div class="card-body p-5">
        <div class="col-12 mb-4" v-for="(datos, index) of data">
          <div class="row">
            <div class="col-12 mb-3">
              <h5 class="text-capitalize">Actividad N° {{ index + 1 }}</h5>
            </div>
            <div class="col-12 mb-3">
              <span class="fw-bold text-capitalize">
                Actividad: {{ datos.activity }}
              </span>
            </div>
            <div class="col-12 mb-3">
              <span class="fw-bold text-capitalize">
                Precio: {{ datos.price }}
              </span>
            </div>
            <div class="col-12 mb-3">
              <span class="fw-bold text-capitalize">
                Tipo: {{ datos.type }}
              </span>
            </div>
            <div class="col-12 mb-3">
              <span class="fw-bold text-capitalize">
                Accesibilidad: {{ datos.accessibility }}
              </span>
            </div>
            <div class="col-12 mb-3">
              <span class="fw-bold text-capitalize">
                Participantes: {{ datos.participants }}
              </span>
            </div>
            <div class="col-12 mb-3">
              <span class="fw-bold text-capitalize">
                Key: {{ datos.key }}
              </span>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>
