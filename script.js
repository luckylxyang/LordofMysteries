// 22条神之途径数据
const pathsData = [
  {
    "name": "愚者",
    "description": "源堡途径，执掌源堡与诡秘权柄，可模拟其他途径能力。",
    "sequences": [
      "序列9：占卜家",
      "序列8：小丑",
      "序列7：魔术师",
      "序列6：无面人",
      "序列5：秘偶大师",
      "序列4：诡法师",
      "序列3：古代学者",
      "序列2：奇迹师",
      "序列1：诡秘侍者",
      "序列0：愚者"
    ],
    "oldOnes": "旧日：诡秘之主",
    "potions": [
      {
        "sequence": "序列9：占卜家",
        "recipe": "主材料：迷雾树果实一颗、迷雾树汁液五滴；辅助材料：纯水80毫升、夜香草粉末3克、深纹胡桃5克"
      },
      {
        "sequence": "序列8：小丑",
        "recipe": "主材料：成年的霍纳奇斯灰山羊独角结晶一枚、完整的人脸玫瑰一朵；辅助材料：纯水80毫升、黑边太阳花粉末6克、金薄荷汁5滴"
      },
      {
        "sequence": "序列7：魔术师",
        "recipe": "主材料：迷雾树果实一颗、拉瓦章鱼血液50毫升；辅助材料：纯水80毫升、夜香草粉末5克、深纹胡桃7克"
      }
    ]
  },
  {
    "name": "黑夜",
    "description": "永暗之河途径，执掌隐秘、恐惧与梦境。",
    "sequences": [
      "序列9：不眠者",
      "序列8：午夜诗人",
      "序列7：梦魇",
      "序列6：安魂师",
      "序列5：灵巫",
      "序列4：守夜人",
      "序列3：恐惧主教",
      "序列2：隐秘之仆",
      "序列1：黑夜女神",
      "序列0：黑夜"
    ],
    "oldOnes": "旧日：永恒之暗",
    "potions": [
      {
        "sequence": "序列9：不眠者",
        "recipe": "主材料：15克深眠花、15克洋甘菊粉末；辅助材料：纯水80毫升、黑夜草粉末5克、薰衣草汁10滴"
      },
      {
        "sequence": "序列8：午夜诗人",
        "recipe": "主材料：成年梦魇独角结晶一枚、深眠花一朵；辅助材料：纯水80毫升、洋甘菊粉末8克、黑夜草粉末5克"
      },
      {
        "sequence": "序列7：梦魇",
        "recipe": "主材料：成年梦魇独角结晶一枚、深眠花一朵；辅助材料：纯水80毫升、洋甘菊粉末8克、黑夜草粉末5克"
      }
    ]
  },
  {
    "name": "死神",
    "description": "永暗之河途径，执掌死亡、腐朽与冥界。",
    "sequences": [
      "序列9：收尸人",
      "序列8：掘墓人",
      "序列7：通灵者",
      "序列6：死灵导师",
      "序列5：看门人",
      "序列4：不死者",
      "序列3：摆渡人",
      "序列2：死亡执政官",
      "序列1：苍白皇帝",
      "序列0：死神"
    ],
    "oldOnes": "旧日：永恒之暗",
    "potions": [
      {
        "sequence": "序列9：收尸人",
        "recipe": "主材料：成年黑斑青蛙脑垂体一个、腐烂的曼陀罗果实一枚；辅助材料：纯水80毫升、夜香草粉末5克、墓地青苔3克"
      },
      {
        "sequence": "序列8：掘墓人",
        "recipe": "主材料：成年黑斑青蛙脑垂体一个、腐烂的曼陀罗果实一枚；辅助材料：纯水80毫升、夜香草粉末5克、墓地青苔3克"
      },
      {
        "sequence": "序列7：通灵者",
        "recipe": ""
      }
    ]
  },
  {
    "name": "战神",
    "description": "灾祸之城途径，执掌战争、杀戮与毁灭。",
    "sequences": [
      "序列9：战士",
      "序列8：格斗家",
      "序列7：武器大师",
      "序列6：黎明骑士",
      "序列5：守护者",
      "序列4：猎魔者",
      "序列3：银骑士",
      "序列2：荣耀者",
      "序列1：神明之手",
      "序列0：战神"
    ],
    "oldOnes": "旧日：毁灭天灾",
    "potions": [
      {
        "sequence": "序列9：战士",
        "recipe": "主材料：成年独角狮虎兽心脏一颗、成年独角狮虎兽血液50毫升；辅助材料：纯水80毫升、龙血草粉末5克、白边太阳花粉末3克"
      },
      {
        "sequence": "序列8：格斗家",
        "recipe": ""
      },
      {
        "sequence": "序列7：武器大师",
        "recipe": ""
      }
    ]
  },
  {
    "name": "暴君",
    "description": "灾祸之城途径，执掌风暴、暴君与海灾。",
    "sequences": [
      "序列9：水手",
      "序列8：暴怒之民",
      "序列7：航海家",
      "序列6：风眷者",
      "序列5：海洋歌者",
      "序列4：灾难主祭",
      "序列3：海王",
      "序列2：天灾",
      "序列1：雷神",
      "序列0：暴君"
    ],
    "oldOnes": "旧日：毁灭天灾",
    "potions": [
      {
        "sequence": "序列9：水手",
        "recipe": "主材料：成年黑鲨鲨肝一对、成年黑鲨鲨血50毫升；辅助材料：纯水80毫升、蓝纹太阳花粉末5克、薄荷汁5滴"
      },
      {
        "sequence": "序列8：暴怒之民",
        "recipe": ""
      },
      {
        "sequence": "序列7：航海家",
        "recipe": ""
      }
    ]
  },
  {
    "name": "太阳",
    "description": "光之钥途径，执掌光明、净化与秩序。",
    "sequences": [
      "序列9：歌颂者",
      "序列8：祈光人",
      "序列7：太阳神官",
      "序列6：公证人",
      "序列5：光之祭司",
      "序列4：无暗者",
      "序列3：正义导师",
      "序列2：逐光者",
      "序列1：纯白天使",
      "序列0：太阳"
    ],
    "oldOnes": "旧日：永恒烈阳",
    "potions": [
      {
        "sequence": "序列9：歌颂者",
        "recipe": "主材料：成年太阳神鸟尾羽一根、成年太阳神鸟血液30毫升；辅助材料：纯水80毫升、金边太阳花粉末5克、金薄荷汁5滴"
      },
      {
        "sequence": "序列8：祈光人",
        "recipe": ""
      },
      {
        "sequence": "序列7：太阳神官",
        "recipe": ""
      }
    ]
  },
  {
    "name": "审判",
    "description": "光之钥途径，执掌审判、公正与惩戒。",
    "sequences": [
      "序列9：仲裁人",
      "序列8：治安官",
      "序列7：审讯者",
      "序列6：法官",
      "序列5：惩戒骑士",
      "序列4：律令法师",
      "序列3：平衡者",
      "序列2：秩序之手",
      "序列1：审判者",
      "序列0：审判"
    ],
    "oldOnes": "旧日：永恒烈阳",
    "potions": [
      {
        "sequence": "序列9：仲裁人",
        "recipe": "主材料：成年公正龙蜥心脏一颗、成年公正龙蜥血液50毫升；辅助材料：纯水80毫升、白边太阳花粉末5克、白薄荷汁5滴"
      },
      {
        "sequence": "序列8：治安官",
        "recipe": ""
      },
      {
        "sequence": "序列7：审讯者",
        "recipe": ""
      }
    ]
  },
  {
    "name": "倒吊人",
    "description": "灾祸之城途径，执掌厄运、命运与扭曲。",
    "sequences": [
      "序列9：怪物",
      "序列8：机器",
      "序列7：幸运儿",
      "序列6：灾祸教士",
      "序列5：赢家",
      "序列4：厄运法师",
      "序列3：混乱行者",
      "序列2：先知",
      "序列1：巨蛇",
      "序列0：命运之轮"
    ],
    "oldOnes": "旧日：命运之轮",
    "potions": [
      {
        "sequence": "序列9：怪物",
        "recipe": ""
      },
      {
        "sequence": "序列8：机器",
        "recipe": ""
      },
      {
        "sequence": "序列7：幸运儿",
        "recipe": ""
      }
    ]
  },
  {
    "name": "红祭司",
    "description": "灾祸之城途径，执掌战争、征服与毁灭。",
    "sequences": [
      "序列9：猎人",
      "序列8：挑衅者",
      "序列7：纵火家",
      "序列6：阴谋家",
      "序列5：收割者",
      "序列4：铁血骑士",
      "序列3：战争主教",
      "序列2：天气术士",
      "序列1：征服者",
      "序列0：红祭司"
    ],
    "oldOnes": "旧日：毁灭天灾",
    "potions": [
      {
        "sequence": "序列9：猎人",
        "recipe": ""
      },
      {
        "sequence": "序列8：挑衅者",
        "recipe": ""
      },
      {
        "sequence": "序列7：纵火家",
        "recipe": ""
      }
    ]
  },
  {
    "name": "魔女",
    "description": "灾祸之城途径，执掌灾难、冰霜与诅咒。",
    "sequences": [
      "序列9：刺客",
      "序列8：教唆者",
      "序列7：女巫",
      "序列6：欢愉",
      "序列5：痛苦",
      "序列4：绝望",
      "序列3：不老",
      "序列2：灾难",
      "序列1：末日",
      "序列0：魔女"
    ],
    "oldOnes": "旧日：毁灭天灾",
    "potions": [
      {
        "sequence": "序列9：刺客",
        "recipe": ""
      },
      {
        "sequence": "序列8：教唆者",
        "recipe": ""
      },
      {
        "sequence": "序列7：女巫",
        "recipe": ""
      }
    ]
  },
  {
    "name": "黑皇帝",
    "description": "源堡途径，执掌秩序、扭曲与统治。",
    "sequences": [
      "序列9：律师",
      "序列8：野蛮人",
      "序列7：贿赂者",
      "序列6：腐化男爵",
      "序列5：混乱导师",
      "序列4：堕落伯爵",
      "序列3：狂乱法师",
      "序列2：熵之公爵",
      "序列1：弑序亲王",
      "序列0：黑皇帝"
    ],
    "oldOnes": "旧日：诡秘之主",
    "potions": [
      {
        "sequence": "序列9：律师",
        "recipe": ""
      },
      {
        "sequence": "序列8：野蛮人",
        "recipe": ""
      },
      {
        "sequence": "序列7：贿赂者",
        "recipe": ""
      }
    ]
  },
  {
    "name": "月亮",
    "description": "母巢途径，执掌生命、繁衍与月光。",
    "sequences": [
      "序列9：药师",
      "序列8：驯兽师",
      "序列7：吸血鬼",
      "序列6：魔药教授",
      "序列5：深红学者",
      "序列4：巫王",
      "序列3：召唤大师",
      "序列2：创生者",
      "序列1：美神",
      "序列0：月亮"
    ],
    "oldOnes": "旧日：母巢",
    "potions": [
      {
        "sequence": "序列9：药师",
        "recipe": ""
      },
      {
        "sequence": "序列8：驯兽师",
        "recipe": ""
      },
      {
        "sequence": "序列7：吸血鬼",
        "recipe": ""
      }
    ]
  },
  {
    "name": "大地",
    "description": "母巢途径，执掌生命、自然与丰收。",
    "sequences": [
      "序列9：耕种者",
      "序列8：医师",
      "序列7：丰收祭司",
      "序列6：生物学家",
      "序列5：德鲁伊",
      "序列4：古代炼金师",
      "序列3：抬棺人",
      "序列2：自然行者",
      "序列1：大地母神",
      "序列0：大地"
    ],
    "oldOnes": "旧日：母巢",
    "potions": [
      {
        "sequence": "序列9：耕种者",
        "recipe": ""
      },
      {
        "sequence": "序列8：医师",
        "recipe": ""
      },
      {
        "sequence": "序列7：丰收祭司",
        "recipe": ""
      }
    ]
  },
  {
    "name": "被缚者",
    "description": "暗影世界途径，执掌痛苦、束缚与异变。",
    "sequences": [
      "序列9：囚犯",
      "序列8：疯子",
      "序列7：狼人",
      "序列6：活尸",
      "序列5：怨魂",
      "序列4：木偶",
      "序列3：沉默门徒",
      "序列2：古代邪物",
      "序列1：神孽",
      "序列0：被缚者"
    ],
    "oldOnes": "旧日：暗影世界",
    "potions": [
      {
        "sequence": "序列9：囚犯",
        "recipe": ""
      },
      {
        "sequence": "序列8：疯子",
        "recipe": ""
      },
      {
        "sequence": "序列7：狼人",
        "recipe": ""
      }
    ]
  },
  {
    "name": "罪犯",
    "description": "暗影世界途径，执掌欲望、罪恶与堕落。",
    "sequences": [
      "序列9：罪犯",
      "序列8：折翼天使",
      "序列7：连环杀手",
      "序列6：恶魔",
      "序列5：欲望使徒",
      "序列4：魔鬼",
      "序列3：呓语者",
      "序列2：鲜血大公",
      "序列1：污秽君王",
      "序列0：罪犯"
    ],
    "oldOnes": "旧日：暗影世界",
    "potions": [
      {
        "sequence": "序列9：罪犯",
        "recipe": ""
      },
      {
        "sequence": "序列8：折翼天使",
        "recipe": ""
      },
      {
        "sequence": "序列7：连环杀手",
        "recipe": ""
      }
    ]
  },
  {
    "name": "门",
    "description": "源堡途径，执掌空间、传送与星界。",
    "sequences": [
      "序列9：学徒",
      "序列8：戏法大师",
      "序列7：占星人",
      "序列6：记录官",
      "序列5：旅行家",
      "序列4：秘法师",
      "序列3：漫游者",
      "序列2：旅法师",
      "序列1：星之匙",
      "序列0：门"
    ],
    "oldOnes": "旧日：诡秘之主",
    "potions": [
      {
        "sequence": "序列9：学徒",
        "recipe": ""
      },
      {
        "sequence": "序列8：戏法大师",
        "recipe": ""
      },
      {
        "sequence": "序列7：占星人",
        "recipe": ""
      }
    ]
  },
  {
    "name": "错误",
    "description": "源堡途径，执掌错误、漏洞与寄生。",
    "sequences": [
      "序列9：偷盗者",
      "序列8：诈骗师",
      "序列7：窃梦家",
      "序列6：寄生者",
      "序列5：欺瞒导师",
      "序列4：寄生者",
      "序列3：命运木马",
      "序列2：欺诈之神",
      "序列1：时之虫",
      "序列0：错误"
    ],
    "oldOnes": "旧日：诡秘之主",
    "potions": [
      {
        "sequence": "序列9：偷盗者",
        "recipe": ""
      },
      {
        "sequence": "序列8：诈骗师",
        "recipe": ""
      },
      {
        "sequence": "序列7：窃梦家",
        "recipe": ""
      }
    ]
  },
  {
    "name": "空想家",
    "description": "知识荒野途径，执掌心灵、想象与创造。",
    "sequences": [
      "序列9：观众",
      "序列8：读心者",
      "序列7：心理医生",
      "序列6：催眠师",
      "序列5：梦境行者",
      "序列4：操纵师",
      "序列3：织梦人",
      "序列2：洞察者",
      "序列1：作家",
      "序列0：空想家"
    ],
    "oldOnes": "旧日：知识荒野",
    "potions": [
      {
        "sequence": "序列9：观众",
        "recipe": ""
      },
      {
        "sequence": "序列8：读心者",
        "recipe": ""
      },
      {
        "sequence": "序列7：心理医生",
        "recipe": ""
      }
    ]
  },
  {
    "name": "白塔",
    "description": "知识荒野途径，执掌知识、智慧与真理。",
    "sequences": [
      "序列9：阅读者",
      "序列8：推理学员",
      "序列7：侦探",
      "序列6：博学者",
      "序列5：秘术导师",
      "序列4：奥术师",
      "序列3：预言大师",
      "序列2：贤者",
      "序列1：知识皇帝",
      "序列0：白塔"
    ],
    "oldOnes": "旧日：知识荒野",
    "potions": [
      {
        "sequence": "序列9：阅读者",
        "recipe": ""
      },
      {
        "sequence": "序列8：推理学员",
        "recipe": ""
      },
      {
        "sequence": "序列7：侦探",
        "recipe": ""
      }
    ]
  },
  {
    "name": "完美者",
    "description": "知识荒野途径，执掌工艺、创造与完美。",
    "sequences": [
      "序列9：通识者",
      "序列8：考古学家",
      "序列7：鉴定师",
      "序列6：工匠",
      "序列5：星术师",
      "序列4：炼金术士",
      "序列3：奥秘学者",
      "序列2：奥秘之匠",
      "序列1：完美者",
      "序列0：完美者"
    ],
    "oldOnes": "旧日：知识荒野",
    "potions": [
      {
        "sequence": "序列9：通识者",
        "recipe": ""
      },
      {
        "sequence": "序列8：考古学家",
        "recipe": ""
      },
      {
        "sequence": "序列7：鉴定师",
        "recipe": ""
      }
    ]
  },
  {
    "name": "隐者",
    "description": "知识荒野途径，执掌隐秘、知识与窥视。",
    "sequences": [
      "序列9：窥秘人",
      "序列8：格斗学者",
      "序列7：巫师",
      "序列6：卷轴教授",
      "序列5：星术师",
      "序列4：神秘学家",
      "序列3：预言大师",
      "序列2：贤者",
      "序列1：隐者",
      "序列0：隐者"
    ],
    "oldOnes": "旧日：知识荒野",
    "potions": [
      {
        "sequence": "序列9：窥秘人",
        "recipe": ""
      },
      {
        "sequence": "序列8：格斗学者",
        "recipe": ""
      },
      {
        "sequence": "序列7：巫师",
        "recipe": ""
      }
    ]
  }
];

