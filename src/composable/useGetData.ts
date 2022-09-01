import { onMounted, ref } from "vue";
import { IActivity } from "../interface/IActivity";
import axios from "axios";

export const useGetData = () => {
  const activity = ref<IActivity>();

  onMounted(async () => {
    const { data } = await axios.get<IActivity>(
      "https://www.boredapi.com/api/activity"
    );
    activity.value = data;
  });
  return {
    activity
  };
};
