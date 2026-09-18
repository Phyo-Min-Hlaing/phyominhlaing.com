import { useId } from "react";

/* ------------------------------------------------------------------
   Procedural project artwork — faithful TypeScript port of the
   original template's SVG + CSS generators. All imagery inherits the
   active theme via CSS variables; no external image dependencies.
------------------------------------------------------------------- */

function bg(a: string, b?: number): string {
  return (
    '<rect width="100%" height="100%" fill="var(--bg-2)"/>' +
    '<rect width="100%" height="100%" fill="url(#' +
    a +
    ')" opacity="' +
    (b || 0.22) +
    '"/>'
  );
}

function defs(id: string): string {
  return (
    "<defs>" +
    '<linearGradient id="g' +
    id +
    '" x1="0" y1="0" x2="1" y2="1">' +
    '<stop offset="0" stop-color="var(--c1)"/><stop offset="1" stop-color="var(--c2)"/></linearGradient>' +
    '<linearGradient id="h' +
    id +
    '" x1="0" y1="1" x2="1" y2="0">' +
    '<stop offset="0" stop-color="var(--c3)"/><stop offset="1" stop-color="var(--c1)"/></linearGradient>' +
    "</defs>"
  );
}

function gridLines(w: number, h: number, step: number): string {
  let s = '<g stroke="var(--line)" stroke-width="1" opacity=".6">';
  for (let x = step; x < w; x += step)
    s += '<line x1="' + x + '" y1="0" x2="' + x + '" y2="' + h + '"/>';
  for (let y = step; y < h; y += step)
    s += '<line x1="0" y1="' + y + '" x2="' + w + '" y2="' + y + '"/>';
  return s + "</g>";
}

function bars(
  x: number,
  y: number,
  w: number,
  rows: number,
  gap: number,
  id: string,
): string {
  let s = "";
  for (let i = 0; i < rows; i++) {
    const ww = w * (0.45 + ((i * 37) % 55) / 100);
    s +=
      '<rect x="' +
      x +
      '" y="' +
      (y + i * gap) +
      '" width="' +
      ww +
      '" height="7" rx="3.5" fill="var(--line-strong)" opacity=".55" data-bar="' +
      id +
      "-" +
      i +
      '"/>';
  }
  return s;
}

