var value = prompt("Nhập giá trị cần tìm trong mảng");
var x = [-3,5,1,3,2,10];
for(var i = 0; i < x.length; i++){
    if(value == x[i]){
        alert("Giá trị " + x[i] + " được tìm thấy ở vị trí số " + i);
    }
}