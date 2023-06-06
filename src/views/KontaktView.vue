<template>
    <div>
        <div class="header"> Kontakt </div>

        <div class="box">
            <div class="contactLeftBox">
                <div class="textBox"> 
                    Har du nogle spørgsmål, er du mere end velkommen til at kontakte os.
                    <br><br> Du finder os her! <br><br> 
                </div>
                <div class="phoneBox">
                    <div class="phone pa-6">
                        <v-img src="../assets/icon-phone.png" alt="placehold img"></v-img>
                    </div>
                    <div class="phoneText">
                        Tlf. 12345678
                    </div>
                </div>

                <div class="mailBox">
                    <div class="mail pa-6">
                        <v-img src="../assets/icon-mail.png" alt="placehold img"></v-img>
                    </div>
                    <div class="mailText">
                        placeholder@placeholder.com 
                    </div>
                </div>

                <div class="addressBox">
                    <div class="address pa-6"> 
                        <v-img src="../assets/icon-location.png" alt="placehold img"></v-img>
                    </div>
                    <div class="addressText">
                        Tingvejen 285 <br> 
                        7200 Grindsted <br> 
                        Danmark
                    </div>
                </div>

                <div class="facebookBox">
                    <div class="facebook pa-6">
                        <a class="facebookLink" href="https://www.facebook.com/groups/1592867194369757" target="_blank">
                            <v-img src="../assets/fb.png" alt="placehold img"></v-img>
                        </a>
                    </div>
                    <div class="facebookText">
                        Tilmeld dig vores gruppe på Facebook <br> og gå ikke glip af vores opslag, når vi poster nyheder!
                    </div>
                </div>

            </div>
            <div class="contactRightBox">
                <div class="container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594.8025138327657!2d8.812639077495929!3d55.65590581916557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464b117c79a8e251%3A0x3f1cdac5dd72e504!2sTingvejen%20285%2C%207200%20Grindsted%2C%20Denmark!5e0!3m2!1sen!2sgr!4v1684318309012!5m2!1sen!2sgr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>

        <div class="FAQtitle"> FAQs </div>
        <div class="FAQdescription"> Her kan du finde de hyppigst stillede spørgsmål hos Starup Møbel Design. </div>

        <div class="text-subtitle-2 mt-4 mb-2">
            <v-expansion-panels variant="accordion" class="faqAccordion" >
                <v-expansion-panel
                    v-for="faqs in faqsData" 
                    :key="faqs"
                    :title="faqs.question"
                    :text="faqs.answer"
                ></v-expansion-panel>
            </v-expansion-panels>
        </div>

    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import useFaqs from '@/modules/useFaqs';

const { faqsData, getFaqsData } = useFaqs()
        
    onMounted(() => {
        getFaqsData()
    })

</script>

<style lang="scss" scoped>

.header, .FAQtitle {
  font-family: $TitleFont;
  font-size: 26px;
  color: $Black;
  padding: 60px 0 0 130px;
}

iframe {
    width: 100%;
    height: 600px;
    // filter: invert(90%);
}
// filter = dark theme
.textBox, .FAQdescription {
    width: 65%;
    font-family: $MainFont;
    font-size: 18px;
    color: $Black;
    padding: 35px;
}

.phone, .mail, .address {
    width: 100px;
    height: 100px;
    background-color: $Secondary;
    border-radius: 50%;
    display: flex;
    justify-content: center;

}

.facebook {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;

    .facebookLink {
        width: 100px;
        height: 100px;
    }
}
.phoneBox, .mailBox, .addressBox, .facebookBox {
    height: 100px;
    display: flex;
    margin-bottom: 30px;
}
.phoneText, .mailText, .addressText, .facebookText {
    padding-left: 50px;
    font-size: 20px;
    height: 100px;
    display: flex;
    align-items: center;
}


.FAQdescription {
    width: 65%;
    font-family: $MainFont;
    font-size: 18px;
    color: $Black;
    margin: 60px 0 0 130px;
}

.faqAccordion {
    width: 50%;
    display: flex;
}

.text-subtitle-2.mt-4.mb-2 {
    display: flex;
    justify-content: center;
    padding: 50px;
    padding-bottom: 300px;
}

.box {
    display: flex;
    justify-content: center;
}

 .contactRightBox {
    height: 100%;
    width: 600px;

}
</style>