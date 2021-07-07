const registerForm = document.getElementById("register_form")

registerForm.addEventListener("submit", handleSubmit);

async function postFormAsData({url, formData}){
    const plainData = Object.fromEntries(formData.entries());
    const jsonFormat = JSON.stringify(plainData);
    console.log(plainData)
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
			"Accept": "application/json"
        },
        body: jsonFormat,
    };

    const response = await fetch(url, options);
    if(!response.ok){
        const errorMessage = await response.text();
        throw new Error(errorMessage)
    }
    return response.json()
}

async function handleSubmit(event){
    event.preventDefault()
    const form = event.currentTarget
    const url = form.action;

    try {
        const formData = new FormData(form);
        const response = await postFormAsData({url, formData})
        console.log({response})
        window.location.replace("/login.html");
    } catch (error) {
        console.log(error)
    }
}