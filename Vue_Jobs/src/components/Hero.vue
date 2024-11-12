<script setup>
import { defineProps } from 'vue';
defineProps({
    title:{
        type:String,
        default :'become a vue developer'
    }
})
</script>
<template>
    <div class="h-60 bg-green-500 border border-y-2-white ">
        <p class="text-4xl text-center text-white mt-10">{{title}}</p>
        <p class="text-center text-white">Find best job platform from here, you show the skills we match the job for you</p>
    </div>
    
</template>