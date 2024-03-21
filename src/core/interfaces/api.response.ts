interface ApiResponse<T> {
    success: boolean;
    message?: string;
    data?: T;
}

function successResponse<T>(data: T, message: string = 'Success'): ApiResponse<T> {
    return {
        success: true,
        message,
        data
    };
}

function errorResponse<T>(message: string): ApiResponse<T> {
    return {
        success: false,
        message
    };
}
