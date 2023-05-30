<template>
    <div>
        <div class="mainBox">
            <div class="leftBox">
                <div class="header">
                    Om Starup Møbel Design
                </div>
                <div class="mainText">
                    loremipsumloremipsum lorum ipsum loresoignjaæoiegnæaerg ajeoiajwt alernaoeirj 
                </div>
            </div>
        <div class="rightBox">
            <v-img src="../assets/placehold.png" alt="placehold img" gradient="to top right, #9F755155, #D1A67C55"></v-img>
        </div>
      </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

.mainBox {
    display: flex;
    justify-content: center;
}

.leftBox {
    width: 55%;
}
.header {
  font-family: $TitleFont;
  font-size: 26px;
  color: $Black;
  margin: 60px 0 0 130px;
}

.mainText {
    width: 65%;
    font-family: $MainFont;
    font-size: 18px;
    color: $Black;
    margin: 30px 0 0 130px;
}
.rightBox {
    height: 100%;
    width: 45%;
    display: flex;
}
</style>