import { Serie } from './Serie.js';
import { series } from './data.js';

let coursesTbody: HTMLElement = document.getElementById('series')!;

// Renderizar las series en la tabla
renderCoursesInTable(series);

// Calcular y mostrar el promedio de temporadas
function calculateAverageSeasons(series: Serie[]): number {
    const totalSeasons = series.reduce((total, serie) => total + serie.seasons, 0);
    return totalSeasons / series.length;
}

function renderCoursesInTable(series: Serie[]): void {
    clearSeriesInTable();

    series.forEach((serie) => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${serie.id}</td>
                               <td>${serie.name}</td>
                               <td>${serie.channel}</td>
                               <td>${serie.seasons}</td>`;
        coursesTbody.appendChild(trElement);
    });

    const averageSeasons = calculateAverageSeasons(series);
    const averageRow = document.createElement("tr");
    averageRow.innerHTML = `<td colspan="3" class="text-right"><strong>Promedio de Temporadas:</strong></td>
                            <td>${averageSeasons.toFixed(2)}</td>`;
    coursesTbody.appendChild(averageRow);
}

function clearSeriesInTable() {
    while (coursesTbody.hasChildNodes()) {
        if (coursesTbody.firstChild != null) {
            coursesTbody.removeChild(coursesTbody.firstChild);
        }
    }
}
