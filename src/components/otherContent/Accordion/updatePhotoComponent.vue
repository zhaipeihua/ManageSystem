
<template>
  <div>
    <div class="fileCon">
      <div class="list">
        <div v-for="(item,index) in list" :key="index">
          <div class="close" @click="close(index)"></div>
          <img :src="item" />
        </div>
        <div class="add" v-show="maxStatus" @click="chooseType">
          <div class="add-image"> </div>
        </div>
      </div>
    </div>
    <input id="upload_file" type="file" class="file-input" accept="image/png,image/jpeg,image/jpg" :multiple="multiple" @change="inputChange" style="display: none" />
  </div>
</template>
<script>
    import { Indicator } from 'mint-ui';
    import { Toast } from 'mint-ui';
    export default {
    data() {
        return {
            maxStatus: true
        };
    },
    props: {
        multiple: Boolean,
        max: Number,
        list: Array
    },
    components: {},
    created() {
        this.initFunction()
    },
    methods: {
        initFunction(){
            const QureyData=this.$qs.stringify({
                orderId:10004552,
                userId:"test4"
            })
            this.$http.post("http://192.168.22.240/crm//v2_order/getOrderDetail.do",QureyData).then((res)=>{
                console.log(res)
            })
        },
        chooseType() {
            document.getElementById("upload_file").click();
        },
        close(index) {
            this.list.splice(index, 1);
            this.maxStatus = this.list == this.max ? false : true;
        },
        async inputChange(e) {
            let files = e.target.files;
            let len = this.list.length + files.length;
            if (len > this.max) {
                document.getElementById("upload_file").value = "";
                this.$ui.toast(`最多允许上传${this.max}张`);
                return;
            }
       
            let uploadAll = [].slice.call(files ,0).map(this.upload);
            //使用object.values(files)，测试安卓存在兼容性问题，替换为[].slice.call(files ,0)
            
            Indicator.open({//上传中效果，可自行替换。
                text: "上传中...",
                spinnerType: "fading-circle"
            });
            let result = await Promise.all(uploadAll);
            console.log(uploadAll)
            document.getElementById("upload_file").value = "";
            Indicator.close();
        },
        getObjectURL:function(file) {
            var url = null;
            if(window.createObjectURL != undefined) { // basic
                url = window.createObjectURL(file);
            } else if(window.URL != undefined) { // mozilla(firefox)
                url = window.URL.createObjectURL(file);
            } else if(window.webkitURL != undefined) { // webkit or chrome
                url = window.webkitURL.createObjectURL(file);
            }
            return url;
        },
        changeUrl:function(i) {
            $('.upfile').eq(i).change(function() {
                var parh = getObjectURL(this.files[0]);
                console.log(parh)
                var bills = $('.upfile').eq(i).val();
                if(!/.(gif|jpg|jpeg|png|gif|jpg|png)$/.test(bills)) { //知情同意书照片格式判断
                    alert("请上传正确格式的图片！")
                } else {
                    if($(".img").eq(i).attr("val") == "1") { //自定义属性值判断
                        $(".img").eq(i).attr("src", parh);
                        $(".img").eq(i).attr("val", "1");
                    } else {
                        $(".img").eq(i).attr("src", parh);
                        $(".img").eq(i).attr("val", "1");
                        $(".div_box").after().append('<li class="a-upload"><a href="javascript:;"><span>' +
                            '<img class="img" src="../iconAll/img/icon-tjtp.png" val="" style="width: 1.6rem;height: 2rem"/>' +
                            '<input type="file" class="upfile"  name="picfile1" ></span>' +
                            '</a></li>');
                    }
                }
            })
        },

        upload(file, index) {
            console.log(file)
            return new Promise(async (resolve, reject) => {
                let form = new FormData();
                form.append("file", file);
                form.append("orderid",10004552);//根据上传入参添加参数
                form.append("userid","test4");//根据上传入参添加参数
                form.append("fact_pay",5200);//根据上传入参添加参数
                let result = await this.$http.post("http://192.168.22.240/crm/v2_order/passOrder.do", form);

                console.log(result)
                if (result.cd != 0) {//失败处理
                    Toast(`第${index + 1}张(${file.name})上传出错(已忽略)`);
                    resolve(result);
                    return;
                }
                this.list.push(result.data.url);
                if (this.list.length == this.max) {
                    this.maxStatus = false;
                }
                resolve(result);
        
        });
    }
  }
};
</script>
 
 
 <style lang="less" scoped>
    .fileCon {
    width: 100%;
    min-height: 76px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    .list {
        width: 100%;
        min-height: 76px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        & > div {
        width: 50px;
        height: 50px;
        margin: 10px 10px 10px 0;
        position: relative;
      & > img {
        width: 100%;
        height: 100%;
      }
      .close {
        width: 15px;
        height: 15px;
        background-image: url(/images/icon_close.png);
        background-size: 100%;
        position: absolute;
        top: -7px;
        right: -7px;
      }
    }
  }
}
.add-image {
  width: 50px;
  height: 50px;
  background-image: url(../../../../src/assets/iconAll/img/addpreview.png);
  background-size: 100%;
}
</style>
