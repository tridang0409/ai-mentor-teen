/* ── CONSTANTS ─────────────────────────────────────────────────── */
const DRAFT_KEY = "pb_v5";
const PREFILL_KEY = "aimt_prefill_v1";
const LIT_PROGRESS_KEY = "aimt_literacy_progress_v1";
const UI_PREF_KEY = "aimt_ui_pref_v1";
const CUSTOM_BLOCKS_KEY = "aimt_custom_blocks_v1";
const PRACTICE_SESSION_KEY = "aimt_practice_session_v1";
const ACTIVE_ASSIGNMENT_KEY = "aimt_active_assignment_v1";
const PRACTICE_PROGRESS_KEY = "aimt_practice_progress_v1";
const AI_SETTINGS_KEY = "aimt_ai_settings_v1";

const I18N = {
  vi: {
    page_title: "AI Mentor Teen — Studio Tạo Prompt",
    subtitle: "Studio Tạo Prompt",
    route_builder: "Trình tạo",
    route_literacy: "Học AI",
    route_progress: "Tiến độ học AI",
    btn_run: "⚡ Chạy Prompt",
    btn_submit: "📤 Nộp bài",
    btn_reset: "↺ Làm mới",
    btn_save: "💾 Lưu nháp",
    btn_copy: "Copy",
    btn_settings: "⚙️ Cài đặt",
    ai_engine_auto: "AI Engine: Auto",
    btn_submit_hint: "Hãy chọn bài trong tab Học AI",
    btn_submit_ready: "Nộp bài cho: {lesson}",
    mode_student: "Học sinh",
    mode_studio: "Studio",
    theme_dark: "Tối",
    theme_light: "Sáng",
    lib_title: "Khối lệnh",
    lib_note: "Bấm vào block để thêm vào Canvas.",
    lib_search_label: "Tìm block",
    lib_search_placeholder: "Vai trò, bối cảnh, ràng buộc…",
    canvas_title: "Khung Prompt",
    assignment_banner_title: "Bài tập đang làm",
    assignment_domain_fallback: "Học AI",
    assignment_status_pending: "Chưa nộp",
    assignment_status_passed: "Đã nộp • Đạt",
    assignment_status_failed: "Đã nộp • Chưa đạt",
    assignment_status_time: "Nộp lúc {time}",
    assignment_status_compact_done: "✅ Đã nộp {score}/100",
    assignment_status_compact_pending: "⚠️ Chưa nộp",
    assignment_change: "Đổi bài",
    assignment_hide: "Ẩn đề bài",
    assignment_show: "Hiện đề bài",
    assignment_task_label: "Đề bài",
    assignment_checklist_label: "Tiêu chí đạt",
    assignment_rubric_btn: "Ẩn tiêu chí",
    assignment_rubric_show: "Xem tiêu chí",
    assignment_reuse_saved: "Đã nạp prompt đã nộp trước đó.",
    assignment_canvas_hint: "Bấm block gợi ý để bắt đầu.",
    assignment_meta_best_label: "Best",
    assignment_meta_attempts_label: "Attempts",
    assignment_default_task: "Chọn một bài trong tab Học AI để hiện đề bài ở đây.",
    rubric_status_label: "Rubric",
    rubric_status_pass: "Đạt",
    rubric_status_fail: "Chưa đạt",
    rubric_missing_label: "Thiếu",
    rubric_direction_label: "Sai hướng",
    rubric_direction_need: "Sai hướng: đang dùng {current}, tiêu chí cần {required}.",
    rubric_order_bad: "Thứ tự cấu trúc chưa hợp lý (nên theo Vai trò → Nhiệm vụ → Bối cảnh → Ràng buộc → An toàn/Kiểm chứng).",
    rubric_hint_easy_example: "Ví dụ: AI là người hướng dẫn học tập, tạo nhiệm vụ cụ thể cho học sinh lớp 8, có ràng buộc độ dài.",
    rubric_hint_medium: "Gợi ý cấu trúc: Vai trò → Nhiệm vụ → Bối cảnh → Ràng buộc → Kiểm chứng (nếu có dữ liệu).",
    rubric_hint_hard: "Mức khó: hệ thống chỉ báo phần còn thiếu khi bạn nộp bài.",
    type_role: "Vai trò",
    type_task: "Nhiệm vụ",
    type_context: "Bối cảnh",
    type_style: "Phong cách",
    type_rules: "Ràng buộc",
    type_verify: "Kiểm chứng",
    type_safety: "An toàn",
    canvas_empty_title: "Canvas trống",
    canvas_empty_desc: "Bấm block bên trái để bắt đầu xây prompt.",
    canvas_empty_hint: "💡 Vai trò -> Nhiệm vụ -> Bối cảnh -> Ràng buộc",
    canvas_remove_btn: "✕ Xóa",
    custom_label_main: "Nội dung tùy chỉnh",
    custom_label_optional: "(tùy chọn)",
    custom_placeholder: "Ví dụ: Học sinh lớp 8, cần bài tập ngắn để ôn tư duy phản biện…",
    score_title: "📊 Điểm Prompt",
    safety_title: "🛡 Kiểm tra an toàn",
    safety_waiting: "Đang chờ",
    safety_waiting_note: "Kiểm tra an toàn sẽ cập nhật khi bạn thêm block.",
    safety_suggest_title: "Gợi ý cải thiện",
    preview_title: "Xem trước prompt",
    preview_empty: "Prompt sẽ xuất hiện tại đây.",
    block_count_unit: "khối",
    sandbox_title: "Đầu ra mô phỏng",
    tips_title: "💡 Mẹo nhanh",
    tips_1: 'Thêm "Ràng buộc" để AI trả lời đúng trọng tâm.',
    tips_2: 'Có số liệu/dữ kiện -> thêm block "Kiểm chứng".',
    tips_3: "Nếu dán nội dung từ web, ghi rõ giới hạn nguồn ngoài.",
    lit_progress_title: "Tiến độ học AI",
    lit_progress_subtitle: "Tổng quan học tập • luyện tập • an toàn",
    lit_progress_updated_none: "Cập nhật gần nhất: chưa có dữ liệu",
    lit_progress_updated_at: "Cập nhật gần nhất: {time}",
    lit_progress_chip_updated_none: "Cập nhật: --",
    lit_progress_chip_updated_at: "Cập nhật: {time}",
    lit_kpi_percent_label: "Tỷ lệ hoàn thành",
    lit_kpi_avg_label: "Điểm quiz trung bình",
    progress_practice_avg_label: "Điểm practice trung bình",
    progress_best_score_label: "Best score",
    progress_submit_count_label: "Số lần nộp bài",
    lit_kpi_done_label: "Bài đã hoàn thành",
    chart_donut_title: "Tỷ lệ hoàn thành bài học",
    chart_line_title: "Điểm practice theo thời gian",
    chart_domain_title: "Điểm trung bình theo domain",
    chart_safety_title: "PASS/WARN/FAIL an toàn",
    chart_legend_complete: "Đã hoàn thành",
    chart_legend_remaining: "Chưa hoàn thành",
    chart_legend_pass: "PASS",
    chart_legend_warn: "WARN",
    chart_legend_fail: "FAIL",
    chart_empty: "Chưa có dữ liệu",
    chart_insufficient: "Không đủ dữ liệu, hãy nộp thêm bài.",
    chart_donut_subtitle: "So sánh bài đã hoàn thành và chưa hoàn thành.",
    chart_line_subtitle: "Theo dõi 12 lần nộp gần nhất.",
    chart_domain_subtitle: "So sánh điểm trung bình giữa 4 domain.",
    chart_safety_subtitle: "Tần suất PASS/WARN/FAIL theo domain.",
    progress_done_view_all: "Xem tất cả",
    progress_done_modal_title: "Danh sách bài đã hoàn thành",
    progress_done_modal_close: "Đóng",
    progress_insights_title: "Gợi ý cải thiện",
    progress_insights_subtitle: "Từ dữ liệu học tập hiện tại",
    progress_insights_foot: "Cập nhật theo mỗi lần nộp bài.",
    progress_insight_no_data: "Chưa có đủ dữ liệu để tạo gợi ý.",
    progress_insight_practice_low: "Điểm practice đang thấp: thêm Ràng buộc + Kiểm chứng để tăng độ chính xác.",
    progress_insight_warn_high: "Cảnh báo an toàn đang nhiều: tránh yêu cầu thông tin cá nhân hoặc nội dung rủi ro.",
    progress_insight_completion_low: "Tỷ lệ hoàn thành còn thấp: mỗi ngày hoàn thành 1 bài để tăng tốc tiến độ.",
    progress_insight_keep: "Kết quả đang ổn định: tiếp tục luyện đều và thử bài ở domain còn yếu.",
    progress_insight_best_domain: "Domain mạnh nhất hiện tại: {domain}. Hãy giữ phong độ ở nhóm này.",
    chart_line_empty_title: "Chưa đủ dữ liệu",
    chart_line_empty_text: "Hãy nộp thêm bài để xem biểu đồ tiến bộ.",
    chart_line_go_builder: "Đi nộp bài",
    chart_donut_insight: "Hoàn thành {done}/{total} bài ({percent}%).",
    chart_line_insight: "Xu hướng gần đây: {trend}. Mẫu: {count}.",
    chart_domain_insight: "Domain tốt nhất: {best}. Điểm TB: {score}/100.",
    chart_safety_insight: "Tổng PASS {pass} • WARN {warn} • FAIL {fail}.",
    kpi_trend_none: "Chưa có dữ liệu",
    kpi_trend_quiz: "{count} bài đã chấm quiz",
    kpi_trend_submit: "{count} lần nộp bài",
    kpi_trend_best: "Mốc cao nhất hiện tại",
    kpi_trend_practice: "Từ lịch sử nộp bài",
    kpi_trend_completion: "{done}/{total} bài đã hoàn thành",
    lit_list_title: "Danh sách bài học",
    lit_search_label: "Tìm bài học",
    lit_search_placeholder: "Tìm bài học…",
    lit_done_empty: "Chưa có bài hoàn thành.",
    lit_empty_filter: "Không có bài học trong bộ lọc này.",
    lit_empty_select: "Chọn một bài học để bắt đầu.",
    lit_done_yes: "Đã hoàn thành",
    lit_done_no: "Chưa hoàn thành",
    lit_in_progress: "Đang học",
    lit_lesson: "bài",
    lit_quiz_question_count: "câu quiz",
    lit_difficulty_all: "Tất cả",
    lit_difficulty_basic: "Cơ bản",
    lit_difficulty_medium: "Trung cấp",
    lit_difficulty_advanced: "Nâng cao",
    lit_header_quick: "Tóm tắt nhanh",
    lit_header_points: "Ý chính",
    lit_header_example: "Ví dụ",
    lit_header_memory: "Ghi nhớ",
    lit_progress_quiz: "Quiz",
    lit_progress_practice: "Practice",
    lit_progress_empty: "Chưa có dữ liệu",
    lit_content_title: "Nội dung bài học",
    lit_quiz_title: "Mini Quiz",
    lit_quiz_grade_btn: "Chấm quiz",
    lit_assignment_title: "Bài tập",
    lit_assignment_btn: "Làm bài trong Trình tạo",
    lit_practice_open: "Mở Trình tạo",
    lit_practice_task: "Nhiệm vụ thực hành",
    lit_practice_criteria: "Tiêu chí đạt",
    lit_practice_latest: "Kết quả gần nhất",
    lit_practice_none: "Chưa có lần chấm nào. Hãy mở Trình tạo để bắt đầu.",
    lit_practice_step_1: "Bước 1",
    lit_practice_step_2: "Bước 2",
    lit_practice_step_3: "Bước 3",
    lit_practice_rubric: "Tiêu chí chấm điểm",
    lit_practice_best: "Điểm tốt nhất",
    lit_practice_attempts: "Số lần thử",
    lit_quiz_locked: "Quiz đã chấm. Muốn đổi đáp án, mở lại bài học.",
    custom_block_btn: "+ Block tuỳ chỉnh",
    custom_modal_new: "Tạo block tuỳ chỉnh",
    custom_modal_edit: "Sửa block tuỳ chỉnh",
    custom_edit: "Sửa",
    custom_delete: "Xoá",
    custom_saved: "Đã lưu block tuỳ chỉnh.",
    custom_deleted: "Đã xoá block tuỳ chỉnh.",
    custom_invalid: "Vui lòng nhập tên block và nội dung template.",
    custom_required_note: "⚠ Vui lòng nhập đủ: Tên block, Loại block, Nội dung template.",
    custom_invalid_fields: "Vui lòng điền đầy đủ: {fields}.",
    custom_field_name: "Tên block",
    custom_field_type: "Loại block",
    custom_field_content: "Nội dung template",
    custom_delete_confirm: "Xoá block tuỳ chỉnh này?",
    practice_graded: "Đã chấm bài thực hành cho lesson: {lesson}.",
    practice_blocked: "Bài thực hành bị chặn do rủi ro an toàn.",
    practice_suggest_prefix: "Gợi ý sửa: ",
    submit_no_assignment: "Hãy chọn bài trong tab Học AI trước khi nộp.",
    submit_running: "Đang nộp bài và chấm theo tiêu chí...",
    submit_pass: "Đã nộp bài ✅",
    submit_fail: "Nộp bài chưa đạt ❌",
    submit_blocked: "Nộp bài bị chặn do có FAIL an toàn ❌",
    submit_saved_for: "Đã lưu kết quả cho bài: {lesson}",
    submit_summary_line: "Tóm tắt: {summary}",
    practice_latest_pass: "Đạt",
    practice_latest_fail: "Chưa đạt",
    practice_last_submitted: "Nộp lúc",
    practice_reopen_builder: "Mở lại trong Trình tạo",
    lit_quiz_pick_all: "Bạn cần chọn đáp án cho tất cả câu hỏi trước khi chấm.",
    lit_quiz_ungraded: "Chưa chấm",
    lit_quiz_need_pick: "Cần chọn đủ đáp án",
    lit_quiz_good: "Đạt tốt",
    lit_quiz_mid: "Cần cải thiện",
    lit_quiz_bad: "Chưa đạt",
    lit_quiz_correct_count: "Bạn trả lời đúng {correct}/{total} câu.",
    status_pass: "Đạt",
    status_warn: "Cảnh báo",
    status_fail: "Lỗi",
    run_idle: "Đang chờ",
    run_running: "Đang chạy…",
    run_done: "Hoàn tất",
    run_warning: "⚠ Cảnh báo",
    run_blocked: "⛔ Đã chặn",
    confirm_reset_assignment: "Bạn muốn reset cả bài tập hiện tại không?\nOK: xóa cả đề bài hiện tại.\nCancel: chỉ làm trống canvas, giữ đề bài.",
    confirm_reset: "Bạn có chắc muốn làm mới toàn bộ canvas và xóa bản nháp đã lưu?",
    reset_done: "Đã làm mới canvas.",
    copy_empty: "Không có nội dung để copy.",
    copy_ok: "Đã copy prompt vào clipboard.",
    copy_fail: "Copy thất bại — vui lòng copy thủ công từ khung Xem trước prompt.",
    run_empty_prompt: "Prompt trống. Thêm block trước khi chạy.",
    run_provider_calling: "Đang gọi {provider}...",
    run_provider_missing: "Thiếu cấu hình provider ({detail}). Đang dùng mock fallback.",
    run_provider_error: "Lỗi gọi AI thật ({detail}). Chuyển sang mock fallback.",
    run_provider_meta: "Provider: {provider} • Model: {model} • {latency}ms",
    settings_saved: "Đã lưu cài đặt AI.",
    settings_test_running: "Đang test kết nối...",
    settings_test_ok: "Kết nối thành công ✅",
    settings_test_fail: "Kết nối thất bại: {detail}",
    settings_title: "Cài đặt AI",
    settings_provider_label: "Provider",
    settings_provider_mock: "Mock",
    settings_provider_openrouter: "OpenRouter",
    settings_provider_local: "Local AI",
    settings_or_key_label: "OpenRouter API Key",
    settings_or_model_label: "Model",
    settings_or_base_label: "Base URL",
    settings_local_base_label: "Local Base URL",
    settings_local_model_label: "Model",
    settings_local_endpoint_label: "Endpoint type",
    settings_local_endpoint_openai: "openai_compat",
    settings_local_endpoint_ollama: "ollama_native",
    settings_model_suggest_btn: "Gợi ý model",
    settings_model_suggest_placeholder: "Tìm model...",
    settings_model_suggest_init: "Bấm \"Gợi ý model\" để tải danh sách.",
    settings_model_suggest_loading: "Đang tải danh sách model từ OpenRouter...",
    settings_model_suggest_empty: "Không tìm thấy model phù hợp.",
    settings_model_suggest_loaded: "Đã tải {count} model.",
    settings_model_suggest_failed: "Không tải được model (có thể do CORS/mạng). Đang dùng danh sách gợi ý mặc định.",
    settings_model_suggest_fallback: "Đang hiển thị model gợi ý mặc định.",
    settings_note: "Mock luôn khả dụng làm fallback khi lỗi mạng/CORS.",
    settings_save_btn: "Lưu cài đặt",
    settings_test_btn: "Test connection",
    settings_cancel_btn: "Huỷ",
    draft_saved: "Đã lưu bản nháp.",
    score_band_low: "Thấp",
    score_band_med: "Ổn",
    score_band_high: "Tốt",
    score_label_clarity: "Rõ ràng",
    score_label_complete: "Đầy đủ",
    score_label_structure: "Cấu trúc",
    score_label_agefit: "Lứa tuổi",
    domain_all: "Tất cả",
    domain_human_centered: "Tư duy lấy con người làm trung tâm",
    domain_ai_ethics: "Đạo đức AI",
    domain_technical_applications: "Ứng dụng kỹ thuật",
    domain_system_design: "Nền tảng thiết kế hệ thống",
    group_role: "Vai trò",
    group_task: "Mục tiêu / Nhiệm vụ",
    group_context: "Bối cảnh",
    group_style: "Phong cách",
    group_constraints: "Ràng buộc",
    group_example: "Ví dụ đầu ra",
    group_format: "Định dạng",
    group_verification: "Kiểm chứng",
    summary_prefill_default: "Đã mở bài tập. Hãy tự thêm block để làm bài.",
  },
  en: {
    page_title: "AI Mentor Teen — Prompt Builder Studio",
    subtitle: "Prompt Builder Studio",
    route_builder: "Builder",
    route_literacy: "AI Literacy",
    route_progress: "AI Learning Progress",
    btn_run: "⚡ Run Prompt",
    btn_submit: "📤 Submit",
    btn_reset: "↺ Reset",
    btn_save: "💾 Save Draft",
    btn_copy: "Copy",
    btn_settings: "⚙️ Settings",
    ai_engine_auto: "AI Engine: Auto",
    btn_submit_hint: "Choose an assignment in AI Literacy first",
    btn_submit_ready: "Submit assignment: {lesson}",
    mode_student: "Student",
    mode_studio: "Studio",
    theme_dark: "Dark",
    theme_light: "Light",
    lib_title: "Block Library",
    lib_note: "Click any block to add it to Canvas.",
    lib_search_label: "Search blocks",
    lib_search_placeholder: "Role, context, constraints…",
    canvas_title: "Prompt Canvas",
    assignment_banner_title: "Current assignment",
    assignment_domain_fallback: "AI Literacy",
    assignment_status_pending: "Not submitted",
    assignment_status_passed: "Submitted • Passed",
    assignment_status_failed: "Submitted • Not passed",
    assignment_status_time: "Submitted at {time}",
    assignment_status_compact_done: "✅ Submitted {score}/100",
    assignment_status_compact_pending: "⚠️ Not submitted",
    assignment_change: "Change lesson",
    assignment_hide: "Hide assignment",
    assignment_show: "Show assignment",
    assignment_task_label: "Task",
    assignment_checklist_label: "Pass checklist",
    assignment_rubric_btn: "Hide criteria",
    assignment_rubric_show: "View criteria",
    assignment_reuse_saved: "Loaded your previously submitted prompt.",
    assignment_canvas_hint: "Pick recommended blocks to start.",
    assignment_meta_best_label: "Best",
    assignment_meta_attempts_label: "Attempts",
    assignment_default_task: "Select a lesson in AI Literacy to show the assignment here.",
    rubric_status_label: "Rubric",
    rubric_status_pass: "Passed",
    rubric_status_fail: "Not passed",
    rubric_missing_label: "Missing",
    rubric_direction_label: "Direction mismatch",
    rubric_direction_need: "Direction mismatch: using {current}, but criteria expects {required}.",
    rubric_order_bad: "Structure order is off (recommended: Role → Task → Context → Rules → Safety/Verify).",
    rubric_hint_easy_example: "Example: AI acts as a learning coach, gives a clear task for grade-8 student, with length limits.",
    rubric_hint_medium: "Structure hint: Role → Task → Context → Rules → Verification (if data is used).",
    rubric_hint_hard: "Hard mode: the system only reports what is missing after submit.",
    type_role: "Role",
    type_task: "Task",
    type_context: "Context",
    type_style: "Style",
    type_rules: "Rules",
    type_verify: "Verify",
    type_safety: "Safety",
    canvas_empty_title: "Canvas is empty",
    canvas_empty_desc: "Click blocks on the left to start building a prompt.",
    canvas_empty_hint: "💡 Role -> Task -> Context -> Constraints",
    canvas_remove_btn: "✕ Remove",
    custom_label_main: "Custom Input",
    custom_label_optional: "(optional)",
    custom_placeholder: "Example: Grade 8 student needs short practice tasks for critical thinking…",
    score_title: "📊 Prompt Score",
    safety_title: "🛡 Safety Check",
    safety_waiting: "Waiting",
    safety_waiting_note: "Safety Check updates after you add blocks.",
    safety_suggest_title: "Improvement Suggestions",
    preview_title: "Prompt Preview",
    preview_empty: "Prompt will appear here.",
    block_count_unit: "blocks",
    sandbox_title: "Sandbox Output",
    tips_title: "💡 Quick Tips",
    tips_1: 'Add "Constraints" to keep responses focused.',
    tips_2: 'If you use data/facts, add a "Verification" block.',
    tips_3: "If you paste web content, mention external-source limits.",
    lit_progress_title: "AI Literacy Progress",
    lit_progress_subtitle: "Learning • practice • safety overview",
    lit_progress_updated_none: "Last updated: no data yet",
    lit_progress_updated_at: "Last updated: {time}",
    lit_progress_chip_updated_none: "Updated: --",
    lit_progress_chip_updated_at: "Updated: {time}",
    lit_kpi_percent_label: "Completion Rate",
    lit_kpi_avg_label: "Average Quiz Score",
    progress_practice_avg_label: "Average practice score",
    progress_best_score_label: "Best score",
    progress_submit_count_label: "Total submissions",
    lit_kpi_done_label: "Completed Lessons",
    chart_donut_title: "Lesson completion ratio",
    chart_line_title: "Practice scores over time",
    chart_domain_title: "Average score by domain",
    chart_safety_title: "Safety PASS/WARN/FAIL",
    chart_legend_complete: "Completed",
    chart_legend_remaining: "Remaining",
    chart_legend_pass: "PASS",
    chart_legend_warn: "WARN",
    chart_legend_fail: "FAIL",
    chart_empty: "No data yet",
    chart_insufficient: "Not enough data yet. Submit more practice attempts.",
    chart_donut_subtitle: "Completed vs remaining lessons.",
    chart_line_subtitle: "Track your latest 12 submissions.",
    chart_domain_subtitle: "Compare average score across 4 domains.",
    chart_safety_subtitle: "PASS/WARN/FAIL frequency by domain.",
    progress_done_view_all: "View all",
    progress_done_modal_title: "Completed lesson list",
    progress_done_modal_close: "Close",
    progress_insights_title: "Improvement insights",
    progress_insights_subtitle: "Generated from your current learning data",
    progress_insights_foot: "Updated after each submission.",
    progress_insight_no_data: "Not enough data to generate insights yet.",
    progress_insight_practice_low: "Practice score is still low: add clearer Rules + Verification to improve quality.",
    progress_insight_warn_high: "Safety warnings are high: avoid asking for personal data or risky content.",
    progress_insight_completion_low: "Completion is low: finish one lesson each day to reach 100%.",
    progress_insight_keep: "Progress is stable: keep practicing and try weaker domains.",
    progress_insight_best_domain: "Strongest domain now: {domain}. Keep this momentum.",
    chart_line_empty_title: "Not enough data yet",
    chart_line_empty_text: "Submit more assignments to unlock progress chart.",
    chart_line_go_builder: "Go submit",
    chart_donut_insight: "Completed {done}/{total} lessons ({percent}%).",
    chart_line_insight: "Recent trend: {trend}. Samples: {count}.",
    chart_domain_insight: "Best domain: {best}. Avg score: {score}/100.",
    chart_safety_insight: "Total PASS {pass} • WARN {warn} • FAIL {fail}.",
    kpi_trend_none: "No data yet",
    kpi_trend_quiz: "{count} quizzes graded",
    kpi_trend_submit: "{count} submissions",
    kpi_trend_best: "Current peak score",
    kpi_trend_practice: "Based on submission history",
    kpi_trend_completion: "{done}/{total} lessons completed",
    lit_list_title: "Lesson List",
    lit_search_label: "Search lessons",
    lit_search_placeholder: "Search lessons…",
    lit_done_empty: "No completed lessons yet.",
    lit_empty_filter: "No lessons for this filter.",
    lit_empty_select: "Choose a lesson to begin.",
    lit_done_yes: "Completed",
    lit_done_no: "Not completed",
    lit_in_progress: "In progress",
    lit_lesson: "lesson",
    lit_quiz_question_count: "quiz questions",
    lit_difficulty_all: "All",
    lit_difficulty_basic: "Basic",
    lit_difficulty_medium: "Intermediate",
    lit_difficulty_advanced: "Advanced",
    lit_header_quick: "Quick Summary",
    lit_header_points: "Key Points",
    lit_header_example: "Example",
    lit_header_memory: "Remember",
    lit_progress_quiz: "Quiz",
    lit_progress_practice: "Practice",
    lit_progress_empty: "No data yet",
    lit_content_title: "Lesson Content",
    lit_quiz_title: "Mini Quiz",
    lit_quiz_grade_btn: "Grade Quiz",
    lit_assignment_title: "Assignment",
    lit_assignment_btn: "Do in Builder",
    lit_practice_open: "Open Builder",
    lit_practice_task: "Practice task",
    lit_practice_criteria: "Success checklist",
    lit_practice_latest: "Latest result",
    lit_practice_none: "No graded attempt yet. Open Builder to start.",
    lit_practice_step_1: "Step 1",
    lit_practice_step_2: "Step 2",
    lit_practice_step_3: "Step 3",
    lit_practice_rubric: "Scoring criteria",
    lit_practice_best: "Best score",
    lit_practice_attempts: "Attempts",
    lit_quiz_locked: "Quiz is graded. Re-open the lesson to retry.",
    custom_block_btn: "+ Custom block",
    custom_modal_new: "Create custom block",
    custom_modal_edit: "Edit custom block",
    custom_edit: "Edit",
    custom_delete: "Delete",
    custom_saved: "Custom block saved.",
    custom_deleted: "Custom block deleted.",
    custom_invalid: "Please enter block title and template content.",
    custom_required_note: "⚠ Required: Block title, Block type, and Template content.",
    custom_invalid_fields: "Please complete: {fields}.",
    custom_field_name: "Block title",
    custom_field_type: "Block type",
    custom_field_content: "Template content",
    custom_delete_confirm: "Delete this custom block?",
    practice_graded: "Practice graded for lesson: {lesson}.",
    practice_blocked: "Practice is blocked due to safety risk.",
    practice_suggest_prefix: "Fix suggestion: ",
    submit_no_assignment: "Please choose a lesson in AI Literacy before submitting.",
    submit_running: "Submitting and grading by criteria...",
    submit_pass: "Submission passed ✅",
    submit_fail: "Submission not passed ❌",
    submit_blocked: "Submission blocked due to safety FAIL ❌",
    submit_saved_for: "Saved result for lesson: {lesson}",
    submit_summary_line: "Summary: {summary}",
    practice_latest_pass: "Passed",
    practice_latest_fail: "Not passed",
    practice_last_submitted: "Submitted at",
    practice_reopen_builder: "Open again in Builder",
    lit_quiz_pick_all: "Please choose an answer for all questions before grading.",
    lit_quiz_ungraded: "Not graded",
    lit_quiz_need_pick: "Need all answers",
    lit_quiz_good: "Good",
    lit_quiz_mid: "Needs improvement",
    lit_quiz_bad: "Not passed",
    lit_quiz_correct_count: "You got {correct}/{total} correct.",
    status_pass: "Pass",
    status_warn: "Warn",
    status_fail: "Fail",
    run_idle: "Idle",
    run_running: "Running…",
    run_done: "Done",
    run_warning: "⚠ Warning",
    run_blocked: "⛔ Blocked",
    confirm_reset_assignment: "Do you want to reset the current assignment too?\nOK: clear canvas and assignment.\nCancel: clear canvas only and keep assignment.",
    confirm_reset: "Do you want to reset the whole canvas and remove the saved draft?",
    reset_done: "Canvas has been reset.",
    copy_empty: "No prompt content to copy.",
    copy_ok: "Prompt copied to clipboard.",
    copy_fail: "Copy failed — please copy manually from Prompt Preview.",
    run_empty_prompt: "Prompt is empty. Add blocks before running.",
    run_provider_calling: "Calling {provider}...",
    run_provider_missing: "Provider config missing ({detail}). Falling back to mock.",
    run_provider_error: "Real AI call failed ({detail}). Falling back to mock.",
    run_provider_meta: "Provider: {provider} • Model: {model} • {latency}ms",
    settings_saved: "AI settings saved.",
    settings_test_running: "Testing connection...",
    settings_test_ok: "Connection successful ✅",
    settings_test_fail: "Connection failed: {detail}",
    settings_title: "AI Settings",
    settings_provider_label: "Provider",
    settings_provider_mock: "Mock",
    settings_provider_openrouter: "OpenRouter",
    settings_provider_local: "Local AI",
    settings_or_key_label: "OpenRouter API Key",
    settings_or_model_label: "Model",
    settings_or_base_label: "Base URL",
    settings_local_base_label: "Local Base URL",
    settings_local_model_label: "Model",
    settings_local_endpoint_label: "Endpoint type",
    settings_local_endpoint_openai: "openai_compat",
    settings_local_endpoint_ollama: "ollama_native",
    settings_model_suggest_btn: "Model suggestions",
    settings_model_suggest_placeholder: "Search model...",
    settings_model_suggest_init: "Click \"Model suggestions\" to load model list.",
    settings_model_suggest_loading: "Loading OpenRouter models...",
    settings_model_suggest_empty: "No matching models found.",
    settings_model_suggest_loaded: "Loaded {count} models.",
    settings_model_suggest_failed: "Could not load models (possible CORS/network issue). Showing default suggestions.",
    settings_model_suggest_fallback: "Showing default recommended models.",
    settings_note: "Mock is always available as fallback for network/CORS issues.",
    settings_save_btn: "Save settings",
    settings_test_btn: "Test connection",
    settings_cancel_btn: "Cancel",
    draft_saved: "Draft saved.",
    score_band_low: "Low",
    score_band_med: "Medium",
    score_band_high: "High",
    score_label_clarity: "Clarity",
    score_label_complete: "Completeness",
    score_label_structure: "Structure",
    score_label_agefit: "Age fit",
    domain_all: "All",
    domain_human_centered: "Human-centered thinking",
    domain_ai_ethics: "AI Ethics",
    domain_technical_applications: "Technical applications",
    domain_system_design: "System design basics",
    group_role: "Role",
    group_task: "Task",
    group_context: "Context",
    group_style: "Style",
    group_constraints: "Constraints",
    group_example: "Example output",
    group_format: "Output format",
    group_verification: "Verification",
    summary_prefill_default: "Assignment opened. Start by adding your own blocks."
  }
};

const GROUP_META = {
  role:         { label:"Vai trò",              icon:"🎭" },
  task:         { label:"Mục tiêu / Nhiệm vụ",  icon:"🎯" },
  context:      { label:"Bối cảnh",             icon:"🌍" },
  style:        { label:"Phong cách",            icon:"✨" },
  constraints:  { label:"Ràng buộc",             icon:"🔒" },
  example:      { label:"Ví dụ đầu ra",          icon:"📋" },
  format:       { label:"Định dạng",             icon:"📐" },
  verification: { label:"Kiểm chứng",            icon:"✅" },
};
const GROUP_ORDER = Object.keys(GROUP_META);
const GROUP_BADGE = {
  role: "ROLE",
  context: "CONTEXT",
  task: "TASK",
  style: "STYLE",
  constraints: "CONSTRAINTS",
  example: "EXAMPLE",
  format: "FORMAT",
  verification: "VERIFICATION"
};

