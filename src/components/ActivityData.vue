<script setup lang="ts">
  import { useRealoadActivity } from "../composable/useRealoadActivity";
  const { activity, ButtomAddActivity } = useRealoadActivity();
</script>
<template>
  <div class="card">
    <div class="row justify-content-center">
      <div class="card-title mt-4">
        <h3 class="text-center">Datos de la Actividad</h3>
      </div>
      <div class="card-body p-5">
        <div class="col-12 col-xl-10 mb-3">
          <span class="fw-bold"> Actividad: {{ activity?.activity }} </span>
        </div>
        <div class="col-12 col-xl-6 mb-3">
          <span class="fw-bold"> Precio: {{ activity?.price }} </span>
        </div>
        <div class="col-12 col-xl-6 mb-3">
          <span class="fw-bold text-capitalize">
            Tipo: {{ activity?.type }}
          </span>
        </div>
        <div class="col-12 col-xl-6 mb-3">
          <span class="fw-bold">
            Accesibilidad: {{ activity?.accessibility }}
          </span>
        </div>
        <div class="col-12 col-xl-6 mb-3">
          <span class="fw-bold">
            Participantes: {{ activity?.participants }}
          </span>
        </div>
        <div class="col-12" v-if="activity?.link">
          <span class="fw-bold"> Link: {{ activity?.link }} </span>
        </div>
        <div class="col-12">
          <span class="fw-bold"> Key: {{ activity?.key }} </span>
        </div>
      </div>
      <div class="col-12 text-center mt-2 mb-5">
        <button
          type="button"
          class="btn btn-primary text-capitalize"
          @click="ButtomAddActivity()"
        >
          Cargar nueva actividad
        </button>
      </div>
    </div>
  </div>
</template>