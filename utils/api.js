let API_HOST = "http://xxxx.com";
let DEBUG = true;  // 切换数据入口
var Mock = require('./mock.js')

function ajax(data = '', fn, method = "get", header = {}) {

  if (!DEBUG) {
    wx.request({
      url: config.API_HOST + data,
      method: method ? method : 'get',
      data: {},
      header: header ? header : { "Content-Type": "application/json" },
      success: function (res) {
        fn(res);
      }
    })
  } else {
    // 模拟数据
    var res = Mock.mock({
      'erro_code': '',
      'error_msg': '',
      'data': [
        {
          "filmId": 4469,
          "name": "海王 ",
          "poster": "https://pic.maizuo.com/usr/movie/be682c73c8d55bf8a5298e17487ae846.jpg",
          "actors": [
            {
              "name": " 帕特里克·威尔森",
              "role": " Orm / Ocean Master",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/7e5727503ed7ac6ddc0b7cb262b5e9b7.jpg"
            },
            {
              "name": " 妮可·基德曼 ",
              "role": " Queen Atlanna",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/e712708f4801f12a08165ae25fb96870.jpg"
            },
            {
              "name": "杜夫·龙格尔",
              "role": " King Nereus",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/31addb46b98ded8b973bd2b5ea45b2ad.jpg"
            },
            {
              "name": "温子仁",
              "role": " 导演",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/2b6b007e02aa60bb4e93b6ff57cf7185.jpg"
            },
            {
              "name": " 杰森·莫玛",
              "role": "Arthur Curry    Aquaman",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/cc0f46bc20be5ae093f3e4f2c8c06f08.jpg"
            },
            {
              "name": "安柏·赫德",
              "role": "Mera",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/1f0dba0c4431a8084b879e55929949bb.jpg"
            }
          ],
          "director": "温子仁",
          "category": "动作|奇幻|冒险",
          "synopsis": "本片由杰森·莫玛领衔主演，讲述半人半亚特兰蒂斯血统的亚瑟·库瑞踏上永生难忘的征途——他不但需要直面自己的特殊身世，更不得不面对生而为王的考验：自己究竟能否配得上“海王”之名。",
          "filmType": {
            "name": "3D",
            "value": 2
          },
          "nation": "美国   澳大利亚 ",
          "language": "英语",
          "videoId": "XMzkzNjI2NDgwNA==",
          "premiereAt": 1544140800,
          "timeType": 3,
          "runtime": 143,
          "grade": "7.8",
          "item": {
            "name": "3D",
            "type": 2
          },
          "isPresale": true,
          "isSale": false
        },
        {
          "filmId": 4471,
          "name": "龙猫",
          "poster": "https://pic.maizuo.com/usr/movie/6d94e61f1b3824e388dd782c527a9e87.jpg",
          "actors": [
            {
              "name": "宫崎骏 ",
              "role": "导演",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/8c495b0bde95a2404d3c30ccb57a31fb.jpg"
            },
            {
              "name": "日高法子",
              "role": " 小月 ",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/8d26436568074eb22a850d205da513a8.jpg"
            },
            {
              "name": "坂本千夏",
              "role": "小梅",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/1b30e87e46e8d72a3f38972daa1d3fe6.jpg"
            },
            {
              "name": "糸井重里",
              "role": "爸爸    草壁先生 ",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/81b03e6237e7269ce6499d274be12ca2.jpg"
            },
            {
              "name": "岛本须美",
              "role": " 妈妈",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/7d63be2cbe96765fc2ba721317824094.jpg"
            },
            {
              "name": "北林谷荣",
              "role": " 婆婆",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/6cbac29e52d3e36da6a5bf0424ff00a2.jpg"
            }
          ],
          "director": "宫崎骏",
          "category": "动画|奇幻|冒险",
          "synopsis": "小月的母亲生病住院了，父亲带着她与四岁的妹妹小梅到乡间的居住。她们对那里的环境都感到十分新奇，也发现了很多有趣的事情。她们遇到了很多小精灵，她们来到属于她们的环境中，看到了她们世界中很多的奇怪事物，更与一只大大胖胖的龙猫成为了朋友。龙猫与小精灵们利用他们的神奇力量，为小月与妹妹带来了很多神奇的景观，令她们大开眼界。　　妹妹小梅常常挂念生病中的母亲，嚷着要姐姐带着她去看母亲，但小月拒绝了。小梅竟然自己前往，不料途中迷路了，小月只好寻找她的龙猫及小精灵朋友们帮助",
          "filmType": {
            "name": "2D",
            "value": 1
          },
          "nation": "日本",
          "language": " 日语",
          "videoId": "",
          "premiereAt": 1544745600,
          "timeType": 3,
          "runtime": 86,
          "item": {
            "name": "2D",
            "type": 1
          },
          "isPresale": true,
          "isSale": false
        },
        {
          "filmId": 4378,
          "name": "印度合伙人",
          "poster": "https://pic.maizuo.com/usr/movie/9a65b1fb1b515aef268e423103d8caf9.jpg",
          "actors": [
            {
              "name": " 拉迪卡·艾普特",
              "role": "",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/46dcb9c74d412ee3b96747579efe6c09.jpg"
            },
            {
              "name": " 雷.雷富",
              "role": "",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/a1932e4fd5828b49c91e32f63bb4a1a3.jpg"
            },
            {
              "name": " 阿克谢·库玛尔",
              "role": "",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/81e3228a284f72dbafc58323251f3afe.jpg"
            },
            {
              "name": "阿米达普·巴强 ",
              "role": "",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/7c186acf387c42fa2384af27736e96c9.jpg"
            },
            {
              "name": " 索娜姆·卡普尔",
              "role": "",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/08e2dacf62f60848164daef406efdd57.jpg"
            }
          ],
          "director": "R·巴尔基",
          "category": "剧情|喜剧|传记",
          "synopsis": "阿克谢·库马尔主演，根据Twinkle Khanna所著传记《The Legend Of Lakshmi Prasad》改编，原型是印度企业家Arunachalam Muruganantham，他发明了低成本的卫生巾生产机，为印度农村的经期卫生观念带来变革。“权势之人、强壮之人不会让国家变强，女性强大、母亲强大、姐妹们强大后，国家才会强”。",
          "filmType": {
            "name": "2D",
            "value": 1
          },
          "nation": "印度",
          "language": "印地语",
          "videoId": "XMzYzMDg5NjQyOA==",
          "premiereAt": 1544745600,
          "timeType": 3,
          "runtime": 140,
          "item": {
            "name": "2D",
            "type": 1
          },
          "isPresale": true,
          "isSale": false
        },
        {
          "filmId": 4472,
          "name": "网络谜踪",
          "poster": "https://pic.maizuo.com/usr/movie/65353377683c98a71519be7bafa1198b.jpg",
          "actors": [
            {
              "name": "阿尼什·查甘蒂 ",
              "role": "导演",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/6c6dc6de4eaf2262cafa26785a49d945.jpg"
            },
            {
              "name": "约翰·赵 ",
              "role": "大卫",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/faa6c0c6c011abafd2448f2286d32aff.jpg"
            },
            {
              "name": "米切尔·拉 ",
              "role": "玛格 ",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/4f8d5192960cd39971383e0fb1c19a3c.jpg"
            },
            {
              "name": "黛博拉·梅辛",
              "role": "罗斯玛丽探员",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/2cbea7d6c616583b171a20088051557f.jpg"
            }
          ],
          "director": "阿尼什·查甘蒂",
          "category": "剧情|悬疑|惊悚|犯罪",
          "synopsis": "工程师大卫·金（约翰·赵 饰）一直引以为傲的16岁乖女玛戈特突然失踪。前来调查此案的警探怀疑女儿离家出走。不满这一结论的父亲为了寻找真相，独自展开调查。他打开了女儿的笔记本电脑，用社交软件开始寻找破案线索。大卫必须在女儿消失之前，沿着她在虚拟世界的足迹找到她…",
          "filmType": {
            "name": "2D",
            "value": 1
          },
          "nation": "美国  俄罗斯",
          "language": "英语",
          "videoId": "XMzkzNzkxNDk5Mg==",
          "premiereAt": 1544745600,
          "timeType": 3,
          "runtime": 102,
          "item": {
            "name": "2D",
            "type": 1
          },
          "isPresale": true,
          "isSale": false
        },
        {
          "filmId": 4453,
          "name": "无名之辈",
          "poster": "https://pic.maizuo.com/usr/movie/83600473ca516fbaf7b2461596af40df.jpg",
          "actors": [
            {
              "name": "陈建斌 ",
              "role": "马先勇",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/a7722557b07de3fa0a05a8edb2f6c3ed.jpg"
            },
            {
              "name": "任素汐  ",
              "role": "马嘉旗 ",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/d7ab46a0dbbcda43d4105f809c02f5d5.jpg"
            },
            {
              "name": "章宇",
              "role": "眼镜",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/0751a93544c7ea154d65c6af11e72821.jpg"
            },
            {
              "name": "王砚辉",
              "role": " 演员",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/6f60ba0ade5443857b3bbefdd1493276.jpg"
            }
          ],
          "director": "饶晓志",
          "category": "剧情|喜剧",
          "synopsis": "在一座山间小城中，一对低配劫匪、一个落魄的泼皮保安、一个身体残疾却性格彪悍的残毒舌女以及一系列生活在社会不同轨迹上的小人物，在一个貌似平常的日子里，因为一把丢失的老枪和一桩当天发生在城中的乌龙劫案，从而被阴差阳错地拧到一起，发生的一幕幕令人啼笑皆非的荒诞喜剧。",
          "filmType": {
            "name": "2D",
            "value": 1
          },
          "nation": "中国大陆",
          "language": "汉语普通话",
          "videoId": "XMzg5Mjg3ODI4OA==",
          "premiereAt": 1542326400,
          "timeType": 3,
          "runtime": 100,
          "grade": "8.1",
          "item": {
            "name": "2D",
            "type": 1
          },
          "isPresale": true,
          "isSale": false
        },
        {
          "filmId": 4452,
          "name": "绿毛怪格林奇",
          "poster": "https://pic.maizuo.com/usr/movie/1891d0998a35edb63731ffed973f07cb.jpg",
          "actors": [
            {
              "name": "本尼迪克特·康伯巴奇",
              "role": "配音",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/c01faa54410c921a8ba0552806a60828.jpg"
            },
            {
              "name": " 亚罗·切尼",
              "role": "导演 ",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/f7215d6642f6453c810ce0615c0ceadb.jpg"
            },
            {
              "name": "斯科特·摩西尔 ",
              "role": " 导演",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/40da16dcd9dc5501ce2ef3f699f37295.jpg"
            }
          ],
          "director": "亚罗·切尼|/|斯科特·摩西尔",
          "category": "喜剧|动画",
          "synopsis": "《圣诞怪杰》根据“苏斯博士”（Dr. Seuss）的著名畅销童书改编，故事主角是一个绿色的怪物格林奇（Grinch），他非常非常痛恨圣诞节，因为他是一个孤儿。为了不让人们过圣诞，他把所有圣诞礼物都偷走了。最后还是一个纯真的小女孩融化了他冷漠的心。",
          "filmType": {
            "name": "2D",
            "value": 1
          },
          "nation": "美国",
          "language": "英语",
          "videoId": "XMzgyOTE5OTE4OA==",
          "premiereAt": 1544745600,
          "timeType": 3,
          "runtime": 100,
          "item": {
            "name": "2D",
            "type": 1
          },
          "isPresale": true,
          "isSale": false
        },
        {
          "filmId": 4485,
          "name": "大黄蜂",
          "poster": "https://pic.maizuo.com/usr/movie/4736d8f3eca6aeb2a406a71e8712c8e9.jpg",
          "actors": [
            {
              "name": "特拉维斯·奈特",
              "role": "导演",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/00e0b6f6e3feceb831c65b43aacb7e02.jpg"
            },
            {
              "name": "海莉·斯坦菲尔德",
              "role": "查莉·沃森 ",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/02a4e1b1de9d4d2f45ae44dfe3675267.jpg"
            },
            {
              "name": "杰森·德鲁克",
              "role": " 奥蒂斯",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/d016d7f719a397fe91a76530179afe27.jpg"
            },
            {
              "name": "约翰·塞纳",
              "role": "伯恩斯探员",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/3836b273cc7831c1f6ab38d18844749f.jpg"
            },
            {
              "name": "小豪尔赫·兰登伯格 ",
              "role": "咪莫 ",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/f9011c734590f15d37f3774458e1eb56.jpg"
            }
          ],
          "director": "特拉维斯·奈特",
          "category": "动作|科幻|冒险",
          "synopsis": "本片故事设定在1987年，正值青春期的18岁少女查理Charlie（海莉·斯坦菲尔德 饰）在加州海边小镇的废弃场里发现了伤痕累累的大黄蜂，他们之间会发生怎样的故事呢？让我们拭目以待！",
          "filmType": {
            "name": "2D",
            "value": 1
          },
          "nation": "美国",
          "language": "英语",
          "videoId": "XMzk0OTI4NDYwOA==",
          "premiereAt": 1546560000,
          "timeType": 3,
          "runtime": 100,
          "item": {
            "name": "2D",
            "type": 1
          },
          "isPresale": true,
          "isSale": false
        },
        {
          "filmId": 4476,
          "name": "蜘蛛侠：平行宇宙",
          "poster": "https://pic.maizuo.com/usr/movie/bcc1f8442870e5778a5e6382aaf2c008.jpg",
          "actors": [
            {
              "name": "尼古拉斯·凯奇",
              "role": "配 暗影蜘蛛侠",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/5c470a7b17797e3b2e237522f70152b2.jpg"
            },
            {
              "name": " 沙梅克·摩尔",
              "role": "配 小黑蛛   迈尔斯·莫拉莱斯 ",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/5d57d03eebc473a5ade865c657c57dc7.jpg"
            },
            {
              "name": "杰克·约翰逊",
              "role": "配 蜘蛛侠   彼得·帕克",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/88a55ad59acf90663b8a92f47bfb8c32.jpg"
            },
            {
              "name": " 鲍勃·佩尔西凯蒂",
              "role": "导演",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/f9e7143d549a2fe4766dbd9584edd9fd.jpg"
            },
            {
              "name": " 彼得·拉姆齐",
              "role": "导演",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/e92e8d4849dbc968a8c5b83fe2784536.jpg"
            }
          ],
          "director": "鲍勃·佩尔西凯蒂  彼得·拉姆齐   罗德尼·罗斯曼",
          "category": "动作|科幻|动画",
          "synopsis": "蜘蛛侠不止一个！漫威超英动画巨制《蜘蛛侠：平行宇宙》将经典漫画与CGI技术完美呈现，讲述了普通高中生迈尔斯·莫拉斯如何师从蜘蛛侠彼得·帕克，成长为新一代超级英雄的故事。影片中迈尔斯和从其它平行宇宙中穿越而来的彼得、女蜘蛛侠格温、暗影蜘蛛侠、潘妮·帕克和蜘猪侠集结成团，六位蜘蛛侠首次同框大银幕，对抗蜘蛛侠宇宙最强反派。",
          "filmType": {
            "name": "2D",
            "value": 1
          },
          "nation": "美国",
          "language": "英语",
          "videoId": "",
          "premiereAt": 1545350400,
          "timeType": 3,
          "runtime": 100,
          "item": {
            "name": "2D",
            "type": 1
          },
          "isPresale": true,
          "isSale": false
        },
        {
          "filmId": 4474,
          "name": "地球最后的夜晚",
          "poster": "https://pic.maizuo.com/usr/movie/e6c4e01614ef84205165e09eeed66dfa.jpg",
          "actors": [
            {
              "name": "毕赣 ",
              "role": "导演",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/cf9dd7beac72d3c95f557732dd8484d3.jpg"
            },
            {
              "name": "黄觉",
              "role": "罗纮武",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/aca56a41b7808dec78e2ef6449254dff.jpg"
            },
            {
              "name": "汤唯  ",
              "role": "万绮雯",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/46d17901537136a96f9488c4e5730010.jpg"
            },
            {
              "name": " 张艾嘉",
              "role": "红发女   白猫的母亲",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/7e421bd21b0c2d4f1c9c9f269d6ad762.jpg"
            },
            {
              "name": "李鸿其 ",
              "role": "白猫",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/338aa3e878d5d646e83c416d18711da7.jpg"
            }
          ],
          "director": "毕赣",
          "category": "剧情|悬疑",
          "synopsis": "罗紘武（黄觉 饰）因父亲离世再次回到贵州。12年前，好友白猫（李鸿其 饰）被杀，罗紘武在追查凶手左宏元（陈永忠 饰）的过程中，被凶手的情人万绮雯（汤唯 饰）所利用。从此以后，这个神秘的女人构成了他所有的记忆、欲望、信念和梦魇，一段追寻之旅让他发现了被隐藏多年的秘密……",
          "filmType": {
            "name": "2D",
            "value": 1
          },
          "nation": "中国大陆  法国",
          "language": "汉语普通话",
          "videoId": "XMzg4NzczNTk5Ng==",
          "premiereAt": 1546214400,
          "timeType": 3,
          "runtime": 140,
          "item": {
            "name": "2D",
            "type": 1
          },
          "isPresale": true,
          "isSale": false
        },
        {
          "filmId": 4467,
          "name": "叶问外传：张天志",
          "poster": "https://pic.maizuo.com/usr/movie/57a97f401a6e0e497d65820dedcd9cf1.jpg",
          "actors": [
            {
              "name": "袁和平",
              "role": "导演",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/a58546b10ba7d5f5e465635958b67df6.jpg"
            },
            {
              "name": "张晋",
              "role": "张天志",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/e5c949dfd3d080daabf9bd077e922000.jpg"
            },
            {
              "name": "杨紫琼",
              "role": " Sis Ha",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/e6455b7cdfd122cf4f39dd08ecb9c1ed.jpg"
            },
            {
              "name": "柳岩",
              "role": "演员 ",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/81d8680c24106a89f253904976d45b08.jpg"
            },
            {
              "name": "戴夫·巴蒂斯塔",
              "role": "欧文·戴维森 ",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/46bf136921d64a953957674ce08b52c3.jpg"
            },
            {
              "name": "托尼·贾",
              "role": "演员 ",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/f8e22fb5cba1e3297fd1bd05abd4337f.jpg"
            }
          ],
          "director": "袁和平",
          "category": "动作",
          "synopsis": "影片讲述咏春拳传人张天志对抗恶霸老外，唤起国人民族尊严的故事。",
          "filmType": {
            "name": "2D",
            "value": 1
          },
          "nation": "中国大陆  香港",
          "language": "汉语普通粤语",
          "videoId": "XMzkyMTU2MTMyMA==",
          "premiereAt": 1545350400,
          "timeType": 3,
          "runtime": 100,
          "item": {
            "name": "2D",
            "type": 1
          },
          "isPresale": true,
          "isSale": false
        },
        {
          "filmId": 4378,
          "name": "印度合伙人",
          "poster": "https://pic.maizuo.com/usr/movie/9a65b1fb1b515aef268e423103d8caf9.jpg",
          "actors": [
            {
              "name": " 拉迪卡·艾普特",
              "role": "",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/46dcb9c74d412ee3b96747579efe6c09.jpg"
            },
            {
              "name": " 雷.雷富",
              "role": "",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/a1932e4fd5828b49c91e32f63bb4a1a3.jpg"
            },
            {
              "name": " 阿克谢·库玛尔",
              "role": "",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/81e3228a284f72dbafc58323251f3afe.jpg"
            },
            {
              "name": "阿米达普·巴强 ",
              "role": "",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/7c186acf387c42fa2384af27736e96c9.jpg"
            },
            {
              "name": " 索娜姆·卡普尔",
              "role": "",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/08e2dacf62f60848164daef406efdd57.jpg"
            }
          ],
          "director": "R·巴尔基",
          "category": "剧情|喜剧|传记",
          "synopsis": "阿克谢·库马尔主演，根据Twinkle Khanna所著传记《The Legend Of Lakshmi Prasad》改编，原型是印度企业家Arunachalam Muruganantham，他发明了低成本的卫生巾生产机，为印度农村的经期卫生观念带来变革。“权势之人、强壮之人不会让国家变强，女性强大、母亲强大、姐妹们强大后，国家才会强”。",
          "filmType": {
            "name": "2D",
            "value": 1
          },
          "nation": "印度",
          "language": "印地语",
          "videoId": "XMzYzMDg5NjQyOA==",
          "premiereAt": 1544745600,
          "timeType": 3,
          "runtime": 140,
          "item": {
            "name": "2D",
            "type": 1
          },
          "isPresale": true,
          "isSale": false
        },
        {
          "filmId": 4452,
          "name": "绿毛怪格林奇",
          "poster": "https://pic.maizuo.com/usr/movie/1891d0998a35edb63731ffed973f07cb.jpg",
          "actors": [
            {
              "name": "本尼迪克特·康伯巴奇",
              "role": "配音",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/c01faa54410c921a8ba0552806a60828.jpg"
            },
            {
              "name": " 亚罗·切尼",
              "role": "导演 ",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/f7215d6642f6453c810ce0615c0ceadb.jpg"
            },
            {
              "name": "斯科特·摩西尔 ",
              "role": " 导演",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/40da16dcd9dc5501ce2ef3f699f37295.jpg"
            }
          ],
          "director": "亚罗·切尼|/|斯科特·摩西尔",
          "category": "喜剧|动画",
          "synopsis": "《圣诞怪杰》根据“苏斯博士”（Dr. Seuss）的著名畅销童书改编，故事主角是一个绿色的怪物格林奇（Grinch），他非常非常痛恨圣诞节，因为他是一个孤儿。为了不让人们过圣诞，他把所有圣诞礼物都偷走了。最后还是一个纯真的小女孩融化了他冷漠的心。",
          "filmType": {
            "name": "2D",
            "value": 1
          },
          "nation": "美国",
          "language": "英语",
          "videoId": "XMzgyOTE5OTE4OA==",
          "premiereAt": 1544745600,
          "timeType": 3,
          "runtime": 100,
          "item": {
            "name": "2D",
            "type": 1
          },
          "isPresale": true,
          "isSale": false
        },
        {
          "filmId": 4471,
          "name": "龙猫",
          "poster": "https://pic.maizuo.com/usr/movie/6d94e61f1b3824e388dd782c527a9e87.jpg",
          "actors": [
            {
              "name": "宫崎骏 ",
              "role": "导演",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/8c495b0bde95a2404d3c30ccb57a31fb.jpg"
            },
            {
              "name": "日高法子",
              "role": " 小月 ",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/8d26436568074eb22a850d205da513a8.jpg"
            },
            {
              "name": "坂本千夏",
              "role": "小梅",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/1b30e87e46e8d72a3f38972daa1d3fe6.jpg"
            },
            {
              "name": "糸井重里",
              "role": "爸爸    草壁先生 ",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/81b03e6237e7269ce6499d274be12ca2.jpg"
            },
            {
              "name": "岛本须美",
              "role": " 妈妈",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/7d63be2cbe96765fc2ba721317824094.jpg"
            },
            {
              "name": "北林谷荣",
              "role": " 婆婆",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/6cbac29e52d3e36da6a5bf0424ff00a2.jpg"
            }
          ],
          "director": "宫崎骏",
          "category": "动画|奇幻|冒险",
          "synopsis": "小月的母亲生病住院了，父亲带着她与四岁的妹妹小梅到乡间的居住。她们对那里的环境都感到十分新奇，也发现了很多有趣的事情。她们遇到了很多小精灵，她们来到属于她们的环境中，看到了她们世界中很多的奇怪事物，更与一只大大胖胖的龙猫成为了朋友。龙猫与小精灵们利用他们的神奇力量，为小月与妹妹带来了很多神奇的景观，令她们大开眼界。　　妹妹小梅常常挂念生病中的母亲，嚷着要姐姐带着她去看母亲，但小月拒绝了。小梅竟然自己前往，不料途中迷路了，小月只好寻找她的龙猫及小精灵朋友们帮助",
          "filmType": {
            "name": "2D",
            "value": 1
          },
          "nation": "日本",
          "language": " 日语",
          "videoId": "",
          "premiereAt": 1544745600,
          "timeType": 3,
          "runtime": 86,
          "item": {
            "name": "2D",
            "type": 1
          },
          "isPresale": true,
          "isSale": false
        },
        {
          "filmId": 4472,
          "name": "网络谜踪",
          "poster": "https://pic.maizuo.com/usr/movie/65353377683c98a71519be7bafa1198b.jpg",
          "actors": [
            {
              "name": "阿尼什·查甘蒂 ",
              "role": "导演",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/6c6dc6de4eaf2262cafa26785a49d945.jpg"
            },
            {
              "name": "约翰·赵 ",
              "role": "大卫",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/faa6c0c6c011abafd2448f2286d32aff.jpg"
            },
            {
              "name": "米切尔·拉 ",
              "role": "玛格 ",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/4f8d5192960cd39971383e0fb1c19a3c.jpg"
            },
            {
              "name": "黛博拉·梅辛",
              "role": "罗斯玛丽探员",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/2cbea7d6c616583b171a20088051557f.jpg"
            }
          ],
          "director": "阿尼什·查甘蒂",
          "category": "剧情|悬疑|惊悚|犯罪",
          "synopsis": "工程师大卫·金（约翰·赵 饰）一直引以为傲的16岁乖女玛戈特突然失踪。前来调查此案的警探怀疑女儿离家出走。不满这一结论的父亲为了寻找真相，独自展开调查。他打开了女儿的笔记本电脑，用社交软件开始寻找破案线索。大卫必须在女儿消失之前，沿着她在虚拟世界的足迹找到她…",
          "filmType": {
            "name": "2D",
            "value": 1
          },
          "nation": "美国  俄罗斯",
          "language": "英语",
          "videoId": "XMzkzNzkxNDk5Mg==",
          "premiereAt": 1544745600,
          "timeType": 3,
          "runtime": 102,
          "item": {
            "name": "2D",
            "type": 1
          },
          "isPresale": true,
          "isSale": false
        },
        {
          "filmId": 4475,
          "name": "中国合伙人2",
          "poster": "https://pic.maizuo.com/usr/movie/29b961db51badb237ef9e79000deb627.jpg",
          "actors": [
            {
              "name": "凌潇肃 ",
              "role": " 秦磊",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/145d4ab3b1491e0861d96379044d88cc.jpg"
            },
            {
              "name": "赵立新",
              "role": " 楚振辉",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/2793ea7fa07f17b3532e1c7fafeef250.jpg"
            },
            {
              "name": "琦 ",
              "role": " 刘珂",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/d667d66367eb64cfce414e63320f5b08.jpg"
            },
            {
              "name": "王嘉 ",
              "role": "徐顺之",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/5774bedf4c8609b6d67163ea39490feb.jpg"
            },
            {
              "name": "马梦唯",
              "role": "赵晴  ",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/3cb9b68125241ab8d316abff0c635249.jpg"
            }
          ],
          "director": " 刘亚当",
          "category": "剧情",
          "synopsis": "影片讲述了从九十年代末到当下的近二十年期间，互联网行业在中国从发轫、发展到行业泡沫再到高速爆发行业成熟的过程。影片选取了三位有代表的行业人物，程序员楚振辉、秦磊和投资人徐顺之。影片围绕楚振辉、秦磊，并以徐顺之的视角展现了一个程序员向创业者的蜕变，讲述他们三人在互联网大潮中创业、守业以及行业升级的故事，表现了中国互联网人的中国精神和民族情怀。他们将成为新时代的中国合伙人，而中国互联网行业的创业热血正在继续生生不息。",
          "filmType": {
            "name": "2D",
            "value": 1
          },
          "nation": "中国大陆",
          "language": "汉语普通话  英语",
          "videoId": "XMzkzOTI2NzY5Mg",
          "premiereAt": 1545091200,
          "timeType": 3,
          "runtime": 100,
          "item": {
            "name": "2D",
            "type": 1
          },
          "isPresale": true,
          "isSale": false
        },
        {
          "filmId": 4467,
          "name": "叶问外传：张天志",
          "poster": "https://pic.maizuo.com/usr/movie/57a97f401a6e0e497d65820dedcd9cf1.jpg",
          "actors": [
            {
              "name": "袁和平",
              "role": "导演",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/a58546b10ba7d5f5e465635958b67df6.jpg"
            },
            {
              "name": "张晋",
              "role": "张天志",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/e5c949dfd3d080daabf9bd077e922000.jpg"
            },
            {
              "name": "杨紫琼",
              "role": " Sis Ha",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/e6455b7cdfd122cf4f39dd08ecb9c1ed.jpg"
            },
            {
              "name": "柳岩",
              "role": "演员 ",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/81d8680c24106a89f253904976d45b08.jpg"
            },
            {
              "name": "戴夫·巴蒂斯塔",
              "role": "欧文·戴维森 ",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/46bf136921d64a953957674ce08b52c3.jpg"
            },
            {
              "name": "托尼·贾",
              "role": "演员 ",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/f8e22fb5cba1e3297fd1bd05abd4337f.jpg"
            }
          ],
          "director": "袁和平",
          "category": "动作",
          "synopsis": "影片讲述咏春拳传人张天志对抗恶霸老外，唤起国人民族尊严的故事。",
          "filmType": {
            "name": "2D",
            "value": 1
          },
          "nation": "中国大陆  香港",
          "language": "汉语普通粤语",
          "videoId": "XMzkyMTU2MTMyMA==",
          "premiereAt": 1545350400,
          "timeType": 3,
          "runtime": 100,
          "item": {
            "name": "2D",
            "type": 1
          },
          "isPresale": true,
          "isSale": false
        },
        {
          "filmId": 4473,
          "name": "武林怪兽",
          "poster": "https://pic.maizuo.com/usr/movie/e55d5e67f63b39a553e3076d7ff83ed4.jpg",
          "actors": [
            {
              "name": "刘伟强",
              "role": " 导演",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/95e0d20da4424a222548384de5fed151.jpg"
            },
            {
              "name": "古天乐 ",
              "role": "封四海",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/5f6edb1177b44cfb89ef8ddff21177b5.jpg"
            },
            {
              "name": "陈学冬 ",
              "role": " 甄剑",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/8fee3df6046730b1d4dccef4bde15ab5.jpg"
            },
            {
              "name": "郭碧婷",
              "role": " 冷冰冰",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/d8975b1df7147aaad7d1669d15efa556.jpg"
            },
            {
              "name": "包贝尔",
              "role": " 武柏",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/37482149b65e6369c1e6a305c4653011.jpg"
            },
            {
              "name": "王太利 ",
              "role": "岳山翁",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/52468577bf0d65fffdf11bdfb0776f5f.jpg"
            }
          ],
          "director": "刘伟强",
          "category": "动作|奇幻|武侠",
          "synopsis": "明朝万历年间，东厂督主孙玉鹤奉命捉拿宫中逃走的怪兽；同时，义军少侠甄剑和师妹熊娇娇、侠女冷冰冰合谋聚集一帮绿林好汉，欲劫取官银。官银不翼而飞，却迎来了朝廷钦犯封四海、江湖浪子武柏……　　更大的危机在于，怪兽就在附近窥视着这一切……",
          "filmType": {
            "name": "2D",
            "value": 1
          },
          "nation": "中国大陆  香港",
          "language": "汉语普通话",
          "videoId": "",
          "premiereAt": 1545350400,
          "timeType": 3,
          "runtime": 100,
          "item": {
            "name": "2D",
            "type": 1
          },
          "isPresale": true,
          "isSale": false
        },
        {
          "filmId": 4476,
          "name": "蜘蛛侠：平行宇宙",
          "poster": "https://pic.maizuo.com/usr/movie/bcc1f8442870e5778a5e6382aaf2c008.jpg",
          "actors": [
            {
              "name": "尼古拉斯·凯奇",
              "role": "配 暗影蜘蛛侠",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/5c470a7b17797e3b2e237522f70152b2.jpg"
            },
            {
              "name": " 沙梅克·摩尔",
              "role": "配 小黑蛛   迈尔斯·莫拉莱斯 ",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/5d57d03eebc473a5ade865c657c57dc7.jpg"
            },
            {
              "name": "杰克·约翰逊",
              "role": "配 蜘蛛侠   彼得·帕克",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/88a55ad59acf90663b8a92f47bfb8c32.jpg"
            },
            {
              "name": " 鲍勃·佩尔西凯蒂",
              "role": "导演",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/f9e7143d549a2fe4766dbd9584edd9fd.jpg"
            },
            {
              "name": " 彼得·拉姆齐",
              "role": "导演",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/e92e8d4849dbc968a8c5b83fe2784536.jpg"
            }
          ],
          "director": "鲍勃·佩尔西凯蒂  彼得·拉姆齐   罗德尼·罗斯曼",
          "category": "动作|科幻|动画",
          "synopsis": "蜘蛛侠不止一个！漫威超英动画巨制《蜘蛛侠：平行宇宙》将经典漫画与CGI技术完美呈现，讲述了普通高中生迈尔斯·莫拉斯如何师从蜘蛛侠彼得·帕克，成长为新一代超级英雄的故事。影片中迈尔斯和从其它平行宇宙中穿越而来的彼得、女蜘蛛侠格温、暗影蜘蛛侠、潘妮·帕克和蜘猪侠集结成团，六位蜘蛛侠首次同框大银幕，对抗蜘蛛侠宇宙最强反派。",
          "filmType": {
            "name": "2D",
            "value": 1
          },
          "nation": "美国",
          "language": "英语",
          "videoId": "",
          "premiereAt": 1545350400,
          "timeType": 3,
          "runtime": 100,
          "item": {
            "name": "2D",
            "type": 1
          },
          "isPresale": true,
          "isSale": false
        },
        {
          "filmId": 4478,
          "name": "白蛇：缘起",
          "poster": "https://pic.maizuo.com/usr/movie/e66bd63bc8c6f333045abd93978cf811.jpg",
          "actors": [
            {
              "name": "黄家康",
              "role": " 导演",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/3e4f9a6349830a7914c7214107ae9dec.jpg"
            },
            {
              "name": "赵霁",
              "role": " 导演",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/11be8c6caf1ca00ff55e052ea4f92ae9.jpg"
            },
            {
              "name": "杨天翔 ",
              "role": "配 阿宣",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/d85c072f09b0f54a051f010c10205ddd.jpg"
            },
            {
              "name": "唐小喜",
              "role": " 配 小青",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/71df09afb73ab5eb25c09eca0fab3e1e.jpg"
            },
            {
              "name": "张喆 ",
              "role": "配 小白",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/80cc5a52d21490869e038882c103bcde.jpg"
            }
          ],
          "director": "黄家康  赵霁",
          "category": "爱情|动画|奇幻",
          "synopsis": "晚唐年间，国师发动民众大量捕蛇。前去刺杀国师的白蛇意外失忆，被捕蛇村少年救下。为帮助少女找回记忆，两人踏上了一段冒险旅程。冒险的过程让两人感情迅速升温，但少女蛇妖的身份也逐渐显露，另一边国师与蛇族之间不可避免的大战也即将打响，两人的爱情将要接受巨大考验。",
          "filmType": {
            "name": "2D",
            "value": 1
          },
          "nation": "中国大陆  美国",
          "language": "汉语普通话",
          "videoId": "XMzgzMjE1MjE1Mg==",
          "premiereAt": 1545350400,
          "timeType": 3,
          "runtime": 95,
          "item": {
            "name": "2D",
            "type": 1
          },
          "isPresale": false,
          "isSale": false
        },
        {
          "filmId": 4479,
          "name": "大人物",
          "poster": "https://pic.maizuo.com/usr/movie/c672d27904c91495500048c0ffbbae44.jpg",
          "actors": [
            {
              "name": "五百 ",
              "role": "导演",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/1261126bf34f87a888b10cbc521169f3.jpg"
            },
            {
              "name": "贝尔 ",
              "role": " 赵泰",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/8e9b82c622053a98a9e79ae6d6509dc3.jpg"
            },
            {
              "name": "王千源 ",
              "role": " 孙大圣",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/7cd3d901af9b248e12e92357d806924e.jpg"
            },
            {
              "name": "王迅 ",
              "role": " 崔京民",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/7a6a2b043707a2ce6b0f195c83f76eec.jpg"
            },
            {
              "name": "王砚辉  ",
              "role": "吴队长",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/d654a7035d56695583dc8f967c51bd2d.jpg"
            },
            {
              "name": "屈菁菁 ",
              "role": "高亚男",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/eb1239de50f8cd984a33aede0726baa0.jpg"
            }
          ],
          "director": "五百",
          "category": "剧情|动作",
          "synopsis": "无力维权的修车工遭遇非法强拆后，选择跳楼自杀；随着小刑警孙大圣（王千源饰）调查的深入，发现这场看似简单的民事纠纷背后其实另有隐情；随着嫌疑目标的锁定，赵泰（包贝尔饰）和崔京民（王迅饰）为代表的反派集团被盯上后，公然藐视法律挑衅警察。面对反派集团金钱诱惑、顶头上司的警告劝阻、家人性命遭受威胁，这场力量悬殊的正邪较量将会如何收场……",
          "filmType": {
            "name": "2D",
            "value": 1
          },
          "nation": "中国大陆",
          "language": "汉语普通话",
          "videoId": "XMzg4Mzg4NTc2OA==",
          "premiereAt": 1545350400,
          "timeType": 3,
          "runtime": 100,
          "item": {
            "name": "2D",
            "type": 1
          },
          "isPresale": false,
          "isSale": false
        },
        {
          "filmId": 4424,
          "name": "毒液：致命守护者",
          "poster": "https://pic.maizuo.com/usr/movie/1781f676e488fb1bfe0cf6277e5bd78a.jpg",
          "actors": [
            {
              "name": "汤姆·哈迪",
              "role": "埃迪·布洛克 / 毒液",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/8d65dc2e228ddce683d2aa1eacd516bd.jpg"
            },
            {
              "name": "里兹·阿迈德 ",
              "role": "德雷克博士",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/8a28f9e7fef8c34577e131be81b00426.jpg"
            },
            {
              "name": " 米歇尔·威廉姆斯 ",
              "role": "安妮·韦英 ",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/b623d05f6b4ad819cbac8c4d98446fe6.jpg"
            },
            {
              "name": " 斯科特·黑兹",
              "role": "",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/c638a5209dfd71f6e5792b5be98a1d9c.jpg"
            },
            {
              "name": "瑞德·斯科特 ",
              "role": "Patrick Mulligan",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/6580896dac2546a0cbdde69e9d9a2cec.jpg"
            }
          ],
          "director": "鲁本·弗雷斯彻",
          "category": "动作|科幻|惊悚",
          "synopsis": "曾主演《敦刻尔克》《盗梦空间》等口碑大片的肌肉型男汤姆·哈迪在本片中饰演“毒液”的宿主–埃迪·布洛克。身为记者的埃迪在调查生命基金会老板卡尔顿·德雷克（里兹·阿迈德饰）的过程中，事业遭受重创，与未婚妻安妮·韦英（米歇尔·威廉姆斯饰）的关系岌岌可危，并意外被外星共生体入侵，历经挣扎对抗，最终成为拥有强大超能力，无人可挡的“毒液”。",
          "filmType": {
            "name": "IMAX3D",
            "value": 17
          },
          "nation": "美国 ",
          "language": "英语",
          "videoId": "XMzgyNjMyNDM4OA==",
          "premiereAt": 1541721600,
          "timeType": 3,
          "runtime": 112,
          "grade": "7.3",
          "item": {
            "name": "IMAX3D",
            "type": 17
          },
          "isPresale": true,
          "isSale": false
        },
        {
          "filmId": 1608,
          "name": "狗十三",
          "poster": "https://pic.maizuo.com/usr/100001608/b6aa550da3f540244fb84accfeb9b36f.jpg",
          "actors": [
            {
              "name": "曹保平",
              "role": " 导演",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/170f2ff44d796f544025f6ad2a5f01a6.jpg"
            },
            {
              "name": "张雪迎 ",
              "role": " 李玩",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/1e9e75a359af15aedecde331119a5c3f.jpg"
            },
            {
              "name": "果靖霖 ",
              "role": "李玩父亲",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/9bfbac6e8d55d4fda81f67585404c137.jpg"
            },
            {
              "name": "智一桐 ",
              "role": "爷爷",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/7aa3f3282de44bd6fcfbbe51c153d687.jpg"
            },
            {
              "name": "代旭",
              "role": " 演员",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/568e2640fae972c6181a9b98e761fdc9.jpg"
            },
            {
              "name": "黄诗佳",
              "role": " 李堂",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/d097d795b5b0970b575169ec2a237f53.jpg"
            }
          ],
          "director": "曹保平",
          "category": "剧情|家庭",
          "synopsis": "李玩十二岁，刚上初中，与年迈的爷爷奶奶同住。母亲在她幼时离家，父亲再婚与继母生了个弟弟。父亲焦虑着该如何告知李玩新生儿的到来，却意外因课业起了争执，为此父亲决定买一只小狗哄劝女儿。热爱物理学的李玩将小狗取名为“爱因斯坦”，但小狗在一次意外中走失，李玩为爱因斯坦走失的事情难过不止，家人为此也不得安宁。　　为了安抚李玩，家人将另一只同品种的小狗代替爱因斯坦。在全家人的压力之下，李玩越来越沉默。继母及新弟弟的加入让李玩觉得自己像个局外人，当家人称呼新来的小狗为「爱因斯坦」，她开始发现自己无法逃脱成人世界为她编织的谎言。",
          "filmType": {
            "name": "2D",
            "value": 1
          },
          "nation": "中国大陆",
          "language": "汉语普通话 西安话",
          "videoId": "",
          "premiereAt": 1544140800,
          "timeType": 3,
          "runtime": 119,
          "grade": "2",
          "item": {
            "name": "2D",
            "type": 1
          },
          "isPresale": true,
          "isSale": false
        },
        {
          "filmId": 4477,
          "name": "惊涛飓浪",
          "poster": "https://pic.maizuo.com/usr/movie/68770c17dd84fd5740f3e49637020d4a.jpg",
          "actors": [
            {
              "name": "谢琳·伍德蕾",
              "role": "塔米·奥尔德姆",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/943898db35e724bc5b71779119e28ed4.jpg"
            },
            {
              "name": "伊丽莎白·霍桑",
              "role": " 克里斯蒂",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/0e1a38468fee3f4a2faa119addd054ee.jpg"
            },
            {
              "name": "杰弗瑞·托马斯",
              "role": "彼得",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/b62b316dfd46afeab9d7df2f916e327e.jpg"
            },
            {
              "name": "巴塔萨·科马库",
              "role": "导演",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/29423400bcf2b68d2483c6f6a4e93bf9.jpg"
            },
            {
              "name": "山姆·克拉弗林",
              "role": "理查德·夏普",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/3c50fca15607218e662a9fd8a9cb7a78.jpg"
            }
          ],
          "director": "巴塔萨·科马库",
          "category": "爱情|灾难",
          "synopsis": "影片讲述了富有探索精神的塔米·奥尔德姆（谢琳·伍德蕾 饰）与未婚夫理查德·夏普（山姆·克拉弗林 饰）为完成梦想中冒险刺激的航海之旅，二人驾驶着帆艇从碧海蓝天的大溪地起航横渡太平洋。天有不测风云，不料二人在航行途中遭遇了强度全球排名前十的名为“雷蒙德”的四级飓风突然袭击。在风暴过后，依托于浮木上的塔米醒来发现帆艇已经被摧毁的破败不堪，更不幸的是她挚爱的男人理查德因身受重伤而奄奄一息，塔米徘徊于希望与绝望左右，而后在理查德鼓励之下，她坚定地燃起了求生的希望，并爆发了绝境之下的意志力和勇气，在一望无际的大海中挣扎生存……",
          "filmType": {
            "name": "2D",
            "value": 1
          },
          "nation": "美国",
          "language": "英语",
          "videoId": "XMzkzMDEwNzQxMg==",
          "premiereAt": 1544140800,
          "timeType": 3,
          "runtime": 100,
          "grade": "8",
          "item": {
            "name": "2D",
            "type": 1
          },
          "isPresale": true,
          "isSale": false
        },
        {
          "filmId": 4434,
          "name": "憨豆特工3 ",
          "poster": "https://pic.maizuo.com/usr/movie/fa4864c300d1d2e86c413fde6bebc157.jpg",
          "actors": [
            {
              "name": " 罗温·艾金森 ",
              "role": "演员",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/8ab9d2148d9504de25e43f8cd8008d7d.jpg"
            },
            {
              "name": " 欧嘉·柯瑞兰寇",
              "role": "演员",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/2a3061cb2c04ae4899ed7daea8eb9f46.jpg"
            },
            {
              "name": " 艾玛·汤普森",
              "role": "演员",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/7242b1c4eeb2008a0893dc3e3e3c9e05.jpg"
            },
            {
              "name": " 本·米勒",
              "role": "演员",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/e87db29338251667b7315ce3ca7857cb.jpg"
            },
            {
              "name": " 杰克·莱西",
              "role": "演员",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/5e9fdc5b02c49221e6ae019fb1939278.jpg"
            }
          ],
          "director": "大卫·科尔",
          "category": "喜剧|动作|冒险",
          "synopsis": "《憨豆特工3》是憨豆特工系列喜剧的第三部作品，罗温·艾金森再度回归，继续扮演大受欢迎的阴差阳错入行的特工强尼。这次的新冒险由一场黑客攻击拉开序幕，所有在职的特工都被暴露了身份，使得强尼成为情报处最后的救命稻草。因此获得“返聘”的强尼第一个出勤任务便是要找出这位超强 黑客 。木头木脑、技能堪忧的强尼将如何应对现代科技的挑战，成功完成任务呢？",
          "filmType": {
            "name": "2D",
            "value": 1
          },
          "nation": "法国   美国  英国",
          "language": "英语",
          "videoId": "XMzU0NDc4MjU1Ng==",
          "premiereAt": 1542931200,
          "timeType": 3,
          "runtime": 100,
          "grade": "7.8",
          "item": {
            "name": "2D",
            "type": 1
          },
          "isPresale": true,
          "isSale": false
        },
        {
          "filmId": 4475,
          "name": "中国合伙人2",
          "poster": "https://pic.maizuo.com/usr/movie/29b961db51badb237ef9e79000deb627.jpg",
          "actors": [
            {
              "name": "凌潇肃 ",
              "role": " 秦磊",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/145d4ab3b1491e0861d96379044d88cc.jpg"
            },
            {
              "name": "赵立新",
              "role": " 楚振辉",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/2793ea7fa07f17b3532e1c7fafeef250.jpg"
            },
            {
              "name": "琦 ",
              "role": " 刘珂",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/d667d66367eb64cfce414e63320f5b08.jpg"
            },
            {
              "name": "王嘉 ",
              "role": "徐顺之",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/5774bedf4c8609b6d67163ea39490feb.jpg"
            },
            {
              "name": "马梦唯",
              "role": "赵晴  ",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/3cb9b68125241ab8d316abff0c635249.jpg"
            }
          ],
          "director": " 刘亚当",
          "category": "剧情",
          "synopsis": "影片讲述了从九十年代末到当下的近二十年期间，互联网行业在中国从发轫、发展到行业泡沫再到高速爆发行业成熟的过程。影片选取了三位有代表的行业人物，程序员楚振辉、秦磊和投资人徐顺之。影片围绕楚振辉、秦磊，并以徐顺之的视角展现了一个程序员向创业者的蜕变，讲述他们三人在互联网大潮中创业、守业以及行业升级的故事，表现了中国互联网人的中国精神和民族情怀。他们将成为新时代的中国合伙人，而中国互联网行业的创业热血正在继续生生不息。",
          "filmType": {
            "name": "2D",
            "value": 1
          },
          "nation": "中国大陆",
          "language": "汉语普通话  英语",
          "videoId": "XMzkzOTI2NzY5Mg",
          "premiereAt": 1545091200,
          "timeType": 3,
          "runtime": 100,
          "item": {
            "name": "2D",
            "type": 1
          },
          "isPresale": true,
          "isSale": false
        },
        {
          "filmId": 4447,
          "name": "无敌破坏王2：大闹互联网",
          "poster": "https://pic.maizuo.com/usr/movie/cf413c6856d3c9317860c76025da9e8b.jpg",
          "actors": [
            {
              "name": "曼迪·摩尔",
              "role": " Rapunzel",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/ec1ef5fe89dc516ef548f43988cbdefc.jpg"
            },
            {
              "name": "约翰·C·赖利",
              "role": " Ralph",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/4b2ee97e715b6c966f4d8a98f44d10da.jpg"
            },
            {
              "name": "盖尔·加朵",
              "role": " Shank",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/6411a4e63a5c5788fa209fcf57246a9a.jpg"
            },
            {
              "name": "克里斯汀·贝尔",
              "role": "Anna",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/8adfb90619428249ff79cfa94d7d38ca.jpg"
            }
          ],
          "director": "菲尔·约翰斯顿    瑞奇·摩尔",
          "category": "喜剧|动画|奇幻|冒险",
          "synopsis": "《无敌破坏王2：大闹互联网》从电玩世界来到了广阔、未知又激动人心的虚拟网络世界，而互联网世界能否经得住破坏？电玩游戏破坏王拉尔夫和调皮女孩云妮洛普冒险前往未知的网络世界，寻找可以修复《甜蜜冲刺》游戏的组件。他们需要在网民们的帮助下在网络世界中不断前行，在这过程中他们遇到了热门网站BuzzzTube的核心人物——充满企业家精神的耶丝小姐。",
          "filmType": {
            "name": "2D",
            "value": 1
          },
          "nation": "美国",
          "language": "英语",
          "videoId": "XMzY0NTg0MzQxNg==",
          "premiereAt": 1542931200,
          "timeType": 3,
          "runtime": 100,
          "grade": "8.1",
          "item": {
            "name": "2D",
            "type": 1
          },
          "isPresale": true,
          "isSale": false
        },
        {
          "filmId": 4423,
          "name": "超时空大冒险",
          "poster": "https://pic.maizuo.com/usr/movie/fab75b7c0e301fe59cda7cc74c776688.jpg",
          "actors": [
            {
              "name": "李宝坤",
              "role": "导演",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/a55112113b592bf099aaa900415ac0ba.jpg"
            }
          ],
          "director": "李宝坤",
          "category": "动画|家庭|冒险",
          "synopsis": "很久很久以前，银河系有一个大魔王叫索克大魔王，他妄想统治世界，却被一个神秘法器打败，五百年后，索克大魔王再次回来世间，并开始了一个更加离奇的计划，沙漠巨蝎、洞穴迷宫、火山巨人，喷火恐龙，外星人卡卡超越时空带着乐乐和朵朵开启一段寻找神器的冒险之旅。",
          "filmType": {
            "name": "2D",
            "value": 1
          },
          "nation": "中国大陆",
          "language": "汉语普通话",
          "videoId": "",
          "premiereAt": 1538352000,
          "timeType": 3,
          "runtime": 75,
          "grade": "7.8",
          "item": {
            "name": "2D",
            "type": 1
          },
          "isPresale": true,
          "isSale": false
        },
        {
          "filmId": 4473,
          "name": "武林怪兽",
          "poster": "https://pic.maizuo.com/usr/movie/e55d5e67f63b39a553e3076d7ff83ed4.jpg",
          "actors": [
            {
              "name": "刘伟强",
              "role": " 导演",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/95e0d20da4424a222548384de5fed151.jpg"
            },
            {
              "name": "古天乐 ",
              "role": "封四海",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/5f6edb1177b44cfb89ef8ddff21177b5.jpg"
            },
            {
              "name": "陈学冬 ",
              "role": " 甄剑",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/8fee3df6046730b1d4dccef4bde15ab5.jpg"
            },
            {
              "name": "郭碧婷",
              "role": " 冷冰冰",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/d8975b1df7147aaad7d1669d15efa556.jpg"
            },
            {
              "name": "包贝尔",
              "role": " 武柏",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/37482149b65e6369c1e6a305c4653011.jpg"
            },
            {
              "name": "王太利 ",
              "role": "岳山翁",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/52468577bf0d65fffdf11bdfb0776f5f.jpg"
            }
          ],
          "director": "刘伟强",
          "category": "动作|奇幻|武侠",
          "synopsis": "明朝万历年间，东厂督主孙玉鹤奉命捉拿宫中逃走的怪兽；同时，义军少侠甄剑和师妹熊娇娇、侠女冷冰冰合谋聚集一帮绿林好汉，欲劫取官银。官银不翼而飞，却迎来了朝廷钦犯封四海、江湖浪子武柏……　　更大的危机在于，怪兽就在附近窥视着这一切……",
          "filmType": {
            "name": "2D",
            "value": 1
          },
          "nation": "中国大陆  香港",
          "language": "汉语普通话",
          "videoId": "",
          "premiereAt": 1545350400,
          "timeType": 3,
          "runtime": 100,
          "item": {
            "name": "2D",
            "type": 1
          },
          "isPresale": true,
          "isSale": false
        },
        {
          "filmId": 4449,
          "name": "神奇动物：格林德沃之罪 ",
          "poster": "https://pic.maizuo.com/usr/movie/358dd88b48bf568421a61547a9bef66a.jpg",
          "actors": [
            {
              "name": " 埃迪·雷德梅恩",
              "role": " Newt Scamander",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/4d828f38ac95b61fe7c9083050c638af.jpg"
            },
            {
              "name": " 凯瑟琳·沃特斯顿",
              "role": "Tina Goldstein",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/fc19ca1ca8fc5c24a0bfc19e7201fcbd.jpg"
            },
            {
              "name": "约翰尼·德普",
              "role": " Gellert Grindelwald",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/7ff01da7efbef84212b77d0ad6c0e8cc.jpg"
            },
            {
              "name": "裘德·洛",
              "role": "Albus Dumbledore",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/e9e0ea7106da0ac77c1a79fe08a28625.jpg"
            },
            {
              "name": " 埃兹拉·米勒",
              "role": "Credence Barebone",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/9054603fbac4e5f7b1deedddd987cbff.jpg"
            }
          ],
          "director": "大卫·叶茨",
          "category": "奇幻|冒险",
          "synopsis": "在《神奇动物在那里》第一部的结尾，纽特·斯卡曼德（埃迪·雷德梅恩 Eddie Redmayne 饰）协助美国魔法国会，将强大的黑巫师盖勒特·格林德沃（约翰尼·德普 Johnny Depp 饰）抓捕归案。但格林德沃不久便兑现狂言成功越狱，并开始纠集信徒，着手实现他们的邪恶目的：让纯血统的巫师成为统治阶层，镇压一切非魔法生物。 为挫败格林德沃的阴谋，阿不思·邓布利多（裘德·洛 Jude Law 饰）向昔日的学生纽特·斯卡曼德寻求帮助。纽特欣然允诺，却没有意识到，他将踏上的会是一段充满艰险的未来征途。此时的魔法世界面临空前的分裂乱局，阶层鸿沟日益加深，爱与忠诚备受考验，至亲好友也可能反目成仇……",
          "filmType": {
            "name": "3D",
            "value": 2
          },
          "nation": "美国  英国",
          "language": "英语",
          "videoId": "XMzg4NzgwNDc5Mg==",
          "premiereAt": 1542326400,
          "timeType": 3,
          "runtime": 133,
          "grade": "7.8",
          "item": {
            "name": "3D",
            "type": 2
          },
          "isPresale": true,
          "isSale": false
        },
        {
          "filmId": 4465,
          "name": "老爸102岁",
          "poster": "https://pic.maizuo.com/usr/movie/b433d68518a65e9370e60d7d2a142f2d.jpg",
          "actors": [
            {
              "name": " 奥米史·舒克拉",
              "role": " 导演",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/3a5c2c86b21dacc141e011ba7f3115b7.jpg"
            },
            {
              "name": "阿米达普·巴强",
              "role": "Dattatraya Vakharia",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/59aca93cc5350445ec6116149c3de73f.jpg"
            },
            {
              "name": " 里希·卡普尔 ",
              "role": "Babulal Vakharia",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/3ce18ffc64ffcb5d9b69b04371780d7a.jpg"
            },
            {
              "name": "吉米特·特里韦迪",
              "role": " Dhiru",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/72f1815208ae3f908925fb6d95f351b3.jpg"
            },
            {
              "name": "达尔曼德拉·吉尔 ",
              "role": "Amol",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/89b0ed9c7582a0c643321a4d974c297c.jpg"
            }
          ],
          "director": "奥米史·舒克拉",
          "category": "剧情|喜剧",
          "synopsis": "102岁的老爸达特利（阿米达普·巴强 饰）是一个有着26岁灵魂、精神奕奕的酷老头，他75岁的儿子巴布（里希·卡普尔 饰）却暮气沉沉刻板无趣。　　为了挑战世界长寿纪录，老爸决定将儿子送进养老院，想要阻止老爸的疯狂行为，儿子巴布就必须完成一系列“改造任务”，成为眼中有光热爱生活的新巴布。完成任务的过程中，父子两人有温馨欢乐也有争吵冲突，而就在儿子即将完成所有任务，重拾对生活热情时，却发现改造计划背后更感人的秘密……",
          "filmType": {
            "name": "2D",
            "value": 1
          },
          "nation": "印度",
          "language": "印地语",
          "videoId": "XMzkzMTg0MDg0MA==",
          "premiereAt": 1543536000,
          "timeType": 3,
          "runtime": 102,
          "grade": "7.2",
          "item": {
            "name": "2D",
            "type": 1
          },
          "isPresale": true,
          "isSale": false
        },
        {
          "filmId": 3498,
          "name": "恐怖快递",
          "poster": "https://pic.maizuo.com/usr/100003498/61a6b1089394db8aa108d4f43256e290.jpg",
          "actors": [
            {
              "name": "李晨浩",
              "role": "罗刚",
              "avatarAddress": "https://pic.maizuo.com/usr/100003498/8995e887cad0132e038d5afc906918b0.jpg"
            },
            {
              "name": "汤晶媚",
              "role": "林娜",
              "avatarAddress": "https://pic.maizuo.com/usr/100003498/5a4d6f157d28ce052929ddbd44b88c72.jpg"
            },
            {
              "name": "沈建宏",
              "role": "",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/e1e5a0af90dea4546a41fd9c9a63bd08.jpg"
            },
            {
              "name": "姚一奇",
              "role": "",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/492d782519c4bd07b8557c2103d15749.jpg"
            },
            {
              "name": "任娇",
              "role": "",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/b88396759393fed1ed7c77973e33e283.jpg"
            }
          ],
          "director": "杨振豪",
          "category": "惊悚",
          "synopsis": "罗刚（李晨浩 饰）和林娜（汤晶媚 饰）本是一对羡煞旁人的情侣，而某日林娜意外坠亡，推倒了罗刚的正常生活。在罗刚痛不欲生之时，身边好友王来（沈建宏 饰）和伊伊（任娇 饰）却接连收到神秘诡异的快递，并引发一系列离奇死亡事件。密友朱朝宇（姚一奇 饰）偶然从中发现蛛丝马迹，殊不知发给自己的快递也在悄然送来。恐怖快递如影随形，只有林娜的妹妹林洁（汤晶媚 饰）陪在罗刚身旁，与他一步步接近事件真相……",
          "filmType": {
            "name": "2D",
            "value": 1
          },
          "nation": "中国大陆",
          "language": "普通话",
          "videoId": "",
          "premiereAt": 1537488000,
          "timeType": 3,
          "runtime": 90,
          "grade": "2",
          "item": {
            "name": "2D",
            "type": 1
          },
          "isPresale": true,
          "isSale": false
        },
        {
          "filmId": 4481,
          "name": "云上日出",
          "poster": "https://pic.maizuo.com/usr/movie/bf0452c573765eadaf79d667630857d8.jpg",
          "actors": [
            {
              "name": "熊玮 ",
              "role": "导演",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/3124ac815842ac6f79dc285528e5293f.jpg"
            },
            {
              "name": "荣梓杉",
              "role": " 演员",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/af07e81ee8beecd81f43ecd4c3bba7b5.jpg"
            },
            {
              "name": "丁宁",
              "role": " 演员",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/b69eeecd4e014e9159074623848a2a18.jpg"
            },
            {
              "name": "关亚军",
              "role": " 演员",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/d7f58cdb88a9bf52efb1ee66860225a9.jpg"
            },
            {
              "name": "郭紫铭",
              "role": " 演员",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/cecb869e9c944723ab798d0f98de6843.jpg"
            }
          ],
          "director": "熊玮",
          "category": "剧情|儿童|战争",
          "synopsis": "1941年11月4日，日军在湖南常德发动细菌战。造成7643名同胞无辜丧生。影片讲述了湖南常德细菌战下，一所儿童教养院内孩子们之间陪伴、成长与救赎的故事。战争来临，教养院面临生存危机，细菌战突然而至，给风雨飘摇的教养院再蒙上一层阴霾。生死离别之际，一段陪伴、一次成长。苦难如同乌云，终将迎来日出。",
          "filmType": {
            "name": "2D",
            "value": 1
          },
          "nation": "中国大陆",
          "language": "汉语普通话",
          "videoId": "",
          "premiereAt": 1544486400,
          "timeType": 3,
          "runtime": 102,
          "grade": "7.8",
          "item": {
            "name": "2D",
            "type": 1
          },
          "isPresale": true,
          "isSale": false
        },
        {
          "filmId": 3666,
          "name": "三只小猪2",
          "poster": "https://pic.maizuo.com/usr/movie/8ac85b3f073a3e3a561973e1239f57e6.jpg",
          "actors": [
            {
              "name": "王晓彤 ",
              "role": "当当",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/0afb12bf52cc554d199bac242bcd55e7.jpg"
            },
            {
              "name": "李晔 ",
              "role": "小米",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/a9190ba9297256b6d38e45cec9ed8881.jpg"
            },
            {
              "name": "洪海天 ",
              "role": "波波",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/6935bc6db244598f928149ae88223a98.jpg"
            }
          ],
          "director": "刘炜",
          "category": "动画",
          "synopsis": "三只小猪因顽皮遇险，被功夫侠阿潘和阿达所救，因此小猪们死缠烂打跟着两位学功夫。可是，当小猪们发现两位大侠并不像自己想象中那般厉害，便决心靠自己的力量打败功夫怪狼，却因为冲动莽撞再次引来了更大的灾难。功夫怪狼以三只小猪为要挟，逼阿潘与阿达再次出手，能力与责任、正义与力量，一场森林王国的巅峰对决就此展开。",
          "filmType": {
            "name": "3D",
            "value": 2
          },
          "nation": "中国大陆",
          "language": "普通话",
          "videoId": "XMjc3MTIzODMzNg==",
          "premiereAt": 1544227200,
          "timeType": 3,
          "runtime": 70,
          "grade": "2",
          "item": {
            "name": "3D",
            "type": 2
          },
          "isPresale": true,
          "isSale": false
        },
        {
          "filmId": 4403,
          "name": "中国蓝盔 ",
          "poster": "https://pic.maizuo.com/usr/movie/85478cb36f9be3d02919ac3552ee1327.jpg",
          "actors": [
            {
              "name": "徐洪浩",
              "role": "杜峰  ",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/7b62f24cc471d5fd164c2e38ae83d8dc.jpg"
            },
            {
              "name": "一龙 ",
              "role": "大吴",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/cbc588ef09f2ab8c0637d1256e7d48bc.jpg"
            },
            {
              "name": "彭士腾 ",
              "role": "黄启典  ",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/44691e475c1332e8e7e99cd7f265f31a.jpg"
            },
            {
              "name": "沈浩 ",
              "role": " 王刚",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/ae84b7ed5ec6c877dff44a39ce7b51d1.jpg"
            },
            {
              "name": "王韬",
              "role": "姜山",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/d08b685af1520c024b90667057b3f9b7.jpg"
            }
          ],
          "director": "宁海强",
          "category": "剧情|动作|战争",
          "synopsis": "我国首部维和军事题材电影《中国蓝盔》讲述了当下中国维和部队官兵在非洲坚决执行习主席指示的“构建人类命运共同体”的大国方针、严格履行联合国赋予的使命，派出了以“兵王”杜峰为首的作战小组冒着生命危险，从恐怖分子手中救出联合国调查组，从而阻止了一场一触即发的战争，维护了难民营的生活秩序、保障了难民们的生活权益。但是年轻的战士也在这次行动中为了维护非洲的和平而献出了宝贵的生命……",
          "filmType": {
            "name": "2D",
            "value": 1
          },
          "nation": "中国大陆",
          "language": "汉语普通话",
          "videoId": "",
          "premiereAt": 1542931200,
          "timeType": 3,
          "runtime": 96,
          "grade": "7.8",
          "item": {
            "name": "2D",
            "type": 1
          },
          "isPresale": true,
          "isSale": false
        },
        {
          "filmId": 4456,
          "name": "亡命救赎 ",
          "poster": "https://pic.maizuo.com/usr/movie/3a9febdd5b7352b64a180256bdc0f312.jpg",
          "actors": [
            {
              "name": " 让-弗朗西斯·瑞切",
              "role": "导演",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/e139e002891c4d931707b54007202525.jpg"
            },
            {
              "name": " 梅尔·吉布森",
              "role": " Link",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/ebdd2b394aba70c34d60b3c01ff5b48c.jpg"
            },
            {
              "name": " 艾琳·莫里亚蒂",
              "role": " Lydia",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/2870cf1b7be679eb8e510b5b96292775.jpg"
            },
            {
              "name": " 迭戈·卢纳 ",
              "role": " Jonah",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/1bfbb19ae339998c59ba864794de07fb.jpg"
            }
          ],
          "director": " 让-弗朗西斯·瑞切",
          "category": "动作|犯罪",
          "synopsis": "Lydia很小的时候父亲就进了监狱，她从小和母亲生活在一起，但骨子里继承了父亲Link的基因，十分叛逆。一次闯下大祸后，Lydia走投无路联系到多年未曾见面的父亲，Link已经退隐江湖很多年，在拖车里以纹身为生。为了解决女儿的困境，他鼓起勇气挺起胸膛，以父亲的身份对决Jonah一行人，用鲜血为女儿换来了重生……",
          "filmType": {
            "name": "2D",
            "value": 1
          },
          "nation": "法国",
          "language": "英语  西班牙语",
          "videoId": "XMTU2NTg3NTA0OA==",
          "premiereAt": 1543536000,
          "timeType": 3,
          "runtime": 88,
          "grade": "7.8",
          "item": {
            "name": "2D",
            "type": 1
          },
          "isPresale": true,
          "isSale": false
        },
        {
          "filmId": 4380,
          "name": "两只小猪之勇闯神秘岛",
          "poster": "https://pic.maizuo.com/usr/movie/861a4e87f1beb1cf15170bf0c86e8696.jpg",
          "director": "罗红胜",
          "category": "动画|儿童|冒险",
          "synopsis": "电影脱胎于传统童话故事，本次改编动画电影以崭新萌态登场，在很远很远的地方有一座神秘岛，那里奇幻神秘，突如其来的假期让古灵精怪的小猪皮皮和俏皮可爱的小猪娜娜与呆萌囧笨的小狗酥皮，三个小伙伴踏上了神秘岛奇妙之旅…憨萌的小猪们会遭遇怎样惊险刺激的危险呢？又将如何凭借勇气和智慧，化解重重危机呢？冒险就此展开····",
          "filmType": {
            "name": "2D",
            "value": 1
          },
          "nation": "中国大陆",
          "language": "汉语普通话",
          "videoId": "",
          "premiereAt": 1546128000,
          "timeType": 3,
          "runtime": 100,
          "item": {
            "name": "2D",
            "type": 1
          },
          "isPresale": true,
          "isSale": false
        },
        {
          "filmId": 4431,
          "name": "恐龙王 ",
          "poster": "https://pic.maizuo.com/usr/movie/2741b15ca4749919c600253cd535a63f.jpg",
          "actors": [
            {
              "name": "吕佩玉",
              "role": "钢妈",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/a3667b7c51f0d84aa21aebf14c2bbfff.jpg"
            },
            {
              "name": "穆雪婷",
              "role": "小疙瘩  ",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/37bfefe72b4af66450aec5682548c600.jpg"
            },
            {
              "name": "王衡 ",
              "role": "斑大师  ",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/614e1a43f4d3fc7bf8e3bfd7c6ebe55b.jpg"
            },
            {
              "name": "徐思琦",
              "role": " 小蓝",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/deec8ba03a8175bbb75bcd3d762cc6c2.jpg"
            },
            {
              "name": "孙晔 ",
              "role": "八百度",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/0913c833ecc4d46969c1ba4170ecee51.jpg"
            }
          ],
          "director": "施雅雅",
          "category": "喜剧|动画|冒险",
          "synopsis": "陆地霸主特暴龙“斑大师”的小儿子“小疙瘩”被几只邪恶的恐爪龙抓走，“斑大师”踏上漫漫的寻子之路。路途中他结识了有高度近视眼的美甲龙“八百度”，两人穿过“巨蝎峡”、走出“长颈龙绿洲”、踏上火山峡谷，经历了重重难关。而身处险境的“小疙瘩”也结识了一些新的朋友，并且开始和邪恶的恐爪龙斗智斗勇。最终父子两人终于相见，但是却不得不一起面对一个更加凶恶的史前怪物……",
          "filmType": {
            "name": "2D",
            "value": 1
          },
          "nation": "中国大陆",
          "language": "汉语普通话",
          "videoId": "",
          "premiereAt": 1539388800,
          "timeType": 3,
          "runtime": 95,
          "grade": "7.8",
          "item": {
            "name": "2D",
            "type": 1
          },
          "isPresale": true,
          "isSale": false
        },
        {
          "filmId": 4450,
          "name": "摘金奇缘",
          "poster": "https://pic.maizuo.com/usr/movie/754ddaacfdccbcea1639526123e313c7.jpg",
          "actors": [
            {
              "name": "杨紫琼",
              "role": "Eleanor Young",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/fe26bdb22798edfebc0ef653fc6252fe.jpg"
            },
            {
              "name": "吴恬敏",
              "role": " Rachel Chu",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/ac41ad4e9e15584843ad68fb4b52957d.jpg"
            },
            {
              "name": "亨利·戈尔丁",
              "role": "Nick Young",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/be20ff048325786959f8d980d2723712.jpg"
            },
            {
              "name": " 嘉玛·陈",
              "role": " Astrid Leong",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/b62f9ebaf607f243d61da37d3af02190.jpg"
            }
          ],
          "director": "朱浩伟",
          "category": "喜剧|爱情|英语",
          "synopsis": "纽约土生土长的朱丽秋（吴恬敏 饰）陪拍拖已久的男友杨力（亨利·戈尔丁 饰）回到新加坡参加死党婚礼。丽秋既为首次到亚洲旅行感到兴奋，同时亦因为要拜访杨力的家人而紧张。她在毫无准备的情况下得悉男友一直没有透露的身世……原来杨力不仅是新加坡首富的后人，亦是城中瞩目的“钻石王老 五”。身为女友的丽秋腹背受敌，不单只受到名媛的妒忌，还要面对杨力挑剔的母亲（杨紫琼 饰）阻拦。这一切都证明金钱虽然买不到爱情，却足以令事情变得非常复杂。",
          "filmType": {
            "name": "2D",
            "value": 1
          },
          "nation": "美国",
          "language": "汉语普通话  粤语 ",
          "videoId": "XMzg5MjY2MTU1Mg==",
          "premiereAt": 1543536000,
          "timeType": 3,
          "runtime": 121,
          "grade": "7.4",
          "item": {
            "name": "2D",
            "type": 1
          },
          "isPresale": true,
          "isSale": false
        },
        {
          "filmId": 4466,
          "name": "一百年很长吗 ",
          "poster": "https://pic.maizuo.com/usr/movie/66ed669f58cb60a7d0848037a30754ac.jpg",
          "actors": [
            {
              "name": "萧寒 ",
              "role": "导演",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/1d04de526fa977975083fb59b9d75b55.jpg"
            },
            {
              "name": "黄忠坚",
              "role": " 自己",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/68d3a2dd0c045ca0d3406b642d1bc035.jpg"
            },
            {
              "name": "张雪菲",
              "role": "自己",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/a9110044887631d629a3c9b6c3f8a434.jpg"
            },
            {
              "name": "阿合特 ",
              "role": "自己",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/6a0646edb21e5d77e18da1a35d121023.jpg"
            }
          ],
          "director": " 萧寒",
          "category": "汉语普通话",
          "synopsis": "电影《一百年很长吗》是萧寒继《喜马拉雅天梯》和《我在故宫修文物》之后执导的第三部纪录电影。萧寒导演此次将镜头对焦在命运与手艺纠缠在一起的普通小人物身上，电影讲述了在佛山学习蔡李佛拳和痴迷于舞狮的小伙子黄忠坚、新疆哈萨克族做马鞍子的老爷子阿合特一年当中面临的生活故事和人生抉择。该片将于2018年12月1日全国公映。",
          "filmType": {
            "name": "2D",
            "value": 1
          },
          "nation": "中国大陆",
          "language": "汉语普通话",
          "videoId": "XMzg4MjMzMzc2OA==",
          "premiereAt": 1543622400,
          "timeType": 3,
          "runtime": 106,
          "grade": "7.8",
          "item": {
            "name": "2D",
            "type": 1
          },
          "isPresale": true,
          "isSale": false
        },
        {
          "filmId": 3430,
          "name": "大会师",
          "poster": "https://pic.maizuo.com/usr/100003430/843e3fa9bfc8812cce2b5bca1f6c1b95.jpg",
          "director": "安澜",
          "category": "历史|战争",
          "synopsis": "以中国工农红军第一、二、四方面军甘肃会宁会师，长征取得伟大胜利，中国革命从挫折走向胜利的伟大转折，从此，开始了由国内革命战争向抗日民族解放战争的转变，中国革命进入了一个崭新的历史阶段为背景。再现了红军三大主力胜利会师的光辉时刻，生动塑造红军指战员在铁血征程中的英勇壮举。",
          "filmType": {
            "name": "2D",
            "value": 1
          },
          "nation": "中国大陆",
          "language": "普通话",
          "videoId": "",
          "premiereAt": 1477440000,
          "timeType": 3,
          "runtime": 90,
          "grade": "2",
          "item": {
            "name": "2D",
            "type": 1
          },
          "isPresale": true,
          "isSale": false
        },
        {
          "filmId": 3583,
          "name": "大脚印",
          "poster": "https://pic.maizuo.com/usr/100003583/1753eb147a2977016fb15e235856ebd6.jpg",
          "director": "伊桑・韦利",
          "category": "动作|家庭|冒险",
          "synopsis": "影片以中国家喻户晓的湖北神农架野人的传说为故事的核心元素，试图还原野人的神秘形象。影片讲述了一位在中国担任家庭女教师的美国大学生与她的学生以及几位中外乘客乘坐的飞机遇险迫降神农架原始丛林，为了保护野人，与盗猎集团展开周旋，最终在野人的帮助下实现正义战胜邪恶的精彩故事。",
          "filmType": {
            "name": "3D",
            "value": 2
          },
          "nation": "美国 中国大陆",
          "language": "普通话",
          "videoId": "XMjQ5MDI4NTQ5Mg==",
          "premiereAt": 1486684800,
          "timeType": 3,
          "runtime": 96,
          "grade": "2",
          "item": {
            "name": "3D",
            "type": 2
          },
          "isPresale": true,
          "isSale": false
        },
        {
          "filmId": 4464,
          "name": "生活万岁",
          "poster": "https://pic.maizuo.com/usr/movie/36c4a6d78edf8b4a6f20a16499a874db.jpg",
          "actors": [
            {
              "name": "程工 ",
              "role": "导演",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/854f491c85b2c3a66a71d6d58f508b87.jpg"
            },
            {
              "name": "任长箴 ",
              "role": "导演",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/580fe0ebc5a6905d39976330e03a49fb.jpg"
            }
          ],
          "director": "程工|任长箴",
          "category": "纪录片",
          "synopsis": "这是一部2018年即将上映的真实题材电影，讲述了十五名普通中国人在2017年真实的生活状态。并无交集的十四段故事谱写着同一个世界角落的生活，它或许艰辛，或许无奈，或许也带着些许苦涩，但每个人都在默默坚持着、爱着这样的生活。",
          "filmType": {
            "name": "2D",
            "value": 1
          },
          "nation": "中国大陆",
          "language": "汉语普通话",
          "videoId": "XMzkxNDI1MDk3Mg==",
          "premiereAt": 1543276800,
          "timeType": 3,
          "runtime": 94,
          "grade": "7.4",
          "item": {
            "name": "2D",
            "type": 1
          },
          "isPresale": true,
          "isSale": false
        },
        {
          "filmId": 3997,
          "name": "敦煌不了情 ",
          "poster": "https://pic.maizuo.com/usr/movie/d0a0186760d21e36820ff63225d0c06d.jpg",
          "actors": [
            {
              "name": "林保怡",
              "role": "",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/fbb3feb76a0a79a1a6b2270fa36f2638.jpg"
            },
            {
              "name": "梦丽",
              "role": "",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/4ba78a4f5528ea01bd68f5273429dcdc.jpg"
            },
            {
              "name": "曹操",
              "role": "",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/55cbea23a9121d8f1e03fbd2c8a8e73b.jpg"
            },
            {
              "name": "赵圆圆",
              "role": "",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/9c6b466b050b9bef8e63448fbc868e80.jpg"
            },
            {
              "name": "房程程",
              "role": "",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/d172833ccefecc98c8d76ab789e7827f.jpg"
            }
          ],
          "director": "郭宜林",
          "category": "喜剧|爱情|冒险",
          "synopsis": "一场国际品酒大赛，使得奇酒“相思红”重见天日，举座皆惊。意大利酒庄美女传人远赴神秘的东方古城敦煌探秘，却被酒厂呆萌大龄老板征服，成为一对欢喜冤家。谁料黄雀在后，对自己垂涎已久的黑心酒商暗地追踪，携打手、笨贼齐聚敦煌，在茫茫大漠中上演一场生死搏斗与追击，揭开一段淹没多年的感人跨国恋情，虽历经一生，依然未了……",
          "filmType": {
            "name": "2D",
            "value": 1
          },
          "nation": "中国大陆",
          "language": "汉语普通话",
          "videoId": "",
          "premiereAt": 1516665600,
          "timeType": 3,
          "runtime": 92,
          "grade": "2",
          "item": {
            "name": "2D",
            "type": 1
          },
          "isPresale": true,
          "isSale": false
        },
        {
          "filmId": 4127,
          "name": "熊猫石的奇幻旅行 ",
          "poster": "https://pic.maizuo.com/usr/movie/1fce97ee12eefcf49e5baf41c75a25a9.jpg",
          "actors": [
            {
              "name": "伊娜",
              "role": "",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/48740ab91e9637bd56978507770686f4.jpg"
            }
          ],
          "director": "吴晓东",
          "category": "儿童|奇幻|冒险",
          "synopsis": "电影以1936年，美国人露丝•哈克尼斯(RuthHarkness)进入四川，捕获大熊猫幼仔一只，将其带离至美国纽约展出一事为历史背景，通过一块神奇的“熊猫石”，讲述十三岁的男孩儿“潘达”穿越到上个世纪三十年代，和“露丝”“皮特”“汉斯”一群盗猎者斗智斗勇，“潘达”用神奇的“熊猫石”救下险被猎杀的大熊猫，“露丝”也在“潘达”的感化下由盗猎者转变成了大熊猫的守护者，人和大熊猫相互依存、彼此守护……",
          "filmType": {
            "name": "2D",
            "value": 1
          },
          "nation": "中国大陆",
          "language": "汉语普通话",
          "videoId": "",
          "premiereAt": 1518134400,
          "timeType": 3,
          "runtime": 100,
          "grade": "2",
          "item": {
            "name": "2D",
            "type": 1
          },
          "isPresale": true,
          "isSale": false
        },
        {
          "filmId": 4442,
          "name": "梦境之源",
          "poster": "https://pic.maizuo.com/usr/movie/18d2b669f82fdd1f7e1051df74036001.jpg",
          "actors": [
            {
              "name": "陈志朋",
              "role": "演员",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/250d8e98e433db783b7ed7072fde6450.jpg"
            },
            {
              "name": "李彧",
              "role": "演员",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/1526fafa76ade4cec00a403fcbf0d7f8.jpg"
            },
            {
              "name": "方中信",
              "role": "演员",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/cfbe704263b86407753bfe31aab7e5cb.jpg"
            },
            {
              "name": " 安琥",
              "role": "演员",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/2abae3ac6a9d51bc1a70129b72b2ecfa.jpg"
            },
            {
              "name": "颜丹晨",
              "role": "演员",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/4e1d5d5cf6f22fdf93d2ed9109a05c31.jpg"
            }
          ],
          "director": "柳珂",
          "category": "悬疑|惊悚",
          "synopsis": "本片讲述了货车司机李昂由于童年时代的遭遇，内向懦弱，颓废度日，频频做噩梦，严重影响了正常的生活，并因此不得不接受心理医生曹井润的催眠治疗，却在梦境中意外卷入一场凶杀案的故事。睿智破案的警探成为凶手，而真正的幕后黑手仍在逍遥法外...现实和梦境彼此重叠，在这个无比紧张又看不到出口的黑色漩涡，一场智力的较量，由此拉开...",
          "filmType": {
            "name": "2D",
            "value": 1
          },
          "nation": "中国大陆",
          "language": "汉语普通话",
          "videoId": "",
          "premiereAt": 1540944000,
          "timeType": 3,
          "runtime": 90,
          "grade": "7.8",
          "item": {
            "name": "2D",
            "type": 1
          },
          "isPresale": true,
          "isSale": false
        },
        {
          "filmId": 4470,
          "name": "冥王星时刻",
          "poster": "https://pic.maizuo.com/usr/movie/49466497afc4056d1eed8ac30fb1e5d0.jpg",
          "actors": [
            {
              "name": "王学兵 ",
              "role": "演员",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/6da6483ee1d9dfc03cc23beca70d60bd.jpg"
            },
            {
              "name": "母其弥雅",
              "role": " 演员",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/60f480cbd5e84c5dc6f5faf00248a2e6.jpg"
            },
            {
              "name": "章明 ",
              "role": "导演",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/1acf948b31eb86099d9368483c6528b4.jpg"
            },
            {
              "name": "刘丹",
              "role": " 演员",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/25ffd1a472f92a2f747ce3b98a2159ab.jpg"
            },
            {
              "name": "李心然",
              "role": "演员",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/3fc97c54154d8a3cc73b5c898b652a89.jpg"
            },
            {
              "name": "曾美慧孜 ",
              "role": " 演员",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/88c51b110ab5c72fd1b4e3d8b74d0353.jpg"
            }
          ],
          "director": "章明",
          "category": "剧情",
          "synopsis": "导演王准前往著名演员高丽的拍摄现场探班，尽管与高丽已经分居，但王准仍希望高丽尽快确认为自己新片拍摄的档期，高丽却反过来讽刺王准剧本遥遥无期。　　带着现实的压力，王准结伴丁宏敏、白金铂和度春一行四人，来到湖北深山采风，为拍摄一部关于当地丧歌《黑暗传》的剧情电影做前期的勘景和素材搜集。丁宏敏是这部电影的制片人，她带着年轻的男演员白金铂随行。度春是电影学院大三的学生，也是王准的粉丝。　                            尽管有当地向导老罗带队，四人却仍在深山中迷路。行住的艰难，使四人的心理备受煎熬，亲疏关系发生了变化，致使他们渐渐模糊了此行的目的。山林中的遭遇，与上海都市的现实犹如梦幻般的呼应，王准内心的黑暗和茫然也显露无遗。他们在暴风雨中偶遇质朴的山民、执着的村妇春苔，并终于聆听到年迈歌师在葬礼上夜唱丧歌《黑暗传》。第二天，王准在凌晨的山谷醒来，这似乎是他一直在追寻的光明。",
          "filmType": {
            "name": "2D",
            "value": 1
          },
          "nation": "中国大陆",
          "language": "",
          "videoId": "XMzY2MDI3NDkxMg==",
          "premiereAt": 1544140800,
          "timeType": 3,
          "runtime": 110,
          "grade": "7.8",
          "item": {
            "name": "2D",
            "type": 1
          },
          "isPresale": true,
          "isSale": false
        },
        {
          "filmId": 4000,
          "name": "红海行动",
          "poster": "https://pic.maizuo.com/usr/movie/0d0e64b2f5887974cc76ca193ecc5c47.jpg",
          "actors": [
            {
              "name": "张译",
              "role": "",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/bb9d4ad79cf6f97a80b7cf885d05b316.jpg"
            },
            {
              "name": "杜江",
              "role": "",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/c4ec969b6b474b42dca5be9db1d16762.jpg"
            },
            {
              "name": "黄景瑜",
              "role": "",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/e9740c832ed2712b360bac2f9ea699f3.jpg"
            },
            {
              "name": "海清",
              "role": "",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/2354cb4a7ce5e798b560b298226d45b6.jpg"
            },
            {
              "name": "蒋璐霞",
              "role": "",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/97a286215626e1d07ec1e58a47656668.jpg"
            }
          ],
          "director": "林超贤",
          "category": "剧情|动作",
          "synopsis": "索马里海域外，中国商船遭遇劫持，船员全数沦为阶下囚。蛟龙突击队沉着应对，潜入商船进行突袭，成功解救全部人质。 返航途中，非洲北部伊维亚共和国发生政变，恐怖组织连同叛军攻入首都， 当地华侨面临危险，海军战舰接到上级命令改变航向，前往执行撤侨任务。蛟龙突击队八人，整装待发。 时间紧迫，在“撤侨遇袭可反击，相反则必须避免交火，以免引起外交冲突”的大原则下，海军战舰及蛟龙突击队深入伊维亚，在恶劣的环境之下，借助海陆等多种装备，成功转移等候在码头的中国侨民，并在激烈的遭遇战之后，营救了被恐怖分子追击的中国领事馆巴士。 然而事情尚未完结，就在掩护华侨撤离之际，蛟龙突击队收到中国人质被恐怖分子劫持的消息。众人深感责任重大，义无反顾地再度展开营救行动。前方路途险恶，蛟龙突击队即将遭遇的，远不止人质营救那么简单,恐怖分子的惊天阴谋即将浮出水面…..",
          "filmType": {
            "name": "2D",
            "value": 1
          },
          "nation": "中国大陆",
          "language": "汉语普通话",
          "videoId": "XMzA3ODg3MDM0OA==",
          "premiereAt": 1518739200,
          "timeType": 3,
          "runtime": 100,
          "grade": "2",
          "item": {
            "name": "2D",
            "type": 1
          },
          "isPresale": true,
          "isSale": false
        },
        {
          "filmId": 4394,
          "name": "警车联盟 ",
          "poster": "https://pic.maizuo.com/usr/movie/c6e80f1a462ddfbc529a21db58a654ed.jpg",
          "actors": [
            {
              "name": "刘琮",
              "role": "",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/d97858ff5c34abbc7c6ea8f68da12f96.jpg"
            },
            {
              "name": "张博恒",
              "role": "",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/2e5df2867b7957334a12e9d2ade5030d.jpg"
            },
            {
              "name": "苏尚卿",
              "role": "",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/844b92f9cd5f464d908f7de97c66b7f4.jpg"
            }
          ],
          "director": "邓志基",
          "category": "动画|冒险",
          "synopsis": "小警车小治怀着警察梦想来到新都汇寻找失踪的爸爸大卡，在过程中结识了清洁车嘟嘟、救护车小芸、工程车阿特和消防车大雷等朋友，但却意外的卷入一场破坏城市交通的巨大阴谋中，小治带着寻找爸爸的决心，和同伴们开始了对抗邪恶势力的征程......",
          "filmType": {
            "name": "2D",
            "value": 1
          },
          "nation": "中国大陆",
          "language": "汉语普通话",
          "videoId": "",
          "premiereAt": 1546128000,
          "timeType": 3,
          "runtime": 90,
          "item": {
            "name": "2D",
            "type": 1
          },
          "isPresale": true,
          "isSale": false
        },
        {
          "filmId": 4463,
          "name": "克隆人 ",
          "poster": "https://pic.maizuo.com/usr/movie/38c46058376c138b60bb72a2185dd54b.jpg",
          "actors": [
            {
              "name": "杰弗利·纳赫马诺夫",
              "role": "导演",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/facbbed659c94aa0e79e224ea298e60a.jpg"
            },
            {
              "name": " 爱丽丝·伊芙",
              "role": "莫娜",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/566a39cc4fd4777eb54feedc717e1641.jpg"
            },
            {
              "name": " 基努·里维斯",
              "role": "威尔·福斯特",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/726dcbc872dc8b155416789b9d8e9680.jpg"
            },
            {
              "name": " 托马斯·米德蒂奇",
              "role": "艾迪·惠特尔",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/619dc13839aefba6a28b4989cbed402e.jpg"
            },
            {
              "name": " 艾米丽·阿琳·林德",
              "role": "苏菲",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/3d3c0575d608c0319075a4a460b13ac4.jpg"
            },
            {
              "name": " 恩杰伊·安东尼",
              "role": "马特·福斯特",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/d2fa32584b54cd9e1fea088c0a7adcd4.jpg"
            }
          ],
          "director": "杰弗利·纳赫马诺夫",
          "category": "科幻|悬疑|犯罪",
          "synopsis": "神经学科学家威尔·福斯特（基努·里维斯 饰）在一场车祸中失去了他的妻子（爱丽丝·伊芙 饰）和三个孩子，在好友同时也是科学家埃德·惠特尔（托马斯·米德蒂奇 饰）的帮助下，他通过克隆身体以及传输意识复活了家人。为了达到目的，他不惜与警方为敌，不惜对峙政府控制的实验室，甚至不惜挑战一切科学限制，惹来了始料未及的麻烦……",
          "filmType": {
            "name": "2D",
            "value": 1
          },
          "nation": "英国  中国大陆  波多黎各  美国",
          "language": "英语",
          "videoId": "",
          "premiereAt": 1542931200,
          "timeType": 3,
          "runtime": 107,
          "grade": "7.8",
          "item": {
            "name": "2D",
            "type": 1
          },
          "isPresale": true,
          "isSale": false
        },
        {
          "filmId": 4468,
          "name": "铁甲战神",
          "poster": "https://pic.maizuo.com/usr/movie/9820f028be19f346e0dc29c2245de146.jpg",
          "actors": [
            {
              "name": "乔·米亚 ",
              "role": "导演",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/16036510d0676cdcb04723a279efcda5.jpg"
            },
            {
              "name": "杰森·弗莱明",
              "role": "演员",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/f76ca9a2f07dfb3d48346d8af6e40451.jpg"
            },
            {
              "name": "李·佩斯 ",
              "role": "演员",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/20ea261ddee2aea0346ae499ef6c7423.jpg"
            },
            {
              "name": "贝纳尼丝·玛尔洛",
              "role": "演员",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/c9500379cdaf96d2c9e0af18a4efea20.jpg"
            }
          ],
          "director": "乔·米亚",
          "category": "动作|科幻|战争",
          "synopsis": "在饱受战争蹂躏的非洲乡村，一名美国士兵和一名法国医生，在外星人的袭击中幸存下来。当他们在战场上寻找避难所时，士兵却忘记了他的真实身份，他们组成联合小队，这是人类应对外星人毁灭性入侵的最后一战。",
          "filmType": {
            "name": "2D",
            "value": 1
          },
          "nation": "英国",
          "language": "英语",
          "videoId": "XMjgyNjIzNTg0OA==",
          "premiereAt": 1543536000,
          "timeType": 3,
          "runtime": 87,
          "grade": "7.8",
          "item": {
            "name": "2D",
            "type": 1
          },
          "isPresale": true,
          "isSale": false
        },
        {
          "filmId": 4480,
          "name": "我们最好的时光",
          "poster": "https://pic.maizuo.com/usr/movie/85f4fc27c6b90d7e84295e115837728b.jpg",
          "actors": [
            {
              "name": "于谦 ",
              "role": "苗宛秋",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/51eda8cf5f7fb2d29edd5f6fcc0ac1cb.jpg"
            },
            {
              "name": "汤梦佳",
              "role": " 演员",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/dd42533278f342136ccce2b6d651a5e4.jpg"
            },
            {
              "name": "秦鸣悦 ",
              "role": " 关婷婷  ",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/273e6c2dbdec02af36ccabf6b55a75eb.jpg"
            },
            {
              "name": "王广源 ",
              "role": " 洛小乙  ",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/41577fcbf7511dbc8c6432d380674dd2.jpg"
            },
            {
              "name": "孙艺杨 ",
              "role": "演员",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/240fcd0be7f7e51a82f52dbdb74991b3.jpg"
            }
          ],
          "director": "张栾",
          "category": "剧情",
          "synopsis": "1985年的南宿一中，苗宛秋老师推自行车昂首走在校园，接受着人们艳羡的目光和纷至沓来的恭维。桀傲不驯的洛小乙、温婉可人的安静、新潮前卫的关婷婷、大智若愚的脑袋、舞痴兄弟文明建设、八婆海燕、奸商耗子……三班是一个永远也不缺故事的集体。苗宛秋怎么也不会想到，他即将走进的这个三班将会成为他以及他身边这辆自行车的噩梦。三班的同学也没有想到，这位新来的老师改变了他们的一生。",
          "filmType": {
            "name": "2D",
            "value": 1
          },
          "nation": "中国大陆",
          "language": "汉语普通话",
          "videoId": "XMzkxNjYwMzY3Mg==",
          "premiereAt": 1545955200,
          "timeType": 3,
          "runtime": 100,
          "item": {
            "name": "2D",
            "type": 1
          },
          "isPresale": false,
          "isSale": false
        },
        {
          "filmId": 4482,
          "name": "印度暴徒",
          "poster": "https://pic.maizuo.com/usr/movie/f68416630f509103b865366e1154ba90.jpg",
          "director": "维贾伊·克利须那·阿查里雅",
          "category": "喜剧|动作|冒险",
          "synopsis": "故事的背景是在1795年东印度公司殖民统治印度期间，殖民统治者想要抓住反抗组织”阿扎德“的领袖（阿米特巴·巴强饰演）于是找来了混混弗朗基（阿米尔·汗饰演）充当间谍，但弗朗基在潜伏过程中却有了另外的想法，一段充满了意料之外的动作冒险故事由此展开.....",
          "filmType": {
            "name": "2D",
            "value": 1
          },
          "nation": "印度",
          "language": "印地语",
          "videoId": "",
          "premiereAt": 1545955200,
          "timeType": 3,
          "runtime": 120,
          "item": {
            "name": "2D",
            "type": 1
          },
          "isPresale": false,
          "isSale": false
        },
        {
          "filmId": 4484,
          "name": "神探狗笨吉",
          "poster": "https://pic.maizuo.com/usr/movie/ea8c83611f0bcfb59f1f4248e8a52da2.jpg",
          "actors": [
            {
              "name": "布兰登·坎普",
              "role": " 导演",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/bcdd124bdb466ce2f5a17af6d2c406c1.jpg"
            },
            {
              "name": "达比·坎普",
              "role": "弗兰基 ",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/5fc3dd30f9105bd9ccda40cb5db532f1.jpg"
            },
            {
              "name": "加布里埃尔·贝特曼 ",
              "role": "卡特",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/386416466db02bb82201ca06b07c2a6a.jpg"
            },
            {
              "name": "基拉·桑切斯",
              "role": "惠特尼",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/e3d2095e2b0f1bcb1ff40315bff3f860.jpg"
            }
          ],
          "director": "布兰登·坎普",
          "category": "剧情",
          "synopsis": "“笨吉”原本是一只吃百家饭的流浪狗。它最喜欢一对兄妹，因为他俩经常瞒着妈妈悄悄陪它玩耍，喂它美食。某天，这对兄妹被坏人绑架。在妈妈和警方都惶恐不安而又无所适从之时，聪明勇敢的“神探狗”笨吉克服险阻，用自己的方式救出了这对兄妹，也找到了梦寐以求的家。笨吉的故事提醒我们，身边的宠物或许就是拯救人类的英雄。",
          "filmType": {
            "name": "2D",
            "value": 1
          },
          "nation": "美国",
          "language": " 英语",
          "videoId": "XMzk1MTc1NDI0NA==",
          "premiereAt": 1545955200,
          "timeType": 3,
          "runtime": 85,
          "item": {
            "name": "2D",
            "type": 1
          },
          "isPresale": false,
          "isSale": false
        },
        {
          "filmId": 4486,
          "name": "云南虫谷",
          "poster": "https://pic.maizuo.com/usr/movie/cf3a23f50888eda3befd5afc04bab239.jpg",
          "actors": [
            {
              "name": "非行 ",
              "role": "导演",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/387b5c729713db47211e92123b084c8e.jpg"
            },
            {
              "name": "于恒",
              "role": " 王胖子",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/1d49a1f949cad239d68e682c0934ba79.jpg"
            },
            {
              "name": " 顾璇 ",
              "role": "Shirley杨 ",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/41662b467c37cae30d43d095c8e9d3c9.jpg"
            },
            {
              "name": "蔡珩 ",
              "role": " 胡八一",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/0b99e1d515a61570c82a514a29104f20.jpg"
            },
            {
              "name": "马浴柯",
              "role": "大金牙",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/e800f2df4bc5a1335e0a05efe44f4f59.jpg"
            }
          ],
          "director": "非行",
          "category": "动作|奇幻|冒险",
          "synopsis": "胡八一等人由于之前探险，身上出现了眼球印记，这印记带着诅咒，会危及众人性命，传闻雮尘珠能解开诅咒，而它曾经作为陪葬品安放在古滇国献王的陵墓中，胡八一等人只能深入瘴疠之地，再探古墓奇险。　　胡八一、王胖子、Shirley杨等人穿过遮龙山下古滇国秘密地下水道，不料遭遇千年痋术机关，成千上万个奴隶制成的“痋俑”像炸弹一样倒悬在洞顶。深入丛林之中，更是不断遭遇重重考验，但唯有冲破障碍取得雮尘珠，才能破解众人身上的诅咒……　　终于，在历经层层凶险，众人终于来到献王墓入口，然而更大的挑战也接踵而至… …",
          "filmType": {
            "name": "2D",
            "value": 1
          },
          "nation": " 中国大陆",
          "language": "汉语普通话",
          "videoId": "XMzk1MTk5MjI1Ng==",
          "premiereAt": 1546041600,
          "timeType": 3,
          "runtime": 100,
          "item": {
            "name": "2D",
            "type": 1
          },
          "isPresale": false,
          "isSale": false
        },
        {
          "filmId": 4380,
          "name": "两只小猪之勇闯神秘岛",
          "poster": "https://pic.maizuo.com/usr/movie/861a4e87f1beb1cf15170bf0c86e8696.jpg",
          "director": "罗红胜",
          "category": "动画|儿童|冒险",
          "synopsis": "电影脱胎于传统童话故事，本次改编动画电影以崭新萌态登场，在很远很远的地方有一座神秘岛，那里奇幻神秘，突如其来的假期让古灵精怪的小猪皮皮和俏皮可爱的小猪娜娜与呆萌囧笨的小狗酥皮，三个小伙伴踏上了神秘岛奇妙之旅…憨萌的小猪们会遭遇怎样惊险刺激的危险呢？又将如何凭借勇气和智慧，化解重重危机呢？冒险就此展开····",
          "filmType": {
            "name": "2D",
            "value": 1
          },
          "nation": "中国大陆",
          "language": "汉语普通话",
          "videoId": "",
          "premiereAt": 1546128000,
          "timeType": 3,
          "runtime": 100,
          "item": {
            "name": "2D",
            "type": 1
          },
          "isPresale": true,
          "isSale": false
        },
        {
          "filmId": 4394,
          "name": "警车联盟 ",
          "poster": "https://pic.maizuo.com/usr/movie/c6e80f1a462ddfbc529a21db58a654ed.jpg",
          "actors": [
            {
              "name": "刘琮",
              "role": "",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/d97858ff5c34abbc7c6ea8f68da12f96.jpg"
            },
            {
              "name": "张博恒",
              "role": "",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/2e5df2867b7957334a12e9d2ade5030d.jpg"
            },
            {
              "name": "苏尚卿",
              "role": "",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/844b92f9cd5f464d908f7de97c66b7f4.jpg"
            }
          ],
          "director": "邓志基",
          "category": "动画|冒险",
          "synopsis": "小警车小治怀着警察梦想来到新都汇寻找失踪的爸爸大卡，在过程中结识了清洁车嘟嘟、救护车小芸、工程车阿特和消防车大雷等朋友，但却意外的卷入一场破坏城市交通的巨大阴谋中，小治带着寻找爸爸的决心，和同伴们开始了对抗邪恶势力的征程......",
          "filmType": {
            "name": "2D",
            "value": 1
          },
          "nation": "中国大陆",
          "language": "汉语普通话",
          "videoId": "",
          "premiereAt": 1546128000,
          "timeType": 3,
          "runtime": 90,
          "item": {
            "name": "2D",
            "type": 1
          },
          "isPresale": true,
          "isSale": false
        },
        {
          "filmId": 4407,
          "name": "功夫四侠：勇闯地宫",
          "poster": "https://pic.maizuo.com/usr/movie/494fd576aa3d246ce2041b786cc827ef.jpg",
          "actors": [
            {
              "name": "吴凡   ",
              "role": "鹦鹉小黑",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/19723b6ce650bb4db0feec8e13208ad3.jpg"
            },
            {
              "name": "王雪沁",
              "role": "田鼠尤里  ",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/5adaa21a400542a5ab852c671e81e990.jpg"
            },
            {
              "name": "王琪",
              "role": "老凯",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/d546061c71614384ef79ba1749a9fd77.jpg"
            }
          ],
          "director": "李金保",
          "category": "动画|儿童|冒险",
          "synopsis": "藏着巨大宝藏的地宫，让世界充满了好奇，以老凯为首的功夫四侠决定前往解开这个谜题。一路的险阻都没有吓倒大家，反而激发了大家完成这次探险的决心。在无意间发现的湖底通往地宫的暗道中，他们不是唯一的生命，那些守卫地宫的远古神兽才是对探险队员们的巨大考验。",
          "filmType": {
            "name": "2D",
            "value": 1
          },
          "nation": "中国大陆",
          "language": "",
          "videoId": "",
          "premiereAt": 1546128000,
          "timeType": 3,
          "runtime": 80,
          "item": {
            "name": "2D",
            "type": 1
          },
          "isPresale": false,
          "isSale": false
        },
        {
          "filmId": 4474,
          "name": "地球最后的夜晚",
          "poster": "https://pic.maizuo.com/usr/movie/e6c4e01614ef84205165e09eeed66dfa.jpg",
          "actors": [
            {
              "name": "毕赣 ",
              "role": "导演",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/cf9dd7beac72d3c95f557732dd8484d3.jpg"
            },
            {
              "name": "黄觉",
              "role": "罗纮武",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/aca56a41b7808dec78e2ef6449254dff.jpg"
            },
            {
              "name": "汤唯  ",
              "role": "万绮雯",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/46d17901537136a96f9488c4e5730010.jpg"
            },
            {
              "name": " 张艾嘉",
              "role": "红发女   白猫的母亲",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/7e421bd21b0c2d4f1c9c9f269d6ad762.jpg"
            },
            {
              "name": "李鸿其 ",
              "role": "白猫",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/338aa3e878d5d646e83c416d18711da7.jpg"
            }
          ],
          "director": "毕赣",
          "category": "剧情|悬疑",
          "synopsis": "罗紘武（黄觉 饰）因父亲离世再次回到贵州。12年前，好友白猫（李鸿其 饰）被杀，罗紘武在追查凶手左宏元（陈永忠 饰）的过程中，被凶手的情人万绮雯（汤唯 饰）所利用。从此以后，这个神秘的女人构成了他所有的记忆、欲望、信念和梦魇，一段追寻之旅让他发现了被隐藏多年的秘密……",
          "filmType": {
            "name": "2D",
            "value": 1
          },
          "nation": "中国大陆  法国",
          "language": "汉语普通话",
          "videoId": "XMzg4NzczNTk5Ng==",
          "premiereAt": 1546214400,
          "timeType": 3,
          "runtime": 140,
          "item": {
            "name": "2D",
            "type": 1
          },
          "isPresale": true,
          "isSale": false
        },
        {
          "filmId": 2593,
          "name": "平安岛",
          "poster": "https://pic.maizuo.com/usr/100002593/3562674bb5a5103a2968909949bc1aaa.tmp",
          "actors": [
            {
              "name": "张允炫",
              "role": "导演",
              "avatarAddress": "https://pic.maizuo.com/usr/100002593/beb93a2ceebb0208a72f7fbb26bf75df.jpg"
            },
            {
              "name": "黄立行",
              "role": "张海明",
              "avatarAddress": "https://pic.maizuo.com/usr/100002593/248ab3348aa097664f50f1400eaeb3d0.jpg"
            },
            {
              "name": "焦俊艳",
              "role": "刘佳",
              "avatarAddress": "https://pic.maizuo.com/usr/100002593/a1619f4f3b528556a2a0aaa74f61a000.jpg"
            },
            {
              "name": "热依扎",
              "role": "杨卿",
              "avatarAddress": "https://pic.maizuo.com/usr/100002593/30415e96f25d7da57576c508b015e4b8.jpg"
            }
          ],
          "director": "张允炫",
          "category": "悬疑|冒险|动作",
          "synopsis": "一个海洋考察团队在大海中进行宝藏勘探，一场暴风雨造成了巨大海难，将整艘船带至一个没有任何坐标的小岛上。为了完成上级安排的任务，研究团冒着危险进入岛屿，并发现隐藏在这座岛上的秘密。在岛上，他们遇见了一股神秘力量，令队友们一个又一个遭遇不测，他们面临着一场史无前例的大灾难。随着故事的一步步推进，神秘力量的面纱一层一层被揭开，最终揭穿了隐藏在这座岛上不为人知的秘密。而当秘密缓缓揭开时，他们将会面临怎样的大灾难？在这里他们将与欲望进行一场抉择和斗争。",
          "filmType": {
            "name": "3D",
            "value": 2
          },
          "nation": "中国大陆  韩国  香港",
          "language": "汉语普通话",
          "videoId": "XMTI2OTQ5NjQxNg==",
          "premiereAt": 1546300800,
          "timeType": 1,
          "runtime": 92,
          "item": {
            "name": "3D",
            "type": 2
          },
          "isPresale": false,
          "isSale": false
        },
        {
          "filmId": 3485,
          "name": "悟空圣诞奇遇记",
          "poster": "https://pic.maizuo.com/usr/100003485/3142d62674078e5c187eedd2cca9cfea.jpg",
          "director": "殷玉麒",
          "category": "喜剧|动画",
          "synopsis": "圣诞临近，天宫的小仙女们都布置起圣诞配饰，过上西方节日。 面子挂不住的玉帝授意下，悟空到人间驱逐圣诞老人，偶遇傻乎乎的驯鹿鲁道夫（替圣诞老人拉雪橇车的驯鹿）在城市中迷路，和收留鲁道夫的小女孩儿晶晶，废柴悟空和二货驯鹿一拍即合。因为一起暂住晶晶家。三人成为好朋友。 悟空要驱逐圣诞老人，鲁道夫要回到主人身边，晶晶要向圣诞老人祈祷，希望在美国工作的爸爸每到圣诞节和春节都回家团聚。三人各自因不同目的一起出发寻找圣诞老人。旅途中，发生很多误会和趣事，三人脾气相投友谊渐深。也因为经历很多事情，令悟空逐渐意识到圣诞老人以及中西方的所有节日，所代表的符号其实是一种对亲情的期待。其实中国与外国的节日，含义是一样的。 战神悟空逐渐转变认识，不知不觉身份转换，最后装扮成圣诞老人，解开晶晶的心结。 并在最后，为保护孩子们的爱和期待，不惜与天界一战",
          "filmType": {
            "name": "3D",
            "value": 2
          },
          "nation": "中国大陆",
          "language": "普通话",
          "videoId": "XMTg2Mjc3MzkxMg==",
          "premiereAt": 1546300800,
          "timeType": 1,
          "runtime": 90,
          "item": {
            "name": "3D",
            "type": 2
          },
          "isPresale": false,
          "isSale": false
        },
        {
          "filmId": 3671,
          "name": "克罗索巨兽",
          "poster": "https://pic.maizuo.com/usr/movie/3d2e3ea69153ac0920a5be4f684c9796.jpg",
          "actors": [
            {
              "name": "安妮·海瑟薇",
              "role": "Gloria",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/e3aa0aab9dfbc5cd147a3a906a426d5e.jpg"
            },
            {
              "name": "丹·史蒂文斯",
              "role": "Tim",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/b9702b1ce678748eea2d3b6946397572.jpg"
            },
            {
              "name": "杰森·苏戴奇斯",
              "role": "Oscar",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/715aeafb0cea4d66d1e99df881ee7990.jpg"
            },
            {
              "name": "蒂姆·布雷克·尼尔森",
              "role": "Garth",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/c77729abdbe34e3dff00216000233ebd.jpg"
            }
          ],
          "director": "那奇欧·维加隆多",
          "category": "动作|科幻|惊悚",
          "synopsis": "影片讲述一个在纽约丢了男友(史蒂文斯饰)失了工作的女人(海瑟薇饰)，回到老家后，无意间发现自己和某种怪兽有着诡异的联系。",
          "filmType": {
            "name": "2D",
            "value": 1
          },
          "nation": "美国 加拿大 西班牙",
          "language": "英语",
          "videoId": "show/id_XMjUxNjA2NDc4MA==",
          "premiereAt": 1546300800,
          "timeType": 1,
          "runtime": 110,
          "item": {
            "name": "2D",
            "type": 1
          },
          "isPresale": false,
          "isSale": false
        },
        {
          "filmId": 3814,
          "name": "转型团伙",
          "poster": "https://pic.maizuo.com/usr/movie/15f21e87e75757195003c43924f01adc.jpg",
          "actors": [
            {
              "name": "吴镇宇",
              "role": "",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/44f1fed878aacd57702e9e11c8e0c9e2.jpg"
            },
            {
              "name": "Feynman",
              "role": "",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/58c8e7ca266c247b9fdf38eb8450184f.jpg"
            },
            {
              "name": "乔杉",
              "role": "",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/4155b75c69e78d3d34654cbf97e3619f.jpg"
            },
            {
              "name": "文松",
              "role": "",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/d0fd2046d4bc4ba98bbbedd18e3250b1.jpg"
            }
          ],
          "director": "吴镇宇",
          "category": "剧情|喜剧|动作",
          "synopsis": "影片讲述一段过气影帝与当红童星因一场拍摄意外而陷入黑帮纷争的奇妙故事。",
          "filmType": {
            "name": "2D",
            "value": 1
          },
          "nation": "中国大陆",
          "language": "普通话 ",
          "videoId": "XMjgzNjEzMjk5Ng==",
          "premiereAt": 1546300800,
          "timeType": 1,
          "runtime": 90,
          "item": {
            "name": "2D",
            "type": 1
          },
          "isPresale": false,
          "isSale": false
        },
        {
          "filmId": 3820,
          "name": "搞怪奇妙夜",
          "poster": "https://pic.maizuo.com/usr/movie/06ba57ec4e66d62b1ce5ccb00f811e80.jpg",
          "actors": [
            {
              "name": "郑中基",
              "role": "寇克",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/ce82032efacf005328fdfd6be7bcfaa8.jpg"
            },
            {
              "name": "程波",
              "role": "康凯",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/b33585a5da04078b82da889d44050fb2.jpg"
            },
            {
              "name": "范逸臣",
              "role": "胡大彪",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/5faf59e3f83b3412decebbe3623e6419.jpg"
            },
            {
              "name": "九孔",
              "role": "凯特刘",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/6254e6d1f19620a54fa2614bd59a9951.jpg"
            }
          ],
          "director": "雷金克",
          "category": "剧情|喜剧",
          "synopsis": "电影《搞怪奇妙夜》讲述的是一个不学无术的小混混寇克（郑中基饰）与郁郁不得志却立志开修车店的修车工康凯（程波饰）这对难兄难弟为了躲避黑社会小头目龙哥（田启文饰）的追债，阴差阳错的接了一单颇有挑战性的任务。与此同时一个图谋不轨，声称自己是“国际大盗”的凯特刘（九孔饰）也应黑社会老大胡大彪（范逸臣饰）的邀请去来做一单买卖。夜色的掩护中，寇克、凯特刘、胡大彪胡大明两兄弟、神经双胞胎姐妹、胡老爷等几波势力纷纷聚集。惊悚，搞怪，爆笑的突发事件层出不穷，令所有人都措手不及。几方混战，不知是陷阱还是馅饼？到底谁才是真正的幕后受益者？",
          "filmType": {
            "name": "2D",
            "value": 1
          },
          "nation": "中国大陆",
          "language": "普通话",
          "videoId": "",
          "premiereAt": 1546300800,
          "timeType": 1,
          "runtime": 96,
          "item": {
            "name": "2D",
            "type": 1
          },
          "isPresale": false,
          "isSale": false
        },
        {
          "filmId": 3822,
          "name": "6E班",
          "poster": "https://pic.maizuo.com/usr/movie/f17d2f146aaca5bf1c30928e90f790f1.jpg",
          "actors": [
            {
              "name": "孙耀威 ",
              "role": "",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/24638741f086319b16074c9f20c230f1.jpg"
            },
            {
              "name": "黄奕",
              "role": "",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/61072819aebb017bd3c62adf31ecf98e.jpg"
            },
            {
              "name": "麦长青",
              "role": "",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/be4f2a9ffb2e8fe38db013dea9730ca7.jpg"
            },
            {
              "name": "叶芷如",
              "role": "",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/85b5c05e1b91d95ad59d4de15fba4c09.jpg"
            }
          ],
          "director": "冼国林",
          "category": "剧情|爱情",
          "synopsis": "屯门区有一所另类的「国际学校」名叫励志中学。这「国际学校」并非一般所指的贵族学校，而是一所「收容」了超过70% Non-Chinese Students(NCS）的BAND 3中学。励志的学生以南亚裔为主（印巴、尼泊尔），少数鬼仔鬼妹/混血儿/泰非印尼等，还有20-30%华语学生，其中包括内地新移民子弟或成绩较差的本地学生。多元文化差异、学生能力参差不齐，来自不同学校的插班生，学生操行问题、教学支援不足等恶劣条件，令学校师生间气氛长期处在紧张状态，校长和教师心疲力竭。",
          "filmType": {
            "name": "2D",
            "value": 1
          },
          "nation": "香港 中国大陆",
          "language": "粤语",
          "videoId": "XMjkyMzI5OTY5Ng==",
          "premiereAt": 1546300800,
          "timeType": 1,
          "runtime": 100,
          "item": {
            "name": "2D",
            "type": 1
          },
          "isPresale": false,
          "isSale": false
        },
        {
          "filmId": 3867,
          "name": "这位壮士",
          "poster": "https://pic.maizuo.com/usr/movie/994b808088f830c66897a08318a9456b.jpg",
          "actors": [
            {
              "name": "秦昊",
              "role": "",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/d90467df88bcf09d8c4c2db502c88a15.jpg"
            },
            {
              "name": "文松",
              "role": "",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/59252af16909f3dad1494c84263d22e4.jpg"
            },
            {
              "name": "谢楠",
              "role": "",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/29de05b56ee08bc59c7e35c64f5ba4ff.jpg"
            },
            {
              "name": "冷中易",
              "role": "",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/2830a05232788388f76359ea5f48b24f.jpg"
            }
          ],
          "director": "",
          "category": "喜剧",
          "synopsis": "故事围绕卷入拆迁风波的一众小人物展开，笑料十足，预计将于今年暑期登陆大银幕。",
          "filmType": {
            "name": "2D",
            "value": 1
          },
          "nation": "中国大陆",
          "language": "普通话",
          "videoId": "XMjcxNjMxODc1Mg==",
          "premiereAt": 1546300800,
          "timeType": 1,
          "runtime": 100,
          "item": {
            "name": "2D",
            "type": 1
          },
          "isPresale": false,
          "isSale": false
        },
        {
          "filmId": 3879,
          "name": "死党",
          "poster": "https://pic.maizuo.com/usr/movie/b7b8cfc02b7b574ccf3135b817f6ac7d.jpg",
          "actors": [
            {
              "name": "万国鹏",
              "role": "",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/60cb509b2999ac93fe09b2da7fab3c45.jpg"
            },
            {
              "name": "王婷",
              "role": "",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/4bafeafa1053ed51417efbe02b57eb04.jpg"
            },
            {
              "name": "王泷正",
              "role": "",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/48472416dc5274cef3775810ab6e754d.jpg"
            },
            {
              "name": "黄诗棋",
              "role": "",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/1f3824fc50c443b379fcc9968cbb7a2e.jpg"
            },
            {
              "name": "丁子迪",
              "role": "",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/793043f7be8e663f1c56bc1f1badaccc.jpg"
            }
          ],
          "director": "易成松",
          "category": "剧情|悬疑|犯罪",
          "synopsis": "电影《死党》取材于大学生中毒的社会热点事件，讲述女大学生牛玲因中毒而导致瘫痪的严重后果，然而迷雾重重，是谁造成的伤害至今没有任何定论，只是家里总会收到神秘的汇款。这五年来，牛玲的弟弟牛大泽为了赚钱养家、给姐姐治病，在大城市里白天送快递，晚上送外卖，已经被贫困的生活压得喘不过气……这让人压抑的生活让他想到必须做点什么，给姐姐讨个说法，也是给自己一个交代。于是，寻找真相的故事因一条意外的获奖新闻开始了……",
          "filmType": {
            "name": "2D",
            "value": 1
          },
          "nation": "中国大陆",
          "language": "普通话",
          "videoId": "",
          "premiereAt": 1546300800,
          "timeType": 1,
          "runtime": 100,
          "item": {
            "name": "2D",
            "type": 1
          },
          "isPresale": false,
          "isSale": false
        },
        {
          "filmId": 3921,
          "name": "枪炮腰花",
          "poster": "https://pic.maizuo.com/usr/movie/a0fa1a9f00ecd20d191866a7da1a53b1.jpg",
          "actors": [
            {
              "name": "王千源",
              "role": "",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/ee5f0424e9a68d7f8a55183ff23e874a.jpg"
            },
            {
              "name": "黄景瑜",
              "role": "",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/01a515a66f9608cd28f1ac40564805ba.jpg"
            },
            {
              "name": "张亮",
              "role": "",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/9d0c1aa6e4d26ea5d87557223ac36e3f.jpg"
            },
            {
              "name": "陈意涵",
              "role": "",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/387b0e895d72fae5d8548fdad1ef284a.jpg"
            },
            {
              "name": "张蓝心",
              "role": "",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/2b4a8b8445dcc8db871eaf7adee32623.jpg"
            }
          ],
          "director": "张猛",
          "category": "剧情|喜剧",
          "synopsis": "纨绔青年阿蒙（黄景瑜饰）为躲债回到老家，发现这里成为荒废的工业区。偶然得知一个国际剧组正在寻找这样的外景地，于是联合经营“枪炮腰花”烧烤店老范（王千源饰）一起揽活，从中捞油水。然而开发商老三（张亮饰）也瞄中这块处女地，他的闯入改变了阿蒙和老范原本天衣无缝的造景计划....",
          "filmType": {
            "name": "2D",
            "value": 1
          },
          "nation": "中国大陆",
          "language": "汉语普通话",
          "videoId": "",
          "premiereAt": 1546300800,
          "timeType": 1,
          "runtime": 100,
          "item": {
            "name": "2D",
            "type": 1
          },
          "isPresale": false,
          "isSale": false
        },
        {
          "filmId": 4485,
          "name": "大黄蜂",
          "poster": "https://pic.maizuo.com/usr/movie/4736d8f3eca6aeb2a406a71e8712c8e9.jpg",
          "actors": [
            {
              "name": "特拉维斯·奈特",
              "role": "导演",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/00e0b6f6e3feceb831c65b43aacb7e02.jpg"
            },
            {
              "name": "海莉·斯坦菲尔德",
              "role": "查莉·沃森 ",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/02a4e1b1de9d4d2f45ae44dfe3675267.jpg"
            },
            {
              "name": "杰森·德鲁克",
              "role": " 奥蒂斯",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/d016d7f719a397fe91a76530179afe27.jpg"
            },
            {
              "name": "约翰·塞纳",
              "role": "伯恩斯探员",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/3836b273cc7831c1f6ab38d18844749f.jpg"
            },
            {
              "name": "小豪尔赫·兰登伯格 ",
              "role": "咪莫 ",
              "avatarAddress": "https://pic.maizuo.com/usr/movie/f9011c734590f15d37f3774458e1eb56.jpg"
            }
          ],
          "director": "特拉维斯·奈特",
          "category": "动作|科幻|冒险",
          "synopsis": "本片故事设定在1987年，正值青春期的18岁少女查理Charlie（海莉·斯坦菲尔德 饰）在加州海边小镇的废弃场里发现了伤痕累累的大黄蜂，他们之间会发生怎样的故事呢？让我们拭目以待！",
          "filmType": {
            "name": "2D",
            "value": 1
          },
          "nation": "美国",
          "language": "英语",
          "videoId": "XMzk0OTI4NDYwOA==",
          "premiereAt": 1546560000,
          "timeType": 3,
          "runtime": 100,
          "item": {
            "name": "2D",
            "type": 1
          },
          "isPresale": true,
          "isSale": false
        },
        {
          "filmId": 4483,
          "name": "小家伙",
          "poster": "https://pic.maizuo.com/usr/movie/d372ba44faa45e008bbd179725f20343.jpg",
          "director": "谢尔盖·德沃尔采沃伊",
          "category": "剧情",
          "synopsis": "《小家伙》是俄罗斯导演谢尔盖·德瓦茨沃伊继2008年《图潘》夺得戛纳国际电影节“一种关注”大奖和东京国际电影节最佳影片奖后十年磨一剑的作品。　　影片讲述一名叫Ayka的吉尔吉斯年轻女工诞下、抛弃并最终试图找回自己孩子的故事。影片关注中亚女性在莫斯科的生存处境，紧密跟随Ayka的脚步，透过她的生活轨迹勾勒出作为群体的中亚人民面临的现实问题。艰辛之中，爱与善良如此弥足珍贵……本片受邀在第二届平遥国际电影展首度与中国观众见面，现已作为哈萨克斯坦选送参加奥斯卡最佳外语片奖的作品，预计2019年在国内公映。",
          "filmType": {
            "name": "2D",
            "value": 1
          },
          "nation": " 俄罗斯   德国   ",
          "language": "俄语    吉尔吉斯语",
          "videoId": "",
          "premiereAt": 1547769600,
          "timeType": 3,
          "runtime": 100,
          "item": {
            "name": "2D",
            "type": 1
          },
          "isPresale": false,
          "isSale": false
        },
        {
          "filmId": 2967,
          "name": "三体",
          "poster": "https://pic.maizuo.com/usr/100002967/dae35f7166d08d87941b5ba4c51dc9e0.jpg",
          "actors": [
            {
              "name": "张翰",
              "role": "潘寒",
              "avatarAddress": "https://pic.maizuo.com/usr/100002967/20969407618db7438387ed0a468eec7c.jpg"
            },
            {
              "name": "张静初",
              "role": "叶文洁",
              "avatarAddress": "https://pic.maizuo.com/usr/100002967/00d8c890db91c8d039c143c9d3e79af4.jpg"
            },
            {
              "name": "冯绍峰",
              "role": "汪淼",
              "avatarAddress": "https://pic.maizuo.com/usr/100002967/f3021ac5aa9881b2278631f5a8d20fb0.jpg"
            },
            {
              "name": "唐嫣",
              "role": "申玉菲",
              "avatarAddress": "https://pic.maizuo.com/usr/100002967/e3926990af2e62f54ad5b862bee3479b.jpg"
            },
            {
              "name": "吴刚",
              "role": "史强",
              "avatarAddress": "https://pic.maizuo.com/usr/100002967/0dd1a4ad8899ce6465fc00738daaa0a2.jpg"
            }
          ],
          "director": "张番番",
          "category": "科幻",
          "synopsis": "2020年，数百名物理学家死于非命；中国专家汪淼的眼中也出现倒计时，随后发现一款游戏中一个在三日下煎熬的“灾难星球”竟真实存在，那里的“三体文明”400年后即将达到地球；一场未来的浩劫摆在人类面前……",
          "filmType": {
            "name": "3D",
            "value": 2
          },
          "nation": "中国大陆",
          "language": "普通话",
          "videoId": "XODM5OTI3Njky",
          "premiereAt": 1577836800,
          "timeType": 1,
          "runtime": 176,
          "item": {
            "name": "3D",
            "type": 2
          },
          "isPresale": false,
          "isSale": false
        },
        {
          "filmId": 3122,
          "name": "奇妙的朋友之萌爱2016",
          "poster": "https://pic.maizuo.com/usr/100003122/2b3feda2cc7c9285ea54d61b852aedb6.jpg",
          "actors": [
            {
              "name": "李宇春",
              "role": "李宇春",
              "avatarAddress": "https://pic.maizuo.com/usr/100003122/f9c432f693881891209e9f696de323ed.jpg"
            },
            {
              "name": "黄轩",
              "role": "黄轩",
              "avatarAddress": "https://pic.maizuo.com/usr/100003122/42a1d2ee136a263eed511f8283c3dc06.jpg"
            },
            {
              "name": "胡杏儿",
              "role": "胡杏儿",
              "avatarAddress": "https://pic.maizuo.com/usr/100003122/5c05cf5748bac12091c17a65c4909e2f.jpg"
            },
            {
              "name": "杜海涛",
              "role": "赵大海",
              "avatarAddress": "https://pic.maizuo.com/usr/100003122/1e0907738f8a3da74a22f2a4cace4654.jpg"
            },
            {
              "name": "郭艳",
              "role": "李冰",
              "avatarAddress": "https://pic.maizuo.com/usr/100003122/4fc2ed994174f9c3c7358a6764347d55.jpg"
            },
            {
              "name": "杜天皓",
              "role": "杜天皓",
              "avatarAddress": "https://pic.maizuo.com/usr/100003122/5f66ca3696f18658775f327d8db919df.jpg"
            },
            {
              "name": "高泰宇",
              "role": "梁鑫",
              "avatarAddress": "https://pic.maizuo.com/usr/100003122/4bc76d5c4b83fde35126f73bebf2bfa3.jpg"
            },
            {
              "name": "林雪",
              "role": "花哥",
              "avatarAddress": "https://pic.maizuo.com/usr/100003122/c9480a56f72a8720316f7143d1ddf880.jpg"
            }
          ],
          "director": "张全欣",
          "category": "剧情|喜剧",
          "synopsis": "影片讲述了经纪初哥赵大海（杜海涛饰）接到一个任务：带领李宇春、倪妮、黄轩、胡杏儿、杜天皓五位明星前往自然保护区担任动物保护大使。\t\t\t\t伴随着区内举世瞩目的熊猫三胞胎的诞生，明星大使倍感兴奋。其后，大海及明星在动物世界中逐渐成长并收获友情，与此同时，区外居然有人觊觎熊猫三宝。\t\t\t\t于是一方虎视眈眈盗取国宝，一方联手合作紧张营救，双方各种斗智斗勇，期间不断发生险象环生而又充满萌趣的故事。",
          "filmType": {
            "name": "2D",
            "value": 1
          },
          "nation": "中国大陆",
          "language": "普通话",
          "videoId": "",
          "premiereAt": 1577836800,
          "timeType": 1,
          "runtime": 90,
          "item": {
            "name": "2D",
            "type": 1
          },
          "isPresale": false,
          "isSale": false
        },
        {
          "filmId": 3451,
          "name": "阿凡达2",
          "poster": "https://pic.maizuo.com/usr/100003451/00401aeead9cb5020bd5166c2909c32a.jpg",
          "actors": [
            {
              "name": "萨姆·沃辛顿",
              "role": "杰克·萨利",
              "avatarAddress": "https://pic.maizuo.com/usr/100003451/df050071a829cb47d7612e1e4c3f8b37.jpg"
            },
            {
              "name": "佐伊·索尔达娜",
              "role": "奈蒂莉",
              "avatarAddress": "https://pic.maizuo.com/usr/100003451/a457d0e419128720688a6d11712db4b4.jpg"
            },
            {
              "name": "西格妮·韦弗",
              "role": "格蕾丝·奥格斯",
              "avatarAddress": "https://pic.maizuo.com/usr/100003451/2ebc1d29d21743c960de288930921814.jpg"
            },
            {
              "name": "史蒂芬·朗",
              "role": "迈尔斯·夸奇上校",
              "avatarAddress": "https://pic.maizuo.com/usr/100003451/368a975d10ee8e0bf30b5d5906fb6527.jpg"
            }
          ],
          "director": "詹姆斯·卡梅隆",
          "category": "动作|科幻|奇幻|冒险",
          "synopsis": "《阿凡达2》的剧情承接自第一部的5年之后。曾经的地球残疾军人杰克·萨利，如今已经是潘多拉星球纳美族一方部族的族长，并且与爱妻娜塔莉共同育有一对可爱的儿女，日子过得平淡而充实。然而某天，有个部族的兄弟在海岸附近巡逻时遭到利器割喉身亡。通过现场勘查，以及作为前海军陆战队员的敏锐直觉，杰克判断已经有人类的阿凡达混入了部落……",
          "filmType": {
            "name": "2D",
            "value": 1
          },
          "nation": "美国",
          "language": "英语",
          "videoId": "",
          "premiereAt": 1608249600,
          "timeType": 3,
          "runtime": 90,
          "item": {
            "name": "2D",
            "type": 1
          },
          "isPresale": false,
          "isSale": false
        }
      ]
    })
    fn(res);
  }
}

module.exports = {
  ajax: ajax
}

