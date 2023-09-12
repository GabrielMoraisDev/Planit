function noload() {

  setTimeout(function () {
    document.getElementById("load").classList.replace("op-1", "op-0");

  }, 100)

  setTimeout(function () {
    document.getElementById("load-img").classList.replace("op-1", "op-0");

  }, 200)

}

function load() {

  document.getElementById("load").classList.replace("op-0", "op-1");

  setTimeout(function () {
    document.getElementById("load-img").classList.replace("op-0", "op-1");

  }, 200)

}

function load_home(){
  document.getElementById("home").classList.replace("bg-chiaperini", "bg-chiaperini2");
  document.getElementById("comercial").classList.replace("bg-chiaperini-amarelo", "bg-chiaperini");
  document.getElementById("faturamento").classList.replace("bg-chiaperini-amarelo", "bg-chiaperini");
  document.getElementById("producao").classList.replace("bg-chiaperini-amarelo", "bg-chiaperini");
  document.getElementById("financeiro").classList.replace("bg-chiaperini-amarelo", "bg-chiaperini");
  document.getElementById("compras").classList.replace("bg-chiaperini-amarelo", "bg-chiaperini");
  document.getElementById("kpis").classList.replace("bg-chiaperini-amarelo", "bg-chiaperini");

  document.getElementById("comercial").classList.replace("chiaperini", "chiaperini-amarelo");
  document.getElementById("faturamento").classList.replace("chiaperini", "chiaperini-amarelo");
  document.getElementById("producao").classList.replace("chiaperini", "chiaperini-amarelo");
  document.getElementById("financeiro").classList.replace("chiaperini", "chiaperini-amarelo");
  document.getElementById("compras").classList.replace("chiaperini", "chiaperini-amarelo");
  document.getElementById("kpis").classList.replace("chiaperini", "chiaperini-amarelo");
  load();
}

function load_comercial(){
  document.getElementById("comercial").classList.replace("bg-chiaperini", "bg-chiaperini-amarelo");
  document.getElementById("home").classList.replace("bg-chiaperini2", "bg-chiaperini");
  document.getElementById("faturamento").classList.replace("bg-chiaperini-amarelo", "bg-chiaperini");
  document.getElementById("producao").classList.replace("bg-chiaperini-amarelo", "bg-chiaperini");
  document.getElementById("financeiro").classList.replace("bg-chiaperini-amarelo", "bg-chiaperini");
  document.getElementById("compras").classList.replace("bg-chiaperini-amarelo", "bg-chiaperini");
  document.getElementById("kpis").classList.replace("bg-chiaperini-amarelo", "bg-chiaperini");

  document.getElementById("comercial").classList.replace("chiaperini-amarelo", "chiaperini");
  document.getElementById("faturamento").classList.replace("chiaperini", "chiaperini-amarelo");
  document.getElementById("producao").classList.replace("chiaperini", "chiaperini-amarelo");
  document.getElementById("financeiro").classList.replace("chiaperini", "chiaperini-amarelo");
  document.getElementById("compras").classList.replace("chiaperini", "chiaperini-amarelo");
  document.getElementById("kpis").classList.replace("chiaperini", "chiaperini-amarelo");
  load();
}

function load_faturamento(){
  document.getElementById("faturamento").classList.replace("bg-chiaperini", "bg-chiaperini-amarelo");
  document.getElementById("comercial").classList.replace("bg-chiaperini-amarelo", "bg-chiaperini");
  document.getElementById("home").classList.replace("bg-chiaperini2", "bg-chiaperini");
  document.getElementById("producao").classList.replace("bg-chiaperini-amarelo", "bg-chiaperini");
  document.getElementById("financeiro").classList.replace("bg-chiaperini-amarelo", "bg-chiaperini");
  document.getElementById("compras").classList.replace("bg-chiaperini-amarelo", "bg-chiaperini");
  document.getElementById("kpis").classList.replace("bg-chiaperini-amarelo", "bg-chiaperini");

  document.getElementById("comercial").classList.replace("chiaperini", "chiaperini-amarelo");
  document.getElementById("faturamento").classList.replace("chiaperini-amarelo", "chiaperini");
  document.getElementById("producao").classList.replace("chiaperini", "chiaperini-amarelo");
  document.getElementById("financeiro").classList.replace("chiaperini", "chiaperini-amarelo");
  document.getElementById("compras").classList.replace("chiaperini", "chiaperini-amarelo");
  document.getElementById("kpis").classList.replace("chiaperini", "chiaperini-amarelo");
  load();
}

