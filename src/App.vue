<template>
    <div
        id="app-layout"
        class="d-flex align-items-center justify-content-center"
    >
        app
    </div>
</template>

<style lang="scss">
@font-face {
    font-family: 'OpenSans';
    src: local('OpenSans'),
        url('./fonts/OpenSans/OpenSans-Regular.ttf') format('truetype');
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

html {
    font-size: 14px;
    font-family: 'OpenSans';
}

body {
    background-color: #f3f9fd;
}

#app-layout {
    width: 100vw;
    min-height: 100vh;
}
</style>
