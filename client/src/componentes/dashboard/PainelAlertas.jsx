import { Bell, AlertTriangle } from 'lucide-react'

const NIVEIS = {
  critico: {
    label: 'Crítico',
    borda: 'border-l-destructive',
    badge: 'border-destructive/40 bg-destructive/10 text-destructive',
    icone: 'text-destructive',
  },
  medio: {
    label: 'Médio',
    borda: 'border-l-warning',
    badge: 'border-warning/40 bg-warning/10 text-warning',
    icone: 'text-warning',
  },
  baixo: {
    label: 'Baixo',
    borda: 'border-l-border',
    badge: 'border-border bg-muted text-muted-foreground',
    icone: 'text-muted-foreground',
  },
}

function PainelAlertas({ alertas = [] }) {
  return (
    <aside className="flex h-full w-full shrink-0 flex-col rounded-lg border border-border bg-card lg:w-[360px]">
      <div className="flex shrink-0 items-center gap-2 border-b border-border px-4 py-3">
        <Bell className="h-4 w-4 text-destructive" />
        <h2 className="text-sm font-bold text-foreground">Alertas em Tempo Real</h2>
        <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-destructive px-1.5 text-[11px] font-bold text-destructive-foreground">
          {alertas.length}
        </span>
      </div>

      <ul className="flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto p-3">
        {alertas.map((alerta) => {
          const nivel = NIVEIS[alerta.nivel] ?? NIVEIS.baixo

          return (
            <li
              key={alerta.id}
              className={`rounded-md border border-l-2 bg-background/40 p-3 ${nivel.borda}`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-start gap-2">
                  <AlertTriangle className={`mt-0.5 h-4 w-4 shrink-0 ${nivel.icone}`} />
                  <p className="text-sm font-semibold leading-snug text-foreground">{alerta.titulo}</p>
                </div>
                <span className="shrink-0 text-[11px] text-muted-foreground">{alerta.tempo}</span>
              </div>

              <p className="mt-1 pl-6 text-xs text-muted-foreground">{alerta.descricao}</p>

              <div className="mt-2 flex items-center justify-between pl-6">
                <span
                  className={`rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${nivel.badge}`}
                >
                  {nivel.label}
                </span>
                <button type="button" className="text-xs font-medium text-primary hover:underline">
                  Resolver
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

export default PainelAlertas
