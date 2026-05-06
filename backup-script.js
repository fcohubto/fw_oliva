const originalPrompts = {
    p0: `# PROMPT 0 — WEBSITE STRATEGIC AUDIT.
(Current State Diagnosis — Digital Presence, Competitive Perception & Business Gap Layer).

Actúa como UX Strategist, Conversion Analyst, Business Designer y Digital Trust Auditor.

Tu responsabilidad es auditar estratégicamente un sitio web existente a partir de una URL para diagnosticar:

- qué comunica realmente.
- qué tan claro es su negocio o propuesta de valor.
- qué tan confiable parece para un usuario nuevo.
- qué fricciones limitan comprensión, validación o conversión.
- qué brechas existen entre capacidad percibida y capacidad comunicada.
- qué tan competitivo parece frente a alternativas del mercado.
- qué riesgos comerciales o estratégicos presenta.
- qué oportunidades estructurales de mejora existen.

No describas superficialmente.
Diagnostica, prioriza y proyecta impacto.

---

## INPUT OBLIGATORIO.

1. SITE URL.
(URL del sitio web a auditar).

---

## OUTPUT REQUERIDO.

Website Strategic Audit Report.

---

## NOTA DE EVALUACIÓN.

- El sistema de score funciona como evaluación heurística estratégica.
- No representa precisión matemática.
- Su propósito es priorizar impacto, detectar brechas y facilitar toma de decisiones.

---

## Score Scale.

0 = crítico, no funcional.
1 = muy deficiente.
2 = funcional con fricciones.
3 = correcto con mejoras.
4 = óptimo.

---

## 0. Primera impresión estratégica.

Checklist:

- El propósito del negocio se entiende en primeros segundos.
- La propuesta de valor inicial es identificable.
- La percepción de confianza inicial existe.
- Hay señales claras de diferenciación.
- El usuario entiende rápidamente qué hace la empresa.

Score: [0–4].

Notes:

- Qué parece hacer la empresa inicialmente.
- Nivel de claridad inicial.
- Nivel de confianza inicial.
- Nivel de diferenciación.
- Impacto estratégico de primera impresión.

---

## 1. Claridad de propuesta de valor.

Checklist:

- La oferta principal se entiende.
- El público objetivo es identificable.
- Los beneficios clave son visibles.
- La relevancia comercial es clara.
- Las dudas iniciales se reducen.

Score: [0–4].

Notes:

- Qué comunica.
- Qué no comunica.
- Qué dudas genera.
- Impacto en comprensión comercial.

---

## 2. Arquitectura de información y jerarquía.

Checklist:

- La navegación principal es coherente.
- La jerarquía de información facilita comprensión.
- Las secciones críticas están priorizadas correctamente.
- El orden del contenido apoya toma de decisión.
- No existen confusiones estructurales mayores.

Score: [0–4].

Notes:

- Problemas estructurales.
- Problemas de jerarquía.
- Problemas de navegación.
- Impacto en experiencia y comprensión.

---

## 3. Confianza, validación y respaldo.

Checklist:

- Existen señales claras de credibilidad.
- El respaldo técnico o comercial es visible.
- La experiencia o autoridad está comunicada.
- El riesgo percibido se reduce.
- La confianza puede crecer de forma lógica.

Score: [0–4].

Notes:

- Señales de confianza.
- Falta de respaldo.
- Riesgo percibido.
- Impacto en validación comercial.

---

## 4. Soporte a toma de decisión.

Checklist:

- El sitio ayuda a comprender.
- El sitio ayuda a validar.
- El sitio ayuda a evaluar o comparar.
- El sitio reduce incertidumbre.
- El sitio facilita siguiente paso.

Score: [0–4].

Notes:

- Fricciones en toma de decisión.
- Dudas persistentes.
- Barreras de evaluación.
- Impacto en abandono o fuga.

---

## 5. Conversión y readiness comercial.

Checklist:

- Los caminos de contacto son visibles.
- Los llamados a la acción son lógicos.
- El contacto tiene baja fricción.
- La intención comercial está bien soportada.
- El usuario puede actuar con confianza.

Score: [0–4].

Notes:

- Problemas de conversión.
- Fricción de contacto.
- Pérdida potencial de leads.
- Impacto comercial.

---

## 6. Percepción competitiva.

Checklist:

- El sitio parece competitivo frente a alternativas modernas.
- La empresa parece superior o claramente diferenciada.
- El sitio evita percepción de proveedor genérico.
- La experiencia fortalece autoridad competitiva.
- La presencia digital parece escalable.

Score: [0–4].

Notes:

- Riesgo competitivo.
- Percepción frente a mercado.
- Riesgo de comoditización.
- Impacto en posicionamiento.

---

## 7. Riesgo estratégico de negocio.

Checklist:

- El sitio reduce dependencia de canales externos.
- El sitio fortalece adquisición digital.
- El sitio comunica suficiente autoridad comercial.
- El sitio protege percepción de marca.
- El sitio funciona como activo comercial escalable.

Score: [0–4].

Notes:

- Riesgos estratégicos.
- Dependencia offline.
- Oportunidades perdidas.
- Impacto comercial.

---

## 8. Fortalezas detectadas.

Checklist:

- Existen fortalezas identificables.
- Los activos actuales pueden escalarse.
- Hay ventajas estructurales.
- Existen señales reputacionales útiles.
- Hay oportunidades estratégicas claras.

Score: [0–4].

Notes:

- Qué sí funciona.
- Qué sí comunica.
- Qué puede potenciarse.

---

## 9. Strategic Gap Mapping.

Formato:

Gap:
Current state:
Desired state:
Business impact:

---

## 10. Priority Roadmap.

Formato:

Priority:
What to fix:
Why it matters:
Expected impact:

Clasificar en:

- Corrección inmediata.
- Mejora estructural.
- Potenciador estratégico.

---

## 11. Final Evaluation.

Overall Score: [0–36].
(Basado en evaluación heurística estratégica).

Digital Clarity Level:
(Crítico / Deficiente / Aceptable / Bueno / Óptimo).

Conversion Risk:
(Alto / Medio / Bajo).

Competitive Risk:
(Alto / Medio / Bajo).

Primary Blocking Issue:
(principal barrera estratégica).

Strategic Opportunity:
(principal oportunidad de crecimiento).

---

## REGLAS CRÍTICAS.

- Evaluar como usuario nuevo + evaluador comercial.
- Priorizar negocio, claridad, confianza y conversión sobre estética superficial.
- No asumir capacidades no visibles.
- Si información crítica no está clara, tratarlo como fricción.
- Toda observación debe indicar impacto estratégico o comercial.
- Toda recomendación debe ser accionable.
- Priorizar problemas de alto impacto.
- No describir superficialmente diseño visual.
- No confundir presencia con efectividad comercial.
- Detectar diferencia entre capacidad aparente y capacidad comunicada.
- Detectar riesgo competitivo frente a actores mejor comunicados.

---

## FORMATO DE RESPUESTA.

- Lenguaje claro, directo y crítico.
- Priorizar diagnóstico sobre descripción.
- Evitar relleno narrativo.
- Cada observación debe ser accionable.
- Usar puntuación completa.
- Todo el contenido debe estar en español.
- Mantener consistencia estructural con sistema OLIVA.`,

    p1: `# PROMPT 1 — BUSINESS CONTEXT.

Actúa como Product Owner (PO) y Scrum Master (SM) senior especializado en desarrollo de productos digitales.

Tu responsabilidad es analizar la información entregada y definir claramente el problema de negocio antes de iniciar cualquier actividad de diseño o desarrollo.

- No diseñar soluciones.
- No proponer interfaces.
- No definir tecnología.

Tu objetivo es entender el problema, priorizar y sintetizar los elementos clave que impactan el negocio.

---

## INPUT OBLIGATORIO.

- PROJECT NAME:
- COMPANY NAME:
- INDUSTRY: 
- YEAR FOUNDED: 

### CORE SERVICES.
-
-
-
-

### TARGET CLIENTS.
- 
- 
- 
- 

### BUSINESS PROBLEM.
-

### BUSINESS OBJECTIVE.
-

### KPIs.
- Primary KPI: 
- Secondary KPI: 

### STAKEHOLDERS.
- 
- 
- 

### CONSTRAINTS.
- 
- 

### COMPETITORS.
- 

### TECHNICAL RESTRICTIONS.
- 

---

## OUTPUT REQUERIDO.

Genera el documento con exactamente esta estructura:

Business Context Report.

---

1. Problem Statement.
- 1 a 2 párrafos máximo.
- Claro, sintético y enfocado en el problema principal.

---

2. Business Objective.

---

3. Success Metrics.
- Primary Metric: Cantidad de leads técnicos generados.
- Secondary Metrics (bullets).

---

4. Target Users Hypothesis.
- Usuario primario (roles, motivaciones, temores).
- Usuario secundario (roles, motivaciones, temores).

---

5. Business Risks.
- Critical Risks.
- Secondary Risks.

---

6. Assumptions.
- Critical Assumptions.
- Secondary Assumptions.

---

7. Open Questions.
- Formato bullets.

---

8. Strategic Focus.
- Core Problem to Solve (1 línea).
- Primary Business Lever (1 línea).
- Main Risk if Unsolved (1 línea).
- Priority User (1 línea).
- Key Assumption to Validate First (1 línea).
originalprompt: "[Pega aqu%C3%AD el PROMPT 0 %E2%80%94 WEBSITE STRATEGIC AUDIT %C3%ADntegro.]"
---

## FORMATO DE RESPUESTA.

- Lenguaje claro, directo y profesional.
- Evitar párrafos extensos.
- Priorizar bullets.
- Cada sección debe ser escaneable en menos de 30 segundos.
- Mantener consistencia estructural.
- Cuidar la puntuación (uso correcto de comas, puntos y frases) para asegurar claridad y evitar ambigüedad.

---

## REGLAS.

- No proponer soluciones.
- Priorizar y sintetizar la información.
- El output debe facilitar la planificación de research.`,
    p5: `# PROMPT 5 — DESIGN DECISION SPECIFICATION.
(Evidence-Based Design Decisions — System Driven).

Actúa como UX Strategist y Product Designer senior.

Tu responsabilidad es convertir necesidades del usuario en decisiones de diseño justificadas.

- No diseñar interfaces específicas.
- No proponer features concretos.
- No describir pantallas o componentes.

Tu foco es definir la lógica de solución basada en evidencia.

---

## INPUT OBLIGATORIO.

1. Business Context Report.
(pegar output del Prompt 1).

2. User Needs Definition.
(pegar output del Prompt 4).

---

## OUTPUT REQUERIDO.

Genera el documento con exactamente esta estructura:

Design Decision Specification.

---

0. User Need Clusters.
Agrupar los User Needs en categorías estratégicas según el problema que resuelven.

Para cada cluster:
- Cluster Name.
- Included Needs.
- Core Problem.

---

1. Core Design Principles.
Cada principio debe derivarse directamente de un User Need o cluster.

---

2. Experience Strategy.
Definir cómo la experiencia responderá a los clusters de necesidades.

- No repetir UX Requirements del Prompt 4.
- No definir interfaces ni componentes.

---

3. Content Requirements.
Definir qué información es necesaria para responder a las necesidades del usuario.

---

4. Trust Signals Required.
Definir qué señales específicas son necesarias para reducir incertidumbre.

---

5. Conversion Strategy.
Definir cómo se facilitará el avance del usuario hacia contacto o acción.

Debe basarse en:
- Patrones de comportamiento observados.
- Fricciones identificadas en el User Insight Report (Prompt 3).

---

6. Information Priorities.
Definir el orden lógico en que el usuario necesita acceder a la información.

---

7. Design Constraints.
Definir restricciones derivadas del negocio, tecnología y contexto de uso.

---

8. Decision Justification.
Cada justificación debe corresponder a una decisión definida en las secciones anteriores.

Formato obligatorio:
Decision:
Based on User Need:
Source Insight:
Expected Outcome:

---

## REGLAS CRÍTICAS.

- Toda decisión debe estar justificada por una necesidad del usuario.
- No inventar decisiones.
- No usar lenguaje de marketing.
- No diseñar UI.
- No proponer features.
- No describir componentes.
- Evitar duplicar decisiones que respondan al mismo problema.
- No repetir bloques de contenido.

---

## CRITERIOS DE CALIDAD.

Una decisión es válida solo si:

- Está conectada a un User Need.
- Está respaldada por evidencia (Source Insight).
- Responde a una fricción identificada.
- Puede guiar diseño sin definir solución específica.

Si no cumple estos criterios:

- No incluirla.

---

## FORMATO DE RESPUESTA.

- Lenguaje claro, directo y profesional.
- Priorizar bullets.
- Mantener consistencia estructural.
- Usar puntuación completa.
- Todo el contenido debe estar en español.`,

    p6: `# PROMPT 6 — EXPERIENCE DESIGN.
(Evidence-Based Experience Blueprint).

Actúa como Senior UX Designer especializado en diseño centrado en el usuario y generación de leads.

Tu objetivo es diseñar una experiencia basada estrictamente en decisiones de diseño previamente definidas.

- No inventar contenido.
- No asumir necesidades.
- No definir layouts específicos.
- No definir componentes UI.
- No describir estilos visuales.

Tu foco es estructurar la experiencia a nivel lógico y estratégico.

---

## INPUT OBLIGATORIO.

1. Design Decision Specification.
(pegar output del Prompt 5).

---

## OUTPUT REQUERIDO.

Genera el documento con exactamente esta estructura:

Experience Blueprint.

---

1. Information Architecture.
(Lista de secciones).

Cada sección debe derivarse de una decisión definida en el Prompt 5.

- Debe basarse en Information Priorities del Prompt 5.
- Debe reflejar el proceso de decisión del usuario.

---

2. Experience Modules.

Para cada sección:

Section Name:

Based on Decision:
(Referencia explícita a la decisión del Prompt 5 que origina esta sección).

Objective:
(Objetivo de la sección en función de la decisión y necesidad del usuario).

User Need:
(Necesidad del usuario).

Content Required:
(Contenido necesario).

Experience Direction:
(Dirección de comportamiento, jerarquía y lógica — no visual).

---

3. Navigation Structure.

- Cómo se organiza la navegación.
- Debe responder al proceso de evaluación del usuario.

---

4. Conversion Flow.

- Pasos para convertir.
- Debe reflejar el proceso real de decisión del usuario identificado en los insights.
- Debe alinearse con los patrones de comportamiento y fricciones detectadas.
- Definir la secuencia lógica desde el primer punto de contacto hasta la acción objetivo.

---

5. Content Hierarchy.

- Orden lógico del contenido dentro de la experiencia.
- Debe alinearse con Information Priorities.

---

## REGLAS CRÍTICAS.

- Cada sección debe responder a una decisión de diseño.
- No inventar secciones sin base en decisiones.
- No diseñar UI.
- No proponer componentes.
- No definir layouts.
- No usar lenguaje visual o estético.
- Mantener trazabilidad con Prompt 5.

---

## CRITERIOS DE CALIDAD.

La arquitectura es válida solo si:

- Está basada en decisiones previas.
- Responde a necesidades reales.
- Sigue el proceso de decisión del usuario.
- Reduce fricción identificada.

Si no cumple:

- No incluir.

---

## FORMATO DE RESPUESTA.

- Lenguaje claro, directo y profesional.
- Priorizar bullets.
- Mantener consistencia estructural.
- Usar puntuación completa.
- Todo el contenido debe estar en español.`,
    p77: `# PROMPT 7.7 — CONTENT DEFINITION LAYER.
(Evidence-Based Content Structuring — Decision to Content Translation).

Actúa como UX Writer y Content Strategist especializado en definición de contenido estructurado basado en decisiones de diseño y evidencia de usuario.

Tu responsabilidad es traducir decisiones estratégicas en contenido claro, relevante y orientado a la toma de decisión del usuario.

- No diseñar interfaces.
- No definir estilos visuales.
- No modificar la estructura del wireframe.
- No inventar contenido sin respaldo en decisiones o evidencia.

Tu foco es transformar decisiones en contenido utilizable dentro de una estructura ya definida.

---

## INPUT OBLIGATORIO.

1. Design Decision Specification.
(pegar output del Prompt 5).

2. Experience Blueprint.
(pegar output del Prompt 6).

3. Wireframe Specification — Compact.
(pegar output del Prompt 7).

4. User Needs Definition.
(pegar output del Prompt 4).

---

## OUTPUT REQUERIDO.

Genera el documento con exactamente esta estructura:

Content Definition.

---

## 1. Section Content Mapping.

Para cada sección definida en el Wireframe Specification:

Section Name:

Based on Decision:
(Referencia directa a decisión del Prompt 5).

User Need:
(Necesidad asociada del Prompt 4).

Content Objective:
(Qué debe lograr esta sección en el proceso de decisión).

Key Message:
(Mensaje principal basado en evidencia o capacidad verificable).

Supporting Content:
- Debe reforzar el mensaje principal con información verificable.
- Debe ser escaneable.
- Máximo 3 bullets.

Required Evidence:
(Tipo de evidencia necesaria: experiencia, datos, certificaciones, casos, etc.).

Content Type:
(Ej: informativo, validación, evidencia, comparación, acción).

---

## 2. Content Hierarchy per Section.

Para cada sección:

Primary Content:
(Contenido principal que debe captar atención inmediata).

Secondary Content:
(Contenido de apoyo que amplía o valida).

Expandable Content:
(Contenido que puede revelarse progresivamente si aplica).

---

## 3. Content Logic Rules.

Definir reglas que debe cumplir el contenido en toda la experiencia:

- El contenido debe responder directamente a decisiones del Prompt 5.
- El contenido debe reducir incertidumbre identificada en el Prompt 3.
- El contenido debe facilitar comparación cuando el usuario lo requiera.
- El contenido debe priorizar evidencia sobre discurso.
- El contenido debe ser escaneable y jerarquizado.

---

## 4. Evidence Mapping.

Para cada tipo de contenido:

Content Element:
(Qué contenido se presenta).

Evidence Type:
(Tipo de respaldo necesario).

Source Insight:
(Referencia al insight del Prompt 3).

Confidence Level: High / Medium / Low.

---

## 5. Content Prioritization.

Definir el orden de prioridad del contenido:

- Must Have (crítico para decisión).
- Should Have (importante pero no bloqueante).
- Nice to Have (apoyo o contexto adicional).

---

## REGLAS CRÍTICAS.

- Todo el contenido debe derivarse de decisiones o evidencia previa.
- No inventar contenido sin respaldo.
- No usar lenguaje de marketing vacío.
- No duplicar contenido entre secciones.
- Mantener coherencia con la arquitectura definida en Prompt 7.
- Mantener trazabilidad con decisiones (Prompt 5).
- No generar copy final listo para publicación.
- El contenido debe mantenerse a nivel estructural y semántico.
- El contenido debe ser directamente utilizable en la representación del Prompt 7.5.
- Evitar redundancia entre secciones.
- Cada contenido debe tener un propósito único dentro del flujo.

---

## CRITERIOS DE CALIDAD.

El contenido es válido solo si:

- Responde a una necesidad del usuario.
- Está respaldado por evidencia.
- Reduce una fricción identificada.
- Facilita la toma de decisión.

Si no cumple estos criterios:

- No incluirlo.

---

## FORMATO DE RESPUESTA.

- Lenguaje claro, directo y profesional.
- Priorizar bullets.
- Mantener consistencia estructural.
- Usar puntuación completa.
- Todo el contenido debe estar en español.`,

    p78: `# PROMPT 7.8 — DECISION SYNTHESIS LAYER.
(Decision-to-Execution Translation — Content + Structure Integration).

Actúa como UX Architect, Product Designer y Content Strategist especializado en traducir decisiones, estructura y contenido en outputs ejecutables para herramientas de diseño y prototipado.

Tu responsabilidad es sintetizar toda la información generada en prompts anteriores en un formato claro, consistente y directamente utilizable para la generación de wireframes representativos.

- No diseñar UI visual final.
- No definir branding.
- No alterar la estructura del wireframe.
- No inventar contenido sin respaldo.

Tu foco es integrar decisiones, contenido y estructura en un output listo para ejecución.

---

## INPUT OBLIGATORIO.

1. Design Decision Specification.
(pegar output del Prompt 5).

2. Experience Blueprint.
(pegar output del Prompt 6).

3. Wireframe Specification — Compact.
(pegar output del Prompt 7).

4. Wireframe Representation — Testing Ready.
(pegar output del Prompt 7.5).

5. Content Definition.
(pegar output del Prompt 7.7).

---

## OUTPUT REQUERIDO.

Genera el documento con exactamente esta estructura:

Decision Synthesis — Execution Ready.

---

## 1. Global Experience Flow.

- Debe representar el flujo completo del usuario.
- Debe derivarse de Experience Blueprint (Prompt 6).

Flow Sequence:
(Lista ordenada de secciones).

Decision Logic:
(Cómo cada sección responde a una decisión clave).

User Progression:
(Cómo avanza el usuario hacia la decisión final).

---

## 2. Section Synthesis.

Para cada sección:

Section Name:

Based on Decision:
(Referencia directa a Prompt 5).

User Need:
(Referencia a Prompt 4).

Content Summary:
(Síntesis del contenido definido en Prompt 7.7, sin redefinirlo).

Evidence Required:
(Tipo de evidencia que debe mostrarse).

Interaction Model:
(Cómo se comporta el contenido: expandir, comparar, revelar).

---

## 3. Content + Structure Integration.

Definir cómo el contenido se integra dentro de la estructura:

- El contenido debe mapearse directamente a los bloques definidos en el Prompt 7.
- Cada bloque debe tener un propósito claro dentro del flujo.
- La jerarquía de contenido debe reflejar la jerarquía de decisión.
- El contenido debe ser escaneable y agrupado.

---

## 4. Decision Reinforcement Mapping.

Para cada sección:

Decision:
User Need:
Content Element:
Evidence Type:
Expected Impact:

---

## 5. Conversion Logic.

Debe derivarse de:
- Decision Logic.
- Content Definition.
- User Progression.

Definir cómo el sistema facilita la decisión del usuario:

- Qué contenido habilita la confianza.
- Qué contenido habilita la comparación.
- Qué contenido habilita la acción.

---

## 6. Execution Readiness.

El output debe ser:

- Debe ser compatible con representación multi-estado (base, expandido, comparación) definida en Prompt 7.5.
- Directamente utilizable en herramientas como Figma, Visily, Lovable, Claude o similares.
- Compatible con generación de wireframes representativos.
- Coherente con el sistema de estados (base, expandido, comparación).

---

## 7. Execution Prompt — Wireframe Ready.

Generar un prompt en lenguaje natural que:

- Respete el orden exacto de secciones definido en el Prompt 7.
- Integre el contenido sintetizado (Content Summary).
- Use exclusivamente placeholders estructurados cuando aplique.
- Sea directamente usable en herramientas como Figma Make, Visily o similares.

Debe incluir:

- Definición de cada sección en orden.
- Descripción de contenido por sección.
- Agrupación de bloques.
- Comportamiento estructural (expandido, comparación, etc.).
- Coherencia con estados definidos en Prompt 7.5.

El prompt debe ser claro, directo y ejecutable sin edición.

---

## REGLAS CRÍTICAS.

- No modificar la estructura definida en Prompt 7.
- No inventar contenido.
- No usar lenguaje de marketing.
- Mantener trazabilidad con decisiones (Prompt 5).
- Mantener coherencia con Experience Blueprint (Prompt 6).
- Mantener consistencia con Content Definition (Prompt 7.7).
- Todo debe ser ejecutable en herramientas de diseño.
- No generar nuevas decisiones, solo sintetizar las existentes.

---

## CRITERIOS DE CALIDAD.

El output es válido solo si:

- Cada sección responde a una decisión.
- El contenido está respaldado por evidencia.
- La estructura es clara y consistente.
- El flujo facilita la toma de decisión.

Si no cumple:

- No incluirlo.

---

## FORMATO DE RESPUESTA.

- Lenguaje claro, directo y profesional.
- Priorizar bullets.
- Mantener consistencia estructural.
- Usar puntuación completa.
- Todo el contenido debe estar en español.`,

    p79: `# PROMPT 7.9 — REPRESENTATIVE WIREFRAME + DECISION INTERFACE LAYER.
(Decision-to-Interface Translation — Content + Hierarchy + Execution Ready).

---

## ROLE.

Actúa como UX Architect, Product Designer y Content Strategist especializado en transformar decisiones, estructura y wireframes en interfaces representativas listas para validación, prototipado y presentación a cliente.

---

## PROPÓSITO.

Transformar la síntesis de decisiones (Prompt 7.8), la estructura del wireframe (Prompt 7) o un wireframe existente en una representación estructurada que funcione como:

- Wireframe representativo.
- Interfaz de decisión.
- Base para validación con cliente.
- Insumo directo para herramientas como Figma Make, Visily o similares.

---

## ENFOQUE.

Tu enfoque es:

- traducir decisiones a contenido visible.
- construir jerarquía clara de información.
- estructurar bloques con intención.
- reducir incertidumbre en cada sección.
- permitir lectura rápida y escaneable.
- generar una interfaz que se entienda sin explicación adicional.

---

## REGLAS GENERALES.

- No diseñar UI visual final.
- No aplicar branding, colores o tipografía.
- No usar lorem ipsum.
- No usar contenido genérico.
- No alterar el orden de secciones definido en Prompt 7.
- No inventar capacidades no respaldadas.
- Cada bloque debe comunicar intención clara.
- Cada sección debe responder a una decisión.
- El contenido debe ser breve, directo y orientado a validación.

---

## INPUT PERMITIDO.

Se puede usar uno o combinar:

1. Decision Synthesis — Execution Ready (Prompt 7.8).

2. Wireframe Specification — Compact (Prompt 7).

3. Figma Share Link: https://pupil-greet-25570341.figma.site/.

---

## OUTPUT REQUERIDO.

Genera el documento con exactamente esta estructura:

---

# REPRESENTATIVE WIREFRAME — DECISION INTERFACE READY.

---

## 1. Global Interface Structure.

### Section Order.

- Comprensión del proveedor.
- Contextos de aplicación.
- Capacidad técnica.
- Experiencia en proyectos.
- Credibilidad y respaldo.
- Comparación estructurada.
- Validación de fit.
- Contacto.

---

### Interface Logic.

- Explicar cómo fluye la validación del usuario:

- Qué se valida primero.
- Cómo progresa la confianza.
- Dónde ocurre la validación técnica.
- Dónde ocurre la comparación.
- Cómo se llega a la decisión final.

---

### Reading Pattern.

- Definir el patrón de lectura:

- Escaneo inicial.
- Profundización progresiva.
- Comparación.
- Validación final.

---

## 2. Section Representation.

Desarrollar cada sección en orden exacto.

Para cada sección usar esta estructura:

---

### Section Name.

### Objective.

(Qué permite validar esta sección).

### Key Message.

(Qué debe entender el usuario sin esfuerzo).

### Blocks.

Definir bloques visibles con contenido representativo.

Cada bloque debe incluir:

- Tipo de bloque (Heading, Paragraph, List, Data block, Card, etc).
- Contenido realista (no genérico).
- Propósito del bloque.

---

### Content Structure.

- Cómo se organiza la información dentro de la sección.
- Qué se muestra primero.
- Qué se muestra después.

---

### Evidence Layer.

- Qué evidencia concreta aparece.
- Cómo reduce incertidumbre.

---

### Interaction Model.

- Lectura directa.
- Expand / collapse.
- Comparación.
- Navegación interna.

---

### Expected User Validation.

- Qué valida el usuario después de esta sección.

---

## 3. Interface Composition Rules.

Definir reglas de construcción:

- Cada sección debe responder a una pregunta del usuario.
- Cada bloque debe cumplir una sola función.
- No mezclar evidencia con descripción en el mismo bloque.
- Agrupar por lógica de decisión, no por tipo de contenido.
- Mantener consistencia entre bloques repetibles.

---

## 4. Content Hierarchy.

Definir jerarquía global:

- Nivel 1: Qué hace el proveedor.
- Nivel 2: Dónde aplica.
- Nivel 3: Cómo ejecuta.
- Nivel 4: Qué ha hecho.
- Nivel 5: Por qué es confiable.
- Nivel 6: Cómo se compara.
- Nivel 7: Si aplica al caso.
- Nivel 8: Acción.

---

## 5. Decision Interface Layer.

Definir cómo el wireframe se convierte en interfaz de decisión:

### Validation Layer.

- Qué bloques permiten validar capacidad.
- Qué bloques permiten validar experiencia.

### Trust Layer.

- Qué bloques construyen confianza.
- Qué señales refuerzan credibilidad.

### Comparison Layer.

- Qué bloques permiten contraste.
- Qué criterios quedan explícitos.

### Conversion Layer.

- Qué contenido habilita el contacto.
- Qué validaciones ocurren antes del contacto.

---

## 6. Execution Readiness.

Definir preparación para ejecución:

- Compatible con Figma Make.
- Compatible con Visily u otras herramientas.
- Compatible con prototipado rápido.
- Contenido suficiente para testeo UX.
- No requiere interpretación adicional.

---

## 7. Execution Prompt — Figma Ready.

Generar un prompt final que:

- Respete el orden exacto de secciones.
- Incluya contenido representativo.
- Defina bloques por sección.
- Defina comportamiento estructural.
- Sea directamente usable en Figma Make.

Debe incluir:

- Secciones en orden.
- Bloques por sección.
- Contenido visible.
- Interacciones (expandir, comparar, etc).

---

## REGLAS CRÍTICAS.

- No modificar la estructura definida en Prompt 7.
- No inventar contenido sin respaldo.
- No usar lenguaje de marketing.
- No generar UI final.
- Mantener trazabilidad con decisiones.
- Todo debe ser ejecutable en herramientas de diseño.

---

## CRITERIOS DE CALIDAD.

El output es válido solo si:

- Se puede leer como una interfaz real.
- Cada sección permite validar algo concreto.
- El contenido es claro y escaneable.
- La estructura facilita la decisión.
- No requiere explicación adicional.

Si no cumple, no incluirlo.

---

## FORMATO DE RESPUESTA.

- Todo en español.
- Uso estricto de markdown (#, ##, ###).
- Uso de bullets.
- Puntuación completa.
- Sin emojis.
- Sin texto innecesario.`,

    p2: `# PROMPT 2 — RESEARCH PLAN (AI & MARKET BASED).

Actúa como UX Researcher senior especializado en investigación estratégica basada en evidencia de mercado, comportamiento de usuarios y análisis competitivo.

Tu responsabilidad es diseñar el plan de investigación necesario para responder las preguntas del negocio utilizando fuentes de información existentes, análisis de mercado y modelado sintético de usuarios basado en datos.

- No realizar entrevistas reales.
- No diseñar soluciones.
- No definir interfaces.

Tu objetivo es definir cómo se generará evidencia confiable para reducir la incertidumbre del negocio, priorizando las preguntas, fuentes y focos de análisis más relevantes.

---

## INPUT OBLIGATORIO.

1. Business Context Report.
[pegar output final del Prompt 1].

---

## OUTPUT REQUERIDO.

Genera el documento con exactamente esta estructura:

Research Plan.

---

1. Research Objective.
- 1 párrafo máximo.
- Debe derivarse directamente del Business Context Report.

---

2. Research Questions.
- Prioritized Research Questions.
- Secondary Research Questions.

---

3. Data Sources.

Para cada fuente:

- Source Name:
- Source Type:
- Purpose:
- Key Data to Extract:
- Priority Level: High / Medium / Low.
- Reseñas.
- Casos reales.
- Evidencia externa.

---

4. Market Segments to Analyze.

Para cada segmento:

- Segment Name:
- Description:
- Relevance to Business:
- Priority Level: High / Medium / Low.

---

5. Competitor Analysis Scope.

Include:

- Direct Competitors.
- Indirect Competitors.
- Substitute Solutions.

Para cada tipo:

- What to Analyze:
  - Services offered.
  - Positioning.
  - Target clients.
  - Differentiation.
  - Trust signals.
  - Evidence of experience.
  - Certifications or standards.
  - Risk mitigation signals.
- Priority Level: High / Medium / Low.

---

6. Synthetic User Modeling.

Define perfiles de usuario simulados basados en el Business Context Report y en evidencia observable de mercado, reseñas, casos reales, contenido público y señales de comportamiento.

- No inventar perfiles sin relación con la evidencia disponible.
- Cada perfil debe poder trazarse a patrones detectables en las fuentes definidas en Data Sources.
- Mantener foco en comportamiento de decisión, no en narrativa extensa.

Para cada perfil:

- Profile Name:
- Industry:
- Role:
- Primary Responsibilities:
- Decision Risks:
- Decision Triggers:
- Required Evidence to Trust a Provider:

---

7. Analysis Method.

Define los métodos que se utilizarán para generar evidencia.

Include:

- Desk Research.
- Competitive Benchmarking.
- Content Analysis.
- Trust Signal Mapping.
- Decision Criteria Mapping.
- Pattern Identification.

Para cada método:

- Purpose:
- Expected Outcome:

---

8. Success Metrics.

El research será considerado exitoso cuando:

- Primary Success Metric:
- Secondary Success Metric:
  - Se identifiquen patrones claros de decisión de clientes.
  - Se identifiquen señales reales de confianza en el mercado.
  - Se comprendan los criterios de evaluación de proveedores.
  - Se identifiquen factores de diferenciación del sector.
  - Se reduzca la incertidumbre del negocio sobre cómo los clientes seleccionan proveedores.

---

## FORMATO DE RESPUESTA.

- Usar lenguaje claro, directo y profesional.
- Priorizar bullets cuando sea posible.
- Mantener consistencia estructural en todas las secciones.
- Cada sección debe ser escaneable en menos de 30 segundos.
- Usar puntuación completa: cada frase declarativa debe terminar con punto final.
- Todo el contenido debe estar en español.

---

## REGLAS.

- Basar el plan directamente en el Business Context Report.
- Priorizar las preguntas, fuentes y focos de análisis más relevantes.
- No proponer soluciones.
- No simular entrevistas ni testimonios.
- El output debe facilitar directamente la ejecución del research y la síntesis posterior.`,

    p3: `# PROMPT 3 — USER RESEARCH SYNTHESIS.

Actúa como UX Researcher senior especializado en análisis de comportamiento de usuarios.

Tu responsabilidad es sintetizar los datos de investigación, identificar patrones consistentes y generar insights basados en evidencia.

- No diseñar soluciones.
- No proponer interfaces.

Tu objetivo es transformar datos en conocimiento útil para la toma de decisiones.

---

## INPUT OBLIGATORIO.

1. Research Plan.
[pegar output del Prompt 2].

---

## OUTPUT REQUERIDO.

Genera el documento con exactamente esta estructura:

User Insight Report.

---

1. Decision User Profiles.

- Deben derivarse del Research Plan (Synthetic Users + Market Segments).
- No inventar nuevos segmentos sin evidencia.
- Definir usuarios como perfiles de decisión, no como empresas o segmentos de mercado.

---

2. User Goals.

- Basados en comportamiento observable.
- Enfocados en objetivos reales de decisión.

---

3. Pain Points.

- Deben estar vinculados a riesgos, fricciones o incertidumbre en la toma de decisión.

---

4. Behavior Patterns.

- Identificar solo patrones recurrentes, no observaciones aisladas.
- Cada patrón debe aparecer en múltiples fuentes o contextos.
- Expresar cada patrón como comportamiento observable: acción + contexto + consecuencia.

---

5. Journey Map Summary.

- Resumen del proceso de evaluación y decisión del usuario.
- Enfocado en etapas clave: descubrimiento, evaluación, contacto y decisión.
- Debe resumir el proceso observado, no diseñar una experiencia ideal.

---

6. Friction Points.

- Puntos donde aumenta la incertidumbre, riesgo o abandono.

---

7. Opportunity Areas.

- Definir áreas de mejora basadas en fricciones identificadas.
- No proponer soluciones específicas.
- Cada oportunidad debe derivarse directamente de un patrón o fricción identificada.
- Expresar en términos de mejora del proceso de decisión del usuario.

---

8. Evidence Sources.

Para cada insight o patrón, indicar:

- Source Type:
(Ejemplo: competencia, mercado, contenido, reseñas, casos reales, evidencia externa).
- Source Reference:
(Qué lo respalda).
- Confidence Level: High / Medium / Low.
- Impact Level: High / Medium / Low.

Cada insight o patrón debe poder vincularse explícitamente a una o más fuentes definidas en el Research Plan.

---

## FORMATO DE RESPUESTA.

- Usar lenguaje claro, directo y profesional.
- Priorizar bullets.
- Mantener consistencia estructural.
- Cada sección debe ser escaneable en menos de 30 segundos.
- Usar puntuación completa.
- Todo el contenido debe estar en español.

---

## REGLAS.

- Todo insight debe estar respaldado por evidencia explícita.
- No inventar patrones sin soporte en datos.
- Priorizar insights con mayor impacto en la toma de decisión del usuario.
- Mantener trazabilidad con el Research Plan.`,

    p4: `# PROMPT 4 — USER NEEDS DEFINITION.
(Evidence-Based User Needs — Decision Ready).

Actúa como UX Analyst especializado en transformar datos de investigación en necesidades claras, verificables y accionables del usuario.

Tu responsabilidad es convertir evidencia observada en necesidades reales del usuario que puedan guiar decisiones de producto y diseño.

- No diseñar soluciones.
- No definir UI.
- No priorizar funcionalidades.

Tu foco es traducir evidencia en necesidades operacionales.

---

## INPUT OBLIGATORIO.

1. User Insight Report.
(pegar output del Prompt 3).

---

## OUTPUT REQUERIDO.

- Generar entre 5 y 8 necesidades máximo.

Para cada necesidad, utilizar exactamente la siguiente estructura:

User Needs Definition.

Para los insights con mayor Impact Level (High) identificados en la sección Evidence Sources:

- Priorizar insights con mayor Impact Level (High).

---

User Statement.

- Expresión narrativa del contexto del usuario.
- Debe reflejar contexto real derivado de evidencia, no una formulación genérica.

Formato:

El usuario necesita ______.
Para poder ______.

---

Observed Behavior.

- Comportamiento observable: acción real, no opinión.

---

Pain Point.

- Problema específico, observable y verificable.

---

User Need.

- Necesidad funcional derivada directamente de la evidencia.
- Debe ser concreta, accionable e independiente de soluciones.

---

UX Requirement.

- Condición funcional que debe cumplirse para satisfacer la necesidad.
- No definir cómo se implementa.
- No definir componentes, interfaces o soluciones específicas.
- Debe ser verificable en una futura implementación o evaluación.

---

Source Insight.

- Referencia explícita al insight del cual se deriva la necesidad.

---

## REGLAS CRÍTICAS.

- Todas las necesidades deben derivarse de evidencia.
- No inventar necesidades.
- No asumir motivaciones.
- No diseñar soluciones.
- No definir interfaces.
- No priorizar.
- No usar lenguaje de marketing.
- No usar opiniones.
- Solo usar evidencia observable.
- Evitar duplicar necesidades que respondan al mismo problema.
- No repetir bloques de contenido.
- Cada necesidad debe aparecer solo una vez.

---

## CRITERIOS DE CALIDAD.

Un User Need es válido solo si:

- Existe evidencia observable.
- Puede ser explicado con comportamiento real.
- Puede transformarse en un requisito verificable.
- Reduce una fricción identificada.

Si no cumple estos criterios:

- No incluirlo.

---

## FORMATO DE RESPUESTA.

- Lenguaje claro, directo y profesional.
- Priorizar bullets.
- Mantener consistencia estructural.
- Usar puntuación completa.
- Todo el contenido debe estar en español.`,
    p7: `# PROMPT 7 — WIREFRAME ARCHITECTURE (COMPACT VERSION).
(Evidence-Based Structural Wireframe — Structure Ready).

Actúa como UX Architect y Wireframe Specialist especializado en estructuración de interfaces escalables.

Tu responsabilidad es transformar la arquitectura de experiencia en una representación estructural clara, auditable y lista para diseño y desarrollo.

- No diseñar estilos visuales.
- No definir branding.
- No usar colores ni tipografías.

Tu enfoque es:

- estructura.
- jerarquía.
- layout.
- comportamiento espacial.
- organización lógica.

---

## INPUT OBLIGATORIO.

1. Experience Blueprint.

---

## OUTPUT REQUERIDO.

Wireframe Specification — Compact.

---

## 1. Global Layout Map.

Layout Flow:
(Derivado de Information Architecture — sin agregar nuevas secciones).

- No crear sección Hero independiente si no existe en el blueprint.
- Integrar la función de Hero en la primera sección si aplica.

Functional Zones:
Identification.
Evidence.
Validation.
Trust.
Conversion.

Reading Flow:
Top → Bottom.
Evidence-first.
Decision-driven.

---

## 2. Navigation Model.

Formato:

Navigation Type:
Position:
Behavior:
Priority Order:
Mobile Mode:

Reglas:

- Deben completarse todos los campos.
- Navigation Type debe incluir: Primary, Sticky, Anchor-based.
- Behavior debe describir comportamiento estructural, no eventos genéricos.
- Priority Order debe derivarse del flujo de decisión del usuario.
- Mobile Mode debe ser completamente especificado.

---

## 3. Section Matrix.

Formato:

Section | Based on Decision | Layout | Primary Components | Interaction | Responsive.

Reglas:

- Todas las secciones deben seguir estrictamente este formato en una sola línea.
- No usar bloques narrativos.
- No dividir en múltiples líneas.
- No repetir secciones.

Primary Components (HTML-like obligatorio):

- Heading (H1–H3).
- Paragraph.
- List.
- Label.
- Container.
- Data block.

Jerarquía de componentes:

- Section → nivel macro.
- Container → agrupador estructural.
- Data block → unidad de información verificable.

Interaction:

- Reveal content.
- Expand / collapse.
- Filter.
- Navigate (scroll to section / intra-section / between groups).

No usar:

- click.
- hover.
- interacciones genéricas.

Reglas de comparación:

- Si la sección incluye comparación, debe definir explícitamente:
  - capacidad.
  - experiencia.
  - credibilidad.
  - contexto.

- Los criterios deben presentarse como estructuras comparables en paralelo.

---

## 4. Visual Hierarchy Model.

Formato:

Primary Focus:
Evidence Focus:
Support Focus:
Conversion Focus:
Scan Order:

Debe derivarse de decisiones del Prompt 5.
No usar jerarquías genéricas.

---

## 5. Grid System.

Formato:

Grid:
12 columns.

Container:
1200px.

Gutters:
24px.

Margins:
Mobile: 16px.
Tablet: 32px.
Desktop: 64px.

Spacing Scale:
8.
16.
24.
32.
48.
64.

---

## 6. Component Inventory.

Formato:

Navigation:
Header.
Menu.
Toggle.
Link.

Content:
Section.
Container.
Heading.
Paragraph.
List.
Label.
Data block.

Interactive:
Button.
Link.
Filter.
Expand / collapse.
Navigate.

Feedback:
Loading.
Error.
Success.
Validation.

Reglas:

- Mantener el mismo nivel de abstracción.
- No mezclar niveles estructurales.
- Todo debe ser implementable.

---

## 7. User State Mapping.

Formato:

Exploración.
User Intent:
Required Information:
Interface Behavior:

Validación.
User Intent:
Required Information:
Interface Behavior:

Comparación.
User Intent:
Required Information:
Interface Behavior:

Decisión.
User Intent:
Required Information:
Interface Behavior:

---

## REGLAS CRÍTICAS.

- No repetir el documento.
- No duplicar secciones.
- El output debe aparecer una sola vez.
- No usar componentes visuales abstractos.
- No usar interacciones genéricas.
- Todo debe ser implementable en HTML/CSS/JS.
- Mantener trazabilidad con decisiones (Prompt 5).
- Todas las secciones deben mantener el mismo nivel de detalle.

---

## FORMATO DE RESPUESTA.

- Lenguaje claro, directo y técnico.
- Priorizar estructura tabular o lineal según se indique.
- Mantener consistencia en naming y nivel de detalle.
- Usar puntuación completa.
- Todo el contenido debe estar en español.`,

    p75: `# PROMPT 7.5 — WIREFRAME REPRESENTATION + GENERATION LAYER.
(Structure-to-Visual Translation — Testing + Tool Execution Ready).

Actúa como UX Architect especializado en traducción de arquitectura de información a representaciones visuales testeables y prompts ejecutables para herramientas de wireframing.

Tu responsabilidad es transformar una estructura definida en un wireframe claro, escaneable y ejecutable en herramientas como UXPIN, VISiLY o Figma AI.

- No diseñar estilos visuales.
- No definir branding.
- No usar colores ni tipografías.
- No inventar contenido real.
- Todo contenido debe representarse exclusivamente mediante placeholders estructurados.
- No alterar la estructura base.
- No cambiar el orden de secciones.

Tu objetivo es traducir estructura en representación visual manteniendo:

- claridad.
- escaneabilidad.
- consistencia estructural.
- capacidad de ejecución en herramientas.

---

## INPUT OBLIGATORIO.

1. Wireframe Specification — Compact.
[pegar output final del Prompt 7].

---

## OUTPUT REQUERIDO.

El output debe contener dos bloques:

1. Wireframe Representation — Testing Ready.
2. Wireframe Generation Prompt — Tool Ready.

---

## Wireframe Representation — Testing Ready.

### 1. Screen Structure.

Formato:

Screen Flow:
(secuencia de secciones exacta del layout).

Scroll Type:
Vertical.

Reading Pattern:
Top → Bottom.
Scan-driven.
Decision-oriented.

---

### 2. Section Representation.

Formato (repetir por cada sección):

Section Name:

Visual Blocks:
(lista de bloques visibles dentro de la sección).

Block Structure:
(cómo se agrupan los bloques).

Content Mapping:
(traducción desde componentes estructurales).

User Interaction:
(comportamiento del usuario).

Scan Behavior:
(cómo se recorre visualmente).

---

### 3. Block Definition System.

Equivalencias obligatorias:

- Heading → título visible.
- Paragraph → texto descriptivo.
- List → lista escaneable.
- Label → identificador visual.
- Data block → bloque de información estructurada.
- Container → agrupador visual.

---

### 4. Layout Behavior.

Formato:

Content Density:
Spacing Logic:
Grouping Principle:
Repetition Pattern:

---

### 5. Interaction Mapping.

Formato:

Reveal Strategy:
Expansion Model:
Navigation Model:
Comparison Behavior:

---

### 6. Mobile Representation.

Formato:

Layout Adaptation:
Stack Behavior:
Interaction Changes:
Scroll Behavior:

---

### 7. Testing Readiness.

Formato:

Testable Elements:
User Tasks:
Validation Points:

---

## Wireframe Generation Prompt — Tool Ready.

Genera un prompt en lenguaje natural optimizado para herramientas de generación de wireframes.

FORMATO DEL PROMPT.

Start with:

---

STATE GENERATION RULE (CRITICAL).

The system must explicitly generate three separate static screens.
Each screen represents a different structural state of the SAME layout.

Do not interpret these as variations.
Do not merge them.
Do not partially represent them.

They are independent and mandatory outputs.

---

REQUIRED SCREENS.

1. Base State (Default).
- All sections visible in their initial collapsed or summarized form.
- No expanded content.
- No filters applied.
- Represents first-time user exploration.

2. Expanded State (Detail View).
- At least one expandable block per section must be expanded.
- Expanded content must reveal deeper structured information.
- Maintain the same layout and section order.
- Do not create new sections.
- Do not reposition elements.

3. Comparison State (Filtered View).
- Content must be reorganized for side-by-side or grouped comparison.
- Filtering must be visible and active.
- Only comparable data should be emphasized.
- Maintain section hierarchy.
- Do not remove sections, only adapt their internal structure.

---

STATE CONSISTENCY RULE.

Across all three screens:

- Section order must remain identical.
- Layout structure must remain consistent.
- Only internal block behavior can change.
- No screen should introduce new components or remove existing ones.

If consistency is broken, the output is invalid.

---

STRUCTURAL INTEGRITY RULE (CRITICAL).

The layout structure defined in the input must be strictly preserved.

---

NON-NEGOTIABLE RULES.

- Do not reorder sections.
- Do not merge sections.
- Do not split sections.
- Do not rename sections.
- Do not skip sections.
- Do not prioritize visual decisions over structural logic.

---

SECTION LOCK RULE.

Each section must be treated as a fixed structural container.

Each section must include:

- A clear entry point (heading).
- A grouped content structure.
- A defined internal hierarchy.

Even if content is minimal, structure must remain visible.

---

HIERARCHY PRESERVATION.

The reading order must be derived from the decision flow defined in the Experience Blueprint.
This order cannot be altered under any condition.

---

GROUPING CONSISTENCY RULE.

Content grouping must remain consistent across:

- All breakpoints.
- All states.
- All sections.

Do not flatten grouped content into linear blocks.
Do not convert structured data into plain text.

---

FAILURE CONDITION.

If any of the above rules are violated:
The output must be considered structurally incorrect.

---

Create a responsive wireframe for a B2B service provider website.

The layout must support:

- full-width desktop view with parallel content structures.
- tablet adaptation with grouped containers.
- mobile single-column stacking.

The system must include equivalent structural states across all use cases:

- Base page (default state).
- Expanded detail state for grouped content.
- Filtered comparison state for structured evaluation.

These states must always be represented, regardless of domain or content type.

Each state must be represented as a separate static screen.
Do not merge states into a single layout.

Do not design only for mobile.
The structure must preserve comparison, grouping and hierarchy across all breakpoints.

---

Luego:

- Definir cada sección en orden.
- Describir qué contiene cada sección.
- Indicar agrupaciones de contenido.
- Indicar comportamiento estructural: expandido, agrupado, comparable.
- Usar exclusivamente placeholders estructurados.

---

HERO STRUCTURE RULE (CRITICAL).

The hero section must prioritize:

- Clear positioning.
- Immediate contextual understanding.
- Primary action visibility.

---

REGLAS DE CONTENIDO (CRÍTICO).

- Todo el contenido debe representarse usando placeholders estructurados.
- Todo texto debe escribirse entre corchetes [].
- Los placeholders deben reflejar intención de contenido.
- No usar lorem ipsum.
- No generar contenido real.
- No inventar texto específico.

---

EJEMPLOS DE PLACEHOLDERS VÁLIDOS.

[Nombre del proveedor o servicio].
[Descripción breve del alcance del servicio].
[Lista de servicios principales].
[Resumen de capacidad técnica].
[Ejemplo de proyecto ejecutado].
[Certificaciones o estándares relevantes].
[Información comparable por criterio].
[Resumen de validación de fit].
[Campos de contacto].

---

CERRAR CON.

Layout Guidelines:

- Vertical scroll.
- Clear separation between sections.
- Content-first structure.
- Blocks grouped by meaning.
- Designed for scanning and quick evaluation.

---

## FORMATO DE RESPUESTA.

- Usar lenguaje claro, directo y profesional.
- Priorizar bullets cuando sea posible.
- Mantener consistencia estructural en todas las secciones.
- Cada sección debe ser escaneable en menos de 30 segundos.
- Usar puntuación completa.

---

## REGLAS.

- No modificar la estructura del Prompt 7.
- No agregar nuevas secciones.
- No eliminar secciones.
- Mantener el orden exacto del layout.
- No duplicar contenido.
- Mantener trazabilidad con decisiones (Prompt 5).
- Mantener coherencia con Experience Blueprint (Prompt 6).
- El prompt generado debe ser usable directamente sin edición.
- Priorizar claridad sobre creatividad.`,

    p8: `# PROMPT 8 — UI STATE ARCHITECTURE.
(Interaction-to-System Translation — MVP Behavior Layer).

Actúa como UI Systems Designer especializado en arquitectura de estados de interfaz, comportamiento funcional y consistencia operativa en productos digitales.

Tu responsabilidad es traducir la arquitectura definida en el Wireframe Specification, su representación estructural y su síntesis ejecutable en un sistema formal de estados de interacción, respuesta del sistema y comportamiento accesible para el MVP.

- No diseñar layout.
- No redefinir estructura.
- No modificar el contenido.
- No crear componentes nuevos.
- No definir branding.
- No convertir esta etapa en un Design System completo.
- No inventar estados que no respondan a una interacción o condición real.
- No todos los componentes deben tener el mismo nivel de detalle.
- Priorizar profundidad en componentes críticos para conversión, validación y navegación.
- No incluir buenas prácticas generales que no correspondan a un estado o comportamiento específico.
- Definir solo estados necesarios para el MVP.
- Evitar exhaustividad innecesaria.

Tu enfoque es:

- comportamiento de interfaz.
- estados de interacción.
- respuesta del sistema.
- feedback funcional.
- control de errores.
- accesibilidad operativa.
- consistencia funcional.
- implementación MVP.
- lógica de disparo de estados.
- condiciones de activación.
- impacto en la interacción.

---

## INPUT OBLIGATORIO.

1. Wireframe Specification — Compact.
(pegar output del Prompt 7).

2. Wireframe Representation — Testing Ready.
(pegar output del Prompt 7.5).

3. Decision Synthesis — Execution Ready.
(pegar output del Prompt 7.8).

---

## OUTPUT REQUERIDO.

UI State Specification — MVP Ready.

---

## 1. State Model Definition.

Formato:

State Purpose:
(objetivo del sistema de estados dentro del MVP).

State Logic:
(cómo se organiza el sistema de estados).

State Priority:
(qué estados son críticos para operación, validación y conversión).

Base States:
Default.
Focus.
Active.
Disabled.

Process States:
Loading.
Processing.
Waiting.

Waiting States:
(condición de espera externa).

Result States:
Success.
Error.
Warning.

Content States:
Empty.
Unavailable.
No Results.

---

## 2. Global Interaction States.

Formato:

Navigation Interaction:
(cómo responde la navegación a interacción del usuario y qué dispara cada estado).

Scroll Behavior:
(comportamiento ligado al recorrido y actualización de estado activo).

Sticky Behavior:
(condiciones en que se activa y se mantiene el estado sticky).

Focus Management:
(lógica general de foco y redirección tras interacción).

Overlay Behavior:
(condiciones de apertura, bloqueo, cierre y restauración de foco).

State Persistence:
(condiciones en que los estados persisten o se reinician).

---

## 3. Component State Definitions.

Formato (repetir por cada componente interactivo real identificado en el Wireframe):

Component Name:
(debe nombrarse por función reutilizable, no por contexto visual).

Component Type:
(Tipo funcional: navegación, acción, input, contenido, feedback).

Location:
(section name + contexto dentro del layout).

State Priority:
(Crítico / Alto / Medio — según impacto en navegación, validación o conversión).

State Trigger:
(evento o condición que activa el estado).

Default State:
(estado base del componente).

Focus State:
(condición de foco + comportamiento funcional).

Active State:
(condición de uso directo).

Disabled State:
(condición en la que no puede usarse).

Loading State:
(cuándo se activa + qué bloquea + qué comunica).

Error State:
(condición de error + mensaje + acción posible).

Success State:
(condición de éxito + resultado visible).

Empty State:
(condición de ausencia de contenido + respuesta del sistema).

Accessibility Behavior:
(comportamiento accesible asociado al estado).

Keyboard Navigation:
(trigger por teclado + continuidad).

Responsive Behavior:
Mobile.
Tablet.
Desktop.

- Solo incluir componentes que tengan impacto en navegación, validación o conversión.

---

## 4. Form State Definitions.

Formato:

Field Interaction:
(cómo responde cada campo a foco, entrada y edición).

Validation States:
(condiciones de validación y su activación).

Submission States:
(condiciones del envío y transición de estados).

Error Handling:
(condición de error + recuperación).

Success Confirmation:
(condición de éxito + mensaje + siguiente paso).

Input Field States:
Default.
Focused.
Filled.
Invalid.
Valid.
Disabled.

Form Submission States:
Ready.
Submitting.
Submitted.
Failed.

Validation Behavior:
Real-time validation.
On-submit validation.
Error messaging.

---

## 5. Navigation State Definitions.

Formato:

Menu States:
(estados posibles y condiciones de cambio).

Active Link State:
(condición que define el estado activo).

Collapsed State:
(condición de colapso).

Expanded State:
(condición de expansión).

Sticky State:
(condición de activación y permanencia).

Mobile Menu State:
(condiciones de apertura, foco y cierre).

Navigation Visibility:
(cuándo se muestra o se oculta).

Navigation Interaction:
(eventos que disparan interacción).

Navigation Transitions:
(cambios de estado con su trigger).

---

## 6. Feedback and System Response States.

Formato:

Notification States:
(condiciones de activación).

Alert States:
(condiciones críticas de activación).

Confirmation States:
(condiciones de éxito).

System Message States:
(condiciones estructurales del sistema).

Feedback Visibility:
(dónde y cuándo aparece).

Feedback Priority:
(alta / media / baja según impacto).

Feedback Persistence:
(cuánto dura y cuándo desaparece).

User Acknowledgment:
(cuándo requiere acción del usuario).

---

## 7. Error Handling Model.

Formato:

Error Detection:
(condiciones que generan error).

Error Communication:
(cómo se comunica).

Error Recovery:
(cómo se recupera la acción).

Error Prevention:
(condiciones preventivas).

Error Priority:
(prioridad cuando múltiples errores ocurren).

User-visible Feedback:
(mensaje claro y accionable).

Recovery Action:
(acción disponible).

Fallback Behavior:
(comportamiento alternativo).

---

## 8. Loading and Processing States.

Formato:

Loading Indicators:
(condición de carga).

Processing Indicators:
(condición de proceso activo).

Timeout Behavior:
(condición de timeout + acción).

State Priority:
(prioridad frente a otros estados simultáneos).

User Feedback:
(qué se comunica).

Interaction Blocking:
(cuándo se bloquea interacción).

Cancel Behavior:
(si aplica y en qué condiciones).

Retry Behavior:
(cuándo y cómo se reintenta).

---

## 9. Empty and Edge Case States.

Formato:

No Data:
(condición).

No Results:
(condición).

Unavailable Content:
(condición).

Connection Failure:
(condición).

Timeout:
(condición).

User Guidance:
(qué hacer).

Recovery Action:
(acción disponible).

Fallback Behavior:
(respuesta alternativa).

Retry Interaction:
(cómo reintentar).

---

## 10. Responsive State Behavior.

Formato:

Mobile:
(comportamiento táctil y simplificación de estados).

Tablet:
(adaptación intermedia).

Desktop:
(comportamiento completo).

Touch Interaction:
(condiciones de activación por toque).

Hover Availability:
(cuándo existe).

Focus Behavior:
(cómo se mantiene según input).

Navigation Behavior:
(adaptación por dispositivo).

---

## REGLAS CRÍTICAS.

- No modificar la estructura definida en Prompt 7 y Prompt 7.5.
- No agregar componentes nuevos.
- No eliminar componentes existentes.
- Todo estado debe corresponder a una acción, validación o condición real.
- Priorizar estados críticos para el MVP.
- Definir solo estados relevantes para el MVP según el contexto del producto.
- Omitir estados que no aporten valor directo a la interacción o validación.
- Evitar duplicación de estados entre secciones.
- Mantener trazabilidad con Design Decision Specification (Prompt 5).
- Mantener coherencia con Experience Blueprint (Prompt 6).
- Mantener coherencia con Wireframe Specification (Prompt 7).
- Mantener coherencia con Wireframe Representation (Prompt 7.5).
- Mantener coherencia con Decision Synthesis (Prompt 7.8).
- Mantener coherencia con estados definidos en Prompt 7.5.
- Estados considerados: base, expandido, comparación.
- Los estados deben soportar la interacción del contenido definido en Prompt 7.7.
- Nombrar componentes según su función, no según su contexto.
- Definir siempre condición de activación de cada estado.
- Definir prioridad cuando múltiples estados ocurren simultáneamente.
- No transformar esta etapa en documentación visual de branding.

---

## FORMATO DE RESPUESTA.

- Lenguaje claro, directo y técnico.
- Priorizar estructura sobre narrativa.
- Mantener consistencia en naming de estados.
- Evitar descripciones extensas, priorizar definición funcional y concreta.
- Usar puntuación completa.
- Todo el contenido debe estar en español.`,
    p9: `# PROMPT 9 — DEVELOPMENT SPECIFICATION.
(System-to-Implementation Translation — MVP Build Layer).

Actúa como Frontend Architect especializado en implementación de interfaces accesibles, escalables y trazables desde sistemas UX/UI definidos previamente.

Tu responsabilidad es traducir la arquitectura estructural, la representación del wireframe y el sistema de estados del MVP en una especificación técnica clara para implementación frontend.

Esta etapa no consiste en escribir código final.
Consiste en definir cómo debe construirse el MVP a nivel de estructura, comportamiento, sistema base y criterios de calidad técnica.

- No redefinir la estructura del producto.
- No modificar el contenido.
- No inventar componentes nuevos.
- No diseñar branding.
- No convertir esta etapa en código final.
- No alterar la lógica de interacción definida en Prompt 8.
- Toda decisión debe ser trazable a:
  - estructura (Prompt 7).
  - representación (Prompt 7.5).
  - estados (Prompt 8).
- No definir valores arbitrarios no justificados por el MVP.
- Priorizar implementación MVP sobre escalabilidad innecesaria.

Tu enfoque es:

- traducción a implementación.
- consistencia entre capas.
- comportamiento funcional.
- accesibilidad real.
- mantenibilidad.
- claridad para desarrollo.

---

## INPUT OBLIGATORIO.

1. Wireframe Specification — Compact.
(pegar output del Prompt 7).

2. Wireframe Representation — Testing Ready.
(pegar output del Prompt 7.5).

3. UI State Specification — MVP Ready.
(pegar output del Prompt 8).

---

## OUTPUT REQUERIDO.

Development Specification — MVP Ready.

---

## 1. Implementation Scope.

Formato:

Implementation Goal:
(objetivo técnico del MVP).

Build Priority:
(componentes y comportamientos críticos según flujo).

System Dependencies:
(relación entre estructura, estados y comportamiento).

MVP Boundaries:
(qué se implementa y qué no en esta etapa).

---

## 2. HTML Structure Plan.

Formato:

Structure Logic:
(cómo la estructura refleja el flujo definido en Prompt 7).

Document Structure:
(estructura general del documento).

Semantic Regions:
(landmarks obligatorios según flujo).

Section Structure:
(estructura mínima por sección basada en el wireframe).

Component Anchoring:
(cómo los componentes se insertan dentro de la estructura).

Hierarchy Rules:
(reglas de jerarquía obligatorias).

Content Order:
(orden no modificable del flujo).

Accessibility Semantics:
(relaciones semánticas necesarias para accesibilidad).

---

## 3. CSS System Plan.

Formato:

CSS Architecture Principle:
(lógica estructural del sistema de estilos).

Token Strategy:
(qué variables base son necesarias y por qué).

Layout Logic:
(cómo se distribuyen los bloques según el wireframe).

Component Styling Logic:
(cómo se organizan los estilos por componente).

State Styling Logic:
(cómo se representan funcionalmente los estados definidos en Prompt 8).

Responsive Strategy:
(cómo se adapta la estructura sin alterar el flujo).

Scalability Rules:
(reglas para mantener orden y consistencia).

Nota:
No definir valores arbitrarios no derivados del MVP o inputs previos.

---

## 4. JavaScript Logic Plan.

Formato:

Interaction Model:
(lógica general de interacción basada en estados).

Event System:
(eventos que disparan cambios de estado).

State Trigger Mapping:
(relación directa evento → estado → resultado).

State Priority Handling:
(cómo se resuelven conflictos entre estados).

Navigation Logic:
(scroll, active link, sticky, mobile menu).

Disclosure Logic:
(expand / collapse basado en estados).

Filter Logic:
(cambio de contenido + manejo de no results, error).

Form Logic:
(validación, submit, bloqueo, feedback).

Error Recovery Logic:
(recuperación ante fallos).

Session Continuity:
(estados persistentes vs temporales).

---

## 5. Component Implementation Plan.

Formato (repetir solo para componentes críticos):

Component Name:

Component Role:

Implementation Priority:

Structural Requirements:
(estructura mínima obligatoria).

State Dependencies:
(estados requeridos desde Prompt 8).

Trigger Conditions:
(eventos que activan estados).

Behavior Rules:
(comportamiento esperado).

State Transitions:
(cambios entre estados relevantes).

Error Handling:
(cómo responde ante fallo).

Accessibility Requirements:
(requisitos obligatorios).

Responsive Considerations:
(adaptación sin cambiar lógica).

Implementation Notes:
(decisiones clave para desarrollo).

- Solo incluir componentes críticos para navegación, validación o conversión.

---

## 6. Performance Checklist.

Formato:

Rendering Considerations:
(carga inicial según estructura).

Interaction Risks:
(riesgos por navegación, filtros, expand, form).

State Performance Risks:
(impacto de loading, processing, error).

DOM Update Strategy:
(cómo evitar re-render innecesario).

Fallback Readiness:
(comportamiento ante fallos parciales).

---

## 7. Accessibility Checklist.

Formato:

Semantic Structure Check:
(verificación de landmarks y jerarquía).

Navigation Accessibility Check:
(navegación accesible).

Keyboard Interaction Check:
(recorrido completo por teclado).

Focus Management Check:
(control de foco y retorno).

Component Accessibility Check:
(estado accesible por componente).

Form Accessibility Check:
(validación y feedback accesible).

Feedback Accessibility Check:
(comunicación de estados).

Responsive Accessibility Check:
(adaptación accesible por dispositivo).

Screen Reader Support Check:
(compatibilidad con lectores de pantalla).

Nota:
Cada punto debe derivarse de componentes y estados definidos previamente.

---

## REGLAS CRÍTICAS.

- No modificar la estructura definida en Prompt 7 y Prompt 7.5.
- No alterar la lógica definida en Prompt 8.
- Todo comportamiento debe derivarse de estados.
- Toda decisión debe ser trazable.
- No inventar componentes ni flujos.
- No incluir código final.
- Priorizar implementación MVP.
- Mantener coherencia entre HTML, CSS y JS.
- El documento debe ser directamente utilizable para desarrollo.
- Evitar sobreespecificación innecesaria.
- Priorizar decisiones implementables sobre documentación exhaustiva.

---

## FORMATO DE RESPUESTA.

- Lenguaje claro, directo y técnico.
- Priorizar estructura sobre narrativa.
- Evitar descripciones extensas.
- Usar puntuación completa.
- Todo el contenido debe estar en español.`,

    p10: `# PROMPT 10 — UX / ACCESSIBILITY AUDIT.
(System Validation — Experience & Impact Layer).

Actúa como UX Auditor Senior, Product Designer y especialista en accesibilidad.

Tu responsabilidad es evaluar el MVP construido en función de:

- la arquitectura definida (Prompt 7).
- la representación (Prompt 7.5).
- el sistema de estados (Prompt 8).
- la especificación de desarrollo (Prompt 9).

No describas superficialmente.
Diagnostica, prioriza y proyecta impacto.

---

## INPUT OBLIGATORIO.

1. Development Specification — MVP Ready.
(pegar output del Prompt 9).

2. UI State Specification — MVP Ready.
(pegar output del Prompt 8).

3. Wireframe Specification — Compact.
(pegar output del Prompt 7).

4. SITE URL.
(opcional, si el MVP está implementado).

---

## OUTPUT REQUERIDO.

UX Audit Report — MVP Validation.

---

## Score Scale.

0 = crítico, no funcional.
1 = muy deficiente.
2 = funcional con fricciones.
3 = correcto con mejoras.
4 = óptimo.

---

## 0. Decision Alignment.

Checklist:

- Implemented experience reflects defined decisions.
- Content supports decision-making process.
- No deviations from decision logic.

Score: [0–4].

Notes:

- ¿Se respetan las decisiones definidas en Prompt 5?.
- ¿Dónde hay desviaciones?.
- Impacto en experiencia y negocio.

---

## 1. Flow Integrity (Estructura del flujo).

Checklist:

- Flow sequence is preserved (no secciones fuera de orden).
- Sections are clearly distinguishable.
- User can progress without confusion.
- No structural breaks in reading flow.

Score: [0–4].

Notes:

- ¿Se respeta el flujo definido?.
- ¿Dónde se rompe?.
- Impacto en comprensión y avance.

---

## 2. Navigation & Orientation.

Checklist:

- Navigation reflects real sections.
- Active section is correctly detected.
- Navigation supports scroll + direct access.
- Mobile navigation is usable and consistent.

Score: [0–4].

Notes:

- Problemas de navegación.
- Problemas de orientación.
- Impacto en pérdida de contexto.

---

## 3. Interaction & State Behavior.

Checklist:

- Interactive components respond correctly.
- State transitions are consistent.
- Error, loading and success states are clear.
- No conflicting or ambiguous states.

Score: [0–4].

Notes:

- Fallas de interacción.
- Estados mal implementados.
- Impacto en usabilidad.

---

## 4. Content Clarity & Decision Support.

Checklist:

- Content supports decision-making.
- Information is scannable.
- Hierarchy is clear.
- No cognitive overload.

Score: [0–4].

Notes:

- Problemas de comprensión.
- Problemas de jerarquía.
- Impacto en toma de decisión.

---

## 5. Conversion Readiness (Contacto).

Checklist:

- Form is understandable.
- Validation is clear.
- Errors are recoverable.
- Success feedback is clear.

Score: [0–4].

Notes:

- Fricciones en contacto.
- Problemas de conversión.
- Impacto en generación de leads.

---

## 6. Accessibility & Operability.

Checklist:

- Keyboard navigation works.
- Focus is visible and logical.
- Feedback is accessible (no depende solo de color).
- Semantic structure is correct.

Score: [0–4].

Notes:

- Problemas críticos de accesibilidad.
- Impacto en uso real.

---

## 7. Performance & Stability.

Checklist:

- Page loads without blocking.
- Interactions feel responsive.
- No visible layout shifts.
- No broken states during interaction.

Score: [0–4].

Notes:

- Problemas de rendimiento.
- Problemas de estabilidad.
- Impacto en experiencia.

---

## 8. Mobile Experience.

Checklist:

- Layout adapts correctly.
- Interaction works without hover.
- Navigation is usable.
- Touch targets are appropriate.

Score: [0–4].

Notes:

- Problemas en mobile.
- Impacto en uso real.

---

## 9. Critical Issues (Top Impact).

Formato:

Issue:
Location:
Type: (UX / UI / Interaction / Accessibility / Performance).
Severity: (Alta / Media / Baja).
Impact: (qué rompe y por qué importa).

---

## 10. Opportunity Mapping.

Formato:

Opportunity:
What to change:
Why it matters:
Expected impact:

---

## 11. Final Evaluation.

Overall Score: [0–36].
(Basado en la suma de todas las secciones evaluadas).

Experience Level:
(Crítico / Deficiente / Aceptable / Bueno / Óptimo).

Conversion Risk:
(Alto / Medio / Bajo).

Primary Blocking Issue:
(principal problema que impide desempeño óptimo).

---

## REGLAS CRÍTICAS.

- Evaluar contra el sistema definido, no contra opinión personal.
- Priorizar impacto sobre detalle.
- No listar problemas menores irrelevantes.
- No describir lo obvio.
- Toda observación debe indicar impacto.
- Toda recomendación debe ser accionable.
- Mantener trazabilidad con decisiones (Prompt 5).
- Mantener coherencia con arquitectura (Prompt 7).
- Mantener coherencia con interacción (Prompt 8).
- Mantener coherencia con implementación (Prompt 9).

---

## FORMATO DE RESPUESTA.

- Lenguaje claro, directo y crítico.
- Priorizar diagnóstico sobre descripción.
- Evitar explicaciones largas.
- Cada observación debe ser accionable.
- Usar puntuación completa.
- Todo el contenido debe estar en español.`,

    p11: `# PROMPT 11 — CONTINUOUS IMPROVEMENT.
(Optimization & Impact Planning — Decision Layer).

Actúa como Product Manager, UX Strategist y especialista en optimización de conversión.

Tu responsabilidad es transformar el diagnóstico del MVP en un plan de mejora accionable, priorizado y orientado a impacto en experiencia y negocio.

No describas.
Define decisiones, prioridades y resultados esperados.

---

## INPUT OBLIGATORIO.

1. UX Audit Report — MVP Validation.
(pegar output del Prompt 10).

---

## INPUT OPCIONAL.

2. Analytics Data.
3. User Feedback.
4. Conversion Metrics.
5. Support Tickets.

---

## OUTPUT REQUERIDO.

Continuous Improvement Plan — MVP Optimization.

---

## 1. Performance Summary.

Formato:

Current Experience Level:
(nivel obtenido en Prompt 10).

Current Conversion Risk:
(riesgo identificado en Prompt 10).

System Strengths:
(basado en resultados positivos del Prompt 10).

System Weaknesses:
(basado en issues críticos detectados en Prompt 10).

---

## 2. Key Issues Detected.

Formato:

Issue:
Location:
Type: (UX / UI / Interaction / Accessibility / Performance).
Severity: (Alta / Media / Baja).
Impact: (qué rompe y por qué importa).

---

## 3. Root Causes.

Formato:

Issue:
Root Cause: (System / Implementation / Content / Interaction).
Explanation: (por qué ocurre realmente).

---

## 4. Improvement Opportunities.

Formato:

Opportunity:
Related Issue:
What to improve:
Why it matters:
Expected impact: (UX / Conversion / Accessibility / Performance).

---

## 5. Priority Actions (MVP Focus).

Formato:

Action:
Priority: (Alta / Media / Baja).
Effort: (Bajo / Medio / Alto).
Impact: (Alto / Medio / Bajo).
Quick Win: (Sí / No).

---

## 6. Execution Plan.

Formato:

Phase 1 (Critical Fixes):
(errores que bloquean experiencia o conversión).

Phase 2 (Stability & Clarity):
(mejoras de interacción y consistencia).

Phase 3 (Optimization):
(mejoras de performance y refinamiento).

---

## 7. Experiment Plan.

Formato:

Hypothesis:
Change:
Expected Result:
How to Measure:

Nota:
Si no existen datos reales, definir métricas observables o proxies.

---

## 8. Success Metrics.

Formato:

UX Metrics:
(tasa de error, tiempo de tarea, completion rate).

Conversion Metrics:
(envíos de formulario, interacción con CTA).

Behavior Metrics:
(scroll depth, interacción con filtros/disclosures).

Accessibility Metrics:
(tareas completadas sin bloqueo).

---

## 9. Expected Outcome.

Formato:

Short-term Impact:
(mejoras inmediatas tras fixes).

Mid-term Impact:
(mejoras tras iteración).

Business Impact:
(impacto en leads, confianza, conversión).

---

## REGLAS CRÍTICAS.

- Priorizar impacto sobre volumen de mejoras.
- Priorizar máximo 3–5 acciones críticas para el MVP.
- No proponer cambios sin relación directa con problemas detectados.
- No depender exclusivamente de data si no existe.
- Toda mejora debe ser accionable.
- Toda acción debe tener impacto esperado.
- No listar mejoras superficiales o cosméticas.
- Mantener foco en MVP.
- Mantener trazabilidad con decisiones definidas en Prompt 5.
- Cada experimento debe estar vinculado a un issue detectado.

---

## FORMATO DE RESPUESTA.

- Lenguaje claro, directo y orientado a acción.
- Priorizar decisiones sobre análisis.
- Evitar explicaciones extensas.
- Cada acción debe ser concreta y ejecutable.
- Usar puntuación completa.
- Todo el contenido debe estar en español.`,



};
const dashboardData = {
    rapido: {
        label: "Rápido.",
        description: "Para producir una pieza representativa con contexto suficiente, decisiones mínimas y salida visual usable sin ejecutar OLIVA completo.",
        summary: {
            title: "Modelo Rápido.",
            text: "Ejecuta una cadena reducida de OLIVA para pasar desde diagnóstico y contexto de negocio hacia una landing o wireframe representativo con contenido visible y sentido comercial."
        },
        deliveryHints: {
            "documento-estrategico": "Entrega una síntesis breve con diagnóstico, contexto, decisiones, estructura de experiencia, contenido por sección y recomendación accionable.",
            "presentacion-comercial": "Convierte el flujo en una narrativa breve: problema, contexto, oportunidad, decisión, estructura propuesta y pieza representativa.",
            "figma-make": "Prepara una instrucción clara para generar una landing o wireframe representativo con contenido visible en Figma Make.",
            "especificacion-tecnica": "Reduce el resultado a estructura, secciones, contenido requerido y criterios básicos para implementación.",
            "checklist-interno": "Usa el resultado como lista de control para validar si la pieza tiene contexto, lógica, contenido y claridad suficiente."
        },
        items: [{
                id: "p0",
                shortName: "P0 Audit",
                category: "Diagnosis",
                type: "obligatorio",
                uiPurpose: "Diagnostica el estado actual del sitio o presencia digital para detectar brechas de claridad, confianza, conversión y competitividad.",
                whenToUse: "Cuando existe un sitio, landing o presencia digital que necesita ser evaluada antes de proponer mejoras.",
                input: [
                    "URL del sitio o referencia digital existente.",
                    "Contexto básico del negocio.",
                    "Objetivo comercial del análisis.",
                    "Criterios de evaluación si existen."
                ],
                output: "Website Strategic Audit Report con diagnóstico, brechas, riesgos y oportunidades de mejora.",
                expectedOutput: [
                    "Diagnóstico claro del estado actual.",
                    "Problemas priorizados por impacto.",
                    "Brechas entre capacidad real y capacidad comunicada.",
                    "Riesgos comerciales o estratégicos.",
                    "Oportunidades estructurales de mejora."
                ],
                errors: [
                    "Describir visualmente el sitio sin diagnosticar.",
                    "Evaluar solo estética.",
                    "No conectar hallazgos con impacto comercial.",
                    "Inventar métricas sin evidencia.",
                    "No priorizar problemas."
                ],
                nextAction: "Usa este diagnóstico como base para entender qué problema digital debe resolver la experiencia.",
                originalPrompt: originalPrompts.p0,
                helperPrompt: `Usa el output del PROMPT 0 y sintetízalo en una lectura ejecutiva breve.

La síntesis debe incluir:
- Problema principal detectado.
- Brechas críticas.
- Riesgos comerciales o estratégicos.
- Oportunidades de mejora.
- Prioridad recomendada.

No inventes métricas.
No agregues conclusiones que no estén sustentadas en el audit.
No conviertas esto en propuesta visual todavía.`
            },
            {
                id: "p1",
                shortName: "P1 Contexto",
                category: "Business",
                type: "obligatorio",
                uiPurpose: "Define el problema de negocio, el contexto competitivo y la situación actual del cliente.",
                whenToUse: "Cuando necesitas entender qué se está intentando resolver y por qué el canal digital debe existir.",
                input: [
                    "Output del PROMPT 0.",
                    "Información de la empresa.",
                    "Servicios o productos principales.",
                    "Mercado o industria.",
                    "Objetivo comercial del proyecto."
                ],
                output: "Business Context Report con problema de negocio, contexto competitivo y situación actual.",
                expectedOutput: [
                    "Problema de negocio claramente definido.",
                    "Contexto actual de la empresa.",
                    "Lectura competitiva o de mercado.",
                    "Razón estratégica para intervenir el canal digital.",
                    "Brechas principales a resolver."
                ],
                errors: [
                    "Confundir síntomas con problema de negocio.",
                    "Describir la empresa sin explicar el conflicto.",
                    "No conectar contexto con oportunidad digital.",
                    "Usar lenguaje demasiado genérico.",
                    "No explicar por qué el sitio o canal debe existir."
                ],
                nextAction: "Usa este contexto para tomar decisiones de diseño, contenido y validación en el Prompt 5.",
                originalPrompt: originalPrompts.p1,
                helperPrompt: `Usa el output del PROMPT 1 y genera una síntesis estratégica del contexto.

La síntesis debe incluir:
- Problema de negocio.
- Situación actual.
- Brecha digital principal.
- Oportunidad de mejora.
- Implicancia para el diseño de la experiencia.

No propongas interfaz todavía.
No agregues research no disponible.
No inventes información de la empresa.`
            },
            {
                id: "p5",
                shortName: "P5 Decisiones",
                category: "Strategy",
                type: "obligatorio",
                uiPurpose: "Convierte contexto, necesidades implícitas y diagnóstico en decisiones concretas de producto, contenido y validación.",
                whenToUse: "Cuando necesitas definir qué mostrar, qué probar y qué incertidumbre reducir antes de diseñar la experiencia.",
                input: [
                    "Output del PROMPT 0.",
                    "Output del PROMPT 1.",
                    "Problema de negocio.",
                    "Brechas detectadas.",
                    "Objetivo de la experiencia."
                ],
                output: "Design Decision Specification con decisiones de contenido, experiencia, validación y evidencia.",
                expectedOutput: [
                    "Decisiones estratégicas priorizadas.",
                    "Qué debe comunicar la experiencia.",
                    "Qué evidencia debe mostrarse.",
                    "Qué incertidumbre debe reducirse.",
                    "Criterios para validar la solución."
                ],
                errors: [
                    "Confundir decisiones con copy final.",
                    "Crear decisiones genéricas.",
                    "No justificar con diagnóstico o contexto.",
                    "No priorizar.",
                    "Definir soluciones visuales sin explicar por qué."
                ],
                nextAction: "Usa estas decisiones para ordenar la experiencia completa en el Prompt 6.",
                originalPrompt: originalPrompts.p5,
                helperPrompt: `Usa el output del PROMPT 5 y conviértelo en una matriz breve de decisiones.

La matriz debe incluir:
- Decisión.
- Problema o brecha que responde.
- Evidencia o contexto que la justifica.
- Impacto esperado.
- Riesgo si se omite.

No agregues decisiones nuevas.
No redactes copy final.
No transformes esto en wireframe todavía.`
            },
            {
                id: "p6",
                shortName: "P6 Experiencia",
                category: "Experience",
                type: "obligatorio",
                uiPurpose: "Ordena la experiencia completa en una secuencia lógica de decisión.",
                whenToUse: "Cuando ya existen decisiones estratégicas y necesitas definir cómo avanza el usuario desde comprensión inicial hasta contacto.",
                input: [
                    "Output del PROMPT 5.",
                    "Decisiones priorizadas.",
                    "Problema de negocio.",
                    "Objetivo de conversión o contacto.",
                    "Evidencias disponibles."
                ],
                output: "Experience Blueprint con flujo de secciones, progresión de decisión y lógica de experiencia.",
                expectedOutput: [
                    "Secuencia lógica de experiencia.",
                    "Objetivo de cada etapa.",
                    "Relación entre secciones y decisiones.",
                    "Progresión desde comprensión hasta acción.",
                    "Criterios para ordenar contenido."
                ],
                errors: [
                    "Crear demasiadas secciones.",
                    "Poner contacto demasiado pronto.",
                    "No respetar la progresión de confianza.",
                    "Diseñar layout visual antes de resolver experiencia.",
                    "No conectar secciones con decisiones."
                ],
                nextAction: "Usa este blueprint para definir qué contenido debe existir en cada sección mediante el Prompt 7.7.",
                originalPrompt: originalPrompts.p6,
                helperPrompt: `Usa el output del PROMPT 6 y resume la experiencia en una estructura ejecutable.

Incluye:
- Etapa o sección.
- Objetivo de la sección.
- Qué debe entender el usuario.
- Qué evidencia debe aparecer.
- Qué acción o decisión habilita.

No diseñes UI final.
No agregues secciones que no estén justificadas.
No conviertas esto aún en prompt de generación visual.`
            },
            {
                id: "p77",
                shortName: "P7.7 Content.",
                category: "Content.",
                type: "obligatorio",
                uiPurpose: "Define qué contenido debe existir en cada sección y qué evidencia debe soportarlo.",
                whenToUse: "Cuando necesitas evitar wireframes vacíos, genéricos o sin sustento comercial.",
                input: [
                    "Output del PROMPT 5.",
                    "Output del PROMPT 6.",
                    "Secciones definidas.",
                    "Evidencia disponible.",
                    "Información real del negocio."
                ],
                output: "Content Definition con contenido, mensajes y evidencia por sección.",
                expectedOutput: [
                    "Contenido requerido por sección.",
                    "Mensaje principal de cada bloque.",
                    "Evidencia necesaria o disponible.",
                    "Vacíos de información.",
                    "Recomendaciones de contenido accionables."
                ],
                errors: [
                    "Redactar sin respaldo.",
                    "Usar contenido genérico.",
                    "No conectar copy con evidencia.",
                    "Completar vacíos inventando información.",
                    "No diferenciar mensaje, evidencia y contenido."
                ],
                nextAction: "Usa esta definición de contenido para consolidar decisiones, experiencia y estructura en el Prompt 7.8.",
                originalPrompt: originalPrompts.p77,
                helperPrompt: `Usa el output del PROMPT 7.7 y conviértelo en una tabla breve de contenido por sección.

La tabla debe incluir:
- Sección.
- Mensaje clave.
- Contenido necesario.
- Evidencia que lo respalda.
- Vacíos pendientes.
- Riesgo si el contenido no existe.

No inventes contenido.
No escribas una versión final de toda la landing.
No elimines vacíos importantes.`
            },
            {
                id: "p78",
                shortName: "P7.8 Síntesis",
                category: "Integration",
                type: "obligatorio",
                uiPurpose: "Sintetiza decisiones, experiencia, contenido y estructura en un documento ejecutable.",
                whenToUse: "Cuando necesitas consolidar todo lo anterior en una lógica clara antes de materializar la interfaz.",
                input: [
                    "Output del PROMPT 5.",
                    "Output del PROMPT 6.",
                    "Output del PROMPT 7.7.",
                    "Decisiones estratégicas.",
                    "Contenido por sección."
                ],
                output: "Decision Synthesis Layer con estructura ejecutable para generar la pieza representativa.",
                expectedOutput: [
                    "Síntesis clara de decisiones.",
                    "Estructura de experiencia consolidada.",
                    "Contenido prioritario por sección.",
                    "Criterios de representación.",
                    "Restricciones o riesgos relevantes."
                ],
                errors: [
                    "Duplicar información sin sintetizar.",
                    "Perder jerarquía.",
                    "No conectar decisiones con contenido.",
                    "Omitir restricciones importantes.",
                    "Generar una síntesis demasiado larga para ejecutar."
                ],
                nextAction: "Usa esta síntesis como input directo para generar el wireframe representativo en el Prompt 7.9.",
                originalPrompt: originalPrompts.p78,
                helperPrompt: `Usa el output del PROMPT 7.8 y conviértelo en un brief ejecutable para generación.

Incluye:
- Objetivo de la pieza.
- Usuario o contexto principal.
- Estructura final.
- Contenido obligatorio.
- Evidencia crítica.
- Decisiones que no deben perderse.
- Restricciones para la representación.

No agregues nuevas decisiones.
No resumas eliminando lógica crítica.
No transformes esto en código.`
            },
            {
                id: "p79",
                shortName: "P7.9 Wireframe.",
                category: "Production.",
                type: "final",
                uiPurpose: "Convierte la síntesis en una landing o wireframe representativo con contenido visible, jerarquía y sentido comercial.",
                whenToUse: "Cuando necesitas generar una pieza presentable, entendible y cercana a un entregable real.",
                input: [
                    "Output del PROMPT 7.8.",
                    "Síntesis ejecutable.",
                    "Contenido priorizado.",
                    "Decisiones críticas.",
                    "Formato de representación esperado."
                ],
                output: "Representative Wireframe + Decision Interface Layer con contenido visible y estructura presentable.",
                expectedOutput: [
                    "Wireframe o landing representativa.",
                    "Contenido visible por sección.",
                    "Jerarquía clara.",
                    "Lógica comercial entendible.",
                    "Estructura lista para revisar, presentar o refinar."
                ],
                errors: [
                    "Tomarlo como fuente final de verdad.",
                    "Confundir representación con UI final.",
                    "Ignorar decisiones previas.",
                    "Generar secciones vacías.",
                    "Priorizar estética sobre claridad."
                ],
                nextAction: "Revisa si la pieza comunica correctamente la decisión, el contenido y la oportunidad antes de presentarla o seguir refinando.",
                originalPrompt: originalPrompts.p79,
                helperPrompt: `Usa el output del PROMPT 7.9 y genera una revisión breve de calidad.

Evalúa:
- Si la estructura responde a la síntesis.
- Si el contenido es visible y entendible.
- Si la jerarquía ayuda a decidir.
- Si existe coherencia comercial.
- Si faltan evidencias importantes.
- Si hay riesgos antes de presentar.

Entrega:
- Qué funciona.
- Qué requiere ajuste.
- Qué debería validarse antes de avanzar.
- Recomendación final.`
            }
        ]
    },
    controlado: {
        label: "Controlado.",
        description: "Para construir una pieza representativa con research, necesidades, decisiones, arquitectura y contenido, sin ejecutar la cadena técnica completa.",
        summary: {
            title: "Modelo Controlado.",
            text: "Ejecuta una cadena intermedia de OLIVA para pasar desde diagnóstico, contexto e investigación hacia decisiones, experiencia, arquitectura, contenido y wireframe representativo."
        },
        deliveryHints: {
            "documento-estrategico": "Entrega un documento con diagnóstico, contexto, research, necesidades, decisiones, experiencia, arquitectura, contenido y recomendación accionable.",
            "presentacion-comercial": "Convierte el flujo en una historia clara: problema, contexto, señales, necesidades, decisiones, experiencia, representación y oportunidad.",
            "figma-make": "Prepara una base robusta para generar una landing o wireframe representativo en Figma Make con contenido, jerarquía y lógica de decisión.",
            "especificacion-tecnica": "Resume estructura, secciones, contenido, componentes base y criterios previos para una futura especificación técnica.",
            "checklist-interno": "Usa el resultado como control interno para validar si la pieza tiene diagnóstico, research, decisiones, contenido y representación suficiente."
        },
        items: [{
                id: "controlado-p0",
                shortName: "P0 Audit.",
                category: "Diagnosis.",
                type: "obligatorio",
                uiPurpose: "Diagnostica el estado actual del sitio o presencia digital para detectar brechas de claridad, confianza, conversión y competitividad.",
                whenToUse: "Cuando existe un sitio, landing o presencia digital que debe evaluarse antes de proponer mejoras.",
                input: [
                    "URL del sitio o referencia digital existente.",
                    "Contexto básico del negocio.",
                    "Objetivo comercial del análisis.",
                    "Criterios de evaluación si existen."
                ],
                output: "Website Strategic Audit Report con diagnóstico, brechas, riesgos y oportunidades de mejora.",
                expectedOutput: [
                    "Diagnóstico claro del estado actual.",
                    "Problemas priorizados por impacto.",
                    "Brechas entre capacidad real y capacidad comunicada.",
                    "Riesgos comerciales o estratégicos.",
                    "Oportunidades estructurales de mejora."
                ],
                errors: [
                    "Describir visualmente el sitio sin diagnosticar.",
                    "Evaluar solo estética.",
                    "No conectar hallazgos con impacto comercial.",
                    "Inventar métricas sin evidencia.",
                    "No priorizar problemas."
                ],
                nextAction: "Usa este diagnóstico como base para construir contexto de negocio en el Prompt 1.",
                originalPrompt: originalPrompts.p0,
                helperPrompt: `Usa el output del PROMPT 0 y sintetízalo en una lectura ejecutiva breve.
  
  Incluye:
  - Problema principal detectado.
  - Brechas críticas.
  - Riesgos comerciales o estratégicos.
  - Oportunidades de mejora.
  - Prioridad recomendada.
  
  No inventes métricas.
  No propongas interfaz todavía.`
            },
            {
                id: "controlado-p1",
                shortName: "P1 Contexto.",
                category: "Business.",
                type: "obligatorio",
                uiPurpose: "Define el problema de negocio, el contexto competitivo y la situación actual del cliente.",
                whenToUse: "Cuando necesitas entender qué se está intentando resolver y por qué el canal digital debe existir.",
                input: [
                    "Output del PROMPT 0.",
                    "Información de la empresa.",
                    "Servicios o productos principales.",
                    "Mercado o industria.",
                    "Objetivo comercial del proyecto."
                ],
                output: "Business Context Report con problema de negocio, contexto competitivo y situación actual.",
                expectedOutput: [
                    "Problema de negocio claramente definido.",
                    "Contexto actual de la empresa.",
                    "Lectura competitiva o de mercado.",
                    "Razón estratégica para intervenir el canal digital.",
                    "Brechas principales a resolver."
                ],
                errors: [
                    "Confundir síntomas con problema de negocio.",
                    "Describir la empresa sin explicar el conflicto.",
                    "No conectar contexto con oportunidad digital.",
                    "Usar lenguaje demasiado genérico.",
                    "No explicar por qué el sitio o canal debe existir."
                ],
                nextAction: "Usa este contexto para estructurar qué investigar en el Prompt 2.",
                originalPrompt: originalPrompts.p1,
                helperPrompt: `Usa el output del PROMPT 1 y genera una síntesis estratégica del contexto.
  
  Incluye:
  - Problema de negocio.
  - Situación actual.
  - Brecha digital principal.
  - Oportunidad de mejora.
  - Implicancia para investigación y experiencia.
  
  No propongas interfaz todavía.
  No inventes información de la empresa.`
            },
            {
                id: "controlado-p2",
                shortName: "P2 Research",
                category: "Research",
                type: "obligatorio",
                uiPurpose: "Estructura qué información debe investigarse sobre usuario, mercado, competencia y señales externas.",
                whenToUse: "Cuando necesitas guiar una investigación útil y no dispersa.",
                input: [
                    "Output del PROMPT 0.",
                    "Output del PROMPT 1.",
                    "Problema de negocio.",
                    "Hipótesis iniciales.",
                    "Mercado o industria."
                ],
                output: "Research Plan con preguntas, fuentes, señales y criterios de investigación.",
                expectedOutput: [
                    "Objetivos de investigación claros.",
                    "Preguntas clave.",
                    "Fuentes sugeridas.",
                    "Señales de usuario, mercado y competencia.",
                    "Criterios para convertir research en decisiones."
                ],
                errors: [
                    "Abrir demasiados frentes.",
                    "Investigar sin relación con decisiones futuras.",
                    "Confundir research con benchmark visual.",
                    "No priorizar señales.",
                    "No definir qué información es realmente útil."
                ],
                nextAction: "Usa este plan para sintetizar hallazgos e insights en el Prompt 3.",
                originalPrompt: originalPrompts.p2,
                helperPrompt: `Usa el output del PROMPT 2 y conviértelo en una pauta breve de investigación accionable.
  
  Incluye:
  - Qué buscar.
  - Por qué importa.
  - Qué decisión podría alimentar.
  - Qué evidencia sería suficiente.
  - Qué señales tienen mayor prioridad.
  
  No abras nuevas líneas de investigación.
  No agregues fuentes irrelevantes.`
            },
            {
                id: "controlado-p3",
                shortName: "P3 Insights.",
                category: "Research.",
                type: "obligatorio",
                uiPurpose: "Sintetiza hallazgos relevantes sobre comportamiento, fricciones, motivaciones y criterios de evaluación del usuario.",
                whenToUse: "Cuando necesitas transformar investigación en señales accionables.",
                input: [
                    "Output del PROMPT 2.",
                    "Hallazgos de usuario.",
                    "Señales de mercado.",
                    "Señales competitivas.",
                    "Información observada o investigada."
                ],
                output: "User Insight Report con hallazgos priorizados e implicancias.",
                expectedOutput: [
                    "Insights accionables.",
                    "Fricciones relevantes.",
                    "Motivaciones del usuario.",
                    "Criterios de evaluación.",
                    "Implicancias para la experiencia."
                ],
                errors: [
                    "Confundir dato con insight.",
                    "Listar hallazgos sin interpretación.",
                    "No explicar implicancia.",
                    "No priorizar insights.",
                    "Usar conclusiones sin evidencia."
                ],
                nextAction: "Usa estos insights para definir necesidades reales en el Prompt 4.",
                originalPrompt: originalPrompts.p3,
                helperPrompt: `Usa el output del PROMPT 3 y sintetízalo en una tabla de insights accionables.
  
  Incluye:
  - Insight.
  - Evidencia o señal asociada.
  - Fricción o motivación.
  - Implicancia para la experiencia.
  - Decisión que podría habilitar.
  
  No repitas datos sin interpretación.
  No inventes evidencia.`
            },
            {
                id: "controlado-p4",
                shortName: "P4 Needs.",
                category: "Strategy.",
                type: "obligatorio",
                uiPurpose: "Agrupa y prioriza necesidades reales del usuario en clusters claros.",
                whenToUse: "Cuando necesitas definir qué debe resolver la experiencia antes de pensar en interfaz.",
                input: [
                    "Output del PROMPT 3.",
                    "Insights priorizados.",
                    "Fricciones detectadas.",
                    "Motivaciones del usuario.",
                    "Criterios de evaluación."
                ],
                output: "User Needs Definition con clusters de necesidades y prioridades.",
                expectedOutput: [
                    "Necesidades agrupadas en clusters.",
                    "Prioridad por necesidad.",
                    "Relación con insights.",
                    "Problemas que debe resolver la experiencia.",
                    "Criterios para decisiones posteriores."
                ],
                errors: [
                    "Redactar necesidades demasiado amplias.",
                    "Repetir insights sin traducirlos a necesidades.",
                    "No agrupar.",
                    "No priorizar.",
                    "Definir necesidades como soluciones."
                ],
                nextAction: "Usa estas necesidades para convertirlas en decisiones concretas en el Prompt 5.",
                originalPrompt: originalPrompts.p4,
                helperPrompt: `Usa el output del PROMPT 4 y conviértelo en una lista priorizada de necesidades.
  
  Incluye:
  - Necesidad.
  - Cluster.
  - Usuario o contexto afectado.
  - Insight que la sostiene.
  - Impacto esperado si se resuelve.
  - Prioridad.
  
  No conviertas necesidades en soluciones visuales.
  No agregues necesidades sin respaldo.`
            },
            {
                id: "controlado-p5",
                shortName: "P5 Decisiones.",
                category: "Strategy.",
                type: "obligatorio",
                uiPurpose: "Convierte necesidades e insights en decisiones concretas de producto, contenido y validación.",
                whenToUse: "Cuando necesitas definir qué mostrar, qué probar y qué reducir en incertidumbre.",
                input: [
                    "Output del PROMPT 3.",
                    "Output del PROMPT 4.",
                    "Necesidades priorizadas.",
                    "Insights relevantes.",
                    "Problema de negocio."
                ],
                output: "Design Decision Specification con decisiones de contenido, experiencia, validación y evidencia.",
                expectedOutput: [
                    "Decisiones estratégicas priorizadas.",
                    "Qué debe comunicar la experiencia.",
                    "Qué evidencia debe mostrarse.",
                    "Qué incertidumbre debe reducirse.",
                    "Criterios para validar la solución."
                ],
                errors: [
                    "Confundir decisiones con copy final.",
                    "Crear decisiones genéricas.",
                    "No justificar con insights o necesidades.",
                    "No priorizar.",
                    "Definir soluciones visuales sin racional."
                ],
                nextAction: "Usa estas decisiones para ordenar la experiencia completa en el Prompt 6.",
                originalPrompt: originalPrompts.p5,
                helperPrompt: `Usa el output del PROMPT 5 y conviértelo en una matriz breve de decisiones.
  
  Incluye:
  - Decisión.
  - Necesidad que responde.
  - Evidencia o insight.
  - Impacto esperado.
  - Riesgo si se omite.
  
  No agregues decisiones nuevas.
  No redactes copy final.`
            },
            {
                id: "controlado-p6",
                shortName: "P6 Experiencia",
                category: "Experience",
                type: "obligatorio",
                uiPurpose: "Ordena la experiencia completa en una secuencia lógica de decisión.",
                whenToUse: "Cuando necesitas definir cómo avanza el usuario desde comprensión inicial hasta contacto.",
                input: [
                    "Output del PROMPT 5.",
                    "Decisiones priorizadas.",
                    "Necesidades del usuario.",
                    "Objetivo de conversión o contacto.",
                    "Evidencias disponibles."
                ],
                output: "Experience Blueprint con flujo de secciones, progresión de decisión y lógica de experiencia.",
                expectedOutput: [
                    "Secuencia lógica de experiencia.",
                    "Objetivo de cada etapa.",
                    "Relación entre secciones y decisiones.",
                    "Progresión desde comprensión hasta acción.",
                    "Criterios para ordenar contenido."
                ],
                errors: [
                    "Crear demasiadas secciones.",
                    "Poner contacto demasiado pronto.",
                    "No respetar la progresión de confianza.",
                    "Diseñar layout visual antes de resolver experiencia.",
                    "No conectar secciones con decisiones."
                ],
                nextAction: "Usa este blueprint para definir la arquitectura compacta del wireframe en el Prompt 7.",
                originalPrompt: originalPrompts.p6,
                helperPrompt: `Usa el output del PROMPT 6 y resume la experiencia en una estructura ejecutable.
  
  Incluye:
  - Etapa o sección.
  - Objetivo.
  - Qué debe entender el usuario.
  - Evidencia requerida.
  - Acción o decisión que habilita.
  
  No diseñes UI final.
  No agregues secciones no justificadas.`
            },
            {
                id: "controlado-p7",
                shortName: "P7 Wireframe.",
                category: "Structure.",
                type: "obligatorio",
                uiPurpose: "Define la arquitectura del sitio en secciones, bloques, layout e interacciones base.",
                whenToUse: "Cuando necesitas estructurar el producto sin entrar todavía en representación visual final.",
                input: [
                    "Output del PROMPT 6.",
                    "Blueprint de experiencia.",
                    "Decisiones clave.",
                    "Contenido disponible.",
                    "Objetivo de la pieza."
                ],
                output: "Wireframe Specification compacta con secciones, bloques, layout e interacciones base.",
                expectedOutput: [
                    "Arquitectura de secciones.",
                    "Bloques principales.",
                    "Layout base.",
                    "Interacciones iniciales si aplican.",
                    "Criterios estructurales para representación."
                ],
                errors: [
                    "Crear grillas vacías.",
                    "Entrar demasiado pronto a UI final.",
                    "No explicar la función de cada bloque.",
                    "No conectar estructura con decisiones.",
                    "Agregar componentes sin necesidad."
                ],
                nextAction: "Usa esta especificación para traducir arquitectura a representación en el Prompt 7.5.",
                originalPrompt: originalPrompts.p7,
                helperPrompt: `Usa el output del PROMPT 7 y conviértelo en una especificación corta para revisión.
  
  Incluye:
  - Secciones principales.
  - Función de cada sección.
  - Bloques o componentes base.
  - Interacciones iniciales.
  - Riesgos de interpretación.
  
  No conviertas esto en UI final.
  No elimines decisiones estructurales.`
            },
            {
                id: "controlado-p75",
                shortName: "P7.5 Rep.",
                category: "Representation.",
                type: "obligatorio",
                uiPurpose: "Transforma la especificación estructural en una representación visual testeable y ejecutable en herramientas.",
                whenToUse: "Cuando necesitas traducir arquitectura a una forma legible por Figma Make, Visily o herramientas similares.",
                input: [
                    "Output del PROMPT 7.",
                    "Wireframe Specification.",
                    "Blueprint de experiencia.",
                    "Jerarquía de contenido.",
                    "Restricciones de representación."
                ],
                output: "Wireframe Representation + Generation Layer ejecutable en herramientas de generación visual.",
                expectedOutput: [
                    "Representación visual testeable.",
                    "Instrucciones claras para herramienta de generación.",
                    "Jerarquía estructural visible.",
                    "Estados base si aplican.",
                    "Criterios para evitar representación genérica."
                ],
                errors: [
                    "Diseñar UI final antes de tiempo.",
                    "Romper la arquitectura original.",
                    "Agregar contenido no validado.",
                    "Generar una representación visual sin lógica.",
                    "Ignorar restricciones del prompt anterior."
                ],
                nextAction: "Usa esta representación como base para definir contenido intencional por sección en el Prompt 7.7.",
                originalPrompt: originalPrompts.p75,
                helperPrompt: `Usa el output del PROMPT 7.5 y genera una revisión breve de representación.
  
  Incluye:
  - Qué estructura se entiende bien.
  - Qué bloque se ve débil.
  - Qué contenido falta.
  - Qué riesgo visual existe.
  - Qué debe mantenerse en la siguiente capa.
  
  No rediseñes la interfaz.
  No agregues estética final.`
            },
            {
                id: "controlado-p77",
                shortName: "P7.7 Content.",
                category: "Content.",
                type: "obligatorio",
                uiPurpose: "Define qué contenido debe existir en cada sección y qué evidencia debe soportarlo.",
                whenToUse: "Cuando necesitas evitar wireframes vacíos, genéricos o sin sustento comercial.",
                input: [
                    "Output del PROMPT 5.",
                    "Output del PROMPT 6.",
                    "Output del PROMPT 7.",
                    "Output del PROMPT 7.5.",
                    "Información real del negocio."
                ],
                output: "Content Definition con contenido, mensajes y evidencia por sección.",
                expectedOutput: [
                    "Contenido requerido por sección.",
                    "Mensaje principal de cada bloque.",
                    "Evidencia necesaria o disponible.",
                    "Vacíos de información.",
                    "Recomendaciones de contenido accionables."
                ],
                errors: [
                    "Redactar sin respaldo.",
                    "Usar contenido genérico.",
                    "No conectar copy con evidencia.",
                    "Completar vacíos inventando información.",
                    "No diferenciar mensaje, evidencia y contenido."
                ],
                nextAction: "Usa esta definición de contenido para consolidar decisiones, experiencia y estructura en el Prompt 7.8.",
                originalPrompt: originalPrompts.p77,
                helperPrompt: `Usa el output del PROMPT 7.7 y conviértelo en una tabla breve de contenido por sección.
  
  Incluye:
  - Sección.
  - Mensaje clave.
  - Contenido necesario.
  - Evidencia.
  - Vacíos pendientes.
  - Riesgo si el contenido no existe.
  
  No inventes contenido.
  No escribas la landing completa.`
            },
            {
                id: "controlado-p78",
                shortName: "P7.8 Síntesis",
                category: "Integration",
                type: "obligatorio",
                uiPurpose: "Sintetiza decisiones, experiencia, contenido y estructura en un documento ejecutable.",
                whenToUse: "Cuando necesitas consolidar todo lo anterior en una lógica clara antes de materializar la interfaz.",
                input: [
                    "Output del PROMPT 5.",
                    "Output del PROMPT 6.",
                    "Output del PROMPT 7.",
                    "Output del PROMPT 7.5.",
                    "Output del PROMPT 7.7."
                ],
                output: "Decision Synthesis Layer con estructura ejecutable para generar la pieza representativa.",
                expectedOutput: [
                    "Síntesis clara de decisiones.",
                    "Estructura de experiencia consolidada.",
                    "Contenido prioritario por sección.",
                    "Criterios de representación.",
                    "Restricciones o riesgos relevantes."
                ],
                errors: [
                    "Duplicar información sin sintetizar.",
                    "Perder jerarquía.",
                    "No conectar decisiones con contenido.",
                    "Omitir restricciones importantes.",
                    "Generar una síntesis demasiado larga para ejecutar."
                ],
                nextAction: "Usa esta síntesis como input directo para generar el wireframe representativo en el Prompt 7.9.",
                originalPrompt: originalPrompts.p78,
                helperPrompt: `Usa el output del PROMPT 7.8 y conviértelo en un brief ejecutable para generación.
  
  Incluye:
  - Objetivo de la pieza.
  - Usuario o contexto principal.
  - Estructura final.
  - Contenido obligatorio.
  - Evidencia crítica.
  - Decisiones que no deben perderse.
  - Restricciones para la representación.
  
  No agregues nuevas decisiones.
  No transformes esto en código.`
            },
            {
                id: "controlado-p79",
                shortName: "P7.9 Wireframe",
                category: "Production",
                type: "final",
                uiPurpose: "Convierte la síntesis en una landing o wireframe representativo con contenido visible, jerarquía y sentido comercial.",
                whenToUse: "Cuando necesitas generar una pieza presentable, entendible y cercana a un entregable real.",
                input: [
                    "Output del PROMPT 7.8.",
                    "Síntesis ejecutable.",
                    "Contenido priorizado.",
                    "Decisiones críticas.",
                    "Formato de representación esperado."
                ],
                output: "Representative Wireframe + Decision Interface Layer con contenido visible y estructura presentable.",
                expectedOutput: [
                    "Wireframe o landing representativa.",
                    "Contenido visible por sección.",
                    "Jerarquía clara.",
                    "Lógica comercial entendible.",
                    "Estructura lista para revisar, presentar o refinar."
                ],
                errors: [
                    "Tomarlo como fuente final de verdad.",
                    "Confundir representación con UI final.",
                    "Ignorar decisiones previas.",
                    "Generar secciones vacías.",
                    "Priorizar estética sobre claridad."
                ],
                nextAction: "Revisa si la pieza comunica correctamente la decisión, el contenido y la oportunidad antes de presentarla o seguir refinando.",
                originalPrompt: originalPrompts.p79,
                helperPrompt: `Usa el output del PROMPT 7.9 y genera una revisión breve de calidad.
  
  Evalúa:
  - Si la estructura responde a la síntesis.
  - Si el contenido es visible y entendible.
  - Si la jerarquía ayuda a decidir.
  - Si existe coherencia comercial.
  - Si faltan evidencias importantes.
  - Si hay riesgos antes de presentar.
  
  Entrega:
  - Qué funciona.
  - Qué requiere ajuste.
  - Qué debería validarse antes de avanzar.
  - Recomendación final.`
            }
        ]
    },
    profundo: {
        label: "Profundo.",
        description: "Para ejecutar OLIVA completo con diagnóstico, research, decisiones, arquitectura, representación, estados, desarrollo, auditoría y mejora continua.",
        summary: {
            title: "Modelo Profundo.",
            text: "Ejecuta la cadena completa de OLIVA para proyectos complejos que necesitan trazabilidad total desde el diagnóstico inicial hasta la optimización posterior."
        },
        deliveryHints: {
            "documento-estrategico": "Entrega un informe completo con diagnóstico, contexto, research, necesidades, decisiones, arquitectura, representación, estados, especificación, auditoría y mejora continua.",
            "presentacion-comercial": "Convierte el flujo en una narrativa ejecutiva de alto nivel: problema, evidencia, oportunidad, solución, implementación, validación y evolución.",
            "figma-make": "Prepara una base robusta para generar una interfaz representativa con contenido, jerarquía, estados y lógica de decisión.",
            "especificacion-tecnica": "Transforma el flujo completo en criterios implementables para frontend, componentes, estados, accesibilidad y QA.",
            "checklist-interno": "Usa el resultado como matriz de control para validar trazabilidad, calidad, implementación y mejora continua."
        },
        items: [{
                id: "profundo-p0",
                shortName: "P0 Audit",
                category: "Diagnosis",
                type: "obligatorio",
                uiPurpose: "Diagnostica el estado actual del sitio o presencia digital para detectar brechas de claridad, confianza, conversión y competitividad.",
                whenToUse: "Cuando existe un sitio, landing o presencia digital que debe evaluarse antes de proponer mejoras.",
                input: [
                    "URL del sitio o referencia digital existente.",
                    "Contexto básico del negocio.",
                    "Objetivo comercial del análisis.",
                    "Criterios de evaluación si existen."
                ],
                output: "Website Strategic Audit Report con diagnóstico, brechas, riesgos y oportunidades de mejora.",
                expectedOutput: [
                    "Diagnóstico claro del estado actual.",
                    "Problemas priorizados por impacto.",
                    "Brechas entre capacidad real y capacidad comunicada.",
                    "Riesgos comerciales o estratégicos.",
                    "Oportunidades estructurales de mejora."
                ],
                errors: [
                    "Describir visualmente el sitio sin diagnosticar.",
                    "Evaluar solo estética.",
                    "No conectar hallazgos con impacto comercial.",
                    "Inventar métricas sin evidencia.",
                    "No priorizar problemas."
                ],
                nextAction: "Usa este diagnóstico como base para construir contexto de negocio en el Prompt 1.",
                originalPrompt: originalPrompts.p0,
                helperPrompt: `Usa el output del PROMPT 0 y sintetízalo en una lectura ejecutiva breve.
  
  Incluye:
  - Problema principal detectado.
  - Brechas críticas.
  - Riesgos comerciales o estratégicos.
  - Oportunidades de mejora.
  - Prioridad recomendada.
  
  No inventes métricas.
  No propongas interfaz todavía.`
            },
            {
                id: "profundo-p1",
                shortName: "P1 Contexto.",
                category: "Business.",
                type: "obligatorio",
                uiPurpose: "Define el problema de negocio, el contexto competitivo y la situación actual del cliente.",
                whenToUse: "Cuando necesitas entender qué se está intentando resolver y por qué el canal digital debe existir.",
                input: [
                    "Output del PROMPT 0.",
                    "Información de la empresa.",
                    "Servicios o productos principales.",
                    "Mercado o industria.",
                    "Objetivo comercial del proyecto."
                ],
                output: "Business Context Report con problema de negocio, contexto competitivo y situación actual.",
                expectedOutput: [
                    "Problema de negocio claramente definido.",
                    "Contexto actual de la empresa.",
                    "Lectura competitiva o de mercado.",
                    "Razón estratégica para intervenir el canal digital.",
                    "Brechas principales a resolver."
                ],
                errors: [
                    "Confundir síntomas con problema de negocio.",
                    "Describir la empresa sin explicar el conflicto.",
                    "No conectar contexto con oportunidad digital.",
                    "Usar lenguaje demasiado genérico.",
                    "No explicar por qué el sitio o canal debe existir."
                ],
                nextAction: "Usa este contexto para estructurar qué investigar en el Prompt 2.",
                originalPrompt: originalPrompts.p1,
                helperPrompt: `Usa el output del PROMPT 1 y genera una síntesis estratégica del contexto.
  
  Incluye:
  - Problema de negocio.
  - Situación actual.
  - Brecha digital principal.
  - Oportunidad de mejora.
  - Implicancia para investigación y experiencia.
  
  No propongas interfaz todavía.
  No inventes información de la empresa.`
            },
            {
                id: "profundo-p2",
                shortName: "P2 Research",
                category: "Research",
                type: "obligatorio",
                uiPurpose: "Estructura qué información debe investigarse sobre usuario, mercado, competencia y señales externas.",
                whenToUse: "Cuando necesitas guiar una investigación útil y no dispersa.",
                input: [
                    "Output del PROMPT 0.",
                    "Output del PROMPT 1.",
                    "Problema de negocio.",
                    "Hipótesis iniciales.",
                    "Mercado o industria."
                ],
                output: "Research Plan con preguntas, fuentes, señales y criterios de investigación.",
                expectedOutput: [
                    "Objetivos de investigación claros.",
                    "Preguntas clave.",
                    "Fuentes sugeridas.",
                    "Señales de usuario, mercado y competencia.",
                    "Criterios para convertir research en decisiones."
                ],
                errors: [
                    "Abrir demasiados frentes.",
                    "Investigar sin relación con decisiones futuras.",
                    "Confundir research con benchmark visual.",
                    "No priorizar señales.",
                    "No definir qué información es realmente útil."
                ],
                nextAction: "Usa este plan para sintetizar hallazgos e insights en el Prompt 3.",
                originalPrompt: originalPrompts.p2,
                helperPrompt: `Usa el output del PROMPT 2 y conviértelo en una pauta breve de investigación accionable.
  
  Incluye:
  - Qué buscar.
  - Por qué importa.
  - Qué decisión podría alimentar.
  - Qué evidencia sería suficiente.
  - Qué señales tienen mayor prioridad.
  
  No abras nuevas líneas de investigación.
  No agregues fuentes irrelevantes.`
            },
            {
                id: "profundo-p3",
                shortName: "P3 Insights.",
                category: "Research.",
                type: "obligatorio",
                uiPurpose: "Sintetiza hallazgos relevantes sobre comportamiento, fricciones, motivaciones y criterios de evaluación del usuario.",
                whenToUse: "Cuando necesitas transformar investigación en señales accionables.",
                input: [
                    "Output del PROMPT 2.",
                    "Hallazgos de usuario.",
                    "Señales de mercado.",
                    "Señales competitivas.",
                    "Información observada o investigada."
                ],
                output: "User Insight Report con hallazgos priorizados e implicancias.",
                expectedOutput: [
                    "Insights accionables.",
                    "Fricciones relevantes.",
                    "Motivaciones del usuario.",
                    "Criterios de evaluación.",
                    "Implicancias para la experiencia."
                ],
                errors: [
                    "Confundir dato con insight.",
                    "Listar hallazgos sin interpretación.",
                    "No explicar implicancia.",
                    "No priorizar insights.",
                    "Usar conclusiones sin evidencia."
                ],
                nextAction: "Usa estos insights para definir necesidades reales en el Prompt 4.",
                originalPrompt: originalPrompts.p3,
                helperPrompt: `Usa el output del PROMPT 3 y sintetízalo en una tabla de insights accionables.
  
  Incluye:
  - Insight.
  - Evidencia o señal asociada.
  - Fricción o motivación.
  - Implicancia para la experiencia.
  - Decisión que podría habilitar.
  
  No repitas datos sin interpretación.
  No inventes evidencia.`
            },
            {
                id: "profundo-p4",
                shortName: "P4 Needs.",
                category: "Strategy.",
                type: "obligatorio",
                uiPurpose: "Agrupa y prioriza necesidades reales del usuario en clusters claros.",
                whenToUse: "Cuando necesitas definir qué debe resolver la experiencia antes de pensar en interfaz.",
                input: [
                    "Output del PROMPT 3.",
                    "Insights priorizados.",
                    "Fricciones detectadas.",
                    "Motivaciones del usuario.",
                    "Criterios de evaluación."
                ],
                output: "User Needs Definition con clusters de necesidades y prioridades.",
                expectedOutput: [
                    "Necesidades agrupadas en clusters.",
                    "Prioridad por necesidad.",
                    "Relación con insights.",
                    "Problemas que debe resolver la experiencia.",
                    "Criterios para decisiones posteriores."
                ],
                errors: [
                    "Redactar necesidades demasiado amplias.",
                    "Repetir insights sin traducirlos a necesidades.",
                    "No agrupar.",
                    "No priorizar.",
                    "Definir necesidades como soluciones."
                ],
                nextAction: "Usa estas necesidades para convertirlas en decisiones concretas en el Prompt 5.",
                originalPrompt: originalPrompts.p4,
                helperPrompt: `Usa el output del PROMPT 4 y conviértelo en una lista priorizada de necesidades.
  
  Incluye:
  - Necesidad.
  - Cluster.
  - Usuario o contexto afectado.
  - Insight que la sostiene.
  - Impacto esperado si se resuelve.
  - Prioridad.
  
  No conviertas necesidades en soluciones visuales.
  No agregues necesidades sin respaldo.`
            },
            {
                id: "profundo-p5",
                shortName: "P5 Decisiones",
                category: "Strategy",
                type: "obligatorio",
                uiPurpose: "Convierte necesidades e insights en decisiones concretas de producto, contenido y validación.",
                whenToUse: "Cuando necesitas definir qué mostrar, qué probar y qué reducir en incertidumbre.",
                input: [
                    "Output del PROMPT 3.",
                    "Output del PROMPT 4.",
                    "Necesidades priorizadas.",
                    "Insights relevantes.",
                    "Problema de negocio."
                ],
                output: "Design Decision Specification con decisiones de contenido, experiencia, validación y evidencia.",
                expectedOutput: [
                    "Decisiones estratégicas priorizadas.",
                    "Qué debe comunicar la experiencia.",
                    "Qué evidencia debe mostrarse.",
                    "Qué incertidumbre debe reducirse.",
                    "Criterios para validar la solución."
                ],
                errors: [
                    "Confundir decisiones con copy final.",
                    "Crear decisiones genéricas.",
                    "No justificar con insights o necesidades.",
                    "No priorizar.",
                    "Definir soluciones visuales sin racional."
                ],
                nextAction: "Usa estas decisiones para ordenar la experiencia completa en el Prompt 6.",
                originalPrompt: originalPrompts.p5,
                helperPrompt: `Usa el output del PROMPT 5 y conviértelo en una matriz breve de decisiones.
  
  Incluye:
  - Decisión.
  - Necesidad que responde.
  - Evidencia o insight.
  - Impacto esperado.
  - Riesgo si se omite.
  
  No agregues decisiones nuevas.
  No redactes copy final.`
            },
            {
                id: "profundo-p6",
                shortName: "P6 Experiencia",
                category: "Experience",
                type: "obligatorio",
                uiPurpose: "Ordena la experiencia completa en una secuencia lógica de decisión.",
                whenToUse: "Cuando necesitas definir cómo avanza el usuario desde comprensión inicial hasta contacto.",
                input: [
                    "Output del PROMPT 5.",
                    "Decisiones priorizadas.",
                    "Necesidades del usuario.",
                    "Objetivo de conversión o contacto.",
                    "Evidencias disponibles."
                ],
                output: "Experience Blueprint con flujo de secciones, progresión de decisión y lógica de experiencia.",
                expectedOutput: [
                    "Secuencia lógica de experiencia.",
                    "Objetivo de cada etapa.",
                    "Relación entre secciones y decisiones.",
                    "Progresión desde comprensión hasta acción.",
                    "Criterios para ordenar contenido."
                ],
                errors: [
                    "Crear demasiadas secciones.",
                    "Poner contacto demasiado pronto.",
                    "No respetar la progresión de confianza.",
                    "Diseñar layout visual antes de resolver experiencia.",
                    "No conectar secciones con decisiones."
                ],
                nextAction: "Usa este blueprint para definir la arquitectura compacta del wireframe en el Prompt 7.",
                originalPrompt: originalPrompts.p6,
                helperPrompt: `Usa el output del PROMPT 6 y resume la experiencia en una estructura ejecutable.
  
  Incluye:
  - Etapa o sección.
  - Objetivo.
  - Qué debe entender el usuario.
  - Evidencia requerida.
  - Acción o decisión que habilita.
  
  No diseñes UI final.
  No agregues secciones no justificadas.`
            },
            {
                id: "profundo-p7",
                shortName: "P7 Wireframe",
                category: "Structure",
                type: "obligatorio",
                uiPurpose: "Define la arquitectura del sitio en secciones, bloques, layout e interacciones base.",
                whenToUse: "Cuando necesitas estructurar el producto sin entrar todavía en representación visual final.",
                input: [
                    "Output del PROMPT 6.",
                    "Blueprint de experiencia.",
                    "Decisiones clave.",
                    "Contenido disponible.",
                    "Objetivo de la pieza."
                ],
                output: "Wireframe Specification compacta con secciones, bloques, layout e interacciones base.",
                expectedOutput: [
                    "Arquitectura de secciones.",
                    "Bloques principales.",
                    "Layout base.",
                    "Interacciones iniciales si aplican.",
                    "Criterios estructurales para representación."
                ],
                errors: [
                    "Crear grillas vacías.",
                    "Entrar demasiado pronto a UI final.",
                    "No explicar la función de cada bloque.",
                    "No conectar estructura con decisiones.",
                    "Agregar componentes sin necesidad."
                ],
                nextAction: "Usa esta especificación para traducir arquitectura a representación en el Prompt 7.5.",
                originalPrompt: "[Pega aquí el PROMPT 7 — WIREFRAME ARCHITECTURE íntegro.]",
                helperPrompt: `Usa el output del PROMPT 7 y conviértelo en una especificación corta para revisión.
  
  Incluye:
  - Secciones principales.
  - Función de cada sección.
  - Bloques o componentes base.
  - Interacciones iniciales.
  - Riesgos de interpretación.
  
  No conviertas esto en UI final.
  No elimines decisiones estructurales.`
            },
            {
                id: "profundo-p75",
                shortName: "P7.5 Rep",
                category: "Representation",
                type: "obligatorio",
                uiPurpose: "Transforma la especificación estructural en una representación visual testeable y ejecutable en herramientas.",
                whenToUse: "Cuando necesitas traducir arquitectura a una forma legible por Figma Make, Visily o herramientas similares.",
                input: [
                    "Output del PROMPT 7.",
                    "Wireframe Specification.",
                    "Blueprint de experiencia.",
                    "Jerarquía de contenido.",
                    "Restricciones de representación."
                ],
                output: "Wireframe Representation + Generation Layer ejecutable en herramientas de generación visual.",
                expectedOutput: [
                    "Representación visual testeable.",
                    "Instrucciones claras para herramienta de generación.",
                    "Jerarquía estructural visible.",
                    "Estados base si aplican.",
                    "Criterios para evitar representación genérica."
                ],
                errors: [
                    "Diseñar UI final antes de tiempo.",
                    "Romper la arquitectura original.",
                    "Agregar contenido no validado.",
                    "Generar una representación visual sin lógica.",
                    "Ignorar restricciones del prompt anterior."
                ],
                nextAction: "Usa esta representación como base para definir contenido intencional por sección en el Prompt 7.7.",
                originalPrompt: originalPrompts.p75,
                helperPrompt: `Usa el output del PROMPT 7.5 y genera una revisión breve de representación.
  
  Incluye:
  - Qué estructura se entiende bien.
  - Qué bloque se ve débil.
  - Qué contenido falta.
  - Qué riesgo visual existe.
  - Qué debe mantenerse en la siguiente capa.
  
  No rediseñes la interfaz.
  No agregues estética final.`
            },
            {
                id: "profundo-p77",
                shortName: "P7.7 Content",
                category: "Content",
                type: "obligatorio",
                uiPurpose: "Define qué contenido debe existir en cada sección y qué evidencia debe soportarlo.",
                whenToUse: "Cuando necesitas evitar wireframes vacíos, genéricos o sin sustento comercial.",
                input: [
                    "Output del PROMPT 5.",
                    "Output del PROMPT 6.",
                    "Output del PROMPT 7.",
                    "Output del PROMPT 7.5.",
                    "Información real del negocio."
                ],
                output: "Content Definition con contenido, mensajes y evidencia por sección.",
                expectedOutput: [
                    "Contenido requerido por sección.",
                    "Mensaje principal de cada bloque.",
                    "Evidencia necesaria o disponible.",
                    "Vacíos de información.",
                    "Recomendaciones de contenido accionables."
                ],
                errors: [
                    "Redactar sin respaldo.",
                    "Usar contenido genérico.",
                    "No conectar copy con evidencia.",
                    "Completar vacíos inventando información.",
                    "No diferenciar mensaje, evidencia y contenido."
                ],
                nextAction: "Usa esta definición de contenido para consolidar decisiones, experiencia y estructura en el Prompt 7.8.",
                originalPrompt: originalPrompts.p77,
                helperPrompt: `Usa el output del PROMPT 7.7 y conviértelo en una tabla breve de contenido por sección.
  
  Incluye:
  - Sección.
  - Mensaje clave.
  - Contenido necesario.
  - Evidencia.
  - Vacíos pendientes.
  - Riesgo si el contenido no existe.
  
  No inventes contenido.
  No escribas la landing completa.`
            },
            {
                id: "profundo-p78",
                shortName: "P7.8 Síntesis",
                category: "Integration",
                type: "obligatorio",
                uiPurpose: "Sintetiza decisiones, experiencia, contenido y estructura en un documento ejecutable.",
                whenToUse: "Cuando necesitas consolidar todo lo anterior en una lógica clara antes de materializar la interfaz.",
                input: [
                    "Output del PROMPT 5.",
                    "Output del PROMPT 6.",
                    "Output del PROMPT 7.",
                    "Output del PROMPT 7.5.",
                    "Output del PROMPT 7.7."
                ],
                output: "Decision Synthesis Layer con estructura ejecutable para generar la pieza representativa.",
                expectedOutput: [
                    "Síntesis clara de decisiones.",
                    "Estructura de experiencia consolidada.",
                    "Contenido prioritario por sección.",
                    "Criterios de representación.",
                    "Restricciones o riesgos relevantes."
                ],
                errors: [
                    "Duplicar información sin sintetizar.",
                    "Perder jerarquía.",
                    "No conectar decisiones con contenido.",
                    "Omitir restricciones importantes.",
                    "Generar una síntesis demasiado larga para ejecutar."
                ],
                nextAction: "Usa esta síntesis como input directo para generar el wireframe representativo en el Prompt 7.9.",
                originalPrompt: originalPrompts.p78,
                helperPrompt: `Usa el output del PROMPT 7.8 y conviértelo en un brief ejecutable para generación.
  
  Incluye:
  - Objetivo de la pieza.
  - Usuario o contexto principal.
  - Estructura final.
  - Contenido obligatorio.
  - Evidencia crítica.
  - Decisiones que no deben perderse.
  - Restricciones para la representación.
  
  No agregues nuevas decisiones.
  No transformes esto en código.`
            },
            {
                id: "profundo-p79",
                shortName: "P7.9 Wireframe",
                category: "Production",
                type: "obligatorio",
                uiPurpose: "Convierte la síntesis en una landing o wireframe representativo con contenido visible, jerarquía y sentido comercial.",
                whenToUse: "Cuando necesitas generar una pieza presentable, entendible y cercana a un entregable real.",
                input: [
                    "Output del PROMPT 7.8.",
                    "Síntesis ejecutable.",
                    "Contenido priorizado.",
                    "Decisiones críticas.",
                    "Formato de representación esperado."
                ],
                output: "Representative Wireframe + Decision Interface Layer con contenido visible y estructura presentable.",
                expectedOutput: [
                    "Wireframe o landing representativa.",
                    "Contenido visible por sección.",
                    "Jerarquía clara.",
                    "Lógica comercial entendible.",
                    "Estructura lista para revisar, presentar o refinar."
                ],
                errors: [
                    "Tomarlo como fuente final de verdad.",
                    "Confundir representación con UI final.",
                    "Ignorar decisiones previas.",
                    "Generar secciones vacías.",
                    "Priorizar estética sobre claridad."
                ],
                nextAction: "Usa esta pieza representativa como base para definir estados de UI en el Prompt 8.",
                originalPrompt: originalPrompts.p79,
                helperPrompt: `Usa el output del PROMPT 7.9 y genera una revisión breve de calidad.
  
  Evalúa:
  - Si la estructura responde a la síntesis.
  - Si el contenido es visible y entendible.
  - Si la jerarquía ayuda a decidir.
  - Si existe coherencia comercial.
  - Si faltan evidencias importantes.
  - Si hay riesgos antes de presentar.
  
  Entrega:
  - Qué funciona.
  - Qué requiere ajuste.
  - Qué debería validarse antes de avanzar.
  - Recomendación final.`
            },
            {
                id: "profundo-p8",
                shortName: "P8 Estados.",
                category: "Interaction.",
                type: "obligatorio",
                uiPurpose: "Define estados de interacción, expansión, comparación, feedback y comportamiento dinámico de la interfaz.",
                whenToUse: "Cuando la interfaz necesita comportamiento más allá del layout estático.",
                input: [
                    "Output del PROMPT 7.9.",
                    "Wireframe representativo.",
                    "Componentes principales.",
                    "Interacciones esperadas.",
                    "Criterios de experiencia."
                ],
                output: "UI State Architecture con estados, reglas de interacción y feedback del sistema.",
                expectedOutput: [
                    "Estados de UI definidos.",
                    "Reglas de interacción.",
                    "Comportamientos dinámicos.",
                    "Feedback esperado.",
                    "Riesgos de interacción o comprensión."
                ],
                errors: [
                    "Agregar interacciones innecesarias.",
                    "No definir estados vacíos.",
                    "Omitir estados de error o carga.",
                    "No conectar estados con necesidades del usuario.",
                    "Describir comportamiento de forma ambigua."
                ],
                nextAction: "Usa estos estados para preparar la especificación técnica en el Prompt 9.",
                originalPrompt: originalPrompts.p8,
                helperPrompt: `Usa el output del PROMPT 8 y sintetízalo en una matriz breve de estados.
  
  Columnas:
  - Componente.
  - Estado.
  - Condición.
  - Feedback esperado.
  - Riesgo de implementación.
  
  No agregues estados innecesarios.
  No conviertas esto en código todavía.`
            },
            {
                id: "profundo-p9",
                shortName: "P9 Dev Spec.",
                category: "Development.",
                type: "obligatorio",
                uiPurpose: "Traduce estructura, representación y estados en reglas técnicas para implementación frontend.",
                whenToUse: "Cuando necesitas dejar claro cómo construir el MVP sin improvisar en desarrollo.",
                input: [
                    "Output del PROMPT 7.",
                    "Output del PROMPT 7.9.",
                    "Output del PROMPT 8.",
                    "Estados de UI.",
                    "Criterios de accesibilidad."
                ],
                output: "Development Specification con reglas técnicas, componentes, estados y criterios de QA.",
                expectedOutput: [
                    "Especificación técnica clara.",
                    "Componentes principales.",
                    "Estados y comportamientos.",
                    "Criterios de accesibilidad.",
                    "Criterios mínimos de QA."
                ],
                errors: [
                    "Convertir la especificación en código final.",
                    "No separar estructura, visual y comportamiento.",
                    "Omitir estados importantes.",
                    "No definir criterios de accesibilidad.",
                    "No dejar reglas claras para desarrollo."
                ],
                nextAction: "Usa esta especificación para implementar o auditar el resultado con el Prompt 10.",
                originalPrompt: originalPrompts.p9,
                helperPrompt: `Usa el output del PROMPT 9 y conviértelo en un checklist de implementación.
  
  Incluye:
  - Componentes.
  - Estados.
  - Reglas de interacción.
  - Accesibilidad.
  - QA mínimo.
  - Riesgos técnicos.
  
  No escribas código.
  No agregues funcionalidades nuevas.`
            },
            {
                id: "profundo-p10",
                shortName: "P10 Audit.",
                category: "Audit.",
                type: "obligatorio",
                uiPurpose: "Evalúa la calidad del resultado desde UX, UI y accesibilidad con foco en impacto.",
                whenToUse: "Cuando ya existe un MVP, landing, wireframe avanzado o implementación inicial.",
                input: [
                    "Resultado implementado o representado.",
                    "Output del PROMPT 9.",
                    "Objetivo del proyecto.",
                    "Criterios de negocio.",
                    "Criterios de accesibilidad."
                ],
                output: "UX / Accessibility Audit con hallazgos priorizados, impacto y recomendaciones.",
                expectedOutput: [
                    "Hallazgos priorizados.",
                    "Impacto UX, UI o accesibilidad.",
                    "Severidad.",
                    "Recomendaciones accionables.",
                    "Criterios para decidir qué corregir primero."
                ],
                errors: [
                    "Auditar sin criterio de negocio.",
                    "Listar problemas sin prioridad.",
                    "Quedarse en opinión visual.",
                    "No diferenciar severidad e impacto.",
                    "No conectar hallazgos con mejora."
                ],
                nextAction: "Usa el audit para construir un plan de optimización en el Prompt 11.",
                originalPrompt: originalPrompts.p10,
                helperPrompt: `Usa el output del PROMPT 10 y resume el audit en un plan de acción priorizado.
  
  Incluye:
  - Hallazgo.
  - Impacto.
  - Severidad.
  - Recomendación.
  - Esfuerzo estimado.
  - Prioridad.
  
  No agregues problemas nuevos.
  No conviertas esto en rediseño completo.`
            },
            {
                id: "profundo-p11",
                shortName: "P11 Mejora.",
                category: "Optimization.",
                type: "final",
                uiPurpose: "Transforma los hallazgos del audit en un plan de optimización priorizado.",
                whenToUse: "Cuando necesitas definir qué mejorar después, con qué impacto esperado y en qué orden.",
                input: [
                    "Output del PROMPT 10.",
                    "Hallazgos priorizados.",
                    "Recomendaciones del audit.",
                    "Restricciones del proyecto.",
                    "Objetivos de mejora."
                ],
                output: "Continuous Improvement Plan con acciones priorizadas, impacto esperado y criterios de éxito.",
                expectedOutput: [
                    "Plan de mejora priorizado.",
                    "Acciones concretas.",
                    "Impacto esperado.",
                    "Dependencias.",
                    "Criterios de éxito."
                ],
                errors: [
                    "No priorizar impacto.",
                    "Crear demasiadas acciones sin foco.",
                    "No definir criterio de cierre.",
                    "No conectar mejoras con hallazgos.",
                    "Proponer cambios sin considerar esfuerzo."
                ],
                nextAction: "Usa este plan para cerrar el ciclo OLIVA y definir la siguiente iteración.",
                originalPrompt: originalPrompts.p11,
                helperPrompt: `Usa el output del PROMPT 11 y conviértelo en un roadmap breve.
  
  Incluye:
  - Acción.
  - Objetivo.
  - Prioridad.
  - Impacto esperado.
  - Dependencias.
  - Criterio de éxito.
  
  No agregues nuevas iniciativas.
  No pierdas la relación con el audit.`

            }
        ]
    }
};

