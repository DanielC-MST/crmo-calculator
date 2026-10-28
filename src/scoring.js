import { questions } from "./criteria.js";
export const THRESHOLD = 55;
export const MAX_SCORE = questions.reduce((s,q)=>s+Math.max(...q.options.map(o=>o[1])),0);
export function eligible(included,excluded){return Array.isArray(included)&&included.length===3&&included.every(Boolean)&&Array.isArray(excluded)&&excluded.length===4&&excluded.every(x=>x===false);}
export function score(answers){if(!Array.isArray(answers)||answers.length!==questions.length)return null;let sum=0;for(let i=0;i<questions.length;i++){const index=answers[i];if(!Number.isInteger(index)||index<0||index>=questions[i].options.length)return null;sum+=questions[i].options[index][1];}return sum;}
export function classify(answers){const total=score(answers);return total===null?null:{total,meets:total>=THRESHOLD};}
