# Tutorial ZIP, GitHub, Remote, Push, dan GitHub Pages — Street Store

## 1. Ekstrak ZIP

**Android:** unduh `Street_Store_GitHub_Pages.zip`, buka aplikasi pengelola file, lalu pilih Ekstrak. Pastikan strukturnya `street-store/index.html`, `street-store/admin/index.html`, `street-store/css/`, dan `street-store/js/`.

**Termux (jika ZIP berada di Download yang dibagikan):**

```bash
termux-setup-storage
pkg install git unzip -y
cd ~/storage/downloads
unzip -o Street_Store_GitHub_Pages.zip
cd street-store
ls
```

Jika nama atau lokasi file berbeda, cari file ZIP di aplikasi pengelola file dan sesuaikan path. Jangan menjalankan `git init` di folder yang salah—folder proyek harus berisi `index.html`.

**Komputer:** klik kanan ZIP → Extract All. Buka terminal pada folder `street-store/`.

## 2. Buat repository

Buka <https://github.com/new>. Buat repository bernama **Street-Store**. Jika ingin mendorong isi proyek lokal, biarkan opsi README, `.gitignore`, dan license awal tidak dicentang agar repo kosong. Salin URL repository yang benar.

## 3. Init dan push

Dari folder `street-store/`:

```bash
git init
git branch -M main
git add .
git commit -m "Initial commit Street Store"
git remote add origin https://github.com/USERNAME/Street-Store.git
git push -u origin main
```

Ganti `USERNAME` dengan username akun GitHub milikmu. Jika identitas commit diminta:

```bash
git config --global user.name "Nama GitHub Kamu"
git config --global user.email "email-kamu@example.com"
git add .
git commit -m "Initial commit Street Store"
```

Sebelum menambah remote, cek apakah sudah ada:

```bash
git remote -v
```

Jika `origin` ada dan URL salah, perbaiki—jangan menambah remote kedua:

```bash
git remote set-url origin https://github.com/USERNAME/Street-Store.git
git push -u origin main
```

Jika tidak ada remote, barulah gunakan `git remote add origin ...`. Bila push ditolak karena riwayat berbeda, periksa isi remote dan konflik terlebih dahulu. Jangan memakai `git push --force` sebagai langkah awal.

## 4. Publikasikan dengan GitHub Pages

Repository → **Settings → Pages → Deploy from a branch → main → /(root) → Save**. Tunggu hasil deployment. URL umumnya `https://USERNAME.github.io/Street-Store/`, dan dashboard admin pada `https://USERNAME.github.io/Street-Store/admin/`. URL hanya benar setelah username/repository disesuaikan dan GitHub Pages mengonfirmasi publikasi.

## 5. Pembaruan berikutnya

```bash
git status
git add .
git commit -m "Update Street Store"
git push
```

Jalankan perintah dari folder repository. Jika tidak ada perubahan baru, Git tidak membuat commit baru.

## Catatan

Admin mengatur kata sandi lokal saat pertama kali dibuka. Ini bukan autentikasi server. Pengaturan admin, katalog, dan pesanan lokal tidak tersinkronisasi antarperangkat. Pesanan pelanggan perlu dikirim sendiri ke WhatsApp penjual; membuka WhatsApp tidak berarti pesan sudah dikirim atau pembayaran telah berhasil.
