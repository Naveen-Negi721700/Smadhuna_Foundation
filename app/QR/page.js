import { Suspense } from "react";
import QRContent from "../component/QRContent";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <QRContent />
    </Suspense>
  );         
  
}      