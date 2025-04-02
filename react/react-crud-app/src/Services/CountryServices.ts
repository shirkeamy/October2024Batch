export interface IApiResponse<T> {
    success: boolean;
    errorMessage: string;
    payload: T;
}

export interface ICountry {
    countryId: number;
    countryName: string;
}

export const GetCountries = async (countryId: number | null): Promise<ICountry[]> => {

    // let api: string;
    // if(countryId == null){
    //     api = "https://localhost:7164/api/Country"
    // }
    // else {
    //     api = `https://localhost:7164/api/Country?countryId=${countryId}`
    // }
    const response = await fetch(`https://localhost:7164/api/Country${countryId ? `?countryId=${countryId}`: ``}`)

    if(response.ok){
        const data: IApiResponse<ICountry[]> = await response.json();
        if(data.success)
            return data.payload;
        else
            return [];
    }else{
        return [];
    }

}

export const SaveUpdateCountry = async (country: ICountry): Promise<boolean> => {

    const response = await fetch("https://localhost:7164/api/Country", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(country)
    });

    if(response.ok){
        const data: IApiResponse<ICountry> = await response.json();
        return data.success;
    }

    return false;
}