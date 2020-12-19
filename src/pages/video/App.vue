<template>
    <div id='app'>
        
    </div>
</template>
<script>
import preLoadRes from 'pp-pre-load'
export default {
    data(){
        return {}
    },
    mounted(){
        preLoadRes('https://photo.tuchong.com/16133504/l/221041344.webp').then(data=>{
            // console.log(data);
        })
    },
    methods:{
        getImg(){
            const img = new Image();
            img.src = 'https://photo.tuchong.com/16133504/l/221041344.webp';
            document.querySelector('#content').appendChild(img);
        }
    }
}
</script>
<style>
#app{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
}
.music-logo{
    width: 3.4rem;
    height: 3.4rem;
    margin: 1.5rem auto 0;
    background: url('../../assets/images/logo.png') no-repeat;
    background-size: 100%;
}
.music-lyric{
    text-align: center;
    height: 3.4rem;
    margin: .5rem .4rem 0;
    background-color: rgb(13, 206, 196);    
    background-size: 100%;
}
.music-progress{
    text-align: center;
    height: .4rem;
    margin: 1rem .4rem 0;
    background-color: rgb(13, 206, 196);    
    background-size: 100%;
}
.music-play{
    text-align: center;
    height: 3rem;
    margin: 1rem .4rem 0;
    background-color: #06a7ff;    
    background-size: 100%;
}
</style>