const url = document.getElementById('input_fluxoResgate');
url.addEventListener('change', function (event) {

  const isValidUrl = urlString => {
    var urlPattern = new RegExp('^(https?:\\/\\/)?' + // validate protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // validate domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // validate OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // validate port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // validate query string
      '(\\#[-a-z\\d_]*)?$', 'i'); // validate fragment locator

    return urlPattern.test(urlString);
  }

  if (isValidUrl(input_fluxoResgate.value) === false) {
    input_fluxoResgate.value = '';
    alert('Insira uma URL válida.')
  }
})
