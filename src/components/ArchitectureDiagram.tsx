import { useState, type ReactNode } from 'react'

type LayerId =
  | 'cicd'
  | 'frontend'
  | 'api'
  | 'backend'
  | 'ai'
  | 'data'
  | 'containers'
  | 'cloud'

type LayerCardProps = {
  id: LayerId
  x: number
  y: number
  w: number
  h: number
  title: string
  accent?: string
  hovered: LayerId | null
  onHover: (id: LayerId | null) => void
  children?: ReactNode
}

function LayerCard({
  id,
  x,
  y,
  w,
  h,
  title,
  accent = 'var(--brand)',
  hovered,
  onHover,
  children,
}: LayerCardProps) {
  return (
    <g
      onMouseEnter={() => onHover(id)}
      onMouseLeave={() => onHover(null)}
      style={{ transition: 'opacity .25s' }}
      opacity={hovered && hovered !== id ? 0.55 : 1}
    >
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={10}
        fill="var(--bg-1)"
        stroke="var(--line-strong)"
        strokeWidth={1}
      />
      <rect x={x} y={y} width={3} height={h} rx={1.5} fill={accent} opacity={0.85} />
      {title && (
        <text x={x + 16} y={y + 22} className="layer-title" fill="var(--text-1)">
          {title}
        </text>
      )}
      {children}
    </g>
  )
}

type PillProps = {
  x: number
  y: number
  label: string
  w?: number
  accent?: string
  muted?: boolean
}

function Pill({ x, y, label, w = 70, accent, muted = false }: PillProps) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={22}
        rx={6}
        fill={muted ? 'var(--surface)' : 'url(#btnSurface)'}
        stroke="var(--line-strong)"
        strokeOpacity={muted ? 0.35 : 0.55}
        strokeWidth={1}
      />
      {accent && <circle cx={x + 9} cy={y + 11} r={3} fill={accent} />}
      <text
        x={x + (accent ? 18 : 10)}
        y={y + 15}
        className="pill-label"
        fill={muted ? 'var(--text-3)' : 'var(--text-2)'}
      >
        {label}
      </text>
    </g>
  )
}

type FlowChipProps = { x: number; y: number; w: number; label: string }

function AccessibilityIcon({
  cx,
  cy,
  label,
}: {
  cx: number
  cy: number
  label?: string
}) {
  return (
    <g transform={`translate(${cx}, ${cy})`}>
      <g transform="scale(1.3)">
        <circle
          cx={0}
          cy={0}
          r={17}
          fill="none"
          stroke="url(#brandTealGrad)"
          strokeWidth={2}
          strokeOpacity={0.9}
        />
        <circle cx={0} cy={-8.5} r={3.1} fill="url(#brandTealGrad)" />
        <g
          stroke="url(#brandTealGrad)"
          strokeWidth={2.3}
          strokeLinecap="round"
          strokeOpacity={0.9}
          fill="none"
        >
          <path d="M -8.5 -2.6 L 8.5 -2.6" />
          <path d="M 0 -3.3 L 0 3.3" />
          <path d="M 0 3.3 L -6 10.5" />
          <path d="M 0 3.3 L 6 10.5" />
        </g>
      </g>
      {label && (
        <text
          x={0}
          y={36}
          textAnchor="middle"
          className="micro-label"
          fill="var(--text-3)"
        >
          {label}
        </text>
      )}
    </g>
  )
}

function FlowChip({ x, y, w, label }: FlowChipProps) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={16}
        rx={3}
        fill="var(--surface)"
        stroke="var(--line-strong)"
        strokeOpacity={0.5}
        strokeWidth={1}
      />
      <text
        x={x + w / 2}
        y={y + 11}
        textAnchor="middle"
        className="micro-label"
        fill="var(--text-2)"
      >
        {label}
      </text>
    </g>
  )
}

function StateIcon({ cx, cy, label }: { cx: number; cy: number; label?: string }) {
  // light-purple overlapping circles (flower) behind three gradient arcs with nodes
  const circles: ReadonlyArray<readonly [number, number]> = [
    [7, 0],
    [3.5, 6.06],
    [-3.5, 6.06],
    [-7, 0],
    [-3.5, -6.06],
    [3.5, -6.06],
  ]
  return (
    <g transform={`translate(${cx}, ${cy})`}>
      <g transform="scale(1.35)">
        {circles.map(([ccx, ccy]) => (
          <circle
            key={`${ccx},${ccy}`}
            cx={ccx}
            cy={ccy}
            r={7.5}
            fill="url(#stateCircleGrad)"
            stroke="#ffffff"
            strokeWidth={0.8}
            strokeOpacity={0.9}
          />
        ))}
        {[0, 120, 240].map((rot) => (
          <g key={rot} transform={`rotate(${rot})`}>
            <path
              d="M 0 -12 C 7 -10 8 -3 2 -2"
              fill="none"
              stroke="url(#stateLineGrad)"
              strokeWidth={2.8}
              strokeLinecap="round"
              strokeOpacity={0.78}
            />
            <circle cx={0} cy={-12} r={2.8} fill="url(#stateLineGrad)" fillOpacity={0.78} />
          </g>
        ))}
      </g>
      {label && (
        <text
          x={0}
          y={36}
          textAnchor="middle"
          className="micro-label"
          fill="var(--text-3)"
        >
          {label}
        </text>
      )}
    </g>
  )
}

function WebPerformanceIcon({
  cx,
  cy,
  label,
}: {
  cx: number
  cy: number
  label?: string
}) {
  // Lighthouse-style gauge: red → amber → teal arc with a needle in the good zone.
  return (
    <g transform={`translate(${cx}, ${cy})`}>
      <g transform="translate(0, 6)" strokeWidth={5} fill="none" strokeLinecap="round">
        <path d="M -18 0 A 18 18 0 0 1 18 0" stroke="url(#gaugeArcGrad)" />
      </g>
      <g transform="translate(0, 6)">
        <polygon points="11,-6.9 0.9,1.4 -0.9,-1.4" fill="url(#brandTealGrad)" />
        <circle cx={0} cy={0} r={3.4} fill="url(#brandTealGrad)" />
        <circle cx={0} cy={0} r={1.4} fill="var(--surface)" />
      </g>
      {label && (
        <text
          x={0}
          y={36}
          textAnchor="middle"
          className="micro-label"
          fill="var(--text-3)"
        >
          {label}
        </text>
      )}
    </g>
  )
}

type BrowserMiniProps = {
  x: number
  y: number
  w?: number
  h?: number
  label?: string
}

