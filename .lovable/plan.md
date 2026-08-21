# Halaman Denah Interaktif (Lantai 1-3 & Rooftop)

Menambah satu halaman baru **Denah** yang menampilkan keempat gambar denah sebagai peta interaktif: setiap area kamar dan area umum bisa diklik, dengan warna status yang diambil dari data penyewa dan kondisi barang.

## Yang akan dibangun

**1. Gambar denah masuk ke aplikasi**
Keempat file denah (Lantai 1, 2, 3, Rooftop) diunggah sebagai aset CDN dan dipakai sebagai latar peta — tidak diubah, tetap tajam saat di-zoom.

**2. Halaman /denah**
- Tab pemilih lantai: Lantai 1 · Lantai 2 · Lantai 3 · Rooftop.
- Gambar denah dengan zoom & geser (pinch di HP, scroll/wheel di desktop) yang tetap presisi saat di-zoom.
- Lapisan area transparan di atas gambar: satu area per kamar, plus area umum (Selasar, Lobby, Balkon, Rooftop, Cuci Jemur, Dapur).
- Legenda warna di bawah/di samping denah.

**3. Warna status**
- Kamar terisi (ada penyewa aktif) — warna solid; kamar kosong — warna netral.
- Titik peringatan pada kamar yang punya barang berkondisi rusak/perlu perbaikan.
- Titik peringatan garansi barang yang hampir habis (mengikuti aturan yang sudah ada di kartu barang).

**4. Klik area**
- Klik kamar: panel ringkas muncul (nomor kamar, penyewa aktif, jumlah barang, kondisi) dengan tombol "Buka detail kamar" ke halaman kamar terkait.
- Klik area umum: panel ringkas berisi barang fasilitas dengan lokasi yang cocok, plus tombol ke halaman Fasilitas dengan filter lokasi tersebut.
- Di HP panel tampil sebagai sheet bawah; di desktop sebagai panel samping.

**5. Navigasi & tautan balik**
- Menu "Denah" ditambahkan ke navigasi utama.
- Di halaman detail kamar ditambahkan tautan kecil "Lihat di denah" yang membuka lantai dan menyorot kamar tersebut.

## Catatan teknis

- Rute baru `src/routes/denah.tsx` (satu halaman, lantai lewat search param `?lantai=1|2|3|rooftop` agar bisa di-bookmark), plus komponen `FloorPlanMap`, `FloorPlanHotspot`, `FloorPlanDetailPanel`.
- Hotspot disimpan sebagai data statis di `src/lib/floorplan.ts`: koordinat persen (x, y, w, h) per area, label, tipe (`kamar` | `umum`), dan `roomNumber` / `locationMatch`. Persentase membuat area tetap pas di semua ukuran layar.
- Overlay dirender sebagai SVG dengan `viewBox` mengikuti rasio gambar, di dalam wrapper transform (`transform-origin: 0 0`) sehingga zoom/pan memakai satu transform untuk gambar + hotspot; wheel-zoom memakai listener non-passive dan zoom eksponensial berbasis magnitudo delta, dengan anchor di posisi kursor.
- Data: query `rooms`, `tenants` (status Aktif, join lewat `room_number`), `room_items`, dan `shared_items` memakai pola query yang sudah ada di `src/lib/inventory.ts` / `income.ts`; agregasi status per kamar dengan `useMemo`. Tidak ada perubahan skema database.
- Pemetaan nomor kamar: koordinat diisi mengikuti denah (baris atas & bawah tiap lantai), lalu diverifikasi terhadap daftar `rooms` yang ada; kamar di data yang belum punya hotspot ditampilkan sebagai daftar "belum dipetakan" di bawah denah agar mudah dikoreksi.
- Aset: `lovable-assets create` untuk keempat gambar, dipakai lewat pointer JSON di `src/assets/`.
- `head()` khusus untuk rute denah (title, description, og).
- Ditutup dengan typecheck dan verifikasi tampilan di preview (desktop + mobile).
