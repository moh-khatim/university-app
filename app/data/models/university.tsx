export interface University {
    'state-province': string | null; // State or province, could be nullable
    domains: string[] | null; // Array of domain names
    'web_pages': string[] | null; // Array of web pages
    name: string; // University name
    alpha_two_code: string | null; // Alpha-2 country code
    country: string; // Country
}