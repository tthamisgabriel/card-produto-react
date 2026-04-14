import CardProduto from "./components/CardProduto";

function App() {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      
      {/* Estado NÃO adicionado (botão cinza) */}
      <CardProduto
        nome="Fone Sem Fio"
        preco="R$ 199,90"
        adicionado={false}
      />

      {/* Estado ADICIONADO (botão verde) */}
      <CardProduto
        nome="Fone Bluetooth"
        preco="R$ 299,90"
        adicionado={true}
      />

    </div>
  );
}

export default App;