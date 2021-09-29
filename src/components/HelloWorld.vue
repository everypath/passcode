<template>
  <div style="background: #0984BD;">
    <div style="text-align: left; position:relative;width:100%;bottom:2%;"> 
      <span style="position:relative;display: inline-block; left:5%; width:70%;">
        <div style="color:white;font-size:120%;position:relative;top:0px;">姓名：{{full_name}}</div>
        <br>
        <div style="color:white;font-size:120%;position:relative;top:0px;">部门：{{org_name}}</div>
        <br>
      </span> 
      <img src="../assets/fuda-logo-blue.png" style="width:25%;height:25%;position:relative;bottom:4px;"/>
    </div>
    
    <div class="qrcanvas">
        <br>
        <img id="barcode" style="width:95%;position:relative;left:3%;"/>

        <div style="text-align:center;">
        <div style="color:#1E9243;font-size:120%;position:relative;display: inline-block;font-weight:bold">{{currentdate}}</div>
        <div style="color:#1E9243;font-size:250%;position:relative;display: inline-block;font-weight:bold">{{currentsec}}</div>
        <div style="color:#1E9243;font-size:120%;position:relative;display: inline-block;font-weight:bold">{{currenthour}}</div>
        </div>
        <br>
        <div style="display: inline-block;text-align: center;position:relative;left:33%" id="qrcode" ref="qrcode"></div>
        
        <marquee><div style="font-size: 300%;color: green;position:relative;">{{large_word}}</div></marquee>
        <div style="position:relative;width:85%;color:#1E9243;text-align:left;left:10%;font-size:80%;position:relative;">未见异常，允许通行，请主动出示，配合检测，并做好自我防护，出行前请确认。</div>
        <br>
        <div style="position: relative; left:5%">
            <img src="../assets/yikatong-logo.jpg" style="position:relative;left:5%;bottom:8px;width:6%;height:6%;"/>
            <div style="font-size:90%;display: inline-block;text-align:left;position: relative; left:5%">一卡通<br>适用于所有场景</div>
            <br><br>
        </div>
    </div>
    <br>
    <div style="position: relative;font-weight:bold; left:30%;border: 1px solid #FFF; border-radius: 5px; width:40%;color:white;font-size:120%;text-align:center;" v-on:click="inputBoxHideShow()">每日健康填报</div>
    <br>
    <input v-model="full_name" placeholder="姓名" v-if="full_name_show">
    <input v-model="org_name" placeholder="部门" v-if="org_name_show">
    <input v-model="large_word" placeholder="滚动文字" v-if="large_word_show"><!--更新滚动文字-->
    <div style="text-align: center; color:#0984BD;position:relative;">{{currentTime}}</div>
  </div>
</template>

<script>
import QRCode from 'qrcodejs2';
import JsBarcode from 'jsbarcode';
export default {
  
  name: 'HelloWorld',
  components:{
    QRCode
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      timer: "",
      currentTime: new Date(), // 当前时间 
      downloadButton:false,
      configs:{
          value:"",
          imagepath:"passqrcode/passqrcode/static/123455.png",
          filter:"color"
      },
      full_name:'',
      org_name:'',
      large_word:'',
      full_name_show:false,
      org_name_show:false,
      large_word_show:false,
    }
  },

  created() {
            var vm = this;
            vm.timer = setInterval(() => {
                    var y = new Date().getFullYear();
                    var m = vm.appendZero(new Date().getMonth() + 1);
                    var d = vm.appendZero(new Date().getDate());
                    var ho = vm.appendZero(new Date().getHours());
                    var mi = vm.appendZero(new Date().getMinutes());
                    var sc = vm.appendZero(new Date().getSeconds());
                //修改数据date
                vm.currentTime = y + "/" + m + '/' + d + ' ' + ho + ':' + mi + ':' + sc;
                vm.currentdate=m+'月'+d+'日';
                vm.currenthour=ho+':'+mi;
                vm.currentsec=sc;
            }, 1000);
            
        },
    methods: {
            RandomRangeNumber(max,min){
                return Math.round(Math.random()*(max-min+1)+min);
            },
            RandomString(len){
                len = len ||32;
                var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
                var maxPos = $chars.length;
                var pwd = '';
                for(var i = 0; i< len ; i++){
                    pwd += $chars.charAt(Math.floor(Math.random()*maxPos));
                }
                return pwd;
            },
            //时间过滤加0
            appendZero(obj) {
                if (obj < 10) {
                    return "0" + obj;
                } else {
                    return obj;
                }
            },
            qrcode(){
                var qrtext = this.RandomRangeNumber(60000,10000)+'';
                let qrcode = new QRCode("qrcode",{
                    width:120,
                    height:120,
                    text:qrtext//在此决定二维码样式
                });
            },
            barcode(){
                var bartext = this.RandomString(7);
                let barcode=new JsBarcode('#barcode', bartext,{//bartext 决定条形码内容
                    format:'CODE39',
                    lineColor:'#000',
                    width:3,
                    displayValue:false,
                }); 
            },
            inputBoxHideShow(){
              this.full_name_show=!(this.full_name_show);
              this.org_name_show=!(this.org_name_show);
              this.large_word_show=!(this.large_word_show);
            }    
        },
    mounted() {
    this.qrcode();
    this.barcode();
    },
    beforeDestroy() {
                if (this.timer) {
                    clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
                }
            }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3{
    display: inline-block;
}
a {
  color: #42b983;
}
.back-color{
    background: #0984BD;
}

.qrcanvas{
    background: white;
    position: relative;
    left: 5%;
    width: 90%;
    height: 80%;
    border-top-right-radius:10px;
    border-top-left-radius:10px;
    border-bottom-left-radius:10px;
    border-bottom-right-radius:10px;
}
</style>

