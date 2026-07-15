const IMG_BASE = "https://imagedelivery.net/Pu5262lKwl6ImVMNhU07RA/";
const records = [
["6340 OC-V Aerosol Grenade","611b5857-0bbb-48c2-0c4a-e4781b92d600",["Chemical"],"https://instagram.com/p/DT-53tQkcFg","California","Jan 26, 2026"],
["Model 7290-1 Mini Bang Grenade Cs","c7294567-939c-44b5-eb1c-2e293e793f00",["Conventional Weapons"],"https://x.com/jonswaine/status/499759502325850113","USA","Aug 14, 2014"],
["555 Cs Federal Riot Grenade","30f7c50d-2cbc-46d6-c384-8ac828d09000",["Chemical"],"https://x.com/kyranakis/status/1233833337820778501","Greece","Feb 29, 2020"],
["40mm Triple Charge CS Cartridge","e3bf39d1-5f13-45df-eeb6-a658f1c6b100",["Chemical"],"https://youtube.com/shorts/4Sfz2Qj5NBo","Albania","Jan 26, 2026"],
["BL3-Tear Gas Smoke CS","e1fcff77-6f63-4c29-4887-685935149e00",["Chemical"],"https://instagram.com/reel/DT6CdAaDck0","Albania","Jan 26, 2026"],
["Cartridge 37/38mm Single Charge Cs","4e357a86-0bf1-46ce-91ce-82d3f717a400",["Chemical"],"https://facebook.com/100064568001197/posts/","Tunisia","Dec 2, 2020"],
["Tactical Single Tear gas Launcher (37/38mm)","e5650926-8e7c-44f8-6378-b13b934e5600",["Less Lethal Launchers"],"https://x.com/ruswar/status/2056593997158576254","Bolivia","May 19, 2026"],
["GR 56 FUM LAC MP7 (06-PB-20) CS Canister","86155c0a-340f-4efc-acf6-fe43781c6500",["Chemical"],"https://x.com/obk/status/1292161113623351302","Lebanon","Aug 8, 2020"],
["NF21 Grenade Fumige Lacrymogene","3905841a-d0bb-44d6-301d-5f86d2597300",["Chemical"],"https://x.com/Yassin_Akouh/status/1292566833028108289","Morocco","May 18, 2026"],
["CTS 38mm Round Canister","bd0e43a4-93b8-43c9-df3d-27ba02590100",["Chemical"],"https://x.com/CorpOcc/status/1090250593766125568","Israel","Jan 29, 2019"],
["SARP-Tear Smoke Shell Cs","bfd222c9-aa9a-41f0-b5de-88c247333d00",["Chemical"],"https://x.com/AdityaRajKaul/status/282922092658302977","India","Dec 23, 2012"],
["Tear Smoke Shell CS (Soft Nose) Plastic","ffa08878-fcde-48cb-794e-124b6dfa1f00",["Chemical"],"https://x.com/Zebaism/status/1332595806851895296","India","Nov 28, 2020"],
["Muzzle Blast Cs (40mm Powder Dispersion Round)","cc65e312-fc2e-48f7-f615-086250d03800",["Chemical"],"https://instagram.com/p/DTj-2XlDh4V","Minnesota","Jan 16, 2026"],
["38mm Gun-Fired and Hand Throwing Cs cartridge","e5d8692f-821a-4fe4-5731-794132c38000",["Chemical"],"https://facebook.com/photo","Zambia","Jul 29, 2021"],
["Long Range Shell cs 38mm","c2b3085e-f78b-47bd-2bcf-f3f8b5887300",["Chemical"],"https://facebook.com/photo","Nigeria","Apr 21, 2026"],
["NF01-3 CS Smoke Projectile CS 37/38mm","5fdbfcf2-71c0-4f82-bc03-5e3de1792000",["Chemical"],"https://facebook.com/HKFLM/posts/","Sudan","Dec 1, 2021"],
["40mm round Sponge/expanded foam Grade-series 05-09","3d9fa46d-458f-439a-27e2-1f56e66d5c00",["Chemical"],"https://facebook.com/Sudan956/posts/811667312663413","Burhan","Feb 20, 2020"],
["DK-40S CS Cartridge Burning Aluminum","85b00517-9eef-4c27-5bda-6d54930fc000",["Chemical"],"https://x.com/Liberatus80/status/1862220424404176909","Tanzania","Nov 28, 2024"],
["MP-6M5-CS -Multi smoke 5 projectiles","17fc0e66-1cc5-4fc1-b37e-74f577819400",["Chemical"],"https://instagram.com/p/B3CoXgaAsOy","HongKong","Sep 30, 2019"],
["TAC-SF series PepperBall gun","0f2f4597-caab-4481-aa92-4f75f3d19400",["Less Lethal Launchers"],"https://youtube.com/shorts/TQuADuvH1vY","Chicago","Oct 24, 2025"],
["PKM - Machine Gun","a97af5f9-34c6-44f0-911e-1b25eccb1300",["Kinetic Impact Projectiles","Less Lethal Launchers"],"https://instagram.com/p/DR8-QcGDD6G","Uganda","Dec 7, 2025"],
["CAT-UXO -37mm Projectiles","31aa364e-6cdb-4d2b-b7d4-56c28d144b00",["Kinetic Impact Projectiles"],"https://x.com/DarmKhb79103/status/2015874701529071666","Iran","Jan 26, 2026"],
["Mini Grenade Cs Irritant","0f10248d-7c3c-4cae-8b14-6c56014a1d00",["Chemical"],"https://x.com/i/status/2015616415454167532","Iran","Jan 28, 2026"],
["SABRE Red MK-9 H2O 16 Paper Spray","228ff5ea-dcd2-46dc-f900-0945c5c35000",["Chemical"],"https://x.com/MoSamra16/status/1987255958632870318","Chicago","Nov 8, 2025"],
["Hand-held aerosol canister(OC Spray)","caadd784-8592-4579-166f-5f5278c99300",["Chemical"],"https://x.com/factpostnews/status/2014407011689959597","Minnesota","Jan 22, 2026"],
["Stun Grenade (3.5 S) D3-20/B71-1290M","9897fb98-5917-4fff-5925-310a55589200",["Conventional Weapons","Chemical"],"https://x.com/M7mdHuraini/status/1906382362578944108","Palestine","Mar 30, 2025"],
["Spent Tear Gas Canister","ee8f5c35-de32-41ea-d81c-a63e90487a00",["Chemical"],"https://x.com/FattahiFarzad/status/2007754344322732125","Tehran","Jan 4, 2026"],
["3m/30sec Silver Cs Tear gas","048cf1d3-5610-4144-f725-ffb849eca600",["Chemical"],"https://x.com/i/status/2008558933456089484","Iran","Jan 6, 2026"],
["Triple Chaser Cs Grenade","e51791d2-8e01-4486-9635-39f321da3d00",["Chemical"],"https://bbc.com/arabic/middleeast/2011/02/110220_pics_arab_demos","Algeria","Feb 20, 2011"],
["Flamless Tri-Chamber CS Gas","a703d1c3-17bf-4e2c-23e2-939216a4bf00",["Chemical"],"https://instagram.com/p/CA-6T-HHirz","Minnesota","Jun 3, 2020"],
["Semi-Automatic Grenade Launcher","02f3f810-feed-4589-68e5-494020bd5d00",["Less Lethal Launchers"],"https://x.com/ajplus/status/1285566655142211590/photo/1","Chicago","Jul 21, 2021"],
["40mm Aerial Burst Flash Bang Grenade","d358328c-738f-4422-1f2e-8fc8376bf200",["Less Lethal Launchers"],"https://tiktok.com/@jackthenightcrawler/video/7516325545605418270","Los Angles","Jun 16, 2025"],
["40 mm less-lethal projectile","ade6d667-04dc-4064-fe2b-8f9b3118c200",["Kinetic Impact Projectiles","Less Lethal Launchers"],"https://x.com/PolymarketIntel/status/1506365646816350209","Ukraine","Mar 22, 2022"],
["Grenade 8M22C-254(34-82/8M510)","2c609f6d-08bb-4eb8-37ee-d2c202465100",["Chemical","Conventional Weapons"],"https://x.com/markhiznay/status/1135328607960817666","Ukraine","Jun 3, 2019"],
["38 mm Cluster tear gas catridge","38cba7f0-f7a5-4ff9-1348-5bfa419baf00",["Chemical"],"https://facebook.com/zambianday/photos/","Zambia","Nov 19, 2021"],
["38mm Short Range Shell Cs gas","b858bcc5-b766-461a-517f-88cf640f8a00",["Chemical"],"https://x.com/CharityAdenike/status/1757377862380749243","Nigeria","Feb 13, 2024"],
["Hand Grenade Tear Gas 2020","eda9f579-6038-4b56-bac3-9e64cd88f300",["Chemical"],"https://facebook.com/100063883953950/posts/","Mecca","Nov 7, 2021"],
["Tear Smoke Shell Cs Gas (10m Range)","3118f024-1f6b-423b-1b43-7613306eff00",["Chemical"],"https://facebook.com/dbongz.skhokho/posts/","Mozambique","Oct 21, 2021"],
["Grenade IIRT-RIOT Cs Irritant","c3f5b67f-66ce-4ef9-8394-e334b94daf00",["Chemical"],"https://facebook.com/photo.php","Florida","May 31, 2020"],
["5230 Riot Cs Smoke","49d406f8-4415-4d2e-a7a1-5b93387dd500",["Chemical"],"https://x.com/angolds/status/1268564232871776263/photo/1","Pittsburgh","Jun 4, 2020"],
["MK II model Hand-thrown CS (tear gas) grenade","feb6c67e-f4f4-42be-9884-ada8f2482c00",["Chemical"],"https://theguardian.com/world/middle-east-live/","Egypt","Nov 23, 2011"],
["514 Cs Blast Dispersion Grenade","e6f78192-c1eb-4688-8758-9352b5acef00",["Chemical"],"https://x.com/rhodesmessiah/status/502826244690694144/photo/1","Palestine","Aug 22, 2022"],
["Solid Rubber Buton(3)","a1c31959-70dd-413b-c5c5-b812cf450100",["Kinetic Impact Projectiles","Less Lethal Launchers"],"https://x.com/IoWBobSeely/status/1168191003645399040/photo/2","HongKong","Feb 19, 2019"],
["Gren Hand Burst IRRT A-RIOT N225","4a2e112c-fa38-4dab-be78-6b8443d47400",["Chemical"],"https://x.com/IoWBobSeely/status/1168191003645399040","HongKong","Feb 19, 2019"],
["9mm Brass Ammo spent cartridge casings","5a453802-5dc2-4085-2610-16a2bfb35500",["Less Lethal Launchers","Kinetic Impact Projectiles"],"https://facebook.com/111608827404795/posts/","Tanzania","Oct 27, 2020"],
["6 Ban Flash Bang Grenade (NIC-10/03-01)","0c90763d-9c0c-4321-790a-2a4c0a112400",["Less Lethal Launchers","Conventional Weapons"],"https://x.com/Kent_999s/status/1247867816616890368/photo/4","London","Apr 8, 2020"],
["2 Ban Flash Bang Grenade (NIC-12/02-92)","23b9f959-6d2b-47e4-7b6a-c5c61bce7700",["Less Lethal Launchers","Conventional Weapons"],"https://x.com/bhwatch/status/811909120781598720","Bahrain","Dec 22, 2016"],
["GR 56 FUM LAC CM6 Cs Grenade","4801a07d-8b14-4256-6bb2-75db62d84a00",["Chemical"],"https://x.com/calaisolidarity/status/790479505802555392","Calais","Oct 24, 2016"],
["GM2L SAE 820 Cs grenade","8055b3d2-4bd6-4740-cbd5-0e6c6a38af00",["Chemical"],"https://x.com/Nakayiza_/status/1334303791689191426/photo/1","Lebanon","Dec 3, 2020"],
["Direct Impact Making (Colour dye)","e0883ec1-d5b3-44a7-ce75-14a6356a9100",["Less Lethal Launchers"],"https://x.com/Abner_Y_Dennis/status/1266463712568913926","Minneapolis","May 29, 2020"],
["40mm Single Impact Rounds","ffb6ad4f-8bf7-45b0-df47-80f30bfc2000",["Less Lethal Launchers","Kinetic Impact Projectiles"],"https://x.com/Lowkey0nline/status/1517455884355620865","Al-Aqsa","Apr 22, 2022"],
["CS Gas Grenade","38689a97-7575-4027-ed3b-c9bee8c5c800",["Chemical"],"https://x.com/kyranakis/status/1233833337820778501/photo/1","Greece","Feb 29, 2020"],
["Smoke Hand Grenade (Yellow)","7cea8e8a-8ac6-439f-49a6-f7c9fc9cd400",["Chemical"],"https://x.com/muktadirnewage/status/1718583817064296678/photo/3","Dhaka","Oct 29, 2023"],
["Movement Tear Gas Grenade (KD18-CS-RM DK-N500)","d17ff1ad-ebb5-4ec0-f619-16a7b8a43a00",["Chemical"],"https://x.com/PinakiTweetsBD/status/1722961363977334880","Dhaka","Oct 28, 2023"],
["MN-03 38mm Soft Kinetic Projectile","ece2a865-e385-489d-136c-add069940f00",["Kinetic Impact Projectiles","Less Lethal Launchers","Striking Weapons"],"https://x.com/muktadirnewage/status/1718583817064296678/photo/4","Dhaka","Oct 29, 2023"],
["MP-2-CS/R Grenade (Irritant Red Smoke)","3aad396e-553c-40d7-8447-7952e9172800",["Chemical"],"https://youtube.com/shorts/tXUaphUoG0k","Kenya","Jul 9, 2025"],
["518E Riot Cs Military Type Grenade","7dcdd77d-2ed0-4e9d-7369-ae1dc6f96c00",["Chemical"],"https://x.com/simonjhanna/status/306394516234063873/photo/1","Egypt","Feb 26, 2016"],
["GL-300/T Hyper Triple Action Cs Tear Gas Grenade","d94a0f82-057f-4b74-aa21-4aacb9ef8000",["Chemical"],"https://x.com/Nicole_Froelich/status/1231084763412357121","Santiago","Feb 22, 2020"],
["12-gauge shotgun shell (2581 SUPER)","5da10610-360e-4aa5-bad8-6a0348732000",["Chemical"],"https://x.com/BernsRevolution/status/499953184291717121","United States of America","Aug 14, 2014"],
["Tri Chaser Separating Canister OC Gas","65b2f3ff-44d1-4be9-aafb-0eac6ec85800",["Chemical"],"https://facebook.com/share/1FPnXDH8Z7","New Mexico","May 29, 2020"],
["ADM 37/38mm N.17013 Cs tear Gas","4c7c1526-73cb-4b24-8b4e-bb10e7c89600",["Chemical"],"https://instagram.com/p/DMP_RE2toqW","Bangladesh","Jul 18, 2024"],
["MU53-AR Tear Gas Cs Powder","c70d76cb-74df-4020-a46d-6f3f475d4900",["Chemical"],"https://x.com/merapi_uncover/status/1961537055986782263","Indonesia","Aug 30, 2025"],
["Tear Gas Blower","5611c7a8-0a8c-4077-2476-42b0c2702900",["Chemical"],"https://x.com/MaranieRae/status/1317956792102481921","Portland","Oct 19, 2020"],
["38mm Tear Gas Smoke Shell","b1303f7e-4faa-44a1-b671-1ac118669900",["Chemical"],"https://tiktok.com/@rk_singh5606/video/7548013064126254343","Nepal","Sep 9, 2025"],
["12 Gauge Shot Shell","137a63cf-b413-4754-c1ab-c8a33a782200",["Less Lethal Launchers","Kinetic Impact Projectiles","Restraints"],"https://x.com/ab88989796/status/1361681088016449547","Myanmar","Feb 16, 2021"],
["CM6 Cs 04-SAE-02","a0827b93-8127-4126-9396-544ff4f54800",["Chemical"],"https://x.com/calaisolidarity/status/790479505802555392/photo/2","USA","Oct 24, 2016"],
["L1A1 SLR Rifle Gun","a8edb7a2-3a1d-4bce-44d8-1ff9d38d9e00",["Kinetic Impact Projectiles","Less Lethal Launchers"],"https://instagram.com/reel/DOY78BkDGPj","Nepal","Sep 8, 2025"],
["Stinger Cartridge (50-10m)","292dfa0d-0e84-4c68-bcda-bb57ee3a4f00",["Less Lethal Launchers","Kinetic Impact Projectiles","Restraints"],"https://x.com/prensa_librecol/status/1389808395201482754","India","May 5, 2021"],
["Metak 38mm MN-01 Cs Gas Canister","6932ff89-5604-4e35-6294-f8395dd4d900",["Chemical"],"https://x.com/aszekovic/status/1434466175837147138","Ukraine","Sep 5, 2021"],
["M-518 RIOT CS Smoke Grenade","6f902345-73f5-458f-05a0-291f55796500",["Chemical"],"https://x.com/mayaaverbuch/status/1075278851461177344/photo/1","Tijuana","Dec 19, 2018"],
["Stinger Rubber ball Grenades","3616f9de-351d-4f63-a950-785592e9f000",["Striking Weapons","Less Lethal Launchers"],"https://x.com/ur_ninja/status/752621119165894656","Minnesota","Jul 12, 2016"],
["Stun LAC Shell Chilli (OC)","fcb96ef3-8559-4dc3-14df-daf95827c900",["Chemical"],"https://x.com/warileebi_/status/1707282399934165195/photo/1","India","Sep 28, 2023"],
["Cs Hand Grenade Cs Gas 3PCS","74cfb48e-d55b-4a24-d6d3-3ac085a4d900",["Chemical"],"https://x.com/Amaliniii/status/1522573944221409280/photo/1","Sri Lanka","May 6, 2022"],
["CTG 40MM HEDP MG-4","f8411322-b7af-4d71-9960-4202b6f3ad00",["Chemical"],"https://x.com/MizzimaNews/status/1539461003473465344","Myanmar","Jun 22, 2022"],
["Steel Rubber Bullets","c700ec1c-3c02-41fd-71a5-eff42e5eef00",["Kinetic Impact Projectiles","Restraints","Striking Weapons"],"https://x.com/rananazzalh/status/1268609410835738629/photo/2","Palestine","Jun 4, 2020"],
["40mm Blunt impact projectiles","ed3d8f32-b399-4d69-248b-729063280300",["Less Lethal Launchers","Kinetic Impact Projectiles","Restraints"],"https://x.com/rananazzalh/status/1268596695249625089/photo/1","Palestine","Jun 4, 2020"],
["TS Shell Soft Nose (LR-Chilli)","0c26628b-602b-47b9-271d-d3cc78cd3e00",["Chemical"],"https://x.com/roat_mla/status/1758810737672102385","India","Feb 17, 2024"],
["37/38mm Foam Buton Multi-Projectile","655501f5-8c97-43a6-5a7a-a88abca51400",["Kinetic Impact Projectiles","Less Lethal Launchers","Striking Weapons"],"https://x.com/5expat_hit_list/status/1267231950864912391","Los Angles","Jun 1, 2020"],
["38mm Cs Smoke projectile (LR)","5f880d1a-abf6-4534-ca20-3093f67b1e00",["Chemical"],"https://x.com/segalink/status/1213512361786662912/photo/1","Nigeria","Jan 4, 2020"],
["CART 38mm Irritant MK2 CS smoke","72f7719a-55ca-48eb-e823-351a3b59ac00",["Chemical"],"https://x.com/Rfrenss/status/1595494743525494790","Iran","Nov 23, 2023"],
["60mm Condor Cs Tear gas grenades","104c9612-6572-4cbb-a90b-b1218a2b2900",["Chemical"],"https://x.com/CosechaMovement/status/1066809437489438720/photo/2","United States of America","Nov 26, 2018"],
["LRB-M3/93 CN Gas Canister","7b8624a4-d764-445f-229d-4f158cadf500",["Chemical"],"https://x.com/collective_call/status/719252776350531588","USA / Greece","Apr 10, 2016"],
["38mm Tear Gas Shell (Riffle Fired)","1abd39f4-b4de-4b74-d3ac-ec8ea6689d00",["Chemical"],"https://vm.tiktok.com/ZMHtTgRvfLVaA-YY7Rp","Nepal","Sep 8, 2025"],
["38mm Cs Smoke Shell","f4f9e372-1e06-439d-cd9d-da2cbc3e1f00",["Chemical"],"https://vm.tiktok.com/ZMHtTb4omn2CU-aM3We","Nepal","Sep 8, 2025"],
["CS Multi Smoke 5 Projectiles","df3e5725-4ab1-41e7-0afb-415e3c653500",["Chemical"],"https://x.com/laurelchor/status/1157667983428210689","United States of America","Aug 3, 2019"],
["NF 11 CS Grenade Lacroymogene 63mm","6f213a15-1b0d-408f-6e28-2cc91e6e2000",["Chemical"],"https://x.com/KFoodhaadhi/status/1534818842807046145","Somalia","Jun 9, 2022"],
["64mm CS Smoke Hand Throws","ca0e474b-7215-4e84-ce07-f56b3489ba00",["Chemical"],"https://x.com/tumukundejusti2/status/1329078046461083653","Uganda","Nov 18, 2020"],
["CS SMOKE GRENADE 00-10-117","efbfa4d6-3526-403f-de2c-d9c420f90d00",["Chemical"],"https://x.com/mustasalah_/status/1459566098186178562","Sudan","Nov 13, 2021"],
["Triple Choke Cs Gas Canister","1ccf2d8e-d561-4516-0e30-c34fbbb4f600",["Chemical"],"https://x.com/snatswaziland/status/1192384469493321728","Swaziland","Nov 7, 2019"],
["Riot Control CS Gas","4e5e3b3f-768f-4e7c-602d-f302d744c800",["Chemical"],"https://x.com/UR_Ninja/status/1381445029223366658","Minnesota","Apr 12, 2021"],
["5230JL JET-Lite Cs Smoke","902f2a8b-d76f-4a7e-91a2-f8780bb9e300",["Chemical"],"https://x.com/RIOT_Revolt/status/1267171613465882624","USA / Israel","May 31, 2020"],
["K-51 Cs Tear gas grenade","c9056f5a-37d7-445e-2a67-44de7fb1fc00",["Chemical"],"https://x.com/DanKaszeta/status/1672981957129515016","Ukraine","Jun 25, 2023"],
["Paper Spray CN-Tear Gas","f4fa797a-8aa5-4331-950f-15ebdfa3b900",["Chemical"],"https://tiktok.com/@f_o_dmedia/video/7542602030645333304","Gambia","Aug 25, 2025"],
["Spede-Heat CS Gas (37mm) Long Range","1949f5d6-b527-4b2e-b7fb-995d2908ec00",["Chemical"],"https://x.com/NathanBacaTV/status/1268546711452094464/photo/2","Washington DC","Jun 4, 2020"],
["37/38mm Riot Cs Smoke Projectile","682734b5-ed67-450b-0e11-f23b1485e600",["Chemical"],"https://x.com/stobah/status/499765136467705857","USA / Egypt","Aug 14, 2014"],
["CCS-40-C38mm Tear Gas Shell","709fa6e1-f881-4233-847a-aa36616b7e00",["Chemical"],"https://x.com/LBH_Jakarta/status/1961717713061249420/photo/1","Indonesia","Aug 30, 2025"],
["315 bore rifle rounds","3d30a8ea-398f-447a-29c2-a3712bb7d000",["Less Lethal Launchers"],"https://x.com/yatt_mehkma/status/1758110679326917068","India","Feb 15, 2024"],
["Sharpened Tear Gas Grenade Cs","a8bac260-d8ef-4000-20fa-e92c6f30d600",["Chemical"],"https://tiktok.com/@clocktower1976/video/7546639736895589688","Uganda","Sep 5, 2025"],
["Pocket Tactic Cs Gas Canister","b7ffbaee-7c89-4460-e55b-fe8e45f78d00",["Chemical"],"https://x.com/twittlesis/status/1151902212995584001","San Juan","Jul 18, 2019"],
["GL-203/L - Multiple Tear Gas Charge","1e0a78a0-487f-459b-4d62-1d577c90c000",["Chemical"],"https://x.com/SamBayramova/status/1866015656925348068","Georgia","Mar 3, 2021"],
["Skat Shell CS Gas Canister","9dceed96-a6e1-44c6-4f34-53b02f7d1d00",["Chemical"],"https://x.com/AlexTyrrellPVQ/status/1861204381133111607/photo/3","Montreal","Nov 26, 2024"],
["LAR Shell Soft Nose LR Cs Gas (38mm)","3d5212db-79dc-4482-6a15-9787726fb700",["Chemical"],"https://x.com/GaonSavera/status/1757337692138778996","India","Feb 13, 2024"],
["Riot Control Grenade","0cf9cceb-5746-4a5d-31cf-f4372b6e7f00",["Chemical"],"https://fionadunlop.com/blog/2015/10/life-death-in-the-west-bank","Jerusalem","Oct 15, 2015"],
["40mm Grenade Launcher","8246eead-8fdb-4136-6b82-54beea675f00",["Less Lethal Launchers"],"https://x.com/KennedyWandera_/status/1756221219567775795","Senegal","Feb 11, 2024"],
["Gren Hand IIRT A-RIOT 83 Cs Gas","f65b5ab9-d93f-4658-dc8d-6ecab1e61a00",["Chemical"],"https://x.com/redstreamnet/status/1805908506215620774","Kenya","Jun 26, 2024"],
["Multiple Grenade Launcher (Milkor MGL) 60mm","dbe11673-f1ed-4823-11a8-657fb107a800",["Chemical"],"https://x.com/MuhaburaRwanda/status/1915017090777350522","Uganda","Apr 23, 2025"],
["Drone with CS Gas Sprayer","153de06b-8a98-40f7-011c-b310c1fd0b00",["Chemical"],"https://x.com/ntvuganda/status/1552665233143078912","Uganda","Jul 28, 2022"],
["48mm Cs Gas Canister","bb534bd8-2739-41fe-0e45-7096e958f200",["Chemical"],"https://x.com/kizzabesigye1/status/1122197154171375618/photo/4","Uganda","Apr 27, 2019"],
["12-gauge cartridges (70 mm)","3730712a-6336-47b9-3ec9-41dcc1762300",["Less Lethal Launchers"],"https://x.com/TheGHMediaGuru/status/899192945647255552","Togo","Aug 20, 2017"],
["CS Smoke Grenade 64mm","065c7d69-7e7b-4595-9e47-748df8422400",["Chemical"],"https://x.com/A_Emi_Nansereko/status/1328586926891397120","Brazil / Uganda","Nov 17, 2020"],
["Gren Hand A /Riot CS gas (IRRT M1221A1)","192db192-3d29-4673-4e5d-b13f1c381900",["Chemical"],"https://x.com/justicefrontil/status/1879510571768218014","Mozambique","Jan 15, 2025"],
["Tear Smoke Shell-2Cs Gas","c3f06a9b-a389-49d1-8d1a-d1a2f181b400",["Chemical"],"https://x.com/Cidiachissungo/status/1854455811889578000","India / Mozambique","Nov 7, 2024"],
["Spent CS Canister Cap","53f27192-63fd-4ccb-e56b-c296ebf8eb00",["Less Lethal Launchers","Restraints"],"https://x.com/ItsJeffreyJeff/status/1805123144790757392/photo/3","Nairobi","Jun 24, 2024"],
["Projectile Grenades Cs Gas","12960eab-6340-4755-d761-6df30f7bc100",["Chemical"],"https://tv360nigeria.com/police-discover-6-projectile-grenades","Nigeria","Aug 3, 2024"],
["Rubber Ball 15mm","280ccea9-5093-4eac-ab88-5e04cd48ce00",["Less Lethal Launchers","Striking Weapons"],"https://x.com/SemaUkweliKenya/status/1813579084863304038/photo/3","Nairobi","Jul 17, 2024"],
["Nobel Securite (PLMP 7B CS 05-PB-98)","55d1833d-9151-448a-ef2b-a88c6e41b400",["Chemical"],"https://x.com/SemaUkweliKenya/status/1813579084863304038/photo/1","Nairobi","Jul 17, 2024"],
["CS gas cartridge canister (HM-07-CC)","dedfb669-63a9-4722-009d-3403833b9800",["Chemical"],"https://facebook.com/NairobiJournalNews/photos/","North Macedonia / Nairobi","Jun 13, 2025"],
["7.92x57mm Mauser rifle cartridge","e0f37e43-c543-4ef3-a0d4-c2d196ceac00",["Less Lethal Launchers"],"https://x.com/mbithi/status/1937851362978480446","North Macedonia / Nairobi","Jun 25, 2025"],
["Range Shell (38mm 2Cs) Canister","1f41630a-61e9-4890-509a-74bdbb027c00",["Chemical"],"https://x.com/firstladyship/status/1819037719793995847/video/4","Nigeria","Aug 1, 2024"],
["Assault Gun - AK47 (7.62X39mm)","93af788a-e9ca-4aba-31aa-25677ea59900",["Kinetic Impact Projectiles"],"https://x.com/AfricanHub_/status/1805543191342444583","Nairobi","Jun 25, 2024"],
["Hand-Throw Tear Gas Canister-CS gas","2df26921-941a-4d38-6c3b-d69456d1d000",["Chemical"],"https://x.com/inspiredbysuki/status/1813295708944183757","Nairobi","Jul 16, 2024"],
["Rimfire Hand Pistol","b41488c2-1829-4b8d-7b60-6a3ff72af300",["Kinetic Impact Projectiles"],"https://x.com/ajplus/status/1258797830669467651/photo/2","Nairobi","May 8, 2020"],
["C850-1CS","d5496e4c-8626-4567-8fb7-e167b4901000",["Chemical"],"https://instagram.com/zozapodcastke/p/C8g5-ERI-BF","Kenya","Jun 27, 2024"],
["12 Gauge Pump-Action Anti-Riot Gun","4a6b4e95-8ab4-4d95-534f-c65c5fca8900",["Kinetic Impact Projectiles"],"https://tiktok.com/@congo_001/video/7517038555554762006","Nairobi","Jun 18, 2025"],
["Rubber Bullets (Large Cylindrical Buton rounds)","a12f73e0-ec3b-4a09-c576-23727603ff00",["Kinetic Impact Projectiles","Restraints"],"https://x.com/daniel_epa/status/1935102658156605688/photo/1","Nairobi","Jun 17, 2025"],
["Tear Gas Launcher 38mm & 40mm","8052456d-1560-466c-f475-2cb11c0f2600",["Less Lethal Launchers"],"https://youtube.com/watch","Nairobi","Jun 17, 2025"],
["37/38mm Anti-Riot Grenade Launcher","68a0b805-034a-473c-68c7-c2a9fabedb00",["Less Lethal Launchers"],"https://x.com/daniel_epa/status/1935102344166781128/photo/3","Nairobi","Jun 17, 2025"],
["G2020-1CS - Gas","32a61a7c-26cc-4899-933f-3f20f07af100",["Chemical"],"https://tiktok.com/@yours_dan_reaction/video/7520136670528752901","Nairobi","Jun 26, 2025"],
["Tear Gas Hand Grenade CS","bbe27da6-45b7-4180-ec24-0c6630fa4800",["Chemical"],"https://x.com/bbgoriginals/status/1242910651573567488","Kisumu","Mar 25, 2020"],
["C850-XRB - CN Gas","eae35a87-b13d-4a36-d5e3-4809d236d200",["Chemical"],"https://youtube.com/watch","Nairobi","Jun 17, 2025"],
["G2020-CS/CS - Gas","623b1462-098f-41a7-3851-d2878d58b700",["Chemical"],"https://tiktok.com/@arrowbwoyke/video/7519863886015696133","Nairobi","Jun 25, 2025"],
["cartridge cases - Spent bullet casings","abe57f41-f842-41aa-9e83-8fb6a06aaf00",["Less Lethal Launchers"],"https://x.com/kibirige_kassim/status/1934168981507874829","Nairobi","Jun 15, 2025"]
];

