import fs from "fs";
import path from "path";

const replaceInFile = (filePath, searchValue, replaceValue) => {
  const fullPath = path.resolve(process.cwd(), filePath);
  if (!fs.existsSync(fullPath)) return;
  const content = fs.readFileSync(fullPath, "utf8");
  fs.writeFileSync(fullPath, content.replace(searchValue, replaceValue));
};
const replaceRegex = (filePath, searchRegex, replaceValue) => {
  const fullPath = path.resolve(process.cwd(), filePath);
  if (!fs.existsSync(fullPath)) return;
  const content = fs.readFileSync(fullPath, "utf8");
  fs.writeFileSync(fullPath, content.replace(searchRegex, replaceValue));
};

// Layout comments
replaceRegex(
  "app/admin/layout.tsx",
  /\/\/ Main content/g,
  "{/* Main content */}",
);

// Quotes
replaceRegex(
  "app/dashboard/events/page.tsx",
  /You haven't/g,
  "You haven&apos;t",
);
replaceRegex(
  "app/dashboard/submissions/page.tsx",
  /You haven't/g,
  "You haven&apos;t",
);
replaceRegex(
  "app/events/[slug]/page.tsx",
  /XINITY doesn't/g,
  "XINITY doesn&apos;t",
);
replaceRegex("app/events/[slug]/page.tsx", /we don't/g, "we don&apos;t");
replaceRegex("app/sponsors/page.tsx", /India's/g, "India&apos;s");
replaceRegex("app/sponsors/page.tsx", /We're/g, "We&apos;re");
replaceRegex("app/sponsors/page.tsx", /Don't/g, "Don&apos;t");
replaceRegex("components/shared/Footer.tsx", /India's/g, "India&apos;s");

replaceRegex(
  "components/public/HeroSection.tsx",
  /\/\/ eslint-disable-next-line react-hooks\/exhaustive-deps/g,
  "",
);
replaceRegex(
  "components/shared/ProjectCard.tsx",
  /map\(\(tech, i\)/g,
  "map((tech)",
);
replaceRegex(
  "components/shared/ProjectCard.tsx",
  /key=\{Math\.random\(\)\}/g,
  "key={tech}",
);
replaceRegex(
  "components/shared/SponsorModal.tsx",
  /\/\/ @ts-ignore/g,
  "// @ts-expect-error",
);

console.log("Fixed additional AST components");
