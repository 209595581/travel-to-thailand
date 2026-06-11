const rich = "assets/guide_images_rich/";
const foodDir = "assets/guide_food_images/";
const touristDir = "assets/guide_tourist_images/";
const patongDir = "assets/guide_patong_images/";

const images = {
  grandPalace: rich + "01_grand_palace.jpg",
  watPho: rich + "02_wat_pho.jpg",
  watArun: rich + "03_wat_arun.jpg",
  yaowarat: rich + "04_yaowarat.jpg",
  iconsiam: rich + "05_iconsiam.jpg",
  mahanakhon: rich + "06_mahanakhon.jpg",
  watBench: rich + "07_wat_bench.jpg",
  ayutthaya: rich + "08_ayutthaya.jpg",
  kata: rich + "09_kata_beach.jpg",
  karon: rich + "10_karon_beach.jpg",
  karonView: rich + "11_karon_view.jpg",
  oldTown: rich + "12_old_town.jpg",
  watChalong: rich + "13_wat_chalong.jpg",
  bigBuddha: rich + "14_big_buddha.jpg",
  promthep: rich + "15_promthep.jpg",
  naiHarn: rich + "16_nai_harn.jpg",
  phangNga: rich + "17_phang_nga.jpg",
  coral: rich + "18_coral_island.jpg",
  touristView: rich + "19_tourist_view.jpg",
  yanh: rich + "20_yanh_banner.jpg",
  yanhRoom: rich + "21_yanh_twin.jpg",
  aurico: rich + "22_aurico_slide.jpg",
  auricoPool: rich + "23_aurico_pool.jpg",
  auricoRoom: rich + "24_aurico_room.jpg",
  atResidence: rich + "25_at_residence_main.jpg",
  atResidenceRoom: rich + "26_at_residence_room.jpg",
};

const foodImages = {
  padThai: foodDir + "01_pad_thai.jpg",
  tomYum: foodDir + "02_tom_yum.jpg",
  somTam: foodDir + "03_som_tam.jpg",
  mangoSticky: foodDir + "04_mango_sticky.jpg",
  greenCurry: foodDir + "05_green_curry.jpg",
  thaiTea: foodDir + "06_thai_tea.jpg",
  boatNoodles: foodDir + "07_boat_noodles.jpg",
  marketFood: foodDir + "08_market_food.jpg",
  phuketSeafood: foodDir + "09_phuket_seafood.jpg",
  khaoSoi: foodDir + "10_khao_soi.jpg",
  coconutIce: foodDir + "11_coconut_ice.jpg",
  thaiSpread: foodDir + "12_thai_spread.jpg",
  mangoTango: foodDir + "13_mango_tango.jpg",
  somtamStall: foodDir + "14_somtam_stall.jpg",
};

const touristImages = {
  bangkokStreetFood: touristDir + "01_bangkok_street_food_bicycle.jpg",
  bangkokFoodSeller: touristDir + "02_bangkok_street_food_seller.jpg",
  bangkokFoodStalls: touristDir + "03_street_foods_bangkok.jpg",
  yaowaratDay: touristDir + "04_yaowarat_day.jpg",
  kataTourist: touristDir + "05_kata_tourist_beach.jpg",
  kataPanorama: touristDir + "06_kata_panorama.jpg",
  oldTown2: touristDir + "07_old_phuket_town_2.jpg",
  oldTown3: touristDir + "08_old_phuket_town_3.jpg",
  oldPhuketBuildings: touristDir + "09_old_phuket_buildings.jpg",
  phuketBeach: touristDir + "10_phuket_beach_tourist.jpg",
  bananaBeach: touristDir + "11_banana_beach_phuket.jpg",
  karonView05: touristDir + "12_karon_viewpoint_05.jpg",
};

const patongImages = {
  banglaRoad: patongDir + "01_bangla_road.jpg",
  patongBeach: patongDir + "02_patong_beach.jpg",
  banglaBars: patongDir + "03_bangla_bars.jpg",
  tukTuk: patongDir + "04_patong_tuktuk.jpg",
  nightTraffic: patongDir + "05_patong_night_traffic.jpg",
  fishMarket: patongDir + "06_patong_fish_market.jpg",
  simonStage: patongDir + "07_simon_stage.jpg",
  simonShow: patongDir + "08_simon_show.jpg",
  simonCostume: patongDir + "09_simon_costume.jpg",
};

const stages = [
  {
    title: "8/10 抵达曼谷",
    detail: "上海17:30到BKK，成都18:10到BKK，机场汇合后去YANH。",
    accent: "blue",
  },
  {
    title: "8/10-8/14 曼谷",
    detail: "住Dusit/Ratchawat，主打老城、河岸、商场和机动日。",
    accent: "teal",
  },
  {
    title: "8/14 飞普吉",
    detail: "VZ304，10:20 BKK起飞，11:55抵达HKT，入住Kata。",
    accent: "coral",
  },
  {
    title: "8/14-8/19 普吉",
    detail: "Kata为基地，陆地线、攀牙湾、海滩、SPA和海鲜。",
    accent: "saffron",
  },
  {
    title: "8/19-8/20 回曼谷",
    detail: "PG280深夜到BKK，机场酒店过夜，次日成都/上海回国。",
    accent: "blue",
  },
];

