<template>
    <div>
        <updatefile :multiple="true" :max=6 :list="imgList" ref="upload"></updatefile>

        <div @click="getPhotoes">获取子组件图片</div>

    </div>
</template>
<script>
import updatePhotoComponent from '../Accordion/updatePhotoComponent.vue'
export default {
    components:{
        "updatefile":updatePhotoComponent,
    },
     data(){
         return{
            imgList:[]
         }
         
     },
     methods:{
         getPhotoes(){
             //在父组件提交的时候，获取上传组件上传的图片内容，获取为一个数组。 
            let picList = this.$refs.upload.list;
            console.log(picList)
         }
     }

}
</script>

<style>

</style>
