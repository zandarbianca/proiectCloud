
#   Aplicatie pentru gestionarea unui meniu de restaurant
 - 
       Zandar Gabriela Bianca, grupa 1121
                
-      
        Link video:
-
        Link publicare: https://proiect-cloud-k1v7gp65a-zandarbianca.vercel.app/
        
# Introducere 
Aplicatia pentru gestionarea meniului are ca scop vizualizarea felurilor de mancare disponibile intr-un meniu. De asemenea, se permite si imbunatatirea meniului prin adaugarea altor feluri de mancare. Aplicatie pemite o diversificare a meniului prin intregrarea unui AI care poate genera diferite gustari care pot fi introduse in meniu. Fiecare fel de mancare are un titlu, o scurta descriere in care este prezentat continutul acestui si de asemenea un pret. In cazul in care se doreste eliminarea unui fel de mancare, acesta poate fi sters folosit butonul "Sterge". In Pagina principala se afla si doua butoane care trimit user-ul fie caree audagarea in menou, fie catre ChatGPT. 
# Descriere problemă 
Aplicatia este utila din punct de vedere am managementului unui restaurant. Bucatarul poate adauga noi retete sau sa elimine din cele vechi in cazul in care nu mai sunt disponibile. Clinetii restaurantului pot vedea cu usurinta felurile de mancare, componenta acestora si, de asemenea si pretul. 
# Descriere API 
- Pentru a stoca datele este folosit MongoDB aflata in Cloud cu ajutorul unui serviciu AWS.
![image](https://github.com/zandarbianca/proiectCloud/assets/81233161/c7c967c3-1037-408b-9c9d-2de433a22924)
- Structura bazei de date este de forma unui document cu proprietatile: title, description, price.
![image](https://github.com/zandarbianca/proiectCloud/assets/81233161/9b476728-a030-4d31-a65c-42f06569badf)
- Pentru a deploya aplicatia este folosit Vercel. 
![image](https://github.com/zandarbianca/proiectCloud/assets/81233161/35edcdd8-2787-4a17-b885-cb62b51f12aa)
- API-ul folosit pentru ChatGPT are urmatoarele statistici:
![image](https://github.com/zandarbianca/proiectCloud/assets/81233161/cdd9d90b-393b-4b20-b81c-e9ea595548ca)
- Generarea de tipuri de mancare
![image](https://github.com/zandarbianca/proiectCloud/assets/81233161/c921039c-165b-45ea-9971-33d13f177831)

# Flux de date 
### Pentru pagina principala, se face un request de tipul GET, care afiseaza o lista cu toate tipurile de mancare din meniu. 
- ![image](https://github.com/zandarbianca/proiectCloud/assets/81233161/0dad990c-8608-46b3-bd42-a5de60c42c03)
- ![image](https://github.com/zandarbianca/proiectCloud/assets/81233161/831c293c-20e6-454e-a0a0-e06b6c5ce4c7)
- ![image](https://github.com/zandarbianca/proiectCloud/assets/81233161/723fcece-ce9c-49ee-89a8-9761b58aaad7)

### Pentru pagina de adaugare a unui fel de mancare, se face un request de tipul POST, care adauga felul de mancare in baza de date.
- ![image](https://github.com/zandarbianca/proiectCloud/assets/81233161/1e446b19-8428-4014-95b1-ba41835be7ce)
- ![image](https://github.com/zandarbianca/proiectCloud/assets/81233161/5e38fa77-d20d-49a7-94b1-832ba2ff3a49)

### Pentru stergerea unui fel de mancare, se face un request de tipul DELETE, care sterge felul de mancare in baza de date.
- ![image](https://github.com/zandarbianca/proiectCloud/assets/81233161/59c1d0de-cff2-4a0b-aa1a-3fb4f9ca98f5)
- ![image](https://github.com/zandarbianca/proiectCloud/assets/81233161/518a6646-9794-4abf-92e5-4cbe3d6c319a)

### Pentru folosirea ChatGPT, se face un request de tipul POST.
- ![image](https://github.com/zandarbianca/proiectCloud/assets/81233161/a3c1aec3-5795-46e7-b510-eae731b564d2)
- ![image](https://github.com/zandarbianca/proiectCloud/assets/81233161/43a7f880-48d0-445c-9f78-d1921950e7d3)

# Capturi ecran aplicație 
- Pagina in care sunt afisate toate felurile de mancare:
- Link: https://proiect-cloud-k1v7gp65a-zandarbianca.vercel.app/
![image](https://github.com/zandarbianca/proiectCloud/assets/81233161/2df1e5d2-a493-40d4-bb67-798babd07ef0)
- Pagina in care se poate adauga un nou fel de mancare:
- Link: https://proiect-cloud-k1v7gp65a-zandarbianca.vercel.app/insert
![image](https://github.com/zandarbianca/proiectCloud/assets/81233161/269115c1-8430-4621-aed3-3f5a6ef1184a)
- Pagina in care se poate utiliza ChatGPT:
- Link: https://proiect-cloud-k1v7gp65a-zandarbianca.vercel.app/chat
![image](https://github.com/zandarbianca/proiectCloud/assets/81233161/f7c6a13d-8a30-4526-be10-6695900bd47d)

# Referințe 
- https://gurita-alexandru.gitbook.io/cloud-computing-2023-simpre/
- https://tailwindcss.com/
- https://platform.openai.com/
- https://vercel.com/dashboard
- https://www.mongodb.com/
