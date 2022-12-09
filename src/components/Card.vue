<template>
    <div class="card">
        <img alt="movie-logo" src="../assets/images/movie-logo.png"/>
        <h4>{{ title }} ({{ year }})</h4>
        <button @click="navigateToDetails()"></button>
    </div>
</template>
  
<script lang='ts'>
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: 'card',
    props: {
        id: {
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
    },
    setup (props: {
        id: string,
        title: string;
        year: number;
    }) {
        const router = useRouter()
        const { id, title, year } = props;
        const navigateToDetails = () => {
            router.push({
                path: `/overview/details/${id}`,
            })
        };

        return {
            title,
            year,
            navigateToDetails,
        }
    },
});
</script>
  
<style lang="scss" scoped>
.card {
    background-color: #F4F4F4;
    text-align: center;
    border-radius: 10px;
    padding: 15px 20px 20px 15px;
    @media only screen and (max-width: 45em) {
        display: flex;
        justify-content: space-between;
        align-items: center; 
    }

    img {
        max-width: 40%;
        @media only screen and (max-width: 45em) {
            max-width: 30%;
        }
    }

    h4 {
        @media only screen and (min-width: 45em) {
            min-height: 4rem;
        }
    }
    button {
        border: none;
        background-color: inherit;
        @media only screen and (min-width: 45em) {
            background-color: white;
            border-radius: 5px;
            padding: 10px;
        }
        &:after {
            @media only screen and (max-width: 45em) {
                content: ' ';
                display: inline-block;
                border-bottom: 5px solid lightgray;
                border-right: 5px solid lightgray;
                height: 15px;
                width: 15px;
                transform: rotate(-45deg);
            }
            content: 'See Details';
        }
    }
}
</style>
  