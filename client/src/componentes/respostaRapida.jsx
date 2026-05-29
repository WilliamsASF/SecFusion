
function RespostaRapida() {

  return (
    <>
      <div class="bg-cyan-900 flex flex-wrap items-center gap-2 rounded-lg border border-border bg-card/60 p-2 w-120 ">
        <span class="px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Resposta Rápida</span>
        <div data-orientation="vertical" role="none" class="shrink-0 bg-border w-[1px] h-6 bg-stone-950"></div>
        <button class="border-solid rounded-sm bg-green-950 text-gray-300 border-black p-2">Desativar Cerca Elétrica</button>
        <button class="border-solid rounded-sm bg-green-950 text-gray-300 border-black p-2">Acionar Alarme</button>
      </div>
    </>
  )
}

export default RespostaRapida