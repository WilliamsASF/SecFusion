import { Lock, Siren, RotateCw } from 'lucide-react'

const ACOES_RAPIDAS = [
  { id: 'bloquear', label: 'Bloquear Acesso', icon: Lock },
  { id: 'alarme', label: 'Acionar Alarme', icon: Siren, destaque: true },
  { id: 'hub', label: 'Reiniciar Hub', icon: RotateCw },
]

function RespostaRapida() {
  return (
    <div className="flex flex-wrap items-center gap-2 rounded-lg border border-border bg-card p-2">
      <span className="px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        Resposta Rápida
      </span>

      <span className="h-6 w-px bg-border" aria-hidden="true" />

      {ACOES_RAPIDAS.map(({ id, label, icon: Icon, destaque }) => (
        <button
          key={id}
          type="button"
          className={
            destaque
              ? 'flex items-center gap-2 rounded-md bg-destructive px-3 py-2 text-xs font-semibold text-destructive-foreground transition-colors hover:bg-destructive/90'
              : 'flex items-center gap-2 rounded-md border border-border bg-transparent px-3 py-2 text-xs font-medium text-foreground/90 transition-colors hover:bg-accent'
          }
        >
          <Icon className="h-3.5 w-3.5" />
          {label}
        </button>
      ))}
    </div>
  )
}

export default RespostaRapida
