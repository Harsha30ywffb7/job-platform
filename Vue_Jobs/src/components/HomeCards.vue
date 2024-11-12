<script setup>
import Cards from './Cards.vue';
</script>

<template >
    <div  class="flex justify-around p-20 mx-20">
        <Cards buttonClr="bg-green-500"title="For developers" description="Explore more jobs and find opportunities from here" buttonName="Browse jobs"/>
        <Cards bg="bg-gray-100" buttonClr="bg-black" title="For Employers" description="Find more talented developers for your organisation" buttonName="Add Jobs"/>
    </div>
  
</template>