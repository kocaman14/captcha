import { createSlice } from "@reduxjs/toolkit";

const initialState={
number:0,
control:"",
start:false,
}


export const captSlice=createSlice({
name:"trycapth",
initialState,
reducers:{
    selectTrue:(state,action)=>{
const {randomIndex,number}=action.payload
// console.log(number)
state.number=number

if(randomIndex == state.number){
// console.log("doğru secım")
state.control=true 
state.start=false
alert(state.control = "Başarıyla Giriş Yaptınız")
}else{
// console.log("yanlıs seçim")
state.control=false
alert(state.control = "Yanlış resmi seçtiniz")
}       
// console.log(action.payload)

    },
startButton:(state,action)=>{
state.start=true


    }
}





})



export const{selectTrue,startButton}=captSlice.actions
export default captSlice.reducer