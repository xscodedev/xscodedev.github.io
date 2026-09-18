type Props = {
  size?: number
}

export function Wordmark({ size = 56 }: Props) {
  return (
    <a href="#top" className="wordmark" aria-label="XS CodeDev home">
      <span className="wm-mark" style={{ width: size, height: size }}>
        <svg
          viewBox="0 0 40 40"
          width={size}
          height={size}
          aria-hidden="true"
          style={{
            transform: 'perspective(150px) rotateX(-12deg)',
            transformOrigin: '50% 50%',
            overflow: 'visible',
          }}
        >
          <defs>
            <filter
              id="wmXShadow"
              x="-60%"
              y="-60%"
              width="220%"
              height="220%"
            >
              <feDropShadow
                dx="0"
                dy="0.6"
                stdDeviation="0.4"
                floodColor="#000"
                floodOpacity="0.6"
              />
              <feDropShadow
                dx="1"
                dy="3"
                stdDeviation="1.8"
                floodColor="#000"
                floodOpacity="0.55"
              />
              <feDropShadow
                dx="2"
                dy="5"
                stdDeviation="3.5"
                floodColor="#0a1024"
                floodOpacity="0.5"
              />
            </filter>
            <filter
              id="wmTextShadow"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feDropShadow
                dx="0"
                dy="1"
                stdDeviation="0.7"
                floodColor="#000"
                floodOpacity="0.7"
              />
            </filter>
            <linearGradient id="wmXGrad" x1="0.2" y1="0" x2="0.5" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="45%" stopColor="#eef3ff" />
              <stop offset="100%" stopColor="#9aa8c8" />
            </linearGradient>
            <clipPath id="wmBigBarClip">
              <polygon points="28,8 36,8 12,32 4,32" />
            </clipPath>
          </defs>

          {/* 3D block: right side faces, bottom side faces, front faces */}
          <g filter="url(#wmXShadow)">
            {/* right side faces (medium dark) */}
            <polygon points="12,8 13.5,10 18.5,15 17,13" fill="#3a4870" />
            <polygon points="27,23 28.5,25 37.5,34 36,32" fill="#3a4870" />
            <polygon points="36,8 37.5,10 13.5,34 12,32" fill="#3a4870" />
            {/* bottom side faces (darker) */}
            <polygon points="17,13 13,17 14.5,19 18.5,15" fill="#1c243d" />
            <polygon points="28,32 36,32 37.5,34 29.5,34" fill="#1c243d" />
            <polygon points="4,32 12,32 13.5,34 5.5,34" fill="#1c243d" />
            {/* front faces (white gradient) */}
            <polygon points="4,8 12,8 17,13 13,17" fill="url(#wmXGrad)" />
            <polygon points="36,32 28,32 23,27 27,23" fill="url(#wmXGrad)" />
            <polygon points="28,8 36,8 12,32 4,32" fill="url(#wmXGrad)" />
          </g>

          {/* blue rectangle painted on the big bar — long edges parallel to small bars */}
          <polygon points="22.3,13.7 26.3,17.7 17.7,26.3 13.7,22.3" fill="#3b82f6" />

          {/* small lowercase x */}
          <text
            x="7"
            y="20"
            textAnchor="middle"
            dominantBaseline="central"
            fontFamily="'Space Grotesk', system-ui, sans-serif"
            fontSize="11"
            fontWeight="800"
            fill="#ffffff"
            filter="url(#wmTextShadow)"
          >
            x
          </text>

          {/* small lowercase s */}
          <text
            x="33"
            y="20"
            textAnchor="middle"
            dominantBaseline="central"
            fontFamily="'Space Grotesk', system-ui, sans-serif"
            fontSize="11"
            fontWeight="800"
            fill="#ffffff"
            filter="url(#wmTextShadow)"
          >
            s
          </text>
        </svg>
      </span>
      <span className="wm-text">        
        <span className="wm-x-cap">X</span>
        <span className="wm-x-low">s</span>
        <span className="wm-dot">·</span>
        <span className="wm-codedev">CodeDev</span>
      </span>
    </a>
  )
}