function BrowserMini({ x, y, w = 130, h = 64, label }: BrowserMiniProps) {
  const polyPoints: ReadonlyArray<readonly [number, number]> = [
    [x + 8, y + h - 10],
    [x + 8 + (w - 16) * 0.2, y + h - 18],
    [x + 8 + (w - 16) * 0.4, y + h - 14],
    [x + 8 + (w - 16) * 0.6, y + h - 24],
    [x + 8 + (w - 16) * 0.8, y + h - 20],
    [x + 8 + (w - 16), y + h - 28],
  ]
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={4}
        fill="var(--bg-1)"
        stroke="var(--line-strong)"
        strokeWidth={1}
      />
      <rect x={x} y={y} width={w} height={10} rx={4} fill="var(--surface)" />
      <circle cx={x + 6} cy={y + 5} r={1.5} fill="var(--accent-coral)" />
      <circle cx={x + 12} cy={y + 5} r={1.5} fill="var(--accent-orange)" />
      <circle cx={x + 18} cy={y + 5} r={1.5} fill="var(--accent-teal)" />
      <rect x={x + 8} y={y + 18} width={w - 16} height={3} rx={1} fill="var(--surface-2)" />
      <rect
        x={x + 8}
        y={y + 26}
        width={(w - 16) * 0.7}
        height={3}
        rx={1}
        fill="var(--surface-2)"
      />
      <polyline
        points={polyPoints.map((p) => p.join(',')).join(' ')}
        stroke="var(--brand)"
        strokeWidth={1.5}
        fill="none"
      />
      {label && (
        <text
          x={x + w / 2}
          y={y + h + 12}
          textAnchor="middle"
          className="micro-label"
          fill="var(--text-3)"
        >
          {label}
        </text>
      )}
    </g>
  )
}

type ServerIconProps = {
  x: number
  y: number
  w?: number
  h?: number
  accent?: string
  label?: string
}

function ServerIcon({
  x,
  y,
  w = 56,
  h = 48,
  accent = 'var(--brand)',
  label,
}: ServerIconProps) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={4}
        fill="var(--bg-1)"
        stroke="var(--line-strong)"
      />
      <rect x={x + 6} y={y + 6} width={w - 12} height={8} rx={2} fill="var(--surface)" />
      <rect x={x + 6} y={y + 18} width={w - 12} height={8} rx={2} fill="var(--surface)" />
      <rect x={x + 6} y={y + 30} width={w - 12} height={8} rx={2} fill="var(--surface)" />
      <circle cx={x + w - 11} cy={y + 10} r={2} fill={accent} />
      <circle cx={x + w - 11} cy={y + 22} r={2} fill={accent} opacity={0.5} />
      {label && (
        <text
          x={x + w / 2}
          y={y + h + 12}
          textAnchor="middle"
          className="micro-label"
          fill="var(--text-3)"
        >
          {label}
        </text>
      )}
    </g>
  )
}

type DBCylinderProps = {
  x: number
  y: number
  w?: number
  h?: number
  accent?: string
  label?: string
}

function DBCylinder({
  x,
  y,
  w = 50,
  h = 56,
  accent = 'var(--brand)',
  label,
}: DBCylinderProps) {
  return (
    <g>
      <ellipse
        cx={x + w / 2}
        cy={y + 6}
        rx={w / 2}
        ry={5}
        fill="var(--surface)"
        stroke="var(--line-strong)"
      />
      <path
        d={`M ${x} ${y + 6} L ${x} ${y + h - 6} A ${w / 2} 5 0 0 0 ${x + w} ${y + h - 6} L ${x + w} ${y + 6}`}
        fill="var(--bg-1)"
        stroke="var(--line-strong)"
      />
      <ellipse
        cx={x + w / 2}
        cy={y + h - 6}
        rx={w / 2}
        ry={5}
        fill="none"
        stroke="var(--line-strong)"
      />
      <ellipse
        cx={x + w / 2}
        cy={y + 6}
        rx={w / 2 - 6}
        ry={3}
        fill={accent}
        opacity={0.5}
      />
      {label && (
        <text
          x={x + w / 2}
          y={y + h + 12}
          textAnchor="middle"
          className="micro-label"
          fill="var(--text-3)"
        >
          {label.split('\n').map((line, i) => (
            <tspan key={line} x={x + w / 2} dy={i === 0 ? 0 : 12}>
              {line}
            </tspan>
          ))}
        </text>
      )}
    </g>
  )
}

function lakeWave(x0: number, x1: number, yy: number) {
  const seg = 7
  let d = `M ${x0} ${yy}`
  let up = true
  for (let xx = x0; xx < x1 - 0.5; xx += seg) {
    const nx = Math.min(xx + seg, x1)
    const cx = (xx + nx) / 2
    d += ` Q ${cx} ${up ? yy - 2.4 : yy + 2.4} ${nx} ${yy}`
    up = !up
  }
  return d
}

type DataLakeProps = { x: number; y: number; label?: string }

function DataLake({ x, y, label }: DataLakeProps) {
  const basin = `M ${x + 5} ${y + 16}
    Q ${x + 5} ${y + 12} ${x + 9} ${y + 12}
    L ${x + 53} ${y + 12}
    Q ${x + 57} ${y + 12} ${x + 57} ${y + 16}
    L ${x + 57} ${y + 30}
    C ${x + 57} ${y + 46} ${x + 47} ${y + 52} ${x + 31} ${y + 52}
    C ${x + 15} ${y + 52} ${x + 5} ${y + 46} ${x + 5} ${y + 30} Z`
  const waves: ReadonlyArray<readonly [number, number, number]> = [
    [x + 9, x + 53, y + 22],
    [x + 9, x + 53, y + 30],
    [x + 13, x + 49, y + 38],
    [x + 18, x + 44, y + 45],
  ]
  return (
    <g>
      <path d={basin} fill="rgba(79, 70, 229, 0.07)" stroke="var(--brand)" strokeOpacity={0.55} strokeWidth={1} />
      {waves.map(([x0, x1, yy], i) => (
        <path
          key={i}
          d={lakeWave(x0, x1, yy)}
          fill="none"
          stroke="var(--brand)"
          strokeOpacity={0.7 - i * 0.12}
          strokeWidth={1}
          strokeLinecap="round"
        />
      ))}
      <circle cx={x + 11} cy={y + 12} r={1.6} fill="var(--accent-orange)" opacity={0.85} />
      <circle cx={x + 51} cy={y + 12} r={1.6} fill="var(--accent-teal)" opacity={0.85} />
      {label && (
        <text
          x={x + 31}
          y={y + 66}
          textAnchor="middle"
          className="micro-label"
          fill="var(--text-3)"
        >
          {label}
        </text>
      )}
    </g>
  )
}

