<template>
    <main>
        <div class="navbar">
            <div class="navbar-items">
                <ul>
                    <li :class="{'navbar-items--active': activeTab === 1 }" @click="activeTab = 1">
                        <p>Inventory</p>
                    </li>
                    <li :class="{'navbar-items--active': activeTab === 2 }" @click="activeTab = 2">
                        <p>Loadout</p>
                    </li>
                </ul>
            </div>
        </div>
        <inventory v-if="activeTab === 1"></inventory>
        <loadout v-if="activeTab === 2"></loadout>
    </main>
</template>
<script>
import axios from 'axios'
import InventoryPage__inventory from './InventoryPage__inventory'
import InventoryPage__loadout from './InventoryPage__loadout'

export default {
    components: {
      'inventory': InventoryPage__inventory,
      'loadout': InventoryPage__loadout
    },
    data() {
      return {
          activeTab: 1,
      }
    },
    created() {
        if(!this.$auth.checkAuth()){
            this.$router.push('/')
        }
    },
}
</script>