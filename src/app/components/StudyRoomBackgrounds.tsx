import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CloudyCatMark } from "./CloudyCatLogo";

const BACKGROUNDS = [
  {
    id: "cafe",
    name: "Cozy Café",
    description: "Warm espresso vibes & soft chatter",
    emoji: "☕",
    tag: "Popular",
    tagColor: "#E8B86A",
    accent: "#A0673A",
    overlayFrom: "rgba(60,30,10,0.32)",
    overlayTo: "rgba(120,70,20,0.18)",
    url: "https://images.unsplash.com/photo-1770825065222-383483d5f746?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwY2FmZSUyMGludGVyaW9yJTIwd2FybSUyMHN0dWR5fGVufDF8fHx8MTc3MjMyMzQwOXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "stars",
    name: "Stars at Night",
    description: "Quiet cosmos for deep focus",
    emoji: "✨",
    tag: "Chill",
    tagColor: "#7BC4CE",
    accent: "#4A6FA5",
    overlayFrom: "rgba(5,10,40,0.45)",
    overlayTo: "rgba(20,30,80,0.22)",
    url: "https://images.unsplash.com/photo-1706218259048-ca841b4f4d14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFycnklMjBuaWdodCUyMHNreSUyMHN0YXJzJTIwZGFyayUyMHBlYWNlZnVsfGVufDF8fHx8MTc3MjMyMzQwOXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "fireplace",
    name: "Fireplace",
    description: "Crackling warmth, stay-in energy",
    emoji: "🔥",
    tag: "Cozy",
    tagColor: "#E86A6A",
    accent: "#C04A20",
    overlayFrom: "rgba(80,25,5,0.38)",
    overlayTo: "rgba(160,70,10,0.15)",
    url: "https://images.unsplash.com/photo-1717497043712-e197abe15c28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwZmlyZXBsYWNlJTIwbGl2aW5nJTIwcm9vbSUyMHdhcm0lMjBnbG93fGVufDF8fHx8MTc3MjMyMzQxMHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "clouds",
    name: "Cloud Space",
    description: "Float above it all in blue serenity",
    emoji: "☁️",
    tag: "Cloudy OG",
    tagColor: "#B8E4EA",
    accent: "#5AAABF",
    overlayFrom: "rgba(10,60,100,0.28)",
    overlayTo: "rgba(60,130,170,0.12)",
    url: "https://images.unsplash.com/photo-1761166478784-dc565cffb472?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0JTIwYmx1ZSUyMGNsb3VkcyUyMGRyZWFteSUyMHNreSUyMHBhc3RlbHxlbnwxfHx8fDE3NzIzMjM0MTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

// Mini avatar placeholders for the study room preview
const AVATARS = [
  { color: "#E8B86A", label: "You" },
  { color: "#7BC4CE", label: "Alex" },
  { color: "#D6C4F0", label: "Sam" },
];

function RoomPreview({ bg }: { bg: typeof BACKGROUNDS[0] }) {
  return (
    <div className="relative w-full rounded-2xl overflow-hidden" style={{ aspectRatio: "16/9" }}>
      {/* Background photo */}
      <ImageWithFallback
        src={bg.url}
        alt={bg.name}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(160deg, ${bg.overlayFrom} 0%, ${bg.overlayTo} 100%)`,
        }}
      />
      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 50% 100%, rgba(0,0,0,0.38) 0%, transparent 70%)",
        }}
      />
      {/* Study room UI elements overlay */}
      {/* Timer chip */}
      <div
        className="absolute top-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1.5 rounded-full backdrop-blur-md"
        style={{ background: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.35)" }}
      >
        <span style={{ fontSize: 10, color: "#fff", fontFamily: "'Nunito', sans-serif", fontWeight: 800, letterSpacing: "0.15em" }}>
          🍅 25:00
        </span>
      </div>
      {/* Avatars row */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-3">
        {AVATARS.map((a) => (
          <div key={a.label} className="flex flex-col items-center gap-1">
            <div
              className="rounded-full flex items-center justify-center"
              style={{
                width: 36,
                height: 36,
                background: a.color,
                border: "2px solid rgba(255,255,255,0.7)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
              }}
            >
              <span style={{ fontSize: 16 }}>🐱</span>
            </div>
            <span style={{ fontSize: 8, color: "rgba(255,255,255,0.85)", fontFamily: "'Nunito', sans-serif", fontWeight: 700 }}>
              {a.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function StudyRoomBackgrounds() {
  const [selected, setSelected] = useState<string>("clouds");
  const [hovered, setHovered] = useState<string | null>(null);

  const activeBg = BACKGROUNDS.find((b) => b.id === selected)!;

  return (
    <div
      className="min-h-screen w-full transition-all duration-700"
      style={{ fontFamily: "'Nunito', sans-serif" }}
    >
      {/* ── FULL-SCREEN PREVIEW ── */}
      <div className="relative w-full overflow-hidden" style={{ height: "55vh", minHeight: 320 }}>
        {/* Background */}
        <ImageWithFallback
          src={activeBg.url}
          alt={activeBg.name}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
        />
        {/* Overlay */}
        <div
          className="absolute inset-0 transition-all duration-700"
          style={{
            background: `linear-gradient(170deg, ${activeBg.overlayFrom} 0%, ${activeBg.overlayTo} 60%, rgba(0,0,0,0.45) 100%)`,
          }}
        />
        {/* Top bar */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <CloudyCatMark size={36} />
            <span style={{ fontFamily: "'Fredoka One', cursive", fontSize: 22, color: "#fff", textShadow: "0 1px 6px rgba(0,0,0,0.3)" }}>
              Cloudy
            </span>
          </div>
          <div
            className="flex items-center gap-2 px-4 py-1.5 rounded-full backdrop-blur-md"
            style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)" }}
          >
            <span style={{ fontSize: 11, color: "#fff", fontWeight: 800, letterSpacing: "0.1em" }}>
              🍅 FOCUS — 25:00
            </span>
          </div>
          <div className="flex items-center gap-2">
            {AVATARS.map((a) => (
              <div
                key={a.label}
                className="rounded-full flex items-center justify-center"
                style={{
                  width: 32,
                  height: 32,
                  background: a.color,
                  border: "2px solid rgba(255,255,255,0.7)",
                }}
              >
                <span style={{ fontSize: 14 }}>🐱</span>
              </div>
            ))}
          </div>
        </div>
        {/* Center label */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 pointer-events-none">
          <span style={{ fontSize: 48 }}>{activeBg.emoji}</span>
          <span style={{ fontFamily: "'Fredoka One', cursive", fontSize: "clamp(28px,5vw,48px)", color: "#fff", textShadow: "0 2px 16px rgba(0,0,0,0.4)" }}>
            {activeBg.name}
          </span>
          <span style={{ fontSize: 14, color: "rgba(255,255,255,0.8)", fontWeight: 600, textShadow: "0 1px 8px rgba(0,0,0,0.3)" }}>
            {activeBg.description}
          </span>
        </div>
        {/* Bottom gradient fade into panel */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{ height: 80, background: "linear-gradient(to bottom, transparent, rgba(18,24,28,0.85))" }}
        />
      </div>

      {/* ── SELECTION PANEL ── */}
      <div
        className="w-full px-4 pt-6 pb-10 transition-all duration-700"
        style={{ background: "linear-gradient(to bottom, rgba(18,24,28,0.9), #12181C 60px)" }}
      >
        <div className="max-w-5xl mx-auto">
          {/* Section title */}
          <div className="flex items-center justify-between mb-5">
            <div>
              <p style={{ color: "#7BC4CE", fontSize: 11, fontWeight: 800, letterSpacing: "0.25em", textTransform: "uppercase" }}>
                Study Room
              </p>
              <h2 style={{ fontFamily: "'Fredoka One', cursive", fontSize: 24, color: "#F0F8FA", lineHeight: 1.1 }}>
                Choose your background
              </h2>
            </div>
            <button
              className="px-5 py-2.5 rounded-full text-sm transition-all duration-200 active:scale-95"
              style={{
                background: "#E8B86A",
                color: "#2B2B2B",
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 800,
                boxShadow: "0 2px 12px rgba(232,184,106,0.4)",
              }}
            >
              Start Session →
            </button>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {BACKGROUNDS.map((bg) => {
              const isSelected = selected === bg.id;
              const isHovered = hovered === bg.id;
              return (
                <button
                  key={bg.id}
                  onClick={() => setSelected(bg.id)}
                  onMouseEnter={() => setHovered(bg.id)}
                  onMouseLeave={() => setHovered(null)}
                  className="relative rounded-2xl overflow-hidden text-left transition-all duration-300 focus:outline-none"
                  style={{
                    aspectRatio: "4/3",
                    transform: isSelected ? "scale(1.03)" : isHovered ? "scale(1.015)" : "scale(1)",
                    boxShadow: isSelected
                      ? `0 0 0 3px ${bg.tagColor}, 0 8px 28px rgba(0,0,0,0.5)`
                      : "0 4px 16px rgba(0,0,0,0.35)",
                  }}
                >
                  {/* Photo */}
                  <ImageWithFallback
                    src={bg.url}
                    alt={bg.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500"
                    style={{ transform: isHovered || isSelected ? "scale(1.06)" : "scale(1)" }}
                  />
                  {/* Overlay */}
                  <div
                    className="absolute inset-0 transition-all duration-300"
                    style={{
                      background: isSelected || isHovered
                        ? `linear-gradient(160deg, ${bg.overlayFrom} 0%, rgba(0,0,0,0.5) 100%)`
                        : "linear-gradient(160deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.55) 100%)",
                    }}
                  />
                  {/* Tag */}
                  <div
                    className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full text-xs backdrop-blur-sm"
                    style={{
                      background: bg.tagColor + "33",
                      border: `1px solid ${bg.tagColor}88`,
                      color: bg.tagColor,
                      fontFamily: "'Nunito', sans-serif",
                      fontWeight: 800,
                      fontSize: 10,
                    }}
                  >
                    {bg.tag}
                  </div>
                  {/* Selected checkmark */}
                  {isSelected && (
                    <div
                      className="absolute top-2.5 left-2.5 w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ background: bg.tagColor }}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6L5 9L10 3" stroke="#2B2B2B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}
                  {/* Label */}
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span style={{ fontSize: 16 }}>{bg.emoji}</span>
                      <span style={{ fontFamily: "'Fredoka One', cursive", fontSize: 16, color: "#fff", textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}>
                        {bg.name}
                      </span>
                    </div>
                    <p style={{ fontSize: 10, color: "rgba(255,255,255,0.7)", fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}>
                      {bg.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* ── MINI PREVIEWS ── */}
          <div className="mt-8">
            <p style={{ color: "#7BC4CE", fontSize: 11, fontWeight: 800, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 16 }}>
              Room Preview
            </p>
            <RoomPreview bg={activeBg} />
          </div>
        </div>
      </div>
    </div>
  );
}