// Keep Canvas group tags fixed in English across VI/EN toggle.
const CANVAS_FIXED_BADGE = Object.freeze({
  role: "ROLE",
  context: "CONTEXT",
  task: "TASK",
  style: "STYLE",
  constraints: "CONSTRAINTS",
  example: "EXAMPLE",
  format: "FORMAT",
  verification: "VERIFICATION"
});

const DOMAIN_LABEL_EN = {
  human_centered: "HUMAN-CENTERED THINKING",
  ai_ethics: "AI ETHICS",
  technical_applications: "TECHNICAL APPLICATIONS",
  system_design: "SYSTEM DESIGN BASICS"
};

const GROUP_LABEL_EN = {
  role: "Role",
  task: "Task",
  context: "Context",
  style: "Style",
  constraints: "Constraints",
  example: "Example output",
  format: "Output format",
  verification: "Verification"
};

const GROUP_ACCENT = {
  role: "#9f7bff",
  task: "#ffd84d",
  context: "#49c5ff",
  style: "#ff73c7",
  constraints: "#54e1d6",
  example: "#ffb86a",
  format: "#7be6ff",
  verification: "#64f0a8"
};

const BLOCK_TYPES = Object.freeze({
  ROLE: "ROLE",
  TASK: "TASK",
  CONTEXT: "CONTEXT",
  STYLE: "STYLE",
  RULES: "RULES",
  VERIFY: "VERIFY",
  SAFETY: "SAFETY"
});

const GROUP_TO_TYPE = Object.freeze({
  role: BLOCK_TYPES.ROLE,
  task: BLOCK_TYPES.TASK,
  context: BLOCK_TYPES.CONTEXT,
  style: BLOCK_TYPES.STYLE,
  constraints: BLOCK_TYPES.RULES,
  example: BLOCK_TYPES.RULES,
  format: BLOCK_TYPES.RULES,
  verification: BLOCK_TYPES.VERIFY
});

const TYPE_ORDER = [BLOCK_TYPES.ROLE, BLOCK_TYPES.TASK, BLOCK_TYPES.CONTEXT, BLOCK_TYPES.RULES, BLOCK_TYPES.SAFETY, BLOCK_TYPES.VERIFY];

const TYPE_LABEL_KEY = Object.freeze({
  ROLE: "type_role",
  TASK: "type_task",
  CONTEXT: "type_context",
  STYLE: "type_style",
  RULES: "type_rules",
  VERIFY: "type_verify",
  SAFETY: "type_safety"
});

const CUSTOM_TYPE_TO_GROUP = Object.freeze({
  ROLE: "role",
  TASK: "task",
  CONTEXT: "context",
  STYLE: "style",
  RULES: "constraints",
  EXAMPLE: "example",
  FORMAT: "format",
  VERIFICATION: "verification",
  VERIFY: "verification"
});

const GROUP_TO_CUSTOM_TYPE = Object.freeze({
  role: "ROLE",
  task: "TASK",
  context: "CONTEXT",
  style: "STYLE",
  constraints: "RULES",
  example: "EXAMPLE",
  format: "FORMAT",
  verification: "VERIFICATION"
});

const BLOCK_TAG_DEFAULTS = Object.freeze({
  role_tutor: ["tutor", "friendly", "supportive", "u16_safe"],
  role_coach: ["coach", "trainer", "guiding", "socratic"],
  task_step: ["step_by_step", "explain"],
  task_quiz: ["practice", "quiz"],
  ctx_grade: ["grade_context", "student_level"],
  ctx_time: ["timebox", "session_limit"],
  style_simple: ["simple", "friendly", "student_language"],
  style_probe: ["socratic", "questioning"],
  con_len: ["length_limit", "concise"],
  con_scope: ["scope_limit", "u16_safe"],
  ex_output: ["example_output", "reference_example"],
  fmt_md: ["format_output", "structure_output"],
  ver_src: ["verify_information", "fact_check"]
});

const LESSON_RUBRIC_OVERRIDES = Object.freeze({
  hct_goal: {
    requiredTypes: ["ROLE", "TASK", "CONTEXT", "RULES"],
    requiredTagsAny: ["tutor", "step_by_step"],
    forbiddenTags: [],
    minScore: 70,
    noFailSafety: true,
    difficulty: "easy"
  },
  hct_question: {
    requiredTypes: ["ROLE", "TASK", "CONTEXT"],
    requiredTagsAny: ["coach"],
    forbiddenTags: ["tutor"],
    minScore: 70,
    noFailSafety: true,
    difficulty: "medium"
  },
  ethics_privacy: {
    requiredTypes: ["ROLE", "TASK", "RULES"],
    requiredTagsAny: ["u16_safe", "scope_limit"],
    forbiddenTags: [],
    minScore: 70,
    noFailSafety: true,
    difficulty: "easy"
  },
  ethics_fairness: {
    requiredTypes: ["ROLE", "TASK", "CONTEXT", "VERIFY"],
    requiredTagsAny: ["coach", "verify_information"],
    forbiddenTags: [],
    minScore: 72,
    noFailSafety: true,
    difficulty: "medium"
  },
  tech_prompt_structure: {
    requiredTypes: ["ROLE", "TASK", "CONTEXT", "RULES"],
    requiredTagsAny: ["format_output", "length_limit"],
    forbiddenTags: [],
    minScore: 70,
    noFailSafety: true,
    difficulty: "easy"
  },
  tech_verify: {
    requiredTypes: ["ROLE", "TASK", "VERIFY"],
    requiredTagsAny: ["verify_information"],
    forbiddenTags: [],
    minScore: 75,
    noFailSafety: true,
    difficulty: "medium"
  },
  sys_modular: {
    requiredTypes: ["ROLE", "TASK", "CONTEXT", "RULES"],
    requiredTagsAny: ["structure_output"],
    forbiddenTags: [],
    minScore: 72,
    noFailSafety: true,
    difficulty: "medium"
  },
  sys_iterate: {
    requiredTypes: ["ROLE", "TASK", "CONTEXT", "VERIFY"],
    requiredTagsAny: ["coach", "verify_information"],
    forbiddenTags: [],
    minScore: 75,
    noFailSafety: true,
    difficulty: "hard"
  }
});

const LIBRARY = [
  { id:"role_tutor",   group:"role",   label:"Gia sư thân thiện",      desc:"AI giải thích từng bước, kiên nhẫn, không phán xét.",       content:"Bạn là gia sư AI thân thiện, giải thích rõ ràng theo từng bước cho học sinh dưới 16 tuổi." },
  { id:"role_coach",   group:"role",   label:"Huấn luyện học tập",     desc:"Ưu tiên hướng dẫn cách học thay vì làm hộ.",               content:"Bạn là người hướng dẫn học tập, ưu tiên giúp học sinh tự suy nghĩ trước khi đưa đáp án." },
  { id:"task_step",    group:"task",   label:"Giải thích từng bước",   desc:"Biến chủ đề thành chuỗi bước dễ làm theo.",                content:"Nhiệm vụ: Hãy giải thích theo từng bước, từ dễ đến khó, và kèm ví dụ ngắn cho mỗi bước." },
  { id:"task_quiz",    group:"task",   label:"Tạo bộ bài tập ngắn",   desc:"Sinh bài tập vừa sức để học sinh luyện ngay.",             content:"Nhiệm vụ: Tạo 3 bài tập ngắn phù hợp trình độ học sinh, có đáp án mẫu và gợi ý từng câu." },
  { id:"ctx_grade",    group:"context",label:"Bối cảnh lớp học",       desc:"Nêu lớp, mức độ và mục tiêu gần nhất.",                   content:"Bối cảnh: Học sinh lớp 8, kiến thức nền cơ bản, cần ôn tập để làm tốt bài kiểm tra sắp tới." },
  { id:"ctx_time",     group:"context",label:"Bối cảnh thời gian",     desc:"Ràng buộc phiên học ngắn để giữ tập trung.",              content:"Bối cảnh: Mỗi phiên học chỉ 20 phút, ưu tiên phần quan trọng nhất và dễ áp dụng ngay." },
  { id:"style_simple", group:"style",  label:"Dễ hiểu & thân thiện",  desc:"Câu ngắn, từ ngữ gần gũi, không thuật ngữ khó.",         content:"Phong cách: Dùng từ ngữ dễ hiểu, câu ngắn, giọng điệu thân thiện, tránh thuật ngữ khó nếu không giải thích." },
  { id:"style_probe",  group:"style",  label:"Gợi mở bằng câu hỏi",  desc:"Đặt câu hỏi dẫn dắt trước khi đưa đáp án.",             content:"Phong cách: Trước khi đưa đáp án, hãy đặt 1–2 câu hỏi gợi mở để học sinh tự suy nghĩ." },
  { id:"con_len",      group:"constraints",label:"Giới hạn độ dài",   desc:"Mỗi phần tối đa 120 từ, dùng bullet gọn.",              content:"Ràng buộc: Mỗi phần tối đa 120 từ, ưu tiên gạch đầu dòng rõ ràng." },
  { id:"con_scope",    group:"constraints",label:"Giới hạn phạm vi",  desc:"Không mở rộng ngoài nội dung yêu cầu.",                 content:"Ràng buộc: Chỉ tập trung vào nội dung học tập được yêu cầu, không mở rộng sang chủ đề không liên quan." },
  { id:"ex_output",    group:"example", label:"Ví dụ đầu ra mẫu",    desc:"Yêu cầu 1 mẫu hoàn chỉnh trước khi giao bài.",          content:"Ví dụ đầu ra: Hãy đưa 1 ví dụ mẫu hoàn chỉnh trước, rồi mới giao bài tập tương tự cho học sinh." },
  { id:"fmt_md",       group:"format",  label:"Định dạng gọn rõ",    desc:"Tiêu đề → bước → ví dụ → tóm tắt + bullet.",           content:"Định dạng: Trả lời theo cấu trúc Tiêu đề → Các bước → Ví dụ → Tóm tắt, dùng bullet để dễ quét." },
  { id:"ver_src",      group:"verification",label:"Nhắc kiểm chứng", desc:"Gợi ý cách xác minh thông tin quan trọng.",            content:"Kiểm chứng: Với thông tin quan trọng hoặc số liệu, nêu mức độ chắc chắn và gợi ý cách kiểm tra lại nguồn." },
];

const LESSONS = [
  {
    id: "hct_goal",
    domain: "human_centered",
    title: "Đặt mục tiêu học tập trước khi hỏi AI",
    duration: "12 phút",
    content: [
      "AI mạnh khi bạn nói rõ mục tiêu, không chỉ nêu chủ đề chung.",
      "Mục tiêu tốt cần có bối cảnh: lớp mấy, mức độ hiện tại và mục tiêu cần đạt.",
      "Nếu mục tiêu mơ hồ, AI sẽ trả lời dài nhưng dễ lệch ý chính.",
      "Bạn nên bắt đầu bằng câu: “Mình cần làm được gì sau phần này?”.",
      "Mỗi prompt học tập nên có một đầu ra cụ thể: ví dụ, bài tập, hoặc checklist."
    ],
    keyPoints: ["Nói rõ mục tiêu đầu ra.", "Thêm trình độ học sinh.", "Tránh câu hỏi quá rộng."],
    quiz: [
      { q: "Vì sao cần nêu mục tiêu học tập trước?", choices: ["Để AI trả lời ngắn hơn", "Để AI hiểu đúng kết quả mong muốn", "Để prompt nhìn chuyên nghiệp"], answerIndex: 1, explanation: "Mục tiêu rõ giúp AI bám đúng yêu cầu." },
      { q: "Mục tiêu nào tốt hơn?", choices: ["Giải thích AI", "Giải thích hàm số bậc hai cho học sinh lớp 9 kèm 2 ví dụ", "Nói về toán"], answerIndex: 1, explanation: "Mục tiêu có lớp học và đầu ra cụ thể là tốt nhất." },
      { q: "Khi prompt quá rộng sẽ xảy ra gì?", choices: ["AI thường trả lời lệch trọng tâm", "AI luôn đúng hơn", "Không ảnh hưởng"], answerIndex: 0, explanation: "Prompt rộng dễ khiến nội dung lan man." }
    ],
    assignmentTemplate: {
      blockIds: ["role_tutor", "task_step", "ctx_grade", "con_scope", "style_simple"],
      customInputSeed: "Hãy giúp mình học chủ đề hàm số bậc hai trong 20 phút, cần hiểu ý chính và làm được 1 bài cơ bản.",
      successHint: "Nhớ kiểm tra xem output đã có mục tiêu + từng bước + ví dụ chưa."
    }
  },
  {
    id: "hct_question",
    domain: "human_centered",
    title: "Đặt câu hỏi gợi mở để tự học tốt hơn",
    duration: "10 phút",
    content: [
      "Đặt câu hỏi đúng giúp bạn học sâu hơn, thay vì chỉ chép đáp án.",
      "Câu hỏi gợi mở nên tập trung vào “vì sao” và “nếu thay đổi thì sao”.",
      "Bạn có thể yêu cầu AI đặt 2–3 câu hỏi trước khi đưa lời giải.",
      "Cách này tăng tư duy phản biện và giúp nhớ lâu hơn.",
      "Sau mỗi câu trả lời, hãy tự tóm tắt lại bằng 1 câu của riêng bạn."
    ],
    keyPoints: ["Ưu tiên câu hỏi “vì sao”.", "Yêu cầu AI gợi mở trước.", "Tự tóm tắt để nhớ lâu."],
    quiz: [
      { q: "Câu hỏi nào mang tính gợi mở?", choices: ["Đáp án là gì?", "Vì sao chọn phương pháp này?", "Viết nhanh giúp mình"], answerIndex: 1, explanation: "Câu hỏi 'vì sao' buộc người học suy luận." },
      { q: "Lợi ích chính của câu hỏi gợi mở là gì?", choices: ["Tăng ghi nhớ và hiểu sâu", "Giảm hoàn toàn thời gian học", "Không cần luyện tập"], answerIndex: 0, explanation: "Gợi mở giúp não xử lý chủ động hơn." },
      { q: "Sau khi AI trả lời, bạn nên làm gì?", choices: ["Bỏ qua", "Tự tóm tắt lại", "Chỉ copy"], answerIndex: 1, explanation: "Tự diễn đạt lại giúp kiểm tra mức hiểu." }
    ],
    assignmentTemplate: {
      blockIds: ["role_coach", "task_step", "style_probe", "ctx_grade", "con_scope"],
      customInputSeed: "Mình muốn ôn hình học lớp 8. Trước khi giải, hãy đặt câu hỏi để mình tự nghĩ trước.",
      successHint: "Nếu output có 2–3 câu hỏi gợi mở là đúng hướng."
    }
  },
  {
    id: "ethics_privacy",
    domain: "ai_ethics",
    title: "Bảo vệ dữ liệu cá nhân khi dùng AI",
    duration: "11 phút",
    content: [
      "Khi dùng AI, không nên đưa dữ liệu nhạy cảm như CCCD, địa chỉ nhà hoặc mật khẩu.",
      "Dữ liệu cá nhân có thể bị lộ nếu bạn chia sẻ không kiểm soát.",
      "Thay vì dữ liệu thật, hãy dùng dữ liệu giả lập khi học.",
      "Prompt nên thêm ràng buộc: không thu thập hoặc lưu thông tin cá nhân.",
      "Đây là kỹ năng an toàn số cơ bản cho mọi học sinh."
    ],
    keyPoints: ["Không nhập dữ liệu nhạy cảm.", "Dùng dữ liệu giả.", "Thêm ràng buộc bảo mật."],
    quiz: [
      { q: "Dữ liệu nào không nên đưa vào prompt?", choices: ["Chủ đề toán", "CCCD và mật khẩu", "Lớp học"], answerIndex: 1, explanation: "CCCD/mật khẩu là dữ liệu nhạy cảm." },
      { q: "Giải pháp an toàn khi cần ví dụ dữ liệu?", choices: ["Dùng dữ liệu thật", "Dùng dữ liệu giả lập", "Không cần dữ liệu"], answerIndex: 1, explanation: "Dữ liệu giả giúp giảm rủi ro lộ thông tin." },
      { q: "Prompt an toàn nên có gì?", choices: ["Yêu cầu chia sẻ số điện thoại", "Ràng buộc không thu thập dữ liệu cá nhân", "Không cần ràng buộc"], answerIndex: 1, explanation: "Ràng buộc giúp kiểm soát hành vi đầu ra." }
    ],
    assignmentTemplate: {
      blockIds: ["role_tutor", "task_quiz", "con_scope", "con_len", "style_simple"],
      customInputSeed: "Tạo 3 bài tập về an toàn dữ liệu cá nhân cho học sinh lớp 8, không yêu cầu thông tin thật.",
      successHint: "Đảm bảo output không yêu cầu số điện thoại/địa chỉ/CCCD."
    }
  },
  {
    id: "ethics_fairness",
    domain: "ai_ethics",
    title: "Công bằng và tránh thiên kiến trong câu trả lời",
    duration: "13 phút",
    content: [
      "AI có thể thiên lệch nếu dữ liệu đầu vào thiếu cân bằng.",
      "Bạn nên yêu cầu AI đưa nhiều góc nhìn và giải thích lý do.",
      "Tránh prompt mang định kiến về giới tính, vùng miền hoặc hoàn cảnh.",
      "Với bài học xã hội, hãy yêu cầu ngôn ngữ trung lập và tôn trọng.",
      "Luôn kiểm tra lại câu trả lời bằng tư duy phản biện."
    ],
    keyPoints: ["Yêu cầu đa góc nhìn.", "Giữ ngôn ngữ trung lập.", "Tự kiểm tra thiên kiến."],
    quiz: [
      { q: "Cách giảm thiên kiến hiệu quả là gì?", choices: ["Chỉ dùng một góc nhìn", "Yêu cầu nhiều góc nhìn và lý do", "Tin hoàn toàn AI"], answerIndex: 1, explanation: "Nhiều góc nhìn giúp cân bằng thông tin." },
      { q: "Prompt nào tốt hơn?", choices: ["Đánh giá nhóm X kém hơn nhóm Y", "Phân tích trung lập ưu/nhược điểm của hai cách học", "Khẳng định một phía"], answerIndex: 1, explanation: "Cách viết trung lập giảm định kiến." },
      { q: "Vai trò của người học là gì?", choices: ["Không cần kiểm tra", "Luôn phản biện lại kết quả", "Chỉ chép"], answerIndex: 1, explanation: "Người học vẫn là người quyết định cuối." }
    ],
    assignmentTemplate: {
      blockIds: ["role_coach", "task_step", "ctx_time", "style_simple", "ver_src"],
      customInputSeed: "So sánh 2 phương pháp học từ vựng tiếng Anh cho học sinh lớp 7 theo cách trung lập, nêu ưu/nhược rõ ràng.",
      successHint: "Output nên thể hiện ít nhất 2 góc nhìn công bằng."
    }
  },
  {
    id: "tech_prompt_structure",
    domain: "technical_applications",
    title: "Cấu trúc prompt cơ bản để học hiệu quả",
    duration: "14 phút",
    content: [
      "Prompt tốt thường có 4 phần: Vai trò, Nhiệm vụ, Bối cảnh, Ràng buộc.",
      "Vai trò quyết định giọng điệu AI.",
      "Nhiệm vụ mô tả đầu ra cần nhận.",
      "Bối cảnh giúp AI hiểu trình độ học sinh.",
      "Ràng buộc kiểm soát độ dài, phạm vi và định dạng trả lời."
    ],
    keyPoints: ["Vai trò + Nhiệm vụ + Bối cảnh + Ràng buộc.", "Thiếu phần nào thì kết quả dễ lệch.", "Kiểm tra prompt trước khi chạy."],
    quiz: [
      { q: "Phần nào giúp AI hiểu trình độ?", choices: ["Vai trò", "Bối cảnh", "Định dạng"], answerIndex: 1, explanation: "Bối cảnh nêu rõ lớp học và mức độ." },
      { q: "Ràng buộc dùng để làm gì?", choices: ["Trang trí prompt", "Kiểm soát phạm vi và độ dài", "Không có tác dụng"], answerIndex: 1, explanation: "Ràng buộc giúp kết quả đúng ý hơn." },
      { q: "Nếu thiếu Task thì sao?", choices: ["Vẫn luôn chính xác", "Dễ mơ hồ mục tiêu", "Ngắn hơn nên tốt"], answerIndex: 1, explanation: "Task là lõi định nghĩa việc cần làm." }
    ],
    assignmentTemplate: {
      blockIds: ["role_tutor", "task_step", "ctx_grade", "con_len", "fmt_md"],
      customInputSeed: "Tạo hướng dẫn ôn tập 15 phút về phương trình bậc nhất cho học sinh lớp 8 theo định dạng rõ ràng.",
      successHint: "Kiểm tra output đã có tiêu đề, bước, ví dụ, tóm tắt."
    }
  },
  {
    id: "tech_verify",
    domain: "technical_applications",
    title: "Kiểm chứng thông tin trước khi sử dụng",
    duration: "12 phút",
    content: [
      "AI có thể trả lời trôi chảy nhưng chưa chắc luôn chính xác.",
      "Khi có số liệu hoặc dữ kiện mới, bạn cần yêu cầu kiểm chứng nguồn.",
      "Prompt tốt nên yêu cầu nêu mức độ chắc chắn của thông tin.",
      "Bạn có thể yêu cầu AI chỉ ra phần nào cần kiểm tra thêm.",
      "Thói quen này giúp giảm sai sót khi học và làm bài."
    ],
    keyPoints: ["Không tin tuyệt đối.", "Nhắc kiểm chứng nguồn.", "Nêu mức chắc chắn."],
    quiz: [
      { q: "Vì sao cần kiểm chứng?", choices: ["Vì AI có thể sai", "Vì cho vui", "Không cần"], answerIndex: 0, explanation: "AI vẫn có xác suất sai hoặc thiếu nguồn." },
      { q: "Khi có số liệu mới, nên làm gì?", choices: ["Dùng ngay", "Yêu cầu kiểm tra nguồn", "Bỏ qua"], answerIndex: 1, explanation: "Nguồn xác thực giúp tăng độ tin cậy." },
      { q: "Prompt nên thêm yêu cầu nào?", choices: ["Nêu mức độ chắc chắn", "Ẩn nguồn", "Đoán"], answerIndex: 0, explanation: "Mức chắc chắn giúp người học biết rủi ro." }
    ],
    assignmentTemplate: {
      blockIds: ["role_tutor", "task_step", "ctx_time", "ver_src", "con_scope"],
      customInputSeed: "Giải thích ngắn về biến đổi khí hậu cho học sinh lớp 9, nêu phần nào cần kiểm tra thêm nguồn.",
      successHint: "Output tốt cần có dòng nhắc kiểm chứng ở cuối."
    }
  },
  {
    id: "sys_modular",
    domain: "system_design",
    title: "Tư duy mô-đun: chia việc lớn thành khối nhỏ",
    duration: "10 phút",
    content: [
      "Một prompt dài dễ rối nếu bạn dồn mọi thứ vào một câu.",
      "Cách tốt hơn là chia theo khối: vai trò, nhiệm vụ, bối cảnh, định dạng.",
      "Mỗi khối đảm nhận một nhiệm vụ rõ ràng.",
      "Canvas trong Trình tạo Prompt là nơi để luyện tư duy mô-đun.",
      "Khi cần chỉnh, bạn chỉ sửa 1 khối thay vì viết lại toàn bộ."
    ],
    keyPoints: ["Chia nhỏ để dễ kiểm soát.", "Mỗi block có mục tiêu riêng.", "Sửa nhanh khi có lỗi."],
    quiz: [
      { q: "Lợi ích của tư duy mô-đun là gì?", choices: ["Khó chỉnh sửa hơn", "Dễ bảo trì và nâng cấp prompt", "Không ảnh hưởng"], answerIndex: 1, explanation: "Prompt theo block dễ sửa và mở rộng." },
      { q: "Trong Trình tạo Prompt, block dùng để?", choices: ["Trang trí", "Tách trách nhiệm từng phần", "Không cần"], answerIndex: 1, explanation: "Mỗi block đại diện một phần ý nghĩa." },
      { q: "Khi output lệch ý, nên làm gì trước?", choices: ["Sửa block liên quan", "Xóa hết", "Để nguyên"], answerIndex: 0, explanation: "Sửa đúng block sẽ nhanh và chính xác hơn." }
    ],
    assignmentTemplate: {
      blockIds: ["role_tutor", "task_quiz", "ctx_grade", "fmt_md", "con_len"],
      customInputSeed: "Thiết kế 1 kế hoạch học 3 bước về phân số lớp 6 theo block rõ ràng, ngắn gọn.",
      successHint: "Kiểm tra mỗi block trong canvas đã có vai trò riêng."
    }
  },
  {
    id: "sys_iterate",
    domain: "system_design",
    title: "Lặp cải tiến prompt theo vòng phản hồi",
    duration: "13 phút",
    content: [
      "Prompt tốt thường không xuất hiện ngay lần đầu.",
      "Bạn nên chạy thử, đọc output, rồi chỉnh block thiếu.",
      "Vòng lặp ngắn: viết prompt → chạy thử → sửa → chạy lại.",
      "Hãy dùng Điểm Prompt và Kiểm tra an toàn để ưu tiên phần cần sửa trước.",
      "Ghi chú thay đổi sau mỗi vòng giúp bạn tiến bộ nhanh hơn."
    ],
    keyPoints: ["Làm theo vòng lặp ngắn.", "Dựa vào score/safety để sửa.", "Theo dõi thay đổi qua từng lần."],
    quiz: [
      { q: "Sau lần chạy đầu chưa tốt, bước đúng là gì?", choices: ["Bỏ luôn", "Sửa block rồi chạy lại", "Chỉ đổi màu giao diện"], answerIndex: 1, explanation: "Prompt cần iterative refinement." },
      { q: "Score/Safety giúp gì?", choices: ["Đánh giá khu vực cần cải thiện", "Thay AI suy nghĩ", "Không liên quan"], answerIndex: 0, explanation: "Chúng chỉ ra điểm yếu cụ thể của prompt." },
      { q: "Vì sao nên ghi chú thay đổi?", choices: ["Để nhớ cái gì hiệu quả", "Không cần", "Để prompt dài hơn"], answerIndex: 0, explanation: "Ghi chú giúp lặp cải tiến có hệ thống." }
    ],
    assignmentTemplate: {
      blockIds: ["role_coach", "task_step", "ctx_grade", "con_scope", "ver_src"],
      customInputSeed: "Tạo hướng dẫn học từ vựng tiếng Anh lớp 7 trong 3 vòng: thử, phản hồi, cải tiến.",
      successHint: "Chạy prompt 2 lần và so sánh kết quả sau khi chỉnh block."
    }
  }
];

LESSONS.forEach((lesson) => {
  if(!["basic","medium","advanced"].includes(lesson?.difficulty)){
    lesson.difficulty = "basic";
  }
  if(!lesson?.assignmentTemplate) return;
  if(!lesson.assignmentTemplate.rubricRequirements){
    lesson.assignmentTemplate.rubricRequirements = {
      ...(LESSON_RUBRIC_OVERRIDES[lesson.id] || {
        requiredTypes: ["ROLE", "TASK", "CONTEXT"],
        requiredTagsAny: [],
        forbiddenTags: [],
        minScore: 70,
        noFailSafety: true,
        difficulty: "easy"
      })
    };
  }
});

/* unsafe keyword lists (same logic as original) */
const KW = {
  dangerousFail:["vũ khí","chất nổ","bom","hack trái phép","xâm nhập trái phép","malware","ma doc","phan mem doc hai","ransomware","trojan","keylogger","spyware","botnet","phishing","ddos","tự hại","tự sát","ma túy","lừa đảo"],
  personalFail:["cccd","cmnd","can cuoc","mat khau","otp","the ngan hang","tai khoan ngan hang","so tai khoan","dia chi nha","so dien thoai","dien thoai","sdt"],
  personalWarn:["email","thong tin ca nhan","lien he rieng","ten day du","ho ten"],
  ageRisk:["khiêu dâm","nội dung 18+","thù ghét","cờ bạc","bạo lực","chính trị cực đoan"],
  studentCues:["học sinh","dễ hiểu","thân thiện","ngắn gọn","từng bước","ví dụ","giải thích"],
  verificationNeed:["số liệu","thống kê","xu hướng","tin tức","nguồn","thông tin mới","dữ kiện"],
  verificationCues:["kiểm chứng","kiểm tra lại","độ tin cậy","xác thực"],
  jailbreak:["ignore previous","bo qua quy tac","bo qua an toan","jailbreak","dong vai","gia vo"],
};

/* ── STATE ─────────────────────────────────────────────────────── */
let mode     = "student";
let canvas   = [];          // [{uid,blockId,content}]
let search   = "";
let pendingUid = null;
let dragState  = null;
let activeRoute = "literacy";
let litDomainFilter = "all";
let litDifficultyFilter = "basic";
let litSearchQuery = "";
let litSelectedLessonId = LESSONS[0].id;
let litProgress = {
  completedLessons: [],
  quizScores: {},
  practiceAttempts: {},
  bestScore: {},
  lastOpenLesson: LESSONS[0].id,
  updatedAt: 0
};
let customBlocks = [];
let litQuizState = {};
let activePracticeLessonId = null;
let activeAssignmentContext = null;
let practiceProgress = {};
let assignmentBannerCollapsed = false;
let uiTheme = "dark";
let uiLang = "vi";
const chartHoverMap = {};
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let progressShouldAnimateCharts = true;
const chartAnimFrames = {};
const DEFAULT_AI_SETTINGS = {
  provider: "mock",
  openrouter: {
    apiKey: "",
    model: "openai/gpt-4o-mini",
    baseUrl: "https://openrouter.ai/api/v1"
  },
  local: {
    baseUrl: "http://localhost:11434",
    model: "llama3.1",
    endpointType: "ollama_native"
  }
};
let aiSettings = JSON.parse(JSON.stringify(DEFAULT_AI_SETTINGS));
let latestRunMeta = null;
const DEFAULT_OPENROUTER_MODEL_SUGGESTIONS = [
  { id: "openai/gpt-4o-mini", context_length: 128000, pricing: { prompt: "0.00015", completion: "0.0006" } },
  { id: "openai/gpt-4.1-mini", context_length: 128000, pricing: { prompt: "0.0004", completion: "0.0016" } },
  { id: "anthropic/claude-3.5-haiku", context_length: 200000, pricing: { prompt: "0.0008", completion: "0.004" } },
  { id: "google/gemini-2.0-flash-001", context_length: 1048576, pricing: { prompt: "0.000075", completion: "0.0003" } },
  { id: "meta-llama/llama-3.1-70b-instruct", context_length: 131072, pricing: { prompt: "0.00039", completion: "0.00039" } }
];
let openrouterModelSuggestions = [];
let openrouterModelSuggestionsLoaded = false;
let openrouterModelSuggestionsLoading = false;
const dropdowns = {};

