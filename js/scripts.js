const meta = 5000;
let poupanca = 0;

for (let mes = 1; mes <= 12; mes++) {
  alert(`--- Mês ${mes} ---\nPoupança atual: R$ ${poupanca.toFixed(2)}\nMeta: R$ ${meta.toFixed(2)}`);

  let opcao = prompt(
    "Escolha uma opção:\n1 - Depositar\n2 - Ver Progresso\n3 - Pular Mês\n4 - Sair"
  );

  if (opcao === null) {
    alert("Programa encerrado.");
    break;
  }

  switch (opcao) {
    case "1":
      let valor = prompt("Digite o valor que deseja depositar:");
      if (valor === null) {
        alert("Operação cancelada.");
        continue;
      }

      valor = valor.replace(",", ".");
      valor = parseFloat(valor);

      if (isNaN(valor) || valor <= 0) {
        alert("Valor inválido! Nenhum depósito realizado.");
        continue;
      }


      poupanca += valor;
      alert(`Depositado R$ ${valor.toFixed(2)}.`);


      if (valor >= 1000) {
        alert("Ótimo depósito! Continue assim!");
      } else if (valor >= 500) {
        alert("Bom depósito!");
      } else {
        alert("Cada pouco conta!");
      }
      break;

    case "2":
      let progresso = (poupanca / meta) * 100;
      alert(`Progresso: ${progresso.toFixed(1)}%`);

      if (progresso >= 100) {
        alert("Meta alcançada! Parabéns!");
      } else if (progresso >= 75) {
        alert("Ótimo progresso! Quase lá!");
      } else if (progresso >= 50) {
        alert("Bom progresso! Continue!");
      } else if (progresso >= 25) {
        alert("Progresso regular!");
      } else {
        alert("Vamos aumentar os depósitos!");
      }
      break;

    case "3":
      alert("Mês pulado. Nenhum depósito realizado.");
      break;

    case "4":
      alert("Você escolheu sair do programa.");
      mes = 12;
      break;

    default:
      alert("Opção inválida! Escolha de 1 a 4.");
      mes--;
      continue;
  }

  if (poupanca >= meta) {
    alert("🎉 Meta financeira atingida antes do prazo!");
    break;
  }
}

alert(
  `=== RELATÓRIO FINAL ===\nTotal poupado: R$ ${poupanca.toFixed(2)}\nMeta: R$ ${meta.toFixed(2)}`
);

if (poupanca >= meta) {
  alert("Excelente! Você atingiu ou ultrapassou sua meta! 🏆");
} else {
  alert("Continue firme! Você ainda pode alcançar sua meta nos próximos meses!");
}
