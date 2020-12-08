<template>
  <div class="hello">




  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.list{width: 674px;font-family: HelveticaLig;-moz-box-shadow:0px 5px 10px #acb3b5; -webkit-box-shadow:0px 5px 10px #acb3b5; box-shadow:0px 5px 10px #acb3b5;margin-top: 30px;}
.list img{
  width: 262px;height:250px
}
.list dt{flex: 1 1 0;margin-right: 16px;margin-left: 20px;padding-bottom: 30px;}
.list dt h4{word-wrap: break-word;
  white-space: normal;
  word-break: break-all;height: 22px;overflow: hidden;line-height: 22px;font-family: HelveticaBold;
  margin: 30px 0 20px 0;
}
.list dt p{line-height: 30px;word-wrap: break-word;
  white-space: normal;
  word-break: break-all;}
.list dt span{    flex: 1 1 0;
  align-self: flex-end;
  display: flex;
  align-items: flex-end;}
.list dd{flex: 0 0 250px;}
</style>
