import React from 'react';

/**
 * Componente de cabeçalho do quiz
 * Exibe informações sobre o progresso, tempo e questão atual
 * @param {Object} props - Propriedades do componente
 * @param {number} props.currentQuestionIndex - Índice da questão atual
 * @param {number} props.totalQuestions - Total de questões
 * @param {number} props.progress - Porcentagem de progresso
 * @param {string} props.timeSpent - Tempo gasto formatado
 */
const QuizHeader = ({ currentQuestionIndex, totalQuestions, progress, timeSpent }) => {
  return (
    <div className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-2xl mx-auto px-4 py-4">
        {/* Título e informações básicas */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold text-gray-900">
            Quiz Enfermagem UTI
          </h1>
          <div className="text-sm text-gray-600">
            Tempo: {timeSpent}
          </div>
        </div>

        {/* Contador de questões */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-gray-700">
            Questão {currentQuestionIndex + 1} de {totalQuestions}
          </span>
          <span className="text-sm text-gray-600">
            {Math.round(progress)}% concluído
          </span>
        </div>

        {/* Barra de progresso */}
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-primary-600 h-2 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default QuizHeader; 