// 页面初始化
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
});

// 初始化页面
function initializePage() {
    renderPathCards();
    setupEventListeners();
}

// 渲染塔罗牌卡片
function renderPathCards() {
    const tarotContainer = document.querySelector('.tarot-container');
    tarotContainer.innerHTML = '';
    
    pathsData.forEach((path, index) => {
        const card = document.createElement('div');
        card.className = 'tarot-card fade-in';
        
        // 为每个塔罗牌创建正面和背面
        card.innerHTML = `
            <div class="tarot-front">
                <div class="tarot-number">${romanize(index + 1)}</div>
                <div class="tarot-title">${path.name}</div>
                <div class="tarot-symbol">⚜</div>
                <div class="tarot-description">${path.description}</div>
            </div>
            <div class="tarot-back"></div>
        `;
        
        card.addEventListener('click', () => {
            showPathDetails(path);
        });
        
        tarotContainer.appendChild(card);
    });
}

// 将数字转换为罗马数字
function romanize(num) {
    const romanNumerals = {
        M: 1000, CM: 900, D: 500, CD: 400,
        C: 100, XC: 90, L: 50, XL: 40,
        X: 10, IX: 9, V: 5, IV: 4, I: 1
    };
    let roman = '';
    
    for (let key in romanNumerals) {
        while (num >= romanNumerals[key]) {
            roman += key;
            num -= romanNumerals[key];
        }
    }
    
    return roman;
}

