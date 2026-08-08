import { ImageResponse } from "next/og";

export const alt = "Chanin Pholsiri — Full-Stack Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const tags = ["React", "Next.js", "TypeScript", "ASP.NET Core", "Docker"];

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#080c14",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "radial-gradient(ellipse 60% 60% at 50% 42%, rgba(6,182,212,0.22) 0%, transparent 70%)",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "10px 22px",
            borderRadius: 999,
            border: "1px solid rgba(52,211,153,0.4)",
            background: "rgba(52,211,153,0.1)",
            marginBottom: 36,
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              background: "#34d399",
              display: "flex",
            }}
          />
          <div style={{ fontSize: 22, color: "#34d399", fontWeight: 600 }}>
            Open to new opportunities
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 92, fontWeight: 700, color: "#f1f5f9" }}>
          Chanin&nbsp;
          <span
            style={{
              backgroundImage: "linear-gradient(135deg, #06b6d4, #818cf8)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Pholsiri
          </span>
        </div>

        <div style={{ display: "flex", fontSize: 34, color: "#94a3b8", marginTop: 14 }}>
          Full-Stack Software Engineer
        </div>

        <div style={{ display: "flex", gap: 14, marginTop: 44 }}>
          {tags.map((tag) => (
            <div
              key={tag}
              style={{
                display: "flex",
                padding: "10px 22px",
                borderRadius: 999,
                border: "1px solid rgba(51,65,85,0.7)",
                background: "rgba(30,41,59,0.7)",
                color: "#cbd5e1",
                fontSize: 20,
                fontWeight: 500,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
