function calcularPagamento() {

    // 1- pix - 10% de desconto
    // débito - 5% de desconto
    // crédito - valor total

    let formaPagamento = "pix"
    let valorTotal = 100
    let valorFinal

    switch (formaPagamento) {
        case "pix":
            valorFinal = valorTotal * 0.95
            console.log(valorFinal);
            break
        case "debito":
            valorFinal = valorTotal * 0.95
            console.log(valorTotal)
            break
        case "crédito":
            console.log(valorTotal);
            break

        default:
            console.log("Informa uma forma de pagamento válida")
            break
    }
}