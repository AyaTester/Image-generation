// const api = "sk-proj-omc4h3KxRbXUcmT9mk1QT3BlbkFJHeFaEcOLnKdYabR2QMlw";
// const Images = document.querySelector('.Images');
// const inpUser = document.getElementById('inpUser');
// //Function getImage
// const getImage = async () => {
//     //request to openai
//     const methods = {
//         methods:'POST',
//         headers:{
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${api}` 
//         },
//         body:JSON.stringify(
//             {
//                 "prompt":inpUser.value,
//                 //n = number of images
//                 "n":3,
//                 "size":"256x265"
//             }
//         )
    


//     }
//     const res = await fetch("https://api.openai.com/v1/images/generations", methods)
//     //pares for response as json
//     const data = await res.json()
//     console.log(data)

// }
const api = "sk-None-JPm1oyETHipygxh0bp3bT3BlbkFJ31pl12pSf5maa0TTwxkO";
const inp = document.getElementById('inpUser');
const Images = document.getElementById('Images');

const getImage = async () => {
    const methods = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${api}`
        },
        body: JSON.stringify({
            "prompt": inp.value,
            "n": 3, // Number of images
            "size": "256x256"
        })
    };

    try {
        const res = await fetch("https://api.openai.com/v1/images/generations", methods);
        const data = await res.json();
        
        // Check if data.data exists and is an array before mapping
        const listimages = data.data || [];
        
        listimages.map(photo => {
            const container = document.createElement('div');
            Images.append(container);
            const img = document.createElement('img');
            container.append(img);
            img.src = photo.url;
        });
    } catch (error) {
        console.error("Error fetching images:", error);
    }
};

// Call the function to generate images
getImage();
