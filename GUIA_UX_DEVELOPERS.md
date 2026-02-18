# 📚 HistoryBook - Guía UX para Desarrolladores

Bienvenido a HistoryBook, nuestra biblioteca de componentes completa con mejores prácticas UX integradas. Esta guía te ayudará a implementar una experiencia de usuario consistente y de calidad en toda tu aplicación.

---

## 📖 Tabla de Contenidos

1. [Principios Fundamentales](#principios-fundamentales)
2. [Guía por Componente](#guía-por-componente)
3. [Patrones Comunes](#patrones-comunes)
4. [Accesibilidad](#accesibilidad)
5. [Performance](#performance)

---

## Principios Fundamentales

### 1. **Claridad Visual**
- Usa la jerarquía de colores: Primary (#1f2937), Success (#059669), Warning (#d97706), Danger (#dc2626)
- Ten máximo 3 colores por vista para evitar confusión
- Mantén contraste suficiente (WCAG AA mínimo)

### 2. **Reacción Inmediata**
- Todos los elementos interactivos deben dar feedback visual al instante
- Los botones deben cambiar de estado en <100ms
- Las transiciones deben ser suaves (0.2-0.3s)

### 3. **Consistencia**
- Usa componentes de HistoryBook en lugar de HTML nativo
- Mantén espaciado uniforme (múltiplos de 8px)
- Los textos deben seguir la misma escala tipográfica

### 4. **Información Contextual**
- Siempre explica por qué pides información
- Usa tooltips para acciones no obvias
- Los errores deben ir junto al campo problemático

---

## Guía por Componente

### 🎯 **Stats Cards**
**Cuándo usarla:**
- Dashboards ejecutivos mostrando KPIs
- Resumen de métricas al principio de secciones
- Espacios donde necesitas impacto visual

**Mejores Prácticas:**
```
✅ Título claro + Número grande + Tendencia
✅ Usa iconos que reflejen el concepto
✅ Máximo 4 tarjetas en fila en desktop
❌ No pongas más de 8 cards simultáneamente
```

**Ejemplo de implementación:**
- Revenue: $45.2K ↑15% (verde)
- Users: 2.3K ↓5% (naranja)

---

### 📊 **Gráficos**
**Cuándo usarla:**
- Análisis de tendencias
- Visualización de series temporales
- Comparación entre períodos

**Mejores Prácticas:**
```
✅ Siempre incluye leyenda clara
✅ Usa colores diferenciados para series
✅ Muestra tooltips al pasar raton
✅ Lineas suaves con transiciones animadas
❌ No supers muchas series en mismo gráfico
```

**Recomendación:**
Agrupa datos relacionados. Si tienes 5+ series, considera usar múltiples gráficos pequeños.

---

### 👥 **Perfiles de Usuario**
**Cuándo usarla:**
- Directorios de equipo
- Comentarios y atribuciones
- Perfiles públicos
- Listas de colaboradores

**Mejores Prácticas:**
```
✅ Muestra rol/cargo de forma destacada
✅ Avatar debe ser consistente con el sitio
✅ Bio máximo 2 líneas
✅ Destaca métricas relevantes (followers si red social)
❌ No incluyas información sensible
```

---

### 🔔 **Alertas**
**Cuándo usarla:**
- Validaciones de formulario
- Confirmaciones de acciones
- Errores del sistema
- Información importante

**Mejores Prácticas:**
```
Success (✓) → Acciones completadas
Warning (⚠️) → Cuidado, revisa esto
Danger (✗) → Error, problema grave
Info (ℹ️) → Información contextual

✅ Mensajes cortos y directos (máx 2 líneas)
✅ Coloca alertas visibles sin bloquear flujo
✅ Auto-cierre en 5-8 segundos si no es error
❌ No apiles más de 2 alertas simultáneamente
```

---

### 🏷️ **Etiquetas (Badges)**
**Cuándo usarla:**
- Estados de items (Active, Inactive, Pending)
- Categorías rápidas
- Contadores (3 mensajes nuevos)
- Atributos de productos

**Mejores Prácticas:**
```
✅ Máximo 2-3 etiquetas por elemento
✅ Los colores deben ser consistentes:
   - Verde: activo, aprobado
   - Naranja: en progreso, warning
   - Rojo: inactivo, error
   - Gris: por defecto
❌ No uses más colores que categorías
```

**Tamaños:**
- Small: para listas compactas
- Medium: por defecto en tarjetas
- Large: cuando es la información principal

---

### ✨ **Tarjetas de Características**
**Cuándo usarla:**
- Landing pages
- Presentación de servicios
- Ventajas de producto
- Secciones "Por qué elegirnos"

**Mejores Prácticas:**
```
✅ Icono grande (32px+) y colorido
✅ Título impactante (máx 5 palabras)
✅ Descripción concisa (1-2 líneas)
✅ Metadata que valide (ej: "50ms load")
✅ Hover con efecto lift (shadow aumentada)
❌ No hagas cards de igual importancia
```

---

### 👤 **Avatares**
**Cuándo usarla:**
- Comentarios y posts
- Listas de usuarios
- Equipos.
- Perfiles pequeños

**Mejores Prácticas:**
```
Tamaños recomendados:
- 32px: comentarios, listas
- 48px: tarjetas de usuario
- 64px: header de perfil
- 96px: página principal de perfil

✅ Siempre cuadrado (nunca circular)
✅ Iniciales si no hay foto
✅ Color de fondo debe ser único por usuario
❌ No subes fotos sin validar calidad
```

---

### 🔘 **Botones**
**Cuándo usarla:**
- Acciones primarias (enviar, guardar)
- Navegación
- Múltiples opciones
- Confirmaciones

**Mejores Prácticas:**
```
Jerarquía:
1. Primary - acción principal (guardar, siguiente)
2. Secondary - acabas alternativas
3. Outline - opciones menos importantes
4. Ghost - muy secundario

Tamaños:
- Small: botones en tablas, listas
- Medium: principal en formularios
- Large: call-to-action en hero

✅ Texto = verbo de acción ("Guardar" no "Ok")
✅ Width 100% en mobile
✅ Min 44px altura para mobile
❌ No más de 3 botones en fila
❌ No uses color puro rojo/verde desaturado
```

---

### 📈 **Barras de Progreso**
**Cuándo usarla:**
- Descargas/cargas
- Procesos multi-paso
- Capacidad/límites
- Progreso de tareas

**Mejores Prácticas:**
```
✅ Siempre muestra porcentaje
✅ Animación suave en cambios
✅ Para procesos >30seg, muestra ETA
✅ Colores reflejen estado:
   - Azul: normal
   - Verde: completar
   - Naranja: warning
   - Rojo: problema
❌ No ocultes información
```

---

### ⭐ **Calificaciones**
**Cuándo usarla:**
- Reviews de productos
- Satisfacción del usuario
- Votación de contenido
- Feedback de calidad

**Mejores Prácticas:**
```
✅ Máximo 5 estrellas
✅ Muestra cantidad de reviews
✅ Escala visual: 5⭐ = enorme, 1⭐ = pequeño
✅ Usa color: rojo (bajo), naranja, verde (alto)
❌ No ocultes votos negativos
```

---

### ✏️ **Campos de Entrada**
**Cuándo usarla:**
- Formularios
- Búsqueda
- Filtros
- Edición en línea

**Mejores Prácticas:**
```
✅ Label siempre visible o placeholder muy claro
✅ Helper text debajo del campo
✅ Icono a la izquierda para tipo (ej: 📧 para email)
✅ Búsqueda a la derecha (lupa)
✅ Valida mientras escribes (pero sé gentil)
✅ Error clear: "El email es inválido"

Estados:
- Default: espera input
- Focus: borde azul, cursor
- Error: borde rojo, mensaje
- Disabled: gris, sin interacción
- Success: borde verde, checkmark

❌ No hagas validación ultra-estricta
❌ No pidas captcha innecesário
```

---

### 📋 **Tablas de Datos**
**Cuándo usarla:**
- Datos estructurados
- Comparación de registros
- Listas con múltiples propiedades
- Dashboards analíticos

**Mejores Prácticas:**
```
✅ Cabecera fija en scroll vertical
✅ Ordenamiento por click (mostrar ↑/↓)
✅ Max 10 filas sin paginación
✅ Colores alternos de fila (gris claro cada 2)
✅ Hover mostrado en la fila completa
✅ Single scroll horizontal en mobile

Información:
- Máximo 6 columnas en desktop
- Máximo 3 en tablet
- 1-2 en mobile (+ expandible)

❌ No abrumes con demasiadas columnas
❌ No ocultes datos críticos en mobile
```

---

### 🔢 **Paginación**
**Cuándo usarla:**
- Listas largas (>10 items)
- Resultados de búsqueda
- Listados de productos
- Datos que deben tener contexto

**Mejores Prácticas:**
```
✅ Botones Previous/Next claramente
✅ Número de página actual muy visible
✅ Total de páginas: "Página 3 de 10"
✅ Guarda estado en URL para compartir
✅ Recuerda última página visitada

Casos:
- 1-5 páginas: mostra todos números
- 5-20 páginas: muestra current ± 2
- 20+ páginas: busca o barra de números

❌ No uses "..." sin contexto
❌ No resetees a página 1 sin avisar
```

---

### 🎯 **Badges Estadísticos**
**Cuándo usarla:**
- Dashboards compactos
- Métricas secundarias
- Indicadores rápidos
- Widgets pequeños

**Mejores Prácticas:**
```
✅ Número grande y destacado
✅ Contexto claro en subnúmero
✅ Icono relevante
✅ Colores por tipo de métrica

Ejemplo:
💰 $45.2K
  Last 30 days
  
❌ No hagas badges más grandes que tarjetas
```

---

## Patrones Comunes

### Flujo de Formulario
```
1. Validación en tiempo real (gentil)
2. Error → color rojo + símbolo
3. Success → color verde + checkmark
4. Submit habilitado solo si válido
5. Feedback: Loading → Success → Redirect
```

### Manejo de Errores
```
❌ MAL: "Error"
✅ BIEN: "El email no es válido. Revisa e intenta de nuevo"

❌ MAL: Error rojo sin contexto
✅ BIEN: Campo rojo + icono + texto en rojo + helper
```

### Confirmación de Acciones
```
Para acciones destructivas:
1. Modal/diálogo con título claro
2. Descripción: qué se va a eliminar
3. Botón primario: "Sí, eliminar"  
4. Botón secondary: "Cancelar"
```

---

## Accesibilidad

### Colores
- ✅ Evita SOLO rojo/verde para indicar estado
- ✅ Usa colores + iconos + texto
- ✅ Contraste mínimo 4.5:1 para texto

### Teclado
- ✅ Tab puede navegar todos interactivos
- ✅ Enter/Space activa botones
- ✅ Escape cierra modales

### Pantalla
- ✅ "aria-label" en iconos sin texto
- ✅ "role" en elementos personalizados
- ✅ Alt text en imágenes importantes

### Mobile
- ✅ Mínimo 44px x 44px para tocar
- ✅ Touch targets separados cómodamente
- ✅ Zoom debe funcionar siempre

---

## Performance

### Cargas Iniciales
- ⚡ HistoryBook: <50KB gzipped
- ⚡ Componentes optimizados para OnPush detection
- ⚡ Lazy-load de imágenes innecesarias

### Animaciones
- ✅ Transiciones: 0.2-0.3s
- ✅ Usa `transform` y `opacity` (GPU accelerated)
- ⏱️ Evita animar `width`/`height`

### Bundle
- ✅ Material importa solo lo necesario
- ✅ Tree-shaking habilitado
- ✅ Componentes standalone = modular

---

## Checklist Antes de Publicar

### UX
- [ ] Todos los botones dan feedback visual
- [ ] Errores claros y accionables
- [ ] Mobile-first responsive
- [ ] Confirmaciones para acciones destructivas
- [ ] Navegación intuitiva

### Accesibilidad
- [ ] Tab navegable
- [ ] Color + iconos + texto (no solo color)
- [ ] Contraste 4.5:1+
- [ ] Labels en inputs
- [ ] Roles en componentes custom

### Performance
- [ ] LCP <2.5s
- [ ] FID <100ms
- [ ] CLS <0.1
- [ ] Imágenes optimizadas
- [ ] Sin código innecesario

---

## Recursos Adicionales

- [Material Design 3](https://material.io/design)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Web Vitals](https://web.dev/vitals/)
- [TypeScript Strict Mode](https://www.typescriptlang.org/tsconfig#strict)

---

**HistoryBook v1.0** | Diseñado con ❤️ para desarrolladores que se importan
