import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

// Registrar os componentes necessários do Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

/**
 * Componente que renderiza um gráfico de pizza com os resultados do quiz
 * @param {Object} props - Propriedades do componente
 * @param {number} props.correctAnswers - Número de respostas corretas
 * @param {number} props.wrongAnswers - Número de respostas erradas
 */
const ResultsChart = ({ correctAnswers, wrongAnswers }) => {
  // Configuração dos dados do gráfico
  const data = {
    labels: ['Acertos', 'Erros'],
    datasets: [
      {
        data: [correctAnswers, wrongAnswers],
        backgroundColor: [
          '#22c55e', // Verde para acertos
          '#ef4444', // Vermelho para erros
        ],
        borderColor: [
          '#16a34a',
          '#dc2626',
        ],
        borderWidth: 2,
        hoverBackgroundColor: [
          '#16a34a',
          '#dc2626',
        ],
        hoverBorderWidth: 3,
      },
    ],
  };

  // Configurações do gráfico
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          padding: 20,
          font: {
            size: 14,
            family: 'Inter',
          },
          color: '#374151',
        },
      },
      tooltip: {
        backgroundColor: '#1f2937',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: '#374151',
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: true,
        callbacks: {
          label: function(context) {
            const total = correctAnswers + wrongAnswers;
            const percentage = ((context.parsed / total) * 100).toFixed(1);
            return `${context.label}: ${context.parsed} (${percentage}%)`;
          }
        }
      },
    },
    animation: {
      animateRotate: true,
      animateScale: true,
      duration: 1000,
    },
  };

  return (
    <div className="card max-w-md mx-auto">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
        Distribuição de Resultados
      </h3>
      
      <div className="relative h-64">
        <Pie data={data} options={options} />
      </div>
      
      {/* Estatísticas adicionais */}
      <div className="mt-4 grid grid-cols-2 gap-4 text-center">
        <div className="bg-success-50 p-3 rounded-lg">
          <div className="text-2xl font-bold text-success-600">
            {correctAnswers}
          </div>
          <div className="text-sm text-success-700">
            Acertos
          </div>
        </div>
        
        <div className="bg-danger-50 p-3 rounded-lg">
          <div className="text-2xl font-bold text-danger-600">
            {wrongAnswers}
          </div>
          <div className="text-sm text-danger-700">
            Erros
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsChart; 