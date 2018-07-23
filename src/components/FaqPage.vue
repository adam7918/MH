<template>
    <main>
        <div class="navbar">
            <div class="navbar-items">
                <ul>
                    <li class="navbar-items--active">
                        <p>FAQ</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="content">
            <div class="ranking-filters-container">
                <p>Category</p>
                <div class="ranking-filters-buttons">
                    <p :class="{'ranking-filters-buttons-active': activeFilter === 1 }" @click="activeFilter = 1">General</p>
                    <p :class="{'ranking-filters-buttons-active': activeFilter === 2 }" @click="activeFilter = 2">Technical</p>
                    <p :class="{'ranking-filters-buttons-active': activeFilter === 3 }" @click="activeFilter = 3">Account</p>
                </div>
            </div>
            <div class="faq-question" v-if="activeFilter == 1">
                <h2>Question title</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, adipisci modi. Doloribus aspernatur vero nihil minima voluptas! Est inventore voluptatem ab corporis expedita ea itaque doloribus tempora aut! Odio, sit.</p>
            </div>
            <div class="faq-question" v-if="activeFilter == 1">
                <h2>Question title</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, adipisci modi. Doloribus aspernatur vero nihil minima voluptas! Est inventore voluptatem ab corporis expedita ea itaque doloribus tempora aut! Odio, sit.</p>
            </div>
            <div class="faq-question" v-if="activeFilter == 2">
                <h2>Question title</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, adipisci modi. Doloribus aspernatur vero nihil minima voluptas! Est inventore voluptatem ab corporis expedita ea itaque doloribus tempora aut! Odio, sit.</p>
            </div>
            <div class="faq-question" v-if="activeFilter == 2">
                <h2>Question title</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, adipisci modi. Doloribus aspernatur vero nihil minima voluptas! Est inventore voluptatem ab corporis expedita ea itaque doloribus tempora aut! Odio, sit.</p>
            </div>
            <div class="faq-question" v-if="activeFilter == 3">
                <h2>Question title</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, adipisci modi. Doloribus aspernatur vero nihil minima voluptas! Est inventore voluptatem ab corporis expedita ea itaque doloribus tempora aut! Odio, sit.</p>
            </div>
        </div>
    </main>
</template>
<script>
import axios from 'axios'

export default {
    data() {
      return {
          activeFilter: 1,
      }
    },
    created() {
        if(!this.$auth.checkAuth()){
            this.$router.push('/')
        }
    },
}
</script>