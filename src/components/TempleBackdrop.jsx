// Original decorative architecture, not a reproduction of the photographed
// deity artwork. A licensed clean background can replace this via config.
export function SacredMark() {
  return <span className="sacred-mark" aria-hidden="true"><i/><b/></span>;
}

export default function TempleBackdrop() {
  return <div className="temple-backdrop" aria-hidden="true">
    <div className="temple-toran">{Array.from({ length: 25 }, (_, index) => <span key={index} style={{ '--leaf-index': index }}/>)}</div>
    <div className="temple-column temple-column-left"><i/><i/><i/></div>
    <div className="temple-column temple-column-right"><i/><i/><i/></div>
    <div className="temple-sanctum"><div className="temple-crown">✦</div><div className="temple-tier tier-one"/><div className="temple-tier tier-two"/><div className="temple-tier tier-three"/><div className="temple-door"/></div>
    <div className="temple-floor"/>
  </div>;
}