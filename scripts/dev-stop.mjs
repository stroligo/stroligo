#!/usr/bin/env node
/**
 * Encerra processos Nuxt/Vite nas portas usadas pelo projeto.
 * Uso: npm run dev:stop
 */
import { execSync } from 'node:child_process'

const ports = [3000, 3001, 3002, 3003, 3004]

for (const port of ports) {
  try {
    const pids = execSync(`lsof -ti :${port}`, { encoding: 'utf8' }).trim()
    if (!pids) continue
    for (const pid of pids.split(/\s+/)) {
      try {
        process.kill(Number(pid), 'SIGKILL')
        console.log(`Parado PID ${pid} (porta ${port})`)
      } catch {
        /* já terminou */
      }
    }
  } catch {
    /* porta livre */
  }
}

try {
  execSync('rm -f .nuxt/dev/*.lock', { stdio: 'ignore' })
} catch {
  /* ignore */
}

console.log('Pronto. Corre npm run dev.')
