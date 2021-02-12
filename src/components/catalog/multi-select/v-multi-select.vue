<template>
  <div id="v-multi-select">
        <multiselect
          @input="UPDATE_VALUE_ACTION"
          :options="options" 
          :value="VALUE"
          :multiple="true" 
          :close-on-select="false" 
          :clear-on-select="false" 
          :preserve-search="true" 
          placeholder="Категории" 
          label="value" 
          track-by="value" 
          :selectLabel="selectLabel"
          :selectedLabel="selectedLabel"
          :deselectLabel="deselectLabel"
          :preselect-first="false">
        <template 
          slot="selection" 
          slot-scope="{ values,  isOpen }">
          <span 
            class="multiselect__single" 
            v-if="values.length &amp;&amp; !isOpen">Выбрано: {{ values.length }} </span>
        </template>
        <template slot="noResult">
          <span>Нет результатов</span>
        </template>
        <pre class="language-json"><code>{{ VALUE  }}</code></pre>
        
  </multiselect>
  </div>
</template>

<script>
import {mapGetters, mapActions, mapState} from 'vuex'
import Multiselect from 'vue-multiselect'

export default{
  name: 'v-multi-select',
  components: {
    Multiselect
  },
  data(){
    return{
      selectLabel: 'Выбрать',
      selectedLabel: 'Выбрано',
      deselectLabel: 'Удалить',
      
    }
  },
  methods:{
    ...mapActions([
      'UPDATE_VALUE_ACTION'
    ])
  },
  computed: {
    ...mapGetters([
      'VALUE'
    ]),
    ...mapState([
      'options'
    ])
  }
}
</script>

<style lang="scss">
#v-multi-select{
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 0px;
}

// .multiselect{
//   //всплывающий блок списка
//   &__content-wrapper{
//   }
//   /*Отдельная ul */
//   &__content{
//   }
//   &__spinner{
//   }
//   /*Дефолтный инпут*/
//   &__input{//   }
//   /*Отдельная li*/
//   &__element{
//   }
//   &__single{
//   }
// }
</style>
