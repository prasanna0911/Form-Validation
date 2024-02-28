let form=document.getElementById('form')
let username=document.getElementById("username")
let email=document.getElementById("email")
let password=document.getElementById("password")
let cpassword=document.getElementById("cpassword")
form.addEventListener("submit",(e)=>{
	
	if(!formValidation()){
		e.preventDefault()
	}
})
formValidation=()=>{
	usernameVal=username.value.trim()
	emailVal=email.value.trim()
	passwordVal=password.value.trim()
	cpasswordVal=cpassword.value.trim()
	let success=true
	if(usernameVal===""){
		success=false
		setError(username,"username is required")
	}
	else{
		setSuccess(username)
	}
	if(emailVal===""){
		success=false
		setError(email,"email is required")
	}
	else{
		setSuccess(email)
	}
	if(passwordVal===""){
		success=false
		setError(password,"password is required")
	}
	else if(passwordVal.length<8){
		success=false
		setError(password,"password must contain atleast 8 charecters")
	}
	else{
		setSuccess(password)
	}
	if(cpasswordVal===""){
		success=false
		setError(cpassword,"confirm password is required")
	}
	else if(cpasswordVal!==passwordVal){
		success=false
		setError(cpassword,"password didn't match")
	}
	else{
		setSuccess(cpassword)
	}
	return success
}
setError=(element,message)=>{
	let inputContent=element.parentElement
	let err=inputContent.querySelector("#error")
	err.innerText=message
	inputContent.classList.add("error")
	inputContent.classList.remove("success")
}
setSuccess=(element)=>{
	let inputContent=element.parentElement
	let err=inputContent.querySelector("#error")
	err.innerText=""
	inputContent.classList.add("success")
	inputContent.classList.remove("error")
}
