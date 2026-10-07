// Ngân hàng câu hỏi trắc nghiệm đa tầng phân tích Bản Thể Tương Lai
// 4 Chặng: Danh tính & Xuất phát điểm -> Tính cách & Tư duy -> Thân phận & Giá trị -> Khát vọng Tương lai

export const STAGES = [
  {
    id: 1,
    title: "Chặng 1: Danh Tính & Xuất Phát Điểm",
    description: "Nhận diện gốc rễ nội tại, bối cảnh hiện tại và động lực thúc đẩy bạn mỗi sớm thức dậy.",
    icon: "user-check"
  },
  {
    id: 2,
    title: "Chặng 2: Tính Cách & Phong Cách Tư Duy",
    description: "Giải mã cách não bộ bạn phản ứng trước biến số, áp lực, sáng tạo và sự kiên định.",
    icon: "brain-circuit"
  },
  {
    id: 3,
    title: "Chặng 3: Thân Phận, Vị Thế & Giá Trị Cốt Lõi",
    description: "Xác định chuẩn mực thành công, vai trò xã hội và những điều bạn tuyệt đối không thỏa hiệp.",
    icon: "shield-star"
  },
  {
    id: 4,
    title: "Chặng 4: Tầm Nhìn & Khát Vọng Tương Lai",
    description: "Phóng chiếu bối cảnh 5 - 10 năm tới và dấu ấn bạn muốn khắc ghi trong cuộc đời này.",
    icon: "sparkles"
  }
];

