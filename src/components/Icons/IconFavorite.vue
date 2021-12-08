<script>
export default {
  props: ["isFavorite"],
};
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20.928"
    height="18.252"
    viewBox="0 0 20.928 18.252"
  >
    <g id="Grupo_12" data-name="Grupo 12" transform="translate(-4197 -1869)">
      <g class="heart" transform="translate(4198.748 1870.091)">
        <path
          id="heart-2"
          data-name="heart"
          d="M10.51,5.128,9.579,4.22a4.8,4.8,0,0,0-6.663,0,4.517,4.517,0,0,0,0,6.5l7.572,7.386,0,0,.023.022,7.572-7.386a4.517,4.517,0,0,0,0-6.5,4.8,4.8,0,0,0-6.663,0Z"
          transform="translate(-1.536 -2.874)"
          :fill="isFavorite ? '#3483fa' : '#ffffff'"
          fill-rule="evenodd"
        />
      </g>
      <g class="heart-active" data-name="heart" transform="translate(4197 1869)">
        <path
          id="heart-4"
          data-name="heart"
          d="M12.012,5.572,10.925,4.485a5.5,5.5,0,0,0-7.778,7.778L11.986,21.1l0,0,.026.026,8.839-8.839a5.5,5.5,0,0,0-7.778-7.778Zm-.024,12.7,4.936-4.936,1.451-1.4h0l1.062-1.062a3.5,3.5,0,0,0-4.95-4.95L12.013,8.4l-.007-.007h0L9.511,5.9a3.5,3.5,0,0,0-4.95,4.95L7.1,13.388l0,0Z"
          transform="translate(-1.536 -2.874)"
          :fill="isFavorite ? '#3483fa' : '#3483fa'"
          fill-rule="evenodd"
        />
      </g>
    </g>
  </svg>
</template>
