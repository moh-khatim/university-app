import { University } from '../data/models/university';
import { fetchUniversities } from '../services/universityService';
import AsyncStorage from '@react-native-async-storage/async-storage';

export class UniversityRepository {
    async getUniversities(): Promise<University[]> {
        try {
            const response = await fetchUniversities();
            await AsyncStorage.setItem('universities', JSON.stringify(response)); // Cache data
            return response;
        } catch (err) {
            const cachedData = await AsyncStorage.getItem('universities');
            if (cachedData) {
                return JSON.parse(cachedData); // Return cached data if API fails
            } else {
                throw new Error('Failed to fetch data'); // Error if no cache
            }
        }
    }
}
