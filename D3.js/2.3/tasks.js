  // ---------------- Дані ----------------
  const data = [
    { film: "Фільм А", start: 6.5, end: 8.2 },
    { film: "Фільм Б", start: 7.1, end: 7.8 },
    { film: "Фільм В", start: 5.9, end: 6.7 },
    { film: "Фільм Г", start: 8.3, end: 9.1 },
    { film: "Фільм Д", start: 4.2, end: 5.5 }
  ];

  const svg = d3.select("#chart");
  const width = +svg.attr("width");
  const height = +svg.attr("height");

  const margin = { top: 20, right: 20, bottom: 40, left: 80 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const g = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

  // Масштаб X (рейтинги)
  const x = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.end)]) // максимум кінцевих рейтингів
    .range([0, innerWidth]);

  // Масштаб Y (фільми)
  const y = d3.scaleBand()
    .domain(data.map(d => d.film))
    .range([0, innerHeight])
    .padding(0.2);

  // Вісь Y
  g.append("g")
    .call(d3.axisLeft(y));

  // ---------------- Початкові бари ----------------
  const bars = g.selectAll(".bar")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("y", d => y(d.film))
    .attr("height", y.bandwidth())
    .attr("width", d => x(d.start));   // ← стартові значення

  // Підписи рейтингів
  const labels = g.selectAll(".label")
    .data(data)
    .enter()
    .append("text")
    .attr("class", "label")
    .attr("y", d => y(d.film) + y.bandwidth() / 2 + 4)
    .attr("x", d => x(d.start) + 5)
    .text(d => d.start.toFixed(1));

  // ---------------- Кнопка запуску анімації ----------------
  d3.select("#start").on("click", () => {
    bars.transition()
      .duration(1500)
      .attr("width", d => x(d.end)); // анімація до кінцевого рейтингу

    labels.transition()
      .duration(1500)
      .attr("x", d => x(d.end) + 5)
      .tween("text", function(d) { 
        const node = d3.select(this);
        const i = d3.interpolate(d.start, d.end);
        return t => node.text(i(t).toFixed(1));
      });
  });