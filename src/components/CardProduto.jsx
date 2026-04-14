
import styled from "styled-components";

const Card = styled.div`
  width: 300px;
  background-color: #ffffff;
  padding: 24px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

const NomeProduto = styled.h2`
  font-size: 22px;
  margin-bottom: 10px;
  color: #212529;
`;

const PrecoProduto = styled.p`
  font-size: 20px;
  color: #0d6efd;
  font-weight: bold;
  margin-bottom: 20px;
`;

const BotaoCarrinho = styled.button`
  background-color: ${(props) => (props.adicionado ? "#198754" : "#6c757d")};
  color: white;
  border: none;
  padding: 12px 16px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 14px;
  transition: 0.2s;

  &:hover {
    opacity: 0.9;
    transform: scale(1.02);
  }
`;

function CardProduto({ nome, preco, adicionado }) {
  return (
    <Card>
      <NomeProduto>{nome}</NomeProduto>
      <PrecoProduto>{preco}</PrecoProduto>

      {/* muda a cor conforme a prop */}
      <BotaoCarrinho adicionado={adicionado}>
      {adicionado ? "Produto adicionado" : "Adicionar ao carrinho"}
      </BotaoCarrinho>
    </Card>
  );
}

export default CardProduto;