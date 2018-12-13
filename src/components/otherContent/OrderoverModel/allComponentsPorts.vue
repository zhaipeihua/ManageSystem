<template>
    <div id="contactOtherComponent"></div>
</template>
<script>
export default {
    name:"contactOtherComponent",
    beforeRouteEnter (to, from, next) {
            next(vm => {
                const roleid=localStorage.getItem("roleid");
                console.log(roleid)
                switch(roleid){
                    case "DSZ" :vm.$router.push('/orderAllDepartmentListView');
                    break;
                    case "YYZJL":vm.$router.push('/orderAllDepartmentListView');
                    break;
                    case "SCZXS":vm.$router.push('/marketOrderListView');
                    break;
                    case "FQYYZJL":vm.$router.push('/orderAllDepartmentListView');
                    break;
                    case "DESZG":vm.$router.push('/orderAllDepartmentListView');
                    break;
                    case "SCZJ":vm.$router.push('/orderAllDepartmentListView');
                    break;
                    case "DES":vm.$router.push('/orderAllDepartmentListView');
                    break;
                    case "FIN":vm.$router.push('/orderAllDepartmentListView');
                    break;
                    case "MED":vm.$router.push('/orderAllDepartmentListView');
                    break;
                    case "SER":vm.$router.push('/orderAllDepartmentListView');
                    break;
                }
        })
    }
}
</script>

<style>

</style>