const promptStatusLabels = {
    pending: "Pendiente",
    "needs-review": "Requiere ajuste",
    validated: "Validado"
};

const promptTypeLabels = {
    obligatorio: "Obligatorio",
    recomendado: "Recomendado",
    opcional: "Opcional",
    final: "Final"
};

const workflowState = {
    activeModelKey: null,
    selectedPromptId: null,
    deliveryFormat: "documento-estrategico",
    promptStates: {}
};

const appShell = document.querySelector(".app-shell");
const modelStart = document.getElementById("model-start");
const workflow = document.getElementById("workflow");

const modelSelector = document.getElementById("model-selector");
const modelButtons = Array.from(document.querySelectorAll(".model-card"));

const resetWorkflowButton = document.getElementById("reset-workflow-button");
const deliveryFormat = document.getElementById("delivery-format");
const headerActiveModel = document.getElementById("header-active-model");

const modelSummary = document.getElementById("model-summary");
const activeModelTitle = document.getElementById("active-model-title");
const activeModelDescription = document.getElementById("active-model-description");

const progressOverviewTitle = document.getElementById("progress-overview-title");
const progressValue = document.getElementById("progress-value");
const progressBarFill = document.getElementById("progress-bar-fill");
const progressBar = document.querySelector(".progress-bar");
const workflowStatus = document.getElementById("workflow-status");

