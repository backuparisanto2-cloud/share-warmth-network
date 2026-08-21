# Denah: hemat ruang, mode layar penuh, dan kode barang

## Masalah sekarang
- Gambar denah berformat persegi 1024x1024 sementara gambarnya sendiri hanya mengisi bagian tengah (kira-kira 12–88% lebar dan 24–65% tinggi), jadi ada pita putih besar di atas dan bawah.
- Denah hanya bisa dilihat di kartu kecil; sulit membaca detail lantai penuh.
- Barang inventaris sudah punya kode, tetapi kode itu belum terlihat di denah.

## Yang akan dikerjakan

### 1. Pangkas ruang putih
- Tiap denah mendapat area pangkas (crop) dalam persen: lantai 1–3 dan rooftop diberi batas sesuai gambar sebenarnya.
- Peta menampilkan hanya area itu, sehingga tinggi kartu menyusut drastis dan denah terlihat lebih besar tanpa mengubah gambar aslinya.
- Titik-titik area (hotspot) otomatis dihitung ulang terhadap area pangkas, jadi posisinya tetap tepat.

### 2. Mode layar penuh per lantai
- Tombol "Layar penuh" di sudut peta membuka denah memenuhi layar, lengkap dengan tab pemilih lantai, zoom/geser, legenda, dan panel detail area.
- Bisa ditutup dengan tombol X atau tombol Escape; pilihan lantai dan area tetap sinkron dengan halaman di belakangnya.

### 3. Kode barang di denah
- Setiap area kamar/fasilitas menampilkan jumlah barang; saat di-zoom atau di mode layar penuh muncul chip berisi kode barang yang ada di area itu (mis. `TV-2504`), dengan sisa dipadatkan jadi "+n".
- Ada sakelar "Tampilkan kode barang" agar tampilan bisa dibuat bersih kembali.
- Panel detail area juga menuliskan kode di samping nama barang, dan chip kode bisa diklik untuk membuka halaman kamar/fasilitas dengan barang tersebut tersaring.

## Catatan teknis
- `src/lib/floorplan.ts`: tambah field `crop { x, y, w, h }` per `FloorPlan` plus helper untuk memetakan koordinat hotspot ke ruang crop.
- `src/components/FloorPlanMap.tsx`: bungkus gambar dalam wadah ber-aspect-ratio hasil crop (gambar diperbesar `100/crop.w` dan digeser negatif), terima props baru `codesFor(hotspot)`, `showCodes`, `onToggleCodes`, `onRequestFullscreen`; chip kode hanya dirender bila lebar hotspot efektif cukup.
- `src/routes/denah.tsx`: kumpulkan `code` dari `allRoomItemsQuery` / `sharedItemsQuery` per hotspot, state `fullscreen` + `showCodes`, render mode layar penuh (Dialog full-screen, `Escape` menutup), dan tampilkan kode di `FloorPlanDetail`.
- Verifikasi: `tsgo --noEmit` plus cek Playwright pada desktop dan mobile (kartu terpangkas, layar penuh terbuka, chip kode tampil).
