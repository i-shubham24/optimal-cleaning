import json
import urllib.request
import os

with open('extracted_data/optimal_reinigung_data.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

print('=== SERVICES & KEY CONTENT ===')
for k, v in data.items():
    print(f'-- {k} ({v.get("title")}) --')
    headings = [h["text"] for h in v.get("headings", [])]
    print('Headings:', headings[:5])
    print('Snippet:', v.get("paragraphs", [])[:2])
    print('List items:', v.get("list_items", [])[:3])
    print()

os.makedirs('extracted_data/assets', exist_ok=True)
logo_url = 'https://optimal-reinigung.ch/wp-content/uploads/2020/02/logo_neu.png'
try:
    headers = {'User-Agent': 'Mozilla/5.0'}
    req = urllib.request.Request(logo_url, headers=headers)
    with urllib.request.urlopen(req) as resp, open('extracted_data/assets/logo_neu.png', 'wb') as out:
        out.write(resp.read())
    print('Logo downloaded successfully!')
except Exception as e:
    print('Error downloading logo:', e)
