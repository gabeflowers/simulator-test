import React from 'react';
import ResultsChart from './ResultsChart';

/**
 * Componente da tela de resultados do quiz
 * @param {Object} props - Propriedades do componente
 * @param {Object} props.results - Resultados do quiz
 * @param {Function} props.onRestart - Função para reiniciar o quiz
 */
const ResultsScreen = ({ results, onRestart }) => {
  const {
    totalQuestions,
    correctAnswers,
    wrongAnswers,
    wrongAnswersList,
    percentage,
    timeSpent
  } = results;

  // Determinar a cor e mensagem baseada na performance
  const getPerformanceInfo = () => {
    if (percentage >= 80) {
      return {
        color: 'text-success-600',
        bgColor: 'bg-success-50',
        borderColor: 'border-success-200',
        message: 'Excelente desempenho!',
        emoji: '🎉'
      };
    } else if (percentage >= 60) {
      return {
        color: 'text-yellow-600',
        bgColor: 'bg-yellow-50',
        borderColor: 'border-yellow-200',
        message: 'Bom trabalho!',
        emoji: '👍'
      };
    } else {
      return {
        color: 'text-danger-600',
        bgColor: 'bg-danger-50',
        borderColor: 'border-danger-200',
        message: 'Continue estudando!',
        emoji: '📚'
      };
    }
  };

  const performanceInfo = getPerformanceInfo();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Cabeçalho dos resultados */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Quiz Finalizado! {performanceInfo.emoji}
          </h1>
          <p className="text-gray-600">
            Confira seu desempenho no quiz de Enfermagem UTI
          </p>
        </div>

        {/* Resumo principal */}
        <div className={`card mb-8 ${performanceInfo.bgColor} ${performanceInfo.borderColor} border-2`}>
          <div className="text-center">
            <div className="mb-4">
              <div className={`text-6xl font-bold ${performanceInfo.color} mb-2`}>
                {percentage}%
              </div>
              <p className={`text-lg font-medium ${performanceInfo.color}`}>
                {performanceInfo.message}
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{totalQuestions}</div>
                <div className="text-sm text-gray-600">Total</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-success-600">{correctAnswers}</div>
                <div className="text-sm text-gray-600">Acertos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-danger-600">{wrongAnswers}</div>
                <div className="text-sm text-gray-600">Erros</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">{timeSpent}</div>
                <div className="text-sm text-gray-600">Tempo</div>
              </div>
            </div>
          </div>
        </div>

        {/* Layout responsivo para gráfico e questões erradas */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Gráfico de resultados */}
          <div>
            <ResultsChart 
              correctAnswers={correctAnswers} 
              wrongAnswers={wrongAnswers} 
            />
          </div>

          {/* Lista de questões erradas */}
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Questões para Revisar
            </h3>
            
            {wrongAnswersList.length === 0 ? (
              <div className="text-center py-8">
                <div className="text-4xl mb-2">🎯</div>
                <p className="text-success-600 font-medium">
                  Parabéns! Você acertou todas as questões!
                </p>
              </div>
            ) : (
              <div className="space-y-6 max-h-96 overflow-y-auto">
                {wrongAnswersList.map((item, index) => (
                  <div key={index} className="border-l-4 border-danger-400 pl-4 py-2">
                    <h4 className="font-medium text-gray-900 mb-2">
                      {item.question}
                    </h4>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start">
                        <span className="text-danger-600 font-medium mr-2">Sua resposta:</span>
                        <span className="text-danger-700">{item.selectedAnswer}</span>
                      </div>
                      
                      <div className="flex items-start">
                        <span className="text-success-600 font-medium mr-2">Resposta correta:</span>
                        <span className="text-success-700">{item.correctAnswer}</span>
                      </div>
                      
                      <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                        <span className="text-primary-700 font-medium">Explicação: </span>
                        <span className="text-primary-800">{item.explanation}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Botão para refazer o quiz */}
        <div className="text-center">
          <button
            onClick={onRestart}
            className="btn-primary px-8 py-3 text-lg"
          >
            Fazer Quiz Novamente
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsScreen; 