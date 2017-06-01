<template>
	<div class="step1">
		<div class="head">
			<h5>{{msg1}}</h5>
			<p>{{msg2}}</p>
			<p>{{msg3}}&nbsp;&nbsp;<a v-bind:style="{color:activeColor}">{{msg4}}</a></p>
		</div>
		<el-row>
			<el-col :span="12">
				<span>{{msg5}}&nbsp;{{msg6}}&nbsp;
					<el-button type="text" @click="dialogVisible = true">Change RF(2)</el-button>

					<el-dialog title="Change Redundancy Factor" v-model="dialogVisible" size="tiny">
						<div>
				            <el-radio class="radio" v-model="radio" label="1">2</el-radio>
				            <el-radio class="radio" v-model="radio" label="2">3</el-radio>
			            </div>
						<h6>Redunfancy Factor 2</h6></br>
						<span>With redunfancy factor 2, the cluster can tolerate up to simuitanous node failures. Minimnum 3 nodes are  needed for cluster creation.</span>
						<span slot="footer" class="dialog-footer">
							<el-button @click="dialogVisible = false">Cancel</el-button>
							<el-button type="primary" @click="dialogVisible = false">Save changes</el-button>
						</span>
					</el-dialog>
				</span>
			</el-col>
			<el-col :span="12">
				<el-dropdown trigger="click">
      <span class="el-dropdown-link">
        下拉菜单<i class="el-icon-caret-bottom el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>黄金糕</el-dropdown-item>
        <el-dropdown-item>狮子头</el-dropdown-item>
        <el-dropdown-item>螺蛳粉</el-dropdown-item>
        <el-dropdown-item>双皮奶</el-dropdown-item>
        <el-dropdown-item>蚵仔煎</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
			</el-col>
		</el-row>

		<el-row :gutter="20">
          <el-col class="el-col-lg-8 el-col-xs-24 el-col-sm-12">
            <div class="grid-content bg-purple el-row box">
             <div class="el-row">
              <el-col :span="8">
                <span>14SM36030032</span>
              </el-col>
              <el-col :span="4" :offset="12">
                 <el-checkbox label=""></el-checkbox>
              </el-col>
             </div>
              <div class="box el-row">
                <el-col :span="8">
                   <el-checkbox label="A"></el-checkbox>             
                </el-col>
                <el-col :span="4" :offset="12">
                  <span>VlAN0</span>
                </el-col>
              </div>
              <div class="box el-row">
                <el-col :span="8">
                   <el-checkbox label="B"></el-checkbox>             
                </el-col>
                <el-col :span="4" :offset="12">
                  <span>VlAN0</span>
                </el-col>
              </div>
              <div class="box el-row">
                <el-col :span="8">
                   <el-checkbox label="C"></el-checkbox>            
                </el-col>
                <el-col :span="4" :offset="12">
                  <span>VlAN0</span>
                </el-col>
              </div>
            </div>         
          </el-col>

          <el-col class="el-col-lg-8 el-col-xs-24 el-col-sm-12">
            <div class="grid-content bg-purple el-row box">
              <div class="el-row">
              <el-col :span="8">
                <span>14SM36030032</span>
              </el-col>
              <el-col :span="4" :offset="12">
                 <el-checkbox label=""></el-checkbox>
              </el-col>
             </div>
              <div class="box el-row">
                <el-col :span="8">
                   <el-checkbox label="A"></el-checkbox>             
                </el-col>
                <el-col :span="4" :offset="12">
                  <span>VlAN0</span>
                </el-col>
              </div>
              <div class="box el-row">
                <el-col :span="8">
                   <el-checkbox label="B"></el-checkbox>            
                </el-col>
                <el-col :span="4" :offset="12">
                  <span>VlAN0</span>
                </el-col>
              </div>
              <div class="box el-row">
                <el-col :span="8">
                   <el-checkbox label="C"></el-checkbox>           
                </el-col>
                <el-col :span="4" :offset="12">
                  <span>VlAN0</span>
                </el-col>
              </div>
            </div>
          </el-col>

          <el-col class="el-col-lg-8 el-col-xs-24 el-col-sm-12">
            <div class="grid-content bg-purple el-row box">
              <div class="el-row">
              <el-col :span="8">
                <span>14SM36030032</span>
              </el-col>
              <el-col :span="4" :offset="12">
                 <el-checkbox label=""></el-checkbox>
              </el-col>
             </div>
              <div class="box el-row">
                <el-col :span="8">
                   <el-checkbox label="A"></el-checkbox>             
                </el-col>
                <el-col :span="4" :offset="12">
                  <span>VlAN0</span>
                </el-col>
              </div>
              <div class="box el-row">
                <el-col :span="8">
                   <el-checkbox label="B"></el-checkbox>             
                </el-col>
                <el-col :span="4" :offset="12">
                  <span>VlAN0</span>
                </el-col>
              </div>
              <div class="box el-row">
                <el-col :span="8">
                   <el-checkbox label="C"></el-checkbox>           
                </el-col>
                <el-col :span="4" :offset="12">
                  <span>VlAN0</span>
                </el-col>
              </div>
            </div>
          </el-col>
        </el-row>

	</div>
</template>

<script>
 export default {
    name:'step1',
    data: function () {
      return {
      	msg1:"Discover Blocks and Nodes",
        msg2:'discover 7 new nodes. you have selected 3 nodes. Your Redunancy Factor Is set to(2)',
        msg3:'Missing nodes?',
        msg4:'Retry discover',
        msg5:'Select All',
        msg6:'Deselect All',
        dialogVisible: false,
        radio: '1',
        activeColor: 'blue',
        checked: true
      }
    },
}
</script>


<style scoped>
.head{
  text-align:center;
}


.box{
  border:1px solid black;
  margin:15px 15px;
  padding:15px 0;
  border-radius:5px;
}
</style>
