<template>
  <div v-for="respuesta in tiporeportes" :key="respuesta.IDPROGRAMA">
    <div class="list-group">
      <a :href="respuesta.URL" class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">
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
</template>
<script>
export default {
  data() {
    return { tiporeportes: [] };
  },
  created: function () {
    this.consultartreportes();
  },
  methods: {
    consultartreportes() {
      fetch("http://localhost/reportphp/programas.php/?consultar=" + 2)
        .then((respuesta) => respuesta.json())
        .then((datosrespuesta) => {
          console.log(datosrespuesta);
          this.tiporeportes = [];
          if (typeof datosrespuesta[0].success === "undefined") {
            this.tiporeportes = datosrespuesta;
          }
        })
        .catch(console.log);
    },
  },
};
</script>