function load_producao(){
  document.getElementById("producao").classList.replace("bg-chiaperini", "bg-chiaperini-amarelo");
  document.getElementById("comercial").classList.replace("bg-chiaperini-amarelo", "bg-chiaperini");
  document.getElementById("faturamento").classList.replace("bg-chiaperini-amarelo", "bg-chiaperini");
  document.getElementById("home").classList.replace("bg-chiaperini2", "bg-chiaperini");
  document.getElementById("financeiro").classList.replace("bg-chiaperini-amarelo", "bg-chiaperini");
  document.getElementById("compras").classList.replace("bg-chiaperini-amarelo", "bg-chiaperini");
  document.getElementById("kpis").classList.replace("bg-chiaperini-amarelo", "bg-chiaperini");
  
  document.getElementById("comercial").classList.replace("chiaperini", "chiaperini-amarelo");
  document.getElementById("faturamento").classList.replace("chiaperini", "chiaperini-amarelo");
  document.getElementById("producao").classList.replace("chiaperini-amarelo", "chiaperini");
  document.getElementById("financeiro").classList.replace("chiaperini", "chiaperini-amarelo");
  document.getElementById("compras").classList.replace("chiaperini", "chiaperini-amarelo");
  document.getElementById("kpis").classList.replace("chiaperini", "chiaperini-amarelo");
  load();
}

function load_financeiro(){
  document.getElementById("financeiro").classList.replace("bg-chiaperini", "bg-chiaperini-amarelo");
  document.getElementById("comercial").classList.replace("bg-chiaperini-amarelo", "bg-chiaperini");
  document.getElementById("faturamento").classList.replace("bg-chiaperini-amarelo", "bg-chiaperini");
  document.getElementById("home").classList.replace("bg-chiaperini2", "bg-chiaperini");
  document.getElementById("producao").classList.replace("bg-chiaperini-amarelo", "bg-chiaperini");
  document.getElementById("compras").classList.replace("bg-chiaperini-amarelo", "bg-chiaperini");
  document.getElementById("kpis").classList.replace("bg-chiaperini-amarelo", "bg-chiaperini");

  document.getElementById("comercial").classList.replace("chiaperini", "chiaperini-amarelo");
  document.getElementById("faturamento").classList.replace("chiaperini", "chiaperini-amarelo");
  document.getElementById("producao").classList.replace("chiaperini", "chiaperini-amarelo");
  document.getElementById("financeiro").classList.replace("chiaperini-amarelo", "chiaperini");
  document.getElementById("compras").classList.replace("chiaperini", "chiaperini-amarelo");
  document.getElementById("kpis").classList.replace("chiaperini", "chiaperini-amarelo");
  load();
}

