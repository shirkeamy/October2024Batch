import { IApiResponse, IState, IStatePostData } from "../Utils/Interfaces";

export const GetStates = async (stateId: number | null): Promise<IState[]> => {

    const response = await fetch(`https://localhost:7164/api/State${stateId ? `?stateId=${stateId}` : ``}`);

    if (response.ok) {
        const data: IApiResponse<IState[]> = await response.json();
        if (data.success) {
            return data.payload;
        } else {
            return [];
        }
    } else {
        return [];
    }

}

export const AddEditState = async (stateData: IStatePostData): Promise<boolean> => {
    const response = await fetch("https://localhost:7164/api/State", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(stateData)
    })

    if (response.ok) {
        const data: IApiResponse<IStatePostData> = await response.json();
        return data.success;
    }

    return false;
}

export const DeleteState = async (stateId: number): Promise<boolean> => {

    const response = await fetch(`https://localhost:7164/api/State?stateId=${stateId}`,{
        method: "DELETE"
    })

    if(response.ok)
    {
        const data: IApiResponse<string> = await response.json();
        return data.success;
    }

    return false;
}