/* ── DOM REFS ──────────────────────────────────────────────────── */
const $ = id => document.getElementById(id);
const D = {
  libraryPanel: $("library-panel"),
  library:      $("library"),
  libraryDeleteDropzone:$("library-delete-dropzone"),
  canvas:       $("canvas"),
  customInput:  $("custom-input"),
  preview:      $("preview"),
  blockCount:   $("block-count"),
  output:       $("output"),
  runState:     $("run-state"),
  totalScore:   $("total-score"),
  scoreBand:    $("score-band"),
  meterFill:    $("meter-fill"),
  critList:     $("crit-list"),
  scoreSummary: $("score-summary"),
  scoreSugg:    $("score-sugg"),
  safetyScore:  $("safety-score-num"),
  safetyBadge:  $("safety-badge"),
  safetySummary:$("safety-summary"),
  safetyItems:  $("safety-items"),
  safetyActions:$("safety-actions"),
  search:       $("search"),
  btnSubmit:    $("btn-submit"),
  btnAISettings:$("btn-ai-settings"),
  aiEngineAutoChip:$("ai-engine-auto-chip"),
  btnCustomOpen:$("btn-custom-open"),
  modeBtns:     [...document.querySelectorAll(".mode-btn")],
  hdActions:    document.querySelector(".hd-actions"),
  modeSwitch:   document.querySelector(".mode-sw"),
  routeBtns:    [...document.querySelectorAll(".route-btn")],
  routeBuilder: $("route-builder"),
  routeLiteracy:$("route-literacy"),
  routeProgress:$("route-progress"),
  themeBtns:    [...document.querySelectorAll(".pref-btn[data-theme]")],
  langBtns:     [...document.querySelectorAll(".pref-btn[data-lang]")],
  hdSubtitle:   $("hd-subtitle"),
  routeBuilderBtn: $("route-builder-btn"),
  routeLiteracyBtn:$("route-literacy-btn"),
  routeProgressBtn:$("route-progress-btn"),
  themeDarkBtn: $("theme-dark-btn"),
  themeLightBtn:$("theme-light-btn"),
  langViBtn:    $("lang-vi-btn"),
  langEnBtn:    $("lang-en-btn"),
  libTitle:     $("lib-title"),
  libNote:      $("lib-note"),
  libSearchLabel:$("lib-search-label"),
  canvasTitle:  $("canvas-title"),
  assignmentBanner:$("assignment-banner"),
  assignmentKicker:$("assignment-kicker"),
  assignmentTitle:$("assignment-title"),
  assignmentDomain:$("assignment-domain"),
  assignmentSnippet:$("assignment-snippet"),
  assignmentStatus:$("assignment-status"),
  assignmentTime:$("assignment-time"),
  assignmentChecklistLabel:$("assignment-checklist-label"),
  assignmentChecklistWrap:$("assignment-checklist-wrap"),
  assignmentChecklist:$("assignment-checklist"),
  assignmentBody:$("assignment-body"),
  assignmentMeta:$("assignment-meta"),
  assignmentMetaBestLabel:$("assignment-meta-best-label"),
  assignmentMetaBest:$("assignment-meta-best"),
  assignmentMetaAttemptsLabel:$("assignment-meta-attempts-label"),
  assignmentMetaAttempts:$("assignment-meta-attempts"),
  assignmentChangeBtn:$("assignment-change-btn"),
  assignmentHideBtn:$("assignment-hide-btn"),
  customLabelMain:$("custom-label-main"),
  customLabelOptional:$("custom-label-optional"),
  scoreTitle:   $("score-title"),
  safetyTitle:  $("safety-title"),
  safetySuggestTitle:$("safety-suggest-title"),
  previewTitle: $("preview-title"),
  sandboxTitle: $("sandbox-title"),
  tipsTitle:    $("tips-title"),
  tipsItem1:    $("tips-item-1"),
  tipsItem2:    $("tips-item-2"),
  tipsItem3:    $("tips-item-3"),
  litProgressTitle:$("lit-progress-title"),
  litProgressSubtitle:$("lit-progress-subtitle"),
  litProgressUpdated:$("lit-progress-updated"),
  litKpiPercentLabel:$("lit-kpi-percent-label"),
  litKpiAvgLabel:$("lit-kpi-avg-label"),
  progressPracticeAvgLabel:$("progress-practice-avg-label"),
  progressBestScoreLabel:$("progress-best-score-label"),
  progressSubmitCountLabel:$("progress-submit-count-label"),
  litKpiDoneLabel:$("lit-kpi-done-label"),
  chartDonutTitle:$("chart-donut-title"),
  chartLineTitle:$("chart-line-title"),
  chartDomainTitle:$("chart-domain-title"),
  chartSafetyTitle:$("chart-safety-title"),
  litListTitle: $("lit-list-title"),
  litSearchLabel:$("lit-search-label"),
  litSearchInput:$("lit-search-input"),
  litFilters:   $("lit-domain-filters"),
  litDifficultyFilters:$("lit-difficulty-filters"),
  litLessonList:$("lit-lesson-list"),
  litDetail:    $("lit-detail"),
  litCompletedCount:$("lit-completed-count"),
  litUpdatedChip:$("lit-updated-chip"),
  litProgressRailFill:$("lit-progress-rail-fill"),
  litProgressRailLabel:$("lit-progress-rail-label"),
  litKpiPercent:$("lit-kpi-percent"),
  litKpiPercentTrend:$("lit-kpi-percent-trend"),
  litKpiAvg:    $("lit-kpi-avg"),
  litKpiAvgTrend:$("lit-kpi-avg-trend"),
  progressPracticeAvg:$("progress-practice-avg"),
  progressPracticeAvgTrend:$("progress-practice-avg-trend"),
  progressBestScore:$("progress-best-score"),
  progressBestScoreTrend:$("progress-best-score-trend"),
  progressSubmitCount:$("progress-submit-count"),
  progressSubmitCountTrend:$("progress-submit-count-trend"),
  litDoneList:  $("lit-done-list"),
  litDoneExpand:$("lit-done-expand"),
  progressInsightsTitle:$("progress-insights-title"),
  progressInsightsSubtitle:$("progress-insights-subtitle"),
  progressInsightsList:$("progress-insights-list"),
  progressInsightsFoot:$("progress-insights-foot"),
  chartDonutSubtitle:$("chart-donut-subtitle"),
  chartLineSubtitle:$("chart-line-subtitle"),
  chartDomainSubtitle:$("chart-domain-subtitle"),
  chartSafetySubtitle:$("chart-safety-subtitle"),
  chartDonutLegend:$("chart-donut-legend"),
  chartLineLegend:$("chart-line-legend"),
  chartDomainLegend:$("chart-domain-legend"),
  chartSafetyLegend:$("chart-safety-legend"),
  chartDonutInsight:$("chart-donut-insight"),
  chartLineInsight:$("chart-line-insight"),
  chartDomainInsight:$("chart-domain-insight"),
  chartSafetyInsight:$("chart-safety-insight"),
  lineChartEmpty:$("line-chart-empty"),
  lineChartEmptyTitle:$("line-chart-empty-title"),
  lineChartEmptyText:$("line-chart-empty-text"),
  lineChartGoBuilder:$("line-chart-go-builder"),
  progressDonutCanvas:$("progress-donut-chart"),
  progressLineCanvas:$("progress-line-chart"),
  progressDomainCanvas:$("progress-domain-chart"),
  progressSafetyCanvas:$("progress-safety-chart"),
  chartTooltip:$("chart-tooltip"),
  litDoneModal:$("lit-done-modal"),
  litDoneModalTitle:$("lit-done-modal-title"),
  litDoneModalClose:$("lit-done-modal-close"),
  litDoneModalCloseBtn:$("lit-done-modal-close-btn"),
  litDoneModalList:$("lit-done-modal-list"),
  customModal:  $("custom-modal"),
  customForm:   $("custom-form"),
  customModalTitle:$("custom-modal-title"),
  customId:     $("custom-id"),
  customName:   $("custom-name"),
  customTypeMount:$("custom-type-dd"),
  customType:   $("custom-type"),
  customDesc:   $("custom-desc"),
  customContent:$("custom-content"),
  customRequiredNote:$("custom-required-note"),
  customValidationMsg:$("custom-validation-msg"),
  customCancel: $("custom-cancel"),
  customSave:   $("custom-save"),
  customModalClose:$("custom-modal-close"),
  aiSettingsModal:$("ai-settings-modal"),
  aiSettingsForm:$("ai-settings-form"),
  aiSettingsTitle:$("ai-settings-title"),
  aiSettingsClose:$("ai-settings-close"),
  aiSettingsCancel:$("ai-settings-cancel"),
  aiSettingsSave:$("ai-settings-save"),
  aiSettingsTest:$("ai-settings-test"),
  aiSettingsNote:$("ai-settings-note"),
  aiProviderMount:$("ai-provider-dd"),
  aiProvider:$("ai-provider"),
  aiProviderLabel:$("ai-provider-label"),
  aiOpenrouterFields:$("ai-openrouter-fields"),
  aiOpenrouterKey:$("ai-openrouter-key"),
  aiOpenrouterModel:$("ai-openrouter-model"),
  aiOpenrouterBase:$("ai-openrouter-base"),
  aiModelSuggestBtn:$("ai-model-suggest-btn"),
  aiModelPicker:$("ai-model-picker"),
  aiModelSearch:$("ai-model-search"),
  aiModelList:$("ai-model-list"),
  aiModelStatus:$("ai-model-status"),
  aiORKeyLabel:$("ai-or-key-label"),
  aiORModelLabel:$("ai-or-model-label"),
  aiORBaseLabel:$("ai-or-base-label"),
  aiLocalFields:$("ai-local-fields"),
  aiLocalBase:$("ai-local-base"),
  aiLocalModel:$("ai-local-model"),
  aiLocalEndpointMount:$("ai-local-endpoint-dd"),
  aiLocalEndpoint:$("ai-local-endpoint"),
  aiLocalBaseLabel:$("ai-local-base-label"),
  aiLocalModelLabel:$("ai-local-model-label"),
  aiLocalEndpointLabel:$("ai-local-endpoint-label"),
};

/* ── UTILS ─────────────────────────────────────────────────────── */
const uid  = () => `pb${Date.now()}${Math.random().toString(36).slice(2,7)}`;
const norm = t => (t||"").toString().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"d").toLowerCase().replace(/\s+/g," ").trim();
const clamp = (v,a,b) => Math.max(a,Math.min(b,v));
const uniq  = a => [...new Set(a)];
const hasKW = (t,kws) => kws.some(k=>norm(t).includes(norm(k)));
const findKW= (t,kws) => kws.filter(k=>norm(t).includes(norm(k)));
const normalizeTag = (value) => norm(value).replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
const normalizeBlockType = (value, group = "") => {
  const raw = String(value || "").trim().toUpperCase();
  if(BLOCK_TYPES[raw]) return BLOCK_TYPES[raw];
  return GROUP_TO_TYPE[group] || BLOCK_TYPES.RULES;
};
const extractTagsFromText = (text) => {
  const n = norm(text);
  const tags = [];
  if(/gia su|huong dan|tutor/.test(n)) tags.push("tutor");
  if(/coach|huan luyen|huong dan hoc tap/.test(n)) tags.push("coach");
  if(/than thien|de hieu|gan gui/.test(n)) tags.push("friendly");
  if(/tung buoc|step/.test(n)) tags.push("step_by_step");
  if(/goi mo|socratic|cau hoi/.test(n)) tags.push("socratic");
  if(/gioi han|rang buoc|pham vi/.test(n)) tags.push("scope_limit");
  if(/do dai|120 tu|ngan gon/.test(n)) tags.push("length_limit");
  if(/kiem chung|kiem tra lai|nguon|fact/.test(n)) tags.push("verify_information");
  if(/hoc sinh|duoi 16|u16/.test(n)) tags.push("u16_safe");
  if(/dinh dang|tieu de|bullet/.test(n)) tags.push("format_output");
  return uniq(tags);
};
const ensureBlockMetadata = (block) => {
  if(!block || typeof block !== "object") return block;
  const group = String(block.group || "").toLowerCase();
  const type = normalizeBlockType(block.type, group);
  const rawTags = Array.isArray(block.tags) ? block.tags.map(normalizeTag).filter(Boolean) : [];
  const autoTags = [
    ...(BLOCK_TAG_DEFAULTS[block.id] || []),
    ...extractTagsFromText(`${block.label || ""} ${block.desc || ""} ${block.content || ""}`)
  ].map(normalizeTag).filter(Boolean);
  return {
    ...block,
    type,
    tags: uniq([...rawTags, ...autoTags])
  };
};
const getLibrarySource = () => [...LIBRARY, ...customBlocks].map(ensureBlockMetadata);
const libById = id => getLibrarySource().find(b=>b.id===id);
const getBlocks = () => canvas.map(e=>{const s=libById(e.blockId);return s?{...s,content:e.content,uid:e.uid}:null}).filter(Boolean);
const composePreview = (blocks,custom="") => {
  const bt = blocks.map(b=>`[${b.label}]\n${b.content.trim()}`).join("\n\n");
  const c  = custom.trim();
  return c ? `${bt}\n\n[Nội dung tùy chỉnh]\n${c}` : bt;
};
const lessonById = id => LESSONS.find(l => l.id === id);
const t = (key) => (I18N[uiLang] && I18N[uiLang][key]) || I18N.vi[key] || key;
const formatText = (key, data={}) =>
  Object.entries(data).reduce((acc,[k,v])=>acc.replaceAll(`{${k}}`, String(v)), t(key));
const setText = (el, value) => { if(el) el.textContent = value; };
const getTypeLabel = (type) => t(TYPE_LABEL_KEY[String(type || "").toUpperCase()] || String(type || ""));
const dropdownRegistry = new Set();

function getCustomGroupFromType(type){
  const key = String(type || "").trim().toUpperCase();
  return CUSTOM_TYPE_TO_GROUP[key] || "role";
}

function getCustomTypeFromGroup(group){
  return GROUP_TO_CUSTOM_TYPE[String(group || "").toLowerCase()] || "ROLE";
}

function getBlockTypeDropdownOptions(){
  const isVI = uiLang === "vi";
  return [
    { value:"ROLE", label:getTypeLabel("ROLE"), desc:isVI ? "AI là ai" : "Who AI should be", icon:"🎭" },
    { value:"TASK", label:getTypeLabel("TASK"), desc:isVI ? "Cần làm gì" : "What it should do", icon:"🎯" },
    { value:"CONTEXT", label:getTypeLabel("CONTEXT"), desc:isVI ? "Cho ai, lớp mấy" : "For whom / grade", icon:"🌍" },
    { value:"STYLE", label:getTypeLabel("STYLE"), desc:isVI ? "Giọng điệu trả lời" : "Response tone", icon:"✨" },
    { value:"RULES", label:getTypeLabel("RULES"), desc:isVI ? "Giới hạn, phạm vi" : "Limits and scope", icon:"🔒" },
    { value:"EXAMPLE", label:getGroupLabel("example"), desc:isVI ? "Mẫu đầu ra mong muốn" : "Expected output sample", icon:"📋" },
    { value:"FORMAT", label:getGroupLabel("format"), desc:isVI ? "Định dạng kết quả" : "Output format", icon:"📐" },
    { value:"VERIFICATION", label:getGroupLabel("verification"), desc:isVI ? "Nhắc kiểm tra nguồn" : "Ask for verification", icon:"✅" }
  ];
}

function getProviderDropdownOptions(){
  const isVI = uiLang === "vi";
  return [
    {
      value: "mock",
      label: t("settings_provider_mock"),
      desc: isVI ? "Không cần mạng, phản hồi mô phỏng" : "Offline demo response, no network required",
      icon: "🤖"
    },
    {
      value: "openrouter",
      label: t("settings_provider_openrouter"),
      desc: isVI ? "Chạy AI thật qua API, phù hợp demo nhanh" : "Real API run, fast demo setup",
      icon: "🌐",
      badge: isVI ? "Đề xuất" : "Recommended"
    },
    {
      value: "local",
      label: t("settings_provider_local"),
      desc: isVI ? "Chạy mô hình trên máy (Ollama/compat)" : "Run local model on your machine",
      icon: "🖥"
    }
  ];
}

function getEndpointDropdownOptions(){
  const isVI = uiLang === "vi";
  return [
    {
      value: "openai_compat",
      label: isVI ? "OpenAI Compatible" : "OpenAI Compatible",
      desc: "/v1/chat/completions",
      icon: "⚡"
    },
    {
      value: "ollama_native",
      label: isVI ? "Ollama Native" : "Ollama Native",
      desc: "/api/chat",
      icon: "🦙"
    }
  ];
}

function formatModelPrice(pricing = {}){
  const prompt = Number(pricing?.prompt);
  const completion = Number(pricing?.completion);
  if(Number.isFinite(prompt) && Number.isFinite(completion)){
    return `$${prompt.toFixed(6)} / $${completion.toFixed(6)}`;
  }
  return uiLang === "vi" ? "Giá: không rõ" : "Pricing: n/a";
}

function normalizeOpenRouterModelEntry(item){
  if(!item || typeof item !== "object") return null;
  const id = String(item.id || "").trim();
  if(!id) return null;
  const contextLength = Number(item.context_length || item.contextLength || 0) || 0;
  const pricing = item.pricing && typeof item.pricing === "object"
    ? item.pricing
    : {};
  return { id, contextLength, pricing };
}

function renderModelSuggestionList(){
  if(!D.aiModelList || !D.aiModelSearch || !D.aiModelStatus) return;
  const q = norm(D.aiModelSearch.value || "");
  const source = openrouterModelSuggestions.length ? openrouterModelSuggestions : DEFAULT_OPENROUTER_MODEL_SUGGESTIONS.map(normalizeOpenRouterModelEntry).filter(Boolean);
  const filtered = q
    ? source.filter((m)=>norm(`${m.id} ${m.contextLength}`).includes(q))
    : source;

  D.aiModelList.innerHTML = "";
  if(!filtered.length){
    D.aiModelStatus.textContent = t("settings_model_suggest_empty");
    return;
  }

  filtered.forEach((model)=>{
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "ai-model-item";
    btn.dataset.modelId = model.id;
    const contextText = model.contextLength > 0
      ? `${uiLang === "vi" ? "Context" : "Context"}: ${model.contextLength.toLocaleString()}`
      : (uiLang === "vi" ? "Context: không rõ" : "Context: n/a");
    const metaText = `${contextText} • ${formatModelPrice(model.pricing)}`;
    btn.innerHTML = `<strong>${model.id}</strong><span>${metaText}</span>`;
    btn.addEventListener("click", ()=>{
      if(D.aiOpenrouterModel){
        D.aiOpenrouterModel.value = model.id;
        D.aiOpenrouterModel.dispatchEvent(new Event("input", { bubbles:true }));
      }
      if(D.aiModelPicker){
        D.aiModelPicker.hidden = true;
      }
    });
    D.aiModelList.appendChild(btn);
  });
}

function setModelSuggestionStatus(text){
  if(D.aiModelStatus){
    D.aiModelStatus.textContent = text;
  }
}

async function fetchOpenRouterModelSuggestions(){
  if(openrouterModelSuggestionsLoading) return;
  openrouterModelSuggestionsLoading = true;
  setModelSuggestionStatus(t("settings_model_suggest_loading"));
  try{
    const res = await fetch("https://openrouter.ai/api/v1/models", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    });
    if(!res.ok){
      throw new Error(`HTTP ${res.status}`);
    }
    const data = await res.json();
    const list = Array.isArray(data?.data) ? data.data : [];
    const normalized = list.map(normalizeOpenRouterModelEntry).filter(Boolean);
    if(!normalized.length){
      throw new Error("empty");
    }
    openrouterModelSuggestions = normalized;
    openrouterModelSuggestionsLoaded = true;
    setModelSuggestionStatus(formatText("settings_model_suggest_loaded", { count: normalized.length }));
  }catch(_err){
    openrouterModelSuggestions = DEFAULT_OPENROUTER_MODEL_SUGGESTIONS.map(normalizeOpenRouterModelEntry).filter(Boolean);
    openrouterModelSuggestionsLoaded = true;
    setModelSuggestionStatus(`${t("settings_model_suggest_failed")} ${t("settings_model_suggest_fallback")}`);
  }finally{
    openrouterModelSuggestionsLoading = false;
    renderModelSuggestionList();
  }
}

async function toggleModelSuggestions(forceOpen = false){
  if(!D.aiModelPicker) return;
  const shouldOpen = forceOpen || D.aiModelPicker.hidden;
  D.aiModelPicker.hidden = !shouldOpen;
  if(!shouldOpen) return;

  if(D.aiModelSearch){
    D.aiModelSearch.placeholder = t("settings_model_suggest_placeholder");
  }
  if(!openrouterModelSuggestionsLoaded){
    await fetchOpenRouterModelSuggestions();
  }else{
    renderModelSuggestionList();
  }
}

function closeOpenDropdowns(){
  let hadOpen = false;
  dropdownRegistry.forEach((instance)=>{
    if(instance?.isOpen?.()){
      instance.close();
      hadOpen = true;
    }
  });
  return hadOpen;
}

function createDropdown({
  mountEl,
  value = "",
  options = [],
  onChange = () => {},
  variant = "compact",
  searchable = false
}){
  if(!mountEl) return null;

  const root = document.createElement("div");
  root.className = `dd dd-${variant === "rich" ? "rich" : "compact"}`;
  root.tabIndex = -1;

  const trigger = document.createElement("button");
  trigger.type = "button";
  trigger.className = "dd-trigger";
  trigger.setAttribute("aria-haspopup", "listbox");
  trigger.setAttribute("aria-expanded", "false");

  const triggerMain = document.createElement("span");
  triggerMain.className = "dd-trigger-main";
  const triggerIcon = document.createElement("span");
  triggerIcon.className = "dd-trigger-icon";
  const triggerLabel = document.createElement("span");
  triggerLabel.className = "dd-trigger-label";
  const triggerDesc = document.createElement("span");
  triggerDesc.className = "dd-trigger-desc";
  const triggerChevron = document.createElement("span");
  triggerChevron.className = "dd-chevron";
  triggerChevron.setAttribute("aria-hidden", "true");
  triggerChevron.textContent = "▾";

  triggerMain.append(triggerIcon, triggerLabel, triggerDesc);
  trigger.append(triggerMain, triggerChevron);

  const panel = document.createElement("div");
  panel.className = "dd-panel";
  panel.setAttribute("role", "listbox");
  panel.tabIndex = -1;

  const searchWrap = document.createElement("div");
  searchWrap.className = "dd-search-wrap";
  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.className = "dd-search";
  searchInput.autocomplete = "off";
  searchInput.placeholder = uiLang === "vi" ? "Tìm nhanh..." : "Quick search...";
  searchWrap.appendChild(searchInput);

  const list = document.createElement("div");
  list.className = "dd-list";
  panel.append(searchWrap, list);
  root.append(trigger, panel);

  mountEl.innerHTML = "";
  mountEl.appendChild(root);

  let currentValue = "";
  let open = false;
  let query = "";
  let highlightedIndex = -1;
  let available = [];
  let renderedItems = [];

  const setOpenDirection = ()=>{
    root.classList.remove("dd-dropup");
    const panelHeight = Math.min(panel.scrollHeight || 0, 300);
    const rect = trigger.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    const spaceAbove = rect.top;
    if(spaceBelow < panelHeight + 16 && spaceAbove > spaceBelow){
      root.classList.add("dd-dropup");
    }
  };

  const focusItem = (index)=>{
    if(!renderedItems.length) return;
    highlightedIndex = clamp(index, 0, renderedItems.length - 1);
    renderedItems.forEach((item, idx)=>{
      item.classList.toggle("is-highlighted", idx === highlightedIndex);
      if(idx === highlightedIndex) item.scrollIntoView({ block:"nearest" });
    });
  };

  const findSelectedInAvailable = ()=>{
    const idx = available.findIndex(opt => opt.value === currentValue);
    return idx >= 0 ? idx : 0;
  };

  const renderList = ()=>{
    list.innerHTML = "";
    const filtered = (query.trim()
      ? options.filter(opt => norm(`${opt.label || ""} ${opt.desc || ""} ${opt.value || ""}`).includes(norm(query)))
      : options
    );
    available = filtered;
    renderedItems = [];

    if(!filtered.length){
      const empty = document.createElement("div");
      empty.className = "dd-empty";
      empty.textContent = uiLang === "vi" ? "Không có lựa chọn phù hợp." : "No matching options.";
      list.appendChild(empty);
      highlightedIndex = -1;
      return;
    }

    highlightedIndex = findSelectedInAvailable();
    filtered.forEach((opt, idx)=>{
      const item = document.createElement("button");
      item.type = "button";
      item.className = "dd-item";
      item.setAttribute("role", "option");
      item.dataset.value = opt.value;
      if(opt.value === currentValue){
        item.classList.add("dd-item--selected");
        item.setAttribute("aria-selected", "true");
      }else{
        item.setAttribute("aria-selected", "false");
      }

      const icon = document.createElement("span");
      icon.className = "dd-item-icon";
      icon.textContent = opt.icon || "•";

      const content = document.createElement("span");
      content.className = "dd-item-content";
      const title = document.createElement("span");
      title.className = "dd-item-title";
      title.textContent = opt.label || opt.value;
      const desc = document.createElement("span");
      desc.className = "dd-item-desc";
      desc.textContent = opt.desc || "";
      if(!opt.desc || variant !== "rich"){
        desc.style.display = "none";
      }
      content.append(title, desc);

      const right = document.createElement("span");
      right.className = "dd-item-right";
      if(opt.badge){
        const badge = document.createElement("span");
        badge.className = "dd-item-badge";
        badge.textContent = opt.badge;
        right.appendChild(badge);
      }
      const check = document.createElement("span");
      check.className = "dd-item-check";
      check.textContent = "✓";
      right.appendChild(check);

      item.append(icon, content, right);
      item.addEventListener("mouseenter", ()=>{
        focusItem(idx);
      });
      item.addEventListener("click", ()=>{
        api.setValue(opt.value);
        api.close({ restoreFocus:true });
      });
      list.appendChild(item);
      renderedItems.push(item);
      if(idx === highlightedIndex){
        item.classList.add("is-highlighted");
      }
    });

    const selectedIndex = findSelectedInAvailable();
    if(highlightedIndex < 0 || highlightedIndex >= renderedItems.length){
      highlightedIndex = selectedIndex;
    }
    focusItem(highlightedIndex);
  };

  const renderTrigger = ()=>{
    const selected = options.find(opt => opt.value === currentValue) || options[0] || {};
    triggerIcon.textContent = selected.icon || "";
    triggerLabel.textContent = selected.label || selected.value || "";
    triggerDesc.textContent = variant === "rich" ? (selected.desc || "") : "";
    triggerDesc.style.display = variant === "rich" && selected.desc ? "" : "none";
  };

  const onOutsidePointerDown = (event)=>{
    if(!root.contains(event.target)){
      api.close();
    }
  };

  const onWindowReposition = ()=>{
    if(open) setOpenDirection();
  };

  const onKeyNavigate = (event)=>{
    if(!open){
      if(event.key === "ArrowDown" || event.key === "ArrowUp"){
        event.preventDefault();
        api.open();
        const baseIndex = event.key === "ArrowUp" ? renderedItems.length - 1 : 0;
        focusItem(baseIndex);
      }
      if(event.key === "Enter" || event.key === " "){
        event.preventDefault();
        api.toggle();
      }
      return;
    }

    if(event.key === "Escape"){
      event.preventDefault();
      api.close({ restoreFocus:true });
      return;
    }
    if(event.key === "Tab"){
      api.close();
      return;
    }
    if(event.key === "ArrowDown"){
      event.preventDefault();
      focusItem(highlightedIndex + 1);
      return;
    }
    if(event.key === "ArrowUp"){
      event.preventDefault();
      focusItem(highlightedIndex - 1);
      return;
    }
    if(event.key === "Enter"){
      event.preventDefault();
      const target = available[highlightedIndex];
      if(target){
        api.setValue(target.value);
        api.close({ restoreFocus:true });
      }
    }
  };

  const api = {
    root,
    trigger,
    panel,
    isOpen: ()=>open,
    open(){
      closeOpenDropdowns();
      open = true;
      root.classList.add("dd-open");
      trigger.setAttribute("aria-expanded", "true");
      searchWrap.hidden = !(searchable && variant === "rich");
      if(searchable && variant === "rich"){
        query = "";
        searchInput.value = "";
      }
      renderList();
      setOpenDirection();
      document.addEventListener("pointerdown", onOutsidePointerDown, true);
      window.addEventListener("resize", onWindowReposition);
      window.addEventListener("scroll", onWindowReposition, true);
      if(searchable && variant === "rich"){
        setTimeout(()=>searchInput.focus(), 10);
      }else{
        setTimeout(()=>focusItem(findSelectedInAvailable()), 10);
      }
    },
    close({ restoreFocus = false } = {}){
      if(!open) return;
      open = false;
      root.classList.remove("dd-open");
      root.classList.remove("dd-dropup");
      trigger.setAttribute("aria-expanded", "false");
      document.removeEventListener("pointerdown", onOutsidePointerDown, true);
      window.removeEventListener("resize", onWindowReposition);
      window.removeEventListener("scroll", onWindowReposition, true);
      if(restoreFocus){
        trigger.focus({ preventScroll:true });
      }
    },
    toggle(){
      if(open){
        api.close();
      }else{
        api.open();
      }
    },
    setOptions(nextOptions = []){
      options = Array.isArray(nextOptions) ? nextOptions.slice() : [];
      searchInput.placeholder = uiLang === "vi" ? "Tìm nhanh..." : "Quick search...";
      if(!options.some(opt => opt.value === currentValue)){
        currentValue = options[0]?.value || "";
      }
      renderTrigger();
      renderList();
    },
    setValue(nextValue, { silent = false } = {}){
      const safeValue = String(nextValue || "");
      if(!options.some(opt => opt.value === safeValue) && options.length){
        currentValue = options[0].value;
      }else{
        currentValue = safeValue;
      }
      renderTrigger();
      renderList();
      if(!silent){
        onChange(currentValue);
      }
    },
    getValue(){
      return currentValue;
    },
    destroy(){
      api.close();
      dropdownRegistry.delete(api);
      mountEl.innerHTML = "";
    }
  };

  trigger.addEventListener("click", ()=>api.toggle());
  trigger.addEventListener("keydown", onKeyNavigate);
  panel.addEventListener("keydown", onKeyNavigate);
  searchInput.addEventListener("input", ()=>{
    query = searchInput.value || "";
    renderList();
  });
  searchInput.addEventListener("keydown", onKeyNavigate);

  dropdownRegistry.add(api);
  api.setOptions(options);
  api.setValue(value || options[0]?.value || "", { silent: true });
  return api;
}

function normalizeRubricRequirements(raw, lessonId = ""){
  const lessonFallback = LESSON_RUBRIC_OVERRIDES[lessonId] || {};
  const source = raw && typeof raw === "object" ? raw : {};
  const requiredTypes = uniq((Array.isArray(source.requiredTypes) ? source.requiredTypes : (lessonFallback.requiredTypes || []))
    .map(v => normalizeBlockType(v))
    .filter(Boolean));
  const requiredTagsAny = uniq((Array.isArray(source.requiredTagsAny) ? source.requiredTagsAny : (lessonFallback.requiredTagsAny || []))
    .map(normalizeTag)
    .filter(Boolean));
  const forbiddenTags = uniq((Array.isArray(source.forbiddenTags) ? source.forbiddenTags : (lessonFallback.forbiddenTags || []))
    .map(normalizeTag)
    .filter(Boolean));
  return {
    requiredTypes,
    requiredTagsAny,
    forbiddenTags,
    minScore: Number.isFinite(Number(source.minScore))
      ? clamp(Math.round(Number(source.minScore)), 0, 100)
      : Number.isFinite(Number(lessonFallback.minScore)) ? clamp(Math.round(Number(lessonFallback.minScore)), 0, 100) : 70,
    noFailSafety: source.noFailSafety !== false && lessonFallback.noFailSafety !== false,
    difficulty: ["easy","medium","hard"].includes(source.difficulty)
      ? source.difficulty
      : (["easy","medium","hard"].includes(lessonFallback.difficulty) ? lessonFallback.difficulty : "easy"),
    strictForbidden: source.strictForbidden === false ? false : true
  };
}

function getLessonRubric(lesson){
  if(!lesson) return normalizeRubricRequirements({}, "");
  const fromLesson = lesson.assignmentTemplate?.rubricRequirements;
  return normalizeRubricRequirements(fromLesson, lesson.id);
}

function getStructureChecklistByDifficulty(lesson){
  const rubric = getLessonRubric(lesson);
  const base = [
    `${getTypeLabel("ROLE")} (${uiLang === "vi" ? "AI là ai" : "who AI should be"})`,
    `${getTypeLabel("TASK")} (${uiLang === "vi" ? "cần làm gì" : "what it should do"})`,
    `${getTypeLabel("CONTEXT")} (${uiLang === "vi" ? "cho ai, lớp mấy" : "for whom / grade"})`,
    `${getTypeLabel("RULES")} (${uiLang === "vi" ? "độ dài, format, phạm vi" : "length, format, scope"})`,
    `${getTypeLabel("VERIFY")} (${uiLang === "vi" ? "nếu có số liệu" : "if data/facts are used"})`,
    `${getTypeLabel("SAFETY")} (${uiLang === "vi" ? "an toàn dưới 16 tuổi" : "U16 safety"})`
  ];

  if(rubric.difficulty === "hard"){
    return [t("rubric_hint_hard"), `${uiLang === "vi" ? "Mốc đạt tối thiểu" : "Target score"}: ${rubric.minScore}/100.`];
  }
  if(rubric.difficulty === "medium"){
    return [t("rubric_hint_medium"), ...base.slice(0, 4), `${uiLang === "vi" ? "Mốc đạt tối thiểu" : "Target score"}: ${rubric.minScore}/100.`];
  }
  return [
    t("rubric_hint_medium"),
    ...base.slice(0, 5),
    t("rubric_hint_easy_example"),
    `${uiLang === "vi" ? "Mốc đạt tối thiểu" : "Target score"}: ${rubric.minScore}/100.`
  ];
}

function getDomainLabel(domainKey){
  const key = `domain_${domainKey}`;
  const translated = t(key);
  if(translated !== key) return translated;
  return DOMAIN_LABEL_EN[domainKey] || domainKey;
}

function getGroupLabel(groupKey){
  if(uiLang === "vi"){
    return GROUP_META[groupKey]?.label || groupKey;
  }
  return GROUP_LABEL_EN[groupKey] || GROUP_META[groupKey]?.label || groupKey;
}

function getDomainShortLabel(domainKey){
  const viMap = {
    human_centered: "Con người",
    ai_ethics: "Đạo đức",
    technical_applications: "Kỹ thuật",
    system_design: "Hệ thống"
  };
  const enMap = {
    human_centered: "Human",
    ai_ethics: "Ethics",
    technical_applications: "Technical",
    system_design: "System"
  };
  return (uiLang === "vi" ? viMap[domainKey] : enMap[domainKey]) || domainKey;
}

