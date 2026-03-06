import React from 'react';

interface CsvTableProps {
  data: any[];
}

const CsvTable: React.FC<CsvTableProps> = ({ data }) => {
  if (data.length === 0) return null;

  // ヘッダー項目（オブジェクトのキー）を取得
  const headers = Object.keys(data[0]);

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
      <table className="min-w-full divide-y divide-gray-200 bg-white text-sm">
        <thead className="bg-gray-50">
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                className="px-4 py-2 text-left font-bold text-gray-900 whitespace-nowrap"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {data.map((row, index) => (
            <tr key={index} className="hover:bg-blue-50 transition-colors">
              {headers.map((header) => (
                <td
                  key={`${index}-${header}`}
                  className="px-4 py-2 text-gray-700 whitespace-nowrap"
                >
                  {row[header]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CsvTable;