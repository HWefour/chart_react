import './App.css';
import { Chart } from 'chart.js/auto';
import { Bar, Line, Doughnut, Pie } from 'react-chartjs-2';

const data ={
  labels: ["Red","Blue","Grey","black","Orange","purple"],
  datasets: [
    {
      label:"Couleurs préférés en France",
      data:["23","84","23","12","15","44"],
      backgroundColor:["Red","Blue","Grey","black","Orange","purple"],
    },
  ],
}

function App() {
  return (
    <div className="App">
      <div className="container"> 
      <div className="card">
        <Pie data={data}/>
      </div>
      <div className="card">
        <Doughnut data={data}/>
      </div>
      <div className="card">
        <Line data={data}/>
      </div>
      <div className="card">
        <Bar data={data}/>
      </div>
      </div>
    </div>
  );
}

export default App;