const ALL_CATEGORIES = ["Chemical","Conventional Weapons","Kinetic Impact Projectiles","Less Lethal Launchers","Restraints","Striking Weapons"];
const CAT_ICONS = {"Chemical":"science","Conventional Weapons":"bomb","Kinetic Impact Projectiles":"adjust","Less Lethal Launchers":"sports_martial_arts","Restraints":"lock","Striking Weapons":"sports_baseball"};
const CAT_COLORS = {"Chemical":"var(--cat-chem)","Conventional Weapons":"var(--cat-conv)","Kinetic Impact Projectiles":"var(--cat-kin)","Less Lethal Launchers":"var(--cat-less)","Restraints":"var(--cat-rest)","Striking Weapons":"var(--cat-strike)"};

let activeFilter = "All";
let searchTerm = "";
let currentView = "grid";

function getPrimaryCat(cats){
  const order = ["Chemical","Less Lethal Launchers","Kinetic Impact Projectiles","Conventional Weapons","Restraints","Striking Weapons"];
  for(const o of order) if(cats.includes(o)) return o;
  return cats[0];
}

function getBadgeClass(cat){
  if(cat==="Chemical") return "Chemical";
  if(cat.includes("Conventional")) return "Conventional";
  if(cat.includes("Kinetic")) return "Kinetic";
  if(cat.includes("Less")) return "Less";
  if(cat==="Restraints") return "Restraints";
  if(cat.includes("Striking")) return "Striking";
  return "Chemical";
}

