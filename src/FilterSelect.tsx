// FilterSelect.tsx
type CsvRow = Record<string, string>;

type Props = {
  csvData: CsvRow[];
  selectedItem: string;
  setSelectedItem: (value: string) => void;
  filterKey: string;
};

export default function FilterSelect({
  csvData,
  selectedItem,
  setSelectedItem,
  filterKey,
}: Props) {
  const options = Array.from(new Set(csvData.map((row) => row[filterKey])));

  return (
    <div className="my-4">
      <select
        value={selectedItem}
        onChange={(e) => setSelectedItem(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="">すべて</option>

        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
