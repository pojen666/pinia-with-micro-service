import { defineStore } from 'pinia';

export const definedStore = defineStore('definedStore', () =>{
    let msg = null;
    const getMsg = () => msg;
    const setMsg = (newMsg) => {
        msg = newMsg;
    };
    return { msg, getMsg, setMsg }
})