const flights = [
  {
    date: "8月10日 周一",
    route: "上海 -> 曼谷",
    airline: "春秋航空 9C7281",
    from: "PVG",
    fromName: "浦东 T2",
    depart: "14:00",
    to: "BKK",
    toName: "素万那普",
    arrive: "17:30",
    note: "截图显示航班调整；经济舱。",
  },
  {
    date: "8月10日 周一",
    route: "成都 -> 曼谷",
    airline: "东方航空 MU5035",
    from: "TFU",
    fromName: "天府 T1",
    depart: "16:05",
    to: "BKK",
    toName: "素万那普",
    arrive: "18:10",
    note: "空客320；截图显示正餐。",
  },
  {
    date: "8月14日 周五",
    route: "曼谷 -> 普吉",
    airline: "泰国越捷 VZ304",
    from: "BKK",
    fromName: "素万那普",
    depart: "10:20",
    to: "HKT",
    toName: "普吉 D",
    arrive: "11:55",
    note: "早上从YANH去机场，目标08:15左右到BKK。",
  },
  {
    date: "8月19日 周三",
    route: "普吉 -> 曼谷",
    airline: "曼谷航空 PG280",
    from: "HKT",
    fromName: "普吉 D",
    depart: "21:55",
    to: "BKK",
    toName: "素万那普",
    arrive: "23:30",
    note: "深夜抵达，直接去机场酒店。",
  },
  {
    date: "8月20日 周四",
    route: "曼谷 -> 成都",
    airline: "春秋航空 9C7502",
    from: "BKK",
    fromName: "素万那普",
    depart: "11:10",
    to: "TFU",
    toName: "天府 T1",
    arrive: "15:15",
    note: "无餐食；截图提示返程无免费托运行李额，务必复核。",
  },
  {
    date: "8月20日 周四",
    route: "曼谷 -> 上海",
    airline: "春秋航空 9C8892",
    from: "BKK",
    fromName: "素万那普",
    depart: "12:50",
    to: "PVG",
    toName: "浦东 T2",
    arrive: "18:25",
    note: "无餐食；可与成都同伴一起早到机场。",
  },
];

const hotels = [
  {
    name: "YANH Ratchawat Hotel",
    cn: "YANH 拉差哇酒店",
    dates: "8月10日-8月14日",
    nights: "4晚",
    area: "曼谷 Dusit / Ratchawat",
    room: "高级双床房 2间",
    image: images.yanh,
    note: "去老城、皇宫和湄南河线不绕，但不是BTS/MRT步行型酒店，市内多用Grab/Bolt。",
  },
  {
    name: "Aurico Kata Resort & Spa",
    cn: "奥里科卡塔度假村及水疗中心",
    dates: "8月14日-8月19日",
    nights: "5晚",
    area: "普吉 Kata / Karon",
    room: "截图显示高级房 1间",
    image: images.aurico,
    note: "Kata作为基地很均衡。若4人同行，需要确认入住人数、床型、加床或第二间房。",
  },
  {
    name: "At Residence Suvarnabhumi Hotel",
    cn: "素万那普机场旁酒店",
    dates: "8月19日-8月20日",
    nights: "1晚",
    area: "曼谷 Lat Krabang / BKK机场旁",
    room: "豪华双人床房 2间",
    image: images.atResidence,
    note: "PG280深夜到、次日国际航班早，住机场旁最省心。提前确认late check-in和接驳。",
  },
];

