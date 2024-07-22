import { buildPrompt } from "./template";

export function promptThesis() {
    const input = {
        topics: ["<user-provided topic-1>", "<user-provided topic-2>", "<user-provided topic-3>", "..."],
        fieldOfStudy: "<user-provided field>"
    };
    const outputExamples = [
        {
            topics: ["Climate Change", "Global Warming", "Deforestation"],
            fieldOfStudy: "Environmental Science",
            thesis: [
                "¿El aumento de los niveles de CO2 atmosférico se correlaciona con el aumento de las temperaturas globales?",
                "¿El derretimiento de los casquetes polares contribuye al aumento del nivel del mar?",
                "¿La deforestación en la Amazonía afecta la biodiversidad de la región?",
                "¿La urbanización acelerada contribuye al cambio climático?",
                "¿La pérdida de hábitats naturales influye en la extinción de especies?"
            ]
        },
        {
            topics: ["Gene Therapy", "Genetic Engineering", "Viral Vectors"],
            fieldOfStudy: "Medical Science",
            thesis: [
                "¿La terapia génica puede ser una solución efectiva para enfermedades genéticas raras?",
                "¿La ingeniería genética de plantas puede mejorar la seguridad alimentaria mundial?",
                "¿Los vectores virales son una herramienta prometedora para la administración de genes terapéuticos?",
                "¿La edición genética en embriones humanos es éticamente aceptable?",
                "¿La terapia génica puede ser una alternativa viable a los tratamientos farmacológicos?"
            ]
        },
        {
            topics: ["Artificial Intelligence", "Machine Learning", "Data Science"],
            fieldOfStudy: "Computer Science",
            thesis: [
                "¿Los algoritmos de aprendizaje profundo pueden predecir el comportamiento del consumidor?",
                "¿La inteligencia artificial puede mejorar la precisión del diagnóstico médico?",
                "¿La ética en la inteligencia artificial es un tema relevante en la actualidad?",
                "¿Los modelos de lenguaje natural pueden revolucionar la interacción humano-máquina?",
                "¿La privacidad de los datos es un desafío en el desarrollo de algoritmos de aprendizaje automático?"
            ]
        }
    ];
    return buildPrompt(input, outputExamples, "thesis");
}

export function promptObjectives() {
    const input = {
        thesis: "<user-provided thesis>",
        topics: ["<user-provided topic-1>", "<user-provided topic-2>", "<user-provided topic-3>", "..."],
        fieldOfStudy: "<user-provided fieldOfStudy>"
    };
    const outputExamples = [
        {
            thesis: "¿La urbanización acelerada contribuye al cambio climático?",
            topics: ["Urbanization", "Climate Change", "Environmental Impact"],
            fieldOfStudy: "Environmental Science",
            objectives: [
                "Analizar el impacto de la urbanización en la emisión de gases de efecto invernadero.",
                "Evaluar la relación entre la expansión urbana y la deforestación.",
                "Investigar las estrategias de planificación urbana sostenible para mitigar el cambio climático.",
                "Examinar los efectos de la urbanización en la calidad del aire y del agua.",
                "Identificar las medidas de adaptación urbana al cambio climático.",
                "Comparar el impacto ambiental de las ciudades con diferentes niveles de urbanización.",
                "Evaluar el papel de las ciudades en la reducción de las emisiones de carbono.",
                "Analizar la relación entre la urbanización y la pérdida de biodiversidad.",
                "Investigar las consecuencias sociales y económicas de la urbanización acelerada.",
                "Examinar las políticas y regulaciones urbanas para abordar el cambio climático."
            ]
        },
        {
            thesis: "¿La terapia génica puede ser una solución efectiva para enfermedades genéticas raras?",
            topics: ["Gene Therapy", "Rare Genetic Diseases", "Medical Treatments"],
            fieldOfStudy: "Medical Science",
            objectives: [
                "Revisar los avances recientes en terapia génica para enfermedades genéticas raras.",
                "Evaluar la eficacia y seguridad de la terapia génica en el tratamiento de enfermedades genéticas.",
                "Analizar los desafíos éticos y regulatorios asociados con la terapia génica en humanos.",
                "Investigar las tecnologías emergentes en la entrega de genes terapéuticos.",
                "Examinar los modelos animales utilizados en la investigación de terapia génica.",
                "Comparar los enfoques de terapia génica basados en vectores virales y no virales.",
                "Evaluar el potencial de la terapia génica para tratar enfermedades genéticas comunes.",
                "Analizar los resultados clínicos de ensayos de terapia génica en humanos.",
                "Investigar las estrategias de financiación y acceso a la terapia génica.",
                "Examinar los avances en la edición genética como alternativa a la terapia génica."
            ]
        },
        {
            thesis: "¿Los algoritmos de aprendizaje profundo pueden predecir el comportamiento del consumidor?",
            topics: ["Deep Learning", "Consumer Behavior", "Predictive Analytics"],
            fieldOfStudy: "Computer Science",
            objectives: [
                "Revisar la literatura sobre el uso de algoritmos de aprendizaje profundo en la predicción del comportamiento del consumidor.",
                "Evaluar la precisión y eficacia de los modelos de aprendizaje profundo en la predicción del comportamiento del consumidor.",
                "Analizar las implicaciones éticas y de privacidad de la predicción del comportamiento del consumidor mediante algoritmos de aprendizaje profundo.",
                "Investigar las aplicaciones actuales de la analítica predictiva en el marketing y la publicidad.",
                "Examinar los desafíos y limitaciones de la predicción del comportamiento del consumidor con algoritmos de aprendizaje profundo.",
                "Comparar los enfoques de aprendizaje profundo para la predicción del comportamiento del consumidor.",
                "Evaluar el impacto de la predicción del comportamiento del consumidor en la toma de decisiones empresariales.",
                "Analizar las tendencias futuras en la aplicación de algoritmos de aprendizaje profundo en la predicción del comportamiento del consumidor.",
                "Investigar las estrategias de personalización y segmentación de clientes basadas en la analítica predictiva.",
                "Examinar los casos de uso exitosos de la predicción del comportamiento del consumidor en diferentes industrias."
            ]
        }
    ];
    return buildPrompt(input, outputExamples, "objectives");
}

