<script setup>
import { ref } from 'vue';

const columns = ref([
    {
        title: 'Full Name',
        dataIndex: 'name'
    },
    {
        title: 'Age',
        dataIndex: 'age'
    },
    {
        title: 'Column 1',
        dataIndex: 'address'
    }
]);

const data = ref([]);
for (let i = 0; i < 10000; i++) {
    data.value.push({
        key: i,
        name: `Edrward ${i}`,
        age: i + 1,
        address: `London Park no. ${i}`
    });
}
</script>

<template>
    <a-layout>
        <a-layout-content>
            <a-card>
                <s-table :columns="columns" :data-source="data" :pagination="false" :scroll="{ y: 400 }"></s-table>
            </a-card>
        </a-layout-content>
    </a-layout>
</template>

<style>
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    width: 100%;
    height: 100%;
    font-size: 16px;
}

body {
    width: 100%;
    height: 100%;
    font-size: 14px;
    font-family: 'Helvetica Neue', Helvetica, Arial, 'PingFang SC', 'Microsoft YaHei', sans-serif;
    overflow-x: auto;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

#app {
    position: relative;
    width: 100%;
    height: 100%;
}
</style>
