import re
import json
import os

def konwertuj_md_na_js(md_tekst):
    pattern = re.compile(r"^\s*-\s*(.*?)\s*/\s*(TAK|NIE|T|N)\s*(?:/\s*(.*))?$", re.IGNORECASE)
    
    # Obsługa formatu: # 2013 lub # 2013 A
    wzor_rok = r"^# (\d{4})(?:\s+([A-Z]))?"
    wzor_pytanie = r"^## (\d+)\. (.+)"
    
    wyniki_calkowite = {}
    rok_biezacy = None
    pytanie_biezace = None
    pytanie_id = None
    podpunkt_id = 0
    
    for linia in md_tekst.split('\n'):
        linia = linia.strip()
        if not linia: continue
            
        match_rok = re.match(wzor_rok, linia)
        if match_rok:
            rok = match_rok.group(1)
            grupa = match_rok.group(2)
            
            # Jeśli grupa istnieje, doklejamy ją (małą literą) do roku
            if grupa:
                rok_biezacy = f"{rok}{grupa.lower()}"
            else:
                rok_biezacy = rok
                
            if rok_biezacy not in wyniki_calkowite:
                wyniki_calkowite[rok_biezacy] = []
            continue
            
        match_p = re.match(wzor_pytanie, linia)
        if match_p:
            pytanie_id = match_p.group(1)
            pytanie_biezace = match_p.group(2)
            podpunkt_id = 97 
            continue
            
        match_o = pattern.match(linia)
        if match_o and rok_biezacy is not None:
            tresc = match_o.group(1).strip()
            status_str = match_o.group(2).upper()
            tip_tresc = match_o.group(3)
            
            status = status_str in ["TAK", "T"]
            
            obj = {
                "id": f"{rok_biezacy}-{pytanie_id}-{chr(podpunkt_id)}",
                "pytanie": f"{pytanie_id}. {pytanie_biezace}",
                "odpowiedz": tresc,
                "odp": status
            }
            
            if tip_tresc:
                obj["tip"] = tip_tresc.strip()
                
            wyniki_calkowite[rok_biezacy].append(obj)
            podpunkt_id += 1
            
    return wyniki_calkowite

# Użycie
sciezka = "egzamin.md"
if os.path.exists(sciezka):
    with open(sciezka, 'r', encoding='utf-8') as f:
        dane_md = f.read()

    wyniki = konwertuj_md_na_js(dane_md)

    if not os.path.exists('src'): os.makedirs('src')

    with open('src/data.js', 'w', encoding='utf-8') as f:
        f.write("export const exams = " + json.dumps(wyniki, indent=2, ensure_ascii=False) + ";")
    print("Sukces: Plik src/data.js został wygenerowany.")
else:
    print(f"Błąd: Nie znaleziono pliku {sciezka}")