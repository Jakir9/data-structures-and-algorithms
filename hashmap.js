listStyle: // let nums = [5, 3, 2, 5, 7, 5, 12];
// let target = 17;

// var twoSumFast = function (nums, target) {
//   let mp = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     let diff = target - nums[i];

//     if (mp.has(diff)) {
//       console.log([i, mp.get(diff)]);
//       return [i, mp.get(diff)];
//     }

//     mp.set(nums[i], i);
//   }
// };

// var twoSumSlow = function (nums, target) {

//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 1 + i; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j]
//             }
//         }
//     }

// };

// twoSumSlow(nums, target);
// twoSumFast(nums, target);



//iterators for map
let hashMap = new Map();

hashMap.set('Muhammed', 'Ali');
hashMap.set('Mike', 'Tyson');
hashMap.set('Connor', 'Mcgregor');
hashMap.set('Jon', 'Jones');
hashMap.set('Khabib', 'Nurmagomedov');

const printFighters = hashMap[Symbol.iterator]();

for(const elements of printFighters) {
    console.log(elements);
}

//clear hashmap
console.log(`size of map: ${hashMap.size}`);
hashMap.clear();
console.log(`size of map: ${hashMap.size}`);

//delete from hashmap
hashMap.set('Muhammed', 'Ali');
hashMap.set('Mike', 'Tyson');

console.log(hashMap.delete('Mike'));
// Expected result: true
// True indicates successful removal

console.log(hashMap.has('Mike'));
// Expected result: false






