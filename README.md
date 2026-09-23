# WebService - Audífonos

WebService básica desarrollada con **Node.js**, **Express.js** y **MySQL** para gestionar información de audífonos.

El proyecto permite consultar todos los registros disponibles y eliminar un audífono mediante su identificador único.

---

## GitHub

El proyecto se encuentra disponible en el siguiente repositorio:

**Repositorio:** [(https://github.com/Omarwaos/WebService_T3.git)]

---

## Requisitos previos

Antes de ejecutar el proyecto, se debe contar con:

* **Node.js v24** o superior.

* **npm**.

* **MySQL Server**.

* Un cliente para administrar MySQL, como MySQL Workbench, phpMyAdmin o similar.

# Base de datos

El proyecto utiliza una base de datos llamada `db_audifonos`.

La tabla principal es `audifonos`, que almacena la información de cada producto.

---

# Instalación

## 1. Crear el proyecto

Cree una carpeta para el proyecto y acceda a ella:

```bash
mkdir webservice-audifonos

cd webservice-audifonos
```

## 2. Inicializar el proyecto Node.js

Ejecute:

```bash
npm init -y
```

Esto generará el archivo `package.json`.

## 3. Instalar las dependencias

Instale Express y `mysql2`:

```bash
npm install express mysql2
```

## 4. Configurar la conexión a MySQL

Las credenciales de conexión se encuentran directamente en el código mediante un pool de conexiones.

> **Nota:** Este proyecto académico no utiliza un archivo `.env`. Las credenciales se configuran directamente en el código según la configuración local de MySQL.

## 6. Iniciar el servidor

Ejecute:

```bash
node index.js
```

Si la configuración es correcta, el servidor estará disponible en:

```text
http://localhost:3000
```

---

## Resumen de endpoints

| Método   | Endpoint     | Descripción                | Respuesta principal        |
| -------- | ------------ | -------------------------- | -------------------------- |
| `GET`    | `/items`     | Lista todos los audífonos  | `200 OK`                   |
| `DELETE` | `/items/:id` | Elimina un audífono por ID | `200 OK` / `404 Not Found` |

---

# Créditos

Proyecto desarrollado por **Omar Ramos** como parte de la **Tarea 3 - WebService**.
