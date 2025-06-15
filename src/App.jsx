import React from 'react';
import { useQuiz } from './hooks/useQuiz';
import QuizHeader from './components/QuizHeader';
import QuestionCard from './components/QuestionCard';
import NavigationButtons from './components/NavigationButtons';
import ResultsScreen from './components/ResultsScreen';

/**
 * Componente principal da aplicação Quiz
 * Gerencia o estado global e renderiza os componentes adequados
 */
function App() {
  // Hook customizado que gerencia todo o estado do quiz
  const {
    currentQuestion,
    currentQuestionIndex,
    selectedAnswer,
    showResults,
    progress,
    timeSpent,
    questions,
    selectAnswer,
    nextQuestion,
    previousQuestion,
    resetQuiz,
    getResults,
    canGoNext,
    canGoPrevious,
    isLastQuestion
  } = useQuiz();

  // Se o quiz foi finalizado, mostra a tela de resultados
  if (showResults) {
    return (
      <ResultsScreen 
        results={getResults()} 
        onRestart={resetQuiz} 
      />
    );
  }

  // Renderiza a interface principal do quiz
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Cabeçalho fixo com progresso */}
      <QuizHeader
        currentQuestionIndex={currentQuestionIndex}
        totalQuestions={questions.length}
        progress={progress}
        timeSpent={timeSpent}
      />

      {/* Conteúdo principal do quiz */}
      <main className="pt-4 pb-8">
        <div className="max-w-4xl mx-auto px-4">
          {/* Card da questão atual */}
          <div className="mb-6">
            <QuestionCard
              question={currentQuestion}
              selectedAnswer={selectedAnswer}
              onSelectAnswer={selectAnswer}
            />
          </div>

          {/* Botões de navegação */}
          <NavigationButtons
            onPrevious={previousQuestion}
            onNext={nextQuestion}
            canGoPrevious={canGoPrevious}
            canGoNext={canGoNext}
            isLastQuestion={isLastQuestion}
          />

          {/* Instrução adicional na primeira questão */}
          {currentQuestionIndex === 0 && (
            <div className="max-w-2xl mx-auto px-4 mt-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-blue-800">
                      Como funciona
                    </h3>
                    <div className="mt-2 text-sm text-blue-700">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Leia cada questão com atenção</li>
                        <li>Selecione a alternativa que considera correta</li>
                        <li>Use os botões para navegar entre as questões</li>
                        <li>Ao final, veja seu desempenho detalhado</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer informativo */}
      <footer className="bg-white border-t border-gray-200 py-4">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-600">
            Quiz de Técnico em Enfermagem de UTI • 
            <span className="font-medium"> Pratique e aprimore seus conhecimentos</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App; 