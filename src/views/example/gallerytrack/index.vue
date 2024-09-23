<template>
  <main class="gallery">
    <div class="gallery-track">
      <div class="card">
        <div class="card-image-wrapper">
          <img src="@/assets/gallerytrack/kL3u4Tqfn1s.jpg" />
        </div>
      </div>
      <div class="card">
        <div class="card-image-wrapper">
          <img src="@/assets/gallerytrack/yVUQlyRlJSw.jpg" />
        </div>
      </div>
      <div class="card">
        <div class="card-image-wrapper">
          <img src="@/assets/gallerytrack/7H77FWkK_x4.jpg" />
        </div>
      </div>
      <div class="card">
        <div class="card-image-wrapper">
          <img src="@/assets/gallerytrack/r7YZXv5f5cc.jpg" />
        </div>
      </div>
      <div class="card">
        <div class="card-image-wrapper">
          <img src="@/assets/gallerytrack/pKQ75n3P8EJA.jpg" />
        </div>
      </div>
      <div class="card">
        <div class="card-image-wrapper">
          <img src="@/assets/gallerytrack/psdV2Rl-GvU1.jpg" />
        </div>
      </div>
      <div class="card">
        <div class="card-image-wrapper">
          <img src="@/assets/gallerytrack/gGIJGnpMZfo.jpg" />
        </div>
      </div>
      <div class="card">
        <div class="card-image-wrapper">
          <img src="@/assets/gallerytrack/j7AMlh2MMHc1.jpg" />
        </div>
      </div>
      <div class="card">
        <div class="card-image-wrapper">
          <img src="@/assets/gallerytrack/U3cctUBucn0.jpg" />
        </div>
      </div>
      <div class="card">
        <div class="card-image-wrapper">
          <img src="@/assets/gallerytrack/SMKR4zjSdd4.jpg" />
        </div>
      </div>
      <div class="card">
        <div class="card-image-wrapper">
          <img src="@/assets/gallerytrack/psdV2Rl-GvU1.jpg" />
        </div>
      </div>
      <div class="card">
        <div class="card-image-wrapper">
          <img src="@/assets/gallerytrack/K-94QEMm3vo.jpg" />
        </div>
      </div>
      <div class="card">
        <div class="card-image-wrapper">
          <img src="@/assets/gallerytrack/j7AMlh2MMHc1.jpg" />
        </div>
      </div>
      <div class="card">
        <div class="card-image-wrapper">
          <img src="@/assets/gallerytrack/D68ADLeMh5Q.jpg" />
        </div>
      </div>
      <div class="card">
        <div class="card-image-wrapper">
          <img src="@/assets/gallerytrack/BzuUDHCi_vo.jpg" />
        </div>
      </div>
      <div class="card">
        <div class="card-image-wrapper">
          <img src="@/assets/gallerytrack/ua2vQnsn_x0.jpg" />
        </div>
      </div>
      <div class="card">
        <div class="card-image-wrapper">
          <img src="@/assets/gallerytrack/TGOGwgPR1_Q.jpg" />
        </div>
      </div>
      <div class="card">
        <div class="card-image-wrapper">
          <img src="@/assets/gallerytrack/oqStl2L5oxI.jpg" />
        </div>
      </div>
      <div class="card">
        <div class="card-image-wrapper">
          <img src="@/assets/gallerytrack/XazoYQRnDZo.jpg" />
        </div>
      </div>
      <div class="card">
        <div class="card-image-wrapper">
          <img src="@/assets/gallerytrack/YfgE8WCcZsQ.jpg" />
        </div>
      </div>
      <div class="card">
        <div class="card-image-wrapper">
          <img src="@/assets/gallerytrack/NpMWgJ1_Ohk.jpg" />
        </div>
      </div>
      <div class="card">
        <div class="card-image-wrapper">
          <img src="@/assets/gallerytrack/SU35VU5de1o.jpg" />
        </div>
      </div>
      <div class="card">
        <div class="card-image-wrapper">
          <img src="@/assets/gallerytrack/TbUL8w1C-0s.jpg" />
        </div>
      </div>
      <div class="card">
        <div class="card-image-wrapper">
          <img src="@/assets/gallerytrack/bOvvgayPCyI.jpg" />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>

</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body,
.gallery {
  width: 100%;
  height: 100%;
}

.gallery-track {
//   position: fixed;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.25rem;
  padding: 0.25rem;
  will-change: transform;
}

.card {
  height: 400px;
  overflow: hidden;
  &.card-image-wrapper {
    /* height: 135%; */
    height: 100%;
    will-change: transform;
    &img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

@media (width < 800px) {
  .gallery-track {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (width <style 550px) {
  .gallery-track {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
