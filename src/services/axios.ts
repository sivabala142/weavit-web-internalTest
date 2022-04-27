import axios from 'axios';
import { X_OWNER } from '../config';

export function initializeAxios(logout?: () => void, token?: string) {
    axios.interceptors.request.use(req => {
        if (token && req.headers) {
            req.headers.Authorization = req.headers.Authorization || `Bearer ${token}`;
            req.headers[X_OWNER] = req.headers[X_OWNER] || '*';
        }
        return req;
    });

    axios.interceptors.response.use(
        res => res,
        err => {
            if (err.response?.status === 401 && logout) {
                logout();
                return;
            }

            throw err;
        },
    );
}