function loadUIPrefs(){
  try{
    const raw = JSON.parse(localStorage.getItem(UI_PREF_KEY) || "{}");
    if(raw.theme === "dark" || raw.theme === "light") uiTheme = raw.theme;
    if(raw.lang === "vi" || raw.lang === "en") uiLang = raw.lang;
  }catch(_){}
}

function saveUIPrefs(){
  try{
    localStorage.setItem(UI_PREF_KEY, JSON.stringify({ theme: uiTheme, lang: uiLang }));
  }catch(_){}
}

function updatePrefButtons(){
  D.themeBtns.forEach(btn => btn.classList.toggle("active", btn.dataset.theme === uiTheme));
  D.langBtns.forEach(btn => btn.classList.toggle("active", btn.dataset.lang === uiLang));
}

function sanitizeBaseUrl(url, fallback){
  const raw = String(url || "").trim();
  if(!raw) return fallback;
  return raw.replace(/\/+$/g, "");
}

function normalizeAISettings(raw){
  const source = raw && typeof raw === "object" ? raw : {};
  const provider = ["mock", "openrouter", "local"].includes(source.provider) ? source.provider : "mock";
  const openrouter = source.openrouter && typeof source.openrouter === "object" ? source.openrouter : {};
  const local = source.local && typeof source.local === "object" ? source.local : {};
  return {
    provider,
    openrouter: {
      apiKey: String(openrouter.apiKey || "").trim(),
      model: String(openrouter.model || DEFAULT_AI_SETTINGS.openrouter.model).trim() || DEFAULT_AI_SETTINGS.openrouter.model,
      baseUrl: sanitizeBaseUrl(openrouter.baseUrl, DEFAULT_AI_SETTINGS.openrouter.baseUrl)
    },
    local: {
      baseUrl: sanitizeBaseUrl(local.baseUrl, DEFAULT_AI_SETTINGS.local.baseUrl),
      model: String(local.model || DEFAULT_AI_SETTINGS.local.model).trim() || DEFAULT_AI_SETTINGS.local.model,
      endpointType: local.endpointType === "openai_compat" ? "openai_compat" : "ollama_native"
    }
  };
}

function loadAISettings(){
  try{
    const raw = JSON.parse(localStorage.getItem(AI_SETTINGS_KEY) || "null");
    aiSettings = normalizeAISettings(raw);
  }catch(_){
    aiSettings = normalizeAISettings(DEFAULT_AI_SETTINGS);
  }
}

function saveAISettings(){
  aiSettings = normalizeAISettings(aiSettings);
  try{
    localStorage.setItem(AI_SETTINGS_KEY, JSON.stringify(aiSettings));
  }catch(_){}
}

function getProviderLabel(provider = aiSettings.provider){
  if(provider === "openrouter") return t("settings_provider_openrouter");
  if(provider === "local") return t("settings_provider_local");
  return t("settings_provider_mock");
}

function getEffectiveAISettings(){
  const normalized = normalizeAISettings(aiSettings);
  if(mode === "student"){
    if(normalized.openrouter.apiKey){
      return { ...normalized, provider: "openrouter" };
    }
    return { ...normalized, provider: "mock" };
  }
  if(normalized.provider === "openrouter" && !normalized.openrouter.apiKey){
    return { ...normalized, provider: "mock" };
  }
  return normalized;
}

function getActiveProviderModel(provider = aiSettings.provider){
  if(provider === "openrouter") return aiSettings.openrouter.model || DEFAULT_AI_SETTINGS.openrouter.model;
  if(provider === "local") return aiSettings.local.model || DEFAULT_AI_SETTINGS.local.model;
  return "mock";
}

function setHiddenInputValue(inputEl, value, { emit = false } = {}){
  if(!inputEl) return;
  const next = String(value || "");
  if(inputEl.value === next){
    if(emit){
      inputEl.dispatchEvent(new Event("change", { bubbles: true }));
    }
    return;
  }
  inputEl.value = next;
  if(emit){
    inputEl.dispatchEvent(new Event("change", { bubbles: true }));
  }
}

function initSharedDropdowns(){
  if(D.customTypeMount && D.customType && !dropdowns.customType){
    dropdowns.customType = createDropdown({
      mountEl: D.customTypeMount,
      value: D.customType.value || "ROLE",
      options: getBlockTypeDropdownOptions(),
      variant: "compact",
      onChange: (next)=>{
        setHiddenInputValue(D.customType, next, { emit:true });
        if(D.customTypeMount?.classList.contains("is-invalid")){
          D.customTypeMount.classList.remove("is-invalid");
        }
        if(D.customValidationMsg && !D.customValidationMsg.hidden){
          D.customValidationMsg.hidden = true;
          D.customValidationMsg.textContent = "";
        }
      }
    });
  }

  if(D.aiProviderMount && D.aiProvider && !dropdowns.aiProvider){
    dropdowns.aiProvider = createDropdown({
      mountEl: D.aiProviderMount,
      value: D.aiProvider.value || "mock",
      options: getProviderDropdownOptions(),
      variant: "rich",
      searchable: true,
      onChange: (next)=>{
        setHiddenInputValue(D.aiProvider, next, { emit:true });
      }
    });
  }

  if(D.aiLocalEndpointMount && D.aiLocalEndpoint && !dropdowns.aiLocalEndpoint){
    dropdowns.aiLocalEndpoint = createDropdown({
      mountEl: D.aiLocalEndpointMount,
      value: D.aiLocalEndpoint.value || "ollama_native",
      options: getEndpointDropdownOptions(),
      variant: "compact",
      onChange: (next)=>{
        setHiddenInputValue(D.aiLocalEndpoint, next, { emit:true });
      }
    });
  }
}

function refreshDropdownContent(){
  if(dropdowns.customType){
    dropdowns.customType.setOptions(getBlockTypeDropdownOptions());
  }
  if(dropdowns.aiProvider){
    dropdowns.aiProvider.setOptions(getProviderDropdownOptions());
  }
  if(dropdowns.aiLocalEndpoint){
    dropdowns.aiLocalEndpoint.setOptions(getEndpointDropdownOptions());
  }
}

function syncAISettingsProviderFields(){
  const provider = D.aiProvider?.value || "mock";
  if(D.aiOpenrouterFields) D.aiOpenrouterFields.hidden = provider !== "openrouter";
  if(D.aiLocalFields) D.aiLocalFields.hidden = provider !== "local";
  if(provider !== "openrouter" && D.aiModelPicker){
    D.aiModelPicker.hidden = true;
  }
}

function syncAISettingsForm(){
  setHiddenInputValue(D.aiProvider, aiSettings.provider);
  if(dropdowns.aiProvider){
    dropdowns.aiProvider.setValue(aiSettings.provider, { silent:true });
  }
  if(D.aiOpenrouterKey) D.aiOpenrouterKey.value = aiSettings.openrouter.apiKey;
  if(D.aiOpenrouterModel) D.aiOpenrouterModel.value = aiSettings.openrouter.model;
  if(D.aiOpenrouterBase) D.aiOpenrouterBase.value = aiSettings.openrouter.baseUrl;
  if(D.aiLocalBase) D.aiLocalBase.value = aiSettings.local.baseUrl;
  if(D.aiLocalModel) D.aiLocalModel.value = aiSettings.local.model;
  setHiddenInputValue(D.aiLocalEndpoint, aiSettings.local.endpointType);
  if(dropdowns.aiLocalEndpoint){
    dropdowns.aiLocalEndpoint.setValue(aiSettings.local.endpointType, { silent:true });
  }
  syncAISettingsProviderFields();
}

function readAISettingsFromForm(){
  return normalizeAISettings({
    provider: D.aiProvider?.value || "mock",
    openrouter: {
      apiKey: D.aiOpenrouterKey?.value || "",
      model: D.aiOpenrouterModel?.value || "",
      baseUrl: D.aiOpenrouterBase?.value || ""
    },
    local: {
      baseUrl: D.aiLocalBase?.value || "",
      model: D.aiLocalModel?.value || "",
      endpointType: D.aiLocalEndpoint?.value || "ollama_native"
    }
  });
}

function openAISettingsModal(){
  if(!D.aiSettingsModal) return;
  syncAISettingsForm();
  if(D.aiModelPicker) D.aiModelPicker.hidden = true;
  if(D.aiModelSearch) D.aiModelSearch.value = "";
  if(D.aiModelStatus && !openrouterModelSuggestionsLoaded){
    D.aiModelStatus.textContent = t("settings_model_suggest_init");
  }
  D.aiSettingsModal.hidden = false;
  D.aiSettingsModal.setAttribute("aria-hidden", "false");
}

function closeAISettingsModal(restoreFocus = true){
  if(!D.aiSettingsModal) return;
  closeOpenDropdowns();
  D.aiSettingsModal.hidden = true;
  D.aiSettingsModal.setAttribute("aria-hidden", "true");
  if(restoreFocus){
    D.btnAISettings?.focus({ preventScroll: true });
  }
}

function openDoneModal(){
  if(!D.litDoneModal) return;
  D.litDoneModal.hidden = false;
  D.litDoneModal.setAttribute("aria-hidden", "false");
}

function closeDoneModal(restoreFocus = true){
  if(!D.litDoneModal) return;
  D.litDoneModal.hidden = true;
  D.litDoneModal.setAttribute("aria-hidden", "true");
  if(restoreFocus){
    D.litDoneExpand?.focus({ preventScroll: true });
  }
}

function applyTheme(){
  document.body.dataset.theme = uiTheme;
  updatePrefButtons();
}

function applyLanguage(){
  document.documentElement.lang = uiLang === "vi" ? "vi" : "en";
  document.title = t("page_title");
  updatePrefButtons();

  setText(D.hdSubtitle, t("subtitle"));
  setText(D.routeBuilderBtn, t("route_builder"));
  setText(D.routeLiteracyBtn, t("route_literacy"));
  setText(D.routeProgressBtn, t("route_progress"));
  setText($("btn-run"), t("btn_run"));
  setText(D.btnAISettings, t("btn_settings"));
  setText(D.aiEngineAutoChip, t("ai_engine_auto"));
  setText(D.btnSubmit, t("btn_submit"));
  setText($("btn-reset"), t("btn_reset"));
  setText($("btn-save"), t("btn_save"));
  setText($("btn-copy"), t("btn_copy"));
  setText($("mode-student"), t("mode_student"));
  setText($("mode-studio"), t("mode_studio"));
  if(D.themeDarkBtn){
    D.themeDarkBtn.title = t("theme_dark");
    D.themeDarkBtn.setAttribute("aria-label", t("theme_dark"));
  }
  if(D.themeLightBtn){
    D.themeLightBtn.title = t("theme_light");
    D.themeLightBtn.setAttribute("aria-label", t("theme_light"));
  }

  setText(D.libTitle, t("lib_title"));
  setText(D.libNote, t("lib_note"));
  setText(D.libSearchLabel, t("lib_search_label"));
  setText(D.btnCustomOpen, t("custom_block_btn"));
  if(D.search) D.search.placeholder = t("lib_search_placeholder");
  setText(D.canvasTitle, t("canvas_title"));
  setText(D.assignmentKicker, t("assignment_banner_title"));
  setText(D.assignmentChecklistLabel, t("assignment_checklist_label"));
  setText(D.assignmentMetaBestLabel, t("assignment_meta_best_label"));
  setText(D.assignmentMetaAttemptsLabel, t("assignment_meta_attempts_label"));
  setText(D.assignmentChangeBtn, t("assignment_change"));
  setText(D.customLabelMain, t("custom_label_main"));
  setText(D.customLabelOptional, t("custom_label_optional"));
  setText(D.customRequiredNote, t("custom_required_note"));
  if(D.customInput) D.customInput.placeholder = t("custom_placeholder");
  setText(D.scoreTitle, t("score_title"));
  setText(D.safetyTitle, t("safety_title"));
  setText(D.safetySuggestTitle, t("safety_suggest_title"));
  setText(D.previewTitle, t("preview_title"));
  setText(D.sandboxTitle, t("sandbox_title"));
  setText(D.tipsTitle, t("tips_title"));
  setText(D.tipsItem1, t("tips_1"));
  setText(D.tipsItem2, t("tips_2"));
  setText(D.tipsItem3, t("tips_3"));
  setText(D.litProgressTitle, t("lit_progress_title"));
  setText(D.litProgressSubtitle, t("lit_progress_subtitle"));
  setText(D.litUpdatedChip, t("lit_progress_chip_updated_none"));
  setText(D.litProgressRailLabel, "0%");
  setText(D.litDoneExpand, t("progress_done_view_all"));
  setText(D.progressInsightsTitle, t("progress_insights_title"));
  setText(D.progressInsightsSubtitle, t("progress_insights_subtitle"));
  setText(D.progressInsightsFoot, t("progress_insights_foot"));
  setText(D.litDoneModalTitle, t("progress_done_modal_title"));
  setText(D.litDoneModalCloseBtn, t("progress_done_modal_close"));
  setText(D.litListTitle, t("lit_list_title"));
  setText(D.litSearchLabel, t("lit_search_label"));
  if(D.litSearchInput) D.litSearchInput.placeholder = t("lit_search_placeholder");
  setText(D.litKpiPercentLabel, t("lit_kpi_percent_label"));
  setText(D.litKpiAvgLabel, t("lit_kpi_avg_label"));
  setText(D.progressPracticeAvgLabel, t("progress_practice_avg_label"));
  setText(D.progressBestScoreLabel, t("progress_best_score_label"));
  setText(D.progressSubmitCountLabel, t("progress_submit_count_label"));
  setText(D.litKpiDoneLabel, t("lit_kpi_done_label"));
  setText(D.chartDonutTitle, t("chart_donut_title"));
  setText(D.chartLineTitle, t("chart_line_title"));
  setText(D.chartDomainTitle, t("chart_domain_title"));
  setText(D.chartSafetyTitle, t("chart_safety_title"));
  setText(D.chartDonutSubtitle, t("chart_donut_subtitle"));
  setText(D.chartLineSubtitle, t("chart_line_subtitle"));
  setText(D.chartDomainSubtitle, t("chart_domain_subtitle"));
  setText(D.chartSafetySubtitle, t("chart_safety_subtitle"));
  setText(D.lineChartEmptyTitle, t("chart_line_empty_title"));
  setText(D.lineChartEmptyText, t("chart_line_empty_text"));
  setText(D.lineChartGoBuilder, t("chart_line_go_builder"));
  setText(D.aiSettingsTitle, t("settings_title"));
  setText(D.aiProviderLabel, t("settings_provider_label"));
  setText(D.aiORKeyLabel, t("settings_or_key_label"));
  setText(D.aiORModelLabel, t("settings_or_model_label"));
  setText(D.aiORBaseLabel, t("settings_or_base_label"));
  setText(D.aiModelSuggestBtn, t("settings_model_suggest_btn"));
  if(D.aiModelSearch){
    D.aiModelSearch.placeholder = t("settings_model_suggest_placeholder");
  }
  if(D.aiModelStatus && (!openrouterModelSuggestionsLoaded || !D.aiModelStatus.textContent.trim())){
    D.aiModelStatus.textContent = t("settings_model_suggest_init");
  }
  setText(D.aiLocalBaseLabel, t("settings_local_base_label"));
  setText(D.aiLocalModelLabel, t("settings_local_model_label"));
  setText(D.aiLocalEndpointLabel, t("settings_local_endpoint_label"));
  setText(D.aiSettingsNote, t("settings_note"));
  setText(D.aiSettingsSave, t("settings_save_btn"));
  setText(D.aiSettingsTest, t("settings_test_btn"));
  setText(D.aiSettingsCancel, t("settings_cancel_btn"));
  refreshDropdownContent();
  syncAISettingsForm();

  if(D.safetyBadge && D.safetyBadge.classList.contains("neutral")) setText(D.safetyBadge, t("safety_waiting"));
  if(D.safetyBadge && D.safetyBadge.classList.contains("neutral") && D.safetySummary){
    setText(D.safetySummary, t("safety_waiting_note"));
  }
  updateModeDependentUI();
  updateAssignmentBanner();
  renderProgressDashboard();
  updateSubmitButtonState();
}

function getCurrentRunState(){
  const states = ["idle","running","done","warning","blocked"];
  return states.find(s => D.runState?.classList.contains(s)) || "idle";
}

function buildCanvasEntriesByIds(ids){
  if(!Array.isArray(ids)) return [];
  return ids
    .map((id)=>{
      const s = libById(id);
      return s ? { uid: uid(), blockId: s.id, content: s.content } : null;
    })
    .filter(Boolean);
}

function mapCanvasPayloadEntries(entries){
  if(!Array.isArray(entries)) return [];
  return entries
    .map((item)=>{
      const rawId = item?.blockId || item?.id;
      const s = libById(rawId);
      if(!s) return null;
      return {
        uid: uid(),
        blockId: s.id,
        content: typeof item?.content === "string" ? item.content : s.content
      };
    })
    .filter(Boolean);
}

function getCurrentStateFromUI(){
  return {
    canvasBlocks: canvas.map(e => ({ blockId: e.blockId, content: e.content })),
    customInput: D.customInput?.value || "",
    mode,
    timestamp: Date.now()
  };
}

function applyStateToUI(state){
  if(!state || typeof state !== "object") return false;

  if(state.mode === "student" || state.mode === "studio"){
    mode = state.mode;
  }

  let nextCanvas = [];
  if(Array.isArray(state.canvasBlocks)){
    nextCanvas = mapCanvasPayloadEntries(state.canvasBlocks);
  }else if(Array.isArray(state.blockIds)){
    nextCanvas = buildCanvasEntriesByIds(state.blockIds);
  }
  if(nextCanvas.length || Array.isArray(state.canvasBlocks) || Array.isArray(state.blockIds)){
    canvas = nextCanvas;
  }

  const custom =
    typeof state.customInputSeed === "string" ? state.customInputSeed :
    typeof state.customInput === "string" ? state.customInput :
    typeof state.custom === "string" ? state.custom : "";
  if(D.customInput){
    D.customInput.value = custom;
  }

  D.modeBtns.forEach(b=>b.classList.toggle("active",b.dataset.mode===mode));
  renderCanvas();
  evaluate();
  return true;
}

function loadLiteracyProgress(){
  try{
    const parsed = JSON.parse(localStorage.getItem(LIT_PROGRESS_KEY) || "{}");
    const completedRaw = Array.isArray(parsed.completedLessons)
      ? parsed.completedLessons
      : Array.isArray(parsed.completed)
        ? parsed.completed
        : [];
    return {
      completedLessons: uniq(completedRaw.filter(Boolean)),
      quizScores: parsed.quizScores && typeof parsed.quizScores === "object" ? parsed.quizScores : {},
      practiceAttempts: parsed.practiceAttempts && typeof parsed.practiceAttempts === "object" ? parsed.practiceAttempts : {},
      bestScore: parsed.bestScore && typeof parsed.bestScore === "object" ? parsed.bestScore : {},
      lastOpenLesson: typeof parsed.lastOpenLesson === "string" ? parsed.lastOpenLesson : LESSONS[0].id,
      updatedAt: Number(parsed.updatedAt) || 0
    };
  }catch(_){
    return {
      completedLessons: [],
      quizScores: {},
      practiceAttempts: {},
      bestScore: {},
      lastOpenLesson: LESSONS[0].id,
      updatedAt: 0
    };
  }
}

function saveLiteracyProgress(){
  litProgress.updatedAt = Date.now();
  try{
    localStorage.setItem(LIT_PROGRESS_KEY, JSON.stringify(litProgress));
  }catch(_){}
}

function normalizeCustomBlock(raw){
  if(!raw || typeof raw !== "object") return null;
  const group = String(raw.group || "").toLowerCase();
  if(!GROUP_META[group]) return null;
  const label = String(raw.label || "").trim();
  const content = String(raw.content || "").trim();
  if(!label || !content) return null;
  return ensureBlockMetadata({
    id: String(raw.id || `custom_${Date.now().toString(36)}`),
    group,
    label,
    desc: String(raw.desc || "").trim(),
    content,
    type: normalizeBlockType(raw.type, group),
    tags: Array.isArray(raw.tags) ? raw.tags : [],
    accent: typeof raw.accent === "string" ? raw.accent : "auto",
    custom: true,
    createdAt: Number(raw.createdAt) || Date.now(),
    updatedAt: Number(raw.updatedAt) || Date.now()
  });
}

function loadCustomBlocks(){
  try{
    const parsed = JSON.parse(localStorage.getItem(CUSTOM_BLOCKS_KEY) || "[]");
    if(!Array.isArray(parsed)) return [];
    return parsed.map(normalizeCustomBlock).filter(Boolean);
  }catch(_){
    return [];
  }
}

function saveCustomBlocks(){
  try{
    localStorage.setItem(CUSTOM_BLOCKS_KEY, JSON.stringify(customBlocks));
  }catch(_){}
}

function setPracticeSession(lessonId){
  activePracticeLessonId = lessonId || null;
  try{
    if(activePracticeLessonId){
      localStorage.setItem(PRACTICE_SESSION_KEY, JSON.stringify({ lessonId: activePracticeLessonId, at: Date.now() }));
    }else{
      localStorage.removeItem(PRACTICE_SESSION_KEY);
    }
  }catch(_){}
}

function loadPracticeSession(){
  try{
    const parsed = JSON.parse(localStorage.getItem(PRACTICE_SESSION_KEY) || "{}");
    if(typeof parsed.lessonId === "string"){
      activePracticeLessonId = parsed.lessonId;
      return;
    }
  }catch(_){}
  activePracticeLessonId = null;
}

function getLessonAssignmentId(lessonId){
  return `${lessonId}__practice_1`;
}

function normalizeAssignmentContext(raw){
  if(!raw || typeof raw !== "object") return null;
  if(typeof raw.lessonId !== "string" || !lessonById(raw.lessonId)) return null;
  const lesson = lessonById(raw.lessonId);
  const assignmentId = typeof raw.assignmentId === "string" && raw.assignmentId.trim()
    ? raw.assignmentId.trim()
    : getLessonAssignmentId(raw.lessonId);
  const lessonRubric = getLessonRubric(lesson);
  const rubric = normalizeRubricRequirements(raw.rubric && typeof raw.rubric === "object" ? raw.rubric : lessonRubric, lesson.id);
  return {
    lessonId: raw.lessonId,
    lessonTitle: typeof raw.lessonTitle === "string" && raw.lessonTitle.trim() ? raw.lessonTitle : lesson.title,
    assignmentId,
    rubric,
    openedAt: Number(raw.openedAt) || Date.now()
  };
}

function saveActiveAssignmentContext(ctx){
  activeAssignmentContext = normalizeAssignmentContext(ctx);
  activePracticeLessonId = activeAssignmentContext?.lessonId || null;
  try{
    if(activeAssignmentContext){
      localStorage.setItem(ACTIVE_ASSIGNMENT_KEY, JSON.stringify(activeAssignmentContext));
    }else{
      localStorage.removeItem(ACTIVE_ASSIGNMENT_KEY);
    }
  }catch(_){}
  updateAssignmentBanner();
  updateSubmitButtonState();
}

function loadActiveAssignmentContext(){
  try{
    const parsed = JSON.parse(localStorage.getItem(ACTIVE_ASSIGNMENT_KEY) || "null");
    activeAssignmentContext = normalizeAssignmentContext(parsed);
  }catch(_){
    activeAssignmentContext = null;
  }
  if(activeAssignmentContext?.lessonId){
    activePracticeLessonId = activeAssignmentContext.lessonId;
  }
  updateAssignmentBanner();
  updateSubmitButtonState();
}

function loadPracticeProgress(){
  try{
    const parsed = JSON.parse(localStorage.getItem(PRACTICE_PROGRESS_KEY) || "{}");
    if(parsed && typeof parsed === "object"){
      practiceProgress = parsed;
      return;
    }
  }catch(_){}
  practiceProgress = {};
}

function savePracticeProgress(){
  try{
    localStorage.setItem(PRACTICE_PROGRESS_KEY, JSON.stringify(practiceProgress));
  }catch(_){}
}

function getPracticeEntry(lessonId, assignmentId = getLessonAssignmentId(lessonId)){
  if(!lessonId) return null;
  const lessonNode = practiceProgress?.[lessonId];
  if(!lessonNode || typeof lessonNode !== "object") return null;
  const entry = lessonNode?.[assignmentId];
  return entry && typeof entry === "object" ? entry : null;
}

function normalizeLegacyPracticeText(text){
  const raw = String(text || "");
  if(!raw) return "";
  if(uiLang === "vi"){
    return raw.replace(/rubric/gi, "tiêu chí chấm điểm");
  }
  return raw.replace(/rubric/gi, "scoring criteria");
}

function updateSubmitButtonState(){
  if(!D.btnSubmit) return;
  const lesson = activeAssignmentContext?.lessonId ? lessonById(activeAssignmentContext.lessonId) : null;
  const isReady = Boolean(lesson && activeAssignmentContext?.assignmentId);
  const tooltip = isReady
    ? formatText("btn_submit_ready", { lesson: lesson.title })
    : t("btn_submit_hint");
  D.btnSubmit.disabled = !isReady || D.btnSubmit.classList.contains("is-loading");
  D.btnSubmit.title = tooltip;
  D.btnSubmit.setAttribute("aria-label", tooltip);
}

function updateModeDependentUI(){
  const activeModeBtn = D.modeBtns.find(btn => btn.classList.contains("active"));
  if(activeModeBtn?.dataset?.mode){
    mode = activeModeBtn.dataset.mode;
  }
  const isStudio = mode === "studio";
  document.body.dataset.builderMode = mode;
  if(D.btnAISettings){
    D.btnAISettings.hidden = !isStudio;
    D.btnAISettings.style.display = isStudio ? "inline-flex" : "none";
  }
  if(D.aiEngineAutoChip){
    D.aiEngineAutoChip.textContent = t("ai_engine_auto");
    D.aiEngineAutoChip.hidden = isStudio;
    D.aiEngineAutoChip.style.display = isStudio ? "none" : "inline-flex";
  }
  if(!isStudio && D.aiSettingsModal && !D.aiSettingsModal.hidden){
    closeAISettingsModal(false);
  }
}

function getAssignmentChecklist(lesson){
  if(!lesson) return [];
  const rubric = getLessonRubric(lesson);
  const needVerify = rubric.requiredTypes.includes("VERIFY") || rubric.requiredTagsAny.includes("verify_information");
  const list = [
    uiLang === "vi"
      ? "Cấu trúc cốt lõi: Vai trò + Nhiệm vụ + Bối cảnh."
      : "Core structure: Role + Task + Context.",
    uiLang === "vi"
      ? "Thêm Ràng buộc để kiểm soát phạm vi/độ dài."
      : "Add Rules to control scope/length.",
    uiLang === "vi"
      ? `Điểm Prompt tối thiểu ${rubric.minScore}/100.`
      : `Prompt score at least ${rubric.minScore}/100.`
  ];
  if(needVerify){
    list.push(uiLang === "vi" ? "Có dữ liệu/số liệu thì thêm Kiểm chứng." : "If prompt includes data/facts, add Verification.");
  }
  if(rubric.noFailSafety){
    list.push(uiLang === "vi" ? "Không có FAIL trong Kiểm tra an toàn." : "No FAIL in Safety Check.");
  }
  return list;
}

function shortTextByWords(text, maxWords){
  const words = String(text || "").trim().split(/\s+/).filter(Boolean);
  if(words.length <= maxWords) return words.join(" ");
  return `${words.slice(0, maxWords).join(" ")}…`;
}

function updateAssignmentBanner(){
  if(!D.assignmentBanner) return;
  const ctx = activeAssignmentContext;
  const lesson = ctx?.lessonId ? lessonById(ctx.lessonId) : null;
  if(!ctx || !lesson){
    D.assignmentBanner.hidden = true;
    return;
  }

  const assignmentId = ctx.assignmentId || getLessonAssignmentId(lesson.id);
  const entry = getPracticeEntry(lesson.id, assignmentId);
  const latest = entry?.lastAttempt;
  const scoreValue = Math.round(Number(latest?.score || 0));
  const taskTextRaw = String(lesson.assignmentTemplate.customInputSeed || t("assignment_default_task"));
  const statusText = latest
    ? formatText("assignment_status_compact_done", { score: scoreValue })
    : t("assignment_status_compact_pending");
  const statusTime = latest
    ? formatText("assignment_status_time", { time: new Date(latest.submittedAt || Date.now()).toLocaleString() })
    : "";

  D.assignmentBanner.hidden = false;
  D.assignmentBanner.classList.toggle("is-collapsed", assignmentBannerCollapsed);
  if(D.assignmentKicker) D.assignmentKicker.textContent = t("assignment_banner_title");
  if(D.assignmentTitle) D.assignmentTitle.textContent = lesson.title;
  if(D.assignmentDomain) D.assignmentDomain.textContent = getDomainLabel(lesson.domain) || t("assignment_domain_fallback");
  if(D.assignmentSnippet) D.assignmentSnippet.textContent = shortTextByWords(taskTextRaw, 22);
  if(D.assignmentStatus) D.assignmentStatus.textContent = statusText;
  if(D.assignmentStatus){
    D.assignmentStatus.classList.toggle("is-pass", Boolean(latest?.passed));
    D.assignmentStatus.classList.toggle("is-pending", !latest);
    D.assignmentStatus.classList.toggle("is-fail", Boolean(latest && !latest.passed));
  }
  if(D.assignmentTime) D.assignmentTime.textContent = statusTime;
  if(D.assignmentChecklist){
    // Always keep the original success checklist unchanged after submit.
    const checklist = [...getAssignmentChecklist(lesson)];
    D.assignmentChecklist.innerHTML = checklist
      .map(item => `<li><span class="assignment-check-icon">✓</span><span>${item}</span></li>`)
      .join("");
  }
  if(D.assignmentChecklistWrap) D.assignmentChecklistWrap.hidden = assignmentBannerCollapsed;
  if(D.assignmentMeta){
    if(entry && typeof entry === "object"){
      if(D.assignmentMetaBest) D.assignmentMetaBest.textContent = `${Math.round(Number(entry.bestScore || 0))}/100`;
      if(D.assignmentMetaAttempts) D.assignmentMetaAttempts.textContent = `${Number(entry.attemptsCount || 0)}`;
      D.assignmentMeta.hidden = false;
    }else{
      D.assignmentMeta.hidden = true;
      if(D.assignmentMetaBest) D.assignmentMetaBest.textContent = "0/100";
      if(D.assignmentMetaAttempts) D.assignmentMetaAttempts.textContent = "0";
    }
  }

  if(D.assignmentBody){
    D.assignmentBody.hidden = assignmentBannerCollapsed;
  }
  if(D.assignmentHideBtn){
    D.assignmentHideBtn.textContent = assignmentBannerCollapsed ? t("assignment_show") : t("assignment_hide");
  }
}

function triggerProgressEnterAnimation(){
  if(!D.routeProgress) return;
  D.routeProgress.classList.remove("is-animated");
  if(prefersReducedMotion){
    D.routeProgress.querySelectorAll("[data-enter]").forEach(el=>{
      el.style.opacity = "1";
      el.style.transform = "none";
      el.style.animation = "none";
    });
    return;
  }
  void D.routeProgress.offsetWidth;
  D.routeProgress.classList.add("is-animated");
}

function setRoute(route){
  activeRoute = route === "builder" || route === "progress" || route === "literacy" ? route : "literacy";
  D.routeBtns.forEach(btn => btn.classList.toggle("active", btn.dataset.route === activeRoute));
  if(D.routeBuilder) D.routeBuilder.classList.toggle("active", activeRoute === "builder");
  if(D.routeLiteracy) D.routeLiteracy.classList.toggle("active", activeRoute === "literacy");
  if(D.routeProgress) D.routeProgress.classList.toggle("active", activeRoute === "progress");

  if(D.hdActions) D.hdActions.style.display = activeRoute === "builder" ? "flex" : "none";
  if(D.modeSwitch) D.modeSwitch.style.display = activeRoute === "builder" ? "inline-flex" : "none";

  if(activeRoute === "literacy"){
    renderLiteracy();
  }else if(activeRoute === "progress"){
    progressShouldAnimateCharts = true;
    renderProgressDashboard();
    triggerProgressEnterAnimation();
  }else{
    consumePrefillFromStorage();
    updateAssignmentBanner();
  }
  if(activeRoute !== "progress"){
    hideChartTooltip();
    closeDoneModal(false);
  }
  updateSubmitButtonState();
}

function openLessonInLiteracy(lessonId){
  const lesson = lessonById(lessonId);
  if(!lesson) return;
  litDomainFilter = "all";
  litSelectedLessonId = lesson.id;
  litProgress.lastOpenLesson = lesson.id;
  saveLiteracyProgress();
  setRoute("literacy");
  renderLitLessonList();
  renderLitDetail();
}

function setPrefillPayload(payload){
  try{
    localStorage.setItem(PREFILL_KEY, JSON.stringify(payload));
  }catch(_){}
}

