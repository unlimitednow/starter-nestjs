/* eslint-disable @typescript-eslint/no-var-requires */
import { Injectable } from '@nestjs/common';
const pgml = require('pgml'); // Import pgml using require

@Injectable()
export class ChatCompletionService {
  async completeChat(messages: any[]) {
    try {
      const client = pgml.newOpenSourceAI();
      const results = await client.chat_completions_create(
        'HuggingFaceH4/zephyr-7b-beta',
        messages,
      );
      return results;
    } catch (error) {
      console.error('Error processing chat completion:', error);
      throw new Error('An error occurred while processing the chat completion');
    }
  }
}
