import { describe, test, expect } from "vitest";
import {
  calculateMoodAverage,
  getMoodLabel,
  isStreakActive,
  getWeeklyTrend,
} from "./moodScore";

describe("calculateMoodAverage", () => {
  test("calcule la moyenne correctement", () => {
    const scores = [3, 4, 5, 2]; // Arrange
    const result = calculateMoodAverage(scores); // Act
    expect(result).toBe(3.5); // Assert
  });
  test("retourne 0 pour un tableau vide", () => {
    expect(calculateMoodAverage([])).toBe(0);
  });
  test("gere un seul score", () => {
    expect(calculateMoodAverage([4])).toBe(4);
  });
  test("arrondit a 1 decimale", () => {
    expect(calculateMoodAverage([1, 2, 3])).toBe(2);
  });
});

describe("getMoodLabel", () => {
  test("retourne Aucune donnee pour 0", () => {
    expect(getMoodLabel(0)).toBe("Aucune donnee");
  });
  test("retourne Difficile pour score < 2", () => {
    expect(getMoodLabel(1.3)).toBe("Difficile");
  });
  test("retourne Excellent pour score >= 4", () => {
    expect(getMoodLabel(4.5)).toBe("Excellent");
  });
  test("retourne Bien pour score entre 3 et 4", () => {
    expect(getMoodLabel(3.7)).toBe("Bien");
  });
});

describe("isStreakActive", () => {
  test("retourne true si entree < 24h", () => {
    const recent = new Date(Date.now() - 1000 * 60 * 60 * 2); // 2h
    expect(isStreakActive(recent)).toBe(true);
  });
  test("retourne false si entree > 24h", () => {
    const old = new Date(Date.now() - 1000 * 60 * 60 * 25); // 25h
    expect(isStreakActive(old)).toBe(false);
  });
});

test("improving si derniers > premiers de plus de 0.5", () => {
  const s = [2, 2, 2, 4, 4, 4];
  expect(getWeeklyTrend(s)).toBe("improving");
});
test("stable si moins de 6 scores", () => {
  expect(getWeeklyTrend([1, 2, 3])).toBe("stable");
});
