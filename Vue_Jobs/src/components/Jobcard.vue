<script setup>
import { defineProps , ref, computed} from 'vue';



const props = defineProps({
    job:Object
})

const showFullDescription = ref(false);

const truncateDescription = computed(()=>{
    let description = props.job.description;
    //console.log(props.job.description);
    if(!showFullDescription.value){
        description = description.substring(0,90)+ '.........'
       // console.log('showing less');
    } 
        //console.log('showing more');
        return description
    
    
        
})

const toggleDescription=()=>{
    showFullDescription.value = !showFullDescription.value;
}
     

</script>
<template>
    <div class=" rounded-md shadow-md p-4 bg-gray-200 m-5">
        <p class="mb-5">{{job.type}}</p>
        <p class="font-bold text-xl my-5">{{job.title}}</p>
        <p >{{truncateDescription}} </p>
        <button class="text-green-400" @click="toggleDescription">
            {{ showFullDescription?'Less' :'More' }}
        </button>
        <p class="my-3 font-bold">{{ job.salary }}/Year</p>
        <div class="flex justify-between mt-5 align-middle">
            
            <p class="text-red-500">
                <span><i class="pi pi-map-marker text-red-500"></i>{{  }}</span>{{job.location}}</p>
        <RouterLink :to="'/jobs/'+job.id" class="text-center mx-10 bg-green-400 text-white p-2 rounded-md cursor-pointer">Read more</RouterLink>
        </div>
    </div>
</template>