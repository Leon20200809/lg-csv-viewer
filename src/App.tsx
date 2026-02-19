import { useEffect, useState } from "react";


export default function App() {

  const [csvText, setCsvText] = useState<string>("読み込み中...");
  const [error, setError] = useState<string>("");

  const CSV_URL = "https://docs.google.com/spreadsheets/d/19uzYNoPMGQO_t4pUcoT-AsZnE4uLl19QW6jUeWYj1YM/export?format=csv&gid=1569387322";

  useEffect(() => {
    const run = async () => {
      try{
        setError("");

        const res = await fetch(CSV_URL);
        if(!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const text = await res.text();
        setCsvText(text);
      } catch (err) {
        setError("CSVの読み込みに失敗しました。");
      }
    };

    run();

  }, []);

  return (
    <div>
      <h1 className="font-bold text-6xl">TSX修行中</h1>
      <p className="lg-brand-color">俺は今、構造を理解している。</p>
      {error && <p className="text-red-500">{error}</p>}
      <pre className="bg-gray-100 p-4 mt-4 whitespace-pre-wrap">{csvText}</pre>
    </div>
  );

}