const days = [
  {
    id: "d0810",
    date: "8/10",
    weekday: "周一",
    title: "抵达曼谷，机场汇合",
    city: "曼谷",
    hotel: "YANH Ratchawat Hotel",
    transport: "BKK机场 -> YANH，约45-70分钟",
    flight: "上海17:30到；成都18:10到",
    hero: touristImages.bangkokStreetFood,
    tags: ["抵达", "汇合", "轻松晚餐"],
    schedule: [
      ["17:30", "上海抵达BKK", "先取行李、办电话卡或取现金，等成都航班。"],
      ["18:10", "成都抵达BKK", "两边在素万那普机场到达层汇合。"],
      ["19:00", "去酒店", "Grab/Bolt/出租车去 YANH Ratchawat Hotel。"],
      ["晚上", "入住和简单晚餐", "不安排景点，存体力。"],
    ],
    places: ["YANH酒店周边"],
    foods: ["Pad Thai", "泰式炒饭/炒粉", "泰奶"],
    images: [images.yanh, touristImages.bangkokStreetFood, foodImages.padThai],
    note: "给酒店留言 late check-in；把酒店英文名、地址和订单截图存离线。",
  },
  {
    id: "d0811",
    date: "8/11",
    weekday: "周二",
    title: "曼谷老城经典线",
    city: "曼谷",
    hotel: "YANH Ratchawat Hotel",
    transport: "酒店 -> 大皇宫 -> 卧佛寺 -> 渡船 -> 郑王庙",
    flight: "无",
    hero: images.yaowarat,
    tags: ["寺庙", "湄南河", "夜市"],
    schedule: [
      ["08:00", "出发去大皇宫", "尽量赶08:30开门入场，避开正午热浪。"],
      ["上午", "大皇宫 + 玉佛寺", "寺庙日穿有袖上衣和过膝下装。"],
      ["中午", "Tha Maharaj / 河边简餐", "轻松吃，下午继续走。"],
      ["下午", "卧佛寺 + 郑王庙", "卧佛寺后坐渡船跨河。"],
      ["晚上", "ICONSIAM或唐人街", "唐人街适合边走边吃，ICONSIAM更稳。"],
    ],
    places: ["大皇宫", "卧佛寺", "郑王庙", "唐人街"],
    foods: ["船面", "冬阴功", "青木瓜沙拉", "芒果糯米饭"],
    images: [images.watPho, images.watArun, touristImages.yaowaratDay],
    note: "不要听路边“今天关门”的搭讪。",
  },
  {
    id: "d0812",
    date: "8/12",
    weekday: "周三",
    title: "曼谷城市休闲日",
    city: "曼谷",
    hotel: "YANH Ratchawat Hotel",
    transport: "打车/轨道交通组合，按商场和天气调整",
    flight: "无",
    hero: images.mahanakhon,
    tags: ["公共假日", "商场", "夜景"],
    schedule: [
      ["上午", "Jim Thompson House或Siam", "公共假日不赶远路。"],
      ["下午", "ICONSIAM / CentralWorld", "商场、河边和甜品都顺。"],
      ["傍晚", "Mahanakhon SkyWalk", "天气好再上，雨天改按摩。"],
      ["晚上", "泰餐或按摩", "热门餐厅留排队时间。"],
    ],
    places: ["ICONSIAM", "Siam", "Mahanakhon"],
    foods: ["绿咖喱", "泰奶", "芒果甜品"],
    images: [images.iconsiam, foodImages.greenCurry, touristImages.bangkokFoodSeller],
    note: "8月12日是泰国母亲节/公共假日，人会更多。",
  },
  {
    id: "d0813",
    date: "8/13",
    weekday: "周四",
    title: "曼谷机动日，给普吉前留余量",
    city: "曼谷",
    hotel: "YANH Ratchawat Hotel",
    transport: "市内打车；若去大城建议包车/一日团",
    flight: "无",
    hero: images.ayutthaya,
    tags: ["机动", "咖啡", "收行李"],
    schedule: [
      ["上午", "Ratchawat早餐 + 云石寺", "Dusit附近轻松走，不折腾。"],
      ["下午", "Ari咖啡或Siam购物", "也可改成大城一日游。"],
      ["晚上", "收拾行李", "确认8月14日早上送机车。"],
    ],
    places: ["云石寺", "Ari", "大城备选"],
    foods: ["本地小店", "船面", "咖啡"],
    images: [images.watBench, touristImages.bangkokFoodStalls, foodImages.thaiTea],
    note: "真实机票是8月14日飞普吉，所以8月13日保留为曼谷完整一天。",
  },
  {
    id: "d0814",
    date: "8/14",
    weekday: "周五",
    title: "飞普吉，神仙半岛射击 + 班赞海鲜",
    city: "普吉",
    hotel: "Aurico Kata Resort & Spa",
    transport: "YANH -> BKK -> HKT -> Kata -> 神仙半岛 -> Patong",
    flight: "VZ304 10:20-11:55",
    hero: images.promthep,
    tags: ["飞行", "射击", "海鲜"],
    schedule: [
      ["07:00", "从YANH出发去BKK", "目标08:15左右到机场。"],
      ["10:20", "VZ304飞普吉", "11:55抵达HKT。"],
      ["中午", "HKT到Kata", "约60-90分钟，4人建议提前订接机车。"],
      ["下午", "神仙半岛射击场", "先入住/寄存行李，再去神仙半岛方向体验真实枪支射击。"],
      ["傍晚", "神仙半岛/海边散步", "天气好就看海和日落；雨天缩短停留。"],
      ["晚上", "Patong班赞海鲜", "去芭东班赞/鱼市场方向吃海鲜；如果太累，改Kata附近吃。"],
    ],
    places: ["Aurico酒店", "神仙半岛射击场", "Promthep Cape", "Patong / 班赞"],
    foods: ["班赞海鲜", "冬阴功", "椰子冰淇淋"],
    images: [images.auricoPool, images.promthep, patongImages.fishMarket],
    note: "这天刚飞到普吉，射击和班赞海鲜都保留，但不要再叠加人妖秀，避免第一天太累。",
  },
  {
    id: "d0815",
    date: "8/15",
    weekday: "周六",
    title: "出海首选：攀牙湾/007岛/海上独木舟",
    city: "普吉",
    hotel: "Aurico Kata Resort & Spa",
    transport: "一日团酒店接送",
    flight: "无",
    hero: images.phangNga,
    tags: ["出海", "独木舟", "雨季更稳"],
    schedule: [
      ["早上", "酒店接送", "通常07:00-08:00接，按团通知为准。"],
      ["白天", "攀牙湾/007岛/海上独木舟", "8月雨季优先内湾线路，容错率比外海高。"],
      ["傍晚", "回Kata", "17:00-18:30左右回酒店。"],
      ["晚上", "酒店附近正餐", "坐船后别安排太远。"],
    ],
    places: ["攀牙湾", "007岛", "海上独木舟"],
    foods: ["跟团午餐", "Kata晚餐", "泰奶"],
    images: [images.phangNga, images.coral, foodImages.tomYum],
    note: "选可因天气改期/取消的团，确认国家公园费是否包含。",
  },
  {
    id: "d0816",
    date: "8/16",
    weekday: "周日",
    title: "普吉陆地线：老镇、查龙寺、大佛、周末夜市",
    city: "普吉",
    hotel: "Aurico Kata Resort & Spa",
    transport: "建议包车/Grab串联老镇、查龙寺、大佛和普吉镇夜市",
    flight: "无",
    hero: touristImages.oldTown3,
    tags: ["老镇", "寺庙", "周末夜市"],
    schedule: [
      ["上午", "普吉老镇", "拍中葡建筑、咖啡、小店和午餐。"],
      ["下午", "查龙寺 + 普吉大佛", "大佛当天确认开放和路况后再上山；否则改Karon Viewpoint。"],
      ["傍晚", "回普吉镇", "周日适合安排 Phuket Sunday Walking Street / 普吉镇周末夜市。"],
      ["晚上", "普吉镇夜市吃小吃", "吃完再回Kata，别太晚。"],
    ],
    places: ["普吉老镇", "查龙寺", "普吉大佛", "普吉镇周末夜市"],
    foods: ["老镇咖啡", "夜市小吃", "芒果糯米饭"],
    images: [touristImages.oldTown2, images.watChalong, images.bigBuddha],
    note: "8月16日是周日，适合把普吉镇周末夜市放进来；若大雨就改Central Phuket。",
  },
  {
    id: "d0817",
    date: "8/17",
    weekday: "周一",
    title: "Kata慢玩 + 芭东夜游 + Simon Cabaret",
    city: "普吉",
    hotel: "Aurico Kata Resort & Spa",
    transport: "Kata慢玩，傍晚打车去Patong，夜里回Kata",
    flight: "无",
    hero: patongImages.banglaRoad,
    tags: ["慢节奏", "芭东", "人妖秀"],
    schedule: [
      ["上午", "睡到自然醒", "酒店泳池、Kata/Karon海边。"],
      ["中午", "Kata附近早午餐", "不赶路，舒服吃。"],
      ["下午", "冲浪课或SPA", "红旗时只在岸边/泳池玩，16:30左右准备出发去芭东。"],
      ["17:15", "Patong Beach / Jungceylon / Bangla Road", "先看海、逛商场或走Bangla Road周边，留意车程和堵车。"],
      ["18:00", "芭东晚餐", "Banzaan海鲜/Jungceylon/No.6等；如果8月14日已吃班赞，这天换一家。"],
      ["19:30", "Simon Cabaret Phuket", "建议订19:30场；想先完整吃晚饭就订21:00场。"],
      ["21:00后", "短逛Bangla Road，打车回Kata", "演出后可合影但通常要给小费，拍前先确认价格。"],
    ],
    places: ["Kata", "Patong Beach", "Bangla Road", "Simon Cabaret Phuket"],
    foods: ["芭东海鲜", "Khao Soi", "泰奶"],
    images: [patongImages.patongBeach, patongImages.banglaBars, patongImages.simonStage],
    note: "Simon Cabaret官网显示每日18:00 / 19:30 / 21:00三场；这天白天最松，放芭东夜游最不挤。",
  },
  {
    id: "d0818",
    date: "8/18",
    weekday: "周二",
    title: "普吉机动日：好天气出海，坏天气室内",
    city: "普吉",
    hotel: "Aurico Kata Resort & Spa",
    transport: "按天气决定一日团、商场或老镇",
    flight: "无",
    hero: images.promthep,
    tags: ["机动", "天气优先", "最后一晚普吉"],
    schedule: [
      ["天气好", "皇帝岛/珊瑚岛/皮皮岛择一", "皮皮岛可去，但别为Maya Bay上岛买不可退团。"],
      ["天气一般", "短线或放弃出海", "优先轻松，不硬冲外海。"],
      ["天气差", "Central Phuket/老镇/SPA", "商场和老镇更稳。"],
      ["晚上", "最后一顿普吉海边餐", "海鲜或Kata餐厅。"],
    ],
    places: ["珊瑚岛", "神仙半岛", "Central Phuket备选"],
    foods: ["海鲜", "芒果糯米饭", "椰子冰淇淋"],
    images: [touristImages.bananaBeach, foodImages.mangoSticky, foodImages.phuketSeafood],
    note: "Maya Bay 2026年8月1日-9月30日关闭。",
  },
  {
    id: "d0819",
    date: "8/19",
    weekday: "周三",
    title: "普吉退房，晚班机回曼谷",
    city: "普吉/曼谷",
    hotel: "At Residence Suvarnabhumi Hotel",
    transport: "Kata -> HKT -> BKK -> 机场酒店",
    flight: "PG280 21:55-23:30",
    hero: images.atResidence,
    tags: ["退房", "晚班机", "机场酒店"],
    schedule: [
      ["上午", "退房或申请late checkout", "不行就12:00寄存行李。"],
      ["下午", "Kata午餐、按摩、咖啡", "或带行李去Central Phuket/老镇。"],
      ["18:00", "从Kata出发去HKT", "目标19:30-20:00到机场。"],
      ["23:30", "抵达BKK", "直接去 At Residence Suvarnabhumi Hotel。"],
    ],
    places: ["Kata", "Central Phuket备选", "BKK机场酒店"],
    foods: ["午餐吃好", "机场前简餐", "便利店轻食"],
    images: [touristImages.kataTourist, images.atResidenceRoom, foodImages.somtamStall],
    note: "提前联系机场酒店确认 late check-in 和接驳。",
  },
  {
    id: "d0820",
    date: "8/20",
    weekday: "周四",
    title: "回国",
    city: "曼谷/回国",
    hotel: "无",
    transport: "机场酒店 -> BKK",
    flight: "成都11:10；上海12:50",
    hero: images.atResidenceRoom,
    tags: ["离境", "行李", "早到机场"],
    schedule: [
      ["07:30", "成都航班离店", "建议08:10前到BKK。"],
      ["09:30", "上海航班离店", "建议09:50前到BKK；也可一起早到。"],
      ["机场", "值机、出境、安检", "春秋无餐食，过安检后买水和食物。"],
    ],
    places: ["BKK素万那普机场"],
    foods: ["机场早餐", "水和简餐"],
    images: [images.atResidence, foodImages.thaiTea, foodImages.mangoSticky],
    note: "成都回程截图提示无免费托运行李额，8月18日前决定是否预购。",
  },
];

