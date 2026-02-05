import React, { useCallback, useEffect, useMemo, useState, useTransition } from 'react'
import { useAppSelector } from '../store'

const ProductList = () => {
    const productsFromStore = useAppSelector((state) => state.products.products);
    const [isPending, startTransition] = useTransition();
    const [input, setInput]=useState('')

    type ProductItem = {
      id?: string | number;
      title?: string;
      price?: number;
    };

    const allProducts = useMemo<ProductItem[]>(() => {
      if (productsFromStore && productsFromStore.length > 0) {
        return productsFromStore as ProductItem[];
      }

      const generated: ProductItem[] = [];
      for (let i = 1; i <= 20000; i += 1) {
        generated.push({
          id: i,
          title: `Product ${i}`,
          price: (i % 100) + 0.99,
        });
      }
      return generated;
    }, [productsFromStore]);

    const expensiveFilter = useCallback((q: string) => {
      const query = q.trim().toLowerCase();
      if (!query) return allProducts;

      const result: ProductItem[] = [];
      for (let i = 0; i < allProducts.length; i += 1) {
        const p = allProducts[i];
        const title = (p.title ?? '').toLowerCase();
        const match = title.includes(query);

        for (let j = 0; j < 5; j += 1) {
          Math.sqrt(i * j + 1);
        }

        if (match) result.push(p);
      }
      return result;
    }, [allProducts]);

    const [filtered, setFiltered] = useState<ProductItem[]>(() => expensiveFilter(''));

    useEffect(() => {
      startTransition(() => {
        setFiltered(expensiveFilter(input));
      });
    }, [expensiveFilter, input, startTransition]);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const q = e.target.value;
      setInput(q); // urgent (typing)
      startTransition(() => {
        setFiltered(expensiveFilter(q)); // non-urgent
      });
    };

  return (
    <div>
      <h2>Products</h2>
      <input
        value={input}
        onChange={onChange}
        placeholder="Filter products..."
        style={{ width: '100%', maxWidth: 520, padding: 10, borderRadius: 10 }}
      />

      <div style={{ marginTop: 10, opacity: isPending ? 0.7 : 1 }}>
        {isPending ? 'Filtering…' : 'Ready'}
      </div>

      <div style={{ marginTop: 10 }}>
        Showing {Math.min(filtered.length, 200)} of {filtered.length} results (total: {allProducts.length})
      </div>

      <div style={{ marginTop: 12, display: 'grid', gap: 10 }}>
        {filtered.slice(0, 200).map((p, idx) => (
          <div key={String(p.id ?? idx)} style={{ padding: 12, borderRadius: 12, border: '1px solid rgba(255,255,255,0.10)' }}>
            <div style={{ fontWeight: 700 }}>{p.title ?? 'Untitled'}</div>
            <div style={{ opacity: 0.8 }}>{p.price != null ? `₹${p.price.toFixed(2)}` : ''}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList
