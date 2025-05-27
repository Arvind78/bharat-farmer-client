import axiosClient from "./axiosClient";

interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
}




export const userSignup = async (userData: any): Promise<ApiResponse> => {
  try {
    const res = await axiosClient.post(`/api/users/auth/signup`, userData);

    return {
      success: true,
      data: res.data,
      message: "Signup successful",
    };
  } catch (err: any) {
    const errorMessage =
      err?.response?.data?.message ||
      err?.message ||
      "Something went wrong during signup.";
    return {
      success: false,
      message: errorMessage,
    };
  }
};


export const sendLoginOtp = async (email: string): Promise<ApiResponse> => {
  try {
    const res = await axiosClient.post(`/api/users/auth/request-otp`, { email });

    return {
      success: true,
      message: res?.data?.message || "OTP sent to your email.",
    };
  } catch (err: any) {
    const errorMessage =
      err?.response?.data?.message ||
      err?.message ||
      "Failed to send OTP.";
    return {
      success: false,
      message: errorMessage,
    };
  }
};

 
export const userLogin = async (
  email: string,
  otp: number | string,
  notificationToken: string
): Promise<ApiResponse> => {
  try {
    const res = await axiosClient.post(`/api/users/auth/verify-otp`, {
      email,
      otp,
      notificationToken,
    });

    return {
      success: true,
      data: res.data,
      message: "Login successful",
    };
  } catch (err: any) {
    const errorMessage =
      err?.response?.data?.message ||
      err?.message ||
      "OTP verification failed.";
    return {
      success: false,
      message: errorMessage,
    };
  }
};


export const userUpdate = async(userData:any): Promise <ApiResponse> =>{
  try {
  const res = await axiosClient.post(`/api/users/update`,userData);    
  return {
      success: true,
      data: res.data,
      message: "user deteils update successful",
    };
  } catch (error:any) {
      const errorMessage =
      error?.response?.data?.message ||
      error?.message ||
      "User deteils update failed.";
    return {
      success: false,
      message: errorMessage,
    }; 
  }
}

export const uploadProfilePicture = async(formData:FormData,userId:any)=>{
  try {
      const response = await axiosClient.post(`/api/users/update-profile-picture/${userId}`,formData);
        return {
      success: true,
      data: response.data,
       message: "user profile picture update successful",
    };
  } catch (error:any) {
     const errorMessage=error.response.data.message || error.message  ||  "User profile picture update failed.";
     return {
      message:errorMessage,
      success:false,
     }
  }
}