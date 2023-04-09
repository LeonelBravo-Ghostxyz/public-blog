/* DropDown Menu Android */
const dropDownMenu = document.querySelector('.dropdown-menu')
  const toggleBtn = $('.nav-btn');
  
  toggleBtn.on('click', function() {
    dropDownMenu.classList.toggle('open');
  });

/* Version */
const pVersion = document.querySelector('.version')
fetch('./datos.json')
  .then(response => response.json())
  .then(data => {
    // Aquí puedes trabajar con los datos del archivo JSON
    pVersion.innerHTML = data.version
  })