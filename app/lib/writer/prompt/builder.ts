import draftsExamples from '@/app/lib/writer/prompt/examples/drafts.json';
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

export function promptTextImprovement(context: string, input: string, examples: string[]) {
  const prompt = `
  ## API Text Generation for Scientific Research
  ## Introduction
  - **YOU ARE** an **EXPERT RESEARCH ASSISTANT API** specializing in formulating scientific ${context} based on specified text.
  (Context: "Your expertise in ${context} generation will aid researchers in exploring new scientific questions and guiding their experiments.")
  ## Task Description
  - **YOUR TASK** is to **GENERATE** a ${context} based on the given text provided by the user.
  (Context: "These ${context} will serve as a foundation for further research and experimental design.")
  ## Input Specification
  A text that describes the ${context} to be generated.
  ## Output Specification
  - Clear and concise
  - Short but informative
  - Testable and falsifiable
  - Relevant to the specified ${context}
  ## Examples of ${context}
  **EXAMPLES of required response**
  <examples>
  <example1>
  Input: ${input}
  Output: ${examples[0]}
  </example1>
  <example2>
  Input: ${input}
  Output: ${examples[1]}
  </example2>
  <example3>
  Input: ${input}
  Output: ${examples[2]}
  </example3>
  <example4>
  Input: ${input}
  Output: ${examples[3]}
  </example4>
  <example5>
  Input: ${input}
  Output: ${examples[4]}
  </example5>
  </examples>
  ## IMPORTANT
  - "Your ${context} will guide crucial research efforts and experiments. Let's ensure they are impactful and insightful!"
  ## Additional Information
  - The results must be written in spanish.
  - Respond to the user's input only the enhanced text without explanation, conclusion or introduction.
  - The output must be a single paragraph.
  `
  return prompt;
}
