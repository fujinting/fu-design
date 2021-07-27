<template>
  <div id="app">
    <!-- 默认 -->
    <div class="button">
      <div>默认按钮</div>
      <fu-button>默认按钮</fu-button>
      <fu-button type="primary">主要按钮</fu-button>
      <fu-button type="success">成功按钮</fu-button>
      <fu-button type="info">信息按钮</fu-button>
      <fu-button type="warning">警告按钮</fu-button>
      <fu-button type="danger">危险按钮</fu-button>
    </div>

    <!-- 朴素 -->
    <div class="button">
      <div>朴素按钮</div>
      <fu-button plain>默认按钮</fu-button>
      <fu-button type="primary" plain>主要按钮</fu-button>
      <fu-button type="success" plain>成功按钮</fu-button>
      <fu-button type="info" plain>信息按钮</fu-button>
      <fu-button type="warning" plain>警告按钮</fu-button>
      <fu-button type="danger" plain>危险按钮</fu-button>
    </div>

    <!-- 圆角 -->
    <div class="button">
      <div>圆角按钮</div>
      <fu-button round>默认按钮</fu-button>
      <fu-button type="primary" round>主要按钮</fu-button>
      <fu-button type="success" round>成功按钮</fu-button>
      <fu-button type="info" round>信息按钮</fu-button>
      <fu-button type="warning" round>警告按钮</fu-button>
      <fu-button type="danger" round>危险按钮</fu-button>
    </div>

    <!-- 圆圈 -->
    <div class="button">
      <div>圆型按钮</div>
      <fu-button icon="fu-icon-search" circle></fu-button>
      <fu-button icon="fu-icon-edit" type="primary" circle></fu-button>
      <fu-button icon="fu-icon-check" type="success" circle></fu-button>
      <fu-button icon="fu-icon-message" type="info" circle></fu-button>
      <fu-button icon="fu-icon-star" type="warning" circle></fu-button>
      <fu-button icon="fu-icon-delete" type="danger" circle></fu-button>
    </div>

    <!-- 禁用 -->
    <div class="button">
      <div>禁用按钮</div>
      <fu-button disabled>默认按钮</fu-button>
      <fu-button type="primary" disabled>主要按钮</fu-button>
      <fu-button type="success" disabled>成功按钮</fu-button>
      <fu-button type="info" disabled>信息按钮</fu-button>
      <fu-button type="warning" disabled>警告按钮</fu-button>
      <fu-button type="danger" disabled>危险按钮</fu-button>
    </div>

    <!-- 带图标 -->
    <div class="button">
      <div>图标按钮</div>
      <fu-button icon="fu-icon-search">默认按钮</fu-button>
      <fu-button icon="fu-icon-edit" type="primary">主要按钮</fu-button>
      <fu-button icon="fu-icon-check" type="success">成功按钮</fu-button>
      <fu-button icon="fu-icon-message" type="info">信息按钮</fu-button>
      <fu-button icon="fu-icon-star" type="warning">警告按钮</fu-button>
      <fu-button icon="fu-icon-delete" type="danger">危险按钮</fu-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {}
}
</script>

<style lang="scss">
#app {
  .button {
    width: 45%;
    margin: 30px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
