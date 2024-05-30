const products = [
    {
        "id": "124e13b9-2d54-4b2f-a74d-a77b362d6ead",
        "name": "ULTRABOOST 22 SHOES",
        "price": 420,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Ultraboost_22_Shoes_Black_GZ0127_01_standard.jpg",
        "discount": 5
    },
    {
        "id": "13cbc7ed-a61b-4883-9d42-82d7d8642b86",
        "name": "LUNAR NEW YEAR ULTRABOOST DNA SHOES",
        "price": 196,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2cee64414e1f4f31baf1ae270099d950_9366/Lunar_New_Year_Ultraboost_DNA_Shoes_Black_GZ6074_01_standard.jpg",
        "discount": 10
    },
    {
        "id": "307f166f-1d04-4573-bc37-2f461ea9d4f7",
        "name": "SUPERNOVA SHOES",
        "price": 245,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/69cbc73d0cb846889f89acbb011e68cb_9366/Supernova_Shoes_Black_S42722_01_standard.jpg",

    },
    {
        "id": "4bf9798f-63bc-4a83-b0c6-6a3b816fe922",
        "name": "LITE RACER ADAPT 3.0 SHOES",
        "price": 229,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/96a5f085fedf4e678095abad01056711_9366/Lite_Racer_Adapt_3.0_Shoes_Black_FX8802_01_standard.jpg",
        "discount": 20
    },
    {
        "id": "9496d72b-04ec-41f8-9bc3-0a7c9697be8e",
        "name": "4DFWD SHOES",
        "price": 287,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8c5d1994dfd343e28567ad4400dd351d_9366/4DFWD_Shoes_Black_Q46447_01_standard.jpg",


    },
    {
        "id": "6e5593d3-557b-43cf-8dab-a5140faedfb0",
        "name": "KAPTIR 2.0 SHOES",
        "price": 138,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0846e90b15144861b33dacf500e3cfd1_9366/Kaptir_2.0_Shoes_White_H00276_01_standard.jpg",
        "discount": 3
    },
    {
        "id": "9c0c13c2-54e4-4001-809b-afbd9d84037d",
        "name": "4DFWD PULSE SHOES",
        "price": 226,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9a8256bb7ca34da49ff8ad5600bb2812_9366/4DFWD_Pulse_Shoes_White_Q46221_01_standard.jpg",
        "discount": 9

    },
    {
        "id": "c9d1f410-d28f-49d9-9b01-d759b5acbeea",
        "name": "ZX 1K BOOST SHOES",
        "price": 319,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0e540bae86d5456aa034ada300ebf46c_9366/ZX_1K_Boost_Shoes_Grey_H00430_01_standard.jpg",


    },
    {
        "id": "1564a06b-692f-4f2e-8413-9c8a1cc2da77",
        "name": "NMD_R1 V2 SHOES",
        "price": 260,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c2a18c4e3f104d52a697ad6a01477bb7_9366/NMD_R1_V2_Shoes_Black_GX6367_01_standard.jpg",
        "discount": 7
    },
    {
        "id": "ac44095f-230e-4502-8816-dea3eaae8320",
        "name": "NMD_R1 PRIMEBLUE SHOES",
        "price": 437,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0e03e7a2a9cb44dfac2bad6a00f95888_9366/NMD_R1_Primeblue_Shoes_White_GZ9261_01_standard.jpg",
        "discount": 6
    },
    {
        "id": "d0803f97-966f-4296-ad31-a7f70fc86fab",
        "name": "TIRO TRACK PANTS",
        "price": 146,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9c7058d8677742ac8519ac3f009cdcf4_9366/Tiro_21_Track_Pants_Black_GH7305_21_model.jpg",
    },
    {
        "id": "8a5b4a9c-76ea-4fbb-9c70-9548de4eab01",
        "name": "TIRO 21 TRACK PANTS",
        "price": 109,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9c7058d8677742ac8519ac3f009cdcf4_9366/Tiro_21_Track_Pants_Black_GH7305_21_model.jpg",
        "discount": 7
    },
    {
        "id": "b357e19b-4dd9-4fc7-b5c0-9ed5255464ba",
        "name": "PRIMEBLUE SST TRACK PANTS",
        "price": 63,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/52b5fde5829a4a04820dacf50127b969_9366/Adicolor_Classics_Primeblue_SST_Track_Pants_Blue_H06714_21_model.jpg",

    },

];

