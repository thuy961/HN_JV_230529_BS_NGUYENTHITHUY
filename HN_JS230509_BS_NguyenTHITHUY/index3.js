// Bài 4 : Viết một chương sắp xếp các phần tử trong mảng theo thứ tự giảm dần bằng 2 cách: sử
// dụng và không sử dụng hàm sort [30 điểm]
// ● Đầu vào: 1 mảng bất kỳ
// ● Đầu ra: Mảng mới với số đã được sắp xếp theo thứ tự giảm dần
// ● Ví dụ: Cho arr=[3, 25, 38, 49, 12]; In ra arr=[49,38,25,12,3]


// let x =[3, 25, 38, 49, 12]

// let first = 0;
// let last = x.length-1;
// while(first< last){
//     let a = x[first];
//     x[first] = x[last];
//     x[last] = a;
//     first++;
//     last--;
// }
// document.write(x);



let number = [3, 25, 38, 49, 12];
number.sort(function(a, b) {
    return b-a;
    
});
console.log(number);
 