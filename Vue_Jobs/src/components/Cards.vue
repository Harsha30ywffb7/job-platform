<script setup>
import { defineProps } from 'vue';
defineProps({
    bg:{
        type:String,
        default: "bg-green-100"
    },
    title:{
        type:String
    },
    description:{
        type:String
    },
    buttonName:{
        type:String
    },
    buttonClr:{
        type:String
    },
    link:{
        type:String
    }
})
</script>

<template>
    <div :class="`${bg} w-5/12 m-5 p-5 shadow-md rounded-md `">
        <h1 class="text-xl font-bold">{{title}}</h1>
        <p>{{description}}</p>
        <button :class="`${buttonClr} text-white rounded-md my-4 p-2 mx-28`">{{buttonName}}</button>
    </div>
</template>