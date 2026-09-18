export function HeroOrbit() {
  return (
    <div className="hero__art" data-parallax="0.06">
      <div className="orbit__wrap" id="orbitWrap">
        <svg
          className="orbit"
          viewBox="0 0 600 600"
          fill="none"
          role="img"
          aria-label="Abstract design orbit: a grid, bezier curves, nodes and a colour spectrum arranged around a circular frame"
        >
          <defs>
            <linearGradient id="og1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="var(--c1)" />
              <stop offset="1" stopColor="var(--c2)" />
            </linearGradient>
            <linearGradient id="og2" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="var(--c3)" />
              <stop offset="1" stopColor="var(--c1)" />
            </linearGradient>
            <linearGradient id="og3" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="var(--c2)" />
              <stop offset=".5" stopColor="var(--c4)" />
              <stop offset="1" stopColor="var(--c3)" />
            </linearGradient>
            <radialGradient id="og4" cx=".5" cy=".5" r=".5">
              <stop offset="0" stopColor="var(--c1)" stopOpacity=".45" />
              <stop offset="1" stopColor="var(--c1)" stopOpacity="0" />
            </radialGradient>
            <clipPath id="ocl">
              <circle cx="300" cy="300" r="196" />
            </clipPath>
          </defs>

          <circle cx="300" cy="300" r="250" fill="url(#og4)" />

          <g stroke="var(--line-strong)" strokeWidth="1" opacity=".6">
            <line className="guide" x1="0" y1="180" x2="600" y2="180" strokeDasharray="3 6" />
            <line className="guide guide--b" x1="420" y1="0" x2="420" y2="600" strokeDasharray="3 6" />
            <line className="guide guide--c" x1="0" y1="430" x2="600" y2="430" strokeDasharray="3 6" />
          </g>

          <g className="spin-slow">
            <circle cx="300" cy="300" r="196" stroke="var(--line)" strokeWidth="1" />
            <circle
              cx="300"
              cy="300"
              r="196"
              stroke="url(#og1)"
              strokeWidth="1.6"
              strokeDasharray="86 530"
              strokeLinecap="round"
            />
            <g clipPath="url(#ocl)" stroke="var(--line)" strokeWidth="1" opacity=".55">
              <line x1="104" y1="235" x2="496" y2="235" />
              <line x1="104" y1="300" x2="496" y2="300" />
              <line x1="104" y1="365" x2="496" y2="365" />
              <line x1="235" y1="104" x2="235" y2="496" />
              <line x1="300" y1="104" x2="300" y2="496" />
              <line x1="365" y1="104" x2="365" y2="496" />
            </g>
          </g>
          <g className="spin-rev">
            <circle cx="300" cy="300" r="232" stroke="var(--line)" strokeWidth="1" strokeDasharray="2 10" />
            <circle cx="300" cy="68" r="6" fill="var(--c3)" />
            <circle cx="532" cy="300" r="4" fill="var(--c4)" />
            <circle cx="300" cy="532" r="5" fill="var(--c2)" />
          </g>

          <g>
            <rect x="176" y="176" width="248" height="248" rx="6" stroke="var(--line-strong)" strokeWidth="1" fill="none" />
            <rect x="176" y="176" width="248" height="10" fill="url(#og3)" opacity=".9" rx="2" />
            <text x="176" y="166" fontFamily="ui-monospace,monospace" fontSize="11" fill="var(--text-3)" letterSpacing="2">
              FRAME / 1440
            </text>
            <text x="424" y="166" textAnchor="end" fontFamily="ui-monospace,monospace" fontSize="11" fill="var(--text-3)" letterSpacing="2">
              X 080 Y 240
            </text>
          </g>

          <path
            d="M150,410 C220,300 290,470 360,330 C400,250 450,280 480,220"
            stroke="url(#og2)"
            strokeWidth="2.4"
            fill="none"
            strokeLinecap="round"
          />
          <g stroke="var(--c3)" strokeWidth="1" opacity=".8">
            <line x1="360" y1="330" x2="410" y2="256" className="dash-march" />
            <line x1="150" y1="410" x2="196" y2="352" className="dash-march" />
          </g>
          <circle cx="360" cy="330" r="5" fill="var(--bg)" stroke="var(--c3)" strokeWidth="2" className="node-pulse" />
          <circle cx="150" cy="410" r="5" fill="var(--bg)" stroke="var(--c3)" strokeWidth="2" className="node-pulse node-pulse--b" />
          <circle cx="480" cy="220" r="5" fill="var(--bg)" stroke="var(--c2)" strokeWidth="2" className="node-pulse node-pulse--c" />
          <rect x="404" y="250" width="12" height="12" fill="var(--c4)" rx="1" />
          <rect x="190" y="346" width="12" height="12" fill="var(--c4)" rx="1" />

          <g>
            <line x1="188" y1="392" x2="412" y2="392" stroke="var(--c1)" strokeWidth="1" opacity=".7" />
            <text x="188" y="386" style={{ fontFamily: "var(--font-display)" }} fontSize="46" fontWeight="700" fill="var(--text)" letterSpacing="-2">
              Aa
            </text>
            <text x="262" y="386" fontFamily="ui-monospace,monospace" fontSize="10" fill="var(--text-3)" letterSpacing="2">
              BASELINE 392
            </text>
          </g>

          <g opacity=".95">
            <rect x="196" y="212" width="96" height="14" rx="7" fill="var(--surface)" />
            <rect x="196" y="234" width="64" height="8" rx="4" fill="var(--line-strong)" opacity=".5" />
            <rect x="306" y="212" width="52" height="30" rx="8" fill="url(#og1)" />
          </g>

          <g clipPath="url(#ocl)">
            <rect className="sweep" x="120" y="100" width="70" height="400" fill="var(--text)" opacity=".06" transform="skewX(-18)" />
          </g>

          <g className="travel">
            <path d="M0,0 L0,15 L4,11.5 L7,17.5 L10,16 L7,10.5 L12,10 Z" fill="var(--text)" stroke="var(--bg)" strokeWidth="1" />
          </g>
        </svg>
      </div>
    </div>
  );
}
