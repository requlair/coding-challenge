<template>
    <div v-if="breadcrumbs.length > 1" class="breadcrumb">
        <ul class="breadcrumb-list">
        <li v-for="(crumb, index) in breadcrumbs" :key="crumb.path">
            <router-link v-if="index < (breadcrumbs.length - 1)" :to="crumb.path">{{ crumb.meta.title }}</router-link>
            <span v-else>{{ crumb.meta.title }} {{ crumb.text }}</span>
        </li>
        </ul>
    </div>
</template>
  
<script lang='ts'>
import { defineComponent, getCurrentInstance, computed } from 'vue';

export default defineComponent({
name: 'breadcrumbs',
setup () {
    const { proxy }: any = getCurrentInstance();
    const breadcrumbs = computed(() => {
    const createCrumbFromPath = (path: string) => {
        const route = proxy.$router.options.routes.find((route: { path: string; }) => route.path === path);
        return { meta: { title: route.meta.title }, path: route.path };
    };
    let crumbs = proxy.$route.matched
        .filter((route: { path: string; }) => Boolean(route.path.slice(-1) !== '/'));

    if (proxy.$route && proxy.$route.name !== 'overview') {
        crumbs.unshift(createCrumbFromPath('/overview'));
    }
    return crumbs;
    });
    return {
    breadcrumbs,
    };
},
});
</script>
  
<style lang="scss" scoped>
.breadcrumb-list {
    li {
        padding: 0;
        display: inline-block;
        color: #999;
    }
    li a:after {
        content: "/";
        margin-left: 5px;
        color: #666;
    }
    li a {
        text-decoration: none;
        display: inline-block;
        padding-right: 5px;
        color: #666;
    }
}
</style>
  