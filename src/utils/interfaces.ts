export interface TokenPayload {
  id: string
  nome: string
  email: string
}

export interface MensagemAlerta {
  status: string
  mensagem: string
}

export interface Reservas {
  id: number
  local: string
  suite: string
  ap: string
  qtd_adultos: number
  qtd_criancas: number
  checkin: string
  checkout: string
  usuario_nome: string
}