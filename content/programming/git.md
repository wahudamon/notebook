---
title: "Git"
metaTitle: "Git"
metaDescription: "Tentang git dan perintah-perintahnya"
---

Git adalah sebuah sistem pengontrol versi (version control system) untuk proyek pengembangan perangkat lunak. Pengontrol versi bertugas mencatat setiap perubahan pada file proyek yang dikerjakan oleh banyak orang maupun sendiri.

### List Perintah Git
- **git config**
```git
git config -global user.name "bagas"
git config -global user.email "bagas@gmail.com"
```
perintah ini digunakan untuk konfigurasi username dan alamat email untuk digunakan ketika menandai commit.

- **git init**
```git
git init [alamat folder projek]
git init /home/project/helloworld
```
perintah ini digunakan untuk membuat repositori baru

- **git clone**
```git
git clone [url]
git clone git@github.com:wahudamon/notebook.git
```
perintah ini digunakan untuk mendapatkan repo dari url github atau gitlab

- **git add**
```git
git add project_1
git add *
```
perintah ini digunakan untuk menambahkan sebuah file atau lebih ke dalam staging area

- **git commit**
```git
git commit -m "[tuliskan pesan commitnya]"
git commit -m "merubah let menjadi const"
git commit -a
```
perintah ini digunakan mencatat perubahan yang dilakukan pada sebuah file atau lebih

- **git diff**
```git
git diff
```
perintah git diff digunakan untuk menginspeksi perubahan yang dilakukan ketika bekerja pada suatu repositori Git yang belum masuk ke staging area

- **git diff -staged**
```git
git diff --staged
```
perintah git diff digunakan untuk menginspeksi perubahan yang dilakukan ketika bekerja pada suatu repositori Git yang sudah masuk ke staging area

- **git diff branch**
```git
git diff branch_1 branch_2
```
perintah ini menginspeksi perubahan dan perbedaan antara branch pertama dan kedua yang disebutkan pada baris perintah git diff

- **git reset [file]**
```git
git reset index.js
```
perintah ini digunakan untuk menunstages atau mengeluarkan file yang terdapat perubahan dari staging area

- **git reset [commit]**
```git
git reset HEAD~
```
perintah ini digunakan untuk meng-undo semua atau commit tertentu yang dilakukan

- **git reset -hard [commit]**
```git
git reset --hard HEAD~
```
perintah ini digunakan untuk meng-undo semua riwayat commit yang dilakukan

- **git status**
```git
git status
```
perintah ini digunakan untuk menampilkan list semua file yang harus di commit

- **git rm**
```git
git rm README.md
```
perintah ini digunakan untuk menghapus file pada working directory dan memasukkn dalam staging area proses penghapusannya

- **git log**
```git
git log
```
perintah ini digunakan untuk melihat daftar riwayat versi dari current branch

- **git log -follow**
```git
git log --follow README.md
```
perintah ini digunakan untuk melihat daftar riwayat versi dari sebuah file

- **git show**
```git
git show 90f2787e3fdf0ddd26cf96a720987120b4348054
```
perintah ini digunakan untuk menampilkan metadata dan perubahan konten pada commit tertentu

- **git tag**
```git
git tag 90f2787e3fdf0ddd26cf96a720987120b4348054
```
perintah ini digunakan untuk memberikan tags pada commit tertentu

- **git branch**
```git
git branch
```
perintah ini digunakan untuk menampilkan daftar branch yang ada pada repositori

- **git branch [branch name]**
```git
git branch fix_homepage_bugs
```
perintah ini digunakan untuk membuat branch baru

- **git branch -d [branch name]**
```git
git branch -d fix_homepage_bugs
```
perintah ini digunakan untuk menghapus branch tertentu

- **git checkout [branch-name]**
```git
git checkout fix_homepage_bugs
```
perintah ini digunakan untuk berpindah dari satu branch ke yang lain

- **git branch -b [branch name]**
```git
git branch -b fix_homepage_bugs
```
perintah ini digunakan untuk membuat branch baru sekaligus berpindah ke branch tersebut

lanjut nanti lagi deh...

### Links
- [tentang git](https://www.petanikode.com/git-untuk-pemula/)
- [setup ssh di git](https://www.petanikode.com/github-ssh)
- [basic git command](https://www.edureka.co/blog/git-commands-with-example/)
- [bermain dengan git diff](https://icalrn.id/bermain-dengan-git-diff/)