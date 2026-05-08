const products = [
    {
        id: 1,
        category: 'perfume',
        name: '午夜茉莉淡香精',
        price: 'NT$ 4,200',
        image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=1000',
        description: '神秘且誘人的香調，結合了夜間盛放的茉莉與深邃的麝香。'
    },
    {
        id: 2,
        category: 'perfume',
        name: '清晨薄霧古龍水',
        price: 'NT$ 3,500',
        image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=1000',
        description: '清新柑橘與沾滿露水的青草香氣，為您的每一天開啟清晰的篇章。'
    },
    {
        id: 3,
        category: 'perfume',
        name: '絲絨玫瑰精粹',
        price: 'NT$ 5,800',
        image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=1000',
        description: '奢華的保加利亞玫瑰花瓣，萃取成濃郁且持久的經典香氣。'
    },
    {
        id: 4,
        category: 'perfume',
        name: '檀香寧靜香水',
        price: 'NT$ 4,800',
        image: 'https://images.unsplash.com/photo-1585120040315-2241b774ad0f?auto=format&fit=crop&q=80&w=1000',
        description: '溫暖大地氣息的檀香，揉合了微妙的香草與辛香料質感。'
    },
    {
        id: 5,
        category: 'home-fragrance',
        name: '森林雨後空間噴霧',
        price: 'NT$ 1,200',
        image: 'https://images.unsplash.com/photo-1602928321679-560bb453f190?auto=format&fit=crop&q=80&w=1000',
        description: '將雨後森林的清新氣息直接帶入您的生活空間。'
    },
    {
        id: 6,
        category: 'home-fragrance',
        name: '薰衣草田織物噴霧',
        price: 'NT$ 850',
        image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=1000',
        description: '舒緩的薰衣草香氣，適用於枕頭與織物，促進深度放鬆與睡眠。'
    },
    {
        id: 7,
        category: 'home-fragrance',
        name: '海洋清風擴香油',
        price: 'NT$ 1,500',
        image: 'https://images.unsplash.com/photo-1547483732-2d12ef217ba8?auto=format&fit=crop&q=80&w=1000',
        description: '清爽的海鹽與鼠尾草香氣，能為任何房間注入清新活力。'
    },
    {
        id: 8,
        category: 'home-fragrance',
        name: '柑橘香頌室內香氛',
        price: 'NT$ 1,100',
        image: 'https://images.unsplash.com/photo-1595981234058-a9302fb97229?auto=format&fit=crop&q=80&w=1000',
        description: '充滿活力的甜橙與葡萄柚香氣，提振您的居家環境氛圍。'
    },
    {
        id: 9,
        category: 'candles',
        name: '烏木沉香大豆蠟燭',
        price: 'NT$ 1,800',
        image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=1000',
        description: '手工灌裝的大豆蠟燭，散發深邃且煙燻的珍稀烏木香氣。'
    },
    {
        id: 10,
        category: 'candles',
        name: '香草豆莢玻璃蠟燭',
        price: 'NT$ 1,200',
        image: 'https://images.unsplash.com/photo-1505130849125-215e2479ee5d?auto=format&fit=crop&q=80&w=1000',
        description: '經典甜美香草豆莢香氣，置於優雅的透明玻璃罐中。'
    },
    {
        id: 11,
        category: 'candles',
        name: '尤加利與薄荷舒壓蠟燭',
        price: 'NT$ 1,650',
        image: 'https://images.unsplash.com/photo-1601922044816-f2847ba20738?auto=format&fit=crop&q=80&w=1000',
        description: '提神醒腦的尤加利與清涼薄荷，在家中營造水療般的療癒感。'
    },
    {
        id: 12,
        category: 'candles',
        name: '暖香南瓜秋季蠟燭',
        price: 'NT$ 1,400',
        image: 'https://images.unsplash.com/photo-1608170825938-a8ea0305d46c?auto=format&fit=crop&q=80&w=1000',
        description: '溫暖的秋季辛香料與甜美南瓜，營造居家溫馨氛圍。'
    },
    {
        id: 13,
        category: 'diffusers',
        name: '大理石藤蔓擴香組',
        price: 'NT$ 2,800',
        image: 'https://images.unsplash.com/photo-1588600878108-578307a3cc9d?auto=format&fit=crop&q=80&w=1000',
        description: '精緻的大理石容器搭配天然擴香纖維棒，可持續穩定釋放香氣。'
    },
    {
        id: 14,
        category: 'diffusers',
        name: '陶瓷超音波香氛機',
        price: 'NT$ 3,200',
        image: 'https://images.unsplash.com/photo-1602875209144-ec73d420f171?auto=format&fit=crop&q=80&w=1000',
        description: '簡約陶瓷外型設計，具備定時噴霧功能與柔和氣氛燈效果。'
    },
    {
        id: 15,
        category: 'diffusers',
        name: '佛手柑與茶香擴香組',
        price: 'NT$ 2,100',
        image: 'https://images.unsplash.com/photo-1546931407-20159e76d774?auto=format&fit=crop&q=80&w=1000',
        description: '清爽優雅的佛手柑與黑茶葉混合香調，適合各類生活空間。'
    },
    {
        id: 16,
        category: 'diffusers',
        name: '喜馬拉雅鹽燈擴香儀',
        price: 'NT$ 3,800',
        image: 'https://images.unsplash.com/photo-1614032064716-9286f03f7ca8?auto=format&fit=crop&q=80&w=1000',
        description: '結合鹽燈淨化空氣的功能與精油擴香，為您的居家注入平和能量。'
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = products;
}