function phoneScreen(
  x: number,
  y: number,
  w: number,
  id: string,
  variant: string,
): string {
  const h = w * 2.03;
  let s = "";
  s +=
    '<rect x="' +
    x +
    '" y="' +
    y +
    '" width="' +
    w +
    '" height="' +
    h +
    '" rx="' +
    w * 0.13 +
    '" fill="var(--bg-3)" stroke="var(--line-strong)"/>';
  s +=
    '<rect x="' +
    (x + w * 0.3) +
    '" y="' +
    (y + 6) +
    '" width="' +
    w * 0.4 +
    '" height="7" rx="3.5" fill="var(--line-strong)" opacity=".6"/>';
  if (variant === "map") {
    s +=
      '<rect x="' +
      (x + 8) +
      '" y="' +
      (y + 24) +
      '" width="' +
      (w - 16) +
      '" height="' +
      h * 0.52 +
      '" rx="10" fill="url(#g' +
      id +
      ')" opacity=".55"/>';
    s +=
      '<path d="M' +
      (x + 20) +
      "," +
      (y + h * 0.5) +
      " C" +
      (x + w * 0.4) +
      "," +
      (y + h * 0.3) +
      " " +
      (x + w * 0.6) +
      "," +
      (y + h * 0.55) +
      " " +
      (x + w - 20) +
      "," +
      (y + h * 0.33) +
      '" stroke="var(--c3)" stroke-width="2" fill="none"/>';
    s +=
      '<circle cx="' +
      (x + 20) +
      '" cy="' +
      (y + h * 0.5) +
      '" r="5" fill="var(--c3)"/>';
    s +=
      '<circle cx="' +
      (x + w - 20) +
      '" cy="' +
      (y + h * 0.33) +
      '" r="5" fill="var(--c2)"/>';
    s +=
      '<rect x="' +
      (x + 8) +
      '" y="' +
      (y + h * 0.6) +
      '" width="' +
      (w - 16) +
      '" height="' +
      h * 0.33 +
      '" rx="10" fill="var(--surface)" stroke="var(--line)"/>';
    s += bars(x + 20, y + h * 0.66, w - 44, 3, 16, id);
    s +=
      '<rect x="' +
      (x + 20) +
      '" y="' +
      (y + h * 0.84) +
      '" width="' +
      (w - 40) +
      '" height="22" rx="11" fill="url(#g' +
      id +
      ')"/>';
  } else {
    s +=
      '<rect x="' +
      (x + 10) +
      '" y="' +
      (y + 26) +
      '" width="' +
      (w - 20) +
      '" height="' +
      h * 0.22 +
      '" rx="10" fill="url(#h' +
      id +
      ')" opacity=".6"/>';
    s += bars(x + 14, y + h * 0.3, w - 34, 4, 15, id);
    s +=
      '<rect x="' +
      (x + 10) +
      '" y="' +
      (y + h * 0.56) +
      '" width="' +
      (w - 20) +
      '" height="' +
      h * 0.15 +
      '" rx="10" fill="var(--surface)" stroke="var(--line)"/>';
    s +=
      '<rect x="' +
      (x + 10) +
      '" y="' +
      (y + h * 0.74) +
      '" width="' +
      (w - 20) +
      '" height="' +
      h * 0.15 +
      '" rx="10" fill="var(--surface)" stroke="var(--line)"/>';
    s +=
      '<circle cx="' +
      (x + 28) +
      '" cy="' +
      (y + h * 0.635) +
      '" r="9" fill="var(--c3)" opacity=".8"/>';
    s +=
      '<circle cx="' +
      (x + 28) +
      '" cy="' +
      (y + h * 0.815) +
      '" r="9" fill="var(--c4)" opacity=".8"/>';
  }
  return s;
}

function browserFrame(
  x: number,
  y: number,
  w: number,
  h: number,
  id: string,
  inner?: string,
): string {
  void id;
  let s =
    '<rect x="' +
    x +
    '" y="' +
    y +
    '" width="' +
    w +
    '" height="' +
    h +
    '" rx="10" fill="var(--bg-3)" stroke="var(--line-strong)"/>';
  s +=
    '<line x1="' +
    x +
    '" y1="' +
    (y + 26) +
    '" x2="' +
    (x + w) +
    '" y2="' +
    (y + 26) +
    '" stroke="var(--line)"/>';
  s +=
    '<circle cx="' +
    (x + 16) +
    '" cy="' +
    (y + 13) +
    '" r="4" fill="var(--c2)" opacity=".7"/>';
  s +=
    '<circle cx="' +
    (x + 30) +
    '" cy="' +
    (y + 13) +
    '" r="4" fill="var(--c4)" opacity=".7"/>';
  s +=
    '<circle cx="' +
    (x + 44) +
    '" cy="' +
    (y + 13) +
    '" r="4" fill="var(--c3)" opacity=".7"/>';
  s +=
    '<rect x="' +
    (x + 58) +
    '" y="' +
    (y + 6) +
    '" width="' +
    (w - 76) +
    '" height="14" rx="7" fill="var(--surface)"/>';
  return s + (inner || "");
}

type ArtFn = (id: string) => string;

