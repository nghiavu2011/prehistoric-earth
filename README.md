# BẢO TÀNG KHỦNG LONG 3D — 3D DINOSAUR MUSEUM

Nguyên mẫu bảo tàng giáo dục 3D tương tác song ngữ Việt - Anh (**VI / EN**).
Khám phá thế giới cổ sinh vật học với **tỷ lệ giải phẫu học thực tế 1:1 chuẩn xác**, điểm cốt 0.00 tuyệt đối, chế độ xem toàn màn hình không giới hạn, bóng đổ mặt đất chân thực và bộ ảnh nền thời tiền sử theo từng thời kỳ.

---

## 1. Các tính năng & Cải tiến phiên bản V0.3

1. **Bộ Điều Khiển Vị Trí & Khoảng Cách Người So Sánh (Human Scale Controller):**
   - **Khoảng cách linh hoạt từ 2.0m đến 15.0m:** Hỗ trợ thanh kéo trượt mượt mà kèm 5 nút preset nhanh `2.5m`, `5.0m`, `7.5m`, `10.0m`, `12.5m`.
   - **4 Vị trí đứng tương quan quanh khủng long:**
     - 👉 **Bên phải (Right flank):** Đứng ngang hông bên phải.
     - 👈 **Bên trái (Left flank):** Đứng ngang hông bên trái.
     - ⬆️ **Phía trước (Front):** Đứng đối diện trước đầu/mặt khủng long.
     - ⬇️ **Đằng sau (Behind):** Đứng quan sát phía sau đuôi khủng long.
   - **Thước đo mặt đất thời gian thực (Ground Laser Ruler):** Đường đo phát sáng vàng hổ phách tự động kéo dài nối từ chân khủng long $(0, 0)$ đến chân người theo đúng khoảng cách và góc quay, kèm huy hiệu thông số thời gian thực: `📏 Khoảng cách: [X] mét ([Vị trí]) • Tỉ lệ người 1:1`.

2. **Bộ Điều Khiển Bóng Đổ & Ánh Sáng Mặt Trời Chuyên Sâu (Advanced Shadow Studio):**
   - **Độ rõ nét / Mờ biên bóng (Softness / Blur):** Thanh kéo từ $1.0$ (bóng sắc nét) đến $8.0$ (bóng mờ mịn, tán xạ tự nhiên).
   - **Độ đậm nhạt bóng đổ (Opacity):** Thanh kéo từ $0.1$ đến $0.9$.
   - **Độ dài bóng đổ (Góc chiếu đứng vs Trải dài):**
     - ☀️ **Đứng bóng giữa trưa:** Góc chiếu $80^\circ$, bóng thu gọn sát dưới chân.
     - 🌄 **Bóng xiên tự nhiên:** Góc chiếu $50^\circ$, bóng nghiêng mềm mại.
     - 🌅 **Bóng trải dài hoàng hôn:** Góc chiếu $20^\circ$, bóng ngả dài tít tắp về phía chân trời.
   - **La bàn 360° đổi hướng bóng đổ:** Vòng tròn la bàn với kim xoay tương tác theo 4 hướng chính (**Đông, Tây, Nam, Bắc**).

3. **Khôi phục hoàn toàn Texture & Màu da chân thực cho T-Rex:**
   - Sử dụng mô hình PBR 2K chất lượng cao, khử bỏ hoàn toàn lỗi mất màu hay lóa trắng do chuẩn cũ.

4. **Chuyển mùa 4 Mùa (Xuân - Hạ - Thu - Đông) mượt mà tinh tế:**
   - Giữ nguyên khung cảnh tham chiếu, chuyển đổi bầu không khí, sắc độ và ánh sáng Three.js lerp trong 650ms.

5. **Hệ thống thuyết minh Tiếng Việt Studio chuẩn Bắc:**
   - 2 kênh phát thanh: Giọng Nam trầm ấm thời sự (`NamMinh Neural`) và Giọng Nữ thanh thoát diễn cảm (`HoaiMy Neural`) cho toàn bộ 16 tiêu bản triển lãm.

---

## 2. Danh mục 16 Tiêu bản Khủng long & Bộ Prompt ChatGPT Image 2.5 chuẩn từng Kỷ

