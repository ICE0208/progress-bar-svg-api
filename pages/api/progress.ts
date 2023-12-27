import { NextApiRequest, NextApiResponse } from "next";

// 진행률 색상
const RED = "#e66565";
const YELLOW = "#d1b14f";
const GREEN = "#4caf50";

// 퍼센트율 텍스트 색상
const TEXT_COLOR_WHITE = "#fff";
const TEXT_COLOR_BLACK = "#000";

// 진행바 배경 색상
const BACKGROUND_COLOR_WHITE = "#f0ebeb";
const BACKGROUND_COLOR_BLACK = "#454444";

/*
진행률에 대한 색상을 반환합니다.
[~32% : 빨간색, 33% ~ 69%: 노란색, 70%~ : 초록색]
*/
const getColorByProgress = (progress: number): string => {
  if (progress <= 32) {
    return RED; // 약간 더 진한 빨간색
  } else if (progress <= 69) {
    return YELLOW; // 약간 더 진한 노란색
  } else {
    return GREEN; // 약간 더 진한 초록색
  }
};

// 지정한 테마에 대한 텍스트 색상을 반환합니다.
const getTextColorByTheme = (theme: string): string => {
  return theme === "white" ? TEXT_COLOR_BLACK : TEXT_COLOR_WHITE;
};

// 지정한 테마에 대한 배경 색상을 반환합니다.
const getBackgroundColorByTheme = (theme: string): string => {
  return theme === "white" ? BACKGROUND_COLOR_WHITE : BACKGROUND_COLOR_BLACK;
};

// 반환할 SVG 텍스트를 생성합니다.
const generateSVG = (
  progress: number,
  width: number,
  height: number,
  theme: string,
  showText: boolean
): string => {
  const progressBarWidth = (progress / 100) * width;
  const progressBarColor = getColorByProgress(progress);
  const progressTextColor = getTextColorByTheme(theme);
  const backgroundColor = getBackgroundColorByTheme(theme);
  const progressText = `${progress}%`;

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <!-- Background -->
      <rect width="${width}" height="${height}" fill="${backgroundColor}" rx="4" />

      <!-- Progress -->
      <rect width="${progressBarWidth}" height="${height}" fill="${progressBarColor}" rx="4" />

      <!-- Progress Text -->
      ${
        showText
          ? `<text x="50%" y="50%" font-family="Tahoma" font-size="10" fill="${progressTextColor}" text-anchor="middle" dy="0.3em" font-weight="400">${progressText}</text>`
          : ""
      }
    </svg>
  `;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    progress = "0",
    width = "100",
    height = "20",
    theme = "black",
    showText = "true",
  } = req.query as {
    progress?: string;
    width?: string;
    height?: string;
    theme?: string;
    showText?: string;
  };

  const svgString = generateSVG(
    parseInt(progress, 10),
    parseInt(width, 10),
    parseInt(height, 10),
    theme,
    showText.toLowerCase() === "true"
  );

  res.setHeader("Content-Type", "image/svg+xml");
  res.send(svgString);
};
