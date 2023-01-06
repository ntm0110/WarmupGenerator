export type warmup = {
  lesson: number;
  title: string;
  url: string;
  imageUrl: string;
};

const lesson1Warmups: warmup[] = [
  {
    lesson: 1,
    title: "Lines: Superimposed lines",
    url: "https://drawabox.com/lesson/1/superimposedlines",
    imageUrl:
      "https://d15v304a6xpq4b.cloudfront.net/lesson_images/1e0fe7ae.jpg",
  },
  {
    lesson: 1,
    title: "Lines: Ghosted Lines",
    url: "https://drawabox.com/lesson/1/ghostedlines",
    imageUrl:
      "https://d15v304a6xpq4b.cloudfront.net/lesson_images/d120d6a5.jpg",
  },
  {
    lesson: 1,
    title: "Lines: Ghosted Planes",
    url: "https://drawabox.com/lesson/1/ghostedplanes",
    imageUrl:
      "https://d15v304a6xpq4b.cloudfront.net/lesson_images/5d408290.jpg",
  },
  {
    lesson: 1,
    title: "Ellipses: Tables of Ellipses",
    url: "https://drawabox.com/lesson/1/tablesofellipses",
    imageUrl:
      "https://d15v304a6xpq4b.cloudfront.net/lesson_images/f4181ea2.jpg",
  },
  {
    lesson: 1,
    title: "Ellipses: Ellipses in Planes",
    url: "https://drawabox.com/lesson/1/ellipsesinplanes",
    imageUrl:
      "https://d15v304a6xpq4b.cloudfront.net/lesson_images/1d32f0c9.jpg",
  },
  {
    lesson: 1,
    title: "Ellipses: Funnels",
    url: "https://drawabox.com/lesson/1/funnels",
    imageUrl:
      "https://d15v304a6xpq4b.cloudfront.net/lesson_images/c0447c15.jpg",
  },
  {
    lesson: 1,
    title: "Boxes: Plotted Perspective",
    url: "https://drawabox.com/lesson/1/plottedperspective",
    imageUrl:
      "https://d15v304a6xpq4b.cloudfront.net/lesson_images/6378cbe0.jpg",
  },
  {
    lesson: 1,
    title: "Boxes: Rough Perspective",
    url: "https://drawabox.com/lesson/1/roughperspective",
    imageUrl:
      "https://d15v304a6xpq4b.cloudfront.net/lesson_images/ac56f948.jpg",
  },
  {
    lesson: 1,
    title: "Boxes: Rotated Boxes",
    url: "https://drawabox.com/lesson/1/rotatedboxes",
    imageUrl:
      "https://d15v304a6xpq4b.cloudfront.net/lesson_images/9a2db6a0.jpg",
  },
  {
    lesson: 1,
    title: "Boxes: Organic Perpsective",
    url: "https://drawabox.com/lesson/1/organicperspective",
    imageUrl:
      "https://d15v304a6xpq4b.cloudfront.net/lesson_images/598a86fb.jpg",
  },
];

const lesson2Warmups: warmup[] = [
  {
    lesson: 2,
    title: "3D: Orangic Arrows",
    url: "https://drawabox.com/lesson/2/organicarrows",
    imageUrl:
      "https://d15v304a6xpq4b.cloudfront.net/lesson_images/c3ee7097.jpg",
  },
  {
    lesson: 2,
    title: "3D: Organic Forms with Controur Lines",
    url: "https://drawabox.com/lesson/2/contourlines",
    imageUrl:
      "https://d15v304a6xpq4b.cloudfront.net/lesson_images/07c7e90b.jpg",
  },
  {
    lesson: 2,
    title: "Texture and Detail: Texture Analysis",
    url: "https://drawabox.com/lesson/2/textureanalysis",
    imageUrl:
      "https://d15v304a6xpq4b.cloudfront.net/lesson_images/42e498b3.jpg",
  },
  {
    lesson: 2,
    title: "Texture and Detail: Dissections",
    url: "https://drawabox.com/lesson/2/dissections",
    imageUrl:
      "https://d15v304a6xpq4b.cloudfront.net/lesson_images/c1773a25.jpg",
  },
  {
    lesson: 2,
    title: "Construction: Form Intersections",
    url: "https://drawabox.com/lesson/2/formintersections",
    imageUrl:
      "https://d15v304a6xpq4b.cloudfront.net/lesson_images/5fd79d5b.jpg",
  },
  {
    lesson: 2,
    title: "Construction: Organic Intersections",
    url: "https://drawabox.com/lesson/2/organicintersections",
    imageUrl:
      "https://d15v304a6xpq4b.cloudfront.net/lesson_images/07fd0fa0.jpg",
  },
];

export const warmups = lesson1Warmups.concat(lesson2Warmups);
