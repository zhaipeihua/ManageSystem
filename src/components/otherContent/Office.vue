<template>
    <div id="Office">
        <div class="bigBox">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="contentBox">
                        <ul class="contentBox_part1">
                            <li>
                                <a href="###" class="daily" id="dailyIcon" ><label ></label><span>日报</span></a>
                            </li>
                            <li style="margin: 0 1.39rem;">
                                <a href="###" class="address_list" id="addressIcon" ><label ></label><span>通讯录</span></a>
                            </li>
                            <li style="position: relative;margin-right:0!important">
                                <span id="msg_number" style="display: inline-block;position: absolute;padding:.05rem;
                                    background-color: #f00;color:#fff;border-radius: 30%;font-size: .2rem;top: -.25rem;right: 4px;"></span>
                                <a href="###" class="information" id="infromicon"><label ></label><span>消息</span></a>
                            </li>
                        </ul>
                    </div>
                    <div class="contentBox_part2">
                        <ul class="part2_content">
                            <li>
                                <a href="###" class="approve">
                                    <label class="icon1"></label></br><span>审批</span>
                                </a>
                            </li>
                            <li>
                                <a href="###" class="sign">
                                    <label class="icon11"></label></br><span>签到</span>
                                </a>
                            </li>
                            <li>
                                <a href="###" class="punch_clock">
                                    <label class="icon13"></label></br><span>打卡</span>
                                </a>
                            </li>
                            <li>
                                <a href="###" class="cloud_disk">
                                    <label class="icon12"></label></br><span>网盘</span>
                                </a>
                            </li>

                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
 </div>
</template>
<script>
export default {
    name:"Office",
    data(){
        return {
            mes:"this is Office"
        }
    }
}
</script>

