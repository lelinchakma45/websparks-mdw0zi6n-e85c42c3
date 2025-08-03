import Groq from 'groq-sdk';
import { groqConfig } from '../config/groq';

class GroqService {
  private client: Groq;

  constructor() {
    this.client = new Groq({
      apiKey: groqConfig.apiKey,
      dangerouslyAllowBrowser: true
    });
  }

  async generateResponse(message: string, conversationHistory: Array<{role: string, content: string}> = []): Promise<string> {
    try {
      const messages = [
        {
          role: 'system',
          content: 'You are WebSparks AI, an expert AI-powered Full Stack Software Engineer created by Websparks Corporation. You are helpful, knowledgeable, and provide detailed technical assistance with programming, web development, and software engineering topics.'
        },
        ...conversationHistory,
        {
          role: 'user',
          content: message
        }
      ];

      const completion = await this.client.chat.completions.create({
        messages: messages as any,
        model: groqConfig.model,
        temperature: 0.7,
        max_tokens: 1024,
        stream: false
      });

      return completion.choices[0]?.message?.content || 'Sorry, I could not generate a response.';
    } catch (error) {
      console.error('Groq API Error:', error);
      throw new Error('Failed to generate response from Groq AI');
    }
  }

  async streamResponse(message: string, conversationHistory: Array<{role: string, content: string}> = []): Promise<AsyncIterable<string>> {
    try {
      const messages = [
        {
          role: 'system',
          content: 'You are WebSparks AI, an expert AI-powered Full Stack Software Engineer created by Websparks Corporation. You are helpful, knowledgeable, and provide detailed technical assistance with programming, web development, and software engineering topics.'
        },
        ...conversationHistory,
        {
          role: 'user',
          content: message
        }
      ];

      const stream = await this.client.chat.completions.create({
        messages: messages as any,
        model: groqConfig.model,
        temperature: 0.7,
        max_tokens: 1024,
        stream: true
      });

      return this.processStream(stream);
    } catch (error) {
      console.error('Groq Streaming Error:', error);
      throw new Error('Failed to stream response from Groq AI');
    }
  }

  private async* processStream(stream: any): AsyncIterable<string> {
    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content;
      if (content) {
        yield content;
      }
    }
  }
}

export const groqService = new GroqService();
export default groqService;