function consumePrefillFromStorage(){
  try{
    const raw = localStorage.getItem(PREFILL_KEY);
    if(!raw) return false;
    const payload = JSON.parse(raw);
    localStorage.removeItem(PREFILL_KEY);
    const ok = applyStateToUI(payload);
    if(ok){
      if(typeof payload?.sourceLessonId === "string"){
        setPracticeSession(payload.sourceLessonId);
      }
      if(payload?.assignmentContext){
        saveActiveAssignmentContext(payload.assignmentContext);
      }else{
        updateSubmitButtonState();
      }
      const hint = (typeof payload?.successHint === "string" && payload.successHint.trim())
        ? payload.successHint.trim()
        : t("summary_prefill_default");
      setRun("idle");
      D.output.textContent = hint;
      draft(false);
    }
    return ok;
  }catch(_){
    try{ localStorage.removeItem(PREFILL_KEY); }catch(e){}
    return false;
  }
}

/* ── SCORING ───────────────────────────────────────────────────── */
function score(blocks, custom){
  if ((!blocks || blocks.length === 0) && !(custom || "").trim()) {
    return {
      total: 0,
      band: "low",
      bandLabel: "Thấp",
      criteria: {
        clarity: { score: 0, max: 25, reasons: ["Thêm block Nhiệm vụ để bắt đầu."] },
        complete: { score: 0, max: 25, reasons: ["Thêm Vai trò + Nhiệm vụ + Bối cảnh để prompt đủ ý."] },
        structure: { score: 0, max: 25, reasons: ["Canvas đang trống."] },
        agefit: { score: 0, max: 25, reasons: ["Chưa có nội dung để đánh giá."] }
      },
      summary: "Thêm block hoặc nội dung tùy chỉnh để bắt đầu chấm điểm.",
      sugg: []
    };
  }

  const text  = blocks.map(b=>`${b.label} ${b.content}`).join(" ") + " " + (custom||"");
  const n     = norm(text);
  const groups= new Set(blocks.map(b=>b.group));
  const hasG  = g => groups.has(g);

  const c = {
    clarity:   {score:0,max:25,reasons:[]},
    complete:  {score:0,max:25,reasons:[]},
    structure: {score:0,max:25,reasons:[]},
    agefit:    {score:0,max:25,reasons:[]},
  };

  // clarity
  if(hasG("task")){c.clarity.score+=10;c.clarity.reasons.push("Có block Nhiệm vụ → mục tiêu rõ.")}
  else c.clarity.reasons.push("Thiếu Nhiệm vụ → prompt dễ mơ hồ.");
  if(hasG("style")||hasG("constraints")){c.clarity.score+=6;c.clarity.reasons.push("Có style/ràng buộc → câu trả lời cụ thể hơn.")}
  if((custom||"").trim().length>20)c.clarity.score+=5;
  else c.clarity.reasons.push("Nội dung tùy chỉnh còn ngắn.");
  if(blocks.length>1)c.clarity.score+=4; else{c.clarity.score-=2;c.clarity.reasons.push("Quá ít block.")}
  if(n.length<60)c.clarity.score-=3;
  c.clarity.score=clamp(c.clarity.score,0,25);

  // completeness
  const core=[hasG("role"),hasG("task"),hasG("context")].filter(Boolean).length;
  if(core===3){c.complete.score+=12;c.complete.reasons.push("Đủ Vai trò + Nhiệm vụ + Bối cảnh ✓")}
  else if(core===2){c.complete.score+=8;c.complete.reasons.push("Có 2/3 nhóm cốt lõi.")}
  else{c.complete.score+=3;c.complete.reasons.push("Thiếu nhiều nhóm cốt lõi.")}
  if(hasG("constraints")||hasG("verification"))c.complete.score+=4;
  if(hasG("example")||hasG("format"))c.complete.score+=4;
  if(!hasG("task"))c.complete.score-=4;
  if(!hasG("context"))c.complete.score-=3;
  c.complete.score=clamp(c.complete.score,0,25);

  // structure
  const om  = new Map(GROUP_ORDER.map((g,i)=>[g,i]));
  const idx = blocks.map(b=>om.get(b.group)??99);
  let gp=0,tp=0;
  for(let i=0;i<idx.length;i++) for(let j=i+1;j<idx.length;j++){tp++;if(idx[i]<=idx[j])gp++;}
  c.structure.score += Math.round((tp?gp/tp:1)*12);
  const ni  = blocks.map(b=>norm(`${b.group}:${b.content}`));
  const dup = ni.length - new Set(ni).size;
  if(dup===0){c.structure.score+=6;c.structure.reasons.push("Không có block trùng lặp.")}
  else{c.structure.score-=Math.min(6,dup*2);c.structure.reasons.push("Có block trùng ý.")}
  if(blocks.length>=3)c.structure.score+=5;
  else c.structure.reasons.push("Nên có ≥3 block.");
  if(hasG("format"))c.structure.score+=2;
  c.structure.score=clamp(c.structure.score,0,25);

  // age fit
  c.agefit.score+=8;
  if(hasKW(n,KW.studentCues)){c.agefit.score+=7;c.agefit.reasons.push("Ngôn ngữ hướng tốt tới học sinh.")}
  else c.agefit.reasons.push("Nên thêm phong cách thân thiện học sinh.");
  if(hasKW(n,KW.ageRisk)){c.agefit.score-=12;c.agefit.reasons.push("Nội dung không phù hợp lứa tuổi.")}
  c.agefit.score=clamp(c.agefit.score,0,25);

  const total = clamp(c.clarity.score+c.complete.score+c.structure.score+c.agefit.score,0,100);
  const band  = total<=39?"low":total<=69?"med":"high";
  const bandLabel = {low:"Thấp",med:"Ổn",high:"Tốt"}[band];
  const summary   = band==="high"?"Prompt rất chắc: rõ, đủ, phù hợp học sinh.":band==="med"?"Ổn, có thể thêm vài block để chính xác hơn.":"Cần hoàn thiện các block cốt lõi trước.";
  const sugg = uniq([
    !hasG("role")?"Thêm block Vai trò để AI giữ đúng giọng điệu.":"",
    !hasG("task")?"Thêm block Nhiệm vụ để AI hiểu đúng việc cần làm.":"",
    !hasG("context")?"Thêm block Bối cảnh để câu trả lời sát trình độ.":"",
    !hasG("constraints")?"Thêm Ràng buộc để kiểm soát độ dài & phạm vi.":"",
  ].filter(Boolean));
  return{total,band,bandLabel,criteria:c,summary,sugg};
}

/* ── SAFETY ────────────────────────────────────────────────────── */
function safety(blocks, custom){
  const text  = blocks.map(b=>`${b.label} ${b.content}`).join(" ") + " " + (custom||"");
  const n     = norm(text);
  const groups= new Set(blocks.map(b=>b.group));
  const hasG  = g => groups.has(g);
  const previewLen = composePreview(blocks,custom).length;

  const checks=[], sugg=[];

  // core components
  const core=[hasG("role"),hasG("task"),hasG("constraints")].filter(Boolean).length;
  const coreStatus=core===3?"pass":core===2?"warn":"fail";
  checks.push({label:"Vai trò • Nhiệm vụ • Ràng buộc",status:coreStatus,
    detail:core===3?"Đủ bộ cốt lõi ✓":core===2?"Thiếu 1 thành phần cốt lõi.":"Thiếu nhiều thành phần — prompt chưa hợp lệ."});
  if(coreStatus!=="pass")sugg.push("Bổ sung đủ Vai trò, Nhiệm vụ và Ràng buộc.");

  // length
  let lenSt="pass",lenDt="Độ dài hợp lý.";
  if(previewLen<60){lenSt="fail";lenDt="Prompt quá ngắn, AI khó hiểu đúng ý.";sugg.push("Thêm chi tiết: bối cảnh, mục tiêu, ví dụ.")}
  else if(previewLen<120){lenSt="warn";lenDt="Prompt hơi ngắn.";sugg.push("Thêm 1–2 block để đầy đủ hơn.")}
  else if(previewLen>2500){lenSt="fail";lenDt="Prompt quá dài, dễ loãng.";sugg.push("Rút gọn, bỏ nội dung trùng ý.")}
  checks.push({label:"Độ dài prompt",status:lenSt,detail:lenDt});

  // unsafe content
  const dangHits=findKW(n,KW.dangerousFail);
  const perHits =findKW(n,KW.personalFail);
  const jbHits  =findKW(n,KW.jailbreak);
  let riskSt="pass",riskDt="Không phát hiện nội dung nguy hiểm.";
  if(dangHits.length||perHits.length){
    riskSt="fail";
    riskDt=dangHits.length?`Nội dung độc hại: ${dangHits[0]}`:`Thông tin nhạy cảm: ${perHits[0]}`;
    sugg.push("⚠ Xóa nội dung nguy hiểm/nhạy cảm.");
  }else if(jbHits.length){riskSt="warn";riskDt="Có dấu hiệu bypass an toàn.";sugg.push("Tránh câu lệnh bỏ qua quy tắc.")}
  else if(hasKW(n,KW.personalWarn)){riskSt="warn";riskDt="Có dấu hiệu hỏi thông tin cá nhân.";sugg.push("Thêm ràng buộc: không thu thập dữ liệu cá nhân.")}
  checks.push({label:"Rủi ro nội dung",status:riskSt,detail:riskDt});

  // age
  const ageRisk=findKW(n,KW.ageRisk);
  let ageSt="pass",ageDt="Nội dung phù hợp lứa tuổi.";
  if(ageRisk.length){ageSt="fail";ageDt=`Nội dung không phù hợp: ${ageRisk[0]}`;sugg.push("Thay bằng ví dụ học tập.")}
  else if(!hasKW(n,KW.studentCues)){ageSt="warn";ageDt="Chưa rõ hướng tới học sinh.";sugg.push("Thêm phong cách thân thiện học sinh.")}
  checks.push({label:"Phù hợp lứa tuổi",status:ageSt,detail:ageDt});

  // verification
  const needsVer=hasKW(n,KW.verificationNeed)||/\b\d{2,}\b/.test(n);
  const hasVer  =hasG("verification")||hasKW(n,KW.verificationCues);
  let verSt="pass",verDt="Hỗ trợ kiểm chứng ổn.";
  if(needsVer&&!hasVer){verSt="warn";verDt="Có dữ kiện nhưng chưa kiểm chứng.";sugg.push("Thêm block Kiểm chứng.")}
  checks.push({label:"Kiểm chứng thông tin",status:verSt,detail:verDt});

  let ss=100;
  checks.forEach(c=>{if(c.status==="fail")ss-=18;else if(c.status==="warn")ss-=8});
  if(hasG("verification"))ss+=3;
  ss=clamp(ss,0,100);
  const rl= riskSt==="fail"?"danger":ss>=80?"safe":ss>=50?"warn":"danger";
  if(rl==="danger")sugg.push("⚠ Không an toàn — chỉnh sửa trước khi chạy.");
  return{score:ss,riskLevel:rl,checks,sugg:uniq(sugg)};
}

/* ── RENDER SCORE ──────────────────────────────────────────────── */
function renderScore(r){
  D.totalScore.textContent = r.total;
  D.totalScore.className = r.band;
  D.scoreBand.textContent  = r.band==="low" ? t("score_band_low") : r.band==="med" ? t("score_band_med") : t("score_band_high");
  D.scoreBand.className    = `score-band ${r.band}`;
  D.meterFill.style.width  = r.total+"%";
  D.scoreSummary.textContent = r.summary;

  const labels={
    clarity:t("score_label_clarity"),
    complete:t("score_label_complete"),
    structure:t("score_label_structure"),
    agefit:t("score_label_agefit")
  };
  D.critList.innerHTML="";
  Object.entries(r.criteria).forEach(([k,it])=>{
    const pct=Math.round(it.score/it.max*100);
    const el=document.createElement("div");el.className="crit";
    el.innerHTML=`<div class="crit-row"><span>${labels[k]}</span><strong>${it.score}/${it.max}</strong></div>
      <div class="crit-meter"><span class="crit-fill" style="width:${pct}%"></span></div>
      <p class="crit-note">${it.reasons[0]||"Ổn."}</p>`;
    D.critList.appendChild(el);
  });

  D.scoreSugg.innerHTML="";
  r.sugg.forEach(s=>{const li=document.createElement("li");li.textContent=s;D.scoreSugg.appendChild(li)});
}

/* ── RENDER SAFETY ─────────────────────────────────────────────── */
function renderSafety(r){
  const bm={
    safe:{label: uiLang==="vi" ? "✓ An toàn" : "✓ Safe", cls:"safe"},
    warn:{label: uiLang==="vi" ? "⚠ Cần xem lại" : "⚠ Needs review", cls:"warn"},
    danger:{label: uiLang==="vi" ? "✕ Không an toàn" : "✕ Unsafe", cls:"danger"}
  };
  const bMeta=bm[r.riskLevel]||bm.warn;
  D.safetyBadge.textContent=bMeta.label;D.safetyBadge.className=`safety-badge ${bMeta.cls}`;
  D.safetyScore.textContent=`${r.score}/100`;

  const fail=r.checks.find(c=>c.status==="fail"),warn=r.checks.find(c=>c.status==="warn");
  if(D.safetySummary)D.safetySummary.textContent=fail?fail.detail:warn?warn.detail:"Prompt đang ổn.";

  D.safetyItems.innerHTML="";
  r.checks.forEach(c=>{
    const li=document.createElement("div");li.className=`safety-item ${c.status}`;
    li.innerHTML=`<div class="si-top"><strong>${c.label}</strong><span class="status-pill ${c.status}">${c.status==="pass"?t("status_pass"):c.status==="warn"?t("status_warn"):t("status_fail")}</span></div><p class="si-detail">${c.detail}</p>`;
    D.safetyItems.appendChild(li);
  });

  D.safetyActions.innerHTML="";
  r.sugg.forEach(s=>{const li=document.createElement("li");li.textContent=s;D.safetyActions.appendChild(li)});
}

/* ── EVALUATE (called on every change) ────────────────────────── */
function evaluate(){
  const blocks  = getBlocks();
  const custom  = D.customInput.value;
  const preview = composePreview(blocks,custom);

  D.preview.textContent    = preview||t("preview_empty");
  D.blockCount.textContent = `${blocks.length} ${t("block_count_unit")}`;

  renderScore(score(blocks,custom));
  renderSafety(safety(blocks,custom));
  updateAssignmentBanner();
}

/* ── AI LITERACY ────────────────────────────────────────────────── */
function getDomainList(){
  return ["all", ...uniq(LESSONS.map(l => l.domain))];
}

function getDifficultyList(){
  return ["all", "basic", "medium", "advanced"];
}

function getDifficultyLabel(level){
  const map = {
    all: t("lit_difficulty_all"),
    basic: t("lit_difficulty_basic"),
    medium: t("lit_difficulty_medium"),
    advanced: t("lit_difficulty_advanced")
  };
  return map[level] || map.basic;
}

function getLessonStatus(lesson){
  const isDone = litProgress.completedLessons.includes(lesson.id);
  if(isDone) return "done";
  const hasQuiz = Number.isFinite(litProgress.quizScores[lesson.id]);
  const hasPractice = Number(getPracticeEntry(lesson.id)?.attemptsCount || 0) > 0;
  const hasSelection = litProgress.lastOpenLesson === lesson.id;
  return hasQuiz || hasPractice || hasSelection ? "progress" : "idle";
}

function getFilteredLessons(){
  return LESSONS.filter((lesson)=>{
    const domainOk = litDomainFilter === "all" || lesson.domain === litDomainFilter;
    const difficultyOk = litDifficultyFilter === "all" || lesson.difficulty === litDifficultyFilter;
    const searchOk = !litSearchQuery || `${lesson.title} ${getDomainLabel(lesson.domain)}`.toLowerCase().includes(litSearchQuery);
    return domainOk && difficultyOk && searchOk;
  });
}

function renderLitDashboard(){
  const doneCount = litProgress.completedLessons.length;
  const total = LESSONS.length;
  const percent = total ? Math.round((doneCount / total) * 100) : 0;
  const quizScores = Object.values(litProgress.quizScores).filter(v => Number.isFinite(v));
  const avgQuiz = quizScores.length ? Math.round(quizScores.reduce((a,b)=>a+b,0) / quizScores.length) : 0;
  const attempts = collectPracticeAttempts(200);
  const practiceAvg = attempts.length ? Math.round(attempts.reduce((sum, it) => sum + Number(it.score || 0), 0) / attempts.length) : 0;
  const bestScore = attempts.length ? Math.max(...attempts.map(it => Number(it.score || 0))) : 0;
  const submitsCount = attempts.length;
  const lastUpdatedAt = Math.max(
    Number(litProgress.updatedAt || 0),
    ...(attempts.length ? [Number(attempts[attempts.length - 1].submittedAt || 0)] : [0])
  );
  const now = Date.now();
  const weekAgo = now - 7 * 24 * 60 * 60 * 1000;
  const weeklySubmitCount = attempts.filter(item => Number(item.submittedAt || 0) >= weekAgo).length;

  if(D.litCompletedCount) D.litCompletedCount.textContent = `${doneCount}/${total} ${t("lit_lesson")}`;
  if(D.litProgressUpdated){
    D.litProgressUpdated.textContent = lastUpdatedAt
      ? formatText("lit_progress_updated_at", { time: new Date(lastUpdatedAt).toLocaleString() })
      : t("lit_progress_updated_none");
  }
  if(D.litUpdatedChip){
    D.litUpdatedChip.textContent = lastUpdatedAt
      ? formatText("lit_progress_chip_updated_at", { time: new Date(lastUpdatedAt).toLocaleString() })
      : t("lit_progress_chip_updated_none");
  }
  if(D.litProgressRailFill){
    D.litProgressRailFill.style.width = `${clamp(percent, 0, 100)}%`;
  }
  if(D.litProgressRailLabel){
    D.litProgressRailLabel.textContent = `${percent}%`;
  }
  if(D.litKpiPercent) D.litKpiPercent.textContent = `${percent}%`;
  if(D.litKpiPercentTrend) D.litKpiPercentTrend.textContent = formatText("kpi_trend_completion", { done: doneCount, total });
  if(D.litKpiAvg) D.litKpiAvg.textContent = `${avgQuiz}/100`;
  if(D.litKpiAvgTrend) D.litKpiAvgTrend.textContent = quizScores.length ? formatText("kpi_trend_quiz", { count: quizScores.length }) : t("kpi_trend_none");
  if(D.progressPracticeAvg) D.progressPracticeAvg.textContent = `${practiceAvg}/100`;
  if(D.progressPracticeAvgTrend) D.progressPracticeAvgTrend.textContent = attempts.length ? t("kpi_trend_practice") : t("kpi_trend_none");
  if(D.progressBestScore) D.progressBestScore.textContent = `${bestScore}`;
  if(D.progressBestScoreTrend) D.progressBestScoreTrend.textContent = attempts.length ? t("kpi_trend_best") : t("kpi_trend_none");
  if(D.progressSubmitCount) D.progressSubmitCount.textContent = `${submitsCount}`;
  if(D.progressSubmitCountTrend){
    D.progressSubmitCountTrend.textContent = submitsCount
      ? (weeklySubmitCount
        ? (uiLang === "vi" ? `+${weeklySubmitCount} / 7 ngày` : `+${weeklySubmitCount} in 7 days`)
        : formatText("kpi_trend_submit", { count: submitsCount }))
      : t("kpi_trend_none");
  }

  const doneLessons = litProgress.completedLessons
    .map(id => lessonById(id))
    .filter(Boolean);
  if(D.litDoneList){
    D.litDoneList.innerHTML = "";
    if(!doneLessons.length){
      D.litDoneList.innerHTML = `<li>${t("lit_done_empty")}</li>`;
    }else{
      doneLessons.slice(0, 6).forEach((lesson, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
          <button class="lit-done-step" type="button" data-open-lesson="${lesson.id}" aria-label="${index + 1}. ${lesson.title}">
            <span class="step-index">${index + 1}</span>
            <span class="step-check">✓</span>
            <span class="step-title">${lesson.title}</span>
          </button>
        `;
        D.litDoneList.appendChild(li);
      });
    }
  }

  if(D.litDoneExpand){
    D.litDoneExpand.hidden = doneLessons.length <= 6;
    D.litDoneExpand.textContent = `${t("progress_done_view_all")} (${doneLessons.length})`;
  }
  if(D.litDoneModalList){
    D.litDoneModalList.innerHTML = "";
    if(!doneLessons.length){
      D.litDoneModalList.innerHTML = `<li>${t("lit_done_empty")}</li>`;
    }else{
      doneLessons.forEach((lesson, index)=>{
        const li = document.createElement("li");
        li.className = "done-modal-item";
        li.innerHTML = `
          <button class="done-modal-open" type="button" data-open-lesson="${lesson.id}">
            ${index + 1}. ${lesson.title}
          </button>
        `;
        D.litDoneModalList.appendChild(li);
      });
    }
  }

  renderProgressInsights(attempts, { doneCount, total, practiceAvg });
}

function renderProgressInsights(attempts, meta = {}){
  if(!D.progressInsightsList) return;
  const doneCount = Number(meta.doneCount || 0);
  const total = Number(meta.total || LESSONS.length || 0);
  const practiceAvg = Number(meta.practiceAvg || 0);
  const totalWarn = attempts.reduce((sum, item)=>sum + Number(item.safetySummary?.warnCount || 0), 0);

  const domainMap = new Map();
  attempts.forEach((item)=>{
    const lesson = lessonById(item.lessonId);
    if(!lesson) return;
    const key = lesson.domain;
    const prev = domainMap.get(key) || { sum:0, count:0 };
    prev.sum += Number(item.score || 0);
    prev.count += 1;
    domainMap.set(key, prev);
  });
  const bestDomainEntry = [...domainMap.entries()]
    .map(([key, val])=>({ key, avg: val.count ? (val.sum / val.count) : 0 }))
    .sort((a,b)=>b.avg - a.avg)[0];

  const lines = [];
  if(!attempts.length){
    lines.push(t("progress_insight_no_data"));
  }else{
    if(practiceAvg < 70) lines.push(t("progress_insight_practice_low"));
    if(totalWarn >= Math.max(2, Math.ceil(attempts.length * 0.6))) lines.push(t("progress_insight_warn_high"));
    if(total > 0 && (doneCount / total) < 0.5) lines.push(t("progress_insight_completion_low"));
    if(bestDomainEntry){
      lines.push(formatText("progress_insight_best_domain", { domain: getDomainLabel(bestDomainEntry.key) }));
    }
    if(lines.length < 3){
      lines.push(t("progress_insight_keep"));
    }
  }

  D.progressInsightsList.innerHTML = lines.slice(0, 3).map(line => `<li>${line}</li>`).join("");
}

function collectPracticeAttempts(limit = 120){
  const rows = [];
  if(!practiceProgress || typeof practiceProgress !== "object") return rows;
  Object.entries(practiceProgress).forEach(([lessonId, assignmentMap]) => {
    if(!assignmentMap || typeof assignmentMap !== "object") return;
    Object.entries(assignmentMap).forEach(([assignmentId, entry]) => {
      if(!entry || typeof entry !== "object") return;
      const history = Array.isArray(entry.history) ? entry.history : [];
      if(history.length){
        history.forEach(item => {
          rows.push({
            lessonId: item.lessonId || lessonId,
            assignmentId: item.assignmentId || assignmentId,
            score: Number(item.score || 0),
            passed: Boolean(item.passed),
            submittedAt: Number(item.submittedAt || 0),
            safetySummary: item.safetySummary || { failCount: 0, warnCount: 0, passCount: 0 }
          });
        });
      }else if(entry.lastAttempt){
        rows.push({
          lessonId,
          assignmentId,
          score: Number(entry.lastAttempt.score || 0),
          passed: Boolean(entry.lastAttempt.passed),
          submittedAt: Number(entry.lastAttempt.submittedAt || 0),
          safetySummary: entry.lastAttempt.safetySummary || { failCount: entry.lastAttempt.safetyHasFail ? 1 : 0, warnCount: entry.lastAttempt.safetyRisk === "warn" ? 1 : 0, passCount: entry.lastAttempt.safetyRisk === "safe" ? 1 : 0 }
        });
      }
    });
  });
  if(!rows.length && litProgress.practiceAttempts && typeof litProgress.practiceAttempts === "object"){
    Object.entries(litProgress.practiceAttempts).forEach(([lessonId, legacyAttempts]) => {
      if(!Array.isArray(legacyAttempts)) return;
      legacyAttempts.forEach(item => {
        rows.push({
          lessonId,
          assignmentId: getLessonAssignmentId(lessonId),
          score: Number(item.total || 0),
          passed: Number(item.total || 0) >= 70,
          submittedAt: Number(item.at || 0),
          safetySummary: { failCount: item.blocked ? 1 : 0, warnCount: 0, passCount: item.blocked ? 0 : 1 }
        });
      });
    });
  }
  return rows
    .filter(item => Number.isFinite(item.submittedAt) && item.submittedAt > 0)
    .sort((a,b) => a.submittedAt - b.submittedAt)
    .slice(-limit);
}

function getCanvasContext(canvasEl){
  if(!(canvasEl instanceof HTMLCanvasElement)) return null;
  const ctx = canvasEl.getContext("2d");
  if(!ctx) return null;
  const rect = canvasEl.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  const w = Math.max(220, Math.floor(rect.width || canvasEl.width || 220));
  const h = Math.max(180, Math.floor(rect.height || canvasEl.height || 180));
  canvasEl.width = Math.floor(w * dpr);
  canvasEl.height = Math.floor(h * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  return { ctx, w, h };
}

function easeOutCubic(v){
  return 1 - Math.pow(1 - v, 3);
}

function animateChart(canvasEl, duration, drawFrame){
  if(typeof drawFrame !== "function") return;
  if(!(canvasEl instanceof HTMLCanvasElement) || prefersReducedMotion || !progressShouldAnimateCharts){
    drawFrame(1);
    return;
  }
  const id = canvasEl.id || uid();
  if(chartAnimFrames[id]){
    cancelAnimationFrame(chartAnimFrames[id]);
    chartAnimFrames[id] = null;
  }
  const startedAt = performance.now();
  const total = Math.max(220, duration || 680);
  const tick = (now)=>{
    const raw = clamp((now - startedAt) / total, 0, 1);
    drawFrame(easeOutCubic(raw));
    if(raw < 1){
      chartAnimFrames[id] = requestAnimationFrame(tick);
    }else{
      chartAnimFrames[id] = null;
    }
  };
  chartAnimFrames[id] = requestAnimationFrame(tick);
}

function setLineChartEmptyState(show){
  if(!D.lineChartEmpty) return;
  D.lineChartEmpty.hidden = !show;
}

function setProgressInsight(el, text){
  if(el) el.textContent = text || "-";
}

function setChartLegend(legendEl, items){
  if(!legendEl) return;
  legendEl.innerHTML = items.map(item => `
    <span class="legend-item">
      <i style="--legend-color:${item.color}"></i>
      <span>${item.label}${typeof item.value !== "undefined" ? ` ${item.value}` : ""}</span>
    </span>
  `).join("");
}

function registerChartHover(canvasEl, regions){
  if(!(canvasEl instanceof HTMLCanvasElement)) return;
  chartHoverMap[canvasEl.id] = Array.isArray(regions) ? regions : [];
}

function hideChartTooltip(){
  if(!D.chartTooltip) return;
  D.chartTooltip.hidden = true;
}

function showChartTooltip(lines, clientX, clientY, boundsRect){
  if(!D.chartTooltip || !Array.isArray(lines) || !lines.length) return;
  D.chartTooltip.hidden = false;
  D.chartTooltip.innerHTML = lines.map(line => `<p>${line}</p>`).join("");
  const offset = 14;
  const tipRect = D.chartTooltip.getBoundingClientRect();
  const limit = boundsRect || { left: 8, top: 8, right: window.innerWidth - 8, bottom: window.innerHeight - 8 };
  const maxLeft = Math.max(limit.left + 4, limit.right - tipRect.width - 8);
  const maxTop = Math.max(limit.top + 4, limit.bottom - tipRect.height - 8);
  const left = Math.min(maxLeft, Math.max(limit.left + 6, clientX + offset));
  const top = Math.min(maxTop, Math.max(limit.top + 6, clientY + offset));
  D.chartTooltip.style.left = `${left}px`;
  D.chartTooltip.style.top = `${top}px`;
}

function hitChartRegion(region, x, y){
  if(!region) return false;
  if(region.type === "circle"){
    const dx = x - region.x;
    const dy = y - region.y;
    return (dx * dx + dy * dy) <= (region.r * region.r);
  }
  if(region.type === "rect"){
    return x >= region.x && x <= region.x + region.w && y >= region.y && y <= region.y + region.h;
  }
  return false;
}

function handleChartPointerMove(e){
  const canvasEl = e.currentTarget;
  if(!(canvasEl instanceof HTMLCanvasElement)) return;
  const regions = chartHoverMap[canvasEl.id] || [];
  if(!regions.length){
    hideChartTooltip();
    return;
  }
  const rect = canvasEl.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const cardRect = canvasEl.closest(".chart-card")?.getBoundingClientRect() || null;
  const hit = regions.find(region => hitChartRegion(region, x, y));
  if(hit){
    showChartTooltip(hit.lines || [], e.clientX, e.clientY, cardRect);
  }else{
    hideChartTooltip();
  }
}

function bindChartTooltip(canvasEl){
  if(!(canvasEl instanceof HTMLCanvasElement)) return;
  if(canvasEl.dataset.tooltipBound === "1") return;
  canvasEl.dataset.tooltipBound = "1";
  canvasEl.addEventListener("mousemove", handleChartPointerMove);
  canvasEl.addEventListener("mouseleave", hideChartTooltip);
}

function drawEmptyChart(ctx, w, h, message = t("chart_empty")){
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "rgba(18,28,48,.66)";
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = "rgba(160,183,220,.82)";
  ctx.font = "600 13px 'Be Vietnam Pro', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(message, w / 2, h / 2);
}

function drawDonutChart(){
  const c = getCanvasContext(D.progressDonutCanvas);
  if(!c) return;
  const { ctx, w, h } = c;
  const completed = litProgress.completedLessons.length;
  const total = LESSONS.length;
  if(!total){
    drawEmptyChart(ctx, w, h, t("chart_empty"));
    setChartLegend(D.chartDonutLegend, []);
    setProgressInsight(D.chartDonutInsight, t("chart_empty"));
    registerChartHover(D.progressDonutCanvas, []);
    return;
  }
  const remaining = Math.max(total - completed, 0);
  const percent = completed / total;
  const cx = w / 2;
  const cy = h / 2;
  const radius = Math.min(w, h) * 0.31;
  const lineW = Math.max(16, Math.round(radius * 0.34));
  animateChart(D.progressDonutCanvas, 760, (animProgress)=>{
    ctx.clearRect(0, 0, w, h);
    const back = ctx.createLinearGradient(0, 0, w, h);
    back.addColorStop(0, "rgba(10,18,35,.74)");
    back.addColorStop(1, "rgba(9,20,39,.6)");
    ctx.fillStyle = back;
    ctx.fillRect(0, 0, w, h);
    ctx.beginPath();
    ctx.fillStyle = "rgba(93, 244, 255, .08)";
    ctx.arc(cx, cy, radius + lineW * .9, 0, Math.PI * 2);
    ctx.fill();
    ctx.lineWidth = lineW;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.strokeStyle = "rgba(84,103,138,.35)";
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    const grad = ctx.createLinearGradient(cx - radius, cy - radius, cx + radius, cy + radius);
    grad.addColorStop(0, "#7c3aed");
    grad.addColorStop(1, "#4dd3ff");
    ctx.strokeStyle = grad;
    ctx.arc(cx, cy, radius, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * percent * animProgress);
    ctx.stroke();
    ctx.fillStyle = "#e2ecff";
    ctx.font = "900 33px 'Be Vietnam Pro', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(`${Math.round(percent * 100 * animProgress)}%`, cx, cy + 4);
    ctx.font = "600 11px 'Be Vietnam Pro', sans-serif";
    ctx.fillStyle = "rgba(176,199,233,.9)";
    ctx.fillText(`${t("chart_legend_complete")} ${completed}/${total}`, cx, cy + 24);
  });
  setChartLegend(D.chartDonutLegend, [
    { label: t("chart_legend_complete"), value: completed, color: "#4dd3ff" },
    { label: t("chart_legend_remaining"), value: remaining, color: "rgba(142,160,193,.7)" }
  ]);
  setProgressInsight(D.chartDonutInsight, formatText("chart_donut_insight", { done: completed, total, percent: Math.round(percent * 100) }));
  registerChartHover(D.progressDonutCanvas, []);
}

function drawLineChart(attempts){
  const c = getCanvasContext(D.progressLineCanvas);
  if(!c) return;
  const { ctx, w, h } = c;
  if(!attempts.length){
    drawEmptyChart(ctx, w, h, t("chart_empty"));
    setChartLegend(D.chartLineLegend, []);
    setProgressInsight(D.chartLineInsight, t("chart_empty"));
    setLineChartEmptyState(true);
    registerChartHover(D.progressLineCanvas, []);
    return;
  }
  if(attempts.length < 2){
    drawEmptyChart(ctx, w, h, t("chart_insufficient"));
    setChartLegend(D.chartLineLegend, [
      { label: t("progress_submit_count_label"), value: attempts.length, color: "#7c9cff" }
    ]);
    setProgressInsight(D.chartLineInsight, t("chart_insufficient"));
    setLineChartEmptyState(true);
    registerChartHover(D.progressLineCanvas, []);
    return;
  }
  setLineChartEmptyState(false);
  const p = { l: 34, r: 16, t: 14, b: 30 };
  const cw = w - p.l - p.r;
  const ch = h - p.t - p.b;
  const recent = attempts.slice(-12);
  const bestScore = Math.max(...recent.map(item => Number(item.score || 0)));
  const points = recent.map((item, i, arr) => {
    const x = p.l + (arr.length === 1 ? cw / 2 : (cw * i / (arr.length - 1)));
    const y = p.t + ch - (ch * clamp(Number(item.score || 0), 0, 100) / 100);
    const score = Number(item.score || 0);
    return { x, y, score, submittedAt: item.submittedAt, attempt: i + 1, isBest: score === bestScore };
  });
  const lineGrad = ctx.createLinearGradient(p.l, p.t, p.l + cw, p.t + ch);
  lineGrad.addColorStop(0, "#7c3aed");
  lineGrad.addColorStop(1, "#49d3ff");
  const hoverRegions = points.map(pt => ({
    type: "circle",
    x: pt.x,
    y: pt.y,
    r: 9,
    lines: [
      `${uiLang === "vi" ? "Lần nộp" : "Attempt"} #${pt.attempt}`,
      `${uiLang === "vi" ? "Điểm" : "Score"}: ${Math.round(pt.score)}/100`,
      `${uiLang === "vi" ? "Thời gian" : "Time"}: ${new Date(pt.submittedAt).toLocaleString()}`
    ]
  }));
  animateChart(D.progressLineCanvas, 820, (animProgress)=>{
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "rgba(10,18,35,.5)";
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = "rgba(120,138,176,.25)";
    ctx.lineWidth = 1;
    for(let i=0;i<=4;i++){
      const y = p.t + (ch * i / 4);
      ctx.beginPath(); ctx.moveTo(p.l, y); ctx.lineTo(p.l + cw, y); ctx.stroke();
    }
    ctx.save();
    ctx.beginPath();
    ctx.rect(p.l, p.t, cw * animProgress, ch);
    ctx.clip();
    ctx.beginPath();
    points.forEach((pt, idx) => {
      if(idx === 0){
        ctx.moveTo(pt.x, pt.y);
        return;
      }
      const prev = points[idx - 1];
      const cpx = (prev.x + pt.x) / 2;
      ctx.quadraticCurveTo(prev.x, prev.y, cpx, (prev.y + pt.y) / 2);
      if(idx === points.length - 1){
        ctx.quadraticCurveTo(pt.x, pt.y, pt.x, pt.y);
      }
    });
    ctx.strokeStyle = lineGrad;
    ctx.lineWidth = 2.4;
    ctx.stroke();
    points.forEach(pt => {
      if(pt.x > p.l + cw * animProgress + 2) return;
      ctx.beginPath();
      ctx.fillStyle = "#7df0ff";
      ctx.arc(pt.x, pt.y, 3.1, 0, Math.PI * 2);
      ctx.fill();
      if(pt.isBest){
        ctx.beginPath();
        ctx.strokeStyle = "rgba(251,191,36,.95)";
        ctx.lineWidth = 1.8;
        ctx.arc(pt.x, pt.y, 7.2, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fillStyle = "rgba(251,191,36,.95)";
        ctx.font = "700 9px 'Be Vietnam Pro', sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("BEST", pt.x, pt.y - 11);
      }
    });
    ctx.restore();
    ctx.fillStyle = "rgba(185,206,240,.9)";
    ctx.font = "600 11px 'Be Vietnam Pro', sans-serif";
    ctx.textAlign = "left";
    ctx.fillText("0", 8, p.t + ch);
    ctx.fillText("50", 4, p.t + ch / 2);
    ctx.fillText("100", 1, p.t + 8);
  });
  const avg = Math.round(recent.reduce((sum, it) => sum + Number(it.score || 0), 0) / recent.length);
  const firstScore = Number(recent[0]?.score || 0);
  const lastScore = Number(recent[recent.length - 1]?.score || 0);
  const trend = lastScore > firstScore + 1 ? (uiLang === "vi" ? "tăng" : "up")
    : lastScore < firstScore - 1 ? (uiLang === "vi" ? "giảm" : "down")
    : (uiLang === "vi" ? "ổn định" : "stable");
  setChartLegend(D.chartLineLegend, [
    { label: uiLang === "vi" ? "Trung bình" : "Average", value: `${avg}/100`, color: "#6bd8ff" },
    { label: uiLang === "vi" ? "Mẫu" : "Samples", value: recent.length, color: "#8b5cf6" }
  ]);
  setProgressInsight(D.chartLineInsight, formatText("chart_line_insight", { trend, count: recent.length }));
  registerChartHover(D.progressLineCanvas, hoverRegions);
}

function drawDomainBarChart(attempts){
  const c = getCanvasContext(D.progressDomainCanvas);
  if(!c) return;
  const { ctx, w, h } = c;
  const domains = ["human_centered","ai_ethics","technical_applications","system_design"];
  const domainScores = domains.map(domain => {
    const lessonIds = LESSONS.filter(l => l.domain === domain).map(l => l.id);
    const subset = attempts.filter(at => lessonIds.includes(at.lessonId));
    if(!subset.length) return 0;
    return Math.round(subset.reduce((sum, item) => sum + Number(item.score || 0), 0) / subset.length);
  });
  if(domainScores.every(v => v === 0)){
    drawEmptyChart(ctx, w, h, t("chart_empty"));
    setChartLegend(D.chartDomainLegend, []);
    setProgressInsight(D.chartDomainInsight, t("chart_empty"));
    registerChartHover(D.progressDomainCanvas, []);
    return;
  }
  const p = { l: 28, r: 14, t: 12, b: 42 };
  const cw = w - p.l - p.r;
  const ch = h - p.t - p.b;
  const gap = 16;
  const bw = (cw - gap * (domains.length - 1)) / domains.length;
  const hoverRegions = domains.map((domain, idx) => {
    const x = p.l + idx * (bw + gap);
    const score = clamp(domainScores[idx], 0, 100);
    return {
      type: "rect",
      x,
      y: p.t + ch - (ch * score / 100),
      w: bw,
      h: Math.max(6, ch * score / 100),
      lines: [
        getDomainLabel(domain),
        `${uiLang === "vi" ? "Điểm trung bình" : "Average score"}: ${score}/100`
      ]
    };
  });
  animateChart(D.progressDomainCanvas, 720, (animProgress)=>{
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "rgba(10,18,35,.5)";
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = "rgba(124,147,184,.2)";
    ctx.lineWidth = 1;
    for(let i=0;i<=4;i++){
      const y = p.t + (ch * i / 4);
      ctx.beginPath(); ctx.moveTo(p.l, y); ctx.lineTo(p.l + cw, y); ctx.stroke();
    }
    domains.forEach((domain, idx) => {
      const x = p.l + idx * (bw + gap);
      const score = clamp(domainScores[idx], 0, 100);
      const bh = (ch * score / 100) * animProgress;
      const y = p.t + ch - bh;
      const g = ctx.createLinearGradient(x, y, x, p.t + ch);
      g.addColorStop(0, "rgba(103,232,249,.95)");
      g.addColorStop(1, "rgba(124,58,237,.8)");
      ctx.fillStyle = g;
      ctx.fillRect(x, y, bw, bh);
      ctx.fillStyle = "#dce8ff";
      ctx.font = "700 11px 'Be Vietnam Pro', sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(String(score), x + bw / 2, y - 6);
      ctx.fillStyle = "rgba(173,195,231,.9)";
      ctx.font = "600 10px 'Be Vietnam Pro', sans-serif";
      const label = getDomainShortLabel(domain);
      ctx.fillText(label, x + bw / 2, p.t + ch + 16);
    });
    ctx.fillStyle = "rgba(182,203,235,.85)";
    ctx.font = "600 10px 'Be Vietnam Pro', sans-serif";
    ctx.textAlign = "left";
    ctx.fillText("100", 2, p.t + 8);
    ctx.fillText("50", 8, p.t + ch / 2);
    ctx.fillText("0", 12, p.t + ch);
  });
  const bestIdx = domainScores.indexOf(Math.max(...domainScores));
  setChartLegend(D.chartDomainLegend, [
    {
      label: uiLang === "vi" ? "Domain tốt nhất" : "Best domain",
      value: getDomainShortLabel(domains[bestIdx]),
      color: "#64d7ff"
    }
  ]);
  setProgressInsight(D.chartDomainInsight, formatText("chart_domain_insight", {
    best: getDomainShortLabel(domains[bestIdx]),
    score: domainScores[bestIdx]
  }));
  registerChartHover(D.progressDomainCanvas, hoverRegions);
}

function drawSafetyBarChart(attempts){
  const c = getCanvasContext(D.progressSafetyCanvas);
  if(!c) return;
  const { ctx, w, h } = c;
  const domainKeys = ["human_centered","ai_ethics","technical_applications","system_design"];
  const rows = domainKeys.map(domain => {
    const lessonIds = LESSONS.filter(l => l.domain === domain).map(l => l.id);
    const subset = attempts.filter(at => lessonIds.includes(at.lessonId));
    return subset.reduce((acc, it) => {
      acc.pass += Number(it.safetySummary?.passCount || 0);
      acc.warn += Number(it.safetySummary?.warnCount || 0);
      acc.fail += Number(it.safetySummary?.failCount || 0);
      return acc;
    }, { domain, pass: 0, warn: 0, fail: 0 });
  });
  const hasData = rows.some(r => (r.pass + r.warn + r.fail) > 0);
  if(!hasData){
    drawEmptyChart(ctx, w, h, t("chart_empty"));
    setChartLegend(D.chartSafetyLegend, []);
    setProgressInsight(D.chartSafetyInsight, t("chart_empty"));
    registerChartHover(D.progressSafetyCanvas, []);
    return;
  }
  const p = { l: 28, r: 14, t: 12, b: 42 };
  const cw = w - p.l - p.r;
  const ch = h - p.t - p.b;
  const maxTotal = Math.max(...rows.map(r => r.pass + r.warn + r.fail), 1);
  const gap = 14;
  const bw = (cw - gap * (rows.length - 1)) / rows.length;
  const colors = { pass: "#22c55e", warn: "#f59e0b", fail: "#ef4444" };
  const legends = [
    { key: "pass", label: t("chart_legend_pass") },
    { key: "warn", label: t("chart_legend_warn") },
    { key: "fail", label: t("chart_legend_fail") }
  ];
  const totalByKey = rows.reduce((acc, row) => {
    acc.pass += row.pass;
    acc.warn += row.warn;
    acc.fail += row.fail;
    return acc;
  }, { pass: 0, warn: 0, fail: 0 });
  setChartLegend(D.chartSafetyLegend, legends.map(item => ({
    label: item.label,
    value: totalByKey[item.key],
    color: colors[item.key]
  })));
  const hoverRegions = [];
  rows.forEach((row, idx) => {
    const x = p.l + idx * (bw + gap);
    const segments = ["pass","warn","fail"];
    let yCursor = p.t + ch;
    segments.forEach(key => {
      const val = row[key];
      if(!val) return;
      const bh = ch * (val / maxTotal);
      yCursor -= bh;
      hoverRegions.push({
        type: "rect",
        x,
        y: yCursor,
        w: bw,
        h: Math.max(4, bh),
        lines: [
          getDomainLabel(row.domain),
          `${key.toUpperCase()}: ${val}`,
          `${uiLang === "vi" ? "Tổng" : "Total"}: ${row.pass + row.warn + row.fail}`
        ]
      });
    });
  });
  animateChart(D.progressSafetyCanvas, 740, (animProgress)=>{
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "rgba(10,18,35,.5)";
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = "rgba(124,147,184,.2)";
    ctx.lineWidth = 1;
    for(let i=0;i<=4;i++){
      const y = p.t + (ch * i / 4);
      ctx.beginPath(); ctx.moveTo(p.l, y); ctx.lineTo(p.l + cw, y); ctx.stroke();
    }
    rows.forEach((row, idx) => {
      const x = p.l + idx * (bw + gap);
      const segments = ["pass","warn","fail"];
      let yCursor = p.t + ch;
      segments.forEach(key => {
        const val = row[key];
        if(!val) return;
        const bh = (ch * (val / maxTotal)) * animProgress;
        yCursor -= bh;
        ctx.fillStyle = colors[key];
        ctx.fillRect(x, yCursor, bw, bh);
      });
      ctx.fillStyle = "rgba(173,195,231,.9)";
      ctx.font = "600 10px 'Be Vietnam Pro', sans-serif";
      ctx.textAlign = "center";
      const label = getDomainShortLabel(row.domain);
      ctx.fillText(label, x + bw / 2, p.t + ch + 16);
    });
  });
  setProgressInsight(D.chartSafetyInsight, formatText("chart_safety_insight", {
    pass: totalByKey.pass,
    warn: totalByKey.warn,
    fail: totalByKey.fail
  }));
  registerChartHover(D.progressSafetyCanvas, hoverRegions);
}

function renderProgressDashboard(){
  renderLitDashboard();
  const attempts = collectPracticeAttempts(120);
  drawDonutChart();
  drawLineChart(attempts);
  drawDomainBarChart(attempts);
  drawSafetyBarChart(attempts);
  progressShouldAnimateCharts = false;
  hideChartTooltip();
}

function renderLitFilters(){
  if(!D.litFilters) return;
  D.litFilters.innerHTML = "";
  getDomainList().forEach(domain => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `lit-filter-btn topic-chip ${litDomainFilter === domain ? "active" : ""}`;
    btn.dataset.domain = domain;
    const label = domain === "all" ? t("domain_all") : getDomainLabel(domain);
    btn.title = label;
    btn.innerHTML = `${litDomainFilter === domain ? '<span class="topic-dot" aria-hidden="true"></span>' : '<span class="topic-dot" aria-hidden="true"></span>'}<span class="label">${label}</span>`;
    D.litFilters.appendChild(btn);
  });
}

