# 🎧 SoundMap BCN – Full-Stack App
<img width="1902" height="867" alt="Imagen26" src="https://github.com/user-attachments/assets/1965535e-f541-49a4-acfb-5782a078465a" />
<img width="389" height="757" alt="Imagen27" src="https://github.com/user-attachments/assets/3424ac71-2bf0-4f4e-9d63-6495114a1b6f" />

## Objetivo

**SoundMap BCN** es una aplicación web **full-stack** que permite explorar, subir y reproducir sonidos urbanos geolocalizados en un mapa interactivo de Barcelona.

El proyecto se compone de:
- **Frontend:** React 19 + Vite 7 + Tailwind CSS 4 + Leaflet  
- **Backend:** Spring Boot 3 + PostgreSQL + JWT  
- **Arquitectura:** API REST cliente-servidor  
- **Almacenamiento:** audios en filesystem y metadata en base de datos  

---

## Tecnologías y Herramientas

| Categoría | Tecnologías |
|----------|-------------|
| **Frontend** | React 19, Vite 7, Tailwind CSS 4, Leaflet.js |
| **Backend** | Spring Boot 3, Spring Web, Spring Security, JPA, MapStruct |
| **Base de Datos** | PostgreSQL |
| **Autenticación** | JWT |
| **API Client** | Axios + Interceptor |
| **Testing** | Postman |
| **Diseño** | Figma |
| **Gestión de Proyecto** | Trello |

---

## Funcionalidades

### Público
- Mapa interactivo con Leaflet  
- Listado de sonidos  
- Reproducción de audio integrada  

###  Autenticación
- Registro e inicio de sesión  
- Token JWT persistido en `localStorage`  
- Rutas protegidas  

### Gestión de audios
- Subida de archivos `.mp3` o `.wav`  
- Selección de ubicación en el mapa  
- Título, descripción y coordenadas  
- Almacenamiento en filesystem  

### Perfil
- Listado de audios subidos por la usuaria  

---

## Arquitectura del Proyecto

### Frontend
- SPA en React 19  
- Componentes reutilizables  
- Axios centralizado para API  
- Leaflet para mapa + marker  

### Backend
- Arquitectura MVC  
- DTO + MapStruct  
- Seguridad con filtros JWT  
- Excepciones personalizadas  
- Entities: User, Sound  

---

## Estructura del Frontend

```bash
soundmap-frontend
├── public/
│   ├── logo.svg
│   └── vite.svg
│
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Footer.jsx
│   │   └── NavBar.jsx
│   ├── hooks/
│   │   ├── useCurrentUser.jsx
│   │   ├── useFetchSoundById.jsx
│   │   ├── useFetchSounds.jsx
│   │   ├── useLogin.jsx
│   │   ├── useRegister.jsx
│   │   └── useUploadAudio.jsx
│   ├── pages/
│   │   ├── Landing.jsx
│   │   ├── Login.jsx
│   │   ├── MapView.jsx
│   │   ├── Profile.jsx
│   │   ├── Register.jsx
│   │   └── Upload.jsx
│   ├── router/
│   │   └── AppRouter.jsx
│   ├── services/
│   │   └── api.js
│   ├── test/
│   │   ├── Profile.test.jsx
│   │   └── ProfileAudio.test.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── vite.config.js
│
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
└── README.md

| Nombre       | Rol                  | LinkedIn                                                                                                 | GitHub                                                                           |
| ------------ | -------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| Ángela Bello | Full-Stack Developer | [https://www.linkedin.com/in/angela-bello-developer](https://www.linkedin.com/in/angela-bello-developer) | [https://github.com/AngelaBello-creator](https://github.com/AngelaBello-creator) |


# Frontend
git clone https://github.com/AngelaBello-creator/SoundMap-Frontend.git

# Backend
git clone https://github.com/AngelaBello-creator/SoundMap-Backend.git

