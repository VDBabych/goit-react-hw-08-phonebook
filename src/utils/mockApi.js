import axios from "axios"

const instance = axios.create({
    baseURL: "https://63cec15f6d27349c2b74ff08.mockapi.io/contacts/"
})

export const getContacts = async() => {
    const {data} = await instance.get('contacts')
    return data
}

export const addContact = async(contact) => {
    const {data} = await instance.post('contacts', contact)
    return data
}

export const deleteContact = async(id) => {
    const {data} = await instance.delete(`contacts/${id}`)
    return data
}