<template>
  <div class="loginWap">
    <van-popup
      v-model="show"
      position="bottom"
      :style="{ height: '70%' }"
      :overlay-style="{backgroundColor:'rgba(0,0,0,0)'}"
      :duration="0.8"
      round
      :close-on-click-overlay="false"
    >
      <div class="coniter">
        <div class="title">
          <p v-show="loginType==1">
            <span style="color:#0775ff;font-size:0.4rem">安全登录</span>
            <br />
            <span class="EnTitle">secure login</span>
          </p>
          <p v-show="loginType==2">
            <span style="color:#0775ff;font-size:0.4rem">密保手机登录</span>
            <br />
            <span class="EnTitle">Secure mobile phone login</span>
          </p>
          <div>
            <img src="../../assets/img/down_line_circle.png" alt />
          </div>
        </div>
        <van-form @submit="onSubmit">
          <!-- 账号登录 -->
          <div v-show="loginType==1">
            <van-cell class="form-label" value="用户名" />

            <van-field
              v-model.trim="loginOBj.username"
              name="请输入邮箱地址"
              placeholder="请输入邮箱地址"
              class="itemInput emailImg"
            ></van-field>
            <van-cell class="form-label" value="密码" />
            <van-field
              v-model.trim="loginOBj.password"
              type="password"
              name="密码"
              placeholder="密码"
              class="itemInput psdIcon"
            />
          </div>
          <!-- 手机号登录 -->
          <div v-show="loginType==2">
            <van-cell class="form-label" value="手机号" />
            <van-field
              v-model.trim="loginOBj2.phone"
              name="手机号"
              placeholder="手机号"
              type="number"
              maxlength="11"
              class="itemInput phoneIcon"
            />
            <van-cell class="form-label" value="验证码" />
            <div style="display:flex">
              <van-field
                v-model.trim="loginOBj2.code"
                type="number"
                name="验证码"
                placeholder="验证码"
                class="itemInput psdIcon2"
              />
              <van-button
                size="small"
                type="primary"
                :disabled="codeLoding||codeState"
                @click="sendCode"
                :loading="codeLoding"
                loading-type="spinner"
                loading-text="发送中"
              >{{codeState?`${codeTime}s`:'获取验证码'}}</van-button>
            </div>
          </div>
          <p class="forgetPad">忘记密码？</p>
          <div>
            <van-button class="login" round block type="info" native-type="submit">登录</van-button>
          </div>
        </van-form>
        <div class="form-bottom">
          <p>- {{loginType==1?'手机验证码登录':'账号密码登录'}} -</p>
          <div @click="changeLogin()">
            <img src="../../assets/img/phone.png" alt />
          </div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      codeLoding: false,
      codeTime: 60,
      codeState: false,
      loginType: 2, //1==账号登录；2==手机号登录
      loginOBj: {
        username: "",
        password: "",
      },
      loginOBj2: {
        phone: "",
        code: "",
      },
    };
  },
  mounted() {
    setTimeout(() => {
      this.show = true;
    }, 1500);
  },
  methods: {
    onSubmit() {
      this.$router.push("/index");

      // const regPhone=/^[1][3,4,5,6,7,8,9][0-9]{9}$/
      // if(this.loginType==2){
      //   if(!regPhone.test(this.loginOBj2.phone)){
      //     this.$toast('请填写正确手机号');
      //     return
      //   }
      //   if(this.loginOBj2.code==''){
      //     this.$toast('请输入验证码');
      //     return
      //   }
      // }else{
      //   if(this.loginOBj.username==''){
      //     this.$toast('请输入账号');
      //     return
      //   }
      //   if(this.loginOBj.password==''){
      //     this.$toast('请输入密码');
      //     return
      //   }
      // }
    },
    // 切换登录方式
    changeLogin() {
      this.loginType = this.loginType == 1 ? 2 : 1;
    },
    // 发送验证码
    sendCode() {
      this.codeLoding = true;
      this.codeTime = 5;

      setTimeout(() => {
        this.codeLoding = false;
        this.codeState = true;
      }, 2000);
      setTimeout(() => {
        let timer = setInterval(() => {
          if (this.codeTime <= 0) {
            this.codeState = false;
            clearInterval(timer);
          } else {
            this.codeTime--;
          }
        }, 1000);
      }, 2000);
    },
  },
};
</script>

