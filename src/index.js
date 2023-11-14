/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */
import { Ai } from '@cloudflare/ai';
import { html } from './template.js';

export default {
	async fetch(request, env) {
		// Create an instance of the AI using the provided environment variable.
		const ai = new Ai(env.AI);

		// Execute an inference task using Llama 2 for a given prompt.
		const response = await ai.run('@cf/meta/llama-2-7b-chat-int8', {
			prompt: 'Who was the first president of Nigeria?',
		});
		

		// Present the response as a JSON string.
		return new Response(JSON.stringify(response));
	},
};