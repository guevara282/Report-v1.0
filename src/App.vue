<template>
  
  <div class="list-group">

   <carreras/>
    
  </div>
</template>

<script>
import header from "@/components/header.vue";
import reportes from "@/components/lista.vue";
import carreras from "@/components/general.vue";

export default {
  name: "imports",
  components: {
    header,
    carreras,
    reportes,
  },
};
</script>
<style scoped>
.offcanvas-carreras {
  width: 300px; /* Puedes ajustar este valor según tus necesidades */
}
</style>
