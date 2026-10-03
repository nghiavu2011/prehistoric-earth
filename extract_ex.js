const EXHIBITS = [
      {
        id: "triceratops",
        nameVi: "Triceratops",
        nameEn: "Triceratops",
        periodVi: "Kỷ Phấn Trắng Muộn",
        periodEn: "Late Cretaceous",
        timeScaleVi: "68–66 Ma (Maastrichtian)",
        timeScaleEn: "68–66 Ma (Maastrichtian)",
        modelFile: "./assets/models/triceratops.glb",
        skeletonFile: "./assets/models/triceratops_skeleton.glb",
        background: "./assets/backgrounds/cretaceous.jpg",
        realLengthMeters: 8.5,
        rotationOffsetY: -Math.PI / 2 + TARGET_FACING_ANGLE,
        isFlying: false,
        formation: "Hệ tầng Hell Creek (Montana, Bắc Mỹ)",
        paleoCoords: "52.4° Bắc • 68.2° Tây",
        rockMatrix: "Sa thạch xám mịn, sét bùn ven sông",
        datingMethod: "66.8 Ma • Đồng vị Argon-Argon",
        discoverer: "1889 • Othniel Charles Marsh",
        prompt: "Vast cinematic prehistoric landscape of the Late Cretaceous Hell Creek Formation, sprawling lush wetlands, ancient flowering magnolias, giant bald cypresses, low Cretaceous ferns and cycads, golden afternoon sun rays casting long shadows across meandering riverbank, 16:9 widescreen eye-level framing, hyper-realistic natural museum diorama backdrop, tranquil and wild, high detail, no dinosaurs in the scene.",
        vi: {
          tag: "Khủng long Ceratopsia",
          subtitle: "Người khổng lồ ba sừng của cuối Kỷ Phấn Trắng",
          intro: "Triceratops sở hữu hộp sọ khổng lồ dài tới 2.5m, ba chiếc sừng nhọn và phần diềm cổ rộng khiến nó trở thành biểu tượng phòng thủ dũng mãnh nhất chống lại kẻ săn mồi T-Rex.",
          obs: "Người Joe cao 1.75m đứng cạnh đối chứng tỷ lệ. Riêng phần hộp sọ đã dài hơn cả chiều cao người trưởng thành!",
          diet: "Thực vật",
          dietSub: "Dương xỉ, lá kim, mè gai",
          length: "8.5 mét",
          lengthSub: "Cao 3.0m tại hông",
          mass: "6–10 tấn",
          massSub: "Gấp đôi voi châu Phi",
          loc: "Hệ tầng Hell Creek",
          locSub: "Bắc Mỹ (Montana, Wyoming)"
        },
        en: {
          tag: "Ceratopsian dinosaur",
          subtitle: "The three-horned giant of the Late Cretaceous",
          intro: "Triceratops sported a massive 2.5m skull, three formidable horns, and a solid bony neck frill, representing the pinnacle of herbivore defense.",
          obs: "Compare proportions with human Joe (1.75m). The skull alone exceeds human height!",
          diet: "Herbivore",
          dietSub: "Ferns, cycads, conifers",
          length: "8.5 metres",
          lengthSub: "Hip height ~3.0m",
          mass: "6–10 tonnes",
          massSub: "Twice an African elephant",
          loc: "Hell Creek Formation",
          locSub: "North America"
        }
      },
      {
        id: "t_rex",
        nameVi: "Tyrannosaurus Rex",
        nameEn: "Tyrannosaurus Rex",
        periodVi: "Kỷ Phấn Trắng Muộn",
        periodEn: "Late Cretaceous",
        timeScaleVi: "68–66 Ma (Maastrichtian)",
        timeScaleEn: "68–66 Ma (Maastrichtian)",
        modelFile: "./assets/models/t_rex.glb",
        background: "./assets/backgrounds/cretaceous.jpg",
        realLengthMeters: 12.3,
        rotationOffsetY: TARGET_FACING_ANGLE,
        isFlying: false,
        formation: "Hệ tầng Lance & Hell Creek (Bắc Mỹ)",
        paleoCoords: "51.8° Bắc • 67.5° Tây",
        rockMatrix: "Trầm tích phù sa châu thổ cổ đại",
        datingMethod: "67.0 Ma • Đồng vị Argon-Argon",
        discoverer: "1902 • Barnum Brown (AMNH)",
        prompt: "Late Cretaceous subtropical floodplain at dusk, ancient sequoia and ginkgo groves with sprawling fern undergrowth, mist rising from murky primordial bayous, dramatic twilight sky with deep amber and dusky indigo clouds, 16:9 panoramic eye-level view, atmospheric lighting, quiet primeval stillness, 8k resolution, no dinosaurs in the image.",
        vi: {
          tag: "Khủng long Theropoda",
          subtitle: "Vua săn mồi đỉnh cao của Kỷ Phấn Trắng",
          intro: "Tyrannosaurus rex dài hơn 12 mét, cao gần 4 mét tại hông với lực cắn khủng khiếp lên tới 35.000 Newton, đủ sức nghiền nát xương của mọi con mồi.",
          obs: "Người Joe đứng cạnh chỉ cao ngang đầu gối của T-Rex! Chiếc đầu bạo chúa khổng lồ có thể nuốt trọn một người lớn.",
          diet: "Ăn thịt",
          dietSub: "Triceratops, Edmontosaurus",
          length: "12.3 mét",
          lengthSub: "Cao gần 4.0m tại hông",
          mass: "8–9 tấn",
          massSub: "Vua bạo chúa tiền sử",
          loc: "Hệ tầng Hell Creek & Lance",
          locSub: "Bắc Mỹ"
        },
        en: {
          tag: "Theropod dinosaur",
          subtitle: "Apex predator of the Late Cretaceous",
          intro: "Tyrannosaurus rex was over 12 meters long with bone-crushing jaws capable of exerting immense bite force.",
          obs: "The human reaches only knee-level to the giant predator.",
          diet: "Carnivore",
          dietSub: "Ceratopsids, hadrosaurs",
          length: "12.3 metres",
          lengthSub: "Hip height ~4.0m",
          mass: "8–9 tonnes",
          massSub: "Heavier than an elephant",
          loc: "Hell Creek & Lance Formations",
          locSub: "North America"
        }
      },
      {
        id: "maiasaura_nest",
        nameVi: "Tổ Trứng Maiasaura",
        nameEn: "Maiasaura Fossil Nest",
        periodVi: "Kỷ Phấn Trắng Muộn",
        periodEn: "Late Cretaceous",
        timeScaleVi: "76.7 Ma (Campanian)",
        timeScaleEn: "76.7 Ma (Campanian)",
        modelFile: "./assets/models/maiasaura_nest.glb",
        background: "./assets/backgrounds/cretaceous.jpg",
        realLengthMeters: 2.5,
        rotationOffsetY: TARGET_FACING_ANGLE,
        isFlying: false,
        formation: "Hệ tầng Two Medicine (Montana, Mỹ)",
        paleoCoords: "48.2° Bắc • 75.1° Tây",
        rockMatrix: "Bùn kết xám và tro núi lửa mịn bảo tồn phôi",
        datingMethod: "76.7 Ma • Bảo tàng NHM London",
        discoverer: "1978 • Jack Horner & Bob Makela",
        prompt: "Close-up eye-level view of prehistoric communal dinosaur nesting grounds in late Cretaceous semi-arid plains, dry mud nest craters with straw-like plant bedding, distant volcanic smoke plumes, warm harsh sunlight, photorealistic 8k museum background, no creatures.",
        vi: {
          tag: "Bằng Chứng Hóa Thạch (NHM London)",
          subtitle: "Tổ khủng long ấp trứng hóa thạch nguyên bản",
          intro: "Bản quét 3D từ Bảo tàng Lịch sử Tự nhiên Luân Đôn tái hiện tổ ấp hình miệng núi lửa bằng bùn của Maiasaura ('Người mẹ thằn lằn tốt lành'), chứa các quả trứng hóa thạch xếp vòng tròn.",
          obs: "Đây là bằng chứng hóa thạch chấn động thế giới chứng minh khủng long biết xây tổ, ủ ấm trứng và chăm sóc con non chu đáo như loài chim ngày nay!",
          diet: "Tiêu bản tổ trứng",
          dietSub: "Bảo tàng NHM London",
          length: "Đường kính 2.5m",
          lengthSub: "Chứa 15–20 quả trứng",
          mass: "Hóa thạch nguyên khối",
          massSub: "Bảo tồn phôi non",
          loc: "Hệ tầng Two Medicine",
          locSub: "Montana (Bắc Mỹ)"
        },
        en: {
          tag: "Fossil Evidence (NHM London)",
          subtitle: "Original fossilized dinosaur nesting site",
          intro: "3D photogrammetry scan from the Natural History Museum London showing a Maiasaura mud nest crater with concentric clutches of fossil eggs.",
          obs: "Groundbreaking paleontological proof of parental care and nesting behavior in dinosaurs, identical to modern birds.",
          diet: "Fossil Nest Specimen",
          dietSub: "NHM London Collection",
          length: "Diameter 2.5m",
          lengthSub: "Holds 15–20 eggs",
          mass: "Sedimentary matrix",
          massSub: "Preserved embryonic bones",
          loc: "Two Medicine Formation",
          locSub: "Montana, USA"
        }
      },
      {
        id: "protoceratops_fossil",
        nameVi: "Hóa Thạch Protoceratops",
        nameEn: "Protoceratops Skull Fossil",
        periodVi: "Kỷ Phấn Trắng Muộn",
        periodEn: "Late Cretaceous",
        timeScaleVi: "75–71 Ma (Campanian)",
        timeScaleEn: "75–71 Ma (Campanian)",
        modelFile: "./assets/models/protoceratops_fossil.glb",
        background: "./assets/backgrounds/cretaceous.jpg",
        realLengthMeters: 1.8,
        rotationOffsetY: TARGET_FACING_ANGLE,
        isFlying: false,
        formation: "Hệ tầng Djadochta (Sa mạc Gobi)",
        paleoCoords: "42.8° Bắc • 103.5° Đông",
        rockMatrix: "Sa thạch cồn cát đỏ sa mạc hạt mịn",
        datingMethod: "73.5 Ma • Bảo tàng NHMW Vienna",
        discoverer: "1922 • Roy Chapman Andrews",
        prompt: "Arid red sandstone canyon in prehistoric Gobi Desert, weathered sandstone cliff face with exposed fossil bone layers, dry desert wind blowing fine red sand, stark midday sunlight with sharp shadows, photorealistic museum diorama backdrop, empty desert, no dinosaurs.",
        vi: {
          tag: "Hóa Thạch Viện Bảo Tàng (NHMW Vienna)",
          subtitle: "Tiêu bản sọ hóa thạch sa mạc Gobi tại Áo",
          intro: "Bản quét 3D độ phân giải cao từ Bảo tàng Lịch sử Tự nhiên Viên (Áo) ghi nhận hộp sọ Protoceratops andrewsi nguyên bản được chôn vùi trong lớp cát đỏ sa mạc Gobi.",
          obs: "Quan sát phần diềm cổ xương và mỏ vẹt sắc bén: Đây chính là loài khủng long tiền thân tiến hóa thành Triceratops khổng lồ!",
          diet: "Hóa thạch hộp sọ",
          dietSub: "Bảo tàng NHMW Áo",
          length: "Dài 1.8 mét",
          lengthSub: "Kích thước bằng con cừu",
          mass: "Hóa thạch sa mạc",
          massSub: "Diềm xương nguyên vẹn",
          loc: "Hệ tầng Djadochta",
          locSub: "Sa mạc Gobi (Mông Cổ)"
        },
        en: {
          tag: "Fossil Skull (NHMW Vienna)",
          subtitle: "Authentic Gobi Desert fossil skull at Vienna Museum",
          intro: "High-resolution 3D scan from the Natural History Museum Vienna showing the complete skull and neck frill of Protoceratops andrewsi.",
          obs: "Notice the parrot-like beak and broad frill, ancestral features that later evolved into giant horned dinosaurs.",
          diet: "Fossil Skull Specimen",
          dietSub: "NHMW Vienna Collection",
          length: "Length 1.8m",
          lengthSub: "Sheep-sized ancestor",
          mass: "Fossilized in red sandstone",
          massSub: "Pristine skull frill",
          loc: "Djadochta Formation",
          locSub: "Gobi Desert, Mongolia"
        }
      },
      {
        id: "giganotosaurus",
        nameVi: "Giganotosaurus",
        nameEn: "Giganotosaurus",
        periodVi: "Kỷ Phấn Trắng Giữa",
        periodEn: "Late Cretaceous",
        timeScaleVi: "99–97 Ma (Cenomanian)",
        timeScaleEn: "99–97 Ma (Cenomanian)",
        modelFile: "./assets/models/giganotosaurus.glb",
        background: "./assets/backgrounds/cretaceous.jpg",
        realLengthMeters: 13.2,
        rotationOffsetY: -Math.PI / 2 + TARGET_FACING_ANGLE,
        isFlying: false,
        formation: "Hệ tầng Candeleros (Patagonia, Argentina)",
        paleoCoords: "39.2° Nam • 69.1° Tây",
        rockMatrix: "Trầm tích châu thổ sông sa thạch đỏ",
        datingMethod: "98.0 Ma • Định tuổi Cổ từ",
        discoverer: "1993 • Rubén D. Carolini",
        prompt: "Wide semi-arid prehistoric plains of Cretaceous Patagonia, massive braided gravel rivers, scattered araucaria conifers and dry scrub, distant snowless Andes ranges under scorching sun, 16:9 eye-level panoramic framing, realistic museum background, no dinosaurs.",
        vi: {
          tag: "Khủng long Carcharodontosauridae",
          subtitle: "Bạo chúa khổng lồ Nam Mỹ vượt trội T-Rex",
          intro: "Giganotosaurus carolinii là một trong những loài khủng long ăn thịt trên cạn lớn nhất từng tồn tại, dài hơn 13 mét, nặng tới 9 tấn và sở hữu hàm răng hình lưỡi dao chuyên xẻ thịt các loài thằn lằn hộ pháp khổng lồ.",
          obs: "Chiều dài hơn 13m của Giganotosaurus thậm chí vượt qua cả T-Rex! Hãy điều chỉnh người sang bên phải hoặc phía trước để cảm nhận độ choáng ngợp.",
          diet: "Ăn thịt",
          dietSub: "Argentinosaurus non, sauropod",
          length: "13.2 mét",
          lengthSub: "Dài hơn T-Rex Bắc Mỹ",
          mass: "8.5–9.5 tấn",
          massSub: "Khổng lồ Nam Bán Cầu",
          loc: "Hệ tầng Candeleros",
          locSub: "Patagonia (Argentina)"
        },
        en: {
          tag: "Carcharodontosaurid",
          subtitle: "Giant Southern Tyrant of Patagonia",
          intro: "Giganotosaurus was one of the largest terrestrial carnivores ever known, exceeding T-Rex in body length and hunting giant sauropods in packs.",
          obs: "Measuring 13.2m in length, notice its immense serrated blade-like dentition.",
          diet: "Carnivore",
          dietSub: "Titanosaurs",
          length: "13.2 metres",
          lengthSub: "Longer than T-Rex",
          mass: "8.5–9.5 tonnes",
          massSub: "Apex predator of South America",
          loc: "Candeleros Formation",
          locSub: "Argentina"
        }
      },
      {
        id: "mamenchisaurus",
        nameVi: "Mamenchisaurus",
        nameEn: "Mamenchisaurus",
        periodVi: "Kỷ Jura Muộn",
        periodEn: "Late Jurassic",
        timeScaleVi: "160–145 Ma (Oxfordian)",
        timeScaleEn: "160–145 Ma (Oxfordian)",
        modelFile: "./assets/models/mamenchisaurus.glb",
        background: "./assets/backgrounds/jurassic.jpg",
        realLengthMeters: 26.0,
        rotationOffsetY: TARGET_FACING_ANGLE,
        isFlying: false,
        formation: "Hệ tầng Shishugou (Tân Cương, Trung Quốc)",
        paleoCoords: "45.1° Bắc • 89.2° Đông",
        rockMatrix: "Trầm tích hồ ngập phù sa ẩm ướt",
        datingMethod: "155.0 Ma • Đồng vị U-Pb",
        discoverer: "1952 • C. C. Young",
        prompt: "Lush ancient Jurassic subtropical forest of prehistoric East Asia, sweeping fern plains dotted with ancient ginkgoes and seed ferns, majestic towering conifers, wide river valley under humid atmospheric morning haze, horizontal eye-level perspective, photorealistic museum backdrop, no animals.",
        vi: {
          tag: "Khủng long Sauropoda",
          subtitle: "Người khổng lồ sở hữu chiếc cổ dài nhất thế giới",
          intro: "Mamenchisaurus sinocanadorum sở hữu chiếc cổ kỳ quan dài tới 14 mét (chiếm hơn nửa chiều dài cơ thể 26m) gồm 19 đốt sống rỗng được gia cố bằng các gân xương chịu lực siêu nhẹ.",
          obs: "Với chiều dài 26m, Mamenchisaurus gấp 15 lần chiều cao người! Chiếc cổ vươn cao như một cần cẩu xây dựng đồ sộ.",
          diet: "Thực vật",
          dietSub: "Tán cây lá kim cao tầng, dương xỉ",
          length: "26.0 mét",
          lengthSub: "Riêng cổ dài 14 mét",
          mass: "25–35 tấn",
          massSub: "Bằng 6 con voi cộng lại",
          loc: "Hệ tầng Shishugou",
          locSub: "Đông Á (Tân Cương, Trung Quốc)"
        },
        en: {
          tag: "Sauropod dinosaur",
          subtitle: "The longest-necked creature in Earth's history",
          intro: "Mamenchisaurus possessed an astonishing 14-meter-long neck consisting of 19 hollow vertebrae, allowing it to graze high canopies.",
          obs: "At 26 meters total length, it dwarfs the human observer by a factor of fifteen!",
          diet: "Herbivore",
          dietSub: "High conifer canopies",
          length: "26.0 metres",
          lengthSub: "Neck spans 14 metres",
          mass: "25–35 tonnes",
          massSub: "Equivalent to 6 elephants",
          loc: "Shishugou Formation",
          locSub: "East Asia"
        }
      },
      {
        id: "baryonyx",
        nameVi: "Baryonyx",
        nameEn: "Baryonyx",
        periodVi: "Kỷ Phấn Trắng Sớm",
        periodEn: "Early Cretaceous",
        timeScaleVi: "130–125 Ma (Barremian)",
        timeScaleEn: "130–125 Ma (Barremian)",
        modelFile: "./assets/models/baryonyx.glb",
        background: "./assets/backgrounds/cretaceous.jpg",
        realLengthMeters: 8.5,
        rotationOffsetY: -Math.PI / 2 + TARGET_FACING_ANGLE,
        isFlying: false,
        formation: "Hệ tầng Weald Clay (Surrey, Anh Quốc)",
        paleoCoords: "38.5° Bắc • 5.2° Đông",
        rockMatrix: "Bùn sét châu thổ nước ngọt",
        datingMethod: "128.0 Ma • Sinh địa tầng",
        discoverer: "1983 • William J. Walker",
        prompt: "Cretaceous freshwater delta wetland in Western Europe, shallow muddy banks lined with primitive reeds and horsetails, slow meandering river with exposed sandbars, soft overcast temperate sunlight, 16:9 panoramic eye-level view, realistic diorama background, no creatures.",
        vi: {
          tag: "Khủng long Spinosauridae",
          subtitle: "Thợ săn vuốt liềm có hộp sọ cá sấu",
          intro: "Baryonyx walkeri sở hữu hàm răng hẹp dài hình nón tương tự cá sấu nước ngọt và chiếc móng vuốt ngón cái cong sắc lẹm dài tới 31cm dùng để quặp giữ những con cá vảy dày khổng lồ.",
          obs: "Người Joe đứng cạnh đối chứng: Chiếc móng vuốt ngón tay của Baryonyx dài gần bằng cả cẳng tay người lớn!",
          diet: "Cá & Động vật nhỏ",
          dietSub: "Cá vảy Lepidotes, Iguanodon non",
          length: "8.5 mét",
          lengthSub: "Móng vuốt cong 31cm",
          mass: "1.7–2.0 tấn",
          massSub: "Thích nghi săn cá ven sông",
          loc: "Hệ tầng Weald Clay",
          locSub: "Châu Âu (Anh Quốc & Tây Ban Nha)"
        },
        en: {
          tag: "Spinosaurid dinosaur",
          subtitle: "Heavy-clawed crocodilian fisher",
          intro: "Baryonyx featured a long crocodile-like snout filled with serrated conical teeth and a massive 31cm sickle-like thumb claw.",
          obs: "Its lethal thumb claw alone is nearly as long as a human forearm.",
          diet: "Piscivore / Carnivore",
          dietSub: "Giant Lepidotes fish",
          length: "8.5 metres",
          lengthSub: "Thumb claw 31cm",
          mass: "1.7–2.0 tonnes",
          massSub: "Semi-aquatic predator",
          loc: "Weald Clay Formation",
          locSub: "Europe"
        }
      },
      {
        id: "liopleurodon",
        nameVi: "Liopleurodon",
        nameEn: "Liopleurodon",
        periodVi: "Kỷ Jura Muộn",
        periodEn: "Late Jurassic",
        timeScaleVi: "166–155 Ma (Callovian)",
        timeScaleEn: "166–155 Ma (Callovian)",
        modelFile: "./assets/models/liopleurodon.glb",
        background: "./assets/backgrounds/jurassic.jpg",
        realLengthMeters: 10.0,
        rotationOffsetY: -Math.PI / 2 + TARGET_FACING_ANGLE,
        isFlying: false,
        formation: "Hệ tầng Oxford Clay (Peterborough, Anh)",
        paleoCoords: "35.2° Bắc • 8.1° Đông",
        rockMatrix: "Sét bùn biển sâu chứa cúc đá Ammonite",
        datingMethod: "160.0 Ma • Sinh địa tầng Cúc đá",
        discoverer: "1873 • Henri Émile Sauvage",
        prompt: "Deep clear underwater view of a warm Jurassic epicontinental ocean, sunlight beams penetrating turquoise waters, ancient seafloor with ammonite shells and crinoids, peaceful realistic marine environment, wide 16:9 aspect ratio, no marine monsters in view.",
        vi: {
          tag: "Bò sát biển Pliosauroidea",
          subtitle: "Thần săn mồi đại dương cổ đại Kỷ Jura",
          intro: "Liopleurodon ferox sở hữu bốn vây bơi thủy động học có khả năng tăng tốc chớp nhoáng, chiếc đầu dài tới 2m với hàm răng cắm chéo sắc nhọn tạo ra lực cắn có thể bẻ gãy mọi bộ xương.",
          obs: "Thân hình 10m của Liopleurodon dưới nước đồ sộ gấp gần sáu lần chiều cao người đứng trên cạn!",
          diet: "Thịt biển",
          dietSub: "Cá măng, thằn lằn cổ dài Plesiosaur",
          length: "10.0 mét",
          lengthSub: "Đầu dài 2.0 mét",
          mass: "5–8 tấn",
          massSub: "Tăng tốc chớp nhoáng 4 vây",
          loc: "Biển nông Oxford Clay",
          locSub: "Châu Âu (Anh & Pháp)"
        },
        en: {
          tag: "Pliosaur reptile",
          subtitle: "Apex marine ambush hunter of the Jurassic",
          intro: "Liopleurodon was a short-necked pliosaur capable of explosive underwater acceleration propelled by four massive flippers.",
          obs: "Its 2-meter skull is larger than the entire height of an adult human.",
          diet: "Carnivore",
          dietSub: "Ichthyosaurs, plesiosaurs",
          length: "10.0 metres",
          lengthSub: "Skull length 2.0m",
          mass: "5–8 tonnes",
          massSub: "Four-flipper propulsion",
          loc: "Oxford Clay",
          locSub: "Europe"
        }
      },
      {
        id: "allosaurus",
        nameVi: "Allosaurus",
        nameEn: "Allosaurus",
        periodVi: "Kỷ Jura Muộn",
        periodEn: "Late Jurassic",
        timeScaleVi: "155–145 Ma (Kimmeridgian)",
        timeScaleEn: "155–145 Ma (Kimmeridgian)",
        modelFile: "./assets/models/allosaurus.glb",
        background: "./assets/backgrounds/jurassic.jpg",
        realLengthMeters: 9.5,
        rotationOffsetY: TARGET_FACING_ANGLE,
        isFlying: false,
        formation: "Hệ tầng Morrison (Utah / Colorado / Wyoming)",
        paleoCoords: "36.5° Bắc • 65.4° Tây",
        rockMatrix: "Phù sa sa thạch lòng sông cổ đại",
        datingMethod: "150.0 Ma • Đồng vị U-Pb",
        discoverer: "1877 • Othniel Charles Marsh",
        prompt: "Sweeping semi-arid Jurassic alluvial plain, scattered prehistoric conifer groves (Araucaria and Monkey Puzzle trees), sprawling cycad meadows, distant rugged red sandstone mesas under a bright clear sky, low horizontal eye-level framing, warm natural daylight, museum quality diorama backdrop, highly detailed, no dinosaurs.",
        vi: {
          tag: "Khủng long Allosauroidea",
          subtitle: "Sư tử săn mồi bầy đàn Kỷ Jura",
          intro: "Allosaurus là kẻ săn mồi thống trị kỷ Jura với chiều dài 9.5 mét, sở hữu hộp sọ linh hoạt với khớp hàm mở rộng như một chiếc rìu chiến bổ xuống.",
          obs: "Người cao 1.75m chỉ đứng ngang tầm đùi của Allosaurus! Khi đứng thẳng, đầu Allosaurus cao hơn 3.2 mét.",
          diet: "Ăn thịt",
          dietSub: "Stegosaurus, sauropod non",
          length: "9.5 mét",
          lengthSub: "Cao 3.2m, sải bước cực dài",
          mass: "2.5–3 tấn",
          massSub: "Cơ động và nhanh nhẹn",
          loc: "Hệ tầng Morrison",
          locSub: "Bắc Mỹ & Châu Âu"
        },
        en: {
          tag: "Allosauroid dinosaur",
          subtitle: "The apex predator of the Jurassic",
          intro: "Allosaurus was the dominant terrestrial carnivore of the Jurassic period, reaching nearly 10 meters in length.",
          obs: "Observed alongside human Joe: note its muscular build adapted for cooperative hunting.",
          diet: "Carnivore",
          dietSub: "Sauropods, stegosaurs",
          length: "9.5 metres",
          lengthSub: "Height ~3.2m",
          mass: "2.5–3 tonnes",
          massSub: "Lean and agile",
          loc: "Morrison Formation",
          locSub: "North America & Europe"
        }
      },
      {
        id: "stegosaurus",
        nameVi: "Stegosaurus",
        nameEn: "Stegosaurus",
        periodVi: "Kỷ Jura Muộn",
        periodEn: "Late Jurassic",
        timeScaleVi: "155–150 Ma (Tithonian)",
        timeScaleEn: "155–150 Ma (Tithonian)",
        modelFile: "./assets/models/stegosaurus.glb",
        background: "./assets/backgrounds/jurassic.jpg",
        realLengthMeters: 9.0,
        rotationOffsetY: TARGET_FACING_ANGLE,
        isFlying: false,
        formation: "Hệ tầng Morrison (Wyoming / Colorado)",
        paleoCoords: "36.2° Bắc • 64.9° Tây",
        rockMatrix: "Bùn kết xám ven hồ ngập lụt",
        datingMethod: "152.0 Ma • Đồng vị phóng xạ",
        discoverer: "1877 • Othniel Charles Marsh",
        prompt: "Tranquil Jurassic prehistoric woodland clearing, expansive grassy glade with primitive horsetails and clubmosses, distant misty redwoods, mossy ground with low prehistoric ferns, horizontal eye-level framing, warm gentle daylight, museum quality diorama backdrop, pristine natural atmosphere, no dinosaurs.",
        vi: {
          tag: "Khủng long Thyreophora",
          subtitle: "Hiệp sĩ phiến sừng của Kỷ Jura",
          intro: "Stegosaurus sở hữu hai hàng phiến sừng xương hình thoi dựng đứng dọc sống lưng vươn cao tới 3.8m và bốn gai nhọn chết người (thagomizer) ở chóp đuôi.",
          obs: "Đỉnh phiến sừng cao hơn 3.8m, gấp hơn hai lần chiều cao người Joe.",
          diet: "Thực vật",
          dietSub: "Dương xỉ tầng thấp, rêu",
          length: "9.0 mét",
          lengthSub: "Đỉnh phiến sừng cao 3.8m",
          mass: "4.5–5 tấn",
          massSub: "Vũ khí đuôi thagomizer",
          loc: "Hệ tầng Morrison",
          locSub: "Bắc Mỹ"
        },
        en: {
          tag: "Thyreophoran dinosaur",
          subtitle: "Plated giant of the Late Jurassic",
          intro: "Stegosaurus reached 9 meters in length, armed with prominent dorsal plates and a deadly four-spiked tail club.",
          obs: "The tallest back plates stood nearly 4 meters high, more than double human height.",
          diet: "Herbivore",
          dietSub: "Low ferns, mosses",
          length: "9.0 metres",
          lengthSub: "Plate crest height ~3.8m",
          mass: "4.5–5 tonnes",
          massSub: "Armored herbivore",
          loc: "Morrison Formation",
          locSub: "North America"
        }
      },
      {
        id: "spinosaurus",
        nameVi: "Spinosaurus",
        nameEn: "Spinosaurus",
        periodVi: "Kỷ Phấn Trắng Giữa",
        periodEn: "Mid Cretaceous",
        timeScaleVi: "99–93 Ma (Cenomanian)",
        timeScaleEn: "99–93 Ma (Cenomanian)",
        modelFile: "./assets/models/spinosaurus.glb",
        background: "./assets/backgrounds/cretaceous.jpg",
        realLengthMeters: 14.5,
        rotationOffsetY: TARGET_FACING_ANGLE,
        isFlying: false,
        formation: "Hệ tầng Kem Kem (Morocco & Ai Cập)",
        paleoCoords: "12.8° Bắc • 4.1° Đông",
        rockMatrix: "Trầm tích cửa sông ngập mặn biển Tethys",
        datingMethod: "95.0 Ma • Đồng vị Argon",
        discoverer: "1912 • Ernst Stromer",
        prompt: "Expansive mid-Cretaceous tropical delta river basin in North Africa, wide tranquil freshwater lagoons lined with ancient mangrove roots and giant seed ferns, low shoreline horizon, golden haze sunbeams glistening on calm tidal waters, realistic eye-level museum backdrop, empty foreground shore, 8k resolution, no animals in the image.",
        vi: {
          tag: "Khủng long Bán thủy sinh",
          subtitle: "Thủy quái khổng lồ dài nhất thời tiền sử",
          intro: "Spinosaurus aegyptianus là loài khủng long ăn thịt dài nhất từng tồn tại (14.5m), sở hữu cánh buồm xương cao gần 2m trên lưng và cấu tạo đuôi bơi dẹp chuyên săn cá lớn.",
          obs: "Chiều dài 14.5m của Spinosaurus gấp hơn 8 lần chiều cao người đứng cạnh!",
          diet: "Cá & Thủy sinh",
          dietSub: "Cá đao Mawsonia, cá phổi",
          length: "14.5 mét",
          lengthSub: "Khủng long ăn thịt dài nhất",
          mass: "7.5–9 tấn",
          massSub: "Thích nghi sông nước",
          loc: "Hệ tầng Kem Kem",
          locSub: "Bắc Phi (Morocco & Ai Cập)"
        },
        en: {
          tag: "Spinosaurid dinosaur",
          subtitle: "The semiaquatic river monster",
          intro: "Measuring over 14 meters in length, Spinosaurus is the longest known carnivorous dinosaur, sporting a 1.8m dorsal sail.",
          obs: "Its 14.5-meter body length is over 8 times the height of the human observer.",
          diet: "Piscivore",
          dietSub: "Giant coelacanths, sawfish",
          length: "14.5 metres",
          lengthSub: "Longest predatory dinosaur",
          mass: "7.5–9 tonnes",
          massSub: "Semi-aquatic giant",
          loc: "Kem Kem Beds",
          locSub: "North Africa"
        }
      },
      {
        id: "pterosaur",
        nameVi: "Pterosaur (Dực long bay)",
        nameEn: "Pterosaur",
        periodVi: "Kỷ Phấn Trắng",
        periodEn: "Cretaceous",
        timeScaleVi: "120–66 Ma",
        timeScaleEn: "120–66 Ma",
        modelFile: "./assets/models/pterosaur.glb",
        background: "./assets/backgrounds/cretaceous.jpg",
        realLengthMeters: 6.5,
        rotationOffsetY: -Math.PI / 2 + TARGET_FACING_ANGLE,
        isFlying: true,
        formation: "Hệ tầng Santana (Brazil, Nam Mỹ)",
        paleoCoords: "15.4° Nam • 22.8° Tây",
        rockMatrix: "Đá vôi kết hạch bảo tồn màng cánh",
        datingMethod: "115.0 Ma • Đồng vị Carbon",
        discoverer: "1784 • Cosimo Alessandro Collini",
        prompt: "Majestic high-altitude panoramic view over a prehistoric Cretaceous ocean coastline, dramatic limestone sea cliffs, sweeping turquoise sea with gentle foaming waves below, sunlit cumulus clouds in an expansive blue sky, eye-level aerial horizon, serene primeval atmosphere, highly realistic, no flying reptiles in the sky.",
        vi: {
          tag: "Bò sát bay Tiền sử",
          subtitle: "Chúa tể bầu trời thời khủng long",
          intro: "Pterosaur là loài động vật có xương sống đầu tiên phát triển khả năng bay lượn thực thụ nhờ màng cánh da nối ngón tay thứ tư kéo dài và bộ xương rỗng siêu nhẹ.",
          obs: "Quan sát ở cao độ ngang tầm mắt trên trời: Sải cánh 6.5m của dực long rộng gấp gần bốn lần chiều cao người!",
          diet: "Cá & Động vật nhỏ",
          dietSub: "Săn mồi ven biển",
          length: "Sải cánh 6.5m",
          lengthSub: "Xương khí nén siêu nhẹ",
          mass: "30–50 kg",
          massSub: "Khí động học tuyệt hảo",
          loc: "Toàn cầu",
          locSub: "Vách đá ven biển tiền sử"
        },
        en: {
          tag: "Pterosaur",
          subtitle: "Lord of the Prehistoric Skies",
          intro: "Pterosaurs were the first vertebrates to conquer the skies, soaring on membranous wings supported by an elongated fourth finger.",
          obs: "Its 6.5-meter wingspan is nearly four times human height!",
          diet: "Piscivore",
          dietSub: "Coastal fish, crustaceans",
          length: "Wingspan 6.5m",
          lengthSub: "Pneumatic hollow bones",
          mass: "30–50 kg",
          massSub: "Aerodynamic mastery",
          loc: "Worldwide",
          locSub: "Ancient coastal cliffs"
        }
      },
      {
        id: "ankylosaurus",
        nameVi: "Ankylosaurus",
        nameEn: "Ankylosaurus",
        periodVi: "Kỷ Phấn Trắng Muộn",
        periodEn: "Late Cretaceous",
        timeScaleVi: "68–66 Ma (Maastrichtian)",
        timeScaleEn: "68–66 Ma (Maastrichtian)",
        modelFile: "./assets/models/ankylosaurus.glb",
        background: "./assets/backgrounds/cretaceous.jpg",
        realLengthMeters: 8.0,
        rotationOffsetY: -Math.PI / 2 + TARGET_FACING_ANGLE,
        isFlying: false,
        formation: "Hệ tầng Scollard & Hell Creek (Alberta, Canada)",
        paleoCoords: "55.1° Bắc • 69.4° Tây",
        rockMatrix: "Trầm tích phù sa đồng bằng ven biển",
        datingMethod: "66.5 Ma • Đồng vị Argon",
        discoverer: "1906 • Barnum Brown",
        prompt: "Dense temperate late Cretaceous fern prairie and open woodland, scattered fallen petrified logs, sandstone boulders covered in prehistoric lichen and moss, low scrubby cycads, diffuse overcast morning light filtering through humid canopy, 16:9 eye-level perspective, photorealistic nature backdrop, empty scene without dinosaurs.",
        vi: {
          tag: "Khủng long Giáp Long",
          subtitle: "Cỗ xe tăng bọc thép Kỷ Phấn Trắng",
          intro: "Ankylosaurus magniventris là loài khủng long bọc giáp lớn nhất với những tấm xương gai dày đặc phủ kín lưng và chiếc chùy xương nặng nề có thể đập vỡ xương kẻ thù.",
          obs: "Người Joe đứng cạnh nhìn thấy rõ thân hình bè rộng đồ sộ (rộng tới 2.5m) của cỗ xe tăng sống tiền sử.",
          diet: "Thực vật",
          dietSub: "Cây bụi tầng thấp, quả rụng",
          length: "8.0 mét",
          lengthSub: "Thân rộng 2.5 mét",
          mass: "5–8 tấn",
          massSub: "Chùy đuôi nặng 50kg",
          loc: "Hệ tầng Scollard & Hell Creek",
          locSub: "Bắc Mỹ"
        },
        en: {
          tag: "Ankylosaurid dinosaur",
          subtitle: "Living tank of the Cretaceous",
          intro: "Ankylosaurus was heavily armored with thick osteoderms and possessed a heavy bone club at the tip of its tail.",
          obs: "Observe its extraordinary wide-barrel body width of 2.5 meters.",
          diet: "Herbivore",
          dietSub: "Low shrubs, fallen fruits",
          length: "8.0 metres",
          lengthSub: "Width ~2.5 metres",
          mass: "5–8 tonnes",
          massSub: "Heavy tail club",
          loc: "Hell Creek Formation",
          locSub: "North America"
        }
      },
      {
        id: "cryolophosaurus",
        nameVi: "Cryolophosaurus",
        nameEn: "Cryolophosaurus",
        periodVi: "Kỷ Jura Sớm",
        periodEn: "Early Jurassic",
        timeScaleVi: "194–188 Ma (Pliensbachian)",
        timeScaleEn: "194–188 Ma (Pliensbachian)",
        modelFile: "./assets/models/cryolophosaurus.glb",
        background: "./assets/backgrounds/jurassic.jpg",
        realLengthMeters: 6.5,
        rotationOffsetY: -Math.PI / 2 + TARGET_FACING_ANGLE,
        isFlying: false,
        formation: "Hệ tầng Hanson (Transantarctic, Nam Cực)",
        paleoCoords: "64.2° Nam • 120.5° Đông",
        rockMatrix: "Trầm tích tro núi lửa và sa thạch ôn đới",
        datingMethod: "190.0 Ma • Đồng vị Argon",
        discoverer: "1991 • William R. Hammer",
        prompt: "Early Jurassic temperate polar rainforest of prehistoric Antarctica, lush moss-covered Podocarp and Ginkgo groves, mountain slopes shrouded in cool glacial mist, crystal-clear cold mountain stream with damp gravel banks, soft pale diffused sunlight, 16:9 horizontal eye-level framing, serene primeval diorama, no creatures.",
        vi: {
          tag: "Khủng long Ăn thịt Nam Cực",
          subtitle: "Dị long mào băng của Kỷ Jura Sớm",
          intro: "Cryolophosaurus ellioti là loài khủng long ăn thịt đầu tiên được khai quật tại châu Nam Cực, sở hữu chiếc mào xương hình quạt độc đáo vắt ngang trán.",
          obs: "Chiếc mào hình lược độc nhất vô nhị dùng để phô diễn thị giác thu hút bạn tình.",
          diet: "Ăn thịt",
          dietSub: "Khủng long chân thằn lằn nguyên thủy",
          length: "6.5 mét",
          lengthSub: "Cao 2.2m tại hông",
          mass: "500–600 kg",
          massSub: "Mào xương Elvis Presley",
          loc: "Hệ tầng Hanson",
          locSub: "Châu Nam Cực (Transantarctic)"
        },
        en: {
          tag: "Antarctic Theropod",
          subtitle: "The frozen crested lizard",
          intro: "Cryolophosaurus was the first carnivorous dinosaur discovered in Antarctica, sporting a distinctive Spanish comb-like cranial crest.",
          obs: "Examine the unique forward-facing crest used for visual display.",
          diet: "Carnivore",
          dietSub: "Prosauropods",
          length: "6.5 metres",
          lengthSub: "Hip height ~2.2m",
          mass: "500–600 kg",
          massSub: "Elvis crest dinosaur",
          loc: "Hanson Formation",
          locSub: "Antarctica"
        }
      },
      {
        id: "velociraptor",
        nameVi: "Velociraptor",
        nameEn: "Velociraptor",
        periodVi: "Kỷ Phấn Trắng Muộn",
        periodEn: "Late Cretaceous",
        timeScaleVi: "75–71 Ma (Campanian)",
        timeScaleEn: "75–71 Ma (Campanian)",
        modelFile: "./assets/models/velociraptor.glb",
        background: "./assets/backgrounds/cretaceous.jpg",
        realLengthMeters: 2.0,
        rotationOffsetY: Math.PI / 2 + TARGET_FACING_ANGLE,
        isFlying: false,
        formation: "Hệ tầng Djadochta (Sa mạc Gobi, Mông Cổ)",
        paleoCoords: "43.1° Bắc • 104.2° Đông",
        rockMatrix: "Cát sa mạc hóa đá đỏ hạt mịn",
        datingMethod: "72.0 Ma • Địa từ học",
        discoverer: "1923 • Peter Kaisen (AMNH)",
        prompt: "Vast arid Late Cretaceous red sandstone dunes and dry desert oasis, ancient stunted desert shrubs and dry scrubland, weathered badlands formations beneath a blazing arid sky, heat haze on the red sandy horizon, eye-level framing, cinematic photorealistic diorama backdrop, empty desert with no dinosaurs.",
        vi: {
          tag: "Khủng long Dromaeosauridae",
          subtitle: "Thợ săn lông vũ tốc độ cao Sa mạc Gobi",
          intro: "Velociraptor ngoài đời thực chỉ cao khoảng 0.5m, phủ đầy lông vũ và sở hữu móng vuốt hình liềm sắc bén dài 6.5cm ở ngón chân thứ hai để ghì chặt con mồi.",
          obs: "Người Joe (1.75m) cao hơn gấp ba lần Velociraptor! Chiều cao thực tế của loài này chỉ ngang bắp chân người lớn.",
          diet: "Ăn thịt",
          dietSub: "Protoceratops non, thằn lằn",
          length: "2.0 mét",
          lengthSub: "Cao 0.5m tại hông",
          mass: "15–18 kg",
          massSub: "Nhỏ bé nhưng cực kỳ nhanh nhẹn",
          loc: "Hệ tầng Djadochta",
          locSub: "Sa mạc Gobi (Mông Cổ)"
        },
        en: {
          tag: "Dromaeosaurid dinosaur",
          subtitle: "Feathered swift hunter of the Gobi",
          intro: "Unlike cinematic depictions, the real Velociraptor was turkey-sized, feathered, with a specialized killing sickle claw.",
          obs: "The 1.75m human is over three times taller than a real Velociraptor!",
          diet: "Carnivore",
          dietSub: "Protoceratops, lizards",
          length: "2.0 metres",
          lengthSub: "Hip height ~0.5m",
          mass: "15–18 kg",
          massSub: "Fast and agile hunter",
          loc: "Djadochta Formation",
          locSub: "Gobi Desert (Mongolia)"
        }
      },
      {
        id: "gorgosaurus",
        nameVi: "Gorgosaurus",
        nameEn: "Gorgosaurus",
        periodVi: "Kỷ Phấn Trắng Muộn",
        periodEn: "Late Cretaceous",
        timeScaleVi: "76–75 Ma (Campanian)",
        timeScaleEn: "76–75 Ma (Campanian)",
        modelFile: "./assets/models/gorgosaurus.glb",
        background: "./assets/backgrounds/cretaceous.jpg",
        realLengthMeters: 8.5,
        rotationOffsetY: TARGET_FACING_ANGLE,
        isFlying: false,
        formation: "Công viên Khủng long Alberta (Canada)",
        paleoCoords: "54.8° Bắc • 70.2° Tây",
        rockMatrix: "Trầm tích sa thạch đồng bằng duyên hải",
        datingMethod: "75.5 Ma • Đồng vị Argon",
        discoverer: "1913 • Lawrence Lambe",
        prompt: "Late Cretaceous river delta swamp and coastal forest, meandering muddy tributaries, towering Metasequoia and fern glades, dramatic overcast storm clouds parting to reveal golden sunlight, wide open foreground shore, 16:9 museum backdrop framing, hyper-realistic, no dinosaurs in view.",
        vi: {
          tag: "Khủng long Tyrannosauridae",
          subtitle: "Bạo chúa phương Bắc sải bước tốc độ",
          intro: "Gorgosaurus là họ hàng tiền thân thon thả và nhanh nhẹn của T-Rex, chuyên săn đuổi các loài khủng long mỏ vịt và khủng long có sừng ven các đồng bằng duyên hải Bắc Mỹ.",
          obs: "Người Joe đứng đối chứng nhìn thấy rõ cấu trúc chi sau thanh thoát, tối ưu hóa cho những cú bứt tốc săn mồi kinh hoàng.",
          diet: "Ăn thịt",
          dietSub: "Hadrosauridae, Centrosaurus",
          length: "8.5 mét",
          lengthSub: "Cao 2.8m tại hông",
          mass: "2.5–3 tấn",
          massSub: "Tốc độ chạy vượt trội T-Rex",
          loc: "Công viên Khủng long Alberta",
          locSub: "Canada & Hoa Kỳ"
        },
        en: {
          tag: "Tyrannosaurid dinosaur",
          subtitle: "The fleet-footed northern tyrant",
          intro: "Gorgosaurus was a sleeker, faster tyrannosaurid that dominated western Canada prior to the emergence of T-Rex.",
          obs: "Notice its elongated limb proportions built for rapid pursuit.",
          diet: "Carnivore",
          dietSub: "Duck-billed dinosaurs",
          length: "8.5 metres",
          lengthSub: "Hip height ~2.8m",
          mass: "2.5–3 tonnes",
          massSub: "High sprint velocity",
          loc: "Dinosaur Park Formation",
          locSub: "Canada & USA"
        }
      },
      {
        id: "mosasaurus",
        nameVi: "Mosasaurus",
        nameEn: "Mosasaurus",
        periodVi: "Kỷ Phấn Trắng Muộn",
        periodEn: "Late Cretaceous",
        timeScaleVi: "82–66 Ma (Maastrichtian)",
        timeScaleEn: "82–66 Ma (Maastrichtian)",
        modelFile: "./assets/models/mosasaurus.glb",
        background: "./assets/backgrounds/cretaceous.jpg",
        realLengthMeters: 14.0,
        rotationOffsetY: TARGET_FACING_ANGLE,
        isFlying: false,
        formation: "Western Interior Seaway (Bắc Mỹ / Hà Lan)",
        paleoCoords: "45.0° Bắc • 30.0° Tây",
        rockMatrix: "Đá phấn biển nông Maastricht",
        datingMethod: "66.0 Ma • Sinh địa tầng Vi cổ sinh",
        discoverer: "1764 • Johann Leonard Hoffmann",
        prompt: "Underwater panoramic view of a shallow warm Cretaceous inland sea, golden sun caustic patterns dancing across white seabed sands, ancient coral pinnacles and towering kelp-like prehistoric seaweeds, clear turquoise-azure waters with sunbeams descending from surface, 16:9 horizontal perspective, peaceful marine backdrop, no sea monsters.",
        vi: {
          tag: "Bò sát biển Mosasauroidea",
          subtitle: "Thương long chúa tể đại dương Kỷ Phấn Trắng",
          intro: "Mosasaurus là loài thằn lằn biển khổng lồ thống trị các đại dương kỷ Phấn Trắng với chiều dài 14m, bốn vây chèo mạnh mẽ và chiếc đuôi vây hình cá mập xé nước.",
          obs: "Thân hình 14m của Mosasaurus đồ sộ vượt bậc so với người Joe 1.75m đứng cạnh!",
          diet: "Thịt biển",
          dietSub: "Cá mập, rùa biển, thằn lằn đầu rắn",
          length: "14.0 mét",
          lengthSub: "Thủy quái biển đỉnh cao",
          mass: "10–14 tấn",
          massSub: "Hàm phụ nuốt chửng con mồi",
          loc: "Western Interior Seaway",
          locSub: "Đại dương toàn cầu"
        },
        en: {
          tag: "Marine Squamate",
          subtitle: "The apex predator of the Cretaceous oceans",
          intro: "Mosasaurus was a massive apex marine lizard reaching up to 14 meters, wielding a powerful shark-like tail fluke.",
          obs: "Compare the 14-meter marine leviathan to the human observer.",
          diet: "Piscivore / Carnivore",
          dietSub: "Ammonites, sharks, plesiosaurs",
          length: "14.0 metres",
          lengthSub: "Apex oceanic carnivore",
          mass: "10–14 tonnes",
          massSub: "Pterygoid secondary jaws",
          loc: "Global Mesozoic Seas",
          locSub: "Worldwide"
        }
      },
      {
        id: "triceratops_skeleton",
        nameVi: "Triceratops (Khung xương)",
        nameEn: "Triceratops (Skeleton)",
        periodVi: "Bảo tàng Hoàng gia",
        periodEn: "Museum Exhibition",
        timeScaleVi: "Bản quét 3D Giải phẫu",
        timeScaleEn: "3D Anatomical Scan",
        modelFile: "./assets/models/triceratops_skeleton.glb",
        background: "./assets/backgrounds/cretaceous.jpg",
        realLengthMeters: 8.5,
        rotationOffsetY: -Math.PI / 2 + TARGET_FACING_ANGLE,
        isFlying: false,
        formation: "Phòng Trưng Bày Quốc Tế (Bảo tàng Cổ sinh)",
        paleoCoords: "Bản quét Smithsonian Open Access",
        rockMatrix: "Mẫu vật lắp dựng tiêu chuẩn Articulated Mount",
        datingMethod: "Bản quét 3D laser giải phẫu",
        discoverer: "Bộ sưu tập Cổ sinh vật học Hoàng gia",
        prompt: "Grand prestigious natural history museum exhibition hall, polished dark marble platform floor with subtle reflection, warm museum architectural spotlights illuminating the center stage, neoclassical architectural columns and arched windows in soft background bokeh, calm editorial atmosphere, museum diorama background, no other exhibits.",
        vi: {
          tag: "Khảo cổ học Hóa thạch",
          subtitle: "Khung xương giải phẫu hoàn chỉnh trong bảo tàng",
          intro: "Bản quét 3D bộ xương hóa thạch Triceratops prorsus tái hiện chi tiết từng đốt sống, xương sườn và cấu trúc hộp sọ rỗng đồ sộ theo tiêu chuẩn bảo tàng quốc tế.",
          obs: "Người Joe đứng cạnh nhìn thấy toàn bộ cấu trúc xương sọ diềm cổ 2.5m và bộ khung nâng đỡ thể trọng 10 tấn.",
          diet: "Tiêu bản hóa thạch",
          dietSub: "Bảo tàng Lịch sử Tự nhiên",
          length: "8.5 mét",
          lengthSub: "Khung xương giải phẫu 1:1",
          mass: "Hóa thạch đá",
          massSub: "Bộ xương hoàn chỉnh",
          loc: "Phòng Trưng bày Quốc tế",
          locSub: "Bảo tàng Cổ sinh vật học"
        },
        en: {
          tag: "Fossil Anatomy",
          subtitle: "Complete museum-mounted fossil skeleton",
          intro: "High-resolution anatomical 3D scan of an articulated Triceratops prorsus fossil mount in international museum posture.",
          obs: "Examine the 1:1 bone architecture alongside human Joe.",
          diet: "Fossil Specimen",
          dietSub: "Natural History Museum",
          length: "8.5 metres",
          lengthSub: "1:1 Anatomical frame",
          mass: "Petrified fossil",
          massSub: "Articulated skeleton",
          loc: "Museum Exhibition Hall",
          locSub: "Paleontological Collection"
        }
      }
    ];

    let currentExhibitIndex = 0;
    let currentExhibit = EXHIBITS[currentExhibitIndex];
    let currentLang = localStorage.getItem('museum_lang') || 'vi';

    /* ==========================================================================
       2. THREE.JS VIEWER ENGINE: ĐẶC KHỐI, BÓNG ĐỔ, TỶ LỆ 1:1, CỐT 0.00
       ========================================================================== */
    const container = document.getElementById('webgl-canvas-wrap');
    let scene, camera, renderer, controls;
    let mainDinoGroup = new THREE.Group();
    let humanGroup = new THREE.Group();
    let groundRulerLine = null;
    let rawHumanScene = null;
    let shadowReceiverPlane = null;
    let keyLight, hemiLight, rimLight;
    let mixer = null;
    const clock = new THREE.Clock();
    let isHumanVisible = false;

    // THÔNG SỐ VỊ TRÍ & KHOẢNG CÁCH NGƯỜI JOE
    let currentHumanDist = 10.0;
    let currentHumanPosDir = "right";

    // THÔNG SỐ BÓNG ĐỔ & MẶT TRỜI
    let currentSunAzimuth = 135;
    let currentSunElevation = 50;
    let currentShadowBlur = 8.0;
    let currentShadowOpacity = 0.52;

    // THÔNG SỐ BÓC TÁCH GIẢI PHẪU X-RAY (0% - 100%)
    let currentPeelPercent = 0;
    let currentPeelMode = "living"; // "living", "skeleton", "xray"

    // Camera presets đặt theo tầm mắt quan sát
    const CAMERA_PRESETS = {
      FULL: { pos: new THREE.Vector3(7.5, 2.2, 8.5), target: new THREE.Vector3(0, 1.8, 0) },
      HUMAN_SCALE: { pos: new THREE.Vector3(12.0, 3.2, 14.5), target: new THREE.Vector3(3.5, 1.8, 0.8) }
    };
    let targetCamPos = CAMERA_PRESETS.FULL.pos.clone();
    let targetCamLookAt = CAMERA_PRESETS.FULL.target.clone();
    let isTransitioningCam = false;

    function init3D() {
      scene = new THREE.Scene();
      scene.add(mainDinoGroup);
      scene.add(humanGroup);

      const aspect = container.clientWidth / container.clientHeight;
      camera = new THREE.PerspectiveCamera(36, aspect, 0.1, 150);
      camera.position.copy(CAMERA_PRESETS.FULL.pos);

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.25;
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      container.appendChild(renderer.domElement);

      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.maxPolarAngle = Math.PI / 2 + 0.02;
      controls.minDistance = 1.5;
      controls.maxDistance = 50.0;
      controls.target.copy(CAMERA_PRESETS.FULL.target);
      controls.update();

      container.addEventListener('wheel', (e) => { e.preventDefault(); }, { passive: false });

      // Ánh sáng môi trường
      hemiLight = new THREE.HemisphereLight(0xffffff, 0xb8b09d, 1.15);
      hemiLight.position.set(0, 30, 0);
      scene.add(hemiLight);

      keyLight = new THREE.DirectionalLight(0xfff5dd, 2.0);
      keyLight.castShadow = true;
      keyLight.shadow.mapSize.width = 1024;
      keyLight.shadow.mapSize.height = 1024;
      keyLight.shadow.camera.near = 0.5;
      keyLight.shadow.camera.far = 50;
      keyLight.shadow.bias = -0.0006;
      keyLight.shadow.radius = currentShadowBlur;
      const d = 18;
      keyLight.shadow.camera.left = -d;
      keyLight.shadow.camera.right = d;
      keyLight.shadow.camera.top = d;
      keyLight.shadow.camera.bottom = -d;
      scene.add(keyLight);
      scene.add(keyLight.target);

      rimLight = new THREE.DirectionalLight(0xbad2c8, 0.85);
      rimLight.position.set(-10, 10, -10);
      scene.add(rimLight);

      updateSunDirection();

      
    function createSoftContactShadowTexture() {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 512;
      const ctx = canvas.getContext('2d');
      const gradient = ctx.createRadialGradient(256, 256, 0, 256, 256, 256);
      gradient.addColorStop(0, 'rgba(15, 12, 10, 0.72)');
      gradient.addColorStop(0.25, 'rgba(15, 12, 10, 0.50)');
      gradient.addColorStop(0.55, 'rgba(15, 12, 10, 0.22)');
      gradient.addColorStop(0.80, 'rgba(15, 12, 10, 0.06)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 512, 512);
      const texture = new THREE.CanvasTexture(canvas);
      return texture;
    }

      // Mặt phẳng bóng đổ mặt đất cốt Y = 0.000
      const groundGeo = new THREE.PlaneGeometry(80, 80);
      const shadowMat = new THREE.ShadowMaterial({ opacity: currentShadowOpacity });
      shadowReceiverPlane = new THREE.Mesh(groundGeo, shadowMat);
      shadowReceiverPlane.rotation.x = -Math.PI / 2;
      shadowReceiverPlane.position.y = 0.000;
      shadowReceiverPlane.receiveShadow = true;
      scene.add(shadowReceiverPlane);
      const softContactGeo = new THREE.PlaneGeometry(1, 1);
      softContactGeo.rotateX(-Math.PI / 2);
      const softContactMat = new THREE.MeshBasicMaterial({
        map: createSoftContactShadowTexture(),
        transparent: true,
        opacity: currentShadowOpacity * 0.85,
        depthWrite: false
      });
      softContactShadowMesh = new THREE.Mesh(softContactGeo, softContactMat);
      softContactShadowMesh.position.y = 0.012;
      scene.add(softContactShadowMesh);


      initGroundRuler();
      loadHumanJoeModel();
      window.addEventListener('resize', onWindowResize);
      requestAnimationFrame(renderLoop);
      renderDinoRail();
      loadExhibit(currentExhibit);
    }

    function initGroundRuler() {
      const rulerMat = new THREE.LineDashedMaterial({
        color: 0xc89d47,
        dashSize: 0.4,
        gapSize: 0.25,
        linewidth: 2
      });
      const points = [
        new THREE.Vector3(0, 0.015, 0),
        new THREE.Vector3(10.0, 0.015, 0)
      ];
      const geom = new THREE.BufferGeometry().setFromPoints(points);
      groundRulerLine = new THREE.Line(geom, rulerMat);
      groundRulerLine.computeLineDistances();
      groundRulerLine.visible = false;
      scene.add(groundRulerLine);
    }

    /* ==========================================================================
       3. CẬP NHẬT TỌA ĐỘ MẶT TRỜI & BÓNG ĐỔ (BÓNG ĐỨNG HOẶC TRẢI DÀI, 360 ĐỘ)
       ========================================================================== */
    function updateSunDirection() {
      if (!keyLight) return;
      const radAzimuth = THREE.MathUtils.degToRad(currentSunAzimuth);
      const radElevation = THREE.MathUtils.degToRad(currentSunElevation);
      const radius = 25.0;

      const y = radius * Math.sin(radElevation);
      const groundDist = radius * Math.cos(radElevation);
      const x = groundDist * Math.sin(radAzimuth);
      const z = groundDist * Math.cos(radAzimuth);

      keyLight.position.set(x, y, z);
      keyLight.target.position.set(0, 1.2, 0);
      keyLight.updateMatrixWorld();

      const needle = document.getElementById('compass-needle');
      if (needle) {
        needle.style.transform = `rotate(${currentSunAzimuth}deg)`;
      }
    }

    /* ==========================================================================
       4. TẢI MÔ HÌNH NGƯỜI JOE & ĐỊNH VỊ ĐỘNG (KHOẢNG CÁCH + 4 VỊ TRÍ)
       ========================================================================== */
    function loadHumanJoeModel() {
      const loader = new GLTFLoader();
      loader.load('./assets/models/joe_human.glb', (gltf) => {
        rawHumanScene = gltf.scene;

        rawHumanScene.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            if (child.material) {
              child.material.transparent = false;
              child.material.opacity = 1.0;
              child.material.depthWrite = true;
              child.material.depthTest = true;
            }
          }
        });

        rawHumanScene.position.set(0, 0, 0);
        rawHumanScene.scale.setScalar(1);
        rawHumanScene.updateMatrixWorld(true);

        const box = new THREE.Box3().setFromObject(rawHumanScene);
        const originalHeight = box.max.y - box.min.y;
        const targetHeightMeters = 1.75;
        const humanScale = targetHeightMeters / originalHeight;
        rawHumanScene.scale.setScalar(humanScale);
        rawHumanScene.updateMatrixWorld(true);

        const updatedBox = new THREE.Box3().setFromObject(rawHumanScene);
        rawHumanScene.position.y = -updatedBox.min.y;

        rawHumanScene.rotation.y = -Math.PI / 2 + TARGET_FACING_ANGLE;

        humanGroup.add(rawHumanScene);
        humanGroup.visible = isHumanVisible;

        updateHumanRelativePlacement();
      });
    }

    function updateHumanRelativePlacement() {
      if (!humanGroup) return;

      const theta = TARGET_FACING_ANGLE;
      const D = currentHumanDist;

      const uFront = new THREE.Vector2(Math.cos(theta), -Math.sin(theta));
      const uRight = new THREE.Vector2(-Math.sin(theta), -Math.cos(theta));
      const uLeft = new THREE.Vector2(Math.sin(theta), Math.cos(theta));
      const uBehind = new THREE.Vector2(-Math.cos(theta), Math.sin(theta));

      let targetPos2D = new THREE.Vector2();
      let posNameVi = "Bên phải";
      let posNameEn = "Right side";

      if (currentHumanPosDir === "right") {
        targetPos2D.copy(uRight).multiplyScalar(D);
        posNameVi = "Bên phải"; posNameEn = "Right side";
      } else if (currentHumanPosDir === "left") {
        targetPos2D.copy(uLeft).multiplyScalar(D);
        posNameVi = "Bên trái"; posNameEn = "Left side";
      } else if (currentHumanPosDir === "front") {
        targetPos2D.copy(uFront).multiplyScalar(D);
        posNameVi = "Phía trước"; posNameEn = "Front";
      } else if (currentHumanPosDir === "behind") {
        targetPos2D.copy(uBehind).multiplyScalar(D);
        posNameVi = "Đằng sau"; posNameEn = "Behind";
      }

      const hX = targetPos2D.x;
      const hZ = targetPos2D.y;

      humanGroup.position.set(hX, 0, hZ);

      if (groundRulerLine) {
        const positions = groundRulerLine.geometry.attributes.position.array;
        positions[0] = 0; positions[1] = 0.015; positions[2] = 0;
        positions[3] = hX; positions[4] = 0.015; positions[5] = hZ;
        groundRulerLine.geometry.attributes.position.needsUpdate = true;
        groundRulerLine.computeLineDistances();
        groundRulerLine.visible = isHumanVisible;
      }

      const badge = document.getElementById('ruler-badge');
      const badgeText = document.getElementById('ruler-badge-text');
      if (badge && badgeText) {
        badge.style.display = isHumanVisible ? 'flex' : 'none';
        const pName = currentLang === 'vi' ? posNameVi : posNameEn;
        badgeText.innerHTML = `Khoảng cách: <strong>${D.toFixed(1)} mét</strong> (${pName}) • Tỉ lệ người 1:1`;
      }
    }

    function onWindowResize() {
      if (!camera || !renderer || !container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    }

    /* ==========================================================================
       5. TẢI MÔ HÌNH KHỦNG LONG: ĐẶC KHỐI, SCALE 1:1, CỐT 0.00, CÙNG 1 HƯỚNG NHÌN
       ========================================================================== */
    const stageStatus = document.getElementById('stage-status');
    const progressBar = document.getElementById('status-progress-bar');

    function loadExhibit(exhibit) {
      currentExhibit = exhibit;
      updateUIContent();

      document.getElementById('stage-bg-layer').style.backgroundImage = `url('${exhibit.background}')`;

      stageStatus.classList.remove('hidden');
      progressBar.style.width = '20%';

      while (mainDinoGroup.children.length > 0) {
        const obj = mainDinoGroup.children[0];
        mainDinoGroup.remove(obj);
      }
      if (mixer) {
        mixer.stopAllAction();
        mixer.uncacheRoot(mixer.getRoot());
      }
      mixer = null;

      const loader = new GLTFLoader();
      loader.setMeshoptDecoder(MeshoptDecoder);

      // Nếu đang ở chế độ Skeleton và loài có skeletonFile thì nạp skeletonFile
      let targetFile = exhibit.modelFile;
      if (currentPeelMode === "skeleton" && exhibit.skeletonFile) {
        targetFile = exhibit.skeletonFile;
      }

      loader.load(
        targetFile,
        (gltf) => {
          const model = gltf.scene;

          model.traverse((child) => {
            if (child.isMesh) {
              child.castShadow = true;
              child.receiveShadow = true;
              if (child.material) {
                // Áp dụng bóc tách X-Ray nếu slider > 0
                if (currentPeelPercent > 0 || currentPeelMode === "xray") {
                  const factor = currentPeelMode === "xray" ? 0.45 : (1.0 - (currentPeelPercent / 100) * 0.7);
                  child.material.transparent = true;
                  child.material.opacity = factor;
                  child.material.wireframe = currentPeelPercent > 60;
                } else {
                  child.material.transparent = false;
                  child.material.opacity = 1.0;
                  child.material.wireframe = false;
                }
                child.material.depthWrite = true;
                child.material.depthTest = true;
                if (child.material.color) child.material.color.setHex(0xffffff);
                if (child.material.emissive) child.material.emissive.setHex(0x000000);
                child.material.roughness = Math.min(Math.max(child.material.roughness || 0.65, 0.4), 0.8);
                child.material.metalness = Math.min(child.material.metalness || 0.05, 0.2);
                child.material.needsUpdate = true;
              }
            }
          });

          model.position.set(0, 0, 0);
          model.scale.setScalar(1);
          model.rotation.set(0, exhibit.rotationOffsetY, 0);
          model.updateMatrixWorld(true);

          let box = new THREE.Box3().setFromObject(model);
          let size = new THREE.Vector3();
          box.getSize(size);
          const rawLength = Math.max(size.x, size.z);
          const targetMeters = exhibit.realLengthMeters;
          const scaleFactor = targetMeters / rawLength;
          model.scale.setScalar(scaleFactor);
          model.updateMatrixWorld(true);

          box = new THREE.Box3().setFromObject(model);
          let center = new THREE.Vector3();
          box.getCenter(center);

          model.position.x = -center.x;
          model.position.z = -center.z;

          if (exhibit.isFlying) {
            model.position.y = 5.5;
            shadowReceiverPlane.visible = false;
          } else {
            model.position.y = -box.min.y;
            shadowReceiverPlane.visible = true;
          }
          model.updateMatrixWorld(true);

          mainDinoGroup.add(model);

          const finalBox = new THREE.Box3().setFromObject(model);
          const finalSize = new THREE.Vector3();
          finalBox.getSize(finalSize);
          const finalCenter = new THREE.Vector3();
          finalBox.getCenter(finalCenter);

          // Cập nhật quy mô bóng tiếp xúc mềm mại dưới chân
          if (softContactShadowMesh) {
            const baseW = Math.max(finalSize.x * 1.35, 2.5);
            const baseL = Math.max(finalSize.z * 1.35, 3.5);
            softContactShadowMesh.userData.baseW = baseW;
            softContactShadowMesh.userData.baseL = baseL;
            const factor = 1.0 + (currentShadowBlur - 1.0) * 0.04;
            softContactShadowMesh.scale.set(baseW * factor, 1, baseL * factor);
            softContactShadowMesh.position.set(0, 0.012, 0);
            softContactShadowMesh.visible = !exhibit.isFlying;
          }

          // TỰ ĐỘNG CÂN CHỈNH CAMERA BAO TRỌN FULL BODY (HEAD-TO-TAIL FIT):
          const maxDim = Math.max(finalSize.x, finalSize.y, finalSize.z);
          const vFov = camera.fov * (Math.PI / 180);
          let camDist = (maxDim / 2) / Math.tan(vFov / 2);
          camDist = Math.max(camDist * 1.45, 6.0); // 45% lề an toàn để view toàn thân cực kỳ thoáng mắt

          const targetY = exhibit.isFlying ? 5.5 : finalCenter.y;
          CAMERA_PRESETS.FULL.target.set(0, targetY, 0);

          controls.target.copy(CAMERA_PRESETS.FULL.target);

          // Đặt góc nhìn phối cảnh điện ảnh 3/4 kinh điển
          const viewAngle = 0.52;
          const camX = Math.sin(viewAngle) * camDist * 0.95;
          const camY = targetY + finalSize.y * 0.22 + camDist * 0.15;
          const camZ = Math.cos(viewAngle) * camDist * 0.95;

          CAMERA_PRESETS.FULL.position.set(camX, camY, camZ);
          camera.position.set(camX, camY, camZ);
          controls.minDistance = 1.5;
          controls.maxDistance = Math.max(camDist * 3.5, 65.0);
          controls.update();

          if (gltf.animations && gltf.animations.length > 0) {
            mixer = new THREE.AnimationMixer(model);
            const action = mixer.clipAction(gltf.animations[0]);
            action.play();
          }

          progressBar.style.width = '100%';
          setTimeout(() => { stageStatus.classList.add('hidden'); }, 200);
        },
        (xhr) => {
          if (xhr.lengthComputable) {
            const pct = Math.round((xhr.loaded / xhr.total) * 100);
            progressBar.style.width = pct + '%';
          }
        },
        (error) => {
          console.error("Lỗi nạp mô hình:", error);
          stageStatus.classList.add('hidden');
        }
      );
    }

    /* ==========================================================================
       6. SỰ KIỆN POPOVER BÓC TÁCH GIẢI PHẪU & NGƯỜI & BÓNG ĐỔ
       ========================================================================== */
    const peelerPopover = document.getElementById('peeler-popover');
    const humanPopover = document.getElementById('human-popover');
    const shadowPopover = document.getElementById('shadow-popover');

    document.getElementById('btn-open-peeler-tuner').addEventListener('click', () => {
      peelerPopover.classList.toggle('open');
      humanPopover.classList.remove('open');
      shadowPopover.classList.remove('open');
    });
    document.getElementById('close-peeler-popover').addEventListener('click', () => {
      peelerPopover.classList.remove('open');
    });

    document.getElementById('btn-open-human-tuner').addEventListener('click', () => {
      humanPopover.classList.toggle('open');
      peelerPopover.classList.remove('open');
      shadowPopover.classList.remove('open');
    });
    document.getElementById('close-human-popover').addEventListener('click', () => {
      humanPopover.classList.remove('open');
    });

    document.getElementById('btn-open-shadow-tuner').addEventListener('click', () => {
      shadowPopover.classList.toggle('open');
      peelerPopover.classList.remove('open');
      humanPopover.classList.remove('open');
    });
    document.getElementById('close-shadow-popover').addEventListener('click', () => {
      shadowPopover.classList.remove('open');
    });

    // Slider bóc tách X-Ray
    const sliderPeelXray = document.getElementById('slider-peel-xray');
    const lblPeelVal = document.getElementById('lbl-peel-val');
    sliderPeelXray.addEventListener('input', (e) => {
      currentPeelPercent = parseInt(e.target.value);
      if (currentPeelPercent === 0) {
        lblPeelVal.textContent = "0% (Đặc khối)";
      } else if (currentPeelPercent >= 80) {
        lblPeelVal.textContent = `${currentPeelPercent}% (Lộ khung xương)`;
      } else {
        lblPeelVal.textContent = `${currentPeelPercent}% (Bán trong suốt)`;
      }
      applyPeelingToScene();
    });

    document.getElementById('btn-layer-living').addEventListener('click', () => {
      currentPeelMode = "living";
      currentPeelPercent = 0;
      sliderPeelXray.value = 0;
      lblPeelVal.textContent = "0% (Đặc khối)";
      setActivePeelBtn('btn-layer-living');
      loadExhibit(currentExhibit);
    });
    document.getElementById('btn-layer-skeleton').addEventListener('click', () => {
      currentPeelMode = "skeleton";
      currentPeelPercent = 100;
      sliderPeelXray.value = 100;
      lblPeelVal.textContent = "100% (Khung xương)";
      setActivePeelBtn('btn-layer-skeleton');
      loadExhibit(currentExhibit);
    });
    document.getElementById('btn-layer-xray').addEventListener('click', () => {
      currentPeelMode = "xray";
      currentPeelPercent = 50;
      sliderPeelXray.value = 50;
      lblPeelVal.textContent = "50% (Hologram X-Ray)";
      setActivePeelBtn('btn-layer-xray');
      applyPeelingToScene();
    });

    function setActivePeelBtn(id) {
      document.querySelectorAll('#btn-layer-living, #btn-layer-skeleton, #btn-layer-xray').forEach(b => b.classList.remove('active'));
      document.getElementById(id).classList.add('active');
    }

    function applyPeelingToScene() {
      mainDinoGroup.traverse((child) => {
        if (child.isMesh && child.material) {
          if (currentPeelPercent === 0) {
            child.material.transparent = false;
            child.material.opacity = 1.0;
            child.material.wireframe = false;
          } else {
            child.material.transparent = true;
            child.material.opacity = Math.max(0.18, 1.0 - (currentPeelPercent / 100) * 0.8);
            child.material.wireframe = currentPeelPercent > 65;
          }
          child.material.needsUpdate = true;
        }
      });
    }

    // Slider khoảng cách người
    const sliderHumanDist = document.getElementById('slider-human-dist');
    const lblHumanDistVal = document.getElementById('lbl-human-dist-val');
    sliderHumanDist.addEventListener('input', (e) => {
      currentHumanDist = parseFloat(e.target.value);
      lblHumanDistVal.textContent = `${currentHumanDist.toFixed(1)} mét`;
      document.querySelectorAll('[data-hdist]').forEach(b => {
        b.classList.toggle('active', parseFloat(b.dataset.hdist) === currentHumanDist);
      });
      updateHumanRelativePlacement();
    });

    document.querySelectorAll('[data-hdist]').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('[data-hdist]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentHumanDist = parseFloat(btn.dataset.hdist);
        sliderHumanDist.value = currentHumanDist;
        lblHumanDistVal.textContent = `${currentHumanDist.toFixed(1)} mét`;
        updateHumanRelativePlacement();
      });
    });

    const lblHumanPosVal = document.getElementById('lbl-human-pos-val');
    document.querySelectorAll('[data-hpos]').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('[data-hpos]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentHumanPosDir = btn.dataset.hpos;
        lblHumanPosVal.textContent = btn.textContent.replace(/[👉👈⬆️⬇️]/g, '').trim();
        updateHumanRelativePlacement();
      });
    });

    // Slider độ mờ biên bóng đổ
    const sliderShadowBlur = document.getElementById('slider-shadow-blur');
    const lblShadowBlurVal = document.getElementById('lbl-shadow-blur-val');
    sliderShadowBlur.addEventListener('input', (e) => {
      currentShadowBlur = parseFloat(e.target.value);
      lblShadowBlurVal.textContent = currentShadowBlur.toFixed(1);
      if (keyLight) keyLight.shadow.radius = currentShadowBlur;
      if (softContactShadowMesh) {
        const factor = 1.0 + (currentShadowBlur - 1.0) * 0.04;
        softContactShadowMesh.scale.x = (softContactShadowMesh.userData.baseW || 6.0) * factor;
        softContactShadowMesh.scale.z = (softContactShadowMesh.userData.baseL || 8.0) * factor;
      }
    });

    const sliderShadowOp = document.getElementById('slider-shadow-op');
    const lblShadowOpVal = document.getElementById('lbl-shadow-op-val');
    sliderShadowOp.addEventListener('input', (e) => {
      currentShadowOpacity = parseFloat(e.target.value);
      lblShadowOpVal.textContent = currentShadowOpacity.toFixed(2);
      if (shadowReceiverPlane) shadowReceiverPlane.material.opacity = currentShadowOpacity;
      if (softContactShadowMesh) softContactShadowMesh.material.opacity = currentShadowOpacity * 0.85;
    });

    const sliderSunElev = document.getElementById('slider-sun-elev');
    const lblSunElevVal = document.getElementById('lbl-sun-elev-val');
    sliderSunElev.addEventListener('input', (e) => {
      currentSunElevation = parseInt(e.target.value);
      updateSunElevLabel();
      updateSunDirection();
    });

    function updateSunElevLabel() {
      if (currentSunElevation >= 75) {
        lblSunElevVal.textContent = `${currentSunElevation}° (Đứng bóng)`;
      } else if (currentSunElevation <= 25) {
        lblSunElevVal.textContent = `${currentSunElevation}° (Trải dài)`;
      } else {
        lblSunElevVal.textContent = `${currentSunElevation}° (Xiên chuẩn)`;
      }
    }

    document.getElementById('btn-shadow-noon').addEventListener('click', () => {
      currentSunElevation = 80;
      sliderSunElev.value = 80;
      updateSunElevLabel();
      updateSunDirection();
    });
    document.getElementById('btn-shadow-natural').addEventListener('click', () => {
      currentSunElevation = 50;
      sliderSunElev.value = 50;
      updateSunElevLabel();
      updateSunDirection();
    });
    document.getElementById('btn-shadow-sunset').addEventListener('click', () => {
      currentSunElevation = 20;
      sliderSunElev.value = 20;
      updateSunElevLabel();
      updateSunDirection();
    });

    const sliderSunAzimuth = document.getElementById('slider-sun-azimuth');
    const lblSunAzimuthVal = document.getElementById('lbl-sun-azimuth-val');
    sliderSunAzimuth.addEventListener('input', (e) => {
      currentSunAzimuth = parseInt(e.target.value);
      updateAzimuthLabel();
      updateSunDirection();
    });

    function updateAzimuthLabel() {
      let dirName = "Đông Nam";
      if (currentSunAzimuth >= 337.5 || currentSunAzimuth < 22.5) dirName = "Bắc";
      else if (currentSunAzimuth < 67.5) dirName = "Đông Bắc";
      else if (currentSunAzimuth < 112.5) dirName = "Đông";
      else if (currentSunAzimuth < 157.5) dirName = "Đông Nam";
      else if (currentSunAzimuth < 202.5) dirName = "Nam";
      else if (currentSunAzimuth < 247.5) dirName = "Tây Nam";
      else if (currentSunAzimuth < 292.5) dirName = "Tây";
      else dirName = "Tây Bắc";

      lblSunAzimuthVal.textContent = `${dirName} (${currentSunAzimuth}°)`;
    }

    document.querySelectorAll('[data-az]').forEach(btn => {
      btn.addEventListener('click', () => {
        currentSunAzimuth = parseInt(btn.dataset.az);
        sliderSunAzimuth.value = currentSunAzimuth;
        updateAzimuthLabel();
        updateSunDirection();
      });
    });

    // Toggle Màu nước mờ biên
    const stageBgLayer = document.getElementById('stage-bg-layer');
    const btnToggleWatercolor = document.getElementById('btn-toggle-watercolor');
    let isWatercolor = true;

    btnToggleWatercolor.addEventListener('click', () => {
      isWatercolor = !isWatercolor;
      stageBgLayer.classList.toggle('watercolor-mode', isWatercolor);
      btnToggleWatercolor.classList.toggle('active', isWatercolor);
    });

    /* ==========================================================================
       7. CHUYỂN 4 MÙA TIỀN SỬ MƯỢT MÀ TINH TẾ (GIỮ NGUYÊN KHUNG CẢNH REF)
       ========================================================================== */
    const seasonOverlay = document.getElementById('season-atmosphere-overlay');
    const seasonToast = document.getElementById('season-toast');
    const seasonToastText = document.getElementById('season-toast-text');
    let seasonToastTimeout = null;
    let seasonAnimId = null;

    function showSeasonToast(text) {
      if (seasonToastTimeout) clearTimeout(seasonToastTimeout);
      seasonToastText.textContent = text;
      seasonToast.classList.add('show');
      seasonToastTimeout = setTimeout(() => {
        seasonToast.classList.remove('show');
      }, 3000);
    }

    const SEASON_PRESETS = {
      spring: {
        exposure: 1.32,
        keyColor: new THREE.Color(0xfbfbe8),
        hemiSky: new THREE.Color(0xffffff),
        hemiGround: new THREE.Color(0xafba9d),
        bgFilter: isWatercolor ? 'blur(3.5px) saturate(1.1) brightness(1.04) hue-rotate(-4deg)' : 'saturate(1.1) brightness(1.02)',
        overlayGrad: 'radial-gradient(circle, rgba(160, 220, 140, 0.22) 0%, transparent 75%)',
        toastVi: "🌸 Mùa Xuân: Khí hậu ôn hòa, dương xỉ đâm chồi, ánh sáng tươi non",
        toastEn: "🌸 Spring: Mild climate, sprouting flora, gentle crisp daylight"
      },
      summer: {
        exposure: 1.25,
        keyColor: new THREE.Color(0xfff5dd),
        hemiSky: new THREE.Color(0xffffff),
        hemiGround: new THREE.Color(0xb8b09d),
        bgFilter: isWatercolor ? 'blur(3.5px) saturate(0.85) brightness(0.92)' : 'none',
        overlayGrad: 'radial-gradient(circle, rgba(255, 220, 120, 0.22) 0%, transparent 75%)',
        toastVi: "☀️ Mùa Hạ: Nắng gắt nhiệt đới ẩm, độ tương phản cao, đổ bóng rực rỡ",
        toastEn: "☀️ Summer: Tropical greenhouse heat, high contrast, vivid shadows"
      },
      autumn: {
        exposure: 1.15,
        keyColor: new THREE.Color(0xffc57a),
        hemiSky: new THREE.Color(0xffeedd),
        hemiGround: new THREE.Color(0xa88d68),
        bgFilter: isWatercolor ? 'blur(3.5px) sepia(0.25) saturate(1.2) hue-rotate(8deg)' : 'sepia(0.28) saturate(1.15)',
        overlayGrad: 'radial-gradient(circle, rgba(230, 140, 60, 0.24) 0%, transparent 75%)',
        toastVi: "🍂 Mùa Thu: Gió hanh khô, lá hạt trần ngả vàng, nắng chiều hổ phách",
        toastEn: "🍂 Autumn: Dry winds, golden amber conifers, warm raking sunset"
      },
      winter: {
        exposure: 0.98,
        keyColor: new THREE.Color(0xd2e8ff),
        hemiSky: new THREE.Color(0xecf4ff),
        hemiGround: new THREE.Color(0x8a9ba8),
        bgFilter: isWatercolor ? 'blur(3.5px) grayscale(0.35) brightness(0.88) hue-rotate(190deg)' : 'grayscale(0.3) brightness(0.92)',
        overlayGrad: 'radial-gradient(circle, rgba(140, 190, 255, 0.25) 0%, transparent 75%)',
        toastVi: "❄️ Mùa Đông: Sương giá cận cực, bầu trời trong trẻo se lạnh",
        toastEn: "❄️ Winter: Subpolar frost, crisp pale skies, cool silver luminance"
      }
    };

    function applySeasonWithSmoothTransition(seasonKey) {
      const cfg = SEASON_PRESETS[seasonKey];
      if (!cfg) return;

      showSeasonToast(currentLang === 'vi' ? cfg.toastVi : cfg.toastEn);

      seasonOverlay.style.background = cfg.overlayGrad;
      seasonOverlay.classList.add('active');
      setTimeout(() => seasonOverlay.classList.remove('active'), 900);

      stageBgLayer.style.filter = cfg.bgFilter;

      if (seasonAnimId) cancelAnimationFrame(seasonAnimId);
      const startExp = renderer.toneMappingExposure;
      const startKey = keyLight.color.clone();
      const startHemiSky = hemiLight.color.clone();
      const startHemiGnd = hemiLight.groundColor.clone();
      const startTime = performance.now();
      const duration = 650;

      function animateLights(now) {
        const elapsed = now - startTime;
        const t = Math.min(elapsed / duration, 1.0);
        const ease = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

        renderer.toneMappingExposure = startExp + (cfg.exposure - startExp) * ease;
        keyLight.color.copy(startKey).lerp(cfg.keyColor, ease);
        hemiLight.color.copy(startHemiSky).lerp(cfg.hemiSky, ease);
        hemiLight.groundColor.copy(startHemiGnd).lerp(cfg.hemiGround, ease);

        if (t < 1.0) {
          seasonAnimId = requestAnimationFrame(animateLights);
        }
      }
      seasonAnimId = requestAnimationFrame(animateLights);
    }

    document.querySelectorAll('[data-season]').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('[data-season]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        applySeasonWithSmoothTransition(btn.dataset.season);
      });
    });

    /* ==========================================================================
       8. THUYẾT MINH ÂM THANH TIẾNG VIỆT CHUẨN NAM/NỮ MIỀN BẮC
       ========================================================================== */
    let selectedVoice = "male";
    let isPlayingAudio = false;
    let audioPlayer = new Audio();

    const btnVoiceMale = document.getElementById('btn-voice-male');
    const btnVoiceFemale = document.getElementById('btn-voice-female');
    const btnPlayAudio = document.getElementById('btn-play-audio');
    const iconPlay = document.getElementById('audio-icon-play');
    const iconStop = document.getElementById('audio-icon-stop');
    const audioStatusLabel = document.getElementById('audio-status-label');
    const uiPlayBtnText = document.getElementById('ui-play-btn-text');

    btnVoiceMale.addEventListener('click', () => {
      selectedVoice = "male";
      btnVoiceMale.classList.add('active');
      btnVoiceFemale.classList.remove('active');
      uiPlayBtnText.textContent = "Nghe thuyết minh (Giọng Nam)";
      if (isPlayingAudio) playExhibitAudio();
    });

    btnVoiceFemale.addEventListener('click', () => {
      selectedVoice = "female";
      btnVoiceFemale.classList.add('active');
      btnVoiceMale.classList.remove('active');
      uiPlayBtnText.textContent = "Nghe thuyết minh (Giọng Nữ)";
      if (isPlayingAudio) playExhibitAudio();
    });

    function playExhibitAudio() {
      stopExhibitAudio();
      isPlayingAudio = true;
      iconPlay.style.display = 'none';
      iconStop.style.display = 'block';
      audioStatusLabel.textContent = "Đang phát…";

      const mp3Url = `./assets/audio/${currentExhibit.id}_vi_${selectedVoice}.mp3`;
      audioPlayer.src = mp3Url;
      audioPlayer.play().catch(err => {
        console.warn("Lỗi phát audio:", err);
      });

      audioPlayer.onended = () => {
        stopExhibitAudio();
      };
    }

    function stopExhibitAudio() {
      audioPlayer.pause();
      audioPlayer.currentTime = 0;
      isPlayingAudio = false;
      iconPlay.style.display = 'block';
      iconStop.style.display = 'none';
      audioStatusLabel.textContent = "Sẵn sàng";
    }

    btnPlayAudio.addEventListener('click', () => {
      if (isPlayingAudio) stopExhibitAudio();
      else playExhibitAudio();
    });

    /* ==========================================================================
       9. GIAO DIỆN & RENDER RAIL 18 TIÊU BẢN KHỦNG LONG
       ========================================================================== */
    const dinoRail = document.getElementById('dino-rail');
    
module.exports = EXHIBITS;
