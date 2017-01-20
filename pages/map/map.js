Page({
    data:{
        longitude: 116.3,
        latitude: 39.9,
        controls: [{
            id: 1,
            iconPath:'/image/plus.png',
            position: {
                left: 0,
                top: 300 -50,
                width:50,
                height:50
            },
            clickable: true
        }],
        markers: [{
            iconPath:'/image/location.png',
            longitude: 116.3,
            latitude: 39.9
        }],
        circles: [{
            longitude: 116.3,
            latitude: 39.9,
            color: "#ccccccAA",
            fillColor: "#eeeeeeAA",
            radius: 10000
        }]
    },
    controltsp(e) {
        console.log(e.controlId)
    },
    markertap(e) {
        console.log(e.markerId)
    }
})