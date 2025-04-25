export interface ICountry {
    countryId: number;
    countryName: string;
}

export interface IApiResponse<T> {
    success: boolean;
    errorMessage: string;
    payload: T;
}

export interface IState {
    stateId: number;
    stateName: string;
    countryId: number;
    countryName: string;
}

export interface IStatePostData {
    stateId: number;
    stateName: string;
    countryId: number;
}
