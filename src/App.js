import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
export default function App() {
    const [csvText, setCsvText] = useState("読み込み中...");
    const [error, setError] = useState("");
    const CSV_URL = "https://docs.google.com/spreadsheets/d/19uzYNoPMGQO_t4pUcoT-AsZnE4uLl19QW6jUeWYj1YM/export?format=csv&gid=1569387322";
    useEffect(() => {
        const run = async () => {
            try {
                setError("");
                const res = await fetch(CSV_URL);
                if (!res.ok)
                    throw new Error(`HTTP error! status: ${res.status}`);
                const text = await res.text();
                setCsvText(text);
            }
            catch (err) {
                setError("CSVの読み込みに失敗しました。");
            }
        };
        run();
    }, []);
    return (_jsxs("div", { children: [_jsx("h1", { className: "font-bold text-6xl", children: "TSX\u4FEE\u884C\u4E2D" }), _jsx("p", { className: "lg-brand-color", children: "\u4FFA\u306F\u4ECA\u3001\u69CB\u9020\u3092\u7406\u89E3\u3057\u3066\u3044\u308B\u3002" }), error && _jsx("p", { className: "text-red-500", children: error }), _jsx("pre", { className: "bg-gray-100 p-4 mt-4 whitespace-pre-wrap", children: csvText })] }));
}
//# sourceMappingURL=App.js.map