const ART: Record<string, ArtFn> = {
  app: (id) =>
    defs(id) +
    bg("g" + id, 0.16) +
    gridLines(800, 500, 50) +
    phoneScreen(300, 60, 170, id, "map") +
    '<g opacity=".5">' +
    phoneScreen(110, 110, 140, id, "list") +
    "</g>" +
    '<g opacity=".5">' +
    phoneScreen(540, 110, 140, id, "list") +
    "</g>" +
    '<text x="40" y="40" font-family="ui-monospace,monospace" font-size="12" fill="var(--text-3)" letter-spacing="2">IOS / ANDROID · 375PT</text>',

  app2: (id) =>
    defs(id) +
    bg("h" + id, 0.16) +
    gridLines(800, 500, 50) +
    phoneScreen(200, 70, 165, id, "list") +
    phoneScreen(430, 70, 165, id, "map") +
    '<text x="40" y="40" font-family="ui-monospace,monospace" font-size="12" fill="var(--text-3)" letter-spacing="2">MOBILE · 2 SCREENS</text>',

  web: (id) => {
    const inner =
      '<rect x="120" y="120" width="560" height="120" rx="12" fill="url(#g' +
      id +
      ')" opacity=".8"/>' +
      '<rect x="150" y="150" width="220" height="14" rx="7" fill="var(--bg-3)" opacity=".7"/>' +
      '<rect x="150" y="176" width="340" height="10" rx="5" fill="var(--bg-3)" opacity=".45"/>' +
      '<rect x="150" y="200" width="110" height="24" rx="12" fill="var(--bg-3)" opacity=".85"/>' +
      "<g>" +
      '<rect x="120" y="262" width="176" height="108" rx="10" fill="var(--surface)" stroke="var(--line)"/>' +
      '<rect x="312" y="262" width="176" height="108" rx="10" fill="var(--surface)" stroke="var(--line)"/>' +
      '<rect x="504" y="262" width="176" height="108" rx="10" fill="var(--surface)" stroke="var(--line)"/>' +
      "</g>" +
      bars(140, 288, 130, 3, 16, id) +
      bars(332, 288, 130, 3, 16, id) +
      bars(524, 288, 130, 3, 16, id);
    return (
      defs(id) +
      bg("g" + id, 0.14) +
      browserFrame(60, 40, 680, 400, id, inner) +
      '<text x="62" y="466" font-family="ui-monospace,monospace" font-size="11" fill="var(--text-3)" letter-spacing="2">GRID 12 COL · GAP 24</text>'
    );
  },

  web2: (id) => {
    const inner =
      '<rect x="110" y="110" width="300" height="200" rx="10" fill="url(#h' +
      id +
      ')" opacity=".7"/>' +
      '<rect x="430" y="110" width="250" height="40" rx="8" fill="var(--surface)" stroke="var(--line)"/>' +
      '<rect x="430" y="164" width="250" height="40" rx="8" fill="var(--surface)" stroke="var(--line)"/>' +
      '<rect x="430" y="218" width="250" height="40" rx="8" fill="var(--surface)" stroke="var(--line)"/>' +
      '<rect x="430" y="278" width="140" height="32" rx="16" fill="url(#g' +
      id +
      ')"/>' +
      bars(120, 330, 280, 2, 16, id);
    return defs(id) + bg("h" + id, 0.12) + browserFrame(60, 50, 680, 380, id, inner);
  },

  flow: (id) => {
    let s = defs(id) + bg("g" + id, 0.12) + gridLines(800, 500, 50);
    const nodes: Array<[number, number]> = [
      [90, 250],
      [250, 140],
      [250, 360],
      [430, 250],
      [610, 160],
      [610, 340],
    ];
    const edges: Array<[number, number]> = [
      [0, 1],
      [0, 2],
      [1, 3],
      [2, 3],
      [3, 4],
      [3, 5],
    ];
    edges.forEach((e) => {
      const a = nodes[e[0]];
      const b = nodes[e[1]];
      s +=
        '<path d="M' +
        (a[0] + 52) +
        "," +
        a[1] +
        " C" +
        (a[0] + 110) +
        "," +
        a[1] +
        " " +
        (b[0] - 110) +
        "," +
        b[1] +
        " " +
        (b[0] - 52) +
        "," +
        b[1] +
        '" stroke="var(--c3)" stroke-width="1.6" fill="none" opacity=".75"/>';
    });
    nodes.forEach((n, i) => {
      s +=
        '<rect x="' +
        (n[0] - 52) +
        '" y="' +
        (n[1] - 34) +
        '" width="104" height="68" rx="8" fill="var(--bg-3)" stroke="' +
        (i === 3 ? "var(--c1)" : "var(--line-strong)") +
        '"/>';
      s +=
        '<rect x="' +
        (n[0] - 36) +
        '" y="' +
        (n[1] - 14) +
        '" width="52" height="7" rx="3.5" fill="var(--line-strong)" opacity=".7"/>';
      s +=
        '<rect x="' +
        (n[0] - 36) +
        '" y="' +
        (n[1] + 2) +
        '" width="34" height="6" rx="3" fill="var(--line-strong)" opacity=".4"/>';
    });
    return (
      s +
      '<text x="40" y="40" font-family="ui-monospace,monospace" font-size="12" fill="var(--text-3)" letter-spacing="2">USER FLOW · 6 STATES</text>'
    );
  },

  admin: (id) => {
    const inner =
      '<rect x="72" y="66" width="140" height="364" fill="var(--surface)"/>' +
      bars(90, 100, 100, 6, 26, id) +
      '<rect x="232" y="90" width="448" height="56" rx="8" fill="url(#g' +
      id +
      ')" opacity=".75"/>' +
      '<g stroke="var(--line)">' +
      '<line x1="232" y1="180" x2="680" y2="180"/><line x1="232" y1="224" x2="680" y2="224"/>' +
      '<line x1="232" y1="268" x2="680" y2="268"/><line x1="232" y1="312" x2="680" y2="312"/>' +
      '<line x1="232" y1="356" x2="680" y2="356"/></g>' +
      bars(244, 196, 160, 1, 0, id) +
      bars(244, 240, 200, 1, 0, id) +
      bars(244, 284, 140, 1, 0, id) +
      bars(244, 328, 190, 1, 0, id) +
      '<circle cx="640" cy="200" r="9" fill="var(--c3)" opacity=".8"/><circle cx="640" cy="244" r="9" fill="var(--c4)" opacity=".8"/>' +
      '<circle cx="640" cy="288" r="9" fill="var(--c2)" opacity=".8"/>';
    return defs(id) + bg("h" + id, 0.1) + browserFrame(60, 40, 680, 410, id, inner);
  },

  system: (id) => {
    let s = defs(id) + bg("g" + id, 0.12) + gridLines(800, 500, 40);
    const cols = ["var(--c1)", "var(--c2)", "var(--c3)", "var(--c4)", "var(--c5)"];
    cols.forEach((c, i) => {
      s +=
        '<rect x="' +
        (70 + i * 78) +
        '" y="60" width="66" height="66" rx="8" fill="' +
        c +
        '"/>';
    });
    s += '<rect x="70" y="160" width="300" height="46" rx="23" fill="url(#g' + id + ')"/>';
    s += '<rect x="386" y="160" width="160" height="46" rx="23" fill="none" stroke="var(--line-strong)"/>';
    s += '<rect x="562" y="160" width="46" height="46" rx="23" fill="var(--surface)" stroke="var(--line-strong)"/>';
    s += '<rect x="70" y="232" width="240" height="44" rx="8" fill="var(--surface)" stroke="var(--line)"/>';
    s += '<rect x="326" y="232" width="240" height="44" rx="8" fill="var(--surface)" stroke="var(--c1)"/>';
    s += bars(70, 306, 460, 4, 24, id);
    s += '<text x="600" y="320" font-family="ui-monospace,monospace" font-size="12" fill="var(--text-3)" letter-spacing="2">TOKENS</text>';
    s += '<text x="600" y="344" font-family="ui-monospace,monospace" font-size="12" fill="var(--text-3)" letter-spacing="2">COMPONENTS</text>';
    s += '<text x="600" y="368" font-family="ui-monospace,monospace" font-size="12" fill="var(--text-3)" letter-spacing="2">DOCS</text>';
    return s;
  },

  screen: (id) => {
    const inner =
      '<rect x="110" y="90" width="320" height="220" rx="10" fill="url(#g' +
      id +
      ')" opacity=".8"/>' +
      '<rect x="450" y="90" width="230" height="100" rx="10" fill="var(--surface)" stroke="var(--line)"/>' +
      '<rect x="450" y="210" width="230" height="100" rx="10" fill="var(--surface)" stroke="var(--line)"/>' +
      bars(130, 340, 300, 2, 18, id) +
      bars(470, 340, 200, 2, 18, id);
    return defs(id) + bg("g" + id, 0.14) + browserFrame(60, 40, 680, 410, id, inner);
  },

  poster: (id) =>
    defs(id) +
    '<rect width="100%" height="100%" fill="var(--bg-2)"/>' +
    '<circle cx="250" cy="250" r="170" fill="url(#g' +
    id +
    ')"/>' +
    '<rect x="420" y="80" width="300" height="300" fill="var(--c3)" opacity=".85"/>' +
    '<path d="M420,380 L720,380 L570,120 Z" fill="var(--c4)" opacity=".9"/>' +
    '<circle cx="250" cy="250" r="90" fill="var(--bg-2)"/>' +
    '<text x="60" y="450" font-family="ui-monospace,monospace" font-size="12" fill="var(--text-3)" letter-spacing="3">BRAND · MARK · SURFACE</text>',

  gallery: (id) => {
    let s = defs(id) + bg("h" + id, 0.14);
    const boxes: Array<[number, number, number, number]> = [
      [60, 60, 300, 200],
      [380, 60, 180, 200],
      [580, 60, 160, 130],
      [60, 280, 180, 160],
      [260, 280, 300, 160],
      [580, 210, 160, 230],
    ];
    boxes.forEach((b, i) => {
      s +=
        '<rect x="' +
        b[0] +
        '" y="' +
        b[1] +
        '" width="' +
        b[2] +
        '" height="' +
        b[3] +
        '" rx="10" fill="' +
        (i % 3 === 0 ? "url(#g" + id + ")" : "var(--surface)") +
        '" stroke="var(--line)" opacity="' +
        (i % 3 === 0 ? ".85" : "1") +
        '"/>';
    });
    return s;
  },

  grid: (id) => {
    let s = defs(id) + bg("g" + id, 0.1) + gridLines(800, 500, 40);
    for (let i = 0; i < 12; i++) {
      s +=
        '<rect x="' +
        (46 + i * 59) +
        '" y="60" width="44" height="380" fill="var(--c1)" opacity=".10"/>';
    }
    s +=
      '<rect x="46" y="140" width="398" height="120" rx="8" fill="url(#g' +
      id +
      ')" opacity=".8"/>';
    s += '<rect x="464" y="140" width="280" height="56" rx="8" fill="var(--surface)" stroke="var(--line)"/>';
    s += '<rect x="464" y="204" width="280" height="56" rx="8" fill="var(--surface)" stroke="var(--line)"/>';
    s += '<text x="46" y="470" font-family="ui-monospace,monospace" font-size="12" fill="var(--text-3)" letter-spacing="2">12 COL · GAP 24 · MARGIN 46</text>';
    return s;
  },

  cluster: (id) => {
    let s = defs(id) + bg("h" + id, 0.12);
    for (let i = 0; i < 26; i++) {
      const x = 80 + ((i * 137) % 640);
      const y = 70 + ((i * 89) % 340);
      const r = 8 + ((i * 17) % 20);
      s +=
        '<circle cx="' +
        x +
        '" cy="' +
        y +
        '" r="' +
        r +
        '" fill="' +
        ["var(--c1)", "var(--c2)", "var(--c3)", "var(--c4)"][i % 4] +
        '" opacity="' +
        (0.2 + (i % 5) * 0.14) +
        '"/>';
    }
    s += '<rect x="90" y="70" width="230" height="170" rx="10" fill="none" stroke="var(--line-strong)" stroke-dasharray="4 6"/>';
    s += '<rect x="400" y="180" width="280" height="200" rx="10" fill="none" stroke="var(--c1)" stroke-dasharray="4 6"/>';
    return s;
  },

  matrix: (id) => {
    let s = defs(id) + bg("g" + id, 0.1);
    s += '<line x1="400" y1="50" x2="400" y2="450" stroke="var(--line-strong)"/>';
    s += '<line x1="80" y1="250" x2="720" y2="250" stroke="var(--line-strong)"/>';
    (
      [
        [220, 150, "var(--c3)", 30],
        [560, 140, "var(--c1)", 42],
        [300, 350, "var(--c4)", 22],
        [600, 330, "var(--c2)", 26],
        [460, 200, "var(--c5)", 18],
      ] as Array<[number, number, string, number]>
    ).forEach((p) => {
      s +=
        '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="' + p[3] + '" fill="' + p[2] + '" opacity=".75"/>';
    });
    s += '<text x="620" y="110" font-family="ui-monospace,monospace" font-size="11" fill="var(--text-3)" letter-spacing="2">HIGH IMPACT</text>';
    return s;
  },

  proto: (id) => {
    let s = defs(id) + bg("h" + id, 0.12);
    for (let i = 0; i < 4; i++) {
      s +=
        '<rect x="' +
        (60 + i * 185) +
        '" y="150" width="140" height="200" rx="10" fill="var(--bg-3)" stroke="var(--line-strong)"/>';
      s +=
        '<rect x="' +
        (76 + i * 185) +
        '" y="170" width="108" height="50" rx="6" fill="url(#g' +
        id +
        ')" opacity=".8"/>';
      s += bars(76 + i * 185, 240, 100, 3, 18, id);
      if (i < 3) {
        s +=
          '<path d="M' +
          (204 + i * 185) +
          ",250 L" +
          (238 + i * 185) +
          ',250" stroke="var(--c1)" stroke-width="2" marker-end="url(#ar' +
          id +
          ')"/>';
      }
    }
    s +=
      '<defs><marker id="ar' +
      id +
      '" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">' +
      '<path d="M0,0 L8,4 L0,8 Z" fill="var(--c1)"/></marker></defs>';
    return s;
  },

  states: (id) => {
    let s = defs(id) + bg("g" + id, 0.1);
    const labels = ["DEFAULT", "HOVER", "ACTIVE", "LOADING", "DISABLED", "ERROR"];
    for (let i = 0; i < 6; i++) {
      const x = 70 + (i % 3) * 230;
      const y = 110 + Math.floor(i / 3) * 170;
      s +=
        '<rect x="' +
        x +
        '" y="' +
        y +
        '" width="180" height="56" rx="28" fill="' +
        (i === 1 ? "url(#g" + id + ")" : i === 4 ? "var(--surface)" : "none") +
        '" stroke="' +
        (i === 5 ? "var(--c2)" : "var(--line-strong)") +
        '"/>';
      s +=
        '<text x="' +
        (x + 90) +
        '" y="' +
        (y + 88) +
        '" text-anchor="middle" font-family="ui-monospace,monospace" font-size="10" fill="var(--text-3)" letter-spacing="2">' +
        labels[i] +
        "</text>";
    }
    return s;
  },

  phone: (id) => ART.app2(id),
};

export function artInner(kind: string, id: string): string {
  const fn = ART[kind] ?? ART.screen;
  return fn(id);
}

export function Artwork({ kind, className }: { kind: string; className?: string }) {
  const rawId = useId().replace(/[^a-zA-Z0-9]/g, "");
  const id = `a${rawId}`;
  const inner = artInner(kind, id);
  return (
    <div
      className={className ?? "art"}
      aria-hidden="true"
      dangerouslySetInnerHTML={{
        __html: `<svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${inner}</svg>`,
      }}
    />
  );
}
