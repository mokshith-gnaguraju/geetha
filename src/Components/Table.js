import React, { useState } from 'react';

const ITEMS_PER_PAGE = 5;

const Table = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [fetched, setFetched] = useState(false);

  React.useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => { if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`); return res.json(); })
      .then(json => { 
        const numbered = json.map((item, idx) => ({ ...item, userId: idx + 1 }));
        setData(numbered); setCurrentPage(1); setFetched(true); 
      })
      .catch(err => { setError(err.message || 'Failed to fetch data.'); setFetched(false); })
      .finally(() => setLoading(false));
  }, []);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  const paginated = data.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const styles = {
    container: { padding: '30px', fontFamily: 'Arial, sans-serif', maxWidth: '1200px', margin: '0 auto' },
    error: { color: 'red', marginBottom: '15px', fontWeight: 'bold' },
    table: { width: '100%', borderCollapse: 'collapse', marginBottom: '20px' },
    th: { backgroundColor: 'orange', color: '#fff', padding: '10px', textAlign: 'left', border: '1px solid #ddd' },
    td: { padding: '10px', border: '1px solid #ddd' },
    trEven: { backgroundColor: '#933838' },
    pagination: { display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' },
    pageBtn: (active) => ({ padding: '7px 13px', backgroundColor: active ? 'orange' : '#fff', color: active ? '#fff' : '#333', border: '1px solid orange', borderRadius: '4px', cursor: 'pointer', fontWeight: active ? 'bold' : 'normal' }),

  };

  return (
    <div style={styles.container}>
      <h2>Posts</h2>

      {loading && <div>Loading...</div>}

      {error && <div style={styles.error}>⚠ {error}</div>}

      {fetched && data.length === 0 && !loading && (
        <div style={styles.error}>No records found.</div>
      )}

      {data.length > 0 && (
        <>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>ID</th>
                <th style={styles.th}>Title</th>
                <th style={styles.th}>Body</th>
              </tr>
            </thead>
            <tbody>
              {paginated.map((item, idx) => (
                <tr key={item.id} style={idx % 2 === 0 ? styles.trEven : {}}>
                  <td style={styles.td}>{item.id}</td>
                  <td style={styles.td}>{item.title}</td>
                  <td style={styles.td}>{item.body}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={styles.pagination}>
            <button style={styles.pageBtn(false)} onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>«</button>
            <button style={styles.pageBtn(false)} onClick={() => setCurrentPage(p => p - 1)} disabled={currentPage === 1}>‹</button>

            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter(p => p === 1 || p === totalPages || Math.abs(p - currentPage) <= 1)
              .reduce((acc, p, i, arr) => {
                if (i > 0 && p - arr[i - 1] > 1) acc.push('...');
                acc.push(p);
                return acc;
              }, [])
              .map((p, i) =>
                p === '...'
                  ? <span key={`ellipsis-${i}`} style={{ padding: '0 4px' }}>...</span>
                  : <button key={p} style={styles.pageBtn(p === currentPage)} onClick={() => setCurrentPage(p)}>{p}</button>
              )}

            <button style={styles.pageBtn(false)} onClick={() => setCurrentPage(p => p + 1)} disabled={currentPage === totalPages}>›</button>
            <button style={styles.pageBtn(false)} onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages}>»</button>
          </div>

          <p style={{ marginTop: '10px', color: '#555', fontSize: '13px' }}>
            Page {currentPage} of {totalPages} — {data.length} total records
          </p>
        </>
      )}
    </div>
  );
};

export default Table;
