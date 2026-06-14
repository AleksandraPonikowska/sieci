import re
import json
import os

def konwertuj_md_na_js(md_tekst):
    # Wzorce
    wzor_rok = r"^# (\d{4})"
    wzor_pytanie = r"^## (\d+)\. (.+)"
    wzor_odpowiedz = r"- (.+) / (TAK|NIE|T|N)"
    
    wyniki_calkowite = {}
    rok_biezacy = None
    pytanie_biezace = None
    pytanie_id = None
    podpunkt_id = 0
    
    for linia in md_tekst.split('\n'):
        linia = linia.strip()
        if not linia: continue
            
        # Wykrywanie roku
        match_rok = re.match(wzor_rok, linia)
        if match_rok:
            rok_biezacy = match_rok.group(1)
            wyniki_calkowite[rok_biezacy] = []
            continue
            
        # Wykrywanie pytania
        match_p = re.match(wzor_pytanie, linia)
        if match_p:
            pytanie_id = match_p.group(1)
            pytanie_biezace = match_p.group(2)
            podpunkt_id = 97 # 'a'
            continue
            
        # Wykrywanie odpowiedzi
        match_o = re.match(wzor_odpowiedz, linia)
        if match_o and rok_biezacy is not None:
            tresc = match_o.group(1)
            status = match_o.group(2) in ["TAK", "T"]
            
            wyniki_calkowite[rok_biezacy].append({
                "id": f"{rok_biezacy}-{pytanie_id}-{chr(podpunkt_id)}",
                "pytanie": f"{pytanie_id}. {pytanie_biezace}",
                "odpowiedz": tresc,
                "odp": status
            })
            podpunkt_id += 1
            
    return wyniki_calkowite

# Użycie
with open("egzamin.md", 'r', encoding='utf-8') as f:
    dane_md = f.read()

wyniki = konwertuj_md_na_js(dane_md)

# Zapis do src/data.js
if not os.path.exists('src'): os.makedirs('src')

with open('src/data.js', 'w', encoding='utf-8') as f:
    f.write("export const exams = " + json.dumps(wyniki, indent=2, ensure_ascii=False) + ";")

print("Plik src/data.js został wygenerowany pomyślnie.")