export function promptSubstantiation() {
    const input = {
        thesis: "<user-provided thesis>",
        topics: ["<user-provided topic-1>", "<user-provided topic-2>", "<user-provided topic-3>", "..."],
        fieldOfStudy: "<user-provided fieldOfStudy>"
    };
    const outputExamples = [
        {
            thesis: "¿La urbanización acelerada contribuye al cambio climático?",
            topics: ["Urbanization", "Climate Change", "Environmental Impact"],
            fieldOfStudy: "Environmental Science",
            substantiation: "La urbanización acelerada es un fenómeno global que ha transformado el paisaje urbano y ha tenido un impacto significativo en el medio ambiente. El aumento de la población en las ciudades ha llevado a la expansión de la infraestructura urbana, la deforestación de áreas naturales y la emisión de gases de efecto invernadero. Estos cambios han contribuido al cambio climático y sus efectos adversos, como el aumento de las temperaturas globales, la alteración de los patrones de precipitación y el aumento del nivel del mar. La urbanización también ha afectado la calidad del aire y del agua, la biodiversidad y los ecosistemas locales. Por lo tanto, es importante investigar cómo la urbanización acelerada contribuye al cambio climático y qué medidas se pueden tomar para mitigar sus impactos negativos.",
        },
        {
            thesis: "¿La terapia génica puede ser una solución efectiva para enfermedades genéticas raras?",
            topics: ["Gene Therapy", "Rare Genetic Diseases", "Medical Treatments"],
            fieldOfStudy: "Medical Science",
            substantiation: "La terapia génica es una estrategia terapéutica innovadora que tiene el potencial de tratar enfermedades genéticas raras de manera efectiva. Al introducir genes terapéuticos en las células de un individuo, la terapia génica puede corregir mutaciones genéticas y restaurar la función normal de los genes afectados. Esta tecnología ha demostrado ser prometedora en el tratamiento de enfermedades genéticas raras, como la fibrosis quística, la distrofia muscular y la anemia de células falciformes. Los avances en la entrega de genes terapéuticos, la edición genética y la regulación de la expresión génica han mejorado la eficacia y seguridad de la terapia génica. Por lo tanto, es importante investigar cómo la terapia génica puede ser una solución efectiva para enfermedades genéticas raras y qué desafíos deben abordarse para su implementación clínica.",
        },
        {
            thesis: "¿Los algoritmos de aprendizaje profundo pueden predecir el comportamiento del consumidor?",
            topics: ["Deep Learning", "Consumer Behavior", "Predictive Analytics"],
            fieldOfStudy: "Computer Science",
            substantiation: "Los algoritmos de aprendizaje profundo han demostrado ser eficaces en la predicción del comportamiento del consumidor en diversas aplicaciones, como la recomendación de productos, la personalización de contenidos y la segmentación de clientes. Estos modelos de inteligencia artificial pueden analizar grandes volúmenes de datos para identificar patrones y tendencias en el comportamiento de los consumidores. Al utilizar técnicas de aprendizaje profundo, como redes neuronales profundas y modelos de lenguaje natural, los algoritmos pueden predecir las preferencias, necesidades y acciones de los consumidores con precisión. La analítica predictiva basada en el aprendizaje profundo ha revolucionado el marketing y la publicidad al permitir a las empresas anticipar las demandas del mercado y adaptar sus estrategias comerciales en consecuencia. Por lo tanto, es importante investigar cómo los algoritmos de aprendizaje profundo pueden predecir el comportamiento del consumidor y qué implicaciones tienen para las empresas y los consumidores.",
        }
    ];
    return buildPrompt(input, outputExamples, "substantiation");
}