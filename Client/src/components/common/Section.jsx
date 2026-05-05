export default function Section({ head, children }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <ModernSectionHead>{head}</ModernSectionHead>
      {children}
    </div>
  );
