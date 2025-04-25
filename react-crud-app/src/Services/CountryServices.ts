import { IApiResponse, ICountry } from "../Utils/Interfaces";

export const GetCountries = async (countryId: number | null): Promise<ICountry[]> => {

    // let apiUrl = "";
    // if(countryId == null)
    // {
    //     apiUrl = "https://localhost:7164/api/Country";
    // }else{
    //     apiUrl = `https://localhost:7164/api/Country?countryId=${countryId}`;
    // }

    const response = await fetch(`https://localhost:7164/api/Country${countryId ? `?countryId=${countryId}`: ``}`);

    if(response.ok){
        const data: IApiResponse<ICountry[]> = await response.json();
        if(data.success)
        {
            return data.payload;
        }else{
            return [];
        }
    }else{
        return [];
    }

}

export const SaveUpdateCountry = async (country: ICountry): Promise<boolean> => {

    const response = await fetch("https://localhost:7164/api/Country",{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(country)
    })

    if(response.ok)
    {
        const data: IApiResponse<ICountry> = await response.json();
        return data.success;
    }

    return false;
}

export const DeleteCountry = async (countryId: number): Promise<boolean> => {

    const response = await fetch(`https://localhost:7164/api/Country?countryId=${countryId}`,{
        method: "DELETE"
    })

    if(response.ok)
    {
        const data: IApiResponse<string> = await response.json();
        return data.success;
    }

    return false;
}