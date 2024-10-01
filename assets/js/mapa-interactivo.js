
document.addEventListener('DOMContentLoaded', function() {
    // Selecciona las regiones
    const regionAmerica = document.getElementById('region-america');
    const regionAmericaNorte = document.getElementById('region-americaNorte');
    const regionAmericaCentro = document.getElementById('region-americaCentro');
    const regionEuropa = document.getElementById('region-europa');
    const regionAsia = document.getElementById ('region-asia');
    const regionOceania = document.getElementById ('region-oceania');
    const regionAfrica = document.getElementById ('region-africa');
    
    const infoRegion = document.getElementById('info-region');
    

    // Función para mostrar la información correspondiente
    function mostrarInformacion(region) {
        let info = '';
        
        // Muestra la información en el div correspondiente
        infoRegion.innerHTML = info;
    }

    // Añade eventos de clic a las regiones
    regionAmerica.addEventListener('click', function() {
        mostrarInformacion('america');
    });

    regionAmericaNorte.addEventListener('click',  function() {
        mostrarInformacion('norte-america');
    });

    regionAmericaCentro.addEventListener('click',  function() {
        mostrarInformacion('centro-america');
    });

    regionEuropa.addEventListener('click', function() {
        mostrarInformacion('europa');
    });

    regionAsia.addEventListener('click',  function() {
        mostrarInformacion('asia');
    });

    regionOceania.addEventListener('click',  function() {
        mostrarInformacion('oceania');
    });

    regionAfrica.addEventListener('click',  function() {
        mostrarInformacion('africa');
    });




});