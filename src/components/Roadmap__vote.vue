<template>
    <div class="placeholderdiv">
        <vue-poll v-bind="options" @addvote="addVote"/>
    </div>
</template>
<script> 
    
    import VuePoll from 'vue-poll'
    
    export default {        
        data() {
            return {
                options: {
                    question: 'Which <strong>feature</strong> do you want us to implement next?',
                    answers: [
                        { value: 1, text: 'Professions', votes: 3 },
                        { value: 2, text: 'PvP', votes: 2 },
                        { value: 3, text: 'Land', votes: 1 },
                        { value: 4, text: 'Crafting', votes: 4 } 
                    ],
                    showResults:true
                }
            }
        },
        components: {
            VuePoll
        },
        methods: {
            addVote(obj){
            }
        }
    }
</script>