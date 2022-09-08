import { API_URL } from "@environments/index";

export const getStrapiMedia = (url: string) => {
    const imageUrl = url.startsWith("/") ? `${API_URL}${url}` : url;
    return imageUrl;
}