/*
 * The pen strokes that draw "Prince Agrawal" (SPEC §6), hand-authored.
 *
 * A font glyph is a filled outline, not a pen line, so animating its outline
 * reads as tracing, not writing. Instead each stroke here runs along the
 * centre of a letter in the order a hand would make it, and is used as a
 * mask: as it draws, it uncovers the real Caveat outline underneath.
 *
 * Coordinates are Caveat font units, baseline at y = 0, y pointing down —
 * the same space as the outline build-name.mjs converts. They were placed
 * against a skeleton of the rasterised glyphs, then checked for full
 * coverage of the outline at PEN_WIDTH.
 *
 * Order matters: it is the writing order. Each entry is one pen-down.
 */

/* Wide enough to cover a Caveat stroke (~60 units) with room for the centre
   line to be a little off; narrow enough not to uncover neighbouring strokes
   of the same letter long before the pen reaches them. */
export const PEN_WIDTH = 100

const shift = (stroke, dx) => stroke.map(([x, y]) => [x + dx, y])

/* r and a appear twice; the second of each is the same glyph, moved. */
const r = [
  [[700, -372], [678, -332], [662, -298], [642, -252], [634, -202], [620, -148], [602, -70]],
  [[640, -195], [666, -204], [710, -234], [746, -262], [798, -296], [836, -314], [864, -318], [900, -306]],
]
const a = [
  [
    [3978, -316], [3942, -342], [3900, -352], [3854, -322], [3810, -270], [3770, -215], [3740, -160],
    [3718, -110], [3720, -70], [3768, -64], [3812, -86], [3870, -130], [3920, -188], [3960, -208],
  ],
  [[3984, -300], [3980, -258], [3968, -210], [3980, -162], [3996, -126], [4030, -86], [4076, -68]],
]

export const strokes = [
  /* P — stem down, then the bowl from its top */
  [[335, -620], [300, -556], [264, -468], [232, -368], [206, -298], [182, -218], [148, -116], [120, -26], [110, 18]],
  [
    [285, -625], [330, -630], [406, -632], [464, -620], [516, -584], [544, -530], [544, -462], [524, -420], [482, -354],
    [422, -298], [324, -252], [252, -236], [200, -238],
  ],

  ...r,

  /* i — stem, then the dot */
  [[1020, -305], [1010, -252], [988, -188], [964, -118], [952, -74], [958, -36]],
  [[1092, -515], [1050, -455]],

  /* n — stem down, back up into the arch */
  [[1232, -335], [1230, -296], [1208, -244], [1188, -180], [1172, -136], [1160, -100], [1164, -80]],
  [[1180, -150], [1248, -172], [1304, -210], [1366, -250], [1410, -258], [1434, -234], [1438, -198], [1432, -140], [1438, -90], [1458, -68]],

  /* c — from the top terminal, round, out along the tail */
  [
    [1798, -262], [1810, -310], [1800, -350], [1756, -364], [1712, -340], [1668, -290], [1636, -240],
    [1612, -180], [1598, -110], [1610, -56], [1662, -42], [1740, -66], [1800, -110], [1840, -146],
  ],

  /* e — the bar, up over the top, round and out */
  [
    [1966, -222], [2000, -226], [2066, -216], [2108, -226], [2150, -256], [2170, -300], [2160, -335],
    [2106, -358], [2048, -332], [2006, -290], [1980, -240], [1956, -172], [1956, -110], [1980, -66],
    [2030, -43], [2076, -52], [2134, -96],
  ],

  /* A — up the left leg, over, down the right; then the bar */
  [
    [2462, 10], [2514, -94], [2556, -176], [2600, -250], [2648, -336], [2704, -428], [2760, -520],
    [2806, -592], [2842, -628], [2872, -630], [2890, -596], [2890, -518], [2876, -400], [2862, -278],
    [2856, -150], [2856, -40], [2860, -10],
  ],
  [[2600, -262], [2650, -264], [2732, -272], [2802, -282], [2856, -280]],

  /* g — the bowl, then the stem down into the descender loop */
  [
    [3212, -340], [3162, -358], [3120, -338], [3080, -300], [3044, -248], [3024, -190], [3024, -130],
    [3056, -108], [3100, -114], [3154, -150], [3196, -172],
  ],
  [
    [3222, -345], [3240, -290], [3210, -212], [3196, -150], [3186, -90], [3170, -36], [3156, 15],
    [3134, 78], [3100, 140], [3068, 160], [3022, 146], [2988, 108], [2972, 74],
  ],

  ...r.map((stroke) => shift(stroke, 2781)),

  ...a,

  /* w — down, up to the middle peak, back down, up the right arm */
  [
    [4214, -340], [4202, -288], [4190, -212], [4186, -150], [4200, -92], [4260, -112], [4302, -156],
    [4340, -180], [4370, -256], [4392, -320],
  ],
  [
    [4392, -320], [4372, -260], [4350, -196], [4356, -150], [4360, -110], [4400, -86], [4440, -98],
    [4496, -144], [4540, -200], [4580, -280], [4592, -318],
  ],

  ...a.map((stroke) => shift(stroke, 944)),

  /* l */
  [[5290, -625], [5266, -566], [5236, -490], [5200, -402], [5166, -312], [5134, -222], [5108, -140], [5092, -64], [5100, -22]],
]
