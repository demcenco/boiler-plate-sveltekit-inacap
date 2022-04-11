import { API_URL } from './constants';

export function apiUrl(route = '') {
	return `${API_URL}/${route}`;
}