function getCategoryCounts(){
  const counts = {};
  ALL_CATEGORIES.forEach(c => counts[c]=0);
  records.forEach(r => r[2].forEach(c => { if(counts[c]!==undefined) counts[c]++; }));
  return counts;
}

function getFilteredRecords(){
  return records.filter(r => {
    const matchFilter = activeFilter === "All" || r[2].includes(activeFilter);
    const s = searchTerm.toLowerCase();
    const matchSearch = !s || r[0].toLowerCase().includes(s) || r[4].toLowerCase().includes(s) || r[2].join(" ").toLowerCase().includes(s) || r[5].toLowerCase().includes(s);
    return matchFilter && matchSearch;
  });
}

function renderFilters(){
  const counts = getCategoryCounts();
  const bar = document.getElementById("filtersBar");
  let html = `<button class="filter-pill ${activeFilter==='All'?'active':''}" onclick="setFilter('All')">All <span class="badge">${records.length}</span></button>`;
  ALL_CATEGORIES.forEach(c => {
    html += `<button class="filter-pill ${activeFilter===c?'active':''}" onclick="setFilter('${c}')"><span class="material-symbols-rounded" style="font-size:14px;color:${activeFilter===c?'#fff':CAT_COLORS[c]}">${CAT_ICONS[c]}</span> ${c} <span class="badge">${counts[c]}</span></button>`;
  });
  bar.innerHTML = html;
}

