class ApiError extends Error {
  statusCode: number;
  success: boolean;
  errors: string[];

  constructor(
    statusCode: number,
    message: string = "Something went wrong",
    errors: string[] = [],
  ) {
    super(message);
    this.statusCode = statusCode;
    this.success = false;
    this.errors = errors;
    this.name = "ApiError";

    // Maintains proper stack trace in V8 engines (Node.js)
    Error.captureStackTrace(this, this.constructor);
  }
}

export default ApiError;