<style lang="scss" scoped>
.loginWap {
  width: 100%;
  height: 100vh;
  font-size: 0.24rem;
  background: url("../../assets/img/loginBg.png") no-repeat;
  background-size: 100% 100%;
  background-color: #001a6e;
 
  .coniter {
    .title {
      padding-left: 0.67rem;
      padding-top: 0.47rem;
      > p {
        display: inline-block;
        float: left;
        padding-bottom: 0.11rem;

        .EnTitle {
          color: #d1d7df;
          font-size: 0.24rem;
          margin-top: 0.1rem;
          display: inline-block;
        }
      }
      > div {
        margin-left: 0.17rem;
        display: inline-block;
        width: 0.54rem;
        height: 0.54rem;
        line-height: 0.5rem;
        text-align: center;
        border: 1px solid #f0f4fd;
        border-radius: 100%;
        background-color: #f0f4fd;
        img {
          vertical-align: middle;
          width: 0.2rem;
          height: 0.12rem;
        }
      }
    }

    .emailImg {
      background: url("../../assets/img/userIcon.png") no-repeat 0.3rem center;
      background-size: 0.3rem;
      padding: 0.2rem 0.7rem;
    }
    .psdIcon {
      background: url("../../assets/img/psdIcon.png") no-repeat 0.3rem center;
      background-size: 0.23rem;
      padding: 0.2rem 0.7rem;
    }
    .phoneIcon {
      background: url("../../assets/img/phoneIcon.png") no-repeat 0.3rem center;
      background-size: 0.23rem;
      padding: 0.2rem 0.7rem;
    }
    .psdIcon2 {
      background: url("../../assets/img/codeIcon.png") no-repeat 0.3rem center;
      background-size: 0.23rem;
      padding: 0.2rem 0.7rem;
    }
    .itemInput {
      background-color: #f1f7fe;
      border-radius: 0.16rem;
    }
    .login {
      background: url("../../assets/img/secure.png") no-repeat 2.4rem center;
      background-size: 0.3rem 0.35rem;
      background-color: #006cff;
      border-radius: 0.16rem;
      font-size: 0.34rem;
      margin-bottom: 0.8rem;
      box-shadow: 0px 10px 21px 8px rgba(0, 108, 255, 0.26);
    }
  }
  .van-field {
    background-color: rgba(241, 247, 254, 1);
  }
  .form-label {
    padding: 0.53rem 0.05rem 0.05rem;
    padding-bottom: 0.15rem;
    line-height: 1;
    span {
      font-size: 0.24rem;
      color: #006cff;
    }
  }
  .forgetPad {
    color: rgb(0, 108, 255);
    text-align: right;
    font-size: 0.12rem;
    padding: 0.2rem 0 0.52rem;
    font-size: 0.24rem;
  }
  .van-form {
    padding: 0 0.45rem;
  }
  .form-bottom {
    text-align: center;
    color: #868080;
    > div {
      width: 0.81rem;
      height: 0.81rem;
      line-height: 0.81rem;
      background: rgba(207, 216, 230, 0.4);
      border: 0.03rem solid #9f9f9f;
      border-radius: 50%;
      font-size: 0.24rem;
      margin: 0 auto;
      margin-top: 0.45rem;
      img {
        width: 0.29rem;
        height: 0.54rem;
        vertical-align: middle;
      }
    }
  }
  .van-button--primary {
    background-color: rgba(0, 108, 255, 0.6);
    border: #006cff;
    width: 2.9rem;
    height: 0.84rem;
    font-size: 0.28rem;
    margin-left: 0.3rem;
  }
}
</style>>
