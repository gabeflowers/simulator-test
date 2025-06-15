import { useState, useEffect } from 'react';
import questionsData from '../data/questions.json';

/**
 * Hook customizado para gerenciar o estado e lógica do quiz
 * @returns {Object} Estado e métodos do quiz
 */
export const useQuiz = () => {
  // Estados do quiz
  const [questions] = useState(questionsData);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [timeSpent, setTimeSpent] = useState(0);
  const [startTime] = useState(Date.now());

  // Timer para contabilizar tempo gasto
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeSpent(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);

    return () => clearInterval(timer);
  }, [startTime]);

  /**
   * Seleciona uma resposta para a questão atual
   * @param {number} answerIndex - Índice da resposta selecionada
   */
  const selectAnswer = (answerIndex) => {
    if (isQuizCompleted) return;
    
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestionIndex]: answerIndex
    }));
  };

  /**
   * Avança para a próxima questão
   */
  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      completeQuiz();
    }
  };

  /**
   * Volta para a questão anterior
   */
  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  /**
   * Finaliza o quiz e calcula os resultados
   */
  const completeQuiz = () => {
    setIsQuizCompleted(true);
    setShowResults(true);
  };

  /**
   * Reinicia o quiz para o estado inicial
   */
  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setIsQuizCompleted(false);
    setShowResults(false);
    setTimeSpent(0);
  };

  /**
   * Calcula e retorna os resultados do quiz
   * @returns {Object} Objeto com estatísticas do quiz
   */
  const getResults = () => {
    const totalQuestions = questions.length;
    let correctAnswers = 0;
    const wrongAnswers = [];

    questions.forEach((question, index) => {
      const selectedAnswer = selectedAnswers[index];
      const isCorrect = selectedAnswer === question.correctAnswer;
      
      if (isCorrect) {
        correctAnswers++;
      } else {
        wrongAnswers.push({
          question: question.question,
          selectedAnswer: selectedAnswer !== undefined ? question.options[selectedAnswer] : 'Não respondida',
          correctAnswer: question.options[question.correctAnswer],
          explanation: question.explanation
        });
      }
    });

    const percentage = Math.round((correctAnswers / totalQuestions) * 100);

    return {
      totalQuestions,
      correctAnswers,
      wrongAnswers: wrongAnswers.length,
      wrongAnswersList: wrongAnswers,
      percentage,
      timeSpent: formatTime(timeSpent)
    };
  };

  /**
   * Formata o tempo em segundos para minutos:segundos
   * @param {number} seconds - Tempo em segundos
   * @returns {string} Tempo formatado
   */
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  // Questão atual
  const currentQuestion = questions[currentQuestionIndex];
  const selectedAnswer = selectedAnswers[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return {
    // Estados
    questions,
    currentQuestion,
    currentQuestionIndex,
    selectedAnswer,
    isQuizCompleted,
    showResults,
    progress,
    timeSpent: formatTime(timeSpent),
    
    // Métodos
    selectAnswer,
    nextQuestion,
    previousQuestion,
    completeQuiz,
    resetQuiz,
    getResults,
    
    // Flags de controle
    canGoNext: selectedAnswer !== undefined,
    canGoPrevious: currentQuestionIndex > 0,
    isLastQuestion: currentQuestionIndex === questions.length - 1
  };
}; 