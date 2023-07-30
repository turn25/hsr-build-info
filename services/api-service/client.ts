import { config } from '@/config';
import axios from 'axios';

const apiUrl = config.apiUrl;

export const axiosClient = axios.create({ baseURL: apiUrl });
