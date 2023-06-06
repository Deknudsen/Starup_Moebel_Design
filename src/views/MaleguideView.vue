<template>
    <div>
        <div class="hero">
            <div class="heroText"> Maleguide </div>
            <div class="maleguideImage"> 
                <v-img class="maleguidePic" cover src="../assets/maleguide.jpg" alt="Maleguid header" gradient="to top right, #9F755155, #D1A67C55"></v-img>
            </div>
        </div>

        <div class="maleguideContainer">
            <div class="maleguideHeader"> 
                Her er vores guide til, hvordan en ubehandlet MDF seng males. 
            </div>

            <div class="trinEtBoks">
                <div class="trinEt">
                    <div class="maleguideTitel">Trin 1: Forarbejde</div>
                    <div class="maleguideTekst">
                        Begynd med en let slibning af overfladen. <br> 
                        Der skal slibes med korn 180. <br><br>
                        Efter let slibning støves sengen godt af med en støvkost. <br>
                        Hvis der er  huller eller andet, skal dette spartles og slibes.
                    </div>
                </div>
                <div class="maleguideBillede">
                    <v-img class="maleguideBillede" cover src="../assets/trin1.jpg" alt="placehold img" gradient="to top right, #9F755155, #D1A67C55"></v-img>
                </div>
            </div>

            <div class="trinToBoks">
                    <div class="maleguideBillede">
                        <v-img class="maleguideBillede" cover src="../assets/trin2.jpg" alt="placehold img" gradient="to top right, #9F755155, #D1A67C55"></v-img>
                    </div>
                    <div class="trinTo">
                        <div class="maleguideTitel">Trin 2: Maling</div>
                        <div class="maleguideTekst">
                        For det fineste/glatteste resultat bruges en filt rulle og pensel. <br>
                        Pensel bruges til samlinger og kroge først. <br><br>
                        Derefter rulles de store flader. Start fra en ende af og mal lidt <br>
                        struktureret frem, da malingen kan tørre hurtigt og du kan få nogle <br>
                        grimme striber omkring dit pensel arbejde. <br><br>
                        En maling med glans 40 og op vil være praktisk i forhold til <br>
                        aftørring mm. Det giver desuden sengen et pænt finish! <br><br>
                        Man kan grunde sengen først med en mellem maling, men <br>
                        dette er ikke et must med netop denne mdf.
                    </div>
                </div>
            </div>

            <div class="trinTreBoks">
                <div class="trinTre">
                    <div class="maleguideTitel">Trin 3: Mellemslibning</div>
                    <div class="maleguideTekst">
                        Da mdf “rejser sig”, skal der laves en mellemslibning. <br>
                        Dette gøres også med korn 180. Slib kun let så du ikke kommer <br>
                        helt ned til mdf pladen, men så du tager evt. ujævnheder. <br><br>
                        Mdf rejser sig specielt på hjørner og kanter, så her skal slibes <br>
                        til det føles blødt.
                    </div>
                </div>
                <div class="maleguideBillede">
                    <v-img class="maleguideBillede" cover src="../assets/trin3.jpg" alt="placehold img" gradient="to top right, #9F755155, #D1A67C55"></v-img>
                </div>
            </div>

            <div class="trinFireBoks">
                <div class="maleguideBillede">
                    <v-img class="maleguideBillede" cover src="../assets/trin4.jpg" alt="placehold img" gradient="to top right, #9F755155, #D1A67C55"></v-img>
                </div>
                <div class="trinFire">
                    <div class="maleguideTitel">Trin 4: Slutmaling</div>
                    <div class="maleguideTekst">
                        Nu males sengen med sidste lag maling. Dette gøres som i trin 2. <br><br>
                        Hvis farven ikke dækker, gentages trin 3 og 4. 
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    .hero {
        height: 400px;
        width: 100%;
        display: flex;
        position: relative;
        justify-content: right;
        align-items: center;
    }

    .heroText {
        font-size: 48px;
        font-family: $TitleFont;
        position: absolute;
        z-index: 1;
        padding-right: 250px;
    }
    .maleguideImage {
        width: 100%;
        height: 400px;
    }
    .maleguidePic {
        filter: grayscale(80%);
        object-fit: cover;
        width: 100%;
    }
    .maleguideHeader {
        font-family: $TitleFont;
        font-size: 26px;
        color: $Black;
        margin: 60px 0 60px 0;
        display: flex;
        justify-content: center;
    }
    .trinEtBoks, .trinToBoks, .trinTreBoks, .trinFireBoks {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 80%;
        margin: 0 auto 120px;
    }

    .trinEt, .trinTo, .trinTre, .trinFire {
        width: 40%;
    }
    
    .maleguideBillede {
        width: 350px;
        height: 350px;
        border-radius: 50%;
    }

    .maleguideTitel {
        font-family: $TitleFont;
        font-size: 26px;
        color: $Black;
        margin-bottom: 30px;
    }

    .maleguideTekst {
        font-family: $MainFont;
        font-size: 20px;
        color: $Black;
    }

</style>