<template>
    <div class="footer">
        <div class="copyright"> © Starup Møbel Design, 2023.</div>
        <router-link to="/kontakt"> <div class="footerContact"> Kontakt os </div> </router-link>
        
        <div class="SoMe">
            <div class="SoMeTekst"> Følg os: </div>
            <div class="facebookIconBoks">
                <a href="https://www.facebook.com/groups/1592867194369757">
                    <v-img class="facebookIcon" src="../assets/fb.png" alt="placehold img"></v-img>
                </a>
            </div>
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

.footerContact {
    padding: 0 20px 0 20px;
}
.SoMe {
    height: 50px;
    width: auto;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}
 .facebookIconBoks {
    height: 35px;
    width: 35px;
    margin-left: 20px;
 }
 .facebookIcon {
    height: 35px;
    width: auto;
}

.facebookIcon:hover {
    opacity: 0.7;
}
</style>