import draftsExamples from '@/app/lib/writer/prompt/examples/drafts.json';
import improveExamples from '@/app/lib/writer/prompt/examples/improve.json';
import { buildPrompt } from '@/app/lib/writer/prompt/template';

export function promptDraftItem(item: string, input: any) {
  const examples: any[] = [];
  const keys = Object.keys(input);

  for (const example of draftsExamples) {
    const exampleKeys = Object.keys(example);
    const newExample: any = {};
    for (const key of exampleKeys) {
      if (keys.includes(key) || key === item) {
        newExample[key as keyof any] = example[key as keyof typeof example];
      }
    }
    examples.push(newExample);
  }

  return buildPrompt(input, examples, item);
}

export function promptTextImprovement(input: any) {
  return buildPrompt(input, improveExamples, 'improvedText');
}
