# Lanjutan: Kode Inventaris & Rekap Pendapatan di Laporan

## 1. Kode inventaris tampil di kartu barang

- `InventoryItemCard` mendapat prop `code` opsional, ditampilkan sebagai badge/monospace kecil di bawah nama barang (mis. `KSR-210826-01`), abu-abu, ikut terpotong rapi di layar sempit.
- Halaman Kamar (`kamar.$nomor.tsx`) dan Fasilitas (`fasilitas.tsx`) meneruskan `item.code` ke kartu.
- Bila barang belum punya kode (tanggal beli kosong), badge tidak ditampilkan.

## 2. Kode sebagai field read-only di form barang

- `ItemFormDialog` menampilkan field "Kode Inventaris" yang tidak bisa diedit:
  - Saat edit barang: menampilkan kode tersimpan.
  - Saat tambah barang / kode belum ada: menampilkan pratinjau dari `previewItemCode(nama, tanggal beli)` yang ikut berubah saat nama/tanggal diisi, dengan keterangan "dibuat otomatis saat disimpan".
- Kode tidak dikirim sebagai input pengguna; pembuatan kode tetap otomatis lewat helper `buildItemCode` saat simpan (nomor urut dihitung dari kode yang sudah ada pada barang kamar + fasilitas).

## 3. Rekap Pendapatan di halaman Laporan

Section baru "Rekap Pendapatan" di halaman Laporan, mengikuti filter periode yang sudah ada (rentang tanggal / bulan-tahun) berdasarkan tanggal bayar:

- Kartu ringkasan: total pendapatan sewa, total pendapatan lain-lain, jumlah transaksi, total keseluruhan.
- Tabel **per penyewa**: nama, kamar, jumlah transaksi, total dibayar.
- Tabel **rekap per bulan**: bulan, sewa, lain-lain, total.
- Tabel **per cara bayar**: QRIS / Transfer Bank / Tunai — jumlah transaksi, total, persentase.

## 4. Rekap Pendapatan masuk ke ekspor

- Ekspor Excel: sheet tambahan "Pendapatan" berisi ketiga tabel rekap (per penyewa, per bulan, per cara bayar) dengan format Rupiah.
- Ekspor CSV: blok rekap pendapatan ditambahkan setelah tabel inventaris, dipisahkan judul per blok.
- Ekspor PDF: halaman baru "Rekap Pendapatan" dengan tiga tabel bergaya sama seperti tabel inventaris (header navy, baris bergaris biru lembut) dan tetap memakai header/footer laporan.
- Ada saklar (checkbox) "Sertakan rekap pendapatan" di panel ekspor supaya bisa dimatikan.

## 5. Verifikasi

- Typecheck akhir.
- Cek preview: halaman Kamar (kode di kartu + form), Fasilitas, dan Laporan (section rekap + pratinjau PDF), tanpa error konsol.

## Catatan teknis

- Data pendapatan diambil dari `incomesQuery` dan tabel `other_incomes` (query baru bila belum ada di `src/lib/income.ts`), difilter di klien memakai `payment_date` / `income_date`.
- Agregasi ditulis sebagai fungsi murni baru di `src/lib/income-report.ts` (per tenant, per bulan, per metode) supaya bisa dipakai UI dan ekspor tanpa duplikasi.
- `ExportMeta` di `src/lib/report-export.ts` diperluas dengan `pendapatan?` opsional; ekspor lama tetap jalan tanpa perubahan pemanggil.
- Kode barang memakai helper yang sudah ada di `src/lib/item-code.ts`; tidak ada perubahan skema database.
