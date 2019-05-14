export default {
  icon:{
      icon20: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=",
    icon60: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAeFBMVEUAwAD///+U5ZTc9twOww7G8MYwzDCH4YcfyR9x23Hw+/DY9dhm2WZG0kbT9NP0/PTL8sux7LFe115T1VM+zz7i+OIXxhes6qxr2mvA8MCe6J6M4oz6/frr+us5zjn2/fa67rqB4IF13XWn6ad83nxa1loqyirn+eccHxx4AAAC/klEQVRo3u2W2ZKiQBBF8wpCNSCyLwri7v//4bRIFVXoTBBB+DAReV5sG6lTXDITiGEYhmEYhmEYhmEYhmEY5v9i5fsZGRx9PyGDne8f6K9cfd+mKXe1yNG/0CcqYE86AkBMBh66f20deBc7wA/1WFiTwvSEpBMA2JJOBsSLxe/4QEEaJRrASP8EVF8Q74GbmevKg0saa0B8QbwBdjRyADYxIhqxAZ++IKYtciPXLQVG+imw+oo4Bu56rjEJ4GYsvPmKOAB+xlz7L5aevqUXuePWVhvWJ4eWiwUQ67mK51qPj4dFDMlRLBZTqF3SDvmr4BwtkECu5gHWPkmDfQh02WLxXuvbvC8ku8F57GsI5e0CmUwLz1kq3kD17R1In5816rGvQ5VMk5FEtIiWislTffuDpl/k/PzscdQsv8r9qWq4LRWX6tQYtTxvI3XyrwdyQxChXioOngH3dLgOFjk0all56XRi/wDFQrGQU3Os5t0wJu1GNtNKHdPqYaGYQuRDfbfDf26AGLYSyGS3ZAK4S8XuoAlxGSdYMKwqZKM9XJMtyqXi7HX/CiAZS6d8bSVUz5J36mEMFDTlAFQzxOT1dzLRljjB6+++ejFqka+mXIe6F59mw22OuOw1F4T6lg/9VjL1rLDoI9Xzl1MSYDNHnPQnt3D1EE7PrXjye/3pVpr1Z45hMUdcACc5NVQI0bOdS1WA0wuz73e7/5TNqBPhQXPEFGJNV2zNqWI7QKBd2Gn6AiBko02zuAOXeWIXjV0jNqdKegaE/kJQ6Bfs4aju04lMLkA2T5wBSYPKDGF3RKhFYEa6A1L1LG2yacmsaZ6YPOSAMKNsO+N5dNTfkc5Aqe26uxHpx7ZirvgCwJpWq/lmX1hA7LyabQ34tt5RiJKXSwQ+0KU0V5xg+hZrd4Bn1n4EID+WkQdgLfRNtvil9SPfwy+WQ7PFBWQz6dGWZBLkeJFXZGCfLUjCgGgqXo5TuSu3cugdcTv/HjqnBTEMwzAMwzAMwzAMwzAMw/zf/AFbXiOA6frlMAAAAABJRU5ErkJggg=="
  },
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