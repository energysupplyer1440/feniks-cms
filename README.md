# 🏠 Feniks Apartments — CMS Edition

Strona apartamentów Feniks z wbudowanym panelem CMS (Decap CMS).

## 🚀 Jak to wdrożyć

### 1. Stwórz nowe repozytorium na GitHub

- Wejdź na https://github.com/new
- Nazwa: `feniks-cms`
- Ustaw: **Public**
- **NIE zaznaczaj** "Add a README", "Add .gitignore" itp.
- Kliknij **Create repository**

### 2. Wrzuć pliki

```bash
# W terminalu na swoim komputerze:
cd feniks-cms
git init
git add .
git commit -m "Pierwszy commit — Feniks z CMS"
git branch -M main
git remote add origin https://github.com/ENERGYSUPPLYER1440/feniks-cms.git
git push -u origin main
```

### 3. Włącz GitHub Pages

- Wejdź w repo → **Settings** → **Pages**
- Source: **GitHub Actions**
- Strona zbuduje się sama po pushu

### 4. Skonfiguruj OAuth do logowania w CMS

Żeby klient mógł się zalogować do panelu `/admin`, potrzebujesz OAuth app:

**Opcja A — Netlify (najprościej, za darmo):**
1. Zarejestruj się na https://app.netlify.com
2. Kliknij **Add new site** → **Import an existing project** → **Deploy with GitHub**
3. Wybierz repo `feniks-cms`
4. Build command: `node scripts/build.js`, Publish directory: `.`
5. Netlify automatycznie ogarnie OAuth — w panelu CMS logujesz się przez "Login with Netlify Identity"

**Opcja B — GitHub OAuth (dla GitHub Pages):**
1. Wejdź na https://github.com/settings/developers
2. **New OAuth App**
   - Application name: `Feniks CMS`
   - Homepage URL: `https://ENERGYSUPPLYER1440.github.io/feniks-cms`
   - Authorization callback URL: `https://api.netlify.com/auth/done`
3. Zainstaluj Netlify Identity widget na stronie: (opcjonalnie)
   Więcej: https://decapcms.org/docs/github-backend/

## 🎯 Jak działa CMS

1. Otwórz `https://ENERGYSUPPLYER1440.github.io/feniks-cms/admin`
2. Zaloguj się przez GitHub
3. **🏠 Apartamenty** — dodawaj, edytuj, usuwaj apartamenty
4. **⭐ Opinie** — zarządzaj recenzjami gości
5. Każda zmiana → commit na GitHub → automatyczny build strony ✅

## 📁 Struktura projektu

```
feniks-cms/
├── index.html              # Główna strona
├── admin/
│   ├── index.html          # Panel CMS
│   └── config.yml          # Konfiguracja CMS
├── data/
│   ├── apartments.json     # ⚡ Zbudowany plik (nie edytuj ręcznie!)
│   ├── reviews.json        # ⚡ Zbudowany plik (nie edytuj ręcznie!)
│   ├── apartments/         # 📝 Edytuj przez CMS →
│   │   ├── karmel.json
│   │   ├── argento.json
│   │   └── ...
│   └── reviews/            # 📝 Edytuj przez CMS →
│       ├── review-1.json
│       └── ...
├── scripts/
│   └── build.js            # Skrypt łączący pliki
├── images/                 # Zdjęcia (opcjonalnie)
└── .github/workflows/
    └── deploy.yml          # Auto-deploy
```

## 🛠️ Lokalny build

```bash
node scripts/build.js
```

## 💡 Dla klienta — instrukcja obsługi CMS

Kopiuj i wklej do maila dla klienta:

---

**Jak edytować swoją stronę apartamentów?**

1. Wejdź na: `https://ENERGYSUPPLYER1440.github.io/feniks-cms/admin`
2. Kliknij **"Login with Netlify Identity"** albo zaloguj przez GitHub
3. Zobaczysz listę apartamentów — kliknij któryś, żeby edytować
4. Zmień nazwę, opis, zdjęcia, udogodnienia
5. Kliknij **"Publish"** — strona odświeży się automatycznie za 1-2 minuty

To wszystko! Nie potrzebujesz żadnego programu, wszystko działa w przeglądarce.
