const valorDoProduto = document.getElementById('input_valorDoProduto');
const porcentDoRepasse = document.getElementById('input_porcentDoRepasse');
const valorDoRepasse = document.getElementById('input_valorDoRepasse');

valorDoProduto.addEventListener('change', function (event) {

  if (valorDoProduto.value != '' && porcentDoRepasse.value != '') {
    valorDoRepasse.value = (valorDoProduto.value * (porcentDoRepasse.value / 100));
  } 

  porcentDoRepasse.addEventListener('change', function (event) {

    console.log('valorDoProduto: ', valorDoProduto.value)
    console.log('porcentDoRepasse: ', porcentDoRepasse.value)

    if (valorDoProduto.value != '' && porcentDoRepasse.value != '') {
      valorDoRepasse.value = (valorDoProduto.value * (porcentDoRepasse.value / 100));
    } 
  })
})
