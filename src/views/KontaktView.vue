<template>
    <div>
        <div class="header"> FAQs </div>
        <div class="FAQdescription"> Her kan du finde de hyppigst stillede spørgsmål hos Starup Møbel Design.</div>
        <div class="faqs"></div>
    </div>
</template>

<script>

export default {
    name: 'app',
    components: {},
    data () {
        return {
            faqs: [
                {
                    question: "Kan jeg få sengen leveret?",
                    answer: "Ja, kontakt mig, og jeg kan arrangere det.",
                    open: false
                },
                {
                    question: "Hvordan betaler jeg?",
                    answer: "Jeg modtager betaling gennem bankoverførsel.",
                    open: false
                },
            ]
        }
    }
}

</script>

<style lang="scss" scoped>

.header {
  font-family: $TitleFont;
  font-size: 26px;
  color: $Black;
  margin: 60px 0 0 130px;
}

.FAQdescription {
    width: 65%;
    font-family: $MainFont;
    font-size: 18px;
    color: $Black;
    margin: 30px 0 0 130px;
}


</style>