import { useMemo, useState } from "react";
import Pagination from "./Pagination";

function PaginatedList({ items }: { items: any[] }) {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 10;

  // Filter
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((it:any) => it.title.toLowerCase().includes(q));
  }, [items, query]);

  // Compute pagination bounds
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize)); //2

  // Keep current page stable: only clamp if out of range
  const currentPage = Math.min(page, totalPages); //7, 2

  const start = (currentPage - 1) * pageSize;//0, 10
  const visible = filtered.slice(start, start + pageSize);//

  const prev = () => setPage((p) => Math.max(1, p - 1));
  const next = () => setPage((p) => Math.min(totalPages, p + 1));

  // If query changes and current page becomes invalid, clamp
  // (Alternative: useEffect to adjust page when totalPages changes)
  if (currentPage !== page) {
    // sync state without extra render loops (in practice, prefer useEffect)
    setPage(currentPage);
  }

  return (
    <div style={{ maxWidth: 580 }}>
      <h1 >Pagination: 10 items per page</h1>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by title…"
        style={{ width: "100%", padding: 8, marginBottom: 12 }}
      />

      <ul>
        {visible.map((it:any) => (
          <li key={it.id}>{it.title}</li>
        ))}
      </ul>

      <Pagination 
        prev={prev} 
        next={next} 
        currentPage={currentPage} 
        filtered={filtered} 
        totalPages={totalPages} 
      />
    </div>
  );
}

export default PaginatedList;

/* Example items:
const items = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  title: `Item ${i + 1}`
}));
*/