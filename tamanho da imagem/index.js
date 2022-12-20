const imageDimensions = file =>
    new Promise((resolve, reject) => {
        const img = new Image()

        img.onload = () => {
            const { naturalWidth: width, naturalHeight: height } = img
            resolve({ width, height })
        }

        img.onerror = () => {
            reject('There was some problem with the image.')
        }

        img.src = URL.createObjectURL(file)
    })
    

const getInfo = document.getElementById("getFile")
getInfo.addEventListener("change", async ({ target: { files } }) =>  {
    const [file] = files
    if(file.type != "image/png"){
        alert("Imagem com com formato diferente de PNG")
        file.value = ""
        console.log(file)
    }
        try {
            const dimensions = await imageDimensions(file)
            console.log(file)
            if(dimensions.width === 672 && dimensions.height === 672) {
                let src = URL.createObjectURL(files[0]);
                let preview = document.getElementById("file-ip-1-preview");
                preview.src = src;
                preview.style.display = "block"
            }
            else {
                alert('Proporção da imagem incorreta, proporção padrão: 672px X 672px')
                file.shift()
                // file.value = ""
                console.log(file)
            }
        } catch (error) {
            console.log(error)
        }
    })


// const getInfo = async ({ target: { files } }) => {
//     const [file] = files
//     try {
//         const dimensions = await imageDimensions(file)
//         if (dimensions.width === 672 && dimensions.height === 672) {
//             let src = URL.createObjectURL(files[0]);
//             let preview = document.getElementById("file-ip-1-preview");
//             preview.src = src;
//             preview.style.display = "block"
//         }
//         else {
//             alert('Proporção da imagem incorreta, proporção padrão: 672px X 672px')
//         }
//     } catch (error) {
//         console.log(error)
//     }
// }

// alert(`Deu bom, Altura ${dimensions.width} Largura ${dimensions.height} `)