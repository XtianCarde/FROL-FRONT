/*Widget CLOUDINARY to upload logos */
const btnLogo = document.querySelector("#btn-photo")
const image = document.querySelector("#business-photo")
const imgUrl = document.querySelector("#img-url");
const form = document.querySelector("form")


let widget_cloudinary = cloudinary.createUploadWidget({
    cloudName: "dao6lcacc",
    uploadPreset: "ml_default"
},
    (err, result) => {
        if(!err && result && result.event === "success"){
            console.log("Imagen subida con exito", result.info)
            image.src = result.info.secure_url;
            imgUrl.value = result.info.secure_url; // Establece la URL de la imagen en el campo oculto
            console.log(imgUrl.value)
        }
    }
)


btnLogo.addEventListener("click", () => {
    widget_cloudinary.open()
}, false)


form.addEventListener("submit", async () => {
    
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const response = await fetch('http://localhost:3000/auth/business/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();
    console.log(result);

    // Manejo de respuesta (e.g., redirección, mostrar mensaje, etc.)
});

form.addEventListener("submit", async () => {
    
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const response = await fetch('http://localhost:8080/api/v1/company', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();
    console.log(result);

    // Manejo de respuesta (e.g., redirección, mostrar mensaje, etc.)
});