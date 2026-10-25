// ==========================================================================
// BANK SOAL LKS PENDIDIKAN PANCASILA KELAS XI (8 LEVEL x 10 SOAL = 80 SOAL)
// ==========================================================================

const QUIZ_BANK = [
  {
    level: 1,
    title: "Penjelajah Demokrasi",
    focus: "Pengenalan konsep demokrasi, HAM, dan kebebasan berekspresi",
    badgeName: "Badge Penjelajah Demokrasi",
    questions: [
      {
        id: 1,
        question: "Apa yang ditekankan dalam demokrasi dengan hak asasi manusia?",
        options: [
          "Kekuasaan pemerintah tanpa batas",
          "Penghormatan dan perlindungan HAM",
          "Pembatasan seluruh pendapat masyarakat",
          "Kepentingan kelompok mayoritas saja"
        ],
        correct: 1,
        explanation: "Demokrasi Pancasila menjunjung tinggi penghormatan dan perlindungan terhadap harkat serta martabat hak asasi manusia."
      },
      {
        id: 2,
        question: "Kebebasan berekspresi berarti warga dapat...",
        options: [
          "Menyebarkan fitnah tanpa akibat",
          "Memaksakan pendapat kepada orang lain",
          "Menyampaikan pendapat secara bertanggung jawab",
          "Melanggar privasi orang lain"
        ],
        correct: 2,
        explanation: "Kebebasan berekspresi harus dilaksanakan secara bertanggung jawab dan menghormati hak serta kebebasan orang lain."
      },
      {
        id: 3,
        question: "Mengapa akses informasi publik penting dalam demokrasi?",
        options: [
          "Agar masyarakat tidak ikut campur",
          "Agar pemerintah bebas dari pengawasan",
          "Agar informasi hanya dimiliki pejabat",
          "Agar warga dapat mengambil keputusan berdasarkan informasi"
        ],
        correct: 3,
        explanation: "Akses informasi memungkinkan warga berpartisipasi cerdas dan mengawasi jalannya pemerintahan secara transparan."
      },
      {
        id: 4,
        question: "Apa yang dimaksud dengan perlindungan privasi digital?",
        options: [
          "Melindungi data pribadi dari akses yang tidak sah",
          "Membagikan seluruh data kepada publik",
          "Menghapus seluruh informasi pemerintah",
          "Melarang penggunaan teknologi"
        ],
        correct: 0,
        explanation: "Perlindungan privasi digital adalah hak tiap individu agar data pribadinya aman dan tidak disalahgunakan pihak lain."
      },
      {
        id: 5,
        question: "Tindakan diskriminasi bertentangan dengan prinsip...",
        options: [
          "Persaingan ekonomi",
          "Kebebasan berusaha",
          "Persamaan dan perlindungan HAM",
          "Pembangunan infrastruktur"
        ],
        correct: 2,
        explanation: "Semua warga negara memiliki kedudukan yang sama di depan hukum dan pemerintahan tanpa pembedaan SARA."
      },
      {
        id: 6,
        question: "Salah satu cara meningkatkan kesadaran HAM adalah...",
        options: [
          "Membatasi pendidikan",
          "Melaksanakan pendidikan dan advokasi HAM",
          "Menutup akses informasi",
          "Mengurangi partisipasi masyarakat"
        ],
        correct: 1,
        explanation: "Pendidikan dan advokasi HAM menumbuhkan sikap saling menghargai dan memahami instrumen hukum perlindungan HAM."
      },
      {
        id: 7,
        question: "Partisipasi publik dalam demokrasi dapat dilakukan melalui...",
        options: [
          "Pengabaian kebijakan publik",
          "Penolakan semua keputusan",
          "Pembatasan kebebasan berpendapat",
          "Pemilu yang bebas dan adil"
        ],
        correct: 3,
        explanation: "Pemilihan umum yang bebas dan adil merupakan sarana kedaulatan rakyat untuk menentukan perwakilan dan pemimpin."
      },
      {
        id: 8,
        question: "Teknologi dalam perlindungan HAM sebaiknya digunakan untuk...",
        options: [
          "Mempromosikan dan melindungi hak manusia",
          "Mengawasi semua orang tanpa batas",
          "Menyebarkan data pribadi",
          "Membatasi informasi secara sewenang-wenang"
        ],
        correct: 0,
        explanation: "Teknologi digital menjadi sarana pemberdayaan, edukasi hukum, dan pelaporan pelanggaran hak secara cepat."
      },
      {
        id: 9,
        question: "Kebebasan media digital sebaiknya disertai dengan...",
        options: [
          "Kebebasan melanggar hukum",
          "Penghapusan semua kritik",
          "Tanggung jawab dan penghormatan terhadap hak orang lain",
          "Larangan berdiskusi"
        ],
        correct: 2,
        explanation: "Kebebasan pers dan media digital harus dibarengi etika jurnalistik, kebenaran fakta, dan tanggung jawab hukum."
      },
      {
        id: 10,
        question: "Demokrasi yang menghormati HAM memberikan perlindungan kepada...",
        options: [
          "Pejabat saja",
          "Seluruh individu tanpa diskriminasi",
          "Kelompok mayoritas saja",
          "Orang yang memiliki kekayaan"
        ],
        correct: 1,
        explanation: "Prinsip non-diskriminasi menjamin seluruh warga negara berhak memperoleh perlindungan hukum yang setara."
      }
    ]
  },
  {
    level: 2,
    title: "Pelindung Hak Asasi",
    focus: "Akses informasi, privasi, perlindungan HAM, dan partisipasi publik",
    badgeName: "Badge Pelindung Hak Asasi",
    questions: [
      {
        id: 1,
        question: "Seseorang menyebarkan data pribadi temannya tanpa izin. Prinsip yang dilanggar adalah...",
        options: [
          "Otonomi daerah",
          "Pembangunan ekonomi",
          "Perlindungan privasi",
          "Pemerataan infrastruktur"
        ],
        correct: 2,
        explanation: "Menyebarkan identitas atau data pribadi tanpa persetujuan melanggar hak privasi dan UU Perlindungan Data Pribadi."
      },
      {
        id: 2,
        question: "Pemerintah menyediakan informasi anggaran yang dapat diakses warga. Hal ini mendukung...",
        options: [
          "Transparansi pemerintahan",
          "Pembatasan partisipasi",
          "Diskriminasi sosial",
          "Intervensi peradilan"
        ],
        correct: 0,
        explanation: "Keterbukaan informasi anggaran adalah wujud tata kelola pemerintahan yang terbuka dan akuntabel."
      },
      {
        id: 3,
        question: "Ketika seseorang mengalami diskriminasi, tindakan yang tepat adalah...",
        options: [
          "Membalas dengan diskriminasi",
          "Membiarkan pelanggaran",
          "Menyebarkan identitas pelaku tanpa pertimbangan",
          "Melaporkan melalui saluran yang sesuai"
        ],
        correct: 3,
        explanation: "Pengaduan melalui lembaga berwenang (seperti Komnas HAM atau penegak hukum) menjamin penanganan yang sah dan adil."
      },
      {
        id: 4,
        question: "Mengapa pelanggaran HAM perlu ditangani secara adil?",
        options: [
          "Agar kelompok tertentu selalu menang",
          "Agar hak korban terlindungi dan pelaku bertanggung jawab",
          "Agar hukum hanya berlaku bagi warga biasa",
          "Agar kritik masyarakat dihentikan"
        ],
        correct: 1,
        explanation: "Penegakan hukum yang adil memulihkan hak korban dan mencegah impunitas pelanggaran HAM di masa depan."
      },
      {
        id: 5,
        question: "Contoh partisipasi publik di era digital adalah...",
        options: [
          "Menyebarkan informasi palsu",
          "Mengakses akun orang lain",
          "Menyampaikan aspirasi melalui kanal resmi",
          "Menghapus pendapat berbeda"
        ],
        correct: 2,
        explanation: "Kanal resmi pengaduan publik seperti SP4N-LAPOR! menjadi sarana aspirasi digital yang konstruktif."
      },
      {
        id: 6,
        question: "Undang-undang perlindungan data pribadi terutama bertujuan untuk...",
        options: [
          "Mengatur perlindungan dan penggunaan data pribadi",
          "Mewajibkan semua data dipublikasikan",
          "Melarang semua layanan digital",
          "Menghapus hak pengguna internet"
        ],
        correct: 0,
        explanation: "UU PDP mengatur tata kelola pemrosesan data pribadi agar hak asasi dan keamanan digital warga terlindungi."
      },
      {
        id: 7,
        question: "Kebebasan berpendapat tidak berarti seseorang boleh...",
        options: [
          "Memberikan kritik terhadap kebijakan",
          "Menyampaikan gagasan secara damai",
          "Mengikuti diskusi publik",
          "Mengancam dan melanggar hak orang lain"
        ],
        correct: 3,
        explanation: "Ujaran kebencian, ancaman kekerasan, dan fitnah dilarang oleh hukum karena merugikan hak asasi orang lain."
      },
      {
        id: 8,
        question: "Pendidikan HAM bagi masyarakat bertujuan untuk...",
        options: [
          "Membuat warga takut menyampaikan pendapat",
          "Meningkatkan pemahaman tentang hak dan cara melindunginya",
          "Membatasi akses terhadap hukum",
          "Mengurangi keterlibatan warga"
        ],
        correct: 1,
        explanation: "Masyarakat yang terdidik HAM akan mampu membela haknya secara damai dan menghormati hak sesama."
      },
      {
        id: 9,
        question: "Jika platform digital menghapus kritik yang sah secara sewenang-wenang, aspek yang perlu diperhatikan adalah...",
        options: [
          "Pembagian anggaran daerah",
          "Pembangunan jalan",
          "Kebebasan berekspresi dan tata kelola platform",
          "Program pensiun"
        ],
        correct: 2,
        explanation: "Moderasi konten harus memiliki standar transparansi agar tidak memberangus kritik yang sah dalam demokrasi."
      },
      {
        id: 10,
        question: "Mekanisme pengaduan pelanggaran HAM yang baik harus...",
        options: [
          "Mudah diakses dan memungkinkan penanganan yang adil",
          "Hanya menerima laporan pejabat",
          "Menolak seluruh laporan anonim tanpa pemeriksaan",
          "Tidak memberikan tindak lanjut"
        ],
        correct: 0,
        explanation: "Aksesibilitas dan kerahasiaan pelapor adalah syarat penting agar korban berani mencari keadilan."
      }
    ]
  },
  {
    level: 3,
    title: "Penegak Keadilan",
    focus: "Independensi peradilan, proses hukum yang adil, dan akuntabilitas",
    badgeName: "Badge Penegak Keadilan",
    questions: [
      {
        id: 1,
        question: "Apa arti independensi sistem peradilan?",
        options: [
          "Hakim mengikuti perintah partai",
          "Pengadilan bebas dari intervensi yang tidak semestinya",
          "Putusan ditentukan oleh kekayaan terdakwa",
          "Pemerintah menentukan seluruh putusan"
        ],
        correct: 1,
        explanation: "Independensi peradilan berarti hakim hanya tunduk pada hukum dan keadilan tanpa campur tangan kekuasaan lain."
      },
      {
        id: 2,
        question: "Mengapa hakim harus bebas dari tekanan politik?",
        options: [
          "Agar dapat memutus perkara secara objektif",
          "Agar dapat mengabaikan hukum",
          "Agar tidak perlu menjelaskan putusan",
          "Agar kebal dari pertanggungjawaban"
        ],
        correct: 0,
        explanation: "Objektivitas dan imparsialitas hakim hanya terwujud bila tidak ada tekanan dari penguasa atau kelompok politik."
      },
      {
        id: 3,
        question: "Prinsip proses peradilan yang adil menjamin bahwa...",
        options: [
          "Semua terdakwa pasti dihukum",
          "Hanya kelompok tertentu mendapat bantuan hukum",
          "Perkara diputus berdasarkan tekanan publik",
          "Setiap individu memperoleh perlakuan hukum yang adil"
        ],
        correct: 3,
        explanation: "Due process of law menjamin hak pembelaan, pemeriksaan bukti yang sah, dan perlakuan setara bagi semua pihak."
      },
      {
        id: 4,
        question: "Hak untuk mendapat pembelaan berarti seseorang...",
        options: [
          "Tidak perlu mengikuti proses hukum",
          "Bebas mengabaikan putusan pengadilan",
          "Berhak memperoleh bantuan atau pembelaan hukum",
          "Selalu dibebaskan dari tuduhan"
        ],
        correct: 2,
        explanation: "Bantuan penasihat hukum memastikan hak-hak prosedural terdakwa tidak dilanggar selama proses persidangan."
      },
      {
        id: 5,
        question: "Mengapa prosedur pengadilan harus jelas dan transparan?",
        options: [
          "Agar perkara dapat diatur oleh pihak tertentu",
          "Agar proses dapat dipahami dan dipantau sesuai aturan",
          "Agar sidang tidak membutuhkan bukti",
          "Agar hakim bebas melanggar hukum"
        ],
        correct: 1,
        explanation: "Sidang terbuka untuk umum dan putusan yang dapat diakses publik menjaga kepercayaan masyarakat terhadap hukum."
      },
      {
        id: 6,
        question: "Hakim terbukti melanggar etik profesi. Prinsip yang mengharuskan pertanggungjawaban adalah...",
        options: [
          "Otonomi daerah",
          "Kebebasan media",
          "Kemakmuran ekonomi",
          "Akuntabilitas sistem peradilan"
        ],
        correct: 3,
        explanation: "Komisi Yudisial dan Mahkamah Kehormatan Hakim menegakkan akuntabilitas etik para aparat peradilan."
      },
      {
        id: 7,
        question: "Larangan penyiksaan dalam proses hukum merupakan bentuk...",
        options: [
          "Perlindungan hak asasi manusia",
          "Peningkatan investasi",
          "Desentralisasi kekuasaan",
          "Pemerataan pajak"
        ],
        correct: 0,
        explanation: "Hak untuk bebas dari penyiksaan adalah non-derogable right yang tidak boleh dikurangi dalam keadaan apa pun."
      },
      {
        id: 8,
        question: "Jika seorang hakim memutus perkara berdasarkan bukti dan hukum, bukan tekanan pihak luar, ia menerapkan...",
        options: [
          "Dominasi mayoritas",
          "Intervensi politik",
          "Independensi peradilan",
          "Pemberdayaan ekonomi"
        ],
        correct: 2,
        explanation: "Kemandirian hakim memutus demi keadilan berdasarkan Ketuhanan Yang Maha Esa adalah ciri peradilan merdeka."
      },
      {
        id: 9,
        question: "Perlakuan diskriminatif dalam pengadilan bertentangan dengan...",
        options: [
          "Kemandirian ekonomi",
          "Persamaan di hadapan hukum",
          "Pengembangan infrastruktur",
          "Otonomi fiskal"
        ],
        correct: 1,
        explanation: "Pasal 27 Ayat 1 UUD 1945 menegaskan segala warga negara bersamaan kedudukannya di dalam hukum dan pemerintahan."
      },
      {
        id: 10,
        question: "Tujuan utama pengadilan yang merdeka dalam demokrasi adalah...",
        options: [
          "Melindungi kepentingan penguasa",
          "Membatasi akses masyarakat",
          "Mengutamakan tekanan sosial",
          "Mewujudkan keadilan dan putusan yang objektif"
        ],
        correct: 3,
        explanation: "Peradilan merdeka adalah benteng terakhir penegakan keadilan dan hak asasi setiap warga negara."
      }
    ]
  },
  {
    level: 4,
    title: "Ahli Hukum",
    focus: "Pendidikan hukum, akses keadilan, dan sistem peradilan yang responsif",
    badgeName: "Badge Ahli Hukum",
    questions: [
      {
        id: 1,
        question: "Pendidikan hukum berkelanjutan bagi hakim dibutuhkan untuk...",
        options: [
          "Mengurangi pemahaman terhadap aturan baru",
          "Menghindari evaluasi profesi",
          "Memperbarui pengetahuan dan keterampilan hukum",
          "Membatasi kemampuan menangani perkara"
        ],
        correct: 2,
        explanation: "Hukum terus berkembang seiring kemajuan teknologi dan dinamika masyarakat sehingga aparat perlu terus belajar."
      },
      {
        id: 2,
        question: "Bantuan hukum gratis bagi masyarakat kurang mampu bertujuan untuk...",
        options: [
          "Memperluas akses terhadap keadilan",
          "Mengistimewakan pejabat",
          "Menghapus seluruh proses peradilan",
          "Menggantikan tugas hakim"
        ],
        correct: 0,
        explanation: "Pos Bantuan Hukum (Posbakum) di pengadilan menjamin bahwa keadilan bukan hanya milik mereka yang mampu membayar pengacara."
      },
      {
        id: 3,
        question: "Pengawasan terhadap integritas pengadilan berguna untuk...",
        options: [
          "Meningkatkan tekanan politik",
          "Menutup informasi perkara",
          "Menghindari tanggung jawab hakim",
          "Memastikan sistem peradilan berjalan secara bertanggung jawab"
        ],
        correct: 3,
        explanation: "Pengawasan internal dan eksternal mencegah terjadinya mafia peradilan dan suap."
      },
      {
        id: 4,
        question: "Sistem peradilan yang responsif harus...",
        options: [
          "Menolak perkembangan teknologi",
          "Menyesuaikan penanganan perkara dengan kebutuhan masyarakat dan perubahan sosial",
          "Hanya menangani perkara lama",
          "Mengabaikan kebutuhan masyarakat"
        ],
        correct: 1,
        explanation: "Hukum responsif peka terhadap rasa keadilan masyarakat dan melindungi kelompok rentan (seperti perempuan dan anak)."
      },
      {
        id: 5,
        question: "Seorang warga miskin kesulitan membayar pengacara. Kebijakan yang paling sesuai adalah...",
        options: [
          "Menolak laporan warga",
          "Membatasi hak pembelaan",
          "Menyediakan bantuan hukum yang terjangkau atau gratis sesuai ketentuan",
          "Mewajibkan warga menyelesaikan semua masalah sendiri"
        ],
        correct: 2,
        explanation: "UU No. 16 Tahun 2011 tentang Bantuan Hukum mewajibkan negara membiayai bantuan hukum bagi warga miskin."
      },
      {
        id: 6,
        question: "Apabila hakim terbukti melakukan pelanggaran hukum, tindakan yang sesuai dengan akuntabilitas adalah...",
        options: [
          "Memeriksa dan menjatuhkan sanksi melalui mekanisme yang sah",
          "Membiarkannya karena berstatus hakim",
          "Menghapus semua bukti",
          "Meminta masyarakat mengabaikan kasus"
        ],
        correct: 0,
        explanation: "Tidak ada seorang pun yang berada di atas hukum, termasuk para penegak hukum itu sendiri."
      },
      {
        id: 7,
        question: "Teknologi baru dalam sistem peradilan sebaiknya digunakan untuk...",
        options: [
          "Menghapus hak terdakwa",
          "Menghindari transparansi",
          "Menggantikan semua prinsip hukum",
          "Meningkatkan layanan dengan tetap menjaga keadilan dan hak warga"
        ],
        correct: 3,
        explanation: "Sistem e-Court dan sidang online mempermudah akses dan efisiensi waktu tanpa mengurangi hak keadilan para pihak."
      },
      {
        id: 8,
        question: "Kesetaraan akses terhadap peradilan berarti...",
        options: [
          "Hanya orang kaya dapat mengajukan perkara",
          "Setiap orang memiliki kesempatan memperoleh layanan hukum",
          "Pejabat selalu mendapat putusan lebih ringan",
          "Warga desa tidak dapat mencari keadilan"
        ],
        correct: 1,
        explanation: "Akses keadilan (access to justice) adalah hak fundamental setiap warga negara tanpa memandang status sosial ekonomi."
      },
      {
        id: 9,
        question: "Pelatihan hukum yang berkualitas membantu aparat peradilan...",
        options: [
          "Mengabaikan perkembangan hukum",
          "Mengurangi akuntabilitas",
          "Menangani perkara secara kompeten dan profesional",
          "Menhindari pemeriksaan perkara"
        ],
        correct: 2,
        explanation: "Kompetensi aparat melahirkan putusan yang berkualitas, berbasis bukti, dan memenuhi rasa keadilan hukum."
      },
      {
        id: 10,
        question: "Manakah contoh peradilan yang responsif?",
        options: [
          "Menyediakan layanan informasi dan prosedur yang mudah diakses masyarakat",
          "Menolak semua pengaduan digital",
          "Memperlambat seluruh proses tanpa alasan",
          "Mengabaikan kebutuhan kelompok rentan"
        ],
        correct: 0,
        explanation: "Layanan meja informasi terpadu dan prosedur yang ramah difabel adalah cermin peradilan yang responsif."
      }
    ]
  },
  {
    level: 5,
    title: "Penggerak Daerah",
    focus: "Otonomi daerah, desentralisasi, dan pemberdayaan masyarakat lokal",
    badgeName: "Badge Penggerak Daerah",
    questions: [
      {
        id: 1,
        question: "Apa yang dimaksud dengan otonomi daerah?",
        options: [
          "Penghapusan pemerintahan daerah",
          "Penyerahan seluruh kekuasaan kepada perusahaan",
          "Kewenangan daerah mengurus urusan pemerintahan sesuai ketentuan",
          "Larangan daerah mengelola sumber daya"
        ],
        correct: 2,
        explanation: "Otonomi daerah adalah hak, wewenang, dan kewajiban daerah otonom untuk mengatur dan mengurus sendiri urusan pemerintahannya."
      },
      {
        id: 2,
        question: "Desentralisasi kekuasaan berarti...",
        options: [
          "Pemindahan sebagian kewenangan dari pusat kepada daerah sesuai aturan",
          "Semua keputusan harus dibuat presiden",
          "Daerah tidak boleh membuat kebijakan",
          "Penghapusan pelayanan publik"
        ],
        correct: 0,
        explanation: "Desentralisasi membagi kewenangan agar pelayanan publik lebih lincah dan cepat menyentuh masyarakat lokal."
      },
      {
        id: 3,
        question: "Mengapa pemerintah daerah dianggap lebih memahami kebutuhan lokal?",
        options: [
          "Karena tidak perlu mendengar warga",
          "Karena tidak terikat aturan",
          "Karena selalu memiliki dana tak terbatas",
          "Karena lebih dekat dengan masyarakat setempat"
        ],
        correct: 3,
        explanation: "Kedekatan geografis dan kultural membuat pemerintah daerah lebih peka terhadap masalah nyata warganya."
      },
      {
        id: 4,
        question: "Contoh partisipasi masyarakat dalam otonomi daerah adalah...",
        options: [
          "Mengabaikan musyawarah",
          "Mengikuti musyawarah perencanaan pembangunan daerah",
          "Menolak seluruh layanan publik",
          "Membatasi akses warga terhadap informasi"
        ],
        correct: 1,
        explanation: "Musrenbang (Musyawarah Perencanaan Pembangunan) dari tingkat desa/kelurahan menampung usulan pembangunan warga."
      },
      {
        id: 5,
        question: "Pemanfaatan potensi ekonomi dan budaya lokal bertujuan untuk...",
        options: [
          "Menghilangkan identitas daerah",
          "Meningkatkan ketergantungan sepenuhnya pada pusat",
          "Mendorong pembangunan dan kemandirian daerah",
          "Mengurangi kesempatan kerja"
        ],
        correct: 2,
        explanation: "Mengembangkan produk unggulan lokal dan pariwisata menciptakan kemandirian fiskal dan ekonomi masyarakat setempat."
      },
      {
        id: 6,
        question: "Pelayanan publik daerah yang baik harus...",
        options: [
          "Sesuai kebutuhan masyarakat dan mudah diakses",
          "Hanya tersedia bagi pejabat",
          "Dibatasi tanpa alasan",
          "Tidak menerima masukan warga"
        ],
        correct: 0,
        explanation: "Prinsip pelayanan prima adalah mudah, murah, transparan, dan tidak berbelit-belit."
      },
      {
        id: 7,
        question: "Dalam otonomi daerah, pemerintah pusat tetap dapat berperan sebagai...",
        options: [
          "Penguasa mutlak semua urusan lokal",
          "Pihak yang tidak boleh berkoordinasi",
          "Pengganti seluruh pemerintah daerah",
          "Fasilitator dan pemberi dukungan sesuai kewenangannya"
        ],
        correct: 3,
        explanation: "Indonesia adalah negara kesatuan; pemerintah pusat menjaga standar nasional, pembinaan, dan pengawasan."
      },
      {
        id: 8,
        question: "Mengapa pemerintah daerah perlu diawasi?",
        options: [
          "Agar tidak dapat menjalankan tugas",
          "Agar kewenangan digunakan secara bertanggung jawab",
          "Agar masyarakat tidak mengetahui anggaran",
          "Agar seluruh keputusan dirahasiakan"
        ],
        correct: 1,
        explanation: "Pengawasan oleh DPRD, BPK, dan warga menjamin APBD tidak dikorupsi dan tepat sasaran."
      },
      {
        id: 9,
        question: "Jika suatu daerah memiliki potensi wisata alam, langkah yang sesuai adalah...",
        options: [
          "Mengabaikan potensi tersebut",
          "Mengembangkan wisata tanpa memperhatikan lingkungan",
          "Mengembangkan wisata secara bertanggung jawab dan melibatkan masyarakat",
          "Melarang warga memperoleh manfaat ekonomi"
        ],
        correct: 2,
        explanation: "Ekowisata berbasis komunitas melestarikan alam sekaligus memberdayakan UMKM warga sekitar."
      },
      {
        id: 10,
        question: "Keputusan pembangunan dibuat melalui konsultasi warga dan mempertimbangkan kondisi setempat. Hal ini menunjukkan...",
        options: [
          "Pemberdayaan dan partisipasi masyarakat lokal",
          "Intervensi terhadap pengadilan",
          "Pelanggaran privasi",
          "Pembatasan otonomi"
        ],
        correct: 0,
        explanation: "Pemberdayaan masyarakat adalah jantung keberhasilan pelaksanaan otonomi daerah yang demokratis."
      }
    ]
  },
  {
    level: 6,
    title: "Arsitek Kemakmuran",
    focus: "Pembangunan berkelanjutan, kesejahteraan, dan pemerataan ekonomi",
    badgeName: "Badge Arsitek Kemakmuran",
    questions: [
      {
        id: 1,
        question: "Apa tujuan demokrasi dengan kemakmuran?",
        options: [
          "Memusatkan kekayaan pada satu kelompok",
          "Mendorong kesejahteraan yang merata bagi masyarakat",
          "Mengurangi layanan kesehatan",
          "Mengabaikan pembangunan ekonomi"
        ],
        correct: 1,
        explanation: "Demokrasi politik harus sejalan dengan demokrasi ekonomi untuk menghadirkan kesejahteraan umum."
      },
      {
        id: 2,
        question: "Pembangunan ekonomi berkelanjutan memperhatikan...",
        options: [
          "Keuntungan jangka pendek saja",
          "Pertumbuhan tanpa batas",
          "Kepentingan generasi sekarang saja",
          "Pertumbuhan ekonomi, lingkungan, dan generasi mendatang"
        ],
        correct: 3,
        explanation: "Pembangunan berkelanjutan menjaga kelestarian bumi agar anak cucu di masa depan tetap menikmati sumber daya alam."
      },
      {
        id: 3,
        question: "Kebijakan yang mengurangi kesenjangan ekonomi dapat dilakukan dengan...",
        options: [
          "Memperluas akses pendidikan dan layanan publik",
          "Membatasi pendidikan bagi warga miskin",
          "Mengurangi bantuan bagi kelompok rentan",
          "Memusatkan seluruh kesempatan kerja"
        ],
        correct: 0,
        explanation: "Pendidikan berkualitas adalah tangga mobilitas sosial paling efektif untuk memutus rantai kemiskinan."
      },
      {
        id: 4,
        question: "Program pelatihan kerja bagi masyarakat merupakan contoh...",
        options: [
          "Pembatasan kesempatan ekonomi",
          "Pengurangan kualitas sumber daya manusia",
          "Pemberdayaan ekonomi masyarakat",
          "Intervensi peradilan"
        ],
        correct: 2,
        explanation: "Balai Latihan Kerja (BLK) meningkatkan keahlian teknis tenaga kerja lokal agar mampu bersaing."
      },
      {
        id: 5,
        question: "Mengapa infrastruktur penting bagi kemakmuran?",
        options: [
          "Agar hanya kota besar berkembang",
          "Untuk mendukung aktivitas ekonomi dan akses pelayanan",
          "Untuk membatasi mobilitas warga",
          "Untuk mengurangi perdagangan"
        ],
        correct: 1,
        explanation: "Jalan, jembatan, pelabuhan, dan internet memangkas biaya logistik dan membuka isolasi wilayah tertinggal."
      },
      {
        id: 6,
        question: "Transparansi pengelolaan keuangan publik membantu mencegah...",
        options: [
          "Partisipasi masyarakat",
          "Pembangunan daerah",
          "Peningkatan kualitas layanan",
          "Korupsi dan penyalahgunaan kekuasaan"
        ],
        correct: 3,
        explanation: "Keterbukaan anggaran menutup celah penyelewengan dana APBN/APBD."
      },
      {
        id: 7,
        question: "Pemerintah memberikan dukungan kepada usaha kecil agar mampu berkembang. Tujuannya adalah...",
        options: [
          "Memperkuat kemampuan ekonomi masyarakat",
          "Menghapus seluruh usaha lokal",
          "Membatasi kesempatan kerja",
          "Mengurangi keterampilan tenaga kerja"
        ],
        correct: 0,
        explanation: "UMKM adalah pilar ekonomi rakyat yang menyerap lebih dari 90% tenaga kerja nasional."
      },
      {
        id: 8,
        question: "Pembangunan yang hanya mengejar keuntungan tetapi merusak lingkungan bertentangan dengan...",
        options: [
          "Kebebasan media",
          "Independensi hakim",
          "Prinsip pembangunan berkelanjutan",
          "Transparansi peradilan"
        ],
        correct: 2,
        explanation: "Kerusakan alam menimbulkan bencana yang pada akhirnya menyengsarakan masyarakat sendiri."
      },
      {
        id: 9,
        question: "Warga dilibatkan dalam perencanaan kebijakan ekonomi daerah. Hal ini mencerminkan...",
        options: [
          "Penghapusan tanggung jawab pemerintah",
          "Partisipasi publik dalam pembangunan ekonomi",
          "Pembatasan informasi publik",
          "Dominasi kelompok tertentu"
        ],
        correct: 1,
        explanation: "Kebijakan yang dirumuskan bersama warga lebih tepat menjawab prioritas kebutuhan di lapangan."
      },
      {
        id: 10,
        question: "Indikator kemakmuran yang lebih menyeluruh adalah...",
        options: [
          "Besarnya keuntungan satu perusahaan saja",
          "Banyaknya gedung di pusat kota saja",
          "Tingginya pendapatan kelompok terkaya saja",
          "Peningkatan kualitas hidup dan akses kebutuhan dasar masyarakat"
        ],
        correct: 3,
        explanation: "Indeks Pembangunan Manusia (IPM) mengukur usia harapan hidup, tingkat pendidikan, dan standar hidup layak."
      }
    ]
  },
  {
    level: 7,
    title: "Pejuang Keadilan Sosial",
    focus: "Kesetaraan kesempatan, distribusi sumber daya, dan pengurangan kesenjangan",
    badgeName: "Badge Pejuang Keadilan Sosial",
    questions: [
      {
        id: 1,
        question: "Demokrasi yang berkeadilan sosial menekankan...",
        options: [
          "Persaingan tanpa aturan",
          "Kepentingan kelompok kaya saja",
          "Kesetaraan dan keadilan dalam distribusi sumber daya dan kesempatan",
          "Penghapusan seluruh bantuan sosial"
        ],
        correct: 2,
        explanation: "Keadilan sosial bermakna tidak ada jurang pemisah yang ekstrem antara yang kaya dan yang miskin."
      },
      {
        id: 2,
        question: "Pemerataan kesempatan berarti...",
        options: [
          "Setiap individu memperoleh kesempatan yang adil tanpa diskriminasi",
          "Semua pekerjaan diberikan kepada satu kelompok",
          "Pendidikan hanya tersedia di perkotaan",
          "Kesempatan bergantung pada hubungan pribadi"
        ],
        correct: 0,
        explanation: "Setiap warga negara berhak meraih cita-cita tanpa terhalang latar belakang keluarga atau suku bangsa."
      },
      {
        id: 3,
        question: "Kebijakan pajak progresif berkaitan dengan gagasan bahwa...",
        options: [
          "Semua orang tidak perlu membayar pajak",
          "Pajak hanya digunakan oleh perusahaan",
          "Pajak harus dihapuskan",
          "Masyarakat berpenghasilan lebih tinggi dapat menanggung proporsi pajak lebih besar sesuai aturan"
        ],
        correct: 3,
        explanation: "Pajak progresif mendistribusikan kembali pendapatan untuk membiayai fasilitas publik bagi warga yang membutuhkan."
      },
      {
        id: 4,
        question: "Bantuan bagi kelompok marginal bertujuan untuk...",
        options: [
          "Memperlebar kesenjangan",
          "Membantu meningkatkan kualitas hidup dan mengurangi ketimpangan",
          "Membatasi akses terhadap pendidikan",
          "Menghilangkan partisipasi publik"
        ],
        correct: 1,
        explanation: "Jaring pengaman sosial melindungi kelompok rentan agar tidak terjerumus ke dalam kemiskinan ekstrem."
      },
      {
        id: 5,
        question: "Contoh distribusi sumber daya yang adil adalah...",
        options: [
          "Semua anggaran diberikan ke satu kota",
          "Layanan hanya tersedia bagi pejabat",
          "Anggaran dialokasikan sesuai kebutuhan masyarakat, termasuk kelompok tertinggal",
          "Daerah terpencil tidak memperoleh fasilitas"
        ],
        correct: 2,
        explanation: "Dana Alokasi Khusus (DAK) diprioritaskan untuk mengejar ketertinggalan fasilitas dasar di daerah 3T."
      },
      {
        id: 6,
        question: "Pengakuan hak kelompok minoritas berarti...",
        options: [
          "Hak mereka diakui dan dilindungi dari diskriminasi",
          "Mereka tidak boleh terlibat dalam politik",
          "Mereka harus mengikuti semua kebiasaan mayoritas",
          "Mereka tidak berhak mendapatkan layanan publik"
        ],
        correct: 0,
        explanation: "Bhinneka Tunggal Ika menjamin seluruh kelompok minoritas hidup aman dan memiliki hak konstitusional yang sama."
      },
      {
        id: 7,
        question: "Perlindungan sosial yang kuat dapat mencakup...",
        options: [
          "Larangan memperoleh layanan kesehatan",
          "Penghapusan program pensiun",
          "Pembatasan pendidikan",
          "Asuransi pengangguran, bantuan kesehatan, dan program pensiun"
        ],
        correct: 3,
        explanation: "BPJS Kesehatan dan Ketenagakerjaan adalah bentuk jaminan sosial nasional yang melindungi seluruh pekerja dan warga."
      },
      {
        id: 8,
        question: "Mengapa dampak kebijakan publik perlu dievaluasi?",
        options: [
          "Agar kebijakan tidak pernah berubah",
          "Untuk menilai apakah tujuan keadilan sosial tercapai",
          "Agar masyarakat tidak dapat memberi masukan",
          "Untuk menghindari transparansi"
        ],
        correct: 1,
        explanation: "Evaluasi mengukur apakah program pemerintah benar-benar menurunkan angka kemiskinan dan ketimpangan."
      },
      {
        id: 9,
        question: "Sekolah menyediakan fasilitas yang dapat diakses siswa penyandang disabilitas. Prinsip yang diterapkan adalah...",
        options: [
          "Dominasi ekonomi",
          "Pembatasan akses",
          "Inklusi dan kesetaraan kesempatan",
          "Sentralisasi peradilan"
        ],
        correct: 2,
        explanation: "Pendidikan inklusif membuka pintu seluas-luasnya bagi difabel untuk belajar bersama di sekolah ramah anak."
      },
      {
        id: 10,
        question: "Kesenjangan sosial dapat dikurangi melalui...",
        options: [
          "Kebijakan yang memperluas akses pendidikan, pekerjaan, dan layanan dasar",
          "Pembatasan bantuan bagi warga miskin",
          "Pengurangan kesempatan kerja",
          "Diskriminasi berdasarkan latar belakang"
        ],
        correct: 0,
        explanation: "Akses merata ke pendidikan dan kesehatan menciptakan masyarakat yang produktif dan berdaya saing."
      }
    ]
  },
  {
    level: 8,
    title: "Master Demokrasi",
    focus: "Soal analisis kasus yang menggabungkan seluruh materi",
    badgeName: "Badge Master Demokrasi",
    questions: [
      {
        id: 1,
        question: "Pemerintah daerah membuka data anggaran, melibatkan warga dalam musyawarah, dan mengevaluasi hasil pembangunan. Prinsip yang paling lengkap tercermin adalah...",
        options: [
          "Independensi peradilan saja",
          "Perlindungan privasi saja",
          "Kebebasan ekonomi tanpa pengawasan",
          "Transparansi, partisipasi publik, dan akuntabilitas"
        ],
        correct: 3,
        explanation: "Integrasi ketiga pilar tersebut menciptakan tata kelola pemerintahan yang bersih, demokratis, dan dipercaya rakyat."
      },
      {
        id: 2,
        question: "Seorang pejabat menekan hakim agar menghukum lawan politiknya. Sikap yang sesuai dengan demokrasi adalah...",
        options: [
          "Mengikuti perintah demi stabilitas",
          "Menegakkan independensi peradilan dan memutus berdasarkan hukum serta bukti",
          "Mengabaikan seluruh proses hukum",
          "Memutus perkara berdasarkan popularitas"
        ],
        correct: 1,
        explanation: "Hakim wajib menolak segala bentuk intervensi dan memutus perkara semata-mata demi keadilan dan kebenaran materiil."
      },
      {
        id: 3,
        question: "Sebuah aplikasi layanan publik mengumpulkan data warga tanpa perlindungan memadai. Perbaikan paling tepat adalah...",
        options: [
          "Meningkatkan perlindungan data dan mengatur penggunaan secara aman",
          "Mempublikasikan semua data",
          "Menghapus akses warga terhadap layanan",
          "Membagikan data kepada pihak mana pun"
        ],
        correct: 0,
        explanation: "Pemerintah wajib menjamin enkripsi dan keamanan data pribadi warga dalam sistem pemerintahan berbasis elektronik (SPBE)."
      },
      {
        id: 4,
        question: "Daerah terpencil tertinggal karena minimnya fasilitas kesehatan dan transportasi. Kebijakan paling sesuai dengan keadilan sosial adalah...",
        options: [
          "Memusatkan pembangunan di kota besar",
          "Mengurangi anggaran pelayanan dasar",
          "Memperluas infrastruktur dan akses layanan di daerah tertinggal",
          "Menyerahkan seluruh masalah kepada warga"
        ],
        correct: 2,
        explanation: "Pembangunan Indonesia-sentris memastikan warga di pelosok dan perbatasan menikmati kue pembangunan yang sama."
      },
      {
        id: 5,
        question: "Sebuah proyek meningkatkan pendapatan daerah, tetapi mencemari lingkungan dan merugikan warga. Evaluasi yang tepat harus...",
        options: [
          "Menilai keberhasilan hanya dari pendapatan",
          "Mengabaikan dampak kepada warga",
          "Melanjutkan proyek tanpa perubahan",
          "Mempertimbangkan manfaat ekonomi, dampak lingkungan, dan kesejahteraan masyarakat"
        ],
        correct: 3,
        explanation: "AMDAL (Analisis Mengenai Dampak Lingkungan) wajib ditaati agar ekonomi tumbuh tanpa mengorbankan kesehatan warga."
      },
      {
        id: 6,
        question: "Warga mengkritik kebijakan melalui media sosial dengan damai. Pemerintah seharusnya...",
        options: [
          "Menghukum semua pengkritik",
          "Menghormati kebebasan berekspresi dan menanggapi kritik secara bertanggung jawab",
          "Menutup seluruh media sosial",
          "Menghapus hak warga untuk berpendapat"
        ],
        correct: 1,
        explanation: "Kritik konstruktif adalah vitamin demokrasi yang membantu pemerintah memperbaiki kebijakan publik."
      },
      {
        id: 7,
        question: "Seorang warga miskin tidak mampu mengakses pengadilan. Solusi yang paling sesuai dengan prinsip peradilan yang adil adalah...",
        options: [
          "Menyediakan bantuan hukum dan layanan peradilan yang terjangkau",
          "Menolak perkara tersebut",
          "Meminta warga menyerah",
          "Memberikan hak hukum hanya kepada pejabat"
        ],
        correct: 0,
        explanation: "Prinsip peradilan sederhana, cepat, dan biaya ringan harus diwujudkan bagi seluruh lapisan masyarakat."
      },
      {
        id: 8,
        question: "Pemerintah membuat program pelatihan kerja bagi kelompok rentan dan membantu usaha kecil. Program tersebut terutama mendukung...",
        options: [
          "Intervensi terhadap hakim",
          "Pembatasan informasi publik",
          "Pemberdayaan ekonomi dan pengurangan kesenjangan",
          "Penghapusan otonomi daerah"
        ],
        correct: 2,
        explanation: "Pemberdayaan kelompok rentan meningkatkan kemandirian ekonomi keluarga dan mempersempit jurang kesenjangan sosial."
      },
      {
        id: 9,
        question: "Pemerintah daerah diberi kewenangan mengatur layanan lokal, tetapi penggunaan anggarannya tetap diawasi. Hal ini menunjukkan...",
        options: [
          "Daerah bebas melanggar hukum",
          "Pusat harus mengurus semua hal lokal",
          "Tidak adanya kemandirian daerah",
          "Otonomi daerah yang disertai akuntabilitas"
        ],
        correct: 3,
        explanation: "Otonomi daerah bukan kebebasan tanpa batas, melainkan desentralisasi yang wajib dipertanggungjawabkan kepada rakyat dan negara."
      },
      {
        id: 10,
        question: "Manakah kebijakan yang paling mencerminkan demokrasi secara menyeluruh?",
        options: [
          "Pemerintah membatasi kritik, menutup data, dan memusatkan kekuasaan",
          "Pemerintah melindungi HAM, menegakkan hukum secara independen, melibatkan warga, dan mengupayakan kesejahteraan yang adil",
          "Pemerintah hanya mengejar pertumbuhan ekonomi",
          "Pemerintah memberi hak istimewa kepada kelompok mayoritas"
        ],
        correct: 1,
        explanation: "Demokrasi paripurna menggabungkan perlindungan HAM, supremasi hukum, partisipasi rakyat, dan kemakmuran yang berkeadilan sosial."
      }
    ]
  }
];
