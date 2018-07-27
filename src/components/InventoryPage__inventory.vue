<template>
    <div class="content">
        <div class="ranking-filters-container">
            <p>Type</p>
            <div class="ranking-filters-buttons">
                <p :class="{'ranking-filters-buttons-active': activeType === 0 }" @click="activeType = 0">All</p>
                <p :class="{'ranking-filters-buttons-active': activeType === 1 }" @click="activeType = 1">Weapon</p>
                <p :class="{'ranking-filters-buttons-active': activeType === 2 }" @click="activeType = 2">Helmet</p>
                <p :class="{'ranking-filters-buttons-active': activeType === 3 }" @click="activeType = 3">Torso</p>
                <p :class="{'ranking-filters-buttons-active': activeType === 4 }" @click="activeType = 4">Gauntlets</p>
                <p :class="{'ranking-filters-buttons-active': activeType === 5 }" @click="activeType = 5">Greaves</p>
                <p :class="{'ranking-filters-buttons-active': activeType === 6 }" @click="activeType = 6">Amulet</p>
                <p :class="{'ranking-filters-buttons-active': activeType === 7 }" @click="activeType = 7">Runes</p>
                <p :class="{'ranking-filters-buttons-active': activeType === 8 }" @click="activeType = 8">Misc</p>
            </div>
        </div>
        <div class="ranking-filters-container" style="margin-top: -30px">
            <p>Rarity</p>
            <div class="ranking-filters-buttons">
                <p :class="{'ranking-filters-buttons-active': activeRarity === 0 }" @click="activeRarity = 0">All</p>
                <p :class="{'ranking-filters-buttons-active': activeRarity === 1 }" @click="activeRarity = 1">Common</p>
                <p :class="{'ranking-filters-buttons-active': activeRarity === 2 }" @click="activeRarity = 2">Epic</p>
                <p :class="{'ranking-filters-buttons-active': activeRarity === 3 }" @click="activeRarity = 3">Legendary</p>
            </div>
        </div>
        <div class="inventory-container">
            <div v-if="checkTableFilters(item)" v-for="(item, index) in inventoryItems" :key="index" :class="itemClass[index]" @click="selectedItem = index">
                {{item.itemName}}
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
          activeRarity: 0,
          activeType:0,
          inventoryItems: [],
          selectedItem: 99999999
          
      }
    },
    computed: {
        itemClass: function(){
            let self = this
            return this.inventoryItems.map(function (item, index) {
              return {
                  'inventory-item': true,
                  'item-blue': (item.itemRarity == 1),
                  'item-purple': (item.itemRarity == 2),
                  'item-orange': (item.itemRarity == 3),
                  'inventory-item--selected': (self.selectedItem == index ? true : false)
              }
            });
            
        }
    },
    created() {
        if(!this.$auth.checkAuth()){
            this.$router.push('/login')
        }

        this.getInventory()
    },
    methods: {
        getInventory: function(){
            this.inventoryItems = [
                {
                    itemName: 'Sword',
                    itemLevelReq: 10,
                    itemType: 1,
                    itemBonus: 0,
                    itemRarity: 1,
                    itemHp: 0,
                    itemEnergy: 0,
                    itemStrength: 10,
                    itemAgility: 10,
                    itemDefense: 0,
                    itemEquipped: 0
                },
                {
                    itemName: 'Sword',
                    itemLevelReq: 10,
                    itemType: 1,
                    itemBonus: 0,
                    itemRarity: 2,
                    itemHp: 100,
                    itemEnergy: 0,
                    itemStrength: 20,
                    itemAgility: 0,
                    itemDefense: 0,
                    itemEquipped: 0
                },
                {
                    itemName: 'Sword',
                    itemLevelReq: 10,
                    itemType: 1,
                    itemBonus: 0,
                    itemRarity: 3,
                    itemHp: 0,
                    itemEnergy: 0,
                    itemStrength: 30,
                    itemAgility: 0,
                    itemDefense: 30,
                    itemEquipped: 0
                },
                {
                    itemName: 'Helmet',
                    itemLevelReq: 10,
                    itemType: 2,
                    itemBonus: 0,
                    itemRarity: 1,
                    itemHp: 0,
                    itemEnergy: 0,
                    itemStrength: 10,
                    itemAgility: 10,
                    itemDefense: 0,
                    itemEquipped: 0
                },
                {
                    itemName: 'Helmet',
                    itemLevelReq: 10,
                    itemType: 2,
                    itemBonus: 0,
                    itemRarity: 2,
                    itemHp: 100,
                    itemEnergy: 0,
                    itemStrength: 20,
                    itemAgility: 0,
                    itemDefense: 0,
                    itemEquipped: 0
                },
                {
                    itemName: 'Helmet',
                    itemLevelReq: 10,
                    itemType: 2,
                    itemBonus: 0,
                    itemRarity: 3,
                    itemHp: 0,
                    itemEnergy: 0,
                    itemStrength: 30,
                    itemAgility: 0,
                    itemDefense: 30,
                    itemEquipped: 0
                },
                {
                    itemName: 'Torso',
                    itemLevelReq: 10,
                    itemType: 3,
                    itemBonus: 0,
                    itemRarity: 1,
                    itemHp: 0,
                    itemEnergy: 0,
                    itemStrength: 10,
                    itemAgility: 10,
                    itemDefense: 0,
                    itemEquipped: 0
                },
                {
                    itemName: 'Torso',
                    itemLevelReq: 10,
                    itemType: 3,
                    itemBonus: 0,
                    itemRarity: 2,
                    itemHp: 100,
                    itemEnergy: 0,
                    itemStrength: 20,
                    itemAgility: 0,
                    itemDefense: 0,
                    itemEquipped: 0
                },
                {
                    itemName: 'Torso',
                    itemLevelReq: 10,
                    itemType: 3,
                    itemBonus: 0,
                    itemRarity: 3,
                    itemHp: 0,
                    itemEnergy: 0,
                    itemStrength: 30,
                    itemAgility: 0,
                    itemDefense: 30,
                    itemEquipped: 0
                },
                {
                    itemName: 'Gauntlets',
                    itemLevelReq: 10,
                    itemType: 4,
                    itemBonus: 0,
                    itemRarity: 1,
                    itemHp: 0,
                    itemEnergy: 0,
                    itemStrength: 10,
                    itemAgility: 10,
                    itemDefense: 0,
                    itemEquipped: 0
                },
                {
                    itemName: 'Gauntlets',
                    itemLevelReq: 10,
                    itemType: 4,
                    itemBonus: 0,
                    itemRarity: 2,
                    itemHp: 100,
                    itemEnergy: 0,
                    itemStrength: 20,
                    itemAgility: 0,
                    itemDefense: 0,
                    itemEquipped: 0
                },
                {
                    itemName: 'Gauntlets',
                    itemLevelReq: 10,
                    itemType: 4,
                    itemBonus: 0,
                    itemRarity: 3,
                    itemHp: 0,
                    itemEnergy: 0,
                    itemStrength: 30,
                    itemAgility: 0,
                    itemDefense: 30,
                    itemEquipped: 0
                },
                {
                    itemName: 'Greaves',
                    itemLevelReq: 10,
                    itemType: 5,
                    itemBonus: 0,
                    itemRarity: 1,
                    itemHp: 0,
                    itemEnergy: 0,
                    itemStrength: 10,
                    itemAgility: 10,
                    itemDefense: 0,
                    itemEquipped: 0
                },
                {
                    itemName: 'Greaves',
                    itemLevelReq: 10,
                    itemType: 5,
                    itemBonus: 0,
                    itemRarity: 2,
                    itemHp: 100,
                    itemEnergy: 0,
                    itemStrength: 20,
                    itemAgility: 0,
                    itemDefense: 0,
                    itemEquipped: 0
                },
                {
                    itemName: 'Greaves',
                    itemLevelReq: 10,
                    itemType: 5,
                    itemBonus: 0,
                    itemRarity: 3,
                    itemHp: 0,
                    itemEnergy: 0,
                    itemStrength: 30,
                    itemAgility: 0,
                    itemDefense: 30,
                    itemEquipped: 0
                },
                {
                    itemName: 'Amulet',
                    itemLevelReq: 10,
                    itemType: 6,
                    itemBonus: 0,
                    itemRarity: 1,
                    itemHp: 0,
                    itemEnergy: 0,
                    itemStrength: 10,
                    itemAgility: 10,
                    itemDefense: 0,
                    itemEquipped: 0
                },
                {
                    itemName: 'Amulet',
                    itemLevelReq: 10,
                    itemType: 6,
                    itemBonus: 0,
                    itemRarity: 2,
                    itemHp: 100,
                    itemEnergy: 0,
                    itemStrength: 20,
                    itemAgility: 0,
                    itemDefense: 0,
                    itemEquipped: 0
                },
                {
                    itemName: 'Amulet',
                    itemLevelReq: 10,
                    itemType: 6,
                    itemBonus: 0,
                    itemRarity: 3,
                    itemHp: 0,
                    itemEnergy: 0,
                    itemStrength: 30,
                    itemAgility: 0,
                    itemDefense: 30,
                    itemEquipped: 0
                },
                {
                    itemName: 'Runes',
                    itemLevelReq: 10,
                    itemType: 7,
                    itemBonus: 0,
                    itemRarity: 1,
                    itemHp: 0,
                    itemEnergy: 0,
                    itemStrength: 10,
                    itemAgility: 10,
                    itemDefense: 0,
                    itemEquipped: 0
                },
                {
                    itemName: 'Runes',
                    itemLevelReq: 10,
                    itemType: 7,
                    itemBonus: 0,
                    itemRarity: 2,
                    itemHp: 100,
                    itemEnergy: 0,
                    itemStrength: 20,
                    itemAgility: 0,
                    itemDefense: 0,
                    itemEquipped: 0
                },
                {
                    itemName: 'Runes',
                    itemLevelReq: 10,
                    itemType: 7,
                    itemBonus: 0,
                    itemRarity: 3,
                    itemHp: 0,
                    itemEnergy: 0,
                    itemStrength: 30,
                    itemAgility: 0,
                    itemDefense: 30,
                    itemEquipped: 0
                },
                {
                    itemName: 'Energy Potion',
                    itemLevelReq: 10,
                    itemType: 8,
                    itemBonus: 0,
                    itemRarity: 1,
                    itemHp: 0,
                    itemEnergy: 0,
                    itemStrength: 0,
                    itemAgility: 0,
                    itemDefense: 0,
                    itemEquipped: 0
                },
                {
                    itemName: 'Energy Potion',
                    itemLevelReq: 10,
                    itemType: 9,
                    itemBonus: 0,
                    itemRarity: 2,
                    itemHp: 0,
                    itemEnergy: 0,
                    itemStrength: 0,
                    itemAgility: 0,
                    itemDefense: 0,
                    itemEquipped: 0
                },
            ]
        },
        checkTableFilters: function(item){
            if(this.activeRarity != 0 && item.itemRarity != this.activeRarity){
                return false
            } else if (this.activeType != 0 && item.itemType != this.activeType){
                return false
            } else {
                return true
            }
        }
        
    }
    
}
</script>