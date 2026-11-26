# 📚 Aprendiendo Estructuras de Datos

Repositorio personal dedicado al estudio, implementación desde cero y análisis de complejidad de las principales estructuras de datos en ciencias de la computación.

## 🎯 Objetivos del Proyecto

* Comprender el funcionamiento interno y la gestión de memoria de cada estructura sin depender de librerías estándar.
* Analizar la eficiencia temporal y espacial de cada operación utilizando notación Big-O.
* Practicar la resolución de problemas algorítmicos aplicando la estructura adecuada según el caso de uso.

---

## 🗺️ Mapa de Estudio y Progreso

A continuación se detalla el estado de implementación y la complejidad temporal promedio de cada estructura cubierta en este repositorio:

| Estructura de Datos | Estado | Acceso | Búsqueda | Inserción | Eliminación |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Arreglos (Arrays)** | ✅ Completado | $O(1)$ | $O(n)$ | $O(n)$ | $O(n)$ |
| **Listas Enlazadas (Linked Lists)** | ✅ Completado | $O(n)$ | $O(n)$ | $O(1)$ | $O(1)$ |
| **Pilas (Stacks)** | 🚧 En progreso | $O(n)$ | $O(n)$ | $O(1)$ | $O(1)$ |
| **Colas (Queues)** | 🚧 En progreso | $O(n)$ | $O(n)$ | $O(1)$ | $O(1)$ |
| **Tablas Hash (Hash Tables)** | 🚧 En progreso | N/A | $O(1)$ | $O(1)$ | $O(1)$ |
| **Árboles Binarios de Búsqueda (BST)** | ⏳ Pendiente | $O(\log n)$ | $O(\log n)$ | $O(\log n)$ | $O(\log n)$ |
| **Montículos (Heaps)** | ⏳ Pendiente | N/A | $O(n)$ | $O(\log n)$ | $O(\log n)$ |
| **Grafos (Graphs)** | ⏳ Pendiente | N/A | $O(V + E)$ | $O(1)$ | $O(1)$ |

---

## 📂 Estructura del Repositorio

El código está organizado por módulos independientes, cada uno con su implementación y pruebas unitarias básicas:

    LEARN ALGORITHM AND STRUCTURE/
    ├──Algoritmia/
    │   ├── operadores.js
    │   └── 
    ├──conocer _ALgorismos/
    │   ├── 
    │   └── 
    ├── Estructuras y Tablas/
    │   ├── 
    │   └── 
    ├──no lineal Hierarchical Structures/
    |   |__
    |   |__ 
    └── README.md

---

## 🚀 Cómo Ejecutar los Ejemplos

1. **Clona este repositorio** en tu máquina local:

       git clone https://github.com/tu-usuario/estructuras-de-datos.git
       cd estructuras-de-datos

2. **Ejecuta el archivo o las pruebas** de la estructura que desees revisar (reemplaza según el lenguaje que estés usando):

       # Ejemplo en JS
       node Algoritmia/operadores.js

---

## 🧠 Notas y Aprendizajes Clave

* **Arreglos vs. Listas Enlazadas:** Los arreglos ofrecen acceso instantáneo en $O(1)$ gracias a la memoria contigua, mientras que las listas enlazadas facilitan inserciones y eliminaciones dinámicas sin necesidad de redimensionar memoria.
* **Trade-off Espacio vs. Tiempo:** Muchas estructuras (como las Tablas Hash) sacrifican memoria adicional para lograr tiempos de búsqueda cercanos a $O(1)$.

---

## 📖 Recursos de Referencia

* *Introduction to Algorithms (CLRS)* — Thomas H. Cormen
* *Grokking Algorithms* — Aditya Bhargava
* Visualizaciones interactivas en [VisuAlgo](https://visualgo.net/)