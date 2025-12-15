'use server';

/**
 * @fileOverview A flow that summarizes a resume for use in the About section of a portfolio.
 *
 * - summarizeResume - A function that handles the resume summarization process.
 * - SummarizeResumeInput - The input type for the summarizeResume function.
 * - SummarizeResumeOutput - The return type for the summarizeResume function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeResumeInputSchema = z.object({
  resumeContent: z
    .string()
    .describe('The complete text content of Ilyass Elmjaber\'s resume.'),
});
export type SummarizeResumeInput = z.infer<typeof SummarizeResumeInputSchema>;

const SummarizeResumeOutputSchema = z.object({
  profileSummary: z
    .string()
    .describe(
      'A concise and engaging summary of Ilyass Elmjaber\'s resume, suitable for use in the About section of his portfolio website.'
    ),
});
export type SummarizeResumeOutput = z.infer<typeof SummarizeResumeOutputSchema>;

export async function summarizeResume(input: SummarizeResumeInput): Promise<SummarizeResumeOutput> {
  return summarizeResumeFlow(input);
}

const summarizeResumePrompt = ai.definePrompt({
  name: 'summarizeResumePrompt',
  input: {schema: SummarizeResumeInputSchema},
  output: {schema: SummarizeResumeOutputSchema},
  prompt: `You are an expert resume writer. Your task is to create a concise and engaging profile summary for Ilyass Elmjaber\'s portfolio website, based on the content of his resume.

  The summary should highlight his key skills and experiences to quickly capture the attention of website visitors.

  Resume Content: {{{resumeContent}}}`,
});

const summarizeResumeFlow = ai.defineFlow(
  {
    name: 'summarizeResumeFlow',
    inputSchema: SummarizeResumeInputSchema,
    outputSchema: SummarizeResumeOutputSchema,
  },
  async input => {
    const {output} = await summarizeResumePrompt(input);
    return output!;
  }
);
