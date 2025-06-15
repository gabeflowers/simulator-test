import React from 'react';

/**
 * Componente de navegação do quiz
 * @param {Object} props - Propriedades do componente
 * @param {Function} props.onPrevious - Função para voltar questão
 * @param {Function} props.onNext - Função para próxima questão
 * @param {boolean} props.canGoPrevious - Se pode voltar
 * @param {boolean} props.canGoNext - Se pode avançar
 * @param {boolean} props.isLastQuestion - Se é a última questão
 */
const NavigationButtons = ({ 
  onPrevious, 
  onNext, 
  canGoPrevious, 
  canGoNext, 
  isLastQuestion 
}) => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <div className="flex justify-between items-center">
        {/* Botão Anterior */}
        <button
          onClick={onPrevious}
          disabled={!canGoPrevious}
          className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Anterior
        </button>

        {/* Botão Próximo/Finalizar */}
        <button
          onClick={onNext}
          disabled={!canGoNext}
          className="btn-primary flex items-center"
        >
          {isLastQuestion ? 'Finalizar Quiz' : 'Próxima'}
          {!isLastQuestion && (
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          )}
          {isLastQuestion && (
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default NavigationButtons; 