import { IApiResponse, ICity, ICityPostData } from "../Utils/Interfaces";

export const getCities = async (cityId: number | null): Promise<ICity[]> => {

    const response = await fetch(`https://localhost:7164/api/City${cityId ? `?cityId=${cityId}` : ``}`)

    if (response.ok) {
        const data: IApiResponse<ICity[]> = await response.json();
        return data.payload;
    }

    return [];

}

export const SaveUpdateCity = async (city: ICityPostData): Promise<boolean> => {
    const response = await fetch("https://localhost:7164/api/City", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(city)
    });

    if (response.ok) {
        const data: IApiResponse<ICityPostData> = await response.json();
        return data.success;
    }

    return false;
}

export const DeleteCity = async (cityId: number): Promise<boolean> => {
    const response = await fetch(`https://localhost:7164/api/City?cityId=${cityId}`, {
        method: "DELETE"
    })

    if (response.ok) {
        const data: IApiResponse<string> = await response.json();
        return data.success;
    }
    return false;
}