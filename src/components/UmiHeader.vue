<template>
  <div class="umi-header">
    <nav>
      <h1>Umi</h1>
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
      >
        <path
          d="M90 7a3 3 0 0 1 3 3v80a3 3 0 0 1-3 3H10a3 3 0 0 1-3-3V10a3 3 0 0 1 3-3h80m0-7H10A10 10 0 0 0 0 10v80a10 10 0 0 0 10 10h80a10 10 0 0 0 10-10V10A10 10 0 0 0 90 0Z"
        />
        <rect x="20" y="20" width="60" height="10" rx="5" />
        <rect x="20" y="45" width="60" height="10" rx="5" />
        <rect x="20" y="70" width="60" height="10" rx="5" />
      </svg>
    </nav>
  </div>
</template>s

<script>
export default {
  name: "UmiHeader",
};
</script>

<style lang="scss">
nav {
  display: flex;
  justify-content: space-between;
  padding: 10px 40px;
}

svg {
  fill: #ffffff;
  width: 25px;
}
</style>
