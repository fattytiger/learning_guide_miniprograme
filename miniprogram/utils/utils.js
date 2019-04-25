export default {
  array_option: {
    arr_push(len, arr_two) {
      let arr = new Array();
      for (let i = 0; i < len; i++) {
        arr[i] = new Array();
        for (let j = 0; j < arr_two[i].length; j++) {
          arr[i][j] = false
        }
      }
      return arr
    },


    arr_splice(len, len_two, index) {
      // for(let i=0;i<len;i++){
      //   arr[index].splice(i,1,true)
      // }
      // return arr
      let arr = new Array()
      for (let i = 0; i < len; i++) {
        arr[i] = new Array();
        for (let j = 0; j < len_two; j++) {
          arr[i][j] = false
        }
      }
      for (let k = 0; k < len_two; k++) {
        arr[index].splice(k, 1, true)
      }
      return arr;
    },
    arr_splice_reverse(len, len_two) {
      let arr = new Array()
      for (let i = 0; i < len; i++) {
        arr[i] = new Array();
        for (let j = 0; j < len_two; j++) {
          arr[i][j] = false
        }
      }
      return arr;
    },

    arr_push_one(len) {
      let arr = new Array()
      for (let i = 0; i < len; i++) {
        arr.push(1)
      }
      return arr
    },
    arr_splice_flag(len, index) {
      let new_arr = new Array()
      for (let i = 0; i < len; i++) {
        new_arr[i] = 1
      }
      new_arr.splice(index, 1, 0)
      return new_arr;

    },
    arr_splice_flag_reverse(len, index) {
      let new_arr = new Array()
      for (let i = 0; i < len; i++) {
        new_arr[i] = 1
      }
      new_arr.splice(index, 1, 1)
      return new_arr;
    }
  },
  check_test: {
    check_arr(arr_1, arr_2) {
      let err = new Array()
      for (let i = 0; i < arr_1.length; i++) {
        err[i] = ""
      }
      for (let i = 0; i < arr_1.length; i++) {
        if (arr_1[i] == arr_2[i]) {} else {
          err[i] = arr_1[i]
        }
      }
      return err;
    }
  },
  calculate_progress: {
    calculate(pre) {
      if (pre >= 0 && pre <= 17) {
        return 0
      } else if (pre > 17 && pre <= 34) {
        return 1
      } else if (pre > 34 && pre <= 51) {
        return 2
      } else if (pre > 51 && pre <= 68) {
        return 3
      } else if (pre > 68 && pre <= 85) {
        return 4
      } else if (pre > 85) {
        return 5
      }
    },
    badage_progress(arr) {
      arr[0] < 17 ? arr.splice(0, 1, (arr[0] / 17) * 100) : arr.splice(0, 1, 100)
      arr[1] < 34 ? arr.splice(1, 1, (arr[1] / 34) * 100) : arr.splice(1, 1, 100)
      arr[2] < 51 ? arr.splice(2, 1, (arr[2] / 51) * 100) : arr.splice(2, 1, 100)
      arr[3] < 68 ? arr.splice(3, 1, (arr[3] / 68) * 100) : arr.splice(3, 1, 100)
      arr[4] < 85 ? arr.splice(4, 1, (arr[4] / 85) * 100) : arr.splice(4, 1, 100)
      arr[5] < 100 ? arr.splice(5, 1, (arr[5] / 100) * 100) : arr.splice(5, 1, 100)
      return arr
    }
  }
}