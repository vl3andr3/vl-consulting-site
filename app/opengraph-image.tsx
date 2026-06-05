import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#F7F4EF",
          color: "#1A1A1A",
          padding: "80px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "24px",
          }}
        >
          <div
            style={{
              fontSize: 120,
              fontWeight: 800,
              letterSpacing: "-6px",
              color: "#1E40AF",
              lineHeight: 1,
            }}
          >
            VL
          </div>
          <div
            style={{
              fontSize: 40,
              fontWeight: 700,
              color: "#1A1A1A",
            }}
          >
            {site.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              fontSize: 56,
              fontWeight: 700,
              lineHeight: 1.15,
              maxWidth: "950px",
              color: "#1A1A1A",
            }}
          >
            Strategy and execution at the intersection of science, technology, and
            innovation.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              color: "#1E40AF",
              fontWeight: 600,
            }}
          >
            {`${site.tagline} · Vé Léandre, Ph.D.`}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
