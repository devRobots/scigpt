import abstractExamples from '@/app/lib/writer/prompt/examples/abstract.json';
import keywordsExamples from '@/app/lib/writer/prompt/examples/keywords.json';
import objectivesExample from '@/app/lib/writer/prompt/examples/objectives.json';
import thesisExample from '@/app/lib/writer/prompt/examples/thesis.json';
import { buildPrompt } from '@/app/lib/writer/prompt/template';

export function promptThesis() {
  const input = {
    topics: [
      '<user-provided topic-1>',
      '<user-provided topic-2>',
      '<user-provided topic-3>',
      '...'
    ],
    fieldOfStudy: '<user-provided field>'
  };
  return buildPrompt(input, thesisExample, 'thesis');
}

export function promptObjectives() {
  const input = {
    thesis: '<user-provided thesis>',
    topics: [
      '<user-provided topic-1>',
      '<user-provided topic-2>',
      '<user-provided topic-3>',
      '...'
    ],
    fieldOfStudy: '<user-provided fieldOfStudy>'
  };
  return buildPrompt(input, objectivesExample, 'objectives');
}

export function promptQueries() {
  const input = {
    thesis: '<user-provided thesis>',
    topics: [
      '<user-provided topic-1>',
      '<user-provided topic-2>',
      '<user-provided topic-3>',
      '...'
    ],
    fieldOfStudy: '<user-provided fieldOfStudy>'
  };
  const outputExamples = [
    {
      thesis: '¿La urbanización acelerada contribuye al cambio climático?',
      topics: ['Urbanization', 'Climate Change', 'Environmental Impact'],
      fieldOfStudy: 'Environmental Science',
      queries: [
        'impacto de la urbanización en la biodiversidad de los ecosistemas locales',
        'urbanización acelerada en la calidad del aire y del agua en las ciudades',
        'reducir las emisiones de gases de efecto invernadero en entornos urbanos',
        'urbanización y los fenómenos meteorológicos extremos asociados al cambio climático',
        'políticas de planificación urbana en la adaptación de las ciudades al cambio climático'
      ]
    },
    {
      thesis:
        '¿La terapia génica puede ser una solución efectiva para enfermedades genéticas raras?',
      topics: ['Gene Therapy', 'Rare Genetic Diseases', 'Medical Treatments'],
      fieldOfStudy: 'Medical Science',
      queries: [
        'eficacia de la terapia génica en el tratamiento de enfermedades genéticas raras',
        'seguridad y tolerabilidad de la terapia génica en ensayos clínicos',
        'desarrollo de vectores virales para la entrega de genes terapéuticos',
        'edición genética y corrección de mutaciones genéticas en células humanas',
        'aplicaciones de la terapia génica en enfermedades genéticas pediátricas'
      ]
    },
    {
      thesis:
        '¿Los algoritmos de aprendizaje profundo pueden predecir el comportamiento del consumidor?',
      topics: ['Deep Learning', 'Consumer Behavior', 'Predictive Analytics'],
      fieldOfStudy: 'Computer Science',
      queries: [
        'precisión de los algoritmos de aprendizaje profundo en la predicción del comportamiento del consumidor',
        'aplicaciones de la analítica predictiva en la personalización de contenidos',
        'privacidad de los datos y la transparencia en los modelos de aprendizaje automático',
        'impacto de la inteligencia artificial en la toma de decisiones de los consumidores',
        'desarrollo de modelos de lenguaje natural para la interacción humano-máquina'
      ]
    }
  ];

  let prompt = buildPrompt(input, outputExamples, 'queries');
  prompt += '- No wh questions allowed in the response.\n';
  prompt += '- The queries should be simple but concise.\n';
  return prompt;
}

export function promptKeywords() {
  const input = {
    thesis: '<user-provided thesis>',
    topics: [
      '<user-provided topic-1>',
      '<user-provided topic-2>',
      '<user-provided topic-3>',
      '...'
    ],
    fieldOfStudy: '<user-provided fieldOfStudy>'
  };
  return buildPrompt(input, keywordsExamples, 'keywords');
}

export function promptAbstract() {
  const input = {
    thesis: '<user-provided thesis>',
    topics: [
      '<user-provided topic-1>',
      '<user-provided topic-2>',
      '<user-provided topic-3>',
      '...'
    ],
    fieldOfStudy: '<user-provided fieldOfStudy>'
  };
  return buildPrompt(input, abstractExamples, 'abstract');
}

export function promptTextImprovement() {
  const input = {
    text: '<user-provided text>'
  };
  const outputExamples = [
    {
      text: 'La urbanización acelerada es un fenómeno global que ha transformado el paisaje urbano y ha tenido un impacto significativo en el medio ambiente.',
      improvedText:
        'La urbanización acelerada es un fenómeno global que ha transformado el paisaje urbano y ha tenido un impacto significativo en el medio ambiente, especialmente en términos de sostenibilidad y conservación de recursos naturales.'
    },
    {
      text: 'La terapia génica es una estrategia terapéutica innovadora que tiene el potencial de tratar enfermedades genéticas raras de manera efectiva.',
      improvedText:
        'La terapia génica es una estrategia terapéutica innovadora con un gran potencial para tratar enfermedades genéticas raras de manera efectiva y segura.'
    },
    {
      text: 'Los algoritmos de aprendizaje profundo han demostrado ser eficaces en la predicción del comportamiento del consumidor en diversas aplicaciones.',
      improvedText:
        'Los algoritmos de aprendizaje profundo han demostrado ser eficaces en la predicción del comportamiento del consumidor en diversas aplicaciones, como la recomendación de productos y la personalización de contenidos.'
    }
  ];

  return buildPrompt(input, outputExamples, 'improvedText');
}