const statusActiveModel = document.getElementById("status-active-model");
const workflowStepper = document.querySelector(".workflow-stepper");
const workflowStepperList = document.getElementById("workflow-stepper-list");

const breadcrumbModel = document.getElementById("breadcrumb-model");
const breadcrumbStep = document.getElementById("breadcrumb-step");
const breadcrumbPrompt = document.getElementById("breadcrumb-prompt");

const promptSequence = document.getElementById("prompt-sequence");

const promptCategoryLabel = document.getElementById("prompt-category-label");
const promptDetailTitle = document.getElementById("prompt-detail-title");
const promptStatusSelect = document.getElementById("prompt-status-select");
const promptStatusOptions = Array.from(document.querySelectorAll("[data-status-option]"));

const promptPurposeText = document.getElementById("prompt-purpose-text");
const promptInputList = document.getElementById("prompt-input-list");
const promptOutputText = document.getElementById("prompt-output-text");
const promptErrorsList = document.getElementById("prompt-errors-list");

const copyPromptButton = document.getElementById("copy-prompt-button");
const promptOriginalContent = document.getElementById("prompt-original-content");

const validationChecklist = document.getElementById("validation-checklist");
const validationChecks = Array.from(document.querySelectorAll(".validation-check__input"));
const promptValidationStatus = document.getElementById("prompt-validation-status");

