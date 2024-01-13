

function GenerateFormData(data){
    const form = new FormData();
    for (const key in data) {
      form.append(key, data[key]);
    }
    return form;
}
const baseURL='https://192.168.1.7:7095'

const jsonHeader={
    Headers:{
        'Content-Type': 'application/json'
    }
}
const formdataHeader={
    Headers:{
        'Content-Type': 'multipart/form-data'
    }
}
const APIUtil={
    baseURL,
    GenerateFormData,
    jsonHeader,
    formdataHeader
}



export default APIUtil

export {
    GenerateFormData,
    jsonHeader,
    formdataHeader}
