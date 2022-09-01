import { IActivity } from "./../interface/IActivity";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useDataStore = defineStore("data", () => {
  const data = ref<IActivity[]>([]);

  function addRandomData(activity: IActivity) {
    data.value.push(activity);
  }

  return { data, addRandomData };
});