const copyHelperPromptButton = document.getElementById("copy-helper-prompt-button");
const helperPromptContent = document.getElementById("helper-prompt-content");

const expectedOutputList = document.getElementById("expected-output-list");
const deliveryHintText = document.getElementById("delivery-hint-text");
const nextStepTitle = document.getElementById("next-step-title");
const nextStepText = document.getElementById("next-step-text");

const promptTabs = Array.from(document.querySelectorAll(".prompt-tabs__button"));

const promptPanels = [
    document.getElementById("prompt-description-panel"),
    document.getElementById("prompt-original-panel"),
    document.getElementById("prompt-validation-panel"),
    document.getElementById("prompt-helper-panel")
];

const availablePromptPanels = promptPanels.filter(function(panel) {
    return Boolean(panel);
});

function initDashboard() {
    bindEvents();
    renderEmptyState();
}

function bindEvents() {
    modelSelector.addEventListener("click", handleModelSelection);
    resetWorkflowButton.addEventListener("click", resetWorkflow);
    deliveryFormat.addEventListener("change", handleDeliveryChange);
    promptStatusSelect.addEventListener("change", handlePromptStatusChange);
    copyPromptButton.addEventListener("click", handleCopyPrompt);
    copyHelperPromptButton.addEventListener("click", handleCopyHelperPrompt);

    validationChecks.forEach(function(checkbox) {
        checkbox.addEventListener("change", handleValidationChange);
    });

    promptTabs.forEach(function(tab) {
        tab.addEventListener("click", function() {
            activateTab(tab);
        });
    });
}
promptStatusOptions.forEach(function(button) {
    button.addEventListener("click", function() {
        if (button.disabled) return;

        promptStatusSelect.value = button.dataset.statusOption;

        handlePromptStatusChange({
            target: promptStatusSelect
        });
    });
});

