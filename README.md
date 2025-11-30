# Cukrářství Blahutovi - Katalog dortů

Tento projekt je moderní objednávkový systém a katalog pro Cukrářství Blahutovi.
Aplikace běží na **Netlify** a doplňuje hlavní web na Webnode.

## 🚀 Jak to funguje

- **Hlavní web**: Běží na Webnode (`www.cukrarstviblahutovi.cz`) - ten zůstává beze změny.
- **Tento katalog**: Poběží na Netlify (buď na `cakeorder11.netlify.app` nebo na subdoméně `objednavka...`).

---

## 🌍 VARIANTY PROPOJENÍ S WEBNODE

Máte dvě možnosti, jak dostat katalog na svůj web. Vyberte si tu, která vám jde nastavit.

### VARIANTA A: "Trik s prázdnou stránkou" (Doporučeno)
Pokud ve Webnode nemůžete najít "Externí odkaz", použijte tento postup. Vytvoříme stránku, která zákazníka automaticky přesměruje.

1. Ve Webnode editoru dejte **Přidat stránku**.
2. Vyberte šablonu **Prázdná stránka** a nazvěte ji **Dorty**.
3. Na novou stránku přidejte obsah typu **HTML** (černé tlačítko + a vybrat HTML).
4. Vložte tam tento robustní kód:
   ```html
   <meta http-equiv="refresh" content="0;url=https://cakeorder11.netlify.app">
   <script>
       window.location.replace("https://cakeorder11.netlify.app");
       // Pojistka pro iframy
       setTimeout(function() {
           window.top.location.href = "https://cakeorder11.netlify.app";
       }, 500);
   </script>
   
   <div style="text-align: center; padding: 60px 20px; font-family: sans-serif;">
       <h2 style="color: #333; margin-bottom: 20px;">Přecházím do katalogu dortů...</h2>
       <p style="margin-bottom: 30px;">Pokud se katalog neotevře automaticky, klikněte prosím na tlačítko níže:</p>
       
       <a href="https://cakeorder11.netlify.app" 
          style="display: inline-block; background-color: #e11d48; color: white; padding: 15px 40px; text-decoration: none; border-radius: 30px; font-weight: bold; font-size: 18px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          🍰 Otevřít nabídku dortů
       </a>
   </div>
   ```
5. **Publikujte** stránku.
   
*Výsledek: Zákazník klikne v menu na "Dorty" a automaticky se mu otevře katalog. Pokud má blokované skripty, uvidí velké tlačítko.*

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