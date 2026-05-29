
function RespostaRapida() {

  return (
    <>
      <div class="bg-slate-950 flex flex-wrap items-center gap-2 rounded-lg border border-border p-2 ">
        <span class="text-white px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Resposta Rápida</span>
        <div data-orientation="vertical" role="none" class="shrink-0 bg-border w-[1px] h-6 bg-stone-950"></div>
        <button class="border-solid rounded-sm bg-teal-950 text-gray-300 border-black p-2">Desativar Cerca Elétrica</button>
        <button class="border-solid rounded-sm bg-teal-950 text-gray-300 border-black p-2">Acionar Alarme</button>
      </div>
    </>
  )
}

export default RespostaRapida