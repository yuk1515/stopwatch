//http://ipl.sfc.keio.ac.jp/text/info1/nara/%E5%89%AF%E8%AA%AD%E6%9C%AC/7.%E9%9B%BB%E5%8D%93%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/Nana2.pdf
//参考URL


let result = document.getElementById('result');

 

//result画面をresult変数に
let operatorp = document.getElementById('operator');　//記号を識別するための場所の変数　　　　　
　//記号を打つ前の数字を保持しておくための場所
let place;
var shousuu = 0;

var toBeErased = 0; //連続計算対応に



//number(引数nを関数宣言)
//結果画面の数字が0と等しいならば結果画面の数字は 引数（1~9)となり結果画面に入力される。
function num(n) {　
 
  if (toBeErased == 1) {
 toBeErased = 0;         //連続演算
 result.value = "";
 } 
 
 
  if (operatorp.value == "＝") {
 operatorp.value = "";     //小数点が 2 つ入力されるのを防止
 result.value = "";
 }
 
 
 if (n == '.') {
 if (shousuu == 1) return;
 if (result.value == "") result.value = "0.";  //0.1を0.01に変える
 else result.value = result.value + ".";
 shousuu = 1;
 return;
 }
 
 
 
 
 if (result.value == "0") result.value = "";
 result.value = result.value + n;
 
}
//*+/-などをhtmlでkigouで役割を与えており、記号は結果画面に表示させないため別に宣言する。
//先で変数としたoperatorに記号の引数を＝とする。
//beforres別の場所に記号を保存するため記号が押された時は、結果画面に表示されているvalueを＝としもって行く。
//result.value ="";でクリアする。


function kigou(num) {
 //演算子が連続したら「＝」処理を呼び出してから、演算子登録
 if (operatorp.value != "") { equal(); } 
 
operatorp.value = num;
 place = result.value;
 result.value = "";
 toBeErased = 1;
 
}
function clrAll() {
 result.value = "";　　　　　//clrAllが押された時全てを""にする
 place = "";
 operatorp.value = "";
 shousuu = 0;
}


function equal() {
 if (operatorp.value == "+") { result.value = Number(place) + Number(result.value); }
 else if (operatorp.value == "-") { result.value = Number(place) - Number(result.value); }
 else if (operatorp.value == "*") { result.value = Number(place) * Number(result.value); }
 else if (operatorp.value == "/") { result.value = Number(place) / Number(result.value); }
 operatorp.value = "=";
 toBeErased = 1; 
 
} 
