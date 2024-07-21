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