function Container({
  x,
  y,
  scale = 1,
}: {
  x: number
  y: number
  scale?: number
}) {
  return (
    <g transform={`translate(${x}, ${y}) scale(${scale})`}>
      <g filter="url(#iconShadow)">
        <rect
          x={0}
          y={0}
          width={28}
          height={18}
          rx={1.5}
          fill="url(#aiBadgeGrad)"
          stroke="var(--brand)"
          strokeOpacity={0.85}
          strokeWidth={1}
        />
      </g>
      <line
        x1={2}
        y1={1.5}
        x2={26}
        y2={1.5}
        stroke="rgba(255, 255, 255, 0.30)"
        strokeWidth={0.8}
      />
      <line
        x1={20}
        y1={3}
        x2={20}
        y2={15}
        stroke="var(--brand)"
        strokeOpacity={0.6}
        strokeWidth={0.8}
      />
      {[4, 8, 12, 16].map((lx) => (
        <line
          key={lx}
          x1={lx}
          y1={4}
          x2={lx}
          y2={14}
          stroke="var(--brand)"
          strokeOpacity={0.45}
          strokeWidth={0.8}
        />
      ))}
      <circle cx={24} cy={4.5} r={0.9} fill="var(--brand)" opacity={0.75} />
    </g>
  )
}

function Engine({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      {/* rotation arrows wrapping the gear */}
      <g
        stroke="var(--brand)"
        strokeWidth={1.4}
        strokeOpacity={0.9}
        fill="none"
        strokeLinecap="round"
      >
        <path d="M 21 10 A 9 9 0 0 0 14 2" />
        <path d="M 3 14 A 9 9 0 0 0 10 22" />
      </g>
      <g fill="var(--brand)" opacity={0.95}>
        <polygon points="14,2 17,0 17,5" />
        <polygon points="10,22 7,19 7,24" />
      </g>

      {/* gear teeth */}
      <rect x={10.5} y={6} width={3} height={2.5} fill="var(--brand)" opacity={0.9} />
      <rect x={10.5} y={15.5} width={3} height={2.5} fill="var(--brand)" opacity={0.9} />
      <rect x={6} y={10.5} width={2.5} height={3} fill="var(--brand)" opacity={0.9} />
      <rect x={15.5} y={10.5} width={2.5} height={3} fill="var(--brand)" opacity={0.9} />

      {/* gear body with depth */}
      <g filter="url(#iconShadow)">
        <circle
          cx={12}
          cy={12}
          r={5}
          fill="url(#aiBadgeGrad)"
          stroke="var(--brand)"
          strokeOpacity={0.95}
          strokeWidth={1}
        />
      </g>
      {/* hub highlight */}
      <path
        d="M 9 10.5 Q 12 8.8 15 10.5"
        stroke="rgba(255, 255, 255, 0.30)"
        strokeWidth={0.8}
        fill="none"
        strokeLinecap="round"
      />
      <circle
        cx={12}
        cy={12}
        r={1.8}
        fill="var(--bg-1)"
        stroke="var(--brand)"
        strokeOpacity={0.7}
        strokeWidth={0.6}
      />
    </g>
  )
}

function Cloud({
  x,
  y,
  scale = 1.2,
  childScale = 1,
  children,
}: {
  x: number
  y: number
  scale?: number
  childScale?: number
  children?: React.ReactNode
}) {
  // `scale` sizes the cloud graphic; `childScale` sizes the children
  // (containers) independently. Children are anchored to the cloud's body
  // centre (local 18, 15) and positioned relative to it, so resizing either
  // one never affects the other.
  return (
    <g transform={`translate(${x}, ${y})`}>
      <g transform={`scale(${scale})`}>
        <g filter="url(#iconShadow)">
          <path
            d="M 5 22 L 30 22 Q 36 22 36 17 Q 36 11 30 10 Q 28 4 22 5 Q 17 0 12 5 Q 6 4 5 10 Q 0 12 0 16 Q 0 22 5 22 Z"
            fill="url(#shieldBodyGrad)"
            stroke="var(--accent-teal)"
            strokeOpacity={0.9}
            strokeWidth={1.3}
          />
        </g>
        {/* top inner highlight following the bumps */}
        <path
          d="M 13 5 Q 17 2 21 5"
          stroke="rgba(255, 255, 255, 0.35)"
          strokeWidth={1}
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 6 11 Q 8 8.5 11 9"
          stroke="rgba(255, 255, 255, 0.22)"
          strokeWidth={0.8}
          fill="none"
          strokeLinecap="round"
        />
        {/* base accent dots */}
        <circle cx={4} cy={20} r={1.1} fill="var(--accent-teal)" opacity={0.65} />
        <circle cx={32} cy={20} r={1.1} fill="var(--accent-teal)" opacity={0.65} />
      </g>
      {children && (
        <g transform={`translate(${18 * scale}, ${15 * scale}) scale(${childScale})`}>
          {children}
        </g>
      )}
    </g>
  )
}

type AIIconProps = { x: number; y: number; label?: string }

function AIChipIcon({ x, y, label }: AIIconProps) {
  const w = 56
  const h = 48
  const cxMid = x + w / 2
  return (
    <g>
      {/* monitor body with depth */}
      <g filter="url(#iconShadow)">
        <rect
          x={x + 4}
          y={y + 2}
          width={w - 8}
          height={h - 16}
          rx={4}
          fill="url(#chipBodyGrad)"
          stroke="var(--accent-orange)"
          strokeOpacity={0.85}
          strokeWidth={1.3}
        />
      </g>
      {/* top highlight for 3D feel */}
      <line
        x1={x + 7}
        y1={y + 3.5}
        x2={x + w - 7}
        y2={y + 3.5}
        stroke="rgba(255, 255, 255, 0.25)"
        strokeWidth={1}
      />
      {/* chip core */}
      <rect
        x={x + 16}
        y={y + 8}
        width={w - 32}
        height={h - 28}
        rx={2}
        fill="var(--bg-1)"
        stroke="var(--accent-orange)"
        strokeOpacity={0.95}
        strokeWidth={1}
      />
      {/* wrench (tool) inside chip */}
      <path
        transform={`translate(${cxMid} ${y + 18}) rotate(38)`}
        d="M -3 -2 L -3 -7 L -1.3 -7 L -1.3 -4.3 L 1.3 -4.3 L 1.3 -7 L 3 -7 L 3 -2 L 1.5 -1 L 1.5 7 L -1.5 7 L -1.5 -1 Z"
        fill="rgba(245, 158, 11, 0.25)"
        stroke="var(--accent-orange)"
        strokeOpacity={0.95}
        strokeWidth={1}
        strokeLinejoin="round"
      />
      {/* chip pins - top */}
      {[20, 26, 32, 38].map((px) => (
        <line
          key={`t${px}`}
          x1={x + px}
          y1={y + 6}
          x2={x + px}
          y2={y + 8}
          stroke="var(--accent-orange)"
          strokeOpacity={0.7}
          strokeWidth={0.9}
        />
      ))}
      {/* chip pins - bottom */}
      {[20, 26, 32, 38].map((px) => (
        <line
          key={`b${px}`}
          x1={x + px}
          y1={y + h - 20}
          x2={x + px}
          y2={y + h - 18}
          stroke="var(--accent-orange)"
          strokeOpacity={0.7}
          strokeWidth={0.9}
        />
      ))}
      {/* side network dots */}
      <circle cx={x + 4} cy={y + 8} r={1.4} fill="var(--accent-orange)" opacity={0.7} />
      <circle cx={x + w - 4} cy={y + 8} r={1.4} fill="var(--accent-orange)" opacity={0.7} />
      <circle
        cx={x + 4}
        cy={y + h - 20}
        r={1.4}
        fill="var(--accent-orange)"
        opacity={0.7}
      />
      <circle
        cx={x + w - 4}
        cy={y + h - 20}
        r={1.4}
        fill="var(--accent-orange)"
        opacity={0.7}
      />
      {/* monitor stand neck */}
      <g filter="url(#iconShadow)">
        <rect
          x={cxMid - 3}
          y={y + h - 14}
          width={6}
          height={6}
          fill="rgba(245, 158, 11, 0.22)"
          stroke="var(--accent-orange)"
          strokeOpacity={0.8}
          strokeWidth={1}
        />
        {/* stand base */}
        <rect
          x={cxMid - 11}
          y={y + h - 8}
          width={22}
          height={3}
          rx={1.5}
          fill="rgba(245, 158, 11, 0.28)"
          stroke="var(--accent-orange)"
          strokeOpacity={0.85}
          strokeWidth={1}
        />
      </g>
      {label && (
        <text
          x={cxMid}
          y={y + h + 12}
          textAnchor="middle"
          className="micro-label"
          fill="var(--text-3)"
        >
          {label}
        </text>
      )}
    </g>
  )
}

