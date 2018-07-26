<template>
    <div class="content">
        <div class="ranking-filters-container">
            <p>Filters</p>
            <div class="ranking-filters-buttons">
                <p :class="{'ranking-filters-buttons-active': activeFilter === 1 }" @click="activeFilter = 1">All</p>
                <p :class="{'ranking-filters-buttons-active': activeFilter === 2 }" @click="activeFilter = 2">Weapon</p>
                <p :class="{'ranking-filters-buttons-active': activeFilter === 3 }" @click="activeFilter = 3">Helmet</p>
                <p :class="{'ranking-filters-buttons-active': activeFilter === 4 }" @click="activeFilter = 4">Torso</p>
                <p :class="{'ranking-filters-buttons-active': activeFilter === 5 }" @click="activeFilter = 5">Gauntlets</p>
                <p :class="{'ranking-filters-buttons-active': activeFilter === 6 }" @click="activeFilter = 6">Greaves</p>
                <p :class="{'ranking-filters-buttons-active': activeFilter === 7 }" @click="activeFilter = 7">Amulet</p>
                <p :class="{'ranking-filters-buttons-active': activeFilter === 8 }" @click="activeFilter = 8">Runes</p>
                <p :class="{'ranking-filters-buttons-active': activeFilter === 9 }" @click="activeFilter = 9">Misc</p>
            </div>
        </div>
        <div class="inventory-container">
            <div class="inventory-item item-orange inventory-item--selected">
            </div>
            <div class="inventory-item item-blue">
            </div>
            <div class="inventory-item item-purple">
            </div>
            <div class="inventory-item item-purple">
            </div>
            <div class="inventory-item item-orange">
            </div>
            <div class="inventory-item item-blue">
            </div>
            <div class="inventory-item item-blue">
            </div>
            <div class="inventory-item item-purple">
            </div>
            <div class="inventory-item item-orange">
            </div>
            <div class="inventory-item item-blue">
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import jquery from 'jquery'

let $ = jquery;

export default {
    data() {
      return {
          activeFilter: 1,
          inventoryItems: []
          
      }
    },
    created() {
        if(!this.$auth.checkAuth()){
            this.$router.push('/login')
        }
    },
    methods: {

        
    }
    
}
</script>