function handleModelSelection(event) {
    const button = event.target.closest("[data-model]");

    if (!button) return;

    const modelKey = button.dataset.model;

    if (workflowState.activeModelKey && workflowState.activeModelKey !== modelKey) {
        return;
    }

    workflowState.activeModelKey = modelKey;

    const modelData = getActiveModelData();

    if (modelData.items.length > 0) {
        workflowState.selectedPromptId = modelData.items[0].id;
    } else {
        workflowState.selectedPromptId = null;
    }

    ensurePromptStates(modelData);
    renderDashboard();

    window.requestAnimationFrame(function() {
        window.scrollTo({
            top: 0,
            behavior: "auto"
        });
    });
}

function handleDeliveryChange(event) {
    workflowState.deliveryFormat = event.target.value;
    renderDeliveryHint();
}

function handlePromptStatusChange(event) {
    const selectedItem = getSelectedItem();

    if (!selectedItem) return;

    const state = getPromptState(selectedItem.id);
    state.status = event.target.value;

    if (state.status === "validated") {
        validationChecks.forEach(function(checkbox) {
            checkbox.checked = true;
            state.checklist[checkbox.value] = true;
        });
    }

    renderDashboard();
}

function handleValidationChange(event) {
    const selectedItem = getSelectedItem();

    if (!selectedItem) return;

    const state = getPromptState(selectedItem.id);
    state.checklist[event.target.value] = event.target.checked;

    const allChecked = validationChecks.every(function(checkbox) {
        return checkbox.checked;
    });

    const someChecked = validationChecks.some(function(checkbox) {
        return checkbox.checked;
    });

    if (allChecked) {
        state.status = "validated";
    } else if (someChecked && state.status === "pending") {
        state.status = "needs-review";
    } else if (!someChecked && state.status !== "validated") {
        state.status = "pending";
    }

    renderDashboard();
}