const transport = [
  ["8月10日", "BKK机场到YANH", "两边汇合后统一打车/Grab/Bolt。上海先到的人可先处理电话卡、现金和行李。"],
  ["8月11日", "曼谷老城移动", "从酒店打车去大皇宫；卧佛寺到郑王庙用渡船；晚上按ICONSIAM或唐人街决定路线。"],
  ["8月14日", "曼谷飞普吉 + 神仙半岛 + 芭东", "07:00-07:15从YANH出发；HKT到Kata约60-90分钟；下午去神仙半岛射击，晚上去Patong班赞海鲜。"],
  ["8月15日", "攀牙湾出海", "选一日团酒店接送，优先可改期/取消。"],
  ["8月16日", "普吉陆地线 + 周末夜市", "普吉老镇、查龙寺、普吉大佛、普吉镇周末夜市建议包车或连续Grab。"],
  ["8月17日", "Kata到Patong夜游", "16:30左右从Kata出发，晚餐后看Simon Cabaret，演出后短逛Bangla Road再回Kata。"],
  ["8月19日", "普吉晚班机", "18:00-18:30从Kata出发去HKT，23:30到BKK后去机场酒店。"],
  ["8月20日", "机场酒店到BKK", "成都建议07:30-07:45离店；上海可09:30左右离店或一起早到。"],
];

