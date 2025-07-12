function collectingTappingWater(height) {
  let maxLeft = height[0],
    maxRight = height[height.length - 1],
    left = new Array(height.length),
    right = new Array(height.length);
  left[0] = maxLeft;
  (right[right.length - 1] = maxRight), (ans = 0);

  for (let i = 1; i < height.length; i++) {
    if (maxLeft < height[i]) {
      maxLeft = height[i];
      left[i] = height[i];
    } else {
      left[i] = maxLeft;
    }
  }
  for (let i = height.length - 2; i >= 0; i--) {
    if (maxRight < height[i]) {
      maxRight = height[i];
      right[i] = height[i];
    } else {
      right[i] = maxRight;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    ans += Math.min(left[i], right[i]) - height[i];
  }
  return ans;
}
console.log(collectingTappingWater([4,2,0,3,2,5]))


// function collectingTappingWater(height) {
//   let l = 0,
//     r = height.length - 1,
//     maxL = 0,
//     maxR = 0,
//     ans = 0;
//   while (l <= r) {
//     if (height[l] <= height[r]) {
//       if (height[l] >= maxL) maxL = height[l];
//       else ans += maxL - height[l];
//       l++;
//     } else {
//       if (height[r] >= maxR) maxR = height[r];
//       else ans += maxR - height[r];
//       r--;
//     }
//   }
//   return ans;
// }
// console.log(collectingTappingWater([4, 2, 0, 3, 2, 5]));
