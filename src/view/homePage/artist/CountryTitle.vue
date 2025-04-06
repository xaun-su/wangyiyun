<template>
  <div class="country-title">
    <h2 class="country-item-title">推荐</h2>
    <ul>
      <li>推荐歌手</li>
      <li>入驻歌手</li>
    </ul>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.country-title {
  width: 160px;
  ul {
    width: 160px;
    list-style-type: square;
    padding: 5px 0;
    list-style-position: inside; /* 将标记移到内容区域内部 */
  }

  li {
    width: 160px;
    padding-left: 10px; 
    height: 29px;
    margin-bottom: 2px;
    line-height: 29px;
    cursor: pointer;
    color: #333;
    font-size: 14px;

    &:hover {
      background-color: #f2f2f2;
    }

    &::marker {
      color: #999;
    }
  }

  .recommended-singer {
    color: #c0392b;

    &::marker {
      color: #c0392b;
    }

    &:hover {
      background-color: transparent;
    }
  }
}

.country-item-title {
  height: 25px;
  padding-left: 14px;
  font-size: 16px;
  font-weight: bold;
  color: #333;
}
</style>
