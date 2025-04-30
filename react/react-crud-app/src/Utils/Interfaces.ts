export interface IApiResponse<T> {
    success: boolean;
    errorMessage: string;
    payload: T;
}

export interface ICountry {
    countryId: number;
    countryName: string;
}


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

export interface ICity {
    "cityId": number;
    "cityName": string;
    "stateId": number;
    "stateName": string;
    "countryId": number;
    "countryName": string;
}

export interface ICityPostData {
    "cityId": number;
    "cityName": string;
    "stateId": number;
}

export interface ICourse {
    courseId: number;
    courseName: string;
}

export interface IDropdownData {
    value: string | number;
    text: string;
}

export interface ISubject {
    subjectId: number;
    subjectName: string;
    courseId: number;
    courseName: string;
}

export interface ISubjectPostData {
    subjectId: number;
    subjectName: string;
    courseId: number;
}