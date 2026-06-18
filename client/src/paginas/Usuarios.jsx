// Dados mockados — sem conexão com o Supabase, como pedido.
const USUARIOS_MOCK = [
  {
    id: 1,
    nome: 'Camila Duarte',
    funcao: 'Gerente',
    permissoes: ['Gerenciar dispositivos', 'Gerenciar usuários', 'Configurar protocolos', 'Visualizar câmeras'],
  },
  {
    id: 2,
    nome: 'Bruno Castro',
    funcao: 'Segurança',
    permissoes: ['Visualizar câmeras', 'Resolver alertas', 'Acionar alarme'],
  },
  {
    id: 3,
    nome: 'Patrícia Gomes',
    funcao: 'Segurança',
    permissoes: ['Visualizar câmeras', 'Resolver alertas', 'Acionar alarme'],
  },
  {
    id: 4,
    nome: 'Felipe Rocha',
    funcao: 'Gerente',
    permissoes: ['Gerenciar dispositivos', 'Configurar protocolos', 'Visualizar câmeras'],
  },
  {
    id: 5,
    nome: 'Larissa Pinto',
    funcao: 'Segurança',
    permissoes: ['Visualizar câmeras', 'Resolver alertas'],
  },
]

const CORES_FUNCAO = {
  Gerente: {
    avatar: 'bg-primary/15 text-primary',
    badge: 'border-primary/40 bg-primary/10 text-primary',
  },
  Segurança: {
    avatar: 'bg-success/15 text-success',
    badge: 'border-success/40 bg-success/10 text-success',
  },
}

function obterIniciais(nome) {
  return nome
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((parte) => parte[0].toUpperCase())
    .join('')
}

function CardUsuario({ usuario }) {
  const cores = CORES_FUNCAO[usuario.funcao] ?? {
    avatar: 'bg-muted text-muted-foreground',
    badge: 'border-border text-muted-foreground',
  }

  return (
    <div className="flex flex-col gap-3 rounded-lg border border-border bg-card p-4">
      <div className="flex items-center gap-3">
        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${cores.avatar}`}>
          {obterIniciais(usuario.nome)}
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-foreground">{usuario.nome}</span>
          <span
            className={`mt-0.5 inline-flex w-fit items-center rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${cores.badge}`}
          >
            {usuario.funcao}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Permissões</span>
        <div className="flex flex-wrap gap-1.5">
          {usuario.permissoes.map((permissao) => (
            <span
              key={permissao}
              className="rounded-full border border-border bg-muted px-2 py-0.5 text-[11px] text-muted-foreground"
            >
              {permissao}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function Usuarios() {
  return (
    <div className="flex h-full flex-col gap-4 p-4">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {USUARIOS_MOCK.map((usuario) => (
          <CardUsuario key={usuario.id} usuario={usuario} />
        ))}
      </div>
    </div>
  )
}

export default Usuarios
