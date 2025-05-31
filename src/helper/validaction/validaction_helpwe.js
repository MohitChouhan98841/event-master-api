export const clubAllRequriedFeild=(errors)=>{
    return (errors.map((val,index,arr)=>val.path))+" is requried";
}