import { useEffect, useMemo, useState } from "react";
//   @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500&display=swap');

//   @keyframes spinRing {
//     to { transform: rotate(360deg); }
//   }
//   @keyframes pulseDot {
//     0%, 100% { opacity: 0.7; transform: scale(1);    }
//     50%       { opacity: 1;   transform: scale(1.4);  }
//   }
//   @keyframes shimmerText {
//     from { background-position: -200% center; }
//     to   { background-position:  200% center; }
//   }
//   @keyframes scanBadge {
//     0%        { left: -30%; opacity: 0; }
//     15%, 85%  { opacity: 1;             }
//     100%      { left: 130%; opacity: 0; }
//   }

//   .spin-ring    { animation: spinRing   4s  linear      infinite;        }
//   .pulse-dot    { animation: pulseDot   2s  ease-in-out infinite;        }
//   .scan-line    { animation: scanBadge  3.5s ease-in-out infinite 0.8s;  }
//   .logo-shimmer { animation: shimmerText 1.2s linear forwards;           }

//   /* Gradient text */
//   .grad-text {
//     font-family:  "SN Pro", ;
//     font-weight: 800;
//     font-size: clamp(0.82rem, 2.4vw, 1.05rem);
//     letter-spacing: -0.02em;
//     background: linear-gradient(135deg, #22d3ee 0%, #a855f7 100%);
//     background-size: 300% auto;
//     -webkit-background-clip: text;
//     background-clip: text;
//     -webkit-text-fill-color: transparent;
//   }
//   .tagline-text {
//     font-family: 'DM Sans', sans-serif;
//   }
// `;

const STYLE_ID = "logo-badge-keyframes";


const KEYFRAMES = `
  @keyframes spinRing {
    to { transform: rotate(360deg); }
  }
  @keyframes pulseDot {
    0%, 100% { opacity: 0.7; transform: scale(1);    }
    50%       { opacity: 1;   transform: scale(1.4);  }
  }
  @keyframes shimmerText {
    from { background-position: -200% center; }
    to   { background-position:  200% center; }
  }
  @keyframes scanBadge {
    0%        { left: -30%; opacity: 0; }
    15%, 85%  { opacity: 1;             }
    100%      { left: 130%; opacity: 0; }
  }

  .spin-ring    { animation: spinRing   4s  linear      infinite;        }
  .pulse-dot    { animation: pulseDot   2s  ease-in-out infinite;        }
  .scan-line    { animation: scanBadge  3.5s ease-in-out infinite 0.8s;  }
  .logo-shimmer { animation: shimmerText 1.2s linear forwards;           }

  /* Gradient text */
  .grad-text {
    font-weight: 800;
    font-size: clamp(0.82rem, 2.4vw, 1.05rem);
    letter-spacing: -0.02em;
    background: linear-gradient(135deg, #22d3ee 0%, #a855f7 100%);
    background-size: 300% auto;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;


export default function LetsTalk({
  logoSrc = "",
  name = "Let's Talk",

  // tagline = "Developer",
  // fallback = "MB",
  href = "/contact",
  className = "",
  isDark = isDark,
}) {
  const [imgError, setImgError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const resolvedLogoSrc = useMemo(() => {
    if (typeof logoSrc === "string") return logoSrc;
    if (logoSrc && typeof logoSrc === "object" && "default" in logoSrc) {
      return logoSrc.default;
    }
    return "";
  }, [logoSrc]);

  useEffect(() => {
    setImgError(false);
  }, [resolvedLogoSrc]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    if (document.getElementById(STYLE_ID)) return;

    const styleTag = document.createElement("style");
    styleTag.id = STYLE_ID;
    styleTag.textContent = KEYFRAMES;
    document.head.appendChild(styleTag);
  }, []);
  const palette = isDark
    ? {
        bg: "rgba(20, 14, 40, 0.72)",
        border: "rgba(110, 60, 220, 0.38)",
        borderHover: "#22d3ee",
        tagline: "#94a3b8",
      }
    : {
        bg: "rgba(255, 255, 255, 0.78)",
        border: "rgba(15, 23, 42, 0.2)",
        borderHover: "#22d3ee",
        tagline: "#334155",
      };

  return (
    <div className={`w-fit max-w-full ${className}`.trim()}>
      <a
        href={href}
        aria-label={`${name} contact`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        className="
            relative inline-flex items-center whitespace-nowrap gap-2.5
            max-w-full
            pl-1.75 pr-2 py-1.75
            rounded-full
            border
            backdrop-blur-[18px]
            no-underline cursor-pointer overflow-hidden
            transition-all duration-280ms ease-cubic-bezier(.4,0,.2,1)
          "
        style={{
          background: palette.bg,
          borderColor: isHovered ? palette.borderHover : palette.border,
          transform: isHovered ? "translateY(-3px) scale(1.04)" : "translateY(0) scale(1)",
          boxShadow: isHovered
            ? `0 0 0 1px rgba(255,255,255,0.07) inset,
                 0 8px 36px rgba(0,0,0,0.5),
                 0 0 32px rgba(34,211,238,0.55),
                 0 0 60px rgba(168,85,247,0.45)`
            : `0 0 0 1px rgba(255,255,255,0.04) inset,
                 0 4px 24px rgba(0,0,0,0.4),
                 0 0 20px rgba(168,85,247,0.45)`,
        }}
      >
        
        <span
          className="scan-line absolute top-0 bottom-0 w-[30%] rounded-full pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(34,211,238,0.18), transparent)",
          }}
          aria-hidden="true"
        />

        <div className=" leading-1.2 justify-items-center min-w-0">
          <span className={`grad-text ${isHovered ? "logo-shimmer" : ""}`}>{name}</span>
        </div>
      </a>
    </div>
  );
}
