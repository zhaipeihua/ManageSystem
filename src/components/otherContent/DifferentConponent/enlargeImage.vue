<template>
  <div id="imageFideOut">
    <div class="op_byself item" style="border-top:none!important;">
        <span :class="photoObj.iconName"></span>{{photoObj.chineaseName}}
    </div>
    <div class="page" style="width:100%;overflow-x:scroll;">
        <div class="row" style="width:15rem;overflow-x:scroll;">
          <div class="row-item"><img :src="sample" alt=""></div>
          <div class="row-item"><img :src="logo" alt=""></div>
          <div class="row-item"><img :src="sample" alt=""></div>
          <div class="row-item"><img :src="logo" alt=""></div>
          <div class="row-item" @click="triggerNotOnImgTag"><img :src="logo" alt="" ref="imgTarget"></div>
        </div>
    </div>
  </div>
</template>
<script>
  import logo from '../../../../src/assets/iconAll/img/beaty1.jpg'
  import sample from '../../../../src/assets/iconAll/img/beaty2.jpg'

  export default {
    name:"imageFideOut",
    data(){
        return{
          photoObj:{}
        }
    },
    props:{
      getPhoto:{
        type:Object
      }
    },
    created () {
      this.logo = logo
      this.sample = sample
      this.photoObj=this.getPhoto
    },
    mounted () {
      var imgs = this.$el.getElementsByTagName('img')
      this.imgViwer = new this.$popup.ImgViewer({
        propsData: {
          imgs: imgs
        }
      })

      //添加事件
      Array.prototype.forEach.call(imgs, $img => {
        $img.addEventListener('click', e => {
          e.stopPropagation()
          //没办法了,现在想到只能这样来处理重复点击,就是并非内置
          this.imgViwer.open(e)
        })
      })
      
      setTimeout(() => {
        this.$refs.imgTarget.addEventListener('load', (e) => {
          console.log(e)
        })
        this.$refs.imgTarget.setAttribute('src', sample)
      }, 1000)
    },

    methods: {
      triggerNotOnImgTag (e) {
        //需要手动指定target
        e.targetChangeTo = this.$refs.imgTarget
        this.imgViwer.open(e)
      }
    }
  }
</script>

<style scoped>
img{
  width: 100px;
}

.row{
  display: flex;
  justify-content: space-around;
}
.row-item{
  margin-top: .3rem;
  /* height: 80px; */
  /* width: 80px; */
  -webkit-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  /* border-radius: 20px; */
  overflow: hidden;
  /* border: 1px solid black; */
}
.cell{
  border: none;
}
.op_byself span{
  float: left;
  color: #444;
  display: inline-block;
  width: .3rem;
  height: .9rem;
  font-size: .3rem;
  margin-right: .1rem;
}
.inspection-icon{
  background-position: center center;
  background-size: 0.28rem 0.3rem;
  background-repeat: no-repeat;
  background-image: url(../../../../src/assets/iconAll/img/inspection.png)
}
.medical_photo{
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 0.28rem 0.3rem;
  background-image: url(../../../../src/assets/iconAll/img/tupian.png)
}
.ApplyInformation{
  background-position: center center;
	background-size: 0.28rem 0.3rem;
	background-repeat: no-repeat;
  background-image: url(../../../../src/assets/iconAll/img/ApplyInformation.png)
}
</style>
