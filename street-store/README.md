# Street Store — Premium Static E-Commerce

Street Store adalah proyek toko online statis berbasis HTML5, CSS3, dan Vanilla JavaScript. Proyek ini dibuat di folder `street-store/` dan tidak menggunakan backend, database server, Express, atau PHP.

## Fitur

- Beranda responsif dengan hero art CSS, kategori, bagian produk pilihan, dan identitas developer.
- Katalog: pencarian, filter kategori/harga/stok, pengurutan, tampilan grid/list, dan muat lebih banyak.
- Detail produk, wishlist, keranjang, validasi stok dan kuantitas.
- Checkout tamu dengan validasi; pesanan lokal diberi ID unik dan dapat diteruskan melalui tautan WhatsApp.
- Riwayat pesanan lokal, profil pelanggan lokal yang opsional, informasi toko.
- Area admin melalui `admin/index.html` dengan sidebar kiri di desktop dan drawer di ponsel.
- CRUD produk/kategori, status pesanan lokal, pengaturan toko, backup dan pemulihan JSON.
- Tidak ada produk, rating, penjualan, ulasan, transaksi, diskon, ongkir, atau kontak bisnis palsu yang ditanam sebagai data awal. Kategori bawaan adalah struktur awal yang dapat diedit.

## Struktur proyek

```text
street-store/
├── index.html
├── shop.html
├── product.html
├── cart.html
├── checkout.html
├── wishlist.html
├── orders.html
├── about.html
├── account.html
├── admin/index.html
├── css/ (style.css, responsive.css, components.css, admin.css)
├── js/ (storage.js, app.js, products.js, cart.js, wishlist.js,
│        checkout.js, orders.js, admin.js)
├── assets/icons/mark.svg
└── README.md
```

## Menjalankan secara lokal

1. Ekstrak folder `street-store` secara utuh.
2. Buka `index.html` di browser modern untuk melihat tampilan dasar. Untuk pengalaman modul JavaScript yang paling konsisten, jalankan server statis lokal, misalnya ekstensi Live Server di editor atau `python -m http.server 8000` dari folder proyek, kemudian buka `http://localhost:8000`.
3. Halaman admin lokal berada pada `/admin/` jika server statis dijalankan dari folder proyek.

Tidak perlu memasang package atau framework. Jika browser membatasi fitur tertentu ketika file dibuka langsung (`file://`), gunakan server statis lokal.

## ZIP dan unzip

### Android

1. Unduh `Street_Store_GitHub_Pages.zip` dari lampiran proyek.
2. Buka aplikasi pengelola file, buka folder Download, lalu pilih ZIP.
3. Tekan Ekstrak. Pastikan hasilnya menjadi folder `street-store/`, dan `index.html` berada langsung di dalam folder itu, bukan satu tingkat folder tambahan.
4. Untuk Git dari Termux, pastikan lokasi ekstraksi diketahui. Jika ZIP berada di Downloads Android yang dibagikan ke Termux, jalankan:

   ```bash
   termux-setup-storage
   pkg install git unzip -y
   cd ~/storage/downloads
   unzip -o Street_Store_GitHub_Pages.zip
   cd street-store
   ```

   Periksa nama folder hasil ekstraksi dengan `ls` bila berbeda.

### Komputer

Klik kanan ZIP → Extract All / Ekstrak Semua. Masuk ke folder `street-store/` yang berisi `index.html`, lalu buka terminal di folder tersebut.

## Membuat repository GitHub

Repository belum dibuat secara otomatis oleh proyek ini.

1. Buka <https://github.com/new> dan masuk ke akun GitHub milikmu.
2. Isi nama repository `Street-Store`. Untuk project site, repository bisa Public atau sesuai pengaturan/akses akun dan Pages yang tersedia. Public memudahkan akses publik.
3. Jika folder proyek lokal sudah lengkap, jangan centang opsi membuat README, `.gitignore`, atau license awal—README proyek sudah tersedia.
4. Tekan **Create repository** dan salin URL repository yang ditampilkan. Username harus username akunmu yang sebenarnya.

## Git: init, remote, commit, push

Jalankan perintah dari folder `street-store/` yang berisi `index.html`. Pastikan Git terpasang (`git --version`). Jika belum, di Termux gunakan `pkg install git -y`.

```bash
git init
git branch -M main
git add .
git commit -m "Initial commit Street Store"
```

Jika Git meminta identitas commit, set nama dan email Git milikmu (bukan kata sandi):

```bash
git config --global user.name "Nama GitHub Kamu"
git config --global user.email "email-yang-kamu-gunakan@example.com"
```

Lalu ulangi `git commit` jika sebelumnya gagal karena identitas belum diatur.

Ganti `USERNAME` di URL berikut dengan username GitHub yang benar, dan sesuaikan kapitalisasi/nama repository sesuai URL yang dibuat.

```bash
git remote add origin https://github.com/USERNAME/Street-Store.git
git push -u origin main
```

### Jika remote sudah ada

Periksa dahulu:

```bash
git remote -v
```

