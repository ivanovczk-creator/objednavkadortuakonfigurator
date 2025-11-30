# Cukrářství Blahutovi - Katalog dortů

Tento projekt je moderní objednávkový systém a katalog pro Cukrářství Blahutovi.
Aplikace běží na **Netlify** a doplňuje hlavní web na Webnode.

## 🚀 Jak to funguje

- **Hlavní web**: Běží na Webnode (`www.cukrarstviblahutovi.cz`) - ten zůstává beze změny.
- **Tento katalog**: Poběží na Netlify (buď na `cakeorder11.netlify.app` nebo na subdoméně `objednavka...`).

---

## 🌍 VARIANTA A: "Trik s prázdnou stránkou" (DOPORUČENO)

Pokud Webnode blokuje obyčejné přesměrování, použijte tento nový kód. Místo textu zobrazí profesionální načítací kolečko.

1. Ve Webnode editoru vytvořte stránku **Dorty** (šablona Prázdná stránka).
2. Vložte **HTML Widget** a do něj tento kód:

```html
<style>
    /* Styly pro loading obrazovku */
    body { margin: 0; padding: 0; background: #fff1f2; display: flex; justify-content: center; align-items: center; height: 100vh; font-family: sans-serif; overflow: hidden; }
    .loader { border: 5px solid #fce7f3; border-top: 5px solid #e11d48; border-radius: 50%; width: 50px; height: 50px; animation: spin 1s linear infinite; margin-bottom: 20px; }
    @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
    .content { text-align: center; color: #e11d48; }
    .btn { display: none; margin-top: 20px; padding: 12px 25px; background: #e11d48; color: white; text-decoration: none; border-radius: 25px; font-weight: bold; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
    .btn:hover { background: #be123c; }
</style>

<div class="content">
    <div class="loader" style="margin: 0 auto 20px auto;"></div>
    <h3 style="margin: 0; font-weight: normal;">Načítám nabídku dortů...</h3>
    <a href="https://cakeorder11.netlify.app" class="btn" id="manualLink" target="_top">Otevřít nabídku ručně</a>
</div>

<script>
    var target = "https://cakeorder11.netlify.app";
    
    // 1. Okamžité přesměrování
    window.location.href = target;
    
    // 2. Záloha pro iframe (Webnode specifické)
    try {
        if (window.top !== window.self) {
            window.top.location.href = target;
        }
    } catch (e) { console.log(e); }

    // 3. Pokud se nic nestane do 1.5 sekundy, zobrazíme tlačítko
    setTimeout(function() {
        document.getElementById('manualLink').style.display = 'inline-block';
    }, 1500);
</script>
```

3. **Publikujte** stránku.

---

## VARIANTA B: Nastavení subdomény (Profesionální)
Toto vyžaduje změnu DNS záznamů.

1. **Na Webnode (DNS)**:
   - Nastavení -> Domény -> Spravovat DNS.
   - Přidejte záznam: `CNAME` | `objednavka` | `cakeorder11.netlify.app`.

2. **Na Netlify**:
   - Domain Management -> Add domain alias -> `objednavka.cukrarstviblahutovi.cz`.

3. **V Editoru Webnode**:
   - Vytvořte tlačítko nebo odkaz v menu, který vede na `https://objednavka.cukrarstviblahutovi.cz`.
