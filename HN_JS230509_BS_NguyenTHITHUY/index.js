// Bài 1: Cho 1 mảng các phần tử in ra phần tử lớn nhất trong mảng [10 điểm]
// ● Đầu vào: 1 mảng
// ● Đầu ra: giá trị lớn nhất của mảng
// ● Ví dụ: [3,5,88,99,76,8,4,5,85,63] in ra 99

let arr =  [3,5,88,99,76,8,4,5,85,63];
let max = arr[0];
let index = 0;
for(let i =1; i < arr.length;i++){
    if(arr[i]>max){
        max = arr[i];
        index = i;
    }
}
console.log('gia tri lon nhat la:' + max );


