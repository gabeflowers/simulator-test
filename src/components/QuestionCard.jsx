import React from 'react';

/**
 * Componente que renderiza uma questão com suas opções de resposta
 * @param {Object} props - Propriedades do componente
 * @param {Object} props.question - Objeto da questão atual
 * @param {number} props.selectedAnswer - Índice da resposta selecionada
 * @param {Function} props.onSelectAnswer - Função para selecionar resposta
 */
const QuestionCard = ({ question, selectedAnswer, onSelectAnswer }) => {
  return (
    <div className="card max-w-2xl mx-auto">
      {/* Texto da questão */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900 leading-relaxed">
          {question.question}
        </h2>
      </div>

      {/* Opções de resposta */}
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelectAnswer(index)}
            className={`quiz-option ${selectedAnswer === index ? 'selected' : ''}`}
          >
            <div className="flex items-start">
              {/* Indicador da opção (A, B, C, D) */}
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-medium text-gray-600 mr-3">
                {String.fromCharCode(65 + index)}
              </div>
              
              {/* Texto da opção */}
              <div className="flex-1 text-left">
                <p className="text-gray-900">{option}</p>
              </div>
              
              {/* Indicador visual de seleção */}
              {selectedAnswer === index && (
                <div className="flex-shrink-0 ml-3">
                  <div className="w-5 h-5 bg-primary-600 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard; 