// 设置事件监听器
function setupEventListeners() {
    // 搜索功能
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', handleSearch);
    
    // 关闭详情
    document.querySelector('.close-btn').addEventListener('click', hidePathDetails);
    document.querySelector('.overlay').addEventListener('click', hidePathDetails);
}

// 处理搜索输入
function handleSearch() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const tarotContainer = document.querySelector('.tarot-container');
    const cards = tarotContainer.querySelectorAll('.tarot-card');
    
    cards.forEach((card, index) => {
        const title = card.querySelector('.tarot-title').textContent.toLowerCase();
        const description = card.querySelector('.tarot-description').textContent.toLowerCase();
        
        // 查找匹配的途径
        const path = pathsData[index];
        let sequenceMatch = false;
        let potionMatch = false;
        
        // 检查序列是否匹配
        if (path) {
            sequenceMatch = path.sequences.some(seq => seq.toLowerCase().includes(searchTerm));
            
            // 检查魔药配方是否匹配
            if (path.potions) {
                potionMatch = path.potions.some(potion => 
                    potion.sequence.toLowerCase().includes(searchTerm) || 
                    potion.recipe.toLowerCase().includes(searchTerm)
                );
            }
        }
        
        if (title.includes(searchTerm) || description.includes(searchTerm) || sequenceMatch || potionMatch) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// 显示途径详情
function showPathDetails(path) {
    const detailTitle = document.getElementById('detailTitle');
    const detailContent = document.getElementById('detailContent');
    
    detailTitle.textContent = path.name;
    
    // 添加旧日信息
    let oldOnesHTML = '';
    if (path.oldOnes) {
        oldOnesHTML = `<div class="old-ones"><h4>旧日层次</h4><p>${path.oldOnes}</p><div class="mystical-seal"></div></div>`;
    }
    
    // 创建类似快递步骤条的序列展示
    let sequencesHTML = '<div class="sequence-list"><h4>序列等级</h4><div class="sequence-steps">';
    
    // 反转序列数组以便从序列0开始显示（最高级别）
    const reversedSequences = [...path.sequences].reverse();
    
    // 创建步骤条
    sequencesHTML += '<div class="steps-container">';
    reversedSequences.forEach((seq, index) => {
        // 提取序列号和名称
        const seqMatch = seq.match(/序列(\d+)：(.+)/);
        if (seqMatch) {
            const seqNumber = seqMatch[1];
            const seqName = seqMatch[2];
            
            sequencesHTML += `
                <div class="step-item ${index === 0 ? 'active' : ''}" data-sequence="${seq}" data-index="${index}">
                    <div class="step-circle">${seqNumber}</div>
                    <div class="step-name">${seqName}</div>
                    ${index < reversedSequences.length - 1 ? '<div class="step-line"></div>' : ''}
                </div>
            `;
        }
    });
    sequencesHTML += '</div>';
    
    // 右侧魔药配方区域（默认显示第一个序列的魔药配方）
    sequencesHTML += '<div class="potion-display-area" id="potionDisplayArea"></div>';
    
    sequencesHTML += '</div></div>';
    
    detailContent.innerHTML = `
        <div class="tarot-symbol" style="font-size: 4rem; margin: 20px 0; text-align: center; color: #e2c87a; animation: pulse 2s infinite;">⚜</div>
        <p class="path-description">${path.description}</p>
        ${oldOnesHTML}
        ${sequencesHTML}
    `;
    
    // 为每个步骤添加点击事件
    const stepItems = detailContent.querySelectorAll('.step-item');
    stepItems.forEach(step => {
        step.addEventListener('click', function() {
            const sequenceName = this.getAttribute('data-sequence');
            const index = parseInt(this.getAttribute('data-index'));
            
            // 高亮当前选中的步骤
            stepItems.forEach(s => s.classList.remove('active'));
            this.classList.add('active');
            
            // 显示对应的魔药配方
            showPotionDetails(path, sequenceName, reversedSequences[index]);
        });
    });
    
    // 默认显示第一个序列的魔药配方
    if (reversedSequences.length > 0) {
        const firstSeq = reversedSequences[0];
        showPotionDetails(path, firstSeq, firstSeq);
    }
    
    document.querySelector('.path-details').classList.add('active');
    document.querySelector('.overlay').classList.add('active');
}

// 显示魔药配方和能力详情
function showPotionDetails(path, sequenceName, fullSequenceName) {
    const potionDisplayArea = document.getElementById('potionDisplayArea');
    
    // 提取序列号
    const seqMatch = sequenceName.match(/序列(\d+)/);
    if (!seqMatch) return;
    
    const seqNumber = seqMatch[1];
    
    // 查找对应的魔药配方
    let potionHTML = '';
    if (path.potions) {
        const potion = path.potions.find(p => p.sequence.includes(`序列${seqNumber}`));
        
        if (potion) {
            potionHTML += `
                <div class="potion-detail">
                    <h3>${fullSequenceName}</h3>
                    <div class="potion-recipe">
                        <h5>魔药配方</h5>
                        <p>${potion.recipe}</p>
                    </div>
                    <div class="potion-ability">
                        <h5>能力特性</h5>
                        <p>${getAbilityDescription(path.name, seqNumber) || '暂无记载'}</p>
                    </div>
                </div>
            `;
        } else {
            potionHTML = `
                <div class="potion-detail">
                    <h3>${fullSequenceName}</h3>
                    <p class="no-potion">该序列魔药配方尚未记载</p>
                    <div class="potion-ability">
                        <h5>能力特性</h5>
                        <p>${getAbilityDescription(path.name, seqNumber) || '暂无记载'}</p>
                    </div>
                </div>
            `;
        }
    } else {
        potionHTML = `
            <div class="potion-detail">
                <h3>${fullSequenceName}</h3>
                <p class="no-potion">该途径魔药配方尚未记载</p>
                <div class="potion-ability">
                    <h5>能力特性</h5>
                    <p>${getAbilityDescription(path.name, seqNumber) || '暂无记载'}</p>
                </div>
            </div>
        `;
    }
    
    potionDisplayArea.innerHTML = potionHTML;
    
    // 添加淡入动画
    const potionDetail = potionDisplayArea.querySelector('.potion-detail');
    if (potionDetail) {
        potionDetail.classList.add('show');
    }
}

// 获取能力描述（示例数据）
function getAbilityDescription(pathName, seqNumber) {
    const abilities = {
        "愚者": {
            "0": "掌控灰雾与诡秘，可以模仿任何途径的能力，是最接近「造物主」的存在。",
            "1": "可以穿梭于灰雾之上，预见未来的可能性，并干涉命运。",
            "2": "能够模仿大部分非凡能力，并拥有强大的欺诈与隐匿能力。",
            "3": "可以穿梭于不同的空间，创造独属于自己的门。",
            "4": "能够进入他人梦境，并在梦中创造现实。",
            "5": "可以通灵，与灵界沟通，并操控灵体。",
            "6": "能够制作并操控傀儡，赋予其生命。",
            "7": "可以预见未来的片段，解读星象。",
            "8": "掌握各种魔术技巧，能够欺骗感官。",
            "9": "拥有基础的欺诈能力，可以扭曲他人的感知。"
        },
        "黑夜": {
            "0": "掌控黑夜与隐秘，能够窥视一切秘密，是隐秘与黑暗的化身。",
            "1": "可以融入黑暗，成为黑夜的一部分，窥视并操控秘密。",
            "2": "能够收割他人的生命与秘密，并从中获取力量。",
            "3": "可以追踪任何目标，无论距离多远，都能找到猎物。",
            "4": "能够隐匿自身，使自己不被任何方式发现。",
            "5": "可以窥视他人的秘密，并从中获取信息。",
            "6": "能够记录并保存一切见闻，永不遗忘。",
            "7": "可以在黑夜中视物，感知隐藏的危险。",
            "8": "能够理解并掌握各种知识，快速学习。",
            "9": "拥有基础的祈祷能力，可以向黑夜女神祈求保护。"
        },
        "死神": {
            "0": "掌控死亡与永恒，能够决定生死，是死亡与永恒的化身。",
            "1": "可以操控死亡法则，决定生命的终结，并掌握永恒。",
            "2": "能够执行死亡判决，无视任何防御直接带来死亡。",
            "3": "可以永生不死，除非被更高序列的存在杀死。",
            "4": "能够策划并实施阴谋，操控他人的命运。",
            "5": "可以指引亡灵，控制死者的灵魂。",
            "6": "能够与死者沟通，获取死者的记忆与知识。",
            "7": "可以施展死灵魔法，召唤并控制亡灵。",
            "8": "能够挖掘并保存尸体，防止其腐烂。",
            "9": "拥有基础的收集尸体的能力，能感知死亡的气息。"
        }
    };
    
    return abilities[pathName] && abilities[pathName][seqNumber] ? abilities[pathName][seqNumber] : null;
}

// 隐藏途径详情
function hidePathDetails() {
    document.querySelector('.path-details').classList.remove('active');
    document.querySelector('.overlay').classList.remove('active');
}