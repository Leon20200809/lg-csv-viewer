// App.tsx

import { useEffect, useState } from "react";
import CsvTable from "./CsvTable";

export default function App() {
  // const [csvText, setCsvText] = useState<string>("読み込み中...");
  const [error, setError] = useState<string>("");

  type CsvRow = Record<string, string>;

  const [csvData, setCsvData] = useState<CsvRow[]>([]);

  const CSV_URL =
    "https://docs.google.com/spreadsheets/d/19uzYNoPMGQO_t4pUcoT-AsZnE4uLl19QW6jUeWYj1YM/export?format=csv&gid=1569387322";

  

  useEffect(() => {

    const run = async () => {
      try {
        setError("");

        const res = await fetch(CSV_URL);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        // 0. CSVをテキストに変換
        const text = await res.text();

        // 1. 行に分割
        const rows = text.trim().split("\n");

        // 2. 各行をカンマで分割して「配列の配列」を作る
        const rawData = rows.map((row) => row.split(","));

        // 3. 1行目をヘッダーとして抽出し、それ以降をデータとする
        const [headerRow, ...dataRows] = rawData;

        // 4. オブジェクトの配列に変換する (例: { "名前": "田中", "年齢": "20" })
        const formattedData = dataRows.map((row) => {
          const obj: CsvRow = {};
          headerRow?.forEach((header, index) => {
            obj[header.trim()] = row[index]?.trim() ?? "";
          });
          return obj;
        });

        console.table(formattedData);
        setCsvData(formattedData);
      } catch (err) {
        setError("CSVの読み込みに失敗しました。");
      }
    };

    run();
  }, []);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="font-bold text-3xl">仁王３鍛冶素材(髄材)ドロップ場所</h1>
      <p className="lg-brand-color">小地獄・敵拠点 ※2週目かつ強化状態</p>

      {error && <p className="text-red-500">{error}</p>}

      <div className="bg-white rounded-xl shadow-lg p-2">
        <CsvTable data={csvData} />
      </div>
    </div>
  );
}
