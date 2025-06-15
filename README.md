# Quiz Enfermagem UTI 🏥

Uma aplicação web mobile-first desenvolvida com React, Tailwind CSS e Chart.js para criar um quiz interativo com perguntas de múltipla escolha baseadas em concursos para Técnico em Enfermagem de UTI.

## 📱 Características

- **Mobile-First**: Interface otimizada para dispositivos móveis
- **Design Responsivo**: Funciona perfeitamente em celulares, tablets e desktops
- **Interface Intuitiva**: Layout limpo e focado na usabilidade
- **Feedback Visual**: Indicadores visuais claros para progresso e seleções
- **Relatório Detalhado**: Análise completa do desempenho ao final do quiz

## 🚀 Funcionalidades

### Durante o Quiz
- Barra de progresso em tempo real
- Contador de tempo gasto
- Navegação entre questões (anterior/próxima)
- Indicadores visuais de seleção
- Interface responsiva e acessível

### Resultados Finais
- ✅ Número total de acertos
- ❌ Número total de erros  
- 📊 Porcentagem de aproveitamento
- 📈 Gráfico de pizza interativo (Chart.js)
- 📝 Lista detalhada das questões erradas com:
  - Sua resposta
  - Resposta correta
  - Explicação educativa
- ⏱️ Tempo total gasto no quiz

## 🛠️ Tecnologias Utilizadas

- **React 18** - Framework principal
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework de estilos
- **Chart.js + react-chartjs-2** - Gráficos interativos
- **JavaScript ES6+** - Linguagem de programação

## 📦 Como Rodar o Projeto

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Passo a Passo

1. **Clone ou baixe o projeto** (se aplicável)
   ```bash
   # Se você tem o código em um repositório
   git clone <url-do-repositorio>
   cd quiz-enfermagem-uti
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```
   ou
   ```bash
   yarn install
   ```

3. **Execute o projeto em modo desenvolvimento**
   ```bash
   npm run dev
   ```
   ou
   ```bash
   yarn dev
   ```

4. **Acesse a aplicação**
   - Abra seu navegador
   - Vá para: `http://localhost:3000`
   - A aplicação será aberta automaticamente

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza o build de produção localmente
- `npm run lint` - Executa o linter para verificar código

## 📁 Estrutura do Projeto

```
quiz-enfermagem-uti/
├── public/
├── src/
│   ├── components/
│   │   ├── NavigationButtons.jsx
│   │   ├── QuestionCard.jsx
│   │   ├── QuizHeader.jsx
│   │   ├── ResultsChart.jsx
│   │   └── ResultsScreen.jsx
│   ├── data/
│   │   └── questions.json
│   ├── hooks/
│   │   └── useQuiz.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎯 Como Usar

1. **Inicie o Quiz**: A aplicação carrega automaticamente com a primeira questão
2. **Responda as Questões**: 
   - Leia cada pergunta com atenção
   - Clique na alternativa que considera correta
   - Use os botões "Anterior" e "Próxima" para navegar
3. **Finalize**: Clique em "Finalizar Quiz" na última questão
4. **Veja os Resultados**: Analise seu desempenho com gráficos e explicações
5. **Refaça o Quiz**: Use o botão "Fazer Quiz Novamente" para praticar mais

## 📝 Adicionando Novas Questões

Para adicionar mais questões, edite o arquivo `src/data/questions.json`:

```json
{
  "id": 6,
  "question": "Sua nova pergunta aqui?",
  "options": [
    "Opção A",
    "Opção B", 
    "Opção C",
    "Opção D"
  ],
  "correctAnswer": 1,
  "explanation": "Explicação detalhada da resposta correta."
}
```

**Observações:**
- `correctAnswer` usa índice baseado em zero (0, 1, 2, 3)
- Sempre inclua uma explicação educativa
- Mantenha as questões focadas em Enfermagem de UTI

## 🎨 Personalização

### Cores
As cores podem ser personalizadas no arquivo `tailwind.config.js`:
- `primary`: Cor principal da aplicação
- `success`: Cor para acertos
- `danger`: Cor para erros

### Estilos
Estilos customizados estão no arquivo `src/index.css` na seção `@layer components`.

## 📱 Compatibilidade

- ✅ Chrome/Chromium
- ✅ Firefox  
- ✅ Safari
- ✅ Edge
- ✅ Dispositivos móveis (iOS/Android)

## 🤝 Contribuição

Para contribuir com o projeto:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

---

**Desenvolvido com ❤️ para auxiliar estudantes de Enfermagem de UTI** 🏥 