<template>
  <footer class="footer">
  	<p class="mb-0">
            All rights reserved.
    </p>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss">
  @import "@/assets/scss/variables.scss";

  /* ---------- Footer --------- */
  footer {
    margin-top: 128px;
    padding-top: 1.5rem;
    padding-bottom: 2rem;
    font-size: .875rem;
    letter-spacing: 0;
    line-height: 1.4;
    border-top: 1px solid $gray-200;
  }
</style>
