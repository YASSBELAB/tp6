# TP6 - API REST Node.js, Express et MySQL

Migration de l'API REST TP5 vers une base de données MySQL avec une architecture en couches.


GET /api/products/search : Permet de rechercher et de récupérer la liste de tous les produits disponibles.

<img width="681" height="631" alt="searchallproducts" src="https://github.com/user-attachments/assets/4ae42d9d-87ce-48be-addb-1b65ce70338a" />

GET /api/products/search?minPrice={valeur} : Permet de filtrer les résultats pour récupérer uniquement les produits dont le prix est supérieur ou égal au montant minimum spécifié.


<img width="824" height="626" alt="filterby minum price" src="https://github.com/user-attachments/assets/bd7bd56d-f7df-4293-bfa8-7da2a584a004" />


GET /api/products/search?maxPrice={valeur} : Permet de filtrer les résultats pour récupérer uniquement les produits dont le prix est inférieur ou égal au montant maximum spécifié.

<img width="822" height="648" alt="searchbymaxprice" src="https://github.com/user-attachments/assets/b5881fc4-236a-46f6-873f-e1758aff4eea" />

GET /api/products/search?minPrice={valeur}&maxPrice={valeur} : Permet de filtrer les résultats pour récupérer uniquement les produits dont le prix est compris entre les montants minimum et maximum spécifiés.

<img width="862" height="639" alt="filterbyrange" src="https://github.com/user-attachments/assets/143e9be4-9237-47db-8d0f-294763eb03cb" />


GET /api/products/search?categoryId={id} : Permet de filtrer les résultats pour récupérer uniquement les produits appartenant à la catégorie spécifiée par son identifiant.


<img width="733" height="620" alt="filterbycatego" src="https://github.com/user-attachments/assets/c7ed652a-804c-43ee-8e81-af114acf137b" />

GET /api/products/search?limit={valeur}&offset={valeur} : Permet de paginer les résultats en spécifiant le nombre de produits à retourner (limit) et le point de départ (offset)

<img width="819" height="644" alt="pagination" src="https://github.com/user-attachments/assets/e8e3fc48-de9e-4c56-a4f9-e5ecf51b1c52" />


GET /api/products/search?limit={valeur}&offset={valeur} : Permet de récupérer une page de résultats spécifique, en sautant les premiers résultats (ici offset=2) et en limitant le nombre d'éléments retournés (ici limit=2).


<img width="750" height="625" alt="skipfierst 2" src="https://github.com/user-attachments/assets/ca22e049-07cb-4342-9ae8-937ff9bc01ee" />


GET /api/products/search?sort=name : Permet de trier la liste des résultats par ordre alphabétique selon le nom des produits.


<img width="763" height="641" alt="sortbyalphabetname" src="https://github.com/user-attachments/assets/7f2b34d9-f224-43a8-aba4-feab173f63bc" />

GET /api/products/search?sort=price : Permet de trier la liste des résultats par ordre croissant en fonction du prix des produits.

<img width="752" height="619" alt="sortbyprice" src="https://github.com/user-attachments/assets/e3896016-3dfe-4f24-8c92-e205c95b80f1" />



GET /api/products/search?name={valeur}&minPrice={valeur}&maxPrice={valeur}&categoryId={valeur}&limit={valeur}&offset={valeur}&sort={valeur} : Permet de combiner plusieurs critères pour effectuer une recherche avancée incluant des filtres (nom, prix, catégorie), de la pagination et du tri dans une seule et même requête.



<img width="824" height="633" alt="combined filter" src="https://github.com/user-attachments/assets/b4b1c13e-13c5-4db1-8446-e993b7a02d80" />



gET /api/products/search?name={valeur} : Permet de rechercher des produits par leur nom, en renvoyant ceux dont le nom correspond ou contient la chaîne de caractères spécifiée.

<img width="777" height="608" alt="searchbyname" src="https://github.com/user-attachments/assets/fd4c6fc2-96d5-4b9e-99bb-d9e0f9ac84e1" />

POST /api/products/with-category : Permet de créer simultanément un nouveau produit et sa catégorie associée en spécifiant le nom de la catégorie dans le corps de la requête.

<img width="759" height="643" alt="createwithcateg" src="https://github.com/user-attachments/assets/51f4b0fa-2780-45c9-8e58-13062320b39c" />



POST /api/products : Permet de créer un nouveau produit en fournissant ses informations et l'identifiant d'une catégorie existante.   

<img width="696" height="595" alt="createproduct" src="https://github.com/user-attachments/assets/b6009134-4d57-4aa9-9e8e-ab615b6ab1fd" />


PUT /api/products/{id} : Permet de modifier les informations d'un produit existant en spécifiant son identifiant dans l'URL et les nouvelles données dans le corps de la requête.

<img width="780" height="558" alt="modifierproduct" src="https://github.com/user-attachments/assets/a600c15e-59ed-43b8-a3bc-7d40f41e608e" />


DELETE /api/products/{id} : Permet de supprimer un produit spécifique en utilisant son identifiant dans l'URL (renvoie un statut 204 No Content en cas de succès).

<img width="696" height="536" alt="deleteprodct" src="https://github.com/user-attachments/assets/dd6f297f-99b6-430c-ad02-bcc807c7acf7" />

GET /api/products/{id} (Produit introuvable) : Renvoie une erreur 404 Not Found accompagnée d'un message clair si l'identifiant fourni ne correspond à aucun produit existant dans la base de données.

<img width="718" height="561" alt="productnotfound" src="https://github.com/user-attachments/assets/b3d193a0-353f-4104-8306-6ebd3cdae39d" />


POST /api/products (Erreur de validation) : Renvoie une erreur 400 Bad Request contenant le détail des champs invalides si les données fournies ne respectent pas les règles de validation, comme par exemple un nom de produit trop court.

<img width="860" height="625" alt="badrequestpost" src="https://github.com/user-attachments/assets/f06d999b-e7c5-4ba8-8666-497b83a261ed" />