function renderLitDifficultyFilters(){
  if(!D.litDifficultyFilters) return;
  D.litDifficultyFilters.innerHTML = "";
  getDifficultyList().forEach(level => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `lit-filter-btn seg-btn ${litDifficultyFilter === level ? "active" : ""}`;
    btn.dataset.difficulty = level;
    btn.innerHTML = `<span class="label">${getDifficultyLabel(level)}</span>`;
    D.litDifficultyFilters.appendChild(btn);
  });
}

function renderLitLessonList(){
  if(!D.litLessonList) return;
  const lessons = getFilteredLessons();
  D.litLessonList.innerHTML = "";
  if(!lessons.length){
    D.litLessonList.innerHTML = `<div class="lit-empty">${t("lit_empty_filter")}</div>`;
    return;
  }
  lessons.forEach(lesson => {
    const score = litProgress.quizScores[lesson.id];
    const status = getLessonStatus(lesson);
    const isDone = status === "done";
    const bestPractice = Number(getPracticeEntry(lesson.id)?.bestScore || 0);
    const statusLabel = status === "done" ? t("lit_done_yes") : status === "progress" ? t("lit_in_progress") : t("lit_done_no");
    const completionMeta = isDone
      ? `Quiz ${Number.isFinite(score) ? score : 0}/100 • Practice ${bestPractice || 0}/100`
      : status === "progress"
        ? `${Number.isFinite(score) ? `Quiz ${score}/100` : t("lit_in_progress")}${bestPractice ? ` • Practice ${bestPractice}/100` : ""}`
        : t("lit_done_no");
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `lit-lesson ${lesson.id === litSelectedLessonId ? "active" : ""}`;
    btn.dataset.lessonId = lesson.id;
    btn.innerHTML = `
      <div class="lit-lesson-top">
        <span class="lit-lesson-domain">${getDomainLabel(lesson.domain)}</span>
        <span class="lit-badge lit-badge--difficulty">${getDifficultyLabel(lesson.difficulty)}</span>
      </div>
      <h4>${lesson.title}</h4>
      <p class="lit-lesson-meta">${lesson.duration} • ${lesson.quiz.length} ${t("lit_quiz_question_count")}</p>
      <div class="lit-lesson-foot">
        <span class="lit-badge lit-badge--status is-${status}">${statusLabel}</span>
        <p class="lit-lesson-score">${completionMeta}</p>
      </div>
    `;
    D.litLessonList.appendChild(btn);
  });
}

function renderLitDetail(){
  if(!D.litDetail) return;
  const lesson = lessonById(litSelectedLessonId);
  if(!lesson){
    D.litDetail.innerHTML = `<div class="lit-empty">${t("lit_empty_select")}</div>`;
    return;
  }

  const quizState = ensureQuizState(lesson);
  const quizScore = Number.isFinite(litProgress.quizScores[lesson.id]) ? litProgress.quizScores[lesson.id] : null;
  const practiceEntry = getPracticeEntry(lesson.id);
  const practiceScore = Number(practiceEntry?.bestScore || 0);
  const progressBars = [
    { label: t("lit_progress_quiz"), value: quizScore ?? 0, text: quizScore === null ? t("lit_progress_empty") : `${quizScore}/100` },
    { label: t("lit_progress_practice"), value: practiceScore, text: practiceScore ? `${practiceScore}/100` : t("lit_progress_empty") }
  ];
  const keyPointsHtml = lesson.keyPoints.map(p => `<li>${p}</li>`).join("");
  const summaryText = lesson.content.slice(0, 2).join(" ");
  const exampleText = lesson.content[2] || lesson.content[lesson.content.length - 2] || lesson.content[0];
  const memoryText = lesson.content[lesson.content.length - 1] || lesson.keyPoints[0];
  const quizHtml = lesson.quiz.map((q, qi) => {
    const options = q.choices.map((choice, ci) => {
      const selected = quizState.answers[qi] === ci;
      const locked = quizState.locked;
      const isCorrect = locked && ci === q.answerIndex;
      const isWrong = locked && selected && ci !== q.answerIndex;
      const classes = [
        "lit-quiz-option",
        "quiz-option",
        selected ? "is-selected" : "",
        selected ? "quiz-option--selected" : "",
        locked ? "is-locked" : "",
        isCorrect ? "is-correct" : "",
        isCorrect ? "quiz-option--correct" : "",
        isWrong ? "is-wrong" : ""
        ,
        isWrong ? "quiz-option--wrong" : ""
      ].filter(Boolean).join(" ");
      return `
        <button
          type="button"
          class="${classes}"
          data-action="quiz-choice"
          data-lesson-id="${lesson.id}"
          data-question-index="${qi}"
          data-choice-index="${ci}"
          aria-label="Câu ${qi + 1}, đáp án ${ci + 1}"
          aria-pressed="${selected ? "true" : "false"}"
        >
          <span class="lit-quiz-option-dot quiz-radio" aria-hidden="true"></span>
          <span class="quiz-option-text">${choice}</span>
          <span class="quiz-option-state" aria-hidden="true"></span>
        </button>
      `;
    }).join("");
    return `
      <article class="lit-quiz-q" data-question-index="${qi}">
        <h5>${qi + 1}. ${q.q}</h5>
        <div class="lit-quiz-options">${options}</div>
      </article>
    `;
  }).join("");

  const checklist = buildLessonPracticeChecklist(lesson);
  const checklistHtml = checklist.map(item => `<li class="lit-practice-check">${item}</li>`).join("");
  const practiceResult = getPracticeResultMarkup(lesson.id);
  const allAnswered = quizState.answers.every(v => v >= 0);
  const progressHtml = progressBars.map(item => `
    <div class="lit-detail-progress-item">
      <div class="lit-detail-progress-top">
        <span>${item.label}</span>
        <strong>${item.text}</strong>
      </div>
      <div class="lit-detail-progress-bar">
        <span style="width:${clamp(item.value, 0, 100)}%"></span>
      </div>
    </div>
  `).join("");

  D.litDetail.innerHTML = `
    <article class="lit-card lit-card--hero">
      <div class="lit-head-top">
        <div>
          <div class="lit-head-badges">
            <span class="lit-lesson-domain">${getDomainLabel(lesson.domain)}</span>
            <span class="lit-badge lit-badge--difficulty">${getDifficultyLabel(lesson.difficulty)}</span>
          </div>
          <h3 class="lit-head-title">${lesson.title}</h3>
          <p class="lit-head-meta">${getDomainLabel(lesson.domain)} • ${lesson.duration}</p>
        </div>
      </div>
      <div class="lit-detail-progress">${progressHtml}</div>
    </article>

    <article class="lit-card lit-card--article">
      <div class="panel-title lit-section-title">${t("lit_content_title")}</div>
      <div class="lesson-article mt-1">
        <section class="article-section">
          <h4 class="article-heading">${t("lit_header_quick")}</h4>
          <p>${summaryText}</p>
        </section>

        <section class="article-section">
          <h4 class="article-heading">${t("lit_header_points")}</h4>
          <ul class="article-list">
            ${keyPointsHtml}
          </ul>
        </section>

        <aside class="article-callout example">
          <div class="callout-title">${t("lit_header_example")}</div>
          <p>${exampleText}</p>
        </aside>

        <aside class="article-callout note">
          <div class="callout-title">${t("lit_header_memory")}</div>
          <p>${memoryText}</p>
        </aside>
      </div>
    </article>

    <article class="lit-card lit-card--quiz">
      <div class="panel-title lit-section-title">${t("lit_quiz_title")}</div>
      <div class="lit-quiz mt-1">${quizHtml}</div>
      <div class="lit-quiz-actions">
        <button class="btn btn-run" type="button" data-action="grade-quiz" data-lesson-id="${lesson.id}" ${allAnswered ? "" : "disabled"}>${t("lit_quiz_grade_btn")}</button>
      </div>
      ${quizState.locked ? `<p class="muted mt-1">${t("lit_quiz_locked")}</p>` : ""}
      <div id="lit-quiz-result" class="lit-quiz-result-card"></div>
    </article>

    <article class="lit-card lit-card--practice">
      <div class="panel-title lit-section-title">${t("lit_assignment_title")}</div>
      <div class="lit-practice-flow mt-1">
        <div class="lit-practice-step lit-practice-step--task">
          <h5>${lesson.assignmentTemplate.customInputSeed}</h5>
          <strong class="muted">${t("lit_practice_criteria")}</strong>
          <ul class="lit-practice-checks">
            ${checklistHtml}
          </ul>
        </div>
        <div class="lit-practice-step lit-practice-step--action">
          <button class="btn btn-run cta-open-builder" type="button" data-action="start-assignment" data-lesson-id="${lesson.id}">${t("lit_practice_open")}</button>
        </div>
        <div class="lit-practice-step">
          <h5>${t("lit_practice_latest")}</h5>
          ${practiceResult}
        </div>
      </div>
    </article>
  `;

  const result = litQuizState[lesson.id]?.result;
  if(result){
    renderQuizResultCard(lesson.id, result);
  }
}

function renderLiteracy(){
  const filtered = getFilteredLessons();
  if(D.litSearchInput && D.litSearchInput.value !== litSearchQuery){
    D.litSearchInput.value = litSearchQuery;
  }
  if(filtered.length && !filtered.some(lesson => lesson.id === litSelectedLessonId)){
    litSelectedLessonId = filtered[0].id;
  }
  renderLitFilters();
  renderLitDifficultyFilters();
  renderLitLessonList();
  if(!filtered.length && D.litDetail){
    D.litDetail.innerHTML = `<div class="lit-empty">${t("lit_empty_filter")}</div>`;
    return;
  }
  renderLitDetail();
}

function ensureQuizState(lesson){
  if(!lesson) return { answers: [], locked: false, result: null };
  if(!litQuizState[lesson.id]){
    litQuizState[lesson.id] = {
      answers: Array(lesson.quiz.length).fill(-1),
      locked: false,
      result: null
    };
  }
  if(!Array.isArray(litQuizState[lesson.id].answers) || litQuizState[lesson.id].answers.length !== lesson.quiz.length){
    litQuizState[lesson.id].answers = Array(lesson.quiz.length).fill(-1);
  }
  return litQuizState[lesson.id];
}

function selectQuizChoice(lessonId, questionIndex, choiceIndex){
  const lesson = lessonById(lessonId);
  if(!lesson) return;
  const state = ensureQuizState(lesson);
  if(state.locked) return;
  const qi = Number(questionIndex);
  const ci = Number(choiceIndex);
  if(!Number.isInteger(qi) || !Number.isInteger(ci) || qi < 0 || qi >= lesson.quiz.length) return;
  state.answers[qi] = ci;
  renderLitDetail();
}

function renderQuizResultCard(lessonId, result){
  if(!D.litDetail) return;
  const resultEl = D.litDetail.querySelector("#lit-quiz-result");
  if(!resultEl || !result) return;
  const items = result.feedback.map(item => `
    <div class="lit-quiz-feedback-item ${item.status}">
      <div class="lit-quiz-feedback-top">
        <strong>${item.label}</strong>
        <span class="status-pill ${item.status}">${item.status === "pass" ? t("status_pass") : t("status_fail")}</span>
      </div>
      <p>${item.explanation}</p>
    </div>
  `).join("");
  resultEl.innerHTML = `
    <div class="lit-quiz-result-top">
      <div class="lit-quiz-score">${result.score}<span>/100</span></div>
      <span class="lit-quiz-status ${result.status}">${result.statusLabel}</span>
    </div>
    <p class="lit-quiz-result-summary">${formatText("lit_quiz_correct_count", { correct: result.correct, total: result.total })}</p>
    <div class="lit-quiz-feedback-list">${items}</div>
  `;
}

function gradeLessonQuiz(lessonId){
  const lesson = lessonById(lessonId);
  if(!lesson || !D.litDetail) return;
  const state = ensureQuizState(lesson);
  const selected = state.answers;

  if(selected.some(v => v < 0)){
    const resultEl = D.litDetail.querySelector("#lit-quiz-result");
    if(resultEl){
      resultEl.innerHTML = `
        <div class="lit-quiz-result-top">
          <div class="lit-quiz-score">${t("lit_quiz_ungraded")}</div>
          <span class="lit-quiz-status warn">${t("lit_quiz_need_pick")}</span>
        </div>
        <p class="lit-quiz-result-summary">${t("lit_quiz_pick_all")}</p>
      `;
    }
    return;
  }

  let correct = 0;
  const feedback = [];
  lesson.quiz.forEach((q, idx) => {
    const ok = selected[idx] === q.answerIndex;
    if(ok) correct += 1;
    feedback.push({
      status: ok ? "pass" : "fail",
      label: `Câu ${idx + 1}`,
      explanation: q.explanation
    });
  });
  const scoreValue = Math.round((correct / lesson.quiz.length) * 100);
  litProgress.quizScores[lessonId] = scoreValue;
  if(!litProgress.completedLessons.includes(lessonId)){
    litProgress.completedLessons.push(lessonId);
  }
  state.locked = true;
  const status = scoreValue >= 80 ? "pass" : scoreValue >= 50 ? "warn" : "fail";
  const statusLabel = status === "pass" ? t("lit_quiz_good") : status === "warn" ? t("lit_quiz_mid") : t("lit_quiz_bad");
  state.result = {
    score: scoreValue,
    correct,
    total: lesson.quiz.length,
    status,
    statusLabel,
    feedback
  };
  saveLiteracyProgress();
  renderLitDashboard();
  renderLitLessonList();
  renderLitDetail();
  renderProgressDashboard();
}

function buildLessonPracticeChecklist(lesson){
  if(!lesson) return [];
  return getAssignmentChecklist(lesson);
}

function getPracticeResultMarkup(lessonId){
  const assignmentId = getLessonAssignmentId(lessonId);
  const entry = getPracticeEntry(lessonId, assignmentId);
  const latest = entry?.lastAttempt;
  if(!latest || typeof latest !== "object"){
    return `<div class="lit-practice-result"><p>${t("lit_practice_none")}</p></div>`;
  }
  const scoreValue = Math.round(Number(latest.score || 0));
  const scoreClass = scoreValue >= 80 ? "good" : scoreValue >= 60 ? "mid" : "low";
  const dateText = latest.submittedAt ? new Date(latest.submittedAt).toLocaleString() : "-";
  const notes = normalizeLegacyPracticeText(latest.notes || "")
    .split(/[.\n]+/)
    .map(s => s.trim())
    .filter(Boolean)
    .slice(0, 3);
  const suggestions = Array.isArray(latest.suggestions) ? latest.suggestions.slice(0, 3) : [];
  const criteria = latest.criteria && typeof latest.criteria === "object" ? latest.criteria : {};
  const latestRubric = latest.rubricResult && typeof latest.rubricResult === "object" ? latest.rubricResult : null;
  const rubricNotes = [];
  if(latestRubric){
    const missingTypeLabels = Array.isArray(latestRubric.missingTypes)
      ? latestRubric.missingTypes.map(getTypeLabel).filter(Boolean)
      : [];
    if(missingTypeLabels.length){
      rubricNotes.push(`${t("rubric_missing_label")}: ${missingTypeLabels.join(", ")}`);
    }
    if(latestRubric.wrongDirection){
      rubricNotes.push(latestRubric.wrongDirection);
    }
    if(latestRubric.structureOrderOk === false){
      rubricNotes.push(t("rubric_order_bad"));
    }
  }

  return `
    <div class="lit-practice-result">
      <div class="lit-practice-head">
        <strong>${t("lit_practice_rubric")}</strong>
        <span class="lit-practice-badge ${scoreClass}">${scoreValue}/100 • ${latest.passed ? t("practice_latest_pass") : t("practice_latest_fail")}</span>
      </div>
      ${rubricNotes.length ? `<ul class="lit-practice-notes">${rubricNotes.map(note => `<li>${note}</li>`).join("")}</ul>` : ""}
      <div class="lit-practice-rubric">
        <div class="lit-pr-item"><span>Rõ ràng</span><strong>${Math.round(Number(criteria.clarity || 0))}</strong></div>
        <div class="lit-pr-item"><span>Đầy đủ</span><strong>${Math.round(Number(criteria.completeness || 0))}</strong></div>
        <div class="lit-pr-item"><span>An toàn</span><strong>${Math.round(Number(criteria.safety || latest.safetyScore || 0))}</strong></div>
        <div class="lit-pr-item"><span>Cấu trúc</span><strong>${Math.round(Number(criteria.structure || 0))}</strong></div>
        <div class="lit-pr-item"><span>Lứa tuổi</span><strong>${Math.round(Number(criteria.age || 0))}</strong></div>
      </div>
      <p>${t("lit_practice_best")}: ${Math.round(Number(entry.bestScore || scoreValue))}/100 • ${t("lit_practice_attempts")}: ${Number(entry.attemptsCount || 1)}</p>
      ${notes.length ? `<ul class="lit-practice-notes">${notes.map(note => `<li>${note}.</li>`).join("")}</ul>` : ""}
      ${suggestions.length ? `<ul class="lit-practice-notes">${suggestions.map(item => `<li>${item}</li>`).join("")}</ul>` : ""}
      <div class="lit-practice-actions">
        <button class="btn" type="button" data-action="reopen-assignment" data-lesson-id="${lessonId}">${t("practice_reopen_builder")}</button>
        <span class="lit-practice-time">${t("practice_last_submitted")}: ${dateText}</span>
      </div>
    </div>
  `;
}

function startLessonAssignment(lessonId){
  const lesson = lessonById(lessonId);
  if(!lesson) return;
  litProgress.lastOpenLesson = lesson.id;
  saveLiteracyProgress();
  setPracticeSession(lesson.id);
  const rubric = getLessonRubric(lesson);
  const assignmentContext = {
    lessonId: lesson.id,
    lessonTitle: lesson.title,
    assignmentId: getLessonAssignmentId(lesson.id),
    rubric,
    openedAt: Date.now()
  };
  saveActiveAssignmentContext(assignmentContext);
  assignmentBannerCollapsed = false;
  const savedEntry = getPracticeEntry(lesson.id, assignmentContext.assignmentId);
  const savedAttempt = savedEntry?.lastAttempt;
  const savedCanvas = Array.isArray(savedAttempt?.canvasBlocks) ? savedAttempt.canvasBlocks : [];
  const savedCustomInput = typeof savedAttempt?.customInput === "string" ? savedAttempt.customInput : "";
  const hasSavedPrompt = savedCanvas.length > 0 || savedCustomInput.trim().length > 0;
  const payload = {
    canvasBlocks: hasSavedPrompt ? savedCanvas : [],
    customInputSeed: hasSavedPrompt ? savedCustomInput : "",
    mode: "student",
    successHint: hasSavedPrompt ? t("assignment_reuse_saved") : t("summary_prefill_default"),
    sourceLessonId: lesson.id,
    assignmentContext
  };
  setPrefillPayload(payload);
  setRoute("builder");
}