function setFilter(f){
  activeFilter = f;
  renderFilters();
  renderGrid();
}

function renderGrid(){
  const filtered = getFilteredRecords();
  const container = document.getElementById("gridContainer");
  const empty = document.getElementById("emptyState");
  if(filtered.length === 0){
    container.innerHTML = "";
    empty.style.display = "flex";
    return;
  }
  empty.style.display = "none";
  container.innerHTML = filtered.map((r,i) => {
    const img = `${IMG_BASE}${r[1]}/public`;
    const cat = getPrimaryCat(r[2]);
    return `<div class="card" onclick="openModal(${records.indexOf(r)})" tabindex="0" role="button" aria-label="${r[0]}">
      <div class="card-img"><img data-src="${img}" alt="${r[0]}" loading="lazy"><div class="cat-badge ${getBadgeClass(cat)}">${r[2][0]}</div></div>
      <div class="card-body"><h3>${r[0]}</h3><div class="card-meta"><span><span class="material-symbols-rounded">location_on</span>${r[4]}</span><span><span class="material-symbols-rounded">calendar_today</span>${r[5]}</span></div><a class="card-source" href="${r[3]}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()"><span class="material-symbols-rounded">open_in_new</span> Source</a></div>
    </div>`;
  }).join("");
  lazyLoadImages();
}

