const formLoginUser = document.querySelector('.formLoginUser')
const formRegisterUser = document.querySelector('.formRegisterUser')
const formLoginBusiness = document.querySelector('.formLoginBusiness')
const formRegisterBusiness = document.querySelector('.formRegisterBusiness')

const urlLoginUser = 'http://localhost:3000/auth/user/login'
const urlRegisterUser = 'http://localhost:3000/auth/user/register'
const urlRegisterBusiness = 'http://localhost:3000/auth/business/register'
const urlLoginBusiness = 'http://localhost:3000/auth/business/login'

function submitManage(event, url){

    try {
        event.preventDefault()
        const formData = new FormData(event.target)
        console.log(formData)
        const data = Object.fromEntries(formData.entries())
        console.log('data',data)
        Token(url, data)
    } catch(error){
        console.log(`Error with the manage token ${error}`)
    }
   
}

async function Token (url, registerData){

    try{
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(registerData)
        })
    
        const data = await response.json()
        const token = data.access_token
    
        localStorage.setItem('Register Token', data.access_token)
        console.log(`Token guardado en el local Storage ${token}`)
    } catch(error){

        console.error('Error with the Login fetch process', error)
    }
}


if(formRegisterBusiness){
    formRegisterBusiness.addEventListener('submit', (event) => submitManage(event, urlRegisterBusiness))
    console.log(formRegisterBusiness);
}

if(formLoginBusiness){
    formLoginBusiness.addEventListener('submit', (event) => submitManage(event, urlLoginBusiness))
    console.log(formLoginBusiness);
}

if(formLoginUser){
    formLoginUser.addEventListener('submit', (event) => submitManage(event, urlLoginUser))
    console.log(formLoginUser);
}

if(formRegisterUser){
    formRegisterUser.addEventListener('submit', (event) => submitManage(event, urlRegisterUser))
    console.log(formRegisterUser);
}



