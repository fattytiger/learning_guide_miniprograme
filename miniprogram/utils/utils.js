export default {
  array_option: {
    arr_push(len,arr_two){
      let arr=new Array();
      for (let i = 0; i < len; i++) {
        arr[i] = new Array();
        for(let j = 0;j<arr_two[i].length;j++){
         arr[i][j] = false
        }
      }
      return arr
    },
    arr_splice(len,len_two,index){
      // for(let i=0;i<len;i++){
      //   arr[index].splice(i,1,true)
      // }
      // return arr
      let arr = new Array()
      for(let i=0;i<len;i++){
        arr[i]=new Array();
        for(let j=0;j<len_two;j++){
          arr[i][j]=false
        }
      }
      for(let k=0;k<len_two;k++){
        arr[index].splice(k,1,true)
      }
      return arr;
    },
    arr_splice_reverse(len,len_two){
      let arr = new Array()
      for (let i = 0; i < len; i++) {
        arr[i] = new Array();
        for (let j = 0; j < len_two; j++) {
          arr[i][j] =false
        }
      }
      return arr;
    },

    arr_push_one(len){
      let arr = new Array()
      for(let i=0;i<len;i++){
        arr.push(1)
      }
      return arr
    },
    arr_splice_flag(len,index){
      let new_arr = new Array()
      for(let i=0;i<len;i++){
        new_arr[i]=1
      }
      new_arr.splice(index,1,0)
      return new_arr;

    },
    arr_splice_flag_reverse(len,index){
      let new_arr = new Array()
      for (let i = 0; i < len; i++) {
        new_arr[i] = 1
      }
      new_arr.splice(index, 1, 1)
      return new_arr;
    }
  }
}