/* ── RENDER LIBRARY ────────────────────────────────────────────── */
function renderLibrary(){
  const q=norm(search);
  const source = getLibrarySource();
  const groups=GROUP_ORDER.map(gk=>({
    key:gk,...GROUP_META[gk],
    items:source.filter(b=>b.group===gk&&(!q||norm(`${b.label} ${b.desc} ${b.content}`).includes(q)))
  })).filter(g=>g.items.length);

  D.library.innerHTML="";
  if(!groups.length){
    D.library.innerHTML='<div style="color:var(--text-muted);font-size:.8rem;padding:12px 4px">Không tìm thấy block.</div>';return;
  }
  groups.forEach(g=>{
    const sec=document.createElement("div");sec.className="lib-group";
    const h=document.createElement("h3");h.textContent=`${g.icon} ${getGroupLabel(g.key)}`;sec.appendChild(h);
    g.items.forEach(b=>{
      const card=document.createElement("div");card.className=`block-card g-${b.group}`;
      card.setAttribute("role", "button");
      card.tabIndex = 0;
      card.dataset.addBlock=b.id;card.dataset.dragBlockId=b.id;card.draggable=true;
      const customOps = b.custom ? `
        <div class="block-ops">
          <button class="block-op-btn is-danger" type="button" data-del-custom="${b.id}">${t("custom_delete")}</button>
        </div>` : "";
      card.innerHTML=`<div class="block-title">${b.label}</div><div class="block-desc">${b.desc || ""}</div>${customOps}`;
      const color = b.accent && b.accent !== "auto" ? b.accent : GROUP_ACCENT[b.group];
      if(color) card.style.setProperty("--group-color", color);
      sec.appendChild(card);
    });
    D.library.appendChild(sec);
  });
}

function closeCustomModal(){
  if(!D.customModal) return;
  closeOpenDropdowns();
  D.customModal.hidden = true;
  D.customModal.setAttribute("aria-hidden", "true");
  if(D.btnCustomOpen){
    D.btnCustomOpen.focus({ preventScroll: true });
  }
}

function clearCustomValidation(){
  D.customName?.classList.remove("is-invalid");
  D.customContent?.classList.remove("is-invalid");
  D.customTypeMount?.classList.remove("is-invalid");
  if(D.customValidationMsg){
    D.customValidationMsg.hidden = true;
    D.customValidationMsg.textContent = "";
  }
}

function showCustomValidation(fields = []){
  if(!D.customValidationMsg) return;
  const fieldText = fields.join(", ");
  D.customValidationMsg.textContent = t("custom_invalid_fields", { fields: fieldText });
  D.customValidationMsg.hidden = false;
}

function openCustomModal(blockId = ""){
  if(!D.customModal || !D.customForm) return;
  const editing = blockId ? customBlocks.find(b => b.id === blockId) : null;
  D.customForm.reset();
  clearCustomValidation();
  if(D.customId) D.customId.value = editing ? editing.id : "";
  if(D.customName) D.customName.value = editing ? editing.label : "";
  const selectedType = editing ? getCustomTypeFromGroup(editing.group) : "ROLE";
  setHiddenInputValue(D.customType, selectedType);
  if(dropdowns.customType){
    dropdowns.customType.setValue(selectedType, { silent:true });
  }
  if(D.customDesc) D.customDesc.value = editing ? (editing.desc || "") : "";
  if(D.customContent) D.customContent.value = editing ? editing.content : "";
  const accent = editing ? (editing.accent || "auto") : "auto";
  D.customForm.querySelectorAll("input[name='custom-accent']").forEach(input => {
    input.checked = input.value === accent;
  });
  if(D.customModalTitle){
    D.customModalTitle.textContent = editing ? t("custom_modal_edit") : t("custom_modal_new");
  }
  D.customModal.hidden = false;
  D.customModal.setAttribute("aria-hidden", "false");
  setTimeout(()=>D.customName?.focus(), 10);
}

function submitCustomBlockForm(){
  clearCustomValidation();
  const id = D.customId?.value?.trim() || "";
  const label = D.customName?.value?.trim() || "";
  const selectedType = String(dropdowns.customType?.getValue?.() || D.customType?.value || "ROLE").trim().toUpperCase();
  setHiddenInputValue(D.customType, selectedType);
  const group = getCustomGroupFromType(selectedType);
  const desc = D.customDesc?.value?.trim() || "";
  const content = D.customContent?.value?.trim() || "";
  const accentInput = D.customForm?.querySelector("input[name='custom-accent']:checked");
  const accent = accentInput ? accentInput.value : "auto";

  const missingFields = [];
  if(!label){
    D.customName?.classList.add("is-invalid");
    missingFields.push(t("custom_field_name"));
  }
  if(!GROUP_META[group]){
    D.customTypeMount?.classList.add("is-invalid");
    missingFields.push(t("custom_field_type"));
  }
  if(!content){
    D.customContent?.classList.add("is-invalid");
    missingFields.push(t("custom_field_content"));
  }

  if(missingFields.length){
    showCustomValidation(missingFields);
    const typeTrigger = D.customTypeMount?.querySelector(".dd-trigger");
    (D.customName?.classList.contains("is-invalid") ? D.customName :
      D.customTypeMount?.classList.contains("is-invalid") ? typeTrigger :
      D.customContent)?.focus?.();
    setRun("warning");
    D.output.textContent = t("custom_invalid");
    return;
  }

  if(id){
    const idx = customBlocks.findIndex(item => item.id === id);
    if(idx >= 0){
      customBlocks[idx] = {
        ...customBlocks[idx],
        label,
        group,
        desc,
        content,
        type: normalizeBlockType(selectedType, group),
        tags: ensureBlockMetadata({ ...customBlocks[idx], label, group, desc, content }).tags,
        accent,
        updatedAt: Date.now()
      };
    }else{
      customBlocks.unshift({
        id,
        group,
        label,
        desc,
        content,
        type: normalizeBlockType(selectedType, group),
        tags: ensureBlockMetadata({ id: "temp", group, label, desc, content, tags: [] }).tags,
        accent,
        custom: true,
        createdAt: Date.now(),
        updatedAt: Date.now()
      });
    }
  }else{
    customBlocks.unshift({
      id: `custom_${Date.now().toString(36)}_${Math.random().toString(36).slice(2,6)}`,
      group,
      label,
      desc,
      content,
      type: normalizeBlockType(selectedType, group),
      tags: ensureBlockMetadata({ id: "temp", group, label, desc, content, tags: [] }).tags,
      accent,
      custom: true,
      createdAt: Date.now(),
      updatedAt: Date.now()
    });
  }

  if(D.search){
    D.search.value = "";
    search = "";
  }
  saveCustomBlocks();
  renderLibrary();
  renderCanvas();
  evaluate();
  closeCustomModal();
  setRun("done");
  D.output.textContent = t("custom_saved");
}

function deleteCustomBlock(blockId){
  const target = customBlocks.find(item => item.id === blockId);
  if(!target) return;
  if(!window.confirm(t("custom_delete_confirm"))) return;
  customBlocks = customBlocks.filter(item => item.id !== blockId);
  canvas = canvas.filter(item => item.blockId !== blockId);
  saveCustomBlocks();
  renderLibrary();
  renderCanvas();
  evaluate();
  draft(false);
  setRun("done");
  D.output.textContent = t("custom_deleted");
}

/* ── RENDER CANVAS ─────────────────────────────────────────────── */
function renderCanvas(){
  D.canvas.classList.toggle("is-empty", !canvas.length);
  if(!canvas.length){
    D.canvas.innerHTML=`<div class="canvas-empty">
      <div class="canvas-empty-icon">✦</div>
      <strong>${t("canvas_empty_title")}</strong>
      <p>${t("canvas_empty_desc")}</p>
      <span class="canvas-hint">${t("canvas_empty_hint")}</span>
    </div>`;
    return;
  }
  D.canvas.innerHTML="";
  canvas.forEach((e,i)=>{
    const s=libById(e.blockId);if(!s)return;
    const el=document.createElement("article");
    el.className=`canvas-item g-${s.group}`;el.dataset.cid=e.uid;el.draggable=true;
    const color = s.accent && s.accent !== "auto" ? s.accent : GROUP_ACCENT[s.group];
    if(color) el.style.setProperty("--item-color", color);
    if(e.uid===pendingUid)el.classList.add("entering");
    el.innerHTML=`<div class="item-head">
      <div class="item-left">
        <span class="item-type">${CANVAS_FIXED_BADGE[s.group] || GROUP_BADGE[s.group] || String(s.group || "").toUpperCase()}</span>
        <div class="item-title">${i+1}. ${s.label}</div>
      </div>
      <div><button class="tool-btn" type="button" data-rm="${e.uid}">${t("canvas_remove_btn")}</button></div>
    </div>
    <textarea class="textarea" rows="3" data-edit="${e.uid}" draggable="false"></textarea>`;
    el.querySelector("textarea").value=e.content;
    D.canvas.appendChild(el);
  });
  pendingUid=null;
}

/* ── CANVAS MUTATIONS ──────────────────────────────────────────── */
function addBlock(id){
  const s=libById(id);if(!s)return;
  const e={uid:uid(),blockId:s.id,content:s.content};
  canvas.push(e);pendingUid=e.uid;
  renderCanvas();evaluate();draft(false);
}
function removeBlock(id){
  const el=D.canvas.querySelector(`[data-cid="${id}"]`);
  if(el){el.classList.add("leaving");setTimeout(()=>{canvas=canvas.filter(e=>e.uid!==id);renderCanvas();evaluate();draft(false)},160)}
  else{canvas=canvas.filter(e=>e.uid!==id);renderCanvas();evaluate();draft(false)}
}
function moveDrop(fromUid,toUid,after){
  if(!fromUid||!toUid||fromUid===toUid)return false;
  const fi=canvas.findIndex(e=>e.uid===fromUid);
  const [item]=canvas.splice(fi,1);
  let ti=canvas.findIndex(e=>e.uid===toUid);
  if(after)ti++;
  canvas.splice(clamp(ti,0,canvas.length),0,item);
  return true;
}

function setLibraryDeleteDropState(active, hovering = false){
  if(!D.libraryPanel || !D.libraryDeleteDropzone) return;
  D.libraryPanel.classList.toggle("is-delete-drop-active", !!active);
  D.libraryPanel.classList.toggle("is-delete-drop-hover", !!active && !!hovering);
  D.libraryDeleteDropzone.setAttribute("aria-hidden", active ? "false" : "true");
}

/* ── RUN STATE ─────────────────────────────────────────────────── */
function setRun(s){
  D.runState.className=`run-state ${s}`;
  D.output.className=`sandbox-out ${s}`;
  const lb={
    idle:t("run_idle"),
    running:t("run_running"),
    done:t("run_done"),
    warning:t("run_warning"),
    blocked:t("run_blocked")
  };
  D.runState.textContent=lb[s]||s;
}

function hasBlock(blocks, id){
  return blocks.some(b=>b.id===id);
}

function truncateWords(text, maxWords){
  const lines = (text || "").split("\n").map(line => line.trim()).filter(Boolean);
  let count = 0;
  const kept = [];

  for (const line of lines) {
    const words = line.split(/\s+/).filter(Boolean);
    if (!words.length) continue;
    if (count >= maxWords) break;

    if (count + words.length <= maxWords) {
      kept.push(line);
      count += words.length;
      continue;
    }

    const remain = maxWords - count;
    if (remain > 0) {
      kept.push(`${words.slice(0, remain).join(" ")}...`);
      count = maxWords;
    }
    break;
  }

  return kept.join("\n");
}

function groupText(blocks, group){
  return blocks
    .filter(b => b.group === group)
    .map(b => (b.content || "").trim())
    .filter(Boolean)
    .join(" ");
}

function cleanPromptText(text){
  return (text || "")
    .replace(/^(nhiem vu|nhiệm vụ|boi canh|bối cảnh|phong cach|phong cách|rang buoc|ràng buộc|vi du dau ra|ví dụ đầu ra|kiem chung|kiểm chứng)\s*:\s*/i, "")
    .replace(/\s+/g, " ")
    .trim();
}

function shortSentence(text, maxLen = 96){
  const s = cleanPromptText(text);
  if (!s) return "";
  return s.length > maxLen ? `${s.slice(0, maxLen - 1).trim()}…` : s;
}

function detectTopic(text){
  const n = norm(text);
  if (/can bac hai|căn bậc hai/.test(n)) return "căn bậc hai";
  if (/phuong trinh bac hai|phương trình bậc hai/.test(n)) return "phương trình bậc hai";
  if (/\bbac hai\b/.test(n)) return "toán bậc hai";
  if (/phan so|phân số/.test(n)) return "phân số";
  if (/hinh hoc|hình học/.test(n)) return "hình học";
  if (/viet doan van|viết đoạn văn/.test(n)) return "viết đoạn văn";
  return "chủ đề học tập";
}

function buildStepLines(blocks, custom){
  const taskText = groupText(blocks, "task");
  const contextText = groupText(blocks, "context");
  const styleText = groupText(blocks, "style");
  const allText = `${taskText} ${contextText} ${styleText} ${custom || ""}`.trim();
  const n = norm(allText);
  const topic = detectTopic(allText);
  const lines = [];
  let step = 1;
  const add = text => {
    if (!text) return;
    lines.push(`Step ${step}: ${text}`);
    step += 1;
  };

  if (/tao .*bai tap|tạo .*bài tập|bai tap|bài tập/.test(n)) {
    add(`Tạo 1 bài tập ngắn về ${topic}, đúng trình độ học sinh.`);
  } else if (taskText.trim()) {
    add(`Bám sát yêu cầu chính: ${shortSentence(taskText)}.`);
  } else {
    add(`Xác định mục tiêu học tập cho chủ đề ${topic}.`);
  }

  if (/theo tung buoc|từng bước|tung buoc|step/.test(n)) {
    add("Giải thích theo từng bước rõ ràng, mỗi bước nêu mục tiêu và cách làm.");
  } else {
    add("Chia nội dung thành các phần nhỏ để học sinh dễ theo dõi.");
  }

  if (/tu de den kho|từ dễ đến khó|de den kho|dễ đến khó/.test(n)) {
    add("Sắp xếp tiến trình từ dễ đến khó để học sinh theo kịp.");
  }

  if (/vi du|ví dụ|minh hoa|minh họa/.test(n) || hasBlock(blocks, "ex_output")) {
    add("Thêm ví dụ ngắn sau mỗi bước để học sinh tự đối chiếu.");
  }

  if (contextText.trim()) {
    add(`Điều chỉnh độ khó theo bối cảnh: ${shortSentence(contextText, 84)}.`);
  }

  if (/tu luyen|tự luyện|tu kiem tra|tự kiểm tra|kiem tra lai|kiểm tra lại/.test(n)) {
    add("Kết thúc bằng 1 bài tự luyện kèm gợi ý kiểm tra đáp án.");
  }

  if (lines.length < 3) {
    add("Tóm tắt cách làm bằng 3 gạch đầu dòng ngắn.");
  }
  return lines.slice(0, 6);
}

function buildSocraticLines(blocks, custom){
  const allText = `${groupText(blocks, "task")} ${groupText(blocks, "context")} ${custom || ""}`;
  const topic = detectTopic(allText);
  return [
    `Câu hỏi 1: Với chủ đề ${topic}, em đã biết dữ kiện nào?`,
    "Câu hỏi 2: Em thử chọn 1 cách làm và giải thích vì sao cách đó hợp lý.",
    "Câu hỏi 3: Em có thể tự rút ra quy tắc chung bằng 1–2 câu không?"
  ];
}

function buildExampleLine(text){
  const n = norm(text);
  if (/can bac hai|căn bậc hai/.test(n)) {
    return "Ví dụ mẫu: Giải √(x + 5) = 4 → x + 5 = 16 → x = 11.";
  }
  if (/phuong trinh bac hai|phương trình bậc hai|\bbac hai\b/.test(n)) {
    return "Ví dụ mẫu: Giải x² - 5x + 6 = 0 → (x - 2)(x - 3) = 0 → x = 2 hoặc x = 3.";
  }
  if (/phan so|phân số/.test(n)) {
    return "Ví dụ mẫu: 3/4 + 1/6 = 9/12 + 2/12 = 11/12.";
  }
  return "Ví dụ mẫu: Nêu 1 ví dụ hoàn chỉnh, rồi đưa 1 bài tương tự để học sinh tự luyện.";
}

function buildMockAnswer(blocks, custom){
  const taskText = groupText(blocks, "task");
  const contextText = groupText(blocks, "context");
  const styleText = groupText(blocks, "style");
  const allText = `${taskText} ${contextText} ${styleText} ${custom || ""}`.trim();
  const n = norm(allText);

  const byStep =
    hasBlock(blocks, "task_step") ||
    /theo tung buoc|từng bước|tung buoc|step/.test(n);
  const bySocratic =
    hasBlock(blocks, "style_probe") ||
    /goi mo|gợi mở|cau hoi|câu hỏi|socratic/.test(n);
  const hasExample = hasBlock(blocks, "ex_output") || /vi du|ví dụ|minh hoa|minh họa/.test(n);
  const shortMode = hasBlock(blocks,"con_len");
  const withVerify = hasBlock(blocks,"ver_src") || /kiem chung|kiểm chứng|kiem tra lai|kiểm tra lại|nguon|nguồn/.test(n);

  let lines = [];

  if (bySocratic && !byStep) {
    lines = buildSocraticLines(blocks, custom);
  } else if (byStep || taskText.trim()) {
    lines = buildStepLines(blocks, custom);
  } else {
    const topic = detectTopic(allText || custom || "chủ đề học tập");
    lines = [
      `Step 1: Xác định mục tiêu học tập cho chủ đề ${topic}.`,
      "Step 2: Giải thích ngắn gọn, dùng từ dễ hiểu cho học sinh.",
      "Step 3: Kết thúc bằng 1 câu hỏi tự kiểm tra mức hiểu."
    ];
  }

  if (hasExample) {
    lines.push(buildExampleLine(allText));
  }

  if(withVerify){
    lines.push("Nhắc kiểm chứng: Đối chiếu kết quả với sách giáo khoa hoặc nguồn đáng tin cậy.");
  }

  let output = lines.join("\n");
  if(shortMode){
    output = truncateWords(output, 65);
  }
  return output;
}

function getSevereSafetyIssue(blocks, custom, sf){
  const text = `${blocks.map(b=>`${b.label} ${b.content}`).join(" ")} ${custom||""}`;
  const n = norm(text);
  const dangerHits = findKW(n, KW.dangerousFail);
  const personalHits = findKW(n, KW.personalFail);
  const malwareHit = /(malware|keylogger|ransomware|trojan|spyware|botnet|ddos|phishing)/.test(n);

  if(dangerHits.length || personalHits.length || malwareHit){
    const reason = dangerHits.length
      ? `Phát hiện nội dung nguy hiểm: "${dangerHits[0]}".`
      : personalHits.length
        ? `Phát hiện dữ liệu nhạy cảm: "${personalHits[0]}".`
        : "Phát hiện nội dung liên quan malware/keylogger.";
    return {
      blocked: true,
      reason,
      fixes: [
        "Xóa yêu cầu nguy hiểm hoặc khai thác trái phép.",
        "Không yêu cầu/đưa thông tin cá nhân nhạy cảm.",
        "Giới hạn prompt vào mục tiêu học tập an toàn."
      ]
    };
  }

  const riskContentFail = sf.checks.find(c=>c.label==="Rủi ro nội dung" && c.status==="fail");
  if(riskContentFail){
    return {
      blocked: true,
      reason: riskContentFail.detail,
      fixes: [
        "Điều chỉnh prompt theo hướng học tập, không lạm dụng.",
        "Loại bỏ phần yêu cầu có thể gây hại.",
        "Thêm ràng buộc an toàn trước khi chạy lại."
      ]
    };
  }

  return { blocked: false, reason: "", fixes: [] };
}

function buildPracticeSuggestions(scoreResult, safetyResult){
  const fromScore = Array.isArray(scoreResult?.sugg) ? scoreResult.sugg : [];
  const fromSafety = Array.isArray(safetyResult?.sugg) ? safetyResult.sugg : [];
  const merged = uniq([...fromScore, ...fromSafety]).filter(Boolean);
  return merged.slice(0, 2);
}

function getSafetyLabelByRisk(riskLevel){
  if(riskLevel === "safe") return uiLang === "vi" ? "An toàn" : "Safe";
  if(riskLevel === "warn") return uiLang === "vi" ? "Cần xem lại" : "Needs review";
  return uiLang === "vi" ? "Không an toàn" : "Unsafe";
}

function buildSubmitSuggestions(blocks, scoreResult, safetyResult){
  const groups = new Set(blocks.map(b => b.group));
  const missing = [];
  if(!groups.has("context")) missing.push(uiLang === "vi" ? "Bổ sung phần Bối cảnh để AI bám đúng trình độ học sinh." : "Add context so AI matches learner level.");
  if(!groups.has("constraints")) missing.push(uiLang === "vi" ? "Thêm phần Ràng buộc để giới hạn phạm vi trả lời." : "Add rules to control response scope.");
  if(!groups.has("verification")) missing.push(uiLang === "vi" ? "Thêm phần Kiểm chứng nếu có dữ kiện/số liệu." : "Add verification when prompts include facts or numbers.");

  const merged = uniq([
    ...missing,
    ...(Array.isArray(scoreResult?.sugg) ? scoreResult.sugg : []),
    ...(Array.isArray(safetyResult?.sugg) ? safetyResult.sugg : [])
  ].filter(Boolean));
  return merged.slice(0, 3);
}

function evaluateRubricResult(blocks, rubric){
  const safeRubric = normalizeRubricRequirements(rubric || {}, "");
  const presentTypes = uniq(blocks.map(b => normalizeBlockType(b.type, b.group)));
  const allTags = uniq(blocks.flatMap(b => Array.isArray(b.tags) ? b.tags : []).map(normalizeTag).filter(Boolean));
  const missingTypes = safeRubric.requiredTypes.filter(type => !presentTypes.includes(type));
  const matchedTags = safeRubric.requiredTagsAny.filter(tag => allTags.includes(normalizeTag(tag)));
  const requiredTagMatched = safeRubric.requiredTagsAny.length ? matchedTags.length > 0 : true;
  const forbiddenHits = safeRubric.forbiddenTags.filter(tag => allTags.includes(normalizeTag(tag)));

  const indexByType = {};
  blocks.forEach((block, idx) => {
    const tpe = normalizeBlockType(block.type, block.group);
    if(typeof indexByType[tpe] === "undefined"){
      indexByType[tpe] = idx;
    }
  });
  const orderChain = TYPE_ORDER.filter(type => typeof indexByType[type] !== "undefined");
  let structureOrderOk = true;
  for(let i=0;i<orderChain.length - 1;i++){
    if(indexByType[orderChain[i]] > indexByType[orderChain[i+1]]){
      structureOrderOk = false;
      break;
    }
  }

  const wrongDirection = forbiddenHits.length > 0 && safeRubric.requiredTagsAny.length > 0
    ? formatText("rubric_direction_need", {
      current: forbiddenHits.join(", "),
      required: safeRubric.requiredTagsAny.join(" / ")
    })
    : "";

  const typeCoverage = {
    required: safeRubric.requiredTypes,
    present: presentTypes,
    missing: missingTypes
  };

  const tagMatch = {
    requiredAny: safeRubric.requiredTagsAny,
    matched: matchedTags,
    isMatched: requiredTagMatched
  };

  const rubricFail = missingTypes.length > 0
    || !requiredTagMatched
    || (safeRubric.strictForbidden && forbiddenHits.length > 0);

  return {
    typeCoverage,
    tagMatch,
    forbiddenHits,
    structureOrderOk,
    wrongDirection,
    rubricFail
  };
}

function evaluateSubmissionScore(safetyResult, rubricResult, rubricConfig = {}){
  const failCount = safetyResult.checks.filter(c => c.status === "fail").length;
  const warnCount = safetyResult.checks.filter(c => c.status === "warn").length;
  const requiredTypes = Array.isArray(rubricResult?.typeCoverage?.required) ? rubricResult.typeCoverage.required : [];
  const missingTypes = Array.isArray(rubricResult?.typeCoverage?.missing) ? rubricResult.typeCoverage.missing : [];
  const coveredTypes = Math.max(0, requiredTypes.length - missingTypes.length);
  const typeScore = requiredTypes.length ? Math.round((coveredTypes / requiredTypes.length) * 100) : 100;

  const requiredTags = Array.isArray(rubricResult?.tagMatch?.requiredAny) ? rubricResult.tagMatch.requiredAny : [];
  const tagScore = requiredTags.length ? (rubricResult?.tagMatch?.isMatched ? 100 : 0) : 100;

  const orderScore = rubricResult?.structureOrderOk ? 100 : 55;
  const directionScore = Array.isArray(rubricResult?.forbiddenHits) && rubricResult.forbiddenHits.length ? 0 : 100;
  const safetyScore = failCount > 0 ? 20 : warnCount > 0 ? 75 : 100;

  // Block-aware grading: independent from prompt score card.
  let finalScore = Math.round(
    typeScore * 0.4 +
    tagScore * 0.2 +
    orderScore * 0.15 +
    directionScore * 0.1 +
    safetyScore * 0.15
  );

  if(Number.isFinite(Number(rubricConfig?.minScore)) && rubricConfig.minScore >= 90){
    finalScore -= 2;
  }

  finalScore = clamp(finalScore, 0, 100);
  return {
    finalScore,
    failCount,
    warnCount,
    components: {
      typeScore,
      tagScore,
      orderScore,
      directionScore,
      safetyScore
    }
  };
}

function getExistingSandboxOutput(){
  const currentState = getCurrentRunState();
  const text = (D.output?.textContent || "").trim();
  if(!text) return "";
  if(currentState === "done" || currentState === "warning" || currentState === "blocked"){
    return text;
  }
  return "";
}

function setSubmitLoading(isLoading){
  if(!D.btnSubmit) return;
  D.btnSubmit.classList.toggle("is-loading", isLoading);
  if(isLoading){
    D.btnSubmit.disabled = true;
  }else{
    updateSubmitButtonState();
  }
}

function wait(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}

function ensureProtocolUrl(baseUrl){
  const text = String(baseUrl || "").trim();
  if(!text) return "";
  return /^https?:\/\//i.test(text) ? text : `http://${text}`;
}

function joinPath(baseUrl, path){
  const b = ensureProtocolUrl(baseUrl).replace(/\/+$/g, "");
  const p = String(path || "").replace(/^\/+/g, "");
  return `${b}/${p}`;
}

function localOpenAICompatURL(baseUrl){
  const clean = ensureProtocolUrl(baseUrl).replace(/\/+$/g, "");
  if(/\/v1$/i.test(clean)) return `${clean}/chat/completions`;
  return `${clean}/v1/chat/completions`;
}

async function fetchWithTimeout(url, options = {}, timeoutMs = 25000){
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try{
    const response = await fetch(url, { ...options, signal: controller.signal });
    return response;
  }finally{
    clearTimeout(timer);
  }
}

