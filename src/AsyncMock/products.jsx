
const prods =[
    {id:0,name:"Masaje Descontracturante",description:"",stock:3 , photo :"https://img.freepik.com/free-psd/skincare-tube-mockup-psd-box-beauty-brands_53876-115961.jpg?w=740&t=st=1675745931~exp=1675746531~hmac=22179da6252ccb2fe5a6fdba64ba5735b3e7d4ad41a3bd10ec568f592254ca8d", precio:10, categoria :"Masajes"},
    {id:1,name:"Masaje Relajante",description:"",stock:2 , photo :"https://img.freepik.com/free-psd/skincare-tube-mockup-psd-box-beauty-brands_53876-115961.jpg?w=740&t=st=1675745931~exp=1675746531~hmac=22179da6252ccb2fe5a6fdba64ba5735b3e7d4ad41a3bd10ec568f592254ca8d", precio:100, categoria :"Masajes"},
    {id:4,name:"Masaje Homeopatico",description:"",stock:1 , photo :"https://img.freepik.com/free-psd/skincare-tube-mockup-psd-box-beauty-brands_53876-115961.jpg?w=740&t=st=1675745931~exp=1675746531~hmac=22179da6252ccb2fe5a6fdba64ba5735b3e7d4ad41a3bd10ec568f592254ca8d", precio:1000, categoria :"Masajes"},
  
    {id:6,name:"Depilacion una zona",description:"",stock:3 , photo :"https://img.freepik.com/free-psd/hand-with-cosmetic-pod-mockup_53876-98643.jpg?w=740&t=st=1675745946~exp=1675746546~hmac=41257250841670ec7115430f9be935131c3a5a4ca616daea092c9276f21254ab",precio:50, categoria :"Depilacion"},
    {id:2,name:"Depilacion cavado profundo",description:"",stock:1 , photo :"https://img.freepik.com/free-psd/hand-with-cosmetic-pod-mockup_53876-98643.jpg?w=740&t=st=1675745946~exp=1675746546~hmac=41257250841670ec7115430f9be935131c3a5a4ca616daea092c9276f21254ab",precio:500, categoria :"Depilacion"},
    {id:5,name:"Depilacion FullBody",description:"",stock:2 , photo :"https://img.freepik.com/free-psd/hand-with-cosmetic-pod-mockup_53876-98643.jpg?w=740&t=st=1675745946~exp=1675746546~hmac=41257250841670ec7115430f9be935131c3a5a4ca616daea092c9276f21254ab",precio:5000, categoria :"Depilacion"},
     
    {id:3,name:"Spa simple",description:"",stock:2, photo:"https://img.freepik.com/free-psd/glossy-plastic-cosmetic-pump-bottle-branding-mockup_47987-6759.jpg?w=740&t=st=1675745955~exp=1675746555~hmac=49b95ad851a56510b10a2e6917e0ca536f5365c2030ed32549e04f6c6ee94bed",precio:30, categoria : "Spa"},
    {id:7,name:"Spa Massage",description:"",stock:0, photo:"https://img.freepik.com/free-psd/glossy-plastic-cosmetic-pump-bottle-branding-mockup_47987-6759.jpg?w=740&t=st=1675745955~exp=1675746555~hmac=49b95ad851a56510b10a2e6917e0ca536f5365c2030ed32549e04f6c6ee94bed",precio:300, categoria : "Spa"},
    {id:8,name:"Spa Jacuzzi",description:"",stock:2, photo:"https://img.freepik.com/free-psd/glossy-plastic-cosmetic-pump-bottle-branding-mockup_47987-6759.jpg?w=740&t=st=1675745955~exp=1675746555~hmac=49b95ad851a56510b10a2e6917e0ca536f5365c2030ed32549e04f6c6ee94bed",precio:3000, categoria : "Spa"}
    
  ]
   

  export const getProductos = () => {
   return new Promise((resolve,reject) => {
    setTimeout(() => {
       
       resolve(prods)
       
     }, 1500)
    });
 };

   export const getProducto = (id) => {
      return new Promise((resolve,reject) => {
      setTimeout(() => {
         const producto = prods.find(productoss=> productoss.id = id)
         resolve(producto);
         
      }, 1500)
      });
   };

 


  
 