const placeGallery = [
  ["大皇宫", "8月11日上午", images.grandPalace],
  ["卧佛寺", "8月11日下午", images.watPho],
  ["郑王庙", "8月11日下午", images.watArun],
  ["唐人街", "8月11日晚上", images.yaowarat],
  ["ICONSIAM", "8月12日/雨天备选", images.iconsiam],
  ["Mahanakhon", "8月12日傍晚", images.mahanakhon],
  ["云石寺", "8月13日轻松线", images.watBench],
  ["大城府", "8月13日远郊备选", images.ayutthaya],
  ["Kata Beach", "8月14日后基地", images.kata],
  ["神仙半岛", "8月14日射击/日落", images.promthep],
  ["攀牙湾", "8月15日出海首选", images.phangNga],
  ["普吉老镇", "8月16日", images.oldTown],
  ["查龙寺", "8月16日", images.watChalong],
  ["普吉大佛", "8月16日开放则去", images.bigBuddha],
  ["Patong Beach", "8月17日傍晚", patongImages.patongBeach],
  ["Bangla Road", "8月17日晚", patongImages.banglaRoad],
  ["Simon Cabaret", "8月17日晚", patongImages.simonStage],
  ["Nai Harn", "海滩备选", images.naiHarn],
  ["珊瑚岛", "8月18日好天气备选", images.coral],
];

const foodGallery = [
  ["Pad Thai", "第一晚或商场餐厅都稳", foodImages.padThai],
  ["冬阴功", "正餐和海鲜餐都适合", foodImages.tomYum],
  ["青木瓜沙拉", "清爽但记得控辣", foodImages.somTam],
  ["芒果糯米饭", "商场、夜市、甜品店", foodImages.mangoSticky],
  ["绿咖喱", "适合多人点一份共享", foodImages.greenCurry],
  ["泰式奶茶", "少糖更舒服", foodImages.thaiTea],
  ["船面", "曼谷午餐/小吃", foodImages.boatNoodles],
  ["市场熟食", "夜市随买随吃", foodImages.marketFood],
  ["普吉海鲜", "Rawai/海边餐厅", foodImages.phuketSeafood],
  ["Khao Soi", "Kata慢玩日晚餐可试", foodImages.khaoSoi],
  ["椰子冰淇淋", "热天收尾", foodImages.coconutIce],
  ["泰式拼桌", "多人点菜模板", foodImages.thaiSpread],
  ["芒果甜品", "Siam/商场下午茶", foodImages.mangoTango],
  ["街边Som Tam", "想本地口味就少辣试", foodImages.somtamStall],
];

