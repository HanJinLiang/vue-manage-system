<template>
    <div class="div-root">
        <baidu-map class="bm-view" :center="center" :zoom="zoom" @ready="handler">
            <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
        </baidu-map>
    </div>

</template>

<script>
    export default {
        data () {
            return {
                center: {
                    lng:"121.315046",
                    lat:"31.344405"
                },
                zoom: 13
            }
        },
        methods: {
            handler ({BMap, map}) {
                console.log(BMap, map)
                this.center.lng = 121.315046
                this.center.lat = 31.344405
                this.zoom = 15
            }
        }
    }
</script>

<style scoped>
.div-root{
    height: 100%;
}
.bm-view {
    width: 100%;
    height: 300px;
}
</style>