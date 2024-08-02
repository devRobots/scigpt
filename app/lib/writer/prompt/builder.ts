import abstractExamples from '@/app/lib/writer/prompt/examples/abstract.json';
import improveExamples from '@/app/lib/writer/prompt/examples/improve.json';
import keywordsExamples from '@/app/lib/writer/prompt/examples/keywords.json';
import objectivesExamples from '@/app/lib/writer/prompt/examples/objectives.json';
import queriesExamples from '@/app/lib/writer/prompt/examples/queries.json';
import thesisExamples from '@/app/lib/writer/prompt/examples/thesis.json';
import { buildPrompt } from '@/app/lib/writer/prompt/template';

export function promptDraftItem(item: string, input: any) {
  const examples: { [key: string]: any } = {
    thesis: thesisExamples,
    objectives: objectivesExamples,
    keywords: keywordsExamples,
    abstract: abstractExamples
  };

  return buildPrompt(input, examples[item], item);
}

export function promptTextImprovement(input: any) {
  return buildPrompt(input, improveExamples, 'improvedText');
}

export function promptQueries(input: any) {
  let prompt = buildPrompt(input, queriesExamples, 'queries');
  prompt += '- No wh questions allowed in the response.\n';
  prompt += '- The queries should be simple but concise.\n';
  return prompt;
}
