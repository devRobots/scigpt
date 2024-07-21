const template = (data: any) => `
## API Text Generation for Scientific Research

## Introduction

- **YOU ARE** an **EXPERT RESEARCH ASSISTANT API** specializing in formulating scientific ${data.targetField} based on specified ${data.inputFields}.

(Context: "Your expertise in ${data.targetField} generation will aid researchers in exploring new scientific questions and guiding their experiments.")

## Task Description

- **YOUR TASK** is to **GENERATE** a JSON list of ${data.targetCountResults} ${data.targetField} based on the given scientific ${data.inputFields} provided by the user.

(Context: "These ${data.targetField} will serve as a foundation for further research and experimental design.")

## Action Steps

### ${data.inputFields} Specification

1. **REQUEST** the user to specify the scientific ${data.inputFields}. For example: ${data.inputSchema}

### ${data.targetField} Generation

2. **FORMULATE** a JSON with ${data.targetCountResults} ${data.targetField} based on the specified ${data.inputFields}. Ensure each ${data.targetField} is:
   - Clear and concise
   - Testable and falsifiable
   - Relevant to the specified ${data.inputFields}

### Output

3. **PROVIDE** the list of ${data.targetCountResults} ${data.targetField} in the following JSON format: ${"outputSchema"}

## Examples of ${data.targetField}

**EXAMPLES of required response**

<examples>

<example1>
${data.outputExample1}
</example1>

<example2>
${data.outputExample2}
</example2>

<example3>
${data.outputExample3}
</example3>

</examples>

## IMPORTANT

- "Your ${data.targetField} will guide crucial research efforts and experiments. Let's ensure they are impactful and insightful!"

## Additional Information

- The results must be written in spanish.
- Respond to the user's input only with JSON data without explanation, conclusion or introduction.
- No need to include the examples in the response.
- No need to include the introduction in the response.
`;

function schematizeObject(object: Record<string, any>) {
    const keys = Object.keys(object);
    const schema: Record<string, string> = {};
    keys.forEach((key: string) => {
        const type = typeof object[key];
        const value = object[key];

        if (Array.isArray(value)) { schema[key] = schematizeArray(value); }
        else if (type === "object") { schema[key] = schematizeObject(object[key]); }
        else { schema[key] = "<user-provided " + key + ">"; }
    });
    return JSON.stringify(schema, null, 2);
}
function schematizeArray(object: any[]): string {
    let schema: any[] = [];
    let count = 1;
    for (const item of object as any) {
        if (Array.isArray(item)) schema.push(schematizeArray(item));
        else if (typeof item === "object") schema.push(schematizeObject(item));
        else schema.push(`<user-provided item-${count}>`);
        count++;
    }
    return `[${schema.join(", ")}]`;
}
function schematize(object: Record<string, any> | any[]) {
    if (Array.isArray(object)) return schematizeArray(object);
    return schematizeObject(object);
}
function getFieldName(field: string) {
    return field.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();;
}

export function buildPrompt(input: Object, outputExamples: { [key: string]: any }[], target: string) {
    return template({
        targetField: getFieldName(target),
        inputFields: Object.keys(input).map(getFieldName).join(", "),
        targetCountResults: outputExamples[0][target].length,
        inputSchema: schematize(input),
        outputSchema: schematize(outputExamples[0]),
        outputExample1: JSON.stringify(outputExamples[0]),
        outputExample2: JSON.stringify(outputExamples[1]),
        outputExample3: JSON.stringify(outputExamples[2])
    });
}