function AICircuitIcon({ x, y, label }: AIIconProps) {
  const w = 56
  const h = 48
  const cx = x + w / 2
  const cy = y + 20
  const r = 14
  const hexPoints = [0, 1, 2, 3, 4, 5].map((i) => {
    const angle = (Math.PI / 3) * i + Math.PI / 2
    return [cx + r * Math.cos(angle), cy + r * Math.sin(angle)] as const
  })
  const innerHex = [0, 1, 2, 3, 4, 5].map((i) => {
    const angle = (Math.PI / 3) * i + Math.PI / 2
    return [cx + 8.5 * Math.cos(angle), cy + 8.5 * Math.sin(angle)] as const
  })
  const traces: ReadonlyArray<readonly [number, number, number, number]> = [
    [x + 4, y + 6, x + 18, y + 14],
    [x + 4, y + h - 14, x + 18, y + h - 22],
    [x + w - 4, y + 6, x + w - 18, y + 14],
    [x + w - 4, y + h - 14, x + w - 18, y + h - 22],
  ]
  return (
    <g>
      {/* circuit traces and corner nodes */}
      {traces.map(([x1, y1, x2, y2], i) => (
        <g key={i}>
          <line
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="var(--brand)"
            strokeOpacity={0.55}
            strokeWidth={1}
          />
          <circle cx={x1} cy={y1} r={2} fill="var(--brand)" opacity={0.8} />
        </g>
      ))}
      {/* hexagon badge with depth */}
      <g filter="url(#iconShadow)">
        <polygon
          points={hexPoints.map((p) => p.join(',')).join(' ')}
          fill="url(#aiBadgeGrad)"
          stroke="var(--brand)"
          strokeOpacity={0.9}
          strokeWidth={1.4}
        />
      </g>
      {/* top edge highlight for 3D */}
      <line
        x1={hexPoints[5][0] + 1}
        y1={hexPoints[5][1] + 0.5}
        x2={hexPoints[0][0] - 1}
        y2={hexPoints[0][1] + 0.5}
        stroke="rgba(255, 255, 255, 0.3)"
        strokeWidth={1}
      />
      {/* inner hex */}
      <polygon
        points={innerHex.map((p) => p.join(',')).join(' ')}
        fill="var(--bg-1)"
        stroke="var(--brand)"
        strokeOpacity={0.85}
        strokeWidth={1}
      />
      <text
        x={cx}
        y={cy + 4}
        textAnchor="middle"
        className="pill-label"
        fill="var(--brand)"
      >
        AI
      </text>
      {/* extra trace going up from badge to a node above */}
      <line
        x1={cx}
        y1={y + 2}
        x2={cx}
        y2={y + 6}
        stroke="var(--brand)"
        strokeOpacity={0.55}
        strokeWidth={1}
      />
      <circle cx={cx} cy={y + 2} r={1.6} fill="var(--brand)" opacity={0.75} />
      {label && (
        <text
          x={x + w / 2}
          y={y + h + 12}
          textAnchor="middle"
          className="micro-label"
          fill="var(--text-3)"
        >
          {label}
        </text>
      )}
    </g>
  )
}

function BrainIcon({ x, y, label }: AIIconProps) {
  const w = 44
  const cx = x + w / 2
  const accent = 'var(--accent-teal)'
  return (
    <g>
      {/* brain body with depth */}
      <g filter="url(#iconShadow)">
        <path
          d={`M ${x + 22} ${y + 4}
              C ${x + 15} ${y + 1}, ${x + 6} ${y + 5}, ${x + 6} ${y + 12}
              C ${x + 2} ${y + 14}, ${x + 2} ${y + 21}, ${x + 6} ${y + 23}
              C ${x + 6} ${y + 29}, ${x + 13} ${y + 32}, ${x + 19} ${y + 29}
              C ${x + 20} ${y + 31}, ${x + 24} ${y + 31}, ${x + 25} ${y + 29}
              C ${x + 31} ${y + 32}, ${x + 38} ${y + 29}, ${x + 38} ${y + 23}
              C ${x + 42} ${y + 21}, ${x + 42} ${y + 14}, ${x + 38} ${y + 12}
              C ${x + 38} ${y + 5}, ${x + 29} ${y + 1}, ${x + 22} ${y + 4} Z`}
          fill="url(#shieldBodyGrad)"
          stroke={accent}
          strokeOpacity={0.9}
          strokeWidth={1.3}
          strokeLinejoin="round"
        />
      </g>
      {/* central fissure */}
      <path
        d={`M ${x + 22} ${y + 5}
            C ${x + 20} ${y + 11}, ${x + 24} ${y + 15}, ${x + 22} ${y + 20}
            C ${x + 21} ${y + 25}, ${x + 22} ${y + 27}, ${x + 22} ${y + 29}`}
        fill="none"
        stroke={accent}
        strokeOpacity={0.75}
        strokeWidth={1}
        strokeLinecap="round"
      />
      {/* left folds */}
      <path
        d={`M ${x + 13} ${y + 9} C ${x + 9} ${y + 12}, ${x + 12} ${y + 16}, ${x + 16} ${y + 15}`}
        fill="none"
        stroke={accent}
        strokeOpacity={0.6}
        strokeWidth={1}
        strokeLinecap="round"
      />
      <path
        d={`M ${x + 11} ${y + 19} C ${x + 8} ${y + 21}, ${x + 12} ${y + 25}, ${x + 16} ${y + 23}`}
        fill="none"
        stroke={accent}
        strokeOpacity={0.6}
        strokeWidth={1}
        strokeLinecap="round"
      />
      {/* right half: circuit traces with nodes */}
      <g stroke={accent} strokeOpacity={0.6} strokeWidth={1} fill="none" strokeLinecap="round" strokeLinejoin="round">
        <polyline points={`${x + 22},${y + 10} ${x + 30},${y + 10} ${x + 30},${y + 6}`} />
        <polyline points={`${x + 22},${y + 16} ${x + 34},${y + 16} ${x + 34},${y + 12}`} />
        <polyline points={`${x + 22},${y + 22} ${x + 29},${y + 22} ${x + 29},${y + 26}`} />
        <polyline points={`${x + 34},${y + 16} ${x + 38},${y + 20}`} />
      </g>
      <g fill={accent} fillOpacity={0.85}>
        <circle cx={x + 30} cy={y + 6} r={1.3} />
        <circle cx={x + 34} cy={y + 12} r={1.3} />
        <circle cx={x + 29} cy={y + 26} r={1.3} />
        <circle cx={x + 38} cy={y + 20} r={1.3} />
        <circle cx={x + 30} cy={y + 10} r={1} />
        <circle cx={x + 34} cy={y + 16} r={1} />
      </g>
      {label && (
        <text
          x={cx}
          y={y + 44}
          textAnchor="middle"
          className="micro-label"
          fill="var(--text-3)"
        >
          {label}
        </text>
      )}
    </g>
  )
}

