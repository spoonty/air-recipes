import axios from "axios";

export const fetchGetRecipes = async () => await axios.get("https://test.kode-t.ru/list.json")