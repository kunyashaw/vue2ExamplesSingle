<template >
    <div class="activePublic container">
      <el-steps :space="200" :active="step" class="step">
        <el-step title="1.Discover Nodes" description=""></el-step>
        <el-step title="2.Define Cluster" description=""></el-step>
        <el-step title="3.Setup Node" description=""></el-step>
        <el-step title="4.Select Images" description=""></el-step>
        <el-step title="5.Create Cluster" description=""></el-step>
      </el-steps>

     <router-view></router-view>

      <div class="but-group">
        <el-row :gutter="20">
          <el-col :span="2">
            <div class="grid-content bg-purple">
              <el-button @click.native.prevent="handlePreStep" v-show="preStep">prev</el-button>
            </div>
          </el-col>
          <el-col :span="2" :push="20">
            <div class="grid-content bg-purple">
              <el-button @click.native.prevent="handleNextStep" v-show="nextStep" type="primary">next</el-button>
            </div>
          </el-col>
        </el-row>
      </div>
   </div>  
</template>
   
  <script>
    import store from 'src/store.js'


    export default {
    name:'activePublic',
    data: function () {
      return {
        element:true,
        isRouter:false,
        preStep: false,
        nextStep: true,
        step: 1
      }
    },
    methods: {
      handlePreStep: function () {
            this.$router.go(-1);
            this.step--;
            this.goStep(this.step);
      },
      handleNextStep: function () {
          this.$router.push('/activePublic/step'+(this.step+1));
          var _this = this;
          setTimeout(function () {
              if(_this.isRouter){
                  _this.step++;
                  _this.goStep(_this.step);
              }
          })
      },
      goStep: function (n) {
        switch (n) {
          case 1 :
            this.preStep = false;this.nextStep = true;
            break;
          case 2 :
            this.preStep = true;this.nextStep = true;
            break;
          case 3 :
            this.preStep = true;this.nextStep = true;
            break;
          case 4 :
            this.preStep = true;this.nextStep = true;
            break;
          case 5 :
            this.preStep = true;this.nextStep = false;
            break;
        }
      }
    },
    watch:{
        '$route': function (to,from) {
            this.isRouter = true;
        }
    }
  }

</script>
<style>
 .activePublic .router-link{color:#fff;}
 .activePublic .but-group .el-button{margin-right: 20px;}
 .container{width:100%; text-align:center; padding:20px 20px 20px 10px;}
</style>
