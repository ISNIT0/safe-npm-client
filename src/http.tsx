import axios from 'axios'

const isProd = process.env.NODE_ENV === 'production'

export function postJSON<T>(url: string, data: { [key: string]: any }, toastOnFail = true): Promise<T> {
    const headers = { Authorization: `Bearer ${window.localStorage.getItem('access_token')}` }
    return axios.post<T>(url, data, { headers, responseType: 'json' }).then(a => a.data)
}

export function getJSON<T>(url: string, headers: { [key: string]: any } = {}, toastOnFail = true): Promise<T> {
    const finalHeaders = { ...headers, Authorization: `Bearer ${window.localStorage.getItem('access_token')}` }
    return axios.get<T>(url, { headers: finalHeaders, responseType: 'json' }).then(a => a.data)
}

if (!isProd) {
    (window as any).postJSON = postJSON;
    (window as any).getJSON = getJSON;
}