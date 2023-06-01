<template>
    <div class="footer">
        <div class="copyright"> © Starup Møbel Design, 2023.</div>
        <router-link to="/kontakt"> <div class="footerContact"> Kontakt os </div> </router-link>
        
        <div class="SoMe">
            <div class="SoMeTekst"> Følg os: </div>
            <v-img class="facebookIcon" src="../assets/fb.png" alt="placehold img"></v-img>
        </div>
       
    </div>
</template>

<style lang="scss" scoped>
    
.footer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: $Tertiary;
    font-family: $MainFont;
    color: $Black;


    a {
        color: $Black;
    }
}

.SoMe {
    height: 50px;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;    

}
.facebookIcon {
    height: 40px;
    width: auto;
}
</style>