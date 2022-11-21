import axios from "axios";

const nativeAxios = axios.create()

nativeAxios.interceptors.response.use((response: any) => response.data);

export default nativeAxios