<template>
  <nav class="navbar navbar-dark navbar-vue fixed-top">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasDarkNavbar"
        aria-controls="offcanvasDarkNavbar"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#">Reporteador V 1.0</a>
      <div
        class="offcanvas offcanvas-start text-bg-dark offcanvas-vue"
        tabindex="-1"
        id="offcanvasDarkNavbar"
        aria-labelledby="offcanvasDarkNavbarLabel"
        data-bs-backdrop="false"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">
            Tipo de Reporte
          </h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <div class="d-grid gap-2">
            <div v-for="respuesta in tiporeportes" :key="respuesta.IDPROGRAMA">
              <div class="list-group">
                <a :href="respuesta.URL" class="list-group-item list-group-item-action">
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1 ">
                      <font style="vertical-align: inherit"
                        ><font style="vertical-align: inherit">{{
                          respuesta.PROGRAMA
                        }}</font></font
                      >
                    </h5>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return { tiporeportes: [] };
  },
  created: function () {
    this.consultartreporte();
  },
  methods: {
    consultartreporte() {
      fetch("http://localhost/reportphp/tiporeporte.php")
        .then((respuesta) => respuesta.json())
        .then((datosrespuesta) => {
          console.log(datosrespuesta);
          this.tiporeportes = [];
          if (typeof datosrespuesta[0].success === "undefined") {
            this.tiporeportes = datosrespuesta;
          }
        })
        .catch(console.log);
    }
  }
};
</script>
