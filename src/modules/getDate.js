const getDate = () => {
  let db=[
      {
        "id": 1,
        "title": "Игровая приставка Sony PlayStation 3 Super Slim",
        "price": 16499,
        "sale": true,
        "img": "https://cdn1.ozone.ru/multimedia/c400/1027495663.jpg",
        "hoverImg": "https://cdn1.ozone.ru/multimedia/c400/1028469540.jpg",
        "category": "Игровая приставка"
      },
      {
        "id": 2,
        "title": "Игровая приставка Xbox One X",
        "price": 39990,
        "sale": false,
        "img": "https://cdn1.ozone.ru/multimedia/c400/1024358491.jpg",
        "category": "Игровая приставка"
      },
      {
        "id": 3,
        "title": "Игровая приставка Xbox One S",
        "price": 23411,
        "sale": true,
        "img": "https://cdn1.ozone.ru/multimedia/c400/1024822131.jpg",
        "hoverImg": "https://cdn1.ozone.ru/multimedia/c400/1024822128.jpg",
        "category": "Игровая приставка"
      },
      {
        "id": 4,
        "title": "Игровая приставка Nintendo Switch",
        "price": 24751,
        "sale": false,
        "img": "https://cdn1.ozone.ru/multimedia/c400/1021386685.jpg",
        "hoverImg": "https://cdn1.ozone.ru/multimedia/c400/1026072683.jpg",
        "category": "Игровая приставка"
      },
      {
        "id": 5,
        "title": "Игровая приставка Sega Retro Genesis HD",
        "price": 3624,
        "sale": true,
        "img": "https://cdn1.ozone.ru/multimedia/c400/1024928305.jpg",
        "hoverImg": "https://cdn1.ozone.ru/multimedia/c400/1024928306.jpg",
        "category": "Игровая приставка"
      },
      {
        "id": 6,
        "title": "Игровая приставка Dendy Junior",
        "price": 1551,
        "sale": true,
        "img": "https://cdn1.ozone.ru/multimedia/c400/1021877092.jpg",
        "hoverImg": "https://cdn1.ozone.ru/multimedia/c400/1021877092.jpg",
        "category": "Игровая приставка"
      },
      {
        "id": 7,
        "title": "Игровая приставка Sony PlayStation Classic",
        "price": 10445,
        "sale": false,
        "img": "https://cdn1.ozone.ru/multimedia/c400/1025222877.jpg",
        "hoverImg": "https://cdn1.ozone.ru/multimedia/c400/102538227.jpg",
        "category": "Игровая приставка"
      },
      {
        "id": 8,
        "title": "Клавиатура Logitech Wireless Keyboard K360",
        "price": 2390,
        "sale": false,
        "img": "https://cdn1.ozone.ru/multimedia/c400/1015518726.jpg",
        "hoverImg": "https://cdn1.ozone.ru/multimedia/c400/102518725.jpg",
        "category": "Периферия для ПК"
      },
      {
        "id": 9,
        "title": "Клавиатура Defender Element HB-195",
        "price": 566,
        "sale": true,
        "img": "https://cdn1.ozone.ru/multimedia/c400/1028488609.jpg",
        "hoverImg": "https://cdn1.ozone.ru/multimedia/c400/1028488611.jpg",
        "category": "Периферия для ПК"
      },
      {
        "id": 10,
        "title": "Игровая клавиатура Steelseries Apex M750- RU",
        "price": 12848,
        "sale": true,
        "img": "https://cdn1.ozone.ru/multimedia/c400/1027006299.jpg",
        "hoverImg": "https://cdn1.ozone.ru/multimedia/c400/1027006301.jpg",
        "category": "Периферия для ПК"
      },
      {
        "id": 11,
        "title": "Мышь + коврик A4Tech Bloody V7M+B-071",
        "price": 1649,
        "sale": false,
        "img": "https://cdn1.ozone.ru/multimedia/c400/1026202934.jpg",
        "hoverImg": "https://cdn1.ozone.ru/multimedia/c400/1026202933.jpg",
        "category": "Периферия для ПК"
      },
      {
        "id": 12,
        "title": "Мышь Trust Varo",
        "price": 1097,
        "sale": true,
        "img": "https://cdn1.ozone.ru/multimedia/c400/1025117257.jpg",
        "hoverImg": "https://cdn1.ozone.ru/multimedia/c400/1025117012.jpg",
        "category": "Периферия для ПК"
      },
      {
        "id": 13,
        "title": "Мышь Genius DX-120",
        "price": 350,
        "sale": false,
        "img": "https://cdn1.ozone.ru/multimedia/c400/1014472326.jpg",
        "hoverImg": "https://cdn1.ozone.ru/multimedia/c400/1014472325.jpg",
        "category": "Периферия для ПК"
      },
      {
        "id": 14,
        "title": "Коврик для мыши Orico MPA9040",
        "price": 1279,
        "sale": true,
        "img": "https://cdn1.ozone.ru/multimedia/c400/1026748248.jpg",
        "hoverImg": "https://cdn1.ozone.ru/multimedia/c400/1026748250.jpg",
        "category": "Периферия для ПК"
      },
      {
        "id": 15,
        "title": "Коврик для мыши Trust GXT 760 Glide RGB",
        "price": 4959,
        "sale": false,
        "img": "https://cdn1.ozone.ru/multimedia/c400/1025053907.jpg",
        "category": "Периферия для ПК"
      },
      {
        "id": 16,
        "title": "Метро: Исход",
        "price": 1479,
        "sale": true,
        "img": "https://cdn1.ozone.ru/multimedia/c400/1026951535.jpg",
        "category": "Игры и софт"
      },
      {
        "id": 17,
        "title": "Darksiders III. Коллекционное издание",
        "price": 3990,
        "sale": false,
        "img": "https://cdn1.ozone.ru/multimedia/c400/1023840682.jpg",
        "hoverImg": "https://cdn1.ozone.ru/multimedia/c400/1023849642.jpg",
        "category": "Игры и софт"
      },
      {
        "id": 18,
        "title": "Mortal Kombat X",
        "price": 1076,
        "sale": false,
        "img": "https://cdn1.ozone.ru/multimedia/c400/1011627377.jpg",
        "category": "Игры и софт"
      },
      {
        "id": 19,
        "title": "Microsoft Windows 10 Home (32/64-bit)",
        "price": 9412,
        "sale": false,
        "img": "https://cdn1.ozone.ru/multimedia/c400/1013975751.jpg",
        "hoverImg": "https://cdn1.ozone.ru/multimedia/c400/1013975799.jpg",
        "category": "Игры и софт"
      },
      {
        "id": 20,
        "title": "1С:Предприятие 8.3. Версия для обучения программированию",
        "price": 560,
        "sale": true,
        "img": "https://cdn1.ozone.ru/multimedia/c400/1015773076.jpg",
        "category": "Игры и софт"
      },
      {
        "id": 21,
        "title": "ABBYY FotoTranslate",
        "price": 805,
        "sale": false,
        "img": "https://cdn1.ozone.ru/multimedia/c400/1001559725.jpg",
        "category": "Игры и софт"
      },
      {
        "id": 22,
        "title": "Destiny (Xbox 360)",
        "price": 723,
        "sale": true,
        "img": "https://cdn1.ozone.ru/multimedia/c400/1021419099.jpg",
        "category": "Игры и софт"
      },
      {
        "id": 23,
        "title": "Игра Onrush (PS4 Sony)",
        "price": 1794,
        "sale": true,
        "img": "https://cdn1.ozone.ru/multimedia/c400/1023547851.jpg",
        "category": "Игры и софт"
      }
    ]
  
  return db
};
export default getDate;
