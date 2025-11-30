# Cukrářství Blahutovi - Katalog dortů

Tento projekt je moderní objednávkový systém a katalog pro Cukrářství Blahutovi.
Aplikace běží na **Netlify** a doplňuje hlavní web na Webnode.

## 🚀 Jak to funguje

- **Hlavní web**: Běží na Webnode (`www.cukrarstviblahutovi.cz`) - ten zůstává beze změny.
- **Tento katalog**: Poběží na Netlify (buď na `cakeorder11.netlify.app` nebo na subdoméně `objednavka...`).

---

## 🌍 VARIANTY PROPOJENÍ S WEBNODE

Máte dvě možnosti, jak dostat katalog na svůj web. Vyberte si tu, která vám jde nastavit.

### VARIANTA A: "Trik s prázdnou stránkou" (Nejjednodušší)
Pokud ve Webnode nemůžete najít "Externí odkaz", použijte tento postup. Vytvoříme stránku, která zákazníka automaticky přesměruje.

1. Ve Webnode editoru dejte **Přidat stránku**.
2. Vyberte šablonu **Prázdná stránka** a nazvěte ji **Dorty**.
3. Na novou stránku přidejte obsah typu **HTML** (černé tlačítko + a vybrat HTML).
4. Vložte tam tento kód:
   ```html
   <script>
       window.location.href = "https://cakeorder11.netlify.app";
   </script>
   <div style="text-align: center; padding: 50px;">
       <h2>Načítám katalog dortů...</h2>
       <p>Pokud se stránka neotevře, <a href="https://cakeorder11.netlify.app">klikněte zde</a>.</p>
   </div>
   ```
5. **Publikujte** stránku.
   
*Výsledek: Zákazník klikne v menu na "Dorty" a automaticky se mu otevře katalog.*

---

### VARIANTA B: Nastavení subdomény (Profesionální)
Toto vyžaduje změnu DNS záznamů.

1. **Na Webnode (DNS)**:
   - Nastavení -> Domény -> Spravovat DNS.
   - Přidejte záznam: `CNAME` | `objednavka` | `cakeorder11.netlify.app`.

2. **Na Netlify**:
   - Domain Management -> Add domain alias -> `objednavka.cukrarstviblahutovi.cz`.

3. **V Editoru Webnode**:
   - Vytvořte tlačítko nebo odkaz v menu, který vede na `https://objednavka.cukrarstviblahutovi.cz`.

---

## 📁 Správa obsahu

- **Úprava cen/produktů**: Otevřete soubor `index.html` na GitHubu a najděte sekci `const PRODUCTS`.
- **Přidání fotek**: Nahrajte fotku do složky `images/` na GitHubu. Název souboru musí odpovídat ID produktu (např. `45.jpg`).

## 🛠 Technické detaily

- Web je postaven v jednom souboru `index.html` pro maximální kompatibilitu.
- Používá React 18 a Tailwind CSS přes CDN.
