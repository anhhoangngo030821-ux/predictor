// Cơ sở dữ liệu 8 Bản Thể Tương Lai (Future Archetypes)
// Mỗi bản thể bao gồm hồ sơ chi tiết, 3 kịch bản tương lai, lộ trình 3 giai đoạn và bộ công cụ hành động mỗi ngày.

export const ARCHETYPES = {
  visionary_leader: {
    id: "visionary_leader",
    name: "Nhà Lãnh Đạo Tiên Phong",
    subtitle: "The Visionary Leader & Empire Builder",
    badge: "Thống Lĩnh & Định Hình Xu Thế",
    slogan: "Không chờ đợi tương lai đến, tôi xây dựng nó bằng niềm tin và đội ngũ của mình.",
    color: "#8b5cf6", // Purple/Violet
    gradient: "from-purple-600 via-indigo-600 to-pink-500",
    avatarIcon: "crown",
    summary: "Trong 5 - 10 năm tới, bạn sẽ đứng ở vị trí đầu tàu dẫn dắt một doanh nghiệp, tổ chức hoặc phong trào quy mô lớn. Bạn sở hữu trực giác chiến lược nhạy bén, khả năng quy tụ hiền tài và biến những điều không tưởng thành hiện thực vững chắc.",
    
    traits: [
      { label: "Tầm nhìn vĩ mô", val: 95 },
      { label: "Khả năng thu phục nhân tâm", val: 92 },
      { label: "Bản lĩnh chịu áp lực", val: 88 },
      { label: "Quyết đoán & Dám chấp nhận rủi ro", val: 90 }
    ],

    scenarios: {
      optimal: "Bạn sáng lập hoặc điều hành một tổ chức có tầm ảnh hưởng khu vực/quốc tế, làm chủ tài chính và tạo công ăn việc làm thịnh vượng cho hàng trăm con người. Bạn là hình mẫu truyền cảm hứng thế hệ mới.",
      default: "Bạn trở thành một quản lý cấp cao hoặc trưởng dự án tài năng nhưng có thể bị kìm kẹp bởi các quy tắc của tổ chức cũ nếu không dám bước ra xây dựng đế chế riêng.",
      pitfall: "Cạm bẫy 'Nhà độc tài cô độc': Cầu toàn, ôm đồm mọi việc, không chịu ủy quyền dẫn đến kiệt sức (burnout) và làm gãy đổ các mối quan hệ thân tín gần gũi."
    },

    roadmap: [
      {
        phase: "Giai Đoạn 1 (Năm 0 - 1): Xây Dựng Uy Tín & Kỷ Luật Bản Thân",
        title: "Tự Lãnh Đạo Chính Mình Trước Khi Lãnh Đạo Vạn Người",
        milestone: "Làm chủ 100% thời gian cá nhân và dẫn dắt thành công 1 dự án nhóm quy mô nhỏ với kết quả vượt trội 30%.",
        tasks: [
          "Xây dựng thói quen quản trị năng lượng: Thức dậy đúng giờ, rèn luyện thể chất cường độ cao 45 phút/ngày.",
          "Học sâu kỹ năng Storytelling & Diễn thuyết công chúng: Truyền đạt tầm nhìn gãy gọn trong 3 phút.",
          "Thực hành ủy quyền vi mô: Liệt kê 5 việc tốn thời gian không tạo ra giá trị cao và chuyển giao ngay.",
          "Đọc và ứng dụng nguyên lý quản trị từ 'High Output Management' và 'Principles' của Ray Dalio."
        ]
      },
      {
        phase: "Giai Đoạn 2 (Năm 1 - 3): Xây Dựng Đội Ngũ Lõi & Tạo Đòn Bẩy",
        title: "Tạo Lập Đòn Bẩy Tư Bản, Công Nghệ Và Con Người",
        milestone: "Quy tụ được bộ 3 nòng cốt (Kỹ thuật - Vận hành - Bán hàng), nâng doanh thu hoặc quy mô dự án lên gấp 5 lần.",
        tasks: [
          "Tuyển chọn và đào tạo 3 nhân sự hạt giống có năng lực bổ khuyết cho điểm yếu của bạn.",
          "Thiết lập mạng lưới quan hệ với các cố vấn (Mentors) và nhà đầu tư thiên thần.",
          "Xây dựng thương hiệu cá nhân trên LinkedIn / mạng xã hội về tư duy quản trị & định hướng ngành.",
          "Chuyển đổi từ 'người giải quyết vấn đề' sang 'người thiết kế hệ thống giải quyết vấn đề'."
        ]
      },
      {
        phase: "Giai Đoạn 3 (Năm 3 - 5+): Mở Rộng Quy Mô & Chuyển Giao Di Sản",
        title: "Chiếm Lĩnh Thị Trường & Kiến Tạo Văn Hóa Bền Vững",
        milestone: "Doanh nghiệp tự vận hành không cần bạn can thiệp trực tiếp hàng ngày; đạt tự do tài chính trọn vẹn.",
        tasks: [
          "Chuyển giao quyền điều hành tác nghiệp (COO) để tập trung 100% vào chiến lược vĩ mô và sáp nhập/đầu tư.",
          "Thành lập quỹ học bổng hoặc vườn ươm ươm mầm thế hệ lãnh đạo trẻ kế cận.",
          "Đạt tự do tài chính đa dòng thu nhập thụ động bền vững.",
          "Viết sách hoặc chia sẻ tri thức quản trị thực chiến tới cộng đồng quốc tế."
        ]
      }
    ],

    actionToolkit: {
      habits: [
        "Khung giờ Hoàng kim (Golden 90 Min): Dành 90 phút đầu ngày cho chiến lược quan trọng nhất, tắt toàn bộ thông báo.",
        "Nhật ký phản tư cuối ngày: Đánh giá 3 quyết định lớn trong ngày và rút ra bài học nhận thức.",
        "Cuộc trò chuyện 1-1 chất lượng: Mỗi tuần trò chuyện sâu 30 phút với ít nhất 1 thành viên then chốt.",
        "Thiền định tĩnh tâm 15 phút: Rửa trôi sự ồn ào để duy trì 'cái đầu lạnh' trước các cuộc đàm phán.",
        "Vận động thể thao sức bền (Chạy bộ, gym hoặc boxing): Rèn luyện ý chí không đầu hàng."
      ],
      skillStack: [
        "Kỹ năng Thuyết trình & Thu phục lòng người (Charismatic Leadership)",
        "Đọc hiểu Báo cáo tài chính & Mô hình kinh doanh (Financial Mastery)",
        "Tư duy Hệ thống & Thiết kế Cơ chế (System Thinking)",
        "Ứng dụng AI vào Tự động hóa Doanh nghiệp (AI-Driven Operations)"
      ],
      books: [
        "Từ Tốt Đến Vĩ Đại (Good to Great) - Jim Collins",
        "Nguyên Tắc (Principles) - Ray Dalio",
        "Thuật Quản Trị Hàng Đầu (High Output Management) - Andy Grove",
        "Bắt Đầu Với Câu Hỏi Tại Sao (Start With Why) - Simon Sinek"
      ]
    }
  },

  creative_pioneer: {
    id: "creative_pioneer",
    name: "Bậc Thầy Sáng Tạo Độc Bản",
    subtitle: "The Innovative Creator & Cultural Pioneer",
    badge: "Độc Bản & Tiên Phong Nghệ Thuật/Ý Tưởng",
    slogan: "Sự bình thường là nhà tù của tâm hồn. Tôi sinh ra để tạo nên những điều khác biệt rung chuyển giác quan.",
    color: "#ec4899", // Pink/Fuchsia
    gradient: "from-pink-500 via-rose-500 to-amber-400",
    avatarIcon: "palette",
    summary: "Trong 5 - 10 năm tới, bạn sẽ là một biểu tượng sáng tạo được công chúng hoặc giới tinh hoa ngưỡng mộ. Bạn sở hữu con mắt thẩm mỹ sắc bén, khả năng liên kết những ý niệm tưởng chừng không liên quan thành tác phẩm, sản phẩm hoặc phong trào làm say đắm người xem.",

    traits: [
      { label: "Tư duy đột phá", val: 98 },
      { label: "Thẩm mỹ & Trực giác nhạy bén", val: 94 },
      { label: "Dấu ấn cá nhân độc bản", val: 96 },
      { label: "Khả năng truyền cảm xúc", val: 90 }
    ],

    scenarios: {
      optimal: "Tác phẩm/sản phẩm của bạn vang danh toàn cầu, sở hữu cộng đồng người hâm mộ trung thành tuyệt đối. Bạn kiếm tiền từ chính sự độc bản của mình mà không cần thỏa hiệp với thị hiếu rẻ tiền.",
      default: "Bạn vẫn tạo ra nhiều sản phẩm tốt nhưng chật vật về mặt thương mại hóa vì thiếu kỹ năng đóng gói và phân phối giá trị đến đúng đối tượng sẵn sàng trả giá cao.",
      pitfall: "Cạm bẫy 'Nghệ sĩ đau khổ': Bị phụ thuộc cảm xúc thất thường, trì hoãn vì cầu toàn vô lý, hoặc kiêu ngạo từ chối học hỏi tư duy kinh doanh và công nghệ mới."
    },

    roadmap: [
      {
        phase: "Giai Đoạn 1 (Năm 0 - 1): Mài Sắc Vũ Khí Độc Bản & Xây Portfolio",
        title: "Tích Lũy 1,000 Giờ Sáng Tạo Thực Chiến & Định Vị Phong Cách",
        milestone: "Hoàn thiện bộ Portfolio gồm 10 tác phẩm/dự án chuẩn quốc tế và thu hút 1,000 'True Fans' đầu tiên.",
        tasks: [
          "Thực hiện thử thách '30 ngày sáng tạo liên tục' không ngắt quãng để phá vỡ hội chứng sợ trang giấy trắng.",
          "Nghiên cứu giao thoa liên ngành: Kết hợp nghệ thuật với công nghệ AI tạo sinh hoặc triết học.",
          "Xây dựng kênh phân phối cá nhân (Portfolio web, Substack hoặc Behance/YouTube) được chau chuốt kỹ lưỡng.",
          "Tìm kiếm 1 mentor đi trước trong ngành để được phản biện thẳng thắn về phong cách."
        ]
      },
      {
        phase: "Giai Đoạn 2 (Năm 1 - 3): Đóng Gói Giá Trị & Thương Mại Hóa Tinh Tế",
        title: "Biến Sự Sáng Tạo Thành Cỗ Máy Kinh Doanh Tri Thức/Nghệ Thuật",
        milestone: "Hợp tác với các thương hiệu hàng đầu hoặc bán sản phẩm độc bản với mức giá cao cấp (High-ticket).",
        tasks: [
          "Thiết kế dòng sản phẩm signature (khoá học chuyên sâu, triển lãm cá nhân, bản quyền tác phẩm).",
          "Học cách đàm phán hợp đồng bản quyền và bảo vệ sở hữu trí tuệ.",
          "Tự động hóa các khâu hành chính/kế toán để giải phóng 80% thời gian cho công việc sáng tạo thuần túy.",
          "Xây dựng cộng đồng kín dành riêng cho những người trân trọng giá trị độc bản của bạn."
        ]
      },
      {
        phase: "Giai Đoạn 3 (Năm 3 - 5+): Định Hình Trường Phái & Tạo Dựng Di Sản",
        title: "Trở Thành Tượng Đài Cảm Hứng & Mở Ra Kỷ Nguyên Mới",
        milestone: "Sáng lập Studio sáng tạo hoặc Viện nghệ thuật/thiết kế riêng; được nhắc tên trong các tuyển tập chuyên môn quốc tế.",
        tasks: [
          "Tổ chức triển lãm, hội thảo hoặc xuất bản ấn phẩm để đời.",
          "Tạo ra một trường phái hoặc phương pháp sáng tạo mới mang tên chính bạn.",
          "Cố vấn và bảo trợ cho các tài năng trẻ triển vọng.",
          "Sống thảnh thơi tại các thiên đường sáng tạo trên thế giới theo phong cách du mục nghệ thuật."
        ]
      }
    ],

    actionToolkit: {
      habits: [
        "Buổi sáng Deep Flow 2 giờ: Không điện thoại, chỉ có ý tưởng, màu sắc hoặc mã code sáng tạo.",
        "Thu thập tư liệu cảm hứng (Swipe File): Mỗi ngày lưu lại 3 ý tưởng độc đáo từ thiên nhiên, kiến trúc hoặc sách cổ.",
        "Đi dạo một mình không thiết bị số (Wonder Walking) 30 phút để não bộ kết nối các ý tưởng ngầm.",
        "Thử nghiệm 1 công cụ công nghệ mới (GenAI, 3D, Motion) mỗi tuần để mở rộng giới hạn sáng tạo.",
        "Viết 'Morning Pages' (3 trang nhật ký tự do) ngay khi tỉnh dậy để giải tỏa tắc nghẽn tâm thức."
      ],
      skillStack: [
        "Kỹ thuật Chuyên môn Đỉnh cao (Art/Design/Writing/Content Direction)",
        "Prompt Engineering & Ứng dụng AI sáng tạo (Midjourney, Runway, LLMs)",
        "Storytelling & Định vị Thương hiệu Cá nhân Sang trọng (Luxury Branding)",
        "Định giá & Đàm phán Giá trị Cao (High-ticket Value Pricing)"
      ],
      books: [
        "Nghệ Thuật Sống Như Một Nghệ Sĩ (Steal Like an Artist) - Austin Kleon",
        "Con Đường Nghệ Sĩ (The Artist's Way) - Julia Cameron",
        "Deep Work: Làm Ra Làm Chơi Ra Chơi - Cal Newport",
        "Chiến Tranh Nghệ Thuật (The War of Art) - Steven Pressfield"
      ]
    }
  },

  strategic_mastermind: {
    id: "strategic_mastermind",
    name: "Chiến Lược Gia Bất Khả Chiến Bại",
    subtitle: "The Strategic Mastermind & Asset Allocator",
    badge: "Trí Tuệ Giải Mã & Tối Ưu Hệ Thống",
    slogan: "Thế giới này vận hành bằng các quy luật toán học và tâm lý. Ai nắm được quy luật, người đó làm chủ vận mệnh.",
    color: "#06b6d4", // Cyan
    gradient: "from-cyan-500 via-blue-600 to-indigo-700",
    avatarIcon: "compass",
    summary: "Trong 5 - 10 năm tới, bạn sẽ là bộ não chiến lược đứng sau những thương vụ đầu tư lớn, những quyết định tái cấu trúc định mệnh, hoặc các phân tích vĩ mô định hình thị trường. Bạn sở hữu tư duy xác suất sắc lạnh, khả năng nhận diện mô thức ẩn và ra đòn đúng thời điểm.",

    traits: [
      { label: "Tư duy phân tích xác suất", val: 96 },
      { label: "Chiến lược & Hoạch định", val: 95 },
      { label: "Kiểm soát cảm xúc trước biến động", val: 92 },
      { label: "Phân bổ tài sản & Dòng tiền", val: 94 }
    ],

    scenarios: {
      optimal: "Bạn xây dựng được danh mục đầu tư sinh lời vượt trội trên thị trường tài chính hoặc trở thành Cố vấn chiến lược tối cao cho các tập đoàn lớn, hưởng phí cố vấn dựa trên % giá trị thặng dư khổng lồ.",
      default: "Bạn trở thành một chuyên viên phân tích tài chính/chiến lược giỏi nhưng bị giới hạn thu nhập vì vẫn bán thời gian lấy lương thay vì kiếm tiền bằng đòn bẩy vốn và phán đoán độc lập.",
      pitfall: "Cạm bẫy 'Tê liệt vì phân tích' (Analysis Paralysis): Thu thập quá nhiều dữ liệu nhưng chần chừ không dám vào lệnh hoặc không chịu thực thi thực tế khi thời cơ vàng ập đến."
    },

    roadmap: [
      {
        phase: "Giai Đoạn 1 (Năm 0 - 1): Làm Chủ Các Mô Hình Tư Duy & Xây Vốn Ban Đầu",
        title: "Giải Phẫu Hệ Thống & Rèn Luyện Tư Duy Xác Suất",
        milestone: "Làm chủ 20 mô hình tư duy cốt lõi (Mental Models), tích lũy quỹ khẩn cấp 12 tháng và bắt đầu danh mục đầu tư đầu tiên.",
        tasks: [
          "Nghiên cứu sâu mô hình tư duy của Charlie Munger, Warren Buffett và Nassim Taleb.",
          "Thực hành ghi chép nhật ký quyết định (Decision Journal) cho mọi khoản đầu tư hoặc lựa chọn sự nghiệp.",
          "Thành thạo công cụ phân tích dữ liệu (Python, SQL hoặc các nền tảng tài chính nâng cao).",
          "Cắt giảm tối đa nợ xấu và thiết lập tỷ lệ tiết kiệm/đầu tư tự động tối thiểu 40% thu nhập."
        ]
      },
      {
        phase: "Giai Đoạn 2 (Năm 1 - 3): Tối Ưu Hóa Bất Đối Xứng & Mở Rộng Quy Mô Vốn",
        title: "Săn Tìm Lợi Nhuận Phi Đối Xứng & Tư Vấn Cấp Cao",
        milestone: "Xây dựng danh mục đầu tư tăng trưởng bền vững gấp 3 lần thị trường cơ sở; bắt đầu nhận các gói tư vấn cố vấn độc lập.",
        tasks: [
          "Áp dụng triết lý Kháng tổn thương (Antifragile): Danh mục hưởng lợi từ sự biến động của thị trường.",
          "Xuất bản các bài viết phân tích vĩ mô sâu sắc trên các diễn đàn chuyên gia để định vị trí tuệ.",
          "Kết nối với mạng lưới nhà đầu tư tư nhân và các quỹ đầu tư mạo hiểm.",
          "Thiết lập cơ cấu tài sản đa quốc gia để phân tán rủi ro địa chính trị và lạm phát."
        ]
      },
      {
        phase: "Giai Đoạn 3 (Năm 3 - 5+): Vị Thế Cố Vấn Tối Cao & Tự Do Tài Chính Vĩnh Cửu",
        title: "Bàn Cờ Lớn Của Sự Tự Do: Sống Nhờ Lãi Kép Trí Tuệ & Tư Bản",
        milestone: "Tự do tài chính hoàn toàn (dòng tiền thụ động > gấp 5 lần chi phí sống); chỉ nhận cố vấn cho những dự án thực sự hứng thú.",
        tasks: [
          "Vận hành quỹ đầu tư gia đình (Family Office) hoặc quỹ tín thác riêng.",
          "Tham gia Hội đồng quản trị với tư cách Thành viên độc lập hoạch định chiến lược.",
          "Dành 70% thời gian để đọc sách, du hành và nghiên cứu những đề tài bác học.",
          "Để lại một hệ thống tri thức và quỹ tài chính thịnh vượng cho thế hệ kế thừa."
        ]
      }
    ],

    actionToolkit: {
      habits: [
        "Đọc 2 giờ mỗi ngày: 50% cho lịch sử/tâm lý học, 50% cho các báo cáo thường niên và dữ liệu thị trường.",
        "Nhật ký quyết định (Decision Journal): Ghi lại lý do vào lệnh/ra quyết định trước khi biết kết quả.",
        "Tập thể dục rèn luyện tính kiên nhẫn (Chèo thuyền, đi bộ đường dài hoặc cờ tướng/cờ vua).",
        "Thực hành tư duy Nghịch đảo (Inversion): Thay vì hỏi 'Làm sao thành công?', hãy hỏi 'Điều gì chắc chắn làm mình thất bại?' rồi triệt tiêu nó.",
        "Rà soát danh mục tài sản và chỉ số KPI cá nhân vào tối Chủ nhật hàng tuần."
      ],
      skillStack: [
        "Phân bổ Tài sản & Quản trị Rủi ro (Modern Portfolio Theory & Barbell Strategy)",
        "Các Mô hình Tư duy Đa ngành (Latticework of Mental Models)",
        "Kỹ năng Đàm phán Thượng tầng & Cấu trúc Thỏa thuận (Deal Structuring)",
        "Phân tích Dữ liệu Lớn & Nhận diện Thiên kiến Tâm lý (Behavioral Economics)"
      ],
      books: [
        "Chống Tự Mãn / Thiên Nga Đen (The Black Swan & Antifragile) - Nassim Taleb",
        "Tâm Lý Học Về Tiền (The Psychology of Money) - Morgan Housel",
        "Nghĩ Nhanh Và Chậm (Thinking, Fast and Slow) - Daniel Kahneman",
        "Bác Charlie Khôn Ngoan (Poor Charlie's Almanack) - Charlie Munger"
      ]
    }
  },

  digital_solopreneur: {
    id: "digital_solopreneur",
    name: "Nhà Khởi Nghiệp Tự Do Không Biên Giới",
    subtitle: "The Digital Solopreneur & Freedom Architect",
    badge: "Tự Chủ Tuyệt Đối & Du Mục Kỹ Thuật Số",
    slogan: "Thời gian và sự tự do là xa xỉ phẩm lớn nhất đời người. Tôi thiết kế công việc phục vụ cuộc sống, không phải ngược lại.",
    color: "#10b981", // Emerald
    gradient: "from-emerald-500 via-teal-600 to-cyan-500",
    avatarIcon: "plane-takeoff",
    summary: "Trong 5 - 10 năm tới, bạn sẽ là hình mẫu sống động của thế hệ 'Công ty một người' (One-person Business) hoặc du mục kỹ thuật số tự do. Bạn vận hành các sản phẩm số, dịch vụ vi mô hoặc nội dung tự động hóa, tạo ra dòng tiền cao mà không cần nhân viên cồng kềnh hay văn phòng cố định.",

    traits: [
      { label: "Năng lực tự thân & Tự học", val: 97 },
      { label: "Tối ưu hóa đòn bẩy công nghệ", val: 94 },
      { label: "Khả năng thích ứng địa lý", val: 92 },
      { label: "Quản trị năng lượng tự do", val: 95 }
    ],

    scenarios: {
      optimal: "Sở hữu 2-3 cỗ máy tạo thu nhập thụ động qua internet (SaaS nhỏ, khóa học số, bản quyền nội dung), di chuyển qua 10+ quốc gia mỗi năm, làm việc 15-20 giờ/tuần mà vẫn có thu nhập hàng chục nghìn đô la.",
      default: "Làm freelancer hoặc kiếm tiền online nhưng vẫn rơi vào bẫy 'đổi thời gian lấy tiền', thu nhập bấp bênh và thường xuyên lo lắng về khách hàng kế tiếp.",
      pitfall: "Cạm bẫy 'Sự cô đơn kỹ thuật số': Thiếu tính kỷ luật cá nhân dẫn đến trượt dài trong sự phân tâm, cô lập xã hội và mất đi động lực phát triển sâu."
    },

    roadmap: [
      {
        phase: "Giai Đoạn 1 (Năm 0 - 1): Xây Dựng Kỹ Năng Giá Trị Cao & Sản Phẩm Đầu Tay",
        title: "Thoát Khỏi Vòng Xoáy Bán Thời Gian & Tạo Doanh Thu Số Đầu Tiên",
        milestone: "Kiếm được $1,000/tháng đầu tiên hoàn toàn từ môi trường internet bằng kỹ năng độc lập của bạn.",
        tasks: [
          "Xác định 1 kỹ năng giá trị cao (Copywriting, Thiết kế giao diện, Lập trình No-code, Video Editing).",
          "Xây dựng sự hiện diện trên X (Twitter) hoặc LinkedIn: Chia sẻ quá trình học hỏi công khai (Build in Public).",
          "Tạo ra 1 sản phẩm số vi mô miễn phí (Lead Magnet) để thu hút 500 email subscribers.",
          "Thực hiện công việc freelance với mức giá cao và biến khách hàng thành case study thành công."
        ]
      },
      {
        phase: "Giai Đoạn 2 (Năm 1 - 3): Đóng Gói Sản Phẩm & Tự Động Hóa Dòng Tiền",
        title: "Chuyển Đổi Từ Dịch Vụ Sang Sản Phẩm Số Vô Tận (Infinite Leverage)",
        milestone: "Thu nhập số vượt gấp 2 lần mức lương văn phòng thông thường; bắt đầu lối sống làm việc từ xa hoàn toàn.",
        tasks: [
          "Đóng gói quy trình làm việc thành sản phẩm kỹ thuật số (Khóa học Cohort-based, Template Notion, Micro-SaaS).",
          "Thiết lập phễu bán hàng tự động (Email drip campaign, thanh toán Stripe/Gumroad).",
          "Ứng dụng AI agents để thay thế nhân sự chăm sóc khách hàng và marketing tự động.",
          "Bắt đầu phong cách sống du mục: Trải nghiệm sống tại các trung tâm khởi nghiệp tự do (Bali, Chiang Mai, Đà Nẵng, Bồ Đào Nha)."
        ]
      },
      {
        phase: "Giai Đoạn 3 (Năm 3 - 5+): Hệ Sinh Thái Độc Lập & Tự Do Toàn Diện",
        title: "Kiến Trúc Cuộc Sống Đỉnh Cao: Giàu Có Về Thời Gian Và Trải Nghiệm",
        milestone: "Đạt mốc 'Financial Independence' với hệ thống kinh doanh tự vận hành; tự do thức dậy ở bất kỳ thành phố nào bạn yêu.",
        tasks: [
          "Đa dạng hóa danh mục tài sản vào bất động sản cho thuê và cổ phiếu chi trả cổ tức.",
          "Tham gia các hội đồng Solopreneur toàn cầu và đầu tư vào các nhà khởi nghiệp độc lập mới.",
          "Tận hưởng cuộc sống: Dành thời gian học lướt sóng, leo núi, ngoại ngữ mới và viết sách.",
          "Truyền cảm hứng và mở lối cho thế hệ trẻ giải phóng bản thân khỏi guồng quay 9-to-5."
        ]
      }
    ],

    actionToolkit: {
      habits: [
        "Time-boxing 4 giờ Deep Work mỗi ngày: Chỉ 4 giờ cực kỳ tập trung, thời gian còn lại dành cho thể thao và sống.",
        "Build in Public: Chia sẻ 1 bài học thực tế từ công việc lên mạng xã hội mỗi ngày.",
        "Thiết lập 'Digital Sunset': Tắt toàn bộ màn hình sau 8 giờ tối để tái tạo sức sống não bộ.",
        "Đi bộ 10,000 bước mỗi ngày khám phá thành phố nơi bạn đang đặt chân đến.",
        "Tự thưởng 1 ngày 'Zero Task Day' trong tuần: Hoàn toàn không làm việc, không mở email công việc."
      ],
      skillStack: [
        "Kỹ năng Viết thuyết phục & Bản tin email (Direct-response Copywriting)",
        "Làm chủ công cụ No-code & Tự động hóa (Make, Zapier, Webflow, Cursor)",
        "Xây dựng Thương hiệu Cá nhân Tối giản (Minimalist Personal Branding)",
        "Tâm lý học Bán hàng & Thiết kế Phễu Chuyển đổi (Conversion Funnel Design)"
      ],
      books: [
        "Tuần Làm Việc 4 Giờ (The 4-Hour Workweek) - Tim Ferriss",
        "Công Ty Một Người (Company of One) - Paul Jarvis",
        "Kinh Doanh Như Đồ Chơi (Anything You Want) - Derek Sivers",
        "Cuốn Niên Giám Của Naval Ravikant (The Almanack of Naval Ravikant) - Eric Jorgenson"
      ]
    }
  },

  empathetic_healer: {
    id: "empathetic_healer",
    name: "Sứ Giả Khai Vấn & Nuôi Dưỡng Tinh Thần",
    subtitle: "The Empathetic Mentor & Transformational Coach",
    badge: "Thấu Cảm Sâu Sắc & Chữa Lành Cuộc Đời",
    slogan: "Vết thương chính là nơi ánh sáng đi vào bạn. Sứ mệnh của tôi là thắp lên ngọn đèn dẫn lối cho những tâm hồn lạc lối.",
    color: "#f59e0b", // Amber/Gold
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    avatarIcon: "heart-handshake",
    summary: "Trong 5 - 10 năm tới, bạn sẽ là một chuyên gia khai vấn (Master Coach), nhà trị liệu tâm lý, hoặc người thầy tinh thần được hàng nghìn người tin cậy tìm đến. Bạn sở hữu năng lượng xoa dịu hiếm có, khả năng lắng nghe thấu cảm và nghệ thuật đặt câu hỏi đánh thức tiềm năng ngủ quên trong con người.",

    traits: [
      { label: "Trí tuệ cảm xúc (EQ) vượt trội", val: 98 },
      { label: "Năng lực lắng nghe & Thấu cảm", val: 96 },
      { label: "Năng lượng bình an & Đáng tin cậy", val: 94 },
      { label: "Khả năng chuyển hóa tâm thức", val: 91 }
    ],

    scenarios: {
      optimal: "Bạn thành lập một học viện khai vấn hoặc trung tâm trị liệu tâm hồn danh tiếng, đồng hành cùng các nhà lãnh đạo và cá nhân vượt qua sang chấn, tìm lại lẽ sống rực rỡ và hạnh phúc đích thực.",
      default: "Bạn trở thành người bạn lắng nghe tuyệt vời ở mọi nơi nhưng thường xuyên bị kiệt sức vì 'hút cạn' năng lượng tiêu cực của người khác mà không có ranh giới bảo vệ cảm xúc.",
      pitfall: "Cạm bẫy 'Vị cứu tinh quá tải': Hy sinh bản thân để giúp đỡ mọi người, quên chăm sóc tài chính và sức khỏe của chính mình, dẫn đến tổn thương tâm lý thứ phát."
    },

    roadmap: [
      {
        phase: "Giai Đoạn 1 (Năm 0 - 1): Chuẩn Hóa Chuyên Môn & Rèn Luyện Thân - Tâm",
        title: "Xây Dựng Nội Lực Vững Vàng & Lấy Chứng Chỉ Khai Vấn Uy Tín",
        milestone: "Hoàn thành 100 giờ thực hành khai vấn/trị liệu có giám sát và nhận chứng chỉ quốc tế (ICF, NGH hoặc tương đương).",
        tasks: [
          "Theo học các chương trình đào tạo chuyên sâu về Tâm lý học hành vi, NLP hoặc Khai vấn ICF.",
          "Thiết lập 'Vòng tròn ranh giới cảm xúc': Học cách từ chối và bảo vệ năng lượng cá nhân.",
          "Thực hành khai vấn miễn phí có phản hồi cho 20 khách hàng đầu tiên để mài sắc kỹ năng đặt câu hỏi.",
          "Duy trì thói quen trị liệu cá nhân để chữa lành triệt để mọi bóng tối tâm lý của bản thân."
        ]
      },
      {
        phase: "Giai Đoạn 2 (Năm 1 - 3): Xây Dựng Phương Pháp Signature & Mở Rộng Ảnh Hưởng",
        title: "Tạo Lập Trường Phái Khai Vấn Độc Quyền & Tổ Chức Retreat",
        milestone: "Lịch khai vấn 1-1 kín chỗ với mức phí chuyên gia cao cấp; tổ chức thành công các khóa tu tập/Retreat 30 người.",
        tasks: [
          "Đúc kết phương pháp chuyển hóa tâm lý độc quyền mang dấu ấn cá nhân của bạn.",
          "Tổ chức các chuyến hành trình Retreat chữa lành kết hợp hòa mình vào thiên nhiên.",
          "Phát triển kênh Podcast hoặc YouTube chia sẻ tri thức chữa lành và phát triển bản thân sâu sắc.",
          "Đào tạo đội ngũ trợ giảng hỗ trợ để không phải làm việc quá sức."
        ]
      },
      {
        phase: "Giai Đoạn 3 (Năm 3 - 5+): Học Viện Chuyển Hóa & Lan Tỏa Ánh Sáng Toàn Cầu",
        title: "Để Lại Di Sản Chữa Lành: Đào Tạo Đội Ngũ Sứ Giả Kế Cận",
        milestone: "Sáng lập Học viện Khai vấn/Tâm lý đào tạo ra hàng trăm Coach có tâm; xuất bản sách best-seller về chữa lành.",
        tasks: [
          "Xuất bản cuốn sách hướng dẫn tự chữa lành và đánh thức tiềm năng con người.",
          "Thành lập quỹ bảo trợ sức khỏe tâm thần cho thanh thiếu niên và những hoàn cảnh khó khăn.",
          "Chuyển vai trò sang người cố vấn tối cao và truyền bá triết lý sống an lạc khắp các diễn đàn quốc tế.",
          "Tận hưởng cuộc sống tĩnh tại bên khu vườn mơ ước, hòa hợp trọn vẹn với thiên nhiên."
        ]
      }
    ],

    actionToolkit: {
      habits: [
        "Thiền định chánh niệm 30 phút mỗi sáng để neo giữ sự định tĩnh trong tâm hồn.",
        "Quy tắc tẩy rửa năng lượng sau mỗi buổi tham vấn: Rửa tay nước ấm, hít thở sâu và ngắt kết nối cảm xúc.",
        "Viết 'Nhật ký biết ơn' (Gratitude Journal): Liệt kê 5 điều nhiệm màu bạn cảm nhận được mỗi ngày.",
        "Đi dạo chân trần trên cỏ (Earthing) để tái kết nối với năng lượng đất mẹ.",
        "Đọc sâu các tác phẩm về tâm linh, triết học phương Đông và tâm lý học phân tích."
      ],
      skillStack: [
        "Nghệ thuật Lắng nghe Thấu thị & Đặt Câu hỏi Đánh thức (Active Listening & Powerful Questioning)",
        "Tâm lý học Hành vi & Trị liệu Sang chấn (Trauma-informed Care)",
        "Kỹ năng Điều phối Không gian An toàn (Holding Space & Facilitation)",
        "Xây dựng Chương trình Retreat & Chuyển hóa Nhóm (Transformative Experience Design)"
      ],
      books: [
        "Thức Tỉnh Mục Đích Sống (A New Earth) - Eckhart Tolle",
        "Hiểu Về Trái Tim - Thầy Minh Niệm",
        "Sang Chấn Tâm Lý: Cơ Thể Luôn Ghi Nhớ (The Body Keeps the Score) - Bessel van der Kolk",
        "Khai Vấn Tái Tạo Hiệu Suất (Coaching for Performance) - John Whitmore"
      ]
    }
  },

  deep_tech_architect: {
    id: "deep_tech_architect",
    name: "Kiến Trúc Sư Công Nghệ Tương Lai",
    subtitle: "The Deep-Tech Architect & Cyber Pioneer",
    badge: "Làm Chủ Trí Tuệ Nhân Tạo & Hạ Tầng Tương Lai",
    slogan: "Mã nguồn và thuật toán là ngôn ngữ mới để kiến tạo vũ trụ. Ai làm chủ công nghệ, người đó viết nên luật chơi.",
    color: "#3b82f6", // Blue
    gradient: "from-blue-600 via-indigo-600 to-cyan-400",
    avatarIcon: "cpu",
    summary: "Trong 5 - 10 năm tới, bạn sẽ là một trong những chuyên gia công nghệ cao cấp nhất, kiến trúc sư trưởng (Chief Architect) hoặc nhà sáng lập công nghệ lõi (Deep Tech Founder). Bạn giải quyết các bài toán hóc búa nhất của nhân loại bằng AI, dữ liệu lớn, tính toán phân tán hoặc robot tự hành.",

    traits: [
      { label: "Năng lực tư duy logic & Thuật toán", val: 98 },
      { label: "Tốc độ hấp thụ công nghệ mới", val: 96 },
      { label: "Khả năng xây dựng hệ thống chịu tải", val: 93 },
      { label: "Tầm nhìn ứng dụng công nghệ lõi", val: 91 }
    ],

    scenarios: {
      optimal: "Bạn nắm giữ các vị trí nòng cốt tại các kỳ lân công nghệ hoặc sáng lập một startup Deep Tech đột phá được định giá hàng chục triệu đô, nắm trong tay các bằng sáng chế công nghệ mang tầm vóc tương lai.",
      default: "Bạn là một kỹ sư lập trình giỏi, nhận mức lương đáng mơ ước nhưng chỉ dừng lại ở vai trò 'thợ code' thực thi theo yêu cầu của người khác thay vì chủ động định hình kiến trúc sản phẩm.",
      pitfall: "Cạm bẫy 'Tháp ngà kỹ thuật': Say mê vẻ đẹp của thuật toán phức tạp mà coi nhẹ nhu cầu thực tế của thị trường, hoặc thiếu kỹ năng giao tiếp dẫn đến khó thuyết phục người khác."
    },

    roadmap: [
      {
        phase: "Giai Đoạn 1 (Năm 0 - 1): Tinh Thông Công Nghệ Lõi & Xây Dựng Dự Án Open Source",
        title: "Vượt Trội Kỹ Thuật & Làm Chủ Kiến Trúc AI/Cloud Hiện Đại",
        milestone: "Đóng góp cho dự án Open Source lớn hoặc xây dựng 1 giải pháp AI end-to-end có 1,000+ stars trên GitHub.",
        tasks: [
          "Nghiên cứu sâu kiến trúc Large Language Models (LLMs), RAG, Agentic Workflows và Vector Databases.",
          "Luyện tập giải quyết các bài toán tối ưu hóa hệ thống chịu tải cao (High-concurrency systems).",
          "Viết các bài blog kỹ thuật phân tích sâu kiến trúc hệ thống để khẳng định uy tín trong cộng đồng Dev.",
          "Xây dựng thói quen đọc các bài báo nghiên cứu khoa học (Arxiv papers) hàng tuần."
        ]
      },
      {
        phase: "Giai Đoạn 2 (Năm 1 - 3): Trở Thành Tech Lead & Thương Mại Hóa Giải Pháp",
        title: "Chuyển Đổi Từ Kỹ Sư Giỏi Sang Kiến Trúc Sư Trưởng & Nhà Sáng Chế",
        milestone: "Lãnh đạo đội ngũ kỹ thuật 10+ người hoặc ra mắt sản phẩm công nghệ B2B có doanh thu định kỳ (ARR).",
        tasks: [
          "Rèn luyện kỹ năng kết nối giữa ngôn ngữ Kỹ thuật và ngôn ngữ Kinh doanh.",
          "Đăng ký bằng sáng chế hoặc giải pháp bản quyền cho thuật toán độc quyền của bạn.",
          "Thuyết trình tại các hội nghị công nghệ quốc tế danh giá.",
          "Nhận cổ phần thưởng (Equity/Stock Options) đáng kể tại các công ty công nghệ triển vọng."
        ]
      },
      {
        phase: "Giai Đoạn 3 (Năm 3 - 5+): Định Hình Tương Lai Số & Vườn Ươm Công Nghệ",
        title: "Đứng Ở Tuyến Đầu Của Cuộc Cách Mạng Công Nghệ Nhân Loại",
        milestone: "Trở thành Fellow/Distinguished Engineer hoặc Founder công nghệ; cố vấn công nghệ cho các cơ quan chiến lược.",
        tasks: [
          "Đầu tư thiên thần vào các startup công nghệ trẻ tiềm năng.",
          "Tham gia xây dựng các tiêu chuẩn quốc tế về đạo đức và an toàn AI.",
          "Thành lập phòng nghiên cứu độc lập (R&D Lab) theo đuổi những bài toán táo bạo nhất.",
          "Đạt tự do tài chính hoàn hảo nhờ giá trị cổ phần công nghệ bứt phá."
        ]
      }
    ],

    actionToolkit: {
      habits: [
        "Đọc 1 bài báo nghiên cứu kỹ thuật mới (ArXiv paper) mỗi thứ Ba và thứ Năm.",
        "Code kata hoặc tái cấu trúc mã nguồn 45 phút mỗi ngày để giữ sự nhạy bén ngón tay.",
        "Chạy bộ hoặc tập bơi để thả lỏng đôi mắt và não bộ sau hàng giờ nhìn màn hình.",
        "Tập thói quen giải thích một khái niệm công nghệ phức tạp cho người không chuyên hiểu được.",
        "Thực hành 'No Screen Sunday': 1 ngày trọn vẹn hòa mình vào thiên nhiên không đồ công nghệ."
      ],
      skillStack: [
        "Kiến trúc Hệ thống Phân tán & AI Agents (Distributed Systems & Multi-agent Frameworks)",
        "Tối ưu hóa Mô hình & Triển khai biên (Model Optimization, Quantization, Edge AI)",
        "Bảo mật Hệ thống & Cơ sở hạ tầng Đám mây (DevSecOps & Cloud Native Architecture)",
        "Lãnh đạo Kỹ thuật & Quản trị Sản phẩm Công nghệ (Technical Leadership & Tech-Product Strategy)"
      ],
      books: [
        "Thiết Kế Ứng Dụng Chịu Tải Cao (Designing Data-Intensive Applications) - Martin Kleppmann",
        "Clean Architecture: Cấu Trúc Mã Nguồn Sạch - Robert C. Martin",
        "Zero To One: Từ Không Đến Một - Peter Thiel",
        "Kỷ Nguyên Trí Tuệ Nhân Tạo (The Age of AI) - Henry Kissinger, Eric Schmidt"
      ]
    }
  },

  harmonious_sage: {
    id: "harmonious_sage",
    name: "Hiền Triết Viên Mãn & Cân Bằng",
    subtitle: "The Harmonious Sage & Master of Living",
    badge: "Viên Mãn Toàn Diện & An Nhiên Tự Tại",
    slogan: "Sự giàu có thực sự không phải là có thật nhiều thứ, mà là có đủ và làm chủ trọn vẹn sự bình an của tâm hồn.",
    color: "#14b8a6", // Teal
    gradient: "from-teal-500 via-emerald-600 to-green-500",
    avatarIcon: "sun",
    summary: "Trong 5 - 10 năm tới, bạn sẽ là hình mẫu hiếm có về một cuộc đời viên mãn tròn đầy: Tài chính vững vàng, sức khỏe dẻo dai, gia đình ấm êm và nội tâm an tịnh. Bạn thấu hiểu nghệ thuật 'biết đủ', không chạy theo những ảo ảnh hư danh mà tập trung nuôi dưỡng những giá trị sống đích thực.",

    traits: [
      { label: "Cân bằng cuộc sống & Tâm lý", val: 99 },
      { label: "Sức khỏe thể chất & Tinh thần", val: 95 },
      { label: "Trân trọng gia đình & Các mối quan hệ", val: 96 },
      { label: "Nghệ thuật quản trị sự hài lòng", val: 94 }
    ],

    scenarios: {
      optimal: "Bạn đạt được trạng thái tự do tài chính bền vững, sống trong ngôi nhà mơ ước chan hòa cây cỏ, con cái ngoan ngoãn, tâm trí tự tại, làm những việc mình thích với những người mình yêu quý.",
      default: "Bạn có một cuộc sống an nhàn bình lặng nhưng đôi khi cảm thấy chạnh lòng trước sự bứt phá của bạn bè đồng trang lứa nếu không tự tin vào con đường bình yên của mình.",
      pitfall: "Cạm bẫy 'Thụ động & Tránh né': Nhầm lẫn giữa sự bình yên nội tại với thái độ ngại khó, bỏ cuộc quá sớm trước những thử thách cần thiết của cuộc đời."
    },

    roadmap: [
      {
        phase: "Giai Đoạn 1 (Năm 0 - 1): Thanh Lọc Cuộc Sống & Thiết Lập Nhịp Sinh Học Vàng",
        title: "Tối Giản Hóa Cuộc Đời & Chăm Sóc Sức Khỏe Thân - Tâm",
        milestone: "Loại bỏ 50% đồ đạc và các mối quan hệ độc hại; xây dựng chỉ số sức khỏe hoàn hảo (giấc ngủ, dinh dưỡng, thể lực).",
        tasks: [
          "Áp dụng lối sống tối giản (Minimalism): Chỉ giữ lại những vật dụng mang lại niềm vui chân thật.",
          "Khám sức khỏe tổng quát toàn diện và xây dựng chế độ dinh dưỡng lành mạnh chuẩn y khoa.",
          "Cắt đứt hoặc hạn chế tối đa thời gian với những người hay than vãn và gieo rắc năng lượng tiêu cực.",
          "Tập thói quen ngủ đủ 7-8 tiếng mỗi đêm và tắt điện thoại trước khi lên giường 1 tiếng."
        ]
      },
      {
        phase: "Giai Đoạn 2 (Năm 1 - 3): Xây Dựng Tự Do Tài Chính Tối Giản (Lean FIRE)",
        title: "Bền Vững Nguồn Thu & Đầu Tư Cho Những Mối Quan Hệ Tri Kỷ",
        milestone: "Tích lũy tài sản đạt ngưỡng Tự do Tài chính Tối giản (Lean FIRE); có những chuyến du lịch chất lượng cùng gia đình.",
        tasks: [
          "Thiết lập nguồn thu nhập ổn định không đòi hỏi làm việc quá 30 giờ/tuần.",
          "Xây dựng khu vườn nhỏ, học cách chăm sóc cây cỏ và nấu những bữa ăn ấm cúng cho người thân.",
          "Dành trọn vẹn cuối tuần cho gia đình và sở thích cá nhân (hội họa, âm nhạc, cắm trại ngoài trời).",
          "Thực hành lối sống bền vững, giảm thiểu rác thải nhựa và sống hòa hợp với môi trường tự nhiên."
        ]
      },
      {
        phase: "Giai Đoạn 3 (Năm 3 - 5+): Cuộc Đời Trọn Vẹn: Sống Sâu Sắc Từng Khoảnh Khắc",
        title: "Tự Tại Giữa Nhân Gian: Truyền Trao Bình An Cho Những Người Xung Quanh",
        milestone: "Đạt sự thảnh thơi tuyệt đối trong tâm trí; trở thành bến đỗ bình yên và nguồn động viên cho người thân và bạn bè.",
        tasks: [
          "Sở hữu một không gian sống mơ ước gần gũi thiên nhiên.",
          "Chia sẻ nghệ thuật sống an lạc qua những bài viết giản dị hoặc các buổi trà đàm ấm áp.",
          "Đi du lịch chậm (Slow Travel), cảm nhận vẻ đẹp của các vùng đất mà không cần vội vã check-in.",
          "Tận hưởng từng hơi thở và trân trọng từng ngày được sống trọn vẹn trên cõi đời này."
        ]
      }
    ],

    actionToolkit: {
      habits: [
        "Uống 1 cốc nước ấm và ngắm bình minh 15 phút mỗi sáng trong sự tĩnh lặng hoàn toàn.",
        "Đi bộ nhẹ nhàng trong công viên hoặc dưới bóng cây 45 phút mỗi chiều.",
        "Bữa cơm gia đình ấm cúng: Cùng nấu nướng và trò chuyện không có thiết bị điện tử trên bàn ăn.",
        "Thực hành 'Buông bỏ': Mỗi tối tự nhủ 'Hôm nay mình đã làm hết sức, chuyện ngày mai hãy để ngày mai lo'.",
        "Dành 1 ngày trong tuần hoàn toàn không tiêu tiền vào những thứ không thiết yếu."
      ],
      skillStack: [
        "Nghệ thuật Sống Tối Giản & Quản Lý Nhu Cầu (Minimalism & Conscious Living)",
        "Y Học Dự Phòng & Chăm Sóc Sức Khỏe Toàn Diện (Longevity & Wellness)",
        "Giao Tiếp Không Bạo Lực & Nuôi Dưỡng Hôn Nhân (Nonviolent Communication)",
        "Quản Trị Tài Chính An Toàn & Độc Lập Bền Vững (Safe Financial Planning)"
      ],
      books: [
        "Lối Sống Tối Giản Thời Công Nghệ Số (Digital Minimalism) - Cal Newport",
        "Nghệ Thuật Sống Đơn Giản - Shunmyo Masuno",
        "Hạnh Phúc Tại Tâm - Thiền sư Thích Nhất Hạnh",
        "Triết Lý Sống Khắc Kỷ (A Guide to the Good Life) - William B. Irvine"
      ]
    }
  },

  impact_catalyst: {
    id: "impact_catalyst",
    name: "Nhà Kiến Tạo Tác Động Xã Hội",
    subtitle: "The High-Impact Changemaker & Humanitarian",
    badge: "Cống Hiến Vị Nhân Sinh & Thay Đổi Cộng Đồng",
    slogan: "Thước đo cuộc đời không phải là những gì bạn giữ cho riêng mình, mà là những cuộc đời bạn đã nâng đỡ bước qua bão giông.",
    color: "#e11d48", // Rose/Crimson
    gradient: "from-rose-600 via-red-500 to-amber-500",
    avatarIcon: "globe-2",
    summary: "Trong 5 - 10 năm tới, bạn sẽ là một nhân vật tiên phong trong việc giải quyết các bài toán hóc búa của xã hội (giáo dục bình đẳng, biến đổi khí hậu, xóa đói giảm nghèo, y tế cộng đồng). Bạn kết hợp giữa trái tim nhân hậu rực lửa và bộ óc vận hành sắc bén để tạo ra thay đổi mang tính hệ thống.",

    traits: [
      { label: "Lý tưởng phụng sự xã hội", val: 99 },
      { label: "Khả năng vận động nguồn lực", val: 94 },
      { label: "Bền bỉ đấu tranh vì chính nghĩa", val: 95 },
      { label: "Truyền cảm hứng hành động", val: 92 }
    ],

    scenarios: {
      optimal: "Bạn điều hành một tổ chức phi chính phủ (NGO) hoặc doanh nghiệp tạo tác động xã hội (Social Enterprise) mang lại sự đổi đời cho hàng vạn người, được cộng đồng quốc tế ghi nhận và vinh danh.",
      default: "Bạn nhiệt tình tham gia nhiều hoạt động thiện nguyện nhưng hoạt động mang tính tự phát, manh mún, thiếu nguồn lực tài chính bền vững nên dễ bị quá tải.",
      pitfall: "Cạm bẫy 'Sự phẫn uất trước bất công': Quá thất vọng trước mặt trái của xã hội dẫn đến cay đắng, hoài nghi và kiệt sức vì chiến đấu đơn độc."
    },

    roadmap: [
      {
        phase: "Giai Đoạn 1 (Năm 0 - 1): Tìm Kiếm Vấn Đề Cốt Lõi & Dự Án Thí Điểm",
        title: "Hiểu Sâu Nỗi Đau Cộng Đồng & Xây Dựng Mô Hình Thử Nghiệm",
        milestone: "Triển khai thành công 1 dự án cộng đồng tạo ra tác động đo lường được cho ít nhất 200 người thụ hưởng.",
        tasks: [
          "Thực hiện nghiên cứu thực địa (Fieldwork) để lắng nghe trực tiếp khó khăn của đối tượng mục tiêu.",
          "Học cách viết đề xuất xin tài trợ (Grant Proposal) và kỹ năng gây quỹ chuyên nghiệp.",
          "Hợp tác với các tổ chức thiện nguyện uy tín đã có sẵn mạng lưới cơ sở.",
          "Ứng dụng nguyên lý 'Hiệu Quả Vị Tha' (Effective Altruism) để tối đa hóa tác động trên mỗi đồng tiền chi ra."
        ]
      },
      {
        phase: "Giai Đoạn 2 (Năm 1 - 3): Xây Dựng Doanh Nghiệp Xã Hội Tự Chủ Tài Chính",
        title: "Thương Mại Hóa Vì Sứ Mệnh: Không Cần Sống Phụ Thuộc Vào Quyên Góp",
        milestone: "Doanh nghiệp xã hội đạt điểm hòa vốn và tự tạo ra 70% ngân sách hoạt động; mở rộng ra 3 tỉnh thành.",
        tasks: [
          "Xây dựng mô hình kinh doanh có lợi nhuận để tái đầu tư 100% vào sứ mệnh phụng sự.",
          "Vận động các nhà tài trợ lớn, doanh nghiệp CSR đồng hành dài hạn.",
          "Đưa công nghệ vào giám sát tính minh bạch tài chính 100% bằng Blockchain hoặc công khai mở.",
          "Tập hợp đội ngũ tình nguyện viên và nhân sự toàn thời gian có cùng hệ giá trị phụng sự."
        ]
      },
      {
        phase: "Giai Đoạn 3 (Năm 3 - 5+): Vận Động Chính Sách & Tạo Tác Động Quy Mô Quốc Gia",
        title: "Thay Đổi Cấu Trúc Hệ Thống: Để Lại Di Sản Nhân Văn Trường Tồn",
        milestone: "Giải pháp của bạn được nhân rộng thành chính sách công hoặc mô hình quốc tế; nâng đỡ cuộc sống của hàng vạn người.",
        tasks: [
          "Tham gia tham vấn và vận động các chính sách xã hội có lợi cho người yếu thế.",
          "Liên kết với các tổ chức của Liên Hợp Quốc (UN), World Bank để tiếp cận nguồn lực toàn cầu.",
          "Xây dựng học viện đào tạo các nhà lãnh đạo xã hội thế hệ kế tiếp.",
          "Ghi dấu ấn của bạn như một người thắp đuốc sưởi ấm thế giới này."
        ]
      }
    ],

    actionToolkit: {
      habits: [
        "Mỗi tuần dành ít nhất nửa ngày trực tiếp gặp gỡ và lắng nghe những mảnh đời khó khăn.",
        "Rèn luyện kỹ năng kết nối (Networking) với các nhà hảo tâm và lãnh đạo doanh nghiệp hàng đầu.",
        "Tập thể lực cường độ cao để có cơ thể sắt đá gánh vác các chuyến đi công tác xa xôi hiểm trở.",
        "Thiền định từ bi (Metta Meditation): Gửi năng lượng yêu thương và an lành đến muôn loài.",
        "Cân bằng cảm xúc: Nhắc nhở bản thân rằng thay đổi thế giới là một cuộc chạy Marathon, không phải chạy nước rút."
      ],
      skillStack: [
        "Kỹ năng Vận động Gây quỹ & Quản lý Nguồn lực (Fundraising & Resource Mobilization)",
        "Đo lường & Đánh giá Tác động Xã hội (Social Impact Measurement - SROI)",
        "Thiết kế Doanh nghiệp Xã hội Bền vững (Social Business Model Canvas)",
        "Truyền thông Thay đổi Hành vi & Vận động Chính sách (Advocacy & Public Campaigning)"
      ],
      books: [
        "Tạo Ra Một Thế Giới Không Nghèo Đói - Muhammad Yunus",
        "Làm Việc Thiện Đúng Cách (Doing Good Better) - William MacAskill",
        "Người Dám Cho Đi (The Go-Giver) - Bob Burg, John David Mann",
        "Đường Dài Tới Tự Do (Long Walk to Freedom) - Nelson Mandela"
      ]
    }
  }
};
