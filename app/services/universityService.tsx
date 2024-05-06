import axios from 'axios';
import { University } from '../data/models/university';

const BASE_URL = 'http://universities.hipolabs.com/';

export const fetchUniversities = async (): Promise<University[]> => {
    const response = await axios.get<University[]>(`${BASE_URL}search?country=United%20Arab%20Emirates`);
    return response.data;
};