| # | Tiêu bản | Kỷ địa chất | Chiều dài | Prompt ChatGPT Image 2.5 (16:9, ngang tầm mắt) |
| :--- | :--- | :--- | :--- | :--- |
| 1 | **Triceratops** | Phấn Trắng muộn | 8.5m | `Vast cinematic prehistoric landscape of the Late Cretaceous Hell Creek Formation, sprawling lush wetlands, ancient flowering magnolias, giant bald cypresses, low Cretaceous ferns and cycads, golden afternoon sun rays casting long shadows across meandering riverbank, 16:9 widescreen eye-level framing, hyper-realistic natural museum diorama backdrop, tranquil and wild, high detail, no dinosaurs in the scene.` |
| 2 | **Tyrannosaurus Rex** | Phấn Trắng muộn | 12.3m | `Late Cretaceous subtropical floodplain at dusk, ancient sequoia and ginkgo groves with sprawling fern undergrowth, mist rising from murky primordial bayous, dramatic twilight sky with deep amber and dusky indigo clouds, 16:9 panoramic eye-level view, atmospheric lighting, quiet primeval stillness, 8k resolution, no dinosaurs in the image.` |
| 3 | **Giganotosaurus** *(Mới)* | Phấn Trắng giữa | 13.2m | `Wide semi-arid prehistoric plains of Cretaceous Patagonia, massive braided gravel rivers, scattered araucaria conifers and dry scrub, distant snowless Andes ranges under scorching sun, 16:9 eye-level panoramic framing, realistic museum background, no dinosaurs.` |
| 4 | **Mamenchisaurus** *(Mới)* | Jura muộn | 26.0m | `Lush ancient Jurassic subtropical forest of prehistoric East Asia, sweeping fern plains dotted with ancient ginkgoes and seed ferns, majestic towering conifers, wide river valley under humid atmospheric morning haze, horizontal eye-level perspective, photorealistic museum backdrop, no animals.` |
| 5 | **Baryonyx** *(Mới)* | Phấn Trắng sớm | 8.5m | `Cretaceous freshwater delta wetland in Western Europe, shallow muddy banks lined with primitive reeds and horsetails, slow meandering river with exposed sandbars, soft overcast temperate sunlight, 16:9 panoramic eye-level view, realistic diorama background, no creatures.` |
| 6 | **Liopleurodon** *(Mới)* | Jura muộn | 10.0m | `Deep clear underwater view of a warm Jurassic epicontinental ocean, sunlight beams penetrating turquoise waters, ancient seafloor with ammonite shells and crinoids, peaceful realistic marine environment, wide 16:9 aspect ratio, no marine monsters in view.` |
| 7 | **Allosaurus** | Jura muộn | 9.5m | `Sweeping semi-arid Jurassic alluvial plain, scattered prehistoric conifer groves (Araucaria and Monkey Puzzle trees), sprawling cycad meadows, distant rugged red sandstone mesas under a bright clear sky, low horizontal eye-level framing, warm natural daylight, museum quality diorama backdrop, highly detailed, no dinosaurs.` |
| 8 | **Stegosaurus** | Jura muộn | 9.0m | `Tranquil Jurassic prehistoric woodland clearing, expansive grassy glade with primitive horsetails and clubmosses, distant misty redwoods, mossy ground with low prehistoric ferns, horizontal eye-level framing, warm gentle daylight, museum quality diorama backdrop, pristine natural atmosphere, no dinosaurs.` |
| 9 | **Spinosaurus** | Phấn Trắng giữa | 14.5m | `Expansive mid-Cretaceous tropical delta river basin in North Africa, wide tranquil freshwater lagoons lined with ancient mangrove roots and giant seed ferns, low shoreline horizon, golden haze sunbeams glistening on calm tidal waters, realistic eye-level museum backdrop, empty foreground shore, 8k resolution, no animals in the image.` |
| 10 | **Pterosaur** | Phấn Trắng | Sải cánh 6.5m | `Majestic high-altitude panoramic view over a prehistoric Cretaceous ocean coastline, dramatic limestone sea cliffs, sweeping turquoise sea with gentle foaming waves below, sunlit cumulus clouds in an expansive blue sky, eye-level aerial horizon, serene primeval atmosphere, highly realistic, no flying reptiles in the sky.` |
| 11 | **Ankylosaurus** | Phấn Trắng muộn | 8.0m | `Dense temperate late Cretaceous fern prairie and open woodland, scattered fallen petrified logs, sandstone boulders covered in prehistoric lichen and moss, low scrubby cycads, diffuse overcast morning light filtering through humid canopy, 16:9 eye-level perspective, photorealistic nature backdrop, empty scene without dinosaurs.` |
| 12 | **Cryolophosaurus** | Jura sớm | 6.5m | `Early Jurassic temperate polar rainforest of prehistoric Antarctica, lush moss-covered Podocarp and Ginkgo groves, mountain slopes shrouded in cool glacial mist, crystal-clear cold mountain stream with damp gravel banks, soft pale diffused sunlight, 16:9 horizontal eye-level framing, serene primeval diorama, no creatures.` |
| 13 | **Velociraptor** | Phấn Trắng muộn | 2.0m | `Vast arid Late Cretaceous red sandstone dunes and dry desert oasis, ancient stunted desert shrubs and dry scrubland, weathered badlands formations beneath a blazing arid sky, heat haze on the red sandy horizon, eye-level framing, cinematic photorealistic diorama backdrop, empty desert with no dinosaurs.` |
| 14 | **Gorgosaurus** | Phấn Trắng muộn | 8.5m | `Late Cretaceous river delta swamp and coastal forest, meandering muddy tributaries, towering Metasequoia and fern glades, dramatic overcast storm clouds parting to reveal golden sunlight, wide open foreground shore, 16:9 museum backdrop framing, hyper-realistic, no dinosaurs in view.` |
| 15 | **Mosasaurus** | Phấn Trắng muộn | 14.0m | `Underwater panoramic view of a shallow warm Cretaceous inland sea, golden sun caustic patterns dancing across white seabed sands, ancient coral pinnacles and towering kelp-like prehistoric seaweeds, clear turquoise-azure waters with sunbeams descending from surface, 16:9 horizontal perspective, peaceful marine backdrop, no sea monsters.` |
| 16 | **Triceratops Skeleton** | Bảo tàng Hoàng gia | 8.5m | `Grand prestigious natural history museum exhibition hall, polished dark marble platform floor with subtle reflection, warm museum architectural spotlights illuminating the center stage, neoclassical architectural columns and arched windows in soft background bokeh, calm editorial atmosphere, museum diorama background, no other exhibits.` |

---

## 3. Cách mở và trải nghiệm

Nguyên mẫu đang được chạy trực tiếp trên máy chủ local cổng 8000:
👉 **[http://localhost:8000/prototype.html](http://localhost:8000/prototype.html)**
