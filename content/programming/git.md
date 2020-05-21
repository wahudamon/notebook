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

lanjut nanti lagi deh...

### Links
- [tentang git](https://www.petanikode.com/git-untuk-pemula/)
- [setup ssh di git](https://www.petanikode.com/github-ssh)
- [basic git command](https://www.edureka.co/blog/git-commands-with-example/)