import axios, {AxiosStatic} from "axios";

export const axiosInstance = (): AxiosStatic => {
    return axios;
}