type ConnectorProps = {
  x1: number
  y1: number
  x2: number
  y2: number
  flow?: boolean
  double?: boolean
  color?: string
}

function Connector({
  x1,
  y1,
  x2,
  y2,
  flow = false,
  double = false,
  color = 'var(--line-strong)',
}: ConnectorProps) {
  const angleEnd = Math.atan2(y2 - y1, x2 - x1)
  const ax = x2 - 6 * Math.cos(angleEnd)
  const ay = y2 - 6 * Math.sin(angleEnd)
  const angleStart = Math.atan2(y1 - y2, x1 - x2)
  const bx = x1 - 6 * Math.cos(angleStart)
  const by = y1 - 6 * Math.sin(angleStart)
  return (
    <g>
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={color}
        strokeWidth={1.2}
        className={flow ? 'flow-line' : undefined}
        strokeDasharray={flow ? '4 6' : undefined}
      />
      <polygon
        points={`${x2},${y2} ${ax + 3 * Math.sin(angleEnd)},${ay - 3 * Math.cos(angleEnd)} ${ax - 3 * Math.sin(angleEnd)},${ay + 3 * Math.cos(angleEnd)}`}
        fill={color}
      />
      {double && (
        <polygon
          points={`${x1},${y1} ${bx + 3 * Math.sin(angleStart)},${by - 3 * Math.cos(angleStart)} ${bx - 3 * Math.sin(angleStart)},${by + 3 * Math.cos(angleStart)}`}
          fill={color}
        />
      )}
    </g>
  )
}

type Stage = { label: string; sub: string; x: number }

const ciStages: readonly Stage[] = [
  { label: 'Source', sub: 'GitHub / Azure DevOps', x: 158 },
  { label: 'Build', sub: '', x: 308 },
  { label: 'Test', sub: '', x: 402 },
  { label: 'Scan', sub: 'SAST · Deps', x: 496 },
  { label: 'Image', sub: 'Docker', x: 590 },
  { label: 'Deploy', sub: 'K8s', x: 684 },
]