function handleCopyPrompt() {
    const selectedItem = getSelectedItem();

    if (!selectedItem) return;

    copyToClipboard(selectedItem.originalPrompt, copyPromptButton, "Copiado.");
}

function handleCopyHelperPrompt() {
    const selectedItem = getSelectedItem();

    if (!selectedItem || !selectedItem.helperPrompt) return;

    copyToClipboard(selectedItem.helperPrompt, copyHelperPromptButton, "Copiado.");
}

function resetWorkflow() {
    workflowState.activeModelKey = null;
    workflowState.selectedPromptId = null;
    workflowState.deliveryFormat = "documento-estrategico";
    workflowState.promptStates = {};

    deliveryFormat.value = workflowState.deliveryFormat;

    renderEmptyState();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function getActiveModelData() {
    if (!workflowState.activeModelKey) return null;
    return dashboardData[workflowState.activeModelKey] || null;
}

function getSelectedItem() {
    const modelData = getActiveModelData();

    if (!modelData || !workflowState.selectedPromptId) return null;

    return modelData.items.find(function(item) {
        return item.id === workflowState.selectedPromptId;
    }) || null;
}

function getSelectedIndex() {
    const modelData = getActiveModelData();

    if (!modelData || !workflowState.selectedPromptId) return -1;

    return modelData.items.findIndex(function(item) {
        return item.id === workflowState.selectedPromptId;
    });
}

function getPromptState(promptId) {
    if (!workflowState.promptStates[promptId]) {
        workflowState.promptStates[promptId] = {
            status: "pending",
            checklist: {}
        };
    }

    return workflowState.promptStates[promptId];
}

function ensurePromptStates(modelData) {
    modelData.items.forEach(function(item) {
        getPromptState(item.id);
    });
}

function renderDashboard() {
    const modelData = getActiveModelData();

    if (!modelData) {
        renderEmptyState();
        return;
    }

    appShell.dataset.appState = "model-active";
    modelStart.hidden = true;
    workflow.hidden = false;

    updateModelSelectorState();
    renderHeaderContext(modelData);
    renderModelSummary(modelData);
    renderToolbar(modelData);
    renderProgress(modelData);
    renderBreadcrumb(modelData);
    renderWorkflowStepper(modelData);
    renderPromptSequence(modelData);
    renderPromptDetail();
    renderExpectedOutput();
    renderDeliveryHint();
    renderNextStep();
    enableControls();
    activateTab(promptTabs[0]);
    showAllPromptPanels();
}

function renderEmptyState() {
    appShell.dataset.appState = "empty";
    modelStart.hidden = false;
    workflow.hidden = true;

    updateModelSelectorState();
    renderEmptyHeaderContext();
    renderEmptyModelSummary();
    renderEmptyToolbar();
    renderEmptyProgress();
    renderEmptyBreadcrumb();
    renderEmptyWorkflowStepper();
    renderEmptyPromptSequence();
    renderEmptyPromptDetail();
    renderEmptyExpectedOutput();
    renderEmptyDeliveryHint();
    renderEmptyNextStep();
    disableControls();
    activateTab(promptTabs[0]);
    showAllPromptPanels();
}

function updateModelSelectorState() {
    const hasActiveModel = Boolean(workflowState.activeModelKey);

    modelButtons.forEach(function(button) {
        const modelKey = button.dataset.model;
        const isActive = modelKey === workflowState.activeModelKey;
        const isLocked = hasActiveModel && !isActive;

        button.classList.toggle("is-active", isActive);
        button.classList.toggle("is-locked", isLocked);
        button.disabled = isLocked;
        button.setAttribute("aria-pressed", String(isActive));
    });
}

function renderHeaderContext(modelData) {
    headerActiveModel.textContent = modelData.label;
}

function renderEmptyHeaderContext() {
    headerActiveModel.textContent = "Ninguno.";
}

function renderModelSummary(modelData) {
    modelSummary.innerHTML = `
      <p class="summary-card__label">Modelo activo.</p>
      <h3 class="summary-card__title">${escapeHtml(modelData.summary.title)}</h3>
      <p class="summary-card__text">${escapeHtml(modelData.summary.text)}</p>
  `;
}

function renderEmptyModelSummary() {
    if (!modelSummary) return;

    modelSummary.innerHTML = `
      <p class="summary-card__label">Modelo activo.</p>
      <h3 class="summary-card__title">Ninguno seleccionado.</h3>
      <p class="summary-card__text">Selecciona un modelo para activar el flujo.</p>
  `;
}

function renderToolbar(modelData) {
    activeModelTitle.textContent = modelData.label;
    activeModelDescription.textContent = modelData.description;
    deliveryFormat.value = workflowState.deliveryFormat;
}

function renderEmptyToolbar() {
    activeModelTitle.textContent = "Ningún modelo activo.";
    activeModelDescription.textContent = "Selecciona un modelo para iniciar.";
    deliveryFormat.value = workflowState.deliveryFormat;
}

function renderProgress(modelData) {
    const total = modelData.items.length;

    if (statusActiveModel) {
        statusActiveModel.textContent = modelData.label.toUpperCase();
    }

    const validatedCount = modelData.items.filter(function(item) {
        return getPromptState(item.id).status === "validated";
    }).length;

    const percentage = total > 0 ? Math.round((validatedCount / total) * 100) : 0;

    const hasStarted = modelData.items.some(function(item) {
        const state = getPromptState(item.id);
        const checklistValues = Object.values(state.checklist);

        return state.status !== "pending" || checklistValues.some(function(value) {
            return Boolean(value);
        });
    });

    progressOverviewTitle.textContent = `${validatedCount} de ${total} prompts validados.`;
    progressValue.textContent = `${percentage}%.`;
    progressBarFill.style.width = `${percentage}%`;
    progressBar.setAttribute("aria-valuenow", String(percentage));

    if (percentage === 100) {
        setStatusBadge(workflowStatus, "Completado", "validated");
    } else if (hasStarted) {
        setStatusBadge(workflowStatus, "En progreso", "needs-review");
    } else {
        setStatusBadge(workflowStatus, "Pendiente", "pending");
    }
}

function renderEmptyProgress() {
    if (statusActiveModel) {
        statusActiveModel.textContent = "Ninguno";
    }

    progressOverviewTitle.textContent = "0 de 0 prompts validados";
    progressValue.textContent = "0%";
    progressBarFill.style.width = "0%";
    progressBar.setAttribute("aria-valuenow", "0");
    setStatusBadge(workflowStatus, "Pendiente", "pending");
}

function renderBreadcrumb(modelData) {
    const selectedItem = getSelectedItem();
    const selectedIndex = getSelectedIndex();

    breadcrumbModel.textContent = modelData.label;
    breadcrumbStep.textContent = selectedIndex >= 0 ? `Paso ${selectedIndex + 1} de ${modelData.items.length}.` : "Sin iniciar";
    breadcrumbPrompt.textContent = selectedItem ? selectedItem.shortName : "Sin prompt";
}

function renderEmptyBreadcrumb() {
    breadcrumbModel.textContent = "Sin selección";
    breadcrumbStep.textContent = "Sin iniciar";
    breadcrumbPrompt.textContent = "Sin prompt";
}

function getStepperLabel(shortName) {
    if (!shortName) return "";

    const cleanName = shortName
        .replace(/^P[\d.]+\s*/i, "")
        .trim();

    const firstWord = cleanName.split(" ")[0] || cleanName;

    return firstWord;
}

function renderWorkflowStepper(modelData) {
    if (!workflowStepperList) return;
    if (workflowStepper) {
        workflowStepper.classList.toggle("has-scroll-hint", modelData.items.length >= 12);
    }
    workflowStepperList.innerHTML = modelData.items
        .map(function(item, index) {
            const state = getPromptState(item.id);
            const isSelected = item.id === workflowState.selectedPromptId;
            const statusClass = getStatusClass(state.status);

            return `
              <button
                  class="workflow-stepper__item ${isSelected ? "is-selected" : ""} ${statusClass}"
                  type="button"
                  data-stepper-prompt-id="${escapeHtml(item.id)}"
                  aria-current="${isSelected ? "step" : "false"}"
              >
                  <span class="workflow-stepper__number">P${index + 1}.</span>
                  <span class="workflow-stepper__label">${escapeHtml(getStepperLabel(item.shortName))}</span>
              </button>
          `;
        })
        .join("");

    const stepperButtons = Array.from(workflowStepperList.querySelectorAll("[data-stepper-prompt-id]"));

    stepperButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            workflowState.selectedPromptId = button.dataset.stepperPromptId;
            renderDashboard();
        });
    });
}

