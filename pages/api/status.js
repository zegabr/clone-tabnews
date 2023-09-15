function status(request, response){
 response.status(200).json({"opa": "this is a status message"})
}

export default status;
