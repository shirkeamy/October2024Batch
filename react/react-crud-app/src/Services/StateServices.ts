import { IApiResponse } from "./CountryServices";

export interface IState {
    "stateId": number;
    "stateName": string;
    "countryId": number;
    "countryName": string;
}

export interface IStatePostData {
    "stateId": number;
    "stateName": string;
    "countryId": number;
}

export const GetStates = async (stateId: number | null): Promise<IState[]> => {

    const response = await fetch(`https://localhost:7164/api/State${stateId ? `?stateId=${stateId}` : ``}`)

    if (response.ok) {
        const data: IApiResponse<IState[]> = await response.json();
        if (data.success)
            return data.payload;
        else
            return [];
    } else {
        return [];
    }

}


export const SaveUpdateState = async (state: IStatePostData): Promise<boolean> => {

    const response = await fetch("https://localhost:7164/api/State", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(state)
    });

    if (response.ok) {
        const data: IApiResponse<IStatePostData> = await response.json();
        return data.success;
    }

    return false;
}

export const DeleteCountry = async (stateId: number): Promise<boolean> => {
    const response = await fetch(`https://localhost:7164/api/State?stateId=${stateId}`, {
        method: "DELETE"
    })

    if (response.ok) {
        const data: IApiResponse<string> = await response.json();
        return data.success;
    }
    return false;
}