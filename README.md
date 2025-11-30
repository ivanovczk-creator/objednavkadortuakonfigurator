# Cukrářství Blahutovi - Katalog dortů

Tento projekt je moderní objednávkový systém a katalog pro Cukrářství Blahutovi.
Aplikace běží na **Netlify** a doplňuje hlavní web na Webnode.

## 🚀 Jak to funguje

- **Hlavní web**: Běží na Webnode (`www.cukrarstviblahutovi.cz`) - ten zůstává beze změny.
- **Tento katalog**: Poběží na subdoméně (např. `objednavka.cukrarstviblahutovi.cz`) přes Netlify.

## 🌍 Nastavení domény (Bezpečný postup)

Aby tento katalog fungoval vedle vašeho hlavního webu, nastavíme ho na tzv. **subdoménu**.

### 1. Nastavení na Webnode (DNS)

1. Přihlaste se do **Webnode** -> **Nastavení** -> **Domény** -> **Spravovat DNS záznamy**.
2. **NEMAŽTE** žádné existující záznamy (hlavní web musí fungovat dál)!
3. Přidejte **nový záznam**:

| Typ | Název | Hodnota |
|---|---|---|
| **CNAME** | `objednavka` | `cakeorder11.netlify.app` |

*(Místo slova "objednavka" můžete použít třeba "katalog" nebo "eshop".)*

### 2. Nastavení na Netlify

1. Jděte do **Domain Management** -> **Add domain alias**.
2. Zadejte celou adresu: `objednavka.cukrarstviblahutovi.cz`.
3. Netlify ověří CNAME záznam a zprovozní web (může to trvat hodinu).

### 3. Propojení

Na vašem hlavním webu ve Webnode přidejte do menu nebo na tlačítko odkaz směřující na:
`https://objednavka.cukrarstviblahutovi.cz`

## 📁 Správa obsahu

- **Úprava cen/produktů**: Otevřete soubor `index.html` na GitHubu a najděte sekci `const PRODUCTS`.
- **Přidání fotek**: Nahrajte fotku do složky `images/` na GitHubu. Název souboru musí odpovídat ID produktu (např. `45.jpg`).

## 🛠 Technické detaily

- Web je postaven v jednom souboru `index.html` pro maximální kompatibilitu.
- Používá React 18 a Tailwind CSS přes CDN.
