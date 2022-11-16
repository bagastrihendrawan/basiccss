const tabel = [];
tabel[1] = {
    nama: "Wendy",
    gender: "male",
    age: 23,
    email: "wendy@dingdong.com",
    favoriteColor: ["blue", "black", "gray"],
    isHavePet: "no",
    education: [
        {
            nama: "SD 02",
            city: "jakarta",
            graduate: 2010,
        },
        {
            nama: "SMP 03",
            city: "bogor",
            graduate: 2013,
        },
        {
            nama: "SMA 01",
            city: "surabaya",
            graduate: 2016,         
        },
        {
            nama: "universitas maju",
            city: "tangerang",
        },
    ],
    favoriteRestaurant: [
        {
            nama: "tempura",
        },
        {
            nama: "bento",
        },
        {
            nama: "sushi",
        },
        {
            nama: "pancake",
        },
        {
            nama: "padang",
        },
        {
            nama: "ketsu",
        },
        {
            nama: "geprek",
        },
        {
            nama: "egy",
        },
    ],
};

tabel[0] = {
    nama: "Monica",
    gender: "female",
    age: 17,
    email: "monica@dingdong.com",
    favoriteColor: ["yellow", "pink", "white", "purple"],
    isHavePet: "yes",
    education: [
        {
            nama: "SD 01",
            city: "jakarta",
            graduate: 2016,
        },
        {
            nama: "SMP 02",
            city: "jakarta",
            graduate: "2019",
        },
        {
            nama: "SMA 03",
            city: "tangerang",
            
        },
    ],
    favoriteRestaurant: [
        {
            nama: "bento",
        },
        {
            nama: "sushi",
        },
        {
            nama: "pancake",
        },
        {
            nama: "eggy",
        },
        {
            nama: "tempura",
        },
        {
            nama: "bento",
        },
        {
            nama: "padang",
        },
        {
            nama: "tteok",
        },
    ],
   
    
};
console.log("nama : " + tabel[1].nama);
console.log("sekolah : " + tabel[1].education[2].nama);
console.log("city : " + tabel[1].education[2].city);
console.log("makanan favorit : " + tabel[1].favoriteRestaurant[5].nama);



// const response = {
//     statusCode: 200,
//     endpoint: 'GET /api/v1/dummies',
//     body: {
//       message: 'Hello World',
//       data: [
//         { id: 1, name: 'Andre', age: 20 },
//         { id: 2, name: 'Bella', age: 21 },

//      ],
//     totalData: 100,
//     responseTime: '1506ms',
//   }
// };
// console.log(response);