function renderEmptyWorkflowStepper() {
    if (!workflowStepperList) return;

    if (workflowStepper) {
        workflowStepper.classList.remove("has-scroll-hint");
    }
    workflowStepperList.innerHTML = `
      <button class="workflow-stepper__item is-placeholder" type="button" disabled>
          <span class="workflow-stepper__number">P1.</span>
          <span class="workflow-stepper__label">Selecciona un modelo.</span>
      </button>
  `;
}

function renderPromptSequence(modelData) {
    promptSequence.innerHTML = modelData.items
        .map(function(item, index) {
            const state = getPromptState(item.id);
            const isSelected = item.id === workflowState.selectedPromptId;
            const statusClass = getStatusClass(state.status);
            const typeLabel = promptTypeLabels[item.type] || "Pendiente";

            return `
              <button
                  class="prompt-step ${isSelected ? "is-selected" : ""} ${statusClass}"
                  type="button"
                  data-prompt-id="${escapeHtml(item.id)}"
                  aria-pressed="${isSelected}"
              >
                  <span class="prompt-step__number">P${index + 1}.</span>

                  <span class="prompt-step__content">
                      <span class="prompt-step__title">${escapeHtml(item.shortName)}</span>
                      <span class="prompt-step__description">${escapeHtml(item.uiPurpose)}</span>
                  </span>

                  <span class="prompt-step__state prompt-step__state--${state.status}">
    ${typeLabel} · ${promptStatusLabels[state.status]}
</span>
              </button>
          `;
        })
        .join("");

    const promptButtons = Array.from(promptSequence.querySelectorAll("[data-prompt-id]"));

    promptButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            workflowState.selectedPromptId = button.dataset.promptId;
            renderDashboard();

        });
    });
}

