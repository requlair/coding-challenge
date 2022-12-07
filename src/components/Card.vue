<template>
    <div class="card">
        <img alt="movie-image" :src="image"/>
        <div class="content">
            <h4>{{ title }} ({{ year }})</h4>
            <p>{{ description }}</p> 
        </div>
        <router-link :to="{ name: 'details' }" class="chevron"></router-link>
    </div>
</template>
  
<script lang='ts'>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'card',
    props: {
        image: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        year: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true,
        }
    },
    setup (props: {
        image: string;
        title: string;
        year: number;
        description: string;
    }) {
        const { image, title, year, description } = props;
        return {
            image,
            title,
            year,
            description
        }
    },
});
</script>
  
<style lang="scss" scoped>
.card {
    background-color: #F4F4F4;
    width: 100vw;
    height: 100px;
    margin-top: 15px;
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img,.content,.chevron{
        max-height: 90%;
        margin-left: 15px;
        margin-right: 15px;
    }
    img {
        max-width: 80%;
        max-height: 80%;
    }
    .content {
        max-height: 90%;
        h4 {
            margin-top: 0px;
            margin-bottom: 15px;
        }
        p {
            margin: 0px;
        }
    }
    .chevron:after {
        content: ' ';
        display: inline-block;
        border-bottom: 5px solid lightgray;
        border-right: 5px solid lightgray;
        height: 15px;
        width: 15px;
        transform: rotate(-45deg);
    }
}
</style>
  