# MusiCollection
MusiCollection es una aplicación pensada para explorar y gestionar una colección musical compartida entre todos los usuarios. Te permite visualizar canciones y artistas, administrarlos fácilmente y mantener todo organizado en un solo lugar.
Además, podrás marcar tus pistas y artistas favoritos para acceder a ellos rápidamente, guardándolos directamente en tu navegador mediante localStorage y manteniendo tus preferencias siempre disponibles.

## Funcionalidades
- Visualizar lista de canciones
- Crear canciones
- Crear artistas
- Añadir y quitar canciones de favoritos
- Añadir y quitar artistas de favoritos
- Guardado de favoritos mediante localStorage

## Despliegue
El despliegue está realizado con **Vercel**. En el despliegue con Vercel existe un problema con la carga de los iconos de favoritos, pendiente de resolución.
Las paginas disponibles son:
- Landing page: https://proyecto-musicollection.vercel.app

  ![Captura de la pagina de inicio](./src/asset/screenshots/Home.png)
  
- Página de lista de canciones: https://proyecto-musicollection.vercel.app/#/Song
  
  ![Captura del listado de canciones](./src/asset/screenshots/Song.png)
  
- Página de creación de canciones: https://proyecto-musicollection.vercel.app/#/SongManager?action=create
  
  ![Captura del formulario de canciones](./src/asset/screenshots/Create_Song.png)
  
- Página de lista de artistas: https://proyecto-musicollection.vercel.app/#/artist
  
  ![Captura del listado de artistas](./src/asset/screenshots/Artist.png)
  
- Página de creación de artistas: https://proyecto-musicollection.vercel.app/#/ArtistManager?action=create

  ![Captura del formulario de artistas](./src/asset/screenshots/Create_Artist.png)
  
- Página de favoritos: https://proyecto-musicollection.vercel.app/#/favorite

  ![Captura de la pagina de favoritos](./src/asset/screenshots/Favorite.png)
  
- Página de error de URL incorrecta: https://proyecto-musicollection.vercel.app/#/[Cualquier URL que esté mal]
  
  ![Captura de error de URL incorrecta](./src/asset/screenshots/Error_404.png)
  
- Página de error de un parámetro incorrecto: https://proyecto-musicollection.vercel.app/#/[URL con parámetro incorrecto]
  
  ![Captura de error de un parámetro incorrecto](./src/asset/screenshots/Error_Msg.png)

## Gestión de información
Para la base de datos se ha utilizado **Supabase**. Es un servicio que proporciona una base de datos online accesible desde nuestra aplicación.
Las tablas creadas son:
- Artist (id,name,genre,nationality,birthdate)
- Song (id,title,idArtist,year)

La gestión de las canciones y artistas favoritas se ha hecho con localStorage. La estructura utilizada es la siguiente:
- favoriteArtists: (lista de ids)
- favoriteSongs: (lista de ids)

## Instalar y ejecutar
Se ha utilizado npm para la gestión de paquetes. Antes de ejecutar el proyecto se debe ejecutar el siguiente comando para descargar las librerías externas:
```bash
npm install
```
Una vez instalados podemos desplegarlo de manera local con:
```bash
npm run dev
```

