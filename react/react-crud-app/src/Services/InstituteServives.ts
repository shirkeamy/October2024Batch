import { IApiResponse, ICourse } from "../Utils/Interfaces";

export const GetCourses = async (): Promise<ICourse[]> => {
    const response = await fetch(`https://localhost:7164/api/courses`)

    if (response.ok) {
        const data: IApiResponse<ICourse[]> = await response.json();
        if (data.success)
            return data.payload;
        else
            return [];
    } else {
        return [];
    }

}


export const GetCourseById = async (CourseId: number): Promise<ICourse[]> => {
    const response = await fetch(`https://localhost:7164/api/courses/${CourseId}`)

    if (response.ok) {
        const data: IApiResponse<ICourse[]> = await response.json();
        if (data.success)
            return data.payload;
        else
            return [];
    } else {
        return [];
    }

}

export const SaveCourse = async (course: ICourse): Promise<boolean> => {
    const response = await fetch(`https://localhost:7164/api/courses/${course.courseName}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        const data: IApiResponse<ICourse> = await response.json();
        return data.success;
    } else {
        return false;
    }
}

export const UpdateCourse = async (course: ICourse): Promise<boolean> => {
    const response = await fetch(`https://localhost:7164/api/courses`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(course)
    });

    if (response.ok) {
        const data: IApiResponse<ICourse> = await response.json();
        return data.success;
    } else {
        return false;
    }
}

export const DeleteCourse = async (courseId: number): Promise<boolean> => {
    const response = await fetch(`https://localhost:7164/api/courses/${courseId}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        const data: IApiResponse<ICourse> = await response.json();
        return data.success;
    } else {
        return false;
    }
}