export const QUESTIONS = [
  // CHẶNG 1: DANH TÍNH & XUẤT PHÁT ĐIỂM
  {
    id: "q1",
    stage: 1,
    title: "Khi được hỏi 'Bạn là ai?', điều đầu tiên định hình danh tính của bạn trong suy nghĩ là gì?",
    subtitle: "Hãy chọn câu trả lời mô tả chân thực nhất cảm xúc tự thân của bạn hiện nay.",
    options: [
      {
        text: "Một người không ngừng tìm kiếm ý tưởng mới và kiến tạo những thứ độc bản chưa từng có.",
        desc: "Ưu tiên sự khác biệt, tự do biểu đạt và bản sắc riêng.",
        scores: { innovation: 3, vision: 2, execution: 1 }
      },
      {
        text: "Một nhà thực thi bền bỉ, thích lập kế hoạch rõ ràng và giải quyết bài toán thực tế bằng kết quả đo đếm được.",
        desc: "Ưu tiên tính kỷ luật, sự tin cậy và hiệu suất vượt trội.",
        scores: { execution: 3, wealth: 2, vision: 1 }
      },
      {
        text: "Một người dẫn dắt bẩm sinh, luôn khao khát quy tụ con người và tạo ra ảnh hưởng lớn lên cộng đồng.",
        desc: "Ưu tiên quyền lực tích cực, truyền cảm hứng và xây dựng đội ngũ.",
        scores: { influence: 3, vision: 2, execution: 1 }
      },
      {
        text: "Một tâm hồn tìm kiếm sự bình an, cân bằng nội tâm, trân trọng gia đình và sức khỏe toàn diện.",
        desc: "Ưu tiên an lạc, hài hòa và sống trọn vẹn từng khoảnh khắc hiện tại.",
        scores: { wellBeing: 3, influence: 1, innovation: 1 }
      }
    ]
  },
  {
    id: "q2",
    stage: 1,
    title: "Đâu là động lực ngầm sâu sắc nhất thúc đẩy bạn nỗ lực mỗi ngày?",
    subtitle: "Thứ làm bạn thức dậy lúc 6h sáng hoặc trăn trở lúc nửa đêm.",
    options: [
      {
        text: "Độc lập tuyệt đối về tài chính và tự do làm chủ 100% quỹ thời gian của mình.",
        desc: "Không bị ràng buộc bởi hợp đồng cố định hay cấp bậc công sở.",
        scores: { wealth: 3, execution: 2, innovation: 1 }
      },
      {
        text: "Làm chủ một công nghệ đột phá hoặc giải mã những tri thức đỉnh cao phức tạp.",
        desc: "Niềm say mê khoa học, kỹ thuật và xây dựng hệ thống tân tiến.",
        scores: { innovation: 3, execution: 2, vision: 1 }
      },
      {
        text: "Để lại một di sản, cứu giúp hoặc nâng tầm chất lượng cuộc sống cho hàng nghìn con người.",
        desc: "Ý nghĩa cuộc đời gắn liền với sự cống hiến và giá trị trao đi.",
        scores: { influence: 3, wellBeing: 2, vision: 1 }
      },
      {
        text: "Xây dựng một 'đế chế' riêng - một tổ chức, công ty hay phong trào mang đậm dấu ấn cá nhân.",
        desc: "Tham vọng thống lĩnh thị trường và dẫn dắt một sứ mệnh lớn.",
        scores: { vision: 3, execution: 2, wealth: 2 }
      }
    ]
  },
  {
    id: "q3",
    stage: 1,
    title: "Xuất phát điểm và lợi thế cạnh tranh tự nhiên mạnh nhất của bạn hiện tại là gì?",
    subtitle: "Tài năng thiên bẩm hoặc kỹ năng bạn học nhanh hơn người bình thường.",
    options: [
      {
        text: "Tư duy phân tích sắc bén, nhìn thấy quy luật ẩn sau các con số và dữ liệu.",
        desc: "Khả năng chiến lược, giải phẫu vấn đề và dự đoán logic.",
        scores: { vision: 2, execution: 2, wealth: 2 }
      },
      {
        text: "Khả năng thấu hiểu tâm lý, lắng nghe sâu sắc và thuyết phục người khác.",
        desc: "Trí tuệ cảm xúc (EQ) cao, dễ dàng kết nối và tạo thiện cảm.",
        scores: { influence: 3, wellBeing: 2, vision: 1 }
      },
      {
        text: "Sức bền chịu tải, ý chí 'nói là làm', không ngại lao vào việc khó và hoàn thành đến cùng.",
        desc: "Tính kiên định thép và năng lực thực thi không ngần ngại.",
        scores: { execution: 3, wealth: 1, wellBeing: 1 }
      },
      {
        text: "Trí tưởng tượng không giới hạn, nhạy cảm với cái đẹp và xu hướng thẩm mỹ/công nghệ mới.",
        desc: "Tư duy sáng tạo liên ngành, khả năng 'kết nối những dấu chấm'.",
        scores: { innovation: 3, vision: 2, influence: 1 }
      }
    ]
  },
  {
    id: "q4",
    stage: 1,
    title: "Mối quan hệ của bạn với sự an toàn và vùng an toàn (Comfort Zone)?",
    subtitle: "Cách bạn định vị mình giữa dòng xoáy bất định của thời đại.",
    options: [
      {
        text: "Cảm thấy bồn chồn nếu ở trong vùng an toàn quá lâu; thích mạo hiểm có tính toán.",
        desc: "Sẵn sàng đánh cược lớn để đổi lấy bước nhảy vọt tầm cỡ.",
        scores: { vision: 3, innovation: 2, wealth: 1 }
      },
      {
        text: "Luôn cần một tấm đệm vững chắc trước khi mở rộng từng bước thận trọng.",
        desc: "Ưu tiên quản trị rủi ro, dự phòng tài chính và phát triển bền vững.",
        scores: { execution: 2, wealth: 2, wellBeing: 2 }
      },
      {
        text: "Thích ứng linh hoạt như dòng nước: Nơi nào có tự do và không gian sáng tạo, nơi đó là nhà.",
        desc: "Không quan trọng sự ổn định hình thức, miễn là được tự chủ trải nghiệm.",
        scores: { innovation: 2, wellBeing: 2, wealth: 1 }
      },
      {
        text: "An toàn thực sự là khi tôi kiểm soát được hệ thống và có đủ đồng minh trung thành.",
        desc: "Tạo lập sự an toàn cho chính mình và mọi người xung quanh bằng vị thế lãnh đạo.",
        scores: { influence: 2, vision: 2, execution: 2 }
      }
    ]
  },

  // CHẶNG 2: TÍNH CÁCH & PHONG CÁCH TƯ DUY
  {
    id: "q5",
    stage: 2,
    title: "Khi đối mặt với một khủng hoảng lớn bất ngờ (thất bại dự án, biến cố tài chính/sự nghiệp), bạn sẽ:",
    subtitle: "Phản ứng bản năng trong những giờ phút ngặt nghèo nhất.",
    options: [
      {
        text: "Giữ đầu lạnh, lập tức phân tích nguyên nhân gốc rễ và cơ cấu lại toàn bộ phương án hành động.",
        desc: "Logic là vũ khí tối thượng, không để cảm xúc lấn át quyết định.",
        scores: { execution: 2, vision: 2, wealth: 2 }
      },
      {
        text: "Đứng lên trước tập thể, sốc lại tinh thần mọi người và biến nguy cơ thành động lực chuyển mình.",
        desc: "Truyền lửa, gánh vác trách nhiệm và định hướng lối thoát chung.",
        scores: { influence: 3, vision: 2, execution: 1 }
      },
      {
        text: "Nhanh chóng 'xoay trục' (pivot), nghĩ ra một giải pháp khác thường, lách khỏi lối mòn.",
        desc: "Xem khủng hoảng là cơ hội vàng để phá vỡ luật chơi cũ.",
        scores: { innovation: 3, vision: 2, execution: 1 }
      },
      {
        text: "Lùi lại một nhịp để tĩnh tâm, chăm sóc tinh thần, tránh phản ứng bốc đồng gây thêm tổn thương.",
        desc: "Bảo tồn năng lượng nội tại trước khi tìm kiếm sự cân bằng phục hồi.",
        scores: { wellBeing: 3, execution: 1, influence: 1 }
      }
    ]
  },
  {
    id: "q6",
    stage: 2,
    title: "Môi trường làm việc nào kích hoạt tối đa 100% công suất trí tuệ của bạn?",
    subtitle: "Không gian giúp bạn bước vào trạng thái dòng chảy (Flow State).",
    options: [
      {
        text: "Một không gian tĩnh lặng, độc lập, nơi bạn có hàng giờ Deep Work liền mạch không ai quấy rầy.",
        desc: "Tối đa hóa năng suất chuyên sâu của cá nhân.",
        scores: { execution: 2, innovation: 2, wellBeing: 1 }
      },
      {
        text: "Một 'War Room' sôi động, hội tụ những bộ não tinh hoa cùng tranh luận nảy lửa và ra quyết định tốc độ cao.",
        desc: "Nạp năng lượng từ sự cộng hưởng trí tuệ và nhịp độ khẩn trương.",
        scores: { vision: 3, influence: 2, wealth: 1 }
      },
      {
        text: "Bất cứ đâu: Một quán cà phê bên bãi biển, một góc phòng ở Kyoto, chỉ cần có laptop và internet tốc độ cao.",
        desc: "Tự do tuyệt đối về địa lý, không ranh giới công sở.",
        scores: { wealth: 2, innovation: 2, wellBeing: 2 }
      },
      {
        text: "Một môi trường ấm áp, nhân văn, nơi mọi người quan tâm nâng đỡ nhau cùng tiến bộ mỗi ngày.",
        desc: "Văn hóa tin cậy, an toàn tâm lý và gắn kết sâu sắc.",
        scores: { wellBeing: 3, influence: 2, vision: 1 }
      }
    ]
  },
  {
    id: "q7",
    stage: 2,
    title: "Bạn đánh giá thế nào về cách tiếp cận của mình với công nghệ mới (như Trí tuệ nhân tạo - AI)?",
    subtitle: "Thái độ của bạn đối với làn sóng đổi mới công nghệ hiện nay.",
    options: [
      {
        text: "Tôi chủ động tìm hiểu sâu về nguyên lý cốt lõi, viết prompt phức tạp hoặc muốn làm chủ thuật toán.",
        desc: "Xem công nghệ là đôi cánh để mở khóa tiềm năng vô hạn.",
        scores: { innovation: 3, vision: 2, execution: 1 }
      },
      {
        text: "Tôi dùng AI như một đòn bẩy tối ưu hóa quy trình, tự động hóa để cắt giảm chi phí và nhân bội lợi nhuận.",
        desc: "Tập trung vào hiệu quả kinh tế và năng suất dòng tiền.",
        scores: { wealth: 3, execution: 2, vision: 1 }
      },
      {
        text: "Tôi quan tâm đến tác động xã hội của công nghệ: Làm sao để công nghệ phục vụ con người mà không đánh mất nhân tính.",
        desc: "Góc nhìn nhân văn, đạo đức và triết học trong kỷ nguyên số.",
        scores: { wellBeing: 2, influence: 2, vision: 2 }
      },
      {
        text: "Tôi dùng nó để khuếch đại thông điệp và kết nối với khán giả/cộng đồng rộng lớn hơn.",
        desc: "Công nghệ là chiếc loa phóng thanh cho tầm ảnh hưởng cá nhân.",
        scores: { influence: 3, innovation: 1, vision: 1 }
      }
    ]
  },
  {
    id: "q8",
    stage: 2,
    title: "Khi phải lựa chọn giữa một cơ hội an toàn (lương cao ổn định) và một canh bạc khởi nghiệp (thắng lớn hoặc mất trắng), bạn thường nghiêng về:",
    subtitle: "Khẩu vị mạo hiểm đích thực của bạn.",
    options: [
      {
        text: "Canh bạc mạo hiểm! Cuộc đời quá ngắn để sống một cuộc đời trung bình nhạt nhẽo.",
        desc: "Chấp nhận đau thương ngắn hạn để săn đuổi phần thưởng phi đối xứng.",
        scores: { vision: 3, wealth: 2, innovation: 1 }
      },
      {
        text: "Chọn sự an toàn để tích lũy nền tảng tài chính, sau đó dùng 20% vốn đầu tư mạo hiểm thông minh.",
        desc: "Chiến lược Barbell (Quả tạ) của Nassim Taleb: Vừa phòng thủ kiên cố, vừa tấn công cơ hội.",
        scores: { wealth: 3, execution: 2, wellBeing: 1 }
      },
      {
        text: "Không chọn cả hai; tôi chọn con đường tự do làm những dự án mình đam mê dù thu nhập lên xuống.",
        desc: "Ưu tiên tối thượng là quyền tự quyết (Autonomy) chứ không phải quy mô tiền tệ.",
        scores: { innovation: 2, wellBeing: 3, wealth: 1 }
      },
      {
        text: "Chọn nơi nào cho tôi cơ hội gặp gỡ những người thầy vĩ đại và mở rộng vòng tròn ảnh hưởng.",
        desc: "Vốn xã hội và trải nghiệm lãnh đạo quý giá hơn lợi tức trước mắt.",
        scores: { influence: 3, vision: 2, execution: 1 }
      }
    ]
  },

  // CHẶNG 3: THÂN PHẬN, VỊ THẾ & GIÁ TRỊ CỐT LÕI
  {
    id: "q9",
    stage: 3,
    title: "Thước đo nào phản ánh chính xác nhất 'Thành Công' theo định nghĩa chân thật của riêng bạn?",
    subtitle: "Thước đo không bị ảnh hưởng bởi kỳ vọng của cha mẹ hay mạng xã hội.",
    options: [
      {
        text: "Tài sản ròng lớn, dòng tiền thụ động dồi dào, tự do tài chính trước tuổi 40.",
        desc: "Tiền bạc là thước đo của giá trị bạn tạo ra và chìa khóa mở mọi cánh cửa tự do.",
        scores: { wealth: 3, execution: 2, vision: 1 }
      },
      {
        text: "Được công nhận là bậc thầy tinh hoa số một trong chuyên môn hoặc lĩnh vực bạn theo đuổi.",
        desc: "Sự tôn trọng từ giới chuyên môn và những tác phẩm để đời.",
        scores: { innovation: 3, execution: 2, vision: 1 }
      },
      {
        text: "Hàng triệu người được truyền cảm hứng, thay đổi tư duy và có cuộc sống tốt đẹp hơn nhờ bạn.",
        desc: "Sức ảnh hưởng tích cực và tình yêu thương của cộng đồng.",
        scores: { influence: 3, wellBeing: 2, vision: 1 }
      },
      {
        text: "Một tâm trí an nhiên, không lo âu, ngủ ngon mỗi tối, có thời gian bên người thương yêu và cơ thể khỏe mạnh.",
        desc: "Hạnh phúc đích thực nằm ở sự cân bằng và bình yên nội tại.",
        scores: { wellBeing: 3, influence: 1, wealth: 1 }
      }
    ]
  },
  {
    id: "q10",
    stage: 3,
    title: "Vòng tròn xã hội (Network) lý tưởng mà bạn muốn xây dựng và duy trì là gì?",
    subtitle: "Bạn là trung bình cộng của 5 người bạn dành nhiều thời gian nhất.",
    options: [
      {
        text: "Vòng tròn hẹp các nhà sáng lập, nhà đầu tư lớn và các nhà lãnh đạo có quyền lực thay đổi cuộc chơi.",
        desc: "Tập trung vào tầm nhìn vĩ mô và sức mạnh cộng hưởng cấp cao.",
        scores: { vision: 3, wealth: 2, influence: 2 }
      },
      {
        text: "Một cộng đồng những người làm việc tự do, sáng tạo nội dung, nghệ sĩ phóng khoáng đa văn hóa khắp năm châu.",
        desc: "Tự do, đa dạng góc nhìn, không phán xét và tràn ngập cảm hứng sống.",
        scores: { innovation: 2, wellBeing: 2, influence: 1 }
      },
      {
        text: "Vài tri kỷ thâm sâu, những người bạn chân thành từ thuở hàn vi và gia đình hòa thuận.",
        desc: "Ưu tiên chất lượng tình cảm tuyệt đối hơn số lượng quan hệ xã giao.",
        scores: { wellBeing: 3, execution: 1, influence: 1 }
      },
      {
        text: "Những chuyên gia kỹ thuật hàng đầu, nhà nghiên cứu, hacker và kiến trúc sư hệ thống uyên bác.",
        desc: "Giao tiếp bằng logic chuẩn xác, code sạch và giải pháp tối ưu.",
        scores: { innovation: 3, execution: 2, vision: 1 }
      }
    ]
  },
  {
    id: "q11",
    stage: 3,
    title: "Thói quen kỷ luật tự thân đối với thời gian và công việc hàng ngày của bạn hiện tại như thế nào?",
    subtitle: "Thành tựu tương lai được xây nên từ thói quen hôm nay.",
    options: [
      {
        text: "Kỷ luật thép: Lên lịch Time-blocking chi tiết đến từng 30 phút, theo dõi mục tiêu OKR/KPI sát sao.",
        desc: "Tôn thờ chủ nghĩa hiệu suất và sự chuẩn hóa cao độ.",
        scores: { execution: 3, wealth: 2, vision: 1 }
      },
      {
        text: "Linh hoạt theo cảm hứng: Khi có luồng sáng tạo thì làm việc thâu đêm suốt sáng, khi cạn năng lượng thì nghỉ ngơi trọn vẹn.",
        desc: "Tôn trọng nhịp sinh học tự nhiên và những khoảnh khắc bùng nổ.",
        scores: { innovation: 3, wellBeing: 2, execution: 1 }
      },
      {
        text: "Tập trung vào 1-2 việc quan trọng nhất mỗi ngày (Nguyên lý 80/20), phần còn lại ủy quyền hoặc cắt bỏ.",
        desc: "Tư duy đòn bẩy hiệu quả: Làm ít nhưng tạo kết quả vượt bậc.",
        scores: { vision: 2, execution: 2, wealth: 2 }
      },
      {
        text: "Ưu tiên nhịp sống điều độ: Thức dậy sớm, thiền định/tập gym, làm việc vừa phải và dành trọn buổi tối cho bản thân.",
        desc: "Kiên định với lối sống trường thọ, bền bỉ đường dài.",
        scores: { wellBeing: 3, execution: 2, influence: 1 }
      }
    ]
  },
  {
    id: "q12",
    stage: 3,
    title: "Khi kiếm được một khoản tiền lớn bất ngờ, ưu tiên phân bổ số một của bạn là gì?",
    subtitle: "Cách bạn sử dụng tư bản phản ánh thân phận và tư duy tài chính tương lai.",
    options: [
      {
        text: "Tái đầu tư 80% vào các tài sản sinh lời (chứng khoán, bất động sản, crypto) để tạo lãi kép.",
        desc: "Tư duy tích lũy tư bản và bắt tiền làm việc cật lực cho mình.",
        scores: { wealth: 3, execution: 2, vision: 1 }
      },
      {
        text: "Rót vốn vào dự án khởi nghiệp mới hoặc nâng cấp công cụ/thiết bị sáng tạo tối tân nhất.",
        desc: "Đầu tư vào phương tiện sản xuất và các ý tưởng có biên độ bứt phá.",
        scores: { innovation: 2, vision: 2, execution: 2 }
      },
      {
        text: "Trích một phần lớn lập quỹ hỗ trợ người thân, học bổng hoặc hoạt động thiện nguyện xã hội.",
        desc: "San sẻ phước lành và nâng đỡ những hoàn cảnh kém may mắn.",
        scores: { influence: 3, wellBeing: 2, vision: 1 }
      },
      {
        text: "Đầu tư cho trải nghiệm sống: Du lịch khám phá thế giới, các khóa học nâng tầm tâm thức và chăm sóc sức khỏe đỉnh cao.",
        desc: "Tài sản quý nhất là trải nghiệm phong phú và sức khỏe của bản thân.",
        scores: { wellBeing: 3, innovation: 2, wealth: 1 }
      }
    ]
  },

  // CHẶNG 4: TẦM NHÌN & KHÁT VỌNG TƯƠNG LAI
  {
    id: "q13",
    stage: 4,
    title: "Hãy nhắm mắt lại và tưởng tượng bạn ở 7-10 năm tới. Bạn nhìn thấy mình đang đứng ở đâu?",
    subtitle: "Bức tranh trực giác sống động nhất hiện lên trong tâm trí bạn.",
    options: [
      {
        text: "Đứng trên sân khấu lớn trước hàng nghìn khán giả, truyền tải tầm nhìn khai phóng và dẫn dắt xu hướng mới.",
        desc: "Một biểu tượng lãnh đạo truyền cảm hứng đầy uy quyền và sức hút.",
        scores: { influence: 3, vision: 3, execution: 1 }
      },
      {
        text: "Trong một phòng thí nghiệm hoặc studio tối tân, ngắm nhìn sản phẩm công nghệ/nghệ thuật mà cả thế giới đang sử dụng.",
        desc: "Người kiến tạo đứng sau những đổi thay mang tính cách mạng.",
        scores: { innovation: 3, vision: 2, execution: 2 }
      },
      {
        text: "Trên ban công một căn biệt thự nhìn ra biển, nhâm nhi ly cà phê, kiểm tra các báo cáo đầu tư thụ động tự động chạy.",
        desc: "Tự do hoàn mỹ, làm chủ vận mệnh tài chính và thảnh thơi tận hưởng cuộc đời.",
        scores: { wealth: 3, wellBeing: 2, execution: 1 }
      },
      {
        text: "Trong một không gian yên bình xanh ngát, hướng dẫn một nhóm học trò/khách hàng tìm lại lẽ sống và chữa lành tổn thương.",
        desc: "Một bậc thầy tâm hồn, người soi sáng và nâng đỡ cuộc đời người khác.",
        scores: { wellBeing: 3, influence: 3, vision: 1 }
      }
    ]
  },
  {
    id: "q14",
    stage: 4,
    title: "Nếu sau này được viết một cuốn hồi ký về cuộc đời mình, bạn muốn tên cuốn sách là gì?",
    subtitle: "Thông điệp cốt lõi gói gọn toàn bộ hành trình sống của bạn.",
    options: [
      {
        text: "'Kẻ Phá Băng: Dám Nghĩ Khác Và Kiến Tạo Đế Chế Từ Con Số Không'.",
        desc: "Khát vọng khai phá, chinh phục và mở đường cho những điều vĩ đại.",
        scores: { vision: 3, execution: 2, wealth: 2 }
      },
      {
        text: "'Bản Độc Bản: Hành Trình Của Một Kẻ Say Mê Sáng Tạo Và Khác Biệt'.",
        desc: "Tôn vinh sự nguyên bản, trí tuệ đổi mới và cái tôi nghệ thuật/kỹ thuật.",
        scores: { innovation: 3, execution: 1, wellBeing: 2 }
      },
      {
        text: "'Vòng Tay Lớn: Sống Là Cho Đâu Chỉ Nhận Riêng Mình'.",
        desc: "Giá trị của lòng trắc ẩn, tình người và sự sẻ chia không vụ lợi.",
        scores: { influence: 3, wellBeing: 3, vision: 1 }
      },
      {
        text: "'Nghệ Thuật Sống Tự Tại: Tự Do Tài Chính, An Yên Trong Tâm'.",
        desc: "Bản lĩnh làm chủ vật chất để đạt tới sự giải phóng tinh thần tối thượng.",
        scores: { wealth: 2, wellBeing: 3, execution: 1 }
      }
    ]
  },
  {
    id: "q15",
    stage: 4,
    title: "Nỗi sợ lớn nhất nếu nhìn lại cuộc đời ở tuổi 80 là gì?",
    subtitle: "Nỗi sợ nghịch đảo chỉ ra chính xác điều bạn trân quý nhất.",
    options: [
      {
        text: "Sống một cuộc đời an phận thủ thường, chưa từng dám chơi một ván cược lớn cho ước mơ của mình.",
        desc: "Sợ sự tầm thường và lãng phí tiềm năng to lớn bên trong.",
        scores: { vision: 3, innovation: 2, execution: 1 }
      },
      {
        text: "Cả đời làm việc quần quật vì tiền bạc danh vọng nhưng đánh mất sức khỏe, sự bình yên và tình cảm gia đình.",
        desc: "Sợ sự hối tiếc vì đánh mất những giá trị nguyên bản của hạnh phúc.",
        scores: { wellBeing: 3, influence: 1, wealth: 1 }
      },
      {
        text: "Không có đủ tự do tài chính, phải phụ thuộc vào người khác hoặc luôn loay hoay trong vòng xoáy cơm áo gạo tiền.",
        desc: "Sợ sự bấp bênh và mất quyền kiểm soát cuộc sống.",
        scores: { wealth: 3, execution: 2, wellBeing: 1 }
      },
      {
        text: "Sống mà không để lại bất kỳ giá trị hay sự nâng đỡ nào cho ai, biến mất không dấu tích giữa thế gian.",
        desc: "Sợ sự cô lập và cuộc đời vô nghĩa không để lại di sản nhân văn.",
        scores: { influence: 3, wellBeing: 2, vision: 1 }
      }
    ]
  },
  {
    id: "q16",
    stage: 4,
    title: "Khi được trao một cây đũa thần để nâng cấp một siêu năng lực ngay tức khắc, bạn chọn:",
    subtitle: "Lựa chọn này sẽ đóng vai trò quyết định cấu trúc lộ trình phát triển tương lai của bạn.",
    options: [
      {
        text: "Khả năng nhìn thấu tương lai 10 năm và lập chiến lược thần tốc không sai lệch một bước.",
        desc: "Tầm nhìn thiên tài giúp bạn luôn đi trước thời đại một bước.",
        scores: { vision: 3, execution: 2, wealth: 1 }
      },
      {
        text: "Năng lực siêu sáng tạo: Liên tục nảy sinh giải pháp đột phá chưa ai từng nghĩ tới.",
        desc: "Bộ não đổi mới biến mọi vấn đề bế tắc thành cơ hội triệu đô.",
        scores: { innovation: 3, vision: 2, execution: 1 }
      },
      {
        text: "Sức hút cá nhân mãnh liệt và khả năng thấu cảm thu phục nhân tâm ở cấp độ đỉnh cao.",
        desc: "Quyền năng tập hợp những nhân tài giỏi nhất thế giới cùng về một ngọn cờ.",
        scores: { influence: 3, wellBeing: 2, vision: 1 }
      },
      {
        text: "Kỷ luật thép tự thân và sức chịu đựng vô hạn, biến mọi kế hoạch thành hiện thực với độ chính xác 100%.",
        desc: "Động cơ thực thi không thể bị đánh bại trước bất kỳ gian nan nào.",
        scores: { execution: 3, wealth: 2, wellBeing: 1 }
      }
    ]
  }
];
