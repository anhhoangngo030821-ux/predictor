// Module thuật toán tính điểm ma trận đa trục và phân tích Bản Thể Tương Lai
import { ARCHETYPES } from "../data/archetypes.js";

// Vector trọng số chuẩn hóa của từng Archetype trên 6 trục: [vision, execution, innovation, influence, wealth, wellBeing]
const ARCHETYPE_VECTORS = {
  visionary_leader: {
    weights: { vision: 32, execution: 26, innovation: 18, influence: 30, wealth: 24, wellBeing: 12 },
    primaryKey: "visionary_leader"
  },
  creative_pioneer: {
    weights: { vision: 24, execution: 16, innovation: 35, influence: 18, wealth: 16, wellBeing: 26 },
    primaryKey: "creative_pioneer"
  },
  strategic_mastermind: {
    weights: { vision: 32, execution: 28, innovation: 20, influence: 16, wealth: 34, wellBeing: 14 },
    primaryKey: "strategic_mastermind"
  },
  digital_solopreneur: {
    weights: { vision: 22, execution: 26, innovation: 28, influence: 14, wealth: 32, wellBeing: 26 },
    primaryKey: "digital_solopreneur"
  },
  empathetic_healer: {
    weights: { vision: 18, execution: 16, innovation: 14, influence: 35, wealth: 12, wellBeing: 36 },
    primaryKey: "empathetic_healer"
  },
  deep_tech_architect: {
    weights: { vision: 28, execution: 28, innovation: 34, influence: 12, wealth: 24, wellBeing: 16 },
    primaryKey: "deep_tech_architect"
  },
  harmonious_sage: {
    weights: { vision: 14, execution: 20, innovation: 14, influence: 20, wealth: 20, wellBeing: 38 },
    primaryKey: "harmonious_sage"
  },
  impact_catalyst: {
    weights: { vision: 28, execution: 24, innovation: 18, influence: 36, wealth: 14, wellBeing: 28 },
    primaryKey: "impact_catalyst"
  }
};

/**
 * Tính toán kết quả toàn diện dựa trên câu trả lời
 * @param {Object} userData - { name, ageGroup, currentRole, targetYear }
 * @param {Array} userAnswers - Mảng lựa chọn của các câu hỏi
 */
export function calculateFutureProfile(userData, userAnswers) {
  // 1. Khởi tạo điểm 6 trục
  const rawScores = {
    vision: 0,
    execution: 0,
    innovation: 0,
    influence: 0,
    wealth: 0,
    wellBeing: 0
  };

  // 2. Cộng dồn điểm từ câu trả lời
  userAnswers.forEach((ans) => {
    if (ans && ans.scores) {
      for (const [key, val] of Object.entries(ans.scores)) {
        if (rawScores[key] !== undefined) {
          rawScores[key] += val;
        }
      }
    }
  });

  // 3. Chuẩn hóa thang điểm % cho từng trục (Thang tối đa khoảng 30 điểm mỗi trục trong 16 câu)
  const maxPossible = 26; // Chuẩn hóa tiệm cận 100%
  const percentages = {};
  for (const [key, val] of Object.entries(rawScores)) {
    const pct = Math.min(99, Math.max(35, Math.round((val / maxPossible) * 100)));
    percentages[key] = pct;
  }

  // 4. Tính toán độ tương hợp (Correlation / Cosine Distance) với từng Archetype
  const matchScores = [];

  for (const [archId, data] of Object.entries(ARCHETYPE_VECTORS)) {
    let dotProduct = 0;
    let normA = 0;
    let normB = 0;

    for (const axis of ["vision", "execution", "innovation", "influence", "wealth", "wellBeing"]) {
      const userVal = percentages[axis];
      const targetVal = data.weights[axis];
      dotProduct += userVal * targetVal;
      normA += userVal * userVal;
      normB += targetVal * targetVal;
    }

    const similarity = dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
    const matchPercent = Math.min(98, Math.max(68, Math.round(similarity * 100)));

    matchScores.push({
      id: archId,
      matchPercent,
      archetype: ARCHETYPES[archId]
    });
  }

  // Sắp xếp giảm dần theo độ hòa hợp
  matchScores.sort((a, b) => b.matchPercent - a.matchPercent);

  const primaryMatch = matchScores[0];
  const secondaryMatch = matchScores[1];

  // 5. Tính toán các chỉ số bổ trợ
  const financialFreedomScore = Math.round((percentages.wealth * 0.6 + percentages.execution * 0.4));
  const socialInfluenceScore = Math.round((percentages.influence * 0.6 + percentages.vision * 0.4));
  const fulfillmentScore = Math.round((percentages.wellBeing * 0.7 + percentages.innovation * 0.3));
  const masteryScore = Math.round((percentages.execution * 0.5 + percentages.innovation * 0.5));

  return {
    userData: {
      name: userData.name || "Nhà Khai Phá Tương Lai",
      ageGroup: userData.ageGroup || "20 - 30 tuổi",
      currentRole: userData.currentRole || "Người Đang Tái Định Hình Bản Thân",
      horizon: userData.horizon || "5 - 10 năm tới",
      createdAt: new Date().toLocaleDateString("vi-VN")
    },
    primary: primaryMatch.archetype,
    primaryMatchPercent: primaryMatch.matchPercent,
    secondary: secondaryMatch.archetype,
    secondaryMatchPercent: secondaryMatch.matchPercent,
    rawScores,
    percentages,
    metrics: {
      financialFreedom: financialFreedomScore,
      socialInfluence: socialInfluenceScore,
      fulfillment: fulfillmentScore,
      mastery: masteryScore
    },
    allMatches: matchScores
  };
}