const streetGallery = [
  ["曼谷街头小吃", "游客骑行/街边食物视角，比餐厅图更有现场感。", touristImages.bangkokStreetFood],
  ["曼谷小吃摊", "适合对应唐人街、夜市和随走随吃的氛围。", touristImages.bangkokFoodSeller],
  ["街头熟食", "夜市摊位密度和烟火气。", touristImages.bangkokFoodStalls],
  ["白天唐人街", "Yaowarat不只有夜景，白天街景也很有曼谷感。", touristImages.yaowaratDay],
  ["Kata游客海滩", "更接近日常游客拍到的Kata海边。", touristImages.kataTourist],
  ["Kata海湾全景", "普吉5晚基地的空间感。", touristImages.kataPanorama],
  ["普吉老镇街拍", "彩色建筑和街角视角。", touristImages.oldTown2],
  ["普吉老镇游客视角", "不是官方大景，更像边逛边拍。", touristImages.oldTown3],
  ["Thalang Road建筑", "老镇拍照路线的背景感。", touristImages.oldPhuketBuildings],
  ["普吉海滩游客视角", "海边度假感更直接。", touristImages.phuketBeach],
  ["Banana Beach", "普吉海滩备选氛围图。", touristImages.bananaBeach],
  ["Karon Viewpoint游客视角", "拍人像和看三湾都合适。", touristImages.karonView05],
  ["芭东海滩游客视角", "8月17日傍晚去Patong时可顺路看海。", patongImages.patongBeach],
  ["Bangla Road夜景", "芭东夜生活核心，演出前后短逛即可。", patongImages.banglaRoad],
  ["芭东Tuk Tuk街景", "夜里回Kata时注意叫车价格和等待时间。", patongImages.tukTuk],
  ["Simon Cabaret舞台", "人妖秀官方图库图，适合对应8月17日晚。", patongImages.simonShow],
];

const nightPlan = {
  title: "8月17日｜Kata慢玩后去芭东",
  summary:
    "这天不安排出海和长距离白天行程，傍晚从Kata去Patong最舒服。主线是 Patong Beach / Jungceylon / Bangla Road + 晚餐 + Simon Cabaret Phuket。",
  steps: [
    ["16:30", "Kata出发去Patong", "雨天或晚高峰预留45-70分钟车程。"],
    ["17:15", "Patong Beach / Jungceylon", "先看海、逛商场或走Bangla Road周边。"],
    ["18:00", "芭东晚餐", "Banzaan海鲜、Jungceylon餐厅或No.6一类快餐厅都可。"],
    ["19:30", "Simon Cabaret", "推荐19:30场；如果想慢慢吃饭，就订21:00场。"],
    ["21:00+", "Bangla Road短逛后回Kata", "演出后合影通常需小费，拍前先确认。"],
  ],
  note: "Simon Cabaret官网列出每日18:00 / 19:30 / 21:00三场；建议临行前再次核对票价和接送。",
};

const nightGallery = [
  ["Patong Beach", "傍晚先看海，给芭东夜游一个轻松开场。", patongImages.patongBeach],
  ["Bangla Road", "芭东夜生活核心，演出前后短逛即可。", patongImages.banglaRoad],
  ["Bangla Road酒吧街", "热闹但不用玩太晚，第二天还有机动日。", patongImages.banglaBars],
  ["Patong Tuk Tuk", "夜里回Kata注意叫车价格，优先用Grab/Bolt。", patongImages.tukTuk],
  ["Patong鱼市/班赞感", "8月14或8月17晚餐可二选一安排。", patongImages.fishMarket],
  ["Simon Cabaret舞台", "普吉经典人妖秀，官网称每日三场。", patongImages.simonStage],
  ["Simon Cabaret演出", "适合订19:30或21:00场。", patongImages.simonShow],
  ["Simon Cabaret服装", "演出后合影通常需小费。", patongImages.simonCostume],
];

const foodSchedule = [
  ["8/10", "酒店附近轻松吃：Pad Thai、炒饭/炒粉、泰奶。"],
  ["8/11", "河边简餐 + 唐人街/ICONSIAM：船面、烤海鲜、芒果糯米饭。"],
  ["8/12", "商场餐厅：绿咖喱、泰奶、芒果甜品。"],
  ["8/13", "Ratchawat/Ari/Dusit：本地小店、咖啡、船面。"],
  ["8/14", "Kata入住后去神仙半岛，晚上Patong/班赞海鲜；太累就改Kata附近。"],
  ["8/15", "出海团午餐 + 回Kata补正餐。"],
  ["8/16", "老镇午餐 + 普吉镇周末夜市：咖啡、小吃、芒果糯米饭。"],
  ["8/17", "Kata慢玩，傍晚Patong：Banzaan/Jungceylon/No.6，接Simon Cabaret。"],
  ["8/18", "天气好吃海鲜，天气差去Central Phuket/老镇。"],
  ["8/19", "午餐吃好，晚餐机场前解决。"],
  ["8/20", "机场早餐/简餐；春秋无餐食，过安检后买水。"],
];