function lazyLoadImages(){
  const imgs = document.querySelectorAll('img[data-src]');
  if('IntersectionObserver' in window){
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          e.target.src=e.target.dataset.src;
          e.target.removeAttribute('data-src');
          obs.unobserve(e.target);
        }
      });
    },{rootMargin:'200px'});
    imgs.forEach(i=>obs.observe(i));
  } else {
    imgs.forEach(i=>{i.src=i.dataset.src;i.removeAttribute('data-src');});
  }
}

function openModal(idx){
  const r = records[idx];
  const img = `${IMG_BASE}${r[1]}/public`;
  document.getElementById('modalImg').src = img;
  document.getElementById('modalImg').alt = r[0];
  document.getElementById('modalTitle').textContent = r[0];
  document.getElementById('modalLink').href = r[3];
  let metaHTML = '';
  metaHTML += `<div class="meta-item"><label>Categories</label><span>${r[2].join(", ")}</span></div>`;
  metaHTML += `<div class="meta-item"><label>Location</label><span>${r[4]}</span></div>`;
  metaHTML += `<div class="meta-item"><label>Date</label><span>${r[5]}</span></div>`;
  metaHTML += `<div class="meta-item"><label>Record ID</label><span>#${idx+1}</span></div>`;
  document.getElementById('modalMeta').innerHTML = metaHTML;
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(e){
  if(e.target===document.getElementById('modalOverlay')){
    document.getElementById('modalOverlay').classList.remove('open');
    document.body.style.overflow='';
  }
}

const aboutTexts = [
  "Canister Archive is the world's largest open database tracking tear gas use. We collect and verify information about tear gas canisters used in protests and demonstrations worldwide.",
  "Our database helps journalists investigate police tactics, supports researchers studying crowd control methods, and gives communities the information they need to demand accountability.",
  "This project started when young protesters began documenting the tear gas used against them. What began as collected evidence has grown into a global archive."
];
let aboutTyping = false;

function typeAbout(){
  if(aboutTyping) return;
  aboutTyping = true;
  aboutTexts.forEach((t,i) => document.getElementById('aboutTxt'+i).textContent = '');
  let idx = 0, ci = 0;
  function tick(){
    if(idx >= aboutTexts.length){ aboutTyping = false; return; }
    const el = document.getElementById('aboutTxt'+idx);
    if(ci < aboutTexts[idx].length){
      el.textContent += aboutTexts[idx][ci++];
      setTimeout(tick, 12);
    } else {
      idx++; ci = 0;
      setTimeout(tick, 200);
    }
  }
  tick();
}

function showView(view){
  currentView = view;
  document.querySelectorAll('.view-panel').forEach(p=>p.classList.remove('active'));
  document.getElementById(view+'View').classList.add('active');

  const isGrid = view === 'grid';
  document.getElementById('searchBox').style.display = isGrid ? '' : 'none';

  if(view==='map') renderMap();
  if(view==='about') typeAbout();
}

function mobileNav(view,btn){
  document.querySelectorAll('.bottom-nav-item').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  showView(view);
}

function toggleTheme(){
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme')==='dark';
  html.setAttribute('data-theme', isDark?'light':'dark');
  localStorage.setItem('theme', isDark?'light':'dark');
  const icon = document.querySelector('#themeToggle .material-symbols-rounded');
  icon.textContent = isDark?'dark_mode':'light_mode';
}

// Search
document.getElementById('searchInput').addEventListener('input', function(e){
  searchTerm = e.target.value;
  renderGrid();
});

// Animated placeholder
(function(){
  const input = document.getElementById('searchInput');
  const phrases = ["Search canisters, locations, categories...","Type to filter the archive...","Find by name, country, or type...","What are you looking for?"];
  let idx = 0, charIdx = 0, deleting = false;
  function tick(){
    const p = phrases[idx];
    if(!deleting){
      if(charIdx < p.length){ charIdx++; input.setAttribute('placeholder', p.substring(0,charIdx)); setTimeout(tick,40); }
      else { deleting=true; setTimeout(tick,2000); }
    } else {
      if(charIdx > 0){ charIdx--; input.setAttribute('placeholder', p.substring(0,charIdx)); setTimeout(tick,20); }
      else { deleting=false; idx=(idx+1)%phrases.length; setTimeout(tick,200); }
    }
  }
  tick();
})();

// Theme init
(function(){
  const saved = localStorage.getItem('theme')||'light';
  document.documentElement.setAttribute('data-theme',saved);
  if(saved==='dark'){
    const icon = document.querySelector('#themeToggle .material-symbols-rounded');
    if(icon) icon.textContent='light_mode';
  }
})();

function renderMap(){
  initMapChart();
  const container = document.getElementById('mapCompanies');
  container.innerHTML = `
    <div class="map-country"><span class="map-dot" style="background:#E74C3C"></span>Brazil</div>
    <div class="map-company">Condor Non-Lethal Technologies</div>
    <div class="map-country"><span class="map-dot" style="background:#E74C3C"></span>India</div>
    <div class="map-company">BSF Tear Smoke Unit</div>
  `;
}

function initMapChart(){
  if(typeof google === 'undefined' || !google.visualization){
    google.charts.load('current', {packages:['geochart']});
    google.charts.setOnLoadCallback(drawMapChart);
  } else {
    drawMapChart();
  }
}

function drawMapChart(){
  const container = document.getElementById('mapChartContainer');
  const data = new google.visualization.DataTable();
  data.addColumn('string','Country');
  data.addColumn('number','Count');
  data.addColumn({type:'string', role:'tooltip'});
  data.addRow(['BR',1,'Brazil: Condor Non-Lethal Technologies']);
  data.addRow(['IN',1,'India: BSF Tear Smoke Unit']);
  const chart = new google.visualization.GeoChart(container);
  chart.draw(data, {
    width:'100%', height:400,
    colorAxis:{colors:['#C0392B','#C0392B']},
    backgroundColor:'#F0EDE3',
    datalessRegionColor:'#E7E2DC',
    defaultColor:'#E7E2DC',
    legend:'none',
    tooltip:{textStyle:{fontFamily:'Inter',fontSize:13}}
  });
}

function scrollToTop(){window.scrollTo({top:0,behavior:'smooth'})}

// Keyboard
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){
    document.getElementById('modalOverlay').classList.remove('open');
    document.body.style.overflow='';
  }
});

// Card keyboard
document.addEventListener('keydown',e=>{
  if(e.key==='Enter' && e.target.classList.contains('card')){
    e.target.click();
  }
});

// Init
renderFilters();
renderGrid();
// Map is rendered only when user navigates to Map tab
// Hide skeleton immediately
document.getElementById('skeletonScreen').classList.add('hide');

// Generate skeleton grid
(function(){
  const grid = document.getElementById('skeletonGrid');
  let html = '';
  for(let i=0;i<15;i++){
    html += `<div class="skeleton-card"><div class="s-img"></div><div class="s-body"><div class="s-line w60"></div><div class="s-line w80"></div><div class="s-line w40"></div><div class="s-line w30"></div></div></div>`;
  }
  grid.innerHTML = html;
})();
