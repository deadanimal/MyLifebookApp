<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title @click="lol()">Dashboard</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>

      <ExploreContainer name="Tab 1 page" />

    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { useMemoirStore } from "../stores/memoir";
//import { ref, onMounted } from 'vue';
import { ref } from 'vue';



export default {
  setup() {
    const count = ref(0)

    // expose to template and other options API hooks
    return {
      count
    }
  },

  components: {
    IonPage, IonHeader, IonToolbar, IonTitle, IonContent
  },

  mounted() {
    const store = useMemoirStore();
    store.createToken();
    console.log(this.count) // 0
    setTimeout(()=> {
      store.lol();
    }, 5000)
  }
}

</script>
