




























const fs = require("fs")



let sari = [
    {
        img1: "https://images.meesho.com/images/products/72509816/7mg8z_512.jpg",
        Name: "Fancy Jacquard Saree SKY LINE PATTA",
        price: "₹"+ 498,
        Main_price:"₹" + 598,
        Discount: 17 + "%" + "off",
        p: "₹100 discount on 1st order",
        img2: "https://images.meesho.com/images/products/72509816/jvhzf_512.jpg",
        img3: "https://images.meesho.com/images/products/72509816/zllxt_512.jpg",
        img4: "https://images.meesho.com/images/products/72509816/gbylx_512.jpg",
        delivery: "Free Delivery",
        Rating : 3.4 + "★"
    },
    {
        img1: "https://images.meesho.com/images/products/72523443/3prxg_512.jpg",
        Name: "SAREE",
        price: "₹"+ 1233,
        Main_price:"₹" + 1333,
        Discount: 8 + "%" + "off",
        p: "₹100 discount on 1st order",
        img2: null,
        img3: null,
        img4: null,
        delivery: "Free Delivery",
        Rating : 3.6 + "★"
    },
    {
        img1: "https://images.meesho.com/images/products/72516834/zpjqj_512.jpg",
        Name: "Fancy Printed Casual Wear Georgette Saree With Blouse PieceE",
        price: "₹"+ 200,
        Main_price:"₹" + 285,
        Discount: 30 + "%" + "off",
        p: "₹85 discount on 1st order",
        img2: null,
        img3: null,
        img4: null,
        delivery: "Free Delivery",
        Rating : 3.7 + "★"
    },
    {
        img1: "https://images.meesho.com/images/products/72516290/fshkr_512.jpg",
        Name: "Art silk saree for woman",
        price: "₹"+ 307,
        Main_price:"₹" + 407,
        Discount: 25 + "%" + "off",
        p: "₹100 discount on 1st order",
        img2: null,
        img3: null,
        img4: null,
        delivery: "Free Delivery",
        Rating : 3.8 + "★"
    },
    {
        img1: "https://images.meesho.com/images/products/72511679/ed48z_512.jpg",
        Name: "AURA SILK ORANGE",
        price: "₹"+ 518,
        Main_price:"₹" + 618,
        Discount: 16 + "%" + "off",
        p: "₹100 discount on 1st order",
        img2: null,
        img3: null,
        img4: null,
        delivery: "Free Delivery",
        Rating : 3.7 + "★"
    },
    {
        img1: "https://images.meesho.com/images/products/72509771/stgjd_512.jpg",
        Name: "Attractive Fashionable Art Silk Sarees",
        price: "₹"+ 784,
        Main_price:"₹" + 884,
        Discount: 11+ "%" + "off",
        p: "₹100 discount on 1st order",
        img2: "https://images.meesho.com/images/products/72509771/ce9mk_512.jpg",
        img3: "https://images.meesho.com/images/products/72509771/cprvu_512.jpg",
        img4: null,
        delivery: "Free Delivery",
        Rating : 3.9 + "★"
    },
    {
        img1: "https://images.meesho.com/images/products/72517329/zk6jx_512.jpg",
        Name: "Paithani Saree",
        price: "₹"+ 503,
        Main_price:"₹" + 603,
        Discount: 17+ "%" + "off",
        p: "₹100 discount on 1st order",
        img2: null,
        img3: null,
        img4: null,
        delivery: "Free Delivery",
        Rating : 3.3 + "★"
    },
    {
        img1: "https://images.meesho.com/images/products/72511254/btm6a_512.jpg",
        Name: "Trendy Women Saree",
        price: "₹"+ 567,
        Main_price:"₹" + 667,
        Discount: 15+ "%" + "off",
        p: "₹100 discount on 1st order",
        img2: null,
        img3: null,
        img4: null,
        delivery: "Free Delivery",
        Rating : 3.4 + "★"
    },
    {
        img1: "https://images.meesho.com/images/products/72510520/dtbld_512.jpg",
        Name: "Attractive Fashionable Art Silk Sarees",
        price: "₹"+ 884,
        Main_price:"₹" + 984,
        Discount: 10+ "%" + "off",
        p: "₹100 discount on 1st order",
        img2: "https://images.meesho.com/images/products/72510520/sdmqi_512.jpg",
        img3: "https://images.meesho.com/images/products/72510520/bkd9m_512.jpg",
        img4: "https://images.meesho.com/images/products/72510520/0jr4d_512.jpg",
        delivery: "Free Delivery",
        Rating : 3.7 + "★"
    },
    {
        img1: "https://images.meesho.com/images/products/72513243/uiaxc_512.jpg",
        Name: "Beautiful Linen Cotton Saree All Over Print",
        price: "₹"+ 1124,
        Main_price:"₹" + 1224,
        Discount: 8+ "%" + "off",
        p: "₹100 discount on 1st order",
        img2: "https://images.meesho.com/images/products/72513243/lofiq_512.jpg",
        img3: "https://images.meesho.com/images/products/72513243/djkuu_512.jpg",
        img4: null,
        delivery: "Free Delivery",
        Rating : 3.7 + "★"
    },
    {
        img1: "https://images.meesho.com/images/products/72509776/yon1s_512.jpg",
        Name: "Attractive Fashionable Art Silk Sarees",
        price: "₹"+ 1273,
        Main_price:"₹" + 1373,
        Discount:7+ "%" + "off",
        p: "₹100 discount on 1st order",
        img2: "https://images.meesho.com/images/products/72509776/ocmtm_512.jpg",
        img3: "https://images.meesho.com/images/products/72509776/dyr5v_512.jpg",
        img4: null,
        delivery: "Free Delivery",
        Rating : 3.7 + "★"
    },
    {
        img1: "https://images.meesho.com/images/products/72518524/5l3ul_512.jpg",
        Name: "Fancy Jacquard Saree",
        price: "₹"+ 518,
        Main_price:"₹" + 618,
        Discount:16+ "%" + "off",
        p: "₹100 discount on 1st order",
        img2: null,
        img3: null,
        img4: null,
        delivery: "Free Delivery",
        Rating : 3.7 + "★"
    },
    {
        img1: "https://images.meesho.com/images/products/72512421/1rxjh_512.jpg",
        Name: "PRETTY BELPATA JAMDANI",
        price: "₹"+ 848,
        Main_price:"₹" + 948,
        Discount:11+ "%" + "off",
        p: "₹100 discount on 1st order",
        img2: "https://images.meesho.com/images/products/72512421/94edb_512.jpg",
        img3: null,
        img4: null,
        delivery: "Delivery ₹"+74,
        Rating : 3.7 + "★"
    },
    {
        img1: "https://images.meesho.com/images/products/72570652/trsq7_512.jpg",
        Name: "SAREE",
        price: "₹"+ 1243,
        Main_price:"₹" + 1343,
        Discount: 7+ "%" + "off",
        p: "₹100 discount on 1st order",
        img2: null,
        img3: null,
        img4: null,
        delivery: "Free Delivery",
        Rating : 3.7 + "★"
    },
    {
        img1: "https://images.meesho.com/images/products/72542516/icfpe_512.jpg",
        Name: "JESU SILK 1005",
        price: "₹"+ 1123,
        Main_price:"₹" + 1223,
        Discount: 8+ "%" + "off",
        p: "₹100 discount on 1st order",
        img2: "https://images.meesho.com/images/products/72542516/i5n73_512.jpg",
        img3: null,
        img4: null,
        delivery: "Free Delivery",
        Rating : 3.7 + "★"
    },
    {
        img1: "https://images.meesho.com/images/products/72531471/trw24_512.jpg",
        Name: "Attractive Fashionable Art Silk Sarees",
        price: "₹"+ 684,
        Main_price:"₹" + 784,
        Discount: 13+ "%" + "off",
        p: "₹100 discount on 1st order",
        img2: "https://images.meesho.com/images/products/72531471/3hsnh_512.jpg",
        img3: "https://images.meesho.com/images/products/72531471/zyimj_512.jpg",
        img4: "https://images.meesho.com/images/products/72531471/gdocx_512.jpg",
        delivery: "Free Delivery",
        Rating : 3.7 + "★"
    },
    {
        img1: "https://images.meesho.com/images/products/72531471/trw24_512.jpg",
        Name: "Attractive Fashionable Art Silk Sarees",
        price: "₹"+ 478,
        Main_price:"₹" + 578,
        Discount: 17+ "%" + "off",
        p: "₹100 discount on 1st order",
        img2: null,
        img3: null,
        img4: null,
        delivery: "Free Delivery",
        Rating : 3.5 + "★"

    },
    {
        img1: "https://images.meesho.com/images/products/72529328/pkhcn_512.jpg",
        Name: "Organza stripes",
        price: "₹"+ 1573,
        Main_price:"₹" + 1673,
        Discount: 6+ "%" + "off",
        p: "₹100 discount on 1st order",
        img2 : "https://images.meesho.com/images/products/72529328/twds1_512.jpg",
        img3: null,
        img4: null,
        delivery: "Free Delivery",
        Rating : 3.7 + "★"
    },
    {
        img1: "https://images.meesho.com/images/products/72568862/7rw7k_512.jpg",
        Name: "Tejani Fashion Women's Lichi Silk Saree with Unstitched Blouse Piece",
        price: "₹"+ 824,
        Main_price:"₹" + 924,
        Discount: 11+ "%" + "off",
        p: "₹100 discount on 1st order",
        img2 : "https://images.meesho.com/images/products/72568862/xhhfl_512.jpg",
        img3: "https://images.meesho.com/images/products/72568862/nkcec_512.jpg",
        img4: "https://images.meesho.com/images/products/72568862/1igds_64.jpg",
        delivery: "Free Delivery",
        Rating : 3.7 + "★"
    },
    {
        img1: "https://images.meesho.com/images/products/72545311/t5edf_512.jpg",
        Name: "Myra Fabulous Sarees",
        price: "₹"+ 1173,
        Main_price:"₹" + 1273,
        Discount: 8+ "%" + "off",
        p: "₹100 discount on 1st order",
        img2 : "https://images.meesho.com/images/products/72545311/ygdo2_512.jpg",
        img3: null,
        img4: null,
        delivery: "Free Delivery",
        Rating : 3.4 + "★"
    },
    {
        img1: "https://images.meesho.com/images/products/72770989/npny5_512.jpg",
        Name: "MIRROR SAREE",
        price: "₹"+ 623,
        Main_price:"₹" + 723,
        Discount: 14 + "%" + "off",
        p: "₹100 discount on 1st order",
        img2 : "https://images.meesho.com/images/products/72770989/qjj3x_512.jpg",
        img3 : "https://images.meesho.com/images/products/72770989/suxvi_512.jpg",
        img4 : "https://images.meesho.com/images/products/72770989/gkdys_512.jpg",
        delivery: "Free Delivery",
        Rating : 3.7 + "★"
    },
    {
        img1: "https://images.meesho.com/images/products/72757673/ghjjf_512.jpg",
        Name: "kora muslin sareeeE",
        price: "₹"+ 664,
        Main_price:"₹" + 764,
        Discount: 13 + "%" + "off",
        p: "₹100 discount on 1st order",
        img2: null,
        img3: null,
        img4: null,
        delivery: "Free Delivery",
        Rating : 3.9 + "★"
    },
    {
        img1: "https://images.meesho.com/images/products/72770627/3ikbf_512.jpg",
        Name: "SAREE",
        price: "₹"+ 1273,
        Main_price:"₹" + 1373,
        Discount: 7 + "%" + "off",
        p: "₹100 discount on 1st order",
        img2: null,
        img3: null,
        img4: null,
        delivery: "Free Delivery",
        Rating : 3.9 + "★"
    },
    {
        img1: "https://images.meesho.com/images/products/72752030/9i8wn_512.jpg",
        Name: "banarasi silk saree",
        price: "₹"+ 773,
        Main_price:"₹" + 873,
        Discount: 11 + "%" + "off",
        p: "₹100 discount on 1st order",
        img2: null,
        img3: null,
        img4: null,
        delivery: "Free Delivery",
        Rating : 3.6 + "★"
    },
    {
        img1: "https://images.meesho.com/images/products/72753539/w4til_512.jpg",
        Name: "vichitra silk saree wih embroidery work blouse.",
        price: "₹"+ 873,
        Main_price:"₹" + 973,
        Discount: 10 + "%" + "off",
        p: "₹100 discount on 1st order",
        img2: null,
        img3: null,
        img4: null,
        delivery: "Free Delivery",
        Rating : 3.6 + "★"
    },
    {
        img1: "https://images.meesho.com/images/products/72746813/ojv35_512.jpg",
        Name: "BEAUTIFUL AURA KANJIWARAM SILK SAREE WITH SILK BLOUSE",
        price: "₹"+703,
        Main_price:"₹" + 803,
        Discount: 12 + "%" + "off",
        p: "₹100 discount on 1st order",
        img2: null,
        img3: null,
        img4: null,
        delivery: "Free Delivery",
        Rating : 2.8 + "★"
    },
    {
        img1: "https://images.meesho.com/images/products/72745982/1vjmx_512.jpg",
        Name: "Divine Exim Chanderi Cotton Saree With Running Blouse",
        price: "₹"+973,
        Main_price:"₹" + 1073,
        Discount: 9 + "%" + "off",
        p: "₹100 discount on 1st order",
        img2: null,
        img3: null,
        img4: null,
        delivery: "Free Delivery",
        Rating : 3.8 + "★"
    },
    {
        img1: "https://images.meesho.com/images/products/72743843/hjau1_512.jpg",
        Name: "Mahek Banarasi Saree",
        price: "₹"+550,
        Main_price:"₹" + 650,
        Discount: 15 + "%" + "off",
        p: "₹100 discount on 1st order",
        delivery: "Free Delivery",
        img2 : "https://images.meesho.com/images/products/72743843/ylxyi_512.jpg",
        img3 : "https://images.meesho.com/images/products/72743843/y4tuh_512.jpg",
        img4 : "https://images.meesho.com/images/products/72743843/z1wmh_512.jpg",
        Rating : 3.5 + "★"
    },
    {
        img1: "https://images.meesho.com/images/products/72738526/trasw_512.jpg",
        Name: "SAREEFLAME WOMEN'S VICHITRA SILK EMBROIDERED PARTY WEAR SAREE WITH BLOUSE PIECE",
        price: "₹"+1393,
        Main_price:"₹" + 1493,
        Discount: 7 + "%" + "off",
        p: "₹100 discount on 1st order",
        img2: null,
        img3: null,
        img4: null,
        delivery: "Free Delivery",
        Rating : 3.9 + "★"
    },
    {
        img1: "https://images.meesho.com/images/products/72745571/wluyo_512.jpg",
        Name: "Divine Exim Chanderi Cotton Saree With Running Blouse",
        price: "₹"+973,
        Main_price:"₹" + 1073,
        Discount: 9 + "%" + "off",
        p: "₹100 discount on 1st order",
        img2: null,
        img3: null,
        img4: null,
        delivery: "Free Delivery",
        Rating : 3.8 + "★"
    },
    {
        img1: "https://images.meesho.com/images/products/72336863/s5gim_512.jpg",
        Name: "Divine Exim Chanderi Cotton Saree With Running Blouse",
        price: "₹"+973,
        Main_price:"₹" + 1073,
        Discount: 9 + "%" + "off",
        p: "₹100 discount on 1st order",
        delivery: "Free Delivery",
        Rating : 3.7 + "★"
    },
    {
        img1: "https://images.meesho.com/images/products/72336863/s5gim_512.jpg",
        Name: "Divine Exim Chanderi Cotton Saree With Running Blouse",
        price: "₹"+973,
        Main_price:"₹" + 1073,
        Discount: 9 + "%" + "off",
        p: "₹100 discount on 1st order",
        img2: null,
        img3: null,
        img4: null,
        delivery: "Free Delivery",
        Rating : 3.7 + "★"
    },
    {
        img1: "https://images.meesho.com/images/products/72762910/uy1u8_512.jpg",
        Name: "Divine Exim Chanderi Cotton Saree With Running Blouse",
        price: "₹"+327,
        Main_price:"₹" + 427,
        Discount: 23 + "%" + "off",
        p: "₹100 discount on 1st order",
        delivery: "Free Delivery",
        img2: "https://images.meesho.com/images/products/72762910/vead5_512.jpg",
        img3: "https://images.meesho.com/images/products/72762910/51n0s_512.jpg",
        img4: null,
        Rating : 3.7 + "★"
    },
    {
        img1: "https://images.meesho.com/images/products/72803528/rd23h_512.jpg",
        Name: "RIFASHION-BEAUTIFUL RICH PALLU & JACQUARD WORK ON ALL OVER THE SAREE.",
        price: "₹"+623,
        Main_price:"₹" + 723,
        Discount: 14 + "%" + "off",
        p: "₹100 discount on 1st order",
        delivery: "Free Delivery",
        img2: "https://images.meesho.com/images/products/72803528/vabsz_512.jpg",
        img3: "https://images.meesho.com/images/products/72803528/p19pz_512.jpg",
        img4: "https://images.meesho.com/images/products/72803528/kjj3a_512.jpg",
        Rating : 3.8 + "★"
    },
    {
        img1: "https://images.meesho.com/images/products/72767958/gbzfk_512.jpg",
        Name: "SAREE",
        price: "₹"+1433,
        Main_price:"₹" + 1533,
        Discount:7 + "%" + "off",
        p: "₹100 discount on 1st order",
        img2: null,
        img3: null,
        img4: null,
        delivery: "Free Delivery",
        Rating : 3.6 + "★"
    },
    {
        img1: "https://images.meesho.com/images/products/72762863/ose4t_512.jpg",
        Name: "SAREE-SLOKA875-MULTICOLOR",
        price: "₹"+1074,
        Main_price:"₹" + 1174,
        Discount: 9 + "%" + "off",
        p: "₹100 discount on 1st order",
        img2: "https://images.meesho.com/images/products/72762863/o4rxt_512.jpg",
        img3: "https://images.meesho.com/images/products/72762863/0ktbs_512.jpg",
        img4: "https://images.meesho.com/images/products/72762863/ydlgy_512.jpg",
        delivery: "Free Delivery",
        Rating : 3.6 + "★"
    },
    {
        img1: "https://images.meesho.com/images/products/72759613/vprlw_512.jpg",
        Name: "kora muslin saree",
        price: "₹"+664,
        Main_price:"₹" + 764,
        Discount: 13 + "%" + "off",
        p: "₹100 discount on 1st order",
        img2: null,
        img3: null,
        img4: null,
        delivery: "Free Delivery",
        Rating : 3.9 + "★"
    },
    {
        img1: "https://images.meesho.com/images/products/72771153/78fpq_512.jpg",
        Name: "kora muslin saree",
        price: "₹"+344,
        Main_price:"₹" + 444,
        Discount: 23 + "%" + "off",
        p: "₹100 discount on 1st order",
        img2: null,
        img3: null,
        img4: null,
        delivery: "Free Delivery",
        Rating : 3.9 + "★"
    },
    {
        img1: "https://images.meesho.com/images/products/72806856/0id5r_512.jpg",
        Name: "Banshi",
        price: "₹"+1069,
        Main_price:"₹" + 1169,
        Discount: 9 + "%" + "off",
        p: "₹100 discount on 1st order",
        img2: "https://images.meesho.com/images/products/72806856/pddt1_512.jpg",
        img3: null,
        img4: null,
        delivery: "Free Delivery",
        Rating : 3.9 + "★"
    },
    {
        img1: "https://images.meesho.com/images/products/72790427/e70lc_512.jpg",
        Name: "silk saree",
        price: "₹"+468,
        Main_price:"₹" + 568,
        Discount: 18 + "%" + "off",
        p: "₹100 discount on 1st order",
        img2: "https://images.meesho.com/images/products/72790427/semr0_512.jpg",
        img3: "https://images.meesho.com/images/products/72790427/ndvu0_512.jpg",
        img4: "https://images.meesho.com/images/products/72790427/jomqo_512.jpg",
        delivery: "Free Delivery",
        Rating : 3.5 + "★"
    },
    {
        img1: "https://images.meesho.com/images/products/72790427/e70lc_512.jpg",
        Name: "anarkali",
        price: "₹"+558,
        Main_price:"₹" + 658,
        Discount: 15+ "%" + "off",
        p: "₹100 discount on 1st order",
        img2: "https://images.meesho.com/images/products/72813138/4syqz_512.jpg",
        img3: "https://images.meesho.com/images/products/72813138/mbrnd_512.jpg",
        img4: "https://images.meesho.com/images/products/72813138/fjnkp_512.jpg",
        delivery: "Free Delivery",
        Rating : 3.3 + "★"
    },
    {
        img1: "https://images.meesho.com/images/products/72779389/bihkl_512.jpg",
        Name: "Sham New Lunching Dola silk Saree Colletion For Women",
        price: "₹"+4973,
        Main_price:"₹" + 5073,
        Discount: 2+ "%" + "off",
        p: "₹100 discount on 1st order",                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
        img2: "https://images.meesho.com/images/products/72779389/yjwr6_512.jpg",
        img3: null,
        img4: null,
        delivery: "Free Delivery",
        Rating : 3.3 + "★"
    },
    {
        img1: "https://images.meesho.com/images/products/72812015/d38xz_512.jpg",
        Name: "Woven Banarasi Cotton Silk Saree ",                  
        price: "₹"+567,
        Main_price:"₹" + 667,
       Discount: 15+ "%" + "off",                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
        p: "₹100 discount on 1st order", 
        img2: null,
        img3: null,
        img4: null,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
        delivery: "Free Delivery",                                                                                                                                                                                                                                                                                          
        Rating : 3.6 + "★"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
    },
    {
        img1: "https://images.meesho.com/images/products/72552486/uugfy_512.jpg",
        Name: "Banarasi Silk Works Women's Red Katan Silk Saree with Blouse piece",                  
        price: "₹"+4523,
        Main_price:"₹" + 4623,
        Discount: 2+ "%" + "off",                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
        p: "₹100 discount on 1st order",  
        img2: "https://images.meesho.com/images/products/72552486/y2fd2_512.jpg",   
        img3: null,
        img4: null,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
        delivery: "Free Delivery",                                                                                                                                                                                                                                                                                          
        Rating : 3.6 + "★"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
    },
    {
        img1: "https://images.meesho.com/images/products/71353467/upyk2_512.jpg",
        Name: "shiv banarasi soft silk saree",                  
        price: "₹"+821,
        Main_price:"₹" + 921,
        Discount: 11+ "%" + "off",                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
        p: "₹100 discount on 1st order",    
        img3: null,
        img4: null,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
        delivery: "Free Delivery",                                                                                                                                                                                                                                                                                          
        Rating : 3.6 + "★"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
    },
    {
        img1: "https://images.meesho.com/images/products/72693408/suzm8_512.jpg",
        Name: "Soft Silk Saree with unstitched blouse",                  
        price: "₹"+603,
        Main_price:"₹" + 703,
        Discount: 14+ "%" + "off",                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
        p: "₹100 discount on 1st order",   
        img2: "https://images.meesho.com/images/products/72693408/ezgjy_512.jpg",
        img3: "https://images.meesho.com/images/products/72693408/8ybyw_512.jpg",
        img4: "https://images.meesho.com/images/products/72693408/bw7gi_512.jpg",                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
        delivery: "Free Delivery",                                                                                                                                                                                                                                                                                          
        Rating : 3.6 + "★"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
    },
    {
        img1: "https://images.meesho.com/images/products/71046552/srgcb_512.jpg",
        Name: "Chitrarekha Graceful Sarees",                  
        price: "₹"+886,
        Main_price:"₹" + 986,
        Discount: 10+ "%" + "off",                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
        p: "₹100 discount on 1st order", 
        img2: null,
        img3: null,
        img4: null,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
        delivery: "Free Delivery",                                                                                                                                                                                                                                                                                          
        Rating : 3.8 + "★"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
    },
    {
        img1: "https://images.meesho.com/images/products/71051268/qop8m_512.jpg",
        Name: "saree",                  
        price: "₹"+1473,
        Main_price:"₹" + 1573,
        Discount: 6 + "%" + "off",                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
        p: "₹100 discount on 1st order",  
        img2: null,
        img3: null,
        img4: null,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
        delivery: "Free Delivery",                                                                                                                                                                                                                                                                                          
        Rating : 3.8 + "★"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
    },
    {
        img1: "https://images.meesho.com/images/products/72830451/pme5h_512.jpg",
        Name: "Patlani Style Presenting Kanjivaram Style Saree",                  
        price: "₹"+624,
        Main_price:"₹" + 724,
        Discount: 14+ "%" + "off",                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
        p: "₹100 discount on 1st order",  
        img2: "https://images.meesho.com/images/products/72830451/isony_512.jpg",
        img3: "https://images.meesho.com/images/products/72830451/71pj7_512.jpg", 
        img4: null,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
        delivery: "Free Delivery",                                                                                                                                                                                                                                                                                          
        Rating : 3.5 + "★"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
    },
    {
        img1: "https://images.meesho.com/images/products/72588967/4fliy_512.jpg",
        Name: "SAREE",                  
        price: "₹"+1233,
        Main_price:"₹" + 1333,
        Discount: 8 + "%" + "off",                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
        p: "₹100 discount on 1st order",   
        img2: null,
        img3: null,
        img4: null,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
        delivery: "Free Delivery",                                                                                                                                                                                                                                                                                          
        Rating : 3.5 + "★"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
    },
]                                                                               
                                                                                                                                                                                                                                                                                        
const jsonData = JSON.stringify(sari);
fs.writeFile("sari.json", jsonData,(err) =>{
console.log("done");
})