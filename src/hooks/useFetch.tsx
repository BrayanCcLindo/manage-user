import { useEffect, useState } from "react";
import axios from "axios";

function UseFetch(endpoint: string) {
  const [data, setData] = useState([]);
  async function fetchData() {
    const response = await axios.get(endpoint);

    setData(response.data);
  }
  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return data;
}

export default UseFetch;
