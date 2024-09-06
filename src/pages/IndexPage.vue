<template>
  <div class="htmlClass">
    <h1>{{ surename }}</h1>
    <h2>{{ lastname }}</h2>
    <h3>{{ nickname }}</h3>
    <h4>{{ studentnumber }}</h4>
  </div>
</template>


<script>
export default {
  name: 'HtmlComponent',
  data() {
    return {
      surename: 'ธีรกานต์',
      lastname: 'ขันคำ',
      nickname: 'เท็ก',
      studentnumber: '6604101337'

    }
  },
}
</script>

<style scoped></style>