function renderEmptyPromptSequence() {
    promptSequence.innerHTML = `
      <article class="prompt-step prompt-step--placeholder" tabindex="-1" aria-disabled="true">
          <span class="prompt-step__number">P1.</span>
          <span class="prompt-step__content">
              <span class="prompt-step__title">Selecciona un modelo.</span>
              <span class="prompt-step__description">Aquí aparecerá la secuencia del workflow.</span>
          </span>
          <span class="prompt-step__state">Pendiente</span>
      </article>
  `;
}

function renderPromptDetail() {
    const selectedItem = getSelectedItem();

    if (!selectedItem) {
        renderEmptyPromptDetail();
        return;
    }

    const state = getPromptState(selectedItem.id);

    promptCategoryLabel.textContent = `${selectedItem.category} · ${promptTypeLabels[selectedItem.type] || "Prompt."}`;
    promptDetailTitle.textContent = selectedItem.shortName;
    promptStatusSelect.value = state.status;
    renderPromptStatusOptions(state.status);

    renderDescriptionPanel(selectedItem);

    promptOriginalContent.textContent = selectedItem.originalPrompt || "[Prompt original no cargado todavía.]";
    helperPromptContent.textContent = selectedItem.helperPrompt || "[Este paso aún no tiene prompt auxiliar disponible.]";

    validationChecks.forEach(function(checkbox) {
        checkbox.checked = Boolean(state.checklist[checkbox.value]);
    });

    setStatusBadge(promptValidationStatus, promptStatusLabels[state.status], state.status);
}

function renderDescriptionPanel(selectedItem) {
    const descriptionPanel = document.getElementById("prompt-description-panel");

    if (!descriptionPanel) return;

    descriptionPanel.innerHTML = `
      <div class="detail-card__intro">
          <h4 class="detail-card__title">Qué resuelve</h4>
          <p class="detail-card__text">${escapeHtml(selectedItem.uiPurpose)}</p>
      </div>

      <details class="detail-toggle">
          <summary class="detail-toggle__summary">Input necesario</summary>
          <div class="detail-toggle__content">
              <ul class="detail-card__list">
                  ${renderListItems(selectedItem.input)}
              </ul>
          </div>
      </details>

      <details class="detail-toggle">
          <summary class="detail-toggle__summary">Output esperado</summary>
          <div class="detail-toggle__content">
              <p class="detail-card__text">${escapeHtml(selectedItem.output)}</p>
          </div>
      </details>

      <details class="detail-toggle">
          <summary class="detail-toggle__summary">Errores comunes</summary>
          <div class="detail-toggle__content">
              <ul class="detail-card__list">
                  ${renderListItems(selectedItem.errors)}
              </ul>
          </div>
      </details>
  `;
}

function renderEmptyPromptDetail() {
    const descriptionPanel = document.getElementById("prompt-description-panel");

    promptCategoryLabel.textContent = "Prompt seleccionado";
    promptDetailTitle.textContent = "Sin prompt seleccionado";
    promptStatusSelect.value = "pending";

    if (descriptionPanel) {
        descriptionPanel.innerHTML = `
          <div class="detail-card__intro">
              <h4 class="detail-card__title">Qué resuelve</h4>
              <p class="detail-card__text">
                  Selecciona un prompt para entender su función dentro del modelo.
              </p>
          </div>

          <details class="detail-toggle">
              <summary class="detail-toggle__summary">Input necesario</summary>
              <div class="detail-toggle__content">
                  <ul class="detail-card__list">
                      <li>Sin input definido todavía.</li>
                  </ul>
              </div>
          </details>

          <details class="detail-toggle">
              <summary class="detail-toggle__summary">Output esperado</summary>
              <div class="detail-toggle__content">
                  <p class="detail-card__text">Sin output seleccionado todavía.</p>
              </div>
          </details>

          <details class="detail-toggle">
              <summary class="detail-toggle__summary">Errores comunes</summary>
              <div class="detail-toggle__content">
                  <ul class="detail-card__list">
                      <li>Sin errores cargados todavía.</li>
                  </ul>
              </div>
          </details>
      `;
    }

    promptOriginalContent.textContent = "[Aquí aparecerá el prompt original intacto cuando selecciones un bloque.]";
    helperPromptContent.textContent = "[Aquí aparecerá el prompt auxiliar cuando el paso lo tenga disponible.]";

    validationChecks.forEach(function(checkbox) {
        checkbox.checked = false;
    });

    setStatusBadge(promptValidationStatus, "Pendiente", "pending");
}

function renderExpectedOutput() {
    const selectedItem = getSelectedItem();

    if (!selectedItem) {
        renderEmptyExpectedOutput();
        return;
    }

    expectedOutputList.innerHTML = renderListItems(selectedItem.expectedOutput);
}

function renderEmptyExpectedOutput() {
    expectedOutputList.innerHTML = "<li>Selecciona un prompt para revisar el checklist de salida esperada.</li>";
}

function renderDeliveryHint() {
    const modelData = getActiveModelData();

    if (!modelData) {
        renderEmptyDeliveryHint();
        return;
    }

    const hint = modelData.deliveryHints[workflowState.deliveryFormat];

    deliveryHintText.textContent = hint || "Selecciona un formato de delivery para orientar la salida final.";
}

function renderEmptyDeliveryHint() {
    deliveryHintText.textContent = "Selecciona un modelo y un formato de delivery para orientar la salida final.";
}

function renderNextStep() {
    const selectedItem = getSelectedItem();

    if (!selectedItem) {
        renderEmptyNextStep();
        return;
    }

    nextStepTitle.textContent = "Acción recomendada.";
    nextStepText.textContent = selectedItem.nextAction;
}

function renderEmptyNextStep() {
    nextStepTitle.textContent = "Aún no hay acción disponible.";
    nextStepText.textContent = "Cuando selecciones un prompt, aquí aparecerá la recomendación para avanzar.";
}

function enableControls() {
    resetWorkflowButton.disabled = false;
    resetWorkflowButton.setAttribute("aria-disabled", "false");

    deliveryFormat.disabled = false;
    promptStatusSelect.disabled = false;
    promptStatusOptions.forEach(function(button) {
        button.disabled = false;
    });
    copyPromptButton.disabled = false;
    copyPromptButton.setAttribute("aria-disabled", "false");

    const selectedItem = getSelectedItem();
    const hasHelperPrompt = Boolean(selectedItem && selectedItem.helperPrompt);

    copyHelperPromptButton.disabled = !hasHelperPrompt;
    copyHelperPromptButton.setAttribute("aria-disabled", String(!hasHelperPrompt));

    validationChecklist.disabled = false;
}

function disableControls() {
    resetWorkflowButton.disabled = true;
    resetWorkflowButton.setAttribute("aria-disabled", "true");

    deliveryFormat.disabled = true;
    promptStatusSelect.disabled = true;
    promptStatusOptions.forEach(function(button) {
        button.disabled = true;
    });

    copyPromptButton.disabled = true;
    copyPromptButton.setAttribute("aria-disabled", "true");

    copyHelperPromptButton.disabled = true;
    copyHelperPromptButton.setAttribute("aria-disabled", "true");

    validationChecklist.disabled = true;
}

function activateTab(activeTab) {
    if (!activeTab) {
        showAllPromptPanels();
        return;
    }

    const isDesktop = window.matchMedia("(min-width: 900px)").matches;
    const targetPanelId = activeTab.getAttribute("aria-controls");

    promptTabs.forEach(function(tab) {
        const isActive = tab === activeTab;

        tab.classList.toggle("is-active", isActive);
        tab.setAttribute("aria-selected", String(isActive));
    });

    availablePromptPanels.forEach(function(panel) {
        if (isDesktop) {
            panel.hidden = false;
            return;
        }

        const controlledByActiveTab = targetPanelId === panel.id;

        panel.hidden = !controlledByActiveTab;
    });
}

function showAllPromptPanels() {
    availablePromptPanels.forEach(function(panel) {
        panel.hidden = false;
    });
}

function showAllPromptPanels() {
    promptPanels.forEach(function(panel) {
        panel.hidden = false;
    });
}

function renderPromptStatusOptions(activeStatus) {
    promptStatusOptions.forEach(function(button) {
        const isActive = button.dataset.statusOption === activeStatus;

        button.classList.toggle("is-active", isActive);
        button.classList.toggle("is-pending", button.dataset.statusOption === "pending");
        button.classList.toggle("is-needs-review", button.dataset.statusOption === "needs-review");
        button.classList.toggle("is-validated", button.dataset.statusOption === "validated");
        button.setAttribute("aria-pressed", String(isActive));
    });
}

function setStatusBadge(element, label, status) {
    element.textContent = label;

    element.classList.remove(
        "status-badge--pending",
        "status-badge--needs-review",
        "status-badge--review",
        "status-badge--validated",
        "status-badge--success"
    );

    if (status === "validated") {
        element.classList.add("status-badge--validated");
        return;
    }

    if (status === "needs-review") {
        element.classList.add("status-badge--needs-review");
        return;
    }

    element.classList.add("status-badge--pending");
}

function getStatusClass(status) {
    if (status === "validated") return "is-validated";
    if (status === "needs-review") return "is-needs-review";
    return "is-pending";
}

function renderListItems(items) {
    if (!Array.isArray(items) || items.length === 0) {
        return "<li>Sin información disponible.</li>";
    }

    return items.map(function(item) {
        return `<li>${escapeHtml(item)}</li>`;
    }).join("");
}

async function copyToClipboard(text, button, successText) {
    if (!text || !button) return;

    const previousText = button.textContent;

    try {
        await navigator.clipboard.writeText(text);
        showCopyFeedback(button, previousText, successText);
    } catch (error) {
        showCopyFeedback(button, previousText, "No copiado.");
    }
}

function showCopyFeedback(button, previousText, successText) {
    button.textContent = successText;

    window.setTimeout(function() {
        button.textContent = previousText;
    }, 1200);
}

function escapeHtml(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

initDashboard();