const phrases = [
  ["少辣", "less spicy"],
  ["不要辣", "not spicy"],
  ["不要香菜", "no coriander"],
  ["少糖", "less sugar"],
  ["不要冰", "no ice"],
  ["海鲜过敏", "seafood allergy"],
  ["打包", "take away"],
  ["买单", "check bill"],
];

let selectedDay = 0;

function $(selector) {
  return document.querySelector(selector);
}

function createElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
}

function renderStages() {
  const strip = $("#stageStrip");
  strip.innerHTML = "";
  stages.forEach((stage) => {
    const card = createElement("article", "stage-card");
    card.dataset.accent = stage.accent;
    card.innerHTML = `<strong>${stage.title}</strong><span>${stage.detail}</span>`;
    strip.appendChild(card);
  });
}

function renderHeroDeck() {
  const day = days[selectedDay];
  $("#heroBackdrop").style.backgroundImage = `url("${day.hero}")`;
  $("#heroCopy").innerHTML = `
    <p class="eyebrow">Thailand Trip Deck</p>
    <h2>${day.title}</h2>
    <p>${day.date} · ${day.weekday} · ${day.city}。${day.transport}。当天重点：${day.places.join(" / ")}。</p>
    <div class="hero-badges">
      ${day.tags.map((tag) => `<span class="hero-badge">${tag}</span>`).join("")}
    </div>
  `;
  $("#heroNow").innerHTML = `
    <p class="eyebrow">Current Focus</p>
    <h3>${day.flight === "无" ? day.hotel : day.flight}</h3>
    <p>${day.note}</p>
  `;

  const timeline = $("#quickTimeline");
  timeline.innerHTML = "";
  days.forEach((item, index) => {
    const button = createElement("button", `quick-day ${index === selectedDay ? "active" : ""}`);
    button.type = "button";
    button.innerHTML = `<strong>${item.date}</strong><span>${item.city}</span><span>${item.title}</span>`;
    button.addEventListener("click", () => {
      selectedDay = index;
      renderHeroDeck();
      renderDayList();
      renderDayPanel();
      document.getElementById("heroDeck").scrollIntoView({ behavior: "smooth", block: "start" });
    });
    timeline.appendChild(button);
  });
}

function renderDayList() {
  const list = $("#dayList");
  list.innerHTML = "";
  days.forEach((day, index) => {
    const button = createElement("button", `day-button ${index === selectedDay ? "active" : ""}`);
    button.type = "button";
    button.innerHTML = `
      <time>${day.date}</time>
      <span>${day.title}</span>
      <span></span>
      <small>${day.city} · ${day.hotel}</small>
    `;
    button.addEventListener("click", () => {
      selectedDay = index;
      renderHeroDeck();
      renderDayList();
      renderDayPanel();
    });
    list.appendChild(button);
  });
}

function renderDayPanel() {
  const day = days[selectedDay];
  const panel = $("#dayPanel");
  panel.innerHTML = `
    <div class="day-hero">
      <div class="day-title">
        <p class="eyebrow">${day.date} · ${day.weekday} · ${day.city}</p>
        <h2>${day.title}</h2>
        <div class="tag-row">
          ${day.tags.map((tag, i) => `<span class="tag ${i === 1 ? "coral" : i === 2 ? "blue" : ""}">${tag}</span>`).join("")}
        </div>
      </div>
      <div class="hero-image"><img src="${day.hero}" alt="${day.title}" /></div>
    </div>
    <div class="info-grid">
      <div class="info-card"><span>航班</span><strong>${day.flight}</strong></div>
      <div class="info-card"><span>住宿</span><strong>${day.hotel}</strong></div>
      <div class="info-card"><span>交通</span><strong>${day.transport}</strong></div>
    </div>
    <div class="schedule">
      ${day.schedule
        .map(
          ([time, title, detail]) => `
        <div class="schedule-item">
          <time>${time}</time>
          <div><strong>${title}</strong><p>${detail}</p></div>
        </div>`,
        )
        .join("")}
    </div>
    <div class="panel-columns">
      <section class="mini-section">
        <h3>当天景点</h3>
        <div class="chip-list">${day.places.map((item) => `<span class="chip">${item}</span>`).join("")}</div>
      </section>
      <section class="mini-section">
        <h3>当天美食</h3>
        <div class="chip-list">${day.foods.map((item) => `<span class="chip">${item}</span>`).join("")}</div>
      </section>
    </div>
    <div class="image-row">
      ${day.images.map((src) => `<img class="clickable-photo" src="${src}" alt="${day.title}相关图片" data-caption="${day.title}" />`).join("")}
    </div>
    <div class="mini-section" style="margin-top: 16px;">
      <h3>提醒</h3>
      <p>${day.note}</p>
    </div>
  `;
}

