function nextGreaterElement(arr1,arr2) {
  let st = [],
    ans = [],
    nextGreater = new Array(arr2.length).fill(-1);
  for (let i = arr2.length - 1; i >= 0; i--) {
    while (st.length > 0 && st[st.length - 1] <= arr2[i]) {
      st.pop();
    }

    if (st.length > 0) {
      nextGreater[i] = st[st.length - 1];
    }

    st.push(arr2[i]);
  }

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        ans.push(nextGreater[j]);
        break;
      }
    }
  }

  console.log(ans);
}
nextGreaterElement([4, 1, 2], [1, 3, 4, 2]);