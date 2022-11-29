//Upload de imagens
//banner
const avatar = document.getElementById('file-ip-1');
avatar.addEventListener('change', function (event) {




  if (event.target.files.length > 0) {
    //if(width === 728 && height === 22){
    var src = URL.createObjectURL(event.target.files[0]);
    var preview = document.getElementById("file-ip-1-preview");
    preview.src = src;
    preview.style.display = "block";
    console.log(preview);

    /*let reader = new FileReader();
    console.log(´reader ${reader}´);
        reader.onload = () => {
            console.log(´readerOnload ${reader}´);
        }*/


    //console.log(`width ${width} - height ${height} `)
  }
  /*}else{
      alert('Imagem não aceita. Recomendado: 1280x640 - PNG')
  }*/


})
