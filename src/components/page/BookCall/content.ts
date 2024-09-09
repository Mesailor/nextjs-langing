export const calendlyConfig: CalendlyConfig = {
  url: "https://calendly.com/office-emotiontech/30min?hide_gdpr_banner=1",
  styles: {
    position: "relative",
    WebkitOverflowScrolling: "touch",
    minWidth: "100%",
    height: "1100px",
  },
};

interface CalendlyConfig {
  url: string;
  styles: React.CSSProperties;
}