function renderFlights() {
  const grid = $("#flightGrid");
  grid.innerHTML = flights
    .map(
      (flight) => `
      <article class="flight-card">
        <p class="eyebrow">${flight.date}</p>
        <h3>${flight.route}</h3>
        <div class="flight-route">
          <div class="airport"><strong>${flight.from}</strong><span>${flight.depart} · ${flight.fromName}</span></div>
          <div class="route-line"></div>
          <div class="airport"><strong>${flight.to}</strong><span>${flight.arrive} · ${flight.toName}</span></div>
        </div>
        <div class="flight-meta">
          <span>${flight.airline}</span>
          <span>${flight.note}</span>
        </div>
      </article>`,
    )
    .join("");
}

function renderHotels() {
  const grid = $("#hotelGrid");
  grid.innerHTML = hotels
    .map(
      (hotel) => `
      <article class="hotel-card">
        <img src="${hotel.image}" alt="${hotel.name}" />
        <div class="hotel-body">
          <p class="eyebrow">${hotel.dates} · ${hotel.nights}</p>
          <h3>${hotel.name}</h3>
          <p>${hotel.cn}</p>
          <p><strong>${hotel.area}</strong></p>
          <p>${hotel.room}</p>
          <p>${hotel.note}</p>
        </div>
      </article>`,
    )
    .join("");
}

function renderTransport() {
  const list = $("#transportList");
  list.innerHTML = transport
    .map(
      ([date, title, detail]) => `
      <article class="transport-card">
        <p class="eyebrow">${date}</p>
        <h3>${title}</h3>
        <p>${detail}</p>
      </article>`,
    )
    .join("");
}

function renderGallery(target, data) {
  const grid = $(target);
  grid.innerHTML = data
    .map(
      ([title, detail, src]) => `
      <article class="gallery-card">
        <img class="clickable-photo" src="${src}" alt="${title}" data-caption="${title} · ${detail}" />
        <div class="gallery-body">
          <h3>${title}</h3>
          <p>${detail}</p>
        </div>
      </article>`,
    )
    .join("");
}

function renderStreetGallery() {
  const grid = $("#streetGallery");
  grid.innerHTML = streetGallery
    .map(
      ([title, detail, src]) => `
      <article class="masonry-card">
        <img class="clickable-photo" src="${src}" alt="${title}" data-caption="${title} · ${detail}" />
        <div class="masonry-body">
          <h3>${title}</h3>
          <p>${detail}</p>
        </div>
      </article>`,
    )
    .join("");
}

function renderNightlife() {
  $("#nightPlan").innerHTML = `
    <p class="eyebrow">Patong Night Route</p>
    <h3>${nightPlan.title}</h3>
    <p>${nightPlan.summary}</p>
    <div class="night-steps">
      ${nightPlan.steps
        .map(
          ([time, title, detail]) => `
          <div class="night-step">
            <time>${time}</time>
            <div><strong>${title}</strong><span>${detail}</span></div>
          </div>`,
        )
        .join("")}
    </div>
    <p>${nightPlan.note}</p>
  `;
  renderGallery("#nightGallery", nightGallery);
}

function renderFoodSide() {
  $("#foodSchedule").innerHTML = foodSchedule
    .map(([date, text]) => `<div class="food-day"><strong>${date}</strong><span>${text}</span></div>`)
    .join("");

  $("#phraseGrid").innerHTML = phrases
    .map(([cn, en]) => `<div class="phrase"><span>${cn}</span><span>${en}</span></div>`)
    .join("");
}

function bindLightbox() {
  const lightbox = $("#lightbox");
  const image = $("#lightboxImage");
  const caption = $("#lightboxCaption");
  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLImageElement) || !target.classList.contains("clickable-photo")) return;
    image.src = target.src;
    image.alt = target.alt;
    caption.textContent = target.dataset.caption || target.alt;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
  });
  $("#lightboxClose").addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeLightbox();
  });
}

function closeLightbox() {
  const lightbox = $("#lightbox");
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
}

function showView(view, updateHash = true) {
  const target = $(`#view-${view}`);
  const button = document.querySelector(`.tab-button[data-view="${view}"]`);
  if (!target || !button) return;
  document.querySelectorAll(".tab-button").forEach((item) => item.classList.remove("active"));
  document.querySelectorAll(".view").forEach((item) => item.classList.remove("active"));
  button.classList.add("active");
  target.classList.add("active");
  if (updateHash) {
    history.replaceState(null, "", `#${view}`);
  }
}

function bindTabs() {
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.addEventListener("click", () => {
      showView(button.dataset.view);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

function init() {
  bindTabs();
  bindLightbox();
  renderHeroDeck();
  renderStages();
  renderDayList();
  renderDayPanel();
  renderFlights();
  renderHotels();
  renderTransport();
  renderGallery("#placeGallery", placeGallery);
  renderGallery("#foodGallery", foodGallery);
  renderStreetGallery();
  renderNightlife();
  renderFoodSide();
  const initialView = location.hash.replace("#", "");
  showView(initialView || "overview", false);
}

init();
