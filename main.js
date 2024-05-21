//   1-masala

            //   String.prototype.trm = function() {
            //         return this.replace(/^\s+|\s+$/g, '');
            //     };

            //     let str1 = "   Suyunov , Ilyos   ";
            //     let str2 = "   Suyunov ,  Ilyos programmer   ";

            //     console.log(str1.trm()); 
            //     console.log(str2.trm()); 




// 2-masala

            // String.prototype.upperCase = function() {
   
            //     let result = '';
            //     for (let i = 0; i < this.length; i++) {
            //         let charCode = this.charCodeAt(i);
            //         if (charCode >= 97 && charCode <= 122) {
            //             result += String.fromCharCode(charCode - 32);
            //         } else {
            //             result += this[i];
            //         }
            //     }
            //     return result;
            // };

            // let str1 = "suyunov ilyos!";
            // let str2 = "programmer";

            // console.log(str1.upperCase()); 
            // console.log(str2.upperCase()); 



// 3-masala
            // String.prototype.has = function(substring) {
            //     return this.indexOf(substring) !== -1;
            // };
            
            // let str = "Suyunov Ilyos";
            // console.log(str.has("Suyunov")); 
            // console.log(str.has("ilyos")); 


// 4-masala

            // String.prototype.cut = function(start, end) {
                
            //     let startIndex = start < 0 ? Math.max(0, this.length + start) : Math.min(this.length, start);
            //     let endIndex = end < 0 ? Math.max(0, this.length + end) : Math.min(this.length, end);
            
            //     let slicedString = '';
            //     for (let i = startIndex; i < endIndex; i++) {
            //         slicedString += this[i];
            //     }
            //     return slicedString;
            // };
            
            // let str = "Suyunovdev";
            // console.log(str.cut(3, 9)); 
            


// 5-masala
        // String.prototype.rpt = function(count) {
        //     if (count < 0) throw new RangeError('xato');
            
        //     count = Math.floor(count);
            
        //     let rptString = '';
            
        //     for (let i = 0; i < count; i++) {
        //         rptString += this;
        //     }
            
        //     return rptString;
        // };
        // let myString = "hello";
        // console.log(myString.rpt(3)); 



// Number constructoriga quyidagi metodlarni qo’shing.


//1-misol

        // Number.prototype.fixed = function(digits) {
        //     if (digits === undefined) {
        //         digits = 0;
        //     }

        //     let multiplier = Math.pow(10, digits);
        //     let fixedNumber = Math.round(this * multiplier) / multiplier;
            
        //     let fixedString = fixedNumber.toString();
        //     return fixedString;
        // };

        // let myNumber = 12.3456;
        // console.log(myNumber.fixed(2)); 
        // console.log(myNumber.fixed(0)); 




//2-misol

        // Number.prototype.round = function() {
        //     if (this % 1 >= 0.5) {
        //         return Math.floor(this) + 1;
        //     } else {
        //         return Math.floor(this);
        //     }
        // };

        // let num1 = 12.3456;
        // console.log(num1.round()); 
        // let num2 = -12.5;
        // console.log(num2.round()); 




//3-misol

        // Number.prototype.isSquare = function() {
        //     let x = this;
        //     let reult = x / 2;
            

        //     while (Math.abs(reult * reult - this) ) {
        //         reult = (reult + this / reult) / 2;
        //     }

        //     return reult;
        // };

        // let num1 = 16;
        // console.log(num1.isSquare()); 
        // let num2 = 12;
        // console.log(num2.isSquare()); 

//4-misol

            // Number.prototype.count = function() {
            //     let num = 0;
            //     let result = this;

            //     do {
            //         num++;
            //         result = Math.floor(result / 10);
            //     } while (result > 0);

            //     return num;
            // };

            // let isnum1 = 12345;
            // console.log(isnum1.count());

            // let isnum2 = 6789;
            // console.log(isnum2.count()); 





//5-masala;

            // Number.prototype.sum = function() {
            
            //     let sum = 0;
            //     let numString = this.toString();
            //     for (let i = 0; i < numString.length; i++) {
            //         sum += parseInt(numString[i]);
            //     }
            //     return sum;
            // };

            // let num1 = 12345;
            // let num2 = 987654321;

            // console.log(num1.sum()); 
            // console.log(num2.sum()); 


// Array constructoriga quyidagi metodlarni custom variantini qo’shing.

