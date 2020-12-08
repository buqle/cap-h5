<template>
  <div class="home">
    <img src="@/assets/img2.jpg" w-1>
    <dl flex auto fz-15 c-38 class="list" >
      <dt flex flex-direction>
        <h4>
          How to Deal with Presidential Transition?
        </h4>
        <p>
          As the new administration prepares to take office, what should investors be prepared for the coming uncertain time?
        </p>
        <span flex>
          <b title fz-18>Read More</b>
        </span>
      </dt>
      <dd>
        <img src="../assets/img3.jpg" alt="">
      </dd>
    </dl>

    <img src="@/assets/img4.jpg" alt="" w-1>

    <div class="we-do" w-674 auto>
      <h4 c-ye center>What We Do</h4>
      <pre c-38>ACQUACAP is a leading global investment business investing capital on behalf of large institutions and pension funds. We strive to create great value for our investors by carefully managing their capital. The classes in which we invest include private equity, hedge funds, real estate and other alternative assets. Our efforts have won the recognition of investors and, more importantly, have supported the development of hundreds of enterprises.</pre>
    </div>

    <dl class="join-cap">
      <dt fz-24 c-38>
        <h4 c-ye>Join ACQUACAP</h4>
        <p>Come to ACQUACAP,</p>
        <p>truly be your personal best with</p>
        <p>our best team.</p>
        <b title c-38>Apply</b><br>
        <b title c-38>Discover ACQUACAP</b>
      </dt>
      <dd>
        <img src="@/assets/img5.jpg" alt="" w-1>
      </dd>
    </dl>

  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {

  }
}
</script>
<style>
.we-do{}
.we-do h4{font-size: 48px;padding: 50px 0 10px 0;}
.we-do pre{

  line-height: 48px;font-size: 24px;
}
.list{width: 674px;font-family: HelveticaLig;-moz-box-shadow:0px 5px 10px #acb3b5; -webkit-box-shadow:0px 5px 10px #acb3b5; box-shadow:0px 5px 10px #acb3b5;margin: 50px auto;}
.list img{
  width: 262px;height:250px
}
.list dt{flex: 1 1 0;margin-right: 16px;margin-left: 20px;}
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
  align-items: flex-end;padding-bottom: 20px;}
.list dd{flex: 0 0 250px;}


.join-cap{position: relative;margin-top: 80px;}
.join-cap dt{position: absolute;left: 40px;bottom: 0;width: 464px;background: #fff;padding: 40px;}
.join-cap dt h4{font-size: 32px;margin-bottom: 16px;}
.join-cap dt p{line-height: 56px;}
.join-cap dt b{font-size: 28px;}
</style>