function load_compras(){
  document.getElementById("compras").classList.replace("bg-chiaperini", "bg-chiaperini-amarelo");
  document.getElementById("comercial").classList.replace("bg-chiaperini-amarelo", "bg-chiaperini");
  document.getElementById("faturamento").classList.replace("bg-chiaperini-amarelo", "bg-chiaperini");
  document.getElementById("home").classList.replace("bg-chiaperini2", "bg-chiaperini");
  document.getElementById("producao").classList.replace("bg-chiaperini-amarelo", "bg-chiaperini");
  document.getElementById("financeiro").classList.replace("bg-chiaperini-amarelo", "bg-chiaperini");
  document.getElementById("kpis").classList.replace("bg-chiaperini-amarelo", "bg-chiaperini");

  document.getElementById("comercial").classList.replace("chiaperini", "chiaperini-amarelo");
  document.getElementById("faturamento").classList.replace("chiaperini", "chiaperini-amarelo");
  document.getElementById("producao").classList.replace("chiaperini", "chiaperini-amarelo");
  document.getElementById("financeiro").classList.replace("chiaperini", "chiaperini-amarelo");
  document.getElementById("compras").classList.replace("chiaperini-amarelo", "chiaperini");
  document.getElementById("kpis").classList.replace("chiaperini", "chiaperini-amarelo");
  load();
}

function load_kpis(){
  document.getElementById("kpis").classList.replace("bg-chiaperini", "bg-chiaperini-amarelo");
  document.getElementById("comercial").classList.replace("bg-chiaperini-amarelo", "bg-chiaperini");
  document.getElementById("faturamento").classList.replace("bg-chiaperini-amarelo", "bg-chiaperini");
  document.getElementById("home").classList.replace("bg-chiaperini2", "bg-chiaperini");
  document.getElementById("producao").classList.replace("bg-chiaperini-amarelo", "bg-chiaperini");
  document.getElementById("financeiro").classList.replace("bg-chiaperini-amarelo", "bg-chiaperini");
  document.getElementById("compras").classList.replace("bg-chiaperini-amarelo", "bg-chiaperini");

  document.getElementById("comercial").classList.replace("chiaperini", "chiaperini-amarelo");
  document.getElementById("faturamento").classList.replace("chiaperini", "chiaperini-amarelo");
  document.getElementById("producao").classList.replace("chiaperini", "chiaperini-amarelo");
  document.getElementById("financeiro").classList.replace("chiaperini", "chiaperini-amarelo");
  document.getElementById("compras").classList.replace("chiaperini", "chiaperini-amarelo");
  document.getElementById("kpis").classList.replace("chiaperini-amarelo", "chiaperini");
  load();
}

function over_home(){
  document.getElementById('lb_home').classList.replace('op-0', 'op-1')
}

function leave_home(){
  document.getElementById('lb_home').classList.replace('op-1', 'op-0')
}

function over_comercial(){
  document.getElementById('lb_comercial').classList.replace('op-0', 'op-1')
}

function leave_comercial(){
  document.getElementById('lb_comercial').classList.replace('op-1', 'op-0')
}

function over_faturamento(){
  document.getElementById('lb_faturamento').classList.replace('op-0', 'op-1')
}

function leave_faturamento(){
  document.getElementById('lb_faturamento').classList.replace('op-1', 'op-0')
}

function over_producao(){
  document.getElementById('lb_producao').classList.replace('op-0', 'op-1')
}

function leave_producao(){
  document.getElementById('lb_producao').classList.replace('op-1', 'op-0')
}

function over_financeiro(){
  document.getElementById('lb_financeiro').classList.replace('op-0', 'op-1')
}

function leave_financeiro(){
  document.getElementById('lb_financeiro').classList.replace('op-1', 'op-0')
}

function over_compras(){
  document.getElementById('lb_compras').classList.replace('op-0', 'op-1')
}

function leave_compras(){
  document.getElementById('lb_compras').classList.replace('op-1', 'op-0')
}

function over_kpis(){
  document.getElementById('lb_kpis').classList.replace('op-0', 'op-1')
}

function leave_kpis(){
  document.getElementById('lb_kpis').classList.replace('op-1', 'op-0')
}

function over_out(){
  document.getElementById('lb_out').classList.replace('op-0', 'op-1')
}

function leave_out(){
  document.getElementById('lb_out').classList.replace('op-1', 'op-0')
}