async function callOpenRouter(promptText, settings){
  const baseUrl = settings.openrouter.baseUrl || DEFAULT_AI_SETTINGS.openrouter.baseUrl;
  const apiKey = settings.openrouter.apiKey || "";
  const model = settings.openrouter.model || DEFAULT_AI_SETTINGS.openrouter.model;
  if(!apiKey) throw new Error(t("run_provider_missing").replace("{detail}", "OpenRouter API key"));
  if(!model) throw new Error(t("run_provider_missing").replace("{detail}", "OpenRouter model"));

  const url = joinPath(baseUrl, "chat/completions");
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`
  };
  if(window.location?.origin && /^https?:/i.test(window.location.origin)){
    headers["HTTP-Referer"] = window.location.origin;
  }
  headers["X-Title"] = "AI Mentor Teen";

  const response = await fetchWithTimeout(url, {
    method: "POST",
    headers,
    body: JSON.stringify({
      model,
      messages: [{ role: "user", content: promptText }],
      temperature: 0.4
    })
  }, 30000);
  if(!response.ok){
    const errBody = await response.text().catch(()=>"");
    throw new Error(`HTTP ${response.status}${errBody ? `: ${errBody.slice(0, 220)}` : ""}`);
  }
  const data = await response.json();
  const text = data?.choices?.[0]?.message?.content;
  if(!text || typeof text !== "string"){
    throw new Error("Invalid OpenRouter response format");
  }
  return { text, provider: "openrouter", model };
}

async function callLocalAI(promptText, settings){
  const baseUrl = settings.local.baseUrl || DEFAULT_AI_SETTINGS.local.baseUrl;
  const model = settings.local.model || DEFAULT_AI_SETTINGS.local.model;
  const endpointType = settings.local.endpointType === "openai_compat" ? "openai_compat" : "ollama_native";
  if(!model) throw new Error(t("run_provider_missing").replace("{detail}", "Local model"));

  if(endpointType === "openai_compat"){
    const url = localOpenAICompatURL(baseUrl);
    const response = await fetchWithTimeout(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model,
        messages: [{ role: "user", content: promptText }],
        temperature: 0.4
      })
    }, 30000);
    if(!response.ok){
      const errBody = await response.text().catch(()=>"");
      throw new Error(`HTTP ${response.status}${errBody ? `: ${errBody.slice(0, 220)}` : ""}`);
    }
    const data = await response.json();
    const text = data?.choices?.[0]?.message?.content;
    if(!text || typeof text !== "string"){
      throw new Error("Invalid local openai_compat response format");
    }
    return { text, provider: "local", model };
  }

  const url = joinPath(baseUrl, "api/chat");
  const response = await fetchWithTimeout(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model,
      messages: [{ role: "user", content: promptText }],
      stream: false
    })
  }, 30000);
  if(!response.ok){
    const errBody = await response.text().catch(()=>"");
    throw new Error(`HTTP ${response.status}${errBody ? `: ${errBody.slice(0, 220)}` : ""}`);
  }
  const data = await response.json();
  const text = data?.message?.content;
  if(!text || typeof text !== "string"){
    throw new Error("Invalid local ollama response format");
  }
  return { text, provider: "local", model };
}

async function callRealAI(promptText, settings){
  if(settings.provider === "openrouter"){
    return callOpenRouter(promptText, settings);
  }
  if(settings.provider === "local"){
    return callLocalAI(promptText, settings);
  }
  throw new Error("Mock provider does not call remote API");
}

function getFallbackErrorText(err){
  const msg = String(err?.message || err || "").trim();
  if(!msg) return "Unknown error";
  if(msg.toLowerCase().includes("failed to fetch")) return "Network/CORS";
  if(msg.toLowerCase().includes("abort")) return "Timeout";
  return msg;
}

function submitAssignment(){
  if(!activeAssignmentContext){
    setRun("warning");
    D.output.textContent = t("submit_no_assignment");
    return;
  }

  const lesson = lessonById(activeAssignmentContext.lessonId);
  if(!lesson){
    setRun("warning");
    D.output.textContent = t("submit_no_assignment");
    saveActiveAssignmentContext(null);
    return;
  }

  const blocks = getBlocks();
  const custom = D.customInput.value;
  const promptText = composePreview(blocks, custom);
  if(!promptText.trim()){
    setRun("warning");
    D.output.textContent = t("run_empty_prompt");
    return;
  }

  const scoreResult = score(blocks, custom);
  const safetyResult = safety(blocks, custom);
  const existingSandbox = getExistingSandboxOutput();
  const latestOutputForPrompt = latestRunMeta && latestRunMeta.promptText === promptText ? latestRunMeta : null;
  const delay = Math.floor(600 + Math.random() * 601);

  setSubmitLoading(true);
  setRun("running");
  D.output.textContent = t("submit_running");

  setTimeout(() => {
    const sandboxOutputText = (latestOutputForPrompt?.text || existingSandbox || buildMockAnswer(blocks, custom)).trim();
    const rubric = normalizeRubricRequirements(activeAssignmentContext.rubric || getLessonRubric(lesson), lesson.id);
    const rubricResult = evaluateRubricResult(blocks, rubric);
    const scoreEval = evaluateSubmissionScore(safetyResult, rubricResult, rubric);
    const hasSafetyFail = scoreEval.failCount > 0;
    const missingTypeLabels = rubricResult.typeCoverage.missing.map(getTypeLabel);
    const rubricFail = Boolean(rubricResult.rubricFail);
    const passed = scoreEval.finalScore >= rubric.minScore && (!rubric.noFailSafety || !hasSafetyFail) && !rubricFail;
    const rubricLabel = passed ? t("rubric_status_pass") : t("rubric_status_fail");

    const summary = hasSafetyFail
      ? (uiLang === "vi"
        ? "Prompt có FAIL an toàn nên chưa đạt. Hãy sửa rủi ro trước khi dùng rộng."
        : "Safety FAIL detected, so this submission does not pass. Fix risks before wider use.")
      : rubricFail
        ? (rubricResult.wrongDirection
          ? rubricResult.wrongDirection
          : missingTypeLabels.length
            ? `${t("rubric_missing_label")}: ${missingTypeLabels.join(", ")}.`
            : t("rubric_order_bad"))
      : passed
        ? (uiLang === "vi"
          ? "Prompt đạt tiêu chí chấm điểm, cấu trúc rõ và đủ điều kiện nộp."
          : "Prompt meets the scoring criteria with clear structure and passes submission.")
        : (uiLang === "vi"
          ? `Bài nộp chưa đạt mốc ${rubric.minScore}/100, cần bổ sung thêm thành phần còn thiếu theo tiêu chí.`
          : `Submission is below ${rubric.minScore}/100. Add missing rubric components.`);

    const rubricSuggestions = [];
    if(missingTypeLabels.length){
      rubricSuggestions.push(`${t("rubric_missing_label")}: ${missingTypeLabels.join(", ")}.`);
    }
    if(!rubricResult.tagMatch.isMatched && rubricResult.tagMatch.requiredAny.length){
      rubricSuggestions.push(
        uiLang === "vi"
          ? `Bổ sung định hướng phù hợp: ${rubricResult.tagMatch.requiredAny.join(" / ")}.`
          : `Add the expected direction tag: ${rubricResult.tagMatch.requiredAny.join(" / ")}.`
      );
    }
    if(rubricResult.wrongDirection){
      rubricSuggestions.push(rubricResult.wrongDirection);
    }
    if(!rubricResult.structureOrderOk){
      rubricSuggestions.push(t("rubric_order_bad"));
    }
    const suggestions = uniq([
      ...rubricSuggestions,
      ...buildSubmitSuggestions(blocks, scoreResult, safetyResult)
    ]).slice(0, 3);
    const safetySummary = {
      failCount: scoreEval.failCount,
      warnCount: scoreEval.warnCount,
      passCount: safetyResult.checks.filter(c => c.status === "pass").length
    };
    const attempt = {
      score: scoreEval.finalScore,
      passed,
      submittedAt: Date.now(),
      notes: summary,
      promptText,
      suggestions,
      promptScore: scoreResult.total,
      safetyScore: safetyResult.score,
      safetyRisk: safetyResult.riskLevel,
      safetyHasFail: hasSafetyFail,
      safetySummary,
      sandboxOutputText,
      rubricResult: {
        passed: !rubricFail,
        missingTypes: rubricResult.typeCoverage.missing,
        requiredTypes: rubricResult.typeCoverage.required,
        requiredTagsAny: rubricResult.tagMatch.requiredAny,
        matchedTags: rubricResult.tagMatch.matched,
        forbiddenHits: rubricResult.forbiddenHits,
        structureOrderOk: rubricResult.structureOrderOk,
        wrongDirection: rubricResult.wrongDirection
      },
      rubricMinScore: rubric.minScore,
      rubricStatus: rubricLabel,
      criteria: {
        clarity: Math.round((scoreResult.criteria.clarity.score / scoreResult.criteria.clarity.max) * 100),
        completeness: Math.round((scoreResult.criteria.complete.score / scoreResult.criteria.complete.max) * 100),
        structure: Math.round((scoreResult.criteria.structure.score / scoreResult.criteria.structure.max) * 100),
        age: Math.round((scoreResult.criteria.agefit.score / scoreResult.criteria.agefit.max) * 100),
        safety: Math.round(safetyResult.score)
      },
      canvasBlocks: canvas.map(item => ({ blockId: item.blockId, content: item.content })),
      customInput: custom,
      mode,
      lessonId: activeAssignmentContext.lessonId,
      assignmentId: activeAssignmentContext.assignmentId || getLessonAssignmentId(activeAssignmentContext.lessonId),
      provider: latestOutputForPrompt?.provider || getEffectiveAISettings().provider || "mock",
      model: latestOutputForPrompt?.model || getActiveProviderModel(getEffectiveAISettings().provider),
      latencyMs: Number.isFinite(Number(latestOutputForPrompt?.latencyMs)) ? Number(latestOutputForPrompt.latencyMs) : null
    };

    const lessonId = activeAssignmentContext.lessonId;
    const assignmentId = activeAssignmentContext.assignmentId || getLessonAssignmentId(lessonId);
    if(!practiceProgress[lessonId] || typeof practiceProgress[lessonId] !== "object"){
      practiceProgress[lessonId] = {};
    }
    const oldEntry = practiceProgress[lessonId][assignmentId] && typeof practiceProgress[lessonId][assignmentId] === "object"
      ? practiceProgress[lessonId][assignmentId]
      : { bestScore: 0, attemptsCount: 0, lastAttempt: null, history: [] };
    const oldHistory = Array.isArray(oldEntry.history) ? oldEntry.history : [];
    const nextHistory = [...oldHistory, {
      lessonId,
      assignmentId,
      score: attempt.score,
      passed: attempt.passed,
      submittedAt: attempt.submittedAt,
      safetySummary: attempt.safetySummary
    }].slice(-10);
    practiceProgress[lessonId][assignmentId] = {
      lastAttempt: attempt,
      bestScore: Math.max(Number(oldEntry.bestScore || 0), attempt.score),
      attemptsCount: Number(oldEntry.attemptsCount || 0) + 1,
      history: nextHistory
    };
    savePracticeProgress();

    if(!litProgress.completedLessons.includes(lessonId)){
      litProgress.completedLessons.push(lessonId);
    }
    litProgress.bestScore[lessonId] = Math.max(Number(litProgress.bestScore[lessonId] || 0), attempt.score);
    litProgress.lastOpenLesson = lessonId;
    saveLiteracyProgress();

    const passSummary = uiLang === "vi"
      ? "Prompt đạt tiêu chí chấm điểm, cấu trúc rõ và đủ điều kiện nộp."
      : "Prompt meets the scoring criteria, has clear structure, and is ready for submission.";
    const outputText = passed
      ? [
          t("submit_pass"),
          formatText("submit_saved_for", { lesson: lesson.title }),
          formatText("submit_summary_line", { summary: passSummary })
        ].join("\n")
      : t("submit_fail");

    setRun(hasSafetyFail ? "blocked" : passed ? "done" : "warning");
    D.output.textContent = outputText;

    renderLiteracy();
    renderProgressDashboard();
    updateAssignmentBanner();
    setSubmitLoading(false);
  }, delay);
}

function recordPracticeAttempt(lessonId, scoreResult, safetyResult, blocked = false){
  if(!lessonId || !lessonById(lessonId)) return null;
  const rubric = blocked ? {
    clarity: 0,
    completeness: 0,
    safety: Math.max(0, Math.round(Number(safetyResult?.score || 0))),
    structure: 0,
    age: 0
  } : {
    clarity: Math.round((scoreResult.criteria.clarity.score / scoreResult.criteria.clarity.max) * 100),
    completeness: Math.round((scoreResult.criteria.complete.score / scoreResult.criteria.complete.max) * 100),
    safety: Math.max(0, Math.round(Number(safetyResult.score || 0))),
    structure: Math.round((scoreResult.criteria.structure.score / scoreResult.criteria.structure.max) * 100),
    age: Math.round((scoreResult.criteria.agefit.score / scoreResult.criteria.agefit.max) * 100)
  };
  const total = blocked
    ? Math.round((rubric.safety) / 5)
    : Math.round((rubric.clarity + rubric.completeness + rubric.safety + rubric.structure + rubric.age) / 5);
  const suggestions = buildPracticeSuggestions(scoreResult, safetyResult);
  const attempt = {
    at: Date.now(),
    total: clamp(total, 0, 100),
    blocked: Boolean(blocked),
    rubric,
    suggestions
  };

  const list = Array.isArray(litProgress.practiceAttempts[lessonId]) ? litProgress.practiceAttempts[lessonId] : [];
  list.push(attempt);
  litProgress.practiceAttempts[lessonId] = list.slice(-20);
  litProgress.bestScore[lessonId] = Math.max(Number(litProgress.bestScore[lessonId] || 0), attempt.total);
  if(!litProgress.completedLessons.includes(lessonId)){
    litProgress.completedLessons.push(lessonId);
  }
  litProgress.lastOpenLesson = lessonId;
  saveLiteracyProgress();
  return attempt;
}

/* ── DRAFT (localStorage) ──────────────────────────────────────── */
function draft(notify=false){
  try{localStorage.setItem(DRAFT_KEY,JSON.stringify({mode,canvas,custom:D.customInput.value}))}catch(_){}
  if(notify){setRun("done");D.output.textContent=t("draft_saved")}
}
function loadDraft(){
  try{
    const d=JSON.parse(localStorage.getItem(DRAFT_KEY)||"{}");
    if(d.mode==="student"||d.mode==="studio")mode=d.mode;
    if(Array.isArray(d.canvas)){
      canvas=d.canvas.map(e=>{const s=libById(e.blockId);return s?{uid:e.uid||uid(),blockId:e.blockId,content:typeof e.content==="string"?e.content:s.content}:null}).filter(Boolean);
    }
    if(typeof d.custom==="string")D.customInput.value=d.custom;
  }catch(_){try{localStorage.removeItem(DRAFT_KEY)}catch(e){}}
}

/* ── RUN MOCK ──────────────────────────────────────────────────── */
function runMock(){
  const blocks=getBlocks(),custom=D.customInput.value;
  const promptText = composePreview(blocks, custom);
  const startedAt = performance.now();
  if(!composePreview(blocks,custom).trim()){
    setRun("warning");
    D.output.textContent=t("run_empty_prompt");
    latestRunMeta = null;
    return;
  }

  const sf=safety(blocks,custom);
  const sc=score(blocks,custom);
  const severe = getSevereSafetyIssue(blocks, custom, sf);
  const delay = Math.floor(600 + Math.random()*601);

  if(severe.blocked){
    if(activePracticeLessonId){
      recordPracticeAttempt(activePracticeLessonId, sc, sf, true);
    }
    setRun("blocked");
    D.output.textContent =
      `⛔ Chặn chạy: ${severe.reason}\n` +
      `• ${severe.fixes[0]}\n` +
      `• ${severe.fixes[1]}\n` +
      `• ${severe.fixes[2]}`;
    latestRunMeta = {
      provider: "mock",
      model: "mock",
      latencyMs: Math.round(performance.now() - startedAt),
      real: false,
      promptText,
      text: D.output.textContent,
      blocked: true,
      at: Date.now()
    };
    return;
  }

  setRun("running");
  D.output.textContent = formatText("run_provider_calling", { provider: getProviderLabel("mock") });

  setTimeout(()=>{
    const answer = buildMockAnswer(blocks, custom);
    const bLabel={low:"thấp",med:"trung bình",high:"tốt"}[sc.band];
    const hasWarn = sf.riskLevel==="warn" || sf.checks.some(c=>c.status==="warn");
    const safeLabel = sf.riskLevel==="safe" ? "An toàn" : hasWarn ? "Cần xem lại" : "Không an toàn";
    if(activePracticeLessonId){
      recordPracticeAttempt(activePracticeLessonId, sc, sf, false);
    }
    const latencyMs = Math.max(1, Math.round(performance.now() - startedAt));

    if(hasWarn){
      setRun("warning");
      D.output.textContent =
        `${answer}\n\n` +
        `Lưu ý an toàn: Prompt còn điểm cần xem lại, nên chỉnh trước khi dùng rộng.\n` +
        `Tóm tắt đánh giá: Điểm ${sc.total}/100 (${bLabel}), An toàn: ${safeLabel}.`;
      latestRunMeta = {
        provider: "mock",
        model: "mock",
        latencyMs,
        real: false,
        promptText,
        text: answer,
        blocked: false,
        at: Date.now()
      };
      return;
    }

    setRun("done");
    D.output.textContent =
      `${answer}\n\n` +
      `Tóm tắt đánh giá: Điểm ${sc.total}/100 (${bLabel}), An toàn: ${safeLabel}.`;
    latestRunMeta = {
      provider: "mock",
      model: "mock",
      latencyMs,
      real: false,
      promptText,
      text: answer,
      blocked: false,
      at: Date.now()
    };
  },delay);
}

async function runPrompt(){
  const blocks = getBlocks();
  const custom = D.customInput.value;
  const promptText = composePreview(blocks, custom);
  const runtimeSettings = getEffectiveAISettings();
  if(!promptText.trim()){
    setRun("warning");
    D.output.textContent = t("run_empty_prompt");
    latestRunMeta = null;
    return;
  }

  const sf = safety(blocks, custom);
  const sc = score(blocks, custom);
  const severe = getSevereSafetyIssue(blocks, custom, sf);
  if(severe.blocked){
    setRun("blocked");
    D.output.textContent =
      `⛔ Chặn chạy: ${severe.reason}\n` +
      `• ${severe.fixes[0]}\n` +
      `• ${severe.fixes[1]}\n` +
      `• ${severe.fixes[2]}`;
    latestRunMeta = {
      provider: runtimeSettings.provider,
      model: getActiveProviderModel(runtimeSettings.provider),
      latencyMs: 0,
      real: false,
      promptText,
      text: D.output.textContent,
      blocked: true,
      at: Date.now()
    };
    return;
  }

  if(runtimeSettings.provider === "mock"){
    runMock();
    return;
  }

  const minDelay = Math.floor(600 + Math.random() * 601);
  const startedAt = performance.now();
  setRun("running");
  D.output.textContent = formatText("run_provider_calling", { provider: getProviderLabel(runtimeSettings.provider) });

  try{
    const result = await callRealAI(promptText, runtimeSettings);
    const elapsed = Math.max(1, Math.round(performance.now() - startedAt));
    const waitMs = Math.max(0, minDelay - elapsed);
    if(waitMs > 0) await wait(waitMs);

    const hasWarn = sf.riskLevel === "warn" || sf.checks.some(c => c.status === "warn");
    const safeLabel = sf.riskLevel === "safe" ? "An toàn" : hasWarn ? "Cần xem lại" : "Không an toàn";
    const bLabel = { low: "thấp", med: "trung bình", high: "tốt" }[sc.band];
    if(activePracticeLessonId){
      recordPracticeAttempt(activePracticeLessonId, sc, sf, false);
    }

    latestRunMeta = {
      provider: result.provider,
      model: result.model || getActiveProviderModel(result.provider),
      latencyMs: elapsed,
      real: true,
      promptText,
      text: result.text,
      blocked: false,
      at: Date.now()
    };

    if(hasWarn){
      setRun("warning");
      D.output.textContent =
        `${result.text}\n\n` +
        `Lưu ý an toàn: Prompt còn điểm cần xem lại, nên chỉnh trước khi dùng rộng.\n` +
        `Tóm tắt đánh giá: Điểm ${sc.total}/100 (${bLabel}), An toàn: ${safeLabel}.`;
      return;
    }

    setRun("done");
    D.output.textContent =
      `${result.text}\n\n` +
      `Tóm tắt đánh giá: Điểm ${sc.total}/100 (${bLabel}), An toàn: ${safeLabel}.`;
  }catch(err){
    const elapsed = Math.max(1, Math.round(performance.now() - startedAt));
    const waitMs = Math.max(0, minDelay - elapsed);
    if(waitMs > 0) await wait(waitMs);
    const errorText = getFallbackErrorText(err);
    const fallback = buildMockAnswer(blocks, custom);
    latestRunMeta = {
      provider: runtimeSettings.provider,
      model: getActiveProviderModel(runtimeSettings.provider),
      latencyMs: elapsed,
      real: false,
      promptText,
      text: fallback,
      blocked: false,
      at: Date.now(),
      error: errorText
    };
    setRun("warning");
    D.output.textContent =
      `${formatText("run_provider_error", { detail: errorText })}\n` +
      `→ ${uiLang === "vi" ? "Đã dùng mock fallback." : "Using mock fallback."}\n\n` +
      `${fallback}`;
  }
}

async function testAIConnection(){
  if(!D.aiSettingsTest) return;
  const draftSettings = readAISettingsFromForm();
  if(draftSettings.provider === "mock"){
    setRun("done");
    D.output.textContent = t("settings_test_ok");
    return;
  }
  D.aiSettingsTest.disabled = true;
  setRun("running");
  D.output.textContent = t("settings_test_running");
  try{
    const result = await callRealAI(uiLang === "vi" ? "Trả lời ngắn: OK" : "Reply short: OK", draftSettings);
    setRun("done");
    D.output.textContent = `${t("settings_test_ok")}\n${result.text}`;
  }catch(err){
    setRun("warning");
    D.output.textContent = formatText("settings_test_fail", { detail: getFallbackErrorText(err) });
  }finally{
    D.aiSettingsTest.disabled = false;
  }
}

/* ── EVENTS ────────────────────────────────────────────────────── */
function bindEvents(){
  D.themeBtns.forEach(btn => btn.addEventListener("click", ()=>{
    const next = btn.dataset.theme;
    if(next !== "dark" && next !== "light") return;
    uiTheme = next;
    applyTheme();
    if(activeRoute === "progress"){
      renderProgressDashboard();
    }
    saveUIPrefs();
  }));

  D.langBtns.forEach(btn => btn.addEventListener("click", ()=>{
    const next = btn.dataset.lang;
    if(next !== "vi" && next !== "en") return;
    uiLang = next;
    applyLanguage();
    renderLibrary();
    evaluate();
    renderLiteracy();
    renderProgressDashboard();
    setRun(getCurrentRunState());
    saveUIPrefs();
  }));

  D.routeBtns.forEach(btn => btn.addEventListener("click", () => {
    setRoute(btn.dataset.route);
  }));

  // search
  D.search.addEventListener("input",()=>{search=D.search.value;renderLibrary()});

  // library: click + drag
  D.library.addEventListener("click",e=>{
    const delBtn = e.target.closest("[data-del-custom]");
    if(delBtn){
      e.preventDefault();
      e.stopPropagation();
      deleteCustomBlock(delBtn.dataset.delCustom);
      return;
    }
    const c=e.target.closest("[data-add-block]");
    if(c) addBlock(c.dataset.addBlock);
  });
  D.library.addEventListener("keydown", (e)=>{
    const card = e.target.closest("[data-add-block]");
    if(!card) return;
    if(e.target.closest(".block-op-btn")) return;
    if(e.key === "Enter" || e.key === " "){
      e.preventDefault();
      addBlock(card.dataset.addBlock);
    }
  });
  D.library.addEventListener("dragstart",e=>{
    if(e.target.closest(".block-op-btn")){
      e.preventDefault();
      return;
    }
    const c=e.target.closest("[data-drag-block-id]");if(!c)return;
    dragState={type:"lib",blockId:c.dataset.dragBlockId};
    c.classList.add("is-dragging");e.dataTransfer.effectAllowed="copy";
  });
  D.library.addEventListener("dragend",e=>{
    const c=e.target.closest("[data-drag-block-id]");if(c)c.classList.remove("is-dragging");dragState=null;
    setLibraryDeleteDropState(false,false);
  });

  // canvas: click (remove), textarea edit, drag
  D.canvas.addEventListener("click",e=>{
    const rm=e.target.dataset.rm;if(rm)removeBlock(rm);
  });
  const onTA=e=>{
    const ta=e.target;if(!(ta instanceof HTMLTextAreaElement))return;
    const it=canvas.find(x=>x.uid===ta.dataset.edit);if(!it)return;
    it.content=ta.value;evaluate();draft(false);
  };
  D.canvas.addEventListener("input",onTA);D.canvas.addEventListener("change",onTA);

  D.canvas.addEventListener("dragstart",e=>{
    const c=e.target.closest(".canvas-item");if(!c)return;
    dragState={type:"canvas",uid:c.dataset.cid};c.classList.add("is-dragging");e.dataTransfer.effectAllowed="move";
    setLibraryDeleteDropState(true,false);
  });
  D.canvas.addEventListener("dragend",()=>{
    D.canvas.classList.remove("drag-over");
    D.canvas.querySelectorAll(".canvas-item").forEach(n=>n.classList.remove("is-dragging","drag-top","drag-bot"));
    setLibraryDeleteDropState(false,false);
    dragState=null;
  });
  D.canvas.addEventListener("dragover",e=>{
    e.preventDefault();D.canvas.classList.add("drag-over");
    const t=e.target instanceof Element?e.target.closest(".canvas-item"):null;
    D.canvas.querySelectorAll(".canvas-item").forEach(n=>n.classList.remove("drag-top","drag-bot"));
    if(!t)return;
    const r=t.getBoundingClientRect(),after=e.clientY>r.top+r.height/2;
    t.classList.add(after?"drag-bot":"drag-top");
  });
  D.canvas.addEventListener("dragleave",e=>{
    if(!D.canvas.contains(e.relatedTarget)){D.canvas.classList.remove("drag-over");D.canvas.querySelectorAll(".canvas-item").forEach(n=>n.classList.remove("drag-top","drag-bot"))}
  });
  D.canvas.addEventListener("drop",e=>{
    e.preventDefault();D.canvas.classList.remove("drag-over");
    const t=e.target instanceof Element?e.target.closest(".canvas-item"):null;
    if(!dragState)return;
    if(dragState.type==="lib"){addBlock(dragState.blockId);dragState=null;return}
    if(dragState.type==="canvas"&&t?.dataset.cid){
      const r=t.getBoundingClientRect(),after=e.clientY>r.top+r.height/2;
      if(moveDrop(dragState.uid,t.dataset.cid,after)){renderCanvas();evaluate();draft(false)}
    }
    setLibraryDeleteDropState(false,false);
    dragState=null;
  });

  if(D.libraryPanel){
    D.libraryPanel.addEventListener("dragenter", e=>{
      if(!dragState || dragState.type !== "canvas") return;
      e.preventDefault();
      setLibraryDeleteDropState(true, true);
    });
    D.libraryPanel.addEventListener("dragover", e=>{
      if(!dragState || dragState.type !== "canvas") return;
      e.preventDefault();
      if(e.dataTransfer) e.dataTransfer.dropEffect = "move";
      setLibraryDeleteDropState(true, true);
    });
    D.libraryPanel.addEventListener("dragleave", e=>{
      if(!dragState || dragState.type !== "canvas") return;
      const next = e.relatedTarget;
      if(next instanceof Node && D.libraryPanel.contains(next)) return;
      setLibraryDeleteDropState(true, false);
    });
    D.libraryPanel.addEventListener("drop", e=>{
      if(!dragState || dragState.type !== "canvas") return;
      e.preventDefault();
      e.stopPropagation();
      const uid = dragState.uid;
      setLibraryDeleteDropState(false, false);
      dragState = null;
      if(uid) removeBlock(uid);
    });
  }

  if(D.btnCustomOpen){
    D.btnCustomOpen.addEventListener("click", ()=>openCustomModal(""));
  }
  if(D.btnAISettings){
    D.btnAISettings.addEventListener("click", openAISettingsModal);
  }
  if(D.aiProvider){
    D.aiProvider.addEventListener("change", syncAISettingsProviderFields);
  }
  if(D.aiSettingsSave){
    D.aiSettingsSave.addEventListener("click", ()=>{
      aiSettings = readAISettingsFromForm();
      saveAISettings();
      closeAISettingsModal();
      setRun("done");
      D.output.textContent = t("settings_saved");
    });
  }
  if(D.aiSettingsCancel){
    D.aiSettingsCancel.addEventListener("click", closeAISettingsModal);
  }
  if(D.aiSettingsClose){
    D.aiSettingsClose.addEventListener("click", closeAISettingsModal);
  }
  if(D.aiSettingsModal){
    D.aiSettingsModal.addEventListener("click", (e)=>{
      if(e.target === D.aiSettingsModal) closeAISettingsModal();
    });
  }
  if(D.aiSettingsForm){
    D.aiSettingsForm.addEventListener("submit", (e)=>{
      e.preventDefault();
      aiSettings = readAISettingsFromForm();
      saveAISettings();
      closeAISettingsModal();
      setRun("done");
      D.output.textContent = t("settings_saved");
    });
  }
  if(D.aiSettingsTest){
    D.aiSettingsTest.addEventListener("click", testAIConnection);
  }
  if(D.aiModelSuggestBtn){
    D.aiModelSuggestBtn.addEventListener("click", ()=>toggleModelSuggestions());
  }
  if(D.aiModelSearch){
    D.aiModelSearch.addEventListener("input", ()=>renderModelSuggestionList());
  }
  if(D.customCancel){
    D.customCancel.addEventListener("click", (e)=>{
      e.preventDefault();
      closeCustomModal();
    });
  }
  if(D.customModalClose){
    D.customModalClose.addEventListener("click", (e)=>{
      e.preventDefault();
      closeCustomModal();
    });
  }
  if(D.customModal){
    D.customModal.addEventListener("click", (e)=>{
      if(e.target === D.customModal) closeCustomModal();
    });
  }
  if(D.customForm){
    D.customForm.addEventListener("submit", (e)=>{
      e.preventDefault();
      submitCustomBlockForm();
    });
  }
  if(D.customName){
    D.customName.addEventListener("input", ()=>{
      D.customName.classList.remove("is-invalid");
      if(D.customValidationMsg && !D.customValidationMsg.hidden){
        D.customValidationMsg.hidden = true;
        D.customValidationMsg.textContent = "";
      }
    });
  }
  if(D.customContent){
    D.customContent.addEventListener("input", ()=>{
      D.customContent.classList.remove("is-invalid");
      if(D.customValidationMsg && !D.customValidationMsg.hidden){
        D.customValidationMsg.hidden = true;
        D.customValidationMsg.textContent = "";
      }
    });
  }
  document.addEventListener("keydown", (e)=>{
    if(e.key === "Escape"){
      if(closeOpenDropdowns()){
        e.preventDefault();
        return;
      }
      if(D.customModal && !D.customModal.hidden){
        closeCustomModal();
      }
      if(D.aiSettingsModal && !D.aiSettingsModal.hidden){
        closeAISettingsModal();
      }
      if(D.litDoneModal && !D.litDoneModal.hidden){
        closeDoneModal();
      }
    }
  });

  // custom input
  D.customInput.addEventListener("input",()=>{evaluate();draft(false)});

  // mode
  D.modeBtns.forEach(b=>b.addEventListener("click",()=>{
    mode=b.dataset.mode;
    D.modeBtns.forEach(x=>x.classList.toggle("active",x.dataset.mode===mode));
    updateModeDependentUI();
    evaluate();draft(false);
  }));

  // header buttons
  $("btn-run").addEventListener("click",runPrompt);
  if(D.btnSubmit){
    D.btnSubmit.addEventListener("click", submitAssignment);
  }
  $("btn-save").addEventListener("click",()=>draft(true));
  $("btn-reset").addEventListener("click",()=>{
    if(activeAssignmentContext){
      const resetAll = window.confirm(t("confirm_reset_assignment"));
      canvas=[];D.customInput.value="";
      if(resetAll){
        saveActiveAssignmentContext(null);
        assignmentBannerCollapsed = false;
      }
      try{localStorage.removeItem(DRAFT_KEY)}catch(_){}
      renderCanvas();
      evaluate();
      updateAssignmentBanner();
      setRun("idle");
      D.output.textContent=t("reset_done");
      return;
    }
    const ok = window.confirm(t("confirm_reset"));
    if(!ok) return;
    canvas=[];D.customInput.value="";
    try{localStorage.removeItem(DRAFT_KEY)}catch(_){}
    renderCanvas();evaluate();setRun("idle");D.output.textContent=t("reset_done");
  });
  $("btn-copy").addEventListener("click",()=>{
    const pt=composePreview(getBlocks(),D.customInput.value);
    if(!pt.trim()){setRun("warning");D.output.textContent=t("copy_empty");return}
    navigator.clipboard.writeText(pt).then(()=>{setRun("done");D.output.textContent=t("copy_ok")}).catch(()=>{setRun("warning");D.output.textContent=t("copy_fail")});
  });

  if(D.litFilters){
    D.litFilters.addEventListener("click", (e)=>{
      const btn = e.target.closest("[data-domain]");
      if(!btn) return;
      litDomainFilter = btn.dataset.domain || "all";
      const filtered = getFilteredLessons();
      if(!filtered.some(l => l.id === litSelectedLessonId) && filtered.length){
        litSelectedLessonId = filtered[0].id;
      }
      renderLiteracy();
    });
  }

  if(D.litDifficultyFilters){
    D.litDifficultyFilters.addEventListener("click", (e)=>{
      const btn = e.target.closest("[data-difficulty]");
      if(!btn) return;
      litDifficultyFilter = btn.dataset.difficulty || "all";
      const filtered = getFilteredLessons();
      if(!filtered.some(l => l.id === litSelectedLessonId) && filtered.length){
        litSelectedLessonId = filtered[0].id;
      }
      renderLiteracy();
    });
  }

  if(D.litSearchInput){
    D.litSearchInput.addEventListener("input", (e)=>{
      litSearchQuery = String(e.target.value || "").trim().toLowerCase();
      const filtered = getFilteredLessons();
      if(!filtered.some(l => l.id === litSelectedLessonId) && filtered.length){
        litSelectedLessonId = filtered[0].id;
      }
      renderLitLessonList();
      renderLitDetail();
    });
  }

  if(D.litLessonList){
    D.litLessonList.addEventListener("click", (e)=>{
      const lessonBtn = e.target.closest("[data-lesson-id]");
      if(!lessonBtn) return;
      litSelectedLessonId = lessonBtn.dataset.lessonId;
       litProgress.lastOpenLesson = litSelectedLessonId;
       saveLiteracyProgress();
      renderLitLessonList();
      renderLitDetail();
    });
  }
  if(D.litDoneList){
    D.litDoneList.addEventListener("click", (e)=>{
      const btn = e.target.closest("[data-open-lesson]");
      if(!btn) return;
      openLessonInLiteracy(btn.dataset.openLesson);
    });
  }
  if(D.litDoneExpand){
    D.litDoneExpand.addEventListener("click", openDoneModal);
  }
  if(D.litDoneModalClose){
    D.litDoneModalClose.addEventListener("click", ()=>closeDoneModal());
  }
  if(D.litDoneModalCloseBtn){
    D.litDoneModalCloseBtn.addEventListener("click", ()=>closeDoneModal());
  }
  if(D.litDoneModal){
    D.litDoneModal.addEventListener("click", (e)=>{
      if(e.target === D.litDoneModal){
        closeDoneModal();
      }
    });
  }
  if(D.litDoneModalList){
    D.litDoneModalList.addEventListener("click", (e)=>{
      const btn = e.target.closest("[data-open-lesson]");
      if(!btn) return;
      closeDoneModal(false);
      openLessonInLiteracy(btn.dataset.openLesson);
    });
  }

  if(D.litDetail){
    D.litDetail.addEventListener("click", (e)=>{
      const actionBtn = e.target.closest("[data-action]");
      if(!actionBtn) return;
      const lessonId = actionBtn.dataset.lessonId;
      if(actionBtn.dataset.action === "quiz-choice"){
        selectQuizChoice(lessonId, actionBtn.dataset.questionIndex, actionBtn.dataset.choiceIndex);
      }
      if(actionBtn.dataset.action === "grade-quiz"){
        gradeLessonQuiz(lessonId);
      }
      if(actionBtn.dataset.action === "start-assignment"){
        startLessonAssignment(lessonId);
      }
      if(actionBtn.dataset.action === "reopen-assignment"){
        startLessonAssignment(lessonId);
      }
    });
  }

  if(D.assignmentChangeBtn){
    D.assignmentChangeBtn.addEventListener("click", ()=>{
      if(activeAssignmentContext?.lessonId){
        openLessonInLiteracy(activeAssignmentContext.lessonId);
        return;
      }
      setRoute("literacy");
    });
  }
  if(D.assignmentHideBtn){
    D.assignmentHideBtn.addEventListener("click", ()=>{
      assignmentBannerCollapsed = !assignmentBannerCollapsed;
      updateAssignmentBanner();
    });
  }

  [D.progressDonutCanvas, D.progressLineCanvas, D.progressDomainCanvas, D.progressSafetyCanvas].forEach(bindChartTooltip);

  if(D.lineChartGoBuilder){
    D.lineChartGoBuilder.addEventListener("click", ()=>{
      setRoute("builder");
    });
  }

  window.addEventListener("resize", ()=>{
    if(activeRoute === "progress"){
      progressShouldAnimateCharts = false;
      renderProgressDashboard();
    }
  });
}

/* ── INIT ──────────────────────────────────────────────────────── */
function init(){
  loadUIPrefs();
  loadAISettings();
  initSharedDropdowns();
  applyTheme();
  applyLanguage();
  closeAISettingsModal(false);
  closeDoneModal(false);
  closeCustomModal();
  customBlocks = loadCustomBlocks();
  litProgress = loadLiteracyProgress();
  loadPracticeProgress();
  loadActiveAssignmentContext();
  if(lessonById(litProgress.lastOpenLesson)){
    litSelectedLessonId = litProgress.lastOpenLesson;
  }
  loadPracticeSession();
  loadDraft();
  D.modeBtns.forEach(b=>b.classList.toggle("active",b.dataset.mode===mode));
  updateModeDependentUI();
  renderLibrary();
  renderCanvas();
  evaluate();
  renderLiteracy();
  renderProgressDashboard();
  updateAssignmentBanner();
  setRun("idle");
  setRoute(activeRoute);
  bindEvents();
  updateSubmitButtonState();
}
init();

// expose for console debug
window._pb={score,safety,evaluate,canvas,LIBRARY};
