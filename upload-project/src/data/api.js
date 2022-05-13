import axios from 'axios';

const apiURL = 'http://localhost:3000/api/';

export const singleFileUpload = async (data, options) => {
     try{
        await axios.post(apiURL + 'singleFile', data, options)
     }
     catch(error){
         throw error;
     }
}

export const getSingleFiles = async() => {
    try{
        const {data} = await axios.get(apiURL + 'getSingleFiles');
        return data;
    }catch(error){
        throw error;
    }
}
export const multipleFilesUpload = async (data, options) => {
    try {
        await axios.post(apiURL + 'multipleFiles', data, options);
    } catch (error) {
        throw error;
    }
}
export const getMultipleFiles = async () => {
    try {
        const {data} = await axios.get(apiURL + 'getMultipleFile');
        return data;
    } catch (error) {
        throw error;
    }
}