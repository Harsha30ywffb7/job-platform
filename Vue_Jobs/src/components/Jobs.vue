<template>

    <p class="text-center text-2xl text-blue-600 font-bold">Browse jobs</p>
    <div >
        <div v-if="state.isLoading" class="text-center mx-auto my-auto">
            <p>isLoading</p>
            <PulseLoader/>
        </div>
        <div class="grid grid-flow-row grid-cols-3">
            <Jobcard  v-for="job in state.jobs.slice(0,limit|| state.jobs.length)" :key="job.id" :job="job"/>
        </div>
      
    </div>


</template>


<script setup>
import {onMounted, reactive, ref} from 'vue';
import Jobcard from './Jobcard.vue';
import axios from 'axios'
import PulseLoader from 'vue-spinner/src/BeatLoader.vue'


defineProps({
    limit:Number,
})

const state = reactive({
    jobs:[],
    isLoading:true
});

onMounted(async()=>{
    try{
        const response = await axios.get('http://localhost:8000/jobs');
        state.jobs = response.data;
    }catch(error){
        console.log("error in fetching",error);
    }finally{
        state.isLoading = false;
    }
})
</script>






