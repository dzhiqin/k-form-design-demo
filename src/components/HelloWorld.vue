<template>
  <div class="hello">
    <!-- <k-form-design @save="handleSave"></k-form-design> -->
    <k-form-build :value="jsonData"></k-form-build>
  </div>
</template>

<script>
// import { jsonData2 as jsonData } from './mockJsonData';
import { jsonData } from './mockJsonData';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      jsonData:{},
    }
  },
  methods: {
    handleSave(value){
      console.log('value:',value);
    },
    changeSpanInList(list,result=[]) {
      result = list.map(listItem => {
        if(listItem?.type === 'grid' && listItem.columns?.length){
          return {...listItem,columns: this.changeSpanInList(listItem.columns), span: 24}
        }else if(listItem?.span && listItem?.list.length){
          return {...listItem, list: this.changeSpanInList(listItem.list), span: 24}
        }else{
          return listItem
        }
        
      })
      return result
    }
  },
  mounted() {
    console.log('onMounted');
    // const res = this.changeSpanInList(this.listData)
    this.jsonData = {...jsonData,list: this.changeSpanInList(jsonData.list)}
    console.log(this.jsonData.list);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  padding: 16px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
