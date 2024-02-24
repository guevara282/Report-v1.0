<template>
  <div class="list-group">
    <reportes />
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