Jika URL `origin` sudah benar, jangan tambahkan lagi. Jika ada `origin` tetapi URL keliru, perbaiki:

```bash
git remote set-url origin https://github.com/USERNAME/Street-Store.git
git push -u origin main
```

Jika tidak ada remote yang tampil, gunakan `git remote add origin ...` seperti di atas. Jika `git commit` mengatakan tidak ada perubahan, artinya tidak ada perubahan staged untuk commit baru; periksa `git status`. Jika commit pertama tidak berisi file, jalankan `git add .` lalu commit.

Jika `git push` ditolak karena remote memiliki commit berbeda, jangan langsung gunakan force push. Periksa `git status` dan isi repository GitHub. Jika remote berisi file awal yang penting, gabungkan sejarah secara hati-hati terlebih dahulu, misalnya `git pull --rebase origin main` setelah memeriksa konflik; selesaikan konflik sebelum push kembali. Untuk pemula, jika repository baru saja dibuat dengan README otomatis, pilihan paling mudah dan aman biasanya membuat repository kosong baru atau menggabungkan berkas dengan teliti.

GitHub dapat meminta autentikasi melalui browser/token. Jangan menaruh token atau kata sandi akun di kode website maupun file publik.

## Aktifkan GitHub Pages

1. Setelah push berhasil, buka repository `Street-Store`.
2. Buka **Settings → Pages**.
3. Pada build/deployment source, pilih **Deploy from a branch**.
4. Pilih branch `main` dan folder `/(root)`, kemudian tekan **Save**.
5. Tunggu workflow/deployment selesai. Buka URL yang ditampilkan oleh GitHub di halaman Pages.

Pola umum project site:

```text
https://USERNAME.github.io/Street-Store/
https://USERNAME.github.io/Street-Store/admin/
```

Ini adalah pola URL, bukan jaminan bahwa website telah aktif. Ganti `USERNAME` dengan username sebenarnya dan gunakan nama repository sesuai yang dibuat. Jika GitHub menampilkan URL berbeda, ikuti URL pada halaman Pages. Setelah terbit, periksa halaman publik dan admin secara terpisah.

## Memperbarui website

Dari folder repository, setelah mengubah file:

```bash
git status
git add .
git commit -m "Update Street Store"
git push
```

Jika tidak ada perubahan, Git tidak akan membuat commit baru. Tunggu deployment selesai, lalu muat ulang situs.

## Mengatur WhatsApp dan katalog

1. Buka halaman admin yang sesuai URL project site (`/Street-Store/admin/`).
2. Pada pertama kali di browser, buat kata sandi lokal minimal 10 karakter. Kata sandi diproses dengan SHA-256 Web Crypto dan hash disimpan di `localStorage` browser itu; kata sandi tidak ditanam dalam source code. Jika lupa, reset data situs browser akan menghapus pengaturan, katalog, dan data lokal lain juga.
3. Di **Pengaturan Toko**, isi nomor WhatsApp dalam format internasional tanpa tanda plus lebih disarankan, misalnya awali kode negara `62`. Nomor ini tidak disetel default karena pemilik belum memberikan nomor.
4. Tambahkan kategori dan produk pada menu admin. Gunakan URL gambar publik atau gambar yang ditambahkan ke aset proyek lalu di-push ke GitHub. File gambar yang hanya berada di galeri perangkat tidak tersedia otomatis bagi pengunjung.
5. Uji alur checkout dengan data percobaan yang jelas, dan jangan gunakan detail pelanggan nyata untuk demo publik.

## Batasan penting: localStorage dan login frontend

- `localStorage` bersifat per browser dan per origin. Data admin yang tersimpan pada origin GitHub Pages berbeda dari localhost dan tidak otomatis tersinkronisasi ke perangkat pelanggan.
- Pesanan pelanggan disimpan di browser pelanggan sendiri; dashboard admin tidak menerima pesanan tersebut secara otomatis.
- Membuka WhatsApp hanya menyiapkan pesan. Pelanggan tetap harus mengirimnya, dan itu tidak membuktikan pesanan diterima atau dibayar.
- Login admin ini adalah penghalang frontend lokal, bukan keamanan server. Pengguna yang memahami kode atau memodifikasi penyimpanan browser dapat melewatinya. Jangan simpan data sensitif atau mengandalkan panel ini untuk keamanan produksi.
- Backup JSON dapat menyertakan data pesanan dan informasi pelanggan. Simpan di tempat aman dan jangan commit file backup berisi data pribadi ke repository publik.
- Nomor WhatsApp, email, alamat, biaya pengiriman, dan informasi pembayaran sengaja kosong/belum pasti sampai diatur pemilik toko.

## Pemeriksaan yang disarankan sebelum diumumkan

Tes di browser setelah deploy: navigasi, hamburger publik, pencarian/filter, produk tambah/edit/hapus, stok dan keranjang, wishlist, checkout, format pesan WhatsApp setelah nomor diatur, riwayat lokal, login/logout admin, drawer sidebar, ekspor dan impor JSON, serta tampilan HP. Pengujian otomatis struktur dan sintaks tidak menggantikan pengujian browser langsung.
