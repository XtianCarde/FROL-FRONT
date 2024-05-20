const urlUsers = 'http://localhost:3000/users';
const urlPost = "http://localhost:8080/api/v1"

export const getEmpresas = async () => {
    try {
        const resultEmpresas = await fetch(`${urlPost}/company`);
        const apiEmpresas = await resultEmpresas.json();
        console.info(apiEmpresas);
        return apiEmpresas.content
    } catch (error) {
        console.log("Error: " + error)
    }
}

export const getUsers = async () => {
    try {
        const resultUsers = await fetch(urlUsers);
        const apiUsers = await resultUsers.json();
        return apiUsers
    } catch (error) {
        console.log("Error: " + error)
    }
}

export const newUser = async(user)=>{
    try{
        await fetch(urlUsers,{
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'}
        });
    } catch (error) {
       console.log("Error: " + error) 
    }
}