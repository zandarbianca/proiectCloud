
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
![image](https://github.com/zandarbianca/proiectCloud/assets/81233161/62d81c12-410e-4650-97ec-25735f21cb1e)
- Structura bazei de date este de forma unui document cu proprietatile: title, description, price.
![image](https://github.com/zandarbianca/proiectCloud/assets/81233161/8a1fef8d-8259-4f49-91d9-e35cf1a633a9)
- Pentru a deploya aplicatia este folosit Vercel. 
![image](https://github.com/zandarbianca/proiectCloud/assets/81233161/a775e030-77c7-4be5-b60f-817d4c39c9d7)
- API-ul folosit pentru ChatGPT are urmatoarele statistici:
![image](https://github.com/zandarbianca/proiectCloud/assets/81233161/51705edc-ec2e-40be-b47a-a01cce8f0757)
- Generarea de tipuri de mancare
![image](https://github.com/zandarbianca/proiectCloud/assets/81233161/94c97133-ef64-4d9d-be65-c8b16f5dcca9)

# Flux de date 
### Pentru pagina principala, se face un request de tipul GET, care afiseaza o lista cu toate tipurile de mancare din meniu. 
- ![image](https://github.com/zandarbianca/proiectCloud/assets/81233161/9e72b51f-fcf3-46b3-a596-01ea3302e3e7)
- ![image](https://github.com/zandarbianca/proiectCloud/assets/81233161/54944532-0462-452e-94d5-6202e2998db4)
- ![image](https://github.com/zandarbianca/proiectCloud/assets/81233161/f3f4c967-974b-46eb-a353-f2b481778cea)

### Pentru pagina de adaugare a unui fel de mancare, se face un request de tipul POST, care adauga felul de mancare in baza de date.
- ![image](https://github.com/zandarbianca/proiectCloud/assets/81233161/21cee00c-4fcc-4879-ba8c-47b886d875f2)
- ![image](https://github.com/zandarbianca/proiectCloud/assets/81233161/1b248d14-aea5-4344-96ae-62499d44362a)

### Pentru stergerea unui fel de mancare, se face un request de tipul DELETE, care sterge felul de mancare in baza de date.
- ![image](https://github.com/zandarbianca/proiectCloud/assets/81233161/1b2e2108-65f3-4ceb-9388-4806107ccd80)
- ![image](https://github.com/zandarbianca/proiectCloud/assets/81233161/94e2730c-2261-403e-a513-46deb56c2532)

### Pentru folosirea ChatGPT, se face un request de tipul POST.
- ![image](https://github.com/zandarbianca/proiectCloud/assets/81233161/99765154-6ce9-48d3-b46e-e30ebfb0c378)
- ![image](https://github.com/zandarbianca/proiectCloud/assets/81233161/e69e1a38-aee5-448b-891a-2584b5740dde)

# Capturi ecran aplicație 
- Pagina in care sunt afisate toate felurile de mancare:
- Link: https://proiect-cloud-k1v7gp65a-zandarbianca.vercel.app/
![image](https://github.com/zandarbianca/proiectCloud/assets/81233161/0028e6fa-8966-4d85-b47a-b66245bdcebe)
- Pagina in care se poate adauga un nou fel de mancare:
- Link: https://proiect-cloud-k1v7gp65a-zandarbianca.vercel.app/insert
![image](https://github.com/zandarbianca/proiectCloud/assets/81233161/c1442be4-7d85-4155-a14a-f64f7045426f)
- Pagina in care se poate utiliza ChatGPT:
- Link: https://proiect-cloud-k1v7gp65a-zandarbianca.vercel.app/chat
![image](https://github.com/zandarbianca/proiectCloud/assets/81233161/6871b299-1192-418e-bf91-f4acf65ad3ac)

# Referințe 
- https://gurita-alexandru.gitbook.io/cloud-computing-2023-simpre/
- https://tailwindcss.com/
- https://platform.openai.com/
- https://vercel.com/dashboard
- https://www.mongodb.com/
