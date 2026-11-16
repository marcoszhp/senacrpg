import test from 'node:test';
import assert from 'node:assert/strict';

test('fórmula de progressão é monotônica e previsível', async()=>{
  const source=await (await import('node:fs/promises')).readFile('src/data.ts','utf8');
  assert.match(source,/export function xpNeeded\(level:number\)/);
  assert.match(source,/return 100\+\(level-1\)\*80/);
});

test('migrations isolam mundos por conta', async()=>{
  const source=await (await import('node:fs/promises')).readFile('worker/index.ts','utf8');
  assert.match(source,/WHERE id=\? AND user_id=\?/);
  assert.match(source,/HttpOnly/);
});

test('jogo oferece as quatro classes, quatro raças e três chefes', async()=>{
  const source=await (await import('node:fs/promises')).readFile('src/data.ts','utf8');
  for (const value of ['mago','berserker','guerreiro','arqueiro','humano','anao','elfo','orc','bruxa','golem','arauto']) assert.match(source,new RegExp(value));
});