export function ArchitectureDiagram() {
  const [hovered, setHovered] = useState<LayerId | null>(null)
  const dim = (id: LayerId) => (hovered && hovered !== id ? 0.55 : 1)

  return (
    <div className="diagram-wrap" aria-hidden="true">
      <svg viewBox="0 0 800 930" className="diagram">
        <defs>
          <linearGradient id="ciGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(8, 145, 178, 0.10)" />
            <stop offset="100%" stopColor="rgba(79, 70, 229, 0.10)" />
          </linearGradient>
          <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="rgba(79, 70, 229, 0.18)" />
            <stop offset="100%" stopColor="rgba(79, 70, 229, 0)" />
          </radialGradient>
          <filter
            id="iconShadow"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feDropShadow
              dx="0"
              dy="2"
              stdDeviation="1.6"
              floodColor="#000"
              floodOpacity="0.45"
            />
          </filter>
          <linearGradient id="chipBodyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(245, 158, 11, 0.28)" />
            <stop offset="100%" stopColor="rgba(245, 158, 11, 0.04)" />
          </linearGradient>
          <linearGradient id="aiBadgeGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(79, 70, 229, 0.32)" />
            <stop offset="100%" stopColor="rgba(79, 70, 229, 0.06)" />
          </linearGradient>
          <linearGradient id="shieldBodyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(8, 145, 178, 0.30)" />
            <stop offset="100%" stopColor="rgba(8, 145, 178, 0.04)" />
          </linearGradient>
          <radialGradient id="stateCircleGrad" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="rgba(129, 140, 248, 0.5)" />
            <stop offset="100%" stopColor="rgba(129, 140, 248, 0.28)" />
          </radialGradient>
          <linearGradient id="stateLineGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#5eead4" />
            <stop offset="100%" stopColor="var(--accent-teal)" />
          </linearGradient>
          <linearGradient
            id="brandTealGrad"
            gradientUnits="userSpaceOnUse"
            x1={-10}
            y1={-12}
            x2={10}
            y2={12}
          >
            <stop offset="0%" stopColor="var(--brand)" />
            <stop offset="100%" stopColor="var(--accent-teal)" />
          </linearGradient>
          <linearGradient id="gaugeArcGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--accent-coral)" />
            <stop offset="50%" stopColor="var(--accent-orange)" />
            <stop offset="100%" stopColor="var(--accent-teal)" />
          </linearGradient>
          <linearGradient id="btnSurface" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(228, 232, 245, 0.92)" />
            <stop offset="55%" stopColor="rgba(212, 216, 235, 0.88)" />
            <stop offset="100%" stopColor="rgba(190, 196, 220, 0.82)" />
          </linearGradient>
        </defs>

        <ellipse cx={400} cy={400} rx={380} ry={320} fill="url(#glow)" />

        {/* CI/CD pipeline */}
        <g
          onMouseEnter={() => setHovered('cicd')}
          onMouseLeave={() => setHovered(null)}
          opacity={dim('cicd')}
          style={{ transition: 'opacity .25s' }}
        >
          <rect
            x={20}
            y={20}
            width={760}
            height={58}
            rx={10}
            fill="url(#ciGrad)"
            stroke="var(--line-strong)"
            strokeWidth={1}
          />
          <text x={36} y={42} className="layer-title" fill="var(--text-1)">
            CI/CD Pipeline
          </text>
          <text x={36} y={58} className="layer-sub" fill="var(--text-3)">
            Delivery flow
          </text>

          {ciStages.map((s, i, arr) => {
            const isSource = s.label === 'Source'
            const w = isSource ? 130 : 74
            const cx = s.x + w / 2
            return (
              <g key={s.label}>
                <rect
                  x={s.x}
                  y={32}
                  width={w}
                  height={34}
                  rx={6}
                  fill="url(#btnSurface)"
                  stroke="var(--line-strong)"
                  strokeOpacity={0.55}
                />
                <text
                  x={cx}
                  y={49}
                  textAnchor="middle"
                  className="pill-label"
                  fill="var(--text-1)"
                >
                  {s.label}
                </text>
                {s.sub && (
                  <text
                    x={cx}
                    y={60}
                    textAnchor="middle"
                    className="micro-label"
                    fill="var(--text-3)"
                  >
                    {s.sub}
                  </text>
                )}
                {i < arr.length - 1 && (
                  <Connector
                    x1={s.x + w + 2}
                    y1={49}
                    x2={arr[i + 1].x - 3}
                    y2={49}
                    flow
                    color="var(--text-3)"
                  />
                )}
              </g>
            )
          })}
        </g>

        {/* curve from CI/CD to containers */}
        <path
          d="M 740 80 Q 770 350 740 703"
          fill="none"
          stroke="var(--brand)"
          strokeOpacity={0.35}
          strokeWidth={10.2}
          strokeDasharray="3 15"
          className="flow-line"
        />
        <polygon
          points="740,716 734,702 746,702"
          fill="var(--brand)"
          opacity={0.6}
          transform="translate(-3 0) rotate(10 740 716)"
        />

        {/* Frontend */}
        <LayerCard
          id="frontend"
          x={20}
          y={102}
          w={760}
          h={148}
          title="Frontend Layer"
          accent="var(--brand)"
          hovered={hovered}
          onHover={setHovered}
        >
          <text x={160} y={124} className="layer-sub" fill="var(--text-3)">
            Strategic UI · Design Systems · Accessible & PWA-Ready
          </text>
          <BrowserMini x={36} y={138} w={130} h={70} label="SPA" />
          <BrowserMini x={182} y={138} w={160} h={70} label="Dashboard" />
          <g>
            <rect
              x={358}
              y={138}
              width={38}
              height={70}
              rx={6}
              fill="var(--bg-1)"
              stroke="var(--line-strong)"
            />
            <rect x={362} y={146} width={30} height={54} rx={3} fill="var(--surface)" />
            <text
              x={377}
              y={220}
              textAnchor="middle"
              className="micro-label"
              fill="var(--text-3)"
            >
              PWA
            </text>
          </g>
          {/* Row 1 — stack */}
          <Pill x={481} y={138} w={66} label="Angular" accent="var(--accent-coral)" />
          <Pill x={557} y={138} w={58} label="React" accent="var(--brand)" />
          <Pill x={625} y={138} w={84} label="TypeScript" accent="var(--brand)" />
          {/* Row 2 — practices (muted, no dots) */}
          <StateIcon cx={490} cy={206} label="State Management" />
          <AccessibilityIcon cx={600} cy={206} label="Accessibility" />
          <WebPerformanceIcon cx={704} cy={206} label="Web Performance" />
        </LayerCard>

        <Connector x1={400} y1={253} x2={400} y2={271} color="var(--text-3)" flow double />

        {/* API & Security */}
        <LayerCard
          id="api"
          x={20}
          y={274}
          w={760}
          h={92}
          title="API & Security Layer"
          accent="var(--accent-teal)"
          hovered={hovered}
          onHover={setHovered}
        >
          <text x={182} y={296} className="layer-sub" fill="var(--text-3)">
            Gateway · contracts · authentication · authorization
          </text>
          {/* Layer icon: verified identity */}
          <g transform="translate(36, 314)">
            <g filter="url(#iconShadow)">
              <circle
                cx={17}
                cy={13}
                r={6}
                fill="url(#shieldBodyGrad)"
                stroke="var(--accent-teal)"
                strokeWidth={1.4}
                strokeOpacity={0.9}
              />
              <path
                d="M 5 32 Q 5 23 17 22 Q 29 23 29 32 Z"
                fill="url(#shieldBodyGrad)"
                stroke="var(--accent-teal)"
                strokeWidth={1.4}
                strokeOpacity={0.9}
                strokeLinejoin="round"
              />
            </g>
            <path
              d="M 13 10 Q 17 7.5 21 10"
              stroke="rgba(255, 255, 255, 0.30)"
              strokeWidth={1}
              fill="none"
              strokeLinecap="round"
            />
            <g filter="url(#iconShadow)">
              <circle cx={30} cy={7} r={5} fill="var(--accent-teal)" opacity={0.95} />
            </g>
            <circle
              cx={30}
              cy={7}
              r={5}
              fill="none"
              stroke="rgba(255, 255, 255, 0.35)"
              strokeWidth={0.8}
            />
            <path
              d="M 27.8 7 L 29.3 8.5 L 32.2 5"
              stroke="#fff"
              strokeWidth={1.4}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx={5} cy={26} r={1.2} fill="var(--accent-teal)" opacity={0.6} />
            <circle cx={29} cy={26} r={1.2} fill="var(--accent-teal)" opacity={0.6} />
          </g>
          <Pill x={85} y={323} w={78} label="REST APIs" accent="var(--brand)" />
          <Pill x={169} y={323} w={100} label="OAuth2 / OIDC" accent="var(--accent-teal)" />
          <Pill x={275} y={323} w={112} label="RBAC / Policies" accent="var(--accent-coral)" />
          <Pill x={393} y={323} w={76} label="Validation" accent="var(--accent-orange)" />
          <Pill x={475} y={323} w={86} label="Rate limiting" />
          {/* Shield: encryption (padlock) */}
          <g transform="translate(589, 316)">
            <g filter="url(#iconShadow)">
              <path
                d="M 4 4 L 20 0 L 36 4 L 36 22 Q 36 32 20 36 Q 4 32 4 22 Z"
                fill="url(#shieldBodyGrad)"
                stroke="var(--accent-teal)"
                strokeOpacity={0.85}
                strokeWidth={1.3}
              />
            </g>
            <path
              d="M 6 5 L 20 2 L 34 5"
              stroke="rgba(255, 255, 255, 0.25)"
              strokeWidth={1}
              fill="none"
              strokeLinejoin="round"
            />
            <path
              d="M 15 15 L 15 11 Q 15 6.5 20 6.5 Q 25 6.5 25 11 L 25 15"
              stroke="var(--accent-teal)"
              strokeWidth={1.8}
              fill="none"
              strokeOpacity={0.95}
              strokeLinecap="round"
            />
            <rect
              x={12}
              y={15}
              width={16}
              height={11}
              rx={2}
              fill="var(--accent-teal)"
              opacity={0.9}
            />
            <circle cx={20} cy={19} r={1.4} fill="var(--bg-1)" />
            <rect x={19.4} y={19.5} width={1.2} height={3.5} rx={0.4} fill="var(--bg-1)" />
            <circle cx={6} cy={22} r={1.2} fill="var(--accent-teal)" opacity={0.65} />
            <circle cx={34} cy={22} r={1.2} fill="var(--accent-teal)" opacity={0.65} />
          </g>
          {/* Shield: auth (key) */}
          <g transform="translate(657, 316)">
            <g filter="url(#iconShadow)">
              <path
                d="M 4 4 L 20 0 L 36 4 L 36 22 Q 36 32 20 36 Q 4 32 4 22 Z"
                fill="url(#aiBadgeGrad)"
                stroke="var(--brand)"
                strokeOpacity={0.85}
                strokeWidth={1.3}
              />
            </g>
            <path
              d="M 6 5 L 20 2 L 34 5"
              stroke="rgba(255, 255, 255, 0.25)"
              strokeWidth={1}
              fill="none"
              strokeLinejoin="round"
            />
            <circle
              cx={13}
              cy={18}
              r={5}
              fill="rgba(79, 70, 229, 0.22)"
              stroke="var(--brand)"
              strokeWidth={1.8}
              strokeOpacity={0.95}
            />
            <circle cx={13} cy={18} r={1.6} fill="var(--brand)" opacity={0.9} />
            <path
              d="M 18 18 L 30 18 M 24 18 L 24 22 M 28 18 L 28 21"
              stroke="var(--brand)"
              strokeWidth={1.8}
              strokeLinecap="round"
              strokeOpacity={0.95}
            />
            <circle cx={6} cy={22} r={1.2} fill="var(--brand)" opacity={0.65} />
            <circle cx={34} cy={22} r={1.2} fill="var(--brand)" opacity={0.65} />
          </g>
          {/* Shield: audit (check) */}
          <g transform="translate(725, 316)">
            <g filter="url(#iconShadow)">
              <path
                d="M 4 4 L 20 0 L 36 4 L 36 22 Q 36 32 20 36 Q 4 32 4 22 Z"
                fill="url(#chipBodyGrad)"
                stroke="var(--accent-orange)"
                strokeOpacity={0.85}
                strokeWidth={1.3}
              />
            </g>
            <path
              d="M 6 5 L 20 2 L 34 5"
              stroke="rgba(255, 255, 255, 0.25)"
              strokeWidth={1}
              fill="none"
              strokeLinejoin="round"
            />
            <circle cx={20} cy={18} r={9.5} fill="rgba(245, 158, 11, 0.20)" />
            <circle
              cx={20}
              cy={18}
              r={9.5}
              fill="none"
              stroke="var(--accent-orange)"
              strokeOpacity={0.55}
              strokeWidth={0.8}
            />
            <path
              d="M 14.5 18 L 18.5 22 L 26 12.5"
              stroke="var(--accent-orange)"
              strokeWidth={2.2}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeOpacity={0.95}
            />
            <circle cx={6} cy={22} r={1.2} fill="var(--accent-orange)" opacity={0.65} />
            <circle cx={34} cy={22} r={1.2} fill="var(--accent-orange)" opacity={0.65} />
          </g>
        </LayerCard>

        <Connector x1={400} y1={369} x2={400} y2={387} color="var(--text-3)" flow double />

        {/* Application Core */}
        <LayerCard
          id="backend"
          x={20}
          y={390}
          w={500}
          h={148}
          title="Application Core"
          accent="var(--brand)"
          hovered={hovered}
          onHover={setHovered}
        >
          <text x={170} y={412} className="layer-sub" fill="var(--text-3)">
            Modular services · APIs · business rules · integrations
          </text>
          <ServerIcon x={28} y={424} w={54} h={48} accent="var(--brand)" label="C# / .NET" />
          <ServerIcon
            x={96}
            y={424}
            w={54}
            h={48}
            accent="var(--accent-orange)"
            label="Python"
          />
          <ServerIcon
            x={164}
            y={424}
            w={54}
            h={48}
            accent="var(--accent-teal)"
            label="Node.js"
          />

          <g transform="translate(224, 420)">
            <rect
              x={0}
              y={0}
              width={288}
              height={108}
              rx={6}
              fill="var(--code-bg)"
              stroke="var(--line-strong)"
            />
            <rect x={0} y={0} width={288} height={14} rx={6} fill="var(--surface)" />
            <circle cx={8} cy={7} r={2} fill="var(--accent-coral)" />
            <circle cx={16} cy={7} r={2} fill="var(--accent-orange)" />
            <circle cx={24} cy={7} r={2} fill="var(--accent-teal)" />
            <text
              x={14}
              y={40}
              className="code-line"
              style={{ fontSize: '7.5px' }}
              fill="var(--text-2)"
            >
              <tspan fill="var(--accent-orange)">var</tspan>
              <tspan>{' context = '}</tspan>
              <tspan fill="var(--accent-orange)">await</tspan>
              <tspan>{' '}</tspan>
              <tspan fill="var(--brand)">_kernel</tspan>
              <tspan>{'.CreateContextAsync(input);'}</tspan>
            </text>
            <text
              x={14}
              y={58}
              className="code-line"
              style={{ fontSize: '7.5px' }}
              fill="var(--text-2)"
            >
              <tspan fill="var(--accent-orange)">var</tspan>
              <tspan>{' verified = '}</tspan>
              <tspan fill="var(--accent-orange)">await</tspan>
              <tspan>{' '}</tspan>
              <tspan fill="var(--brand)">_guardrail</tspan>
              <tspan>{'.VerifyInputAsync(context);'}</tspan>
            </text>
            <text
              x={14}
              y={84}
              className="code-line"
              style={{ fontSize: '7.5px' }}
              fill="var(--text-2)"
            >
              <tspan fill="var(--accent-orange)">return</tspan>
              <tspan>{' '}</tspan>
              <tspan fill="var(--accent-orange)">await</tspan>
              <tspan>{' '}</tspan>
              <tspan fill="var(--brand)">_aiOrchestrator</tspan>
              <tspan>{'.ExecuteRagAsync(verified);'}</tspan>
            </text>
          </g>
        </LayerCard>

        {/* AI Capability */}
        <LayerCard
          id="ai"
          x={540}
          y={390}
          w={240}
          h={304}
          title="AI Capability"
          accent="var(--accent-orange)"
          hovered={hovered}
          onHover={setHovered}
        >
          <text x={556} y={424} className="layer-sub" fill="var(--text-3)">
            Practical workflow enhancement
          </text>

          {/* LLM orchestration */}
          <Pill
            x={556}
            y={436}
            w={120}
            label="LLM orchestration"
            accent="var(--accent-orange)"
          />
          <Pill x={684} y={436} w={80} label="Guardrails" accent="var(--brand)" />

          <AIChipIcon x={584} y={486} label="Tool Calling" />
          <AICircuitIcon x={676} y={486} label="AI Agent" />

          {/* Evals caption */}
          <BrainIcon x={604} y={560} />
          <text x={658} y={583} className="layer-sub" fill="var(--accent-teal)">
            Evals
          </text>

          {/* RAG retrieval pipeline — labeled container */}
          <rect
            x={552}
            y={614}
            width={216}
            height={68}
            rx={6}
            fill="var(--bg-1)"
            stroke="var(--accent-teal)"
            strokeOpacity={0.6}
            strokeWidth={1}
            strokeDasharray="4 3"
          />
          {/* legend patch masks the border behind the title */}
          <rect x={562} y={609} width={34} height={10} fill="var(--bg-1)" />
          <text x={566} y={618} className="pill-label" fill="var(--accent-teal)">
            RAG
          </text>
          {/* flow steps as connected nodes */}
          <FlowChip x={562} y={632} w={46} label="Ingest" />
          <text x={614} y={643} textAnchor="middle" className="micro-label" fill="var(--accent-teal)">
            →
          </text>
          <FlowChip x={620} y={632} w={42} label="Chunk" />
          <text x={668} y={643} textAnchor="middle" className="micro-label" fill="var(--accent-teal)">
            →
          </text>
          <FlowChip x={674} y={632} w={42} label="Embed" />
          <text x={724} y={643} textAnchor="middle" className="micro-label" fill="var(--accent-teal)">
            →
          </text>

          <FlowChip x={562} y={658} w={58} label="Retrieve" />
          <text x={626} y={669} textAnchor="middle" className="micro-label" fill="var(--accent-teal)">
            →
          </text>
          <FlowChip x={632} y={658} w={58} label="Generate" />
        </LayerCard>

        <Connector
          x1={520}
          y1={464}
          x2={540}
          y2={464}
          color="var(--accent-orange)"
          flow
          double
        />
        <Connector x1={270} y1={541} x2={270} y2={559} color="var(--text-3)" flow double />

        {/* Data Layer */}
        <LayerCard
          id="data"
          x={20}
          y={562}
          w={500}
          h={132}
          title="Data &amp; Knowledge Layer"
          accent="var(--accent-coral)"
          hovered={hovered}
          onHover={setHovered}
        >
          <text x={205} y={584} className="layer-sub" fill="var(--text-3)">
            Polyglot Persistence · Transactional vs. Analytical
          </text>
          <DBCylinder
            x={43}
            y={598}
            w={54}
            h={56}
            accent="var(--brand)"
            label="RDBMS"
          />
          <DBCylinder
            x={133}
            y={598}
            w={54}
            h={56}
            accent="var(--accent-coral)"
            label="NoSQL"
          />
          <DBCylinder
            x={231}
            y={598}
            w={54}
            h={56}
            accent="var(--accent-orange)"
            label={'Semantic memory\n(embeddings)'}
          />
          <DataLake x={337} y={598} label="Private Data Lake" />
          <g transform="translate(438, 606)">
            <rect
              x={0}
              y={0}
              width={68}
              height={22}
              rx={6}
              fill="url(#btnSurface)"
              stroke="var(--line-strong)"
              strokeOpacity={0.55}
            />
            <circle cx={10} cy={11} r={3} fill="var(--accent-coral)" />
            <text
              x={34}
              y={15}
              textAnchor="middle"
              className="pill-label"
              fill="var(--text-2)"
            >
              Cache
            </text>
            <rect
              x={0}
              y={28}
              width={68}
              height={22}
              rx={6}
              fill="url(#btnSurface)"
              stroke="var(--line-strong)"
              strokeOpacity={0.55}
            />
            <circle cx={10} cy={39} r={3} fill="var(--accent-teal)" />
            <text
              x={34}
              y={43}
              textAnchor="middle"
              className="pill-label"
              fill="var(--text-2)"
            >
              Queue
            </text>
          </g>
        </LayerCard>

        <Connector
          x1={540}
          y1={628}
          x2={520}
          y2={628}
          color="var(--accent-orange)"
          flow
          double
        />

        {/* Containers strip */}
        <LayerCard
          id="containers"
          x={20}
          y={718}
          w={760}
          h={118}
          title="Containers & Orchestration"
          accent="var(--brand)"
          hovered={hovered}
          onHover={setHovered}
        >
          <text x={250} y={740} className="layer-sub" fill="var(--text-3)">
            Scaling · Rolling Deployment · Cloud Deployment
          </text>
          <g transform="translate(60, 760)">
            <Cloud x={0} y={0} scale={2.646} childScale={1.1}>
              <Container x={-29} y={-9} />
              <Container x={1} y={-9} />
            </Cloud>
          </g>
          <g transform="translate(190, 789) scale(1.5)">
            <Engine x={-12} y={-12} />
          </g>
          <g transform="translate(225, 760)">
            <Cloud x={0} y={0} scale={2.646} childScale={1.1}>
              <Container x={-29} y={-9} />
              <Container x={1} y={-9} />
            </Cloud>
          </g>
          <Pill x={360} y={778} w={72} label="Docker" accent="var(--brand)" />
          <Pill x={442} y={778} w={95} label="Kubernetes" accent="var(--accent-teal)" />
          <Pill x={547} y={778} w={126} label="Helm · Service mesh" />
        </LayerCard>

        <Connector x1={400} y1={838} x2={400} y2={858} color="var(--text-3)" flow double />

        {/* Cloud Infrastructure strip */}
        <LayerCard
          id="cloud"
          x={20}
          y={860}
          w={760}
          h={50}
          title=""
          accent="var(--accent-teal)"
          hovered={hovered}
          onHover={setHovered}
        >
          <text x={36} y={888} className="layer-title" fill="var(--text-1)">
            Cloud Infrastructure
          </text>
          <Cloud x={210} y={873} scale={1.35} />
          <Pill x={280} y={874} w={48} label="AWS" accent="var(--accent-orange)" />
          <Pill x={336} y={874} w={52} label="Azure" accent="var(--brand)" />
          <Pill x={396} y={874} w={72} label="Compute" />
          <Pill x={476} y={874} w={68} label="Storage" />
          <Pill x={552} y={874} w={84} label="Networking" />
          <Pill x={644} y={874} w={100} label="Observability" accent="var(--accent-teal)" />
        </LayerCard>
      </svg>
    </div>
  )
}
