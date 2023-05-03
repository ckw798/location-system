<script setup lang="ts">
import { ref } from 'vue'
import { MapType, BScale, BNavigation3d, BLocation, BMarker, BLabel } from 'vue3-baidu-map-gl'
const type = ref<MapType>('BMAP_NORMAL_MAP')
const center = ref({
    lng: 116.28019,
    lat: 40.049191,
})
const cars = ref([{
    location: { lng: 116.28019, lat: 40.049191 },
    size: { length: 4.8, width: 1.8 },
    rotation: 60,
    carNO: '鲁A66666'
}])
const rsSize = (size) => {
    let length, width;
    length = (size.length * 29) / 5
    width = (size.width * 29) / 5
    return { length: length, width: width }
}
const rsRotation = (rotation) => {
    if ((rotation + 270) > 360) {
        rotation = rotation - 360
    }
    return rotation
}
const update_cars = (new_cars) => {
    cars.value = new_cars
}

const update_center = (new_center) => {
    center.value = new_center
}

</script>

<template>
    <el-container>
        <el-header>
            3D地图
        </el-header>
        <el-main>
            <BMap v-bind="$attrs" :heading="64.5" :tilt="73" :center="center" :zoom="21" :minZoom="3" :mapType="type"
                enableScrollWheelZoom="true" enablePinchToZoom="true" mapSetting.enableTraffic="true">
                <BScale anchor="BMAP_ANCHOR_TOP_RIGHT"></BScale>
                <BZoom anchor="BMAP_ANCHOR_TOP_LEFT" />
                <BNavigation3d />
                <BLocation anchor="BMAP_ANCHOR_BOTTOM_LEFT" />
                <div class="cars-ct" v-for="car in cars">
                    <BMarker :title="car.carNO" :position="{
                            lng: car.location.lng,
                            lat: car.location.lat
                        }" :icon="{
            imageUrl: '/car.png', imageSize: {
                width: rsSize(car.size).length,
                height: rsSize(car.size).width
            }
        }" :rotation="rsRotation(car.rotation)">
                    </BMarker>
                    <BLabel :content="car.carNO" :position="{ lng: car.location.lng, lat: car.location.lat }"
                        :offset="{ x: 0, y: -33 }" :style="{
                                color: 'rgb(0,0,0)',
                                backgroundColor: 'rgb(255,255,255)',
                                border: '0.05rem solid rgb(204,204,204)',
                                borderRadius: '0.5rem',
                                padding: '0.25rem',
                                fontSize: '0.25rem'
                            }" />
                </div>
            </BMap>
        </el-main>
        <el-footer>
            AI
        </el-footer>
    </el-container>
</template>
  
 
  