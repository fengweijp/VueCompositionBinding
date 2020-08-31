import axios from "axios";
import { ref } from "vue";

let countries = ref([]);

async function load() {
  if (countries.value.length === 0) {
    let result = await axios.get("https://restcountries.eu/rest/v2/all");
    countries.value.splice(0, countries.value.length, ...result.data);
  }
};

function removeItem(item) {
  let index = countries.value.indexOf(item);
  if (index > -1) {
    countries.value.splice(index, 1);
  }
}

export default {
  countries, 
  load,
  removeItem
};
