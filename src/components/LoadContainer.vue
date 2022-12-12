<template>
    <div v-if="status !== 'done' && variant === 'card'">
        <div v-for="_ in [1,2,3]" class="col-4 card">
            <div class="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
    <div v-else>
        <slot></slot>
    </div>
</template>
  
<script setup lang='ts'>
    import { ref } from 'vue';
    const props = defineProps({
        status: {
            type: String,
            required: true,
        },
        variant: {
            type: String,
            required: true
        }
    })
    const status = ref(props.status);
    const variant = props.variant;
    defineExpose({
        status,
        variant,
    });
</script>
  
<style lang="scss" scoped>
    .card {
        background-color: #F4F4F4;
        text-align: center;
        border-radius: 10px;
    }
    .lds-ring {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
        padding: 15px 20px 20px 15px;

        div {
            box-sizing: border-box;
            display: block;
            position: absolute;
            width: 64px;
            height: 64px;
            margin: 8px;
            border: 8px solid black;
            border-radius: 50%;
            animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
            border-color: black transparent transparent transparent;
            :nth-child(1) {
                animation-delay: -0.45s;
            }
            :nth-child(2) {
                animation-delay: -0.3s;
            }
            :nth-child(3) {
                animation-delay: -0.15s;
            }
        }
    }   
    @keyframes lds-ring {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    }
</style>
  