import { Camera, Radio, Zap, ShieldAlert } from 'lucide-react'

//valores estáticos por enquanto (precisa integrar com o supabase)
const DADOS_ESTATICOS = {
  cameras: { valor: '5/6', descricao: 'online' },
  sensores: { valor: '24', descricao: 'ativos' },
  cerca: { valor: 'Armada', descricao: 'perímetro seguro' },
}

const CORES = {
  primary: 'bg-primary/15 text-primary',
  success: 'bg-success/15 text-success',
  destructive: 'bg-destructive/15 text-destructive',
}

function CardStatus({ icon: Icon, cor, label, valor, descricao }) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-md ${CORES[cor]}`}>
        <Icon className="h-5 w-5" />
      </div>
      <div className="flex flex-col">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
          {label}
        </span>
        <span className="text-lg font-bold leading-tight text-foreground">{valor}</span>
        <span className="text-xs text-muted-foreground">{descricao}</span>
      </div>
    </div>
  )
}

function CardsStatus({ totalAlertas = 0 }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      <CardStatus
        icon={Camera}
        cor="primary"
        label="Câmeras"
        valor={DADOS_ESTATICOS.cameras.valor}
        descricao={DADOS_ESTATICOS.cameras.descricao}
      />
      <CardStatus
        icon={Radio}
        cor="success"
        label="Sensores"
        valor={DADOS_ESTATICOS.sensores.valor}
        descricao={DADOS_ESTATICOS.sensores.descricao}
      />
      <CardStatus
        icon={Zap}
        cor="success"
        label="Cerca Elétrica"
        valor={DADOS_ESTATICOS.cerca.valor}
        descricao={DADOS_ESTATICOS.cerca.descricao}
      />
      <CardStatus icon={ShieldAlert} cor="destructive" label="Alertas" valor={String(totalAlertas)} descricao="em aberto" />
    </div>
  )
}

export default CardsStatus
