import abstractExamples from '@/app/lib/writer/prompt/examples/abstract.json';
import improveExamples from '@/app/lib/writer/prompt/examples/improve.json';
import keywordsExamples from '@/app/lib/writer/prompt/examples/keywords.json';
import objectivesExamples from '@/app/lib/writer/prompt/examples/objectives.json';
import queriesExamples from '@/app/lib/writer/prompt/examples/queries.json';
import thesisExamples from '@/app/lib/writer/prompt/examples/thesis.json';
import { buildPrompt } from '@/app/lib/writer/prompt/template';

export function promptThesis() {
  const input = {
    topics: [
      '<user-provided topic-1>',
      '<user-provided topic-2>',
      '<user-provided topic-3>',
      '...'
    ],
    approach: '<user-provided context>',
    fieldOfStudy: '<user-provided field>'
  };
  return buildPrompt(input, thesisExamples, 'thesis');
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
  return buildPrompt(input, objectivesExamples, 'objectives');
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

  let prompt = buildPrompt(input, queriesExamples, 'queries');
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
  const input = { text: '<user-provided text>' };
  return buildPrompt(input, improveExamples, 'improvedText');
}