// 1-misol
            // Array.prototype.customMap = function(callback) {
            //     let result = [];
            //     for (let i = 0; i < this.length; i++) {
            //         result.push(callback(this[i], i, this));
            //     }
            //     return result;
            // };
            // let arr = [1, 2, 3, 4, 5,6];
            // let natija = arr.customMap(function(item) {
            //     return item * item;
            // });

            // console.log(natija); 




// 2-masala

// Array.prototype.everyCustom = function(callback) {
//     for (let i = 0; i < this.length; i++) {
//         if (!callback(this[i], i, this)) {
//             return false;
//         }
//     }
//     return true;
// };
// let arr = [2, 4, 6, 8, 10];
// let result = arr.everyCustom(function(item) {
//     return item % 2 === 0;
// });
// console.log(result); 


// 3--masala
                // Array.prototype.customReduce = function(qaytaruvchi, value) {
                //     let sum = value !== undefined ? value : this[0];
                //     let strindex = value !== undefined ? 0 : 1;

                //     for (let i = strindex; i < this.length; i++) {
                //         sum = qaytaruvchi(sum, this[i], i, this);
                //     }

                //     return sum;
                // };

                // let arr = [1, 2, 3, 4, 5];

                // let sum = arr.customReduce(function(sum, currentValue) {
                //     return sum + currentValue;
                // }, 0);

                // console.log(sum); 

// 4-masala

            // Array.prototype.customFindIndex = function(callback) {
            //     for (let i = 0; i < this.length; i++) {
            //         if (callback(this[i], i, this)) {
            //             return i;
            //         }
            //     }
            //     return -1; 
            // };

            // let arr = [1, 2, 3, 4, 5];

            // let index = arr.customFindIndex(function(item) {
            //     return item === 3;
            // });

            // console.log(index); 


// 5-masala

        // Array.prototype.customSplice = function(startIn, del, ...items) {
        //     startIn = startIn < 0 ? this.length + startIn : startIn;
        //     del = del || 0;

        //     let deletedItems = this.slice(startIn, startIn + del);
        //     let result = this.slice(startIn + del);

        //     this.length = startIn;
        //     this.push(...items, ...result);

        //     return deletedItems;
        // };

        // let arr = [1, 2, 3, 4, 5];

        // let deletedItems = arr.customSplice(1, 2, 6, 7);

        // console.log(deletedItems); 
        // console.log(arr); 





// ///////////Constructorlar yaratilsin.///////////////

// Animal konstruktorini yaratish

// 1-masala
// function Animal(name, speed,limitAge) {
//     this.name = name;
//     this.speed = speed;
//     this.limitAge=limitAge
//   }
  
//   Animal.prototype.info = function () {
//     return `${this.name} ${this.speed} ${this.limitAge}`;
//   };
  
//   let lion = new Animal("simba", "21","15");
//   let horse = new Animal("qorabayr", 15,3);
  
//   console.log(lion);
//   console.log(horse);





// 2-masala
// function Student(name, course ,years,unversity) {
//     this.name = name;
//     this.course = course;
//     this.year = years;
//     this.unversity = unversity;
//   }
  
//   Student.prototype.leftYears = function () {
//     return `${this.year} `;
//   };
  
//   let info = new Student("Jane",4,1,"akfa");
  
//   console.log(info);
  


// 3-masala

// function Person (name,age,currentYear){
//     this.name=name;
//     this.age=age;
//     this.currentYear=currentYear;
//     this.getBirthYear=currentYear-age;
// }
// Person.prototype.getBirthYear=function(){
//     return `${this.getBirthYear}`
// }
// let info = new Person ("Ilyos",21,2024)
// console.log(info)


// 4-masala

// function Employee (name,salary,workName){
//     this.name=name
//     this.salary=salary
//     this.workName=workName
//     this.result=0.3*salary
//     this.usuvchiSalary=this.result+salary
// }

// Employee.prototype.usuvchiSalary=function(){
//     return `${this.usuvchiSalary}`
// }

// let info=new Employee("Suyunov Ilyos",3451000,"Programmer")
// console.log(info);



//5-masala

// function  Rectangle(width,height){
//     this.width=width
//     this.height=height
//     this.getArea=width*height
//     this.getPerimeter=2*(width+height)
// }

// Rectangle.prototype.getArea=function(){
//     return `${this.getArea}`
// }
// Rectangle.prototype.getPerimeter=function(){
//     return `${this.getPerimeter}`
// }

// let info=new Rectangle(8,15)

// console.log(info);

