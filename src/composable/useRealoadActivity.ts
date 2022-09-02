import axios from "axios";
import { ref } from "vue";
import { IActivity } from "../interface/IActivity";
import { useDataStore } from "../store";
export const useRealoadActivity = () => {
  const activity = ref<IActivity>();
  const { addRandomData } = useDataStore();
  const ButtomAddActivity = async () => {
    const { data } = await axios.get<IActivity>(
      "https://www.boredapi.com/api/activity"
    );
    activity.value = data;
    addRandomData(data);
  };
  return {
    activity,
    ButtomAddActivity
  };
};
