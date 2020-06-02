'use strict'

class MathController {

  async calculator({
    params
  }) {
    let data = {
      expressao: '',
      resultado: '',
      mensagem: ''
    }

    if (params.operation == 'soma') {
      data.expressao = `${params.value1} + ${params.value2}`
      data.resultado = parseInt(params.value1) + parseInt(params.value2)
      data.mensagem = 'Soma realizada com sucesso!'
    }

    if (params.operation == 'subtracao') {
      data.expressao = `${params.value1} - ${params.value2}`
      data.resultado = parseInt(params.value1) - parseInt(params.value2)
      data.mensagem = 'Subtração realizada com sucesso!'
    }

    if (params.operation == 'multiplicacao') {

        if (params.value1 == '0' || params.value2 == '0') {
            data.expressao = `${params.value1} * ${params.value2}`
            data.resultado = 'error'
            data.mensagem = 'Erro ao utilizar 0 na multiplicação'

            return data
        }

      data.expressao = `${params.value1} * ${params.value2}`
      data.resultado = parseInt(params.value1) * parseInt(params.value2)
      data.mensagem = 'Multiplicação realizada com sucesso!'
    }

    if (params.operation == 'divisao') {

        if (params.value2 == '0') {
            data.expressao = `${params.value1} / ${params.value2}`
            data.resultado = 'infinito'
            data.mensagem = 'Divisão por de qualquer número por 0 é infinita'

            return data
        }

      data.expressao = `${params.value1} / ${params.value2}`
      data.resultado = parseInt(params.value1) / parseInt(params.value2)
      data.mensagem = 'Divisão realizada com sucesso!'
    }

    return data
  }
}

module.exports = MathController
