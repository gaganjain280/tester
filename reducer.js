
const iState ={
	name:"Gagan",
	wish:['eat','code']
}
const reducer=(state=iState,action)=>{
console.log(action)
if(action.type=="change_Name"){
	return{
		name:action.payload
	}
}
return state;
}
export default reducer;